n.d(t, { _: () => o });
var r = n(192379),
    l = n(772848),
    a = n(638730),
    i = n(626135);
let s = (e, t, n, r) => {
        let { scrollTop: l = 0, scrollOffset: a = 0, scrollHeight: s = 0, scrollWidth: o = 0 } = r;
        if (s > 0) {
            let r = (l + a) / s;
            r > 0 &&
                i.default.track(e, {
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
            i = r.useRef((0, l.Z)()),
            o = (0, a.h)(s, 5000, [], { trailing: !0 }),
            d = r.useCallback(() => {
                var r;
                let l = null === (r = n.current) || void 0 === r ? void 0 : r.getScrollerNode();
                null != l &&
                    o(e, i.current, t, {
                        scrollTop: l.scrollTop,
                        scrollOffset: l.offsetHeight,
                        scrollHeight: l.scrollHeight,
                        scrollWidth: l.scrollWidth
                    });
            }, [o, e, t]);
        return {
            scrollerRef: n,
            scrollHandler: d,
            sessionId: i.current
        };
    };
