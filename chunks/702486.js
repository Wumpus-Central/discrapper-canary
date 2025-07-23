r.d(t, { z: () => u });
var n = r(73800),
    l = r(638730),
    i = r(381585),
    o = r(780475),
    a = r(626135),
    s = r(981631);
let c = (e, t, r, n) => {
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
    u = (e, t) => {
        let { analyticsSource: r } = (0, o.MV)(t),
            a = (0, l.h)(c, 5000, [], { trailing: !0 }),
            u = (0, i.sp)(),
            d = null == u ? void 0 : u.sessionId;
        return {
            handleScroll: n.useCallback(() => {
                if (null != e.current) {
                    let t = e.current.getScrollerNode();
                    null != t &&
                        a(s.rMx.COLLECTIBLES_SHOP_SCROLLED, null != d ? d : '', r, {
                            scrollTop: t.scrollTop,
                            scrollOffset: t.offsetHeight,
                            scrollHeight: t.scrollHeight,
                            scrollWidth: t.scrollWidth
                        });
                }
            }, [a, r, d, e])
        };
    };
