n.d(t, {
    A1: () => C,
    LO: () => y,
    S1: () => E,
    Wx: () => D,
    XT: () => L,
    al: () => R,
    cG: () => I,
    li: () => b,
    ob: () => v,
    pC: () => S,
    v4: () => A,
    wO: () => N,
    wi: () => O
}),
    n(411104);
var i = n(544891),
    r = n(570140),
    a = n(812206),
    s = n(594190),
    o = n(703656),
    l = n(695346),
    u = n(391690),
    c = n(626135),
    d = n(129542),
    f = n(877481),
    _ = n(830168),
    p = n(57513),
    h = n(981631),
    m = n(388032);
let g = 64;
function E(e, t) {
    _.Z.init({
        userToken: e,
        userId: t,
        installPaths: u.Z.installationPaths,
        platform: (0, d.D)(),
        stateCallback: (e) => {
            r.Z.dispatch({
                type: 'DISPATCH_APPLICATION_STATE_UPDATE',
                state: e
            });
        },
        errorCallback: (e) => {
            r.Z.dispatch({
                type: 'DISPATCH_APPLICATION_ERROR',
                error: e
            });
        }
    });
}
function v() {
    _.Z.destroy();
}
function y(e) {
    let { application: t, branchId: n, buildId: i, manifestIds: a, installationPath: s, analyticsLocation: o } = e;
    _.Z.setTargetManifest({
        applicationId: t.id,
        applicationName: t.name,
        applicationIcon: t.icon,
        branchId: n,
        buildId: i,
        manifestIds: a,
        installationPath: s
    }),
        r.Z.dispatch({
            type: 'DISPATCH_APPLICATION_INSTALL',
            applicationId: t.id,
            branchId: n,
            installationPath: s
        }),
        c.default.track(h.rMx.LIBRARY_INSTALL_INITIATED, {
            application_id: t.id,
            application_name: t.name,
            sku_id: t.primarySkuId,
            location: o
        });
}
function I(e, t, n) {
    (0, p.l)(e.id, t).then(() => {
        r.Z.dispatch({
            type: 'DISPATCH_APPLICATION_REPAIR',
            applicationId: e.id,
            branchId: t
        });
    }),
        c.default.track(h.rMx.LIBRARY_REPAIR_INITIATED, {
            application_id: e.id,
            application_name: e.name,
            sku_id: e.primarySkuId,
            location: n
        });
}
function T(e, t, n, i) {
    if (s.ZP.getRunningDiscordApplicationIds().includes(e.id)) return;
    let r = u.Z.getInstallationPath(e.id, t);
    if (null == r) throw Error('Missing installation path for application: '.concat(e.id, ' ').concat(t));
    _.Z.setTargetManifest({
        applicationId: e.id,
        applicationName: e.name,
        applicationIcon: e.icon,
        branchId: t,
        buildId: n,
        manifestIds: i,
        installationPath: r
    });
}
function b(e, t, n, i) {
    let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    T(e, t, n, i),
        r.Z.dispatch({
            type: 'DISPATCH_APPLICATION_UPDATE',
            applicationId: e.id,
            branchId: t,
            automatic: a
        });
}
function S(e, t, n) {
    let i = a.Z.getApplication(e);
    null != i &&
        (f.Z.removeShortcuts(i.name),
        c.default.track(h.rMx.LIBRARY_UNINSTALL_INITIATED, {
            application_id: i.id,
            application_name: i.name,
            sku_id: i.primarySkuId,
            location: n
        })),
        _.Z.uninstall(e, t),
        r.Z.dispatch({
            type: 'DISPATCH_APPLICATION_UNINSTALL',
            applicationId: e,
            branchId: t
        });
}
function A() {
    _.Z.resume();
}
function N() {
    _.Z.pause();
}
function C(e, t) {
    r.Z.dispatch({
        type: 'DISPATCH_APPLICATION_MOVE_UP',
        applicationId: e,
        branchId: t
    });
}
function R(e, t) {
    _.Z.cancel(e, t),
        r.Z.dispatch({
            type: 'DISPATCH_APPLICATION_CANCEL',
            applicationId: e,
            branchId: t
        });
}
function O(e, t) {
    r.Z.dispatch({
        type: 'DISPATCH_APPLICATION_REMOVE_FINISHED',
        applicationId: e,
        branchId: t
    });
}
function D(e, t) {
    let n = a.Z.getApplication(e);
    null != n && f.Z.createShortcuts(l.Xc.getSetting(), l.Pe.getSetting(), n.name, n.id, t.installPath);
}
function L(e, t) {
    let r = a.Z.getApplication(e);
    i.tn.post({
        url: h.ANM.LIBRARY_APPLICATION_INSTALLED(e, e),
        oldFormErrors: !0,
        rejectWithError: !0
    }),
        null != r &&
            (f.Z.createShortcuts(l.Xc.getSetting(), l.Pe.getSetting(), r.name, r.id, t.installPath),
            Promise.resolve()
                .then(n.bind(n, 292556))
                .then((e) => {
                    let { default: t } = e;
                    t.showNotification(
                        r.getIconURL(g),
                        m.intl.string(m.t['1wR7yM']),
                        m.intl.formatToPlainString(m.t['89VAgY'], { name: r.name }),
                        { notif_type: 'Game Library Game Installed' },
                        {
                            onClick: () => (0, o.uL)(h.Z5c.APPLICATION_LIBRARY),
                            omitViewTracking: !0,
                            isUserAvatar: !1
                        }
                    );
                }));
}
