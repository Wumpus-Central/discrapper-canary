n.d(t, { E: () => S, A: () => ee });
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
var I = n(51906),
    y = n(554146),
    _ = n(192308),
    j = n(383669),
    v = n(793574),
    b = n(666860),
    N = n(435558),
    T = n.n(N),
    M = n(855687),
    R = n(143413),
    D = n(734057),
    k = n(808728),
    L = n(498642),
    P = n(186111),
    O = n(232835),
    G = n(576705),
    U = n(935208),
    w = n(652215),
    F = n(468689),
    H = n(794967),
    B = n(595818),
    K = n(363487),
    V = n(828162),
    z = n(378570),
    W = n(309010),
    q = n(287809),
    $ = n(625494),
    J = n(403362),
    Z = n(723702),
    Y = n(936649),
    X = n(105292);
let Q = new I.Zy();
function ee(e) {
    let t,
        s,
        A,
        { channel: f } = e,
        C = (0, o.bG)([m.A], () => (null != f ? m.A.getGuild(f.getGuildId()) : null), [f]),
        x = (0, o.bG)([h.default], () => C?.ownerId === h.default.getId(), [C]),
        {
            steps: I,
            shouldAnimate: N,
            isOldGuild: ee,
        } = (function (e, t) {
            var s;
            let a,
                r,
                c,
                d,
                u,
                g,
                p,
                A,
                f,
                C,
                x = (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w.NOr;
                    return null != e && U.default.extractTimestamp(e) < Date.now() - t;
                })(t?.id),
                {
                    canInvite: E,
                    canManageGuild: S,
                    canMessage: I,
                } = (0, o.cf)(
                    [G.A],
                    () => ({
                        canInvite: (0, M.K)(G.A, t, e),
                        canManageGuild: null != t && G.A.can(w.xBc.MANAGE_GUILD, t),
                        canMessage: null != e && G.A.can(w.xBc.SEND_MESSAGES, e),
                        canCreateChannel: null != t && G.A.can(w.xBc.MANAGE_CHANNELS, t),
                    }),
                    [t, e],
                ),
                N = (0, o.bG)(
                    [q.default],
                    () => q.default.getCurrentUser()?.desktop === !0 || q.default.getCurrentUser()?.mobile === !0,
                ),
                {
                    guildPopulated: ee,
                    guildMessaged: et,
                    guildPersonalized: en,
                } = {
                    guildPopulated:
                        ((a = (0, o.bG)([D.A], () => D.A.getChannel(t?.systemChannelId))),
                        (r = (0, o.yK)([O.A], () => (null != a ? O.A.getMessages(a.id).toArray() : []))),
                        (0, o.bG)(
                            [L.A],
                            () => {
                                let e = L.A.getMemberCount(t?.id) ?? 0,
                                    n = r.some((e) => e.type === w.lAJ.USER_JOIN);
                                return e > 1 || n;
                            },
                            [t, r],
                        )),
                    guildMessaged:
                        ((c = (0, o.bG)([D.A], () =>
                            null != t ? D.A.getMutableBasicGuildChannelsForGuild(t.id) : null,
                        )),
                        (s = i.useMemo(() => (null == c ? [] : T().values(c)), [c])),
                        (d = (0, o.bG)([h.default], () => h.default.getId())),
                        (0, o.bG)([O.A], () =>
                            T().some(s, (e) => {
                                let t = O.A.getMessages(e.id).toArray();
                                return T().some(t, (e) => e.author.id === d && !(0, R.A)(e));
                            }),
                        )),
                    guildPersonalized:
                        ((u = (0, o.bG)([P.A], () => P.A.hasLayers())),
                        (g = (0, o.bG)([m.A], () => m.A.getGuild(t?.id))),
                        g?.icon != null && !u),
                    guildChannelCreated: (0, o.bG)(
                        [k.Ay],
                        () => {
                            let e = k.Ay.getChannels(t?.id),
                                n = e[k.vM];
                            function l(e) {
                                return (
                                    null != t &&
                                    U.default.extractTimestamp(e.channel.id) - U.default.extractTimestamp(t.id) > 500
                                );
                            }
                            return e[k.I6].some(l) || n.some(l);
                        },
                        [t],
                    ),
                },
                el = (t?.premiumSubscriberCount ?? 0) > 0,
                ei = !0 === (0, K.A)(t?.id),
                {
                    handleInvite: es,
                    handleMessage: ea,
                    handlePersonalize: er,
                    handleDownload: eo,
                    handleAddApplication: ec,
                    handleBoost: ed,
                } = ((p = i.useCallback(() => {
                    (b.Ay.trackWithMetadata(w.HAw.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: Y.XT.CHANNEL_WELCOME,
                        action: Y.AG.INVITE,
                    }),
                        null != t &&
                            (0, _.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([
                                    n.e("683621"),
                                    n.e("711162"),
                                    n.e("919170"),
                                    n.e("159957"),
                                    n.e("728136"),
                                    n.e("216084"),
                                    n.e("284819"),
                                ]).then(n.bind(n, 405342));
                                return (n) =>
                                    (0, l.jsx)(e, {
                                        ...n,
                                        guild: t,
                                        source: w.PE1.CHANNEL_WELCOME,
                                        analyticsLocation: { section: w.JJy.CHANNEL_WELCOME_CTA },
                                    });
                            }));
                }, [t])),
                (A = i.useCallback(() => {
                    (b.Ay.trackWithMetadata(w.HAw.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: Y.XT.CHANNEL_WELCOME,
                        action: Y.AG.SEND_MESSAGE,
                    }),
                        null != e &&
                            (W.Ay.getChannelId(t?.id) === e.id
                                ? $._.dispatch(w.jej.TEXTAREA_FOCUS, { highlight: !0, channelId: e.id })
                                : (0, z.iN)(e.id)));
                }, [t?.id, e])),
                (f = i.useCallback(() => {
                    (b.Ay.trackWithMetadata(w.HAw.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: Y.XT.CHANNEL_WELCOME,
                        action: Y.AG.PERSONALIZE_SERVER,
                    }),
                        null != t && F.A.open(t.id, (0, B.x)(), { section: w.JJy.CHANNEL_WELCOME_CTA }));
                }, [t])),
                (C = i.useCallback(() => {
                    (b.Ay.trackWithMetadata(w.HAw.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: Y.XT.CHANNEL_WELCOME,
                        action: Y.AG.DOWNLOAD,
                    }),
                        (0, _.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("569433"), n.e("944602"), n.e("825280")]).then(
                                n.bind(n, 987482),
                            );
                            return (t) => (0, l.jsx)(e, { source: w.JJy.CHANNEL_WELCOME_CTA, ...t });
                        }));
                }, [])),
                {
                    handleInvite: p,
                    handleMessage: A,
                    handlePersonalize: f,
                    handleDownload: C,
                    handleAddApplication: i.useCallback(() => {
                        null != t &&
                            (b.Ay.trackWithMetadata(w.HAw.SERVER_SETUP_CTA_CLICKED, {
                                setup_type: Y.XT.CHANNEL_WELCOME,
                                action: Y.AG.ADD_APP,
                            }),
                            (0, _.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([
                                    n.e("851503"),
                                    n.e("843160"),
                                    n.e("48336"),
                                ]).then(n.bind(n, 205715));
                                return (n) =>
                                    (0, l.jsx)(e, {
                                        guildId: t.id ?? "",
                                        ...n,
                                        analyticsType: y.M.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL,
                                    });
                            }));
                    }, [t]),
                    handleBoost: i.useCallback(() => {
                        (b.Ay.trackWithMetadata(w.HAw.SERVER_SETUP_CTA_CLICKED, {
                            setup_type: Y.XT.CHANNEL_WELCOME,
                            action: Y.AG.BOOST,
                        }),
                            null != t && (0, V.A)(t.id, v.A.GUILD_POWERUPS_CHANNEL_WELCOME_CTA));
                    }, [t]),
                }),
                [eu, eh] = i.useState({ guildId: w.dJq, applicationIds: [] }),
                em = t?.id ?? w.dJq,
                eg = eu.guildId === em && eu.applicationIds.length > 0;
            i.useEffect(() => {
                if (!S) return;
                let e = !0;
                return (
                    Q.one(em, () => (0, H.c)(em))
                        .then((t) => {
                            e && eh({ guildId: em, applicationIds: t.map((e) => e.id) });
                        })
                        .catch(() => {}),
                    () => {
                        e = !1;
                    }
                );
            }, [em, S]);
            let ep = !(N || ee || et || en || el),
                eA = [];
            if (!x) {
                (E &&
                    eA.push({
                        key: "invite",
                        iconUrl: "/assets/ea08bfae3e0ab96d.svg",
                        title: X.intl.string(X.t.q9n0Ta),
                        completed: ee,
                        onClick: es,
                    }),
                    S &&
                        eA.push({
                            key: "customize",
                            iconUrl: "/assets/428a003b3c729aa6.svg",
                            title: X.intl.string(X.t.c5kxPh),
                            completed: en,
                            onClick: er,
                        }),
                    I &&
                        eA.push({
                            key: "message",
                            iconUrl: "/assets/2ed198e767bd5423.svg",
                            title: X.intl.string(X.t["SoP7+l"]),
                            completed: et,
                            onClick: ea,
                        }),
                    (0, Z.isWeb)() &&
                        eA.push({
                            key: "download",
                            iconUrl: "/assets/eea7561d0cfcff41.svg",
                            title: X.intl.string(X.t.pGVNI9),
                            completed: N,
                            onClick: eo,
                        }));
                let e = S
                        ? { key: "addapp", iconUrl: j, title: X.intl.string(X.t.IhHDEO), completed: eg, onClick: ec }
                        : null,
                    t = ei
                        ? {
                              key: "boost",
                              iconUrl:
                                  "https://cdn.discordapp.com/assets/content/bc3217e772906510d881b75ebefea754b9c3ba903ddf6f994e46e5c5a85770a3.svg",
                              title: X.intl.string(X.t["6Qbqxw"]),
                              completed: el,
                              onClick: ed,
                          }
                        : null;
                eA.push(...[e, t].filter(J.Vq));
            }
            return { steps: eA, shouldAnimate: ep, isOldGuild: x };
        })(f, C),
        { titleAnimatedStyle: et, opacities: en } =
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
                titleAnimatedStyle: N
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
    let el = I.map((e, t) =>
            (0, l.jsx)(
                r.A.div,
                {
                    className: E.cW,
                    style: N ? { opacity: en[t] } : {},
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
        ei = x ? X.intl.string(X.t["1ach9C"]) : X.intl.string(X.t["ezm+/j"]);
    ee && (ei = X.intl.string(X.t["gwyU/J"]));
    let es = `${g.A.getArticleURL(w.MVz.GUILD_GETTING_STARTED)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm`;
    return (0, l.jsx)(p.Ay, {
        channelId: f.id,
        children: (0, l.jsx)("div", {
            className: E.kL,
            children: (0, l.jsxs)("div", {
                className: E.vW,
                children: [
                    (0, l.jsxs)(r.A.div, {
                        style: et,
                        children: [
                            (0, l.jsx)(c.D, {
                                className: E.ud,
                                variant: "heading-xxl/medium",
                                children: X.intl.format(X.t.rkHVKf, { guildName: C.name }),
                            }),
                            (0, l.jsxs)(d.E, {
                                color: "text-default",
                                className: a()({ [E.VA]: !0, [E.lg]: 0 === el.length }),
                                variant: "text-sm/normal",
                                children: [ei, " ", el.length > 0 ? X.intl.format(X.t.UOtD32, { guideURL: es }) : null],
                            }),
                        ],
                    }),
                    el,
                ],
            }),
        }),
    });
}
