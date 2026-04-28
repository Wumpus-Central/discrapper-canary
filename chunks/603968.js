a.d(t, { E: () => B, A: () => Y }), a(321073);
var l = a(627968),
    n = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(615300),
    c = a(17928),
    d = a(554146),
    u = a(939249),
    A = a(834730),
    o = a(933832),
    E = a(192308),
    C = a(134292),
    _ = a(984896),
    m = a(645945),
    h = a(869840),
    N = a(383669),
    g = a(534514),
    T = a(444927),
    p = a(919796),
    M = a(58149),
    I = a(735438),
    x = a.n(I),
    S = a(855687),
    y = a(143413),
    O = a(495544),
    P = a(734057),
    R = a(808728),
    L = a(498642),
    G = a(71393),
    j = a(186111),
    f = a(232835),
    D = a(576705),
    b = a(935208),
    k = a(652215),
    U = a(997509),
    V = a(794967),
    v = a(595818),
    w = a(287809),
    W = a(147925),
    H = a(625494),
    J = a(975571),
    z = a(723702),
    F = a(314307),
    K = a(936649),
    X = a(985018),
    q = a(516847);
function B(e) {
    let { className: t, iconUrl: a, icon: i, header: r, completed: c, onClick: d } = e,
        [E, C] = n.useState(!1),
        _ = (0, p.A)(c);
    return (
        n.useEffect(() => {
            null != _ && c !== _ && (C(!0), setTimeout(() => C(!1), 1e3));
        }, [c, _]),
        (0, l.jsxs)(u.D, {
            className: s()(t, q.Nr, { [q.so]: c }),
            onClick: d,
            children: [
                i ?? (0, l.jsx)("img", { className: q.Kk, src: a, alt: "" }),
                (0, l.jsx)(A.E, {
                    color: "text-strong",
                    className: s()(q.t$, q.MY),
                    variant: "text-sm/normal",
                    children: r,
                }),
                c
                    ? (0, l.jsx)(o.A, { size: "md", color: "currentColor", className: s()(q.AI, { [q.i0]: E }) })
                    : (0, l.jsx)(W.A, { className: q.UE, direction: W.A.Directions.RIGHT }),
            ],
        })
    );
}
function Y(e) {
    var t;
    let i,
        u,
        o,
        p,
        I,
        W,
        Y,
        Q,
        $,
        Z,
        ee,
        et,
        { channel: ea } = e,
        el = (0, c.bG)([G.A], () => (null != ea ? G.A.getGuild(ea.getGuildId()) : null), [ea]),
        en = null != el && b.default.extractTimestamp(el.id) < Date.now() - k.NOr,
        ei = (0, c.bG)([O.default], () => el?.ownerId === O.default.getId(), [el]),
        {
            canInvite: es,
            canManageGuild: er,
            canMessage: ec,
        } = (0, c.cf)(
            [D.A],
            () => ({
                canInvite: (0, S.K)(D.A, el, ea),
                canManageGuild: null != el && D.A.can(k.xBc.MANAGE_GUILD, el),
                canMessage: null != ea && D.A.can(k.xBc.SEND_MESSAGES, ea),
                canCreateChannel: null != el && D.A.can(k.xBc.MANAGE_CHANNELS, el),
            }),
            [el, ea],
        ),
        ed = (0, c.bG)(
            [w.default],
            () => w.default.getCurrentUser()?.desktop === !0 || w.default.getCurrentUser()?.mobile === !0,
        ),
        {
            guildPopulated: eu,
            guildMessaged: eA,
            guildPersonalized: eo,
        } = {
            guildPopulated:
                ((i = (0, c.bG)([P.A], () => P.A.getChannel(el?.systemChannelId))),
                (u = (0, c.yK)([f.A], () => (null != i ? f.A.getMessages(i.id).toArray() : []))),
                (0, c.bG)([L.A], () => {
                    let e = L.A.getMemberCount(el?.id) ?? 0,
                        t = u.some((e) => e.type === k.lAJ.USER_JOIN);
                    return e > 1 || t;
                }, [el, u])),
            guildMessaged:
                ((o = (0, c.bG)([P.A], () => (null != el ? P.A.getMutableBasicGuildChannelsForGuild(el.id) : null))),
                (t = n.useMemo(() => (null == o ? [] : x().values(o)), [o])),
                (p = (0, c.bG)([O.default], () => O.default.getId())),
                (0, c.bG)([f.A], () =>
                    x().some(t, (e) => {
                        let t = f.A.getMessages(e.id).toArray();
                        return x().some(t, (e) => e.author.id === p && !(0, y.A)(e));
                    }),
                )),
            guildPersonalized:
                ((I = (0, c.bG)([j.A], () => j.A.hasLayers())),
                (W = (0, c.bG)([G.A], () => G.A.getGuild(el?.id))),
                W?.icon != null && !I),
            guildChannelCreated: (0, c.bG)([R.Ay], () => {
                let e = R.Ay.getChannels(el?.id),
                    t = e[R.vM];
                function a(e) {
                    return (
                        null != el && b.default.extractTimestamp(e.channel.id) - b.default.extractTimestamp(el.id) > 500
                    );
                }
                return e[R.I6].some(a) || t.some(a);
            }, [el]),
        },
        {
            handleInvite: eE,
            handleMessage: eC,
            handlePersonalize: e_,
            handleDownload: em,
            handleAddApplication: eh,
        } = ((Y = n.useCallback(() => {
            M.Ay.trackWithMetadata(k.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: K.XT.CHANNEL_WELCOME,
                action: K.AG.INVITE,
            }),
                null != el &&
                    (0, E.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            a.e("36685"),
                            a.e("59957"),
                            a.e("28136"),
                            a.e("16084"),
                            a.e("87317"),
                            a.e("22547"),
                        ]).then(a.bind(a, 1310));
                        return (t) =>
                            (0, l.jsx)(e, {
                                ...t,
                                guild: el,
                                source: k.PE1.CHANNEL_WELCOME,
                                analyticsLocation: { section: k.JJy.CHANNEL_WELCOME_CTA },
                            });
                    });
        }, [el])),
        (Q = n.useCallback(() => {
            M.Ay.trackWithMetadata(k.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: K.XT.CHANNEL_WELCOME,
                action: K.AG.SEND_MESSAGE,
            }),
                H._.dispatch(k.jej.TEXTAREA_FOCUS, { highlight: !0, channelId: k.dJq });
        }, [])),
        ($ = n.useCallback(() => {
            M.Ay.trackWithMetadata(k.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: K.XT.CHANNEL_WELCOME,
                action: K.AG.PERSONALIZE_SERVER,
            }),
                null != el && U.A.open(el.id, (0, v.x)(), { section: k.JJy.CHANNEL_WELCOME_CTA });
        }, [el])),
        {
            handleInvite: Y,
            handleMessage: Q,
            handlePersonalize: $,
            handleDownload: n.useCallback(() => {
                M.Ay.trackWithMetadata(k.HAw.SERVER_SETUP_CTA_CLICKED, {
                    setup_type: K.XT.CHANNEL_WELCOME,
                    action: K.AG.DOWNLOAD,
                }),
                    (0, E.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([a.e("81126"), a.e("44602"), a.e("25280")]).then(
                            a.bind(a, 987482),
                        );
                        return (t) => (0, l.jsx)(e, { source: k.JJy.CHANNEL_WELCOME_CTA, ...t });
                    });
            }, []),
            handleAddApplication: n.useCallback(() => {
                null != el &&
                    (M.Ay.trackWithMetadata(k.HAw.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: K.XT.CHANNEL_WELCOME,
                        action: K.AG.ADD_APP,
                    }),
                    (0, E.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([a.e("81056"), a.e("66003")]).then(a.bind(a, 258942));
                        return (t) =>
                            (0, l.jsx)(e, {
                                guildId: el.id ?? "",
                                ...t,
                                analyticsType: d.M.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL,
                            });
                    }));
            }, [el]),
        }),
        eN = !(ed || eu || eA || eo),
        { titleAnimatedStyle: eg, opacities: eT } =
            ((Z = (0, T.A)(() => new r.A.Value(0))),
            (ee = (0, T.A)(() => new r.A.Value(0))),
            (et = (0, T.A)(() => [new r.A.Value(0), new r.A.Value(0), new r.A.Value(0), new r.A.Value(0)])),
            n.useEffect(() => {
                r.A.stagger(300, [
                    r.A.parallel([
                        r.A.timing(ee, { toValue: 1, duration: 450 }),
                        r.A.timing(Z, { toValue: 1, duration: 450 }),
                    ]),
                    r.A.stagger(100, [
                        r.A.timing(et[0], { toValue: 1, duration: 300 }),
                        r.A.timing(et[1], { toValue: 1, duration: 300 }),
                        r.A.timing(et[2], { toValue: 1, duration: 300 }),
                        r.A.timing(et[3], { toValue: 1, duration: 300 }),
                    ]),
                ]).start();
            }, [ee, Z, et]),
            {
                titleAnimatedStyle: eN
                    ? {
                          transform: [
                              { translateY: Z.interpolate({ inputRange: [0, 1], outputRange: ["-20px", "0px"] }) },
                          ],
                          opacity: ee,
                      }
                    : {},
                opacities: et,
            }),
        [ep, eM] = n.useState([]),
        eI = ep.length > 0;
    if (
        (n.useEffect(() => {
            (async () => {
                try {
                    let e = await (0, V.c)(el?.id ?? k.dJq);
                    eM(e.map((e) => e.id));
                } catch {}
            })();
        }, [el?.id]),
        null == el)
    )
        return null;
    let ex = [];
    en ||
        (es &&
            ex.push(
                (0, l.jsx)(
                    r.A.div,
                    {
                        className: q.cW,
                        style: eN ? { opacity: eT[ex.length] } : {},
                        children: (0, l.jsx)(B, {
                            iconUrl: C,
                            header: X.intl.string(X.t.q9n0Ta),
                            completed: eu,
                            onClick: eE,
                        }),
                    },
                    "invite",
                ),
            ),
        er &&
            ex.push(
                (0, l.jsx)(
                    r.A.div,
                    {
                        className: q.cW,
                        style: eN ? { opacity: eT[ex.length] } : {},
                        children: (0, l.jsx)(B, {
                            iconUrl: _,
                            header: X.intl.string(X.t.c5kxPh),
                            completed: eo,
                            onClick: e_,
                        }),
                    },
                    "customize",
                ),
            ),
        ec &&
            ex.push(
                (0, l.jsx)(
                    r.A.div,
                    {
                        className: q.cW,
                        style: eN ? { opacity: eT[ex.length] } : {},
                        children: (0, l.jsx)(B, {
                            iconUrl: m,
                            header: X.intl.string(X.t["SoP7+l"]),
                            completed: eA,
                            onClick: eC,
                        }),
                    },
                    "message",
                ),
            ),
        (0, z.isWeb)() &&
            ex.push(
                (0, l.jsx)(
                    r.A.div,
                    {
                        className: q.cW,
                        style: eN ? { opacity: eT[ex.length] } : {},
                        children: (0, l.jsx)(B, {
                            iconUrl: h,
                            header: X.intl.string(X.t.pGVNI9),
                            completed: ed,
                            onClick: em,
                        }),
                    },
                    "download",
                ),
            ),
        ex.push(
            (0, l.jsx)(
                r.A.div,
                {
                    className: q.cW,
                    style: eN ? { opacity: eT[ex.length] } : {},
                    children: (0, l.jsx)(B, {
                        iconUrl: N,
                        header: X.intl.string(X.t.IhHDEO),
                        completed: eI,
                        onClick: eh,
                    }),
                },
                "addapp",
            ),
        ));
    let eS = ei ? X.intl.string(X.t["1ach9C"]) : X.intl.string(X.t["ezm+/j"]);
    en && (eS = X.intl.string(X.t["gwyU/J"]));
    let ey = `${J.A.getArticleURL(k.MVz.GUILD_GETTING_STARTED)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm`;
    return (0, l.jsx)(F.Ay, {
        channelId: ea.id,
        children: (0, l.jsx)("div", {
            className: q.kL,
            children: (0, l.jsxs)("div", {
                className: q.vW,
                children: [
                    (0, l.jsxs)(r.A.div, {
                        style: eg,
                        children: [
                            (0, l.jsx)(g.D, {
                                className: q.ud,
                                variant: "heading-xxl/medium",
                                children: X.intl.format(X.t.rkHVKf, { guildName: el.name }),
                            }),
                            (0, l.jsxs)(A.E, {
                                color: "text-default",
                                className: s()({ [q.VA]: !0, [q.lg]: 0 === ex.length }),
                                variant: "text-sm/normal",
                                children: [eS, " ", ex.length > 0 ? X.intl.format(X.t.UOtD32, { guideURL: ey }) : null],
                            }),
                        ],
                    }),
                    ex,
                ],
            }),
        }),
    });
}
