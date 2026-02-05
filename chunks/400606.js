"use strict";
n.d(t, { R: () => a, o: () => o });
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
            borderTopWidth: u,
            borderLeftWidth: c,
            scrollPaddingTop: d,
            scrollPaddingRight: _,
            scrollPaddingBottom: f,
            scrollPaddingLeft: p,
        } = getComputedStyle(e),
        { scrollMarginTop: h, scrollMarginRight: m, scrollMarginBottom: g, scrollMarginLeft: E } = getComputedStyle(t),
        A = o + parseInt(c, 10),
        I = l + parseInt(u, 10),
        T = A + e.clientWidth,
        y = I + e.clientHeight,
        S = parseInt(d, 10) || 0,
        v = parseInt(f, 10) || 0,
        C = parseInt(_, 10) || 0,
        b = parseInt(p, 10) || 0,
        N = parseInt(h, 10) || 0,
        R = parseInt(g, 10) || 0,
        O = parseInt(m, 10) || 0,
        D = n - (parseInt(E, 10) || 0),
        L = n + i + O,
        w = r - N,
        x = r + a + R,
        P = o + parseInt(c, 10) + b,
        M = T - C,
        k = l + parseInt(u, 10) + S,
        U = y - v;
    (D > P || L < M) && (D <= o + b ? (o = D - parseInt(c, 10) - b) : L > T - C && (o += L - T + C)),
        (w > k || x < U) && (w <= I + S ? (l = w - parseInt(u, 10) - S) : x > y - v && (l += x - y + v)),
        e.scrollTo({ left: o, top: l });
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
        let u = document.scrollingElement || document.documentElement;
        if ("hidden" === window.getComputedStyle(u).overflow || (0, i.H8)()) for (let t of (0, r.R)(e)) a(t, e);
        else {
            var n, s, o, l;
            let { left: r, top: i } = e.getBoundingClientRect();
            null == e || null == (n = e.scrollIntoView) || n.call(e, { block: "nearest" });
            let { left: a, top: u } = e.getBoundingClientRect();
            (Math.abs(r - a) > 1 || Math.abs(i - u) > 1) &&
                (null == t ||
                    null == (o = t.containingElement) ||
                    null == (s = o.scrollIntoView) ||
                    s.call(o, { block: "center", inline: "center" }),
                null == (l = e.scrollIntoView) || l.call(e, { block: "nearest" }));
        }
    }
}
