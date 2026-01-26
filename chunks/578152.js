n.d(t, {
    A: () => b,
}),
    n(896048),
    n(321073);
var r = n(562465),
    i = n(506774),
    a = n(73153),
    s = n(439372),
    o = n(380610),
    l = n(626584),
    c = n(927813),
    u = n(723702),
    d = n(728458),
    f = n(837921);

function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let _ = +c.A.Millis.HOUR,
    h = 7 * c.A.Millis.DAY,
    m = +c.A.Millis.DAY,
    g = i.w.get("lastNonRequiredUpdateShown", Date.now()),
    E = new l.A("AutoUpdateManager");
class y extends s.A {
    _initialize() {
        u.isPlatformEmbedded &&
            (f.Ay.on("CHECKING_FOR_UPDATES", this._handleCheckingForUpdates),
            f.Ay.on("UPDATE_NOT_AVAILABLE", this._handleNativeUpdateNotAvailable),
            f.Ay.on("UPDATE_AVAILABLE", () => this._handleUpdateAvailable(!0)),
            f.Ay.on("UPDATE_ERROR", this._handleUpdateError),
            f.Ay.on("UPDATE_DOWNLOADED", () => this._handleUpdateDownloaded(!0)),
            f.Ay.on("UPDATE_MANUALLY", this._handleUpdateManually));
    }
    _terminate() {
        clearInterval(this._checkInterval);
    }
    quitAndInstall() {
        this.updateAvailable &&
            (this.nativeUpdateAvailable
                ? null != this._bootstrapper
                    ? this._bootstrapper.finishBootstrap()
                    : f.Ay.send("QUIT_AND_INSTALL")
                : location.reload(!0));
    }
    isNewUpdater() {
        return "win32" === (0, u.getPlatformName)();
    }
    handlePostConnectionOpen() {
        this.checkForUpdates(),
            clearInterval(this._checkInterval),
            (this._checkInterval = setInterval(this.checkForUpdates, _));
    }
    async _requestNewUpdaterBootstrap() {
        let e;
        E.log("Bootstrapping new updater host...");
        try {
            await f.Ay.ensureModule("discord_updater_bootstrap"),
                (e = f.Ay.requireModule("discord_updater_bootstrap")),
                (this._bootstrapper = e);
        } catch (e) {
            this._handleNativeUpdateNotAvailable();
            return;
        }
        try {
            this._handleCheckingForUpdates(),
                await e.bootstrap(f.Ay.releaseChannel, "win"),
                (this.updateAvailable = !0),
                (this.nativeUpdateAvailable = !0),
                this._handleUpdateDownloaded(!0);
        } catch (e) {
            E.log("Failed to bootstrap new updater:", e),
                this._handleNativeUpdateNotAvailable(),
                d.A.captureException(e);
        }
    }
    _emitCallbacks() {
        this._callbacks.forEach((e) => e(this.updateAvailable)), (this._callbacks = []);
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            p(this, "_checkInterval", null),
            p(this, "_callbacks", []),
            p(this, "_bootstrapper", null),
            p(this, "updateAvailable", !1),
            p(this, "nativeUpdateAvailable", !1),
            p(this, "nativeUpdatesDownloaded", 0),
            p(this, "nativeUpdateCountThreshold", 3),
            p(this, "actions", {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
                AUTO_UPDATER_QUIT_AND_INSTALL: () => this.quitAndInstall(),
            }),
            p(this, "checkForUpdates", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = t.isNewUpdater(),
                    r = n && t.nativeUpdatesDownloaded < t.nativeUpdateCountThreshold;
                return (
                    (e || !t.nativeUpdateAvailable || r) &&
                        (u.isPlatformEmbedded
                            ? n && f.Ay.canBootstrapNewUpdater
                                ? t._requestNewUpdaterBootstrap()
                                : f.Ay.send("CHECK_FOR_UPDATES", {
                                      allowMultipleUpdates: !1,
                                  })
                            : t._handleNativeUpdateNotAvailable()),
                    new Promise((e) => {
                        t.updateAvailable ? e(!0) : t._callbacks.push(e);
                    })
                );
            }),
            p(this, "_handleCheckingForUpdates", () => {
                a.h.dispatch({
                    type: "CHECKING_FOR_UPDATES",
                });
            }),
            p(this, "_handleNativeUpdateNotAvailable", () => {
                this._handleCheckingForUpdates(),
                    r.Bo.get({
                        url: ""
                            .concat(location.protocol, "//")
                            .concat(location.host)
                            .concat("/assets/", "version.")
                            .concat(window.GLOBAL_ENV.RELEASE_CHANNEL, ".json"),
                        query: {
                            _: (Date.now() / 1e3 / 60 / 5) | 0,
                        },
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    }).then(
                        (e) => {
                            if (null == e.body || "ea49cabb21fad909d38c0c8524dd5b0c3e41f2ba" === e.body.hash)
                                return this._handleUpdateNotAvailable();
                            if (e.body.required || (0, o.kK)()) return this._handleUpdateDownloaded(!1);
                            let t = "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL ? h : m;
                            if (Date.now() - g > t)
                                return (
                                    i.w.set("lastNonRequiredUpdateShown", Date.now()), this._handleUpdateDownloaded(!1)
                                );
                        },
                        () => this._handleUpdateError(),
                    );
            }),
            p(this, "_handleUpdateNotAvailable", () => {
                a.h.dispatch({
                    type: "UPDATE_NOT_AVAILABLE",
                }),
                    this._emitCallbacks();
            }),
            p(this, "_handleUpdateAvailable", (e) => {
                (this.updateAvailable = !0),
                    (this.nativeUpdateAvailable = e),
                    a.h.dispatch({
                        type: "UPDATE_AVAILABLE",
                    });
            }),
            p(this, "_handleUpdateManually", () => {
                (this.updateAvailable = !0),
                    (this.nativeUpdateAvailable = !0),
                    a.h.dispatch({
                        type: "UPDATE_MANUALLY",
                    });
            }),
            p(this, "_handleUpdateError", (e) => {
                (this.updateAvailable = !1),
                    a.h.dispatch({
                        type: "UPDATE_ERROR",
                        message: e,
                    });
            }),
            p(this, "_handleUpdateDownloaded", (e, t, n, r, i) => {
                e && (this.nativeUpdatesDownloaded += 1),
                    this._handleUpdateAvailable(e),
                    a.h.dispatch({
                        type: "UPDATE_DOWNLOADED",
                        releaseNotes: t,
                        releaseName: n,
                        releaseDate: r,
                        updateURL: i,
                    }),
                    this._emitCallbacks();
            });
    }
}
let b = new y();
