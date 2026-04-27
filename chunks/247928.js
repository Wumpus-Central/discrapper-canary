"use strict";
r.d(t, { M: () => l });
var n = r(627968),
    i = r(64700);
let a = 0;
function l(e) {
    let { children: t, className: r, enabled: l = !0 } = e,
        s = i.useRef(null);
    return (
        !(function (e, t) {
            let [r] = i.useState(() => a++),
                n = `data-focus-blocked-${r}`,
                l = i.useCallback(
                    (e) => {
                        let t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                                acceptNode: (e) =>
                                    e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP,
                            }),
                            r = t.currentNode;
                        for (; null != r; ) {
                            let e = r;
                            e.setAttribute(n, String(e.tabIndex)), (e.tabIndex = -1), (r = t.nextNode());
                        }
                    },
                    [n],
                ),
                s = i.useCallback(
                    (e) => {
                        e.querySelectorAll(`[${n}]`).forEach((e) => {
                            let t = e.getAttribute(n);
                            null != t && ((e.tabIndex = parseInt(t, 10)), e.removeAttribute(n));
                        });
                    },
                    [n],
                );
            i.useLayoutEffect(() => {
                if (t) {
                    let t = e.current;
                    if (null != t) return l(t), () => s(t);
                }
            }, [t, e, l, s]),
                i.useEffect(() => {
                    if (!t) return;
                    let r = e.current;
                    if (null == r) return;
                    let n = new MutationObserver((e) => {
                        e.some((e) => e.addedNodes.length > 0) && l(r);
                    });
                    return n.observe(r, { childList: !0, subtree: !0 }), () => n.disconnect();
                }, [t, e, l]);
        })(s, l),
        (0, n.jsx)("div", { ref: s, className: r, children: t })
    );
}
