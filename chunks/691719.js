r.d(t, { R: () => a, o: () => s });
var n = r(747773);
function i(e, t) {
    let r = [],
        i = document.scrollingElement || document.documentElement;
    for (; e && ((0, n.o)(e, t) && r.push(e), e !== i);) e = e.parentElement;
    return r;
}
var o = r(644255);
function a(e, t, r = {}) {
    let { block: n = "nearest", inline: i = "nearest" } = r;
    if (e === t) return;
    let s = e.scrollTop,
        l = e.scrollLeft,
        u = t.getBoundingClientRect(),
        c = e.getBoundingClientRect(),
        f = window.getComputedStyle(t),
        p = window.getComputedStyle(e),
        d = document.scrollingElement || document.documentElement,
        h = e === d,
        m = e === d ? 0 : c.top,
        v = e === d ? e.clientHeight : c.bottom,
        y = e === d ? 0 : c.left,
        g = e === d ? e.clientWidth : c.right,
        b = parseFloat(f.scrollMarginTop) || 0,
        w = parseFloat(f.scrollMarginBottom) || 0,
        _ = parseFloat(f.scrollMarginLeft) || 0,
        S = parseFloat(f.scrollMarginRight) || 0,
        E = parseFloat(p.scrollPaddingTop) || 0,
        x = parseFloat(p.scrollPaddingBottom) || 0,
        C = parseFloat(p.scrollPaddingLeft) || 0,
        k = parseFloat(p.scrollPaddingRight) || 0,
        T = parseFloat(p.borderTopWidth) || 0,
        M = parseFloat(p.borderBottomWidth) || 0,
        P = parseFloat(p.borderLeftWidth) || 0,
        A = parseFloat(p.borderRightWidth) || 0,
        I = u.top - b,
        O = u.bottom + w,
        R = u.left - _,
        L = u.right + S,
        D = e === d ? 0 : P + A,
        F = e === d ? 0 : T + M,
        N = e === d ? 0 : e.offsetWidth - e.clientWidth - D,
        j = e === d ? 0 : e.offsetHeight - e.clientHeight - F,
        B = m + (h ? 0 : T) + E,
        K = v - (h ? 0 : M) - x - j,
        U = y + (h ? 0 : P) + C,
        V = g - (h ? 0 : A) - k;
    ((0, o.un)() && (0, o.Tc)()) || "ltr" === p.direction ? (V -= N) : "rtl" === p.direction && (U += N);
    let $ = I < B || O > K,
        H = R < U || L > V;
    if ($ && "start" === n) s += I - B;
    else if ($ && "center" === n) s += (I + O) / 2 - (B + K) / 2;
    else if ($ && "end" === n) s += O - K;
    else if ($ && "nearest" === n) {
        let e = I - B,
            t = O - K;
        s += Math.abs(e) <= Math.abs(t) ? e : t;
    }
    if (H && "start" === i) l += R - U;
    else if (H && "center" === i) l += (R + L) / 2 - (U + V) / 2;
    else if (H && "end" === i) l += L - V;
    else if (H && "nearest" === i) {
        let e = R - U,
            t = L - V;
        l += Math.abs(e) <= Math.abs(t) ? e : t;
    }
    e.scrollTo({ left: l, top: s });
}
function s(e, t = {}) {
    let { containingElement: r } = t;
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
