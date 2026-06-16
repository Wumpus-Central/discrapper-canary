"use strict";
n.d(t, { A: () => I }), n(321073);
var i = n(636537),
    r = n(506774),
    s = n(228366),
    a = n(439372),
    o = n(380610),
    l = n(626584),
    u = n(927813),
    c = n(723702),
    d = n(38405),
    _ = n(19575);
let h = +u.A.Millis.HOUR,
    f = 7 * u.A.Millis.DAY,
    p = +u.A.Millis.DAY,
    E = r.w.get("lastNonRequiredUpdateShown", Date.now()),
    m = ["win", "osx"],
    g = new l.A("AutoUpdateManager");
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
        c.isPlatformEmbedded &&
            (_.Ay.on("CHECKING_FOR_UPDATES", this._handleCheckingForUpdates),
            _.Ay.on("UPDATE_NOT_AVAILABLE", this._handleNativeUpdateNotAvailable),
            _.Ay.on("UPDATE_AVAILABLE", () => this._handleUpdateAvailable(!0)),
            _.Ay.on("UPDATE_ERROR", this._handleUpdateError),
            _.Ay.on("UPDATE_DOWNLOADED", () => this._handleUpdateDownloaded(!0)),
            _.Ay.on("UPDATE_MANUALLY", this._handleUpdateManually));
    }
    _terminate() {
        clearInterval(this._checkInterval);
    }
    quitAndInstall() {
        this.updateAvailable &&
            (this.nativeUpdateAvailable
                ? null != this._bootstrapper
                    ? this._bootstrapper.finishBootstrap()
                    : _.Ay.send("QUIT_AND_INSTALL")
                : location.reload(!0));
    }
    isNewUpdater() {
        return m.includes((0, c.getNewUpdaterPlatformName)() ?? "");
    }
    canBootstrapNewUpdater() {
        return "win32" === (0, c.getPlatformName)();
    }
    handlePostConnectionOpen() {
        this.checkForUpdates(),
            clearInterval(this._checkInterval),
            (this._checkInterval = setInterval(this.checkForUpdates, h));
    }
    checkForUpdates = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                n = e.isNewUpdater() && e.nativeUpdatesDownloaded < e.nativeUpdateCountThreshold;
            return (
                (t || !e.nativeUpdateAvailable || n) &&
                    (c.isPlatformEmbedded
                        ? e.canBootstrapNewUpdater() && _.Ay.canBootstrapNewUpdater
                            ? e._requestNewUpdaterBootstrap()
                            : _.Ay.send("CHECK_FOR_UPDATES", { allowMultipleUpdates: !1 })
                        : e._handleNativeUpdateNotAvailable()),
                new Promise((t) => {
                    e.updateAvailable ? t(!0) : e._callbacks.push(t);
                })
            );
        };
    })();
    async _requestNewUpdaterBootstrap() {
        let e;
        g.log("Bootstrapping new updater host...");
        try {
            await _.Ay.ensureModule("discord_updater_bootstrap"),
                (e = _.Ay.requireModule("discord_updater_bootstrap")),
                (this._bootstrapper = e);
        } catch (e) {
            this._handleNativeUpdateNotAvailable();
            return;
        }
        try {
            this._handleCheckingForUpdates(),
                await e.bootstrap(_.Ay.releaseChannel, "win"),
                (this.updateAvailable = !0),
                (this.nativeUpdateAvailable = !0),
                this._handleUpdateDownloaded(!0);
        } catch (e) {
            g.log("Failed to bootstrap new updater:", e),
                this._handleNativeUpdateNotAvailable(),
                d.A.captureException(e);
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
                    if (null == e.body || "ca7cb477e5f46133bb3f0eba97731ee2d4b4b463" === e.body.hash)
                        return this._handleUpdateNotAvailable();
                    if (e.body.required || (0, o.kK)()) return this._handleUpdateDownloaded(!1);
                    let t = "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL ? f : p;
                    if (Date.now() - E > t)
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
