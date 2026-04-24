"use strict";
n.d(t, { Z: () => r });
var a = n(64700),
    i = n(954571),
    l = n(652215);
function r(e, t, n, r) {
    let s = a.useRef(!1),
        c = a.useRef(t),
        o = a.useRef({ positionInSection: n, analyticsLocations: r });
    return (
        a.useEffect(() => {
            c.current = t;
        }, [t]),
        {
            handleCardHover: a.useCallback(() => {
                if (!s.current) {
                    let {
                            sessionId: t,
                            guildId: n,
                            pageIndex: a,
                            pageTitle: r,
                            pageSection: d,
                            pageSectionTitle: u,
                            isUserGuildMember: m,
                            pageHasLeaderboard: f,
                        } = c.current,
                        { positionInSection: h, analyticsLocations: _ } = o.current;
                    i.default.track(l.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
                        slayer_storefront_session_id: t,
                        sku_id: e,
                        guild_id: n,
                        page_index: a,
                        page_title: r,
                        page_section: d,
                        page_section_title: u,
                        position_in_section: h,
                        is_user_guild_member: m,
                        page_has_leaderboard: f,
                        location_stack: _,
                    }),
                        (s.current = !0);
                }
            }, [e]),
            handleCardUnhover: a.useCallback(() => {
                s.current = !1;
            }, []),
        }
    );
}
