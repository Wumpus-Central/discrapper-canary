"use strict";
n.d(t, { A: () => a });
var i = n(621466);
function r(e, t) {
    if ("horizontal" === t) {
        let { scrollLeft: t, scrollWidth: n, offsetWidth: i } = e;
        return { scrollPosition: t, scrollSize: n, offsetSize: i };
    }
    let { scrollTop: n, scrollHeight: i, offsetHeight: r } = e;
    return { scrollPosition: n, scrollSize: i, offsetSize: r };
}
function a(e, t, n) {
    let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vertical";
    function s(e) {
        let i,
            { to: s, animate: l, callback: o } = e,
            { scrollPosition: d, scrollSize: c, offsetSize: u } = r(t(), a);
        n.to({ to: s >= (i = c - u + 1) - 1 ? i : Math.max(0, s), from: d, animate: l, callback: o });
    }
    function l(e) {
        let { start: n, end: i, shouldScrollToStart: l = !1, padding: o = 0, animate: d, callback: c } = e,
            { scrollPosition: u, offsetSize: _ } = r(t(), a);
        (n -= o),
            (i += o),
            n >= u && i <= u + _ && !l
                ? null != c && c()
                : n < u || l
                  ? s({ to: n, animate: d, callback: c })
                  : s({ to: i - _, animate: d, callback: c });
    }
    return {
        spring: n,
        scrollTo: s,
        mergeTo: n.mergeTo,
        scrollIntoViewRect: l,
        scrollIntoViewNode(t) {
            let { node: n, shouldScrollToStart: r = !1, padding: s = 0, animate: o = !1, callback: d } = t,
                { current: c } = e;
            if (null == c) return;
            let { offset: u, offsetSize: _ } = (function (e, t, n) {
                let r = "horizontal" === t ? e.offsetWidth : e.offsetHeight,
                    a = "horizontal" === t ? e.offsetLeft : e.offsetTop,
                    s = e.offsetParent;
                for (; null != s && s !== n; )
                    if ((0, i.vq)(s, HTMLElement)) {
                        let e = s;
                        (a += "horizontal" === t ? e.offsetLeft : e.offsetTop), (s = e.offsetParent);
                    } else s = s.parentNode;
                return { offset: a, offsetSize: r };
            })(n, a, c);
            l({ start: u, end: u + _, shouldScrollToStart: r, padding: s, animate: o, callback: d });
        },
        scrollPageUp() {
            let { animate: e = !1, callback: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { scrollPosition: i, offsetSize: l } = r(t(), a);
            s({ to: i - 0.9 * l, animate: e, callback: n });
        },
        scrollPageDown() {
            let { animate: e = !1, callback: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { scrollPosition: i, offsetSize: l } = r(t(), a);
            s({ to: i + 0.9 * l, animate: e, callback: n });
        },
        scrollToTop() {
            let { animate: e = !1, callback: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s({ to: 0, animate: e, callback: t });
        },
        scrollToBottom() {
            let { animate: e = !1, callback: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s({ to: Number.MAX_SAFE_INTEGER, animate: e, callback: t });
        },
        isScrolledToTop: () => 0 === r(t(), a).scrollPosition,
        isScrolledToBottom() {
            let { scrollPosition: e, scrollSize: n, offsetSize: i } = r(t(), a);
            return e >= n - i;
        },
        getDistanceFromTop: () => Math.max(0, r(t(), a).scrollPosition),
        getDistanceFromBottom() {
            let { scrollPosition: e, scrollSize: n, offsetSize: i } = r(t(), a);
            return Math.max(0, n - i - e);
        },
    };
}
