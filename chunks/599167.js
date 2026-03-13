"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(554146),
    a = n(397927),
    o = n(262828),
    d = n(826673),
    c = n(555337),
    u = n(739455),
    m = n(380682),
    g = n(400281),
    x = n(652215),
    h = n(705751),
    _ = n(650433);
function p() {
    let e,
        t = (0, l.bG)([c.A], () => c.A.getGuild()),
        { application: n, loading: p } = (0, o.A)(t?.id, h.S7.GUILD_ROLE_SUBSCRIPTIONS),
        A = s.useRef(null);
    s.useEffect(() => {
        null != t && (0, u.aV)(t) && (0, d.Dr)(r.M.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE);
    }, [t]);
    let f =
        t?.features.has(x.GuildFeatures.CREATOR_MONETIZABLE) === !1 &&
        t?.features.has(x.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL) === !1;
    return (
        (e =
            null == t || p
                ? (0, i.jsx)(a.y$y, {})
                : f
                  ? (0, i.jsx)(g.A, { guild: t })
                  : (0, i.jsx)(m.A, { guild: t, application: n })),
        (0, i.jsx)("div", {
            className: _.ed,
            children: (0, i.jsx)("div", {
                className: _.V1,
                children: (0, i.jsx)(a.ArX, {
                    className: _.iL,
                    children: (0, i.jsx)("main", {
                        ref: A,
                        className: _.z1,
                        children: (0, i.jsx)(a.xpW, { containerRef: A, children: e }),
                    }),
                }),
            }),
        })
    );
}
