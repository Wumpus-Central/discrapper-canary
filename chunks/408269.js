"use strict";
n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(379418),
    s = n(900090),
    o = n(194845);
function l(e, t) {
    return "type" in e
        ? "timestamp" !== e.type
            ? null
            : s.A.getCurrentConfig({ location: "renderElement" }, { autoTrackExposure: !1 }).enabled
              ? (0, r.jsx)(u, { ...t, timestamp: e.parsed })
              : null
        : null;
}
function u(e) {
    let { timestamp: t, replace: n } = e,
        s = (e) => {
            let { timestamp: r, format: i } = e,
                s = null != r ? Math.floor(r.getTime() / 1e3) : t.timestamp,
                o = i ?? t.format;
            n((0, a.tf)(s, o));
        };
    return (0, r.jsxs)("div", {
        className: o.k,
        children: [
            (0, r.jsx)(i.J3s, {
                value: t.parsed,
                onSelect: (e) => {
                    s({ timestamp: e.toDate() });
                },
            }),
            (0, r.jsx)(i.czz, {
                value: t.parsed,
                onChange: (e) => {
                    s({ timestamp: e.toDate() });
                },
            }),
            (0, r.jsx)(i.z6M, {
                options: Object.entries(a.kx).map((e) => {
                    let [n, r] = e;
                    return { name: r(t.parsed), value: n };
                }),
                value: t.format ?? a.$z,
                onChange: (e) => {
                    s({ format: e });
                },
            }),
        ],
    });
}
