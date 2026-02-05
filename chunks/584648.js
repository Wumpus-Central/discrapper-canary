"use strict";
n.d(t, { A: () => o });
var r = n(621466);
function i(e, t, n) {
    let i = "horizontal" === t ? e.offsetWidth : e.offsetHeight,
        a = "horizontal" === t ? e.offsetLeft : e.offsetTop,
        s = e.offsetParent;
    for (; null != s && s !== n; )
        if ((0, r.vq)(s, HTMLElement)) {
            let e = s;
            (a += "horizontal" === t ? e.offsetLeft : e.offsetTop), (s = e.offsetParent);
        } else s = s.parentNode;
    return { offset: a, offsetSize: i };
}
function a(e, t) {
    if ("horizontal" === t) {
        let { scrollLeft: t, scrollWidth: n, offsetWidth: r } = e;
        return { scrollPosition: t, scrollSize: n, offsetSize: r };
    }
    let { scrollTop: n, scrollHeight: r, offsetHeight: i } = e;
    return { scrollPosition: n, scrollSize: r, offsetSize: i };
}
function s(e, t, n) {
    let r = t - n + 1;
    return e >= r - 1 ? r : Math.max(0, e);
}
function o(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vertical",
        o = (e) => {
            let { to: i, animate: o, callback: l } = e,
                { scrollPosition: u, scrollSize: c, offsetSize: d } = a(t(), r);
            n.to({ to: s(i, c, d), from: u, animate: o, callback: l });
        },
        l = (e) => {
            let { start: n, end: i, shouldScrollToStart: s = !1, padding: l = 0, animate: u, callback: c } = e,
                { scrollPosition: d, offsetSize: _ } = a(t(), r);
            (n -= l),
                (i += l),
                n >= d && i <= d + _
                    ? null != c && c()
                    : n < d || s
                      ? o({ to: n, animate: u, callback: c })
                      : o({ to: i - _, animate: u, callback: c });
        };
    return {
        spring: n,
        scrollTo: o,
        mergeTo: n.mergeTo,
        scrollIntoViewRect: l,
        scrollIntoViewNode(t) {
            let { node: n, shouldScrollToStart: a = !1, padding: s = 0, animate: o = !1, callback: u } = t,
                { current: c } = e;
            if (null == c) return;
            let { offset: d, offsetSize: _ } = i(n, r, c);
            l({ start: d, end: d + _, shouldScrollToStart: a, padding: s, animate: o, callback: u });
        },
        scrollPageUp() {
            let { animate: e = !1, callback: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { scrollPosition: i, offsetSize: s } = a(t(), r);
            o({ to: i - 0.9 * s, animate: e, callback: n });
        },
        scrollPageDown() {
            let { animate: e = !1, callback: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { scrollPosition: i, offsetSize: s } = a(t(), r);
            o({ to: i + 0.9 * s, animate: e, callback: n });
        },
        scrollToTop() {
            let { animate: e = !1, callback: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            o({ to: 0, animate: e, callback: t });
        },
        scrollToBottom() {
            let { animate: e = !1, callback: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            o({ to: Number.MAX_SAFE_INTEGER, animate: e, callback: t });
        },
        isScrolledToTop: () => 0 === a(t(), r).scrollPosition,
        isScrolledToBottom() {
            let { scrollPosition: e, scrollSize: n, offsetSize: i } = a(t(), r);
            return e >= n - i;
        },
        getDistanceFromTop: () => Math.max(0, a(t(), r).scrollPosition),
        getDistanceFromBottom() {
            let { scrollPosition: e, scrollSize: n, offsetSize: i } = a(t(), r);
            return Math.max(0, n - i - e);
        },
    };
}
