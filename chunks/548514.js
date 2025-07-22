(n.d(t, { Z: () => k }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(35282));
var r = n(255367),
    a = n(73800),
    i = n(120356),
    l = n.n(i),
    s = n(873546),
    o = n(442837),
    c = n(481060),
    d = n(782568),
    u = n(317381),
    p = n(197386),
    m = n(906732),
    h = n(279332),
    g = n(915346),
    f = n(783097),
    _ = n(433534),
    b = n(299206),
    x = n(276022),
    v = n(703656),
    C = n(706454),
    j = n(594174),
    y = n(626135),
    I = n(572004),
    O = n(135431),
    S = n(881294),
    P = n(258971),
    E = n(98449),
    N = n(981631),
    T = n(388032),
    A = n(284944);
let L = 'start_application_install',
    R = 'launch_activity';
function Z(e) {
    let { renderDropdown: t, size: n } = e,
        i = a.useRef(null);
    return (0, r.jsx)(c.yRy, {
        targetElementRef: i,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return t(n);
        },
        position: 'left',
        align: 'top',
        animation: c.yRy.Animation.NONE,
        children: (e) =>
            (0, r.jsx)(
                c.hU,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })(
                    {
                        buttonRef: i,
                        variant: 'secondary',
                        size: n,
                        icon: c.xhG,
                        'aria-label': T.intl.string(T.t.UKOtz8)
                    },
                    e
                )
            )
    });
}
function w(e) {
    let { application: t, variant: n, size: i, contentWidth: l } = e,
        { onClickInstallApplication: o, canInstall: d } = (function (e) {
            let t = (0, S.nu)(),
                n = a.useCallback(() => {
                    var t;
                    let n = null != (t = P.z8.getField('guildId')) ? t : void 0;
                    (0, O.L)({
                        applicationId: e.id,
                        customInstallUrl: e.custom_install_url,
                        installParams: e.install_params,
                        integrationTypesConfig: e.integration_types_config,
                        guildId: n,
                        source: 'product_page'
                    });
                }, [e]);
            return (
                a.useEffect(() => {
                    let e = new URL(location.href);
                    if (t && 'true' === e.searchParams.get(L)) {
                        e.searchParams.delete(L);
                        let t = e.pathname + e.search;
                        ((0, v.dL)(t), n());
                    }
                }, [t, n]),
                {
                    onClickInstallApplication: a.useCallback(() => {
                        if (((0, S.zZ)(N.rMx.APP_DIRECTORY_INSTALL_CLICKED, { application_id: e.id }), (s.tq || s.Em) && null == e.custom_install_url)) {
                            let t = (0, O.E)({
                                applicationId: e.id,
                                customInstallUrl: e.custom_install_url,
                                installParams: e.install_params,
                                integrationTypesConfig: e.integration_types_config
                            });
                            if (null != t) return void window.open(t, '_blank');
                        }
                        if (t) n();
                        else {
                            let t = P.z8.getField('guildId');
                            (y.default.track(N.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                                application_id: e.id,
                                guild_id: t,
                                auth_type: null != e.custom_install_url ? 'custom_url' : 'in_app',
                                source: 'product_page',
                                device_platform: s.tq ? 'mobile_web' : 'desktop_web'
                            }),
                                (0, S.rf)({ [L]: 'true' }));
                        }
                    }, [e, n, t]),
                    canInstall: a.useMemo(
                        () =>
                            (0, _.Eb)({
                                customInstallUrl: e.custom_install_url,
                                installParams: e.install_params,
                                integrationTypesConfig: e.integration_types_config
                            }),
                        [e]
                    )
                }
            );
        })(t);
    return 'icon' === l
        ? (0, r.jsx)(c.hU, {
              variant: n,
              icon: c.svS,
              size: i,
              onClick: o,
              'aria-label': T.intl.string(T.t.NgXl3N),
              disabled: !d
          })
        : (0, r.jsx)(c.zxk, {
              variant: n,
              size: i,
              text: 'small' === l ? T.intl.string(T.t.qRZ35u) : T.intl.string(T.t.NgXl3N),
              onClick: o,
              disabled: !d
          });
}
function D(e) {
    let { size: t, contentWidth: n, onClick: a, isSubmitting: i } = e;
    return 'icon' === n
        ? (0, r.jsx)(c.hU, {
              variant: 'primary',
              icon: c.o1U,
              size: t,
              onClick: a,
              loading: i,
              'aria-label': T.intl.string(T.t.QO7rOz)
          })
        : (0, r.jsx)(c.zxk, {
              variant: 'primary',
              size: t,
              text: T.intl.string(T.t.QO7rOz),
              onClick: a,
              loading: i
          });
}
let k = a.forwardRef(function (e, t) {
    let { application: n, size: i } = e,
        s = h.J.useExperiment({ location: 'UserSettingsAuthedApps' }, { autoTrackExposure: !0 }).enabled,
        _ = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(N.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e)),
        { analyticsLocations: y } = (0, m.ZP)(),
        O = a.useCallback(() => {
            ((0, S.zZ)(N.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: n.id }), (0, I.JG)(_(n.id), () => (0, c.showToast)((0, c.createToast)(T.intl.string(T.t['L/PwZW']), c.ToastType.SUCCESS))));
        }, [n.id]),
        P = (0, o.e7)([C.default], () => C.default.locale),
        L = a.useCallback(() => {
            (0, d.Z)(
                (0, E.G)({
                    id: n.id,
                    name: n.name,
                    locale: P
                })
            );
        }, [P, n]),
        k = (0, b.Z)({
            id: n.id,
            label: T.intl.string(T.t['FfCL+/']),
            onSuccess: () => (0, c.showToast)((0, c.createToast)(T.intl.string(T.t.eNjAam), c.ToastType.SUCCESS))
        }),
        M = (0, x.Z)({
            application: n,
            onItemClick: () => {
                (0, S.zZ)(N.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: n.id });
            }
        }),
        G = a.useCallback(
            (e, t) =>
                (0, r.jsxs)(c.v2r, {
                    navId: 'application-directory-profile',
                    'aria-label': T.intl.string(T.t['/7I4/P']),
                    onClose: t,
                    onSelect: void 0,
                    children: [
                        s && (0, r.jsx)(c.kSQ, { children: M }),
                        e
                            ? (0, r.jsx)(c.kSQ, {
                                  children: (0, r.jsx)(c.sNh, {
                                      id: 'copy',
                                      label: T.intl.string(T.t.z4sP5O),
                                      action: O,
                                      icon: c.xPt
                                  })
                              })
                            : null,
                        (0, r.jsx)(c.kSQ, {
                            children: (0, r.jsx)(c.sNh, {
                                id: 'report',
                                label: T.intl.string(T.t.NgA5vr),
                                color: 'danger',
                                action: L
                            })
                        }),
                        null != k ? (0, r.jsx)(c.kSQ, { children: k }) : null
                    ]
                }),
            [k, L, O, s, M]
        ),
        { onClickLaunchActivity: B, isSubmitting: U } = (function (e, t) {
            var n;
            let r = e.id,
                i = null == e || null == (n = e.bot) ? void 0 : n.id,
                l = null != i && (0, f.BQ)(e) && (0, f.ye)(e),
                [s, c] = a.useState(!1),
                d = (0, S.nu)(),
                m = (0, o.e7)([j.default], () => j.default.getCurrentUser()),
                h = (0, o.e7)([u.ZP], () => u.ZP.getCurrentEmbeddedActivity()),
                _ = a.useCallback(
                    async (t, n, r) => {
                        if (null != h && h.applicationId === e.id) {
                            let e = h.location;
                            (0, p.Z)('guild_id' in e ? e.guild_id : null, e);
                            return;
                        }
                        c(!0);
                        try {
                            await (0, g.W)({
                                appId: n,
                                botId: t,
                                analyticsLocations: r
                            });
                        } catch (e) {}
                        c(!1);
                    },
                    [h, e.id]
                );
            a.useEffect(() => {
                let e = new URL(location.href),
                    n = 'true' === e.searchParams.get(R);
                if (d && l && n && null != i && null != m) {
                    e.searchParams.delete(R);
                    let n = e.pathname + e.search;
                    ((0, v.dL)(n), _(i, r, t));
                }
            }, [d, l, i, r, t, m, _]);
            let b = a.useCallback(async () => {
                if (null != i) {
                    if (((0, S.zZ)(N.rMx.APP_DIRECTORY_LAUNCH_CLICKED, { application_id: r }), !d)) return void (0, S.rf)({ [R]: 'true' });
                    await _(i, r, t);
                }
            }, [i, r, t, d, _]);
            return {
                onClickLaunchActivity: l ? b : void 0,
                isSubmitting: s
            };
        })(n, y),
        z = null != B,
        F = z ? 'secondary' : 'primary';
    return (0, r.jsxs)('div', {
        ref: t,
        children: [
            (0, r.jsxs)('div', {
                className: l()(A.actionContainer, A.wide),
                children: [
                    z &&
                        (0, r.jsx)(D, {
                            size: i,
                            contentWidth: 'normal',
                            onClick: B,
                            isSubmitting: U
                        }),
                    (0, r.jsx)(w, {
                        application: n,
                        size: i,
                        contentWidth: 'normal',
                        variant: F
                    }),
                    I.wS
                        ? (0, r.jsx)(c.hU, {
                              variant: 'secondary',
                              size: i,
                              icon: c.xPt,
                              onClick: O,
                              'aria-label': T.intl.string(T.t.z4sP5O)
                          })
                        : null,
                    (0, r.jsx)(Z, {
                        renderDropdown: (e) => G(!1, e),
                        size: i
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: l()(A.actionContainer, A.small),
                children: [
                    z &&
                        (0, r.jsx)(D, {
                            size: i,
                            contentWidth: 'small',
                            onClick: B,
                            isSubmitting: U
                        }),
                    (0, r.jsx)(w, {
                        application: n,
                        size: i,
                        contentWidth: 'small',
                        variant: F
                    }),
                    (0, r.jsx)(Z, {
                        renderDropdown: (e) => G(I.wS, e),
                        size: i
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: l()(A.actionContainer, A.tiny),
                children: [
                    z &&
                        (0, r.jsx)(D, {
                            size: i,
                            contentWidth: 'icon',
                            onClick: B,
                            isSubmitting: U
                        }),
                    (0, r.jsx)(w, {
                        application: n,
                        size: i,
                        contentWidth: 'icon',
                        variant: F
                    }),
                    (0, r.jsx)(Z, {
                        renderDropdown: (e) => G(I.wS, e),
                        size: i
                    })
                ]
            })
        ]
    });
});
