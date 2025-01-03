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
    h = t(388032),
    x = t(914045);
let b = 'start_application_install';
n.Z = function (e) {
    let { application: n, size: t } = e,
        { onClickInstallApplication: r, canInstall: I } = (function (e) {
            let n = (0, f.nu)(),
                t = i.useMemo(
                    () =>
                        (0, v.Eb)({
                            customInstallUrl: e.custom_install_url,
                            installParams: e.install_params,
                            integrationTypesConfig: e.integration_types_config
                        }),
                    [e]
                ),
                a = i.useCallback(() => {
                    (0, v.LO)({
                        applicationId: e.id,
                        customInstallUrl: e.custom_install_url,
                        installParams: e.install_params,
                        integrationTypesConfig: e.integration_types_config,
                        guildId: void 0,
                        source: 'product_page'
                    });
                }, [e]);
            return (
                i.useEffect(() => {
                    let e = new URL(location.href);
                    if (n && 'true' === e.searchParams.get(b)) {
                        e.searchParams.delete(b);
                        let n = e.pathname + e.search;
                        (0, p.dL)(n), a();
                    }
                }, [n, a]),
                {
                    onClickInstallApplication: i.useCallback(() => {
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
                        n ? a() : (0, f.rf)({ [b]: 'true' });
                    }, [e, a, n]),
                    canInstall: t
                }
            );
        })(n),
        S = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(C.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e)),
        j = i.useCallback(() => {
            (0, f.zZ)(C.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: n.id }), (0, g.JG)(S(n.id)), (0, c.showToast)((0, c.createToast)(h.intl.string(h.t['L/PwZW']), c.ToastType.SUCCESS));
        }, [n.id]),
        E = (0, s.e7)([_.default], () => _.default.locale),
        y = i.useCallback(() => {
            (0, d.Z)(
                (0, u.G)({
                    id: n.id,
                    name: n.name,
                    locale: E
                })
            );
        }, [E, n]),
        N = (0, m.Z)({
            id: n.id,
            label: h.intl.string(h.t['FfCL+/']),
            onSuccess: () => (0, c.showToast)((0, c.createToast)(h.intl.string(h.t.eNjAam), c.ToastType.SUCCESS))
        }),
        A = i.useCallback(
            (e) =>
                (0, a.jsxs)(c.Menu, {
                    navId: 'application-directory-profile',
                    'aria-label': h.intl.string(h.t['/7I4/P']),
                    onClose: e,
                    onSelect: void 0,
                    children: [
                        (0, a.jsx)(c.MenuGroup, {
                            children: (0, a.jsx)(c.MenuItem, {
                                id: 'report',
                                label: h.intl.string(h.t.NgA5vr),
                                color: 'danger',
                                action: y
                            })
                        }),
                        null != N ? (0, a.jsx)(c.MenuGroup, { children: N }) : null
                    ]
                }),
            [N, y]
        );
    return (0, a.jsxs)('div', {
        className: x.actionContainer,
        children: [
            (0, a.jsx)(c.Button, {
                size: 'sm' === t ? c.Button.Sizes.SMALL : c.Button.Sizes.MEDIUM,
                color: c.Button.Colors.BRAND,
                onClick: r,
                disabled: !I,
                children: h.intl.string(h.t.NgXl3N)
            }),
            g.wS
                ? (0, a.jsx)(c.Button, {
                      look: c.Button.Looks.FILLED,
                      size: c.Button.Sizes.ICON,
                      color: c.Button.Colors.PRIMARY,
                      className: l()(x.iconButton, { [x.small]: 'sm' === t }),
                      innerClassName: x.innerIconButton,
                      'aria-label': h.intl.string(h.t.z4sP5O),
                      onClick: j,
                      children: (0, a.jsx)(c.LinkIcon, {
                          size: 'xs',
                          color: 'currentColor'
                      })
                  })
                : null,
            (0, a.jsx)(c.Popout, {
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return A(n);
                },
                position: 'left',
                align: 'top',
                animation: c.Popout.Animation.NONE,
                children: (e) =>
                    (0, a.jsx)(c.Button, {
                        look: c.Button.Looks.FILLED,
                        size: c.Button.Sizes.ICON,
                        color: c.Button.Colors.PRIMARY,
                        className: l()(x.iconButton, { [x.small]: 'sm' === t }),
                        innerClassName: x.innerIconButton,
                        'aria-label': h.intl.string(h.t.UKOtz8),
                        ...e,
                        children: (0, a.jsx)(c.MoreHorizontalIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    })
            })
        ]
    });
};
