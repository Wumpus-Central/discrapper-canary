n.d(t, { z: () => u });
var r = n(473749),
    l = n(638730),
    a = n(381585),
    s = n(780475),
    o = n(626135),
    i = n(981631);
let c = (e, t, n, r) => {
        let { scrollTop: l = 0, scrollOffset: a = 0, scrollHeight: s = 0, scrollWidth: i = 0 } = r;
        if (s > 0) {
            let r = (l + a) / s;
            r > 0 &&
                o.default.track(e, {
                    scroll_visible_percent: r,
                    source: n,
                    page_height: Math.round(s),
                    page_width: Math.round(i),
                    page_session_id: t,
                });
        }
    },
    u = (e, t) => {
        let { analyticsSource: n } = (0, s.MV)(t),
            o = (0, l.h)(c, 5000, [], { trailing: !0 }),
            u = (0, a.sp)(),
            d = null == u ? void 0 : u.sessionId;
        return {
            handleScroll: r.useCallback(() => {
                if (null != e.current) {
                    let t = e.current.getScrollerNode();
                    null != t &&
                        o(i.rMx.COLLECTIBLES_SHOP_SCROLLED, null != d ? d : "", n, {
                            scrollTop: t.scrollTop,
                            scrollOffset: t.offsetHeight,
                            scrollHeight: t.scrollHeight,
                            scrollWidth: t.scrollWidth,
                        });
                }
            }, [o, n, d, e]),
        };
    };
