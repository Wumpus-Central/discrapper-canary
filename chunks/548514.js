n.d(t, { Z: () => D }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(301563);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(873546),
    s = n(442837),
    c = n(481060),
    d = n(782568),
    u = n(317381),
    p = n(197386),
    m = n(906732),
    h = n(279332),
    g = n(783097),
    _ = n(606192),
    f = n(299206),
    b = n(276022),
    v = n(703656),
    x = n(706454),
    C = n(594174),
    j = n(626135),
    y = n(572004),
    I = n(135431),
    O = n(272048),
    N = n(881294),
    P = n(258971),
    S = n(98449),
    E = n(981631),
    A = n(388032),
    L = n(906996);
let T = 'start_application_install',
    R = 'launch_activity';
function Z(e) {
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
            var t, i;
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
                        className: l()(L.iconButton, { [L.small]: 'sm' === n }),
                        innerClassName: L.innerIconButton,
                        'aria-label': A.NW.string(A.t.UKOtz8)
                    },
                    e
                )),
                (i = i =
                    {
                        children: (0, r.jsx)(c.xhG, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                t)
            );
        }
    });
}
function k(e) {
    let { application: t, variant: n, size: a, color: s } = e,
        { onClickInstallApplication: d, canInstall: u } = (function (e) {
            let t = (0, N.nu)(),
                n = i.useCallback(() => {
                    var t;
                    let n = null !== (t = P.z8.getField('guildId')) && void 0 !== t ? t : void 0;
                    (0, I.LO)({
                        applicationId: e.id,
                        customInstallUrl: e.custom_install_url,
                        installParams: e.install_params,
                        integrationTypesConfig: e.integration_types_config,
                        guildId: n,
                        source: 'product_page'
                    });
                }, [e]);
            return (
                i.useEffect(() => {
                    let e = new URL(location.href);
                    if (t && 'true' === e.searchParams.get(T)) {
                        e.searchParams.delete(T);
                        let t = e.pathname + e.search;
                        (0, v.dL)(t), n();
                    }
                }, [t, n]),
                {
                    onClickInstallApplication: i.useCallback(() => {
                        if (((0, N.zZ)(E.rMx.APP_DIRECTORY_INSTALL_CLICKED, { application_id: e.id }), (o.tq || o.Em) && null == e.custom_install_url)) {
                            let t = (0, I.Er)({
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
                            let t = P.z8.getField('guildId');
                            j.default.track(E.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                                application_id: e.id,
                                guild_id: t,
                                auth_type: null != e.custom_install_url ? 'custom_url' : 'in_app',
                                source: 'product_page',
                                device_platform: o.tq ? 'mobile_web' : 'desktop_web'
                            }),
                                (0, N.rf)({ [T]: 'true' });
                        }
                    }, [e, n, t]),
                    canInstall: i.useMemo(
                        () =>
                            (0, I.Eb)({
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
              className: l()(L.iconButton, { [L.small]: 'sm' === a }),
              onClick: d,
              'aria-label': A.NW.string(A.t.NgXl3N),
              innerClassName: L.innerIconButton,
              disabled: !u,
              children: (0, r.jsx)(c.svS, {
                  size: 'xs',
                  color: 'currentColor'
              })
          })
        : (0, r.jsx)(c.zxk, {
              size: 'sm' === a ? c.zxk.Sizes.SMALL : c.zxk.Sizes.MEDIUM,
              color: s,
              onClick: d,
              disabled: !u,
              children: 'small' === n ? A.NW.string(A.t.qRZ35u) : A.NW.string(A.t.NgXl3N)
          });
}
function w(e) {
    let { variant: t, size: n, onClick: i, isSubmitting: a } = e;
    return 'icon' === t
        ? (0, r.jsx)(c.zxk, {
              look: c.zxk.Looks.FILLED,
              size: c.zxk.Sizes.ICON,
              color: c.zxk.Colors.BRAND,
              className: l()(L.iconButton, { [L.small]: 'sm' === n }),
              innerClassName: L.innerIconButton,
              onClick: i,
              submitting: a,
              'aria-label': A.NW.string(A.t.QO7rOz),
              children: (0, r.jsx)(c.o1U, {
                  size: 'xs',
                  color: 'currentColor'
              })
          })
        : (0, r.jsx)(c.zxk, {
              size: 'sm' === n ? c.zxk.Sizes.SMALL : c.zxk.Sizes.MEDIUM,
              color: c.zxk.Colors.BRAND,
              onClick: i,
              submitting: a,
              children: A.NW.string(A.t.QO7rOz)
          });
}
let D = function (e) {
    let { application: t, size: n } = e,
        a = h.J.useExperiment({ location: 'UserSettingsAuthedApps' }, { autoTrackExposure: !0 }).enabled,
        o = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(E.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e)),
        { analyticsLocations: j } = (0, m.ZP)(),
        I = i.useCallback(() => {
            (0, N.zZ)(E.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: t.id }), (0, y.JG)(o(t.id)), (0, c.showToast)((0, c.createToast)(A.NW.string(A.t['L/PwZW']), c.ToastType.SUCCESS));
        }, [t.id]),
        P = (0, s.e7)([x.default], () => x.default.locale),
        T = i.useCallback(() => {
            (0, d.Z)(
                (0, S.G)({
                    id: t.id,
                    name: t.name,
                    locale: P
                })
            );
        }, [P, t]),
        D = (0, f.Z)({
            id: t.id,
            label: A.NW.string(A.t['FfCL+/']),
            onSuccess: () => (0, c.showToast)((0, c.createToast)(A.NW.string(A.t.eNjAam), c.ToastType.SUCCESS))
        }),
        M = (0, b.Z)({
            application: t,
            onItemClick: () => {
                (0, N.zZ)(E.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: t.id });
            }
        }),
        G = i.useCallback(
            (e, t) =>
                (0, r.jsxs)(c.v2r, {
                    navId: 'application-directory-profile',
                    'aria-label': A.NW.string(A.t['/7I4/P']),
                    onClose: t,
                    onSelect: void 0,
                    children: [
                        a && (0, r.jsx)(c.kSQ, { children: M }),
                        e
                            ? (0, r.jsx)(c.kSQ, {
                                  children: (0, r.jsx)(c.sNh, {
                                      id: 'copy',
                                      label: A.NW.string(A.t.z4sP5O),
                                      action: I,
                                      icon: c.xPt
                                  })
                              })
                            : null,
                        (0, r.jsx)(c.kSQ, {
                            children: (0, r.jsx)(c.sNh, {
                                id: 'report',
                                label: A.NW.string(A.t.NgA5vr),
                                color: 'danger',
                                action: T
                            })
                        }),
                        null != D ? (0, r.jsx)(c.kSQ, { children: D }) : null
                    ]
                }),
            [D, T, I, a, M]
        ),
        { onClickLaunchActivity: z, isSubmitting: B } = (function (e, t) {
            var n;
            let r = e.id,
                a = null == e ? void 0 : null === (n = e.bot) || void 0 === n ? void 0 : n.id,
                l = null != a && (0, g.BQ)(e) && (0, g.ye)(e),
                [o, c] = i.useState(!1),
                d = (0, N.nu)(),
                m = (0, s.e7)([C.default], () => C.default.getCurrentUser()),
                h = (0, s.e7)([u.ZP], () => u.ZP.getCurrentEmbeddedActivity()),
                f = i.useCallback(
                    async (t, n, r) => {
                        if (null != h && h.applicationId === e.id) {
                            let e = h.location;
                            (0, p.Z)('guild_id' in e ? e.guild_id : null, e);
                            return;
                        }
                        c(!0);
                        try {
                            await (0, _.W)({
                                appId: n,
                                botId: t,
                                analyticsLocations: r
                            });
                        } catch (e) {}
                        c(!1);
                    },
                    [h, e.id]
                );
            i.useEffect(() => {
                let e = new URL(location.href),
                    n = 'true' === e.searchParams.get(R);
                if (d && l && n && null != a && null != m) {
                    e.searchParams.delete(R);
                    let n = e.pathname + e.search;
                    (0, v.dL)(n), f(a, r, t);
                }
            }, [d, l, a, r, t, m, f]);
            let b = i.useCallback(async () => {
                if (null != a) {
                    if (((0, N.zZ)(E.rMx.APP_DIRECTORY_LAUNCH_CLICKED, { application_id: r }), !d)) {
                        (0, N.rf)({ [R]: 'true' });
                        return;
                    }
                    await f(a, r, t);
                }
            }, [a, r, t, d, f]);
            return {
                onClickLaunchActivity: l ? b : void 0,
                isSubmitting: o
            };
        })(t, j),
        { enabled: U } = (0, O.E)('GlobalDiscoveryAppsDetailActions'),
        W = U && null != z,
        F = W ? c.zxk.Colors.PRIMARY : c.zxk.Colors.BRAND;
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsxs)('div', {
                className: l()(L.actionContainer, L.wide),
                children: [
                    W &&
                        (0, r.jsx)(w, {
                            variant: 'normal',
                            size: n,
                            onClick: z,
                            isSubmitting: B
                        }),
                    (0, r.jsx)(k, {
                        application: t,
                        variant: 'normal',
                        size: n,
                        color: F
                    }),
                    y.wS
                        ? (0, r.jsx)(c.zxk, {
                              look: c.zxk.Looks.FILLED,
                              size: c.zxk.Sizes.ICON,
                              color: c.zxk.Colors.PRIMARY,
                              className: l()(L.iconButton, { [L.small]: 'sm' === n }),
                              innerClassName: L.innerIconButton,
                              'aria-label': A.NW.string(A.t.z4sP5O),
                              onClick: I,
                              children: (0, r.jsx)(c.xPt, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          })
                        : null,
                    (0, r.jsx)(Z, {
                        renderDropdown: (e) => G(!1, e),
                        size: n
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: l()(L.actionContainer, L.small),
                children: [
                    W &&
                        (0, r.jsx)(w, {
                            variant: 'normal',
                            size: n,
                            onClick: z,
                            isSubmitting: B
                        }),
                    (0, r.jsx)(k, {
                        application: t,
                        variant: 'small',
                        size: n,
                        color: F
                    }),
                    (0, r.jsx)(Z, {
                        renderDropdown: (e) => G(y.wS, e),
                        size: n
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: l()(L.actionContainer, L.tiny),
                children: [
                    W &&
                        (0, r.jsx)(w, {
                            variant: 'icon',
                            size: n,
                            onClick: z,
                            isSubmitting: B
                        }),
                    (0, r.jsx)(k, {
                        application: t,
                        variant: 'icon',
                        size: n,
                        color: F
                    }),
                    (0, r.jsx)(Z, {
                        renderDropdown: (e) => G(y.wS, e),
                        size: n
                    })
                ]
            })
        ]
    });
};
