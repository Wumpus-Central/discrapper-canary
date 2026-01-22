n.d(t, {
    Ay: () => o,
    i4: () => c,
    wR: () => l,
}),
    n(896048);
var r = n(64700),
    i = n(621466),
    a = n(770178),
    s = n(765548);
function o() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let [i, a] = r.useState(void 0),
        [s, o] = r.useState(void 0),
        l = r.useRef(null);
    return (
        c(
            l,
            (e) => {
                let { width: t, height: n } = e;
                o(n), a(t);
            },
            t,
        ),
        {
            ref: l,
            width: i,
            height: s,
        }
    );
}
function l() {
    let [e, t] = r.useState(void 0),
        [n, o] = r.useState(void 0),
        l = (0, s.A)((e) => {
            if (!(0, i.vq)(e.target, HTMLElement))
                return {
                    scrollWidth: void 0,
                    scrollHeight: void 0,
                };
            let n = e.target;
            o(n.scrollHeight), t(n.scrollWidth);
        });
    return {
        ref: (0, a.w)(l),
        scrollWidth: e,
        scrollHeight: n,
    };
}
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        i = r.useCallback(
            (n) => {
                var r, i, a, s, o, l;
                let c = null == n || null == (i = n.borderBoxSize) || null == (r = i[0]) ? void 0 : r.inlineSize,
                    u = null == n || null == (s = n.borderBoxSize) || null == (a = s[0]) ? void 0 : a.blockSize;
                if (null == c || null == u) {
                    let t = e.current;
                    if (null != t) {
                        let e = window.getComputedStyle(t);
                        null == c && (c = parseFloat(null != (o = e.width) ? o : "0")),
                            null == u && (u = parseFloat(null != (l = e.height) ? l : "0"));
                    }
                }
                t({
                    width: c,
                    height: u,
                });
            },
            [e, t],
        );
    (0, a.g)(e, i, n);
}
