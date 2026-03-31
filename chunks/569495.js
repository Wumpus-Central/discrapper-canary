a.d(t, { A: () => O }), a(323874), a(14289), a(35956);
var n = a(627968),
    i = a(64700),
    l = a(503698),
    s = a.n(l),
    r = a(607399),
    o = a(311907),
    c = a(397927),
    d = a(787389),
    u = a(688810),
    m = a(735991),
    h = a(361926),
    p = a(204776),
    _ = a(50268),
    g = a(207371),
    x = a(928658),
    A = a(976860),
    f = a(611010),
    b = a(287809),
    C = a(954571),
    v = a(957565),
    j = a(692848),
    I = a(412461),
    S = a(310419),
    E = a(652215),
    N = a(985018),
    y = a(972729);
let T = "start_application_install",
    R = "launch_activity";
function P(e) {
    let { renderDropdown: t, size: a } = e,
        l = i.useRef(null);
    return (0, n.jsx)(c.YNO, {
        targetElementRef: l,
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return t(a);
        },
        position: "left",
        align: "top",
        animation: c.YNO.Animation.NONE,
        children: (e) =>
            (0, n.jsx)(c.K0, {
                buttonRef: l,
                variant: "secondary",
                size: a,
                icon: c.jNK,
                "aria-label": N.intl.string(N.t["UKOtz+"]),
                ...e,
            }),
    });
}
function L(e) {
    var t;
    let a,
        l,
        { application: s, variant: o, size: d, contentWidth: u } = e,
        { onClickInstallApplication: m, canInstall: h } =
            ((t = s),
            (a = (0, I.DB)()),
            (l = i.useCallback(() => {
                let e = S.h.getField("guildId") ?? void 0;
                (0, j.o)({
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
                if (a && "true" === e.searchParams.get(T)) {
                    e.searchParams.delete(T);
                    let t = e.pathname + e.search;
                    (0, A.bG)(t), l();
                }
            }, [a, l]),
            {
                onClickInstallApplication: i.useCallback(() => {
                    if (
                        ((0, I.TR)(E.HAw.APP_DIRECTORY_INSTALL_CLICKED, { application_id: t.id }),
                        (r.Fr || r.v1) && null == t.custom_install_url)
                    ) {
                        let e = (0, j.Z)({
                            applicationId: t.id,
                            customInstallUrl: t.custom_install_url,
                            installParams: t.install_params,
                            integrationTypesConfig: t.integration_types_config,
                        });
                        if (null != e) return void window.open(e, "_blank");
                    }
                    if (a) l();
                    else {
                        let e = S.h.getField("guildId");
                        C.default.track(E.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
                            application_id: t.id,
                            guild_id: e,
                            auth_type: null != t.custom_install_url ? "custom_url" : "in_app",
                            source: "product_page",
                            device_platform: r.Fr ? "mobile_web" : "desktop_web",
                        }),
                            (0, I.jL)({ [T]: "true" });
                    }
                }, [t, l, a]),
                canInstall: i.useMemo(
                    () =>
                        (0, p.Ie)({
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
              onClick: m,
              "aria-label": N.intl.string(N.t.NgXl3C),
              disabled: !h,
          })
        : (0, n.jsx)(c.Button, {
              variant: o,
              size: d,
              text: "small" === u ? N.intl.string(N.t.qRZ35t) : N.intl.string(N.t.NgXl3C),
              onClick: m,
              disabled: !h,
          });
}
function D(e) {
    let { size: t, contentWidth: a, onClick: i, isSubmitting: l } = e;
    return "icon" === a
        ? (0, n.jsx)(c.K0, {
              variant: "primary",
              icon: c.udU,
              size: t,
              onClick: i,
              loading: l,
              "aria-label": N.intl.string(N.t.QO7rO6),
          })
        : (0, n.jsx)(c.Button, {
              variant: "primary",
              size: t,
              text: N.intl.string(N.t.QO7rO6),
              onClick: i,
              loading: l,
          });
}
let O = i.forwardRef(function (e, t) {
    let { application: a, size: l } = e,
        { analyticsLocations: r } = (0, u.Ay)(),
        p = i.useCallback(() => {
            let e;
            (0, I.TR)(E.HAw.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: a.id }),
                (0, v.C)(
                    ((e = a.id), `${location.protocol}//${location.host}${E.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(e)}`),
                    () => (0, c.showToast)((0, c.createToast)(N.intl.string(N.t["L/PwZf"]), c.ToastType.SUCCESS)),
                );
        }, [a.id]),
        C = i.useCallback(() => {
            let e = f.Ay.createFromServer(a);
            (0, x.r3)({ application: e, entrypoint: "app_directory" });
        }, [a]),
        j = (0, _.A)({
            id: a.id,
            label: N.intl.string(N.t["FfCL+6"]),
            onSuccess: () => (0, c.showToast)((0, c.createToast)(N.intl.string(N.t.eNjAah), c.ToastType.SUCCESS)),
        }),
        S = i.useCallback(
            (e, t) =>
                (0, n.jsxs)(c.W1t, {
                    "data-menu-migrated-auto": !0,
                    navId: "application-directory-profile",
                    "aria-label": N.intl.string(N.t["/7I4/C"]),
                    onClose: t,
                    onSelect: void 0,
                    children: [
                        e
                            ? (0, n.jsx)(c.rXV, {
                                  children: (0, n.jsx)(c.Drp, {
                                      id: "copy",
                                      label: N.intl.string(N.t.z4sP5J),
                                      action: p,
                                      icon: c.qYV,
                                      leadingAccessory: { type: "icon", icon: c.qYV },
                                  }),
                              })
                            : null,
                        (0, n.jsx)(c.rXV, {
                            children: (0, n.jsx)(c.Drp, {
                                id: "report",
                                label: N.intl.string(N.t.NgA5vp),
                                color: "danger",
                                leadingAccessory: { type: "icon", icon: c.iFK },
                                action: C,
                            }),
                        }),
                        null != j ? (0, n.jsx)(c.rXV, { children: j }) : null,
                    ],
                }),
            [j, C, p],
        ),
        { onClickLaunchActivity: T, isSubmitting: O } = (function (e, t) {
            let a = e.id,
                n = e?.bot?.id,
                l = (0, g.e)(e),
                s = (0, h.Vr)({ context: { type: "contextless" }, applicationId: a, botUserId: n }),
                r = null != n && (0, m.$B)(e) && (0, m.Ag)(e) && (l || s),
                [c, u] = i.useState(!1),
                p = (0, I.DB)(),
                _ = (0, o.bG)([b.default], () => b.default.getCurrentUser()),
                x = (0, d.A)({
                    applicationId: a,
                    analyticsLocations: t,
                    runBeforeLaunchAttempt: () => u(!0),
                    runAfterLaunchAttempt: () => u(!1),
                });
            i.useEffect(() => {
                let e = new URL(location.href),
                    t = "true" === e.searchParams.get(R);
                if (p && r && t && null != n && null != _) {
                    e.searchParams.delete(R);
                    let t = e.pathname + e.search;
                    (0, A.bG)(t), x();
                }
            }, [p, r, n, _, x]);
            let f = i.useCallback(async () => {
                if (null != n) {
                    if (((0, I.TR)(E.HAw.APP_DIRECTORY_LAUNCH_CLICKED, { application_id: a }), !p))
                        return void (0, I.jL)({ [R]: "true" });
                    await x();
                }
            }, [a, n, p, x]);
            return { onClickLaunchActivity: r ? f : void 0, isSubmitting: c };
        })(a, r),
        k = null != T,
        G = k ? "secondary" : "primary";
    return (0, n.jsxs)("div", {
        ref: t,
        children: [
            (0, n.jsxs)("div", {
                className: s()(y.Ik, y.U),
                children: [
                    k && (0, n.jsx)(D, { size: l, contentWidth: "normal", onClick: T, isSubmitting: O }),
                    (0, n.jsx)(L, { application: a, size: l, contentWidth: "normal", variant: G }),
                    v.p5
                        ? (0, n.jsx)(c.K0, {
                              variant: "secondary",
                              size: l,
                              icon: c.qYV,
                              onClick: p,
                              "aria-label": N.intl.string(N.t.z4sP5J),
                          })
                        : null,
                    (0, n.jsx)(P, { renderDropdown: (e) => S(!1, e), size: l }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: s()(y.Ik, y.EX),
                children: [
                    k && (0, n.jsx)(D, { size: l, contentWidth: "small", onClick: T, isSubmitting: O }),
                    (0, n.jsx)(L, { application: a, size: l, contentWidth: "small", variant: G }),
                    (0, n.jsx)(P, { renderDropdown: (e) => S(v.p5, e), size: l }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: s()(y.Ik, y.nU),
                children: [
                    k && (0, n.jsx)(D, { size: l, contentWidth: "icon", onClick: T, isSubmitting: O }),
                    (0, n.jsx)(L, { application: a, size: l, contentWidth: "icon", variant: G }),
                    (0, n.jsx)(P, { renderDropdown: (e) => S(v.p5, e), size: l }),
                ],
            }),
        ],
    });
});
