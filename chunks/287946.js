"use strict";
n.d(t, { D: () => u, e: () => c });
var r = n(760029),
    i = n(333007),
    a = n(582128),
    o = n(576024),
    s = n(334887);
let l = (0, a.createContext)(null);
function u(e) {
    let t = (0, a.useRef)({});
    return a.createElement(l.Provider, { value: t }, e.children);
}
let c = (0, a.forwardRef)(function (e, t) {
    let { name: n, isVisible: u = !0, children: c, className: d, style: f, ...p } = e,
        [h, m] = (0, a.useState)(u ? "visible" : "hidden"),
        g = (0, a.useContext)(l);
    if (!g) throw Error("<SharedElement> must be rendered inside a <SharedElementTransition>");
    u && "hidden" === h && m("visible"),
        (t = (0, s.U)(t)),
        (0, o.N)(() => {
            let e = t.current,
                r = g.current,
                a = r[n],
                o = null;
            if (e && u && a) {
                m("visible");
                let t = e.getAnimations(),
                    i = a.style.map(([t, n]) => {
                        let r = e.style[t];
                        if ("translate" === t) {
                            let t = a.rect,
                                n = e.getBoundingClientRect(),
                                r = t.left - (null == n ? void 0 : n.left),
                                i = t.top - (null == n ? void 0 : n.top);
                            e.style.translate = `${r}px ${i}px`;
                        } else e.style[t] = n;
                        return [t, r];
                    });
                for (let n of e.getAnimations()) t.includes(n) || n.cancel();
                (o = requestAnimationFrame(() => {
                    for (let [t, n] of ((o = null), i)) e.style[t] = n;
                })),
                    delete r[n];
            } else
                e && u && !a
                    ? (queueMicrotask(() => (0, i.flushSync)(() => m("entering"))),
                      (o = requestAnimationFrame(() => {
                          (o = null), m("visible");
                      })))
                    : e &&
                      !u &&
                      queueMicrotask(() => {
                          r[n]
                              ? (delete r[n],
                                (0, i.flushSync)(() => m("exiting")),
                                Promise.all(e.getAnimations().map((e) => e.finished))
                                    .then(() => m("hidden"))
                                    .catch(() => {}))
                              : m("hidden");
                      });
            return () => {
                if ((null != o && cancelAnimationFrame(o), e && e.isConnected && !e.hasAttribute("data-exiting"))) {
                    let t = window.getComputedStyle(e);
                    if ("none" !== t.transitionProperty) {
                        let i = t.transitionProperty.split(/\s*,\s*/);
                        r[n] = { rect: e.getBoundingClientRect(), style: i.map((e) => [e, t[e]]) };
                    }
                }
            };
        }, [t, g, n, u]);
    let v = (0, r.Sl)({
        children: c,
        className: d,
        style: f,
        values: { isEntering: "entering" === h, isExiting: "exiting" === h },
    });
    return "hidden" === h
        ? null
        : a.createElement("div", {
              ...p,
              ...v,
              ref: t,
              "data-entering": "entering" === h || void 0,
              "data-exiting": "exiting" === h || void 0,
          });
});
