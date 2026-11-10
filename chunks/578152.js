n(321073);
var i = n(620632),
    r = n(506774),
    a = n(73153),
    s = n(439372),
    l = n(380610),
    o = n(626584),
    d = n(927813),
    c = n(723702),
    u = n(253400);
let _ = +d.A.Millis.HOUR,
    E = 7 * d.A.Millis.DAY,
    A = +d.A.Millis.DAY,
    f = r.w.get("lastNonRequiredUpdateShown", Date.now()),
    h = ["win", "osx"],
    I = new o.A("AutoUpdateManager");
class p extends s.A {
    _checkInterval = null;
    _callbacks = [];
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
            (u.Ay.on("CHECKING_FOR_UPDATES", this._handleCheckingForUpdates),
            u.Ay.on("UPDATE_NOT_AVAILABLE", this._handleNativeUpdateNotAvailable),
            u.Ay.on("UPDATE_AVAILABLE", () => this._handleUpdateAvailable(!0)),
            u.Ay.on("UPDATE_ERROR", this._handleUpdateError),
            u.Ay.on("UPDATE_DOWNLOADED", () => this._handleUpdateDownloaded(!0)),
            u.Ay.on("UPDATE_MANUALLY", this._handleUpdateManually));
    }
    _terminate() {
        clearInterval(this._checkInterval);
    }
    quitAndInstall() {
        this.updateAvailable &&
            (this.nativeUpdateAvailable
                ? (r.w.set("discord_update_restart_timestamp", Date.now().toString()),
                  u.Ay.flushStorageData()
                      .catch((e) => I.warn("Failed to flush storage before update restart", e))
                      .finally(() => {
                          u.Ay.send("QUIT_AND_INSTALL");
                      }))
                : location.reload(!0));
    }
    isNewUpdater() {
        return h.includes((0, c.cZ)() ?? "");
    }
    handlePostConnectionOpen() {
        (this.checkForUpdates(),
            clearInterval(this._checkInterval),
            (this._checkInterval = setInterval(this.checkForUpdates, _)));
    }
    checkForUpdates = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (c.isPlatformEmbedded && !u.Ay.hasUpdater) return Promise.resolve(!1);
            let n = e.isNewUpdater() && e.nativeUpdatesDownloaded < e.nativeUpdateCountThreshold;
            return (
                (t || !e.nativeUpdateAvailable || n) &&
                    (c.isPlatformEmbedded
                        ? u.Ay.send("CHECK_FOR_UPDATES", { allowMultipleUpdates: !1 })
                        : e._handleNativeUpdateNotAvailable()),
                new Promise((t) => {
                    e.updateAvailable ? t(!0) : e._callbacks.push(t);
                })
            );
        };
    })();
    _emitCallbacks() {
        (this._callbacks.forEach((e) => e(this.updateAvailable)), (this._callbacks = []));
    }
    _handleCheckingForUpdates = () => {
        a.h.dispatch({ type: "CHECKING_FOR_UPDATES" });
    };
    _handleNativeUpdateNotAvailable = () => {
        (this._handleCheckingForUpdates(),
            i.Bo.get({
                url: `${location.protocol}//${location.host}/assets/version.${window.GLOBAL_ENV.RELEASE_CHANNEL}.json`,
                query: { _: (Date.now() / 1e3 / 60 / 5) | 0 },
                oldFormErrors: !0,
                rejectWithError: !0,
            }).then(
                (e) => {
                    if (null == e.body || "bfe5c4756d5f305b20cdb167e599b6fbb2aaf94d" === e.body.hash)
                        return this._handleUpdateNotAvailable();
                    if (e.body.required || (0, l.kK)()) return this._handleUpdateDownloaded(!1);
                    let t = "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL ? E : A;
                    if (Date.now() - f > t)
                        return (r.w.set("lastNonRequiredUpdateShown", Date.now()), this._handleUpdateDownloaded(!1));
                },
                () => this._handleUpdateError(),
            ));
    };
    _handleUpdateNotAvailable = () => {
        (a.h.dispatch({ type: "UPDATE_NOT_AVAILABLE" }), this._emitCallbacks());
    };
    _handleUpdateAvailable = (e) => {
        ((this.updateAvailable = !0), (this.nativeUpdateAvailable = e), a.h.dispatch({ type: "UPDATE_AVAILABLE" }));
    };
    _handleUpdateManually = () => {
        ((this.updateAvailable = !0), (this.nativeUpdateAvailable = !0), a.h.dispatch({ type: "UPDATE_MANUALLY" }));
    };
    _handleUpdateError = (e) => {
        ((this.updateAvailable = !1), a.h.dispatch({ type: "UPDATE_ERROR", message: e }));
    };
    _handleUpdateDownloaded = (e, t, n, i, r) => {
        (e && (this.nativeUpdatesDownloaded += 1),
            this._handleUpdateAvailable(e),
            a.h.dispatch({ type: "UPDATE_DOWNLOADED", releaseNotes: t, releaseName: n, releaseDate: i, updateURL: r }),
            this._emitCallbacks());
    };
}
let m = new p();
n.d(t, {}, { A: m });
