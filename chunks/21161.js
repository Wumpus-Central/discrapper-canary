"use strict";
n.d(t, { k: () => u, x: () => c });
var i = n(477900),
    r = n(582128),
    a = n(776310),
    s = n(702841),
    l = n(775602),
    o = n(652215);
let d = {
        confettiCanvas: null,
        cannon: null,
        createConfetti: () => void 0,
        createConfettiAt: () => void 0,
        createMultipleConfetti: () => [],
        createMultipleConfettiAt: () => [],
        addClickListener: () => o.tEg,
        removeClickListener: o.tEg,
    },
    c = r.createContext(d);
function u(e) {
    let {
            children: t,
            confettiCanvas: n,
            spriteCanvas: o,
            baseConfig: u,
            addClickListener: _,
            removeClickListener: E,
        } = e,
        A = (0, a.f9)(n, o),
        h = (0, s.bG)([l.Ay], () => l.Ay.useReducedMotion),
        I = r.useMemo(
            () =>
                h
                    ? d
                    : {
                          confettiCanvas: n,
                          cannon: A,
                          createConfetti: (e, t) => A.createConfetti({ ...u, ...e }, t),
                          createConfettiAt: (e, t, n, i) =>
                              A.createConfetti({ ...u, position: { type: "static", value: { x: e, y: t } }, ...n }, i),
                          createMultipleConfetti: function (e) {
                              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                                  n = arguments.length > 2 ? arguments[2] : void 0;
                              return A.createMultipleConfetti({ ...u, ...e }, t, n);
                          },
                          createMultipleConfettiAt: function (e, t, n) {
                              let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                                  r = arguments.length > 4 ? arguments[4] : void 0;
                              return A.createMultipleConfetti(
                                  { ...u, position: { type: "static", value: { x: e, y: t } }, ...n },
                                  i,
                                  r,
                              );
                          },
                          addClickListener: _,
                          removeClickListener: E,
                      },
            [_, u, A, n, h, E],
        );
    return (0, i.jsx)(c.Provider, { value: I, children: t });
}
