t.d(n, { default: () => W });
var i = t(200651);
t(192379);
var r = t(481060),
    a = t(239091),
    l = t(883385),
    o = t(108843),
    s = t(911969),
    d = t(947440),
    u = t(100527),
    c = t(441061),
    _ = t(167675),
    h = t(737013),
    f = t(607783),
    p = t(299206),
    m = t(819403),
    g = t(777658),
    v = t(858488),
    E = t(44652),
    T = t(185457),
    Z = t(570870),
    x = t(389052),
    S = t(24311),
    b = t(915193),
    A = t(332576),
    I = t(158508),
    C = t(710631),
    N = t(297047),
    j = t(88966),
    y = t(47091),
    M = t(397616),
    O = t(558924),
    P = t(991307),
    w = t(37258),
    k = t(700994),
    U = t(332031),
    D = t(981631),
    R = t(388032);
let W = (0, o.Z)(
    (0, l.Z)(
        function (e) {
            var n;
            let { user: t, channel: l, context: o, showChatItems: u = !0, showMediaItems: D = !1, showChannelCallItems: W = !1, showModalItems: V = !0, onSelect: B, onHeightUpdate: G } = e,
                L = (0, w.Z)({
                    userId: t.id,
                    guildId: null
                }),
                H = (0, N.Z)(t, null, o),
                K = (0, O.Z)(t, l.id),
                Q = (0, j.Z)(t.id, o),
                q = (0, S.Z)({
                    user: t,
                    context: o
                }),
                F = (0, T.Z)({
                    user: t,
                    channelId: l.id,
                    context: o
                }),
                Y = (0, v.Z)({ user: t }),
                z = (0, k.Z)(t.id),
                J = (0, M.Z)(t.id, l.id),
                X = (0, P.Z)(t.id),
                $ = (0, f.B)({
                    userId: t.id,
                    channelId: l.id,
                    guildId: l.getGuildId(),
                    location: 'GroupDMUserContextMenu'
                }),
                ee = (0, A.Z)(t.id, l.id),
                en = (0, C.Z)({ user: t }),
                et = (0, d.Z)(null, t),
                ei = (0, g.Z)({ user: t }),
                er = (0, E.Z)({ user: t }),
                ea = (0, y.Z)({ user: t }),
                el = (0, x.Z)({
                    user: t,
                    location: 'GroupDMUserContextMenu'
                }),
                eo = (0, I.Z)({
                    user: t,
                    location: 'GroupDMUserContextMenu'
                }),
                es = (0, p.Z)({
                    id: t.id,
                    label: R.intl.string(R.t['/AXYnJ'])
                }),
                ed = (0, U.Z)(t.id),
                eu = (0, _.Z)(t.id),
                ec = (0, c.Z)(l.id),
                e_ = (0, m.Z)(t),
                eh = (0, h.Z)(t.id),
                ef = (0, Z.Z)({
                    commandType: s.yU.USER,
                    commandTargetId: t.id,
                    channel: l,
                    guildId: void 0,
                    onHeightUpdate: G
                }),
                ep = (0, b.Z)(t, l),
                em = t.isNonUserBot(),
                eg = l.isManaged(),
                ev = null === (n = l.recipients) || void 0 === n ? void 0 : n.includes(t.id);
            return (0, i.jsxs)(r.v2r, {
                navId: 'user-context',
                onClose: a.Zy,
                'aria-label': R.intl.string(R.t.liqwPD),
                onSelect: B,
                children: [
                    !em &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.kSQ, { children: e_ }),
                                (0, i.jsxs)(r.kSQ, {
                                    children: [V && L, u && H, Q, q, !eg && K, V && F, V && Y, ed]
                                }),
                                D && (0, i.jsx)(r.kSQ, { children: z }),
                                ev &&
                                    (0, i.jsxs)(r.kSQ, {
                                        children: [!eg && J, ep]
                                    }),
                                (0, i.jsx)(r.kSQ, { children: V && et }),
                                (0, i.jsxs)(r.kSQ, {
                                    children: [D && X, D && $, D && ee, ef, V && en, ei, er, ea, V && eo, V && el, D && eh]
                                }),
                                W &&
                                    (0, i.jsxs)(r.kSQ, {
                                        children: [ec, eu]
                                    })
                            ]
                        }),
                    (0, i.jsx)(r.kSQ, { children: es })
                ]
            });
        },
        { object: D.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_USER_MENU]
);
