n.d(t, { z: () => u });
var r = n(647438),
    l = n(638730),
    i = n(381585),
    a = n(780475),
    o = n(626135),
    s = n(981631);
let c = (e, t, n, r) => {
        let { scrollTop: l = 0, scrollOffset: i = 0, scrollHeight: a = 0, scrollWidth: s = 0 } = r;
        if (a > 0) {
            let r = (l + i) / a;
            r > 0 &&
                o.default.track(e, {
                    scroll_visible_percent: r,
                    source: n,
                    page_height: Math.round(a),
                    page_width: Math.round(s),
                    page_session_id: t,
                });
        }
    },
    u = (e, t) => {
        let { analyticsSource: n } = (0, a.MV)(t),
            o = (0, l.h)(c, 5000, [], { trailing: !0 }),
            u = (0, i.sp)(),
            d = null == u ? void 0 : u.sessionId;
        return {
            handleScroll: r.useCallback(() => {
                if (null != e.current) {
                    let t = e.current.getScrollerNode();
                    null != t &&
                        o(s.rMx.COLLECTIBLES_SHOP_SCROLLED, null != d ? d : "", n, {
                            scrollTop: t.scrollTop,
                            scrollOffset: t.offsetHeight,
                            scrollHeight: t.scrollHeight,
                            scrollWidth: t.scrollWidth,
                        });
                }
            }, [o, n, d, e]),
        };
    };
