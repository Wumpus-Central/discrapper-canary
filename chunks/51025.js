n.d(t, {
    A1: () => A,
    LO: () => b,
    S1: () => E,
    Wx: () => P,
    XT: () => w,
    al: () => C,
    cG: () => y,
    li: () => S,
    ob: () => v,
    pC: () => I,
    v4: () => T,
    wO: () => N,
    wi: () => R
}),
    n(411104);
var r = n(544891),
    i = n(570140),
    o = n(812206),
    a = n(594190),
    s = n(703656),
    l = n(695346),
    c = n(391690),
    u = n(626135),
    d = n(129542),
    f = n(877481),
    p = n(830168),
    _ = n(57513),
    h = n(981631),
    m = n(388032);
let g = 64;
function E(e, t) {
    p.Z.init({
        userToken: e,
        userId: t,
        installPaths: c.Z.installationPaths,
        platform: (0, d.D)(),
        stateCallback: (e) => {
            i.Z.dispatch({
                type: 'DISPATCH_APPLICATION_STATE_UPDATE',
                state: e
            });
        },
        errorCallback: (e) => {
            i.Z.dispatch({
                type: 'DISPATCH_APPLICATION_ERROR',
                error: e
            });
        }
    });
}
function v() {
    p.Z.destroy();
}
function b(e) {
    let { application: t, branchId: n, buildId: r, manifestIds: o, installationPath: a, analyticsLocation: s } = e;
    p.Z.setTargetManifest({
        applicationId: t.id,
        applicationName: t.name,
        applicationIcon: t.icon,
        branchId: n,
        buildId: r,
        manifestIds: o,
        installationPath: a
    }),
        i.Z.dispatch({
            type: 'DISPATCH_APPLICATION_INSTALL',
            applicationId: t.id,
            branchId: n,
            installationPath: a
        }),
        u.default.track(h.rMx.LIBRARY_INSTALL_INITIATED, {
            application_id: t.id,
            application_name: t.name,
            sku_id: t.primarySkuId,
            location: s
        });
}
function y(e, t, n) {
    (0, _.l)(e.id, t).then(() => {
        i.Z.dispatch({
            type: 'DISPATCH_APPLICATION_REPAIR',
            applicationId: e.id,
            branchId: t
        });
    }),
        u.default.track(h.rMx.LIBRARY_REPAIR_INITIATED, {
            application_id: e.id,
            application_name: e.name,
            sku_id: e.primarySkuId,
            location: n
        });
}
function O(e, t, n, r) {
    if (a.ZP.getRunningDiscordApplicationIds().includes(e.id)) return;
    let i = c.Z.getInstallationPath(e.id, t);
    if (null == i) throw Error('Missing installation path for application: '.concat(e.id, ' ').concat(t));
    p.Z.setTargetManifest({
        applicationId: e.id,
        applicationName: e.name,
        applicationIcon: e.icon,
        branchId: t,
        buildId: n,
        manifestIds: r,
        installationPath: i
    });
}
function S(e, t, n, r) {
    let o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    O(e, t, n, r),
        i.Z.dispatch({
            type: 'DISPATCH_APPLICATION_UPDATE',
            applicationId: e.id,
            branchId: t,
            automatic: o
        });
}
function I(e, t, n) {
    let r = o.Z.getApplication(e);
    null != r &&
        (f.Z.removeShortcuts(r.name),
        u.default.track(h.rMx.LIBRARY_UNINSTALL_INITIATED, {
            application_id: r.id,
            application_name: r.name,
            sku_id: r.primarySkuId,
            location: n
        })),
        p.Z.uninstall(e, t),
        i.Z.dispatch({
            type: 'DISPATCH_APPLICATION_UNINSTALL',
            applicationId: e,
            branchId: t
        });
}
function T() {
    p.Z.resume();
}
function N() {
    p.Z.pause();
}
function A(e, t) {
    i.Z.dispatch({
        type: 'DISPATCH_APPLICATION_MOVE_UP',
        applicationId: e,
        branchId: t
    });
}
function C(e, t) {
    p.Z.cancel(e, t),
        i.Z.dispatch({
            type: 'DISPATCH_APPLICATION_CANCEL',
            applicationId: e,
            branchId: t
        });
}
function R(e, t) {
    i.Z.dispatch({
        type: 'DISPATCH_APPLICATION_REMOVE_FINISHED',
        applicationId: e,
        branchId: t
    });
}
function P(e, t) {
    let n = o.Z.getApplication(e);
    null != n && f.Z.createShortcuts(l.Xc.getSetting(), l.Pe.getSetting(), n.name, n.id, t.installPath);
}
function w(e, t) {
    let i = o.Z.getApplication(e);
    r.tn.post({
        url: h.ANM.LIBRARY_APPLICATION_INSTALLED(e, e),
        oldFormErrors: !0,
        rejectWithError: !0
    }),
        null != i &&
            (f.Z.createShortcuts(l.Xc.getSetting(), l.Pe.getSetting(), i.name, i.id, t.installPath),
            Promise.resolve()
                .then(n.bind(n, 292556))
                .then((e) => {
                    let { default: t } = e;
                    t.showNotification(
                        i.getIconURL(g),
                        m.NW.string(m.t['1wR7yM']),
                        m.NW.formatToPlainString(m.t['89VAgY'], { name: i.name }),
                        { notif_type: 'Game Library Game Installed' },
                        {
                            onClick: () => (0, s.uL)(h.Z5c.APPLICATION_LIBRARY),
                            omitViewTracking: !0,
                            isUserAvatar: !1
                        }
                    );
                }));
}
