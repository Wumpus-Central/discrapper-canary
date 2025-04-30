n.d(t, {
    PM: () => c,
    ZP: () => s,
    kE: () => l
}),
    n(388685);
var r = n(73800),
    i = n(374470),
    a = n(393903),
    o = n(448986);
function s() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let [i, a] = r.useState(void 0),
        [o, s] = r.useState(void 0),
        l = r.useRef(null);
    return (
        c(
            l,
            (e) => {
                let { width: t, height: n } = e;
                s(n), a(t);
            },
            t
        ),
        {
            ref: l,
            width: i,
            height: o
        }
    );
}
function l() {
    let [e, t] = r.useState(void 0),
        [n, s] = r.useState(void 0),
        l = (0, o.Z)((e) => {
            if (!(0, i.k)(e.target, HTMLElement))
                return {
                    scrollWidth: void 0,
                    scrollHeight: void 0
                };
            let n = e.target;
            s(n.scrollHeight), t(n.scrollWidth);
        });
    return {
        ref: (0, a.y)(l),
        scrollWidth: e,
        scrollHeight: n
    };
}
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        i = r.useCallback(
            (n) => {
                var r, i, a, o, s, l;
                let c = null == n || null == (i = n.borderBoxSize) || null == (r = i[0]) ? void 0 : r.inlineSize,
                    u = null == n || null == (o = n.borderBoxSize) || null == (a = o[0]) ? void 0 : a.blockSize;
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
    (0, a.s)(e, i, n);
}
