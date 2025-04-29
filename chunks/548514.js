n.d(t, { Z: () => D }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(35282);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    l = n.n(a),
    s = n(873546),
    o = n(442837),
    c = n(481060),
    d = n(782568),
    u = n(317381),
    p = n(197386),
    m = n(906732),
    h = n(279332),
    g = n(915346),
    _ = n(783097),
    f = n(433534),
    b = n(299206),
    x = n(276022),
    v = n(703656),
    C = n(706454),
    j = n(594174),
    y = n(626135),
    I = n(572004),
    O = n(135431),
    P = n(881294),
    S = n(258971),
    E = n(98449),
    N = n(981631),
    T = n(388032),
    A = n(284944);
let L = 'start_application_install',
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
                        className: l()(A.iconButton, { [A.small]: 'sm' === n }),
                        innerClassName: A.innerIconButton,
                        'aria-label': T.intl.string(T.t.UKOtz8)
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
    let { application: t, variant: n, size: a, color: o } = e,
        { onClickInstallApplication: d, canInstall: u } = (function (e) {
            let t = (0, P.nu)(),
                n = i.useCallback(() => {
                    var t;
                    let n = null != (t = S.z8.getField('guildId')) ? t : void 0;
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
                i.useEffect(() => {
                    let e = new URL(location.href);
                    if (t && 'true' === e.searchParams.get(L)) {
                        e.searchParams.delete(L);
                        let t = e.pathname + e.search;
                        (0, v.dL)(t), n();
                    }
                }, [t, n]),
                {
                    onClickInstallApplication: i.useCallback(() => {
                        if (((0, P.zZ)(N.rMx.APP_DIRECTORY_INSTALL_CLICKED, { application_id: e.id }), (s.tq || s.Em) && null == e.custom_install_url)) {
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
                            let t = S.z8.getField('guildId');
                            y.default.track(N.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                                application_id: e.id,
                                guild_id: t,
                                auth_type: null != e.custom_install_url ? 'custom_url' : 'in_app',
                                source: 'product_page',
                                device_platform: s.tq ? 'mobile_web' : 'desktop_web'
                            }),
                                (0, P.rf)({ [L]: 'true' });
                        }
                    }, [e, n, t]),
                    canInstall: i.useMemo(
                        () =>
                            (0, f.Eb)({
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
              color: o,
              className: l()(A.iconButton, { [A.small]: 'sm' === a }),
              onClick: d,
              'aria-label': T.intl.string(T.t.NgXl3N),
              innerClassName: A.innerIconButton,
              disabled: !u,
              children: (0, r.jsx)(c.svS, {
                  size: 'xs',
                  color: 'currentColor'
              })
          })
        : (0, r.jsx)(c.zxk, {
              size: 'sm' === a ? c.zxk.Sizes.SMALL : c.zxk.Sizes.MEDIUM,
              color: o,
              onClick: d,
              disabled: !u,
              children: 'small' === n ? T.intl.string(T.t.qRZ35u) : T.intl.string(T.t.NgXl3N)
          });
}
function w(e) {
    let { variant: t, size: n, onClick: i, isSubmitting: a } = e;
    return 'icon' === t
        ? (0, r.jsx)(c.zxk, {
              look: c.zxk.Looks.FILLED,
              size: c.zxk.Sizes.ICON,
              color: c.zxk.Colors.BRAND,
              className: l()(A.iconButton, { [A.small]: 'sm' === n }),
              innerClassName: A.innerIconButton,
              onClick: i,
              submitting: a,
              'aria-label': T.intl.string(T.t.QO7rOz),
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
              children: T.intl.string(T.t.QO7rOz)
          });
}
let D = i.forwardRef(function (e, t) {
    let { application: n, size: a } = e,
        s = h.J.useExperiment({ location: 'UserSettingsAuthedApps' }, { autoTrackExposure: !0 }).enabled,
        f = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(N.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e)),
        { analyticsLocations: y } = (0, m.ZP)(),
        O = i.useCallback(() => {
            (0, P.zZ)(N.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: n.id }), (0, I.JG)(f(n.id), () => (0, c.showToast)((0, c.createToast)(T.intl.string(T.t['L/PwZW']), c.ToastType.SUCCESS)));
        }, [n.id]),
        S = (0, o.e7)([C.default], () => C.default.locale),
        L = i.useCallback(() => {
            (0, d.Z)(
                (0, E.G)({
                    id: n.id,
                    name: n.name,
                    locale: S
                })
            );
        }, [S, n]),
        D = (0, b.Z)({
            id: n.id,
            label: T.intl.string(T.t['FfCL+/']),
            onSuccess: () => (0, c.showToast)((0, c.createToast)(T.intl.string(T.t.eNjAam), c.ToastType.SUCCESS))
        }),
        M = (0, x.Z)({
            application: n,
            onItemClick: () => {
                (0, P.zZ)(N.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: n.id });
            }
        }),
        G = i.useCallback(
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
                        null != D ? (0, r.jsx)(c.kSQ, { children: D }) : null
                    ]
                }),
            [D, L, O, s, M]
        ),
        { onClickLaunchActivity: z, isSubmitting: B } = (function (e, t) {
            var n;
            let r = e.id,
                a = null == e || null == (n = e.bot) ? void 0 : n.id,
                l = null != a && (0, _.BQ)(e) && (0, _.ye)(e),
                [s, c] = i.useState(!1),
                d = (0, P.nu)(),
                m = (0, o.e7)([j.default], () => j.default.getCurrentUser()),
                h = (0, o.e7)([u.ZP], () => u.ZP.getCurrentEmbeddedActivity()),
                f = i.useCallback(
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
                    if (((0, P.zZ)(N.rMx.APP_DIRECTORY_LAUNCH_CLICKED, { application_id: r }), !d)) return void (0, P.rf)({ [R]: 'true' });
                    await f(a, r, t);
                }
            }, [a, r, t, d, f]);
            return {
                onClickLaunchActivity: l ? b : void 0,
                isSubmitting: s
            };
        })(n, y),
        U = null != z,
        F = U ? c.zxk.Colors.PRIMARY : c.zxk.Colors.BRAND;
    return (0, r.jsxs)('div', {
        ref: t,
        children: [
            (0, r.jsxs)('div', {
                className: l()(A.actionContainer, A.wide),
                children: [
                    U &&
                        (0, r.jsx)(w, {
                            variant: 'normal',
                            size: a,
                            onClick: z,
                            isSubmitting: B
                        }),
                    (0, r.jsx)(k, {
                        application: n,
                        variant: 'normal',
                        size: a,
                        color: F
                    }),
                    I.wS
                        ? (0, r.jsx)(c.zxk, {
                              look: c.zxk.Looks.FILLED,
                              size: c.zxk.Sizes.ICON,
                              color: c.zxk.Colors.PRIMARY,
                              className: l()(A.iconButton, { [A.small]: 'sm' === a }),
                              innerClassName: A.innerIconButton,
                              'aria-label': T.intl.string(T.t.z4sP5O),
                              onClick: O,
                              children: (0, r.jsx)(c.xPt, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          })
                        : null,
                    (0, r.jsx)(Z, {
                        renderDropdown: (e) => G(!1, e),
                        size: a
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: l()(A.actionContainer, A.small),
                children: [
                    U &&
                        (0, r.jsx)(w, {
                            variant: 'normal',
                            size: a,
                            onClick: z,
                            isSubmitting: B
                        }),
                    (0, r.jsx)(k, {
                        application: n,
                        variant: 'small',
                        size: a,
                        color: F
                    }),
                    (0, r.jsx)(Z, {
                        renderDropdown: (e) => G(I.wS, e),
                        size: a
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: l()(A.actionContainer, A.tiny),
                children: [
                    U &&
                        (0, r.jsx)(w, {
                            variant: 'icon',
                            size: a,
                            onClick: z,
                            isSubmitting: B
                        }),
                    (0, r.jsx)(k, {
                        application: n,
                        variant: 'icon',
                        size: a,
                        color: F
                    }),
                    (0, r.jsx)(Z, {
                        renderDropdown: (e) => G(I.wS, e),
                        size: a
                    })
                ]
            })
        ]
    });
});
