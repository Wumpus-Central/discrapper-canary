n.d(t, { E: () => X, A: () => Y }), n(321073);
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
    g = n(192308),
    m = n(134292),
    A = n(984896),
    p = n(645945),
    C = n(869840),
    E = n(383669),
    x = n(534514),
    N = n(444927),
    f = n(919796),
    _ = n(58149),
    T = n(735438),
    v = n.n(T),
    I = n(855687),
    S = n(143413),
    j = n(495544),
    y = n(734057),
    R = n(808728),
    P = n(498642),
    O = n(71393),
    D = n(186111),
    b = n(232835),
    M = n(576705),
    L = n(935208),
    w = n(652215),
    U = n(997509),
    G = n(794967),
    k = n(595818),
    F = n(287809),
    V = n(147925),
    H = n(625494),
    B = n(975571),
    z = n(723702),
    W = n(314307),
    K = n(936649),
    J = n(985018),
    Z = n(516847);
function X(e) {
    let { className: t, iconUrl: n, icon: s, header: r, completed: o, onClick: c } = e,
        [g, m] = i.useState(!1),
        A = (0, f.A)(o);
    return (
        i.useEffect(() => {
            null != A && o !== A && (m(!0), setTimeout(() => m(!1), 1e3));
        }, [o, A]),
        (0, l.jsxs)(d.D, {
            className: a()(t, Z.Nr, { [Z.so]: o }),
            onClick: c,
            children: [
                s ?? (0, l.jsx)("img", { className: Z.Kk, src: n, alt: "" }),
                (0, l.jsx)(u.E, {
                    color: "text-strong",
                    className: a()(Z.t$, Z.MY),
                    variant: "text-sm/normal",
                    children: r,
                }),
                o
                    ? (0, l.jsx)(h.A, { size: "md", color: "currentColor", className: a()(Z.AI, { [Z.i0]: g }) })
                    : (0, l.jsx)(V.A, { className: Z.UE, direction: V.A.Directions.RIGHT }),
            ],
        })
    );
}
function Y(e) {
    var t;
    let s,
        d,
        h,
        f,
        T,
        V,
        Y,
        q,
        $,
        Q,
        ee,
        et,
        { channel: en } = e,
        el = (0, o.bG)([O.A], () => (null != en ? O.A.getGuild(en.getGuildId()) : null), [en]),
        ei = null != el && L.default.extractTimestamp(el.id) < Date.now() - w.NOr,
        es = (0, o.bG)([j.default], () => el?.ownerId === j.default.getId(), [el]),
        {
            canInvite: ea,
            canManageGuild: er,
            canMessage: eo,
        } = (0, o.cf)(
            [M.A],
            () => ({
                canInvite: (0, I.K)(M.A, el, en),
                canManageGuild: null != el && M.A.can(w.xBc.MANAGE_GUILD, el),
                canMessage: null != en && M.A.can(w.xBc.SEND_MESSAGES, en),
                canCreateChannel: null != el && M.A.can(w.xBc.MANAGE_CHANNELS, el),
            }),
            [el, en],
        ),
        ec = (0, o.bG)(
            [F.default],
            () => F.default.getCurrentUser()?.desktop === !0 || F.default.getCurrentUser()?.mobile === !0,
        ),
        {
            guildPopulated: ed,
            guildMessaged: eu,
            guildPersonalized: eh,
        } = {
            guildPopulated:
                ((s = (0, o.bG)([y.A], () => y.A.getChannel(el?.systemChannelId))),
                (d = (0, o.yK)([b.A], () => (null != s ? b.A.getMessages(s.id).toArray() : []))),
                (0, o.bG)([P.A], () => {
                    let e = P.A.getMemberCount(el?.id) ?? 0,
                        t = d.some((e) => e.type === w.lAJ.USER_JOIN);
                    return e > 1 || t;
                }, [el, d])),
            guildMessaged:
                ((h = (0, o.bG)([y.A], () => (null != el ? y.A.getMutableBasicGuildChannelsForGuild(el.id) : null))),
                (t = i.useMemo(() => (null == h ? [] : v().values(h)), [h])),
                (f = (0, o.bG)([j.default], () => j.default.getId())),
                (0, o.bG)([b.A], () =>
                    v().some(t, (e) => {
                        let t = b.A.getMessages(e.id).toArray();
                        return v().some(t, (e) => e.author.id === f && !(0, S.A)(e));
                    }),
                )),
            guildPersonalized:
                ((T = (0, o.bG)([D.A], () => D.A.hasLayers())),
                (V = (0, o.bG)([O.A], () => O.A.getGuild(el?.id))),
                V?.icon != null && !T),
            guildChannelCreated: (0, o.bG)([R.Ay], () => {
                let e = R.Ay.getChannels(el?.id),
                    t = e[R.vM];
                function n(e) {
                    return (
                        null != el && L.default.extractTimestamp(e.channel.id) - L.default.extractTimestamp(el.id) > 500
                    );
                }
                return e[R.I6].some(n) || t.some(n);
            }, [el]),
        },
        {
            handleInvite: eg,
            handleMessage: em,
            handlePersonalize: eA,
            handleDownload: ep,
            handleAddApplication: eC,
        } = ((Y = i.useCallback(() => {
            _.Ay.trackWithMetadata(w.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: K.XT.CHANNEL_WELCOME,
                action: K.AG.INVITE,
            }),
                null != el &&
                    (0, g.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("28136"), n.e("22547"), n.e("85905")]).then(
                            n.bind(n, 1310),
                        );
                        return (t) =>
                            (0, l.jsx)(e, {
                                ...t,
                                guild: el,
                                source: w.PE1.CHANNEL_WELCOME,
                                analyticsLocation: { section: w.JJy.CHANNEL_WELCOME_CTA },
                            });
                    });
        }, [el])),
        (q = i.useCallback(() => {
            _.Ay.trackWithMetadata(w.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: K.XT.CHANNEL_WELCOME,
                action: K.AG.SEND_MESSAGE,
            }),
                H._.dispatch(w.jej.TEXTAREA_FOCUS, { highlight: !0, channelId: w.dJq });
        }, [])),
        ($ = i.useCallback(() => {
            _.Ay.trackWithMetadata(w.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: K.XT.CHANNEL_WELCOME,
                action: K.AG.PERSONALIZE_SERVER,
            }),
                null != el && U.A.open(el.id, (0, k.x)(), { section: w.JJy.CHANNEL_WELCOME_CTA });
        }, [el])),
        {
            handleInvite: Y,
            handleMessage: q,
            handlePersonalize: $,
            handleDownload: i.useCallback(() => {
                _.Ay.trackWithMetadata(w.HAw.SERVER_SETUP_CTA_CLICKED, {
                    setup_type: K.XT.CHANNEL_WELCOME,
                    action: K.AG.DOWNLOAD,
                }),
                    (0, g.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
                        return (t) => (0, l.jsx)(e, { source: w.JJy.CHANNEL_WELCOME_CTA, ...t });
                    });
            }, []),
            handleAddApplication: i.useCallback(() => {
                null != el &&
                    (_.Ay.trackWithMetadata(w.HAw.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: K.XT.CHANNEL_WELCOME,
                        action: K.AG.ADD_APP,
                    }),
                    (0, g.openModalLazy)(async () => {
                        let { default: e } = await n.e("66003").then(n.bind(n, 258942));
                        return (t) =>
                            (0, l.jsx)(e, {
                                guildId: el.id ?? "",
                                ...t,
                                analyticsType: c.M.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL,
                            });
                    }));
            }, [el]),
        }),
        eE = !(ec || ed || eu || eh),
        { titleAnimatedStyle: ex, opacities: eN } =
            ((Q = (0, N.A)(() => new r.A.Value(0))),
            (ee = (0, N.A)(() => new r.A.Value(0))),
            (et = (0, N.A)(() => [new r.A.Value(0), new r.A.Value(0), new r.A.Value(0), new r.A.Value(0)])),
            i.useEffect(() => {
                r.A.stagger(300, [
                    r.A.parallel([
                        r.A.timing(ee, { toValue: 1, duration: 450 }),
                        r.A.timing(Q, { toValue: 1, duration: 450 }),
                    ]),
                    r.A.stagger(100, [
                        r.A.timing(et[0], { toValue: 1, duration: 300 }),
                        r.A.timing(et[1], { toValue: 1, duration: 300 }),
                        r.A.timing(et[2], { toValue: 1, duration: 300 }),
                        r.A.timing(et[3], { toValue: 1, duration: 300 }),
                    ]),
                ]).start();
            }, [ee, Q, et]),
            {
                titleAnimatedStyle: eE
                    ? {
                          transform: [
                              { translateY: Q.interpolate({ inputRange: [0, 1], outputRange: ["-20px", "0px"] }) },
                          ],
                          opacity: ee,
                      }
                    : {},
                opacities: et,
            }),
        [ef, e_] = i.useState([]),
        eT = ef.length > 0;
    if (
        (i.useEffect(() => {
            (async () => {
                try {
                    let e = await (0, G.c)(el?.id ?? w.dJq);
                    e_(e.map((e) => e.id));
                } catch {}
            })();
        }, [el?.id]),
        null == el)
    )
        return null;
    let ev = [];
    ei ||
        (ea &&
            ev.push(
                (0, l.jsx)(
                    r.A.div,
                    {
                        className: Z.cW,
                        style: eE ? { opacity: eN[ev.length] } : {},
                        children: (0, l.jsx)(X, {
                            iconUrl: m,
                            header: J.intl.string(J.t.q9n0Ta),
                            completed: ed,
                            onClick: eg,
                        }),
                    },
                    "invite",
                ),
            ),
        er &&
            ev.push(
                (0, l.jsx)(
                    r.A.div,
                    {
                        className: Z.cW,
                        style: eE ? { opacity: eN[ev.length] } : {},
                        children: (0, l.jsx)(X, {
                            iconUrl: A,
                            header: J.intl.string(J.t.c5kxPh),
                            completed: eh,
                            onClick: eA,
                        }),
                    },
                    "customize",
                ),
            ),
        eo &&
            ev.push(
                (0, l.jsx)(
                    r.A.div,
                    {
                        className: Z.cW,
                        style: eE ? { opacity: eN[ev.length] } : {},
                        children: (0, l.jsx)(X, {
                            iconUrl: p,
                            header: J.intl.string(J.t["SoP7+l"]),
                            completed: eu,
                            onClick: em,
                        }),
                    },
                    "message",
                ),
            ),
        (0, z.isWeb)() &&
            ev.push(
                (0, l.jsx)(
                    r.A.div,
                    {
                        className: Z.cW,
                        style: eE ? { opacity: eN[ev.length] } : {},
                        children: (0, l.jsx)(X, {
                            iconUrl: C,
                            header: J.intl.string(J.t.pGVNI9),
                            completed: ec,
                            onClick: ep,
                        }),
                    },
                    "download",
                ),
            ),
        ev.push(
            (0, l.jsx)(
                r.A.div,
                {
                    className: Z.cW,
                    style: eE ? { opacity: eN[ev.length] } : {},
                    children: (0, l.jsx)(X, {
                        iconUrl: E,
                        header: J.intl.string(J.t.IhHDEO),
                        completed: eT,
                        onClick: eC,
                    }),
                },
                "addapp",
            ),
        ));
    let eI = es ? J.intl.string(J.t["1ach9C"]) : J.intl.string(J.t["ezm+/j"]);
    ei && (eI = J.intl.string(J.t["gwyU/J"]));
    let eS = `${B.A.getArticleURL(w.MVz.GUILD_GETTING_STARTED)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm`;
    return (0, l.jsx)(W.Ay, {
        channelId: en.id,
        children: (0, l.jsx)("div", {
            className: Z.kL,
            children: (0, l.jsxs)("div", {
                className: Z.vW,
                children: [
                    (0, l.jsxs)(r.A.div, {
                        style: ex,
                        children: [
                            (0, l.jsx)(x.D, {
                                className: Z.ud,
                                variant: "heading-xxl/medium",
                                children: J.intl.format(J.t.rkHVKf, { guildName: el.name }),
                            }),
                            (0, l.jsxs)(u.E, {
                                color: "text-default",
                                className: a()({ [Z.VA]: !0, [Z.lg]: 0 === ev.length }),
                                variant: "text-sm/normal",
                                children: [eI, " ", ev.length > 0 ? J.intl.format(J.t.UOtD32, { guideURL: eS }) : null],
                            }),
                        ],
                    }),
                    ev,
                ],
            }),
        }),
    });
}
