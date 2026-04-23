"use strict";
s.d(t, { X: () => d });
var n = s(64700),
    l = s(59520),
    r = s(440938),
    a = s(790297),
    i = s(954571),
    o = s(652215);
let c = (e, t, s, n) => {
        let { scrollTop: l = 0, scrollOffset: r = 0, scrollHeight: a = 0, scrollWidth: o = 0 } = n;
        if (a > 0) {
            let n = (l + r) / a;
            n > 0 &&
                i.default.track(e, {
                    scroll_visible_percent: n,
                    source: s,
                    page_height: Math.round(a),
                    page_width: Math.round(o),
                    page_session_id: t,
                });
        }
    },
    d = (e, t) => {
        let { analyticsSource: s } = (0, a.lC)(t),
            i = (0, l.I)(c, 5e3, [], { trailing: !0 }),
            d = (0, r.uM)(),
            u = d?.sessionId;
        return {
            handleScroll: n.useCallback(() => {
                if (null != e.current) {
                    let t = e.current.getScrollerNode();
                    null != t &&
                        i(o.HAw.COLLECTIBLES_SHOP_SCROLLED, null != u ? u : "", s, {
                            scrollTop: t.scrollTop,
                            scrollOffset: t.offsetHeight,
                            scrollHeight: t.scrollHeight,
                            scrollWidth: t.scrollWidth,
                        });
                }
            }, [i, s, u, e]),
        };
    };
