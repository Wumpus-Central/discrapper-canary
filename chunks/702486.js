n.d(t, {
    _: function () {
        return o;
    }
});
var r = n(192379),
    i = n(772848),
    l = n(638730),
    a = n(626135);
let s = (e, t, n, r) => {
        let { scrollTop: i = 0, scrollOffset: l = 0, scrollHeight: s = 0, scrollWidth: o = 0 } = r;
        if (s > 0) {
            let r = (i + l) / s;
            r > 0 &&
                a.default.track(e, {
                    scroll_visible_percent: r,
                    source: n,
                    page_height: Math.round(s),
                    page_width: Math.round(o),
                    page_session_id: t
                });
        }
    },
    o = (e, t) => {
        let n = r.useRef(null),
            a = r.useRef((0, i.Z)()),
            o = (0, l.h)(s, 5000, [], { trailing: !0 }),
            c = r.useCallback(() => {
                var r;
                let i = null === (r = n.current) || void 0 === r ? void 0 : r.getScrollerNode();
                null != i &&
                    o(e, a.current, t, {
                        scrollTop: i.scrollTop,
                        scrollOffset: i.offsetHeight,
                        scrollHeight: i.scrollHeight,
                        scrollWidth: i.scrollWidth
                    });
            }, [o, e, t]);
        return {
            scrollerRef: n,
            scrollHandler: c,
            sessionId: a.current
        };
    };
