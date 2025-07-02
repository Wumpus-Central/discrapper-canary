n.d(t, { z: () => c });
var r = n(73800),
    l = n(638730),
    i = n(780475),
    a = n(626135),
    o = n(981631);
let s = (e, t, n, r) => {
        let { scrollTop: l = 0, scrollOffset: i = 0, scrollHeight: o = 0, scrollWidth: s = 0 } = r;
        if (o > 0) {
            let r = (l + i) / o;
            r > 0 &&
                a.default.track(e, {
                    scroll_visible_percent: r,
                    source: n,
                    page_height: Math.round(o),
                    page_width: Math.round(s),
                    page_session_id: t
                });
        }
    },
    c = (e, t, n) => {
        let { analyticsSource: a } = (0, i.MV)(n),
            c = (0, l.h)(s, 5000, [], { trailing: !0 });
        return {
            handleScroll: r.useCallback(() => {
                if (null != e.current) {
                    let n = e.current.getScrollerNode();
                    null != n &&
                        c(o.rMx.COLLECTIBLES_SHOP_SCROLLED, t, a, {
                            scrollTop: n.scrollTop,
                            scrollOffset: n.offsetHeight,
                            scrollHeight: n.scrollHeight,
                            scrollWidth: n.scrollWidth
                        });
                }
            }, [c, a, t, e])
        };
    };
