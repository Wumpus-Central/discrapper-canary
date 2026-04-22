"use strict";
n.d(t, { A: () => G }), n(142703);
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(77729),
    l = n(728071),
    u = n(961350),
    d = n(189081),
    c = n(645243),
    _ = n(927813),
    f = n(674378),
    E = n(723702),
    h = n(144914),
    p = n(966846),
    m = n(775228),
    g = n(652215);
let A = +_.A.Millis.MINUTE,
    I = {},
    T = "file://",
    S = !1,
    y = 0,
    N = 0,
    O = 0,
    R = [],
    v = [],
    C = [],
    b = !1;
function D(e) {
    return e.type === g.WTw.INSTALLING || e.type === g.WTw.UPDATING || e.type === g.WTw.REPAIRING
        ? e.networkProgress
        : null;
}
function L(e) {
    return e.type === g.WTw.INSTALLING || e.type === g.WTw.UPDATING || e.type === g.WTw.REPAIRING
        ? e.diskProgress
        : null;
}
function w(e) {
    return e.type === g.WTw.INSTALLING || e.type === g.WTw.UPDATING || e.type === g.WTw.REPAIRING
        ? e.readerProgress
        : null;
}
let M = i().throttle(function (e) {
        v = (v = [{ bytes: e, timestamp: Date.now() }, ...v]).slice(0, 200);
    }, 200),
    P = i().throttle(function (e) {
        let t = Date.now(),
            n = t - A;
        R = (R = [{ bytes: e, timestamp: t }, ...R]).slice(0, 200).filter((e) => {
            let { timestamp: t } = e;
            return t >= n;
        });
    }, 200),
    U = i().throttle(function (e) {
        C = (C = [{ bytes: e, timestamp: Date.now() }, ...C]).slice(0, 200);
    }, 200);
function k(e, t, n) {
    let r = n(I[t]),
        i = n(e[t]);
    return null != r && null != i && 0 !== r ? Math.max(i - r, 0) : 0;
}
class x extends s.Ay.Store {
    static displayName = "DispatchApplicationStore";
    initialize() {
        this.waitFor(u.default);
    }
    getState(e, t) {
        return I[(0, f.gW)(e, t)];
    }
    isUpToDate(e, t) {
        let n = I[(0, f.gW)(e, t)];
        return null != n && n.type === g.WTw.UP_TO_DATE;
    }
    shouldPatch(e, t) {
        let n = I[(0, f.gW)(e, t)];
        return null != n && !0 === n.shouldPatch;
    }
    isInstalled(e, t) {
        let n = I[(0, f.gW)(e, t)];
        return null != n ? n.type !== g.WTw.UNINSTALLING : m.A.shouldBeInstalled(e, t);
    }
    supportsCloudSync(e, t) {
        null == t && (t = e);
        let n = I[(0, f.gW)(e, t)];
        return null != n && null != n.storage && !!n.storage.sync;
    }
    isLaunchable(e, t) {
        if (!(0, h.S)()) return !1;
        let n = I[(0, f.gW)(e, t)];
        return null != n && n.type === g.WTw.UP_TO_DATE && null != n.launchOptions && 0 !== n.launchOptions.length;
    }
    getDefaultLaunchOption(e, t) {
        let n = I[(0, f.gW)(e, t)];
        if (null == n) return null;
        let { defaultLaunchOptionId: r, launchOptions: i } = n;
        return null == r || null == i ? null : i[r];
    }
    getLaunchOptions(e, t) {
        let n = I[(0, f.gW)(e, t)];
        return null == n || null == n.launchOptions ? [] : Object.values(n.launchOptions);
    }
    getHistoricalTotalBytesRead() {
        return R;
    }
    getHistoricalTotalBytesDownloaded() {
        return v;
    }
    getHistoricalTotalBytesWritten() {
        return C;
    }
    whenInitialized(e) {
        this.addConditionalChangeListener(() => {
            if (S) return setImmediate(e), !1;
        });
    }
}
let G = new x(a.h, {
    CONNECTION_OPEN: function () {
        S = !1;
    },
    DISPATCH_APPLICATION_STATE_UPDATE: function (e) {
        let { state: t } = e;
        S = !0;
        let n = {},
            r = t.applications,
            s = null != t.currentTask ? t.currentTask.branchId : null,
            u = !1;
        for (let e in r)
            for (let t in r[e]) {
                let _ = (0, f.gW)(e, t);
                if (
                    ((n[_] = (function (e) {
                        let {
                                build_id: t,
                                target_build_id: n,
                                manifest_ids: r,
                                target_manifest_ids: s,
                                application_id: a,
                                branch_id: l,
                                launch_commands: u,
                                launch_options: d,
                                storage: _,
                                install_path: f,
                                installed_size: h,
                                repairing: p,
                            } = e,
                            { should_patch: m } = e;
                        switch ((null == m && (m = !0), e.state.type)) {
                            case g.l6E.COMPLETE: {
                                let e,
                                    I = {},
                                    S = null;
                                if (p) e = g.WTw.REPAIRING;
                                else if (null == t) e = g.WTw.INSTALL_REQUIRED;
                                else if (m && (t !== n || (null != r && 0 !== i().difference(r, s).length)))
                                    e = g.WTw.UPDATE_REQUIRED;
                                else if (((e = g.WTw.UP_TO_DATE), null != f)) {
                                    let e = o.A.fileManager.join(f, "content"),
                                        t = (0, c.O)();
                                    if (null != d && 0 !== d.length) {
                                        var A;
                                        for (let n of (t !== g.lM6.WIN64 ||
                                            ((A = t), d.some((e) => e.platforms.includes(A))) ||
                                            (t = g.lM6.WIN32),
                                        d))
                                            if (n.platforms.includes(t)) {
                                                let t,
                                                    { executable: r, name: i, working_dir: s } = n,
                                                    a = o.A.fileManager.join(e, r);
                                                (0, E.isMac)() && !a.startsWith(T) && (a = `${T}${a}`),
                                                    (t =
                                                        null != s
                                                            ? o.A.fileManager.join(e, s)
                                                            : o.A.fileManager.dirname(a)),
                                                    (I[i] = { ...n, id: i, fullExecutablePath: a, fullWorkingDir: t }),
                                                    null == S && (S = i);
                                            }
                                    } else if (null != u) {
                                        t === g.lM6.WIN64 && null == u[t] && (t = g.lM6.WIN32);
                                        let n = u[t];
                                        if (null != n) {
                                            let { executable: r } = n,
                                                i = "Default";
                                            (I[i] = {
                                                ...n,
                                                name: i,
                                                id: i,
                                                fullExecutablePath: o.A.fileManager.join(e, r),
                                                fullWorkingDir: e,
                                                platforms: [t],
                                            }),
                                                (S = i);
                                        }
                                    }
                                }
                                return {
                                    type: e,
                                    applicationId: a,
                                    branchId: l,
                                    buildId: t,
                                    manifestIds: r,
                                    targetBuildId: n,
                                    targetManifestIds: s,
                                    installPath: f,
                                    installedSize: h,
                                    launchOptions: I,
                                    defaultLaunchOptionId: S,
                                    shouldPatch: m,
                                    storage: _,
                                };
                            }
                            case g.l6E.TRANSITION: {
                                let {
                                        stage: i,
                                        disk_progress: o,
                                        network_progress: u,
                                        reader_progress: d,
                                        progress: c,
                                        total: _,
                                        paused: E,
                                    } = e.state,
                                    A = i.type;
                                return {
                                    type:
                                        A === g.OQC.UNINSTALLING
                                            ? g.WTw.UNINSTALLING
                                            : p
                                              ? g.WTw.REPAIRING
                                              : null == t
                                                ? g.WTw.INSTALLING
                                                : g.WTw.UPDATING,
                                    stage: A,
                                    applicationId: a,
                                    branchId: l,
                                    buildId: t,
                                    manifestIds: r,
                                    targetBuildId: n,
                                    targetManifestIds: s,
                                    installPath: f,
                                    installedSize: h,
                                    diskProgress: o,
                                    networkProgress: u,
                                    readerProgress: d,
                                    progress: c,
                                    total: _,
                                    paused: E,
                                    shouldPatch: m,
                                };
                            }
                        }
                        throw Error(`Invalid Dispatch State. state=${e.state.type}`);
                    })(r[e][t])),
                    null != I[_])
                ) {
                    let e = k(n, _, D);
                    e > 0 && M((y += e));
                    let r = k(n, _, L);
                    r > 0 && U((N += r));
                    let i = k(n, _, w);
                    if ((i > 0 && P((O += i)), s === t)) {
                        let e = n[_];
                        if (
                            !0 !== e.paused &&
                            (e.type === g.WTw.UNINSTALLING || e.type === g.WTw.INSTALLING || e.type === g.WTw.UPDATING)
                        )
                            switch (e.stage) {
                                case g.OQC.PATCHING:
                                case g.OQC.FINALIZING:
                                case g.OQC.VERIFYING:
                                case g.OQC.REPAIRING:
                                case g.OQC.POST_INSTALL_SCRIPTS:
                                    l.A.setProgress(
                                        "dispatch_application_progress",
                                        (0, f.uA)(e.progress, e.total) / 100,
                                    ),
                                        (u = !0);
                            }
                    }
                }
                if (!b) {
                    let r = o.A.fileManager.dirname(n[_].installPath);
                    m.A.getInstallationPath(e, t) !== r &&
                        a.h.wait(() => {
                            a.h.dispatch({
                                type: "DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS",
                                applicationId: e,
                                branchId: t,
                                installationPath: r,
                            });
                        }),
                        -1 === p.A.getQueuePosition(e, t) &&
                            (n[_].type === g.WTw.INSTALLING || n[_].type === g.WTw.UPDATING) &&
                            d.A.hasApplication(e, t) &&
                            m.A.shouldBeInstalled(e, t) &&
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
        u || "dispatch_application_progress" !== l.A.taskID || l.A.clearProgress("dispatch_application_progress"),
            (I = n),
            (b = !0);
    },
});
