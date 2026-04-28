a.d(t, { M: () => i });
var n = a(627968),
    l = a(64700);
let r = 0;
function i(e) {
    let { children: t, className: a, enabled: i = !0, "aria-hidden": s } = e,
        o = l.useRef(null);
    return (
        !(function (e, t) {
            let [a] = l.useState(() => r++),
                n = `data-focus-blocked-${a}`,
                i = l.useCallback(
                    (e) => {
                        let t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                                acceptNode: (e) =>
                                    e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP,
                            }),
                            a = t.currentNode;
                        for (; null != a; ) {
                            let e = a;
                            e.setAttribute(n, String(e.tabIndex)), (e.tabIndex = -1), (a = t.nextNode());
                        }
                    },
                    [n],
                ),
                s = l.useCallback(
                    (e) => {
                        e.querySelectorAll(`[${n}]`).forEach((e) => {
                            let t = e.getAttribute(n);
                            null != t && ((e.tabIndex = parseInt(t, 10)), e.removeAttribute(n));
                        });
                    },
                    [n],
                );
            l.useLayoutEffect(() => {
                if (t) {
                    let t = e.current;
                    if (null != t) return i(t), () => s(t);
                }
            }, [t, e, i, s]),
                l.useEffect(() => {
                    if (!t) return;
                    let a = e.current;
                    if (null == a) return;
                    let n = new MutationObserver((e) => {
                        e.some((e) => e.addedNodes.length > 0) && i(a);
                    });
                    return n.observe(a, { childList: !0, subtree: !0 }), () => n.disconnect();
                }, [t, e, i]);
        })(o, i),
        (0, n.jsx)("div", { ref: o, className: a, "aria-hidden": s, children: t })
    );
}
