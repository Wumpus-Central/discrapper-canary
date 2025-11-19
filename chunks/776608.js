n.d(t, {
    G: () => s,
    z: () => a,
});
var r = n(838371),
    i = n(21814);
function a(e, t) {
    let n = o(e, t, "left"),
        r = o(e, t, "top"),
        i = t.offsetWidth,
        a = t.offsetHeight,
        s = e.scrollLeft,
        l = e.scrollTop,
        {
            borderTopWidth: c,
            borderLeftWidth: u,
            scrollPaddingTop: d,
            scrollPaddingRight: f,
            scrollPaddingBottom: _,
            scrollPaddingLeft: p,
        } = getComputedStyle(e),
        { scrollMarginTop: h, scrollMarginRight: m, scrollMarginBottom: g, scrollMarginLeft: E } = getComputedStyle(t),
        b = s + parseInt(u, 10),
        y = l + parseInt(c, 10),
        O = b + e.clientWidth,
        v = y + e.clientHeight,
        I = parseInt(d, 10) || 0,
        T = parseInt(_, 10) || 0,
        S = parseInt(f, 10) || 0,
        A = parseInt(p, 10) || 0,
        C = parseInt(h, 10) || 0,
        N = parseInt(g, 10) || 0,
        R = parseInt(m, 10) || 0,
        P = n - (parseInt(E, 10) || 0),
        D = n + i + R,
        w = r - C,
        L = r + a + N,
        x = s + parseInt(u, 10) + A,
        M = O - S,
        k = l + parseInt(c, 10) + I,
        j = v - T;
    (P > x || D < M) && (P <= s + A ? (s = P - parseInt(u, 10) - A) : D > O - S && (s += D - O + S)),
        (w > k || L < j) && (w <= y + I ? (l = w - parseInt(c, 10) - I) : L > v - T && (l += L - v + T)),
        e.scrollTo({
            left: s,
            top: l,
        });
}
function o(e, t, n) {
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
function s(e, t) {
    if (e && document.contains(e)) {
        let c = document.scrollingElement || document.documentElement;
        if ("hidden" === window.getComputedStyle(c).overflow || (0, i.i7)()) for (let t of (0, r.H)(e)) a(t, e);
        else {
            var n, o, s, l;
            let { left: r, top: i } = e.getBoundingClientRect();
            null == e || null == (n = e.scrollIntoView) || n.call(e, { block: "nearest" });
            let { left: a, top: c } = e.getBoundingClientRect();
            (Math.abs(r - a) > 1 || Math.abs(i - c) > 1) &&
                (null == t ||
                    null == (s = t.containingElement) ||
                    null == (o = s.scrollIntoView) ||
                    o.call(s, {
                        block: "center",
                        inline: "center",
                    }),
                null == (l = e.scrollIntoView) || l.call(e, { block: "nearest" }));
        }
    }
}
