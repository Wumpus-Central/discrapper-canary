r.d(t, { z: () => u });
var n = r(73800),
    l = r(638730),
    i = r(381585),
    a = r(780475),
    o = r(626135),
    s = r(981631);
let c = (e, t, r, n) => {
        let { scrollTop: l = 0, scrollOffset: i = 0, scrollHeight: a = 0, scrollWidth: s = 0 } = n;
        if (a > 0) {
            let n = (l + i) / a;
            n > 0 &&
                o.default.track(e, {
                    scroll_visible_percent: n,
                    source: r,
                    page_height: Math.round(a),
                    page_width: Math.round(s),
                    page_session_id: t
                });
        }
    },
    u = (e, t) => {
        let { analyticsSource: r } = (0, a.MV)(t),
            o = (0, l.h)(c, 5000, [], { trailing: !0 }),
            u = (0, i.sp)(),
            d = null == u ? void 0 : u.sessionId;
        return {
            handleScroll: n.useCallback(() => {
                if (null != e.current) {
                    let t = e.current.getScrollerNode();
                    null != t &&
                        o(s.rMx.COLLECTIBLES_SHOP_SCROLLED, null != d ? d : '', r, {
                            scrollTop: t.scrollTop,
                            scrollOffset: t.offsetHeight,
                            scrollHeight: t.scrollHeight,
                            scrollWidth: t.scrollWidth
                        });
                }
            }, [o, r, d, e])
        };
    };
