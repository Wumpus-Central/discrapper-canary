r.d(t, { R: () => a, o: () => s });
var n = r(46269);
function i(e, t) {
    let r = [],
        i = document.scrollingElement || document.documentElement;
    for (; e && ((0, n.o)(e, t) && r.push(e), e !== i);) e = e.parentElement;
    return r;
}
var o = r(67551);
function a(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { block: n = "nearest", inline: i = "nearest" } = r;
    if (e === t) return;
    let a = e.scrollTop,
        s = e.scrollLeft,
        l = t.getBoundingClientRect(),
        u = e.getBoundingClientRect(),
        c = window.getComputedStyle(t),
        f = window.getComputedStyle(e),
        d = document.scrollingElement || document.documentElement,
        p = e === d,
        h = e === d ? 0 : u.top,
        m = e === d ? e.clientHeight : u.bottom,
        v = e === d ? 0 : u.left,
        y = e === d ? e.clientWidth : u.right,
        g = parseFloat(c.scrollMarginTop) || 0,
        b = parseFloat(c.scrollMarginBottom) || 0,
        w = parseFloat(c.scrollMarginLeft) || 0,
        _ = parseFloat(c.scrollMarginRight) || 0,
        S = parseFloat(f.scrollPaddingTop) || 0,
        E = parseFloat(f.scrollPaddingBottom) || 0,
        x = parseFloat(f.scrollPaddingLeft) || 0,
        C = parseFloat(f.scrollPaddingRight) || 0,
        k = parseFloat(f.borderTopWidth) || 0,
        T = parseFloat(f.borderBottomWidth) || 0,
        P = parseFloat(f.borderLeftWidth) || 0,
        A = parseFloat(f.borderRightWidth) || 0,
        I = l.top - g,
        M = l.bottom + b,
        O = l.left - w,
        R = l.right + _,
        L = e === d ? 0 : P + A,
        D = e === d ? 0 : k + T,
        F = e === d ? 0 : e.offsetWidth - e.clientWidth - L,
        N = e === d ? 0 : e.offsetHeight - e.clientHeight - D,
        j = h + (p ? 0 : k) + S,
        B = m - (p ? 0 : T) - E - N,
        U = v + (p ? 0 : P) + x,
        V = y - (p ? 0 : A) - C;
    ((0, o.un)() && (0, o.Tc)()) || "ltr" === f.direction ? (V -= F) : "rtl" === f.direction && (U += F);
    let $ = I < j || M > B,
        K = O < U || R > V;
    if ($ && "start" === n) a += I - j;
    else if ($ && "center" === n) a += (I + M) / 2 - (j + B) / 2;
    else if ($ && "end" === n) a += M - B;
    else if ($ && "nearest" === n) {
        let e = I - j,
            t = M - B;
        a += Math.abs(e) <= Math.abs(t) ? e : t;
    }
    if (K && "start" === i) s += O - U;
    else if (K && "center" === i) s += (O + R) / 2 - (U + V) / 2;
    else if (K && "end" === i) s += R - V;
    else if (K && "nearest" === i) {
        let e = O - U,
            t = R - V;
        s += Math.abs(e) <= Math.abs(t) ? e : t;
    }
    e.scrollTo({ left: s, top: a });
}
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { containingElement: r } = t;
    if (e && e.isConnected) {
        let t = document.scrollingElement || document.documentElement;
        if ("hidden" === window.getComputedStyle(t).overflow) {
            let { left: t, top: n } = e.getBoundingClientRect(),
                o = i(e, !0);
            for (let t of o) a(t, e);
            let { left: s, top: l } = e.getBoundingClientRect();
            if (Math.abs(t - s) > 1 || Math.abs(n - l) > 1) {
                for (let e of (o = r ? i(r, !0) : [])) a(e, r, { block: "center", inline: "center" });
                for (let t of i(e, !0)) a(t, e);
            }
        } else {
            let { left: t, top: n } = e.getBoundingClientRect();
            e?.scrollIntoView?.({ block: "nearest" });
            let { left: i, top: o } = e.getBoundingClientRect();
            (Math.abs(t - i) > 1 || Math.abs(n - o) > 1) &&
                (r?.scrollIntoView?.({ block: "center", inline: "center" }), e.scrollIntoView?.({ block: "nearest" }));
        }
    }
}
