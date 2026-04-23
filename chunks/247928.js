l.d(t, { M: () => n });
var r = l(627968),
    a = l(64700);
let s = 0;
function n(e) {
    let { children: t, className: l, enabled: n = !0 } = e,
        i = a.useRef(null);
    return (
        !(function (e, t) {
            let [l] = a.useState(() => s++),
                r = `data-focus-blocked-${l}`,
                n = a.useCallback(
                    (e) => {
                        let t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                                acceptNode: (e) =>
                                    e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP,
                            }),
                            l = t.currentNode;
                        for (; null != l; ) {
                            let e = l;
                            e.setAttribute(r, String(e.tabIndex)), (e.tabIndex = -1), (l = t.nextNode());
                        }
                    },
                    [r],
                ),
                i = a.useCallback(
                    (e) => {
                        e.querySelectorAll(`[${r}]`).forEach((e) => {
                            let t = e.getAttribute(r);
                            null != t && ((e.tabIndex = parseInt(t, 10)), e.removeAttribute(r));
                        });
                    },
                    [r],
                );
            a.useLayoutEffect(() => {
                if (t) {
                    let t = e.current;
                    if (null != t) return n(t), () => i(t);
                }
            }, [t, e, n, i]),
                a.useEffect(() => {
                    if (!t) return;
                    let l = e.current;
                    if (null == l) return;
                    let r = new MutationObserver((e) => {
                        e.some((e) => e.addedNodes.length > 0) && n(l);
                    });
                    return r.observe(l, { childList: !0, subtree: !0 }), () => r.disconnect();
                }, [t, e, n]);
        })(i, n),
        (0, r.jsx)("div", { ref: i, className: l, children: t })
    );
}
