"use strict";
n.d(t, { M: () => l, f: () => s });
var i = n(627968),
    r = n(64700);
let a = 0;
function s(e, t) {
    let [n] = r.useState(() => a++),
        i = `data-focus-blocked-${n}`,
        s = r.useCallback(
            (e) => {
                let t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: (e) =>
                            e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP,
                    }),
                    n = t.currentNode;
                for (; null != n; ) {
                    let e = n;
                    e.setAttribute(i, String(e.tabIndex)), (e.tabIndex = -1), (n = t.nextNode());
                }
            },
            [i],
        ),
        l = r.useCallback(
            (e) => {
                e.querySelectorAll(`[${i}]`).forEach((e) => {
                    let t = e.getAttribute(i);
                    null != t && ((e.tabIndex = parseInt(t, 10)), e.removeAttribute(i));
                });
            },
            [i],
        );
    r.useLayoutEffect(() => {
        if (t) {
            let t = e.current;
            if (null != t) return s(t), () => l(t);
        }
    }, [t, e, s, l]),
        r.useEffect(() => {
            if (!t) return;
            let n = e.current;
            if (null == n) return;
            let i = new MutationObserver((e) => {
                e.some((e) => e.addedNodes.length > 0) && s(n);
            });
            return i.observe(n, { childList: !0, subtree: !0 }), () => i.disconnect();
        }, [t, e, s]);
}
function l(e) {
    let { children: t, className: n, enabled: a = !0, "aria-hidden": l } = e,
        o = r.useRef(null);
    return s(o, a), (0, i.jsx)("div", { ref: o, className: n, "aria-hidden": l, children: t });
}
