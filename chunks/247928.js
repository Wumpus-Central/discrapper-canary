n.d(t, { M: () => u }), n(896048);
var r = n(627968),
    i = n(64700);
let a = "data-focus-blocked",
    s = 0;
function o() {
    return s++;
}
function l(e) {
    return document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (e) => (e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP),
    });
}
function c(e, t) {
    let [n] = i.useState(() => o()),
        r = "".concat(a, "-").concat(n);
    i.useLayoutEffect(() => {
        if (t) {
            let t = e.current;
            if (null != t) {
                let e = l(t),
                    n = e.currentNode;
                for (; null !== n; ) {
                    let t = n,
                        i = t.tabIndex;
                    (t.tabIndex = -1), t.setAttribute(r, String(i)), (n = e.nextNode());
                }
                return () => {
                    t.querySelectorAll("[".concat(r, "]")).forEach((e) => {
                        let t = e.getAttribute(r);
                        null != t && (e.tabIndex = parseInt(t, 10));
                    });
                };
            }
        }
    }, [t, e, r]);
}
function u(e) {
    let { children: t, className: n, enabled: a = !0 } = e,
        s = i.useRef(null);
    return (
        c(s, a),
        (0, r.jsx)("div", {
            ref: s,
            className: n,
            children: t,
        })
    );
}
