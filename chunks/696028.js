n.d(t, { Z: () => r });
var i = n(64700),
    l = n(954571),
    a = n(652215);
function r(e, t, n, r) {
    let s = i.useRef(!1),
        o = i.useRef(t),
        d = i.useRef({ positionInSection: n, analyticsLocations: r });
    return (
        i.useEffect(() => {
            o.current = t;
        }, [t]),
        {
            handleCardHover: i.useCallback(() => {
                if (!s.current) {
                    let {
                            sessionId: t,
                            guildId: n,
                            pageIndex: i,
                            pageTitle: r,
                            pageSection: c,
                            pageSectionTitle: u,
                            isUserGuildMember: m,
                            pageHasLeaderboard: _,
                        } = o.current,
                        { positionInSection: h, analyticsLocations: p } = d.current;
                    l.default.track(a.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
                        slayer_storefront_session_id: t,
                        sku_id: e,
                        guild_id: n,
                        page_index: i,
                        page_title: r,
                        page_section: c,
                        page_section_title: u,
                        position_in_section: h,
                        is_user_guild_member: m,
                        page_has_leaderboard: _,
                        location_stack: p,
                    }),
                        (s.current = !0);
                }
            }, [e]),
            handleCardUnhover: i.useCallback(() => {
                s.current = !1;
            }, []),
        }
    );
}
