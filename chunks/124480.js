var t = e(477900);
e(582128);
var i = e(503698),
    n = e.n(i),
    r = e(939249),
    E = e(834730),
    u = e(147925),
    d = e(439248);
e.d(
    l,
    {},
    {
        A: function (a) {
            let { options: l, onClick: e, className: i, hideCaret: s } = a;
            return (0, t.jsx)("div", {
                className: n()(d.zr, i),
                children: l.map((a, l) =>
                    (0, t.jsxs)(
                        r.D,
                        {
                            onClick: () => e(a),
                            className: n()(d.uK, a.className),
                            children: [
                                (0, t.jsx)(E.E, {
                                    className: d.Qq,
                                    color: "none",
                                    variant: "body-md/normal",
                                    children: a.label,
                                }),
                                !s?.(a) && (0, t.jsx)(u.A, { className: d.OW, direction: u.A.Directions.RIGHT }),
                            ],
                        },
                        l,
                    ),
                ),
            });
        },
    },
);
