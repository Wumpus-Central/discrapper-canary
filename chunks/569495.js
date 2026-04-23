a.d(t, { A: () => X }), a(323874), a(14289), a(35956);
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(607399),
    o = a(311907),
    c = a(691540),
    d = a(857250),
    u = a(97483),
    h = a(861672),
    m = a(477782),
    p = a(173936),
    _ = a(138134),
    g = a(408278),
    x = a(265872),
    A = a(365199),
    f = a(663341),
    C = a(821609),
    v = a(782134),
    b = a(787389),
    j = a(688810),
    I = a(735991),
    E = a(361926),
    N = a(204776),
    S = a(50268),
    y = a(207371),
    P = a(928658),
    R = a(976860),
    T = a(611010),
    L = a(287809),
    D = a(954571),
    k = a(957565),
    O = a(692848),
    G = a(412461),
    M = a(310419),
    w = a(652215),
    U = a(985018),
    B = a(440970);
let F = "start_application_install",
    V = "launch_activity";
function H(e) {
    let { renderDropdown: t, size: a } = e,
        i = l.useRef(null);
    return (0, n.jsx)(x.Y, {
        targetElementRef: i,
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return t(a);
        },
        position: "left",
        align: "top",
        animation: x.Y.Animation.NONE,
        children: (e) =>
            (0, n.jsx)(g.K, {
                buttonRef: i,
                variant: "secondary",
                size: a,
                icon: A.j,
                "aria-label": U.intl.string(U.t["UKOtz+"]),
                ...e,
            }),
    });
}
function Y(e) {
    var t;
    let a,
        i,
        { application: s, variant: o, size: c, contentWidth: d } = e,
        { onClickInstallApplication: u, canInstall: h } =
            ((t = s),
            (a = (0, G.DB)()),
            (i = l.useCallback(() => {
                let e = M.h.getField("guildId") ?? void 0;
                (0, O.o)({
                    applicationId: t.id,
                    customInstallUrl: t.custom_install_url,
                    installParams: t.install_params,
                    integrationTypesConfig: t.integration_types_config,
                    guildId: e,
                    source: "product_page",
                });
            }, [t])),
            l.useEffect(() => {
                let e = new URL(location.href);
                if (a && "true" === e.searchParams.get(F)) {
                    e.searchParams.delete(F);
                    let t = e.pathname + e.search;
                    (0, R.bG)(t), i();
                }
            }, [a, i]),
            {
                onClickInstallApplication: l.useCallback(() => {
                    if (
                        ((0, G.TR)(w.HAw.APP_DIRECTORY_INSTALL_CLICKED, { application_id: t.id }),
                        (r.Fr || r.v1) && null == t.custom_install_url)
                    ) {
                        let e = (0, O.Z)({
                            applicationId: t.id,
                            customInstallUrl: t.custom_install_url,
                            installParams: t.install_params,
                            integrationTypesConfig: t.integration_types_config,
                        });
                        if (null != e) return void window.open(e, "_blank");
                    }
                    if (a) i();
                    else {
                        let e = M.h.getField("guildId");
                        D.default.track(w.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
                            application_id: t.id,
                            guild_id: e,
                            auth_type: null != t.custom_install_url ? "custom_url" : "in_app",
                            source: "product_page",
                            device_platform: r.Fr ? "mobile_web" : "desktop_web",
                        }),
                            (0, G.jL)({ [F]: "true" });
                    }
                }, [t, i, a]),
                canInstall: l.useMemo(
                    () =>
                        (0, N.Ie)({
                            customInstallUrl: t.custom_install_url,
                            installParams: t.install_params,
                            integrationTypesConfig: t.integration_types_config,
                        }),
                    [t],
                ),
            });
    return "icon" === d
        ? (0, n.jsx)(g.K, {
              variant: o,
              icon: f.p,
              size: c,
              onClick: u,
              "aria-label": U.intl.string(U.t.NgXl3C),
              disabled: !h,
          })
        : (0, n.jsx)(C.$, {
              variant: o,
              size: c,
              text: "small" === d ? U.intl.string(U.t.qRZ35t) : U.intl.string(U.t.NgXl3C),
              onClick: u,
              disabled: !h,
          });
}
function z(e) {
    let { size: t, contentWidth: a, onClick: l, isSubmitting: i } = e;
    return "icon" === a
        ? (0, n.jsx)(g.K, {
              variant: "primary",
              icon: v.u,
              size: t,
              onClick: l,
              loading: i,
              "aria-label": U.intl.string(U.t.QO7rO6),
          })
        : (0, n.jsx)(C.$, { variant: "primary", size: t, text: U.intl.string(U.t.QO7rO6), onClick: l, loading: i });
}
let X = l.forwardRef(function (e, t) {
    let { application: a, size: i } = e,
        { analyticsLocations: r } = (0, j.Ay)(),
        x = l.useCallback(() => {
            let e;
            (0, G.TR)(w.HAw.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: a.id }),
                (0, k.C)(
                    ((e = a.id), `${location.protocol}//${location.host}${w.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(e)}`),
                    () => (0, c.P0)((0, d.o)(U.intl.string(U.t["L/PwZf"]), u.Ck.SUCCESS)),
                );
        }, [a.id]),
        A = l.useCallback(() => {
            let e = T.Ay.createFromServer(a);
            (0, P.r3)({ application: e, entrypoint: "app_directory" });
        }, [a]),
        f = (0, S.A)({
            id: a.id,
            label: U.intl.string(U.t["FfCL+6"]),
            onSuccess: () => (0, c.P0)((0, d.o)(U.intl.string(U.t.eNjAah), u.Ck.SUCCESS)),
        }),
        C = l.useCallback(
            (e, t) =>
                (0, n.jsxs)(h.W, {
                    "data-menu-migrated-auto": !0,
                    navId: "application-directory-profile",
                    "aria-label": U.intl.string(U.t["/7I4/C"]),
                    onClose: t,
                    onSelect: void 0,
                    children: [
                        e
                            ? (0, n.jsx)(m.rX, {
                                  children: (0, n.jsx)(m.Dr, {
                                      id: "copy",
                                      label: U.intl.string(U.t.z4sP5J),
                                      action: x,
                                      icon: p.q,
                                      leadingAccessory: { type: "icon", icon: p.q },
                                  }),
                              })
                            : null,
                        (0, n.jsx)(m.rX, {
                            children: (0, n.jsx)(m.Dr, {
                                id: "report",
                                label: U.intl.string(U.t.NgA5vp),
                                color: "danger",
                                leadingAccessory: { type: "icon", icon: _.i },
                                action: A,
                            }),
                        }),
                        null != f ? (0, n.jsx)(m.rX, { children: f }) : null,
                    ],
                }),
            [f, A, x],
        ),
        { onClickLaunchActivity: v, isSubmitting: N } = (function (e, t) {
            let a = e.id,
                n = e?.bot?.id,
                i = (0, y.e)(e),
                s = (0, E.Vr)({ context: { type: "contextless" }, applicationId: a, botUserId: n }),
                r = null != n && (0, I.$B)(e) && (0, I.Ag)(e) && (i || s),
                [c, d] = l.useState(!1),
                u = (0, G.DB)(),
                h = (0, o.bG)([L.default], () => L.default.getCurrentUser()),
                m = (0, b.A)({
                    applicationId: a,
                    analyticsLocations: t,
                    runBeforeLaunchAttempt: () => d(!0),
                    runAfterLaunchAttempt: () => d(!1),
                });
            l.useEffect(() => {
                let e = new URL(location.href),
                    t = "true" === e.searchParams.get(V);
                if (u && r && t && null != n && null != h) {
                    e.searchParams.delete(V);
                    let t = e.pathname + e.search;
                    (0, R.bG)(t), m();
                }
            }, [u, r, n, h, m]);
            let p = l.useCallback(async () => {
                if (null != n) {
                    if (((0, G.TR)(w.HAw.APP_DIRECTORY_LAUNCH_CLICKED, { application_id: a }), !u))
                        return void (0, G.jL)({ [V]: "true" });
                    await m();
                }
            }, [a, n, u, m]);
            return { onClickLaunchActivity: r ? p : void 0, isSubmitting: c };
        })(a, r),
        D = null != v,
        O = D ? "secondary" : "primary";
    return (0, n.jsxs)("div", {
        ref: t,
        children: [
            (0, n.jsxs)("div", {
                className: s()(B.Ik, B.U),
                children: [
                    D && (0, n.jsx)(z, { size: i, contentWidth: "normal", onClick: v, isSubmitting: N }),
                    (0, n.jsx)(Y, { application: a, size: i, contentWidth: "normal", variant: O }),
                    k.p5
                        ? (0, n.jsx)(g.K, {
                              variant: "secondary",
                              size: i,
                              icon: p.q,
                              onClick: x,
                              "aria-label": U.intl.string(U.t.z4sP5J),
                          })
                        : null,
                    (0, n.jsx)(H, { renderDropdown: (e) => C(!1, e), size: i }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: s()(B.Ik, B.EX),
                children: [
                    D && (0, n.jsx)(z, { size: i, contentWidth: "small", onClick: v, isSubmitting: N }),
                    (0, n.jsx)(Y, { application: a, size: i, contentWidth: "small", variant: O }),
                    (0, n.jsx)(H, { renderDropdown: (e) => C(k.p5, e), size: i }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: s()(B.Ik, B.nU),
                children: [
                    D && (0, n.jsx)(z, { size: i, contentWidth: "icon", onClick: v, isSubmitting: N }),
                    (0, n.jsx)(Y, { application: a, size: i, contentWidth: "icon", variant: O }),
                    (0, n.jsx)(H, { renderDropdown: (e) => C(k.p5, e), size: i }),
                ],
            }),
        ],
    });
});
