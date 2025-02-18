n.d(t, { Z: () => E }), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(873546),
    o = n(442837),
    c = n(481060),
    d = n(782568),
    u = n(326135),
    m = n(299206),
    h = n(703656),
    p = n(706454),
    g = n(626135),
    _ = n(572004),
    x = n(135431),
    C = n(881294),
    v = n(258971),
    f = n(981631),
    I = n(388032),
    b = n(859981);
let j = 'start_application_install';
function S(e) {
    let { renderDropdown: t, size: n } = e;
    return (0, i.jsx)(c.yRy, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return t(n);
        },
        position: 'left',
        align: 'top',
        animation: c.yRy.Animation.NONE,
        children: (e) =>
            (0, i.jsx)(c.zxk, {
                look: c.zxk.Looks.FILLED,
                size: c.zxk.Sizes.ICON,
                color: c.zxk.Colors.PRIMARY,
                className: l()(b.iconButton, { [b.small]: 'sm' === n }),
                innerClassName: b.innerIconButton,
                'aria-label': I.intl.string(I.t.UKOtz8),
                ...e,
                children: (0, i.jsx)(c.xhG, {
                    size: 'xs',
                    color: 'currentColor'
                })
            })
    });
}
function N(e) {
    let { application: t, variant: n, size: r } = e,
        { onClickInstallApplication: o, canInstall: d } = (function (e) {
            let t = (0, C.nu)(),
                n = a.useCallback(() => {
                    var t;
                    let n = null !== (t = v.z8.getField('guildId')) && void 0 !== t ? t : void 0;
                    (0, x.LO)({
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
                    if (t && 'true' === e.searchParams.get(j)) {
                        e.searchParams.delete(j);
                        let t = e.pathname + e.search;
                        (0, h.dL)(t), n();
                    }
                }, [t, n]),
                {
                    onClickInstallApplication: a.useCallback(() => {
                        if (((0, C.zZ)(f.rMx.APP_DIRECTORY_INSTALL_CLICKED, { application_id: e.id }), (s.tq || s.Em) && null == e.custom_install_url)) {
                            let t = (0, x.Er)({
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
                            let t = v.z8.getField('guildId');
                            g.default.track(f.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                                application_id: e.id,
                                guild_id: t,
                                auth_type: null != e.custom_install_url ? 'custom_url' : 'in_app',
                                source: 'product_page',
                                device_platform: s.tq ? 'mobile_web' : 'desktop_web'
                            }),
                                (0, C.rf)({ [j]: 'true' });
                        }
                    }, [e, n, t]),
                    canInstall: a.useMemo(
                        () =>
                            (0, x.Eb)({
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
        return (0, i.jsx)(c.zxk, {
            look: c.zxk.Looks.FILLED,
            size: c.zxk.Sizes.ICON,
            color: c.zxk.Colors.BRAND,
            className: l()(b.iconButton, { [b.small]: 'sm' === r }),
            onClick: o,
            'aria-label': I.intl.string(I.t.NgXl3N),
            innerClassName: b.innerIconButton,
            disabled: !d,
            children: (0, i.jsx)(c.svS, {
                size: 'xs',
                color: 'currentColor'
            })
        });
    {
        let e;
        return (
            (e = 'small' === n ? I.intl.string(I.t.qRZ35u) : I.intl.string(I.t.NgXl3N)),
            (0, i.jsx)(c.zxk, {
                size: 'sm' === r ? c.zxk.Sizes.SMALL : c.zxk.Sizes.MEDIUM,
                color: c.zxk.Colors.BRAND,
                onClick: o,
                disabled: !d,
                children: e
            })
        );
    }
}
let E = function (e) {
    let { application: t, size: n } = e,
        r = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(f.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e)),
        s = a.useCallback(() => {
            (0, C.zZ)(f.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: t.id }), (0, _.JG)(r(t.id)), (0, c.showToast)((0, c.createToast)(I.intl.string(I.t['L/PwZW']), c.ToastType.SUCCESS));
        }, [t.id]),
        h = (0, o.e7)([p.default], () => p.default.locale),
        g = a.useCallback(() => {
            (0, d.Z)(
                (0, u.G)({
                    id: t.id,
                    name: t.name,
                    locale: h
                })
            );
        }, [h, t]),
        x = (0, m.Z)({
            id: t.id,
            label: I.intl.string(I.t['FfCL+/']),
            onSuccess: () => (0, c.showToast)((0, c.createToast)(I.intl.string(I.t.eNjAam), c.ToastType.SUCCESS))
        }),
        v = a.useCallback(
            (e, t) =>
                (0, i.jsxs)(c.v2r, {
                    navId: 'application-directory-profile',
                    'aria-label': I.intl.string(I.t['/7I4/P']),
                    onClose: t,
                    onSelect: void 0,
                    children: [
                        e
                            ? (0, i.jsx)(c.kSQ, {
                                  children: (0, i.jsx)(c.sNh, {
                                      id: 'copy',
                                      label: I.intl.string(I.t.z4sP5O),
                                      action: s,
                                      icon: c.xPt
                                  })
                              })
                            : null,
                        (0, i.jsx)(c.kSQ, {
                            children: (0, i.jsx)(c.sNh, {
                                id: 'report',
                                label: I.intl.string(I.t.NgA5vr),
                                color: 'danger',
                                action: g
                            })
                        }),
                        null != x ? (0, i.jsx)(c.kSQ, { children: x }) : null
                    ]
                }),
            [x, g, s]
        );
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)('div', {
                className: l()(b.actionContainer, b.wide),
                children: [
                    (0, i.jsx)(N, {
                        application: t,
                        variant: 'normal',
                        size: n
                    }),
                    _.wS
                        ? (0, i.jsx)(c.zxk, {
                              look: c.zxk.Looks.FILLED,
                              size: c.zxk.Sizes.ICON,
                              color: c.zxk.Colors.PRIMARY,
                              className: l()(b.iconButton, { [b.small]: 'sm' === n }),
                              innerClassName: b.innerIconButton,
                              'aria-label': I.intl.string(I.t.z4sP5O),
                              onClick: s,
                              children: (0, i.jsx)(c.xPt, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          })
                        : null,
                    (0, i.jsx)(S, {
                        renderDropdown: (e) => v(!1, e),
                        size: n
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: l()(b.actionContainer, b.small),
                children: [
                    (0, i.jsx)(N, {
                        application: t,
                        variant: 'small',
                        size: n
                    }),
                    (0, i.jsx)(S, {
                        renderDropdown: (e) => v(_.wS, e),
                        size: n
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: l()(b.actionContainer, b.tiny),
                children: [
                    (0, i.jsx)(N, {
                        application: t,
                        variant: 'icon',
                        size: n
                    }),
                    (0, i.jsx)(S, {
                        renderDropdown: (e) => v(_.wS, e),
                        size: n
                    })
                ]
            })
        ]
    });
};
