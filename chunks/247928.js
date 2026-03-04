"use strict";
n.d(t, { M: () => c });
var r = n(627968),
    i = n(64700);
let s = "data-focus-blocked",
    a = 0;
function o() {
    return a++;
}
function l(e) {
    return document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (e) => (e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP),
    });
}
function u(e, t) {
    let [n] = i.useState(() => o()),
        r = `${s}-${n}`;
    i.useLayoutEffect(() => {
        if (t) {
            let t = e.current;
            if (null != t) {
                let e = l(t),
                    n = e.currentNode;
                for (; null !== n; ) {
                    let t = n,
                        i = t.tabIndex;
                    (t.tabIndex = -1), t.setAttribute(r, String(i)), (n = e.nextNode());
                }
                return () => {
                    t.querySelectorAll(`[${r}]`).forEach((e) => {
                        let t = e.getAttribute(r);
                        null != t && (e.tabIndex = parseInt(t, 10));
                    });
                };
            }
        }
    }, [t, e, r]);
}
function c(e) {
    let { children: t, className: n, enabled: s = !0 } = e,
        a = i.useRef(null);
    return u(a, s), (0, r.jsx)("div", { ref: a, className: n, children: t });
}
