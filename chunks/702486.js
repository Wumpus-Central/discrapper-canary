n.d(t, { z: () => u }), n(388685);
var r = n(73800),
    l = n(638730),
    a = n(780475),
    i = n(626135),
    o = n(981631),
    s = n(215023);
let c = (e, t, n, r) => {
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
    u = (e, t, n, i) => {
        let { analyticsSource: u } = (0, a.MV)(n),
            [d, p] = r.useState(s.IV),
            [f, b] = r.useState(!1),
            g = (0, l.h)(c, 5000, [], { trailing: !0 });
        return {
            handleScroll: r.useCallback(() => {
                if (null != e.current) {
                    let n = e.current.getScrollerNode();
                    null != n &&
                        g(o.rMx.COLLECTIBLES_SHOP_SCROLLED, t, u, {
                            scrollTop: n.scrollTop,
                            scrollOffset: n.offsetHeight,
                            scrollHeight: n.scrollHeight,
                            scrollWidth: n.scrollWidth
                        });
                    let r = e.current.getDistanceFromBottom();
                    d >= i ? b(r < 20) : r <= 200 && p((e) => e + s.IV);
                }
            }, [g, u, t, d, i]),
            numVisibleItems: d,
            scrollerAtBottom: f
        };
    };
