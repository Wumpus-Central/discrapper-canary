n.d(t, { Z: () => b }), n(653041);
var r = n(544891),
    i = n(433517),
    a = n(570140),
    o = n(865427),
    l = n(710845),
    s = n(70956),
    c = n(358085),
    d = n(960048),
    u = n(998502);
function p(e, t, n) {
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
let m = +s.Z.Millis.HOUR,
    f = 7 * s.Z.Millis.DAY,
    h = +s.Z.Millis.DAY,
    g = i.K.get('lastNonRequiredUpdateShown', Date.now()),
    _ = new l.Z('AutoUpdateManager');
class b {
    destroy() {
        clearInterval(this._checkInterval);
    }
    quitAndInstall() {
        this.updateAvailable && (this.hasNativeUpdate ? (null != this._bootstrapper ? this._bootstrapper.finishBootstrap() : u.ZP.send('QUIT_AND_INSTALL')) : location.reload(!0));
    }
    async _requestNewUpdaterBootstrap() {
        let e;
        _.log('Bootstrapping new updater host...');
        try {
            await u.ZP.ensureModule('discord_updater_bootstrap'), (e = u.ZP.requireModule('discord_updater_bootstrap')), (this._bootstrapper = e);
        } catch (e) {
            this._handleNativeUpdateNotAvailable();
            return;
        }
        try {
            this._handleCheckingForUpdates(), await e.bootstrap(u.ZP.releaseChannel, 'win'), (this.updateAvailable = !0), (this.hasNativeUpdate = !0), this._handleUpdateDownloaded(!0);
        } catch (e) {
            _.log('Failed to bootstrap new updater:', e), this._handleNativeUpdateNotAvailable(), d.Z.captureException(e);
        }
    }
    _emitCallbacks() {
        this._callbacks.forEach((e) => e(this.updateAvailable)), (this._callbacks = []);
    }
    constructor(e = m) {
        var t = this;
        p(this, 'updateAvailable', !1),
            p(this, 'hasNativeUpdate', !1),
            p(this, 'nativeUpdatesDownloaded', 0),
            p(this, '_checkInterval', void 0),
            p(this, '_callbacks', []),
            p(this, '_bootstrapper', null),
            p(this, 'checkForUpdates', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = 'win32' === (0, c.getPlatformName)(),
                    r = n && t.nativeUpdatesDownloaded < 1;
                return (
                    (e || !t.hasNativeUpdate || r) && (c.isPlatformEmbedded ? (n && u.ZP.canBootstrapNewUpdater ? t._requestNewUpdaterBootstrap() : u.ZP.send('CHECK_FOR_UPDATES', { allowMultipleUpdates: !1 })) : t._handleNativeUpdateNotAvailable()),
                    new Promise((e) => {
                        t.updateAvailable ? e(!0) : t._callbacks.push(e);
                    })
                );
            }),
            p(this, '_handleCheckingForUpdates', () => {
                a.Z.dispatch({ type: 'CHECKING_FOR_UPDATES' });
            }),
            p(this, '_handleNativeUpdateNotAvailable', () => {
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
                                if (null == e.body || '87242b0118890b28f8473160cbfd1665569c2977' === e.body.hash) return this._handleUpdateNotAvailable();
                                if (e.body.required || (0, o.fD)()) return this._handleUpdateDownloaded(!1);
                                let t = 'stable' === window.GLOBAL_ENV.RELEASE_CHANNEL ? f : h;
                                if (Date.now() - g > t) return i.K.set('lastNonRequiredUpdateShown', Date.now()), this._handleUpdateDownloaded(!1);
                            },
                            () => this._handleUpdateError()
                        );
            }),
            p(this, '_handleUpdateNotAvailable', () => {
                a.Z.dispatch({ type: 'UPDATE_NOT_AVAILABLE' }), this._emitCallbacks();
            }),
            p(this, '_handleUpdateAvailable', (e) => {
                (this.updateAvailable = !0), (this.hasNativeUpdate = e), a.Z.dispatch({ type: 'UPDATE_AVAILABLE' });
            }),
            p(this, '_handleUpdateManually', () => {
                (this.updateAvailable = !0), (this.hasNativeUpdate = !0), a.Z.dispatch({ type: 'UPDATE_MANUALLY' });
            }),
            p(this, '_handleUpdateError', (e) => {
                (this.updateAvailable = !1),
                    a.Z.dispatch({
                        type: 'UPDATE_ERROR',
                        message: e
                    });
            }),
            p(this, '_handleUpdateDownloaded', (e, t, n, r, i) => {
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
