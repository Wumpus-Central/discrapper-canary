t(315314), t(610138), t(216116), t(78328), t(815648), t(47120);
var a = t(200651),
    i = t(192379),
    r = t(120356),
    l = t.n(r),
    o = t(873546),
    s = t(442837),
    c = t(481060),
    d = t(782568),
    u = t(326135),
    m = t(299206),
    p = t(703656),
    _ = t(706454),
    g = t(626135),
    f = t(572004),
    v = t(135431),
    C = t(881294),
    x = t(258971),
    h = t(981631),
    b = t(388032),
    I = t(914045);
let j = 'start_application_install';
function S(e) {
    let { renderDropdown: n, size: t } = e;
    return (0, a.jsx)(c.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return n(t);
        },
        position: 'left',
        align: 'top',
        animation: c.Popout.Animation.NONE,
        children: (e) =>
            (0, a.jsx)(c.Button, {
                look: c.Button.Looks.FILLED,
                size: c.Button.Sizes.ICON,
                color: c.Button.Colors.PRIMARY,
                className: l()(I.iconButton, { [I.small]: 'sm' === t }),
                innerClassName: I.innerIconButton,
                'aria-label': b.intl.string(b.t.UKOtz8),
                ...e,
                children: (0, a.jsx)(c.MoreHorizontalIcon, {
                    size: 'xs',
                    color: 'currentColor'
                })
            })
    });
}
function E(e) {
    let { application: n, variant: t, size: r } = e,
        { onClickInstallApplication: s, canInstall: d } = (function (e) {
            let n = (0, C.nu)(),
                t = i.useCallback(() => {
                    var n;
                    let t = null !== (n = x.z8.getField('guildId')) && void 0 !== n ? n : void 0;
                    (0, v.LO)({
                        applicationId: e.id,
                        customInstallUrl: e.custom_install_url,
                        installParams: e.install_params,
                        integrationTypesConfig: e.integration_types_config,
                        guildId: t,
                        source: 'product_page'
                    });
                }, [e]);
            i.useEffect(() => {
                let e = new URL(location.href);
                if (n && 'true' === e.searchParams.get(j)) {
                    e.searchParams.delete(j);
                    let n = e.pathname + e.search;
                    (0, p.dL)(n), t();
                }
            }, [n, t]);
            let a = i.useCallback(() => {
                if (((0, C.zZ)(h.rMx.APP_DIRECTORY_INSTALL_CLICKED, { application_id: e.id }), (o.tq || o.Em) && null == e.custom_install_url)) {
                    let n = (0, v.Er)({
                        applicationId: e.id,
                        customInstallUrl: e.custom_install_url,
                        installParams: e.install_params,
                        integrationTypesConfig: e.integration_types_config
                    });
                    if (null != n) {
                        window.open(n, '_blank');
                        return;
                    }
                }
                if (n) t();
                else {
                    let n = x.z8.getField('guildId');
                    g.default.track(h.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                        application_id: e.id,
                        guild_id: n,
                        auth_type: null != e.custom_install_url ? 'custom_url' : 'in_app',
                        source: 'product_page',
                        device_platform: o.tq ? 'mobile_web' : 'desktop_web'
                    }),
                        (0, C.rf)({ [j]: 'true' });
                }
            }, [e, t, n]);
            return {
                onClickInstallApplication: a,
                canInstall: i.useMemo(
                    () =>
                        (0, v.Eb)({
                            customInstallUrl: e.custom_install_url,
                            installParams: e.install_params,
                            integrationTypesConfig: e.integration_types_config
                        }),
                    [e]
                )
            };
        })(n);
    return 'icon' === t
        ? (0, a.jsx)(c.Button, {
              look: c.Button.Looks.FILLED,
              size: c.Button.Sizes.ICON,
              color: c.Button.Colors.BRAND,
              className: l()(I.iconButton, { [I.small]: 'sm' === r }),
              onClick: s,
              'aria-label': b.intl.string(b.t.NgXl3N),
              disabled: !d,
              children: (0, a.jsx)(c.PlusLargeIcon, {
                  size: 'xs',
                  color: 'currentColor'
              })
          })
        : (0, a.jsx)(c.Button, {
              size: 'sm' === r ? c.Button.Sizes.SMALL : c.Button.Sizes.MEDIUM,
              color: c.Button.Colors.BRAND,
              onClick: s,
              disabled: !d,
              children: 'normal' === t ? b.intl.string(b.t.NgXl3N) : b.intl.string(b.t.qRZ35u)
          });
}
n.Z = function (e) {
    let { application: n, size: t } = e,
        r = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(h.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e)),
        o = i.useCallback(() => {
            (0, C.zZ)(h.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: n.id }), (0, f.JG)(r(n.id)), (0, c.showToast)((0, c.createToast)(b.intl.string(b.t['L/PwZW']), c.ToastType.SUCCESS));
        }, [n.id]),
        p = (0, s.e7)([_.default], () => _.default.locale),
        g = i.useCallback(() => {
            (0, d.Z)(
                (0, u.G)({
                    id: n.id,
                    name: n.name,
                    locale: p
                })
            );
        }, [p, n]),
        v = (0, m.Z)({
            id: n.id,
            label: b.intl.string(b.t['FfCL+/']),
            onSuccess: () => (0, c.showToast)((0, c.createToast)(b.intl.string(b.t.eNjAam), c.ToastType.SUCCESS))
        }),
        x = i.useCallback(
            (e, n) =>
                (0, a.jsxs)(c.Menu, {
                    navId: 'application-directory-profile',
                    'aria-label': b.intl.string(b.t['/7I4/P']),
                    onClose: n,
                    onSelect: void 0,
                    children: [
                        e
                            ? (0, a.jsx)(c.MenuGroup, {
                                  children: (0, a.jsx)(c.MenuItem, {
                                      id: 'copy',
                                      label: b.intl.string(b.t.z4sP5O),
                                      action: o,
                                      icon: c.LinkIcon
                                  })
                              })
                            : null,
                        (0, a.jsx)(c.MenuGroup, {
                            children: (0, a.jsx)(c.MenuItem, {
                                id: 'report',
                                label: b.intl.string(b.t.NgA5vr),
                                color: 'danger',
                                action: g
                            })
                        }),
                        null != v ? (0, a.jsx)(c.MenuGroup, { children: v }) : null
                    ]
                }),
            [v, g, o]
        );
    return (0, a.jsxs)('div', {
        children: [
            (0, a.jsxs)('div', {
                className: l()(I.actionContainer, I.wide),
                children: [
                    (0, a.jsx)(E, {
                        application: n,
                        variant: 'normal',
                        size: t
                    }),
                    f.wS
                        ? (0, a.jsx)(c.Button, {
                              look: c.Button.Looks.FILLED,
                              size: c.Button.Sizes.ICON,
                              color: c.Button.Colors.PRIMARY,
                              className: l()(I.iconButton, { [I.small]: 'sm' === t }),
                              innerClassName: I.innerIconButton,
                              'aria-label': b.intl.string(b.t.z4sP5O),
                              onClick: o,
                              children: (0, a.jsx)(c.LinkIcon, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          })
                        : null,
                    (0, a.jsx)(S, {
                        renderDropdown: (e) => x(!1, e),
                        size: t
                    })
                ]
            }),
            (0, a.jsxs)('div', {
                className: l()(I.actionContainer, I.small),
                children: [
                    (0, a.jsx)(E, {
                        application: n,
                        variant: 'small',
                        size: t
                    }),
                    (0, a.jsx)(S, {
                        renderDropdown: (e) => x(f.wS, e),
                        size: t
                    })
                ]
            }),
            (0, a.jsxs)('div', {
                className: l()(I.actionContainer, I.tiny),
                children: [
                    (0, a.jsx)(E, {
                        application: n,
                        variant: 'icon',
                        size: t
                    }),
                    (0, a.jsx)(S, {
                        renderDropdown: (e) => x(f.wS, e),
                        size: t
                    })
                ]
            })
        ]
    });
};
