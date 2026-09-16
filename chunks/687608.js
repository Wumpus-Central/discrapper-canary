(n.d(t, { E: () => q, A: () => J }), n(321073));
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
    I = n(855687),
    _ = n(143413),
    j = n(280450),
    y = n(734057),
    b = n(808728),
    N = n(498642),
    T = n(71393),
    v = n(186111),
    M = n(232835),
    R = n(576705),
    D = n(935208),
    L = n(652215),
    k = n(468689),
    P = n(794967),
    O = n(595818),
    G = n(363487),
    U = n(828162),
    w = n(287809),
    F = n(147925),
    H = n(625494),
    B = n(975571),
    K = n(723702),
    V = n(314307),
    z = n(936649),
    W = n(375708),
    $ = n(936820);
function q(e) {
    let { className: t, iconUrl: n, icon: s, header: r, completed: c, onClick: d } = e,
        [g, p] = i.useState(!1),
        A = (0, o.A)(c);
    return (
        i.useEffect(() => {
            null != A && c !== A && (p(!0), setTimeout(() => p(!1), 1e3));
        }, [c, A]),
        (0, l.jsxs)(u.D, {
            className: a()(t, $.Nr, { [$.so]: c }),
            onClick: d,
            children: [
                s ?? (0, l.jsx)("img", { className: $.Kk, src: n, alt: "" }),
                (0, l.jsx)(h.E, {
                    color: "text-strong",
                    className: a()($.t$, $.MY),
                    variant: "text-sm/normal",
                    children: r,
                }),
                c
                    ? (0, l.jsx)(m.CheckmarkLargeIcon, {
                          size: "md",
                          color: "currentColor",
                          className: a()($.AI, { [$.i0]: g }),
                      })
                    : (0, l.jsx)(F.A, { className: $.UE, direction: F.A.Directions.RIGHT }),
            ],
        })
    );
}
function J(e) {
    var t;
    let s,
        o,
        u,
        m,
        E,
        F,
        J,
        Z,
        Y,
        X,
        Q,
        ee,
        et,
        { channel: en } = e,
        el = (0, c.bG)([T.A], () => (null != en ? T.A.getGuild(en.getGuildId()) : null), [en]),
        ei = null != el && D.default.extractTimestamp(el.id) < Date.now() - L.NOr,
        es = (0, c.bG)([j.default], () => el?.ownerId === j.default.getId(), [el]),
        {
            canInvite: ea,
            canManageGuild: er,
            canMessage: eo,
        } = (0, c.cf)(
            [R.A],
            () => ({
                canInvite: (0, I.K)(R.A, el, en),
                canManageGuild: null != el && R.A.can(L.xBc.MANAGE_GUILD, el),
                canMessage: null != en && R.A.can(L.xBc.SEND_MESSAGES, en),
                canCreateChannel: null != el && R.A.can(L.xBc.MANAGE_CHANNELS, el),
            }),
            [el, en],
        ),
        ec = (0, c.bG)(
            [w.default],
            () => w.default.getCurrentUser()?.desktop === !0 || w.default.getCurrentUser()?.mobile === !0,
        ),
        {
            guildPopulated: ed,
            guildMessaged: eu,
            guildPersonalized: eh,
        } = {
            guildPopulated:
                ((s = (0, c.bG)([y.A], () => y.A.getChannel(el?.systemChannelId))),
                (o = (0, c.yK)([M.A], () => (null != s ? M.A.getMessages(s.id).toArray() : []))),
                (0, c.bG)(
                    [N.A],
                    () => {
                        let e = N.A.getMemberCount(el?.id) ?? 0,
                            t = o.some((e) => e.type === L.lAJ.USER_JOIN);
                        return e > 1 || t;
                    },
                    [el, o],
                )),
            guildMessaged:
                ((u = (0, c.bG)([y.A], () => (null != el ? y.A.getMutableBasicGuildChannelsForGuild(el.id) : null))),
                (t = i.useMemo(() => (null == u ? [] : S().values(u)), [u])),
                (m = (0, c.bG)([j.default], () => j.default.getId())),
                (0, c.bG)([M.A], () =>
                    S().some(t, (e) => {
                        let t = M.A.getMessages(e.id).toArray();
                        return S().some(t, (e) => e.author.id === m && !(0, _.A)(e));
                    }),
                )),
            guildPersonalized:
                ((E = (0, c.bG)([v.A], () => v.A.hasLayers())),
                (F = (0, c.bG)([T.A], () => T.A.getGuild(el?.id))),
                F?.icon != null && !E),
            guildChannelCreated: (0, c.bG)(
                [b.Ay],
                () => {
                    let e = b.Ay.getChannels(el?.id),
                        t = e[b.vM];
                    function n(e) {
                        return (
                            null != el &&
                            D.default.extractTimestamp(e.channel.id) - D.default.extractTimestamp(el.id) > 500
                        );
                    }
                    return e[b.I6].some(n) || t.some(n);
                },
                [el],
            ),
        },
        em = (el?.premiumSubscriberCount ?? 0) > 0,
        eg = !0 === (0, G.A)(el?.id),
        {
            handleInvite: ep,
            handleMessage: eA,
            handlePersonalize: ef,
            handleDownload: eC,
            handleAddApplication: ex,
            handleBoost: eE,
        } = ((J = i.useCallback(() => {
            (x.Ay.trackWithMetadata(L.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: z.XT.CHANNEL_WELCOME,
                action: z.AG.INVITE,
            }),
                null != el &&
                    (0, g.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("683621"),
                            n.e("711162"),
                            n.e("159957"),
                            n.e("728136"),
                            n.e("216084"),
                            n.e("36624"),
                            n.e("22547"),
                        ]).then(n.bind(n, 1310));
                        return (t) =>
                            (0, l.jsx)(e, {
                                ...t,
                                guild: el,
                                source: L.PE1.CHANNEL_WELCOME,
                                analyticsLocation: { section: L.JJy.CHANNEL_WELCOME_CTA },
                            });
                    }));
        }, [el])),
        (Z = i.useCallback(() => {
            (x.Ay.trackWithMetadata(L.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: z.XT.CHANNEL_WELCOME,
                action: z.AG.SEND_MESSAGE,
            }),
                H._.dispatch(L.jej.TEXTAREA_FOCUS, { highlight: !0, channelId: L.dJq }));
        }, [])),
        (Y = i.useCallback(() => {
            (x.Ay.trackWithMetadata(L.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: z.XT.CHANNEL_WELCOME,
                action: z.AG.PERSONALIZE_SERVER,
            }),
                null != el && k.A.open(el.id, (0, O.x)(), { section: L.JJy.CHANNEL_WELCOME_CTA }));
        }, [el])),
        (X = i.useCallback(() => {
            (x.Ay.trackWithMetadata(L.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: z.XT.CHANNEL_WELCOME,
                action: z.AG.DOWNLOAD,
            }),
                (0, g.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("915082"), n.e("944602"), n.e("825280")]).then(
                        n.bind(n, 987482),
                    );
                    return (t) => (0, l.jsx)(e, { source: L.JJy.CHANNEL_WELCOME_CTA, ...t });
                }));
        }, [])),
        {
            handleInvite: J,
            handleMessage: Z,
            handlePersonalize: Y,
            handleDownload: X,
            handleAddApplication: i.useCallback(() => {
                null != el &&
                    (x.Ay.trackWithMetadata(L.HAw.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: z.XT.CHANNEL_WELCOME,
                        action: z.AG.ADD_APP,
                    }),
                    (0, g.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("851503"), n.e("566003")]).then(n.bind(n, 258942));
                        return (t) =>
                            (0, l.jsx)(e, {
                                guildId: el.id ?? "",
                                ...t,
                                analyticsType: d.M.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL,
                            });
                    }));
            }, [el]),
            handleBoost: i.useCallback(() => {
                (x.Ay.trackWithMetadata(L.HAw.SERVER_SETUP_CTA_CLICKED, {
                    setup_type: z.XT.CHANNEL_WELCOME,
                    action: z.AG.BOOST,
                }),
                    null != el && (0, U.A)(el.id, C.A.GUILD_POWERUPS_CHANNEL_WELCOME_CTA));
            }, [el]),
        }),
        eS = !(ec || ed || eu || eh || em),
        { titleAnimatedStyle: eI, opacities: e_ } =
            ((Q = (0, f.A)(() => new r.A.Value(0))),
            (ee = (0, f.A)(() => new r.A.Value(0))),
            (et = (0, f.A)(() => [
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
                        r.A.timing(ee, { toValue: 1, duration: 450 }),
                        r.A.timing(Q, { toValue: 1, duration: 450 }),
                    ]),
                    r.A.stagger(
                        100,
                        et.map((e) => r.A.timing(e, { toValue: 1, duration: 300 })),
                    ),
                ]).start();
            }, [ee, Q, et]),
            {
                titleAnimatedStyle: eS
                    ? {
                          transform: [
                              { translateY: Q.interpolate({ inputRange: [0, 1], outputRange: ["-20px", "0px"] }) },
                          ],
                          opacity: ee,
                      }
                    : {},
                opacities: et,
            }),
        [ej, ey] = i.useState([]),
        eb = ej.length > 0;
    if (
        (i.useEffect(() => {
            (async () => {
                try {
                    let e = await (0, P.c)(el?.id ?? L.dJq);
                    ey(e.map((e) => e.id));
                } catch {}
            })();
        }, [el?.id]),
        null == el)
    )
        return null;
    let eN = [];
    !ei &&
        (ea &&
            eN.push(
                (0, l.jsx)(
                    r.A.div,
                    {
                        className: $.cW,
                        style: eS ? { opacity: e_[eN.length] } : {},
                        children: (0, l.jsx)(q, {
                            iconUrl: "/assets/ea08bfae3e0ab96d.svg",
                            header: W.intl.string(W.t.q9n0Ta),
                            completed: ed,
                            onClick: ep,
                        }),
                    },
                    "invite",
                ),
            ),
        er &&
            eN.push(
                (0, l.jsx)(
                    r.A.div,
                    {
                        className: $.cW,
                        style: eS ? { opacity: e_[eN.length] } : {},
                        children: (0, l.jsx)(q, {
                            iconUrl: "/assets/428a003b3c729aa6.svg",
                            header: W.intl.string(W.t.c5kxPh),
                            completed: eh,
                            onClick: ef,
                        }),
                    },
                    "customize",
                ),
            ),
        eo &&
            eN.push(
                (0, l.jsx)(
                    r.A.div,
                    {
                        className: $.cW,
                        style: eS ? { opacity: e_[eN.length] } : {},
                        children: (0, l.jsx)(q, {
                            iconUrl: "/assets/2ed198e767bd5423.svg",
                            header: W.intl.string(W.t["SoP7+l"]),
                            completed: eu,
                            onClick: eA,
                        }),
                    },
                    "message",
                ),
            ),
        (0, K.isWeb)() &&
            eN.push(
                (0, l.jsx)(
                    r.A.div,
                    {
                        className: $.cW,
                        style: eS ? { opacity: e_[eN.length] } : {},
                        children: (0, l.jsx)(q, {
                            iconUrl: "/assets/eea7561d0cfcff41.svg",
                            header: W.intl.string(W.t.pGVNI9),
                            completed: ec,
                            onClick: eC,
                        }),
                    },
                    "download",
                ),
            ),
        eN.push(
            (0, l.jsx)(
                r.A.div,
                {
                    className: $.cW,
                    style: eS ? { opacity: e_[eN.length] } : {},
                    children: (0, l.jsx)(q, {
                        iconUrl: p,
                        header: W.intl.string(W.t.IhHDEO),
                        completed: eb,
                        onClick: ex,
                    }),
                },
                "addapp",
            ),
        ),
        eg &&
            eN.push(
                (0, l.jsx)(
                    r.A.div,
                    {
                        className: $.cW,
                        style: eS ? { opacity: e_[eN.length] } : {},
                        children: (0, l.jsx)(q, {
                            iconUrl:
                                "https://cdn.discordapp.com/assets/content/bc3217e772906510d881b75ebefea754b9c3ba903ddf6f994e46e5c5a85770a3.svg",
                            header: W.intl.string(W.t["6Qbqxw"]),
                            completed: em,
                            onClick: eE,
                        }),
                    },
                    "boost",
                ),
            ));
    let eT = es ? W.intl.string(W.t["1ach9C"]) : W.intl.string(W.t["ezm+/j"]);
    ei && (eT = W.intl.string(W.t["gwyU/J"]));
    let ev = `${B.A.getArticleURL(L.MVz.GUILD_GETTING_STARTED)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm`;
    return (0, l.jsx)(V.Ay, {
        channelId: en.id,
        children: (0, l.jsx)("div", {
            className: $.kL,
            children: (0, l.jsxs)("div", {
                className: $.vW,
                children: [
                    (0, l.jsxs)(r.A.div, {
                        style: eI,
                        children: [
                            (0, l.jsx)(A.D, {
                                className: $.ud,
                                variant: "heading-xxl/medium",
                                children: W.intl.format(W.t.rkHVKf, { guildName: el.name }),
                            }),
                            (0, l.jsxs)(h.E, {
                                color: "text-default",
                                className: a()({ [$.VA]: !0, [$.lg]: 0 === eN.length }),
                                variant: "text-sm/normal",
                                children: [eT, " ", eN.length > 0 ? W.intl.format(W.t.UOtD32, { guideURL: ev }) : null],
                            }),
                        ],
                    }),
                    eN,
                ],
            }),
        }),
    });
}
