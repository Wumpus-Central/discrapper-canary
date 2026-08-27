"use strict";
r.d(t, { R: () => a, o: () => s });
var n = r(747773);
function i(e, t) {
    let r = [],
        i = document.scrollingElement || document.documentElement;
    for (; e && ((0, n.o)(e, t) && r.push(e), e !== i); ) e = e.parentElement;
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
        d = window.getComputedStyle(e),
        p = document.scrollingElement || document.documentElement,
        h = e === p,
        m = e === p ? 0 : c.top,
        v = e === p ? e.clientHeight : c.bottom,
        y = e === p ? 0 : c.left,
        g = e === p ? e.clientWidth : c.right,
        b = parseFloat(f.scrollMarginTop) || 0,
        w = parseFloat(f.scrollMarginBottom) || 0,
        _ = parseFloat(f.scrollMarginLeft) || 0,
        S = parseFloat(f.scrollMarginRight) || 0,
        x = parseFloat(d.scrollPaddingTop) || 0,
        E = parseFloat(d.scrollPaddingBottom) || 0,
        k = parseFloat(d.scrollPaddingLeft) || 0,
        C = parseFloat(d.scrollPaddingRight) || 0,
        T = parseFloat(d.borderTopWidth) || 0,
        M = parseFloat(d.borderBottomWidth) || 0,
        P = parseFloat(d.borderLeftWidth) || 0,
        A = parseFloat(d.borderRightWidth) || 0,
        I = u.top - b,
        O = u.bottom + w,
        D = u.left - _,
        R = u.right + S,
        L = e === p ? 0 : P + A,
        F = e === p ? 0 : T + M,
        N = e === p ? 0 : e.offsetWidth - e.clientWidth - L,
        j = e === p ? 0 : e.offsetHeight - e.clientHeight - F,
        B = m + (h ? 0 : T) + x,
        K = v - (h ? 0 : M) - E - j,
        $ = y + (h ? 0 : P) + k,
        V = g - (h ? 0 : A) - C;
    ((0, o.un)() && (0, o.Tc)()) || "ltr" === d.direction ? (V -= N) : "rtl" === d.direction && ($ += N);
    let U = I < B || O > K,
        z = D < $ || R > V;
    if (U && "start" === n) s += I - B;
    else if (U && "center" === n) s += (I + O) / 2 - (B + K) / 2;
    else if (U && "end" === n) s += O - K;
    else if (U && "nearest" === n) {
        let e = I - B,
            t = O - K;
        s += Math.abs(e) <= Math.abs(t) ? e : t;
    }
    if (z && "start" === i) l += D - $;
    else if (z && "center" === i) l += (D + R) / 2 - ($ + V) / 2;
    else if (z && "end" === i) l += R - V;
    else if (z && "nearest" === i) {
        let e = D - $,
            t = R - V;
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
