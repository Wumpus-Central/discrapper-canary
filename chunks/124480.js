s.d(e, { A: () => t });
var l = s(627968);
s(64700);
var c = s(503698),
    i = s.n(c),
    n = s(939249),
    d = s(834730),
    m = s(147925),
    r = s(926797);
function t(a) {
    let { options: e, onClick: s, className: c, hideCaret: t } = a;
    return (0, l.jsx)("div", {
        className: i()(r.zr, c),
        children: e.map((a, e) =>
            (0, l.jsxs)(
                n.D,
                {
                    onClick: () => s(a),
                    className: i()(r.uK, a.className),
                    children: [
                        (0, l.jsx)(d.E, {
                            className: r.Qq,
                            color: "none",
                            variant: "text-md/normal",
                            children: a.label,
                        }),
                        !t?.(a) && (0, l.jsx)(m.A, { className: r.OW, direction: m.A.Directions.RIGHT }),
                    ],
                },
                e,
            ),
        ),
    });
}
