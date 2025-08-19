a.d(t, { Z: () => s });
var n = a(951288);
a(647438);
var i = a(120356),
    o = a.n(i),
    r = a(481060),
    c = a(259580),
    l = a(824482);
function s(e) {
    let { options: t, onClick: a, className: i, hideCaret: s } = e;
    return (0, n.jsx)("div", {
        className: o()(l.root, i),
        children: t.map((e, t) =>
            (0, n.jsxs)(
                r.P3F,
                {
                    onClick: () => a(e),
                    className: o()(l.option, e.className),
                    children: [
                        (0, n.jsx)(r.Text, {
                            className: l.text,
                            color: "none",
                            variant: "text-md/normal",
                            children: e.label,
                        }),
                        !(null == s ? void 0 : s(e)) &&
                            (0, n.jsx)(c.Z, {
                                className: l.caret,
                                direction: c.Z.Directions.RIGHT,
                            }),
                    ],
                },
                t,
            ),
        ),
    });
}
