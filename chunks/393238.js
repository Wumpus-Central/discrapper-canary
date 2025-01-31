n.d(t, {
    P: () => a,
    Z: () => r
}),
    n(47120);
var i = n(192379);
function r() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let [r, s] = i.useState(void 0),
        [o, l] = i.useState(void 0),
        [u, c] = i.useState(void 0),
        [d, f] = i.useState(void 0),
        _ = i.useRef(null);
    return (
        a(
            _,
            (e) => {
                let { width: t, height: n, scrollWidth: i, scrollHeight: r } = e;
                l(n), s(t), c(i), f(r);
            },
            t
        ),
        {
            ref: _,
            width: r,
            height: o,
            scrollHeight: d,
            scrollWidth: u
        }
    );
}
function a(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    i.useLayoutEffect(() => {
        let n = e.current,
            i = null == n ? void 0 : n.ownerDocument.defaultView;
        if (null != n && null != i) {
            let r = new i.ResizeObserver((n) => {
                var i, r, a, s, o, l;
                let u = n[0],
                    c = null == u ? void 0 : null === (r = u.borderBoxSize) || void 0 === r ? void 0 : null === (i = r[0]) || void 0 === i ? void 0 : i.inlineSize,
                    d = null == u ? void 0 : null === (s = u.borderBoxSize) || void 0 === s ? void 0 : null === (a = s[0]) || void 0 === a ? void 0 : a.blockSize;
                if (null == c || null == d) {
                    let t = e.current;
                    if (null != t) {
                        let e = window.getComputedStyle(t);
                        null == c && (c = parseFloat(null !== (o = e.width) && void 0 !== o ? o : '0')), null == d && (d = parseFloat(null !== (l = e.height) && void 0 !== l ? l : '0'));
                    }
                }
                t({
                    width: c,
                    height: d,
                    scrollHeight: u.target.scrollHeight,
                    scrollWidth: u.target.scrollWidth
                });
            });
            return r.observe(n), () => r.disconnect();
        }
    }, [e.current, ...n]);
}
