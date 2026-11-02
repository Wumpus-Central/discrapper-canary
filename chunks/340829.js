(n.d(t, { A: () => B }), n(142703));
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(73153),
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
    f = n(674378),
    I = n(144914),
    p = n(966846),
    m = n(775228),
    T = n(652215);
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
function P(e) {
    return e.type === T.WTw.INSTALLING || e.type === T.WTw.UPDATING || e.type === T.WTw.REPAIRING
        ? e.networkProgress
        : null;
}
function M(e) {
    return e.type === T.WTw.INSTALLING || e.type === T.WTw.UPDATING || e.type === T.WTw.REPAIRING
        ? e.diskProgress
        : null;
}
function U(e) {
    return e.type === T.WTw.INSTALLING || e.type === T.WTw.UPDATING || e.type === T.WTw.REPAIRING
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
        return S[(0, f.gW)(e, t)];
    }
    isUpToDate(e, t) {
        let n = S[(0, f.gW)(e, t)];
        return null != n && n.type === T.WTw.UP_TO_DATE;
    }
    shouldPatch(e, t) {
        let n = S[(0, f.gW)(e, t)];
        return null != n && !0 === n.shouldPatch;
    }
    isInstalled(e, t) {
        let n = S[(0, f.gW)(e, t)];
        return null != n ? n.type !== T.WTw.UNINSTALLING : m.A.shouldBeInstalled(e, t);
    }
    supportsCloudSync(e, t) {
        null == t && (t = e);
        let n = S[(0, f.gW)(e, t)];
        return null != n && null != n.storage && !!n.storage.sync;
    }
    isLaunchable(e, t) {
        if (!(0, I.S)()) return !1;
        let n = S[(0, f.gW)(e, t)];
        return null != n && n.type === T.WTw.UP_TO_DATE && null != n.launchOptions && 0 !== n.launchOptions.length;
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
            if (C) return (setImmediate(e), !1);
        });
    }
}
let B = new F(s.h, {
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
                let c = (0, f.gW)(e, t);
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
                                repairing: f,
                            } = e,
                            { should_patch: I } = e;
                        null == I && (I = !0);
                        let p = e.state.type;
                        switch (e.state.type) {
                            case T.l6E.COMPLETE: {
                                let e,
                                    p = {},
                                    g = null;
                                if (f) e = T.WTw.REPAIRING;
                                else if (null == t) e = T.WTw.INSTALL_REQUIRED;
                                else if (I && (t !== n || (null != i && 0 !== r().difference(i, a).length)))
                                    e = T.WTw.UPDATE_REQUIRED;
                                else if (((e = T.WTw.UP_TO_DATE), null != E)) {
                                    let e = l.A.fileManager.join(E, "content"),
                                        t = (0, A.O)();
                                    if (null != u && 0 !== u.length) {
                                        var m;
                                        for (let n of (t !== T.lM6.WIN64 ||
                                            ((m = t), u.some((e) => e.platforms.includes(m))) ||
                                            (t = T.lM6.WIN32),
                                        u))
                                            if (n.platforms.includes(t)) {
                                                let t,
                                                    { executable: i, name: r, working_dir: a } = n,
                                                    s = l.A.fileManager.join(e, i);
                                                ((0, d.isMac)() && !s.startsWith(N) && (s = `${N}${s}`),
                                                    (t =
                                                        null != a
                                                            ? l.A.fileManager.join(e, a)
                                                            : l.A.fileManager.dirname(s)),
                                                    (p[r] = { ...n, id: r, fullExecutablePath: s, fullWorkingDir: t }),
                                                    null == g && (g = r));
                                            }
                                    } else if (null != c) {
                                        t === T.lM6.WIN64 && null == c[t] && (t = T.lM6.WIN32);
                                        let n = c[t];
                                        if (null != n) {
                                            let { executable: i } = n,
                                                r = "Default";
                                            ((p[r] = {
                                                ...n,
                                                name: r,
                                                id: r,
                                                fullExecutablePath: l.A.fileManager.join(e, i),
                                                fullWorkingDir: e,
                                                platforms: [t],
                                            }),
                                                (g = r));
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
                                    launchOptions: p,
                                    defaultLaunchOptionId: g,
                                    shouldPatch: I,
                                    storage: _,
                                };
                            }
                            case T.l6E.TRANSITION: {
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
                                        p === T.OQC.UNINSTALLING
                                            ? T.WTw.UNINSTALLING
                                            : f
                                              ? T.WTw.REPAIRING
                                              : null == t
                                                ? T.WTw.INSTALLING
                                                : T.WTw.UPDATING,
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
                                    shouldPatch: I,
                                };
                            }
                        }
                        throw Error(`Invalid Dispatch State. state=${p}`);
                    })(i[e][t])),
                    null != S[c])
                ) {
                    let e = k(n, c, P);
                    e > 0 && w((O += e));
                    let i = k(n, c, M);
                    i > 0 && x((R += i));
                    let r = k(n, c, U);
                    if ((r > 0 && G((L += r)), a === t)) {
                        let e = n[c];
                        if (
                            !0 !== e.paused &&
                            (e.type === T.WTw.UNINSTALLING || e.type === T.WTw.INSTALLING || e.type === T.WTw.UPDATING)
                        )
                            switch (e.stage) {
                                case T.OQC.PATCHING:
                                case T.OQC.FINALIZING:
                                case T.OQC.VERIFYING:
                                case T.OQC.REPAIRING:
                                case T.OQC.POST_INSTALL_SCRIPTS:
                                    (u.setProgress(
                                        "dispatch_application_progress",
                                        (0, f.uA)(e.progress, e.total) / 100,
                                    ),
                                        (o = !0));
                            }
                    }
                }
                if (!b) {
                    let i = l.A.fileManager.dirname(n[c].installPath);
                    (m.A.getInstallationPath(e, t) !== i &&
                        s.h.dispatch({
                            type: "DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS",
                            applicationId: e,
                            branchId: t,
                            installationPath: i,
                        }),
                        -1 === p.A.getQueuePosition(e, t) &&
                            (n[c].type === T.WTw.INSTALLING || n[c].type === T.WTw.UPDATING) &&
                            E.A.hasApplication(e, t) &&
                            m.A.shouldBeInstalled(e, t) &&
                            s.h.dispatch({
                                type: "DISPATCH_APPLICATION_UPDATE",
                                applicationId: e,
                                branchId: t,
                                automatic: !0,
                            }));
                }
            }
        (o || "dispatch_application_progress" !== u.taskID || u.clearProgress("dispatch_application_progress"),
            (S = n),
            (b = !0));
    },
});
