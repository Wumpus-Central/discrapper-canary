t.d(n, { default: () => D });
var i = t(200651);
t(192379);
var r = t(481060),
    a = t(239091),
    l = t(883385),
    s = t(108843),
    o = t(911969),
    d = t(947440),
    u = t(100527),
    c = t(441061),
    _ = t(167675),
    h = t(737013),
    p = t(607783),
    f = t(299206),
    m = t(819403),
    g = t(777658),
    v = t(858488),
    E = t(44652),
    T = t(185457),
    Z = t(570870),
    x = t(389052),
    b = t(24311),
    S = t(915193),
    I = t(332576),
    C = t(158508),
    A = t(710631),
    N = t(297047),
    j = t(88966),
    y = t(47091),
    M = t(397616),
    P = t(558924),
    w = t(991307),
    O = t(37258),
    k = t(700994),
    U = t(332031),
    W = t(981631),
    R = t(388032);
let D = (0, s.Z)(
    (0, l.Z)(
        function (e) {
            var n;
            let { user: t, channel: l, context: s, showChatItems: u = !0, showMediaItems: W = !1, showChannelCallItems: D = !1, showModalItems: G = !0, onSelect: V, onHeightUpdate: B } = e,
                L = (0, O.Z)({
                    userId: t.id,
                    guildId: null
                }),
                H = (0, N.Z)(t, null, s),
                q = (0, P.Z)(t, l.id),
                Q = (0, j.Z)(t.id, s),
                F = (0, b.Z)({
                    user: t,
                    context: s
                }),
                K = (0, T.Z)({
                    user: t,
                    channelId: l.id,
                    context: s
                }),
                z = (0, v.Z)({ user: t }),
                Y = (0, k.Z)(t.id),
                J = (0, M.Z)(t.id, l.id),
                X = (0, w.Z)(t.id),
                $ = (0, p.B)({
                    userId: t.id,
                    channelId: l.id,
                    guildId: l.getGuildId(),
                    location: 'GroupDMUserContextMenu'
                }),
                ee = (0, I.Z)(t.id, l.id),
                en = (0, A.Z)({ user: t }),
                et = (0, d.Z)(null, t),
                ei = (0, g.Z)({ user: t }),
                er = (0, E.Z)({ user: t }),
                ea = (0, y.Z)({ user: t }),
                el = (0, x.Z)({
                    user: t,
                    location: 'GroupDMUserContextMenu'
                }),
                es = (0, C.Z)({
                    user: t,
                    location: 'GroupDMUserContextMenu'
                }),
                eo = (0, f.Z)({
                    id: t.id,
                    label: R.intl.string(R.t['/AXYnJ'])
                }),
                ed = (0, U.Z)(t.id),
                eu = (0, _.Z)(t.id),
                ec = (0, c.Z)(l.id),
                e_ = (0, m.Z)(t),
                eh = (0, h.Z)(t.id),
                ep = (0, Z.Z)({
                    commandType: o.yU.USER,
                    commandTargetId: t.id,
                    channel: l,
                    guildId: void 0,
                    onHeightUpdate: B
                }),
                ef = (0, S.Z)(t, l),
                em = t.isNonUserBot(),
                eg = l.isManaged(),
                ev = null === (n = l.recipients) || void 0 === n ? void 0 : n.includes(t.id);
            return (0, i.jsxs)(r.v2r, {
                navId: 'user-context',
                onClose: a.Zy,
                'aria-label': R.intl.string(R.t.liqwPD),
                onSelect: V,
                children: [
                    !em &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.kSQ, { children: e_ }),
                                (0, i.jsxs)(r.kSQ, {
                                    children: [G && L, u && H, Q, F, !eg && q, G && K, G && z, ed]
                                }),
                                W && (0, i.jsx)(r.kSQ, { children: Y }),
                                ev &&
                                    (0, i.jsxs)(r.kSQ, {
                                        children: [!eg && J, ef]
                                    }),
                                (0, i.jsx)(r.kSQ, { children: G && et }),
                                (0, i.jsxs)(r.kSQ, {
                                    children: [W && X, W && $, W && ee, ep, G && en, ei, er, ea, G && es, G && el, W && eh]
                                }),
                                D &&
                                    (0, i.jsxs)(r.kSQ, {
                                        children: [ec, eu]
                                    })
                            ]
                        }),
                    (0, i.jsx)(r.kSQ, { children: eo })
                ]
            });
        },
        { object: W.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_USER_MENU]
);
