"use strict";
n.d(t, { C1: () => _, Or: () => d, YR: () => l });
var i = n(627968),
    r = n(353640),
    s = n(17928),
    a = n(111162),
    o = n(650761);
let l = 64,
    d = (0, r.v)((e) => ({
        horizontalSpacing: 4,
        verticalSpacing: 4,
        setHorizontalSpacing: (t) => {
            e({ horizontalSpacing: Math.round(Math.min(Math.max(t, 0), l)) });
        },
        setVerticalSpacing: (t) => {
            e({ verticalSpacing: Math.round(Math.min(Math.max(t, 0), l)) });
        },
    }));
function _() {
    let e = (0, s.bG)([a.default], () => a.default.layoutDebuggingEnabled),
        { horizontalSpacing: t, verticalSpacing: n } = d();
    return e
        ? (0, i.jsx)("div", {
              className: o.k,
              children: (0, i.jsx)("div", {
                  className: o.Z,
                  "data-horizontal": t > 0,
                  "data-vertical": n > 0,
                  style: { "--custom-grid-horizontal-spacing": `${t}px`, "--custom-grid-vertical-spacing": `${n}px` },
              }),
          })
        : null;
}
