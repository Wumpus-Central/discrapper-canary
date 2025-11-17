n.d(t, { Z: () => D }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(35282);
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
    m = n(279332),
    h = n(915346),
    g = n(783097),
    _ = n(433534),
    f = n(299206),
    b = n(276022),
    x = n(726521),
    v = n(703656),
    C = n(973616),
    j = n(594174),
    y = n(626135),
    I = n(572004),
    S = n(135431),
    P = n(881294),
    O = n(258971),
    E = n(981631),
    N = n(388032),
    T = n(219923);
let A = "start_application_install",
    L = "launch_activity";
function R(e) {
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
                        "aria-label": N.intl.string(N.t["UKOtz+"]),
                    },
                    e,
                ),
            ),
    });
}
function Z(e) {
    let { application: t, variant: n, size: i, contentWidth: l } = e,
        { onClickInstallApplication: o, canInstall: d } = (function (e) {
            let t = (0, P.nu)(),
                n = a.useCallback(() => {
                    var t;
                    let n = null != (t = O.z8.getField("guildId")) ? t : void 0;
                    (0, S.L)({
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
                    if (t && "true" === e.searchParams.get(A)) {
                        e.searchParams.delete(A);
                        let t = e.pathname + e.search;
                        (0, v.dL)(t), n();
                    }
                }, [t, n]),
                {
                    onClickInstallApplication: a.useCallback(() => {
                        if (
                            ((0, P.zZ)(E.rMx.APP_DIRECTORY_INSTALL_CLICKED, { application_id: e.id }),
                            (s.tq || s.Em) && null == e.custom_install_url)
                        ) {
                            let t = (0, S.E)({
                                applicationId: e.id,
                                customInstallUrl: e.custom_install_url,
                                installParams: e.install_params,
                                integrationTypesConfig: e.integration_types_config,
                            });
                            if (null != t) return void window.open(t, "_blank");
                        }
                        if (t) n();
                        else {
                            let t = O.z8.getField("guildId");
                            y.default.track(E.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                                application_id: e.id,
                                guild_id: t,
                                auth_type: null != e.custom_install_url ? "custom_url" : "in_app",
                                source: "product_page",
                                device_platform: s.tq ? "mobile_web" : "desktop_web",
                            }),
                                (0, P.rf)({ [A]: "true" });
                        }
                    }, [e, n, t]),
                    canInstall: a.useMemo(
                        () =>
                            (0, _.Eb)({
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
              "aria-label": N.intl.string(N.t.NgXl3C),
              disabled: !d,
          })
        : (0, r.jsx)(c.Button, {
              variant: n,
              size: i,
              text: "small" === l ? N.intl.string(N.t.qRZ35t) : N.intl.string(N.t.NgXl3C),
              onClick: o,
              disabled: !d,
          });
}
function w(e) {
    let { size: t, contentWidth: n, onClick: a, isSubmitting: i } = e;
    return "icon" === n
        ? (0, r.jsx)(c.hU, {
              variant: "primary",
              icon: c.o1U,
              size: t,
              onClick: a,
              loading: i,
              "aria-label": N.intl.string(N.t.QO7rO6),
          })
        : (0, r.jsx)(c.Button, {
              variant: "primary",
              size: t,
              text: N.intl.string(N.t.QO7rO6),
              onClick: a,
              loading: i,
          });
}
let D = a.forwardRef(function (e, t) {
    let { application: n, size: i } = e,
        s = m.J.useExperiment({ location: "UserSettingsAuthedApps" }, { autoTrackExposure: !0 }).enabled,
        { analyticsLocations: _ } = (0, p.ZP)(),
        y = a.useCallback(() => {
            let e;
            (0, P.zZ)(E.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: n.id }),
                (0, I.JG)(
                    ((e = n.id),
                    ""
                        .concat(location.protocol, "//")
                        .concat(location.host)
                        .concat(E.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e))),
                    () => (0, c.showToast)((0, c.createToast)(N.intl.string(N.t["L/PwZf"]), c.ToastType.SUCCESS)),
                );
        }, [n.id]),
        S = a.useCallback(() => {
            let e = C.ZP.createFromServer(n);
            (0, x.uu)({
                application: e,
                entrypoint: "app_directory",
            });
        }, [n]),
        O = (0, f.Z)({
            id: n.id,
            label: N.intl.string(N.t["FfCL+6"]),
            onSuccess: () => (0, c.showToast)((0, c.createToast)(N.intl.string(N.t.eNjAah), c.ToastType.SUCCESS)),
        }),
        A = (0, b.Z)({
            application: n,
            onItemClick: () => {
                (0, P.zZ)(E.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: n.id });
            },
        }),
        D = a.useCallback(
            (e, t) =>
                (0, r.jsxs)(c.v2r, {
                    navId: "application-directory-profile",
                    "aria-label": N.intl.string(N.t["/7I4/C"]),
                    onClose: t,
                    onSelect: void 0,
                    children: [
                        s && (0, r.jsx)(c.kSQ, { children: A }),
                        e
                            ? (0, r.jsx)(c.kSQ, {
                                  children: (0, r.jsx)(c.sNh, {
                                      id: "copy",
                                      label: N.intl.string(N.t.z4sP5J),
                                      action: y,
                                      icon: c.xPt,
                                  }),
                              })
                            : null,
                        (0, r.jsx)(c.kSQ, {
                            children: (0, r.jsx)(c.sNh, {
                                id: "report",
                                label: N.intl.string(N.t.NgA5vp),
                                color: "danger",
                                action: S,
                            }),
                        }),
                        null != O ? (0, r.jsx)(c.kSQ, { children: O }) : null,
                    ],
                }),
            [O, S, y, s, A],
        ),
        { onClickLaunchActivity: k, isSubmitting: M } = (function (e, t) {
            var n;
            let r = e.id,
                i = null == e || null == (n = e.bot) ? void 0 : n.id,
                l = null != i && (0, g.BQ)(e) && (0, g.ye)(e),
                [s, c] = a.useState(!1),
                p = (0, P.nu)(),
                m = (0, o.e7)([j.default], () => j.default.getCurrentUser()),
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
                            await (0, h.W)({
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
                    n = "true" === e.searchParams.get(L);
                if (p && l && n && null != i && null != m) {
                    e.searchParams.delete(L);
                    let n = e.pathname + e.search;
                    (0, v.dL)(n), f(i, r, t);
                }
            }, [p, l, i, r, t, m, f]);
            let b = a.useCallback(async () => {
                if (null != i) {
                    if (((0, P.zZ)(E.rMx.APP_DIRECTORY_LAUNCH_CLICKED, { application_id: r }), !p))
                        return void (0, P.rf)({ [L]: "true" });
                    await f(i, r, t);
                }
            }, [i, r, t, p, f]);
            return {
                onClickLaunchActivity: l ? b : void 0,
                isSubmitting: s,
            };
        })(n, _),
        G = null != k,
        B = G ? "secondary" : "primary";
    return (0, r.jsxs)("div", {
        ref: t,
        children: [
            (0, r.jsxs)("div", {
                className: l()(T.actionContainer, T.wide),
                children: [
                    G &&
                        (0, r.jsx)(w, {
                            size: i,
                            contentWidth: "normal",
                            onClick: k,
                            isSubmitting: M,
                        }),
                    (0, r.jsx)(Z, {
                        application: n,
                        size: i,
                        contentWidth: "normal",
                        variant: B,
                    }),
                    I.wS
                        ? (0, r.jsx)(c.hU, {
                              variant: "secondary",
                              size: i,
                              icon: c.xPt,
                              onClick: y,
                              "aria-label": N.intl.string(N.t.z4sP5J),
                          })
                        : null,
                    (0, r.jsx)(R, {
                        renderDropdown: (e) => D(!1, e),
                        size: i,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: l()(T.actionContainer, T.small),
                children: [
                    G &&
                        (0, r.jsx)(w, {
                            size: i,
                            contentWidth: "small",
                            onClick: k,
                            isSubmitting: M,
                        }),
                    (0, r.jsx)(Z, {
                        application: n,
                        size: i,
                        contentWidth: "small",
                        variant: B,
                    }),
                    (0, r.jsx)(R, {
                        renderDropdown: (e) => D(I.wS, e),
                        size: i,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: l()(T.actionContainer, T.tiny),
                children: [
                    G &&
                        (0, r.jsx)(w, {
                            size: i,
                            contentWidth: "icon",
                            onClick: k,
                            isSubmitting: M,
                        }),
                    (0, r.jsx)(Z, {
                        application: n,
                        size: i,
                        contentWidth: "icon",
                        variant: B,
                    }),
                    (0, r.jsx)(R, {
                        renderDropdown: (e) => D(I.wS, e),
                        size: i,
                    }),
                ],
            }),
        ],
    });
});
