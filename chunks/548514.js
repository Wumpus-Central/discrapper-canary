n.d(t, { Z: () => A }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(873546),
    o = n(442837),
    c = n(481060),
    d = n(782568),
    u = n(906732),
    m = n(783097),
    h = n(606192),
    p = n(326135),
    g = n(299206),
    _ = n(703656),
    x = n(706454),
    C = n(626135),
    v = n(572004),
    f = n(135431),
    I = n(881294),
    b = n(258971),
    j = n(981631),
    S = n(388032),
    N = n(859981);
let E = 'start_application_install';
function y(e) {
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
                className: l()(N.iconButton, { [N.small]: 'sm' === n }),
                innerClassName: N.innerIconButton,
                'aria-label': S.intl.string(S.t.UKOtz8),
                ...e,
                children: (0, i.jsx)(c.xhG, {
                    size: 'xs',
                    color: 'currentColor'
                })
            })
    });
}
function P(e) {
    let { application: t, variant: n, size: r, analyticsLocations: o } = e,
        { onClickInstallApplication: d, canInstall: u } = (function (e) {
            let t = (0, I.nu)(),
                n = a.useCallback(() => {
                    var t;
                    let n = null !== (t = b.z8.getField('guildId')) && void 0 !== t ? t : void 0;
                    (0, f.LO)({
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
                    if (t && 'true' === e.searchParams.get(E)) {
                        e.searchParams.delete(E);
                        let t = e.pathname + e.search;
                        (0, _.dL)(t), n();
                    }
                }, [t, n]),
                {
                    onClickInstallApplication: a.useCallback(() => {
                        if (((0, I.zZ)(j.rMx.APP_DIRECTORY_INSTALL_CLICKED, { application_id: e.id }), (s.tq || s.Em) && null == e.custom_install_url)) {
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
                            let t = b.z8.getField('guildId');
                            C.default.track(j.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                                application_id: e.id,
                                guild_id: t,
                                auth_type: null != e.custom_install_url ? 'custom_url' : 'in_app',
                                source: 'product_page',
                                device_platform: s.tq ? 'mobile_web' : 'desktop_web'
                            }),
                                (0, I.rf)({ [E]: 'true' });
                        }
                    }, [e, n, t]),
                    canInstall: a.useMemo(
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
        })(t),
        { onClickLaunchActivity: p, isSubmitting: g } = (function (e, t) {
            var n;
            let i = e.id,
                r = null == e ? void 0 : null === (n = e.bot) || void 0 === n ? void 0 : n.id,
                l = null != r && (0, m.BQ)(e) && (0, m.ye)(e),
                [s, o] = a.useState(!1),
                c = (0, I.nu)(),
                d = a.useCallback(async () => {
                    if (null != r) {
                        if (((0, I.zZ)(j.rMx.APP_DIRECTORY_LAUNCH_CLICKED, { application_id: i }), o(!0), !c)) {
                            (0, I.rf)();
                            return;
                        }
                        try {
                            await (0, h.W)({
                                appId: i,
                                botId: r,
                                analyticsLocations: t
                            });
                        } catch (e) {}
                        o(!1);
                    }
                }, [r, i, t, c]);
            return {
                onClickLaunchActivity: l ? d : void 0,
                isSubmitting: s
            };
        })(t, o),
        x = null != p,
        v = x ? p : d;
    if ('icon' === n)
        return (0, i.jsx)(c.zxk, {
            look: c.zxk.Looks.FILLED,
            size: c.zxk.Sizes.ICON,
            color: c.zxk.Colors.BRAND,
            className: l()(N.iconButton, { [N.small]: 'sm' === r }),
            onClick: v,
            submitting: g,
            'aria-label': S.intl.string(S.t.NgXl3N),
            innerClassName: N.innerIconButton,
            disabled: !u,
            children: x
                ? (0, i.jsx)(c.o1U, {
                      size: 'xs',
                      color: 'currentColor'
                  })
                : (0, i.jsx)(c.svS, {
                      size: 'xs',
                      color: 'currentColor'
                  })
        });
    {
        let e;
        return (
            (e = x ? S.intl.string(S.t.QO7rOz) : 'small' === n ? S.intl.string(S.t.qRZ35u) : S.intl.string(S.t.NgXl3N)),
            (0, i.jsx)(c.zxk, {
                size: 'sm' === r ? c.zxk.Sizes.SMALL : c.zxk.Sizes.MEDIUM,
                color: c.zxk.Colors.BRAND,
                onClick: v,
                submitting: g,
                disabled: !x && !u,
                children: e
            })
        );
    }
}
let A = function (e) {
    let { application: t, size: n } = e,
        r = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(j.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e)),
        { analyticsLocations: s } = (0, u.ZP)(),
        m = a.useCallback(() => {
            (0, I.zZ)(j.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: t.id }), (0, v.JG)(r(t.id)), (0, c.showToast)((0, c.createToast)(S.intl.string(S.t['L/PwZW']), c.ToastType.SUCCESS));
        }, [t.id]),
        h = (0, o.e7)([x.default], () => x.default.locale),
        _ = a.useCallback(() => {
            (0, d.Z)(
                (0, p.G)({
                    id: t.id,
                    name: t.name,
                    locale: h
                })
            );
        }, [h, t]),
        C = (0, g.Z)({
            id: t.id,
            label: S.intl.string(S.t['FfCL+/']),
            onSuccess: () => (0, c.showToast)((0, c.createToast)(S.intl.string(S.t.eNjAam), c.ToastType.SUCCESS))
        }),
        f = a.useCallback(
            (e, t) =>
                (0, i.jsxs)(c.v2r, {
                    navId: 'application-directory-profile',
                    'aria-label': S.intl.string(S.t['/7I4/P']),
                    onClose: t,
                    onSelect: void 0,
                    children: [
                        e
                            ? (0, i.jsx)(c.kSQ, {
                                  children: (0, i.jsx)(c.sNh, {
                                      id: 'copy',
                                      label: S.intl.string(S.t.z4sP5O),
                                      action: m,
                                      icon: c.xPt
                                  })
                              })
                            : null,
                        (0, i.jsx)(c.kSQ, {
                            children: (0, i.jsx)(c.sNh, {
                                id: 'report',
                                label: S.intl.string(S.t.NgA5vr),
                                color: 'danger',
                                action: _
                            })
                        }),
                        null != C ? (0, i.jsx)(c.kSQ, { children: C }) : null
                    ]
                }),
            [C, _, m]
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
                        analyticsLocations: s
                    }),
                    v.wS
                        ? (0, i.jsx)(c.zxk, {
                              look: c.zxk.Looks.FILLED,
                              size: c.zxk.Sizes.ICON,
                              color: c.zxk.Colors.PRIMARY,
                              className: l()(N.iconButton, { [N.small]: 'sm' === n }),
                              innerClassName: N.innerIconButton,
                              'aria-label': S.intl.string(S.t.z4sP5O),
                              onClick: m,
                              children: (0, i.jsx)(c.xPt, {
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
                        analyticsLocations: s
                    }),
                    (0, i.jsx)(y, {
                        renderDropdown: (e) => f(v.wS, e),
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
                        analyticsLocations: s
                    }),
                    (0, i.jsx)(y, {
                        renderDropdown: (e) => f(v.wS, e),
                        size: n
                    })
                ]
            })
        ]
    });
};
