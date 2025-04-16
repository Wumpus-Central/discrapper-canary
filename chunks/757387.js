t.d(l, { default: () => W });
var n = t(200651);
t(192379);
var r = t(442837),
    i = t(481060),
    s = t(239091),
    d = t(883385),
    a = t(108843),
    o = t(911969),
    c = t(947440),
    u = t(100527),
    Z = t(441061),
    g = t(167675),
    h = t(737013),
    f = t(607783),
    N = t(299206),
    O = t(976192),
    p = t(819403),
    b = t(286694),
    j = t(592125),
    E = t(944486),
    P = t(777658),
    C = t(858488),
    M = t(185457),
    m = t(933409),
    x = t(570870),
    S = t(389052),
    v = t(24311),
    y = t(332576),
    I = t(158508),
    A = t(710631),
    R = t(297047),
    U = t(88966),
    _ = t(712301),
    k = t(558924),
    T = t(991307),
    G = t(37258),
    L = t(931617),
    w = t(700994),
    q = t(332031),
    D = t(981631),
    Q = t(388032);
let W = (0, a.Z)(
    (0, d.Z)(
        function (e) {
            let { user: l, guildId: t, channel: d, showMediaItems: a = !1, showChatItems: u = !0, showChannelCallItems: W = !1, showModalItems: V = !0, showStageChannelItems: H = !1, context: B, onSelect: F, onHeightUpdate: K, viewingChannelId: X, onInteraction: Y } = e,
                J = d.id,
                $ = {
                    page: D.ZY5.GUILD_CHANNEL,
                    section: D.jXE.CHAT_USERNAME,
                    object: D.qAy.CONTEXT_MENU_ITEM
                },
                z = (0, G.Z)({
                    userId: l.id,
                    guildId: t,
                    channelId: J,
                    showGuildProfile: !0
                }),
                ee = (0, R.Z)(l, t, B),
                el = (0, U.Z)(l.id, B),
                et = (0, q.Z)(l.id),
                en = (0, v.Z)({
                    user: l,
                    context: B
                }),
                er = (0, M.Z)({
                    user: l,
                    guildId: t,
                    channelId: J,
                    context: B
                }),
                ei = (0, C.Z)({ user: l }),
                es = (0, w.Z)(l.id),
                ed = (0, T.Z)(l.id),
                ea = (0, f.B)({
                    userId: l.id,
                    channelId: J,
                    guildId: d.getGuildId()
                }),
                eo = (0, O.Z)({
                    guildId: t,
                    userId: l.id,
                    analyticsLocation: $,
                    context: B
                }),
                ec = (0, A.Z)({
                    user: l,
                    guildId: t
                }),
                eu = (0, c.Z)(null, l),
                eZ = (0, P.Z)({ user: l }),
                eg = (0, S.Z)({
                    user: l,
                    guildId: t,
                    channelId: J,
                    location: 'GuildChannelUserContextMenu'
                }),
                eh = (0, I.Z)({
                    user: l,
                    guildId: t,
                    channelId: J,
                    location: 'GuildChannelUserContextMenu'
                }),
                ef = (0, m.Z)(l, t, J),
                eN = (0, L.Z)(l.id, t),
                eO = (0, _.Z)(l, t),
                ep = (0, N.Z)({
                    id: l.id,
                    label: Q.NW.string(Q.t['/AXYnJ'])
                }),
                eb = (0, y.Z)(l.id, J),
                ej = (0, g.Z)(l.id),
                eE = (0, Z.Z)(J),
                eP = (0, p.Z)(l),
                eC = (0, b.Z)(l, t, J),
                eM = (0, r.e7)([j.Z], () => (null != X ? j.Z.getChannel(X) : null)),
                em = (0, x.Z)({
                    commandType: o.yU.USER,
                    commandTargetId: l.id,
                    channel: null != eM ? eM : d,
                    guildId: t,
                    onHeightUpdate: K,
                    context: B
                }),
                ex = (0, h.Z)(l.id),
                eS = (0, r.e7)([E.Z], () => E.Z.getVoiceChannelId()),
                ev = (0, k.Z)(l, eS),
                ey = l.isNonUserBot();
            return (0, n.jsxs)(i.v2r, {
                navId: 'user-context',
                onClose: s.Zy,
                'aria-label': Q.NW.string(Q.t.liqwPD),
                onSelect: F,
                onInteraction: Y,
                children: [
                    !ey &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsxs)(i.kSQ, {
                                    children: [eP, H && eC]
                                }),
                                (0, n.jsxs)(i.kSQ, {
                                    children: [V && z, u && ee, el, en, ev, V && er, V && ei, et]
                                }),
                                a && (0, n.jsx)(i.kSQ, { children: es }),
                                (0, n.jsx)(i.kSQ, { children: V && eu }),
                                (0, n.jsxs)(i.kSQ, {
                                    children: [a && ed, a && ea, a && eb, V && eo, em, V && ec, eZ, V && eh, V && eg, W && ex]
                                }),
                                (0, n.jsx)(i.kSQ, { children: ef }),
                                (0, n.jsxs)(i.kSQ, {
                                    children: [eN, eO]
                                }),
                                W &&
                                    (0, n.jsxs)(i.kSQ, {
                                        children: [eE, ej]
                                    })
                            ]
                        }),
                    (0, n.jsx)(i.kSQ, { children: ep })
                ]
            });
        },
        { object: D.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GUILD_CHANNEL_USER_MENU]
);
