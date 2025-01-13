n.d(t, {
    Z: function () {
        return A;
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
    d = n(321231),
    u = n(230171),
    m = n(955415),
    h = n(706454),
    f = n(973616),
    p = n(914010),
    _ = n(594174),
    g = n(626135),
    E = n(135431),
    C = n(674588),
    I = n(264043),
    x = n(132871),
    N = n(147890),
    v = n(981631),
    T = n(388032),
    S = n(367118);
function A(e) {
    var t, n, A;
    let { code: b, message: j, embedUrl: R } = e,
        { enabled: Z } = d.G.useExperiment({ location: 'ApplicationDirectoryProfileEmbed' }),
        [P, L, y] = (0, o.Wu)([I.Z], () => [I.Z.getApplication(b), I.Z.isInvalidApplication(b), I.Z.getApplicationFetchState(b)], [b]),
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
        (0, C.gZ)(b);
    }, [b]),
        r.useEffect(() => {
            D &&
                y === I.M.FETCHED &&
                g.default.track(v.rMx.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                    application_id: b,
                    device_platform: l.tq ? 'mobile_web' : 'desktop_web',
                    sender_user_id: j.author.id,
                    guild_id: M,
                    channel_id: j.channel_id
                });
        }, [D, b, null == k ? void 0 : k.id, j.channel_id, M, j.author.id, y]),
        r.useEffect(() => {
            D &&
                L &&
                g.default.track(v.rMx.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                    device_platform: l.tq ? 'mobile_web' : 'desktop_web',
                    sender_user_id: j.author.id,
                    guild_id: M,
                    channel_id: j.channel_id
                });
        }, [D, M, L, j.author.id, j.channel_id]);
    let F = (e) => {
        g.default.track(v.rMx.APP_DIRECTORY_PROFILE_EMBED_APP_INFO_CLICKED, {
            application_id: b,
            device_platform: l.tq ? 'mobile_web' : 'desktop_web',
            clicked_section: e,
            guild_id: M,
            channel_id: j.channel_id
        }),
            (0, N.goToAppDirectory)({
                view: x.ApplicationDirectoryViews.APPLICATION,
                guildId: M,
                applicationId: b,
                entrypoint: { name: x.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_PROFILE_EMBED }
            });
    };
    if (Z && null != P)
        return (0, i.jsx)(u.O, {
            app: f.ZP.createFromServer(P),
            embedUrl: R
        });
    if (L)
        return (0, i.jsxs)(m.Z, {
            containerRef: w,
            children: [
                (0, i.jsx)(m.Z.Header, { text: T.intl.string(T.t.j4KtLS) }),
                (0, i.jsx)(m.Z.Body, {
                    children: (0, i.jsxs)('div', {
                        className: S.invalidBody,
                        children: [
                            (0, i.jsx)(m.Z.Icon, { expired: !0 }),
                            (0, i.jsx)(m.Z.Info, {
                                expired: !0,
                                title: T.intl.string(T.t.NaQLEx),
                                children: T.intl.string(T.t['0H5OT0'])
                            })
                        ]
                    })
                })
            ]
        });
    if (null == P || y === I.M.FETCHING)
        return (0, i.jsxs)(m.Z, {
            containerRef: w,
            children: [(0, i.jsx)(m.Z.Header, { text: T.intl.string(T.t.m9hXGR) }), (0, i.jsx)(m.Z.Body, { resolving: !0 })]
        });
    let G = new Intl.NumberFormat(O, {
            notation: 'compact',
            compactDisplay: 'short'
        }),
        V = null !== (n = null === (t = P.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0,
        H = (0, E.Eb)({
            customInstallUrl: P.custom_install_url,
            installParams: P.install_params,
            integrationTypesConfig: P.integration_types_config
        }),
        z = a.Y.GUILD_INSTALL in (null !== (A = P.integration_types_config) && void 0 !== A ? A : {}) && H;
    return (0, i.jsxs)(m.Z, {
        containerRef: w,
        children: [
            (0, i.jsx)(m.Z.Header, { text: T.intl.string(T.t.KC1oZ2) }),
            (0, i.jsxs)(m.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: S.applicationInfoContainer,
                        children: [
                            (0, i.jsx)(m.Z.Icon, {
                                application: f.ZP.createFromServer(P),
                                className: S.applicationIcon,
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
                                        className: S.guildCountContainer,
                                        onClick: () => F('application_guild_count'),
                                        children: [
                                            (0, i.jsx)(s.CompassIcon, {
                                                size: 'custom',
                                                color: 'currentColor',
                                                width: 16,
                                                height: 16,
                                                className: S.guildCountIcon
                                            }),
                                            T.intl.format(T.t['6IW6Wl'], { guildCount: G.format(V) })
                                        ]
                                    })
                            })
                        ]
                    }),
                    H &&
                        (0, i.jsx)(m.Z.Button, {
                            onClick: () => {
                                if (null != P)
                                    (0, E.LO)({
                                        applicationId: b,
                                        customInstallUrl: P.custom_install_url,
                                        installParams: P.install_params,
                                        integrationTypesConfig: P.integration_types_config,
                                        guildId: M,
                                        source: 'app_directory_profile_embed'
                                    });
                            },
                            color: m.Z.Button.Colors.GREEN,
                            children: T.intl.string(T.t.NgXl3N)
                        })
                ]
            })
        ]
    });
}
