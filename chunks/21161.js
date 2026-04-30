"use strict";
n.d(t, { k: () => d, x: () => c });
var i = n(627968),
    r = n(64700),
    s = n(106778),
    a = n(702841),
    o = n(775602),
    l = n(652215);
let u = {
        confettiCanvas: null,
        cannon: null,
        createConfetti: () => void 0,
        createConfettiAt: () => void 0,
        createMultipleConfetti: () => [],
        createMultipleConfettiAt: () => [],
        addClickListener: () => l.tEg,
        removeClickListener: l.tEg,
    },
    c = r.createContext(u);
function d(e) {
    let {
            children: t,
            confettiCanvas: n,
            spriteCanvas: l,
            baseConfig: d,
            addClickListener: _,
            removeClickListener: f,
        } = e,
        h = (0, s.f9)(n, l),
        p = (0, a.bG)([o.A], () => o.A.useReducedMotion),
        E = r.useMemo(
            () =>
                p
                    ? u
                    : {
                          confettiCanvas: n,
                          cannon: h,
                          createConfetti: (e, t) => h.createConfetti({ ...d, ...e }, t),
                          createConfettiAt: (e, t, n, i) =>
                              h.createConfetti({ ...d, position: { type: "static", value: { x: e, y: t } }, ...n }, i),
                          createMultipleConfetti: function (e) {
                              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                                  n = arguments.length > 2 ? arguments[2] : void 0;
                              return h.createMultipleConfetti({ ...d, ...e }, t, n);
                          },
                          createMultipleConfettiAt: function (e, t, n) {
                              let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                                  r = arguments.length > 4 ? arguments[4] : void 0;
                              return h.createMultipleConfetti(
                                  { ...d, position: { type: "static", value: { x: e, y: t } }, ...n },
                                  i,
                                  r,
                              );
                          },
                          addClickListener: _,
                          removeClickListener: f,
                      },
            [_, d, h, n, p, f],
        );
    return (0, i.jsx)(c.Provider, { value: E, children: t });
}
