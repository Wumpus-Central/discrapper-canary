i.r(e);
var r = i(200651);
i(192379);
var t = i(481060),
    a = i(239091),
    s = i(883385),
    d = i(108843),
    o = i(911969),
    l = i(947440),
    u = i(100527),
    c = i(441061),
    m = i(167675),
    f = i(737013),
    Z = i(607783),
    h = i(299206),
    g = i(819403),
    v = i(777658),
    p = i(858488),
    x = i(185457),
    j = i(570870),
    M = i(389052),
    I = i(24311),
    C = i(915193),
    _ = i(332576),
    T = i(158508),
    U = i(710631),
    b = i(297047),
    w = i(88966),
    E = i(397616),
    N = i(558924),
    O = i(991307),
    G = i(37258),
    P = i(700994),
    k = i(332031),
    y = i(981631),
    A = i(388032);
e.default = (0, d.Z)(
    (0, s.Z)(
        function (n) {
            var e;
            let { user: i, channel: s, context: d, showChatItems: u = !0, showMediaItems: y = !1, showChannelCallItems: S = !1, showModalItems: R = !0, onSelect: z, onHeightUpdate: D } = n,
                W = (0, G.Z)({
                    userId: i.id,
                    guildId: null
                }),
                L = (0, b.Z)(i, null, d),
                B = (0, N.Z)(i, s.id),
                J = (0, w.Z)(i.id, d),
                q = (0, I.Z)({
                    user: i,
                    context: d
                }),
                X = (0, x.Z)({
                    user: i,
                    channelId: s.id,
                    context: d
                }),
                Y = (0, p.Z)({ user: i }),
                F = (0, P.Z)(i.id),
                H = (0, E.Z)(i.id, s.id),
                K = (0, O.Z)(i.id),
                Q = (0, Z.B)({
                    userId: i.id,
                    channelId: s.id,
                    guildId: s.getGuildId(),
                    location: 'GroupDMUserContextMenu'
                }),
                V = (0, _.Z)(i.id, s.id),
                $ = (0, U.Z)({ user: i }),
                nn = (0, l.Z)(null, i),
                ne = (0, v.Z)(i),
                ni = (0, M.Z)({
                    user: i,
                    location: 'GroupDMUserContextMenu'
                }),
                nr = (0, T.Z)({
                    user: i,
                    location: 'GroupDMUserContextMenu'
                }),
                nt = (0, h.Z)({
                    id: i.id,
                    label: A.intl.string(A.t['/AXYnJ'])
                }),
                na = (0, k.Z)(i.id),
                ns = (0, m.Z)(i.id),
                nd = (0, c.Z)(s.id),
                no = (0, g.Z)(i),
                nl = (0, f.Z)(i.id),
                nu = (0, j.Z)({
                    commandType: o.yU.USER,
                    commandTargetId: i.id,
                    channel: s,
                    guildId: void 0,
                    onHeightUpdate: D
                }),
                nc = (0, C.Z)(i, s),
                nm = i.isNonUserBot(),
                nf = s.isManaged(),
                nZ = null === (e = s.recipients) || void 0 === e ? void 0 : e.includes(i.id);
            return (0, r.jsxs)(t.Menu, {
                navId: 'user-context',
                onClose: a.Zy,
                'aria-label': A.intl.string(A.t.liqwPD),
                onSelect: z,
                children: [
                    !nm &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(t.MenuGroup, { children: no }),
                                (0, r.jsxs)(t.MenuGroup, {
                                    children: [R && W, u && L, J, q, !nf && B, R && X, R && Y, na]
                                }),
                                y && (0, r.jsx)(t.MenuGroup, { children: F }),
                                nZ &&
                                    (0, r.jsxs)(t.MenuGroup, {
                                        children: [!nf && H, nc]
                                    }),
                                (0, r.jsx)(t.MenuGroup, { children: R && nn }),
                                (0, r.jsxs)(t.MenuGroup, {
                                    children: [y && K, y && Q, y && V, nu, R && $, ne, R && nr, R && ni, y && nl]
                                }),
                                S &&
                                    (0, r.jsxs)(t.MenuGroup, {
                                        children: [nd, ns]
                                    })
                            ]
                        }),
                    (0, r.jsx)(t.MenuGroup, { children: nt })
                ]
            });
        },
        { object: y.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_USER_MENU]
);
