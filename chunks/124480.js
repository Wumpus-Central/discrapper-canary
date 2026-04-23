a.d(t, { A: () => o });
var l = a(627968);
a(64700);
var n = a(503698),
    i = a.n(n),
    r = a(939249),
    d = a(834730),
    s = a(147925),
    u = a(926797);
function o(e) {
    let { options: t, onClick: a, className: n, hideCaret: o } = e;
    return (0, l.jsx)("div", {
        className: i()(u.zr, n),
        children: t.map((e, t) =>
            (0, l.jsxs)(
                r.D,
                {
                    onClick: () => a(e),
                    className: i()(u.uK, e.className),
                    children: [
                        (0, l.jsx)(d.E, {
                            className: u.Qq,
                            color: "none",
                            variant: "text-md/normal",
                            children: e.label,
                        }),
                        !o?.(e) && (0, l.jsx)(s.A, { className: u.OW, direction: s.A.Directions.RIGHT }),
                    ],
                },
                t,
            ),
        ),
    });
}
