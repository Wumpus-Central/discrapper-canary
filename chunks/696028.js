n.d(t, { Z: () => s });
var r = n(64700),
    i = n(954571),
    a = n(652215);
function s(e, t, n, s) {
    let o = r.useRef(!1),
        l = r.useRef(t),
        c = r.useRef({
            positionInSection: n,
            analyticsLocations: s,
        });
    return (
        r.useEffect(() => {
            l.current = t;
        }, [t]),
        {
            handleCardHover: r.useCallback(() => {
                if (!o.current) {
                    let {
                            sessionId: t,
                            guildId: n,
                            pageIndex: r,
                            pageTitle: s,
                            pageSection: u,
                            pageSectionTitle: d,
                            isUserGuildMember: f,
                            pageHasLeaderboard: p,
                        } = l.current,
                        { positionInSection: _, analyticsLocations: h } = c.current;
                    i.default.track(a.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
                        slayer_storefront_session_id: t,
                        sku_id: e,
                        guild_id: n,
                        page_index: r,
                        page_title: s,
                        page_section: u,
                        page_section_title: d,
                        position_in_section: _,
                        is_user_guild_member: f,
                        page_has_leaderboard: p,
                        location_stack: h,
                    }),
                        (o.current = !0);
                }
            }, [e]),
            handleCardUnhover: r.useCallback(() => {
                o.current = !1;
            }, []),
        }
    );
}
