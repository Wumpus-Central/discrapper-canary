n.d(t, { R: () => u }), n(388685);
var r = n(255367),
    i = n(73800);
let a = 'data-focus-blocked',
    o = 0;
function s() {
    return o++;
}
function l(e) {
    return document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => (e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP) });
}
function c(e, t) {
    let [n] = i.useState(() => s()),
        r = ''.concat(a, '-').concat(n);
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
                    t.querySelectorAll('['.concat(r, ']')).forEach((e) => {
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
        o = i.useRef(null);
    return (
        c(o, a),
        (0, r.jsx)('div', {
            ref: o,
            className: n,
            children: t
        })
    );
}
