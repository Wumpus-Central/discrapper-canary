n.d(t, { Z: () => $ }), n(388685), n(415506), n(358797);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(579806),
    c = n(632243),
    u = n(314897),
    d = n(283595),
    f = n(129542),
    p = n(70956),
    _ = n(780570),
    m = n(358085),
    h = n(804739),
    g = n(941128),
    E = n(391690),
    b = n(981631);
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
function v(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = 200,
    T = 200,
    A = +p.Z.Millis.MINUTE,
    C = {},
    N = "content",
    P = "file://",
    R = !1,
    w = 0,
    D = 0,
    x = 0,
    L = [],
    j = [],
    M = [],
    k = !1;
function U() {
    R = !1;
}
function G(e, t) {
    return t.some((t) => t.platforms.includes(e));
}
function Z(e) {
    let {
            build_id: t,
            target_build_id: n,
            manifest_ids: r,
            target_manifest_ids: i,
            application_id: o,
            branch_id: s,
            launch_commands: c,
            launch_options: u,
            storage: d,
            install_path: p,
            installed_size: _,
            repairing: h,
        } = e,
        { should_patch: g } = e;
    switch ((null == g && (g = !0), e.state.type)) {
        case b.DJE.COMPLETE: {
            let e,
                E = {},
                y = null;
            if (h) e = b.vxO.REPAIRING;
            else if (null == t) e = b.vxO.INSTALL_REQUIRED;
            else if (g && (t !== n || (null != r && 0 !== a().difference(r, i).length))) e = b.vxO.UPDATE_REQUIRED;
            else if (((e = b.vxO.UP_TO_DATE), null != p)) {
                let e = l.Z.fileManager.join(p, N),
                    t = (0, f.D)();
                if (null != u && 0 !== u.length) {
                    for (let n of (t !== b.QR$.WIN64 || G(t, u) || (t = b.QR$.WIN32), u))
                        if (n.platforms.includes(t)) {
                            let t,
                                { executable: r, name: i, working_dir: a } = n,
                                o = i,
                                s = l.Z.fileManager.join(e, r);
                            (0, m.isMac)() && !s.startsWith(P) && (s = "".concat(P).concat(s)),
                                (t = null != a ? l.Z.fileManager.join(e, a) : l.Z.fileManager.dirname(s)),
                                (E[o] = S(O({}, n), {
                                    id: o,
                                    fullExecutablePath: s,
                                    fullWorkingDir: t,
                                })),
                                null == y && (y = o);
                        }
                } else if (null != c) {
                    t === b.QR$.WIN64 && null == c[t] && (t = b.QR$.WIN32);
                    let n = c[t];
                    if (null != n) {
                        let { executable: r } = n,
                            i = "Default",
                            a = i;
                        (E[a] = S(O({}, n), {
                            name: i,
                            id: a,
                            fullExecutablePath: l.Z.fileManager.join(e, r),
                            fullWorkingDir: e,
                            platforms: [t],
                        })),
                            (y = a);
                    }
                }
            }
            return {
                type: e,
                applicationId: o,
                branchId: s,
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
        case b.DJE.TRANSITION: {
            let a,
                {
                    stage: l,
                    disk_progress: c,
                    network_progress: u,
                    reader_progress: d,
                    progress: f,
                    total: m,
                    paused: E,
                } = e.state,
                y = l.type;
            return {
                type: (a =
                    y === b.f07.UNINSTALLING
                        ? b.vxO.UNINSTALLING
                        : h
                          ? b.vxO.REPAIRING
                          : null == t
                            ? b.vxO.INSTALLING
                            : b.vxO.UPDATING),
                stage: y,
                applicationId: o,
                branchId: s,
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
                total: m,
                paused: E,
                shouldPatch: g,
            };
        }
    }
    throw Error("Invalid Dispatch State. state=".concat(e.state.type));
}
function B(e) {
    return e.type === b.vxO.INSTALLING || e.type === b.vxO.UPDATING || e.type === b.vxO.REPAIRING
        ? e.networkProgress
        : null;
}
function F(e) {
    return e.type === b.vxO.INSTALLING || e.type === b.vxO.UPDATING || e.type === b.vxO.REPAIRING
        ? e.diskProgress
        : null;
}
function V(e) {
    return e.type === b.vxO.INSTALLING || e.type === b.vxO.UPDATING || e.type === b.vxO.REPAIRING
        ? e.readerProgress
        : null;
}
function H(e) {
    j = (j = [
        {
            bytes: e,
            timestamp: Date.now(),
        },
        ...j,
    ]).slice(0, T);
}
function Y(e) {
    let t = Date.now(),
        n = t - A;
    L = (L = [
        {
            bytes: e,
            timestamp: t,
        },
        ...L,
    ])
        .slice(0, T)
        .filter((e) => {
            let { timestamp: t } = e;
            return t >= n;
        });
}
function W(e) {
    M = (M = [
        {
            bytes: e,
            timestamp: Date.now(),
        },
        ...M,
    ]).slice(0, T);
}
let K = a().throttle(H, I),
    z = a().throttle(Y, I),
    q = a().throttle(W, I);
function Q(e, t, n) {
    let r = n(C[t]),
        i = n(e[t]);
    return null != r && null != i && 0 !== r ? Math.max(i - r, 0) : 0;
}
function X(e) {
    let { state: t } = e;
    R = !0;
    let n = {},
        r = t.applications,
        i = null != t.currentTask ? t.currentTask.branchId : null,
        a = !1;
    for (let e in r)
        for (let t in r[e]) {
            let o = (0, _.Tu)(e, t);
            if (((n[o] = Z(r[e][t])), null != C[o])) {
                let e = Q(n, o, B);
                e > 0 && K((w += e));
                let r = Q(n, o, F);
                r > 0 && q((D += r));
                let s = Q(n, o, V);
                if ((s > 0 && z((x += s)), i === t)) {
                    let e = n[o];
                    if (
                        !0 !== e.paused &&
                        (e.type === b.vxO.UNINSTALLING || e.type === b.vxO.INSTALLING || e.type === b.vxO.UPDATING)
                    )
                        switch (e.stage) {
                            case b.f07.PATCHING:
                            case b.f07.FINALIZING:
                            case b.f07.VERIFYING:
                            case b.f07.REPAIRING:
                            case b.f07.POST_INSTALL_SCRIPTS:
                                c.Z.setProgress("dispatch_application_progress", (0, _.xI)(e.progress, e.total) / 100),
                                    (a = !0);
                        }
                }
            }
            if (!k) {
                let r = l.Z.fileManager.dirname(n[o].installPath);
                E.Z.getInstallationPath(e, t) !== r &&
                    s.Z.wait(() => {
                        s.Z.dispatch({
                            type: "DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS",
                            applicationId: e,
                            branchId: t,
                            installationPath: r,
                        });
                    }),
                    -1 === g.Z.getQueuePosition(e, t) &&
                        (n[o].type === b.vxO.INSTALLING || n[o].type === b.vxO.UPDATING) &&
                        d.Z.hasApplication(e, t) &&
                        E.Z.shouldBeInstalled(e, t) &&
                        s.Z.wait(() => {
                            s.Z.dispatch({
                                type: "DISPATCH_APPLICATION_UPDATE",
                                applicationId: e,
                                branchId: t,
                                automatic: !0,
                            });
                        });
            }
        }
    a || "dispatch_application_progress" !== c.Z.taskID || c.Z.clearProgress("dispatch_application_progress"),
        (C = n),
        (k = !0);
}
class J extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(u.default);
    }
    getState(e, t) {
        return C[(0, _.Tu)(e, t)];
    }
    isUpToDate(e, t) {
        let n = C[(0, _.Tu)(e, t)];
        return null != n && n.type === b.vxO.UP_TO_DATE;
    }
    shouldPatch(e, t) {
        let n = C[(0, _.Tu)(e, t)];
        return null != n && !0 === n.shouldPatch;
    }
    isInstalled(e, t) {
        let n = C[(0, _.Tu)(e, t)];
        return null != n ? n.type !== b.vxO.UNINSTALLING : E.Z.shouldBeInstalled(e, t);
    }
    supportsCloudSync(e, t) {
        null == t && (t = e);
        let n = C[(0, _.Tu)(e, t)];
        return null != n && null != n.storage && !!n.storage.sync;
    }
    isLaunchable(e, t) {
        if (!(0, h.Q)()) return !1;
        let n = C[(0, _.Tu)(e, t)];
        return null != n && n.type === b.vxO.UP_TO_DATE && null != n.launchOptions && 0 !== n.launchOptions.length;
    }
    getDefaultLaunchOption(e, t) {
        let n = C[(0, _.Tu)(e, t)];
        if (null == n) return null;
        let { defaultLaunchOptionId: r, launchOptions: i } = n;
        return null == r || null == i ? null : i[r];
    }
    getLaunchOptions(e, t) {
        let n = C[(0, _.Tu)(e, t)];
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
            if (R) return setImmediate(e), !1;
        });
    }
}
y(J, "displayName", "DispatchApplicationStore");
let $ = new J(s.Z, {
    CONNECTION_OPEN: U,
    DISPATCH_APPLICATION_STATE_UPDATE: X,
});
