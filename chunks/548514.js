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
    g = t(572004),
    v = t(135431),
    f = t(881294),
    C = t(981631),
    x = t(388032),
    h = t(914045);
let b = 'start_application_install';
function I(e) {
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
                className: l()(h.iconButton, { [h.small]: 'sm' === t }),
                innerClassName: h.innerIconButton,
                'aria-label': x.intl.string(x.t.UKOtz8),
                ...e,
                children: (0, a.jsx)(c.MoreHorizontalIcon, {
                    size: 'xs',
                    color: 'currentColor'
                })
            })
    });
}
function j(e) {
    let { application: n, variant: t, size: r } = e,
        { onClickInstallApplication: s, canInstall: d } = (function (e) {
            let n = (0, f.nu)(),
                t = i.useCallback(() => {
                    (0, v.LO)({
                        applicationId: e.id,
                        customInstallUrl: e.custom_install_url,
                        installParams: e.install_params,
                        integrationTypesConfig: e.integration_types_config,
                        guildId: void 0,
                        source: 'product_page'
                    });
                }, [e]);
            i.useEffect(() => {
                let e = new URL(location.href);
                if (n && 'true' === e.searchParams.get(b)) {
                    e.searchParams.delete(b);
                    let n = e.pathname + e.search;
                    (0, p.dL)(n), t();
                }
            }, [n, t]);
            let a = i.useCallback(() => {
                if (((0, f.zZ)(C.rMx.APP_DIRECTORY_INSTALL_CLICKED, { application_id: e.id }), (o.tq || o.Em) && null == e.custom_install_url)) {
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
                n ? t() : (0, f.rf)({ [b]: 'true' });
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
              className: l()(h.iconButton, { [h.small]: 'sm' === r }),
              onClick: s,
              'aria-label': x.intl.string(x.t.NgXl3N),
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
              children: 'normal' === t ? x.intl.string(x.t.NgXl3N) : x.intl.string(x.t.qRZ35u)
          });
}
n.Z = function (e) {
    let { application: n, size: t } = e,
        r = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(C.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e)),
        o = i.useCallback(() => {
            (0, f.zZ)(C.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: n.id }), (0, g.JG)(r(n.id)), (0, c.showToast)((0, c.createToast)(x.intl.string(x.t['L/PwZW']), c.ToastType.SUCCESS));
        }, [n.id]),
        p = (0, s.e7)([_.default], () => _.default.locale),
        v = i.useCallback(() => {
            (0, d.Z)(
                (0, u.G)({
                    id: n.id,
                    name: n.name,
                    locale: p
                })
            );
        }, [p, n]),
        b = (0, m.Z)({
            id: n.id,
            label: x.intl.string(x.t['FfCL+/']),
            onSuccess: () => (0, c.showToast)((0, c.createToast)(x.intl.string(x.t.eNjAam), c.ToastType.SUCCESS))
        }),
        S = i.useCallback(
            (e, n) =>
                (0, a.jsxs)(c.Menu, {
                    navId: 'application-directory-profile',
                    'aria-label': x.intl.string(x.t['/7I4/P']),
                    onClose: n,
                    onSelect: void 0,
                    children: [
                        e
                            ? (0, a.jsx)(c.MenuGroup, {
                                  children: (0, a.jsx)(c.MenuItem, {
                                      id: 'copy',
                                      label: x.intl.string(x.t.z4sP5O),
                                      action: o,
                                      icon: c.LinkIcon
                                  })
                              })
                            : null,
                        (0, a.jsx)(c.MenuGroup, {
                            children: (0, a.jsx)(c.MenuItem, {
                                id: 'report',
                                label: x.intl.string(x.t.NgA5vr),
                                color: 'danger',
                                action: v
                            })
                        }),
                        null != b ? (0, a.jsx)(c.MenuGroup, { children: b }) : null
                    ]
                }),
            [b, v, o]
        );
    return (0, a.jsxs)('div', {
        children: [
            (0, a.jsxs)('div', {
                className: l()(h.actionContainer, h.wide),
                children: [
                    (0, a.jsx)(j, {
                        application: n,
                        variant: 'normal',
                        size: t
                    }),
                    g.wS
                        ? (0, a.jsx)(c.Button, {
                              look: c.Button.Looks.FILLED,
                              size: c.Button.Sizes.ICON,
                              color: c.Button.Colors.PRIMARY,
                              className: l()(h.iconButton, { [h.small]: 'sm' === t }),
                              innerClassName: h.innerIconButton,
                              'aria-label': x.intl.string(x.t.z4sP5O),
                              onClick: o,
                              children: (0, a.jsx)(c.LinkIcon, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          })
                        : null,
                    (0, a.jsx)(I, {
                        renderDropdown: (e) => S(!1, e),
                        size: t
                    })
                ]
            }),
            (0, a.jsxs)('div', {
                className: l()(h.actionContainer, h.small),
                children: [
                    (0, a.jsx)(j, {
                        application: n,
                        variant: 'small',
                        size: t
                    }),
                    (0, a.jsx)(I, {
                        renderDropdown: (e) => S(g.wS, e),
                        size: t
                    })
                ]
            }),
            (0, a.jsxs)('div', {
                className: l()(h.actionContainer, h.tiny),
                children: [
                    (0, a.jsx)(j, {
                        application: n,
                        variant: 'icon',
                        size: t
                    }),
                    (0, a.jsx)(I, {
                        renderDropdown: (e) => S(g.wS, e),
                        size: t
                    })
                ]
            })
        ]
    });
};
