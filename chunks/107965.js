n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(653041);
var i = n(544891),
    r = n(433517),
    l = n(570140),
    a = n(865427),
    o = n(710845),
    s = n(70956),
    c = n(358085),
    u = n(960048),
    d = n(998502);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let h = 1 * s.Z.Millis.HOUR,
    f = 7 * s.Z.Millis.DAY,
    p = 1 * s.Z.Millis.DAY,
    _ = r.K.get('lastNonRequiredUpdateShown', Date.now()),
    g = new o.Z('AutoUpdateManager');
class E {
    destroy() {
        clearInterval(this._checkInterval);
    }
    quitAndInstall() {
        this.updateAvailable && (this.hasNativeUpdate ? (null != this._bootstrapper ? this._bootstrapper.finishBootstrap() : d.ZP.send('QUIT_AND_INSTALL')) : location.reload(!0));
    }
    async _requestNewUpdaterBootstrap() {
        let e;
        g.log('Bootstrapping new updater host...');
        try {
            await d.ZP.ensureModule('discord_updater_bootstrap'), (e = d.ZP.requireModule('discord_updater_bootstrap')), (this._bootstrapper = e);
        } catch (e) {
            this._handleNativeUpdateNotAvailable();
            return;
        }
        try {
            this._handleCheckingForUpdates(), await e.bootstrap(d.ZP.releaseChannel, 'win'), (this.updateAvailable = !0), (this.hasNativeUpdate = !0), this._handleUpdateDownloaded(!0);
        } catch (e) {
            g.log('Failed to bootstrap new updater:', e), this._handleNativeUpdateNotAvailable(), u.Z.captureException(e);
        }
    }
    _emitCallbacks() {
        this._callbacks.forEach((e) => e(this.updateAvailable)), (this._callbacks = []);
    }
    constructor(e = h) {
        var t = this;
        m(this, 'updateAvailable', !1),
            m(this, 'hasNativeUpdate', !1),
            m(this, '_checkInterval', void 0),
            m(this, '_callbacks', []),
            m(this, '_bootstrapper', null),
            m(this, 'checkForUpdates', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return (
                    (e || !t.hasNativeUpdate) && (c.isPlatformEmbedded ? ('win32' === (0, c.getPlatformName)() && d.ZP.canBootstrapNewUpdater ? t._requestNewUpdaterBootstrap() : d.ZP.send('CHECK_FOR_UPDATES')) : t._handleNativeUpdateNotAvailable()),
                    new Promise((e) => {
                        t.updateAvailable ? e(!0) : t._callbacks.push(e);
                    })
                );
            }),
            m(this, '_handleCheckingForUpdates', () => {
                l.Z.dispatch({ type: 'CHECKING_FOR_UPDATES' });
            }),
            m(this, '_handleNativeUpdateNotAvailable', () => {
                this._handleCheckingForUpdates(),
                    i.tn
                        .get({
                            url: ''.concat(location.protocol, '//').concat(location.host).concat('/assets/', 'version.').concat(window.GLOBAL_ENV.RELEASE_CHANNEL, '.json'),
                            query: { _: (Date.now() / 1000 / 60 / 5) | 0 },
                            oldFormErrors: !0,
                            rejectWithError: !0
                        })
                        .then(
                            (e) => {
                                if (null == e.body || 'b88045f27c77e3e4dc514969c4de0465af613e58' === e.body.hash) return this._handleUpdateNotAvailable();
                                if (e.body.required || (0, a.fD)()) return this._handleUpdateDownloaded(!1);
                                let t = 'stable' === window.GLOBAL_ENV.RELEASE_CHANNEL ? f : p;
                                if (Date.now() - _ > t) return r.K.set('lastNonRequiredUpdateShown', Date.now()), this._handleUpdateDownloaded(!1);
                            },
                            () => this._handleUpdateError()
                        );
            }),
            m(this, '_handleUpdateNotAvailable', () => {
                l.Z.dispatch({ type: 'UPDATE_NOT_AVAILABLE' }), this._emitCallbacks();
            }),
            m(this, '_handleUpdateAvailable', (e) => {
                (this.updateAvailable = !0), (this.hasNativeUpdate = e), l.Z.dispatch({ type: 'UPDATE_AVAILABLE' });
            }),
            m(this, '_handleUpdateManually', () => {
                (this.updateAvailable = !0), (this.hasNativeUpdate = !0), l.Z.dispatch({ type: 'UPDATE_MANUALLY' });
            }),
            m(this, '_handleUpdateError', (e) => {
                (this.updateAvailable = !1),
                    l.Z.dispatch({
                        type: 'UPDATE_ERROR',
                        message: e
                    });
            }),
            m(this, '_handleUpdateDownloaded', (e, t, n, i, r) => {
                this._handleUpdateAvailable(e),
                    l.Z.dispatch({
                        type: 'UPDATE_DOWNLOADED',
                        releaseNotes: t,
                        releaseName: n,
                        releaseDate: i,
                        updateURL: r
                    }),
                    this._emitCallbacks();
            }),
            c.isPlatformEmbedded && (d.ZP.on('CHECKING_FOR_UPDATES', this._handleCheckingForUpdates), d.ZP.on('UPDATE_NOT_AVAILABLE', this._handleNativeUpdateNotAvailable), d.ZP.on('UPDATE_AVAILABLE', () => this._handleUpdateAvailable(!0)), d.ZP.on('UPDATE_ERROR', this._handleUpdateError), d.ZP.on('UPDATE_DOWNLOADED', () => this._handleUpdateDownloaded(!0)), d.ZP.on('UPDATE_MANUALLY', this._handleUpdateManually)),
            l.Z.wait(() => {
                this.checkForUpdates();
            }),
            (this._checkInterval = setInterval(this.checkForUpdates, e));
    }
}
