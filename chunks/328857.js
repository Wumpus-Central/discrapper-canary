n.d(t, { E: () => J, A: () => Z }), n(321073);
var l = n(477900),
    i = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(615300),
    o = n(819169),
    c = n(17928),
    d = n(554146),
    u = n(939249),
    h = n(834730),
    m = n(933832),
    g = n(192308),
    p = n(383669),
    A = n(297264),
    f = n(444927),
    C = n(793574),
    x = n(95561),
    E = n(435558),
    S = n.n(E),
    _ = n(855687),
    I = n(143413),
    j = n(280450),
    y = n(734057),
    b = n(808728),
    N = n(498642),
    v = n(71393),
    T = n(186111),
    M = n(232835),
    R = n(576705),
    D = n(935208),
    L = n(652215),
    k = n(468689),
    P = n(794967),
    O = n(595818);
let G = (0, n(945810).mj)({
    name: "2026-06-server-setup-boost-cta",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var U = n(363487),
    w = n(828162),
    F = n(287809),
    H = n(147925),
    B = n(625494),
    V = n(975571),
    K = n(723702),
    z = n(314307),
    W = n(936649),
    $ = n(375708),
    q = n(613431);
function J(e) {
    let { className: t, iconUrl: n, icon: s, header: r, completed: c, onClick: d } = e,
        [g, p] = i.useState(!1),
        A = (0, o.A)(c);
    return (
        i.useEffect(() => {
            null != A && c !== A && (p(!0), setTimeout(() => p(!1), 1e3));
        }, [c, A]),
        (0, l.jsxs)(u.D, {
            className: a()(t, q.Nr, { [q.so]: c }),
            onClick: d,
            children: [
                s ?? (0, l.jsx)("img", { className: q.Kk, src: n, alt: "" }),
                (0, l.jsx)(h.E, {
                    color: "text-strong",
                    className: a()(q.t$, q.MY),
                    variant: "text-sm/normal",
                    children: r,
                }),
                c
                    ? (0, l.jsx)(m.A, { size: "md", color: "currentColor", className: a()(q.AI, { [q.i0]: g }) })
                    : (0, l.jsx)(H.A, { className: q.UE, direction: H.A.Directions.RIGHT }),
            ],
        })
    );
}
function Z(e) {
    var t;
    let s,
        o,
        u,
        m,
        E,
        H,
        Z,
        Y,
        X,
        Q,
        ee,
        et,
        en,
        { channel: el } = e,
        ei = (0, c.bG)([v.A], () => (null != el ? v.A.getGuild(el.getGuildId()) : null), [el]),
        es = null != ei && D.default.extractTimestamp(ei.id) < Date.now() - L.NOr,
        ea = (0, c.bG)([j.default], () => ei?.ownerId === j.default.getId(), [ei]),
        {
            canInvite: er,
            canManageGuild: eo,
            canMessage: ec,
        } = (0, c.cf)(
            [R.A],
            () => ({
                canInvite: (0, _.K)(R.A, ei, el),
                canManageGuild: null != ei && R.A.can(L.xBc.MANAGE_GUILD, ei),
                canMessage: null != el && R.A.can(L.xBc.SEND_MESSAGES, el),
                canCreateChannel: null != ei && R.A.can(L.xBc.MANAGE_CHANNELS, ei),
            }),
            [ei, el],
        ),
        ed = (0, c.bG)(
            [F.default],
            () => F.default.getCurrentUser()?.desktop === !0 || F.default.getCurrentUser()?.mobile === !0,
        ),
        {
            guildPopulated: eu,
            guildMessaged: eh,
            guildPersonalized: em,
        } = {
            guildPopulated:
                ((s = (0, c.bG)([y.A], () => y.A.getChannel(ei?.systemChannelId))),
                (o = (0, c.yK)([M.A], () => (null != s ? M.A.getMessages(s.id).toArray() : []))),
                (0, c.bG)([N.A], () => {
                    let e = N.A.getMemberCount(ei?.id) ?? 0,
                        t = o.some((e) => e.type === L.lAJ.USER_JOIN);
                    return e > 1 || t;
                }, [ei, o])),
            guildMessaged:
                ((u = (0, c.bG)([y.A], () => (null != ei ? y.A.getMutableBasicGuildChannelsForGuild(ei.id) : null))),
                (t = i.useMemo(() => (null == u ? [] : S().values(u)), [u])),
                (m = (0, c.bG)([j.default], () => j.default.getId())),
                (0, c.bG)([M.A], () =>
                    S().some(t, (e) => {
                        let t = M.A.getMessages(e.id).toArray();
                        return S().some(t, (e) => e.author.id === m && !(0, I.A)(e));
                    }),
                )),
            guildPersonalized:
                ((E = (0, c.bG)([T.A], () => T.A.hasLayers())),
                (H = (0, c.bG)([v.A], () => v.A.getGuild(ei?.id))),
                H?.icon != null && !E),
            guildChannelCreated: (0, c.bG)([b.Ay], () => {
                let e = b.Ay.getChannels(ei?.id),
                    t = e[b.vM];
                function n(e) {
                    return (
                        null != ei && D.default.extractTimestamp(e.channel.id) - D.default.extractTimestamp(ei.id) > 500
                    );
                }
                return e[b.I6].some(n) || t.some(n);
            }, [ei]),
        },
        eg = (ei?.premiumSubscriberCount ?? 0) > 0,
        ep = !0 === (0, U.A)(ei?.id),
        {
            handleInvite: eA,
            handleMessage: ef,
            handlePersonalize: eC,
            handleDownload: ex,
            handleAddApplication: eE,
            handleBoost: eS,
        } = ((Z = i.useCallback(() => {
            x.Ay.trackWithMetadata(L.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: W.XT.CHANNEL_WELCOME,
                action: W.AG.INVITE,
            }),
                null != ei &&
                    (0, g.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("827574"),
                            n.e("121149"),
                            n.e("159957"),
                            n.e("728136"),
                            n.e("216084"),
                            n.e("36624"),
                            n.e("22547"),
                        ]).then(n.bind(n, 1310));
                        return (t) =>
                            (0, l.jsx)(e, {
                                ...t,
                                guild: ei,
                                source: L.PE1.CHANNEL_WELCOME,
                                analyticsLocation: { section: L.JJy.CHANNEL_WELCOME_CTA },
                            });
                    });
        }, [ei])),
        (Y = i.useCallback(() => {
            x.Ay.trackWithMetadata(L.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: W.XT.CHANNEL_WELCOME,
                action: W.AG.SEND_MESSAGE,
            }),
                B._.dispatch(L.jej.TEXTAREA_FOCUS, { highlight: !0, channelId: L.dJq });
        }, [])),
        (X = i.useCallback(() => {
            x.Ay.trackWithMetadata(L.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: W.XT.CHANNEL_WELCOME,
                action: W.AG.PERSONALIZE_SERVER,
            }),
                null != ei && k.A.open(ei.id, (0, O.x)(), { section: L.JJy.CHANNEL_WELCOME_CTA });
        }, [ei])),
        (Q = i.useCallback(() => {
            x.Ay.trackWithMetadata(L.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: W.XT.CHANNEL_WELCOME,
                action: W.AG.DOWNLOAD,
            }),
                (0, g.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("773708"), n.e("944602"), n.e("825280")]).then(
                        n.bind(n, 987482),
                    );
                    return (t) => (0, l.jsx)(e, { source: L.JJy.CHANNEL_WELCOME_CTA, ...t });
                });
        }, [])),
        {
            handleInvite: Z,
            handleMessage: Y,
            handlePersonalize: X,
            handleDownload: Q,
            handleAddApplication: i.useCallback(() => {
                null != ei &&
                    (x.Ay.trackWithMetadata(L.HAw.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: W.XT.CHANNEL_WELCOME,
                        action: W.AG.ADD_APP,
                    }),
                    (0, g.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("436728"), n.e("566003")]).then(n.bind(n, 258942));
                        return (t) =>
                            (0, l.jsx)(e, {
                                guildId: ei.id ?? "",
                                ...t,
                                analyticsType: d.M.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL,
                            });
                    }));
            }, [ei]),
            handleBoost: i.useCallback(() => {
                x.Ay.trackWithMetadata(L.HAw.SERVER_SETUP_CTA_CLICKED, {
                    setup_type: W.XT.CHANNEL_WELCOME,
                    action: W.AG.BOOST,
                }),
                    null != ei && (0, w.A)(ei.id, C.A.GUILD_POWERUPS_CHANNEL_WELCOME_CTA);
            }, [ei]),
        }),
        e_ = !(ed || eu || eh || em || eg),
        { titleAnimatedStyle: eI, opacities: ej } =
            ((ee = (0, f.A)(() => new r.A.Value(0))),
            (et = (0, f.A)(() => new r.A.Value(0))),
            (en = (0, f.A)(() => [
                new r.A.Value(0),
                new r.A.Value(0),
                new r.A.Value(0),
                new r.A.Value(0),
                new r.A.Value(0),
                new r.A.Value(0),
            ])),
            i.useEffect(() => {
                r.A.stagger(300, [
                    r.A.parallel([
                        r.A.timing(et, { toValue: 1, duration: 450 }),
                        r.A.timing(ee, { toValue: 1, duration: 450 }),
                    ]),
                    r.A.stagger(
                        100,
                        en.map((e) => r.A.timing(e, { toValue: 1, duration: 300 })),
                    ),
                ]).start();
            }, [et, ee, en]),
            {
                titleAnimatedStyle: e_
                    ? {
                          transform: [
                              { translateY: ee.interpolate({ inputRange: [0, 1], outputRange: ["-20px", "0px"] }) },
                          ],
                          opacity: et,
                      }
                    : {},
                opacities: en,
            }),
        [ey, eb] = i.useState([]),
        eN = ey.length > 0;
    if (
        (i.useEffect(() => {
            (async () => {
                try {
                    let e = await (0, P.c)(ei?.id ?? L.dJq);
                    eb(e.map((e) => e.id));
                } catch {}
            })();
        }, [ei?.id]),
        null == ei)
    )
        return null;
    let ev = [];
    !es &&
        (er &&
            ev.push(
                (0, l.jsx)(
                    r.A.div,
                    {
                        className: q.cW,
                        style: e_ ? { opacity: ej[ev.length] } : {},
                        children: (0, l.jsx)(J, {
                            iconUrl: "/assets/ea08bfae3e0ab96d.svg",
                            header: $.intl.string($.t.q9n0Ta),
                            completed: eu,
                            onClick: eA,
                        }),
                    },
                    "invite",
                ),
            ),
        eo &&
            ev.push(
                (0, l.jsx)(
                    r.A.div,
                    {
                        className: q.cW,
                        style: e_ ? { opacity: ej[ev.length] } : {},
                        children: (0, l.jsx)(J, {
                            iconUrl: "/assets/428a003b3c729aa6.svg",
                            header: $.intl.string($.t.c5kxPh),
                            completed: em,
                            onClick: eC,
                        }),
                    },
                    "customize",
                ),
            ),
        ec &&
            ev.push(
                (0, l.jsx)(
                    r.A.div,
                    {
                        className: q.cW,
                        style: e_ ? { opacity: ej[ev.length] } : {},
                        children: (0, l.jsx)(J, {
                            iconUrl: "/assets/2ed198e767bd5423.svg",
                            header: $.intl.string($.t["SoP7+l"]),
                            completed: eh,
                            onClick: ef,
                        }),
                    },
                    "message",
                ),
            ),
        (0, K.isWeb)() &&
            ev.push(
                (0, l.jsx)(
                    r.A.div,
                    {
                        className: q.cW,
                        style: e_ ? { opacity: ej[ev.length] } : {},
                        children: (0, l.jsx)(J, {
                            iconUrl: "/assets/eea7561d0cfcff41.svg",
                            header: $.intl.string($.t.pGVNI9),
                            completed: ed,
                            onClick: ex,
                        }),
                    },
                    "download",
                ),
            ),
        ev.push(
            (0, l.jsx)(
                r.A.div,
                {
                    className: q.cW,
                    style: e_ ? { opacity: ej[ev.length] } : {},
                    children: (0, l.jsx)(J, {
                        iconUrl: p,
                        header: $.intl.string($.t.IhHDEO),
                        completed: eN,
                        onClick: eE,
                    }),
                },
                "addapp",
            ),
        ),
        ep &&
            G.getConfig({ location: "WelcomeArea" }).enabled &&
            ev.push(
                (0, l.jsx)(
                    r.A.div,
                    {
                        className: q.cW,
                        style: e_ ? { opacity: ej[ev.length] } : {},
                        children: (0, l.jsx)(J, {
                            iconUrl:
                                "https://cdn.discordapp.com/assets/content/bc3217e772906510d881b75ebefea754b9c3ba903ddf6f994e46e5c5a85770a3.svg",
                            header: $.intl.string($.t["6Qbqxw"]),
                            completed: eg,
                            onClick: eS,
                        }),
                    },
                    "boost",
                ),
            ));
    let eT = ea ? $.intl.string($.t["1ach9C"]) : $.intl.string($.t["ezm+/j"]);
    es && (eT = $.intl.string($.t["gwyU/J"]));
    let eM = `${V.A.getArticleURL(L.MVz.GUILD_GETTING_STARTED)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm`;
    return (0, l.jsx)(z.Ay, {
        channelId: el.id,
        children: (0, l.jsx)("div", {
            className: q.kL,
            children: (0, l.jsxs)("div", {
                className: q.vW,
                children: [
                    (0, l.jsxs)(r.A.div, {
                        style: eI,
                        children: [
                            (0, l.jsx)(A.D, {
                                className: q.ud,
                                variant: "heading-xxl/medium",
                                children: $.intl.format($.t.rkHVKf, { guildName: ei.name }),
                            }),
                            (0, l.jsxs)(h.E, {
                                color: "text-default",
                                className: a()({ [q.VA]: !0, [q.lg]: 0 === ev.length }),
                                variant: "text-sm/normal",
                                children: [eT, " ", ev.length > 0 ? $.intl.format($.t.UOtD32, { guideURL: eM }) : null],
                            }),
                        ],
                    }),
                    ev,
                ],
            }),
        }),
    });
}
