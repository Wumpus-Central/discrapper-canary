"use strict";
r.d(t, { R: () => s, o: () => o });
var n = r(435987),
    a = r(408713);
function s(e, t) {
    let r = i(e, t, "left"),
        n = i(e, t, "top"),
        a = t.offsetWidth,
        s = t.offsetHeight,
        o = e.scrollLeft,
        l = e.scrollTop,
        {
            borderTopWidth: u,
            borderLeftWidth: c,
            scrollPaddingTop: d,
            scrollPaddingRight: f,
            scrollPaddingBottom: p,
            scrollPaddingLeft: h,
        } = getComputedStyle(e),
        { scrollMarginTop: m, scrollMarginRight: _, scrollMarginBottom: g, scrollMarginLeft: v } = getComputedStyle(t),
        b = o + parseInt(c, 10),
        y = l + parseInt(u, 10),
        E = b + e.clientWidth,
        S = y + e.clientHeight,
        T = parseInt(d, 10) || 0,
        x = parseInt(p, 10) || 0,
        w = parseInt(f, 10) || 0,
        C = parseInt(h, 10) || 0,
        D = parseInt(m, 10) || 0,
        O = parseInt(g, 10) || 0,
        A = parseInt(_, 10) || 0,
        M = r - (parseInt(v, 10) || 0),
        R = r + a + A,
        k = n - D,
        N = n + s + O,
        L = o + parseInt(c, 10) + C,
        I = l + parseInt(u, 10) + T;
    (M > L || R < E - w) && (M <= o + C ? (o = M - parseInt(c, 10) - C) : R > E - w && (o += R - E + w)),
        (k > I || N < S - x) && (k <= y + T ? (l = k - parseInt(u, 10) - T) : N > S - x && (l += N - S + x)),
        e.scrollTo({ left: o, top: l });
}
function i(e, t, r) {
    let n = "left" === r ? "offsetLeft" : "offsetTop",
        a = 0;
    for (; t.offsetParent && ((a += t[n]), t.offsetParent !== e); ) {
        if (t.offsetParent.contains(e)) {
            a -= e[n];
            break;
        }
        t = t.offsetParent;
    }
    return a;
}
function o(e, t) {
    if (e && document.contains(e)) {
        let u = document.scrollingElement || document.documentElement;
        if ("hidden" === window.getComputedStyle(u).overflow || (0, a.H8)())
            for (let t of (function (e) {
                let t = [];
                for (; e && e !== document.documentElement; ) (0, n.o)(e, void 0) && t.push(e), (e = e.parentElement);
                return t;
            })(e))
                s(t, e);
        else {
            var r, i, o, l;
            let { left: n, top: a } = e.getBoundingClientRect();
            null == e || null == (r = e.scrollIntoView) || r.call(e, { block: "nearest" });
            let { left: s, top: u } = e.getBoundingClientRect();
            (Math.abs(n - s) > 1 || Math.abs(a - u) > 1) &&
                (null == t ||
                    null == (o = t.containingElement) ||
                    null == (i = o.scrollIntoView) ||
                    i.call(o, { block: "center", inline: "center" }),
                null == (l = e.scrollIntoView) || l.call(e, { block: "nearest" }));
        }
    }
}
