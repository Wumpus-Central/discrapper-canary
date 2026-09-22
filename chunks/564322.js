l.d(t, { X: () => d });
var n = l(582128),
    s = l(59520),
    i = l(440938),
    r = l(790297),
    a = l(174459),
    o = l(652215);
function c(e, t, l, n) {
    let { scrollTop: s = 0, scrollOffset: i = 0, scrollHeight: r = 0, scrollWidth: o = 0 } = n;
    if (r > 0) {
        let n = (s + i) / r;
        n > 0 &&
            a.default.track(e, {
                scroll_visible_percent: n,
                source: l,
                page_height: Math.round(r),
                page_width: Math.round(o),
                page_session_id: t,
            });
    }
}
function d(e, t) {
    let { analyticsSource: l } = (0, r.lC)(t),
        a = (0, s.I)(c, 5e3, [], { trailing: !0 }),
        d = (0, i.uM)(),
        u = d?.sessionId;
    return {
        handleScroll: n.useCallback(() => {
            if (null != e.current) {
                let t = e.current.getScrollerNode();
                null != t &&
                    a(o.HAw.COLLECTIBLES_SHOP_SCROLLED, null != u ? u : "", l, {
                        scrollTop: t.scrollTop,
                        scrollOffset: t.offsetHeight,
                        scrollHeight: t.scrollHeight,
                        scrollWidth: t.scrollWidth,
                    });
            }
        }, [a, l, u, e]),
    };
}
