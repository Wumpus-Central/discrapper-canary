n.d(t, { z: () => c });
var r = n(73800),
    l = n(638730),
    a = n(780475),
    i = n(626135),
    o = n(981631);
let s = (e, t, n, r) => {
        let { scrollTop: l = 0, scrollOffset: a = 0, scrollHeight: o = 0, scrollWidth: s = 0 } = r;
        if (o > 0) {
            let r = (l + a) / o;
            r > 0 &&
                i.default.track(e, {
                    scroll_visible_percent: r,
                    source: n,
                    page_height: Math.round(o),
                    page_width: Math.round(s),
                    page_session_id: t
                });
        }
    },
    c = (e, t, n) => {
        let { analyticsSource: i } = (0, a.MV)(n),
            c = (0, l.h)(s, 5000, [], { trailing: !0 });
        return {
            handleScroll: r.useCallback(() => {
                if (null != e.current) {
                    let n = e.current.getScrollerNode();
                    null != n &&
                        c(o.rMx.COLLECTIBLES_SHOP_SCROLLED, t, i, {
                            scrollTop: n.scrollTop,
                            scrollOffset: n.offsetHeight,
                            scrollHeight: n.scrollHeight,
                            scrollWidth: n.scrollWidth
                        });
                }
            }, [c, i, t, e])
        };
    };
