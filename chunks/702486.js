n.d(t, { _: () => o });
var l = n(192379),
    r = n(772848),
    i = n(638730),
    a = n(626135);
let s = (e, t, n, l) => {
        let { scrollTop: r = 0, scrollOffset: i = 0, scrollHeight: s = 0, scrollWidth: o = 0 } = l;
        if (s > 0) {
            let l = (r + i) / s;
            l > 0 &&
                a.default.track(e, {
                    scroll_visible_percent: l,
                    source: n,
                    page_height: Math.round(s),
                    page_width: Math.round(o),
                    page_session_id: t
                });
        }
    },
    o = (e, t) => {
        let n = l.useRef(null),
            a = l.useRef((0, r.Z)()),
            o = (0, i.h)(s, 5000, [], { trailing: !0 }),
            d = l.useCallback(() => {
                var l;
                let r = null === (l = n.current) || void 0 === l ? void 0 : l.getScrollerNode();
                null != r &&
                    o(e, a.current, t, {
                        scrollTop: r.scrollTop,
                        scrollOffset: r.offsetHeight,
                        scrollHeight: r.scrollHeight,
                        scrollWidth: r.scrollWidth
                    });
            }, [o, e, t]);
        return {
            scrollerRef: n,
            scrollHandler: d,
            sessionId: a.current
        };
    };
