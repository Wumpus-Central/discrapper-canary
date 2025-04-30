n.d(t, { _: () => s });
var r = n(192379),
    l = n(772848),
    a = n(638730),
    i = n(626135);
let o = (e, t, n, r) => {
        let { scrollTop: l = 0, scrollOffset: a = 0, scrollHeight: o = 0, scrollWidth: s = 0 } = r;
        if (o > 0) {
            let r = (l + a) / o;
            r > 0 &&
                i.default.track(e, {
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
            i = r.useRef((0, l.Z)()),
            s = (0, a.h)(o, 5000, [], { trailing: !0 }),
            c = r.useCallback(() => {
                var r;
                let l = null == (r = n.current) ? void 0 : r.getScrollerNode();
                null != l &&
                    s(e, i.current, t, {
                        scrollTop: l.scrollTop,
                        scrollOffset: l.offsetHeight,
                        scrollHeight: l.scrollHeight,
                        scrollWidth: l.scrollWidth
                    });
            }, [s, e, t]);
        return {
            scrollerRef: n,
            scrollHandler: c,
            sessionId: i.current
        };
    };
