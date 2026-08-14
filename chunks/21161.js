i.d(e, { k: () => f, x: () => C });
var n = i(477900),
    o = i(582128),
    c = i(776310),
    l = i(702841),
    a = i(775602),
    r = i(652215);
let u = {
        confettiCanvas: null,
        cannon: null,
        createConfetti: () => void 0,
        createConfettiAt: () => void 0,
        createMultipleConfetti: () => [],
        createMultipleConfettiAt: () => [],
        addClickListener: () => r.tEg,
        removeClickListener: r.tEg,
    },
    C = o.createContext(u);
function f(t) {
    let {
            children: e,
            confettiCanvas: i,
            spriteCanvas: r,
            baseConfig: f,
            addClickListener: s,
            removeClickListener: d,
        } = t,
        p = (0, c.f9)(i, r),
        v = (0, l.bG)([a.Ay], () => a.Ay.useReducedMotion),
        h = o.useMemo(
            () =>
                v
                    ? u
                    : {
                          confettiCanvas: i,
                          cannon: p,
                          createConfetti: (t, e) => p.createConfetti({ ...f, ...t }, e),
                          createConfettiAt: (t, e, i, n) =>
                              p.createConfetti({ ...f, position: { type: "static", value: { x: t, y: e } }, ...i }, n),
                          createMultipleConfetti: function (t) {
                              let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                                  i = arguments.length > 2 ? arguments[2] : void 0;
                              return p.createMultipleConfetti({ ...f, ...t }, e, i);
                          },
                          createMultipleConfettiAt: function (t, e, i) {
                              let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                                  o = arguments.length > 4 ? arguments[4] : void 0;
                              return p.createMultipleConfetti(
                                  { ...f, position: { type: "static", value: { x: t, y: e } }, ...i },
                                  n,
                                  o,
                              );
                          },
                          addClickListener: s,
                          removeClickListener: d,
                      },
            [s, f, p, i, v, d],
        );
    return (0, n.jsx)(C.Provider, { value: h, children: e });
}
