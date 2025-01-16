r.d(n, {
    K: function () {
        return f;
    },
    i: function () {
        return d;
    }
});
var i = r(200651),
    a = r(15729),
    s = r(442837),
    o = r(857192),
    l = r(743013);
let u = 4,
    c = 64,
    d = (0, a.U)((e) => ({
        horizontalSpacing: u,
        verticalSpacing: u,
        maxHorizontalSpacing: c,
        maxVerticalSpacing: c,
        setHorizontalSpacing: (n) => {
            e({ horizontalSpacing: Math.round(Math.min(Math.max(n, 0), c)) });
        },
        setVerticalSpacing: (n) => {
            e({ verticalSpacing: Math.round(Math.min(Math.max(n, 0), c)) });
        }
    }));
function f() {
    let e = (0, s.e7)([o.default], () => o.default.layoutDebuggingEnabled),
        { horizontalSpacing: n, verticalSpacing: r } = d();
    return e
        ? (0, i.jsx)('div', {
              className: l.container,
              children: (0, i.jsx)('div', {
                  className: l.gridOverlay,
                  'data-horizontal': n > 0,
                  'data-vertical': r > 0,
                  style: {
                      '--custom-grid-horizontal-spacing': ''.concat(n, 'px'),
                      '--custom-grid-vertical-spacing': ''.concat(r, 'px')
                  }
              })
          })
        : null;
}
