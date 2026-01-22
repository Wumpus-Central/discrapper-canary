n.d(t, {
    R: () => a,
    o: () => o,
});
var r = n(534278),
    i = n(408713);
function a(e, t) {
    let n = s(e, t, "left"),
        r = s(e, t, "top"),
        i = t.offsetWidth,
        a = t.offsetHeight,
        o = e.scrollLeft,
        l = e.scrollTop,
        {
            borderTopWidth: c,
            borderLeftWidth: u,
            scrollPaddingTop: d,
            scrollPaddingRight: f,
            scrollPaddingBottom: p,
            scrollPaddingLeft: _,
        } = getComputedStyle(e),
        { scrollMarginTop: h, scrollMarginRight: m, scrollMarginBottom: g, scrollMarginLeft: E } = getComputedStyle(t),
        b = o + parseInt(u, 10),
        y = l + parseInt(c, 10),
        O = b + e.clientWidth,
        A = y + e.clientHeight,
        v = parseInt(d, 10) || 0,
        S = parseInt(p, 10) || 0,
        I = parseInt(f, 10) || 0,
        T = parseInt(_, 10) || 0,
        C = parseInt(h, 10) || 0,
        N = parseInt(g, 10) || 0,
        R = parseInt(m, 10) || 0,
        w = n - (parseInt(E, 10) || 0),
        P = n + i + R,
        D = r - C,
        x = r + a + N,
        L = o + parseInt(u, 10) + T,
        j = O - I,
        M = l + parseInt(c, 10) + v,
        k = A - S;
    (w > L || P < j) && (w <= o + T ? (o = w - parseInt(u, 10) - T) : P > O - I && (o += P - O + I)),
        (D > M || x < k) && (D <= y + v ? (l = D - parseInt(c, 10) - v) : x > A - S && (l += x - A + S)),
        e.scrollTo({
            left: o,
            top: l,
        });
}
function s(e, t, n) {
    let r = "left" === n ? "offsetLeft" : "offsetTop",
        i = 0;
    for (; t.offsetParent && ((i += t[r]), t.offsetParent !== e); ) {
        if (t.offsetParent.contains(e)) {
            i -= e[r];
            break;
        }
        t = t.offsetParent;
    }
    return i;
}
function o(e, t) {
    if (e && document.contains(e)) {
        let c = document.scrollingElement || document.documentElement;
        if ("hidden" === window.getComputedStyle(c).overflow || (0, i.H8)()) for (let t of (0, r.R)(e)) a(t, e);
        else {
            var n, s, o, l;
            let { left: r, top: i } = e.getBoundingClientRect();
            null == e || null == (n = e.scrollIntoView) || n.call(e, { block: "nearest" });
            let { left: a, top: c } = e.getBoundingClientRect();
            (Math.abs(r - a) > 1 || Math.abs(i - c) > 1) &&
                (null == t ||
                    null == (o = t.containingElement) ||
                    null == (s = o.scrollIntoView) ||
                    s.call(o, {
                        block: "center",
                        inline: "center",
                    }),
                null == (l = e.scrollIntoView) || l.call(e, { block: "nearest" }));
        }
    }
}
