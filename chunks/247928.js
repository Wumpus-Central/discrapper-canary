"use strict";
r.d(t, { M: () => s });
var n = r(627968),
    i = r(64700);
let a = 0;
function s(e) {
    let { children: t, className: r, enabled: s = !0, "aria-hidden": l } = e,
        o = i.useRef(null);
    return (
        !(function (e, t) {
            let [r] = i.useState(() => a++),
                n = `data-focus-blocked-${r}`,
                s = i.useCallback(
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
                l = i.useCallback(
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
                    if (null != t) return s(t), () => l(t);
                }
            }, [t, e, s, l]),
                i.useEffect(() => {
                    if (!t) return;
                    let r = e.current;
                    if (null == r) return;
                    let n = new MutationObserver((e) => {
                        e.some((e) => e.addedNodes.length > 0) && s(r);
                    });
                    return n.observe(r, { childList: !0, subtree: !0 }), () => n.disconnect();
                }, [t, e, s]);
        })(o, s),
        (0, n.jsx)("div", { ref: o, className: r, "aria-hidden": l, children: t })
    );
}
