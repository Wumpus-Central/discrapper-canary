n.d(t, { z: () => u });
var r = n(473749),
    l = n(638730),
    i = n(381585),
    o = n(780475),
    s = n(626135),
    a = n(981631);
let c = (e, t, n, r) => {
        let { scrollTop: l = 0, scrollOffset: i = 0, scrollHeight: o = 0, scrollWidth: a = 0 } = r;
        if (o > 0) {
            let r = (l + i) / o;
            r > 0 &&
                s.default.track(e, {
                    scroll_visible_percent: r,
                    source: n,
                    page_height: Math.round(o),
                    page_width: Math.round(a),
                    page_session_id: t,
                });
        }
    },
    u = (e, t) => {
        let { analyticsSource: n } = (0, o.MV)(t),
            s = (0, l.h)(c, 5000, [], { trailing: !0 }),
            u = (0, i.sp)(),
            d = null == u ? void 0 : u.sessionId;
        return {
            handleScroll: r.useCallback(() => {
                if (null != e.current) {
                    let t = e.current.getScrollerNode();
                    null != t &&
                        s(a.rMx.COLLECTIBLES_SHOP_SCROLLED, null != d ? d : "", n, {
                            scrollTop: t.scrollTop,
                            scrollOffset: t.offsetHeight,
                            scrollHeight: t.scrollHeight,
                            scrollWidth: t.scrollWidth,
                        });
                }
            }, [s, n, d, e]),
        };
    };
