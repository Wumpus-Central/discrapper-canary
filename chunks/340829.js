"use strict";
n.d(t, { A: () => V }), n(142703);
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(77729),
    l = n(626584),
    u = n(723702);
let c = new l.A("ProgressBarManager"),
    d = new (class {
        taskID;
        setProgress(e, t) {
            if (!(0, u.isDesktop)()) throw Error("cannot set progress from non-native");
            null != this.taskID && this.taskID !== e
                ? c.warn(`${this.taskID} is already running. cannot set ${e}`)
                : ((this.taskID = e), o.A.window.setProgressBar(t));
        }
        clearProgress(e) {
            if (!(0, u.isDesktop)()) throw Error("cannot clear progress from non-native");
            null == this.taskID
                ? c.warn("cannot clear progress. No current progress running.")
                : this.taskID !== e
                  ? c.warn(`cannot clear progress of ${e} when ${this.taskID} is running`)
                  : ((this.taskID = null), o.A.window.setProgressBar(-1));
        }
    })();
var _ = n(495544),
    h = n(189081),
    f = n(645243),
    p = n(927813),
    E = n(674378),
    m = n(144914),
    g = n(966846),
    A = n(775228),
    I = n(652215);
let T = +p.A.Millis.MINUTE,
    S = {},
    y = "file://",
    N = !1,
    v = 0,
    C = 0,
    R = 0,
    O = [],
    b = [],
    D = [],
    L = !1;
function w(e) {
    return e.type === I.WTw.INSTALLING || e.type === I.WTw.UPDATING || e.type === I.WTw.REPAIRING
        ? e.networkProgress
        : null;
}
function M(e) {
    return e.type === I.WTw.INSTALLING || e.type === I.WTw.UPDATING || e.type === I.WTw.REPAIRING
        ? e.diskProgress
        : null;
}
function P(e) {
    return e.type === I.WTw.INSTALLING || e.type === I.WTw.UPDATING || e.type === I.WTw.REPAIRING
        ? e.readerProgress
        : null;
}
let x = r().throttle(function (e) {
        b = (b = [{ bytes: e, timestamp: Date.now() }, ...b]).slice(0, 200);
    }, 200),
    k = r().throttle(function (e) {
        let t = Date.now(),
            n = t - T;
        O = (O = [{ bytes: e, timestamp: t }, ...O]).slice(0, 200).filter((e) => {
            let { timestamp: t } = e;
            return t >= n;
        });
    }, 200),
    U = r().throttle(function (e) {
        D = (D = [{ bytes: e, timestamp: Date.now() }, ...D]).slice(0, 200);
    }, 200);
function G(e, t, n) {
    let i = n(S[t]),
        r = n(e[t]);
    return null != i && null != r && 0 !== i ? Math.max(r - i, 0) : 0;
}
class F extends s.Ay.Store {
    static displayName = "DispatchApplicationStore";
    initialize() {
        this.waitFor(_.default);
    }
    getState(e, t) {
        return S[(0, E.gW)(e, t)];
    }
    isUpToDate(e, t) {
        let n = S[(0, E.gW)(e, t)];
        return null != n && n.type === I.WTw.UP_TO_DATE;
    }
    shouldPatch(e, t) {
        let n = S[(0, E.gW)(e, t)];
        return null != n && !0 === n.shouldPatch;
    }
    isInstalled(e, t) {
        let n = S[(0, E.gW)(e, t)];
        return null != n ? n.type !== I.WTw.UNINSTALLING : A.A.shouldBeInstalled(e, t);
    }
    supportsCloudSync(e, t) {
        null == t && (t = e);
        let n = S[(0, E.gW)(e, t)];
        return null != n && null != n.storage && !!n.storage.sync;
    }
    isLaunchable(e, t) {
        if (!(0, m.S)()) return !1;
        let n = S[(0, E.gW)(e, t)];
        return null != n && n.type === I.WTw.UP_TO_DATE && null != n.launchOptions && 0 !== n.launchOptions.length;
    }
    getDefaultLaunchOption(e, t) {
        let n = S[(0, E.gW)(e, t)];
        if (null == n) return null;
        let { defaultLaunchOptionId: i, launchOptions: r } = n;
        return null == i || null == r ? null : r[i];
    }
    getLaunchOptions(e, t) {
        let n = S[(0, E.gW)(e, t)];
        return null == n || null == n.launchOptions ? [] : Object.values(n.launchOptions);
    }
    getHistoricalTotalBytesRead() {
        return O;
    }
    getHistoricalTotalBytesDownloaded() {
        return b;
    }
    getHistoricalTotalBytesWritten() {
        return D;
    }
    whenInitialized(e) {
        this.addConditionalChangeListener(() => {
            if (N) return setImmediate(e), !1;
        });
    }
}
let V = new F(a.h, {
    CONNECTION_OPEN: function () {
        N = !1;
    },
    DISPATCH_APPLICATION_STATE_UPDATE: function (e) {
        let { state: t } = e;
        N = !0;
        let n = {},
            i = t.applications,
            s = null != t.currentTask ? t.currentTask.branchId : null,
            l = !1;
        for (let e in i)
            for (let t in i[e]) {
                let c = (0, E.gW)(e, t);
                if (
                    ((n[c] = (function (e) {
                        let {
                                build_id: t,
                                target_build_id: n,
                                manifest_ids: i,
                                target_manifest_ids: s,
                                application_id: a,
                                branch_id: l,
                                launch_commands: c,
                                launch_options: d,
                                storage: _,
                                install_path: h,
                                installed_size: p,
                                repairing: E,
                            } = e,
                            { should_patch: m } = e;
                        switch ((null == m && (m = !0), e.state.type)) {
                            case I.l6E.COMPLETE: {
                                let e,
                                    A = {},
                                    T = null;
                                if (E) e = I.WTw.REPAIRING;
                                else if (null == t) e = I.WTw.INSTALL_REQUIRED;
                                else if (m && (t !== n || (null != i && 0 !== r().difference(i, s).length)))
                                    e = I.WTw.UPDATE_REQUIRED;
                                else if (((e = I.WTw.UP_TO_DATE), null != h)) {
                                    let e = o.A.fileManager.join(h, "content"),
                                        t = (0, f.O)();
                                    if (null != d && 0 !== d.length) {
                                        var g;
                                        for (let n of (t !== I.lM6.WIN64 ||
                                            ((g = t), d.some((e) => e.platforms.includes(g))) ||
                                            (t = I.lM6.WIN32),
                                        d))
                                            if (n.platforms.includes(t)) {
                                                let t,
                                                    { executable: i, name: r, working_dir: s } = n,
                                                    a = o.A.fileManager.join(e, i);
                                                (0, u.isMac)() && !a.startsWith(y) && (a = `${y}${a}`),
                                                    (t =
                                                        null != s
                                                            ? o.A.fileManager.join(e, s)
                                                            : o.A.fileManager.dirname(a)),
                                                    (A[r] = { ...n, id: r, fullExecutablePath: a, fullWorkingDir: t }),
                                                    null == T && (T = r);
                                            }
                                    } else if (null != c) {
                                        t === I.lM6.WIN64 && null == c[t] && (t = I.lM6.WIN32);
                                        let n = c[t];
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
                                    installPath: h,
                                    installedSize: p,
                                    launchOptions: A,
                                    defaultLaunchOptionId: T,
                                    shouldPatch: m,
                                    storage: _,
                                };
                            }
                            case I.l6E.TRANSITION: {
                                let {
                                        stage: r,
                                        disk_progress: o,
                                        network_progress: u,
                                        reader_progress: c,
                                        progress: d,
                                        total: _,
                                        paused: f,
                                    } = e.state,
                                    g = r.type;
                                return {
                                    type:
                                        g === I.OQC.UNINSTALLING
                                            ? I.WTw.UNINSTALLING
                                            : E
                                              ? I.WTw.REPAIRING
                                              : null == t
                                                ? I.WTw.INSTALLING
                                                : I.WTw.UPDATING,
                                    stage: g,
                                    applicationId: a,
                                    branchId: l,
                                    buildId: t,
                                    manifestIds: i,
                                    targetBuildId: n,
                                    targetManifestIds: s,
                                    installPath: h,
                                    installedSize: p,
                                    diskProgress: o,
                                    networkProgress: u,
                                    readerProgress: c,
                                    progress: d,
                                    total: _,
                                    paused: f,
                                    shouldPatch: m,
                                };
                            }
                        }
                        throw Error(`Invalid Dispatch State. state=${e.state.type}`);
                    })(i[e][t])),
                    null != S[c])
                ) {
                    let e = G(n, c, w);
                    e > 0 && x((v += e));
                    let i = G(n, c, M);
                    i > 0 && U((C += i));
                    let r = G(n, c, P);
                    if ((r > 0 && k((R += r)), s === t)) {
                        let e = n[c];
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
                                    d.setProgress(
                                        "dispatch_application_progress",
                                        (0, E.uA)(e.progress, e.total) / 100,
                                    ),
                                        (l = !0);
                            }
                    }
                }
                if (!L) {
                    let i = o.A.fileManager.dirname(n[c].installPath);
                    A.A.getInstallationPath(e, t) !== i &&
                        a.h.wait(() => {
                            a.h.dispatch({
                                type: "DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS",
                                applicationId: e,
                                branchId: t,
                                installationPath: i,
                            });
                        }),
                        -1 === g.A.getQueuePosition(e, t) &&
                            (n[c].type === I.WTw.INSTALLING || n[c].type === I.WTw.UPDATING) &&
                            h.A.hasApplication(e, t) &&
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
        l || "dispatch_application_progress" !== d.taskID || d.clearProgress("dispatch_application_progress"),
            (S = n),
            (L = !0);
    },
});
