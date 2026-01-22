n.d(t, { A: () => j });
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(554146),
    a = n(397927),
    c = n(262828),
    o = n(826673),
    d = n(555337),
    u = n(959757),
    f = n(739455),
    g = n(380682),
    b = n(994870),
    m = n(400281),
    p = n(652215),
    x = n(705751),
    h = n(280215);
function j() {
    let e,
        t = (0, l.bG)([d.A], () => d.A.getGuild()),
        { application: n, loading: j } = (0, c.A)(null == t ? void 0 : t.id, x.S7.GUILD_ROLE_SUBSCRIPTIONS),
        O = i.useRef(null),
        y = (0, u.A)(null != t ? t : void 0);
    i.useEffect(() => {
        null != t && (0, f.aV)(t) && (0, o.Dr)(s.M.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE);
    }, [t]);
    let v =
        (null == t ? void 0 : t.features.has(p.GuildFeatures.CREATOR_MONETIZABLE)) === !1 &&
        (null == t ? void 0 : t.features.has(p.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) === !1;
    return (
        (e =
            null == t || j
                ? (0, r.jsx)(a.y$y, {})
                : null != y
                  ? (0, r.jsx)(b.A, {
                        guild: t,
                        config: y,
                    })
                  : v
                    ? (0, r.jsx)(m.A, { guild: t })
                    : (0, r.jsx)(g.A, {
                          guild: t,
                          application: n,
                      })),
        (0, r.jsx)("div", {
            className: h.ed,
            children: (0, r.jsx)("div", {
                className: h.V1,
                children: (0, r.jsx)(a.ArX, {
                    className: h.iL,
                    children: (0, r.jsx)("main", {
                        ref: O,
                        className: h.z1,
                        children: (0, r.jsx)(a.xpW, {
                            containerRef: O,
                            children: e,
                        }),
                    }),
                }),
            }),
        })
    );
}
