n.d(t, {
    PM: () => c,
    ZP: () => s,
    kE: () => l
}),
    n(388685);
var r = n(192379),
    i = n(374470),
    o = n(393903),
    a = n(448986);
function s() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let [i, o] = r.useState(void 0),
        [a, s] = r.useState(void 0),
        l = r.useRef(null);
    return (
        c(
            l,
            (e) => {
                let { width: t, height: n } = e;
                s(n), o(t);
            },
            t
        ),
        {
            ref: l,
            width: i,
            height: a
        }
    );
}
function l() {
    let [e, t] = r.useState(void 0),
        [n, s] = r.useState(void 0),
        l = (0, a.Z)((e) => {
            if (!(0, i.k)(e.target, HTMLElement))
                return {
                    scrollWidth: void 0,
                    scrollHeight: void 0
                };
            let n = e.target;
            s(n.scrollHeight), t(n.scrollWidth);
        });
    return {
        ref: (0, o.y)(l),
        scrollWidth: e,
        scrollHeight: n
    };
}
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        i = r.useCallback(
            (n) => {
                var r, i, o, a, s, l;
                let c = null == n || null == (i = n.borderBoxSize) || null == (r = i[0]) ? void 0 : r.inlineSize,
                    u = null == n || null == (a = n.borderBoxSize) || null == (o = a[0]) ? void 0 : o.blockSize;
                if (null == c || null == u) {
                    let t = e.current;
                    if (null != t) {
                        let e = window.getComputedStyle(t);
                        null == c && (c = parseFloat(null != (s = e.width) ? s : '0')), null == u && (u = parseFloat(null != (l = e.height) ? l : '0'));
                    }
                }
                t({
                    width: c,
                    height: u
                });
            },
            [e, t]
        );
    (0, o.s)(e, i, n);
}
