l.d(n, { I: () => s });
var t = l(473749),
    i = l(638730),
    a = l(626135),
    o = l(981631);
function r(e, n, l, t) {
    let { scrollTop: i = 0, scrollOffset: o = 0, scrollHeight: r = 0, scrollWidth: s = 0 } = t;
    if (r > 0) {
        let t = (i + o) / r;
        if (t > 0) {
            let { sessionId: i, guildId: o, pageIndex: d, pageTitle: c, isUserGuildMember: u } = n;
            a.default.track(e, {
                slayer_shop_session_id: i,
                guild_id: o,
                page_index: d,
                page_title: c,
                is_user_guild_member: u,
                scroll_visible_percent: t,
                page_height: Math.round(r),
                page_width: Math.round(s),
                location_stack: l,
            });
        }
    }
}
let s = (e, n, l) => {
    let a = t.useRef(n);
    t.useEffect(() => {
        a.current = n;
    }, [n]);
    let s = (0, i.h)(r, 5000, [], { trailing: !0 });
    return {
        handleScroll: t.useCallback(() => {
            if (null != e.current) {
                let n = e.current.getScrollerNode(),
                    t = a.current;
                null != n &&
                    s(o.rMx.SLAYER_SHOP_SCROLLED, t, l, {
                        scrollTop: n.scrollTop,
                        scrollOffset: n.offsetHeight,
                        scrollHeight: n.scrollHeight,
                        scrollWidth: n.scrollWidth,
                    });
            }
        }, [s, l, e]),
    };
};
