n.d(t, { R: () => c }), n(47120);
var i = n(200651),
    r = n(192379);
let a = 'data-focus-blocked',
    s = 0;
function o() {
    return s++;
}
function l(e) {
    return document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => (e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP) });
}
function u(e, t) {
    let [n] = r.useState(() => o()),
        i = ''.concat(a, '-').concat(n);
    r.useLayoutEffect(() => {
        if (t) {
            let t = e.current;
            if (null != t) {
                let e = l(t),
                    n = e.currentNode;
                for (; null !== n; ) {
                    let t = n,
                        r = t.tabIndex;
                    (t.tabIndex = -1), t.setAttribute(i, String(r)), (n = e.nextNode());
                }
                return () => {
                    t.querySelectorAll('['.concat(i, ']')).forEach((e) => {
                        let t = e.getAttribute(i);
                        if (null != t) {
                            let n = parseInt(t, 10);
                            e.tabIndex = n;
                        }
                    });
                };
            }
        }
    }, [t, e, i]);
}
function c(e) {
    let { children: t, className: n, enabled: a = !0 } = e,
        s = r.useRef(null);
    return (
        u(s, a),
        (0, i.jsx)('div', {
            ref: s,
            className: n,
            children: t
        })
    );
}
