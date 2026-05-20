n.d(t, { E: () => z, A: () => W }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(615300),
    o = n(17928),
    c = n(554146),
    d = n(939249),
    u = n(834730),
    h = n(933832),
    m = n(192308),
    A = n(383669),
    g = n(534514),
    p = n(444927),
    f = n(919796),
    C = n(95561),
    E = n(735438),
    x = n.n(E),
    S = n(855687),
    _ = n(143413),
    I = n(495544),
    y = n(734057),
    N = n(808728),
    j = n(498642),
    T = n(71393),
    b = n(186111),
    v = n(232835),
    M = n(576705),
    R = n(935208),
    D = n(652215),
    L = n(468689),
    P = n(794967),
    k = n(595818),
    O = n(287809),
    G = n(147925),
    U = n(625494),
    w = n(975571),
    F = n(723702),
    H = n(314307),
    B = n(936649),
    V = n(375708),
    K = n(516847);
function z(e) {
    let { className: t, iconUrl: n, icon: s, header: r, completed: o, onClick: c } = e,
        [m, A] = i.useState(!1),
        g = (0, f.A)(o);
    return (
        i.useEffect(() => {
            null != g && o !== g && (A(!0), setTimeout(() => A(!1), 1e3));
        }, [o, g]),
        (0, l.jsxs)(d.D, {
            className: a()(t, K.Nr, { [K.so]: o }),
            onClick: c,
            children: [
                s ?? (0, l.jsx)("img", { className: K.Kk, src: n, alt: "" }),
                (0, l.jsx)(u.E, {
                    color: "text-strong",
                    className: a()(K.t$, K.MY),
                    variant: "text-sm/normal",
                    children: r,
                }),
                o
                    ? (0, l.jsx)(h.A, { size: "md", color: "currentColor", className: a()(K.AI, { [K.i0]: m }) })
                    : (0, l.jsx)(G.A, { className: K.UE, direction: G.A.Directions.RIGHT }),
            ],
        })
    );
}
function W(e) {
    var t;
    let s,
        d,
        h,
        f,
        E,
        G,
        W,
        $,
        q,
        J,
        Z,
        Y,
        { channel: X } = e,
        Q = (0, o.bG)([T.A], () => (null != X ? T.A.getGuild(X.getGuildId()) : null), [X]),
        ee = null != Q && R.default.extractTimestamp(Q.id) < Date.now() - D.NOr,
        et = (0, o.bG)([I.default], () => Q?.ownerId === I.default.getId(), [Q]),
        {
            canInvite: en,
            canManageGuild: el,
            canMessage: ei,
        } = (0, o.cf)(
            [M.A],
            () => ({
                canInvite: (0, S.K)(M.A, Q, X),
                canManageGuild: null != Q && M.A.can(D.xBc.MANAGE_GUILD, Q),
                canMessage: null != X && M.A.can(D.xBc.SEND_MESSAGES, X),
                canCreateChannel: null != Q && M.A.can(D.xBc.MANAGE_CHANNELS, Q),
            }),
            [Q, X],
        ),
        es = (0, o.bG)(
            [O.default],
            () => O.default.getCurrentUser()?.desktop === !0 || O.default.getCurrentUser()?.mobile === !0,
        ),
        {
            guildPopulated: ea,
            guildMessaged: er,
            guildPersonalized: eo,
        } = {
            guildPopulated:
                ((s = (0, o.bG)([y.A], () => y.A.getChannel(Q?.systemChannelId))),
                (d = (0, o.yK)([v.A], () => (null != s ? v.A.getMessages(s.id).toArray() : []))),
                (0, o.bG)([j.A], () => {
                    let e = j.A.getMemberCount(Q?.id) ?? 0,
                        t = d.some((e) => e.type === D.lAJ.USER_JOIN);
                    return e > 1 || t;
                }, [Q, d])),
            guildMessaged:
                ((h = (0, o.bG)([y.A], () => (null != Q ? y.A.getMutableBasicGuildChannelsForGuild(Q.id) : null))),
                (t = i.useMemo(() => (null == h ? [] : x().values(h)), [h])),
                (f = (0, o.bG)([I.default], () => I.default.getId())),
                (0, o.bG)([v.A], () =>
                    x().some(t, (e) => {
                        let t = v.A.getMessages(e.id).toArray();
                        return x().some(t, (e) => e.author.id === f && !(0, _.A)(e));
                    }),
                )),
            guildPersonalized:
                ((E = (0, o.bG)([b.A], () => b.A.hasLayers())),
                (G = (0, o.bG)([T.A], () => T.A.getGuild(Q?.id))),
                G?.icon != null && !E),
            guildChannelCreated: (0, o.bG)([N.Ay], () => {
                let e = N.Ay.getChannels(Q?.id),
                    t = e[N.vM];
                function n(e) {
                    return (
                        null != Q && R.default.extractTimestamp(e.channel.id) - R.default.extractTimestamp(Q.id) > 500
                    );
                }
                return e[N.I6].some(n) || t.some(n);
            }, [Q]),
        },
        {
            handleInvite: ec,
            handleMessage: ed,
            handlePersonalize: eu,
            handleDownload: eh,
            handleAddApplication: em,
        } = ((W = i.useCallback(() => {
            C.Ay.trackWithMetadata(D.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: B.XT.CHANNEL_WELCOME,
                action: B.AG.INVITE,
            }),
                null != Q &&
                    (0, m.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("44710"),
                            n.e("59957"),
                            n.e("28136"),
                            n.e("16084"),
                            n.e("87317"),
                            n.e("22547"),
                        ]).then(n.bind(n, 1310));
                        return (t) =>
                            (0, l.jsx)(e, {
                                ...t,
                                guild: Q,
                                source: D.PE1.CHANNEL_WELCOME,
                                analyticsLocation: { section: D.JJy.CHANNEL_WELCOME_CTA },
                            });
                    });
        }, [Q])),
        ($ = i.useCallback(() => {
            C.Ay.trackWithMetadata(D.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: B.XT.CHANNEL_WELCOME,
                action: B.AG.SEND_MESSAGE,
            }),
                U._.dispatch(D.jej.TEXTAREA_FOCUS, { highlight: !0, channelId: D.dJq });
        }, [])),
        (q = i.useCallback(() => {
            C.Ay.trackWithMetadata(D.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: B.XT.CHANNEL_WELCOME,
                action: B.AG.PERSONALIZE_SERVER,
            }),
                null != Q && L.A.open(Q.id, (0, k.x)(), { section: D.JJy.CHANNEL_WELCOME_CTA });
        }, [Q])),
        {
            handleInvite: W,
            handleMessage: $,
            handlePersonalize: q,
            handleDownload: i.useCallback(() => {
                C.Ay.trackWithMetadata(D.HAw.SERVER_SETUP_CTA_CLICKED, {
                    setup_type: B.XT.CHANNEL_WELCOME,
                    action: B.AG.DOWNLOAD,
                }),
                    (0, m.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("81013"), n.e("44602"), n.e("25280")]).then(
                            n.bind(n, 987482),
                        );
                        return (t) => (0, l.jsx)(e, { source: D.JJy.CHANNEL_WELCOME_CTA, ...t });
                    });
            }, []),
            handleAddApplication: i.useCallback(() => {
                null != Q &&
                    (C.Ay.trackWithMetadata(D.HAw.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: B.XT.CHANNEL_WELCOME,
                        action: B.AG.ADD_APP,
                    }),
                    (0, m.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("81056"), n.e("66003")]).then(n.bind(n, 258942));
                        return (t) =>
                            (0, l.jsx)(e, {
                                guildId: Q.id ?? "",
                                ...t,
                                analyticsType: c.M.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL,
                            });
                    }));
            }, [Q]),
        }),
        eA = !(es || ea || er || eo),
        { titleAnimatedStyle: eg, opacities: ep } =
            ((J = (0, p.A)(() => new r.A.Value(0))),
            (Z = (0, p.A)(() => new r.A.Value(0))),
            (Y = (0, p.A)(() => [new r.A.Value(0), new r.A.Value(0), new r.A.Value(0), new r.A.Value(0)])),
            i.useEffect(() => {
                r.A.stagger(300, [
                    r.A.parallel([
                        r.A.timing(Z, { toValue: 1, duration: 450 }),
                        r.A.timing(J, { toValue: 1, duration: 450 }),
                    ]),
                    r.A.stagger(100, [
                        r.A.timing(Y[0], { toValue: 1, duration: 300 }),
                        r.A.timing(Y[1], { toValue: 1, duration: 300 }),
                        r.A.timing(Y[2], { toValue: 1, duration: 300 }),
                        r.A.timing(Y[3], { toValue: 1, duration: 300 }),
                    ]),
                ]).start();
            }, [Z, J, Y]),
            {
                titleAnimatedStyle: eA
                    ? {
                          transform: [
                              { translateY: J.interpolate({ inputRange: [0, 1], outputRange: ["-20px", "0px"] }) },
                          ],
                          opacity: Z,
                      }
                    : {},
                opacities: Y,
            }),
        [ef, eC] = i.useState([]),
        eE = ef.length > 0;
    if (
        (i.useEffect(() => {
            (async () => {
                try {
                    let e = await (0, P.c)(Q?.id ?? D.dJq);
                    eC(e.map((e) => e.id));
                } catch {}
            })();
        }, [Q?.id]),
        null == Q)
    )
        return null;
    let ex = [];
    ee ||
        (en &&
            ex.push(
                (0, l.jsx)(
                    r.A.div,
                    {
                        className: K.cW,
                        style: eA ? { opacity: ep[ex.length] } : {},
                        children: (0, l.jsx)(z, {
                            iconUrl: "/assets/ea08bfae3e0ab96d.svg",
                            header: V.intl.string(V.t.q9n0Ta),
                            completed: ea,
                            onClick: ec,
                        }),
                    },
                    "invite",
                ),
            ),
        el &&
            ex.push(
                (0, l.jsx)(
                    r.A.div,
                    {
                        className: K.cW,
                        style: eA ? { opacity: ep[ex.length] } : {},
                        children: (0, l.jsx)(z, {
                            iconUrl: "/assets/428a003b3c729aa6.svg",
                            header: V.intl.string(V.t.c5kxPh),
                            completed: eo,
                            onClick: eu,
                        }),
                    },
                    "customize",
                ),
            ),
        ei &&
            ex.push(
                (0, l.jsx)(
                    r.A.div,
                    {
                        className: K.cW,
                        style: eA ? { opacity: ep[ex.length] } : {},
                        children: (0, l.jsx)(z, {
                            iconUrl: "/assets/2ed198e767bd5423.svg",
                            header: V.intl.string(V.t["SoP7+l"]),
                            completed: er,
                            onClick: ed,
                        }),
                    },
                    "message",
                ),
            ),
        (0, F.isWeb)() &&
            ex.push(
                (0, l.jsx)(
                    r.A.div,
                    {
                        className: K.cW,
                        style: eA ? { opacity: ep[ex.length] } : {},
                        children: (0, l.jsx)(z, {
                            iconUrl: "/assets/eea7561d0cfcff41.svg",
                            header: V.intl.string(V.t.pGVNI9),
                            completed: es,
                            onClick: eh,
                        }),
                    },
                    "download",
                ),
            ),
        ex.push(
            (0, l.jsx)(
                r.A.div,
                {
                    className: K.cW,
                    style: eA ? { opacity: ep[ex.length] } : {},
                    children: (0, l.jsx)(z, {
                        iconUrl: A,
                        header: V.intl.string(V.t.IhHDEO),
                        completed: eE,
                        onClick: em,
                    }),
                },
                "addapp",
            ),
        ));
    let eS = et ? V.intl.string(V.t["1ach9C"]) : V.intl.string(V.t["ezm+/j"]);
    ee && (eS = V.intl.string(V.t["gwyU/J"]));
    let e_ = `${w.A.getArticleURL(D.MVz.GUILD_GETTING_STARTED)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm`;
    return (0, l.jsx)(H.Ay, {
        channelId: X.id,
        children: (0, l.jsx)("div", {
            className: K.kL,
            children: (0, l.jsxs)("div", {
                className: K.vW,
                children: [
                    (0, l.jsxs)(r.A.div, {
                        style: eg,
                        children: [
                            (0, l.jsx)(g.D, {
                                className: K.ud,
                                variant: "heading-xxl/medium",
                                children: V.intl.format(V.t.rkHVKf, { guildName: Q.name }),
                            }),
                            (0, l.jsxs)(u.E, {
                                color: "text-default",
                                className: a()({ [K.VA]: !0, [K.lg]: 0 === ex.length }),
                                variant: "text-sm/normal",
                                children: [eS, " ", ex.length > 0 ? V.intl.format(V.t.UOtD32, { guideURL: e_ }) : null],
                            }),
                        ],
                    }),
                    ex,
                ],
            }),
        }),
    });
}
