n.d(t, { X: () => d });
var l = n(582128),
    s = n(59520),
    i = n(440938),
    r = n(790297),
    a = n(174459),
    o = n(652215);
function c(e, t, n, l) {
    let { scrollTop: s = 0, scrollOffset: i = 0, scrollHeight: r = 0, scrollWidth: o = 0 } = l;
    if (r > 0) {
        let l = (s + i) / r;
        l > 0 &&
            a.default.track(e, {
                scroll_visible_percent: l,
                source: n,
                page_height: Math.round(r),
                page_width: Math.round(o),
                page_session_id: t,
            });
    }
}
function d(e, t) {
    let { analyticsSource: n } = (0, r.lC)(t),
        a = (0, s.I)(c, 5e3, [], { trailing: !0 }),
        d = (0, i.uM)(),
        u = d?.sessionId;
    return {
        handleScroll: l.useCallback(() => {
            if (null != e.current) {
                let t = e.current.getScrollerNode();
                null != t &&
                    a(o.HAw.COLLECTIBLES_SHOP_SCROLLED, null != u ? u : "", n, {
                        scrollTop: t.scrollTop,
                        scrollOffset: t.offsetHeight,
                        scrollHeight: t.scrollHeight,
                        scrollWidth: t.scrollWidth,
                    });
            }
        }, [a, n, u, e]),
    };
}
