t.r(e);
var i = t(200651);
t(192379);
var r = t(442837),
    l = t(481060),
    u = t(239091),
    a = t(883385),
    o = t(108843),
    d = t(911969),
    s = t(947440),
    c = t(100527),
    f = t(441061),
    _ = t(167675),
    E = t(737013),
    p = t(607783),
    g = t(299206),
    h = t(976192),
    A = t(819403),
    m = t(286694),
    M = t(592125),
    Z = t(777658),
    T = t(858488),
    I = t(185457),
    v = t(933409),
    b = t(570870),
    C = t(389052),
    S = t(24311),
    x = t(332576),
    N = t(158508),
    y = t(710631),
    O = t(297047),
    P = t(88966),
    U = t(712301),
    j = t(991307),
    D = t(37258),
    G = t(931617),
    R = t(700994),
    k = t(332031),
    L = t(981631),
    w = t(388032);
e.default = (0, o.Z)(
    (0, a.Z)(
        function (n) {
            let { user: e, guildId: t, channel: a, showMediaItems: o = !1, showChatItems: c = !0, showChannelCallItems: B = !1, showModalItems: W = !0, showStageChannelItems: V = !1, context: H, onSelect: K, onHeightUpdate: F, viewingChannelId: q } = n,
                Y = a.id,
                z = {
                    page: L.ZY5.GUILD_CHANNEL,
                    section: L.jXE.CHAT_USERNAME,
                    object: L.qAy.CONTEXT_MENU_ITEM
                },
                Q = (0, D.Z)({
                    userId: e.id,
                    guildId: t,
                    channelId: Y,
                    showGuildProfile: !0
                }),
                X = (0, O.Z)(e, t, H),
                J = (0, P.Z)(e.id, H),
                $ = (0, k.Z)(e.id),
                nn = (0, S.Z)({
                    user: e,
                    context: H
                }),
                ne = (0, I.Z)({
                    user: e,
                    guildId: t,
                    channelId: Y,
                    context: H
                }),
                nt = (0, T.Z)({ user: e }),
                ni = (0, R.Z)(e.id),
                nr = (0, j.Z)(e.id),
                nl = (0, p.B)({
                    userId: e.id,
                    channelId: Y,
                    guildId: a.getGuildId(),
                    location: 'GuildChannelUserContextMenu'
                }),
                nu = (0, h.Z)({
                    guildId: t,
                    userId: e.id,
                    analyticsLocation: z,
                    context: H
                }),
                na = (0, y.Z)({
                    user: e,
                    guildId: t
                }),
                no = (0, s.Z)(null, e),
                nd = (0, Z.Z)(e),
                ns = (0, C.Z)({
                    user: e,
                    guildId: t,
                    channelId: Y,
                    location: 'GuildChannelUserContextMenu'
                }),
                nc = (0, N.Z)({
                    user: e,
                    guildId: t,
                    channelId: Y,
                    location: 'GuildChannelUserContextMenu'
                }),
                nf = (0, v.Z)(e, t, Y),
                n_ = (0, G.Z)(e.id, t),
                nE = (0, U.Z)(e, t),
                np = (0, g.Z)({
                    id: e.id,
                    label: w.intl.string(w.t['/AXYnJ'])
                }),
                ng = (0, x.Z)(e.id, Y),
                nh = (0, _.Z)(e.id),
                nA = (0, f.Z)(Y),
                nm = (0, A.Z)(e),
                nM = (0, m.Z)(e, t, Y),
                nZ = (0, r.e7)([M.Z], () => (null != q ? M.Z.getChannel(q) : null)),
                nT = (0, b.Z)({
                    commandType: d.yU.USER,
                    commandTargetId: e.id,
                    channel: null != nZ ? nZ : a,
                    guildId: t,
                    onHeightUpdate: F,
                    context: H
                }),
                nI = (0, E.Z)(e.id),
                nv = e.isNonUserBot();
            return (0, i.jsxs)(l.Menu, {
                navId: 'user-context',
                onClose: u.Zy,
                'aria-label': w.intl.string(w.t.liqwPD),
                onSelect: K,
                children: [
                    !nv &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(l.MenuGroup, {
                                    children: [nm, V && nM]
                                }),
                                (0, i.jsxs)(l.MenuGroup, {
                                    children: [W && Q, c && X, J, nn, W && ne, W && nt, $]
                                }),
                                o && (0, i.jsx)(l.MenuGroup, { children: ni }),
                                (0, i.jsx)(l.MenuGroup, { children: W && no }),
                                (0, i.jsxs)(l.MenuGroup, {
                                    children: [o && nr, o && nl, o && ng, W && nu, nT, W && na, nd, W && nc, W && ns, B && nI]
                                }),
                                (0, i.jsx)(l.MenuGroup, { children: nf }),
                                (0, i.jsxs)(l.MenuGroup, {
                                    children: [n_, nE]
                                }),
                                B &&
                                    (0, i.jsxs)(l.MenuGroup, {
                                        children: [nA, nh]
                                    })
                            ]
                        }),
                    (0, i.jsx)(l.MenuGroup, { children: np })
                ]
            });
        },
        { object: L.qAy.CONTEXT_MENU }
    ),
    [c.Z.CONTEXT_MENU, c.Z.GUILD_CHANNEL_USER_MENU]
);
