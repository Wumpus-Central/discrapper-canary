l.d(t, {
    default: () => Y,
});
var n = l(627968);
l(64700);
var i = l(311907),
    r = l(397927),
    a = l(442433),
    d = l(847767),
    s = l(358367),
    c = l(155718),
    o = l(468389),
    u = l(793574),
    A = l(810845),
    g = l(854182),
    p = l(734337),
    b = l(855187),
    h = l(479335),
    f = l(50268),
    O = l(346247),
    j = l(235052),
    m = l(222311),
    y = l(237749),
    C = l(734057),
    E = l(309010),
    x = l(803664),
    N = l(29293),
    M = l(497600),
    G = l(291247),
    I = l(773699),
    P = l(239211),
    v = l(707378),
    U = l(984894),
    S = l(399476),
    _ = l(889460),
    T = l(448290),
    R = l(301541),
    D = l(252726),
    V = l(313998),
    B = l(198229),
    L = l(243949),
    k = l(180798),
    w = l(972432),
    X = l(77544),
    H = l(652215),
    K = l(985018);
let Y = (0, s.A)(
    (0, d.A)(
        function (e) {
            let {
                    user: t,
                    guildId: l,
                    channel: d,
                    showMediaItems: s = !1,
                    showChatItems: u = !0,
                    showChannelCallItems: Y = !1,
                    showModalItems: F = !0,
                    showStageChannelItems: J = !1,
                    context: W,
                    onSelect: Q,
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
                    guildId: l,
                    channelId: z,
                    showGuildProfile: !0,
                }),
                el = (0, T.A)(t, l, W),
                en = (0, R.A)(t.id, W),
                ei = (0, X.A)(t.id),
                er = (0, v.A)({
                    user: t,
                    context: W,
                }),
                ea = (0, M.A)({
                    user: t,
                    guildId: l,
                    channelId: z,
                    context: W,
                }),
                ed = (0, N.A)({
                    user: t,
                }),
                es = (0, w.A)(t.id),
                ec = (0, B.A)(t.id),
                eo = (0, h.u)({
                    userId: t.id,
                    channelId: z,
                    guildId: d.getGuildId(),
                }),
                eu = (0, O.A)({
                    guildId: l,
                    userId: t.id,
                    analyticsLocation: ee,
                    context: W,
                }),
                eA = (0, _.A)({
                    user: t,
                    guildId: l,
                }),
                eg = (0, o.A)(null, t),
                ep = (0, x.A)({
                    user: t,
                }),
                eb = (0, P.A)({
                    user: t,
                    guildId: l,
                    channelId: z,
                    location: "GuildChannelUserContextMenu",
                }),
                eh = (0, S.A)({
                    user: t,
                    guildId: l,
                    channelId: z,
                    location: "GuildChannelUserContextMenu",
                }),
                ef = (0, G.A)(t, l, z),
                eO = (0, k.A)(t.id, l),
                ej = (0, D.A)(t, l),
                em = (0, f.A)({
                    id: t.id,
                    label: K.intl.string(K.t["/AXYnE"]),
                }),
                ey = (0, U.A)(t.id, z),
                eC = (0, p.A)(t.id),
                eE = (0, g.A)(z),
                ex = (0, m.A)(t),
                eN = (0, y.A)(t, l, z),
                eM = (0, A.A)(z, t.id),
                eG = (0, i.bG)([C.A], () => (null != q ? C.A.getChannel(q) : null)),
                eI = (0, I.A)({
                    commandType: c.kc.USER,
                    commandTargetId: t.id,
                    channel: null != eG ? eG : d,
                    guildId: l,
                    onHeightUpdate: Z,
                    context: W,
                }),
                eP = (0, b.A)(t.id),
                ev = (0, i.bG)([E.A], () => E.A.getVoiceChannelId()),
                eU = (0, V.A)(t, ev),
                eS = (0, j.A)(t.id, d),
                e_ = t.isNonUserBot();
            return (0, n.jsxs)(r.W1t, {
                navId: "user-context",
                onClose: a.Z_,
                "aria-label": K.intl.string(K.t.liqwPJ),
                onSelect: Q,
                onInteraction: $,
                children: [
                    !e_ &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsxs)(r.rXV, {
                                    children: [ex, s && !J && eS, J && eN],
                                }),
                                (0, n.jsxs)(r.rXV, {
                                    children: [F && et, u && el, en, er, eU, F && ea, F && ed, ei],
                                }),
                                s &&
                                    (0, n.jsx)(r.rXV, {
                                        children: es,
                                    }),
                                (0, n.jsx)(r.rXV, {
                                    children: F && eg,
                                }),
                                (0, n.jsxs)(r.rXV, {
                                    children: [
                                        s && ec,
                                        s && eo,
                                        s && ey,
                                        F && eu,
                                        eI,
                                        F && eA,
                                        ep,
                                        F && eh,
                                        F && eb,
                                        Y && eP,
                                    ],
                                }),
                                (0, n.jsx)(r.rXV, {
                                    children: ef,
                                }),
                                (0, n.jsxs)(r.rXV, {
                                    children: [eO, ej],
                                }),
                                Y &&
                                    (0, n.jsxs)(r.rXV, {
                                        children: [eM, eE, eC],
                                    }),
                            ],
                        }),
                    (0, n.jsx)(r.rXV, {
                        children: em,
                    }),
                ],
            });
        },
        {
            object: H.ZSU.CONTEXT_MENU,
        },
    ),
    [u.A.CONTEXT_MENU, u.A.GUILD_CHANNEL_USER_MENU],
);
