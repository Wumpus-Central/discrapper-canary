n.d(t, { Z: () => N }), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120), n(301563);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(873546),
    s = n(442837),
    c = n(481060),
    d = n(782568),
    u = n(326135),
    p = n(299206),
    m = n(703656),
    h = n(706454),
    g = n(626135),
    f = n(572004),
    _ = n(135431),
    v = n(881294),
    b = n(258971),
    x = n(981631),
    C = n(388032),
    j = n(65672);
let y = 'start_application_install';
function O(e) {
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
                        className: l()(j.iconButton, { [j.small]: 'sm' === n }),
                        innerClassName: j.innerIconButton,
                        'aria-label': C.NW.string(C.t.UKOtz8)
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
function I(e) {
    let { application: t, variant: n, size: a } = e,
        { onClickInstallApplication: s, canInstall: d } = (function (e) {
            let t = (0, v.nu)(),
                n = i.useCallback(() => {
                    var t;
                    let n = null !== (t = b.z8.getField('guildId')) && void 0 !== t ? t : void 0;
                    (0, _.LO)({
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
                    if (t && 'true' === e.searchParams.get(y)) {
                        e.searchParams.delete(y);
                        let t = e.pathname + e.search;
                        (0, m.dL)(t), n();
                    }
                }, [t, n]),
                {
                    onClickInstallApplication: i.useCallback(() => {
                        if (((0, v.zZ)(x.rMx.APP_DIRECTORY_INSTALL_CLICKED, { application_id: e.id }), (o.tq || o.Em) && null == e.custom_install_url)) {
                            let t = (0, _.Er)({
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
                            let t = b.z8.getField('guildId');
                            g.default.track(x.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                                application_id: e.id,
                                guild_id: t,
                                auth_type: null != e.custom_install_url ? 'custom_url' : 'in_app',
                                source: 'product_page',
                                device_platform: o.tq ? 'mobile_web' : 'desktop_web'
                            }),
                                (0, v.rf)({ [y]: 'true' });
                        }
                    }, [e, n, t]),
                    canInstall: i.useMemo(
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
    if ('icon' === n)
        return (0, r.jsx)(c.zxk, {
            look: c.zxk.Looks.FILLED,
            size: c.zxk.Sizes.ICON,
            color: c.zxk.Colors.BRAND,
            className: l()(j.iconButton, { [j.small]: 'sm' === a }),
            onClick: s,
            'aria-label': C.NW.string(C.t.NgXl3N),
            innerClassName: j.innerIconButton,
            disabled: !d,
            children: (0, r.jsx)(c.svS, {
                size: 'xs',
                color: 'currentColor'
            })
        });
    {
        let e;
        return (
            (e = 'small' === n ? C.NW.string(C.t.qRZ35u) : C.NW.string(C.t.NgXl3N)),
            (0, r.jsx)(c.zxk, {
                size: 'sm' === a ? c.zxk.Sizes.SMALL : c.zxk.Sizes.MEDIUM,
                color: c.zxk.Colors.BRAND,
                onClick: s,
                disabled: !d,
                children: e
            })
        );
    }
}
let N = function (e) {
    let { application: t, size: n } = e,
        a = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(x.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e)),
        o = i.useCallback(() => {
            (0, v.zZ)(x.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: t.id }), (0, f.JG)(a(t.id)), (0, c.showToast)((0, c.createToast)(C.NW.string(C.t['L/PwZW']), c.ToastType.SUCCESS));
        }, [t.id]),
        m = (0, s.e7)([h.default], () => h.default.locale),
        g = i.useCallback(() => {
            (0, d.Z)(
                (0, u.G)({
                    id: t.id,
                    name: t.name,
                    locale: m
                })
            );
        }, [m, t]),
        _ = (0, p.Z)({
            id: t.id,
            label: C.NW.string(C.t['FfCL+/']),
            onSuccess: () => (0, c.showToast)((0, c.createToast)(C.NW.string(C.t.eNjAam), c.ToastType.SUCCESS))
        }),
        b = i.useCallback(
            (e, t) =>
                (0, r.jsxs)(c.v2r, {
                    navId: 'application-directory-profile',
                    'aria-label': C.NW.string(C.t['/7I4/P']),
                    onClose: t,
                    onSelect: void 0,
                    children: [
                        e
                            ? (0, r.jsx)(c.kSQ, {
                                  children: (0, r.jsx)(c.sNh, {
                                      id: 'copy',
                                      label: C.NW.string(C.t.z4sP5O),
                                      action: o,
                                      icon: c.xPt
                                  })
                              })
                            : null,
                        (0, r.jsx)(c.kSQ, {
                            children: (0, r.jsx)(c.sNh, {
                                id: 'report',
                                label: C.NW.string(C.t.NgA5vr),
                                color: 'danger',
                                action: g
                            })
                        }),
                        null != _ ? (0, r.jsx)(c.kSQ, { children: _ }) : null
                    ]
                }),
            [_, g, o]
        );
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsxs)('div', {
                className: l()(j.actionContainer, j.wide),
                children: [
                    (0, r.jsx)(I, {
                        application: t,
                        variant: 'normal',
                        size: n
                    }),
                    f.wS
                        ? (0, r.jsx)(c.zxk, {
                              look: c.zxk.Looks.FILLED,
                              size: c.zxk.Sizes.ICON,
                              color: c.zxk.Colors.PRIMARY,
                              className: l()(j.iconButton, { [j.small]: 'sm' === n }),
                              innerClassName: j.innerIconButton,
                              'aria-label': C.NW.string(C.t.z4sP5O),
                              onClick: o,
                              children: (0, r.jsx)(c.xPt, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          })
                        : null,
                    (0, r.jsx)(O, {
                        renderDropdown: (e) => b(!1, e),
                        size: n
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: l()(j.actionContainer, j.small),
                children: [
                    (0, r.jsx)(I, {
                        application: t,
                        variant: 'small',
                        size: n
                    }),
                    (0, r.jsx)(O, {
                        renderDropdown: (e) => b(f.wS, e),
                        size: n
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: l()(j.actionContainer, j.tiny),
                children: [
                    (0, r.jsx)(I, {
                        application: t,
                        variant: 'icon',
                        size: n
                    }),
                    (0, r.jsx)(O, {
                        renderDropdown: (e) => b(f.wS, e),
                        size: n
                    })
                ]
            })
        ]
    });
};
