n(315314), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(873546),
    s = n(442837),
    c = n(481060),
    d = n(782568),
    u = n(326135),
    m = n(299206),
    p = n(703656),
    h = n(706454),
    g = n(626135),
    C = n(572004),
    x = n(135431),
    v = n(881294),
    _ = n(258971),
    f = n(981631),
    b = n(388032),
    I = n(914045);
let S = 'start_application_install';
function j(e) {
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
                className: l()(I.iconButton, { [I.small]: 'sm' === n }),
                innerClassName: I.innerIconButton,
                'aria-label': b.intl.string(b.t.UKOtz8),
                ...e,
                children: (0, i.jsx)(c.MoreHorizontalIcon, {
                    size: 'xs',
                    color: 'currentColor'
                })
            })
    });
}
function N(e) {
    let { application: t, variant: n, size: r } = e,
        { onClickInstallApplication: s, canInstall: d } = (function (e) {
            let t = (0, v.nu)(),
                n = a.useCallback(() => {
                    var t;
                    let n = null !== (t = _.z8.getField('guildId')) && void 0 !== t ? t : void 0;
                    (0, x.LO)({
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
                if (t && 'true' === e.searchParams.get(S)) {
                    e.searchParams.delete(S);
                    let t = e.pathname + e.search;
                    (0, p.dL)(t), n();
                }
            }, [t, n]);
            let i = a.useCallback(() => {
                if (((0, v.zZ)(f.rMx.APP_DIRECTORY_INSTALL_CLICKED, { application_id: e.id }), (o.tq || o.Em) && null == e.custom_install_url)) {
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
                    let t = _.z8.getField('guildId');
                    g.default.track(f.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                        application_id: e.id,
                        guild_id: t,
                        auth_type: null != e.custom_install_url ? 'custom_url' : 'in_app',
                        source: 'product_page',
                        device_platform: o.tq ? 'mobile_web' : 'desktop_web'
                    }),
                        (0, v.rf)({ [S]: 'true' });
                }
            }, [e, n, t]);
            return {
                onClickInstallApplication: i,
                canInstall: a.useMemo(
                    () =>
                        (0, x.Eb)({
                            customInstallUrl: e.custom_install_url,
                            installParams: e.install_params,
                            integrationTypesConfig: e.integration_types_config
                        }),
                    [e]
                )
            };
        })(t);
    return 'icon' === n
        ? (0, i.jsx)(c.Button, {
              look: c.Button.Looks.FILLED,
              size: c.Button.Sizes.ICON,
              color: c.Button.Colors.BRAND,
              className: l()(I.iconButton, { [I.small]: 'sm' === r }),
              onClick: s,
              'aria-label': b.intl.string(b.t.NgXl3N),
              disabled: !d,
              children: (0, i.jsx)(c.PlusLargeIcon, {
                  size: 'xs',
                  color: 'currentColor'
              })
          })
        : (0, i.jsx)(c.Button, {
              size: 'sm' === r ? c.Button.Sizes.SMALL : c.Button.Sizes.MEDIUM,
              color: c.Button.Colors.BRAND,
              onClick: s,
              disabled: !d,
              children: 'normal' === n ? b.intl.string(b.t.NgXl3N) : b.intl.string(b.t.qRZ35u)
          });
}
t.Z = function (e) {
    let { application: t, size: n } = e,
        r = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(f.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e)),
        o = a.useCallback(() => {
            (0, v.zZ)(f.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: t.id }), (0, C.JG)(r(t.id)), (0, c.showToast)((0, c.createToast)(b.intl.string(b.t['L/PwZW']), c.ToastType.SUCCESS));
        }, [t.id]),
        p = (0, s.e7)([h.default], () => h.default.locale),
        g = a.useCallback(() => {
            (0, d.Z)(
                (0, u.G)({
                    id: t.id,
                    name: t.name,
                    locale: p
                })
            );
        }, [p, t]),
        x = (0, m.Z)({
            id: t.id,
            label: b.intl.string(b.t['FfCL+/']),
            onSuccess: () => (0, c.showToast)((0, c.createToast)(b.intl.string(b.t.eNjAam), c.ToastType.SUCCESS))
        }),
        _ = a.useCallback(
            (e, t) =>
                (0, i.jsxs)(c.Menu, {
                    navId: 'application-directory-profile',
                    'aria-label': b.intl.string(b.t['/7I4/P']),
                    onClose: t,
                    onSelect: void 0,
                    children: [
                        e
                            ? (0, i.jsx)(c.MenuGroup, {
                                  children: (0, i.jsx)(c.MenuItem, {
                                      id: 'copy',
                                      label: b.intl.string(b.t.z4sP5O),
                                      action: o,
                                      icon: c.LinkIcon
                                  })
                              })
                            : null,
                        (0, i.jsx)(c.MenuGroup, {
                            children: (0, i.jsx)(c.MenuItem, {
                                id: 'report',
                                label: b.intl.string(b.t.NgA5vr),
                                color: 'danger',
                                action: g
                            })
                        }),
                        null != x ? (0, i.jsx)(c.MenuGroup, { children: x }) : null
                    ]
                }),
            [x, g, o]
        );
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)('div', {
                className: l()(I.actionContainer, I.wide),
                children: [
                    (0, i.jsx)(N, {
                        application: t,
                        variant: 'normal',
                        size: n
                    }),
                    C.wS
                        ? (0, i.jsx)(c.Button, {
                              look: c.Button.Looks.FILLED,
                              size: c.Button.Sizes.ICON,
                              color: c.Button.Colors.PRIMARY,
                              className: l()(I.iconButton, { [I.small]: 'sm' === n }),
                              innerClassName: I.innerIconButton,
                              'aria-label': b.intl.string(b.t.z4sP5O),
                              onClick: o,
                              children: (0, i.jsx)(c.LinkIcon, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          })
                        : null,
                    (0, i.jsx)(j, {
                        renderDropdown: (e) => _(!1, e),
                        size: n
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: l()(I.actionContainer, I.small),
                children: [
                    (0, i.jsx)(N, {
                        application: t,
                        variant: 'small',
                        size: n
                    }),
                    (0, i.jsx)(j, {
                        renderDropdown: (e) => _(C.wS, e),
                        size: n
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: l()(I.actionContainer, I.tiny),
                children: [
                    (0, i.jsx)(N, {
                        application: t,
                        variant: 'icon',
                        size: n
                    }),
                    (0, i.jsx)(j, {
                        renderDropdown: (e) => _(C.wS, e),
                        size: n
                    })
                ]
            })
        ]
    });
};
