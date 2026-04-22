"use strict";
n.d(t, { A: () => s });
var r = n(621466);
function i(e, t) {
    if ("horizontal" === t) {
        let { scrollLeft: t, scrollWidth: n, offsetWidth: r } = e;
        return { scrollPosition: t, scrollSize: n, offsetSize: r };
    }
    let { scrollTop: n, scrollHeight: r, offsetHeight: i } = e;
    return { scrollPosition: n, scrollSize: r, offsetSize: i };
}
function s(e, t, n) {
    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vertical",
        a = (e) => {
            let r,
                { to: a, animate: o, callback: l } = e,
                { scrollPosition: u, scrollSize: d, offsetSize: c } = i(t(), s);
            n.to({ to: a >= (r = d - c + 1) - 1 ? r : Math.max(0, a), from: u, animate: o, callback: l });
        },
        o = (e) => {
            let { start: n, end: r, shouldScrollToStart: o = !1, padding: l = 0, animate: u, callback: d } = e,
                { scrollPosition: c, offsetSize: _ } = i(t(), s);
            (n -= l),
                (r += l),
                n >= c && r <= c + _
                    ? null != d && d()
                    : n < c || o
                      ? a({ to: n, animate: u, callback: d })
                      : a({ to: r - _, animate: u, callback: d });
        };
    return {
        spring: n,
        scrollTo: a,
        mergeTo: n.mergeTo,
        scrollIntoViewRect: o,
        scrollIntoViewNode(t) {
            let { node: n, shouldScrollToStart: i = !1, padding: a = 0, animate: l = !1, callback: u } = t,
                { current: d } = e;
            if (null == d) return;
            let { offset: c, offsetSize: _ } = (function (e, t, n) {
                let i = "horizontal" === t ? e.offsetWidth : e.offsetHeight,
                    s = "horizontal" === t ? e.offsetLeft : e.offsetTop,
                    a = e.offsetParent;
                for (; null != a && a !== n; )
                    if ((0, r.vq)(a, HTMLElement)) {
                        let e = a;
                        (s += "horizontal" === t ? e.offsetLeft : e.offsetTop), (a = e.offsetParent);
                    } else a = a.parentNode;
                return { offset: s, offsetSize: i };
            })(n, s, d);
            o({ start: c, end: c + _, shouldScrollToStart: i, padding: a, animate: l, callback: u });
        },
        scrollPageUp() {
            let { animate: e = !1, callback: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { scrollPosition: r, offsetSize: o } = i(t(), s);
            a({ to: r - 0.9 * o, animate: e, callback: n });
        },
        scrollPageDown() {
            let { animate: e = !1, callback: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { scrollPosition: r, offsetSize: o } = i(t(), s);
            a({ to: r + 0.9 * o, animate: e, callback: n });
        },
        scrollToTop() {
            let { animate: e = !1, callback: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            a({ to: 0, animate: e, callback: t });
        },
        scrollToBottom() {
            let { animate: e = !1, callback: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            a({ to: Number.MAX_SAFE_INTEGER, animate: e, callback: t });
        },
        isScrolledToTop: () => 0 === i(t(), s).scrollPosition,
        isScrolledToBottom() {
            let { scrollPosition: e, scrollSize: n, offsetSize: r } = i(t(), s);
            return e >= n - r;
        },
        getDistanceFromTop: () => Math.max(0, i(t(), s).scrollPosition),
        getDistanceFromBottom() {
            let { scrollPosition: e, scrollSize: n, offsetSize: r } = i(t(), s);
            return Math.max(0, n - r - e);
        },
    };
}
