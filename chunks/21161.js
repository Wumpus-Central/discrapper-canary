"use strict";
n.d(t, { k: () => _, x: () => d });
var r = n(627968),
    i = n(64700),
    a = n(106778),
    s = n(417597),
    o = n(775602),
    l = n(652215);
let u = 20,
    c = {
        confettiCanvas: null,
        cannon: null,
        createConfetti: () => void 0,
        createConfettiAt: () => void 0,
        createMultipleConfetti: () => [],
        createMultipleConfettiAt: () => [],
        addClickListener: () => l.tEg,
        removeClickListener: l.tEg,
    },
    d = i.createContext(c);
function _(e) {
    let {
            children: t,
            confettiCanvas: n,
            spriteCanvas: l,
            baseConfig: _,
            addClickListener: f,
            removeClickListener: p,
        } = e,
        h = (0, a.f9)(n, l),
        m = (0, s.bG)([o.A], () => o.A.useReducedMotion),
        g = i.useMemo(
            () =>
                m
                    ? c
                    : {
                          confettiCanvas: n,
                          cannon: h,
                          createConfetti: (e, t) => h.createConfetti({ ..._, ...e }, t),
                          createConfettiAt: (e, t, n, r) =>
                              h.createConfetti({ ..._, position: { type: "static", value: { x: e, y: t } }, ...n }, r),
                          createMultipleConfetti: function (e) {
                              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u,
                                  n = arguments.length > 2 ? arguments[2] : void 0;
                              return h.createMultipleConfetti({ ..._, ...e }, t, n);
                          },
                          createMultipleConfettiAt: function (e, t, n) {
                              let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u,
                                  i = arguments.length > 4 ? arguments[4] : void 0;
                              return h.createMultipleConfetti(
                                  { ..._, position: { type: "static", value: { x: e, y: t } }, ...n },
                                  r,
                                  i,
                              );
                          },
                          addClickListener: f,
                          removeClickListener: p,
                      },
            [f, _, h, n, m, p],
        );
    return (0, r.jsx)(d.Provider, { value: g, children: t });
}
