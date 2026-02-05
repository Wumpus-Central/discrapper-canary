a.d(t, { A: () => P }), a(323874), a(14289), a(35956);
var n = a(627968),
    i = a(64700),
    s = a(503698),
    l = a.n(s),
    r = a(607399),
    o = a(311907),
    c = a(397927),
    d = a(787389),
    u = a(688810),
    h = a(735991),
    m = a(204776),
    p = a(50268),
    _ = a(928658),
    g = a(976860),
    x = a(611010),
    A = a(287809),
    C = a(954571),
    b = a(957565),
    v = a(692848),
    f = a(412461),
    j = a(310419),
    I = a(652215),
    E = a(985018),
    S = a(688147);
let N = "start_application_install",
    y = "launch_activity";
function T(e) {
    let { renderDropdown: t, size: a } = e,
        s = i.useRef(null);
    return (0, n.jsx)(c.YNO, {
        targetElementRef: s,
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return t(a);
        },
        position: "left",
        align: "top",
        animation: c.YNO.Animation.NONE,
        children: (e) =>
            (0, n.jsx)(c.K0, {
                buttonRef: s,
                variant: "secondary",
                size: a,
                icon: c.jNK,
                "aria-label": E.intl.string(E.t["UKOtz+"]),
                ...e,
            }),
    });
}
function R(e) {
    var t;
    let a,
        s,
        { application: l, variant: o, size: d, contentWidth: u } = e,
        { onClickInstallApplication: h, canInstall: p } =
            ((t = l),
            (a = (0, f.DB)()),
            (s = i.useCallback(() => {
                let e = j.h.getField("guildId") ?? void 0;
                (0, v.o)({
                    applicationId: t.id,
                    customInstallUrl: t.custom_install_url,
                    installParams: t.install_params,
                    integrationTypesConfig: t.integration_types_config,
                    guildId: e,
                    source: "product_page",
                });
            }, [t])),
            i.useEffect(() => {
                let e = new URL(location.href);
                if (a && "true" === e.searchParams.get(N)) {
                    e.searchParams.delete(N);
                    let t = e.pathname + e.search;
                    (0, g.bG)(t), s();
                }
            }, [a, s]),
            {
                onClickInstallApplication: i.useCallback(() => {
                    if (
                        ((0, f.TR)(I.HAw.APP_DIRECTORY_INSTALL_CLICKED, { application_id: t.id }),
                        (r.Fr || r.v1) && null == t.custom_install_url)
                    ) {
                        let e = (0, v.Z)({
                            applicationId: t.id,
                            customInstallUrl: t.custom_install_url,
                            installParams: t.install_params,
                            integrationTypesConfig: t.integration_types_config,
                        });
                        if (null != e) return void window.open(e, "_blank");
                    }
                    if (a) s();
                    else {
                        let e = j.h.getField("guildId");
                        C.default.track(I.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
                            application_id: t.id,
                            guild_id: e,
                            auth_type: null != t.custom_install_url ? "custom_url" : "in_app",
                            source: "product_page",
                            device_platform: r.Fr ? "mobile_web" : "desktop_web",
                        }),
                            (0, f.jL)({ [N]: "true" });
                    }
                }, [t, s, a]),
                canInstall: i.useMemo(
                    () =>
                        (0, m.Ie)({
                            customInstallUrl: t.custom_install_url,
                            installParams: t.install_params,
                            integrationTypesConfig: t.integration_types_config,
                        }),
                    [t],
                ),
            });
    return "icon" === u
        ? (0, n.jsx)(c.K0, {
              variant: o,
              icon: c.pa$,
              size: d,
              onClick: h,
              "aria-label": E.intl.string(E.t.NgXl3C),
              disabled: !p,
          })
        : (0, n.jsx)(c.Button, {
              variant: o,
              size: d,
              text: "small" === u ? E.intl.string(E.t.qRZ35t) : E.intl.string(E.t.NgXl3C),
              onClick: h,
              disabled: !p,
          });
}
function L(e) {
    let { size: t, contentWidth: a, onClick: i, isSubmitting: s } = e;
    return "icon" === a
        ? (0, n.jsx)(c.K0, {
              variant: "primary",
              icon: c.udU,
              size: t,
              onClick: i,
              loading: s,
              "aria-label": E.intl.string(E.t.QO7rO6),
          })
        : (0, n.jsx)(c.Button, {
              variant: "primary",
              size: t,
              text: E.intl.string(E.t.QO7rO6),
              onClick: i,
              loading: s,
          });
}
let P = i.forwardRef(function (e, t) {
    let { application: a, size: s } = e,
        { analyticsLocations: r } = (0, u.Ay)(),
        m = i.useCallback(() => {
            let e;
            (0, f.TR)(I.HAw.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: a.id }),
                (0, b.C)(
                    ((e = a.id), `${location.protocol}//${location.host}${I.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(e)}`),
                    () => (0, c.showToast)((0, c.createToast)(E.intl.string(E.t["L/PwZf"]), c.ToastType.SUCCESS)),
                );
        }, [a.id]),
        C = i.useCallback(() => {
            let e = x.Ay.createFromServer(a);
            (0, _.r3)({ application: e, entrypoint: "app_directory" });
        }, [a]),
        v = (0, p.A)({
            id: a.id,
            label: E.intl.string(E.t["FfCL+6"]),
            onSuccess: () => (0, c.showToast)((0, c.createToast)(E.intl.string(E.t.eNjAah), c.ToastType.SUCCESS)),
        }),
        j = i.useCallback(
            (e, t) =>
                (0, n.jsxs)(c.W1t, {
                    "data-menu-migrated-auto": !0,
                    navId: "application-directory-profile",
                    "aria-label": E.intl.string(E.t["/7I4/C"]),
                    onClose: t,
                    onSelect: void 0,
                    children: [
                        e
                            ? (0, n.jsx)(c.rXV, {
                                  children: (0, n.jsx)(c.Drp, {
                                      id: "copy",
                                      label: E.intl.string(E.t.z4sP5J),
                                      action: m,
                                      icon: c.qYV,
                                      leadingAccessory: { type: "icon", icon: c.qYV },
                                  }),
                              })
                            : null,
                        (0, n.jsx)(c.rXV, {
                            children: (0, n.jsx)(c.Drp, {
                                id: "report",
                                label: E.intl.string(E.t.NgA5vp),
                                color: "danger",
                                leadingAccessory: { type: "icon", icon: c.iFK },
                                action: C,
                            }),
                        }),
                        null != v ? (0, n.jsx)(c.rXV, { children: v }) : null,
                    ],
                }),
            [v, C, m],
        ),
        { onClickLaunchActivity: N, isSubmitting: P } = (function (e, t) {
            let a = e.id,
                n = e?.bot?.id,
                s = null != n && (0, h.$B)(e) && (0, h.Ag)(e),
                [l, r] = i.useState(!1),
                c = (0, f.DB)(),
                u = (0, o.bG)([A.default], () => A.default.getCurrentUser()),
                m = (0, d.A)({
                    applicationId: a,
                    analyticsLocations: t,
                    runBeforeLaunchAttempt: () => r(!0),
                    runAfterLaunchAttempt: () => r(!1),
                });
            i.useEffect(() => {
                let e = new URL(location.href),
                    t = "true" === e.searchParams.get(y);
                if (c && s && t && null != n && null != u) {
                    e.searchParams.delete(y);
                    let t = e.pathname + e.search;
                    (0, g.bG)(t), m();
                }
            }, [c, s, n, u, m]);
            let p = i.useCallback(async () => {
                if (null != n) {
                    if (((0, f.TR)(I.HAw.APP_DIRECTORY_LAUNCH_CLICKED, { application_id: a }), !c))
                        return void (0, f.jL)({ [y]: "true" });
                    await m();
                }
            }, [a, n, c, m]);
            return { onClickLaunchActivity: s ? p : void 0, isSubmitting: l };
        })(a, r),
        D = null != N,
        O = D ? "secondary" : "primary";
    return (0, n.jsxs)("div", {
        ref: t,
        children: [
            (0, n.jsxs)("div", {
                className: l()(S.Ik, S.U),
                children: [
                    D && (0, n.jsx)(L, { size: s, contentWidth: "normal", onClick: N, isSubmitting: P }),
                    (0, n.jsx)(R, { application: a, size: s, contentWidth: "normal", variant: O }),
                    b.p5
                        ? (0, n.jsx)(c.K0, {
                              variant: "secondary",
                              size: s,
                              icon: c.qYV,
                              onClick: m,
                              "aria-label": E.intl.string(E.t.z4sP5J),
                          })
                        : null,
                    (0, n.jsx)(T, { renderDropdown: (e) => j(!1, e), size: s }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: l()(S.Ik, S.EX),
                children: [
                    D && (0, n.jsx)(L, { size: s, contentWidth: "small", onClick: N, isSubmitting: P }),
                    (0, n.jsx)(R, { application: a, size: s, contentWidth: "small", variant: O }),
                    (0, n.jsx)(T, { renderDropdown: (e) => j(b.p5, e), size: s }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: l()(S.Ik, S.nU),
                children: [
                    D && (0, n.jsx)(L, { size: s, contentWidth: "icon", onClick: N, isSubmitting: P }),
                    (0, n.jsx)(R, { application: a, size: s, contentWidth: "icon", variant: O }),
                    (0, n.jsx)(T, { renderDropdown: (e) => j(b.p5, e), size: s }),
                ],
            }),
        ],
    });
});
