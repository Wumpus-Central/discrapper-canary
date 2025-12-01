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
            scrollPaddingBottom: p,
            scrollPaddingLeft: _,
        } = getComputedStyle(e),
        { scrollMarginTop: m, scrollMarginRight: h, scrollMarginBottom: g, scrollMarginLeft: E } = getComputedStyle(t),
        b = s + parseInt(u, 10),
        y = l + parseInt(c, 10),
        O = b + e.clientWidth,
        v = y + e.clientHeight,
        S = parseInt(d, 10) || 0,
        I = parseInt(p, 10) || 0,
        T = parseInt(f, 10) || 0,
        A = parseInt(_, 10) || 0,
        C = parseInt(m, 10) || 0,
        N = parseInt(g, 10) || 0,
        P = parseInt(h, 10) || 0,
        R = n - (parseInt(E, 10) || 0),
        w = n + i + P,
        D = r - C,
        x = r + a + N,
        L = s + parseInt(u, 10) + A,
        j = O - T,
        M = l + parseInt(c, 10) + S,
        k = v - I;
    (R > L || w < j) && (R <= s + A ? (s = R - parseInt(u, 10) - A) : w > O - T && (s += w - O + T)),
        (D > M || x < k) && (D <= y + S ? (l = D - parseInt(c, 10) - S) : x > v - I && (l += x - v + I)),
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
