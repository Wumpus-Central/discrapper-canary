n.d(t, { Z: () => S }), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120), n(301563);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(873546),
    s = n(442837),
    c = n(481060),
    d = n(782568),
    u = n(279332),
    p = n(326135),
    m = n(299206),
    h = n(276022),
    g = n(703656),
    _ = n(706454),
    f = n(626135),
    v = n(572004),
    b = n(135431),
    x = n(881294),
    C = n(258971),
    j = n(981631),
    y = n(388032),
    O = n(65672);
let I = 'start_application_install';
function N(e) {
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
                        className: l()(O.iconButton, { [O.small]: 'sm' === n }),
                        innerClassName: O.innerIconButton,
                        'aria-label': y.NW.string(y.t.UKOtz8)
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
function P(e) {
    let { application: t, variant: n, size: i } = e,
        { onClickInstallApplication: s, canInstall: d } = (function (e) {
            let t = (0, x.nu)(),
                n = a.useCallback(() => {
                    var t;
                    let n = null !== (t = C.z8.getField('guildId')) && void 0 !== t ? t : void 0;
                    (0, b.LO)({
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
                    if (t && 'true' === e.searchParams.get(I)) {
                        e.searchParams.delete(I);
                        let t = e.pathname + e.search;
                        (0, g.dL)(t), n();
                    }
                }, [t, n]),
                {
                    onClickInstallApplication: a.useCallback(() => {
                        if (((0, x.zZ)(j.rMx.APP_DIRECTORY_INSTALL_CLICKED, { application_id: e.id }), (o.tq || o.Em) && null == e.custom_install_url)) {
                            let t = (0, b.Er)({
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
                            let t = C.z8.getField('guildId');
                            f.default.track(j.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                                application_id: e.id,
                                guild_id: t,
                                auth_type: null != e.custom_install_url ? 'custom_url' : 'in_app',
                                source: 'product_page',
                                device_platform: o.tq ? 'mobile_web' : 'desktop_web'
                            }),
                                (0, x.rf)({ [I]: 'true' });
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
    if ('icon' === n)
        return (0, r.jsx)(c.zxk, {
            look: c.zxk.Looks.FILLED,
            size: c.zxk.Sizes.ICON,
            color: c.zxk.Colors.BRAND,
            className: l()(O.iconButton, { [O.small]: 'sm' === i }),
            onClick: s,
            'aria-label': y.NW.string(y.t.NgXl3N),
            innerClassName: O.innerIconButton,
            disabled: !d,
            children: (0, r.jsx)(c.svS, {
                size: 'xs',
                color: 'currentColor'
            })
        });
    {
        let e;
        return (
            (e = 'small' === n ? y.NW.string(y.t.qRZ35u) : y.NW.string(y.t.NgXl3N)),
            (0, r.jsx)(c.zxk, {
                size: 'sm' === i ? c.zxk.Sizes.SMALL : c.zxk.Sizes.MEDIUM,
                color: c.zxk.Colors.BRAND,
                onClick: s,
                disabled: !d,
                children: e
            })
        );
    }
}
let S = function (e) {
    let { application: t, size: n } = e,
        i = u.J.useExperiment({ location: 'UserSettingsAuthedApps' }, { autoTrackExposure: !0 }).enabled,
        o = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(j.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e)),
        g = a.useCallback(() => {
            (0, x.zZ)(j.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: t.id }), (0, v.JG)(o(t.id)), (0, c.showToast)((0, c.createToast)(y.NW.string(y.t['L/PwZW']), c.ToastType.SUCCESS));
        }, [t.id]),
        f = (0, s.e7)([_.default], () => _.default.locale),
        b = a.useCallback(() => {
            (0, d.Z)(
                (0, p.G)({
                    id: t.id,
                    name: t.name,
                    locale: f
                })
            );
        }, [f, t]),
        C = (0, m.Z)({
            id: t.id,
            label: y.NW.string(y.t['FfCL+/']),
            onSuccess: () => (0, c.showToast)((0, c.createToast)(y.NW.string(y.t.eNjAam), c.ToastType.SUCCESS))
        }),
        I = (0, h.Z)({
            application: t,
            onItemClick: () => {
                (0, x.zZ)(j.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: t.id });
            }
        }),
        S = a.useCallback(
            (e, t) =>
                (0, r.jsxs)(c.v2r, {
                    navId: 'application-directory-profile',
                    'aria-label': y.NW.string(y.t['/7I4/P']),
                    onClose: t,
                    onSelect: void 0,
                    children: [
                        i && (0, r.jsx)(c.kSQ, { children: I }),
                        e
                            ? (0, r.jsx)(c.kSQ, {
                                  children: (0, r.jsx)(c.sNh, {
                                      id: 'copy',
                                      label: y.NW.string(y.t.z4sP5O),
                                      action: g,
                                      icon: c.xPt
                                  })
                              })
                            : null,
                        (0, r.jsx)(c.kSQ, {
                            children: (0, r.jsx)(c.sNh, {
                                id: 'report',
                                label: y.NW.string(y.t.NgA5vr),
                                color: 'danger',
                                action: b
                            })
                        }),
                        null != C ? (0, r.jsx)(c.kSQ, { children: C }) : null
                    ]
                }),
            [C, b, g, i, I]
        );
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsxs)('div', {
                className: l()(O.actionContainer, O.wide),
                children: [
                    (0, r.jsx)(P, {
                        application: t,
                        variant: 'normal',
                        size: n
                    }),
                    v.wS
                        ? (0, r.jsx)(c.zxk, {
                              look: c.zxk.Looks.FILLED,
                              size: c.zxk.Sizes.ICON,
                              color: c.zxk.Colors.PRIMARY,
                              className: l()(O.iconButton, { [O.small]: 'sm' === n }),
                              innerClassName: O.innerIconButton,
                              'aria-label': y.NW.string(y.t.z4sP5O),
                              onClick: g,
                              children: (0, r.jsx)(c.xPt, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          })
                        : null,
                    (0, r.jsx)(N, {
                        renderDropdown: (e) => S(!1, e),
                        size: n
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: l()(O.actionContainer, O.small),
                children: [
                    (0, r.jsx)(P, {
                        application: t,
                        variant: 'small',
                        size: n
                    }),
                    (0, r.jsx)(N, {
                        renderDropdown: (e) => S(v.wS, e),
                        size: n
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: l()(O.actionContainer, O.tiny),
                children: [
                    (0, r.jsx)(P, {
                        application: t,
                        variant: 'icon',
                        size: n
                    }),
                    (0, r.jsx)(N, {
                        renderDropdown: (e) => S(v.wS, e),
                        size: n
                    })
                ]
            })
        ]
    });
};
