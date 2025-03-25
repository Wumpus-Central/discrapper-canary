n.d(t, { Z: () => D }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(301563);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(873546),
    s = n(442837),
    c = n(481060),
    d = n(782568),
    u = n(317381),
    p = n(197386),
    m = n(906732),
    h = n(279332),
    g = n(783097),
    f = n(606192),
    _ = n(299206),
    b = n(276022),
    v = n(703656),
    x = n(706454),
    C = n(594174),
    j = n(626135),
    y = n(572004),
    O = n(135431),
    P = n(272048),
    I = n(881294),
    N = n(258971),
    S = n(98449),
    E = n(981631),
    T = n(388032),
    A = n(906996);
let L = 'start_application_install',
    R = 'launch_activity';
function w(e) {
    let { renderDropdown: t, size: n } = e;
    return (0, r.jsx)(c.yRy, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return t(n);
        },
        position: 'left',
        align: 'top',
        animation: c.yRy.Animation.NONE,
        children: (e) => {
            var t, a;
            return (0, r.jsx)(
                c.zxk,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })(
                    {
                        look: c.zxk.Looks.FILLED,
                        size: c.zxk.Sizes.ICON,
                        color: c.zxk.Colors.PRIMARY,
                        className: l()(A.iconButton, { [A.small]: 'sm' === n }),
                        innerClassName: A.innerIconButton,
                        'aria-label': T.NW.string(T.t.UKOtz8)
                    },
                    e
                )),
                (a = a =
                    {
                        children: (0, r.jsx)(c.xhG, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(a)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
                      }),
                t)
            );
        }
    });
}
function k(e) {
    let { application: t, variant: n, size: i, color: s } = e,
        { onClickInstallApplication: d, canInstall: u } = (function (e) {
            let t = (0, I.nu)(),
                n = a.useCallback(() => {
                    var t;
                    let n = null !== (t = N.z8.getField('guildId')) && void 0 !== t ? t : void 0;
                    (0, O.LO)({
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
                        (0, v.dL)(t), n();
                    }
                }, [t, n]),
                {
                    onClickInstallApplication: a.useCallback(() => {
                        if (((0, I.zZ)(E.rMx.APP_DIRECTORY_INSTALL_CLICKED, { application_id: e.id }), (o.tq || o.Em) && null == e.custom_install_url)) {
                            let t = (0, O.Er)({
                                applicationId: e.id,
                                customInstallUrl: e.custom_install_url,
                                installParams: e.install_params,
                                integrationTypesConfig: e.integration_types_config
                            });
                            if (null != t) {
                                window.open(t, '_blank');
                                return;
                            }
                        }
                        if (t) n();
                        else {
                            let t = N.z8.getField('guildId');
                            j.default.track(E.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                                application_id: e.id,
                                guild_id: t,
                                auth_type: null != e.custom_install_url ? 'custom_url' : 'in_app',
                                source: 'product_page',
                                device_platform: o.tq ? 'mobile_web' : 'desktop_web'
                            }),
                                (0, I.rf)({ [L]: 'true' });
                        }
                    }, [e, n, t]),
                    canInstall: a.useMemo(
                        () =>
                            (0, O.Eb)({
                                customInstallUrl: e.custom_install_url,
                                installParams: e.install_params,
                                integrationTypesConfig: e.integration_types_config
                            }),
                        [e]
                    )
                }
            );
        })(t);
    return 'icon' === n
        ? (0, r.jsx)(c.zxk, {
              look: c.zxk.Looks.FILLED,
              size: c.zxk.Sizes.ICON,
              color: s,
              className: l()(A.iconButton, { [A.small]: 'sm' === i }),
              onClick: d,
              'aria-label': T.NW.string(T.t.NgXl3N),
              innerClassName: A.innerIconButton,
              disabled: !u,
              children: (0, r.jsx)(c.svS, {
                  size: 'xs',
                  color: 'currentColor'
              })
          })
        : (0, r.jsx)(c.zxk, {
              size: 'sm' === i ? c.zxk.Sizes.SMALL : c.zxk.Sizes.MEDIUM,
              color: s,
              onClick: d,
              disabled: !u,
              children: 'small' === n ? T.NW.string(T.t.qRZ35u) : T.NW.string(T.t.NgXl3N)
          });
}
function Z(e) {
    let { variant: t, size: n, onClick: a, isSubmitting: i } = e;
    return 'icon' === t
        ? (0, r.jsx)(c.zxk, {
              look: c.zxk.Looks.FILLED,
              size: c.zxk.Sizes.ICON,
              color: c.zxk.Colors.BRAND,
              className: l()(A.iconButton, { [A.small]: 'sm' === n }),
              innerClassName: A.innerIconButton,
              onClick: a,
              submitting: i,
              'aria-label': T.NW.string(T.t.QO7rOz),
              children: (0, r.jsx)(c.o1U, {
                  size: 'xs',
                  color: 'currentColor'
              })
          })
        : (0, r.jsx)(c.zxk, {
              size: 'sm' === n ? c.zxk.Sizes.SMALL : c.zxk.Sizes.MEDIUM,
              color: c.zxk.Colors.BRAND,
              onClick: a,
              submitting: i,
              children: T.NW.string(T.t.QO7rOz)
          });
}
let D = a.forwardRef(function (e, t) {
    let { application: n, size: i } = e,
        o = h.J.useExperiment({ location: 'UserSettingsAuthedApps' }, { autoTrackExposure: !0 }).enabled,
        j = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(E.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e)),
        { analyticsLocations: O } = (0, m.ZP)(),
        N = a.useCallback(() => {
            (0, I.zZ)(E.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: n.id }), (0, y.JG)(j(n.id)), (0, c.showToast)((0, c.createToast)(T.NW.string(T.t['L/PwZW']), c.ToastType.SUCCESS));
        }, [n.id]),
        L = (0, s.e7)([x.default], () => x.default.locale),
        D = a.useCallback(() => {
            (0, d.Z)(
                (0, S.G)({
                    id: n.id,
                    name: n.name,
                    locale: L
                })
            );
        }, [L, n]),
        M = (0, _.Z)({
            id: n.id,
            label: T.NW.string(T.t['FfCL+/']),
            onSuccess: () => (0, c.showToast)((0, c.createToast)(T.NW.string(T.t.eNjAam), c.ToastType.SUCCESS))
        }),
        G = (0, b.Z)({
            application: n,
            onItemClick: () => {
                (0, I.zZ)(E.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: n.id });
            }
        }),
        z = a.useCallback(
            (e, t) =>
                (0, r.jsxs)(c.v2r, {
                    navId: 'application-directory-profile',
                    'aria-label': T.NW.string(T.t['/7I4/P']),
                    onClose: t,
                    onSelect: void 0,
                    children: [
                        o && (0, r.jsx)(c.kSQ, { children: G }),
                        e
                            ? (0, r.jsx)(c.kSQ, {
                                  children: (0, r.jsx)(c.sNh, {
                                      id: 'copy',
                                      label: T.NW.string(T.t.z4sP5O),
                                      action: N,
                                      icon: c.xPt
                                  })
                              })
                            : null,
                        (0, r.jsx)(c.kSQ, {
                            children: (0, r.jsx)(c.sNh, {
                                id: 'report',
                                label: T.NW.string(T.t.NgA5vr),
                                color: 'danger',
                                action: D
                            })
                        }),
                        null != M ? (0, r.jsx)(c.kSQ, { children: M }) : null
                    ]
                }),
            [M, D, N, o, G]
        ),
        { onClickLaunchActivity: B, isSubmitting: W } = (function (e, t) {
            var n;
            let r = e.id,
                i = null == e ? void 0 : null === (n = e.bot) || void 0 === n ? void 0 : n.id,
                l = null != i && (0, g.BQ)(e) && (0, g.ye)(e),
                [o, c] = a.useState(!1),
                d = (0, I.nu)(),
                m = (0, s.e7)([C.default], () => C.default.getCurrentUser()),
                h = (0, s.e7)([u.ZP], () => u.ZP.getCurrentEmbeddedActivity()),
                _ = a.useCallback(
                    async (t, n, r) => {
                        if (null != h && h.applicationId === e.id) {
                            let e = h.location;
                            (0, p.Z)('guild_id' in e ? e.guild_id : null, e);
                            return;
                        }
                        c(!0);
                        try {
                            await (0, f.W)({
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
                    (0, v.dL)(n), _(i, r, t);
                }
            }, [d, l, i, r, t, m, _]);
            let b = a.useCallback(async () => {
                if (null != i) {
                    if (((0, I.zZ)(E.rMx.APP_DIRECTORY_LAUNCH_CLICKED, { application_id: r }), !d)) {
                        (0, I.rf)({ [R]: 'true' });
                        return;
                    }
                    await _(i, r, t);
                }
            }, [i, r, t, d, _]);
            return {
                onClickLaunchActivity: l ? b : void 0,
                isSubmitting: o
            };
        })(n, O),
        { enabled: U } = (0, P.E)('GlobalDiscoveryAppsDetailActions'),
        F = U && null != B,
        V = F ? c.zxk.Colors.PRIMARY : c.zxk.Colors.BRAND;
    return (0, r.jsxs)('div', {
        ref: t,
        children: [
            (0, r.jsxs)('div', {
                className: l()(A.actionContainer, A.wide),
                children: [
                    F &&
                        (0, r.jsx)(Z, {
                            variant: 'normal',
                            size: i,
                            onClick: B,
                            isSubmitting: W
                        }),
                    (0, r.jsx)(k, {
                        application: n,
                        variant: 'normal',
                        size: i,
                        color: V
                    }),
                    y.wS
                        ? (0, r.jsx)(c.zxk, {
                              look: c.zxk.Looks.FILLED,
                              size: c.zxk.Sizes.ICON,
                              color: c.zxk.Colors.PRIMARY,
                              className: l()(A.iconButton, { [A.small]: 'sm' === i }),
                              innerClassName: A.innerIconButton,
                              'aria-label': T.NW.string(T.t.z4sP5O),
                              onClick: N,
                              children: (0, r.jsx)(c.xPt, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          })
                        : null,
                    (0, r.jsx)(w, {
                        renderDropdown: (e) => z(!1, e),
                        size: i
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: l()(A.actionContainer, A.small),
                children: [
                    F &&
                        (0, r.jsx)(Z, {
                            variant: 'normal',
                            size: i,
                            onClick: B,
                            isSubmitting: W
                        }),
                    (0, r.jsx)(k, {
                        application: n,
                        variant: 'small',
                        size: i,
                        color: V
                    }),
                    (0, r.jsx)(w, {
                        renderDropdown: (e) => z(y.wS, e),
                        size: i
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: l()(A.actionContainer, A.tiny),
                children: [
                    F &&
                        (0, r.jsx)(Z, {
                            variant: 'icon',
                            size: i,
                            onClick: B,
                            isSubmitting: W
                        }),
                    (0, r.jsx)(k, {
                        application: n,
                        variant: 'icon',
                        size: i,
                        color: V
                    }),
                    (0, r.jsx)(w, {
                        renderDropdown: (e) => z(y.wS, e),
                        size: i
                    })
                ]
            })
        ]
    });
});
