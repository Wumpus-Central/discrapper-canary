n.d(t, {
    G: () => o,
    z: () => i,
});
var r = n(354115);
function i(e, t) {
    let n = a(e, t, "left"),
        r = a(e, t, "top"),
        i = t.offsetWidth,
        o = t.offsetHeight,
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
        h = s + parseInt(u, 10),
        m = l + parseInt(c, 10),
        g = h + e.clientWidth,
        E = m + e.clientHeight,
        b = parseInt(d, 10) || 0,
        y = parseInt(_, 10) || 0,
        O = parseInt(f, 10) || 0,
        v = parseInt(p, 10) || 0;
    n <= s + v ? (s = n - parseInt(u, 10) - v) : n + i > g - O && (s += n + i - g + O),
        r <= m + b ? (l = r - parseInt(c, 10) - b) : r + o > E - y && (l += r + o - E + y),
        (e.scrollLeft = s),
        (e.scrollTop = l);
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
        let l = document.scrollingElement || document.documentElement;
        if ("hidden" === window.getComputedStyle(l).overflow) for (let t of (0, r.H)(e)) i(t, e);
        else {
            var n, a, o, s;
            let { left: r, top: i } = e.getBoundingClientRect();
            null == e || null == (n = e.scrollIntoView) || n.call(e, { block: "nearest" });
            let { left: l, top: c } = e.getBoundingClientRect();
            (Math.abs(r - l) > 1 || Math.abs(i - c) > 1) &&
                (null == t ||
                    null == (o = t.containingElement) ||
                    null == (a = o.scrollIntoView) ||
                    a.call(o, {
                        block: "center",
                        inline: "center",
                    }),
                null == (s = e.scrollIntoView) || s.call(e, { block: "nearest" }));
        }
    }
}
