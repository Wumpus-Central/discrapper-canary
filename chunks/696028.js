r.d(t, { Z: () => a });
var n = r(64700),
    u = r(954571),
    l = r(652215);
function a(e, t, r, a) {
    let i = n.useRef(!1),
        s = n.useRef(t),
        o = n.useRef({ positionInSection: r, analyticsLocations: a });
    return (
        n.useEffect(() => {
            s.current = t;
        }, [t]),
        {
            handleCardHover: n.useCallback(() => {
                if (!i.current) {
                    let {
                            sessionId: t,
                            guildId: r,
                            pageIndex: n,
                            pageTitle: a,
                            pageSection: c,
                            pageSectionTitle: d,
                            isUserGuildMember: _,
                            pageHasLeaderboard: f,
                        } = s.current,
                        { positionInSection: g, analyticsLocations: m } = o.current;
                    u.default.track(l.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
                        slayer_storefront_session_id: t,
                        sku_id: e,
                        guild_id: r,
                        page_index: n,
                        page_title: a,
                        page_section: c,
                        page_section_title: d,
                        position_in_section: g,
                        is_user_guild_member: _,
                        page_has_leaderboard: f,
                        location_stack: m,
                    }),
                        (i.current = !0);
                }
            }, [e]),
            handleCardUnhover: n.useCallback(() => {
                i.current = !1;
            }, []),
        }
    );
}
