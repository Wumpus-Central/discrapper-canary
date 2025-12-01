n.d(t, {
    E5: () => l,
    GB: () => a,
    MH: () => o,
    Se: () => d,
    bj: () => u,
    eJ: () => s,
    f8: () => c,
    hJ: () => h,
});
let i = 9 / 16,
    r = 16 / 9,
    l = (e, t) => e * t,
    a = (e, t) => e * t,
    o = (e) => l(e, i),
    s = (e) => a(e, r);
function u(e, t) {
    return t * (Math.max(1, e) - 1);
}
function c(e) {
    let { width: t, height: n, containerOffset: i, gapSize: r, tileCount: l, isVertical: a } = e,
        o = a ? t : t - u(l, r),
        s = a ? n - u(l, r) : n;
    return {
        verticalRatio: (s - i) / (o - i),
        horizontalRatio: (o - i) / (s - i),
    };
}
function d(e, t, n) {
    let { containerOffset: i, gapSize: r, tileCount: o, isVertical: s } = t,
        { maxWidth: d, maxHeight: h } = n,
        p = Math.max(1, o),
        f = e.width > d,
        m = e.height > h;
    if (!f && !m) return e;
    let g = u(o, r),
        { verticalRatio: y, horizontalRatio: O } = c({
            width: e.width,
            height: e.height,
            containerOffset: i,
            gapSize: r,
            tileCount: p,
            isVertical: s,
        }),
        E = e.width - i,
        v = e.height - i,
        S = d - i,
        b = h - i;
    return (
        s ? ((b -= g), (v -= g)) : ((S -= g), (E -= g)),
        f && m && (e.width > e.height ? (v = l((E = S), y)) : (E = a((v = b), O)), (f = E > S), (m = v > b)),
        f && (v = l((E = S), y)),
        m && (E = a((v = b), O)),
        s ? (v += u(o, r)) : (E += u(o, r)),
        {
            width: E + i,
            height: v + i,
        }
    );
}
function h(e, t) {
    let { maxWidth: n, maxHeight: i } = t;
    return {
        width: Math.max(0, Math.min(e.width, n)),
        height: Math.max(0, Math.min(e.height, i)),
    };
}
