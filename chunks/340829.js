"use strict";
n.d(t, { A: () => F }), n(142703);
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(77729),
    l = n(626584),
    d = n(723702);
let _ = new l.A("ProgressBarManager"),
    u = new (class {
        taskID;
        setProgress(e, t) {
            if (!(0, d.isDesktop)()) throw Error("cannot set progress from non-native");
            null != this.taskID && this.taskID !== e
                ? _.warn(`${this.taskID} is already running. cannot set ${e}`)
                : ((this.taskID = e), o.A.window.setProgressBar(t));
        }
        clearProgress(e) {
            if (!(0, d.isDesktop)()) throw Error("cannot clear progress from non-native");
            null == this.taskID
                ? _.warn("cannot clear progress. No current progress running.")
                : this.taskID !== e
                  ? _.warn(`cannot clear progress of ${e} when ${this.taskID} is running`)
                  : ((this.taskID = null), o.A.window.setProgressBar(-1));
        }
    })();
var c = n(495544),
    E = n(189081),
    h = n(645243),
    m = n(927813),
    f = n(674378),
    g = n(144914),
    p = n(966846),
    A = n(775228),
    I = n(652215);
let T = +m.A.Millis.MINUTE,
    S = {},
    N = "file://",
    C = !1,
    R = 0,
    O = 0,
    y = 0,
    v = [],
    D = [],
    L = [],
    b = !1;
function w(e) {
    return e.type === I.WTw.INSTALLING || e.type === I.WTw.UPDATING || e.type === I.WTw.REPAIRING
        ? e.networkProgress
        : null;
}
function P(e) {
    return e.type === I.WTw.INSTALLING || e.type === I.WTw.UPDATING || e.type === I.WTw.REPAIRING
        ? e.diskProgress
        : null;
}
function k(e) {
    return e.type === I.WTw.INSTALLING || e.type === I.WTw.UPDATING || e.type === I.WTw.REPAIRING
        ? e.readerProgress
        : null;
}
let M = r().throttle(function (e) {
        D = (D = [{ bytes: e, timestamp: Date.now() }, ...D]).slice(0, 200);
    }, 200),
    U = r().throttle(function (e) {
        let t = Date.now(),
            n = t - T;
        v = (v = [{ bytes: e, timestamp: t }, ...v]).slice(0, 200).filter((e) => {
            let { timestamp: t } = e;
            return t >= n;
        });
    }, 200),
    x = r().throttle(function (e) {
        L = (L = [{ bytes: e, timestamp: Date.now() }, ...L]).slice(0, 200);
    }, 200);
function G(e, t, n) {
    let i = n(S[t]),
        r = n(e[t]);
    return null != i && null != r && 0 !== i ? Math.max(r - i, 0) : 0;
}
class V extends s.Ay.Store {
    static displayName = "DispatchApplicationStore";
    initialize() {
        this.waitFor(c.default);
    }
    getState(e, t) {
        return S[(0, f.gW)(e, t)];
    }
    isUpToDate(e, t) {
        let n = S[(0, f.gW)(e, t)];
        return null != n && n.type === I.WTw.UP_TO_DATE;
    }
    shouldPatch(e, t) {
        let n = S[(0, f.gW)(e, t)];
        return null != n && !0 === n.shouldPatch;
    }
    isInstalled(e, t) {
        let n = S[(0, f.gW)(e, t)];
        return null != n ? n.type !== I.WTw.UNINSTALLING : A.A.shouldBeInstalled(e, t);
    }
    supportsCloudSync(e, t) {
        null == t && (t = e);
        let n = S[(0, f.gW)(e, t)];
        return null != n && null != n.storage && !!n.storage.sync;
    }
    isLaunchable(e, t) {
        if (!(0, g.S)()) return !1;
        let n = S[(0, f.gW)(e, t)];
        return null != n && n.type === I.WTw.UP_TO_DATE && null != n.launchOptions && 0 !== n.launchOptions.length;
    }
    getDefaultLaunchOption(e, t) {
        let n = S[(0, f.gW)(e, t)];
        if (null == n) return null;
        let { defaultLaunchOptionId: i, launchOptions: r } = n;
        return null == i || null == r ? null : r[i];
    }
    getLaunchOptions(e, t) {
        let n = S[(0, f.gW)(e, t)];
        return null == n || null == n.launchOptions ? [] : Object.values(n.launchOptions);
    }
    getHistoricalTotalBytesRead() {
        return v;
    }
    getHistoricalTotalBytesDownloaded() {
        return D;
    }
    getHistoricalTotalBytesWritten() {
        return L;
    }
    whenInitialized(e) {
        this.addConditionalChangeListener(() => {
            if (C) return setImmediate(e), !1;
        });
    }
}
let F = new V(a.h, {
    CONNECTION_OPEN: function () {
        C = !1;
    },
    DISPATCH_APPLICATION_STATE_UPDATE: function (e) {
        let { state: t } = e;
        C = !0;
        let n = {},
            i = t.applications,
            s = null != t.currentTask ? t.currentTask.branchId : null,
            l = !1;
        for (let e in i)
            for (let t in i[e]) {
                let _ = (0, f.gW)(e, t);
                if (
                    ((n[_] = (function (e) {
                        let {
                                build_id: t,
                                target_build_id: n,
                                manifest_ids: i,
                                target_manifest_ids: s,
                                application_id: a,
                                branch_id: l,
                                launch_commands: _,
                                launch_options: u,
                                storage: c,
                                install_path: E,
                                installed_size: m,
                                repairing: f,
                            } = e,
                            { should_patch: g } = e;
                        switch ((null == g && (g = !0), e.state.type)) {
                            case I.l6E.COMPLETE: {
                                let e,
                                    A = {},
                                    T = null;
                                if (f) e = I.WTw.REPAIRING;
                                else if (null == t) e = I.WTw.INSTALL_REQUIRED;
                                else if (g && (t !== n || (null != i && 0 !== r().difference(i, s).length)))
                                    e = I.WTw.UPDATE_REQUIRED;
                                else if (((e = I.WTw.UP_TO_DATE), null != E)) {
                                    let e = o.A.fileManager.join(E, "content"),
                                        t = (0, h.O)();
                                    if (null != u && 0 !== u.length) {
                                        var p;
                                        for (let n of (t !== I.lM6.WIN64 ||
                                            ((p = t), u.some((e) => e.platforms.includes(p))) ||
                                            (t = I.lM6.WIN32),
                                        u))
                                            if (n.platforms.includes(t)) {
                                                let t,
                                                    { executable: i, name: r, working_dir: s } = n,
                                                    a = o.A.fileManager.join(e, i);
                                                (0, d.isMac)() && !a.startsWith(N) && (a = `${N}${a}`),
                                                    (t =
                                                        null != s
                                                            ? o.A.fileManager.join(e, s)
                                                            : o.A.fileManager.dirname(a)),
                                                    (A[r] = { ...n, id: r, fullExecutablePath: a, fullWorkingDir: t }),
                                                    null == T && (T = r);
                                            }
                                    } else if (null != _) {
                                        t === I.lM6.WIN64 && null == _[t] && (t = I.lM6.WIN32);
                                        let n = _[t];
                                        if (null != n) {
                                            let { executable: i } = n,
                                                r = "Default";
                                            (A[r] = {
                                                ...n,
                                                name: r,
                                                id: r,
                                                fullExecutablePath: o.A.fileManager.join(e, i),
                                                fullWorkingDir: e,
                                                platforms: [t],
                                            }),
                                                (T = r);
                                        }
                                    }
                                }
                                return {
                                    type: e,
                                    applicationId: a,
                                    branchId: l,
                                    buildId: t,
                                    manifestIds: i,
                                    targetBuildId: n,
                                    targetManifestIds: s,
                                    installPath: E,
                                    installedSize: m,
                                    launchOptions: A,
                                    defaultLaunchOptionId: T,
                                    shouldPatch: g,
                                    storage: c,
                                };
                            }
                            case I.l6E.TRANSITION: {
                                let {
                                        stage: r,
                                        disk_progress: o,
                                        network_progress: d,
                                        reader_progress: _,
                                        progress: u,
                                        total: c,
                                        paused: h,
                                    } = e.state,
                                    p = r.type;
                                return {
                                    type:
                                        p === I.OQC.UNINSTALLING
                                            ? I.WTw.UNINSTALLING
                                            : f
                                              ? I.WTw.REPAIRING
                                              : null == t
                                                ? I.WTw.INSTALLING
                                                : I.WTw.UPDATING,
                                    stage: p,
                                    applicationId: a,
                                    branchId: l,
                                    buildId: t,
                                    manifestIds: i,
                                    targetBuildId: n,
                                    targetManifestIds: s,
                                    installPath: E,
                                    installedSize: m,
                                    diskProgress: o,
                                    networkProgress: d,
                                    readerProgress: _,
                                    progress: u,
                                    total: c,
                                    paused: h,
                                    shouldPatch: g,
                                };
                            }
                        }
                        throw Error(`Invalid Dispatch State. state=${e.state.type}`);
                    })(i[e][t])),
                    null != S[_])
                ) {
                    let e = G(n, _, w);
                    e > 0 && M((R += e));
                    let i = G(n, _, P);
                    i > 0 && x((O += i));
                    let r = G(n, _, k);
                    if ((r > 0 && U((y += r)), s === t)) {
                        let e = n[_];
                        if (
                            !0 !== e.paused &&
                            (e.type === I.WTw.UNINSTALLING || e.type === I.WTw.INSTALLING || e.type === I.WTw.UPDATING)
                        )
                            switch (e.stage) {
                                case I.OQC.PATCHING:
                                case I.OQC.FINALIZING:
                                case I.OQC.VERIFYING:
                                case I.OQC.REPAIRING:
                                case I.OQC.POST_INSTALL_SCRIPTS:
                                    u.setProgress(
                                        "dispatch_application_progress",
                                        (0, f.uA)(e.progress, e.total) / 100,
                                    ),
                                        (l = !0);
                            }
                    }
                }
                if (!b) {
                    let i = o.A.fileManager.dirname(n[_].installPath);
                    A.A.getInstallationPath(e, t) !== i &&
                        a.h.wait(() => {
                            a.h.dispatch({
                                type: "DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS",
                                applicationId: e,
                                branchId: t,
                                installationPath: i,
                            });
                        }),
                        -1 === p.A.getQueuePosition(e, t) &&
                            (n[_].type === I.WTw.INSTALLING || n[_].type === I.WTw.UPDATING) &&
                            E.A.hasApplication(e, t) &&
                            A.A.shouldBeInstalled(e, t) &&
                            a.h.wait(() => {
                                a.h.dispatch({
                                    type: "DISPATCH_APPLICATION_UPDATE",
                                    applicationId: e,
                                    branchId: t,
                                    automatic: !0,
                                });
                            });
                }
            }
        l || "dispatch_application_progress" !== u.taskID || u.clearProgress("dispatch_application_progress"),
            (S = n),
            (b = !0);
    },
});
