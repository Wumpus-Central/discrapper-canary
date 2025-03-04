n.d(t, { Z: () => I }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(873546),
    o = n(373793),
    l = n(399606),
    s = n(481060),
    c = n(434650),
    d = n(321231),
    u = n(230171),
    p = n(749681),
    m = n(955415),
    f = n(706454),
    h = n(973616),
    g = n(914010),
    _ = n(594174),
    b = n(626135),
    v = n(135431),
    y = n(471518),
    x = n(370210),
    E = n(258971),
    O = n(981631),
    j = n(49898),
    N = n(388032),
    C = n(997408);
function I(e) {
    var t, n, I;
    let { code: S, message: T, embedUrl: P } = e,
        { enabled: A } = d.G.useExperiment({ location: 'ApplicationDirectoryProfileEmbed' }),
        [w, Z, k] = (0, l.Wu)([x.Z], () => [x.Z.getApplication(S), x.Z.isInvalidApplication(S), x.Z.getApplicationFetchState(S)], [S]),
        R = (0, l.e7)([f.default], () => f.default.locale),
        D = (0, l.e7)([g.Z], () => {
            var e;
            return null !== (e = g.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        L = (0, l.e7)([_.default], () => _.default.getCurrentUser()),
        [M, W] = i.useState(!1),
        F = i.useCallback((e) => {
            e && W(!0);
        }, []),
        U = (0, c.O)(F);
    i.useEffect(() => {
        (0, y.gZ)(S);
    }, [S]),
        i.useEffect(() => {
            M &&
                k === x.M.FETCHED &&
                b.default.track(O.rMx.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                    application_id: S,
                    device_platform: a.tq ? 'mobile_web' : 'desktop_web',
                    sender_user_id: T.author.id,
                    guild_id: D,
                    channel_id: T.channel_id
                });
        }, [M, S, null == L ? void 0 : L.id, T.channel_id, D, T.author.id, k]),
        i.useEffect(() => {
            M &&
                Z &&
                b.default.track(O.rMx.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                    device_platform: a.tq ? 'mobile_web' : 'desktop_web',
                    sender_user_id: T.author.id,
                    guild_id: D,
                    channel_id: T.channel_id
                });
        }, [M, D, Z, T.author.id, T.channel_id]);
    let B = (e) => {
        b.default.track(O.rMx.APP_DIRECTORY_PROFILE_EMBED_APP_INFO_CLICKED, {
            application_id: S,
            device_platform: a.tq ? 'mobile_web' : 'desktop_web',
            clicked_section: e,
            guild_id: D,
            channel_id: T.channel_id
        }),
            (0, p.transitionToGlobalDiscovery)({
                tab: j.GlobalDiscoveryTab.APPS,
                applicationId: S,
                newSessionState: {
                    guildId: D,
                    entrypoint: { name: E.xF.APPLICATION_DIRECTORY_PROFILE_EMBED }
                }
            });
    };
    if (A && null != w)
        return (0, r.jsx)(u.O, {
            app: h.ZP.createFromServer(w),
            embedUrl: P,
            linkType: u.U.APP_DISCOVERY
        });
    if (Z)
        return (0, r.jsxs)(m.Z, {
            containerRef: U,
            children: [
                (0, r.jsx)(m.Z.Header, { text: N.NW.string(N.t.j4KtLS) }),
                (0, r.jsx)(m.Z.Body, {
                    children: (0, r.jsxs)('div', {
                        className: C.invalidBody,
                        children: [
                            (0, r.jsx)(m.Z.Icon, { expired: !0 }),
                            (0, r.jsx)(m.Z.Info, {
                                expired: !0,
                                title: N.NW.string(N.t.NaQLEx),
                                children: N.NW.string(N.t['0H5OT0'])
                            })
                        ]
                    })
                })
            ]
        });
    if (null == w || k === x.M.FETCHING)
        return (0, r.jsxs)(m.Z, {
            containerRef: U,
            children: [(0, r.jsx)(m.Z.Header, { text: N.NW.string(N.t.m9hXGR) }), (0, r.jsx)(m.Z.Body, { resolving: !0 })]
        });
    let G = new Intl.NumberFormat(R, {
            notation: 'compact',
            compactDisplay: 'short'
        }),
        H = null !== (n = null === (t = w.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0,
        V = (0, v.Eb)({
            customInstallUrl: w.custom_install_url,
            installParams: w.install_params,
            integrationTypesConfig: w.integration_types_config
        }),
        z = o.Y.GUILD_INSTALL in (null !== (I = w.integration_types_config) && void 0 !== I ? I : {}) && V;
    return (0, r.jsxs)(m.Z, {
        containerRef: U,
        children: [
            (0, r.jsx)(m.Z.Header, { text: N.NW.string(N.t.KC1oZ2) }),
            (0, r.jsxs)(m.Z.Body, {
                children: [
                    (0, r.jsxs)('div', {
                        className: C.applicationInfoContainer,
                        children: [
                            (0, r.jsx)(m.Z.Icon, {
                                application: h.ZP.createFromServer(w),
                                className: C.applicationIcon,
                                onClick: () => B('application_icon')
                            }),
                            (0, r.jsx)(m.Z.Info, {
                                title: (0, r.jsx)(s.P3F, {
                                    onClick: () => B('application_name'),
                                    children: w.name
                                }),
                                children:
                                    H > 0 &&
                                    z &&
                                    (0, r.jsxs)(s.P3F, {
                                        className: C.guildCountContainer,
                                        onClick: () => B('application_guild_count'),
                                        children: [
                                            (0, r.jsx)(s.Jmo, {
                                                size: 'custom',
                                                color: 'currentColor',
                                                width: 16,
                                                height: 16,
                                                className: C.guildCountIcon
                                            }),
                                            N.NW.format(N.t['6IW6Wl'], { guildCount: G.format(H) })
                                        ]
                                    })
                            })
                        ]
                    }),
                    V &&
                        (0, r.jsx)(m.Z.Button, {
                            onClick: () => {
                                null != w &&
                                    (0, v.LO)({
                                        applicationId: S,
                                        customInstallUrl: w.custom_install_url,
                                        installParams: w.install_params,
                                        integrationTypesConfig: w.integration_types_config,
                                        guildId: D,
                                        source: 'app_directory_profile_embed'
                                    });
                            },
                            color: m.Z.Button.Colors.GREEN,
                            children: N.NW.string(N.t.NgXl3N)
                        })
                ]
            })
        ]
    });
}
