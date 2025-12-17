n.d(t, { Z: () => s });
var a = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
    r = n(481060),
    o = n(259580),
    d = n(489546);
function s(e) {
    let { options: t, onClick: n, className: l, hideCaret: s } = e;
    return (0, a.jsx)("div", {
        className: i()(d.root, l),
        children: t.map((e, t) =>
            (0, a.jsxs)(
                r.P3F,
                {
                    onClick: () => n(e),
                    className: i()(d.option, e.className),
                    children: [
                        (0, a.jsx)(r.Text, {
                            className: d.text,
                            color: "none",
                            variant: "text-md/normal",
                            children: e.label,
                        }),
                        !(null == s ? void 0 : s(e)) &&
                            (0, a.jsx)(o.Z, {
                                className: d.caret,
                                direction: o.Z.Directions.RIGHT,
                            }),
                    ],
                },
                t,
            ),
        ),
    });
}
