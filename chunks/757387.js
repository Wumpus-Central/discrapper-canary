t.d(l, { default: () => V });
var n = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
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
    O = t(299206),
    p = t(976192),
    b = t(819403),
    j = t(286694),
    E = t(592125),
    N = t(944486),
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
let V = (0, a.Z)(
    (0, d.Z)(
        function (e) {
            let { user: l, guildId: t, channel: d, showMediaItems: a = !1, showChatItems: u = !0, showChannelCallItems: V = !1, showModalItems: H = !0, showStageChannelItems: B = !1, context: F, onSelect: K, onHeightUpdate: X, viewingChannelId: Y, onInteraction: W } = e,
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
                ee = (0, R.Z)(l, t, F),
                el = (0, U.Z)(l.id, F),
                et = (0, q.Z)(l.id),
                en = (0, v.Z)({
                    user: l,
                    context: F
                }),
                ei = (0, M.Z)({
                    user: l,
                    guildId: t,
                    channelId: J,
                    context: F
                }),
                er = (0, C.Z)({ user: l }),
                es = (0, w.Z)(l.id),
                ed = (0, T.Z)(l.id),
                ea = (0, f.B)({
                    userId: l.id,
                    channelId: J,
                    guildId: d.getGuildId()
                }),
                eo = (0, p.Z)({
                    guildId: t,
                    userId: l.id,
                    analyticsLocation: $,
                    context: F
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
                eO = (0, L.Z)(l.id, t),
                ep = (0, _.Z)(l, t),
                eb = (0, O.Z)({
                    id: l.id,
                    label: Q.intl.string(Q.t['/AXYnJ'])
                }),
                ej = (0, y.Z)(l.id, J),
                eE = (0, g.Z)(l.id),
                eN = (0, Z.Z)(J),
                eP = (0, b.Z)(l),
                eC = (0, j.Z)(l, t, J),
                eM = (0, i.e7)([E.Z], () => (null != Y ? E.Z.getChannel(Y) : null)),
                em = (0, x.Z)({
                    commandType: o.yU.USER,
                    commandTargetId: l.id,
                    channel: null != eM ? eM : d,
                    guildId: t,
                    onHeightUpdate: X,
                    context: F
                }),
                ex = (0, h.Z)(l.id),
                eS = (0, i.e7)([N.Z], () => N.Z.getVoiceChannelId()),
                ev = (0, k.Z)(l, eS),
                ey = l.isNonUserBot();
            return (0, n.jsxs)(r.v2r, {
                navId: 'user-context',
                onClose: s.Zy,
                'aria-label': Q.intl.string(Q.t.liqwPD),
                onSelect: K,
                onInteraction: W,
                children: [
                    !ey &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsxs)(r.kSQ, {
                                    children: [eP, B && eC]
                                }),
                                (0, n.jsxs)(r.kSQ, {
                                    children: [H && z, u && ee, el, en, ev, H && ei, H && er, et]
                                }),
                                a && (0, n.jsx)(r.kSQ, { children: es }),
                                (0, n.jsx)(r.kSQ, { children: H && eu }),
                                (0, n.jsxs)(r.kSQ, {
                                    children: [a && ed, a && ea, a && ej, H && eo, em, H && ec, eZ, H && eh, H && eg, V && ex]
                                }),
                                (0, n.jsx)(r.kSQ, { children: ef }),
                                (0, n.jsxs)(r.kSQ, {
                                    children: [eO, ep]
                                }),
                                V &&
                                    (0, n.jsxs)(r.kSQ, {
                                        children: [eN, eE]
                                    })
                            ]
                        }),
                    (0, n.jsx)(r.kSQ, { children: eb })
                ]
            });
        },
        { object: D.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GUILD_CHANNEL_USER_MENU]
);
