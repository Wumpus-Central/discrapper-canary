r.d(n, {
    R: function () {
        return f;
    },
    n: function () {
        return d;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379);
let s = 'data-focus-blocked',
    l = 0;
function u() {
    return l++;
}
function c(e) {
    return document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => (e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP) });
}
function d(e, n) {
    let [r] = o.useState(() => u()),
        i = ''.concat(s, '-').concat(r);
    o.useLayoutEffect(() => {
        if (n) {
            let n = e.current;
            if (null != n) {
                let e = c(n),
                    r = e.currentNode;
                for (; null !== r; ) {
                    let n = r,
                        a = n.tabIndex;
                    (n.tabIndex = -1), n.setAttribute(i, String(a)), (r = e.nextNode());
                }
                return () => {
                    n.querySelectorAll('['.concat(i, ']')).forEach((e) => {
                        let n = e.getAttribute(i);
                        if (null != n) {
                            let r = parseInt(n, 10);
                            e.tabIndex = r;
                        }
                    });
                };
            }
        }
    }, [n, e, i]);
}
function f(e) {
    let { children: n, className: r, enabled: i = !0 } = e,
        s = o.useRef(null);
    return (
        d(s, i),
        (0, a.jsx)('div', {
            ref: s,
            className: r,
            children: n
        })
    );
}
