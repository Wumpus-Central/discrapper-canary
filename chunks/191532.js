n.d(t, { Z: () => o });
var i = n(374470);
function r(e, t, n) {
    let r = 'horizontal' === t ? e.offsetWidth : e.offsetHeight,
        a = 'horizontal' === t ? e.offsetLeft : e.offsetTop,
        s = e.offsetParent;
    for (; null != s && s !== n; ) (0, i.k)(s, HTMLElement) ? ((a += 'horizontal' === t ? s.offsetLeft : s.offsetTop), (s = s.offsetParent)) : (s = s.parentNode);
    return {
        offset: a,
        offsetSize: r
    };
}
function a(e, t) {
    if ('horizontal' === t) {
        let { scrollLeft: t, scrollWidth: n, offsetWidth: i } = e;
        return {
            scrollPosition: t,
            scrollSize: n,
            offsetSize: i
        };
    }
    let { scrollTop: n, scrollHeight: i, offsetHeight: r } = e;
    return {
        scrollPosition: n,
        scrollSize: i,
        offsetSize: r
    };
}
function s(e, t, n) {
    let i = t - n + 1;
    return e >= i - 1 ? i : Math.max(0, e);
}
function o(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'vertical',
        o = (e) => {
            let { to: r, animate: o, callback: l } = e,
                { scrollPosition: u, scrollSize: c, offsetSize: d } = a(t(), i);
            n.to({
                to: s(r, c, d),
                from: u,
                animate: o,
                callback: l
            });
        },
        l = (e) => {
            let { start: n, end: r, shouldScrollToStart: s = !1, padding: l = 0, animate: u, callback: c } = e,
                { scrollPosition: d, offsetSize: f } = a(t(), i);
            (n -= l),
                (r += l),
                n >= d && r <= d + f
                    ? null != c && c()
                    : n < d || s
                      ? o({
                            to: n,
                            animate: u,
                            callback: c
                        })
                      : o({
                            to: r - f,
                            animate: u,
                            callback: c
                        });
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
            let { offset: d, offsetSize: f } = r(n, i, c);
            l({
                start: d,
                end: d + f,
                shouldScrollToStart: a,
                padding: s,
                animate: o,
                callback: u
            });
        },
        scrollPageUp() {
            let { animate: e = !1, callback: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { scrollPosition: r, offsetSize: s } = a(t(), i);
            o({
                to: r - 0.9 * s,
                animate: e,
                callback: n
            });
        },
        scrollPageDown() {
            let { animate: e = !1, callback: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { scrollPosition: r, offsetSize: s } = a(t(), i);
            o({
                to: r + 0.9 * s,
                animate: e,
                callback: n
            });
        },
        scrollToTop() {
            let { animate: e = !1, callback: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            o({
                to: 0,
                animate: e,
                callback: t
            });
        },
        scrollToBottom() {
            let { animate: e = !1, callback: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            o({
                to: Number.MAX_SAFE_INTEGER,
                animate: e,
                callback: t
            });
        },
        isScrolledToTop: () => 0 === a(t(), i).scrollPosition,
        isScrolledToBottom() {
            let { scrollPosition: e, scrollSize: n, offsetSize: r } = a(t(), i);
            return e >= n - r;
        },
        getDistanceFromTop: () => Math.max(0, a(t(), i).scrollPosition),
        getDistanceFromBottom() {
            let { scrollPosition: e, scrollSize: n, offsetSize: r } = a(t(), i);
            return Math.max(0, n - r - e);
        }
    };
}
