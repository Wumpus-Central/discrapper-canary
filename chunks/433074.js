n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(873546),
    a = n(373793),
    o = n(399606),
    s = n(481060),
    c = n(434650),
    u = n(321231),
    d = n(230171),
    m = n(955415),
    h = n(706454),
    f = n(973616),
    p = n(914010),
    _ = n(594174),
    g = n(626135),
    E = n(591759),
    C = n(135431),
    I = n(674588),
    x = n(264043),
    N = n(132871),
    v = n(147890),
    T = n(981631),
    S = n(388032),
    A = n(367118);
function b(e) {
    var t, n, b;
    let { code: j, message: R } = e,
        { enabled: Z } = u.G.useExperiment({ location: 'ApplicationDirectoryProfileEmbed' }),
        [P, L, y] = (0, o.Wu)([x.Z], () => [x.Z.getApplication(j), x.Z.isInvalidApplication(j), x.Z.getApplicationFetchState(j)], [j]),
        O = (0, o.e7)([h.default], () => h.default.locale),
        M = (0, o.e7)([p.Z], () => {
            var e;
            return null !== (e = p.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        k = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
        [D, B] = r.useState(!1),
        U = r.useCallback((e) => {
            e && B(!0);
        }, []),
        w = (0, c.O)(U);
    r.useEffect(() => {
        (0, I.gZ)(j);
    }, [j]),
        r.useEffect(() => {
            D &&
                y === x.M.FETCHED &&
                g.default.track(T.rMx.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                    application_id: j,
                    device_platform: l.tq ? 'mobile_web' : 'desktop_web',
                    sender_user_id: R.author.id,
                    guild_id: M,
                    channel_id: R.channel_id
                });
        }, [D, j, null == k ? void 0 : k.id, R.channel_id, M, R.author.id, y]),
        r.useEffect(() => {
            D &&
                L &&
                g.default.track(T.rMx.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                    device_platform: l.tq ? 'mobile_web' : 'desktop_web',
                    sender_user_id: R.author.id,
                    guild_id: M,
                    channel_id: R.channel_id
                });
        }, [D, M, L, R.author.id, R.channel_id]);
    let F = (e) => {
        g.default.track(T.rMx.APP_DIRECTORY_PROFILE_EMBED_APP_INFO_CLICKED, {
            application_id: j,
            device_platform: l.tq ? 'mobile_web' : 'desktop_web',
            clicked_section: e,
            guild_id: M,
            channel_id: R.channel_id
        }),
            (0, v.goToAppDirectory)({
                view: N.ApplicationDirectoryViews.APPLICATION,
                guildId: M,
                applicationId: j,
                entrypoint: { name: N.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_PROFILE_EMBED }
            });
    };
    if (Z && null != P) {
        let e = E.Z.makeUrl(T.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(P.id));
        return (0, i.jsx)(d.O, {
            app: P,
            embedUrl: e
        });
    }
    if (L)
        return (0, i.jsxs)(m.Z, {
            containerRef: w,
            children: [
                (0, i.jsx)(m.Z.Header, { text: S.intl.string(S.t.j4KtLS) }),
                (0, i.jsx)(m.Z.Body, {
                    children: (0, i.jsxs)('div', {
                        className: A.invalidBody,
                        children: [
                            (0, i.jsx)(m.Z.Icon, { expired: !0 }),
                            (0, i.jsx)(m.Z.Info, {
                                expired: !0,
                                title: S.intl.string(S.t.NaQLEx),
                                children: S.intl.string(S.t['0H5OT0'])
                            })
                        ]
                    })
                })
            ]
        });
    if (null == P || y === x.M.FETCHING)
        return (0, i.jsxs)(m.Z, {
            containerRef: w,
            children: [(0, i.jsx)(m.Z.Header, { text: S.intl.string(S.t.m9hXGR) }), (0, i.jsx)(m.Z.Body, { resolving: !0 })]
        });
    let G = new Intl.NumberFormat(O, {
            notation: 'compact',
            compactDisplay: 'short'
        }),
        V = null !== (n = null === (t = P.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0,
        H = (0, C.Eb)({
            customInstallUrl: P.custom_install_url,
            installParams: P.install_params,
            integrationTypesConfig: P.integration_types_config
        }),
        z = a.Y.GUILD_INSTALL in (null !== (b = P.integration_types_config) && void 0 !== b ? b : {}) && H;
    return (0, i.jsxs)(m.Z, {
        containerRef: w,
        children: [
            (0, i.jsx)(m.Z.Header, { text: S.intl.string(S.t.KC1oZ2) }),
            (0, i.jsxs)(m.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: A.applicationInfoContainer,
                        children: [
                            (0, i.jsx)(m.Z.Icon, {
                                application: f.ZP.createFromServer(P),
                                className: A.applicationIcon,
                                onClick: () => F('application_icon')
                            }),
                            (0, i.jsx)(m.Z.Info, {
                                title: (0, i.jsx)(s.Clickable, {
                                    onClick: () => F('application_name'),
                                    children: P.name
                                }),
                                children:
                                    V > 0 &&
                                    z &&
                                    (0, i.jsxs)(s.Clickable, {
                                        className: A.guildCountContainer,
                                        onClick: () => F('application_guild_count'),
                                        children: [
                                            (0, i.jsx)(s.CompassIcon, {
                                                size: 'custom',
                                                color: 'currentColor',
                                                width: 16,
                                                height: 16,
                                                className: A.guildCountIcon
                                            }),
                                            S.intl.format(S.t['6IW6Wl'], { guildCount: G.format(V) })
                                        ]
                                    })
                            })
                        ]
                    }),
                    H &&
                        (0, i.jsx)(m.Z.Button, {
                            onClick: () => {
                                if (null != P)
                                    (0, C.LO)({
                                        applicationId: j,
                                        customInstallUrl: P.custom_install_url,
                                        installParams: P.install_params,
                                        integrationTypesConfig: P.integration_types_config,
                                        guildId: M,
                                        source: 'app_directory_profile_embed'
                                    });
                            },
                            color: m.Z.Button.Colors.GREEN,
                            children: S.intl.string(S.t.NgXl3N)
                        })
                ]
            })
        ]
    });
}
