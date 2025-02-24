t.d(n, { default: () => R });
var r = t(200651);
t(192379);
var i = t(481060),
    l = t(239091),
    o = t(883385),
    a = t(108843),
    s = t(911969),
    c = t(947440),
    u = t(100527),
    d = t(441061),
    f = t(167675),
    p = t(737013),
    h = t(607783),
    g = t(299206),
    b = t(819403),
    m = t(777658),
    O = t(858488),
    E = t(44652),
    v = t(185457),
    y = t(570870),
    _ = t(389052),
    Z = t(24311),
    j = t(915193),
    T = t(332576),
    S = t(158508),
    N = t(710631),
    x = t(297047),
    P = t(88966),
    I = t(47091),
    w = t(397616),
    A = t(558924),
    C = t(991307),
    M = t(37258),
    W = t(700994),
    D = t(332031),
    k = t(981631),
    U = t(388032);
let R = (0, a.Z)(
    (0, o.Z)(
        function (e) {
            var n;
            let { user: t, channel: o, context: a, showChatItems: u = !0, showMediaItems: k = !1, showChannelCallItems: R = !1, showModalItems: L = !0, onSelect: V, onHeightUpdate: G, onInteraction: B } = e,
                H = (0, M.Z)({
                    userId: t.id,
                    guildId: null
                }),
                K = (0, x.Z)(t, null, a),
                Q = (0, A.Z)(t, o.id),
                q = (0, P.Z)(t.id, a),
                F = (0, Z.Z)({
                    user: t,
                    context: a
                }),
                Y = (0, v.Z)({
                    user: t,
                    channelId: o.id,
                    context: a
                }),
                z = (0, O.Z)({ user: t }),
                X = (0, W.Z)(t.id),
                J = (0, w.Z)(t.id, o.id),
                $ = (0, C.Z)(t.id),
                ee = (0, h.B)({
                    userId: t.id,
                    channelId: o.id,
                    guildId: o.getGuildId(),
                    location: 'GroupDMUserContextMenu'
                }),
                en = (0, T.Z)(t.id, o.id),
                et = (0, N.Z)({ user: t }),
                er = (0, c.Z)(null, t),
                ei = (0, m.Z)({ user: t }),
                el = (0, E.Z)({ user: t }),
                eo = (0, I.Z)({ user: t }),
                ea = (0, _.Z)({
                    user: t,
                    location: 'GroupDMUserContextMenu'
                }),
                es = (0, S.Z)({
                    user: t,
                    location: 'GroupDMUserContextMenu'
                }),
                ec = (0, g.Z)({
                    id: t.id,
                    label: U.NW.string(U.t['/AXYnJ'])
                }),
                eu = (0, D.Z)(t.id),
                ed = (0, f.Z)(t.id),
                ef = (0, d.Z)(o.id),
                ep = (0, b.Z)(t),
                eh = (0, p.Z)(t.id),
                eg = (0, y.Z)({
                    commandType: s.yU.USER,
                    commandTargetId: t.id,
                    channel: o,
                    guildId: void 0,
                    onHeightUpdate: G
                }),
                eb = (0, j.Z)(t, o),
                em = t.isNonUserBot(),
                eO = o.isManaged(),
                eE = null === (n = o.recipients) || void 0 === n ? void 0 : n.includes(t.id);
            return (0, r.jsxs)(i.v2r, {
                navId: 'user-context',
                onClose: l.Zy,
                'aria-label': U.NW.string(U.t.liqwPD),
                onSelect: V,
                onInteraction: B,
                children: [
                    !em &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(i.kSQ, { children: ep }),
                                (0, r.jsxs)(i.kSQ, {
                                    children: [L && H, u && K, q, F, !eO && Q, L && Y, L && z, eu]
                                }),
                                k && (0, r.jsx)(i.kSQ, { children: X }),
                                eE &&
                                    (0, r.jsxs)(i.kSQ, {
                                        children: [!eO && J, eb]
                                    }),
                                (0, r.jsx)(i.kSQ, { children: L && er }),
                                (0, r.jsxs)(i.kSQ, {
                                    children: [k && $, k && ee, k && en, eg, L && et, ei, el, eo, L && es, L && ea, k && eh]
                                }),
                                R &&
                                    (0, r.jsxs)(i.kSQ, {
                                        children: [ef, ed]
                                    })
                            ]
                        }),
                    (0, r.jsx)(i.kSQ, { children: ec })
                ]
            });
        },
        { object: k.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_USER_MENU]
);
