n.d(t, { Z: () => u });
var a = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
    r = n(481060),
    o = n(259580),
    s = n(728431);
function u(e) {
    let { options: t, onClick: n, className: l, hideCaret: u } = e;
    return (0, a.jsx)("div", {
        className: i()(s.root, l),
        children: t.map((e, t) =>
            (0, a.jsxs)(
                r.P3F,
                {
                    onClick: () => n(e),
                    className: i()(s.option, e.className),
                    children: [
                        (0, a.jsx)(r.Text, {
                            className: s.text,
                            color: "none",
                            variant: "text-md/normal",
                            children: e.label,
                        }),
                        !(null == u ? void 0 : u(e)) &&
                            (0, a.jsx)(o.Z, {
                                className: s.caret,
                                direction: o.Z.Directions.RIGHT,
                            }),
                    ],
                },
                t,
            ),
        ),
    });
}
