n.d(t, { Z: () => C }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(873546),
    o = n(373793),
    l = n(399606),
    s = n(481060),
    c = n(434650),
    d = n(321231),
    u = n(230171),
    p = n(955415),
    m = n(706454),
    f = n(973616),
    h = n(914010),
    g = n(594174),
    _ = n(626135),
    b = n(135431),
    v = n(674588),
    y = n(264043),
    x = n(132871),
    O = n(147890),
    E = n(981631),
    j = n(388032),
    N = n(587199);
function C(e) {
    var t, n, C;
    let { code: I, message: S, embedUrl: P } = e,
        { enabled: T } = d.G.useExperiment({ location: 'ApplicationDirectoryProfileEmbed' }),
        [A, w, Z] = (0, l.Wu)([y.Z], () => [y.Z.getApplication(I), y.Z.isInvalidApplication(I), y.Z.getApplicationFetchState(I)], [I]),
        k = (0, l.e7)([m.default], () => m.default.locale),
        R = (0, l.e7)([h.Z], () => {
            var e;
            return null !== (e = h.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        L = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        [D, M] = i.useState(!1),
        W = i.useCallback((e) => {
            e && M(!0);
        }, []),
        F = (0, c.O)(W);
    i.useEffect(() => {
        (0, v.gZ)(I);
    }, [I]),
        i.useEffect(() => {
            D &&
                Z === y.M.FETCHED &&
                _.default.track(E.rMx.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                    application_id: I,
                    device_platform: a.tq ? 'mobile_web' : 'desktop_web',
                    sender_user_id: S.author.id,
                    guild_id: R,
                    channel_id: S.channel_id
                });
        }, [D, I, null == L ? void 0 : L.id, S.channel_id, R, S.author.id, Z]),
        i.useEffect(() => {
            D &&
                w &&
                _.default.track(E.rMx.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                    device_platform: a.tq ? 'mobile_web' : 'desktop_web',
                    sender_user_id: S.author.id,
                    guild_id: R,
                    channel_id: S.channel_id
                });
        }, [D, R, w, S.author.id, S.channel_id]);
    let U = (e) => {
        _.default.track(E.rMx.APP_DIRECTORY_PROFILE_EMBED_APP_INFO_CLICKED, {
            application_id: I,
            device_platform: a.tq ? 'mobile_web' : 'desktop_web',
            clicked_section: e,
            guild_id: R,
            channel_id: S.channel_id
        }),
            (0, O.dx)({
                view: x.eN.APPLICATION,
                guildId: R,
                applicationId: I,
                entrypoint: { name: x.n3.APPLICATION_DIRECTORY_PROFILE_EMBED }
            });
    };
    if (T && null != A)
        return (0, r.jsx)(u.O, {
            app: f.ZP.createFromServer(A),
            embedUrl: P,
            linkType: u.U.APP_DISCOVERY
        });
    if (w)
        return (0, r.jsxs)(p.Z, {
            containerRef: F,
            children: [
                (0, r.jsx)(p.Z.Header, { text: j.NW.string(j.t.j4KtLS) }),
                (0, r.jsx)(p.Z.Body, {
                    children: (0, r.jsxs)('div', {
                        className: N.invalidBody,
                        children: [
                            (0, r.jsx)(p.Z.Icon, { expired: !0 }),
                            (0, r.jsx)(p.Z.Info, {
                                expired: !0,
                                title: j.NW.string(j.t.NaQLEx),
                                children: j.NW.string(j.t['0H5OT0'])
                            })
                        ]
                    })
                })
            ]
        });
    if (null == A || Z === y.M.FETCHING)
        return (0, r.jsxs)(p.Z, {
            containerRef: F,
            children: [(0, r.jsx)(p.Z.Header, { text: j.NW.string(j.t.m9hXGR) }), (0, r.jsx)(p.Z.Body, { resolving: !0 })]
        });
    let B = new Intl.NumberFormat(k, {
            notation: 'compact',
            compactDisplay: 'short'
        }),
        G = null !== (n = null === (t = A.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0,
        H = (0, b.Eb)({
            customInstallUrl: A.custom_install_url,
            installParams: A.install_params,
            integrationTypesConfig: A.integration_types_config
        }),
        V = o.Y.GUILD_INSTALL in (null !== (C = A.integration_types_config) && void 0 !== C ? C : {}) && H;
    return (0, r.jsxs)(p.Z, {
        containerRef: F,
        children: [
            (0, r.jsx)(p.Z.Header, { text: j.NW.string(j.t.KC1oZ2) }),
            (0, r.jsxs)(p.Z.Body, {
                children: [
                    (0, r.jsxs)('div', {
                        className: N.applicationInfoContainer,
                        children: [
                            (0, r.jsx)(p.Z.Icon, {
                                application: f.ZP.createFromServer(A),
                                className: N.applicationIcon,
                                onClick: () => U('application_icon')
                            }),
                            (0, r.jsx)(p.Z.Info, {
                                title: (0, r.jsx)(s.P3F, {
                                    onClick: () => U('application_name'),
                                    children: A.name
                                }),
                                children:
                                    G > 0 &&
                                    V &&
                                    (0, r.jsxs)(s.P3F, {
                                        className: N.guildCountContainer,
                                        onClick: () => U('application_guild_count'),
                                        children: [
                                            (0, r.jsx)(s.Jmo, {
                                                size: 'custom',
                                                color: 'currentColor',
                                                width: 16,
                                                height: 16,
                                                className: N.guildCountIcon
                                            }),
                                            j.NW.format(j.t['6IW6Wl'], { guildCount: B.format(G) })
                                        ]
                                    })
                            })
                        ]
                    }),
                    H &&
                        (0, r.jsx)(p.Z.Button, {
                            onClick: () => {
                                null != A &&
                                    (0, b.LO)({
                                        applicationId: I,
                                        customInstallUrl: A.custom_install_url,
                                        installParams: A.install_params,
                                        integrationTypesConfig: A.integration_types_config,
                                        guildId: R,
                                        source: 'app_directory_profile_embed'
                                    });
                            },
                            color: p.Z.Button.Colors.GREEN,
                            children: j.NW.string(j.t.NgXl3N)
                        })
                ]
            })
        ]
    });
}
