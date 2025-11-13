t.r(n), t.d(n, { default: () => N });
var i = t(951288);
t(647438);
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
    h = t(389052),
    v = t(24311),
    _ = t(794973),
    b = t(158508),
    p = t(558924),
    O = t(37258),
    Z = t(332031),
    m = t(981631),
    E = t(388032);
let N = (0, o.Z)(
    (0, a.Z)(
        function (e) {
            let { user: n, channel: t, channelSelected: a = !1, context: o, onSelect: m, onInteraction: N } = e,
                C = (0, s.Z)(t),
                y = (0, d.ZP)(t, void 0, !1),
                j = (0, O.Z)({
                    userId: n.id,
                    guildId: null,
                }),
                A = (0, v.Z)({
                    user: n,
                    context: o,
                }),
                I = (0, p.O)(t.id, u.Z.DM_CONDENSED_MENU),
                x = (0, p.Z)(n, I),
                P = (0, f.Z)(n),
                U = (0, Z.Z)(n.id),
                T = (0, g.Z)({ user: n }),
                R = (0, b.Z)({
                    user: n,
                    location: u.Z.DM_CONDENSED_MENU,
                }),
                S = (0, h.Z)({
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
                onSelect: m,
                onInteraction: N,
                children: [
                    (0, i.jsxs)(l.kSQ, {
                        children: [C, M],
                    }),
                    !k &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(l.kSQ, { children: j }),
                                (0, i.jsxs)(l.kSQ, {
                                    children: [A, !w && x, P, U],
                                }),
                                (0, i.jsxs)(l.kSQ, {
                                    children: [T, R, S],
                                }),
                            ],
                        }),
                    (0, i.jsxs)(l.kSQ, {
                        children: [y, D],
                    }),
                ],
            });
        },
        { object: m.qAy.CONTEXT_MENU },
    ),
    [u.Z.CONTEXT_MENU, u.Z.DM_CONDENSED_MENU],
);
