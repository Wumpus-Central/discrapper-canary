"use strict";
n.d(t, { M: () => a });
var i = n(627968),
    r = n(64700);
let s = 0;
function a(e) {
    let { children: t, className: n, enabled: a = !0, "aria-hidden": o } = e,
        l = r.useRef(null);
    return (
        !(function (e, t) {
            let [n] = r.useState(() => s++),
                i = `data-focus-blocked-${n}`,
                a = r.useCallback(
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
                o = r.useCallback(
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
                    if (null != t) return a(t), () => o(t);
                }
            }, [t, e, a, o]),
                r.useEffect(() => {
                    if (!t) return;
                    let n = e.current;
                    if (null == n) return;
                    let i = new MutationObserver((e) => {
                        e.some((e) => e.addedNodes.length > 0) && a(n);
                    });
                    return i.observe(n, { childList: !0, subtree: !0 }), () => i.disconnect();
                }, [t, e, a]);
        })(l, a),
        (0, i.jsx)("div", { ref: l, className: n, "aria-hidden": o, children: t })
    );
}
