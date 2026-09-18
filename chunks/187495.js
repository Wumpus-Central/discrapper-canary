n.d(t, { E: () => S, A: () => J });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(615300),
    o = n(17928),
    c = n(297264),
    d = n(834730),
    u = n(444927),
    h = n(280450),
    m = n(71393),
    g = n(975571),
    p = n(314307),
    A = n(819169),
    f = n(939249),
    C = n(933832),
    x = n(147925),
    E = n(936820);
function S(e) {
    let { className: t, iconUrl: n, icon: s, header: r, completed: o, onClick: c } = e,
        [u, h] = i.useState(!1),
        m = (0, A.A)(o);
    return (
        i.useEffect(() => {
            null != m && o !== m && (h(!0), setTimeout(() => h(!1), 1e3));
        }, [o, m]),
        (0, l.jsxs)(f.D, {
            className: a()(t, E.Nr, { [E.so]: o }),
            onClick: c,
            children: [
                s ?? (0, l.jsx)("img", { className: E.Kk, src: n, alt: "" }),
                (0, l.jsx)(d.E, {
                    color: "text-strong",
                    className: a()(E.t$, E.MY),
                    variant: "text-sm/normal",
                    children: r,
                }),
                o
                    ? (0, l.jsx)(C.CheckmarkLargeIcon, {
                          size: "md",
                          color: "currentColor",
                          className: a()(E.AI, { [E.i0]: u }),
                      })
                    : (0, l.jsx)(x.A, { className: E.UE, direction: x.A.Directions.RIGHT }),
            ],
        })
    );
}
n(321073);
var I = n(554146),
    _ = n(192308),
    y = n(383669),
    j = n(793574),
    b = n(95561),
    N = n(435558),
    T = n.n(N),
    v = n(855687),
    M = n(143413),
    R = n(734057),
    D = n(808728),
    L = n(498642),
    k = n(186111),
    P = n(232835),
    O = n(576705),
    G = n(935208),
    U = n(652215),
    w = n(468689),
    F = n(794967),
    H = n(595818),
    B = n(363487),
    K = n(828162),
    V = n(287809),
    z = n(625494),
    W = n(723702),
    $ = n(936649),
    q = n(375708);
function J(e) {
    let t,
        s,
        A,
        { channel: f } = e,
        C = (0, o.bG)([m.A], () => (null != f ? m.A.getGuild(f.getGuildId()) : null), [f]),
        x = (0, o.bG)([h.default], () => C?.ownerId === h.default.getId(), [C]),
        {
            steps: N,
            shouldAnimate: J,
            isOldGuild: Z,
        } = (function (e, t) {
            var s, a;
            let r,
                c,
                d,
                u,
                g,
                p,
                A,
                f,
                C,
                x,
                E = null != (s = t?.id) && G.default.extractTimestamp(s) < Date.now() - U.NOr,
                {
                    canInvite: S,
                    canManageGuild: N,
                    canMessage: J,
                } = (0, o.cf)(
                    [O.A],
                    () => ({
                        canInvite: (0, v.K)(O.A, t, e),
                        canManageGuild: null != t && O.A.can(U.xBc.MANAGE_GUILD, t),
                        canMessage: null != e && O.A.can(U.xBc.SEND_MESSAGES, e),
                        canCreateChannel: null != t && O.A.can(U.xBc.MANAGE_CHANNELS, t),
                    }),
                    [t, e],
                ),
                Z = (0, o.bG)(
                    [V.default],
                    () => V.default.getCurrentUser()?.desktop === !0 || V.default.getCurrentUser()?.mobile === !0,
                ),
                {
                    guildPopulated: Y,
                    guildMessaged: X,
                    guildPersonalized: Q,
                } = {
                    guildPopulated:
                        ((r = (0, o.bG)([R.A], () => R.A.getChannel(t?.systemChannelId))),
                        (c = (0, o.yK)([P.A], () => (null != r ? P.A.getMessages(r.id).toArray() : []))),
                        (0, o.bG)(
                            [L.A],
                            () => {
                                let e = L.A.getMemberCount(t?.id) ?? 0,
                                    n = c.some((e) => e.type === U.lAJ.USER_JOIN);
                                return e > 1 || n;
                            },
                            [t, c],
                        )),
                    guildMessaged:
                        ((d = (0, o.bG)([R.A], () =>
                            null != t ? R.A.getMutableBasicGuildChannelsForGuild(t.id) : null,
                        )),
                        (a = i.useMemo(() => (null == d ? [] : T().values(d)), [d])),
                        (u = (0, o.bG)([h.default], () => h.default.getId())),
                        (0, o.bG)([P.A], () =>
                            T().some(a, (e) => {
                                let t = P.A.getMessages(e.id).toArray();
                                return T().some(t, (e) => e.author.id === u && !(0, M.A)(e));
                            }),
                        )),
                    guildPersonalized:
                        ((g = (0, o.bG)([k.A], () => k.A.hasLayers())),
                        (p = (0, o.bG)([m.A], () => m.A.getGuild(t?.id))),
                        p?.icon != null && !g),
                    guildChannelCreated: (0, o.bG)(
                        [D.Ay],
                        () => {
                            let e = D.Ay.getChannels(t?.id),
                                n = e[D.vM];
                            function l(e) {
                                return (
                                    null != t &&
                                    G.default.extractTimestamp(e.channel.id) - G.default.extractTimestamp(t.id) > 500
                                );
                            }
                            return e[D.I6].some(l) || n.some(l);
                        },
                        [t],
                    ),
                },
                ee = (t?.premiumSubscriberCount ?? 0) > 0,
                et = !0 === (0, B.A)(t?.id),
                {
                    handleInvite: en,
                    handleMessage: el,
                    handlePersonalize: ei,
                    handleDownload: es,
                    handleAddApplication: ea,
                    handleBoost: er,
                } = ((A = i.useCallback(() => {
                    (b.Ay.trackWithMetadata(U.HAw.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: $.XT.CHANNEL_WELCOME,
                        action: $.AG.INVITE,
                    }),
                        null != t &&
                            (0, _.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([
                                    n.e("683621"),
                                    n.e("711162"),
                                    n.e("159957"),
                                    n.e("728136"),
                                    n.e("216084"),
                                    n.e("36624"),
                                    n.e("22547"),
                                ]).then(n.bind(n, 1310));
                                return (n) =>
                                    (0, l.jsx)(e, {
                                        ...n,
                                        guild: t,
                                        source: U.PE1.CHANNEL_WELCOME,
                                        analyticsLocation: { section: U.JJy.CHANNEL_WELCOME_CTA },
                                    });
                            }));
                }, [t])),
                (f = i.useCallback(() => {
                    (b.Ay.trackWithMetadata(U.HAw.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: $.XT.CHANNEL_WELCOME,
                        action: $.AG.SEND_MESSAGE,
                    }),
                        z._.dispatch(U.jej.TEXTAREA_FOCUS, { highlight: !0, channelId: U.dJq }));
                }, [])),
                (C = i.useCallback(() => {
                    (b.Ay.trackWithMetadata(U.HAw.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: $.XT.CHANNEL_WELCOME,
                        action: $.AG.PERSONALIZE_SERVER,
                    }),
                        null != t && w.A.open(t.id, (0, H.x)(), { section: U.JJy.CHANNEL_WELCOME_CTA }));
                }, [t])),
                (x = i.useCallback(() => {
                    (b.Ay.trackWithMetadata(U.HAw.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: $.XT.CHANNEL_WELCOME,
                        action: $.AG.DOWNLOAD,
                    }),
                        (0, _.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("915082"), n.e("944602"), n.e("825280")]).then(
                                n.bind(n, 987482),
                            );
                            return (t) => (0, l.jsx)(e, { source: U.JJy.CHANNEL_WELCOME_CTA, ...t });
                        }));
                }, [])),
                {
                    handleInvite: A,
                    handleMessage: f,
                    handlePersonalize: C,
                    handleDownload: x,
                    handleAddApplication: i.useCallback(() => {
                        null != t &&
                            (b.Ay.trackWithMetadata(U.HAw.SERVER_SETUP_CTA_CLICKED, {
                                setup_type: $.XT.CHANNEL_WELCOME,
                                action: $.AG.ADD_APP,
                            }),
                            (0, _.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("851503"), n.e("566003")]).then(
                                    n.bind(n, 258942),
                                );
                                return (n) =>
                                    (0, l.jsx)(e, {
                                        guildId: t.id ?? "",
                                        ...n,
                                        analyticsType: I.M.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL,
                                    });
                            }));
                    }, [t]),
                    handleBoost: i.useCallback(() => {
                        (b.Ay.trackWithMetadata(U.HAw.SERVER_SETUP_CTA_CLICKED, {
                            setup_type: $.XT.CHANNEL_WELCOME,
                            action: $.AG.BOOST,
                        }),
                            null != t && (0, K.A)(t.id, j.A.GUILD_POWERUPS_CHANNEL_WELCOME_CTA));
                    }, [t]),
                }),
                [eo, ec] = i.useState([]),
                ed = eo.length > 0;
            i.useEffect(() => {
                (async () => {
                    try {
                        let e = await (0, F.c)(t?.id ?? U.dJq);
                        ec(e.map((e) => e.id));
                    } catch {}
                })();
            }, [t?.id]);
            let eu = !(Z || Y || X || Q || ee),
                eh = [];
            return (
                !E &&
                    (S &&
                        eh.push({
                            key: "invite",
                            iconUrl: "/assets/ea08bfae3e0ab96d.svg",
                            title: q.intl.string(q.t.q9n0Ta),
                            completed: Y,
                            onClick: en,
                        }),
                    N &&
                        eh.push({
                            key: "customize",
                            iconUrl: "/assets/428a003b3c729aa6.svg",
                            title: q.intl.string(q.t.c5kxPh),
                            completed: Q,
                            onClick: ei,
                        }),
                    J &&
                        eh.push({
                            key: "message",
                            iconUrl: "/assets/2ed198e767bd5423.svg",
                            title: q.intl.string(q.t["SoP7+l"]),
                            completed: X,
                            onClick: el,
                        }),
                    (0, W.isWeb)() &&
                        eh.push({
                            key: "download",
                            iconUrl: "/assets/eea7561d0cfcff41.svg",
                            title: q.intl.string(q.t.pGVNI9),
                            completed: Z,
                            onClick: es,
                        }),
                    eh.push({
                        key: "addapp",
                        iconUrl: y,
                        title: q.intl.string(q.t.IhHDEO),
                        completed: ed,
                        onClick: ea,
                    }),
                    et &&
                        eh.push({
                            key: "boost",
                            iconUrl:
                                "https://cdn.discordapp.com/assets/content/bc3217e772906510d881b75ebefea754b9c3ba903ddf6f994e46e5c5a85770a3.svg",
                            title: q.intl.string(q.t["6Qbqxw"]),
                            completed: ee,
                            onClick: er,
                        })),
                { steps: eh, shouldAnimate: eu, isOldGuild: E }
            );
        })(f, C),
        { titleAnimatedStyle: Y, opacities: X } =
            ((t = (0, u.A)(() => new r.A.Value(0))),
            (s = (0, u.A)(() => new r.A.Value(0))),
            (A = (0, u.A)(() => [
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
                        r.A.timing(s, { toValue: 1, duration: 450 }),
                        r.A.timing(t, { toValue: 1, duration: 450 }),
                    ]),
                    r.A.stagger(
                        100,
                        A.map((e) => r.A.timing(e, { toValue: 1, duration: 300 })),
                    ),
                ]).start();
            }, [s, t, A]),
            {
                titleAnimatedStyle: J
                    ? {
                          transform: [
                              { translateY: t.interpolate({ inputRange: [0, 1], outputRange: ["-20px", "0px"] }) },
                          ],
                          opacity: s,
                      }
                    : {},
                opacities: A,
            });
    if (null == C) return null;
    let Q = N.map((e, t) =>
            (0, l.jsx)(
                r.A.div,
                {
                    className: E.cW,
                    style: J ? { opacity: X[t] } : {},
                    children: (0, l.jsx)(S, {
                        iconUrl: e.iconUrl,
                        header: e.title,
                        completed: e.completed,
                        onClick: e.onClick,
                    }),
                },
                e.key,
            ),
        ),
        ee = x ? q.intl.string(q.t["1ach9C"]) : q.intl.string(q.t["ezm+/j"]);
    Z && (ee = q.intl.string(q.t["gwyU/J"]));
    let et = `${g.A.getArticleURL(U.MVz.GUILD_GETTING_STARTED)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm`;
    return (0, l.jsx)(p.Ay, {
        channelId: f.id,
        children: (0, l.jsx)("div", {
            className: E.kL,
            children: (0, l.jsxs)("div", {
                className: E.vW,
                children: [
                    (0, l.jsxs)(r.A.div, {
                        style: Y,
                        children: [
                            (0, l.jsx)(c.D, {
                                className: E.ud,
                                variant: "heading-xxl/medium",
                                children: q.intl.format(q.t.rkHVKf, { guildName: C.name }),
                            }),
                            (0, l.jsxs)(d.E, {
                                color: "text-default",
                                className: a()({ [E.VA]: !0, [E.lg]: 0 === Q.length }),
                                variant: "text-sm/normal",
                                children: [ee, " ", Q.length > 0 ? q.intl.format(q.t.UOtD32, { guideURL: et }) : null],
                            }),
                        ],
                    }),
                    Q,
                ],
            }),
        }),
    });
}
