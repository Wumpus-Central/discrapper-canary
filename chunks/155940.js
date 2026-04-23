n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(534514),
    c = n(834730),
    d = n(775602),
    u = n(169909),
    m = n(357887);
function p(e) {
    let { look: t = u.r0.LARGE_BANNER } = e,
        n = (0, r.bG)([d.A], () => d.A.useReducedMotion),
        { styleLarge: a, styleSmall: p } = l.useMemo(
            () => ({
                styleLarge: { width: `${10 + 50 * Math.random()}%` },
                styleSmall: { width: `${30 + 60 * Math.random()}%` },
            }),
            [],
        );
    return (0, i.jsxs)("div", {
        className: s()(m.kL, m.NX, { [m.cb]: n, [m.uS]: t !== u.r0.ROW, [m.qd]: t === u.r0.ROW }),
        children: [
            (0, i.jsx)("div", {
                className: s()(m._e, { [m.i2]: t === u.r0.MEDIUM_BANNER, [m.ir]: t === u.r0.LARGE_BANNER }),
            }),
            (0, i.jsxs)("div", {
                className: s()(m.TD, { [m.Ne]: t === u.r0.ROW }),
                children: [
                    (0, i.jsx)("div", { className: s()(m.Pz, { [m.Lu]: t === u.r0.ROW }) }),
                    (0, i.jsxs)("div", {
                        className: m.FS,
                        children: [
                            (0, i.jsx)("div", {
                                className: m.jC,
                                style: a,
                                children: (0, i.jsx)(o.D, {
                                    className: m.R,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    lineClamp: 1,
                                    children: "_",
                                }),
                            }),
                            (0, i.jsx)("div", {
                                className: m.jC,
                                style: p,
                                children: (0, i.jsx)(c.E, {
                                    className: m.R,
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    lineClamp: 1,
                                    children: "_",
                                }),
                            }),
                        ],
                    }),
                    t === u.r0.ROW && (0, i.jsx)("div", { className: m.ek }),
                ],
            }),
        ],
    });
}
