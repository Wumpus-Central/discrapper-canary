n.d(t, { Z: () => Q }), n(47120), n(411104), n(177593);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(579806),
    u = n(632243),
    c = n(314897),
    d = n(283595),
    f = n(129542),
    _ = n(70956),
    p = n(780570),
    h = n(358085),
    m = n(804739),
    g = n(941128),
    E = n(391690),
    v = n(981631);
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
let I = 200,
    T = 200,
    b = 1 * _.Z.Millis.MINUTE,
    S = {},
    A = 'content',
    N = 'file://',
    C = !1,
    R = 0,
    O = 0,
    D = 0,
    x = [],
    L = [],
    P = [],
    w = !1;
function M() {
    C = !1;
}
function k(e, t) {
    return t.some((t) => t.platforms.includes(e));
}
function U(e) {
    let { build_id: t, target_build_id: n, manifest_ids: i, target_manifest_ids: r, application_id: s, branch_id: o, launch_commands: u, launch_options: c, storage: d, install_path: _, installed_size: p, repairing: m } = e,
        { should_patch: g } = e;
    switch ((null == g && (g = !0), e.state.type)) {
        case v.DJE.COMPLETE: {
            let e;
            let E = {},
                y = null;
            if (m) e = v.vxO.REPAIRING;
            else if (null == t) e = v.vxO.INSTALL_REQUIRED;
            else if (g && (t !== n || (null != i && 0 !== a().difference(i, r).length))) e = v.vxO.UPDATE_REQUIRED;
            else if (((e = v.vxO.UP_TO_DATE), null != _)) {
                let e = l.Z.fileManager.join(_, A),
                    t = (0, f.D)();
                if (null != c && 0 !== c.length) {
                    for (let n of (t !== v.QR$.WIN64 || k(t, c) || (t = v.QR$.WIN32), c))
                        if (n.platforms.includes(t)) {
                            let t;
                            let { executable: i, name: r, working_dir: a } = n,
                                s = r,
                                o = l.Z.fileManager.join(e, i);
                            (0, h.isMac)() && !o.startsWith(N) && (o = ''.concat(N).concat(o)),
                                (t = null != a ? l.Z.fileManager.join(e, a) : l.Z.fileManager.dirname(o)),
                                (E[s] = {
                                    ...n,
                                    id: s,
                                    fullExecutablePath: o,
                                    fullWorkingDir: t
                                }),
                                null == y && (y = s);
                        }
                } else if (null != u) {
                    t === v.QR$.WIN64 && null == u[t] && (t = v.QR$.WIN32);
                    let n = u[t];
                    if (null != n) {
                        let { executable: i } = n,
                            r = 'Default',
                            a = r;
                        (E[a] = {
                            ...n,
                            name: r,
                            id: a,
                            fullExecutablePath: l.Z.fileManager.join(e, i),
                            fullWorkingDir: e,
                            platforms: [t]
                        }),
                            (y = a);
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
                targetManifestIds: r,
                installPath: _,
                installedSize: p,
                launchOptions: E,
                defaultLaunchOptionId: y,
                shouldPatch: g,
                storage: d
            };
        }
        case v.DJE.TRANSITION: {
            let a;
            let { stage: l, disk_progress: u, network_progress: c, reader_progress: d, progress: f, total: h, paused: E } = e.state,
                y = l.type;
            return {
                type: (a = y === v.f07.UNINSTALLING ? v.vxO.UNINSTALLING : m ? v.vxO.REPAIRING : null == t ? v.vxO.INSTALLING : v.vxO.UPDATING),
                stage: y,
                applicationId: s,
                branchId: o,
                buildId: t,
                manifestIds: i,
                targetBuildId: n,
                targetManifestIds: r,
                installPath: _,
                installedSize: p,
                diskProgress: u,
                networkProgress: c,
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
function G(e) {
    return e.type === v.vxO.INSTALLING || e.type === v.vxO.UPDATING || e.type === v.vxO.REPAIRING ? e.networkProgress : null;
}
function B(e) {
    return e.type === v.vxO.INSTALLING || e.type === v.vxO.UPDATING || e.type === v.vxO.REPAIRING ? e.diskProgress : null;
}
function Z(e) {
    return e.type === v.vxO.INSTALLING || e.type === v.vxO.UPDATING || e.type === v.vxO.REPAIRING ? e.readerProgress : null;
}
function F(e) {
    L = (L = [
        {
            bytes: e,
            timestamp: Date.now()
        },
        ...L
    ]).slice(0, T);
}
function V(e) {
    let t = Date.now(),
        n = t - b;
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
function j(e) {
    P = (P = [
        {
            bytes: e,
            timestamp: Date.now()
        },
        ...P
    ]).slice(0, T);
}
let H = a().throttle(F, I),
    Y = a().throttle(V, I),
    W = a().throttle(j, I);
function K(e, t, n) {
    let i = n(S[t]),
        r = n(e[t]);
    return null != i && null != r && 0 !== i ? Math.max(r - i, 0) : 0;
}
function z(e) {
    let { state: t } = e;
    C = !0;
    let n = {},
        i = t.applications,
        r = null != t.currentTask ? t.currentTask.branchId : null,
        a = !1;
    for (let e in i)
        for (let t in i[e]) {
            let s = (0, p.Tu)(e, t);
            if (((n[s] = U(i[e][t])), null != S[s])) {
                let e = K(n, s, G);
                e > 0 && H((R += e));
                let i = K(n, s, B);
                i > 0 && W((O += i));
                let o = K(n, s, Z);
                if ((o > 0 && Y((D += o)), r === t)) {
                    let e = n[s];
                    if (!0 !== e.paused && (e.type === v.vxO.UNINSTALLING || e.type === v.vxO.INSTALLING || e.type === v.vxO.UPDATING))
                        switch (e.stage) {
                            case v.f07.PATCHING:
                            case v.f07.FINALIZING:
                            case v.f07.VERIFYING:
                            case v.f07.REPAIRING:
                            case v.f07.POST_INSTALL_SCRIPTS:
                                u.Z.setProgress('dispatch_application_progress', (0, p.xI)(e.progress, e.total) / 100), (a = !0);
                        }
                }
            }
            if (!w) {
                let i = l.Z.fileManager.dirname(n[s].installPath);
                E.Z.getInstallationPath(e, t) !== i &&
                    o.Z.wait(() => {
                        o.Z.dispatch({
                            type: 'DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS',
                            applicationId: e,
                            branchId: t,
                            installationPath: i
                        });
                    }),
                    -1 === g.Z.getQueuePosition(e, t) &&
                        (n[s].type === v.vxO.INSTALLING || n[s].type === v.vxO.UPDATING) &&
                        d.Z.hasApplication(e, t) &&
                        E.Z.shouldBeInstalled(e, t) &&
                        o.Z.wait(() => {
                            o.Z.dispatch({
                                type: 'DISPATCH_APPLICATION_UPDATE',
                                applicationId: e,
                                branchId: t,
                                automatic: !0
                            });
                        });
            }
        }
    a || 'dispatch_application_progress' !== u.Z.taskID || u.Z.clearProgress('dispatch_application_progress'), (S = n), (w = !0);
}
class q extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(c.default);
    }
    getState(e, t) {
        return S[(0, p.Tu)(e, t)];
    }
    isUpToDate(e, t) {
        let n = S[(0, p.Tu)(e, t)];
        return null != n && n.type === v.vxO.UP_TO_DATE;
    }
    shouldPatch(e, t) {
        let n = S[(0, p.Tu)(e, t)];
        return null != n && !0 === n.shouldPatch;
    }
    isInstalled(e, t) {
        let n = S[(0, p.Tu)(e, t)];
        return null != n ? n.type !== v.vxO.UNINSTALLING : E.Z.shouldBeInstalled(e, t);
    }
    supportsCloudSync(e, t) {
        null == t && (t = e);
        let n = S[(0, p.Tu)(e, t)];
        return null != n && null != n.storage && !!n.storage.sync;
    }
    isLaunchable(e, t) {
        if (!(0, m.Q)()) return !1;
        let n = S[(0, p.Tu)(e, t)];
        return null != n && n.type === v.vxO.UP_TO_DATE && null != n.launchOptions && 0 !== n.launchOptions.length;
    }
    getDefaultLaunchOption(e, t) {
        let n = S[(0, p.Tu)(e, t)];
        if (null == n) return null;
        let { defaultLaunchOptionId: i, launchOptions: r } = n;
        return null == i || null == r ? null : r[i];
    }
    getLaunchOptions(e, t) {
        let n = S[(0, p.Tu)(e, t)];
        return null == n || null == n.launchOptions ? [] : Object.values(n.launchOptions);
    }
    getHistoricalTotalBytesRead() {
        return x;
    }
    getHistoricalTotalBytesDownloaded() {
        return L;
    }
    getHistoricalTotalBytesWritten() {
        return P;
    }
    whenInitialized(e) {
        this.addConditionalChangeListener(() => {
            if (C) return setImmediate(e), !1;
        });
    }
}
y(q, 'displayName', 'DispatchApplicationStore');
let Q = new q(o.Z, {
    CONNECTION_OPEN: M,
    DISPATCH_APPLICATION_STATE_UPDATE: z
});
