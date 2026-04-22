"use strict";
n.d(t, { k: () => c, x: () => d });
var r = n(627968),
    i = n(64700),
    s = n(106778),
    a = n(417597),
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
    d = i.createContext(u);
function c(e) {
    let {
            children: t,
            confettiCanvas: n,
            spriteCanvas: l,
            baseConfig: c,
            addClickListener: _,
            removeClickListener: f,
        } = e,
        E = (0, s.f9)(n, l),
        h = (0, a.bG)([o.A], () => o.A.useReducedMotion),
        p = i.useMemo(
            () =>
                h
                    ? u
                    : {
                          confettiCanvas: n,
                          cannon: E,
                          createConfetti: (e, t) => E.createConfetti({ ...c, ...e }, t),
                          createConfettiAt: (e, t, n, r) =>
                              E.createConfetti({ ...c, position: { type: "static", value: { x: e, y: t } }, ...n }, r),
                          createMultipleConfetti: function (e) {
                              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                                  n = arguments.length > 2 ? arguments[2] : void 0;
                              return E.createMultipleConfetti({ ...c, ...e }, t, n);
                          },
                          createMultipleConfettiAt: function (e, t, n) {
                              let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                                  i = arguments.length > 4 ? arguments[4] : void 0;
                              return E.createMultipleConfetti(
                                  { ...c, position: { type: "static", value: { x: e, y: t } }, ...n },
                                  r,
                                  i,
                              );
                          },
                          addClickListener: _,
                          removeClickListener: f,
                      },
            [_, c, E, n, h, f],
        );
    return (0, r.jsx)(d.Provider, { value: p, children: t });
}
