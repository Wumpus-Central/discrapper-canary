n.d(t, {
    E5: () => l,
    GB: () => o,
    MH: () => a,
    Se: () => d,
    bj: () => u,
    eJ: () => s,
    f8: () => c,
    hJ: () => h,
});
let i = 9 / 16,
    r = 16 / 9,
    l = (e, t) => e * t,
    o = (e, t) => e * t,
    a = (e) => l(e, i),
    s = (e) => o(e, r);
function u(e, t) {
    return t * (Math.max(1, e) - 1);
}
function c(e) {
    let { width: t, height: n, containerOffset: i, gapSize: r, tileCount: l, isVertical: o } = e,
        a = o ? t : t - u(l, r),
        s = o ? n - u(l, r) : n;
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
    let g = u(a, r),
        { verticalRatio: O, horizontalRatio: y } = c({
            width: e.width,
            height: e.height,
            containerOffset: i,
            gapSize: r,
            tileCount: p,
            isVertical: s,
        }),
        E = e.width - i,
        v = e.height - i,
        b = d - i,
        S = h - i;
    return (
        s ? ((S -= g), (v -= g)) : ((b -= g), (E -= g)),
        f && m && (e.width > e.height ? (v = l((E = b), O)) : (E = o((v = S), y)), (f = E > b), (m = v > S)),
        f && (v = l((E = b), O)),
        m && (E = o((v = S), y)),
        s ? (v += u(a, r)) : (E += u(a, r)),
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
