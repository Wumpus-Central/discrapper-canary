t.r(n);
var i = t(200651);
t(192379);
var r = t(481060),
    l = t(239091),
    s = t(883385),
    a = t(108843),
    d = t(911969),
    o = t(947440),
    u = t(100527),
    c = t(441061),
    m = t(167675),
    h = t(737013),
    Z = t(607783),
    x = t(299206),
    f = t(819403),
    g = t(777658),
    v = t(858488),
    p = t(44652),
    j = t(185457),
    M = t(570870),
    I = t(389052),
    C = t(24311),
    b = t(915193),
    N = t(332576),
    U = t(158508),
    G = t(710631),
    E = t(297047),
    T = t(88966),
    w = t(47091),
    k = t(397616),
    O = t(558924),
    S = t(991307),
    A = t(37258),
    _ = t(700994),
    z = t(332031),
    R = t(981631),
    L = t(388032);
n.default = (0, a.Z)(
    (0, s.Z)(
        function (e) {
            var n;
            let { user: t, channel: s, context: a, showChatItems: u = !0, showMediaItems: R = !1, showChannelCallItems: P = !1, showModalItems: y = !0, onSelect: F, onHeightUpdate: X } = e,
                D = (0, A.Z)({
                    userId: t.id,
                    guildId: null
                }),
                q = (0, E.Z)(t, null, a),
                W = (0, O.Z)(t, s.id),
                B = (0, T.Z)(t.id, a),
                Y = (0, C.Z)({
                    user: t,
                    context: a
                }),
                J = (0, j.Z)({
                    user: t,
                    channelId: s.id,
                    context: a
                }),
                K = (0, v.Z)({ user: t }),
                H = (0, _.Z)(t.id),
                Q = (0, k.Z)(t.id, s.id),
                V = (0, S.Z)(t.id),
                $ = (0, Z.B)({
                    userId: t.id,
                    channelId: s.id,
                    guildId: s.getGuildId(),
                    location: 'GroupDMUserContextMenu'
                }),
                ee = (0, N.Z)(t.id, s.id),
                en = (0, G.Z)({ user: t }),
                et = (0, o.Z)(null, t),
                ei = (0, g.Z)(t),
                er = (0, p.Z)({ user: t }),
                el = (0, w.Z)({ user: t }),
                es = (0, I.Z)({
                    user: t,
                    location: 'GroupDMUserContextMenu'
                }),
                ea = (0, U.Z)({
                    user: t,
                    location: 'GroupDMUserContextMenu'
                }),
                ed = (0, x.Z)({
                    id: t.id,
                    label: L.intl.string(L.t['/AXYnJ'])
                }),
                eo = (0, z.Z)(t.id),
                eu = (0, m.Z)(t.id),
                ec = (0, c.Z)(s.id),
                em = (0, f.Z)(t),
                eh = (0, h.Z)(t.id),
                eZ = (0, M.Z)({
                    commandType: d.yU.USER,
                    commandTargetId: t.id,
                    channel: s,
                    guildId: void 0,
                    onHeightUpdate: X
                }),
                ex = (0, b.Z)(t, s),
                ef = t.isNonUserBot(),
                eg = s.isManaged(),
                ev = null === (n = s.recipients) || void 0 === n ? void 0 : n.includes(t.id);
            return (0, i.jsxs)(r.Menu, {
                navId: 'user-context',
                onClose: l.Zy,
                'aria-label': L.intl.string(L.t.liqwPD),
                onSelect: F,
                children: [
                    !ef &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.MenuGroup, { children: em }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [y && D, u && q, B, Y, !eg && W, y && J, y && K, eo]
                                }),
                                R && (0, i.jsx)(r.MenuGroup, { children: H }),
                                ev &&
                                    (0, i.jsxs)(r.MenuGroup, {
                                        children: [!eg && Q, ex]
                                    }),
                                (0, i.jsx)(r.MenuGroup, { children: y && et }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [R && V, R && $, R && ee, eZ, y && en, ei, er, el, y && ea, y && es, R && eh]
                                }),
                                P &&
                                    (0, i.jsxs)(r.MenuGroup, {
                                        children: [ec, eu]
                                    })
                            ]
                        }),
                    (0, i.jsx)(r.MenuGroup, { children: ed })
                ]
            });
        },
        { object: R.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_USER_MENU]
);
