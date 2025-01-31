n.d(t, { Z: () => r }), n(47120);
var i = n(191532);
function r(e, t, n, r) {
    let a = (0, i.Z)(e, t, r),
        s = (e, t) => n.computeScrollPosition(e, t);
    return {
        ...a,
        getScrollPosition: s,
        isItemVisible(e, n) {
            let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                [r, a] = s(e, n),
                o = t();
            return i ? r >= o.scrollTop && r + a <= o.scrollTop + o.offsetHeight : r + a >= o.scrollTop && r <= o.scrollTop + o.offsetHeight;
        },
        scrollToIndex(e) {
            let { section: t, row: n, animate: i, callback: r, padding: o = 0 } = e,
                [l, u] = s(t, n);
            a.scrollIntoViewRect({
                start: l,
                end: l + u,
                padding: o,
                animate: i,
                callback: r
            });
        }
    };
}
