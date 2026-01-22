l.d(t, {
    A: () => d,
});
var n = l(627968);
l(64700);
var a = l(503698),
    i = l.n(a),
    r = l(397927),
    s = l(147925),
    u = l(317498);

function d(e) {
    let { options: t, onClick: l, className: a, hideCaret: d } = e;
    return (0, n.jsx)("div", {
        className: i()(u.zr, a),
        children: t.map((e, t) =>
            (0, n.jsxs)(
                r.DUT,
                {
                    onClick: () => l(e),
                    className: i()(u.uK, e.className),
                    children: [
                        (0, n.jsx)(r.Text, {
                            className: u.Qq,
                            color: "none",
                            variant: "text-md/normal",
                            children: e.label,
                        }),
                        !(null == d ? void 0 : d(e)) &&
                            (0, n.jsx)(s.A, {
                                className: u.OW,
                                direction: s.A.Directions.RIGHT,
                            }),
                    ],
                },
                t,
            ),
        ),
    });
}
