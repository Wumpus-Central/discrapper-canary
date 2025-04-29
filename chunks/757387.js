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
    O = n(299206),
    p = n(976192),
    b = n(819403),
    j = n(286694),
    E = n(592125),
    N = n(944486),
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
let V = (0, o.Z)(
    (0, s.Z)(
        function (e) {
            let { user: l, guildId: n, channel: s, showMediaItems: o = !1, showChatItems: u = !0, showChannelCallItems: V = !1, showModalItems: H = !0, showStageChannelItems: B = !1, context: F, onSelect: X, onHeightUpdate: Y, viewingChannelId: K, onInteraction: W } = e,
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
                ee = (0, R.Z)(l, n, F),
                el = (0, k.Z)(l.id, F),
                en = (0, L.Z)(l.id),
                et = (0, y.Z)({
                    user: l,
                    context: F
                }),
                er = (0, C.Z)({
                    user: l,
                    guildId: n,
                    channelId: $,
                    context: F
                }),
                ei = (0, m.Z)({ user: l }),
                ed = (0, q.Z)(l.id),
                es = (0, T.Z)(l.id),
                eo = (0, f.B)({
                    userId: l.id,
                    channelId: $,
                    guildId: s.getGuildId()
                }),
                ea = (0, p.Z)({
                    guildId: n,
                    userId: l.id,
                    analyticsLocation: J,
                    context: F
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
                ep = (0, A.Z)(l, n),
                eb = (0, O.Z)({
                    id: l.id,
                    label: Q.intl.string(Q.t['/AXYnJ'])
                }),
                ej = (0, v.Z)(l.id, $),
                eE = (0, g.Z)(l.id),
                eN = (0, Z.Z)($),
                eP = (0, b.Z)(l),
                em = (0, j.Z)(l, n, $),
                eC = (0, r.e7)([E.Z], () => (null != K ? E.Z.getChannel(K) : null)),
                ex = (0, M.Z)({
                    commandType: a.yU.USER,
                    commandTargetId: l.id,
                    channel: null != eC ? eC : s,
                    guildId: n,
                    onHeightUpdate: Y,
                    context: F
                }),
                eM = (0, h.Z)(l.id),
                eS = (0, r.e7)([N.Z], () => N.Z.getVoiceChannelId()),
                ey = (0, U.Z)(l, eS),
                ev = l.isNonUserBot();
            return (0, t.jsxs)(i.v2r, {
                navId: 'user-context',
                onClose: d.Zy,
                'aria-label': Q.intl.string(Q.t.liqwPD),
                onSelect: X,
                onInteraction: W,
                children: [
                    !ev &&
                        (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsxs)(i.kSQ, {
                                    children: [eP, B && em]
                                }),
                                (0, t.jsxs)(i.kSQ, {
                                    children: [H && z, u && ee, el, et, ey, H && er, H && ei, en]
                                }),
                                o && (0, t.jsx)(i.kSQ, { children: ed }),
                                (0, t.jsx)(i.kSQ, { children: H && eu }),
                                (0, t.jsxs)(i.kSQ, {
                                    children: [o && es, o && eo, o && ej, H && ea, ex, H && ec, eZ, H && eh, H && eg, V && eM]
                                }),
                                (0, t.jsx)(i.kSQ, { children: ef }),
                                (0, t.jsxs)(i.kSQ, {
                                    children: [eO, ep]
                                }),
                                V &&
                                    (0, t.jsxs)(i.kSQ, {
                                        children: [eN, eE]
                                    })
                            ]
                        }),
                    (0, t.jsx)(i.kSQ, { children: eb })
                ]
            });
        },
        { object: D.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GUILD_CHANNEL_USER_MENU]
);
