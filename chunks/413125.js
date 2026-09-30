(a.d(t, { c: () => J }), a(321073));
var n = a(477900),
    i = a(582128),
    l = a(51906),
    s = a(17928),
    d = a(554146),
    r = a(192308),
    o = a(383669),
    u = a(793574),
    c = a(95561),
    A = a(578484),
    E = a(71165),
    p = a(435558),
    C = a.n(p),
    S = a(855687),
    _ = a(143413),
    g = a(280450),
    h = a(734057),
    y = a(808728),
    b = a(498642),
    N = a(71393),
    R = a(186111),
    f = a(232835),
    m = a(576705),
    L = a(935208),
    P = a(652215),
    G = a(468689),
    O = a(794967),
    I = a(595818),
    T = a(363487),
    M = a(828162),
    k = a(378570),
    w = a(309010),
    D = a(287809),
    U = a(625494),
    v = a(403362),
    W = a(723702),
    H = a(770934),
    V = a(936649),
    x = a(375708);
let B = new l.Zy();
function J(e, t) {
    var l;
    let p,
        J,
        K,
        j,
        q,
        z,
        X,
        F,
        Y,
        Z,
        Q = (0, H.j)(t?.id),
        {
            canInvite: $,
            canManageGuild: ee,
            canMessage: et,
        } = (0, s.cf)(
            [m.A],
            () => ({
                canInvite: (0, S.K)(m.A, t, e),
                canManageGuild: null != t && m.A.can(P.xBc.MANAGE_GUILD, t),
                canMessage: null != e && m.A.can(P.xBc.SEND_MESSAGES, e),
                canCreateChannel: null != t && m.A.can(P.xBc.MANAGE_CHANNELS, t),
            }),
            [t, e],
        ),
        ea = (0, s.bG)(
            [D.default],
            () => D.default.getCurrentUser()?.desktop === !0 || D.default.getCurrentUser()?.mobile === !0,
        ),
        {
            guildPopulated: en,
            guildMessaged: ei,
            guildPersonalized: el,
        } = {
            guildPopulated:
                ((p = (0, s.bG)([h.A], () => h.A.getChannel(t?.systemChannelId))),
                (J = (0, s.yK)([f.A], () => (null != p ? f.A.getMessages(p.id).toArray() : []))),
                (0, s.bG)(
                    [b.A],
                    () => {
                        let e = b.A.getMemberCount(t?.id) ?? 0,
                            a = J.some((e) => e.type === P.lAJ.USER_JOIN);
                        return e > 1 || a;
                    },
                    [t, J],
                )),
            guildMessaged:
                ((K = (0, s.bG)([h.A], () => (null != t ? h.A.getMutableBasicGuildChannelsForGuild(t.id) : null))),
                (l = i.useMemo(() => (null == K ? [] : C().values(K)), [K])),
                (j = (0, s.bG)([g.default], () => g.default.getId())),
                (0, s.bG)([f.A], () =>
                    C().some(l, (e) => {
                        let t = f.A.getMessages(e.id).toArray();
                        return C().some(t, (e) => e.author.id === j && !(0, _.A)(e));
                    }),
                )),
            guildPersonalized:
                ((q = (0, s.bG)([R.A], () => R.A.hasLayers())),
                (z = (0, s.bG)([N.A], () => N.A.getGuild(t?.id))),
                z?.icon != null && !q),
            guildChannelCreated: (0, s.bG)(
                [y.Ay],
                () => {
                    let e = y.Ay.getChannels(t?.id),
                        a = e[y.vM];
                    function n(e) {
                        return (
                            null != t &&
                            L.default.extractTimestamp(e.channel.id) - L.default.extractTimestamp(t.id) > 500
                        );
                    }
                    return e[y.I6].some(n) || a.some(n);
                },
                [t],
            ),
        },
        es = (t?.premiumSubscriberCount ?? 0) > 0,
        ed = !0 === (0, T.A)(t?.id),
        er = (0, E.A)(t?.id),
        { boostBeforeAddApp: eo } = (0, A.D)(`useWelcomeAreaSteps${er ? "" : "-DISABLED"}`),
        {
            handleInvite: eu,
            handleMessage: ec,
            handlePersonalize: eA,
            handleDownload: eE,
            handleAddApplication: ep,
            handleBoost: eC,
        } = ((X = i.useCallback(() => {
            (c.Ay.trackWithMetadata(P.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: V.XT.CHANNEL_WELCOME,
                action: V.AG.INVITE,
            }),
                null != t &&
                    (0, r.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            a.e("683621"),
                            a.e("711162"),
                            a.e("159957"),
                            a.e("728136"),
                            a.e("216084"),
                            a.e("284819"),
                        ]).then(a.bind(a, 405342));
                        return (a) =>
                            (0, n.jsx)(e, {
                                ...a,
                                guild: t,
                                source: P.PE1.CHANNEL_WELCOME,
                                analyticsLocation: { section: P.JJy.CHANNEL_WELCOME_CTA },
                            });
                    }));
        }, [t])),
        (F = i.useCallback(() => {
            (c.Ay.trackWithMetadata(P.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: V.XT.CHANNEL_WELCOME,
                action: V.AG.SEND_MESSAGE,
            }),
                null != e &&
                    (w.Ay.getChannelId(t?.id) === e.id
                        ? U._.dispatch(P.jej.TEXTAREA_FOCUS, { highlight: !0, channelId: e.id })
                        : (0, k.iN)(e.id)));
        }, [t?.id, e])),
        (Y = i.useCallback(() => {
            (c.Ay.trackWithMetadata(P.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: V.XT.CHANNEL_WELCOME,
                action: V.AG.PERSONALIZE_SERVER,
            }),
                null != t && G.default.open(t.id, (0, I.x)(), { section: P.JJy.CHANNEL_WELCOME_CTA }));
        }, [t])),
        (Z = i.useCallback(() => {
            (c.Ay.trackWithMetadata(P.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: V.XT.CHANNEL_WELCOME,
                action: V.AG.DOWNLOAD,
            }),
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([a.e("915082"), a.e("944602"), a.e("825280")]).then(
                        a.bind(a, 987482),
                    );
                    return (t) => (0, n.jsx)(e, { source: P.JJy.CHANNEL_WELCOME_CTA, ...t });
                }));
        }, [])),
        {
            handleInvite: X,
            handleMessage: F,
            handlePersonalize: Y,
            handleDownload: Z,
            handleAddApplication: i.useCallback(() => {
                null != t &&
                    (c.Ay.trackWithMetadata(P.HAw.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: V.XT.CHANNEL_WELCOME,
                        action: V.AG.ADD_APP,
                    }),
                    (0, r.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([a.e("851503"), a.e("566003")]).then(a.bind(a, 258942));
                        return (a) =>
                            (0, n.jsx)(e, {
                                guildId: t.id ?? "",
                                ...a,
                                analyticsType: d.M.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL,
                            });
                    }));
            }, [t]),
            handleBoost: i.useCallback(() => {
                (c.Ay.trackWithMetadata(P.HAw.SERVER_SETUP_CTA_CLICKED, {
                    setup_type: V.XT.CHANNEL_WELCOME,
                    action: V.AG.BOOST,
                }),
                    null != t && (0, M.A)(t.id, u.A.GUILD_POWERUPS_CHANNEL_WELCOME_CTA));
            }, [t]),
        }),
        [eS, e_] = i.useState({ guildId: P.dJq, applicationIds: [] }),
        eg = t?.id ?? P.dJq,
        eh = eS.guildId === eg && eS.applicationIds.length > 0;
    i.useEffect(() => {
        if (!ee) return;
        let e = !0;
        return (
            B.one(eg, () => (0, O.c)(eg))
                .then((t) => {
                    e && e_({ guildId: eg, applicationIds: t.map((e) => e.id) });
                })
                .catch(() => {}),
            () => {
                e = !1;
            }
        );
    }, [eg, ee]);
    let ey = !(ea || en || ei || el || es),
        eb = [];
    if (!Q) {
        ($ &&
            eb.push({
                key: "invite",
                iconUrl: "/assets/ea08bfae3e0ab96d.svg",
                title: x.intl.string(x.t.q9n0Ta),
                completed: en,
                onClick: eu,
            }),
            ee &&
                eb.push({
                    key: "customize",
                    iconUrl: "/assets/428a003b3c729aa6.svg",
                    title: x.intl.string(x.t.c5kxPh),
                    completed: el,
                    onClick: eA,
                }),
            et &&
                eb.push({
                    key: "message",
                    iconUrl: "/assets/2ed198e767bd5423.svg",
                    title: x.intl.string(x.t["SoP7+l"]),
                    completed: ei,
                    onClick: ec,
                }),
            (0, W.isWeb)() &&
                eb.push({
                    key: "download",
                    iconUrl: "/assets/eea7561d0cfcff41.svg",
                    title: x.intl.string(x.t.pGVNI9),
                    completed: ea,
                    onClick: eE,
                }));
        let e = ee ? { key: "addapp", iconUrl: o, title: x.intl.string(x.t.IhHDEO), completed: eh, onClick: ep } : null,
            t = ed
                ? {
                      key: "boost",
                      iconUrl:
                          "https://cdn.discordapp.com/assets/content/bc3217e772906510d881b75ebefea754b9c3ba903ddf6f994e46e5c5a85770a3.svg",
                      title: x.intl.string(x.t["6Qbqxw"]),
                      completed: es,
                      onClick: eC,
                  }
                : null;
        eb.push(...(er && eo ? [t, e] : [e, t]).filter(v.Vq));
    }
    return { steps: eb, shouldAnimate: ey, isOldGuild: Q };
}
