l.d(n, { default: () => H });
var i = l(200651);
l(192379);
var t = l(442837),
    r = l(481060),
    a = l(239091),
    d = l(883385),
    s = l(108843),
    u = l(911969),
    o = l(947440),
    c = l(100527),
    Z = l(441061),
    h = l(167675),
    C = l(737013),
    g = l(607783),
    N = l(299206),
    x = l(976192),
    E = l(819403),
    U = l(286694),
    p = l(592125),
    _ = l(944486),
    b = l(777658),
    P = l(858488),
    f = l(185457),
    M = l(933409),
    j = l(570870),
    S = l(389052),
    k = l(24311),
    A = l(332576),
    I = l(158508),
    v = l(710631),
    G = l(297047),
    T = l(88966),
    y = l(712301),
    Q = l(558924),
    m = l(991307),
    O = l(37258),
    w = l(931617),
    L = l(700994),
    q = l(332031),
    R = l(981631),
    D = l(388032);
let H = (0, s.Z)(
    (0, d.Z)(
        function (e) {
            let { user: n, guildId: l, channel: d, showMediaItems: s = !1, showChatItems: c = !0, showChannelCallItems: H = !1, showModalItems: W = !0, showStageChannelItems: B = !1, context: K, onSelect: X, onHeightUpdate: F, viewingChannelId: V } = e,
                J = d.id,
                Y = {
                    page: R.ZY5.GUILD_CHANNEL,
                    section: R.jXE.CHAT_USERNAME,
                    object: R.qAy.CONTEXT_MENU_ITEM
                },
                z = (0, O.Z)({
                    userId: n.id,
                    guildId: l,
                    channelId: J,
                    showGuildProfile: !0
                }),
                $ = (0, G.Z)(n, l, K),
                ee = (0, T.Z)(n.id, K),
                en = (0, q.Z)(n.id),
                el = (0, k.Z)({
                    user: n,
                    context: K
                }),
                ei = (0, f.Z)({
                    user: n,
                    guildId: l,
                    channelId: J,
                    context: K
                }),
                et = (0, P.Z)({ user: n }),
                er = (0, L.Z)(n.id),
                ea = (0, m.Z)(n.id),
                ed = (0, g.B)({
                    userId: n.id,
                    channelId: J,
                    guildId: d.getGuildId(),
                    location: 'GuildChannelUserContextMenu'
                }),
                es = (0, x.Z)({
                    guildId: l,
                    userId: n.id,
                    analyticsLocation: Y,
                    context: K
                }),
                eu = (0, v.Z)({
                    user: n,
                    guildId: l
                }),
                eo = (0, o.Z)(null, n),
                ec = (0, b.Z)({ user: n }),
                eZ = (0, S.Z)({
                    user: n,
                    guildId: l,
                    channelId: J,
                    location: 'GuildChannelUserContextMenu'
                }),
                eh = (0, I.Z)({
                    user: n,
                    guildId: l,
                    channelId: J,
                    location: 'GuildChannelUserContextMenu'
                }),
                eC = (0, M.Z)(n, l, J),
                eg = (0, w.Z)(n.id, l),
                eN = (0, y.Z)(n, l),
                ex = (0, N.Z)({
                    id: n.id,
                    label: D.intl.string(D.t['/AXYnJ'])
                }),
                eE = (0, A.Z)(n.id, J),
                eU = (0, h.Z)(n.id),
                ep = (0, Z.Z)(J),
                e_ = (0, E.Z)(n),
                eb = (0, U.Z)(n, l, J),
                eP = (0, t.e7)([p.Z], () => (null != V ? p.Z.getChannel(V) : null)),
                ef = (0, j.Z)({
                    commandType: u.yU.USER,
                    commandTargetId: n.id,
                    channel: null != eP ? eP : d,
                    guildId: l,
                    onHeightUpdate: F,
                    context: K
                }),
                eM = (0, C.Z)(n.id),
                ej = (0, t.e7)([_.Z], () => _.Z.getVoiceChannelId()),
                eS = (0, Q.Z)(n, ej),
                ek = n.isNonUserBot();
            return (0, i.jsxs)(r.v2r, {
                navId: 'user-context',
                onClose: a.Zy,
                'aria-label': D.intl.string(D.t.liqwPD),
                onSelect: X,
                children: [
                    !ek &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(r.kSQ, {
                                    children: [e_, B && eb]
                                }),
                                (0, i.jsxs)(r.kSQ, {
                                    children: [W && z, c && $, ee, el, eS, W && ei, W && et, en]
                                }),
                                s && (0, i.jsx)(r.kSQ, { children: er }),
                                (0, i.jsx)(r.kSQ, { children: W && eo }),
                                (0, i.jsxs)(r.kSQ, {
                                    children: [s && ea, s && ed, s && eE, W && es, ef, W && eu, ec, W && eh, W && eZ, H && eM]
                                }),
                                (0, i.jsx)(r.kSQ, { children: eC }),
                                (0, i.jsxs)(r.kSQ, {
                                    children: [eg, eN]
                                }),
                                H &&
                                    (0, i.jsxs)(r.kSQ, {
                                        children: [ep, eU]
                                    })
                            ]
                        }),
                    (0, i.jsx)(r.kSQ, { children: ex })
                ]
            });
        },
        { object: R.qAy.CONTEXT_MENU }
    ),
    [c.Z.CONTEXT_MENU, c.Z.GUILD_CHANNEL_USER_MENU]
);
