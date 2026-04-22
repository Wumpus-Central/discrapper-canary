s.d(t, { q: () => b });
var i = s(627968);
s(64700);
var a = s(503698),
    l = s.n(a),
    r = s(778712),
    n = s(97808),
    d = s(534514),
    u = s(834730),
    c = s(821609),
    o = s(534890),
    m = s(308528),
    f = s(854627),
    _ = s(779733),
    p = s(427262),
    g = s(466919),
    h = s(985018),
    S = s(372829);
let b = (e) => {
    let { recipient: t, isSuccess: s, onClose: a } = e,
        { avatarSrc: b, eventHandlers: x } = (0, f.A)({ userId: t?.id, size: r._3.SIZE_56 }),
        I = p.Ay.getName(t),
        N = !s;
    return (0, i.jsxs)("div", {
        className: l()(S.nM, { [S.z3]: N }),
        children: [
            (0, i.jsx)(n.eu, { src: b, "aria-label": I, size: r._3.SIZE_32, ...x }),
            (0, i.jsxs)("div", {
                className: S.Qs,
                children: [
                    (0, i.jsx)(d.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        className: S.QC,
                        children: I,
                    }),
                    N &&
                        (0, i.jsx)(u.E, {
                            variant: "text-xs/normal",
                            color: "text-strong",
                            className: S.kc,
                            children: h.intl.format(g.default["Y/oMwY"], { userName: I }),
                        }),
                ],
            }),
            s &&
                (0, i.jsx)(c.$, {
                    variant: "secondary",
                    size: "sm",
                    text: h.intl.string(h.t["g33r/P"]),
                    icon: o.o,
                    onClick: () => {
                        var e;
                        return (e = t.id), void ((0, _.default)(), m.A.openPrivateChannel({ recipientIds: e }), a());
                    },
                }),
        ],
    });
};
