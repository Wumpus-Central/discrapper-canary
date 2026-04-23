n.d(t, { k: () => E, x: () => _ });
var i = n(627968),
    r = n(64700),
    a = n(106778),
    l = n(702841),
    s = n(775602),
    o = n(652215);
let u = {
        confettiCanvas: null,
        cannon: null,
        createConfetti: () => void 0,
        createConfettiAt: () => void 0,
        createMultipleConfetti: () => [],
        createMultipleConfettiAt: () => [],
        addClickListener: () => o.tEg,
        removeClickListener: o.tEg,
    },
    _ = r.createContext(u);
function E(e) {
    let {
            children: t,
            confettiCanvas: n,
            spriteCanvas: o,
            baseConfig: E,
            addClickListener: A,
            removeClickListener: c,
        } = e,
        d = (0, a.f9)(n, o),
        I = (0, l.bG)([s.A], () => s.A.useReducedMotion),
        T = r.useMemo(
            () =>
                I
                    ? u
                    : {
                          confettiCanvas: n,
                          cannon: d,
                          createConfetti: (e, t) => d.createConfetti({ ...E, ...e }, t),
                          createConfettiAt: (e, t, n, i) =>
                              d.createConfetti({ ...E, position: { type: "static", value: { x: e, y: t } }, ...n }, i),
                          createMultipleConfetti: function (e) {
                              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                                  n = arguments.length > 2 ? arguments[2] : void 0;
                              return d.createMultipleConfetti({ ...E, ...e }, t, n);
                          },
                          createMultipleConfettiAt: function (e, t, n) {
                              let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                                  r = arguments.length > 4 ? arguments[4] : void 0;
                              return d.createMultipleConfetti(
                                  { ...E, position: { type: "static", value: { x: e, y: t } }, ...n },
                                  i,
                                  r,
                              );
                          },
                          addClickListener: A,
                          removeClickListener: c,
                      },
            [A, E, d, n, I, c],
        );
    return (0, i.jsx)(_.Provider, { value: T, children: t });
}
