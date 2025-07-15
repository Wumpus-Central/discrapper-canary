r.d(t, { z: () => c });
var n = r(73800),
    l = r(638730),
    o = r(780475),
    i = r(626135),
    a = r(981631);
let s = (e, t, r, n) => {
        let { scrollTop: l = 0, scrollOffset: o = 0, scrollHeight: a = 0, scrollWidth: s = 0 } = n;
        if (a > 0) {
            let n = (l + o) / a;
            n > 0 &&
                i.default.track(e, {
                    scroll_visible_percent: n,
                    source: r,
                    page_height: Math.round(a),
                    page_width: Math.round(s),
                    page_session_id: t
                });
        }
    },
    c = (e, t, r) => {
        let { analyticsSource: i } = (0, o.MV)(r),
            c = (0, l.h)(s, 5000, [], { trailing: !0 });
        return {
            handleScroll: n.useCallback(() => {
                if (null != e.current) {
                    let r = e.current.getScrollerNode();
                    null != r &&
                        c(a.rMx.COLLECTIBLES_SHOP_SCROLLED, t, i, {
                            scrollTop: r.scrollTop,
                            scrollOffset: r.offsetHeight,
                            scrollHeight: r.scrollHeight,
                            scrollWidth: r.scrollWidth
                        });
                }
            }, [c, i, t, e])
        };
    };
