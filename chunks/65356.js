t.d(l, { b: () => r });
var n = t(64700),
    a = t(59520),
    s = t(954571),
    i = t(652215);
function d(e, l, t, n) {
    let { scrollTop: a = 0, scrollOffset: i = 0, scrollHeight: d = 0, scrollWidth: r = 0 } = n;
    if (d > 0) {
        let n = (a + i) / d;
        if (n > 0) {
            let {
                sessionId: a,
                guildId: i,
                pageIndex: o,
                pageTitle: c,
                isUserGuildMember: u,
                pageHasLeaderboard: f,
            } = l;
            s.default.track(e, {
                slayer_storefront_session_id: a,
                guild_id: i,
                page_index: o,
                page_title: c,
                is_user_guild_member: u,
                page_has_leaderboard: f,
                scroll_visible_percent: n,
                page_height: Math.round(d),
                page_width: Math.round(r),
                location_stack: t,
            });
        }
    }
}
let r = (e, l, t) => {
    let s = n.useRef(l);
    n.useEffect(() => {
        s.current = l;
    }, [l]);
    let r = (0, a.I)(d, 5000, [], { trailing: !0 });
    return {
        handleScroll: n.useCallback(() => {
            if (null != e.current) {
                let l = e.current.getScrollerNode(),
                    n = s.current;
                null != l &&
                    r(i.HAw.SLAYER_STOREFRONT_PAGE_SCROLLED, n, t, {
                        scrollTop: l.scrollTop,
                        scrollOffset: l.offsetHeight,
                        scrollHeight: l.scrollHeight,
                        scrollWidth: l.scrollWidth,
                    });
            }
        }, [r, t, e]),
    };
};
