n.d(t, {
    r: () => u,
    y: () => c,
});
var r = n(595707),
    i = n(24156),
    a = n(473749),
    o = n(159447),
    s = n(413565);
let l = (0, a.createContext)(null);
function c(e) {
    let t = (0, a.useRef)({});
    return a.createElement(l.Provider, { value: t }, e.children);
}
let u = (0, a.forwardRef)(function (e, t) {
    let { name: n, isVisible: c = !0, children: u, className: d, style: f, ...p } = e,
        [_, m] = (0, a.useState)(c ? "visible" : "hidden"),
        h = (0, a.useContext)(l);
    if (!h) throw Error("<SharedElement> must be rendered inside a <SharedElementTransition>");
    c && "hidden" === _ && m("visible"),
        (t = (0, s.B)(t)),
        (0, o.b)(() => {
            let e = t.current,
                r = h.current,
                a = r[n],
                o = null;
            if (e && c && a) {
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
                e && c && !a
                    ? (queueMicrotask(() => (0, i.flushSync)(() => m("entering"))),
                      (o = requestAnimationFrame(() => {
                          (o = null), m("visible");
                      })))
                    : e &&
                      !c &&
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
                        r[n] = {
                            rect: e.getBoundingClientRect(),
                            style: i.map((e) => [e, t[e]]),
                        };
                    }
                }
            };
        }, [t, h, n, c]);
    let g = (0, r.aX)({
        children: u,
        className: d,
        style: f,
        values: {
            isEntering: "entering" === _,
            isExiting: "exiting" === _,
        },
    });
    return "hidden" === _
        ? null
        : a.createElement("div", {
              ...p,
              ...g,
              ref: t,
              "data-entering": "entering" === _ || void 0,
              "data-exiting": "exiting" === _ || void 0,
          });
});
