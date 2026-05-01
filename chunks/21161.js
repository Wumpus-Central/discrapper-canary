n.d(t, { k: () => u, x: () => o });
var i = n(627968),
    r = n(64700),
    a = n(106778),
    l = n(702841),
    s = n(775602),
    E = n(652215);
let _ = {
        confettiCanvas: null,
        cannon: null,
        createConfetti: () => void 0,
        createConfettiAt: () => void 0,
        createMultipleConfetti: () => [],
        createMultipleConfettiAt: () => [],
        addClickListener: () => E.tEg,
        removeClickListener: E.tEg,
    },
    o = r.createContext(_);
function u(e) {
    let {
            children: t,
            confettiCanvas: n,
            spriteCanvas: E,
            baseConfig: u,
            addClickListener: A,
            removeClickListener: d,
        } = e,
        c = (0, a.f9)(n, E),
        I = (0, l.bG)([s.A], () => s.A.useReducedMotion),
        T = r.useMemo(
            () =>
                I
                    ? _
                    : {
                          confettiCanvas: n,
                          cannon: c,
                          createConfetti: (e, t) => c.createConfetti({ ...u, ...e }, t),
                          createConfettiAt: (e, t, n, i) =>
                              c.createConfetti({ ...u, position: { type: "static", value: { x: e, y: t } }, ...n }, i),
                          createMultipleConfetti: function (e) {
                              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                                  n = arguments.length > 2 ? arguments[2] : void 0;
                              return c.createMultipleConfetti({ ...u, ...e }, t, n);
                          },
                          createMultipleConfettiAt: function (e, t, n) {
                              let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                                  r = arguments.length > 4 ? arguments[4] : void 0;
                              return c.createMultipleConfetti(
                                  { ...u, position: { type: "static", value: { x: e, y: t } }, ...n },
                                  i,
                                  r,
                              );
                          },
                          addClickListener: A,
                          removeClickListener: d,
                      },
            [A, u, c, n, I, d],
        );
    return (0, i.jsx)(o.Provider, { value: T, children: t });
}
