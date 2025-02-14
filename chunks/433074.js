n.d(t, { Z: () => b }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(873546),
    r = n(373793),
    s = n(399606),
    o = n(481060),
    c = n(434650),
    d = n(321231),
    u = n(230171),
    m = n(955415),
    _ = n(706454),
    h = n(973616),
    p = n(914010),
    g = n(594174),
    f = n(626135),
    x = n(135431),
    C = n(674588),
    E = n(264043),
    v = n(132871),
    I = n(147890),
    N = n(981631),
    S = n(388032),
    T = n(451966);
function b(e) {
    var t, n, b;
    let { code: A, message: j, embedUrl: y } = e,
        { enabled: Z } = d.G.useExperiment({ location: 'ApplicationDirectoryProfileEmbed' }),
        [R, L, P] = (0, s.Wu)([E.Z], () => [E.Z.getApplication(A), E.Z.isInvalidApplication(A), E.Z.getApplicationFetchState(A)], [A]),
        k = (0, s.e7)([_.default], () => _.default.locale),
        M = (0, s.e7)([p.Z], () => {
            var e;
            return null !== (e = p.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        O = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
        [D, w] = l.useState(!1),
        F = l.useCallback((e) => {
            e && w(!0);
        }, []),
        U = (0, c.O)(F);
    l.useEffect(() => {
        (0, C.gZ)(A);
    }, [A]),
        l.useEffect(() => {
            D &&
                P === E.M.FETCHED &&
                f.default.track(N.rMx.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                    application_id: A,
                    device_platform: a.tq ? 'mobile_web' : 'desktop_web',
                    sender_user_id: j.author.id,
                    guild_id: M,
                    channel_id: j.channel_id
                });
        }, [D, A, null == O ? void 0 : O.id, j.channel_id, M, j.author.id, P]),
        l.useEffect(() => {
            D &&
                L &&
                f.default.track(N.rMx.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                    device_platform: a.tq ? 'mobile_web' : 'desktop_web',
                    sender_user_id: j.author.id,
                    guild_id: M,
                    channel_id: j.channel_id
                });
        }, [D, M, L, j.author.id, j.channel_id]);
    let B = (e) => {
        f.default.track(N.rMx.APP_DIRECTORY_PROFILE_EMBED_APP_INFO_CLICKED, {
            application_id: A,
            device_platform: a.tq ? 'mobile_web' : 'desktop_web',
            clicked_section: e,
            guild_id: M,
            channel_id: j.channel_id
        }),
            (0, I.dx)({
                view: v.eN.APPLICATION,
                guildId: M,
                applicationId: A,
                entrypoint: { name: v.n3.APPLICATION_DIRECTORY_PROFILE_EMBED }
            });
    };
    if (Z && null != R)
        return (0, i.jsx)(u.O, {
            app: h.ZP.createFromServer(R),
            embedUrl: y
        });
    if (L)
        return (0, i.jsxs)(m.Z, {
            containerRef: U,
            children: [
                (0, i.jsx)(m.Z.Header, { text: S.intl.string(S.t.j4KtLS) }),
                (0, i.jsx)(m.Z.Body, {
                    children: (0, i.jsxs)('div', {
                        className: T.invalidBody,
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
    if (null == R || P === E.M.FETCHING)
        return (0, i.jsxs)(m.Z, {
            containerRef: U,
            children: [(0, i.jsx)(m.Z.Header, { text: S.intl.string(S.t.m9hXGR) }), (0, i.jsx)(m.Z.Body, { resolving: !0 })]
        });
    let G = new Intl.NumberFormat(k, {
            notation: 'compact',
            compactDisplay: 'short'
        }),
        H = null !== (n = null === (t = R.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0,
        V = (0, x.Eb)({
            customInstallUrl: R.custom_install_url,
            installParams: R.install_params,
            integrationTypesConfig: R.integration_types_config
        }),
        z = r.Y.GUILD_INSTALL in (null !== (b = R.integration_types_config) && void 0 !== b ? b : {}) && V;
    return (0, i.jsxs)(m.Z, {
        containerRef: U,
        children: [
            (0, i.jsx)(m.Z.Header, { text: S.intl.string(S.t.KC1oZ2) }),
            (0, i.jsxs)(m.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: T.applicationInfoContainer,
                        children: [
                            (0, i.jsx)(m.Z.Icon, {
                                application: h.ZP.createFromServer(R),
                                className: T.applicationIcon,
                                onClick: () => B('application_icon')
                            }),
                            (0, i.jsx)(m.Z.Info, {
                                title: (0, i.jsx)(o.P3F, {
                                    onClick: () => B('application_name'),
                                    children: R.name
                                }),
                                children:
                                    H > 0 &&
                                    z &&
                                    (0, i.jsxs)(o.P3F, {
                                        className: T.guildCountContainer,
                                        onClick: () => B('application_guild_count'),
                                        children: [
                                            (0, i.jsx)(o.Jmo, {
                                                size: 'custom',
                                                color: 'currentColor',
                                                width: 16,
                                                height: 16,
                                                className: T.guildCountIcon
                                            }),
                                            S.intl.format(S.t['6IW6Wl'], { guildCount: G.format(H) })
                                        ]
                                    })
                            })
                        ]
                    }),
                    V &&
                        (0, i.jsx)(m.Z.Button, {
                            onClick: () => {
                                null != R &&
                                    (0, x.LO)({
                                        applicationId: A,
                                        customInstallUrl: R.custom_install_url,
                                        installParams: R.install_params,
                                        integrationTypesConfig: R.integration_types_config,
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
