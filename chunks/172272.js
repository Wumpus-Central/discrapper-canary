"use strict";
n.d(t, { C1: () => d, Or: () => c, YR: () => u });
var r = n(627968),
    i = n(353640),
    a = n(311907),
    s = n(111162),
    o = n(355001);
let l = 4,
    u = 64,
    c = (0, i.v)((e) => ({
        horizontalSpacing: l,
        verticalSpacing: l,
        setHorizontalSpacing: (t) => {
            e({ horizontalSpacing: Math.round(Math.min(Math.max(t, 0), u)) });
        },
        setVerticalSpacing: (t) => {
            e({ verticalSpacing: Math.round(Math.min(Math.max(t, 0), u)) });
        },
    }));
function d() {
    let e = (0, a.bG)([s.default], () => s.default.layoutDebuggingEnabled),
        { horizontalSpacing: t, verticalSpacing: n } = c();
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
