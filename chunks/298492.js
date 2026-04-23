s.d(t, { q: () => g });
var a = s(627968);
s(64700);
var i = s(503698),
    l = s.n(i),
    r = s(778712),
    n = s(97808),
    c = s(534514),
    d = s(834730),
    u = s(821609),
    o = s(534890),
    m = s(308528),
    f = s(854627),
    _ = s(779733),
    h = s(427262),
    x = s(466919),
    p = s(985018),
    b = s(372829);
let g = (e) => {
    let { recipient: t, isSuccess: s, onClose: i } = e,
        { avatarSrc: g, eventHandlers: v } = (0, f.A)({ userId: t?.id, size: r._3.SIZE_56 }),
        N = h.Ay.getName(t),
        S = !s;
    return (0, a.jsxs)("div", {
        className: l()(b.nM, { [b.z3]: S }),
        children: [
            (0, a.jsx)(n.eu, { src: g, "aria-label": N, size: r._3.SIZE_32, ...v }),
            (0, a.jsxs)("div", {
                className: b.Qs,
                children: [
                    (0, a.jsx)(c.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        className: b.QC,
                        children: N,
                    }),
                    S &&
                        (0, a.jsx)(d.E, {
                            variant: "text-xs/normal",
                            color: "text-strong",
                            className: b.kc,
                            children: p.intl.format(x.default["Y/oMwY"], { userName: N }),
                        }),
                ],
            }),
            s &&
                (0, a.jsx)(u.$, {
                    variant: "secondary",
                    size: "sm",
                    text: p.intl.string(p.t["g33r/P"]),
                    icon: o.o,
                    onClick: () => {
                        var e;
                        return (e = t.id), void ((0, _.default)(), m.A.openPrivateChannel({ recipientIds: e }), i());
                    },
                }),
        ],
    });
};
