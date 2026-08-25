"use strict";
n.d(t, { A: () => V }), n(142703);
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(77729),
    o = n(626584),
    d = n(723702);
let c = new o.A("ProgressBarManager"),
    u = new (class {
        taskID;
        setProgress(e, t) {
            if (!(0, d.isDesktop)()) throw Error("cannot set progress from non-native");
            null != this.taskID && this.taskID !== e
                ? c.warn(`${this.taskID} is already running. cannot set ${e}`)
                : ((this.taskID = e), l.A.window.setProgressBar(t));
        }
        clearProgress(e) {
            if (!(0, d.isDesktop)()) throw Error("cannot clear progress from non-native");
            null == this.taskID
                ? c.warn("cannot clear progress. No current progress running.")
                : this.taskID !== e
                  ? c.warn(`cannot clear progress of ${e} when ${this.taskID} is running`)
                  : ((this.taskID = null), l.A.window.setProgressBar(-1));
        }
    })();
var _ = n(280450),
    E = n(189081),
    A = n(645243),
    h = n(927813),
    I = n(674378),
    f = n(144914),
    p = n(966846),
    T = n(775228),
    m = n(652215);
let g = +h.A.Millis.MINUTE,
    S = {},
    N = "file://",
    C = !1,
    O = 0,
    R = 0,
    L = 0,
    y = [],
    D = [],
    v = [],
    b = !1;
function M(e) {
    return e.type === m.WTw.INSTALLING || e.type === m.WTw.UPDATING || e.type === m.WTw.REPAIRING
        ? e.networkProgress
        : null;
}
function P(e) {
    return e.type === m.WTw.INSTALLING || e.type === m.WTw.UPDATING || e.type === m.WTw.REPAIRING
        ? e.diskProgress
        : null;
}
function U(e) {
    return e.type === m.WTw.INSTALLING || e.type === m.WTw.UPDATING || e.type === m.WTw.REPAIRING
        ? e.readerProgress
        : null;
}
let w = r().throttle(function (e) {
        D = (D = [{ bytes: e, timestamp: Date.now() }, ...D]).slice(0, 200);
    }, 200),
    G = r().throttle(function (e) {
        let t = Date.now(),
            n = t - g;
        y = (y = [{ bytes: e, timestamp: t }, ...y]).slice(0, 200).filter((e) => {
            let { timestamp: t } = e;
            return t >= n;
        });
    }, 200),
    x = r().throttle(function (e) {
        v = (v = [{ bytes: e, timestamp: Date.now() }, ...v]).slice(0, 200);
    }, 200);
function k(e, t, n) {
    let i = n(S[t]),
        r = n(e[t]);
    return null != i && null != r && 0 !== i ? Math.max(r - i, 0) : 0;
}
class F extends a.Ay.Store {
    static displayName = "DispatchApplicationStore";
    initialize() {
        this.waitFor(_.default);
    }
    getState(e, t) {
        return S[(0, I.gW)(e, t)];
    }
    isUpToDate(e, t) {
        let n = S[(0, I.gW)(e, t)];
        return null != n && n.type === m.WTw.UP_TO_DATE;
    }
    shouldPatch(e, t) {
        let n = S[(0, I.gW)(e, t)];
        return null != n && !0 === n.shouldPatch;
    }
    isInstalled(e, t) {
        let n = S[(0, I.gW)(e, t)];
        return null != n ? n.type !== m.WTw.UNINSTALLING : T.A.shouldBeInstalled(e, t);
    }
    supportsCloudSync(e, t) {
        null == t && (t = e);
        let n = S[(0, I.gW)(e, t)];
        return null != n && null != n.storage && !!n.storage.sync;
    }
    isLaunchable(e, t) {
        if (!(0, f.S)()) return !1;
        let n = S[(0, I.gW)(e, t)];
        return null != n && n.type === m.WTw.UP_TO_DATE && null != n.launchOptions && 0 !== n.launchOptions.length;
    }
    getDefaultLaunchOption(e, t) {
        let n = S[(0, I.gW)(e, t)];
        if (null == n) return null;
        let { defaultLaunchOptionId: i, launchOptions: r } = n;
        return null == i || null == r ? null : r[i];
    }
    getLaunchOptions(e, t) {
        let n = S[(0, I.gW)(e, t)];
        return null == n || null == n.launchOptions ? [] : Object.values(n.launchOptions);
    }
    getHistoricalTotalBytesRead() {
        return y;
    }
    getHistoricalTotalBytesDownloaded() {
        return D;
    }
    getHistoricalTotalBytesWritten() {
        return v;
    }
    whenInitialized(e) {
        this.addConditionalChangeListener(() => {
            if (C) return setImmediate(e), !1;
        });
    }
}
let V = new F(s.h, {
    CONNECTION_OPEN: function () {
        C = !1;
    },
    DISPATCH_APPLICATION_STATE_UPDATE: function (e) {
        let { state: t } = e;
        C = !0;
        let n = {},
            i = t.applications,
            a = null != t.currentTask ? t.currentTask.branchId : null,
            o = !1;
        for (let e in i)
            for (let t in i[e]) {
                let c = (0, I.gW)(e, t);
                if (
                    ((n[c] = (function (e) {
                        let {
                                build_id: t,
                                target_build_id: n,
                                manifest_ids: i,
                                target_manifest_ids: a,
                                application_id: s,
                                branch_id: o,
                                launch_commands: c,
                                launch_options: u,
                                storage: _,
                                install_path: E,
                                installed_size: h,
                                repairing: I,
                            } = e,
                            { should_patch: f } = e;
                        switch ((null == f && (f = !0), e.state.type)) {
                            case m.l6E.COMPLETE: {
                                let e,
                                    T = {},
                                    g = null;
                                if (I) e = m.WTw.REPAIRING;
                                else if (null == t) e = m.WTw.INSTALL_REQUIRED;
                                else if (f && (t !== n || (null != i && 0 !== r().difference(i, a).length)))
                                    e = m.WTw.UPDATE_REQUIRED;
                                else if (((e = m.WTw.UP_TO_DATE), null != E)) {
                                    let e = l.A.fileManager.join(E, "content"),
                                        t = (0, A.O)();
                                    if (null != u && 0 !== u.length) {
                                        var p;
                                        for (let n of (t !== m.lM6.WIN64 ||
                                            ((p = t), u.some((e) => e.platforms.includes(p))) ||
                                            (t = m.lM6.WIN32),
                                        u))
                                            if (n.platforms.includes(t)) {
                                                let t,
                                                    { executable: i, name: r, working_dir: a } = n,
                                                    s = l.A.fileManager.join(e, i);
                                                (0, d.isMac)() && !s.startsWith(N) && (s = `${N}${s}`),
                                                    (t =
                                                        null != a
                                                            ? l.A.fileManager.join(e, a)
                                                            : l.A.fileManager.dirname(s)),
                                                    (T[r] = { ...n, id: r, fullExecutablePath: s, fullWorkingDir: t }),
                                                    null == g && (g = r);
                                            }
                                    } else if (null != c) {
                                        t === m.lM6.WIN64 && null == c[t] && (t = m.lM6.WIN32);
                                        let n = c[t];
                                        if (null != n) {
                                            let { executable: i } = n,
                                                r = "Default";
                                            (T[r] = {
                                                ...n,
                                                name: r,
                                                id: r,
                                                fullExecutablePath: l.A.fileManager.join(e, i),
                                                fullWorkingDir: e,
                                                platforms: [t],
                                            }),
                                                (g = r);
                                        }
                                    }
                                }
                                return {
                                    type: e,
                                    applicationId: s,
                                    branchId: o,
                                    buildId: t,
                                    manifestIds: i,
                                    targetBuildId: n,
                                    targetManifestIds: a,
                                    installPath: E,
                                    installedSize: h,
                                    launchOptions: T,
                                    defaultLaunchOptionId: g,
                                    shouldPatch: f,
                                    storage: _,
                                };
                            }
                            case m.l6E.TRANSITION: {
                                let {
                                        stage: r,
                                        disk_progress: l,
                                        network_progress: d,
                                        reader_progress: c,
                                        progress: u,
                                        total: _,
                                        paused: A,
                                    } = e.state,
                                    p = r.type;
                                return {
                                    type:
                                        p === m.OQC.UNINSTALLING
                                            ? m.WTw.UNINSTALLING
                                            : I
                                              ? m.WTw.REPAIRING
                                              : null == t
                                                ? m.WTw.INSTALLING
                                                : m.WTw.UPDATING,
                                    stage: p,
                                    applicationId: s,
                                    branchId: o,
                                    buildId: t,
                                    manifestIds: i,
                                    targetBuildId: n,
                                    targetManifestIds: a,
                                    installPath: E,
                                    installedSize: h,
                                    diskProgress: l,
                                    networkProgress: d,
                                    readerProgress: c,
                                    progress: u,
                                    total: _,
                                    paused: A,
                                    shouldPatch: f,
                                };
                            }
                        }
                        throw Error(`Invalid Dispatch State. state=${e.state.type}`);
                    })(i[e][t])),
                    null != S[c])
                ) {
                    let e = k(n, c, M);
                    e > 0 && w((O += e));
                    let i = k(n, c, P);
                    i > 0 && x((R += i));
                    let r = k(n, c, U);
                    if ((r > 0 && G((L += r)), a === t)) {
                        let e = n[c];
                        if (
                            !0 !== e.paused &&
                            (e.type === m.WTw.UNINSTALLING || e.type === m.WTw.INSTALLING || e.type === m.WTw.UPDATING)
                        )
                            switch (e.stage) {
                                case m.OQC.PATCHING:
                                case m.OQC.FINALIZING:
                                case m.OQC.VERIFYING:
                                case m.OQC.REPAIRING:
                                case m.OQC.POST_INSTALL_SCRIPTS:
                                    u.setProgress(
                                        "dispatch_application_progress",
                                        (0, I.uA)(e.progress, e.total) / 100,
                                    ),
                                        (o = !0);
                            }
                    }
                }
                if (!b) {
                    let i = l.A.fileManager.dirname(n[c].installPath);
                    T.A.getInstallationPath(e, t) !== i &&
                        s.h.wait(() => {
                            s.h.dispatch({
                                type: "DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS",
                                applicationId: e,
                                branchId: t,
                                installationPath: i,
                            });
                        }),
                        -1 === p.A.getQueuePosition(e, t) &&
                            (n[c].type === m.WTw.INSTALLING || n[c].type === m.WTw.UPDATING) &&
                            E.A.hasApplication(e, t) &&
                            T.A.shouldBeInstalled(e, t) &&
                            s.h.wait(() => {
                                s.h.dispatch({
                                    type: "DISPATCH_APPLICATION_UPDATE",
                                    applicationId: e,
                                    branchId: t,
                                    automatic: !0,
                                });
                            });
                }
            }
        o || "dispatch_application_progress" !== u.taskID || u.clearProgress("dispatch_application_progress"),
            (S = n),
            (b = !0);
    },
});
