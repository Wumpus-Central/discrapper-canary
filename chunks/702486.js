n.d(t, { z: () => u });
var r = n(647438),
    l = n(638730),
    s = n(381585),
    a = n(780475),
    i = n(626135),
    o = n(981631);
let c = (e, t, n, r) => {
        let { scrollTop: l = 0, scrollOffset: s = 0, scrollHeight: a = 0, scrollWidth: o = 0 } = r;
        if (a > 0) {
            let r = (l + s) / a;
            r > 0 &&
                i.default.track(e, {
                    scroll_visible_percent: r,
                    source: n,
                    page_height: Math.round(a),
                    page_width: Math.round(o),
                    page_session_id: t,
                });
        }
    },
    u = (e, t) => {
        let { analyticsSource: n } = (0, a.MV)(t),
            i = (0, l.h)(c, 5000, [], { trailing: !0 }),
            u = (0, s.sp)(),
            d = null == u ? void 0 : u.sessionId;
        return {
            handleScroll: r.useCallback(() => {
                if (null != e.current) {
                    let t = e.current.getScrollerNode();
                    null != t &&
                        i(o.rMx.COLLECTIBLES_SHOP_SCROLLED, null != d ? d : "", n, {
                            scrollTop: t.scrollTop,
                            scrollOffset: t.offsetHeight,
                            scrollHeight: t.scrollHeight,
                            scrollWidth: t.scrollWidth,
                        });
                }
            }, [i, n, d, e]),
        };
    };
