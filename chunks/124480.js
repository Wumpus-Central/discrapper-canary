var c = s(477900);
s(582128);
var l = s(503698),
    i = s.n(l),
    n = s(939249),
    r = s(834730),
    d = s(147925),
    m = s(439248);
s.d(
    e,
    {},
    {
        A: function (a) {
            let { options: e, onClick: s, className: l, hideCaret: t } = a;
            return (0, c.jsx)("div", {
                className: i()(m.zr, l),
                children: e.map((a, e) =>
                    (0, c.jsxs)(
                        n.D,
                        {
                            onClick: () => s(a),
                            className: i()(m.uK, a.className),
                            children: [
                                (0, c.jsx)(r.E, {
                                    className: m.Qq,
                                    color: "none",
                                    variant: "body-md/normal",
                                    children: a.label,
                                }),
                                !t?.(a) && (0, c.jsx)(d.A, { className: m.OW, direction: d.A.Directions.RIGHT }),
                            ],
                        },
                        e,
                    ),
                ),
            });
        },
    },
);
