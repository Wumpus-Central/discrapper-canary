"use strict";
n.d(t, { A: () => i });
var r = n(584648);
function i(e, t, n, i) {
    let a = (0, r.A)(e, t, i),
        s = (e, t) => n.computeScrollPosition(e, t);
    return {
        ...a,
        getScrollPosition: s,
        isItemVisible(e, n) {
            let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                [i, a] = s(e, n),
                o = t();
            return r
                ? i >= o.scrollTop && i + a <= o.scrollTop + o.offsetHeight
                : i + a >= o.scrollTop && i <= o.scrollTop + o.offsetHeight;
        },
        scrollToIndex(e) {
            let { section: t, row: n, animate: r, callback: i, padding: o = 0 } = e,
                [l, u] = s(t, n);
            a.scrollIntoViewRect({ start: l, end: l + u, padding: o, animate: r, callback: i });
        },
    };
}
