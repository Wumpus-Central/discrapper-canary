l.d(t, {
    X: () => u,
});
var n = l(64700),
    r = l(59520),
    s = l(440938),
    a = l(790297),
    i = l(954571),
    o = l(652215);
let c = (e, t, l, n) => {
        let { scrollTop: r = 0, scrollOffset: s = 0, scrollHeight: a = 0, scrollWidth: o = 0 } = n;
        if (a > 0) {
            let n = (r + s) / a;
            n > 0 &&
                i.default.track(e, {
                    scroll_visible_percent: n,
                    source: l,
                    page_height: Math.round(a),
                    page_width: Math.round(o),
                    page_session_id: t,
                });
        }
    },
    u = (e, t) => {
        let { analyticsSource: l } = (0, a.lC)(t),
            i = (0, r.I)(c, 5e3, [], {
                trailing: !0,
            }),
            u = (0, s.uM)(),
            d = null == u ? void 0 : u.sessionId;
        return {
            handleScroll: n.useCallback(() => {
                if (null != e.current) {
                    let t = e.current.getScrollerNode();
                    null != t &&
                        i(o.HAw.COLLECTIBLES_SHOP_SCROLLED, null != d ? d : "", l, {
                            scrollTop: t.scrollTop,
                            scrollOffset: t.offsetHeight,
                            scrollHeight: t.scrollHeight,
                            scrollWidth: t.scrollWidth,
                        });
                }
            }, [i, l, d, e]),
        };
    };
