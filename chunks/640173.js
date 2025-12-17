t.d(n, { I: () => r });
var l = t(473749),
    i = t(638730),
    a = t(626135),
    o = t(981631);
function s(e, n, t, l) {
    let { scrollTop: i = 0, scrollOffset: o = 0, scrollHeight: s = 0, scrollWidth: r = 0 } = l;
    if (s > 0) {
        let l = (i + o) / s;
        if (l > 0) {
            let {
                sessionId: i,
                guildId: o,
                pageIndex: d,
                pageTitle: c,
                isUserGuildMember: u,
                pageHasLeaderboard: f,
            } = n;
            a.default.track(e, {
                slayer_storefront_session_id: i,
                guild_id: o,
                page_index: d,
                page_title: c,
                is_user_guild_member: u,
                page_has_leaderboard: f,
                scroll_visible_percent: l,
                page_height: Math.round(s),
                page_width: Math.round(r),
                location_stack: t,
            });
        }
    }
}
let r = (e, n, t) => {
    let a = l.useRef(n);
    l.useEffect(() => {
        a.current = n;
    }, [n]);
    let r = (0, i.h)(s, 5000, [], { trailing: !0 });
    return {
        handleScroll: l.useCallback(() => {
            if (null != e.current) {
                let n = e.current.getScrollerNode(),
                    l = a.current;
                null != n &&
                    r(o.rMx.SLAYER_STOREFRONT_PAGE_SCROLLED, l, t, {
                        scrollTop: n.scrollTop,
                        scrollOffset: n.offsetHeight,
                        scrollHeight: n.scrollHeight,
                        scrollWidth: n.scrollWidth,
                    });
            }
        }, [r, t, e]),
    };
};
