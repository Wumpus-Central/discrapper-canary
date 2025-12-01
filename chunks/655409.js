n.d(t, { A: () => o });
var r = n(473749),
    i = n(626135),
    a = n(981631);
function o(e, t, n, o) {
    let s = r.useRef(!1),
        l = r.useRef(t),
        c = r.useRef({
            positionInSection: n,
            analyticsLocations: o,
        });
    return (
        r.useEffect(() => {
            l.current = t;
        }, [t]),
        {
            handleCardHover: r.useCallback(() => {
                if (!s.current) {
                    let {
                            sessionId: t,
                            guildId: n,
                            pageIndex: r,
                            pageTitle: o,
                            pageSection: u,
                            pageSectionTitle: d,
                            isUserGuildMember: f,
                            pageHasLeaderboard: p,
                        } = l.current,
                        { positionInSection: _, analyticsLocations: m } = c.current;
                    i.default.track(a.rMx.SLAYER_STOREFRONT_CARD_HOVERED, {
                        slayer_storefront_session_id: t,
                        sku_id: e,
                        guild_id: n,
                        page_index: r,
                        page_title: o,
                        page_section: u,
                        page_section_title: d,
                        position_in_section: _,
                        is_user_guild_member: f,
                        page_has_leaderboard: p,
                        location_stack: m,
                    }),
                        (s.current = !0);
                }
            }, [e]),
            handleCardUnhover: r.useCallback(() => {
                s.current = !1;
            }, []),
        }
    );
}
