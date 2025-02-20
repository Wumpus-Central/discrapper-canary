r.d(t, { _: () => s });
var n = r(192379),
    l = r(772848),
    i = r(638730),
    a = r(626135);
let o = (e, t, r, n) => {
        let { scrollTop: l = 0, scrollOffset: i = 0, scrollHeight: o = 0, scrollWidth: s = 0 } = n;
        if (o > 0) {
            let n = (l + i) / o;
            n > 0 &&
                a.default.track(e, {
                    scroll_visible_percent: n,
                    source: r,
                    page_height: Math.round(o),
                    page_width: Math.round(s),
                    page_session_id: t
                });
        }
    },
    s = (e, t) => {
        let r = n.useRef(null),
            a = n.useRef((0, l.Z)()),
            s = (0, i.h)(o, 5000, [], { trailing: !0 }),
            c = n.useCallback(() => {
                var n;
                let l = null === (n = r.current) || void 0 === n ? void 0 : n.getScrollerNode();
                null != l &&
                    s(e, a.current, t, {
                        scrollTop: l.scrollTop,
                        scrollOffset: l.offsetHeight,
                        scrollHeight: l.scrollHeight,
                        scrollWidth: l.scrollWidth
                    });
            }, [s, e, t]);
        return {
            scrollerRef: r,
            scrollHandler: c,
            sessionId: a.current
        };
    };
