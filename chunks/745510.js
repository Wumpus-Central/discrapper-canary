n.d(t, {
    d: () => f,
    h: () => d
});
var i = n(200651),
    r = n(192379),
    a = n(119617),
    s = n(399606),
    o = n(607070),
    l = n(981631);
let u = 20,
    c = {
        confettiCanvas: null,
        cannon: null,
        createConfetti: () => void 0,
        createConfettiAt: () => void 0,
        createMultipleConfetti: () => [],
        createMultipleConfettiAt: () => [],
        addClickListener: () => l.dG4,
        removeClickListener: l.dG4
    },
    d = r.createContext(c);
function f(e) {
    let { children: t, confettiCanvas: n, spriteCanvas: l, baseConfig: f, addClickListener: _, removeClickListener: p } = e,
        h = (0, a.uR)(n, l),
        m = (0, s.e7)([o.Z], () => o.Z.useReducedMotion),
        g = r.useMemo(
            () =>
                m
                    ? c
                    : {
                          confettiCanvas: n,
                          cannon: h,
                          createConfetti: (e, t) =>
                              h.createConfetti(
                                  {
                                      ...f,
                                      ...e
                                  },
                                  t
                              ),
                          createConfettiAt: (e, t, n, i) =>
                              h.createConfetti(
                                  {
                                      ...f,
                                      position: {
                                          type: 'static',
                                          value: {
                                              x: e,
                                              y: t
                                          }
                                      },
                                      ...n
                                  },
                                  i
                              ),
                          createMultipleConfetti: function (e) {
                              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u,
                                  n = arguments.length > 2 ? arguments[2] : void 0;
                              return h.createMultipleConfetti(
                                  {
                                      ...f,
                                      ...e
                                  },
                                  t,
                                  n
                              );
                          },
                          createMultipleConfettiAt: function (e, t, n) {
                              let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u,
                                  r = arguments.length > 4 ? arguments[4] : void 0;
                              return h.createMultipleConfetti(
                                  {
                                      ...f,
                                      position: {
                                          type: 'static',
                                          value: {
                                              x: e,
                                              y: t
                                          }
                                      },
                                      ...n
                                  },
                                  i,
                                  r
                              );
                          },
                          addClickListener: _,
                          removeClickListener: p
                      },
            [_, f, h, n, m, p]
        );
    return (0, i.jsx)(d.Provider, {
        value: g,
        children: t
    });
}
