n.d(t, { _: () => o });
var r = n(192379),
    l = n(772848),
    i = n(638730),
    s = n(626135);
let a = (e, t, n, r) => {
        let { scrollTop: l = 0, scrollOffset: i = 0, scrollHeight: a = 0, scrollWidth: o = 0 } = r;
        if (a > 0) {
            let r = (l + i) / a;
            r > 0 &&
                s.default.track(e, {
                    scroll_visible_percent: r,
                    source: n,
                    page_height: Math.round(a),
                    page_width: Math.round(o),
                    page_session_id: t
                });
        }
    },
    o = (e, t) => {
        let n = r.useRef(null),
            s = r.useRef((0, l.Z)()),
            o = (0, i.h)(a, 5000, [], { trailing: !0 }),
            d = r.useCallback(() => {
                var r;
                let l = null === (r = n.current) || void 0 === r ? void 0 : r.getScrollerNode();
                null != l &&
                    o(e, s.current, t, {
                        scrollTop: l.scrollTop,
                        scrollOffset: l.offsetHeight,
                        scrollHeight: l.scrollHeight,
                        scrollWidth: l.scrollWidth
                    });
            }, [o, e, t]);
        return {
            scrollerRef: n,
            scrollHandler: d,
            sessionId: s.current
        };
    };
