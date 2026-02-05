"use strict";
n.d(t, { A: () => $ }), n(142703);
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(73153),
    o = n(77729),
    l = n(728071),
    u = n(961350),
    c = n(189081),
    d = n(645243),
    _ = n(927813),
    f = n(674378),
    p = n(723702),
    h = n(144914),
    m = n(966846),
    g = n(775228),
    E = n(652215);
let A = 200,
    I = 200,
    T = +_.A.Millis.MINUTE,
    y = {},
    S = "content",
    v = "file://",
    C = !1,
    b = 0,
    N = 0,
    R = 0,
    O = [],
    D = [],
    L = [],
    w = !1;
function x() {
    C = !1;
}
function P(e, t) {
    return t.some((t) => t.platforms.includes(e));
}
function M(e) {
    let {
            build_id: t,
            target_build_id: n,
            manifest_ids: r,
            target_manifest_ids: a,
            application_id: s,
            branch_id: l,
            launch_commands: u,
            launch_options: c,
            storage: _,
            install_path: f,
            installed_size: h,
            repairing: m,
        } = e,
        { should_patch: g } = e;
    switch ((null == g && (g = !0), e.state.type)) {
        case E.l6E.COMPLETE: {
            let e,
                A = {},
                I = null;
            if (m) e = E.WTw.REPAIRING;
            else if (null == t) e = E.WTw.INSTALL_REQUIRED;
            else if (g && (t !== n || (null != r && 0 !== i().difference(r, a).length))) e = E.WTw.UPDATE_REQUIRED;
            else if (((e = E.WTw.UP_TO_DATE), null != f)) {
                let e = o.A.fileManager.join(f, S),
                    t = (0, d.O)();
                if (null != c && 0 !== c.length) {
                    for (let n of (t !== E.lM6.WIN64 || P(t, c) || (t = E.lM6.WIN32), c))
                        if (n.platforms.includes(t)) {
                            let t,
                                { executable: r, name: i, working_dir: a } = n,
                                s = i,
                                l = o.A.fileManager.join(e, r);
                            (0, p.isMac)() && !l.startsWith(v) && (l = `${v}${l}`),
                                (t = null != a ? o.A.fileManager.join(e, a) : o.A.fileManager.dirname(l)),
                                (A[s] = { ...n, id: s, fullExecutablePath: l, fullWorkingDir: t }),
                                null == I && (I = s);
                        }
                } else if (null != u) {
                    t === E.lM6.WIN64 && null == u[t] && (t = E.lM6.WIN32);
                    let n = u[t];
                    if (null != n) {
                        let { executable: r } = n,
                            i = "Default",
                            a = i;
                        (A[a] = {
                            ...n,
                            name: i,
                            id: a,
                            fullExecutablePath: o.A.fileManager.join(e, r),
                            fullWorkingDir: e,
                            platforms: [t],
                        }),
                            (I = a);
                    }
                }
            }
            return {
                type: e,
                applicationId: s,
                branchId: l,
                buildId: t,
                manifestIds: r,
                targetBuildId: n,
                targetManifestIds: a,
                installPath: f,
                installedSize: h,
                launchOptions: A,
                defaultLaunchOptionId: I,
                shouldPatch: g,
                storage: _,
            };
        }
        case E.l6E.TRANSITION: {
            let i,
                {
                    stage: o,
                    disk_progress: u,
                    network_progress: c,
                    reader_progress: d,
                    progress: _,
                    total: p,
                    paused: A,
                } = e.state,
                I = o.type;
            return {
                type: (i =
                    I === E.OQC.UNINSTALLING
                        ? E.WTw.UNINSTALLING
                        : m
                          ? E.WTw.REPAIRING
                          : null == t
                            ? E.WTw.INSTALLING
                            : E.WTw.UPDATING),
                stage: I,
                applicationId: s,
                branchId: l,
                buildId: t,
                manifestIds: r,
                targetBuildId: n,
                targetManifestIds: a,
                installPath: f,
                installedSize: h,
                diskProgress: u,
                networkProgress: c,
                readerProgress: d,
                progress: _,
                total: p,
                paused: A,
                shouldPatch: g,
            };
        }
    }
    throw Error(`Invalid Dispatch State. state=${e.state.type}`);
}
function k(e) {
    return e.type === E.WTw.INSTALLING || e.type === E.WTw.UPDATING || e.type === E.WTw.REPAIRING
        ? e.networkProgress
        : null;
}
function U(e) {
    return e.type === E.WTw.INSTALLING || e.type === E.WTw.UPDATING || e.type === E.WTw.REPAIRING
        ? e.diskProgress
        : null;
}
function G(e) {
    return e.type === E.WTw.INSTALLING || e.type === E.WTw.UPDATING || e.type === E.WTw.REPAIRING
        ? e.readerProgress
        : null;
}
function V(e) {
    D = (D = [{ bytes: e, timestamp: Date.now() }, ...D]).slice(0, I);
}
function F(e) {
    let t = Date.now(),
        n = t - T;
    O = (O = [{ bytes: e, timestamp: t }, ...O]).slice(0, I).filter((e) => {
        let { timestamp: t } = e;
        return t >= n;
    });
}
function B(e) {
    L = (L = [{ bytes: e, timestamp: Date.now() }, ...L]).slice(0, I);
}
let j = i().throttle(V, A),
    H = i().throttle(F, A),
    Y = i().throttle(B, A);
function W(e, t, n) {
    let r = n(y[t]),
        i = n(e[t]);
    return null != r && null != i && 0 !== r ? Math.max(i - r, 0) : 0;
}
function K(e) {
    let { state: t } = e;
    C = !0;
    let n = {},
        r = t.applications,
        i = null != t.currentTask ? t.currentTask.branchId : null,
        a = !1;
    for (let e in r)
        for (let t in r[e]) {
            let u = (0, f.gW)(e, t);
            if (((n[u] = M(r[e][t])), null != y[u])) {
                let e = W(n, u, k);
                e > 0 && j((b += e));
                let r = W(n, u, U);
                r > 0 && Y((N += r));
                let s = W(n, u, G);
                if ((s > 0 && H((R += s)), i === t)) {
                    let e = n[u];
                    if (
                        !0 !== e.paused &&
                        (e.type === E.WTw.UNINSTALLING || e.type === E.WTw.INSTALLING || e.type === E.WTw.UPDATING)
                    )
                        switch (e.stage) {
                            case E.OQC.PATCHING:
                            case E.OQC.FINALIZING:
                            case E.OQC.VERIFYING:
                            case E.OQC.REPAIRING:
                            case E.OQC.POST_INSTALL_SCRIPTS:
                                l.A.setProgress("dispatch_application_progress", (0, f.uA)(e.progress, e.total) / 100),
                                    (a = !0);
                        }
                }
            }
            if (!w) {
                let r = o.A.fileManager.dirname(n[u].installPath);
                g.A.getInstallationPath(e, t) !== r &&
                    s.h.wait(() => {
                        s.h.dispatch({
                            type: "DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS",
                            applicationId: e,
                            branchId: t,
                            installationPath: r,
                        });
                    }),
                    -1 === m.A.getQueuePosition(e, t) &&
                        (n[u].type === E.WTw.INSTALLING || n[u].type === E.WTw.UPDATING) &&
                        c.A.hasApplication(e, t) &&
                        g.A.shouldBeInstalled(e, t) &&
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
    a || "dispatch_application_progress" !== l.A.taskID || l.A.clearProgress("dispatch_application_progress"),
        (y = n),
        (w = !0);
}
class z extends a.Ay.Store {
    static displayName = "DispatchApplicationStore";
    initialize() {
        this.waitFor(u.default);
    }
    getState(e, t) {
        return y[(0, f.gW)(e, t)];
    }
    isUpToDate(e, t) {
        let n = y[(0, f.gW)(e, t)];
        return null != n && n.type === E.WTw.UP_TO_DATE;
    }
    shouldPatch(e, t) {
        let n = y[(0, f.gW)(e, t)];
        return null != n && !0 === n.shouldPatch;
    }
    isInstalled(e, t) {
        let n = y[(0, f.gW)(e, t)];
        return null != n ? n.type !== E.WTw.UNINSTALLING : g.A.shouldBeInstalled(e, t);
    }
    supportsCloudSync(e, t) {
        null == t && (t = e);
        let n = y[(0, f.gW)(e, t)];
        return null != n && null != n.storage && !!n.storage.sync;
    }
    isLaunchable(e, t) {
        if (!(0, h.S)()) return !1;
        let n = y[(0, f.gW)(e, t)];
        return null != n && n.type === E.WTw.UP_TO_DATE && null != n.launchOptions && 0 !== n.launchOptions.length;
    }
    getDefaultLaunchOption(e, t) {
        let n = y[(0, f.gW)(e, t)];
        if (null == n) return null;
        let { defaultLaunchOptionId: r, launchOptions: i } = n;
        return null == r || null == i ? null : i[r];
    }
    getLaunchOptions(e, t) {
        let n = y[(0, f.gW)(e, t)];
        return null == n || null == n.launchOptions ? [] : Object.values(n.launchOptions);
    }
    getHistoricalTotalBytesRead() {
        return O;
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
let $ = new z(s.h, { CONNECTION_OPEN: x, DISPATCH_APPLICATION_STATE_UPDATE: K });
