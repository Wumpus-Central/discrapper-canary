"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    u = n(775602),
    c = n(169909),
    d = n(86e3);
function _(e) {
    let { look: t = c.r0.LARGE_BANNER } = e,
        n = (0, o.bG)([u.A], () => u.A.useReducedMotion),
        { styleLarge: a, styleSmall: _ } = i.useMemo(
            () => ({
                styleLarge: { width: `${10 + 50 * Math.random()}%` },
                styleSmall: { width: `${30 + 60 * Math.random()}%` },
            }),
            [],
        );
    return (0, r.jsxs)("div", {
        className: s()(d.kL, d.NX, { [d.cb]: n, [d.uS]: t !== c.r0.ROW, [d.qd]: t === c.r0.ROW }),
        children: [
            (0, r.jsx)("div", {
                className: s()(d._e, { [d.i2]: t === c.r0.MEDIUM_BANNER, [d.ir]: t === c.r0.LARGE_BANNER }),
            }),
            (0, r.jsxs)("div", {
                className: s()(d.TD, { [d.Ne]: t === c.r0.ROW }),
                children: [
                    (0, r.jsx)("div", { className: s()(d.Pz, { [d.Lu]: t === c.r0.ROW }) }),
                    (0, r.jsxs)("div", {
                        className: d.FS,
                        children: [
                            (0, r.jsx)("div", {
                                className: d.jC,
                                style: a,
                                children: (0, r.jsx)(l.Heading, {
                                    className: d.R,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    lineClamp: 1,
                                    children: "_",
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: d.jC,
                                style: _,
                                children: (0, r.jsx)(l.Text, {
                                    className: d.R,
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    lineClamp: 1,
                                    children: "_",
                                }),
                            }),
                        ],
                    }),
                    t === c.r0.ROW && (0, r.jsx)("div", { className: d.ek }),
                ],
            }),
        ],
    });
}
