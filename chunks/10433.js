n.d(t, { Z: () => I }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(873546),
    o = n(373793),
    l = n(399606),
    s = n(481060),
    c = n(434650),
    u = n(321231),
    d = n(230171),
    p = n(433534),
    m = n(749681),
    f = n(955415),
    h = n(706454),
    g = n(973616),
    _ = n(914010),
    b = n(626135),
    v = n(135431),
    x = n(471518),
    y = n(370210),
    E = n(258971),
    O = n(981631),
    N = n(49898),
    j = n(388032),
    C = n(997408);
function I(e) {
    var t, n, I;
    let { code: S, message: T, embedUrl: P } = e,
        { enabled: A } = u.G.useExperiment({ location: 'ApplicationDirectoryProfileEmbed' }),
        [w, Z, k] = (0, l.Wu)([y.Z], () => [y.Z.getApplication(S), y.Z.isInvalidApplication(S), y.Z.getApplicationFetchState(S)], [S]),
        R = (0, l.e7)([h.default], () => h.default.locale),
        D = (0, l.e7)([_.Z], () => {
            var e;
            return null !== (e = _.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        [L, M] = i.useState(!1),
        W = i.useCallback((e) => {
            e && M(!0);
        }, []),
        U = (0, c.O)(W),
        F = i.useCallback(() => {
            b.default.track(O.rMx.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                application_id: S,
                device_platform: a.tq ? 'mobile_web' : 'desktop_web',
                sender_user_id: T.author.id,
                guild_id: D,
                channel_id: T.channel_id
            });
        }, [S, D, T.author.id, T.channel_id]);
    i.useEffect(() => {
        (0, x.gZ)(S);
    }, [S]),
        i.useEffect(() => {
            L && k === y.M.FETCHED && F();
        }, [L, k, F]),
        i.useEffect(() => {
            L &&
                Z &&
                b.default.track(O.rMx.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                    device_platform: a.tq ? 'mobile_web' : 'desktop_web',
                    sender_user_id: T.author.id,
                    guild_id: D,
                    channel_id: T.channel_id
                });
        }, [L, D, Z, T.author.id, T.channel_id]);
    let B = (e) => {
        b.default.track(O.rMx.APP_DIRECTORY_PROFILE_EMBED_APP_INFO_CLICKED, {
            application_id: S,
            device_platform: a.tq ? 'mobile_web' : 'desktop_web',
            clicked_section: e,
            guild_id: D,
            channel_id: T.channel_id
        }),
            (0, m.transitionToGlobalDiscovery)({
                tab: N.GlobalDiscoveryTab.APPS,
                applicationId: S,
                newSessionState: {
                    guildId: D,
                    entrypoint: { name: E.xF.APPLICATION_DIRECTORY_PROFILE_EMBED }
                }
            });
    };
    if (A && null != w)
        return (0, r.jsx)(d.O, {
            app: g.ZP.createFromServer(w),
            embedUrl: P,
            linkType: d.U.APP_DISCOVERY,
            onView: F
        });
    if (Z)
        return (0, r.jsxs)(f.Z, {
            containerRef: U,
            children: [
                (0, r.jsx)(f.Z.Header, { text: j.NW.string(j.t.j4KtLS) }),
                (0, r.jsx)(f.Z.Body, {
                    children: (0, r.jsxs)('div', {
                        className: C.invalidBody,
                        children: [
                            (0, r.jsx)(f.Z.Icon, { expired: !0 }),
                            (0, r.jsx)(f.Z.Info, {
                                expired: !0,
                                title: j.NW.string(j.t.NaQLEx),
                                children: j.NW.string(j.t['0H5OT0'])
                            })
                        ]
                    })
                })
            ]
        });
    if (null == w || k === y.M.FETCHING)
        return (0, r.jsxs)(f.Z, {
            containerRef: U,
            children: [(0, r.jsx)(f.Z.Header, { text: j.NW.string(j.t.m9hXGR) }), (0, r.jsx)(f.Z.Body, { resolving: !0 })]
        });
    let G = new Intl.NumberFormat(R, {
            notation: 'compact',
            compactDisplay: 'short'
        }),
        H = null !== (n = null === (t = w.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0,
        V = (0, p.E)({
            customInstallUrl: w.custom_install_url,
            installParams: w.install_params,
            integrationTypesConfig: w.integration_types_config
        }),
        z = o.Y.GUILD_INSTALL in (null !== (I = w.integration_types_config) && void 0 !== I ? I : {}) && V;
    return (0, r.jsxs)(f.Z, {
        containerRef: U,
        children: [
            (0, r.jsx)(f.Z.Header, { text: j.NW.string(j.t.KC1oZ2) }),
            (0, r.jsxs)(f.Z.Body, {
                children: [
                    (0, r.jsxs)('div', {
                        className: C.applicationInfoContainer,
                        children: [
                            (0, r.jsx)(f.Z.Icon, {
                                application: g.ZP.createFromServer(w),
                                className: C.applicationIcon,
                                onClick: () => B('application_icon')
                            }),
                            (0, r.jsx)(f.Z.Info, {
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
                                            j.NW.format(j.t['6IW6Wl'], { guildCount: G.format(H) })
                                        ]
                                    })
                            })
                        ]
                    }),
                    V &&
                        (0, r.jsx)(f.Z.Button, {
                            onClick: () => {
                                null != w &&
                                    (0, v.L)({
                                        applicationId: S,
                                        customInstallUrl: w.custom_install_url,
                                        installParams: w.install_params,
                                        integrationTypesConfig: w.integration_types_config,
                                        guildId: D,
                                        source: 'app_directory_profile_embed'
                                    });
                            },
                            color: f.Z.Button.Colors.GREEN,
                            children: j.NW.string(j.t.NgXl3N)
                        })
                ]
            })
        ]
    });
}
