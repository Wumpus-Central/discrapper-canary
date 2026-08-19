"use strict";
r.d(t, { D: () => u, e: () => c });
var n = r(760029),
    o = r(333007),
    i = r(582128),
    a = r(576024),
    s = r(334887);
let l = (0, i.createContext)(null);
function u(e) {
    let t = (0, i.useRef)({});
    return i.createElement(l.Provider, { value: t }, e.children);
}
let c = (0, i.forwardRef)(function (e, t) {
    let { name: r, isVisible: u = !0, children: c, className: f, style: p, ...d } = e,
        [h, m] = (0, i.useState)(u ? "visible" : "hidden"),
        v = (0, i.useContext)(l);
    if (!v) throw Error("<SharedElement> must be rendered inside a <SharedElementTransition>");
    u && "hidden" === h && m("visible"),
        (t = (0, s.U)(t)),
        (0, a.N)(() => {
            let e = t.current,
                n = v.current,
                i = n[r],
                a = null;
            if (e && u && i) {
                m("visible");
                let t = e.getAnimations(),
                    o = i.style.map(([t, r]) => {
                        let n = e.style[t];
                        if ("translate" === t) {
                            let t = i.rect,
                                r = e.getBoundingClientRect(),
                                n = t.left - (null == r ? void 0 : r.left),
                                o = t.top - (null == r ? void 0 : r.top);
                            e.style.translate = `${n}px ${o}px`;
                        } else e.style[t] = r;
                        return [t, n];
                    });
                for (let r of e.getAnimations()) t.includes(r) || r.cancel();
                (a = requestAnimationFrame(() => {
                    for (let [t, r] of ((a = null), o)) e.style[t] = r;
                })),
                    delete n[r];
            } else
                e && u && !i
                    ? (queueMicrotask(() => (0, o.flushSync)(() => m("entering"))),
                      (a = requestAnimationFrame(() => {
                          (a = null), m("visible");
                      })))
                    : e &&
                      !u &&
                      queueMicrotask(() => {
                          n[r]
                              ? (delete n[r],
                                (0, o.flushSync)(() => m("exiting")),
                                Promise.all(e.getAnimations().map((e) => e.finished))
                                    .then(() => m("hidden"))
                                    .catch(() => {}))
                              : m("hidden");
                      });
            return () => {
                if ((null != a && cancelAnimationFrame(a), e && e.isConnected && !e.hasAttribute("data-exiting"))) {
                    let t = window.getComputedStyle(e);
                    if ("none" !== t.transitionProperty) {
                        let o = t.transitionProperty.split(/\s*,\s*/);
                        n[r] = { rect: e.getBoundingClientRect(), style: o.map((e) => [e, t[e]]) };
                    }
                }
            };
        }, [t, v, r, u]);
    let y = (0, n.Sl)({
        children: c,
        className: f,
        style: p,
        values: { isEntering: "entering" === h, isExiting: "exiting" === h },
    });
    return "hidden" === h
        ? null
        : i.createElement("div", {
              ...d,
              ...y,
              ref: t,
              "data-entering": "entering" === h || void 0,
              "data-exiting": "exiting" === h || void 0,
          });
});
