n.d(t, {
    K: () => d,
    i: () => c
});
var i = n(200651),
    r = n(15729),
    a = n(442837),
    s = n(857192),
    o = n(496906);
let l = 4,
    u = 64,
    c = (0, r.U)((e) => ({
        horizontalSpacing: l,
        verticalSpacing: l,
        maxHorizontalSpacing: u,
        maxVerticalSpacing: u,
        setHorizontalSpacing: (t) => {
            e({ horizontalSpacing: Math.round(Math.min(Math.max(t, 0), u)) });
        },
        setVerticalSpacing: (t) => {
            e({ verticalSpacing: Math.round(Math.min(Math.max(t, 0), u)) });
        }
    }));
function d() {
    let e = (0, a.e7)([s.default], () => s.default.layoutDebuggingEnabled),
        { horizontalSpacing: t, verticalSpacing: n } = c();
    return e
        ? (0, i.jsx)('div', {
              className: o.container,
              children: (0, i.jsx)('div', {
                  className: o.gridOverlay,
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
