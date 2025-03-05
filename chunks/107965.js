n.d(t, { Z: () => y }), n(653041);
var r = n(544891),
    i = n(433517),
    a = n(570140),
    o = n(865427),
    l = n(710845),
    s = n(70956),
    c = n(358085),
    d = n(960048),
    u = n(998502),
    p = n(246947);
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
let f = +s.Z.Millis.HOUR,
    h = 7 * s.Z.Millis.DAY,
    g = +s.Z.Millis.DAY,
    _ = i.K.get('lastNonRequiredUpdateShown', Date.now()),
    b = (0, p.W)({ location: 'auto_update_manager' }).nativeUpdateCount,
    v = new l.Z('AutoUpdateManager');
class y {
    destroy() {
        clearInterval(this._checkInterval);
    }
    quitAndInstall() {
        this.updateAvailable && (this.hasNativeUpdate ? (null != this._bootstrapper ? this._bootstrapper.finishBootstrap() : u.ZP.send('QUIT_AND_INSTALL')) : location.reload(!0));
    }
    async _requestNewUpdaterBootstrap() {
        let e;
        v.log('Bootstrapping new updater host...');
        try {
            await u.ZP.ensureModule('discord_updater_bootstrap'), (e = u.ZP.requireModule('discord_updater_bootstrap')), (this._bootstrapper = e);
        } catch (e) {
            this._handleNativeUpdateNotAvailable();
            return;
        }
        try {
            this._handleCheckingForUpdates(), await e.bootstrap(u.ZP.releaseChannel, 'win'), (this.updateAvailable = !0), (this.hasNativeUpdate = !0), this._handleUpdateDownloaded(!0);
        } catch (e) {
            v.log('Failed to bootstrap new updater:', e), this._handleNativeUpdateNotAvailable(), d.Z.captureException(e);
        }
    }
    _emitCallbacks() {
        this._callbacks.forEach((e) => e(this.updateAvailable)), (this._callbacks = []);
    }
    constructor(e = f) {
        var t = this;
        m(this, 'updateAvailable', !1),
            m(this, 'hasNativeUpdate', !1),
            m(this, 'nativeUpdatesDownloaded', 0),
            m(this, '_checkInterval', void 0),
            m(this, '_callbacks', []),
            m(this, '_bootstrapper', null),
            m(this, 'checkForUpdates', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = 'win32' === (0, c.getPlatformName)(),
                    r = n && t.nativeUpdatesDownloaded < b;
                return (
                    (e || !t.hasNativeUpdate || r) && (c.isPlatformEmbedded ? (n && u.ZP.canBootstrapNewUpdater ? t._requestNewUpdaterBootstrap() : u.ZP.send('CHECK_FOR_UPDATES', { allowMultipleUpdates: !1 })) : t._handleNativeUpdateNotAvailable()),
                    new Promise((e) => {
                        t.updateAvailable ? e(!0) : t._callbacks.push(e);
                    })
                );
            }),
            m(this, '_handleCheckingForUpdates', () => {
                a.Z.dispatch({ type: 'CHECKING_FOR_UPDATES' });
            }),
            m(this, '_handleNativeUpdateNotAvailable', () => {
                this._handleCheckingForUpdates(),
                    r.tn
                        .get({
                            url: ''.concat(location.protocol, '//').concat(location.host).concat('/assets/', 'version.').concat(window.GLOBAL_ENV.RELEASE_CHANNEL, '.json'),
                            query: { _: (Date.now() / 1000 / 60 / 5) | 0 },
                            oldFormErrors: !0,
                            rejectWithError: !0
                        })
                        .then(
                            (e) => {
                                if (null == e.body || '7311589e5b7246bcad776d74533406deb243cb99' === e.body.hash) return this._handleUpdateNotAvailable();
                                if (e.body.required || (0, o.fD)()) return this._handleUpdateDownloaded(!1);
                                let t = 'stable' === window.GLOBAL_ENV.RELEASE_CHANNEL ? h : g;
                                if (Date.now() - _ > t) return i.K.set('lastNonRequiredUpdateShown', Date.now()), this._handleUpdateDownloaded(!1);
                            },
                            () => this._handleUpdateError()
                        );
            }),
            m(this, '_handleUpdateNotAvailable', () => {
                a.Z.dispatch({ type: 'UPDATE_NOT_AVAILABLE' }), this._emitCallbacks();
            }),
            m(this, '_handleUpdateAvailable', (e) => {
                (this.updateAvailable = !0), (this.hasNativeUpdate = e), a.Z.dispatch({ type: 'UPDATE_AVAILABLE' });
            }),
            m(this, '_handleUpdateManually', () => {
                (this.updateAvailable = !0), (this.hasNativeUpdate = !0), a.Z.dispatch({ type: 'UPDATE_MANUALLY' });
            }),
            m(this, '_handleUpdateError', (e) => {
                (this.updateAvailable = !1),
                    a.Z.dispatch({
                        type: 'UPDATE_ERROR',
                        message: e
                    });
            }),
            m(this, '_handleUpdateDownloaded', (e, t, n, r, i) => {
                e && (this.nativeUpdatesDownloaded += 1),
                    this._handleUpdateAvailable(e),
                    a.Z.dispatch({
                        type: 'UPDATE_DOWNLOADED',
                        releaseNotes: t,
                        releaseName: n,
                        releaseDate: r,
                        updateURL: i
                    }),
                    this._emitCallbacks();
            }),
            c.isPlatformEmbedded && (u.ZP.on('CHECKING_FOR_UPDATES', this._handleCheckingForUpdates), u.ZP.on('UPDATE_NOT_AVAILABLE', this._handleNativeUpdateNotAvailable), u.ZP.on('UPDATE_AVAILABLE', () => this._handleUpdateAvailable(!0)), u.ZP.on('UPDATE_ERROR', this._handleUpdateError), u.ZP.on('UPDATE_DOWNLOADED', () => this._handleUpdateDownloaded(!0)), u.ZP.on('UPDATE_MANUALLY', this._handleUpdateManually)),
            a.Z.wait(() => {
                this.checkForUpdates();
            }),
            (this._checkInterval = setInterval(this.checkForUpdates, e));
    }
}
