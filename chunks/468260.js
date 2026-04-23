"use strict";
n.d(t, { A: () => i });
var r = n(584648);
function i(e, t, n, i) {
    let s = (0, r.A)(e, t, i),
        a = (e, t) => n.computeScrollPosition(e, t);
    return {
        ...s,
        getScrollPosition: a,
        isItemVisible(e, n) {
            let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                [i, s] = a(e, n),
                o = t();
            return r
                ? i >= o.scrollTop && i + s <= o.scrollTop + o.offsetHeight
                : i + s >= o.scrollTop && i <= o.scrollTop + o.offsetHeight;
        },
        scrollToIndex(e) {
            let { section: t, row: n, animate: r, callback: i, padding: o = 0 } = e,
                [l, u] = a(t, n);
            s.scrollIntoViewRect({ start: l, end: l + u, padding: o, animate: r, callback: i });
        },
    };
}
