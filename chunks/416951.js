t.r(n), t.d(n, { default: () => N });
var i = t(54381);
t(473749);
var l = t(481060),
    r = t(239091),
    a = t(883385),
    o = t(108843),
    u = t(100527),
    s = t(461535),
    d = t(776568),
    c = t(895563),
    f = t(819403),
    g = t(777658),
    v = t(389052),
    h = t(24311),
    _ = t(794973),
    b = t(158508),
    p = t(558924),
    m = t(37258),
    O = t(332031),
    Z = t(981631),
    E = t(388032);
let N = (0, o.Z)(
    (0, a.Z)(
        function (e) {
            let { user: n, channel: t, channelSelected: a = !1, context: o, onSelect: Z, onInteraction: N } = e,
                C = (0, s.Z)(t),
                j = (0, d.ZP)(t, void 0, !1),
                y = (0, m.Z)({
                    userId: n.id,
                    guildId: null,
                }),
                A = (0, h.Z)({
                    user: n,
                    context: o,
                }),
                x = (0, p.O)(t.id, u.Z.DM_CONDENSED_MENU),
                I = (0, p.Z)(n, x),
                P = (0, f.Z)(n),
                U = (0, O.Z)(n.id),
                T = (0, g.Z)({ user: n }),
                S = (0, b.Z)({
                    user: n,
                    location: u.Z.DM_CONDENSED_MENU,
                }),
                R = (0, v.Z)({
                    user: n,
                    location: u.Z.DM_CONDENSED_MENU,
                }),
                D = (0, _.Z)(t.id, a),
                M = (0, c.l)(t),
                k = n.isNonUserBot(),
                w = t.isManaged();
            return (0, i.jsxs)(l.v2r, {
                navId: "dm-kebab-context",
                onClose: r.Zy,
                "aria-label": E.intl.string(E.t.liqwPJ),
                onSelect: Z,
                onInteraction: N,
                children: [
                    (0, i.jsxs)(l.kSQ, {
                        children: [C, M],
                    }),
                    !k &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(l.kSQ, { children: y }),
                                (0, i.jsxs)(l.kSQ, {
                                    children: [A, !w && I, P, U],
                                }),
                                (0, i.jsxs)(l.kSQ, {
                                    children: [T, S, R],
                                }),
                            ],
                        }),
                    (0, i.jsxs)(l.kSQ, {
                        children: [j, D],
                    }),
                ],
            });
        },
        { object: Z.qAy.CONTEXT_MENU },
    ),
    [u.Z.CONTEXT_MENU, u.Z.DM_CONDENSED_MENU],
);
