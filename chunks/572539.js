a.d(t, { Z: () => l });
var n = a(255367);
a(73800);
var i = a(120356),
    s = a.n(i),
    o = a(481060),
    c = a(259580),
    r = a(242953);
function l(e) {
    let { options: t, onClick: a, className: i, hideCaret: l } = e;
    return (0, n.jsx)("div", {
        className: s()(r.root, i),
        children: t.map((e, t) =>
            (0, n.jsxs)(
                o.P3F,
                {
                    onClick: () => a(e),
                    className: s()(r.option, e.className),
                    children: [
                        (0, n.jsx)(o.Text, {
                            className: r.text,
                            color: "none",
                            variant: "text-md/normal",
                            children: e.label,
                        }),
                        !(null == l ? void 0 : l(e)) &&
                            (0, n.jsx)(c.Z, {
                                className: r.caret,
                                direction: c.Z.Directions.RIGHT,
                            }),
                    ],
                },
                t,
            ),
        ),
    });
}
