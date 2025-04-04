n.d(t, { Z: () => $ }), n(47120), n(411104), n(177593);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(579806),
    c = n(632243),
    u = n(314897),
    d = n(283595),
    f = n(129542),
    _ = n(70956),
    p = n(780570),
    h = n(358085),
    m = n(804739),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = 200,
    T = 200,
    N = +_.Z.Millis.MINUTE,
    A = {},
    C = 'content',
    R = 'file://',
    P = !1,
    w = 0,
    D = 0,
    L = 0,
    x = [],
    M = [],
    k = [],
    j = !1;
function U() {
    P = !1;
}
function G(e, t) {
    return t.some((t) => t.platforms.includes(e));
}
function B(e) {
    let { build_id: t, target_build_id: n, manifest_ids: r, target_manifest_ids: i, application_id: a, branch_id: s, launch_commands: c, launch_options: u, storage: d, install_path: _, installed_size: p, repairing: m } = e,
        { should_patch: g } = e;
    switch ((null == g && (g = !0), e.state.type)) {
        case b.DJE.COMPLETE: {
            let e,
                E = {},
                y = null;
            if (m) e = b.vxO.REPAIRING;
            else if (null == t) e = b.vxO.INSTALL_REQUIRED;
            else if (g && (t !== n || (null != r && 0 !== o().difference(r, i).length))) e = b.vxO.UPDATE_REQUIRED;
            else if (((e = b.vxO.UP_TO_DATE), null != _)) {
                let e = l.Z.fileManager.join(_, C),
                    t = (0, f.D)();
                if (null != u && 0 !== u.length) {
                    for (let n of (t !== b.QR$.WIN64 || G(t, u) || (t = b.QR$.WIN32), u))
                        if (n.platforms.includes(t)) {
                            let t,
                                { executable: r, name: i, working_dir: o } = n,
                                a = i,
                                s = l.Z.fileManager.join(e, r);
                            (0, h.isMac)() && !s.startsWith(R) && (s = ''.concat(R).concat(s)),
                                (t = null != o ? l.Z.fileManager.join(e, o) : l.Z.fileManager.dirname(s)),
                                (E[a] = I(v({}, n), {
                                    id: a,
                                    fullExecutablePath: s,
                                    fullWorkingDir: t
                                })),
                                null == y && (y = a);
                        }
                } else if (null != c) {
                    t === b.QR$.WIN64 && null == c[t] && (t = b.QR$.WIN32);
                    let n = c[t];
                    if (null != n) {
                        let { executable: r } = n,
                            i = 'Default',
                            o = i;
                        (E[o] = I(v({}, n), {
                            name: i,
                            id: o,
                            fullExecutablePath: l.Z.fileManager.join(e, r),
                            fullWorkingDir: e,
                            platforms: [t]
                        })),
                            (y = o);
                    }
                }
            }
            return {
                type: e,
                applicationId: a,
                branchId: s,
                buildId: t,
                manifestIds: r,
                targetBuildId: n,
                targetManifestIds: i,
                installPath: _,
                installedSize: p,
                launchOptions: E,
                defaultLaunchOptionId: y,
                shouldPatch: g,
                storage: d
            };
        }
        case b.DJE.TRANSITION: {
            let o,
                { stage: l, disk_progress: c, network_progress: u, reader_progress: d, progress: f, total: h, paused: E } = e.state,
                y = l.type;
            return {
                type: (o = y === b.f07.UNINSTALLING ? b.vxO.UNINSTALLING : m ? b.vxO.REPAIRING : null == t ? b.vxO.INSTALLING : b.vxO.UPDATING),
                stage: y,
                applicationId: a,
                branchId: s,
                buildId: t,
                manifestIds: r,
                targetBuildId: n,
                targetManifestIds: i,
                installPath: _,
                installedSize: p,
                diskProgress: c,
                networkProgress: u,
                readerProgress: d,
                progress: f,
                total: h,
                paused: E,
                shouldPatch: g
            };
        }
    }
    throw Error('Invalid Dispatch State. state='.concat(e.state.type));
}
function F(e) {
    return e.type === b.vxO.INSTALLING || e.type === b.vxO.UPDATING || e.type === b.vxO.REPAIRING ? e.networkProgress : null;
}
function V(e) {
    return e.type === b.vxO.INSTALLING || e.type === b.vxO.UPDATING || e.type === b.vxO.REPAIRING ? e.diskProgress : null;
}
function Z(e) {
    return e.type === b.vxO.INSTALLING || e.type === b.vxO.UPDATING || e.type === b.vxO.REPAIRING ? e.readerProgress : null;
}
function H(e) {
    M = (M = [
        {
            bytes: e,
            timestamp: Date.now()
        },
        ...M
    ]).slice(0, T);
}
function W(e) {
    let t = Date.now(),
        n = t - N;
    x = (x = [
        {
            bytes: e,
            timestamp: t
        },
        ...x
    ])
        .slice(0, T)
        .filter((e) => {
            let { timestamp: t } = e;
            return t >= n;
        });
}
function Y(e) {
    k = (k = [
        {
            bytes: e,
            timestamp: Date.now()
        },
        ...k
    ]).slice(0, T);
}
let K = o().throttle(H, S),
    z = o().throttle(W, S),
    q = o().throttle(Y, S);
function Q(e, t, n) {
    let r = n(A[t]),
        i = n(e[t]);
    return null != r && null != i && 0 !== r ? Math.max(i - r, 0) : 0;
}
function X(e) {
    let { state: t } = e;
    P = !0;
    let n = {},
        r = t.applications,
        i = null != t.currentTask ? t.currentTask.branchId : null,
        o = !1;
    for (let e in r)
        for (let t in r[e]) {
            let a = (0, p.Tu)(e, t);
            if (((n[a] = B(r[e][t])), null != A[a])) {
                let e = Q(n, a, F);
                e > 0 && K((w += e));
                let r = Q(n, a, V);
                r > 0 && q((D += r));
                let s = Q(n, a, Z);
                if ((s > 0 && z((L += s)), i === t)) {
                    let e = n[a];
                    if (!0 !== e.paused && (e.type === b.vxO.UNINSTALLING || e.type === b.vxO.INSTALLING || e.type === b.vxO.UPDATING))
                        switch (e.stage) {
                            case b.f07.PATCHING:
                            case b.f07.FINALIZING:
                            case b.f07.VERIFYING:
                            case b.f07.REPAIRING:
                            case b.f07.POST_INSTALL_SCRIPTS:
                                c.Z.setProgress('dispatch_application_progress', (0, p.xI)(e.progress, e.total) / 100), (o = !0);
                        }
                }
            }
            if (!j) {
                let r = l.Z.fileManager.dirname(n[a].installPath);
                E.Z.getInstallationPath(e, t) !== r &&
                    s.Z.wait(() => {
                        s.Z.dispatch({
                            type: 'DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS',
                            applicationId: e,
                            branchId: t,
                            installationPath: r
                        });
                    }),
                    -1 === g.Z.getQueuePosition(e, t) &&
                        (n[a].type === b.vxO.INSTALLING || n[a].type === b.vxO.UPDATING) &&
                        d.Z.hasApplication(e, t) &&
                        E.Z.shouldBeInstalled(e, t) &&
                        s.Z.wait(() => {
                            s.Z.dispatch({
                                type: 'DISPATCH_APPLICATION_UPDATE',
                                applicationId: e,
                                branchId: t,
                                automatic: !0
                            });
                        });
            }
        }
    o || 'dispatch_application_progress' !== c.Z.taskID || c.Z.clearProgress('dispatch_application_progress'), (A = n), (j = !0);
}
class J extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(u.default);
    }
    getState(e, t) {
        return A[(0, p.Tu)(e, t)];
    }
    isUpToDate(e, t) {
        let n = A[(0, p.Tu)(e, t)];
        return null != n && n.type === b.vxO.UP_TO_DATE;
    }
    shouldPatch(e, t) {
        let n = A[(0, p.Tu)(e, t)];
        return null != n && !0 === n.shouldPatch;
    }
    isInstalled(e, t) {
        let n = A[(0, p.Tu)(e, t)];
        return null != n ? n.type !== b.vxO.UNINSTALLING : E.Z.shouldBeInstalled(e, t);
    }
    supportsCloudSync(e, t) {
        null == t && (t = e);
        let n = A[(0, p.Tu)(e, t)];
        return null != n && null != n.storage && !!n.storage.sync;
    }
    isLaunchable(e, t) {
        if (!(0, m.Q)()) return !1;
        let n = A[(0, p.Tu)(e, t)];
        return null != n && n.type === b.vxO.UP_TO_DATE && null != n.launchOptions && 0 !== n.launchOptions.length;
    }
    getDefaultLaunchOption(e, t) {
        let n = A[(0, p.Tu)(e, t)];
        if (null == n) return null;
        let { defaultLaunchOptionId: r, launchOptions: i } = n;
        return null == r || null == i ? null : i[r];
    }
    getLaunchOptions(e, t) {
        let n = A[(0, p.Tu)(e, t)];
        return null == n || null == n.launchOptions ? [] : Object.values(n.launchOptions);
    }
    getHistoricalTotalBytesRead() {
        return x;
    }
    getHistoricalTotalBytesDownloaded() {
        return M;
    }
    getHistoricalTotalBytesWritten() {
        return k;
    }
    whenInitialized(e) {
        this.addConditionalChangeListener(() => {
            if (P) return setImmediate(e), !1;
        });
    }
}
y(J, 'displayName', 'DispatchApplicationStore');
let $ = new J(s.Z, {
    CONNECTION_OPEN: U,
    DISPATCH_APPLICATION_STATE_UPDATE: X
});
