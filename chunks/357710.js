"use strict";
n.d(t, { D: () => u, e: () => c });
var i = n(825913),
    r = n(340287),
    s = n(64700),
    a = n(3388),
    o = n(533715);
let l = (0, s.createContext)(null);
function u(e) {
    let t = (0, s.useRef)({});
    return s.createElement(l.Provider, { value: t }, e.children);
}
let c = (0, s.forwardRef)(function (e, t) {
    let { name: n, isVisible: u = !0, children: c, className: d, style: _, ...h } = e,
        [f, p] = (0, s.useState)(u ? "visible" : "hidden"),
        E = (0, s.useContext)(l);
    if (!E) throw Error("<SharedElement> must be rendered inside a <SharedElementTransition>");
    u && "hidden" === f && p("visible"),
        (t = (0, o.U)(t)),
        (0, a.N)(() => {
            let e = t.current,
                i = E.current,
                s = i[n],
                a = null;
            if (e && u && s) {
                p("visible");
                let t = e.getAnimations(),
                    r = s.style.map(([t, n]) => {
                        let i = e.style[t];
                        if ("translate" === t) {
                            let t = s.rect,
                                n = e.getBoundingClientRect(),
                                i = t.left - (null == n ? void 0 : n.left),
                                r = t.top - (null == n ? void 0 : n.top);
                            e.style.translate = `${i}px ${r}px`;
                        } else e.style[t] = n;
                        return [t, i];
                    });
                for (let n of e.getAnimations()) t.includes(n) || n.cancel();
                (a = requestAnimationFrame(() => {
                    for (let [t, n] of ((a = null), r)) e.style[t] = n;
                })),
                    delete i[n];
            } else
                e && u && !s
                    ? (queueMicrotask(() => (0, r.flushSync)(() => p("entering"))),
                      (a = requestAnimationFrame(() => {
                          (a = null), p("visible");
                      })))
                    : e &&
                      !u &&
                      queueMicrotask(() => {
                          i[n]
                              ? (delete i[n],
                                (0, r.flushSync)(() => p("exiting")),
                                Promise.all(e.getAnimations().map((e) => e.finished))
                                    .then(() => p("hidden"))
                                    .catch(() => {}))
                              : p("hidden");
                      });
            return () => {
                if ((null != a && cancelAnimationFrame(a), e && e.isConnected && !e.hasAttribute("data-exiting"))) {
                    let t = window.getComputedStyle(e);
                    if ("none" !== t.transitionProperty) {
                        let r = t.transitionProperty.split(/\s*,\s*/);
                        i[n] = { rect: e.getBoundingClientRect(), style: r.map((e) => [e, t[e]]) };
                    }
                }
            };
        }, [t, E, n, u]);
    let m = (0, i.Sl)({
        children: c,
        className: d,
        style: _,
        values: { isEntering: "entering" === f, isExiting: "exiting" === f },
    });
    return "hidden" === f
        ? null
        : s.createElement("div", {
              ...h,
              ...m,
              ref: t,
              "data-entering": "entering" === f || void 0,
              "data-exiting": "exiting" === f || void 0,
          });
});
