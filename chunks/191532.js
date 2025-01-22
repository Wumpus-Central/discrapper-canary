r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(513431);
function a(e, n, r) {
    let a = 'horizontal' === n ? e.offsetWidth : e.offsetHeight,
        o = 'horizontal' === n ? e.offsetLeft : e.offsetTop,
        s = e.offsetParent;
    for (; null != s && s !== r; ) (0, i.k)(s, HTMLElement) ? ((o += 'horizontal' === n ? s.offsetLeft : s.offsetTop), (s = s.offsetParent)) : (s = s.parentNode);
    return {
        offset: o,
        offsetSize: a
    };
}
function o(e, n) {
    if ('horizontal' === n) {
        let { scrollLeft: n, scrollWidth: r, offsetWidth: i } = e;
        return {
            scrollPosition: n,
            scrollSize: r,
            offsetSize: i
        };
    }
    let { scrollTop: r, scrollHeight: i, offsetHeight: a } = e;
    return {
        scrollPosition: r,
        scrollSize: i,
        offsetSize: a
    };
}
function s(e, n, r) {
    let i = n - r + 1;
    return e >= i - 1 ? i : Math.max(0, e);
}
function l(e, n, r) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'vertical',
        l = (e) => {
            let { to: a, animate: l, callback: u } = e,
                { scrollPosition: c, scrollSize: d, offsetSize: f } = o(n(), i);
            r.to({
                to: s(a, d, f),
                from: c,
                animate: l,
                callback: u
            });
        },
        u = (e) => {
            let { start: r, end: a, shouldScrollToStart: s = !1, padding: u = 0, animate: c, callback: d } = e,
                { scrollPosition: f, offsetSize: p } = o(n(), i);
            (r -= u),
                (a += u),
                r >= f && a <= f + p
                    ? null != d && d()
                    : r < f || s
                      ? l({
                            to: r,
                            animate: c,
                            callback: d
                        })
                      : l({
                            to: a - p,
                            animate: c,
                            callback: d
                        });
        };
    return {
        spring: r,
        scrollTo: l,
        mergeTo: r.mergeTo,
        scrollIntoViewRect: u,
        scrollIntoViewNode(n) {
            let { node: r, shouldScrollToStart: o = !1, padding: s = 0, animate: l = !1, callback: c } = n,
                { current: d } = e;
            if (null == d) return;
            let { offset: f, offsetSize: p } = a(r, i, d);
            u({
                start: f,
                end: f + p,
                shouldScrollToStart: o,
                padding: s,
                animate: l,
                callback: c
            });
        },
        scrollPageUp() {
            let { animate: e = !1, callback: r } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { scrollPosition: a, offsetSize: s } = o(n(), i);
            l({
                to: a - 0.9 * s,
                animate: e,
                callback: r
            });
        },
        scrollPageDown() {
            let { animate: e = !1, callback: r } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { scrollPosition: a, offsetSize: s } = o(n(), i);
            l({
                to: a + 0.9 * s,
                animate: e,
                callback: r
            });
        },
        scrollToTop() {
            let { animate: e = !1, callback: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            l({
                to: 0,
                animate: e,
                callback: n
            });
        },
        scrollToBottom() {
            let { animate: e = !1, callback: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            l({
                to: Number.MAX_SAFE_INTEGER,
                animate: e,
                callback: n
            });
        },
        isScrolledToTop: () => 0 === o(n(), i).scrollPosition,
        isScrolledToBottom() {
            let { scrollPosition: e, scrollSize: r, offsetSize: a } = o(n(), i);
            return e >= r - a;
        },
        getDistanceFromTop: () => Math.max(0, o(n(), i).scrollPosition),
        getDistanceFromBottom() {
            let { scrollPosition: e, scrollSize: r, offsetSize: a } = o(n(), i);
            return Math.max(0, r - a - e);
        }
    };
}
