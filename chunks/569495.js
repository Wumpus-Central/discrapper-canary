n.d(t, {
    A: () => R,
}),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(747238);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(607399),
    o = n(311907),
    c = n(397927),
    d = n(787389),
    u = n(688810),
    p = n(735991),
    h = n(204776),
    m = n(50268),
    g = n(928658),
    _ = n(976860),
    b = n(611010),
    f = n(287809),
    x = n(954571),
    v = n(957565),
    j = n(692848),
    A = n(412461),
    y = n(310419),
    C = n(652215),
    O = n(985018),
    S = n(688147);
let I = "start_application_install",
    E = "launch_activity";

function P(e) {
    let { renderDropdown: t, size: n } = e,
        i = l.useRef(null);
    return (0, r.jsx)(c.YNO, {
        targetElementRef: i,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return t(n);
        },
        position: "left",
        align: "top",
        animation: c.YNO.Animation.NONE,
        children: (e) =>
            (0, r.jsx)(
                c.K0,
                (function (e) {
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
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })(
                    {
                        buttonRef: i,
                        variant: "secondary",
                        size: n,
                        icon: c.jNK,
                        "aria-label": O.intl.string(O.t["UKOtz+"]),
                    },
                    e,
                ),
            ),
    });
}

function N(e) {
    var t;
    let n,
        i,
        { application: a, variant: o, size: d, contentWidth: u } = e,
        { onClickInstallApplication: p, canInstall: m } =
            ((t = a),
            (n = (0, A.DB)()),
            (i = l.useCallback(() => {
                var e;
                let n = null != (e = y.h.getField("guildId")) ? e : void 0;
                (0, j.o)({
                    applicationId: t.id,
                    customInstallUrl: t.custom_install_url,
                    installParams: t.install_params,
                    integrationTypesConfig: t.integration_types_config,
                    guildId: n,
                    source: "product_page",
                });
            }, [t])),
            l.useEffect(() => {
                let e = new URL(location.href);
                if (n && "true" === e.searchParams.get(I)) {
                    e.searchParams.delete(I);
                    let t = e.pathname + e.search;
                    (0, _.bG)(t), i();
                }
            }, [n, i]),
            {
                onClickInstallApplication: l.useCallback(() => {
                    if (
                        ((0, A.TR)(C.HAw.APP_DIRECTORY_INSTALL_CLICKED, {
                            application_id: t.id,
                        }),
                        (s.Fr || s.v1) && null == t.custom_install_url)
                    ) {
                        let e = (0, j.Z)({
                            applicationId: t.id,
                            customInstallUrl: t.custom_install_url,
                            installParams: t.install_params,
                            integrationTypesConfig: t.integration_types_config,
                        });
                        if (null != e) return void window.open(e, "_blank");
                    }
                    if (n) i();
                    else {
                        let e = y.h.getField("guildId");
                        x.default.track(C.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
                            application_id: t.id,
                            guild_id: e,
                            auth_type: null != t.custom_install_url ? "custom_url" : "in_app",
                            source: "product_page",
                            device_platform: s.Fr ? "mobile_web" : "desktop_web",
                        }),
                            (0, A.jL)({
                                [I]: "true",
                            });
                    }
                }, [t, i, n]),
                canInstall: l.useMemo(
                    () =>
                        (0, h.Ie)({
                            customInstallUrl: t.custom_install_url,
                            installParams: t.install_params,
                            integrationTypesConfig: t.integration_types_config,
                        }),
                    [t],
                ),
            });
    return "icon" === u
        ? (0, r.jsx)(c.K0, {
              variant: o,
              icon: c.pa$,
              size: d,
              onClick: p,
              "aria-label": O.intl.string(O.t.NgXl3C),
              disabled: !m,
          })
        : (0, r.jsx)(c.Button, {
              variant: o,
              size: d,
              text: "small" === u ? O.intl.string(O.t.qRZ35t) : O.intl.string(O.t.NgXl3C),
              onClick: p,
              disabled: !m,
          });
}

function T(e) {
    let { size: t, contentWidth: n, onClick: l, isSubmitting: i } = e;
    return "icon" === n
        ? (0, r.jsx)(c.K0, {
              variant: "primary",
              icon: c.udU,
              size: t,
              onClick: l,
              loading: i,
              "aria-label": O.intl.string(O.t.QO7rO6),
          })
        : (0, r.jsx)(c.Button, {
              variant: "primary",
              size: t,
              text: O.intl.string(O.t.QO7rO6),
              onClick: l,
              loading: i,
          });
}
let R = l.forwardRef(function (e, t) {
    let { application: n, size: i } = e,
        { analyticsLocations: s } = (0, u.Ay)(),
        h = l.useCallback(() => {
            let e;
            (0, A.TR)(C.HAw.APP_DIRECTORY_APPLICATION_LINK_COPIED, {
                application_id: n.id,
            }),
                (0, v.C)(
                    ((e = n.id),
                    ""
                        .concat(location.protocol, "//")
                        .concat(location.host)
                        .concat(C.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(e))),
                    () => (0, c.showToast)((0, c.createToast)(O.intl.string(O.t["L/PwZf"]), c.ToastType.SUCCESS)),
                );
        }, [n.id]),
        x = l.useCallback(() => {
            let e = b.Ay.createFromServer(n);
            (0, g.r3)({
                application: e,
                entrypoint: "app_directory",
            });
        }, [n]),
        j = (0, m.A)({
            id: n.id,
            label: O.intl.string(O.t["FfCL+6"]),
            onSuccess: () => (0, c.showToast)((0, c.createToast)(O.intl.string(O.t.eNjAah), c.ToastType.SUCCESS)),
        }),
        y = l.useCallback(
            (e, t) =>
                (0, r.jsxs)(c.W1t, {
                    "data-menu-mixed": !0,
                    navId: "application-directory-profile",
                    "aria-label": O.intl.string(O.t["/7I4/C"]),
                    onClose: t,
                    onSelect: void 0,
                    children: [
                        e
                            ? (0, r.jsx)(c.rXV, {
                                  children: (0, r.jsx)(c.Drp, {
                                      id: "copy",
                                      label: O.intl.string(O.t.z4sP5J),
                                      action: h,
                                      icon: c.qYV,
                                  }),
                              })
                            : null,
                        (0, r.jsx)(c.rXV, {
                            children: (0, r.jsx)(c.Drp, {
                                id: "report",
                                label: O.intl.string(O.t.NgA5vp),
                                color: "danger",
                                action: x,
                            }),
                        }),
                        null != j
                            ? (0, r.jsx)(c.rXV, {
                                  children: j,
                              })
                            : null,
                    ],
                }),
            [j, x, h],
        ),
        { onClickLaunchActivity: I, isSubmitting: R } = (function (e, t) {
            var n;
            let r = e.id,
                i = null == e || null == (n = e.bot) ? void 0 : n.id,
                a = null != i && (0, p.$B)(e) && (0, p.Ag)(e),
                [s, c] = l.useState(!1),
                u = (0, A.DB)(),
                h = (0, o.bG)([f.default], () => f.default.getCurrentUser()),
                m = (0, d.A)({
                    applicationId: r,
                    analyticsLocations: t,
                    runBeforeLaunchAttempt: () => c(!0),
                    runAfterLaunchAttempt: () => c(!1),
                });
            l.useEffect(() => {
                let e = new URL(location.href),
                    t = "true" === e.searchParams.get(E);
                if (u && a && t && null != i && null != h) {
                    e.searchParams.delete(E);
                    let t = e.pathname + e.search;
                    (0, _.bG)(t), m();
                }
            }, [u, a, i, h, m]);
            let g = l.useCallback(async () => {
                if (null != i) {
                    if (
                        ((0, A.TR)(C.HAw.APP_DIRECTORY_LAUNCH_CLICKED, {
                            application_id: r,
                        }),
                        !u)
                    )
                        return void (0, A.jL)({
                            [E]: "true",
                        });
                    await m();
                }
            }, [r, i, u, m]);
            return {
                onClickLaunchActivity: a ? g : void 0,
                isSubmitting: s,
            };
        })(n, s),
        L = null != I,
        D = L ? "secondary" : "primary";
    return (0, r.jsxs)("div", {
        ref: t,
        children: [
            (0, r.jsxs)("div", {
                className: a()(S.Ik, S.U),
                children: [
                    L &&
                        (0, r.jsx)(T, {
                            size: i,
                            contentWidth: "normal",
                            onClick: I,
                            isSubmitting: R,
                        }),
                    (0, r.jsx)(N, {
                        application: n,
                        size: i,
                        contentWidth: "normal",
                        variant: D,
                    }),
                    v.p5
                        ? (0, r.jsx)(c.K0, {
                              variant: "secondary",
                              size: i,
                              icon: c.qYV,
                              onClick: h,
                              "aria-label": O.intl.string(O.t.z4sP5J),
                          })
                        : null,
                    (0, r.jsx)(P, {
                        renderDropdown: (e) => y(!1, e),
                        size: i,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: a()(S.Ik, S.EX),
                children: [
                    L &&
                        (0, r.jsx)(T, {
                            size: i,
                            contentWidth: "small",
                            onClick: I,
                            isSubmitting: R,
                        }),
                    (0, r.jsx)(N, {
                        application: n,
                        size: i,
                        contentWidth: "small",
                        variant: D,
                    }),
                    (0, r.jsx)(P, {
                        renderDropdown: (e) => y(v.p5, e),
                        size: i,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: a()(S.Ik, S.nU),
                children: [
                    L &&
                        (0, r.jsx)(T, {
                            size: i,
                            contentWidth: "icon",
                            onClick: I,
                            isSubmitting: R,
                        }),
                    (0, r.jsx)(N, {
                        application: n,
                        size: i,
                        contentWidth: "icon",
                        variant: D,
                    }),
                    (0, r.jsx)(P, {
                        renderDropdown: (e) => y(v.p5, e),
                        size: i,
                    }),
                ],
            }),
        ],
    });
});
