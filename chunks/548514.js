n(47120), n(315314), n(610138), n(216116), n(78328), n(815648);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(873546),
    s = n(442837),
    c = n(481060),
    d = n(782568),
    u = n(906732),
    m = n(783097),
    p = n(606192),
    h = n(326135),
    g = n(299206),
    C = n(703656),
    x = n(706454),
    v = n(626135),
    _ = n(572004),
    f = n(135431),
    b = n(881294),
    I = n(258971),
    S = n(981631),
    j = n(388032),
    N = n(914045);
let E = 'start_application_install';
function y(e) {
    let { renderDropdown: t, size: n } = e;
    return (0, i.jsx)(c.Popout, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return t(n);
        },
        position: 'left',
        align: 'top',
        animation: c.Popout.Animation.NONE,
        children: (e) =>
            (0, i.jsx)(c.Button, {
                look: c.Button.Looks.FILLED,
                size: c.Button.Sizes.ICON,
                color: c.Button.Colors.PRIMARY,
                className: l()(N.iconButton, { [N.small]: 'sm' === n }),
                innerClassName: N.innerIconButton,
                'aria-label': j.intl.string(j.t.UKOtz8),
                ...e,
                children: (0, i.jsx)(c.MoreHorizontalIcon, {
                    size: 'xs',
                    color: 'currentColor'
                })
            })
    });
}
function P(e) {
    let { application: t, variant: n, size: r, analyticsLocations: s } = e,
        { onClickInstallApplication: d, canInstall: u } = (function (e) {
            let t = (0, b.nu)(),
                n = a.useCallback(() => {
                    var t;
                    let n = null !== (t = I.z8.getField('guildId')) && void 0 !== t ? t : void 0;
                    (0, f.LO)({
                        applicationId: e.id,
                        customInstallUrl: e.custom_install_url,
                        installParams: e.install_params,
                        integrationTypesConfig: e.integration_types_config,
                        guildId: n,
                        source: 'product_page'
                    });
                }, [e]);
            a.useEffect(() => {
                let e = new URL(location.href);
                if (t && 'true' === e.searchParams.get(E)) {
                    e.searchParams.delete(E);
                    let t = e.pathname + e.search;
                    (0, C.dL)(t), n();
                }
            }, [t, n]);
            let i = a.useCallback(() => {
                if (((0, b.zZ)(S.rMx.APP_DIRECTORY_INSTALL_CLICKED, { application_id: e.id }), (o.tq || o.Em) && null == e.custom_install_url)) {
                    let t = (0, f.Er)({
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
                    let t = I.z8.getField('guildId');
                    v.default.track(S.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                        application_id: e.id,
                        guild_id: t,
                        auth_type: null != e.custom_install_url ? 'custom_url' : 'in_app',
                        source: 'product_page',
                        device_platform: o.tq ? 'mobile_web' : 'desktop_web'
                    }),
                        (0, b.rf)({ [E]: 'true' });
                }
            }, [e, n, t]);
            return {
                onClickInstallApplication: i,
                canInstall: a.useMemo(
                    () =>
                        (0, f.Eb)({
                            customInstallUrl: e.custom_install_url,
                            installParams: e.install_params,
                            integrationTypesConfig: e.integration_types_config
                        }),
                    [e]
                )
            };
        })(t),
        { onClickLaunchActivity: h, isSubmitting: g } = (function (e, t) {
            var n;
            let i = e.id,
                r = null == e ? void 0 : null === (n = e.bot) || void 0 === n ? void 0 : n.id,
                l = null != r && (0, m.BQ)(e) && (0, m.ye)(e),
                [o, s] = a.useState(!1),
                c = a.useCallback(async () => {
                    if (null != r) {
                        (0, b.zZ)(S.rMx.APP_DIRECTORY_LAUNCH_CLICKED, { application_id: i }), s(!0);
                        try {
                            await (0, p.W)({
                                appId: i,
                                botId: r,
                                analyticsLocations: t
                            });
                        } catch (e) {}
                        s(!1);
                    }
                }, [r, i, t]);
            return {
                onClickLaunchActivity: l ? c : void 0,
                isSubmitting: o
            };
        })(t, s),
        x = null != h,
        _ = x ? h : d;
    if ('icon' === n)
        return (0, i.jsx)(c.Button, {
            look: c.Button.Looks.FILLED,
            size: c.Button.Sizes.ICON,
            color: c.Button.Colors.BRAND,
            className: l()(N.iconButton, { [N.small]: 'sm' === r }),
            onClick: _,
            submitting: g,
            'aria-label': j.intl.string(j.t.NgXl3N),
            innerClassName: N.innerIconButton,
            disabled: !u,
            children: x
                ? (0, i.jsx)(c.PlayIcon, {
                      size: 'xs',
                      color: 'currentColor'
                  })
                : (0, i.jsx)(c.PlusLargeIcon, {
                      size: 'xs',
                      color: 'currentColor'
                  })
        });
    {
        let e;
        return (
            (e = x ? j.intl.string(j.t.QO7rOz) : 'small' === n ? j.intl.string(j.t.qRZ35u) : j.intl.string(j.t.NgXl3N)),
            (0, i.jsx)(c.Button, {
                size: 'sm' === r ? c.Button.Sizes.SMALL : c.Button.Sizes.MEDIUM,
                color: c.Button.Colors.BRAND,
                onClick: _,
                submitting: g,
                disabled: !x && !u,
                children: e
            })
        );
    }
}
t.Z = function (e) {
    let { application: t, size: n } = e,
        r = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e)),
        { analyticsLocations: o } = (0, u.ZP)(),
        m = a.useCallback(() => {
            (0, b.zZ)(S.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: t.id }), (0, _.JG)(r(t.id)), (0, c.showToast)((0, c.createToast)(j.intl.string(j.t['L/PwZW']), c.ToastType.SUCCESS));
        }, [t.id]),
        p = (0, s.e7)([x.default], () => x.default.locale),
        C = a.useCallback(() => {
            (0, d.Z)(
                (0, h.G)({
                    id: t.id,
                    name: t.name,
                    locale: p
                })
            );
        }, [p, t]),
        v = (0, g.Z)({
            id: t.id,
            label: j.intl.string(j.t['FfCL+/']),
            onSuccess: () => (0, c.showToast)((0, c.createToast)(j.intl.string(j.t.eNjAam), c.ToastType.SUCCESS))
        }),
        f = a.useCallback(
            (e, t) =>
                (0, i.jsxs)(c.Menu, {
                    navId: 'application-directory-profile',
                    'aria-label': j.intl.string(j.t['/7I4/P']),
                    onClose: t,
                    onSelect: void 0,
                    children: [
                        e
                            ? (0, i.jsx)(c.MenuGroup, {
                                  children: (0, i.jsx)(c.MenuItem, {
                                      id: 'copy',
                                      label: j.intl.string(j.t.z4sP5O),
                                      action: m,
                                      icon: c.LinkIcon
                                  })
                              })
                            : null,
                        (0, i.jsx)(c.MenuGroup, {
                            children: (0, i.jsx)(c.MenuItem, {
                                id: 'report',
                                label: j.intl.string(j.t.NgA5vr),
                                color: 'danger',
                                action: C
                            })
                        }),
                        null != v ? (0, i.jsx)(c.MenuGroup, { children: v }) : null
                    ]
                }),
            [v, C, m]
        );
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)('div', {
                className: l()(N.actionContainer, N.wide),
                children: [
                    (0, i.jsx)(P, {
                        application: t,
                        variant: 'normal',
                        size: n,
                        analyticsLocations: o
                    }),
                    _.wS
                        ? (0, i.jsx)(c.Button, {
                              look: c.Button.Looks.FILLED,
                              size: c.Button.Sizes.ICON,
                              color: c.Button.Colors.PRIMARY,
                              className: l()(N.iconButton, { [N.small]: 'sm' === n }),
                              innerClassName: N.innerIconButton,
                              'aria-label': j.intl.string(j.t.z4sP5O),
                              onClick: m,
                              children: (0, i.jsx)(c.LinkIcon, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          })
                        : null,
                    (0, i.jsx)(y, {
                        renderDropdown: (e) => f(!1, e),
                        size: n
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: l()(N.actionContainer, N.small),
                children: [
                    (0, i.jsx)(P, {
                        application: t,
                        variant: 'small',
                        size: n,
                        analyticsLocations: o
                    }),
                    (0, i.jsx)(y, {
                        renderDropdown: (e) => f(_.wS, e),
                        size: n
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: l()(N.actionContainer, N.tiny),
                children: [
                    (0, i.jsx)(P, {
                        application: t,
                        variant: 'icon',
                        size: n,
                        analyticsLocations: o
                    }),
                    (0, i.jsx)(y, {
                        renderDropdown: (e) => f(_.wS, e),
                        size: n
                    })
                ]
            })
        ]
    });
};
