a.d(t, { M: () => i });
var r = a(627968),
    n = a(64700);
let l = 0;
function i(e) {
    let { children: t, className: a, enabled: i = !0, "aria-hidden": s } = e,
        o = n.useRef(null);
    return (
        !(function (e, t) {
            let [a] = n.useState(() => l++),
                r = `data-focus-blocked-${a}`,
                i = n.useCallback(
                    (e) => {
                        let t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                                acceptNode: (e) =>
                                    e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP,
                            }),
                            a = t.currentNode;
                        for (; null != a; ) {
                            let e = a;
                            e.setAttribute(r, String(e.tabIndex)), (e.tabIndex = -1), (a = t.nextNode());
                        }
                    },
                    [r],
                ),
                s = n.useCallback(
                    (e) => {
                        e.querySelectorAll(`[${r}]`).forEach((e) => {
                            let t = e.getAttribute(r);
                            null != t && ((e.tabIndex = parseInt(t, 10)), e.removeAttribute(r));
                        });
                    },
                    [r],
                );
            n.useLayoutEffect(() => {
                if (t) {
                    let t = e.current;
                    if (null != t) return i(t), () => s(t);
                }
            }, [t, e, i, s]),
                n.useEffect(() => {
                    if (!t) return;
                    let a = e.current;
                    if (null == a) return;
                    let r = new MutationObserver((e) => {
                        e.some((e) => e.addedNodes.length > 0) && i(a);
                    });
                    return r.observe(a, { childList: !0, subtree: !0 }), () => r.disconnect();
                }, [t, e, i]);
        })(o, i),
        (0, r.jsx)("div", { ref: o, className: a, "aria-hidden": s, children: t })
    );
}
