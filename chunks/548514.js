n.d(t, { Z: () => Z }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(35282);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    l = n.n(a),
    s = n(873546),
    o = n(442837),
    c = n(481060),
    d = n(317381),
    u = n(197386),
    p = n(906732),
    m = n(915346),
    h = n(783097),
    g = n(433534),
    f = n(299206),
    _ = n(726521),
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
        a = i.useRef(null);
    return (0, r.jsx)(c.yRy, {
        targetElementRef: a,
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
                        buttonRef: a,
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
    let { application: t, variant: n, size: a, contentWidth: l } = e,
        { onClickInstallApplication: o, canInstall: d } = (function (e) {
            let t = (0, I.nu)(),
                n = i.useCallback(() => {
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
                i.useEffect(() => {
                    let e = new URL(location.href);
                    if (t && "true" === e.searchParams.get(N)) {
                        e.searchParams.delete(N);
                        let t = e.pathname + e.search;
                        (0, b.dL)(t), n();
                    }
                }, [t, n]),
                {
                    onClickInstallApplication: i.useCallback(() => {
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
                    canInstall: i.useMemo(
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
              size: a,
              onClick: o,
              "aria-label": O.intl.string(O.t.NgXl3C),
              disabled: !d,
          })
        : (0, r.jsx)(c.Button, {
              variant: n,
              size: a,
              text: "small" === l ? O.intl.string(O.t.qRZ35t) : O.intl.string(O.t.NgXl3C),
              onClick: o,
              disabled: !d,
          });
}
function R(e) {
    let { size: t, contentWidth: n, onClick: i, isSubmitting: a } = e;
    return "icon" === n
        ? (0, r.jsx)(c.hU, {
              variant: "primary",
              icon: c.o1U,
              size: t,
              onClick: i,
              loading: a,
              "aria-label": O.intl.string(O.t.QO7rO6),
          })
        : (0, r.jsx)(c.Button, {
              variant: "primary",
              size: t,
              text: O.intl.string(O.t.QO7rO6),
              onClick: i,
              loading: a,
          });
}
let Z = i.forwardRef(function (e, t) {
    let { application: n, size: a } = e,
        { analyticsLocations: s } = (0, p.ZP)(),
        g = i.useCallback(() => {
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
        C = i.useCallback(() => {
            let e = x.ZP.createFromServer(n);
            (0, _.uu)({
                application: e,
                entrypoint: "app_directory",
            });
        }, [n]),
        y = (0, f.Z)({
            id: n.id,
            label: O.intl.string(O.t["FfCL+6"]),
            onSuccess: () => (0, c.showToast)((0, c.createToast)(O.intl.string(O.t.eNjAah), c.ToastType.SUCCESS)),
        }),
        S = i.useCallback(
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
                a = null == e || null == (n = e.bot) ? void 0 : n.id,
                l = null != a && (0, h.BQ)(e) && (0, h.ye)(e),
                [s, c] = i.useState(!1),
                p = (0, I.nu)(),
                g = (0, o.e7)([v.default], () => v.default.getCurrentUser()),
                f = (0, o.e7)([d.ZP], () => d.ZP.getCurrentEmbeddedActivity()),
                _ = i.useCallback(
                    async (t, n, r) => {
                        if (null != f && f.applicationId === e.id) {
                            let e = f.location;
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
                    [f, e.id],
                );
            i.useEffect(() => {
                let e = new URL(location.href),
                    n = "true" === e.searchParams.get(T);
                if (p && l && n && null != a && null != g) {
                    e.searchParams.delete(T);
                    let n = e.pathname + e.search;
                    (0, b.dL)(n), _(a, r, t);
                }
            }, [p, l, a, r, t, g, _]);
            let x = i.useCallback(async () => {
                if (null != a) {
                    if (((0, I.zZ)(P.rMx.APP_DIRECTORY_LAUNCH_CLICKED, { application_id: r }), !p))
                        return void (0, I.rf)({ [T]: "true" });
                    await _(a, r, t);
                }
            }, [a, r, t, p, _]);
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
                            size: a,
                            contentWidth: "normal",
                            onClick: N,
                            isSubmitting: Z,
                        }),
                    (0, r.jsx)(L, {
                        application: n,
                        size: a,
                        contentWidth: "normal",
                        variant: D,
                    }),
                    j.wS
                        ? (0, r.jsx)(c.hU, {
                              variant: "secondary",
                              size: a,
                              icon: c.xPt,
                              onClick: g,
                              "aria-label": O.intl.string(O.t.z4sP5J),
                          })
                        : null,
                    (0, r.jsx)(A, {
                        renderDropdown: (e) => S(!1, e),
                        size: a,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: l()(E.actionContainer, E.small),
                children: [
                    w &&
                        (0, r.jsx)(R, {
                            size: a,
                            contentWidth: "small",
                            onClick: N,
                            isSubmitting: Z,
                        }),
                    (0, r.jsx)(L, {
                        application: n,
                        size: a,
                        contentWidth: "small",
                        variant: D,
                    }),
                    (0, r.jsx)(A, {
                        renderDropdown: (e) => S(j.wS, e),
                        size: a,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: l()(E.actionContainer, E.tiny),
                children: [
                    w &&
                        (0, r.jsx)(R, {
                            size: a,
                            contentWidth: "icon",
                            onClick: N,
                            isSubmitting: Z,
                        }),
                    (0, r.jsx)(L, {
                        application: n,
                        size: a,
                        contentWidth: "icon",
                        variant: D,
                    }),
                    (0, r.jsx)(A, {
                        renderDropdown: (e) => S(j.wS, e),
                        size: a,
                    }),
                ],
            }),
        ],
    });
});
