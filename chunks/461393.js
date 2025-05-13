function i(e, t, n, i) {
    let { maxWidth: r, maxHeight: o } = i,
        l = e.width,
        a = e.height;
    if (l > r || a > o) {
        let e = Math.round((r - n) / t + n),
            i = Math.round((o - n) * t + n);
        e <= o ? ((l = r), (a = e)) : ((l = i), (a = o));
    }
    return {
        width: (l = Math.max(n, l)),
        height: (a = Math.max(n, a))
    };
}
function r(e, t) {
    let { maxWidth: n, maxHeight: i } = t;
    return {
        width: Math.max(0, Math.min(e.width, n)),
        height: Math.max(0, Math.min(e.height, i))
    };
}
n.d(t, {
    S: () => i,
    h: () => r
});
