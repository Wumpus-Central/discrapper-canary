n.d(t, {
    E5: () => l,
    GB: () => o,
    MH: () => a,
    Se: () => d,
    bj: () => c,
    eJ: () => s,
    f8: () => u,
    hJ: () => h,
});
let i = 9 / 16,
    r = 16 / 9,
    l = (e, t) => e * t,
    o = (e, t) => e * t,
    a = (e) => l(e, i),
    s = (e) => o(e, r);
function c(e, t) {
    return t * (Math.max(1, e) - 1);
}
function u(e) {
    let { width: t, height: n, containerOffset: i, gapSize: r, tileCount: l, isVertical: o } = e,
        a = o ? t : t - c(l, r),
        s = o ? n - c(l, r) : n;
    return {
        verticalRatio: (s - i) / (a - i),
        horizontalRatio: (a - i) / (s - i),
    };
}
function d(e, t, n) {
    let { containerOffset: i, gapSize: r, tileCount: a, isVertical: s } = t,
        { maxWidth: d, maxHeight: h } = n,
        p = Math.max(1, a),
        f = e.width > d,
        m = e.height > h;
    if (!f && !m) return e;
    let g = c(a, r),
        { verticalRatio: y, horizontalRatio: O } = u({
            width: e.width,
            height: e.height,
            containerOffset: i,
            gapSize: r,
            tileCount: p,
            isVertical: s,
        }),
        v = e.width - i,
        E = e.height - i,
        b = d - i,
        _ = h - i;
    return (
        s ? ((_ -= g), (E -= g)) : ((b -= g), (v -= g)),
        f && m && (e.width > e.height ? (E = l((v = b), y)) : (v = o((E = _), O)), (f = v > b), (m = E > _)),
        f && (E = l((v = b), y)),
        m && (v = o((E = _), O)),
        s ? (E += c(a, r)) : (v += c(a, r)),
        {
            width: v + i,
            height: E + i,
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
