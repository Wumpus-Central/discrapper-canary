n.d(t, {
    default: () => F,
});
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(442433),
    d = n(847767),
    s = n(358367),
    c = n(155718),
    u = n(468389),
    o = n(793574),
    A = n(810845),
    g = n(854182),
    p = n(734337),
    b = n(855187),
    f = n(479335),
    h = n(50268),
    O = n(346247),
    y = n(235052),
    j = n(222311),
    C = n(237749),
    E = n(734057),
    m = n(309010),
    x = n(803664),
    M = n(29293),
    N = n(497600),
    G = n(291247),
    P = n(773699),
    I = n(239211),
    v = n(707378),
    U = n(984894),
    _ = n(399476),
    S = n(889460),
    T = n(448290),
    R = n(301541),
    D = n(252726),
    V = n(313998),
    B = n(198229),
    L = n(243949),
    w = n(180798),
    X = n(972432),
    k = n(77544),
    H = n(652215),
    K = n(985018);
let F = (0, s.A)(
    (0, d.A)(
        function (e) {
            let {
                    user: t,
                    guildId: n,
                    channel: d,
                    showMediaItems: s = !1,
                    showChatItems: o = !0,
                    showChannelCallItems: F = !1,
                    showModalItems: J = !0,
                    showStageChannelItems: Q = !1,
                    context: W,
                    onSelect: Y,
                    onHeightUpdate: Z,
                    viewingChannelId: q,
                    onInteraction: $,
                } = e,
                z = d.id,
                ee = {
                    page: H.liQ.GUILD_CHANNEL,
                    section: H.JJy.CHAT_USERNAME,
                    object: H.ZSU.CONTEXT_MENU_ITEM,
                },
                et = (0, L.A)({
                    userId: t.id,
                    guildId: n,
                    channelId: z,
                    showGuildProfile: !0,
                }),
                en = (0, T.A)(t, n, W),
                el = (0, R.A)(t.id, W),
                ei = (0, k.A)(t.id),
                er = (0, v.A)({
                    user: t,
                    context: W,
                }),
                ea = (0, N.A)({
                    user: t,
                    guildId: n,
                    channelId: z,
                    context: W,
                }),
                ed = (0, M.A)({
                    user: t,
                }),
                es = (0, X.A)(t.id),
                ec = (0, B.A)(t.id),
                eu = (0, f.u)({
                    userId: t.id,
                    channelId: z,
                    guildId: d.getGuildId(),
                }),
                eo = (0, O.A)({
                    guildId: n,
                    userId: t.id,
                    analyticsLocation: ee,
                    context: W,
                }),
                eA = (0, S.A)({
                    user: t,
                    guildId: n,
                }),
                eg = (0, u.A)(null, t),
                ep = (0, x.A)({
                    user: t,
                }),
                eb = (0, I.A)({
                    user: t,
                    guildId: n,
                    channelId: z,
                    location: "GuildChannelUserContextMenu",
                }),
                ef = (0, _.A)({
                    user: t,
                    guildId: n,
                    channelId: z,
                    location: "GuildChannelUserContextMenu",
                }),
                eh = (0, G.A)(t, n, z),
                eO = (0, w.A)(t.id, n),
                ey = (0, D.A)(t, n),
                ej = (0, h.A)({
                    id: t.id,
                    label: K.intl.string(K.t["/AXYnE"]),
                }),
                eC = (0, U.A)(t.id, z),
                eE = (0, p.A)(t.id),
                em = (0, g.A)(z),
                ex = (0, j.A)(t),
                eM = (0, C.A)(t, n, z),
                eN = (0, A.A)(z, t.id),
                eG = (0, i.bG)([E.A], () => (null != q ? E.A.getChannel(q) : null)),
                eP = (0, P.A)({
                    commandType: c.kc.USER,
                    commandTargetId: t.id,
                    channel: null != eG ? eG : d,
                    guildId: n,
                    onHeightUpdate: Z,
                    context: W,
                }),
                eI = (0, b.A)(t.id),
                ev = (0, i.bG)([m.A], () => m.A.getVoiceChannelId()),
                eU = (0, V.A)(t, ev),
                e_ = (0, y.A)(t.id, d),
                eS = t.isNonUserBot();
            return (0, l.jsxs)(r.W1t, {
                "data-menu-mixed": !0,
                navId: "user-context",
                onClose: a.Z_,
                "aria-label": K.intl.string(K.t.liqwPJ),
                onSelect: Y,
                onInteraction: $,
                children: [
                    !eS &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)(r.rXV, {
                                    children: [ex, s && !Q && e_, Q && eM],
                                }),
                                (0, l.jsxs)(r.rXV, {
                                    children: [J && et, o && en, el, er, eU, J && ea, J && ed, ei],
                                }),
                                s &&
                                    (0, l.jsx)(r.rXV, {
                                        children: es,
                                    }),
                                (0, l.jsx)(r.rXV, {
                                    children: J && eg,
                                }),
                                (0, l.jsxs)(r.rXV, {
                                    children: [
                                        s && ec,
                                        s && eu,
                                        s && eC,
                                        J && eo,
                                        eP,
                                        J && eA,
                                        ep,
                                        J && ef,
                                        J && eb,
                                        F && eI,
                                    ],
                                }),
                                (0, l.jsx)(r.rXV, {
                                    children: eh,
                                }),
                                (0, l.jsxs)(r.rXV, {
                                    children: [eO, ey],
                                }),
                                F &&
                                    (0, l.jsxs)(r.rXV, {
                                        children: [eN, em, eE],
                                    }),
                            ],
                        }),
                    (0, l.jsx)(r.rXV, {
                        children: ej,
                    }),
                ],
            });
        },
        {
            object: H.ZSU.CONTEXT_MENU,
        },
    ),
    [o.A.CONTEXT_MENU, o.A.GUILD_CHANNEL_USER_MENU],
);
