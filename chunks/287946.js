"use strict";
r.d(t, { D: () => u, e: () => c });
var n = r(760029),
    i = r(333007),
    o = r(582128),
    a = r(576024),
    s = r(334887);
let l = (0, o.createContext)(null);
function u(e) {
    let t = (0, o.useRef)({});
    return o.createElement(l.Provider, { value: t }, e.children);
}
let c = (0, o.forwardRef)(function (e, t) {
    let { name: r, isVisible: u = !0, children: c, className: f, style: d, ...p } = e,
        [h, m] = (0, o.useState)(u ? "visible" : "hidden"),
        v = (0, o.useContext)(l);
    if (!v) throw Error("<SharedElement> must be rendered inside a <SharedElementTransition>");
    u && "hidden" === h && m("visible"),
        (t = (0, s.U)(t)),
        (0, a.N)(() => {
            let e = t.current,
                n = v.current,
                o = n[r],
                a = null;
            if (e && u && o) {
                m("visible");
                let t = e.getAnimations(),
                    i = o.style.map(([t, r]) => {
                        let n = e.style[t];
                        if ("translate" === t) {
                            let t = o.rect,
                                r = e.getBoundingClientRect(),
                                n = t.left - (null == r ? void 0 : r.left),
                                i = t.top - (null == r ? void 0 : r.top);
                            e.style.translate = `${n}px ${i}px`;
                        } else e.style[t] = r;
                        return [t, n];
                    });
                for (let r of e.getAnimations()) t.includes(r) || r.cancel();
                (a = requestAnimationFrame(() => {
                    for (let [t, r] of ((a = null), i)) e.style[t] = r;
                })),
                    delete n[r];
            } else
                e && u && !o
                    ? (queueMicrotask(() => (0, i.flushSync)(() => m("entering"))),
                      (a = requestAnimationFrame(() => {
                          (a = null), m("visible");
                      })))
                    : e &&
                      !u &&
                      queueMicrotask(() => {
                          n[r]
                              ? (delete n[r],
                                (0, i.flushSync)(() => m("exiting")),
                                Promise.all(e.getAnimations().map((e) => e.finished))
                                    .then(() => m("hidden"))
                                    .catch(() => {}))
                              : m("hidden");
                      });
            return () => {
                if ((null != a && cancelAnimationFrame(a), e && e.isConnected && !e.hasAttribute("data-exiting"))) {
                    let t = window.getComputedStyle(e);
                    if ("none" !== t.transitionProperty) {
                        let i = t.transitionProperty.split(/\s*,\s*/);
                        n[r] = { rect: e.getBoundingClientRect(), style: i.map((e) => [e, t[e]]) };
                    }
                }
            };
        }, [t, v, r, u]);
    let y = (0, n.Sl)({
        children: c,
        className: f,
        style: d,
        values: { isEntering: "entering" === h, isExiting: "exiting" === h },
    });
    return "hidden" === h
        ? null
        : o.createElement("div", {
              ...p,
              ...y,
              ref: t,
              "data-entering": "entering" === h || void 0,
              "data-exiting": "exiting" === h || void 0,
          });
});
