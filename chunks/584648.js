"use strict";
n.d(t, { A: () => s });
var i = n(621466);
function r(e, t) {
    if ("horizontal" === t) {
        let { scrollLeft: t, scrollWidth: n, offsetWidth: i } = e;
        return { scrollPosition: t, scrollSize: n, offsetSize: i };
    }
    let { scrollTop: n, scrollHeight: i, offsetHeight: r } = e;
    return { scrollPosition: n, scrollSize: i, offsetSize: r };
}
function s(e, t, n) {
    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vertical",
        a = (e) => {
            let i,
                { to: a, animate: o, callback: l } = e,
                { scrollPosition: _, scrollSize: d, offsetSize: u } = r(t(), s);
            n.to({ to: a >= (i = d - u + 1) - 1 ? i : Math.max(0, a), from: _, animate: o, callback: l });
        },
        o = (e) => {
            let { start: n, end: i, shouldScrollToStart: o = !1, padding: l = 0, animate: _, callback: d } = e,
                { scrollPosition: u, offsetSize: c } = r(t(), s);
            (n -= l),
                (i += l),
                n >= u && i <= u + c && !o
                    ? null != d && d()
                    : n < u || o
                      ? a({ to: n, animate: _, callback: d })
                      : a({ to: i - c, animate: _, callback: d });
        };
    return {
        spring: n,
        scrollTo: a,
        mergeTo: n.mergeTo,
        scrollIntoViewRect: o,
        scrollIntoViewNode(t) {
            let { node: n, shouldScrollToStart: r = !1, padding: a = 0, animate: l = !1, callback: _ } = t,
                { current: d } = e;
            if (null == d) return;
            let { offset: u, offsetSize: c } = (function (e, t, n) {
                let r = "horizontal" === t ? e.offsetWidth : e.offsetHeight,
                    s = "horizontal" === t ? e.offsetLeft : e.offsetTop,
                    a = e.offsetParent;
                for (; null != a && a !== n; )
                    if ((0, i.vq)(a, HTMLElement)) {
                        let e = a;
                        (s += "horizontal" === t ? e.offsetLeft : e.offsetTop), (a = e.offsetParent);
                    } else a = a.parentNode;
                return { offset: s, offsetSize: r };
            })(n, s, d);
            o({ start: u, end: u + c, shouldScrollToStart: r, padding: a, animate: l, callback: _ });
        },
        scrollPageUp() {
            let { animate: e = !1, callback: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { scrollPosition: i, offsetSize: o } = r(t(), s);
            a({ to: i - 0.9 * o, animate: e, callback: n });
        },
        scrollPageDown() {
            let { animate: e = !1, callback: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { scrollPosition: i, offsetSize: o } = r(t(), s);
            a({ to: i + 0.9 * o, animate: e, callback: n });
        },
        scrollToTop() {
            let { animate: e = !1, callback: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            a({ to: 0, animate: e, callback: t });
        },
        scrollToBottom() {
            let { animate: e = !1, callback: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            a({ to: Number.MAX_SAFE_INTEGER, animate: e, callback: t });
        },
        isScrolledToTop: () => 0 === r(t(), s).scrollPosition,
        isScrolledToBottom() {
            let { scrollPosition: e, scrollSize: n, offsetSize: i } = r(t(), s);
            return e >= n - i;
        },
        getDistanceFromTop: () => Math.max(0, r(t(), s).scrollPosition),
        getDistanceFromBottom() {
            let { scrollPosition: e, scrollSize: n, offsetSize: i } = r(t(), s);
            return Math.max(0, n - i - e);
        },
    };
}
