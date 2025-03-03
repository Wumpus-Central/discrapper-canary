n.d(t, { Z: () => Z }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(301563), n(773603);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(873546),
    s = n(442837),
    c = n(481060),
    d = n(782568),
    u = n(906732),
    p = n(279332),
    m = n(783097),
    h = n(606192),
    g = n(326135),
    f = n(299206),
    _ = n(276022),
    v = n(703656),
    b = n(706454),
    x = n(594174),
    C = n(626135),
    j = n(572004),
    y = n(135431),
    I = n(272048),
    O = n(881294),
    N = n(258971),
    P = n(981631),
    S = n(388032),
    E = n(906996);
let A = 'start_application_install',
    L = 'launch_activity';
function T(e) {
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
                        className: l()(E.iconButton, { [E.small]: 'sm' === n }),
                        innerClassName: E.innerIconButton,
                        'aria-label': S.NW.string(S.t.UKOtz8)
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
function R(e) {
    let { application: t, variant: n, size: a, color: s } = e,
        { onClickInstallApplication: d, canInstall: u } = (function (e) {
            let t = (0, O.nu)(),
                n = i.useCallback(() => {
                    var t;
                    let n = null !== (t = N.z8.getField('guildId')) && void 0 !== t ? t : void 0;
                    (0, y.LO)({
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
                    if (t && 'true' === e.searchParams.get(A)) {
                        e.searchParams.delete(A);
                        let t = e.pathname + e.search;
                        (0, v.dL)(t), n();
                    }
                }, [t, n]),
                {
                    onClickInstallApplication: i.useCallback(() => {
                        if (((0, O.zZ)(P.rMx.APP_DIRECTORY_INSTALL_CLICKED, { application_id: e.id }), (o.tq || o.Em) && null == e.custom_install_url)) {
                            let t = (0, y.Er)({
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
                            C.default.track(P.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                                application_id: e.id,
                                guild_id: t,
                                auth_type: null != e.custom_install_url ? 'custom_url' : 'in_app',
                                source: 'product_page',
                                device_platform: o.tq ? 'mobile_web' : 'desktop_web'
                            }),
                                (0, O.rf)({ [A]: 'true' });
                        }
                    }, [e, n, t]),
                    canInstall: i.useMemo(
                        () =>
                            (0, y.Eb)({
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
              className: l()(E.iconButton, { [E.small]: 'sm' === a }),
              onClick: d,
              'aria-label': S.NW.string(S.t.NgXl3N),
              innerClassName: E.innerIconButton,
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
              children: 'small' === n ? S.NW.string(S.t.qRZ35u) : S.NW.string(S.t.NgXl3N)
          });
}
function k(e) {
    let { variant: t, size: n, onClick: i, isSubmitting: a } = e;
    return 'icon' === t
        ? (0, r.jsx)(c.zxk, {
              look: c.zxk.Looks.FILLED,
              size: c.zxk.Sizes.ICON,
              color: c.zxk.Colors.BRAND,
              className: l()(E.iconButton, { [E.small]: 'sm' === n }),
              innerClassName: E.innerIconButton,
              onClick: i,
              submitting: a,
              'aria-label': S.NW.string(S.t.QO7rOz),
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
              children: S.NW.string(S.t.QO7rOz)
          });
}
let Z = function (e) {
    let { application: t, size: n } = e,
        a = p.J.useExperiment({ location: 'UserSettingsAuthedApps' }, { autoTrackExposure: !0 }).enabled,
        o = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(P.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e)),
        { analyticsLocations: C } = (0, u.ZP)(),
        y = i.useCallback(() => {
            (0, O.zZ)(P.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: t.id }), (0, j.JG)(o(t.id)), (0, c.showToast)((0, c.createToast)(S.NW.string(S.t['L/PwZW']), c.ToastType.SUCCESS));
        }, [t.id]),
        N = (0, s.e7)([b.default], () => b.default.locale),
        A = i.useCallback(() => {
            (0, d.Z)(
                (0, g.G)({
                    id: t.id,
                    name: t.name,
                    locale: N
                })
            );
        }, [N, t]),
        Z = (0, f.Z)({
            id: t.id,
            label: S.NW.string(S.t['FfCL+/']),
            onSuccess: () => (0, c.showToast)((0, c.createToast)(S.NW.string(S.t.eNjAam), c.ToastType.SUCCESS))
        }),
        w = (0, _.Z)({
            application: t,
            onItemClick: () => {
                (0, O.zZ)(P.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: t.id });
            }
        }),
        D = i.useCallback(
            (e, t) =>
                (0, r.jsxs)(c.v2r, {
                    navId: 'application-directory-profile',
                    'aria-label': S.NW.string(S.t['/7I4/P']),
                    onClose: t,
                    onSelect: void 0,
                    children: [
                        a && (0, r.jsx)(c.kSQ, { children: w }),
                        e
                            ? (0, r.jsx)(c.kSQ, {
                                  children: (0, r.jsx)(c.sNh, {
                                      id: 'copy',
                                      label: S.NW.string(S.t.z4sP5O),
                                      action: y,
                                      icon: c.xPt
                                  })
                              })
                            : null,
                        (0, r.jsx)(c.kSQ, {
                            children: (0, r.jsx)(c.sNh, {
                                id: 'report',
                                label: S.NW.string(S.t.NgA5vr),
                                color: 'danger',
                                action: A
                            })
                        }),
                        null != Z ? (0, r.jsx)(c.kSQ, { children: Z }) : null
                    ]
                }),
            [Z, A, y, a, w]
        ),
        { onClickLaunchActivity: M, isSubmitting: G } = (function (e, t) {
            var n;
            let r = e.id,
                a = null == e ? void 0 : null === (n = e.bot) || void 0 === n ? void 0 : n.id,
                l = null != a && (0, m.BQ)(e) && (0, m.ye)(e),
                [o, c] = i.useState(!1),
                d = (0, O.nu)(),
                u = (0, s.e7)([x.default], () => x.default.getCurrentUser());
            i.useEffect(() => {
                let e = new URL(location.href),
                    n = 'true' === e.searchParams.get(L);
                if (d && l && n && null != a && null != u) {
                    e.searchParams.delete(L);
                    let n = e.pathname + e.search;
                    (0, v.dL)(n),
                        c(!0),
                        (0, h.W)({
                            appId: r,
                            botId: a,
                            analyticsLocations: t
                        }).finally(() => c(!1));
                }
            }, [d, l, a, r, t, u]);
            let p = i.useCallback(async () => {
                if (null != a) {
                    if (((0, O.zZ)(P.rMx.APP_DIRECTORY_LAUNCH_CLICKED, { application_id: r }), c(!0), !d)) {
                        (0, O.rf)({ [L]: 'true' });
                        return;
                    }
                    try {
                        await (0, h.W)({
                            appId: r,
                            botId: a,
                            analyticsLocations: t
                        });
                    } catch (e) {}
                    c(!1);
                }
            }, [a, r, t, d]);
            return {
                onClickLaunchActivity: l ? p : void 0,
                isSubmitting: o
            };
        })(t, C),
        { enabled: z } = (0, I.E)('GlobalDiscoveryAppsDetailActions'),
        B = z && null != M,
        U = B ? c.zxk.Colors.PRIMARY : c.zxk.Colors.BRAND;
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsxs)('div', {
                className: l()(E.actionContainer, E.wide),
                children: [
                    B &&
                        (0, r.jsx)(k, {
                            variant: 'normal',
                            size: n,
                            onClick: M,
                            isSubmitting: G
                        }),
                    (0, r.jsx)(R, {
                        application: t,
                        variant: 'normal',
                        size: n,
                        color: U
                    }),
                    j.wS
                        ? (0, r.jsx)(c.zxk, {
                              look: c.zxk.Looks.FILLED,
                              size: c.zxk.Sizes.ICON,
                              color: c.zxk.Colors.PRIMARY,
                              className: l()(E.iconButton, { [E.small]: 'sm' === n }),
                              innerClassName: E.innerIconButton,
                              'aria-label': S.NW.string(S.t.z4sP5O),
                              onClick: y,
                              children: (0, r.jsx)(c.xPt, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          })
                        : null,
                    (0, r.jsx)(T, {
                        renderDropdown: (e) => D(!1, e),
                        size: n
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: l()(E.actionContainer, E.small),
                children: [
                    B &&
                        (0, r.jsx)(k, {
                            variant: 'normal',
                            size: n,
                            onClick: M,
                            isSubmitting: G
                        }),
                    (0, r.jsx)(R, {
                        application: t,
                        variant: 'small',
                        size: n,
                        color: U
                    }),
                    (0, r.jsx)(T, {
                        renderDropdown: (e) => D(j.wS, e),
                        size: n
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: l()(E.actionContainer, E.tiny),
                children: [
                    B &&
                        (0, r.jsx)(k, {
                            variant: 'icon',
                            size: n,
                            onClick: M,
                            isSubmitting: G
                        }),
                    (0, r.jsx)(R, {
                        application: t,
                        variant: 'icon',
                        size: n,
                        color: U
                    }),
                    (0, r.jsx)(T, {
                        renderDropdown: (e) => D(j.wS, e),
                        size: n
                    })
                ]
            })
        ]
    });
};
