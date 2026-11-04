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
        p = document.scrollingElement || document.documentElement,
        d = e === p,
        h = e === p ? 0 : u.top,
        m = e === p ? e.clientHeight : u.bottom,
        v = e === p ? 0 : u.left,
        y = e === p ? e.clientWidth : u.right,
        g = parseFloat(c.scrollMarginTop) || 0,
        b = parseFloat(c.scrollMarginBottom) || 0,
        w = parseFloat(c.scrollMarginLeft) || 0,
        _ = parseFloat(c.scrollMarginRight) || 0,
        S = parseFloat(f.scrollPaddingTop) || 0,
        E = parseFloat(f.scrollPaddingBottom) || 0,
        x = parseFloat(f.scrollPaddingLeft) || 0,
        k = parseFloat(f.scrollPaddingRight) || 0,
        C = parseFloat(f.borderTopWidth) || 0,
        T = parseFloat(f.borderBottomWidth) || 0,
        M = parseFloat(f.borderLeftWidth) || 0,
        P = parseFloat(f.borderRightWidth) || 0,
        A = l.top - g,
        I = l.bottom + b,
        O = l.left - w,
        R = l.right + _,
        L = e === p ? 0 : M + P,
        D = e === p ? 0 : C + T,
        F = e === p ? 0 : e.offsetWidth - e.clientWidth - L,
        N = e === p ? 0 : e.offsetHeight - e.clientHeight - D,
        j = h + (d ? 0 : C) + S,
        B = m - (d ? 0 : T) - E - N,
        K = v + (d ? 0 : M) + x,
        U = y - (d ? 0 : P) - k;
    ((0, o.un)() && (0, o.Tc)()) || "ltr" === f.direction ? (U -= F) : "rtl" === f.direction && (K += F);
    let V = A < j || I > B,
        $ = O < K || R > U;
    if (V && "start" === n) a += A - j;
    else if (V && "center" === n) a += (A + I) / 2 - (j + B) / 2;
    else if (V && "end" === n) a += I - B;
    else if (V && "nearest" === n) {
        let e = A - j,
            t = I - B;
        a += Math.abs(e) <= Math.abs(t) ? e : t;
    }
    if ($ && "start" === i) s += O - K;
    else if ($ && "center" === i) s += (O + R) / 2 - (K + U) / 2;
    else if ($ && "end" === i) s += R - U;
    else if ($ && "nearest" === i) {
        let e = O - K,
            t = R - U;
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
