"use strict";
n.d(t, { M: () => l });
var a = n(627968),
    i = n(64700);
let r = 0;
function l(e) {
    let { children: t, className: n, enabled: l = !0 } = e,
        s = i.useRef(null);
    return (
        !(function (e, t) {
            let [n] = i.useState(() => r++),
                a = `data-focus-blocked-${n}`,
                l = i.useCallback(
                    (e) => {
                        let t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                                acceptNode: (e) =>
                                    e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP,
                            }),
                            n = t.currentNode;
                        for (; null != n; ) {
                            let e = n;
                            e.setAttribute(a, String(e.tabIndex)), (e.tabIndex = -1), (n = t.nextNode());
                        }
                    },
                    [a],
                ),
                s = i.useCallback(
                    (e) => {
                        e.querySelectorAll(`[${a}]`).forEach((e) => {
                            let t = e.getAttribute(a);
                            null != t && ((e.tabIndex = parseInt(t, 10)), e.removeAttribute(a));
                        });
                    },
                    [a],
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
                    let a = new MutationObserver((e) => {
                        e.some((e) => e.addedNodes.length > 0) && l(n);
                    });
                    return a.observe(n, { childList: !0, subtree: !0 }), () => a.disconnect();
                }, [t, e, l]);
        })(s, l),
        (0, a.jsx)("div", { ref: s, className: n, children: t })
    );
}
