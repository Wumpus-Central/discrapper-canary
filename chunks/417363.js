var i,
    a,
    s = r(47120);
var o = r(411104);
var l = r(177593);
var u = r(392711),
    c = r.n(u),
    d = r(442837),
    f = r(570140),
    _ = r(579806),
    h = r(632243),
    p = r(314897),
    m = r(283595),
    g = r(129542),
    E = r(70956),
    v = r(780570),
    I = r(358085),
    T = r(804739),
    b = r(941128),
    y = r(391690),
    S = r(981631);
function A(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let N = 200,
    C = 200,
    R = 1 * E.Z.Millis.MINUTE;
!(function (e) {
    e.DISPATCH_APPLICATION_PROGRESS = 'dispatch_application_progress';
})(i || (i = {}));
let O = {},
    D = 'content',
    L = 'file://',
    x = !1,
    w = 0,
    P = 0,
    M = 0,
    k = [],
    U = [],
    B = [],
    G = !1;
function Z() {
    x = !1;
}
function F(e, n) {
    return n.some((n) => n.platforms.includes(e));
}
function V(e) {
    let { build_id: n, target_build_id: r, manifest_ids: i, target_manifest_ids: a, application_id: s, branch_id: o, launch_commands: l, launch_options: u, storage: d, install_path: f, installed_size: h, repairing: p } = e,
        { should_patch: m } = e;
    switch ((null == m && (m = !0), e.state.type)) {
        case S.DJE.COMPLETE: {
            let e;
            let E = {},
                v = null;
            if (p) e = S.vxO.REPAIRING;
            else if (null == n) e = S.vxO.INSTALL_REQUIRED;
            else if (m && (n !== r || (null != i && 0 !== c().difference(i, a).length))) e = S.vxO.UPDATE_REQUIRED;
            else if (((e = S.vxO.UP_TO_DATE), null != f)) {
                let e = _.Z.fileManager.join(f, D),
                    n = (0, g.D)();
                if (null != u && 0 !== u.length) {
                    for (let r of (n === S.QR$.WIN64 && !F(n, u) && (n = S.QR$.WIN32), u))
                        if (r.platforms.includes(n)) {
                            let n;
                            let { executable: i, name: a, working_dir: s } = r,
                                o = a,
                                l = _.Z.fileManager.join(e, i);
                            (0, I.isMac)() && !l.startsWith(L) && (l = ''.concat(L).concat(l)),
                                (n = null != s ? _.Z.fileManager.join(e, s) : _.Z.fileManager.dirname(l)),
                                (E[o] = {
                                    ...r,
                                    id: o,
                                    fullExecutablePath: l,
                                    fullWorkingDir: n
                                }),
                                null == v && (v = o);
                        }
                } else if (null != l) {
                    n === S.QR$.WIN64 && null == l[n] && (n = S.QR$.WIN32);
                    let r = l[n];
                    if (null != r) {
                        let { executable: i } = r,
                            a = 'Default',
                            s = a;
                        (E[s] = {
                            ...r,
                            name: a,
                            id: s,
                            fullExecutablePath: _.Z.fileManager.join(e, i),
                            fullWorkingDir: e,
                            platforms: [n]
                        }),
                            (v = s);
                    }
                }
            }
            return {
                type: e,
                applicationId: s,
                branchId: o,
                buildId: n,
                manifestIds: i,
                targetBuildId: r,
                targetManifestIds: a,
                installPath: f,
                installedSize: h,
                launchOptions: E,
                defaultLaunchOptionId: v,
                shouldPatch: m,
                storage: d
            };
        }
        case S.DJE.TRANSITION: {
            let l;
            let { stage: u, disk_progress: c, network_progress: d, reader_progress: _, progress: g, total: E, paused: v } = e.state,
                I = u.type;
            return {
                type: (l = I === S.f07.UNINSTALLING ? S.vxO.UNINSTALLING : p ? S.vxO.REPAIRING : null == n ? S.vxO.INSTALLING : S.vxO.UPDATING),
                stage: I,
                applicationId: s,
                branchId: o,
                buildId: n,
                manifestIds: i,
                targetBuildId: r,
                targetManifestIds: a,
                installPath: f,
                installedSize: h,
                diskProgress: c,
                networkProgress: d,
                readerProgress: _,
                progress: g,
                total: E,
                paused: v,
                shouldPatch: m
            };
        }
    }
    throw Error('Invalid Dispatch State. state='.concat(e.state.type));
}
function j(e) {
    return e.type === S.vxO.INSTALLING || e.type === S.vxO.UPDATING || e.type === S.vxO.REPAIRING ? e.networkProgress : null;
}
function H(e) {
    return e.type === S.vxO.INSTALLING || e.type === S.vxO.UPDATING || e.type === S.vxO.REPAIRING ? e.diskProgress : null;
}
function Y(e) {
    return e.type === S.vxO.INSTALLING || e.type === S.vxO.UPDATING || e.type === S.vxO.REPAIRING ? e.readerProgress : null;
}
function W(e) {
    U = (U = [
        {
            bytes: e,
            timestamp: Date.now()
        },
        ...U
    ]).slice(0, C);
}
function K(e) {
    let n = Date.now(),
        r = n - R;
    k = (k = [
        {
            bytes: e,
            timestamp: n
        },
        ...k
    ])
        .slice(0, C)
        .filter((e) => {
            let { timestamp: n } = e;
            return n >= r;
        });
}
function z(e) {
    B = (B = [
        {
            bytes: e,
            timestamp: Date.now()
        },
        ...B
    ]).slice(0, C);
}
let q = c().throttle(W, N),
    Q = c().throttle(K, N),
    X = c().throttle(z, N);
function J(e, n, r) {
    let i = r(O[n]),
        a = r(e[n]);
    return null != i && null != a && 0 !== i ? Math.max(a - i, 0) : 0;
}
function $(e) {
    let { state: n } = e;
    x = !0;
    let r = {},
        i = n.applications,
        a = null != n.currentTask ? n.currentTask.branchId : null,
        s = !1;
    for (let e in i)
        for (let n in i[e]) {
            let o = (0, v.Tu)(e, n);
            if (((r[o] = V(i[e][n])), null != O[o])) {
                let e = J(r, o, j);
                e > 0 && q((w += e));
                let i = J(r, o, H);
                i > 0 && X((P += i));
                let l = J(r, o, Y);
                if ((l > 0 && Q((M += l)), a === n)) {
                    let e = r[o];
                    if (!0 !== e.paused && (e.type === S.vxO.UNINSTALLING || e.type === S.vxO.INSTALLING || e.type === S.vxO.UPDATING))
                        switch (e.stage) {
                            case S.f07.PATCHING:
                            case S.f07.FINALIZING:
                            case S.f07.VERIFYING:
                            case S.f07.REPAIRING:
                            case S.f07.POST_INSTALL_SCRIPTS:
                                h.Z.setProgress('dispatch_application_progress', (0, v.xI)(e.progress, e.total) / 100), (s = !0);
                        }
                }
            }
            if (!G) {
                let i = _.Z.fileManager.dirname(r[o].installPath);
                y.Z.getInstallationPath(e, n) !== i &&
                    f.Z.wait(() => {
                        f.Z.dispatch({
                            type: 'DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS',
                            applicationId: e,
                            branchId: n,
                            installationPath: i
                        });
                    }),
                    -1 === b.Z.getQueuePosition(e, n) &&
                        (r[o].type === S.vxO.INSTALLING || r[o].type === S.vxO.UPDATING) &&
                        m.Z.hasApplication(e, n) &&
                        y.Z.shouldBeInstalled(e, n) &&
                        f.Z.wait(() => {
                            f.Z.dispatch({
                                type: 'DISPATCH_APPLICATION_UPDATE',
                                applicationId: e,
                                branchId: n,
                                automatic: !0
                            });
                        });
            }
        }
    !s && 'dispatch_application_progress' === h.Z.taskID && h.Z.clearProgress('dispatch_application_progress'), (O = r), (G = !0);
}
class ee extends (a = d.ZP.Store) {
    initialize() {
        this.waitFor(p.default);
    }
    getState(e, n) {
        return O[(0, v.Tu)(e, n)];
    }
    isUpToDate(e, n) {
        let r = O[(0, v.Tu)(e, n)];
        return null != r && r.type === S.vxO.UP_TO_DATE;
    }
    shouldPatch(e, n) {
        let r = O[(0, v.Tu)(e, n)];
        return null != r && !0 === r.shouldPatch;
    }
    isInstalled(e, n) {
        let r = O[(0, v.Tu)(e, n)];
        return null != r ? r.type !== S.vxO.UNINSTALLING : y.Z.shouldBeInstalled(e, n);
    }
    supportsCloudSync(e, n) {
        null == n && (n = e);
        let r = O[(0, v.Tu)(e, n)];
        return null != r && null != r.storage && !!r.storage.sync;
    }
    isLaunchable(e, n) {
        if (!(0, T.Q)()) return !1;
        let r = O[(0, v.Tu)(e, n)];
        return null != r && r.type === S.vxO.UP_TO_DATE && null != r.launchOptions && 0 !== r.launchOptions.length;
    }
    getDefaultLaunchOption(e, n) {
        let r = O[(0, v.Tu)(e, n)];
        if (null == r) return null;
        let { defaultLaunchOptionId: i, launchOptions: a } = r;
        return null == i || null == a ? null : a[i];
    }
    getLaunchOptions(e, n) {
        let r = O[(0, v.Tu)(e, n)];
        return null == r || null == r.launchOptions ? [] : Object.values(r.launchOptions);
    }
    getHistoricalTotalBytesRead() {
        return k;
    }
    getHistoricalTotalBytesDownloaded() {
        return U;
    }
    getHistoricalTotalBytesWritten() {
        return B;
    }
    whenInitialized(e) {
        this.addConditionalChangeListener(() => {
            if (x) return setImmediate(e), !1;
        });
    }
}
A(ee, 'displayName', 'DispatchApplicationStore'),
    (n.Z = new ee(f.Z, {
        CONNECTION_OPEN: Z,
        DISPATCH_APPLICATION_STATE_UPDATE: $
    }));
