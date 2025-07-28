n.d(l, { default: () => H });
var t = n(255367);
n(73800);
var r = n(442837),
    i = n(481060),
    s = n(239091),
    d = n(883385),
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
    O = n(819403),
    p = n(286694),
    E = n(592125),
    P = n(944486),
    N = n(777658),
    C = n(858488),
    m = n(185457),
    S = n(933409),
    x = n(570870),
    M = n(389052),
    y = n(24311),
    v = n(332576),
    I = n(158508),
    _ = n(710631),
    k = n(297047),
    A = n(88966),
    U = n(712301),
    R = n(558924),
    T = n(991307),
    q = n(37258),
    G = n(931617),
    w = n(700994),
    L = n(332031),
    D = n(981631),
    Q = n(388032);
let H = (0, o.Z)(
    (0, d.Z)(
        function (e) {
            let { user: l, guildId: n, channel: d, showMediaItems: o = !1, showChatItems: u = !0, showChannelCallItems: H = !1, showModalItems: V = !0, showStageChannelItems: B = !1, context: F, onSelect: X, onHeightUpdate: Y, viewingChannelId: K, onInteraction: W } = e,
                J = d.id,
                $ = {
                    page: D.ZY5.GUILD_CHANNEL,
                    section: D.jXE.CHAT_USERNAME,
                    object: D.qAy.CONTEXT_MENU_ITEM
                },
                z = (0, q.Z)({
                    userId: l.id,
                    guildId: n,
                    channelId: J,
                    showGuildProfile: !0
                }),
                ee = (0, k.Z)(l, n, F),
                el = (0, A.Z)(l.id, F),
                en = (0, L.Z)(l.id),
                et = (0, y.Z)({
                    user: l,
                    context: F
                }),
                er = (0, m.Z)({
                    user: l,
                    guildId: n,
                    channelId: J,
                    context: F
                }),
                ei = (0, C.Z)({ user: l }),
                es = (0, w.Z)(l.id),
                ed = (0, T.Z)(l.id),
                eo = (0, f.B)({
                    userId: l.id,
                    channelId: J,
                    guildId: d.getGuildId()
                }),
                ea = (0, j.Z)({
                    guildId: n,
                    userId: l.id,
                    analyticsLocation: $,
                    context: F
                }),
                ec = (0, _.Z)({
                    user: l,
                    guildId: n
                }),
                eu = (0, c.Z)(null, l),
                eZ = (0, N.Z)({ user: l }),
                eg = (0, M.Z)({
                    user: l,
                    guildId: n,
                    channelId: J,
                    location: 'GuildChannelUserContextMenu'
                }),
                eh = (0, I.Z)({
                    user: l,
                    guildId: n,
                    channelId: J,
                    location: 'GuildChannelUserContextMenu'
                }),
                ef = (0, S.Z)(l, n, J),
                eb = (0, G.Z)(l.id, n),
                ej = (0, U.Z)(l, n),
                eO = (0, b.Z)({
                    id: l.id,
                    label: Q.intl.string(Q.t['/AXYnJ'])
                }),
                ep = (0, v.Z)(l.id, J),
                eE = (0, g.Z)(l.id),
                eP = (0, Z.Z)(J),
                eN = (0, O.Z)(l),
                eC = (0, p.Z)(l, n, J),
                em = (0, r.e7)([E.Z], () => (null != K ? E.Z.getChannel(K) : null)),
                eS = (0, x.Z)({
                    commandType: a.yU.USER,
                    commandTargetId: l.id,
                    channel: null != em ? em : d,
                    guildId: n,
                    onHeightUpdate: Y,
                    context: F
                }),
                ex = (0, h.Z)(l.id),
                eM = (0, r.e7)([P.Z], () => P.Z.getVoiceChannelId()),
                ey = (0, R.Z)(l, eM),
                ev = l.isNonUserBot();
            return (0, t.jsxs)(i.v2r, {
                navId: 'user-context',
                onClose: s.Zy,
                'aria-label': Q.intl.string(Q.t.liqwPD),
                onSelect: X,
                onInteraction: W,
                children: [
                    !ev &&
                        (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsxs)(i.kSQ, {
                                    children: [eN, B && eC]
                                }),
                                (0, t.jsxs)(i.kSQ, {
                                    children: [V && z, u && ee, el, et, ey, V && er, V && ei, en]
                                }),
                                o && (0, t.jsx)(i.kSQ, { children: es }),
                                (0, t.jsx)(i.kSQ, { children: V && eu }),
                                (0, t.jsxs)(i.kSQ, {
                                    children: [o && ed, o && eo, o && ep, V && ea, eS, V && ec, eZ, V && eh, V && eg, H && ex]
                                }),
                                (0, t.jsx)(i.kSQ, { children: ef }),
                                (0, t.jsxs)(i.kSQ, {
                                    children: [eb, ej]
                                }),
                                H &&
                                    (0, t.jsxs)(i.kSQ, {
                                        children: [eP, eE]
                                    })
                            ]
                        }),
                    (0, t.jsx)(i.kSQ, { children: eO })
                ]
            });
        },
        { object: D.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GUILD_CHANNEL_USER_MENU]
);
