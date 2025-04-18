n.d(t, {
    K: () => d,
    i: () => u
});
var r = n(200651),
    i = n(290486),
    a = n(442837),
    o = n(857192),
    s = n(953543);
let l = 4,
    c = 64,
    u = (0, i.U)((e) => ({
        horizontalSpacing: l,
        verticalSpacing: l,
        maxHorizontalSpacing: c,
        maxVerticalSpacing: c,
        setHorizontalSpacing: (t) => {
            e({ horizontalSpacing: Math.round(Math.min(Math.max(t, 0), c)) });
        },
        setVerticalSpacing: (t) => {
            e({ verticalSpacing: Math.round(Math.min(Math.max(t, 0), c)) });
        }
    }));
function d() {
    let e = (0, a.e7)([o.default], () => o.default.layoutDebuggingEnabled),
        { horizontalSpacing: t, verticalSpacing: n } = u();
    return e
        ? (0, r.jsx)('div', {
              className: s.container,
              children: (0, r.jsx)('div', {
                  className: s.gridOverlay,
                  'data-horizontal': t > 0,
                  'data-vertical': n > 0,
                  style: {
                      '--custom-grid-horizontal-spacing': ''.concat(t, 'px'),
                      '--custom-grid-vertical-spacing': ''.concat(n, 'px')
                  }
              })
          })
        : null;
}
