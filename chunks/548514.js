(n.d(t, { Z: () => M }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(35282));
var r = n(255367),
    a = n(73800),
    i = n(120356),
    l = n.n(i),
    s = n(873546),
    o = n(442837),
    c = n(755721),
    d = n(481060),
    u = n(782568),
    p = n(317381),
    m = n(197386),
    h = n(906732),
    g = n(279332),
    f = n(915346),
    _ = n(783097),
    b = n(433534),
    x = n(299206),
    v = n(276022),
    C = n(703656),
    j = n(706454),
    y = n(594174),
    I = n(626135),
    O = n(572004),
    P = n(135431),
    S = n(881294),
    E = n(258971),
    N = n(98449),
    T = n(981631),
    A = n(388032),
    L = n(284944);
let R = 'start_application_install',
    Z = 'launch_activity';
function w(e) {
    let { renderDropdown: t, size: n } = e,
        i = a.useRef(null);
    return (0, r.jsx)(d.yRy, {
        targetElementRef: i,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return t(n);
        },
        position: 'left',
        align: 'top',
        animation: d.yRy.Animation.NONE,
        children: (e) => {
            var t, a;
            return (0, r.jsx)(
                c.zx,
                ((t = (function (e) {
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
                        look: c.zx.Looks.FILLED,
                        size: c.zx.Sizes.ICON,
                        color: c.zx.Colors.PRIMARY,
                        className: l()(L.iconButton, { [L.small]: 'sm' === n }),
                        innerClassName: L.innerIconButton,
                        'aria-label': A.intl.string(A.t.UKOtz8)
                    },
                    e
                )),
                (a = a =
                    {
                        children: (0, r.jsx)(d.xhG, {
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
function D(e) {
    let { application: t, variant: n, size: i, color: o } = e,
        { onClickInstallApplication: u, canInstall: p } = (function (e) {
            let t = (0, S.nu)(),
                n = a.useCallback(() => {
                    var t;
                    let n = null != (t = E.z8.getField('guildId')) ? t : void 0;
                    (0, P.L)({
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
                    if (t && 'true' === e.searchParams.get(R)) {
                        e.searchParams.delete(R);
                        let t = e.pathname + e.search;
                        ((0, C.dL)(t), n());
                    }
                }, [t, n]),
                {
                    onClickInstallApplication: a.useCallback(() => {
                        if (((0, S.zZ)(T.rMx.APP_DIRECTORY_INSTALL_CLICKED, { application_id: e.id }), (s.tq || s.Em) && null == e.custom_install_url)) {
                            let t = (0, P.E)({
                                applicationId: e.id,
                                customInstallUrl: e.custom_install_url,
                                installParams: e.install_params,
                                integrationTypesConfig: e.integration_types_config
                            });
                            if (null != t) return void window.open(t, '_blank');
                        }
                        if (t) n();
                        else {
                            let t = E.z8.getField('guildId');
                            (I.default.track(T.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                                application_id: e.id,
                                guild_id: t,
                                auth_type: null != e.custom_install_url ? 'custom_url' : 'in_app',
                                source: 'product_page',
                                device_platform: s.tq ? 'mobile_web' : 'desktop_web'
                            }),
                                (0, S.rf)({ [R]: 'true' }));
                        }
                    }, [e, n, t]),
                    canInstall: a.useMemo(
                        () =>
                            (0, b.Eb)({
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
        ? (0, r.jsx)(c.zx, {
              look: c.zx.Looks.FILLED,
              size: c.zx.Sizes.ICON,
              color: o,
              className: l()(L.iconButton, { [L.small]: 'sm' === i }),
              onClick: u,
              'aria-label': A.intl.string(A.t.NgXl3N),
              innerClassName: L.innerIconButton,
              disabled: !p,
              children: (0, r.jsx)(d.svS, {
                  size: 'xs',
                  color: 'currentColor'
              })
          })
        : (0, r.jsx)(c.zx, {
              size: 'sm' === i ? c.zx.Sizes.SMALL : c.zx.Sizes.MEDIUM,
              color: o,
              onClick: u,
              disabled: !p,
              children: 'small' === n ? A.intl.string(A.t.qRZ35u) : A.intl.string(A.t.NgXl3N)
          });
}
function k(e) {
    let { variant: t, size: n, onClick: a, isSubmitting: i } = e;
    return 'icon' === t
        ? (0, r.jsx)(c.zx, {
              look: c.zx.Looks.FILLED,
              size: c.zx.Sizes.ICON,
              color: c.zx.Colors.BRAND,
              className: l()(L.iconButton, { [L.small]: 'sm' === n }),
              innerClassName: L.innerIconButton,
              onClick: a,
              submitting: i,
              'aria-label': A.intl.string(A.t.QO7rOz),
              children: (0, r.jsx)(d.o1U, {
                  size: 'xs',
                  color: 'currentColor'
              })
          })
        : (0, r.jsx)(d.zxk, {
              variant: 'primary',
              text: A.intl.string(A.t.QO7rOz),
              onClick: a,
              loading: i
          });
}
let M = a.forwardRef(function (e, t) {
    let { application: n, size: i } = e,
        s = g.J.useExperiment({ location: 'UserSettingsAuthedApps' }, { autoTrackExposure: !0 }).enabled,
        b = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(T.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e)),
        { analyticsLocations: I } = (0, h.ZP)(),
        P = a.useCallback(() => {
            ((0, S.zZ)(T.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: n.id }), (0, O.JG)(b(n.id), () => (0, d.showToast)((0, d.createToast)(A.intl.string(A.t['L/PwZW']), d.ToastType.SUCCESS))));
        }, [n.id]),
        E = (0, o.e7)([j.default], () => j.default.locale),
        R = a.useCallback(() => {
            (0, u.Z)(
                (0, N.G)({
                    id: n.id,
                    name: n.name,
                    locale: E
                })
            );
        }, [E, n]),
        M = (0, x.Z)({
            id: n.id,
            label: A.intl.string(A.t['FfCL+/']),
            onSuccess: () => (0, d.showToast)((0, d.createToast)(A.intl.string(A.t.eNjAam), d.ToastType.SUCCESS))
        }),
        G = (0, v.Z)({
            application: n,
            onItemClick: () => {
                (0, S.zZ)(T.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: n.id });
            }
        }),
        z = a.useCallback(
            (e, t) =>
                (0, r.jsxs)(d.v2r, {
                    navId: 'application-directory-profile',
                    'aria-label': A.intl.string(A.t['/7I4/P']),
                    onClose: t,
                    onSelect: void 0,
                    children: [
                        s && (0, r.jsx)(d.kSQ, { children: G }),
                        e
                            ? (0, r.jsx)(d.kSQ, {
                                  children: (0, r.jsx)(d.sNh, {
                                      id: 'copy',
                                      label: A.intl.string(A.t.z4sP5O),
                                      action: P,
                                      icon: d.xPt
                                  })
                              })
                            : null,
                        (0, r.jsx)(d.kSQ, {
                            children: (0, r.jsx)(d.sNh, {
                                id: 'report',
                                label: A.intl.string(A.t.NgA5vr),
                                color: 'danger',
                                action: R
                            })
                        }),
                        null != M ? (0, r.jsx)(d.kSQ, { children: M }) : null
                    ]
                }),
            [M, R, P, s, G]
        ),
        { onClickLaunchActivity: B, isSubmitting: U } = (function (e, t) {
            var n;
            let r = e.id,
                i = null == e || null == (n = e.bot) ? void 0 : n.id,
                l = null != i && (0, _.BQ)(e) && (0, _.ye)(e),
                [s, c] = a.useState(!1),
                d = (0, S.nu)(),
                u = (0, o.e7)([y.default], () => y.default.getCurrentUser()),
                h = (0, o.e7)([p.ZP], () => p.ZP.getCurrentEmbeddedActivity()),
                g = a.useCallback(
                    async (t, n, r) => {
                        if (null != h && h.applicationId === e.id) {
                            let e = h.location;
                            (0, m.Z)('guild_id' in e ? e.guild_id : null, e);
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
                    n = 'true' === e.searchParams.get(Z);
                if (d && l && n && null != i && null != u) {
                    e.searchParams.delete(Z);
                    let n = e.pathname + e.search;
                    ((0, C.dL)(n), g(i, r, t));
                }
            }, [d, l, i, r, t, u, g]);
            let b = a.useCallback(async () => {
                if (null != i) {
                    if (((0, S.zZ)(T.rMx.APP_DIRECTORY_LAUNCH_CLICKED, { application_id: r }), !d)) return void (0, S.rf)({ [Z]: 'true' });
                    await g(i, r, t);
                }
            }, [i, r, t, d, g]);
            return {
                onClickLaunchActivity: l ? b : void 0,
                isSubmitting: s
            };
        })(n, I),
        F = null != B,
        V = F ? c.zx.Colors.PRIMARY : c.zx.Colors.BRAND;
    return (0, r.jsxs)('div', {
        ref: t,
        children: [
            (0, r.jsxs)('div', {
                className: l()(L.actionContainer, L.wide),
                children: [
                    F &&
                        (0, r.jsx)(k, {
                            variant: 'normal',
                            size: i,
                            onClick: B,
                            isSubmitting: U
                        }),
                    (0, r.jsx)(D, {
                        application: n,
                        variant: 'normal',
                        size: i,
                        color: V
                    }),
                    O.wS
                        ? (0, r.jsx)(c.zx, {
                              look: c.zx.Looks.FILLED,
                              size: c.zx.Sizes.ICON,
                              color: c.zx.Colors.PRIMARY,
                              className: l()(L.iconButton, { [L.small]: 'sm' === i }),
                              innerClassName: L.innerIconButton,
                              'aria-label': A.intl.string(A.t.z4sP5O),
                              onClick: P,
                              children: (0, r.jsx)(d.xPt, {
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
                className: l()(L.actionContainer, L.small),
                children: [
                    F &&
                        (0, r.jsx)(k, {
                            variant: 'normal',
                            size: i,
                            onClick: B,
                            isSubmitting: U
                        }),
                    (0, r.jsx)(D, {
                        application: n,
                        variant: 'small',
                        size: i,
                        color: V
                    }),
                    (0, r.jsx)(w, {
                        renderDropdown: (e) => z(O.wS, e),
                        size: i
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: l()(L.actionContainer, L.tiny),
                children: [
                    F &&
                        (0, r.jsx)(k, {
                            variant: 'icon',
                            size: i,
                            onClick: B,
                            isSubmitting: U
                        }),
                    (0, r.jsx)(D, {
                        application: n,
                        variant: 'icon',
                        size: i,
                        color: V
                    }),
                    (0, r.jsx)(w, {
                        renderDropdown: (e) => z(O.wS, e),
                        size: i
                    })
                ]
            })
        ]
    });
});
