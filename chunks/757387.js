n.d(l, { default: () => W });
var t = n(200651);
n(192379);
var r = n(442837),
    i = n(481060),
    d = n(239091),
    a = n(883385),
    s = n(108843),
    o = n(911969),
    c = n(947440),
    u = n(100527),
    Z = n(441061),
    h = n(167675),
    g = n(737013),
    f = n(607783),
    O = n(299206),
    N = n(976192),
    p = n(819403),
    b = n(286694),
    j = n(592125),
    E = n(944486),
    P = n(777658),
    C = n(858488),
    m = n(185457),
    x = n(933409),
    M = n(570870),
    v = n(389052),
    S = n(24311),
    y = n(332576),
    _ = n(158508),
    k = n(710631),
    A = n(297047),
    R = n(88966),
    U = n(712301),
    I = n(558924),
    T = n(991307),
    G = n(37258),
    w = n(931617),
    q = n(700994),
    L = n(332031),
    D = n(981631),
    Q = n(388032);
let W = (0, s.Z)(
    (0, a.Z)(
        function (e) {
            let { user: l, guildId: n, channel: a, showMediaItems: s = !1, showChatItems: u = !0, showChannelCallItems: W = !1, showModalItems: H = !0, showStageChannelItems: V = !1, context: B, onSelect: F, onHeightUpdate: X, viewingChannelId: Y } = e,
                K = a.id,
                J = {
                    page: D.ZY5.GUILD_CHANNEL,
                    section: D.jXE.CHAT_USERNAME,
                    object: D.qAy.CONTEXT_MENU_ITEM
                },
                $ = (0, G.Z)({
                    userId: l.id,
                    guildId: n,
                    channelId: K,
                    showGuildProfile: !0
                }),
                z = (0, A.Z)(l, n, B),
                ee = (0, R.Z)(l.id, B),
                el = (0, L.Z)(l.id),
                en = (0, S.Z)({
                    user: l,
                    context: B
                }),
                et = (0, m.Z)({
                    user: l,
                    guildId: n,
                    channelId: K,
                    context: B
                }),
                er = (0, C.Z)({ user: l }),
                ei = (0, q.Z)(l.id),
                ed = (0, T.Z)(l.id),
                ea = (0, f.B)({
                    userId: l.id,
                    channelId: K,
                    guildId: a.getGuildId(),
                    location: 'GuildChannelUserContextMenu'
                }),
                es = (0, N.Z)({
                    guildId: n,
                    userId: l.id,
                    analyticsLocation: J,
                    context: B
                }),
                eo = (0, k.Z)({
                    user: l,
                    guildId: n
                }),
                ec = (0, c.Z)(null, l),
                eu = (0, P.Z)({ user: l }),
                eZ = (0, v.Z)({
                    user: l,
                    guildId: n,
                    channelId: K,
                    location: 'GuildChannelUserContextMenu'
                }),
                eh = (0, _.Z)({
                    user: l,
                    guildId: n,
                    channelId: K,
                    location: 'GuildChannelUserContextMenu'
                }),
                eg = (0, x.Z)(l, n, K),
                ef = (0, w.Z)(l.id, n),
                eO = (0, U.Z)(l, n),
                eN = (0, O.Z)({
                    id: l.id,
                    label: Q.NW.string(Q.t['/AXYnJ'])
                }),
                ep = (0, y.Z)(l.id, K),
                eb = (0, h.Z)(l.id),
                ej = (0, Z.Z)(K),
                eE = (0, p.Z)(l),
                eP = (0, b.Z)(l, n, K),
                eC = (0, r.e7)([j.Z], () => (null != Y ? j.Z.getChannel(Y) : null)),
                em = (0, M.Z)({
                    commandType: o.yU.USER,
                    commandTargetId: l.id,
                    channel: null != eC ? eC : a,
                    guildId: n,
                    onHeightUpdate: X,
                    context: B
                }),
                ex = (0, g.Z)(l.id),
                eM = (0, r.e7)([E.Z], () => E.Z.getVoiceChannelId()),
                ev = (0, I.Z)(l, eM),
                eS = l.isNonUserBot();
            return (0, t.jsxs)(i.v2r, {
                navId: 'user-context',
                onClose: d.Zy,
                'aria-label': Q.NW.string(Q.t.liqwPD),
                onSelect: F,
                children: [
                    !eS &&
                        (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsxs)(i.kSQ, {
                                    children: [eE, V && eP]
                                }),
                                (0, t.jsxs)(i.kSQ, {
                                    children: [H && $, u && z, ee, en, ev, H && et, H && er, el]
                                }),
                                s && (0, t.jsx)(i.kSQ, { children: ei }),
                                (0, t.jsx)(i.kSQ, { children: H && ec }),
                                (0, t.jsxs)(i.kSQ, {
                                    children: [s && ed, s && ea, s && ep, H && es, em, H && eo, eu, H && eh, H && eZ, W && ex]
                                }),
                                (0, t.jsx)(i.kSQ, { children: eg }),
                                (0, t.jsxs)(i.kSQ, {
                                    children: [ef, eO]
                                }),
                                W &&
                                    (0, t.jsxs)(i.kSQ, {
                                        children: [ej, eb]
                                    })
                            ]
                        }),
                    (0, t.jsx)(i.kSQ, { children: eN })
                ]
            });
        },
        { object: D.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GUILD_CHANNEL_USER_MENU]
);
