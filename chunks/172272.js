"use strict";
n.d(t, { C1: () => d, Or: () => u, YR: () => l });
var r = n(627968),
    i = n(353640),
    s = n(311907),
    a = n(111162),
    o = n(650761);
let l = 64,
    u = (0, i.v)((e) => ({
        horizontalSpacing: 4,
        verticalSpacing: 4,
        setHorizontalSpacing: (t) => {
            e({ horizontalSpacing: Math.round(Math.min(Math.max(t, 0), l)) });
        },
        setVerticalSpacing: (t) => {
            e({ verticalSpacing: Math.round(Math.min(Math.max(t, 0), l)) });
        },
    }));
function d() {
    let e = (0, s.bG)([a.default], () => a.default.layoutDebuggingEnabled),
        { horizontalSpacing: t, verticalSpacing: n } = u();
    return e
        ? (0, r.jsx)("div", {
              className: o.k,
              children: (0, r.jsx)("div", {
                  className: o.Z,
                  "data-horizontal": t > 0,
                  "data-vertical": n > 0,
                  style: { "--custom-grid-horizontal-spacing": `${t}px`, "--custom-grid-vertical-spacing": `${n}px` },
              }),
          })
        : null;
}
