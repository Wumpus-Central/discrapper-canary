n.d(t, { Z: () => s });
var r = n(374470);
function i(e, t, n) {
    let i = 'horizontal' === t ? e.offsetWidth : e.offsetHeight,
        o = 'horizontal' === t ? e.offsetLeft : e.offsetTop,
        a = e.offsetParent;
    for (; null != a && a !== n; ) (0, r.k)(a, HTMLElement) ? ((o += 'horizontal' === t ? a.offsetLeft : a.offsetTop), (a = a.offsetParent)) : (a = a.parentNode);
    return {
        offset: o,
        offsetSize: i
    };
}
function o(e, t) {
    if ('horizontal' === t) {
        let { scrollLeft: t, scrollWidth: n, offsetWidth: r } = e;
        return {
            scrollPosition: t,
            scrollSize: n,
            offsetSize: r
        };
    }
    let { scrollTop: n, scrollHeight: r, offsetHeight: i } = e;
    return {
        scrollPosition: n,
        scrollSize: r,
        offsetSize: i
    };
}
function a(e, t, n) {
    let r = t - n + 1;
    return e >= r - 1 ? r : Math.max(0, e);
}
function s(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'vertical',
        s = (e) => {
            let { to: i, animate: s, callback: l } = e,
                { scrollPosition: c, scrollSize: u, offsetSize: d } = o(t(), r);
            n.to({
                to: a(i, u, d),
                from: c,
                animate: s,
                callback: l
            });
        },
        l = (e) => {
            let { start: n, end: i, shouldScrollToStart: a = !1, padding: l = 0, animate: c, callback: u } = e,
                { scrollPosition: d, offsetSize: f } = o(t(), r);
            (n -= l),
                (i += l),
                n >= d && i <= d + f
                    ? null != u && u()
                    : n < d || a
                      ? s({
                            to: n,
                            animate: c,
                            callback: u
                        })
                      : s({
                            to: i - f,
                            animate: c,
                            callback: u
                        });
        };
    return {
        spring: n,
        scrollTo: s,
        mergeTo: n.mergeTo,
        scrollIntoViewRect: l,
        scrollIntoViewNode(t) {
            let { node: n, shouldScrollToStart: o = !1, padding: a = 0, animate: s = !1, callback: c } = t,
                { current: u } = e;
            if (null == u) return;
            let { offset: d, offsetSize: f } = i(n, r, u);
            l({
                start: d,
                end: d + f,
                shouldScrollToStart: o,
                padding: a,
                animate: s,
                callback: c
            });
        },
        scrollPageUp() {
            let { animate: e = !1, callback: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { scrollPosition: i, offsetSize: a } = o(t(), r);
            s({
                to: i - 0.9 * a,
                animate: e,
                callback: n
            });
        },
        scrollPageDown() {
            let { animate: e = !1, callback: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { scrollPosition: i, offsetSize: a } = o(t(), r);
            s({
                to: i + 0.9 * a,
                animate: e,
                callback: n
            });
        },
        scrollToTop() {
            let { animate: e = !1, callback: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s({
                to: 0,
                animate: e,
                callback: t
            });
        },
        scrollToBottom() {
            let { animate: e = !1, callback: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s({
                to: Number.MAX_SAFE_INTEGER,
                animate: e,
                callback: t
            });
        },
        isScrolledToTop: () => 0 === o(t(), r).scrollPosition,
        isScrolledToBottom() {
            let { scrollPosition: e, scrollSize: n, offsetSize: i } = o(t(), r);
            return e >= n - i;
        },
        getDistanceFromTop: () => Math.max(0, o(t(), r).scrollPosition),
        getDistanceFromBottom() {
            let { scrollPosition: e, scrollSize: n, offsetSize: i } = o(t(), r);
            return Math.max(0, n - i - e);
        }
    };
}
