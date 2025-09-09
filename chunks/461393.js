n.d(t, {
    E5: () => o,
    GB: () => l,
    MH: () => a,
    Se: () => d,
    bj: () => c,
    eJ: () => s,
    f8: () => u,
    hJ: () => p,
});
let i = 9 / 16,
    r = 16 / 9,
    o = (e, t) => e * t,
    l = (e, t) => e * t,
    a = (e) => o(e, i),
    s = (e) => l(e, r);
function c(e, t) {
    return t * (Math.max(1, e) - 1);
}
function u(e) {
    let { width: t, height: n, containerOffset: i, gapSize: r, tileCount: o, isVertical: l } = e,
        a = l ? t : t - c(o, r),
        s = l ? n - c(o, r) : n;
    return {
        verticalRatio: (s - i) / (a - i),
        horizontalRatio: (a - i) / (s - i),
    };
}
function d(e, t, n) {
    let { containerOffset: i, gapSize: r, tileCount: a, isVertical: s } = t,
        { maxWidth: d, maxHeight: p } = n,
        h = Math.max(1, a),
        f = e.width > d,
        m = e.height > p;
    if (!f && !m) return e;
    let g = c(a, r),
        { verticalRatio: y, horizontalRatio: O } = u({
            width: e.width,
            height: e.height,
            containerOffset: i,
            gapSize: r,
            tileCount: h,
            isVertical: s,
        }),
        v = e.width - i,
        b = e.height - i,
        E = d - i,
        _ = p - i;
    return (
        s ? ((_ -= g), (b -= g)) : ((E -= g), (v -= g)),
        f && m && (e.width > e.height ? (b = o((v = E), y)) : (v = l((b = _), O)), (f = v > E), (m = b > _)),
        f && (b = o((v = E), y)),
        m && (v = l((b = _), O)),
        s ? (b += c(a, r)) : (v += c(a, r)),
        {
            width: v + i,
            height: b + i,
        }
    );
}
function p(e, t) {
    let { maxWidth: n, maxHeight: i } = t;
    return {
        width: Math.max(0, Math.min(e.width, n)),
        height: Math.max(0, Math.min(e.height, i)),
    };
}
