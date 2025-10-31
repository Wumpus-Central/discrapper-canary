n.d(t, { z: () => u });
var r = n(647438),
    l = n(638730),
    i = n(381585),
    s = n(780475),
    a = n(626135),
    o = n(981631);
let c = (e, t, n, r) => {
        let { scrollTop: l = 0, scrollOffset: i = 0, scrollHeight: s = 0, scrollWidth: o = 0 } = r;
        if (s > 0) {
            let r = (l + i) / s;
            r > 0 &&
                a.default.track(e, {
                    scroll_visible_percent: r,
                    source: n,
                    page_height: Math.round(s),
                    page_width: Math.round(o),
                    page_session_id: t,
                });
        }
    },
    u = (e, t) => {
        let { analyticsSource: n } = (0, s.MV)(t),
            a = (0, l.h)(c, 5000, [], { trailing: !0 }),
            u = (0, i.sp)(),
            d = null == u ? void 0 : u.sessionId;
        return {
            handleScroll: r.useCallback(() => {
                if (null != e.current) {
                    let t = e.current.getScrollerNode();
                    null != t &&
                        a(o.rMx.COLLECTIBLES_SHOP_SCROLLED, null != d ? d : "", n, {
                            scrollTop: t.scrollTop,
                            scrollOffset: t.offsetHeight,
                            scrollHeight: t.scrollHeight,
                            scrollWidth: t.scrollWidth,
                        });
                }
            }, [a, n, d, e]),
        };
    };
