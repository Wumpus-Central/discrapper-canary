"use strict";
n.d(t, { C1: () => c, Or: () => d, YR: () => o });
var i = n(627968),
    r = n(353640),
    a = n(17928),
    s = n(111162),
    l = n(650761);
let o = 64,
    d = (0, r.v)((e) => ({
        horizontalSpacing: 4,
        verticalSpacing: 4,
        setHorizontalSpacing: (t) => {
            e({ horizontalSpacing: Math.round(Math.min(Math.max(t, 0), o)) });
        },
        setVerticalSpacing: (t) => {
            e({ verticalSpacing: Math.round(Math.min(Math.max(t, 0), o)) });
        },
    }));
function c() {
    let e = (0, a.bG)([s.default], () => s.default.layoutDebuggingEnabled),
        { horizontalSpacing: t, verticalSpacing: n } = d();
    return e
        ? (0, i.jsx)("div", {
              className: l.k,
              children: (0, i.jsx)("div", {
                  className: l.Z,
                  "data-horizontal": t > 0,
                  "data-vertical": n > 0,
                  style: { "--custom-grid-horizontal-spacing": `${t}px`, "--custom-grid-vertical-spacing": `${n}px` },
              }),
          })
        : null;
}
