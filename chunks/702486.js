n.d(t, { _: () => o });
var l = n(192379),
    r = n(772848),
    i = n(638730),
    s = n(626135);
let a = (e, t, n, l) => {
        let { scrollTop: r = 0, scrollOffset: i = 0, scrollHeight: a = 0, scrollWidth: o = 0 } = l;
        if (a > 0) {
            let l = (r + i) / a;
            l > 0 &&
                s.default.track(e, {
                    scroll_visible_percent: l,
                    source: n,
                    page_height: Math.round(a),
                    page_width: Math.round(o),
                    page_session_id: t
                });
        }
    },
    o = (e, t) => {
        let n = l.useRef(null),
            s = l.useRef((0, r.Z)()),
            o = (0, i.h)(a, 5000, [], { trailing: !0 }),
            d = l.useCallback(() => {
                var l;
                let r = null === (l = n.current) || void 0 === l ? void 0 : l.getScrollerNode();
                null != r &&
                    o(e, s.current, t, {
                        scrollTop: r.scrollTop,
                        scrollOffset: r.offsetHeight,
                        scrollHeight: r.scrollHeight,
                        scrollWidth: r.scrollWidth
                    });
            }, [o, e, t]);
        return {
            scrollerRef: n,
            scrollHandler: d,
            sessionId: s.current
        };
    };
