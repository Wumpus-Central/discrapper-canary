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
        _ = r.useRef(null);
    return (
        o(
            _,
            (e) => {
                let { width: t, height: n, scrollWidth: r, scrollHeight: i } = e;
                l(n), a(t), u(r), f(i);
            },
            t
        ),
        {
            ref: _,
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
        var n;
        let r = e.current,
            i = null == r || null == (n = r.ownerDocument) ? void 0 : n.defaultView;
        if (null != r && null != i) {
            let n = new i.ResizeObserver((n) => {
                var r, i, o, a, s, l;
                let c = n[0],
                    u = null == c || null == (i = c.borderBoxSize) || null == (r = i[0]) ? void 0 : r.inlineSize,
                    d = null == c || null == (a = c.borderBoxSize) || null == (o = a[0]) ? void 0 : o.blockSize;
                if (null == u || null == d) {
                    let t = e.current;
                    if (null != t) {
                        let e = window.getComputedStyle(t);
                        null == u && (u = parseFloat(null != (s = e.width) ? s : '0')), null == d && (d = parseFloat(null != (l = e.height) ? l : '0'));
                    }
                }
                t({
                    width: u,
                    height: d,
                    scrollHeight: c.target.scrollHeight,
                    scrollWidth: c.target.scrollWidth
                });
            });
            return n.observe(r), () => n.disconnect();
        }
    }, [e.current, ...n]);
}
