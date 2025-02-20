n.d(t, {
    P: () => o,
    Z: () => i
}),
    n(47120);
var r = n(192379);
function i() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let [i, a] = r.useState(void 0),
        [s, l] = r.useState(void 0),
        [c, u] = r.useState(void 0),
        [d, f] = r.useState(void 0),
        p = r.useRef(null);
    return (
        o(
            p,
            (e) => {
                let { width: t, height: n, scrollWidth: r, scrollHeight: i } = e;
                l(n), a(t), u(r), f(i);
            },
            t
        ),
        {
            ref: p,
            width: i,
            height: s,
            scrollHeight: d,
            scrollWidth: c
        }
    );
}
function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    r.useLayoutEffect(() => {
        let n = e.current,
            r = null == n ? void 0 : n.ownerDocument.defaultView;
        if (null != n && null != r) {
            let i = new r.ResizeObserver((n) => {
                var r, i, o, a, s, l;
                let c = n[0],
                    u = null == c ? void 0 : null === (i = c.borderBoxSize) || void 0 === i ? void 0 : null === (r = i[0]) || void 0 === r ? void 0 : r.inlineSize,
                    d = null == c ? void 0 : null === (a = c.borderBoxSize) || void 0 === a ? void 0 : null === (o = a[0]) || void 0 === o ? void 0 : o.blockSize;
                if (null == u || null == d) {
                    let t = e.current;
                    if (null != t) {
                        let e = window.getComputedStyle(t);
                        null == u && (u = parseFloat(null !== (s = e.width) && void 0 !== s ? s : '0')), null == d && (d = parseFloat(null !== (l = e.height) && void 0 !== l ? l : '0'));
                    }
                }
                t({
                    width: u,
                    height: d,
                    scrollHeight: c.target.scrollHeight,
                    scrollWidth: c.target.scrollWidth
                });
            });
            return i.observe(n), () => i.disconnect();
        }
    }, [e.current, ...n]);
}
