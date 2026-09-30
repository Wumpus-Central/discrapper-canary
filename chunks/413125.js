(a.d(t, { c: () => x }), a(321073));
var l = a(477900),
    n = a(582128),
    i = a(51906),
    s = a(17928),
    d = a(554146),
    c = a(192308),
    u = a(383669),
    A = a(793574),
    E = a(95561),
    o = a(435558),
    r = a.n(o),
    C = a(855687),
    p = a(143413),
    _ = a(280450),
    h = a(734057),
    L = a(808728),
    y = a(498642),
    g = a(71393),
    b = a(186111),
    M = a(232835),
    N = a(576705),
    T = a(935208),
    S = a(652215),
    k = a(468689),
    m = a(794967),
    I = a(595818),
    f = a(363487),
    G = a(828162),
    O = a(378570),
    P = a(309010),
    R = a(287809),
    U = a(625494),
    W = a(723702),
    H = a(770934),
    D = a(936649),
    w = a(375708);
let v = new i.Zy();
function x(e, t) {
    var i;
    let o,
        x,
        J,
        V,
        K,
        j,
        X,
        B,
        z,
        q,
        F = (0, H.j)(t?.id),
        {
            canInvite: Z,
            canManageGuild: Q,
            canMessage: Y,
        } = (0, s.cf)(
            [N.A],
            () => ({
                canInvite: (0, C.K)(N.A, t, e),
                canManageGuild: null != t && N.A.can(S.xBc.MANAGE_GUILD, t),
                canMessage: null != e && N.A.can(S.xBc.SEND_MESSAGES, e),
                canCreateChannel: null != t && N.A.can(S.xBc.MANAGE_CHANNELS, t),
            }),
            [t, e],
        ),
        $ = (0, s.bG)(
            [R.default],
            () => R.default.getCurrentUser()?.desktop === !0 || R.default.getCurrentUser()?.mobile === !0,
        ),
        {
            guildPopulated: ee,
            guildMessaged: et,
            guildPersonalized: ea,
        } = {
            guildPopulated:
                ((o = (0, s.bG)([h.A], () => h.A.getChannel(t?.systemChannelId))),
                (x = (0, s.yK)([M.A], () => (null != o ? M.A.getMessages(o.id).toArray() : []))),
                (0, s.bG)(
                    [y.A],
                    () => {
                        let e = y.A.getMemberCount(t?.id) ?? 0,
                            a = x.some((e) => e.type === S.lAJ.USER_JOIN);
                        return e > 1 || a;
                    },
                    [t, x],
                )),
            guildMessaged:
                ((J = (0, s.bG)([h.A], () => (null != t ? h.A.getMutableBasicGuildChannelsForGuild(t.id) : null))),
                (i = n.useMemo(() => (null == J ? [] : r().values(J)), [J])),
                (V = (0, s.bG)([_.default], () => _.default.getId())),
                (0, s.bG)([M.A], () =>
                    r().some(i, (e) => {
                        let t = M.A.getMessages(e.id).toArray();
                        return r().some(t, (e) => e.author.id === V && !(0, p.A)(e));
                    }),
                )),
            guildPersonalized:
                ((K = (0, s.bG)([b.A], () => b.A.hasLayers())),
                (j = (0, s.bG)([g.A], () => g.A.getGuild(t?.id))),
                j?.icon != null && !K),
            guildChannelCreated: (0, s.bG)(
                [L.Ay],
                () => {
                    let e = L.Ay.getChannels(t?.id),
                        a = e[L.vM];
                    function l(e) {
                        return (
                            null != t &&
                            T.default.extractTimestamp(e.channel.id) - T.default.extractTimestamp(t.id) > 500
                        );
                    }
                    return e[L.I6].some(l) || a.some(l);
                },
                [t],
            ),
        },
        el = (t?.premiumSubscriberCount ?? 0) > 0,
        en = !0 === (0, f.A)(t?.id),
        {
            handleInvite: ei,
            handleMessage: es,
            handlePersonalize: ed,
            handleDownload: ec,
            handleAddApplication: eu,
            handleBoost: eA,
        } = ((X = n.useCallback(() => {
            (E.Ay.trackWithMetadata(S.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: D.XT.CHANNEL_WELCOME,
                action: D.AG.INVITE,
            }),
                null != t &&
                    (0, c.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            a.e("683621"),
                            a.e("711162"),
                            a.e("159957"),
                            a.e("728136"),
                            a.e("216084"),
                            a.e("284819"),
                        ]).then(a.bind(a, 405342));
                        return (a) =>
                            (0, l.jsx)(e, {
                                ...a,
                                guild: t,
                                source: S.PE1.CHANNEL_WELCOME,
                                analyticsLocation: { section: S.JJy.CHANNEL_WELCOME_CTA },
                            });
                    }));
        }, [t])),
        (B = n.useCallback(() => {
            (E.Ay.trackWithMetadata(S.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: D.XT.CHANNEL_WELCOME,
                action: D.AG.SEND_MESSAGE,
            }),
                null != e &&
                    (P.Ay.getChannelId(t?.id) === e.id
                        ? U._.dispatch(S.jej.TEXTAREA_FOCUS, { highlight: !0, channelId: e.id })
                        : (0, O.iN)(e.id)));
        }, [t?.id, e])),
        (z = n.useCallback(() => {
            (E.Ay.trackWithMetadata(S.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: D.XT.CHANNEL_WELCOME,
                action: D.AG.PERSONALIZE_SERVER,
            }),
                null != t && k.default.open(t.id, (0, I.x)(), { section: S.JJy.CHANNEL_WELCOME_CTA }));
        }, [t])),
        (q = n.useCallback(() => {
            (E.Ay.trackWithMetadata(S.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: D.XT.CHANNEL_WELCOME,
                action: D.AG.DOWNLOAD,
            }),
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([a.e("915082"), a.e("944602"), a.e("825280")]).then(
                        a.bind(a, 987482),
                    );
                    return (t) => (0, l.jsx)(e, { source: S.JJy.CHANNEL_WELCOME_CTA, ...t });
                }));
        }, [])),
        {
            handleInvite: X,
            handleMessage: B,
            handlePersonalize: z,
            handleDownload: q,
            handleAddApplication: n.useCallback(() => {
                null != t &&
                    (E.Ay.trackWithMetadata(S.HAw.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: D.XT.CHANNEL_WELCOME,
                        action: D.AG.ADD_APP,
                    }),
                    (0, c.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([a.e("851503"), a.e("566003")]).then(a.bind(a, 258942));
                        return (a) =>
                            (0, l.jsx)(e, {
                                guildId: t.id ?? "",
                                ...a,
                                analyticsType: d.M.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL,
                            });
                    }));
            }, [t]),
            handleBoost: n.useCallback(() => {
                (E.Ay.trackWithMetadata(S.HAw.SERVER_SETUP_CTA_CLICKED, {
                    setup_type: D.XT.CHANNEL_WELCOME,
                    action: D.AG.BOOST,
                }),
                    null != t && (0, G.A)(t.id, A.A.GUILD_POWERUPS_CHANNEL_WELCOME_CTA));
            }, [t]),
        }),
        [eE, eo] = n.useState({ guildId: S.dJq, applicationIds: [] }),
        er = t?.id ?? S.dJq,
        eC = eE.guildId === er && eE.applicationIds.length > 0;
    n.useEffect(() => {
        if (!Q) return;
        let e = !0;
        return (
            v
                .one(er, () => (0, m.c)(er))
                .then((t) => {
                    e && eo({ guildId: er, applicationIds: t.map((e) => e.id) });
                })
                .catch(() => {}),
            () => {
                e = !1;
            }
        );
    }, [er, Q]);
    let ep = !($ || ee || et || ea || el),
        e_ = [];
    return (
        !F &&
            (Z &&
                e_.push({
                    key: "invite",
                    iconUrl: "/assets/ea08bfae3e0ab96d.svg",
                    title: w.intl.string(w.t.q9n0Ta),
                    completed: ee,
                    onClick: ei,
                }),
            Q &&
                e_.push({
                    key: "customize",
                    iconUrl: "/assets/428a003b3c729aa6.svg",
                    title: w.intl.string(w.t.c5kxPh),
                    completed: ea,
                    onClick: ed,
                }),
            Y &&
                e_.push({
                    key: "message",
                    iconUrl: "/assets/2ed198e767bd5423.svg",
                    title: w.intl.string(w.t["SoP7+l"]),
                    completed: et,
                    onClick: es,
                }),
            (0, W.isWeb)() &&
                e_.push({
                    key: "download",
                    iconUrl: "/assets/eea7561d0cfcff41.svg",
                    title: w.intl.string(w.t.pGVNI9),
                    completed: $,
                    onClick: ec,
                }),
            Q && e_.push({ key: "addapp", iconUrl: u, title: w.intl.string(w.t.IhHDEO), completed: eC, onClick: eu }),
            en &&
                e_.push({
                    key: "boost",
                    iconUrl:
                        "https://cdn.discordapp.com/assets/content/bc3217e772906510d881b75ebefea754b9c3ba903ddf6f994e46e5c5a85770a3.svg",
                    title: w.intl.string(w.t["6Qbqxw"]),
                    completed: el,
                    onClick: eA,
                })),
        { steps: e_, shouldAnimate: ep, isOldGuild: F }
    );
}
