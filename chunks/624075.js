r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(47120);
var a = r(191532);
function o(e, n, r, i) {
    let o = (0, a.Z)(e, n, i),
        s = (e, n) => r.computeScrollPosition(e, n);
    return {
        ...o,
        getScrollPosition: s,
        isItemVisible(e, r) {
            let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                [a, o] = s(e, r),
                l = n();
            return i ? a >= l.scrollTop && a + o <= l.scrollTop + l.offsetHeight : a + o >= l.scrollTop && a <= l.scrollTop + l.offsetHeight;
        },
        scrollToIndex(e) {
            let { section: n, row: r, animate: i, callback: a, padding: l = 0 } = e,
                [u, c] = s(n, r);
            o.scrollIntoViewRect({
                start: u,
                end: u + c,
                padding: l,
                animate: i,
                callback: a
            });
        }
    };
}
