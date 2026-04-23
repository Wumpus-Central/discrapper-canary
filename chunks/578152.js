"use strict";
n.d(t, { A: () => I }), n(321073);
var i = n(636537),
    r = n(506774),
    s = n(228366),
    a = n(439372),
    o = n(380610),
    l = n(626584),
    d = n(927813),
    _ = n(723702),
    u = n(38405),
    c = n(19575);
let E = +d.A.Millis.HOUR,
    h = 7 * d.A.Millis.DAY,
    m = +d.A.Millis.DAY,
    f = r.w.get("lastNonRequiredUpdateShown", Date.now()),
    g = ["win", "osx"],
    p = new l.A("AutoUpdateManager");
class A extends a.A {
    _checkInterval = null;
    _callbacks = [];
    _bootstrapper = null;
    updateAvailable = !1;
    nativeUpdateAvailable = !1;
    nativeUpdatesDownloaded = 0;
    nativeUpdateCountThreshold = 3;
    actions = {
        POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
        AUTO_UPDATER_QUIT_AND_INSTALL: () => this.quitAndInstall(),
    };
    _initialize() {
        _.isPlatformEmbedded &&
            (c.Ay.on("CHECKING_FOR_UPDATES", this._handleCheckingForUpdates),
            c.Ay.on("UPDATE_NOT_AVAILABLE", this._handleNativeUpdateNotAvailable),
            c.Ay.on("UPDATE_AVAILABLE", () => this._handleUpdateAvailable(!0)),
            c.Ay.on("UPDATE_ERROR", this._handleUpdateError),
            c.Ay.on("UPDATE_DOWNLOADED", () => this._handleUpdateDownloaded(!0)),
            c.Ay.on("UPDATE_MANUALLY", this._handleUpdateManually));
    }
    _terminate() {
        clearInterval(this._checkInterval);
    }
    quitAndInstall() {
        this.updateAvailable &&
            (this.nativeUpdateAvailable
                ? null != this._bootstrapper
                    ? this._bootstrapper.finishBootstrap()
                    : c.Ay.send("QUIT_AND_INSTALL")
                : location.reload(!0));
    }
    isNewUpdater() {
        return g.includes((0, _.getNewUpdaterPlatformName)() ?? "");
    }
    canBootstrapNewUpdater() {
        return "win32" === (0, _.getPlatformName)();
    }
    handlePostConnectionOpen() {
        this.checkForUpdates(),
            clearInterval(this._checkInterval),
            (this._checkInterval = setInterval(this.checkForUpdates, E));
    }
    checkForUpdates = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                n = e.isNewUpdater() && e.nativeUpdatesDownloaded < e.nativeUpdateCountThreshold;
            return (
                (t || !e.nativeUpdateAvailable || n) &&
                    (_.isPlatformEmbedded
                        ? e.canBootstrapNewUpdater() && c.Ay.canBootstrapNewUpdater
                            ? e._requestNewUpdaterBootstrap()
                            : c.Ay.send("CHECK_FOR_UPDATES", { allowMultipleUpdates: !1 })
                        : e._handleNativeUpdateNotAvailable()),
                new Promise((t) => {
                    e.updateAvailable ? t(!0) : e._callbacks.push(t);
                })
            );
        };
    })();
    async _requestNewUpdaterBootstrap() {
        let e;
        p.log("Bootstrapping new updater host...");
        try {
            await c.Ay.ensureModule("discord_updater_bootstrap"),
                (e = c.Ay.requireModule("discord_updater_bootstrap")),
                (this._bootstrapper = e);
        } catch (e) {
            this._handleNativeUpdateNotAvailable();
            return;
        }
        try {
            this._handleCheckingForUpdates(),
                await e.bootstrap(c.Ay.releaseChannel, "win"),
                (this.updateAvailable = !0),
                (this.nativeUpdateAvailable = !0),
                this._handleUpdateDownloaded(!0);
        } catch (e) {
            p.log("Failed to bootstrap new updater:", e),
                this._handleNativeUpdateNotAvailable(),
                u.A.captureException(e);
        }
    }
    _emitCallbacks() {
        this._callbacks.forEach((e) => e(this.updateAvailable)), (this._callbacks = []);
    }
    _handleCheckingForUpdates = () => {
        s.h.dispatch({ type: "CHECKING_FOR_UPDATES" });
    };
    _handleNativeUpdateNotAvailable = () => {
        this._handleCheckingForUpdates(),
            i.Bo.get({
                url: `${location.protocol}//${location.host}/assets/version.${window.GLOBAL_ENV.RELEASE_CHANNEL}.json`,
                query: { _: (Date.now() / 1e3 / 60 / 5) | 0 },
                oldFormErrors: !0,
                rejectWithError: !0,
            }).then(
                (e) => {
                    if (null == e.body || "1b403b4f4bffbbc8fc15861878618cd7c2479e24" === e.body.hash)
                        return this._handleUpdateNotAvailable();
                    if (e.body.required || (0, o.kK)()) return this._handleUpdateDownloaded(!1);
                    let t = "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL ? h : m;
                    if (Date.now() - f > t)
                        return r.w.set("lastNonRequiredUpdateShown", Date.now()), this._handleUpdateDownloaded(!1);
                },
                () => this._handleUpdateError(),
            );
    };
    _handleUpdateNotAvailable = () => {
        s.h.dispatch({ type: "UPDATE_NOT_AVAILABLE" }), this._emitCallbacks();
    };
    _handleUpdateAvailable = (e) => {
        (this.updateAvailable = !0), (this.nativeUpdateAvailable = e), s.h.dispatch({ type: "UPDATE_AVAILABLE" });
    };
    _handleUpdateManually = () => {
        (this.updateAvailable = !0), (this.nativeUpdateAvailable = !0), s.h.dispatch({ type: "UPDATE_MANUALLY" });
    };
    _handleUpdateError = (e) => {
        (this.updateAvailable = !1), s.h.dispatch({ type: "UPDATE_ERROR", message: e });
    };
    _handleUpdateDownloaded = (e, t, n, i, r) => {
        e && (this.nativeUpdatesDownloaded += 1),
            this._handleUpdateAvailable(e),
            s.h.dispatch({ type: "UPDATE_DOWNLOADED", releaseNotes: t, releaseName: n, releaseDate: i, updateURL: r }),
            this._emitCallbacks();
    };
}
let I = new A();
