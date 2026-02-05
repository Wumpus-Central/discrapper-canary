l.d(a, { A: () => u });
var t = l(627968);
l(64700);
var n = l(503698),
    i = l.n(n),
    r = l(397927),
    d = l(147925),
    s = l(317498);
function u(e) {
    let { options: a, onClick: l, className: n, hideCaret: u } = e;
    return (0, t.jsx)("div", {
        className: i()(s.zr, n),
        children: a.map((e, a) =>
            (0, t.jsxs)(
                r.DUT,
                {
                    onClick: () => l(e),
                    className: i()(s.uK, e.className),
                    children: [
                        (0, t.jsx)(r.Text, {
                            className: s.Qq,
                            color: "none",
                            variant: "text-md/normal",
                            children: e.label,
                        }),
                        !u?.(e) && (0, t.jsx)(d.A, { className: s.OW, direction: d.A.Directions.RIGHT }),
                    ],
                },
                a,
            ),
        ),
    });
}
