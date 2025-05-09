n.d(t, { _: () => s });
var r = n(73800),
    l = n(772848),
    i = n(638730),
    a = n(626135);
let o = (e, t, n, r) => {
        let { scrollTop: l = 0, scrollOffset: i = 0, scrollHeight: o = 0, scrollWidth: s = 0 } = r;
        if (o > 0) {
            let r = (l + i) / o;
            r > 0 &&
                a.default.track(e, {
                    scroll_visible_percent: r,
                    source: n,
                    page_height: Math.round(o),
                    page_width: Math.round(s),
                    page_session_id: t
                });
        }
    },
    s = (e, t) => {
        let n = r.useRef(null),
            a = r.useRef((0, l.Z)()),
            s = (0, i.h)(o, 5000, [], { trailing: !0 }),
            c = r.useCallback(() => {
                var r;
                let l = null == (r = n.current) ? void 0 : r.getScrollerNode();
                null != l &&
                    s(e, a.current, t, {
                        scrollTop: l.scrollTop,
                        scrollOffset: l.offsetHeight,
                        scrollHeight: l.scrollHeight,
                        scrollWidth: l.scrollWidth
                    });
            }, [s, e, t]);
        return {
            scrollerRef: n,
            scrollHandler: c,
            sessionId: a.current
        };
    };
