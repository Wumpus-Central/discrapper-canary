n.d(t, { Z: () => Z }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(35282);
var r = n(54381),
    a = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(873546),
    o = n(442837),
    c = n(481060),
    d = n(317381),
    u = n(197386),
    p = n(906732),
    m = n(915346),
    h = n(783097),
    g = n(433534),
    _ = n(299206),
    f = n(726521),
    b = n(703656),
    x = n(973616),
    v = n(594174),
    C = n(626135),
    j = n(572004),
    y = n(135431),
    I = n(881294),
    S = n(258971),
    P = n(981631),
    O = n(388032),
    E = n(219923);
let N = "start_application_install",
    T = "launch_activity";
function A(e) {
    let { renderDropdown: t, size: n } = e,
        i = a.useRef(null);
    return (0, r.jsx)(c.yRy, {
        targetElementRef: i,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return t(n);
        },
        position: "left",
        align: "top",
        animation: c.yRy.Animation.NONE,
        children: (e) =>
            (0, r.jsx)(
                c.hU,
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
                        icon: c.xhG,
                        "aria-label": O.intl.string(O.t["UKOtz+"]),
                    },
                    e,
                ),
            ),
    });
}
function L(e) {
    let { application: t, variant: n, size: i, contentWidth: l } = e,
        { onClickInstallApplication: o, canInstall: d } = (function (e) {
            let t = (0, I.nu)(),
                n = a.useCallback(() => {
                    var t;
                    let n = null != (t = S.z8.getField("guildId")) ? t : void 0;
                    (0, y.L)({
                        applicationId: e.id,
                        customInstallUrl: e.custom_install_url,
                        installParams: e.install_params,
                        integrationTypesConfig: e.integration_types_config,
                        guildId: n,
                        source: "product_page",
                    });
                }, [e]);
            return (
                a.useEffect(() => {
                    let e = new URL(location.href);
                    if (t && "true" === e.searchParams.get(N)) {
                        e.searchParams.delete(N);
                        let t = e.pathname + e.search;
                        (0, b.dL)(t), n();
                    }
                }, [t, n]),
                {
                    onClickInstallApplication: a.useCallback(() => {
                        if (
                            ((0, I.zZ)(P.rMx.APP_DIRECTORY_INSTALL_CLICKED, { application_id: e.id }),
                            (s.tq || s.Em) && null == e.custom_install_url)
                        ) {
                            let t = (0, y.E)({
                                applicationId: e.id,
                                customInstallUrl: e.custom_install_url,
                                installParams: e.install_params,
                                integrationTypesConfig: e.integration_types_config,
                            });
                            if (null != t) return void window.open(t, "_blank");
                        }
                        if (t) n();
                        else {
                            let t = S.z8.getField("guildId");
                            C.default.track(P.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                                application_id: e.id,
                                guild_id: t,
                                auth_type: null != e.custom_install_url ? "custom_url" : "in_app",
                                source: "product_page",
                                device_platform: s.tq ? "mobile_web" : "desktop_web",
                            }),
                                (0, I.rf)({ [N]: "true" });
                        }
                    }, [e, n, t]),
                    canInstall: a.useMemo(
                        () =>
                            (0, g.Eb)({
                                customInstallUrl: e.custom_install_url,
                                installParams: e.install_params,
                                integrationTypesConfig: e.integration_types_config,
                            }),
                        [e],
                    ),
                }
            );
        })(t);
    return "icon" === l
        ? (0, r.jsx)(c.hU, {
              variant: n,
              icon: c.svS,
              size: i,
              onClick: o,
              "aria-label": O.intl.string(O.t.NgXl3C),
              disabled: !d,
          })
        : (0, r.jsx)(c.Button, {
              variant: n,
              size: i,
              text: "small" === l ? O.intl.string(O.t.qRZ35t) : O.intl.string(O.t.NgXl3C),
              onClick: o,
              disabled: !d,
          });
}
function R(e) {
    let { size: t, contentWidth: n, onClick: a, isSubmitting: i } = e;
    return "icon" === n
        ? (0, r.jsx)(c.hU, {
              variant: "primary",
              icon: c.o1U,
              size: t,
              onClick: a,
              loading: i,
              "aria-label": O.intl.string(O.t.QO7rO6),
          })
        : (0, r.jsx)(c.Button, {
              variant: "primary",
              size: t,
              text: O.intl.string(O.t.QO7rO6),
              onClick: a,
              loading: i,
          });
}
let Z = a.forwardRef(function (e, t) {
    let { application: n, size: i } = e,
        { analyticsLocations: s } = (0, p.ZP)(),
        g = a.useCallback(() => {
            let e;
            (0, I.zZ)(P.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: n.id }),
                (0, j.JG)(
                    ((e = n.id),
                    ""
                        .concat(location.protocol, "//")
                        .concat(location.host)
                        .concat(P.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e))),
                    () => (0, c.showToast)((0, c.createToast)(O.intl.string(O.t["L/PwZf"]), c.ToastType.SUCCESS)),
                );
        }, [n.id]),
        C = a.useCallback(() => {
            let e = x.ZP.createFromServer(n);
            (0, f.uu)({
                application: e,
                entrypoint: "app_directory",
            });
        }, [n]),
        y = (0, _.Z)({
            id: n.id,
            label: O.intl.string(O.t["FfCL+6"]),
            onSuccess: () => (0, c.showToast)((0, c.createToast)(O.intl.string(O.t.eNjAah), c.ToastType.SUCCESS)),
        }),
        S = a.useCallback(
            (e, t) =>
                (0, r.jsxs)(c.v2r, {
                    navId: "application-directory-profile",
                    "aria-label": O.intl.string(O.t["/7I4/C"]),
                    onClose: t,
                    onSelect: void 0,
                    children: [
                        e
                            ? (0, r.jsx)(c.kSQ, {
                                  children: (0, r.jsx)(c.sNh, {
                                      id: "copy",
                                      label: O.intl.string(O.t.z4sP5J),
                                      action: g,
                                      icon: c.xPt,
                                  }),
                              })
                            : null,
                        (0, r.jsx)(c.kSQ, {
                            children: (0, r.jsx)(c.sNh, {
                                id: "report",
                                label: O.intl.string(O.t.NgA5vp),
                                color: "danger",
                                action: C,
                            }),
                        }),
                        null != y ? (0, r.jsx)(c.kSQ, { children: y }) : null,
                    ],
                }),
            [y, C, g],
        ),
        { onClickLaunchActivity: N, isSubmitting: Z } = (function (e, t) {
            var n;
            let r = e.id,
                i = null == e || null == (n = e.bot) ? void 0 : n.id,
                l = null != i && (0, h.BQ)(e) && (0, h.ye)(e),
                [s, c] = a.useState(!1),
                p = (0, I.nu)(),
                g = (0, o.e7)([v.default], () => v.default.getCurrentUser()),
                _ = (0, o.e7)([d.ZP], () => d.ZP.getCurrentEmbeddedActivity()),
                f = a.useCallback(
                    async (t, n, r) => {
                        if (null != _ && _.applicationId === e.id) {
                            let e = _.location;
                            (0, u.Z)("guild_id" in e ? e.guild_id : null, e);
                            return;
                        }
                        c(!0);
                        try {
                            await (0, m.W)({
                                appId: n,
                                botId: t,
                                analyticsLocations: r,
                            });
                        } catch (e) {}
                        c(!1);
                    },
                    [_, e.id],
                );
            a.useEffect(() => {
                let e = new URL(location.href),
                    n = "true" === e.searchParams.get(T);
                if (p && l && n && null != i && null != g) {
                    e.searchParams.delete(T);
                    let n = e.pathname + e.search;
                    (0, b.dL)(n), f(i, r, t);
                }
            }, [p, l, i, r, t, g, f]);
            let x = a.useCallback(async () => {
                if (null != i) {
                    if (((0, I.zZ)(P.rMx.APP_DIRECTORY_LAUNCH_CLICKED, { application_id: r }), !p))
                        return void (0, I.rf)({ [T]: "true" });
                    await f(i, r, t);
                }
            }, [i, r, t, p, f]);
            return {
                onClickLaunchActivity: l ? x : void 0,
                isSubmitting: s,
            };
        })(n, s),
        w = null != N,
        D = w ? "secondary" : "primary";
    return (0, r.jsxs)("div", {
        ref: t,
        children: [
            (0, r.jsxs)("div", {
                className: l()(E.actionContainer, E.wide),
                children: [
                    w &&
                        (0, r.jsx)(R, {
                            size: i,
                            contentWidth: "normal",
                            onClick: N,
                            isSubmitting: Z,
                        }),
                    (0, r.jsx)(L, {
                        application: n,
                        size: i,
                        contentWidth: "normal",
                        variant: D,
                    }),
                    j.wS
                        ? (0, r.jsx)(c.hU, {
                              variant: "secondary",
                              size: i,
                              icon: c.xPt,
                              onClick: g,
                              "aria-label": O.intl.string(O.t.z4sP5J),
                          })
                        : null,
                    (0, r.jsx)(A, {
                        renderDropdown: (e) => S(!1, e),
                        size: i,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: l()(E.actionContainer, E.small),
                children: [
                    w &&
                        (0, r.jsx)(R, {
                            size: i,
                            contentWidth: "small",
                            onClick: N,
                            isSubmitting: Z,
                        }),
                    (0, r.jsx)(L, {
                        application: n,
                        size: i,
                        contentWidth: "small",
                        variant: D,
                    }),
                    (0, r.jsx)(A, {
                        renderDropdown: (e) => S(j.wS, e),
                        size: i,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: l()(E.actionContainer, E.tiny),
                children: [
                    w &&
                        (0, r.jsx)(R, {
                            size: i,
                            contentWidth: "icon",
                            onClick: N,
                            isSubmitting: Z,
                        }),
                    (0, r.jsx)(L, {
                        application: n,
                        size: i,
                        contentWidth: "icon",
                        variant: D,
                    }),
                    (0, r.jsx)(A, {
                        renderDropdown: (e) => S(j.wS, e),
                        size: i,
                    }),
                ],
            }),
        ],
    });
});
