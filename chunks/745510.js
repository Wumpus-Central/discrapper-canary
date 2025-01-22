r.d(n, {
    d: function () {
        return p;
    },
    h: function () {
        return f;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(119617),
    s = r(399606),
    l = r(607070),
    u = r(981631);
let c = 20,
    d = {
        confettiCanvas: null,
        cannon: null,
        createConfetti: () => void 0,
        createConfettiAt: () => void 0,
        createMultipleConfetti: () => [],
        createMultipleConfettiAt: () => [],
        addClickListener: () => u.dG4,
        removeClickListener: u.dG4
    },
    f = a.createContext(d);
function p(e) {
    let { children: n, confettiCanvas: r, spriteCanvas: u, baseConfig: p, addClickListener: h, removeClickListener: _ } = e,
        m = (0, o.uR)(r, u),
        g = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
        E = a.useMemo(
            () =>
                g
                    ? d
                    : {
                          confettiCanvas: r,
                          cannon: m,
                          createConfetti: (e, n) =>
                              m.createConfetti(
                                  {
                                      ...p,
                                      ...e
                                  },
                                  n
                              ),
                          createConfettiAt: (e, n, r, i) =>
                              m.createConfetti(
                                  {
                                      ...p,
                                      position: {
                                          type: 'static',
                                          value: {
                                              x: e,
                                              y: n
                                          }
                                      },
                                      ...r
                                  },
                                  i
                              ),
                          createMultipleConfetti: function (e) {
                              let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c,
                                  r = arguments.length > 2 ? arguments[2] : void 0;
                              return m.createMultipleConfetti(
                                  {
                                      ...p,
                                      ...e
                                  },
                                  n,
                                  r
                              );
                          },
                          createMultipleConfettiAt: function (e, n, r) {
                              let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c,
                                  a = arguments.length > 4 ? arguments[4] : void 0;
                              return m.createMultipleConfetti(
                                  {
                                      ...p,
                                      position: {
                                          type: 'static',
                                          value: {
                                              x: e,
                                              y: n
                                          }
                                      },
                                      ...r
                                  },
                                  i,
                                  a
                              );
                          },
                          addClickListener: h,
                          removeClickListener: _
                      },
            [h, p, m, r, g, _]
        );
    return (0, i.jsx)(f.Provider, {
        value: E,
        children: n
    });
}
