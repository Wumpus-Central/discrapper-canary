n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(534514),
    o = n(939249),
    d = n(834730),
    u = n(847374),
    c = n(827734),
    g = n(232122),
    m = n(985018),
    _ = n(420469);
function A() {
    let [e, t] = s.useState(null),
        [n, l] = s.useState(null);
    return (0, i.jsxs)("div", {
        className: _.iE,
        children: [
            (0, i.jsx)(r.D, { variant: "heading-xl/normal", children: m.intl.string(m.t.HPJ6Nj) }),
            (0, i.jsx)("ul", {
                className: _.p_,
                children: g.m.map((s, r) => {
                    let g = e === r,
                        m = n === r,
                        A = g || m ? "text-strong" : "text-muted";
                    return (0, i.jsxs)(
                        o.D,
                        {
                            tag: "li",
                            className: a()(_.Aw, { [_.$K]: g }),
                            onClick: () => t((e) => (e === r ? null : r)),
                            onMouseEnter: () => l(r),
                            onMouseLeave: () => l(null),
                            children: [
                                (0, i.jsxs)("div", {
                                    className: _.k7,
                                    children: [
                                        (0, i.jsx)(d.E, {
                                            className: _.b1,
                                            color: A,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, i.jsx)(u.a, {
                                            size: "sm",
                                            color: c.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: _.q4,
                                            style: { transform: g ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                g &&
                                    (0, i.jsx)(d.E, {
                                        className: _.ZF,
                                        color: "text-muted",
                                        variant: "text-sm/medium",
                                        children: s.getAnswer(),
                                    }),
                            ],
                        },
                        r,
                    );
                }),
            }),
        ],
    });
}
