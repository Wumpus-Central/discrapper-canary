n.d(t, {
    A: () => T,
}),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(747238);
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(607399),
    c = n(311907),
    o = n(397927),
    d = n(787389),
    u = n(688810),
    p = n(735991),
    h = n(204776),
    m = n(50268),
    b = n(928658),
    f = n(976860),
    g = n(611010),
    x = n(287809),
    v = n(954571),
    j = n(957565),
    A = n(692848),
    _ = n(412461),
    y = n(310419),
    O = n(652215),
    S = n(985018),
    C = n(688147);
let E = "start_application_install",
    I = "launch_activity";

function P(e) {
    let { renderDropdown: t, size: n } = e,
        r = a.useRef(null);
    return (0, l.jsx)(o.YNO, {
        targetElementRef: r,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return t(n);
        },
        position: "left",
        align: "top",
        animation: o.YNO.Animation.NONE,
        children: (e) =>
            (0, l.jsx)(
                o.K0,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            l.forEach(function (t) {
                                var l;
                                (l = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = l);
                            });
                    }
                    return e;
                })(
                    {
                        buttonRef: r,
                        variant: "secondary",
                        size: n,
                        icon: o.jNK,
                        "aria-label": S.intl.string(S.t["UKOtz+"]),
                    },
                    e,
                ),
            ),
    });
}

function N(e) {
    var t;
    let n,
        r,
        { application: i, variant: c, size: d, contentWidth: u } = e,
        { onClickInstallApplication: p, canInstall: m } =
            ((t = i),
            (n = (0, _.DB)()),
            (r = a.useCallback(() => {
                var e;
                let n = null != (e = y.h.getField("guildId")) ? e : void 0;
                (0, A.o)({
                    applicationId: t.id,
                    customInstallUrl: t.custom_install_url,
                    installParams: t.install_params,
                    integrationTypesConfig: t.integration_types_config,
                    guildId: n,
                    source: "product_page",
                });
            }, [t])),
            a.useEffect(() => {
                let e = new URL(location.href);
                if (n && "true" === e.searchParams.get(E)) {
                    e.searchParams.delete(E);
                    let t = e.pathname + e.search;
                    (0, f.bG)(t), r();
                }
            }, [n, r]),
            {
                onClickInstallApplication: a.useCallback(() => {
                    if (
                        ((0, _.TR)(O.HAw.APP_DIRECTORY_INSTALL_CLICKED, {
                            application_id: t.id,
                        }),
                        (s.Fr || s.v1) && null == t.custom_install_url)
                    ) {
                        let e = (0, A.Z)({
                            applicationId: t.id,
                            customInstallUrl: t.custom_install_url,
                            installParams: t.install_params,
                            integrationTypesConfig: t.integration_types_config,
                        });
                        if (null != e) return void window.open(e, "_blank");
                    }
                    if (n) r();
                    else {
                        let e = y.h.getField("guildId");
                        v.default.track(O.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
                            application_id: t.id,
                            guild_id: e,
                            auth_type: null != t.custom_install_url ? "custom_url" : "in_app",
                            source: "product_page",
                            device_platform: s.Fr ? "mobile_web" : "desktop_web",
                        }),
                            (0, _.jL)({
                                [E]: "true",
                            });
                    }
                }, [t, r, n]),
                canInstall: a.useMemo(
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
        ? (0, l.jsx)(o.K0, {
              variant: c,
              icon: o.pa$,
              size: d,
              onClick: p,
              "aria-label": S.intl.string(S.t.NgXl3C),
              disabled: !m,
          })
        : (0, l.jsx)(o.Button, {
              variant: c,
              size: d,
              text: "small" === u ? S.intl.string(S.t.qRZ35t) : S.intl.string(S.t.NgXl3C),
              onClick: p,
              disabled: !m,
          });
}

function R(e) {
    let { size: t, contentWidth: n, onClick: a, isSubmitting: r } = e;
    return "icon" === n
        ? (0, l.jsx)(o.K0, {
              variant: "primary",
              icon: o.udU,
              size: t,
              onClick: a,
              loading: r,
              "aria-label": S.intl.string(S.t.QO7rO6),
          })
        : (0, l.jsx)(o.Button, {
              variant: "primary",
              size: t,
              text: S.intl.string(S.t.QO7rO6),
              onClick: a,
              loading: r,
          });
}
let T = a.forwardRef(function (e, t) {
    let { application: n, size: r } = e,
        { analyticsLocations: s } = (0, u.Ay)(),
        h = a.useCallback(() => {
            let e;
            (0, _.TR)(O.HAw.APP_DIRECTORY_APPLICATION_LINK_COPIED, {
                application_id: n.id,
            }),
                (0, j.C)(
                    ((e = n.id),
                    ""
                        .concat(location.protocol, "//")
                        .concat(location.host)
                        .concat(O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(e))),
                    () => (0, o.showToast)((0, o.createToast)(S.intl.string(S.t["L/PwZf"]), o.ToastType.SUCCESS)),
                );
        }, [n.id]),
        v = a.useCallback(() => {
            let e = g.Ay.createFromServer(n);
            (0, b.r3)({
                application: e,
                entrypoint: "app_directory",
            });
        }, [n]),
        A = (0, m.A)({
            id: n.id,
            label: S.intl.string(S.t["FfCL+6"]),
            onSuccess: () => (0, o.showToast)((0, o.createToast)(S.intl.string(S.t.eNjAah), o.ToastType.SUCCESS)),
        }),
        y = a.useCallback(
            (e, t) =>
                (0, l.jsxs)(o.W1t, {
                    navId: "application-directory-profile",
                    "aria-label": S.intl.string(S.t["/7I4/C"]),
                    onClose: t,
                    onSelect: void 0,
                    children: [
                        e
                            ? (0, l.jsx)(o.rXV, {
                                  children: (0, l.jsx)(o.Drp, {
                                      id: "copy",
                                      label: S.intl.string(S.t.z4sP5J),
                                      action: h,
                                      icon: o.qYV,
                                  }),
                              })
                            : null,
                        (0, l.jsx)(o.rXV, {
                            children: (0, l.jsx)(o.Drp, {
                                id: "report",
                                label: S.intl.string(S.t.NgA5vp),
                                color: "danger",
                                action: v,
                            }),
                        }),
                        null != A
                            ? (0, l.jsx)(o.rXV, {
                                  children: A,
                              })
                            : null,
                    ],
                }),
            [A, v, h],
        ),
        { onClickLaunchActivity: E, isSubmitting: T } = (function (e, t) {
            var n;
            let l = e.id,
                r = null == e || null == (n = e.bot) ? void 0 : n.id,
                i = null != r && (0, p.$B)(e) && (0, p.Ag)(e),
                [s, o] = a.useState(!1),
                u = (0, _.DB)(),
                h = (0, c.bG)([x.default], () => x.default.getCurrentUser()),
                m = (0, d.A)({
                    applicationId: l,
                    analyticsLocations: t,
                    runBeforeLaunchAttempt: () => o(!0),
                    runAfterLaunchAttempt: () => o(!1),
                });
            a.useEffect(() => {
                let e = new URL(location.href),
                    t = "true" === e.searchParams.get(I);
                if (u && i && t && null != r && null != h) {
                    e.searchParams.delete(I);
                    let t = e.pathname + e.search;
                    (0, f.bG)(t), m();
                }
            }, [u, i, r, h, m]);
            let b = a.useCallback(async () => {
                if (null != r) {
                    if (
                        ((0, _.TR)(O.HAw.APP_DIRECTORY_LAUNCH_CLICKED, {
                            application_id: l,
                        }),
                        !u)
                    )
                        return void (0, _.jL)({
                            [I]: "true",
                        });
                    await m();
                }
            }, [l, r, u, m]);
            return {
                onClickLaunchActivity: i ? b : void 0,
                isSubmitting: s,
            };
        })(n, s),
        L = null != E,
        D = L ? "secondary" : "primary";
    return (0, l.jsxs)("div", {
        ref: t,
        children: [
            (0, l.jsxs)("div", {
                className: i()(C.Ik, C.U),
                children: [
                    L &&
                        (0, l.jsx)(R, {
                            size: r,
                            contentWidth: "normal",
                            onClick: E,
                            isSubmitting: T,
                        }),
                    (0, l.jsx)(N, {
                        application: n,
                        size: r,
                        contentWidth: "normal",
                        variant: D,
                    }),
                    j.p5
                        ? (0, l.jsx)(o.K0, {
                              variant: "secondary",
                              size: r,
                              icon: o.qYV,
                              onClick: h,
                              "aria-label": S.intl.string(S.t.z4sP5J),
                          })
                        : null,
                    (0, l.jsx)(P, {
                        renderDropdown: (e) => y(!1, e),
                        size: r,
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: i()(C.Ik, C.EX),
                children: [
                    L &&
                        (0, l.jsx)(R, {
                            size: r,
                            contentWidth: "small",
                            onClick: E,
                            isSubmitting: T,
                        }),
                    (0, l.jsx)(N, {
                        application: n,
                        size: r,
                        contentWidth: "small",
                        variant: D,
                    }),
                    (0, l.jsx)(P, {
                        renderDropdown: (e) => y(j.p5, e),
                        size: r,
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: i()(C.Ik, C.nU),
                children: [
                    L &&
                        (0, l.jsx)(R, {
                            size: r,
                            contentWidth: "icon",
                            onClick: E,
                            isSubmitting: T,
                        }),
                    (0, l.jsx)(N, {
                        application: n,
                        size: r,
                        contentWidth: "icon",
                        variant: D,
                    }),
                    (0, l.jsx)(P, {
                        renderDropdown: (e) => y(j.p5, e),
                        size: r,
                    }),
                ],
            }),
        ],
    });
});
