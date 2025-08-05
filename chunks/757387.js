n.d(l, { default: () => V });
var t = n(255367);
n(73800);
var r = n(442837),
    i = n(481060),
    d = n(239091),
    s = n(883385),
    o = n(108843),
    a = n(911969),
    c = n(947440),
    u = n(100527),
    Z = n(441061),
    g = n(167675),
    h = n(737013),
    f = n(607783),
    b = n(299206),
    j = n(976192),
    O = n(882188),
    p = n(819403),
    E = n(286694),
    P = n(592125),
    N = n(944486),
    C = n(777658),
    m = n(858488),
    S = n(185457),
    x = n(933409),
    M = n(570870),
    y = n(389052),
    v = n(24311),
    I = n(332576),
    _ = n(158508),
    k = n(710631),
    A = n(297047),
    U = n(88966),
    R = n(712301),
    T = n(558924),
    q = n(991307),
    G = n(37258),
    w = n(931617),
    L = n(700994),
    D = n(332031),
    Q = n(981631),
    H = n(388032);
let V = (0, o.Z)(
    (0, s.Z)(
        function (e) {
            let { user: l, guildId: n, channel: s, showMediaItems: o = !1, showChatItems: u = !0, showChannelCallItems: V = !1, showModalItems: B = !0, showStageChannelItems: F = !1, context: X, onSelect: Y, onHeightUpdate: K, viewingChannelId: W, onInteraction: J } = e,
                $ = s.id,
                z = {
                    page: Q.ZY5.GUILD_CHANNEL,
                    section: Q.jXE.CHAT_USERNAME,
                    object: Q.qAy.CONTEXT_MENU_ITEM
                },
                ee = (0, G.Z)({
                    userId: l.id,
                    guildId: n,
                    channelId: $,
                    showGuildProfile: !0
                }),
                el = (0, A.Z)(l, n, X),
                en = (0, U.Z)(l.id, X),
                et = (0, D.Z)(l.id),
                er = (0, v.Z)({
                    user: l,
                    context: X
                }),
                ei = (0, S.Z)({
                    user: l,
                    guildId: n,
                    channelId: $,
                    context: X
                }),
                ed = (0, m.Z)({ user: l }),
                es = (0, L.Z)(l.id),
                eo = (0, q.Z)(l.id),
                ea = (0, f.B)({
                    userId: l.id,
                    channelId: $,
                    guildId: s.getGuildId()
                }),
                ec = (0, j.Z)({
                    guildId: n,
                    userId: l.id,
                    analyticsLocation: z,
                    context: X
                }),
                eu = (0, k.Z)({
                    user: l,
                    guildId: n
                }),
                eZ = (0, c.Z)(null, l),
                eg = (0, C.Z)({ user: l }),
                eh = (0, y.Z)({
                    user: l,
                    guildId: n,
                    channelId: $,
                    location: 'GuildChannelUserContextMenu'
                }),
                ef = (0, _.Z)({
                    user: l,
                    guildId: n,
                    channelId: $,
                    location: 'GuildChannelUserContextMenu'
                }),
                eb = (0, x.Z)(l, n, $),
                ej = (0, w.Z)(l.id, n),
                eO = (0, R.Z)(l, n),
                ep = (0, b.Z)({
                    id: l.id,
                    label: H.intl.string(H.t['/AXYnJ'])
                }),
                eE = (0, I.Z)(l.id, $),
                eP = (0, g.Z)(l.id),
                eN = (0, Z.Z)($),
                eC = (0, p.Z)(l),
                em = (0, E.Z)(l, n, $),
                eS = (0, r.e7)([P.Z], () => (null != W ? P.Z.getChannel(W) : null)),
                ex = (0, M.Z)({
                    commandType: a.yU.USER,
                    commandTargetId: l.id,
                    channel: null != eS ? eS : s,
                    guildId: n,
                    onHeightUpdate: K,
                    context: X
                }),
                eM = (0, h.Z)(l.id),
                ey = (0, r.e7)([N.Z], () => N.Z.getVoiceChannelId()),
                ev = (0, T.Z)(l, ey),
                eI = (0, O.Z)(l.id, s),
                e_ = l.isNonUserBot();
            return (0, t.jsxs)(i.v2r, {
                navId: 'user-context',
                onClose: d.Zy,
                'aria-label': H.intl.string(H.t.liqwPD),
                onSelect: Y,
                onInteraction: J,
                children: [
                    !e_ &&
                        (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsxs)(i.kSQ, {
                                    children: [eC, o && !F && eI, F && em]
                                }),
                                (0, t.jsxs)(i.kSQ, {
                                    children: [B && ee, u && el, en, er, ev, B && ei, B && ed, et]
                                }),
                                o && (0, t.jsx)(i.kSQ, { children: es }),
                                (0, t.jsx)(i.kSQ, { children: B && eZ }),
                                (0, t.jsxs)(i.kSQ, {
                                    children: [o && eo, o && ea, o && eE, B && ec, ex, B && eu, eg, B && ef, B && eh, V && eM]
                                }),
                                (0, t.jsx)(i.kSQ, { children: eb }),
                                (0, t.jsxs)(i.kSQ, {
                                    children: [ej, eO]
                                }),
                                V &&
                                    (0, t.jsxs)(i.kSQ, {
                                        children: [eN, eP]
                                    })
                            ]
                        }),
                    (0, t.jsx)(i.kSQ, { children: ep })
                ]
            });
        },
        { object: Q.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GUILD_CHANNEL_USER_MENU]
);
