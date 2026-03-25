n.d(t, { A: () => o });
var i = n(627968),
    s = n(397927),
    l = n(917064),
    a = n(985018),
    r = n(227330);
function o() {
    return (0, i.jsxs)("div", {
        className: r.iE,
        children: [
            (0, i.jsx)(s.Heading, { variant: "heading-xl/normal", children: a.intl.string(a.t.IzKs3o) }),
            (0, i.jsx)("div", {
                className: r.kR,
                children: l.s.map((e, t) => {
                    let n = e.icon;
                    return (0, i.jsxs)(
                        "div",
                        {
                            className: r.Nr,
                            children: [
                                (0, i.jsx)(n, { className: r.Kk }),
                                (0, i.jsx)(s.Text, {
                                    className: r.h_,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: e.getText(),
                                }),
                            ],
                        },
                        t,
                    );
                }),
            }),
        ],
    });
}
