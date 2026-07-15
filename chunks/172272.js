n.d(t, { C1: () => u, Or: () => o, YR: () => c });
var i = n(627968),
    s = n(353640),
    r = n(17928),
    l = n(111162),
    a = n(650761);
let c = 64,
    o = (0, s.v)((e) => ({
        horizontalSpacing: 4,
        verticalSpacing: 4,
        setHorizontalSpacing: (t) => {
            e({ horizontalSpacing: Math.round(Math.min(Math.max(t, 0), c)) });
        },
        setVerticalSpacing: (t) => {
            e({ verticalSpacing: Math.round(Math.min(Math.max(t, 0), c)) });
        },
    }));
function u() {
    let e = (0, r.bG)([l.default], () => l.default.layoutDebuggingEnabled),
        { horizontalSpacing: t, verticalSpacing: n } = o();
    return e
        ? (0, i.jsx)("div", {
              className: a.k,
              children: (0, i.jsx)("div", {
                  className: a.Z,
                  "data-horizontal": t > 0,
                  "data-vertical": n > 0,
                  style: { "--custom-grid-horizontal-spacing": `${t}px`, "--custom-grid-vertical-spacing": `${n}px` },
              }),
          })
        : null;
}
