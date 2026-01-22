n.d(t, { A: () => J }), n(896048), n(65821), n(142703);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(73153),
    l = n(77729),
    c = n(728071),
    u = n(961350),
    d = n(189081),
    f = n(645243),
    p = n(927813),
    _ = n(674378),
    h = n(723702),
    m = n(144914),
    g = n(966846),
    E = n(775228),
    b = n(652215);
function y(e, t, n) {
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
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = 200,
    I = 200,
    T = +p.A.Millis.MINUTE,
    C = {},
    N = "content",
    R = "file://",
    w = !1,
    P = 0,
    D = 0,
    x = 0,
    L = [],
    j = [],
    M = [],
    k = !1;
function U() {
    w = !1;
}
function G(e, t) {
    return t.some((t) => t.platforms.includes(e));
}
function V(e) {
    let {
            build_id: t,
            target_build_id: n,
            manifest_ids: r,
            target_manifest_ids: i,
            application_id: s,
            branch_id: o,
            launch_commands: c,
            launch_options: u,
            storage: d,
            install_path: p,
            installed_size: _,
            repairing: m,
        } = e,
        { should_patch: g } = e;
    switch ((null == g && (g = !0), e.state.type)) {
        case b.l6E.COMPLETE: {
            let e,
                E = {},
                y = null;
            if (m) e = b.WTw.REPAIRING;
            else if (null == t) e = b.WTw.INSTALL_REQUIRED;
            else if (g && (t !== n || (null != r && 0 !== a().difference(r, i).length))) e = b.WTw.UPDATE_REQUIRED;
            else if (((e = b.WTw.UP_TO_DATE), null != p)) {
                let e = l.A.fileManager.join(p, N),
                    t = (0, f.O)();
                if (null != u && 0 !== u.length) {
                    for (let n of (t !== b.lM6.WIN64 || G(t, u) || (t = b.lM6.WIN32), u))
                        if (n.platforms.includes(t)) {
                            let t,
                                { executable: r, name: i, working_dir: a } = n,
                                s = i,
                                o = l.A.fileManager.join(e, r);
                            (0, h.isMac)() && !o.startsWith(R) && (o = "".concat(R).concat(o)),
                                (t = null != a ? l.A.fileManager.join(e, a) : l.A.fileManager.dirname(o)),
                                (E[s] = v(O({}, n), {
                                    id: s,
                                    fullExecutablePath: o,
                                    fullWorkingDir: t,
                                })),
                                null == y && (y = s);
                        }
                } else if (null != c) {
                    t === b.lM6.WIN64 && null == c[t] && (t = b.lM6.WIN32);
                    let n = c[t];
                    if (null != n) {
                        let { executable: r } = n,
                            i = "Default",
                            a = i;
                        (E[a] = v(O({}, n), {
                            name: i,
                            id: a,
                            fullExecutablePath: l.A.fileManager.join(e, r),
                            fullWorkingDir: e,
                            platforms: [t],
                        })),
                            (y = a);
                    }
                }
            }
            return {
                type: e,
                applicationId: s,
                branchId: o,
                buildId: t,
                manifestIds: r,
                targetBuildId: n,
                targetManifestIds: i,
                installPath: p,
                installedSize: _,
                launchOptions: E,
                defaultLaunchOptionId: y,
                shouldPatch: g,
                storage: d,
            };
        }
        case b.l6E.TRANSITION: {
            let a,
                {
                    stage: l,
                    disk_progress: c,
                    network_progress: u,
                    reader_progress: d,
                    progress: f,
                    total: h,
                    paused: E,
                } = e.state,
                y = l.type;
            return {
                type: (a =
                    y === b.OQC.UNINSTALLING
                        ? b.WTw.UNINSTALLING
                        : m
                          ? b.WTw.REPAIRING
                          : null == t
                            ? b.WTw.INSTALLING
                            : b.WTw.UPDATING),
                stage: y,
                applicationId: s,
                branchId: o,
                buildId: t,
                manifestIds: r,
                targetBuildId: n,
                targetManifestIds: i,
                installPath: p,
                installedSize: _,
                diskProgress: c,
                networkProgress: u,
                readerProgress: d,
                progress: f,
                total: h,
                paused: E,
                shouldPatch: g,
            };
        }
    }
    throw Error("Invalid Dispatch State. state=".concat(e.state.type));
}
function F(e) {
    return e.type === b.WTw.INSTALLING || e.type === b.WTw.UPDATING || e.type === b.WTw.REPAIRING
        ? e.networkProgress
        : null;
}
function B(e) {
    return e.type === b.WTw.INSTALLING || e.type === b.WTw.UPDATING || e.type === b.WTw.REPAIRING
        ? e.diskProgress
        : null;
}
function H(e) {
    return e.type === b.WTw.INSTALLING || e.type === b.WTw.UPDATING || e.type === b.WTw.REPAIRING
        ? e.readerProgress
        : null;
}
function Y(e) {
    j = (j = [
        {
            bytes: e,
            timestamp: Date.now(),
        },
        ...j,
    ]).slice(0, I);
}
function W(e) {
    let t = Date.now(),
        n = t - T;
    L = (L = [
        {
            bytes: e,
            timestamp: t,
        },
        ...L,
    ])
        .slice(0, I)
        .filter((e) => {
            let { timestamp: t } = e;
            return t >= n;
        });
}
function K(e) {
    M = (M = [
        {
            bytes: e,
            timestamp: Date.now(),
        },
        ...M,
    ]).slice(0, I);
}
let z = a().throttle(Y, S),
    q = a().throttle(W, S),
    X = a().throttle(K, S);
function Z(e, t, n) {
    let r = n(C[t]),
        i = n(e[t]);
    return null != r && null != i && 0 !== r ? Math.max(i - r, 0) : 0;
}
function Q(e) {
    let { state: t } = e;
    w = !0;
    let n = {},
        r = t.applications,
        i = null != t.currentTask ? t.currentTask.branchId : null,
        a = !1;
    for (let e in r)
        for (let t in r[e]) {
            let s = (0, _.gW)(e, t);
            if (((n[s] = V(r[e][t])), null != C[s])) {
                let e = Z(n, s, F);
                e > 0 && z((P += e));
                let r = Z(n, s, B);
                r > 0 && X((D += r));
                let o = Z(n, s, H);
                if ((o > 0 && q((x += o)), i === t)) {
                    let e = n[s];
                    if (
                        !0 !== e.paused &&
                        (e.type === b.WTw.UNINSTALLING || e.type === b.WTw.INSTALLING || e.type === b.WTw.UPDATING)
                    )
                        switch (e.stage) {
                            case b.OQC.PATCHING:
                            case b.OQC.FINALIZING:
                            case b.OQC.VERIFYING:
                            case b.OQC.REPAIRING:
                            case b.OQC.POST_INSTALL_SCRIPTS:
                                c.A.setProgress("dispatch_application_progress", (0, _.uA)(e.progress, e.total) / 100),
                                    (a = !0);
                        }
                }
            }
            if (!k) {
                let r = l.A.fileManager.dirname(n[s].installPath);
                E.A.getInstallationPath(e, t) !== r &&
                    o.h.wait(() => {
                        o.h.dispatch({
                            type: "DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS",
                            applicationId: e,
                            branchId: t,
                            installationPath: r,
                        });
                    }),
                    -1 === g.A.getQueuePosition(e, t) &&
                        (n[s].type === b.WTw.INSTALLING || n[s].type === b.WTw.UPDATING) &&
                        d.A.hasApplication(e, t) &&
                        E.A.shouldBeInstalled(e, t) &&
                        o.h.wait(() => {
                            o.h.dispatch({
                                type: "DISPATCH_APPLICATION_UPDATE",
                                applicationId: e,
                                branchId: t,
                                automatic: !0,
                            });
                        });
            }
        }
    a || "dispatch_application_progress" !== c.A.taskID || c.A.clearProgress("dispatch_application_progress"),
        (C = n),
        (k = !0);
}
class $ extends (r = s.Ay.Store) {
    initialize() {
        this.waitFor(u.default);
    }
    getState(e, t) {
        return C[(0, _.gW)(e, t)];
    }
    isUpToDate(e, t) {
        let n = C[(0, _.gW)(e, t)];
        return null != n && n.type === b.WTw.UP_TO_DATE;
    }
    shouldPatch(e, t) {
        let n = C[(0, _.gW)(e, t)];
        return null != n && !0 === n.shouldPatch;
    }
    isInstalled(e, t) {
        let n = C[(0, _.gW)(e, t)];
        return null != n ? n.type !== b.WTw.UNINSTALLING : E.A.shouldBeInstalled(e, t);
    }
    supportsCloudSync(e, t) {
        null == t && (t = e);
        let n = C[(0, _.gW)(e, t)];
        return null != n && null != n.storage && !!n.storage.sync;
    }
    isLaunchable(e, t) {
        if (!(0, m.S)()) return !1;
        let n = C[(0, _.gW)(e, t)];
        return null != n && n.type === b.WTw.UP_TO_DATE && null != n.launchOptions && 0 !== n.launchOptions.length;
    }
    getDefaultLaunchOption(e, t) {
        let n = C[(0, _.gW)(e, t)];
        if (null == n) return null;
        let { defaultLaunchOptionId: r, launchOptions: i } = n;
        return null == r || null == i ? null : i[r];
    }
    getLaunchOptions(e, t) {
        let n = C[(0, _.gW)(e, t)];
        return null == n || null == n.launchOptions ? [] : Object.values(n.launchOptions);
    }
    getHistoricalTotalBytesRead() {
        return L;
    }
    getHistoricalTotalBytesDownloaded() {
        return j;
    }
    getHistoricalTotalBytesWritten() {
        return M;
    }
    whenInitialized(e) {
        this.addConditionalChangeListener(() => {
            if (w) return setImmediate(e), !1;
        });
    }
}
y($, "displayName", "DispatchApplicationStore");
let J = new $(o.h, {
    CONNECTION_OPEN: U,
    DISPATCH_APPLICATION_STATE_UPDATE: Q,
});
