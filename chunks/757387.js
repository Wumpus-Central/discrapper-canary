n.d(l, { default: () => W });
var t = n(200651);
n(192379);
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
    O = n(299206),
    N = n(976192),
    p = n(819403),
    b = n(286694),
    j = n(592125),
    E = n(944486),
    P = n(777658),
    m = n(858488),
    C = n(185457),
    x = n(933409),
    M = n(570870),
    S = n(389052),
    y = n(24311),
    v = n(332576),
    _ = n(158508),
    I = n(710631),
    R = n(297047),
    k = n(88966),
    A = n(712301),
    U = n(558924),
    T = n(991307),
    G = n(37258),
    w = n(931617),
    q = n(700994),
    L = n(332031),
    D = n(981631),
    Q = n(388032);
let W = (0, o.Z)(
    (0, s.Z)(
        function (e) {
            let { user: l, guildId: n, channel: s, showMediaItems: o = !1, showChatItems: u = !0, showChannelCallItems: W = !1, showModalItems: V = !0, showStageChannelItems: H = !1, context: B, onSelect: F, onHeightUpdate: X, viewingChannelId: Y, onInteraction: K } = e,
                $ = s.id,
                J = {
                    page: D.ZY5.GUILD_CHANNEL,
                    section: D.jXE.CHAT_USERNAME,
                    object: D.qAy.CONTEXT_MENU_ITEM
                },
                z = (0, G.Z)({
                    userId: l.id,
                    guildId: n,
                    channelId: $,
                    showGuildProfile: !0
                }),
                ee = (0, R.Z)(l, n, B),
                el = (0, k.Z)(l.id, B),
                en = (0, L.Z)(l.id),
                et = (0, y.Z)({
                    user: l,
                    context: B
                }),
                er = (0, C.Z)({
                    user: l,
                    guildId: n,
                    channelId: $,
                    context: B
                }),
                ei = (0, m.Z)({ user: l }),
                ed = (0, q.Z)(l.id),
                es = (0, T.Z)(l.id),
                eo = (0, f.B)({
                    userId: l.id,
                    channelId: $,
                    guildId: s.getGuildId()
                }),
                ea = (0, N.Z)({
                    guildId: n,
                    userId: l.id,
                    analyticsLocation: J,
                    context: B
                }),
                ec = (0, I.Z)({
                    user: l,
                    guildId: n
                }),
                eu = (0, c.Z)(null, l),
                eZ = (0, P.Z)({ user: l }),
                eg = (0, S.Z)({
                    user: l,
                    guildId: n,
                    channelId: $,
                    location: 'GuildChannelUserContextMenu'
                }),
                eh = (0, _.Z)({
                    user: l,
                    guildId: n,
                    channelId: $,
                    location: 'GuildChannelUserContextMenu'
                }),
                ef = (0, x.Z)(l, n, $),
                eO = (0, w.Z)(l.id, n),
                eN = (0, A.Z)(l, n),
                ep = (0, O.Z)({
                    id: l.id,
                    label: Q.NW.string(Q.t['/AXYnJ'])
                }),
                eb = (0, v.Z)(l.id, $),
                ej = (0, g.Z)(l.id),
                eE = (0, Z.Z)($),
                eP = (0, p.Z)(l),
                em = (0, b.Z)(l, n, $),
                eC = (0, r.e7)([j.Z], () => (null != Y ? j.Z.getChannel(Y) : null)),
                ex = (0, M.Z)({
                    commandType: a.yU.USER,
                    commandTargetId: l.id,
                    channel: null != eC ? eC : s,
                    guildId: n,
                    onHeightUpdate: X,
                    context: B
                }),
                eM = (0, h.Z)(l.id),
                eS = (0, r.e7)([E.Z], () => E.Z.getVoiceChannelId()),
                ey = (0, U.Z)(l, eS),
                ev = l.isNonUserBot();
            return (0, t.jsxs)(i.v2r, {
                navId: 'user-context',
                onClose: d.Zy,
                'aria-label': Q.NW.string(Q.t.liqwPD),
                onSelect: F,
                onInteraction: K,
                children: [
                    !ev &&
                        (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsxs)(i.kSQ, {
                                    children: [eP, H && em]
                                }),
                                (0, t.jsxs)(i.kSQ, {
                                    children: [V && z, u && ee, el, et, ey, V && er, V && ei, en]
                                }),
                                o && (0, t.jsx)(i.kSQ, { children: ed }),
                                (0, t.jsx)(i.kSQ, { children: V && eu }),
                                (0, t.jsxs)(i.kSQ, {
                                    children: [o && es, o && eo, o && eb, V && ea, ex, V && ec, eZ, V && eh, V && eg, W && eM]
                                }),
                                (0, t.jsx)(i.kSQ, { children: ef }),
                                (0, t.jsxs)(i.kSQ, {
                                    children: [eO, eN]
                                }),
                                W &&
                                    (0, t.jsxs)(i.kSQ, {
                                        children: [eE, ej]
                                    })
                            ]
                        }),
                    (0, t.jsx)(i.kSQ, { children: ep })
                ]
            });
        },
        { object: D.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GUILD_CHANNEL_USER_MENU]
);
