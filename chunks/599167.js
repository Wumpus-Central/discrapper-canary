n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(554146),
    a = n(289873),
    o = n(573613),
    d = n(187322),
    c = n(262828),
    u = n(826673),
    m = n(555337),
    g = n(739455),
    h = n(380682),
    x = n(400281),
    _ = n(652215),
    p = n(705751),
    A = n(189564);
function E() {
    let e,
        t = (0, s.bG)([m.A], () => m.A.getGuild()),
        { application: n, loading: E } = (0, c.A)(t?.id, p.S7.GUILD_ROLE_SUBSCRIPTIONS),
        f = l.useRef(null);
    l.useEffect(() => {
        null != t && (0, g.aV)(t) && (0, u.Dr)(r.M.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE);
    }, [t]);
    let j =
        t?.features.has(_.GuildFeatures.CREATOR_MONETIZABLE) === !1 &&
        t?.features.has(_.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL) === !1;
    return (
        (e =
            null == t || E
                ? (0, i.jsx)(a.y, {})
                : j
                  ? (0, i.jsx)(x.A, { guild: t })
                  : (0, i.jsx)(h.A, { guild: t, application: n })),
        (0, i.jsx)("div", {
            className: A.ed,
            children: (0, i.jsx)("div", {
                className: A.V1,
                children: (0, i.jsx)(o.Ar, {
                    className: A.iL,
                    children: (0, i.jsx)("main", {
                        ref: f,
                        className: A.z1,
                        children: (0, i.jsx)(d.xp, { containerRef: f, children: e }),
                    }),
                }),
            }),
        })
    );
}
