r.d(n, {
    A1: function () {
        return O;
    },
    LO: function () {
        return I;
    },
    S1: function () {
        return y;
    },
    Wx: function () {
        return L;
    },
    XT: function () {
        return w;
    },
    al: function () {
        return D;
    },
    cG: function () {
        return T;
    },
    li: function () {
        return A;
    },
    ob: function () {
        return b;
    },
    pC: function () {
        return C;
    },
    v4: function () {
        return N;
    },
    wO: function () {
        return R;
    },
    wi: function () {
        return x;
    }
});
var i = r(411104);
var a = r(544891),
    o = r(570140),
    s = r(812206),
    l = r(594190),
    u = r(703656),
    c = r(695346),
    d = r(391690),
    f = r(626135),
    p = r(129542),
    h = r(877481),
    _ = r(830168),
    m = r(57513),
    g = r(981631),
    E = r(388032);
let v = 64;
function y(e, n) {
    _.Z.init({
        userToken: e,
        userId: n,
        installPaths: d.Z.installationPaths,
        platform: (0, p.D)(),
        stateCallback: (e) => {
            o.Z.dispatch({
                type: 'DISPATCH_APPLICATION_STATE_UPDATE',
                state: e
            });
        },
        errorCallback: (e) => {
            o.Z.dispatch({
                type: 'DISPATCH_APPLICATION_ERROR',
                error: e
            });
        }
    });
}
function b() {
    _.Z.destroy();
}
function I(e) {
    let { application: n, branchId: r, buildId: i, manifestIds: a, installationPath: s, analyticsLocation: l } = e;
    _.Z.setTargetManifest({
        applicationId: n.id,
        applicationName: n.name,
        applicationIcon: n.icon,
        branchId: r,
        buildId: i,
        manifestIds: a,
        installationPath: s
    }),
        o.Z.dispatch({
            type: 'DISPATCH_APPLICATION_INSTALL',
            applicationId: n.id,
            branchId: r,
            installationPath: s
        }),
        f.default.track(g.rMx.LIBRARY_INSTALL_INITIATED, {
            application_id: n.id,
            application_name: n.name,
            sku_id: n.primarySkuId,
            location: l
        });
}
function T(e, n, r) {
    (0, m.l)(e.id, n).then(() => {
        o.Z.dispatch({
            type: 'DISPATCH_APPLICATION_REPAIR',
            applicationId: e.id,
            branchId: n
        });
    }),
        f.default.track(g.rMx.LIBRARY_REPAIR_INITIATED, {
            application_id: e.id,
            application_name: e.name,
            sku_id: e.primarySkuId,
            location: r
        });
}
function S(e, n, r, i) {
    if (l.ZP.getRunningDiscordApplicationIds().includes(e.id)) return;
    let a = d.Z.getInstallationPath(e.id, n);
    if (null == a) throw Error('Missing installation path for application: '.concat(e.id, ' ').concat(n));
    _.Z.setTargetManifest({
        applicationId: e.id,
        applicationName: e.name,
        applicationIcon: e.icon,
        branchId: n,
        buildId: r,
        manifestIds: i,
        installationPath: a
    });
}
function A(e, n, r, i) {
    let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    S(e, n, r, i),
        o.Z.dispatch({
            type: 'DISPATCH_APPLICATION_UPDATE',
            applicationId: e.id,
            branchId: n,
            automatic: a
        });
}
function C(e, n, r) {
    let i = s.Z.getApplication(e);
    null != i &&
        (h.Z.removeShortcuts(i.name),
        f.default.track(g.rMx.LIBRARY_UNINSTALL_INITIATED, {
            application_id: i.id,
            application_name: i.name,
            sku_id: i.primarySkuId,
            location: r
        })),
        _.Z.uninstall(e, n),
        o.Z.dispatch({
            type: 'DISPATCH_APPLICATION_UNINSTALL',
            applicationId: e,
            branchId: n
        });
}
function N() {
    _.Z.resume();
}
function R() {
    _.Z.pause();
}
function O(e, n) {
    o.Z.dispatch({
        type: 'DISPATCH_APPLICATION_MOVE_UP',
        applicationId: e,
        branchId: n
    });
}
function D(e, n) {
    _.Z.cancel(e, n),
        o.Z.dispatch({
            type: 'DISPATCH_APPLICATION_CANCEL',
            applicationId: e,
            branchId: n
        });
}
function x(e, n) {
    o.Z.dispatch({
        type: 'DISPATCH_APPLICATION_REMOVE_FINISHED',
        applicationId: e,
        branchId: n
    });
}
function L(e, n) {
    let r = s.Z.getApplication(e);
    null != r && h.Z.createShortcuts(c.Xc.getSetting(), c.Pe.getSetting(), r.name, r.id, n.installPath);
}
function w(e, n) {
    let i = s.Z.getApplication(e);
    a.tn.post({
        url: g.ANM.LIBRARY_APPLICATION_INSTALLED(e, e),
        oldFormErrors: !0,
        rejectWithError: !0
    }),
        null != i &&
            (h.Z.createShortcuts(c.Xc.getSetting(), c.Pe.getSetting(), i.name, i.id, n.installPath),
            Promise.resolve()
                .then(r.bind(r, 292556))
                .then((e) => {
                    let { default: n } = e;
                    n.showNotification(
                        i.getIconURL(v),
                        E.intl.string(E.t['1wR7yM']),
                        E.intl.formatToPlainString(E.t['89VAgY'], { name: i.name }),
                        { notif_type: 'Game Library Game Installed' },
                        {
                            onClick: () => (0, u.uL)(g.Z5c.APPLICATION_LIBRARY),
                            omitViewTracking: !0
                        }
                    );
                }));
}
