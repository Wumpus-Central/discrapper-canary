"use strict";
n.d(t, { R: () => s, o: () => o });
var r = n(534278),
    i = n(408713);
function s(e, t) {
    let n = a(e, t, "left"),
        r = a(e, t, "top"),
        i = t.offsetWidth,
        s = t.offsetHeight,
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
        { scrollMarginTop: h, scrollMarginRight: E, scrollMarginBottom: m, scrollMarginLeft: g } = getComputedStyle(t),
        A = o + parseInt(c, 10),
        I = l + parseInt(u, 10),
        T = A + e.clientWidth,
        S = I + e.clientHeight,
        y = parseInt(d, 10) || 0,
        N = parseInt(f, 10) || 0,
        v = parseInt(_, 10) || 0,
        C = parseInt(p, 10) || 0,
        O = parseInt(h, 10) || 0,
        R = parseInt(m, 10) || 0,
        b = parseInt(E, 10) || 0,
        D = n - (parseInt(g, 10) || 0),
        L = n + i + b,
        w = r - O,
        M = r + s + R,
        P = o + parseInt(c, 10) + C,
        x = l + parseInt(u, 10) + y;
    (D > P || L < T - v) && (D <= o + C ? (o = D - parseInt(c, 10) - C) : L > T - v && (o += L - T + v)),
        (w > x || M < S - N) && (w <= I + y ? (l = w - parseInt(u, 10) - y) : M > S - N && (l += M - S + N)),
        e.scrollTo({ left: o, top: l });
}
function a(e, t, n) {
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
        if ("hidden" === window.getComputedStyle(u).overflow || (0, i.H8)()) for (let t of (0, r.R)(e)) s(t, e);
        else {
            var n, a, o, l;
            let { left: r, top: i } = e.getBoundingClientRect();
            null == e || null == (n = e.scrollIntoView) || n.call(e, { block: "nearest" });
            let { left: s, top: u } = e.getBoundingClientRect();
            (Math.abs(r - s) > 1 || Math.abs(i - u) > 1) &&
                (null == t ||
                    null == (o = t.containingElement) ||
                    null == (a = o.scrollIntoView) ||
                    a.call(o, { block: "center", inline: "center" }),
                null == (l = e.scrollIntoView) || l.call(e, { block: "nearest" }));
        }
    }
}
