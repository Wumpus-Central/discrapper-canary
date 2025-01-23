l.r(n);
var i = l(200651);
l(192379);
var t = l(442837),
    r = l(481060),
    a = l(239091),
    u = l(883385),
    d = l(108843),
    s = l(911969),
    o = l(947440),
    c = l(100527),
    Z = l(441061),
    M = l(167675),
    h = l(737013),
    p = l(607783),
    C = l(299206),
    g = l(976192),
    x = l(819403),
    E = l(286694),
    N = l(592125),
    G = l(944486),
    U = l(777658),
    f = l(858488),
    _ = l(185457),
    P = l(933409),
    b = l(570870),
    j = l(389052),
    I = l(24311),
    A = l(332576),
    v = l(158508),
    T = l(710631),
    m = l(297047),
    y = l(88966),
    L = l(712301),
    O = l(558924),
    w = l(991307),
    S = l(37258),
    k = l(931617),
    q = l(700994),
    R = l(332031),
    W = l(981631),
    B = l(388032);
n.default = (0, d.Z)(
    (0, u.Z)(
        function (e) {
            let { user: n, guildId: l, channel: u, showMediaItems: d = !1, showChatItems: c = !0, showChannelCallItems: D = !1, showModalItems: H = !0, showStageChannelItems: K = !1, context: X, onSelect: F, onHeightUpdate: V, viewingChannelId: z } = e,
                J = u.id,
                Q = {
                    page: W.ZY5.GUILD_CHANNEL,
                    section: W.jXE.CHAT_USERNAME,
                    object: W.qAy.CONTEXT_MENU_ITEM
                },
                Y = (0, S.Z)({
                    userId: n.id,
                    guildId: l,
                    channelId: J,
                    showGuildProfile: !0
                }),
                $ = (0, m.Z)(n, l, X),
                ee = (0, y.Z)(n.id, X),
                en = (0, R.Z)(n.id),
                el = (0, I.Z)({
                    user: n,
                    context: X
                }),
                ei = (0, _.Z)({
                    user: n,
                    guildId: l,
                    channelId: J,
                    context: X
                }),
                et = (0, f.Z)({ user: n }),
                er = (0, q.Z)(n.id),
                ea = (0, w.Z)(n.id),
                eu = (0, p.B)({
                    userId: n.id,
                    channelId: J,
                    guildId: u.getGuildId(),
                    location: 'GuildChannelUserContextMenu'
                }),
                ed = (0, g.Z)({
                    guildId: l,
                    userId: n.id,
                    analyticsLocation: Q,
                    context: X
                }),
                es = (0, T.Z)({
                    user: n,
                    guildId: l
                }),
                eo = (0, o.Z)(null, n),
                ec = (0, U.Z)(n),
                eZ = (0, j.Z)({
                    user: n,
                    guildId: l,
                    channelId: J,
                    location: 'GuildChannelUserContextMenu'
                }),
                eM = (0, v.Z)({
                    user: n,
                    guildId: l,
                    channelId: J,
                    location: 'GuildChannelUserContextMenu'
                }),
                eh = (0, P.Z)(n, l, J),
                ep = (0, k.Z)(n.id, l),
                eC = (0, L.Z)(n, l),
                eg = (0, C.Z)({
                    id: n.id,
                    label: B.intl.string(B.t['/AXYnJ'])
                }),
                ex = (0, A.Z)(n.id, J),
                eE = (0, M.Z)(n.id),
                eN = (0, Z.Z)(J),
                eG = (0, x.Z)(n),
                eU = (0, E.Z)(n, l, J),
                ef = (0, t.e7)([N.Z], () => (null != z ? N.Z.getChannel(z) : null)),
                e_ = (0, b.Z)({
                    commandType: s.yU.USER,
                    commandTargetId: n.id,
                    channel: null != ef ? ef : u,
                    guildId: l,
                    onHeightUpdate: V,
                    context: X
                }),
                eP = (0, h.Z)(n.id),
                eb = (0, t.e7)([G.Z], () => G.Z.getVoiceChannelId()),
                ej = (0, O.Z)(n, eb),
                eI = n.isNonUserBot();
            return (0, i.jsxs)(r.Menu, {
                navId: 'user-context',
                onClose: a.Zy,
                'aria-label': B.intl.string(B.t.liqwPD),
                onSelect: F,
                children: [
                    !eI &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [eG, K && eU]
                                }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [H && Y, c && $, ee, el, ej, H && ei, H && et, en]
                                }),
                                d && (0, i.jsx)(r.MenuGroup, { children: er }),
                                (0, i.jsx)(r.MenuGroup, { children: H && eo }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [d && ea, d && eu, d && ex, H && ed, e_, H && es, ec, H && eM, H && eZ, D && eP]
                                }),
                                (0, i.jsx)(r.MenuGroup, { children: eh }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [ep, eC]
                                }),
                                D &&
                                    (0, i.jsxs)(r.MenuGroup, {
                                        children: [eN, eE]
                                    })
                            ]
                        }),
                    (0, i.jsx)(r.MenuGroup, { children: eg })
                ]
            });
        },
        { object: W.qAy.CONTEXT_MENU }
    ),
    [c.Z.CONTEXT_MENU, c.Z.GUILD_CHANNEL_USER_MENU]
);
