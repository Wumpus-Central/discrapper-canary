"use strict";
n.d(t, { M: () => l });
var r = n(627968),
    i = n(64700);
let a = 0;
function l(e) {
    let { children: t, className: n, enabled: l = !0 } = e,
        s = i.useRef(null);
    return (
        !(function (e, t) {
            let [n] = i.useState(() => a++),
                r = `data-focus-blocked-${n}`,
                l = i.useCallback(
                    (e) => {
                        let t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                                acceptNode: (e) =>
                                    e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP,
                            }),
                            n = t.currentNode;
                        for (; null != n; ) {
                            let e = n;
                            e.setAttribute(r, String(e.tabIndex)), (e.tabIndex = -1), (n = t.nextNode());
                        }
                    },
                    [r],
                ),
                s = i.useCallback(
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
                    if (null != t) return l(t), () => s(t);
                }
            }, [t, e, l, s]),
                i.useEffect(() => {
                    if (!t) return;
                    let n = e.current;
                    if (null == n) return;
                    let r = new MutationObserver((e) => {
                        e.some((e) => e.addedNodes.length > 0) && l(n);
                    });
                    return r.observe(n, { childList: !0, subtree: !0 }), () => r.disconnect();
                }, [t, e, l]);
        })(s, l),
        (0, r.jsx)("div", { ref: s, className: n, children: t })
    );
}
