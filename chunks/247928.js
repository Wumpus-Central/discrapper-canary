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
        r = `${s}-${n}`,
        a = i.useCallback(
            (e) => {
                let t = l(e),
                    n = t.currentNode;
                for (; null != n; ) {
                    let e = n;
                    e.setAttribute(r, String(e.tabIndex)), (e.tabIndex = -1), (n = t.nextNode());
                }
            },
            [r],
        ),
        u = i.useCallback(
            (e) => {
                e.querySelectorAll(`[${r}]`).forEach((e) => {
                    let t = e.getAttribute(r);
                    null != t && ((e.tabIndex = parseInt(t, 10)), e.removeAttribute(r));
                });
            },
            [r],
        );
    i.useLayoutEffect(() => {
        if (t) {
            let t = e.current;
            if (null != t) return a(t), () => u(t);
        }
    }, [t, e, a, u]),
        i.useEffect(() => {
            if (!t) return;
            let n = e.current;
            if (null == n) return;
            let r = new MutationObserver((e) => {
                e.some((e) => e.addedNodes.length > 0) && a(n);
            });
            return r.observe(n, { childList: !0, subtree: !0 }), () => r.disconnect();
        }, [t, e, a]);
}
function c(e) {
    let { children: t, className: n, enabled: s = !0 } = e,
        a = i.useRef(null);
    return u(a, s), (0, r.jsx)("div", { ref: a, className: n, children: t });
}
