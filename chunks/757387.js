n.d(l, { default: () => F });
var t = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    r = n(239091),
    d = n(883385),
    s = n(108843),
    u = n(911969),
    o = n(947440),
    c = n(100527),
    Z = n(441061),
    g = n(167675),
    h = n(737013),
    E = n(607783),
    f = n(299206),
    v = n(976192),
    C = n(819403),
    m = n(286694),
    N = n(592125),
    P = n(944486),
    M = n(777658),
    S = n(858488),
    x = n(185457),
    I = n(933409),
    j = n(570870),
    O = n(389052),
    T = n(24311),
    U = n(332576),
    b = n(158508),
    A = n(710631),
    _ = n(297047),
    p = n(88966),
    R = n(712301),
    y = n(558924),
    k = n(991307),
    q = n(37258),
    G = n(931617),
    B = n(700994),
    L = n(332031),
    D = n(981631),
    V = n(388032);
let F = (0, s.Z)(
    (0, d.Z)(
        function (e) {
            let { user: l, guildId: n, channel: d, showMediaItems: s = !1, showChatItems: c = !0, showChannelCallItems: F = !1, showModalItems: Q = !0, showStageChannelItems: w = !1, context: K, onSelect: H, onHeightUpdate: W, viewingChannelId: Y } = e,
                X = d.id,
                J = {
                    page: D.ZY5.GUILD_CHANNEL,
                    section: D.jXE.CHAT_USERNAME,
                    object: D.qAy.CONTEXT_MENU_ITEM
                },
                z = (0, q.Z)({
                    userId: l.id,
                    guildId: n,
                    channelId: X,
                    showGuildProfile: !0
                }),
                $ = (0, _.Z)(l, n, K),
                ee = (0, p.Z)(l.id, K),
                el = (0, L.Z)(l.id),
                en = (0, T.Z)({
                    user: l,
                    context: K
                }),
                et = (0, x.Z)({
                    user: l,
                    guildId: n,
                    channelId: X,
                    context: K
                }),
                ei = (0, S.Z)({ user: l }),
                ea = (0, B.Z)(l.id),
                er = (0, k.Z)(l.id),
                ed = (0, E.B)({
                    userId: l.id,
                    channelId: X,
                    guildId: d.getGuildId(),
                    location: 'GuildChannelUserContextMenu'
                }),
                es = (0, v.Z)({
                    guildId: n,
                    userId: l.id,
                    analyticsLocation: J,
                    context: K
                }),
                eu = (0, A.Z)({
                    user: l,
                    guildId: n
                }),
                eo = (0, o.Z)(null, l),
                ec = (0, M.Z)({ user: l }),
                eZ = (0, O.Z)({
                    user: l,
                    guildId: n,
                    channelId: X,
                    location: 'GuildChannelUserContextMenu'
                }),
                eg = (0, b.Z)({
                    user: l,
                    guildId: n,
                    channelId: X,
                    location: 'GuildChannelUserContextMenu'
                }),
                eh = (0, I.Z)(l, n, X),
                eE = (0, G.Z)(l.id, n),
                ef = (0, R.Z)(l, n),
                ev = (0, f.Z)({
                    id: l.id,
                    label: V.intl.string(V.t['/AXYnJ'])
                }),
                eC = (0, U.Z)(l.id, X),
                em = (0, g.Z)(l.id),
                eN = (0, Z.Z)(X),
                eP = (0, C.Z)(l),
                eM = (0, m.Z)(l, n, X),
                eS = (0, i.e7)([N.Z], () => (null != Y ? N.Z.getChannel(Y) : null)),
                ex = (0, j.Z)({
                    commandType: u.yU.USER,
                    commandTargetId: l.id,
                    channel: null != eS ? eS : d,
                    guildId: n,
                    onHeightUpdate: W,
                    context: K
                }),
                eI = (0, h.Z)(l.id),
                ej = (0, i.e7)([P.Z], () => P.Z.getVoiceChannelId()),
                eO = (0, y.Z)(l, ej),
                eT = l.isNonUserBot();
            return (0, t.jsxs)(a.v2r, {
                navId: 'user-context',
                onClose: r.Zy,
                'aria-label': V.intl.string(V.t.liqwPD),
                onSelect: H,
                children: [
                    !eT &&
                        (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsxs)(a.kSQ, {
                                    children: [eP, w && eM]
                                }),
                                (0, t.jsxs)(a.kSQ, {
                                    children: [Q && z, c && $, ee, en, eO, Q && et, Q && ei, el]
                                }),
                                s && (0, t.jsx)(a.kSQ, { children: ea }),
                                (0, t.jsx)(a.kSQ, { children: Q && eo }),
                                (0, t.jsxs)(a.kSQ, {
                                    children: [s && er, s && ed, s && eC, Q && es, ex, Q && eu, ec, Q && eg, Q && eZ, F && eI]
                                }),
                                (0, t.jsx)(a.kSQ, { children: eh }),
                                (0, t.jsxs)(a.kSQ, {
                                    children: [eE, ef]
                                }),
                                F &&
                                    (0, t.jsxs)(a.kSQ, {
                                        children: [eN, em]
                                    })
                            ]
                        }),
                    (0, t.jsx)(a.kSQ, { children: ev })
                ]
            });
        },
        { object: D.qAy.CONTEXT_MENU }
    ),
    [c.Z.CONTEXT_MENU, c.Z.GUILD_CHANNEL_USER_MENU]
);
