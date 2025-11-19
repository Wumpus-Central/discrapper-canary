n.d(t, { Z: () => j });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(704215),
    s = n(481060),
    o = n(725803),
    c = n(266454),
    d = n(999382),
    u = n(614342),
    g = n(303737),
    m = n(618748),
    p = n(500395),
    f = n(975464),
    h = n(981631),
    b = n(674563),
    x = n(295699);
function j() {
    let e,
        t = (0, l.e7)([d.Z], () => d.Z.getGuild()),
        { application: n, loading: j } = (0, o.Z)(null == t ? void 0 : t.id, b.wW.GUILD_ROLE_SUBSCRIPTIONS),
        _ = i.useRef(null),
        v = (0, u.Z)(null != t ? t : void 0);
    i.useEffect(() => {
        null != t && (0, g.sO)(t) && (0, c.Q3)(a.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE);
    }, [t]);
    let O =
        (null == t ? void 0 : t.features.has(h.GuildFeatures.CREATOR_MONETIZABLE)) === !1 &&
        (null == t ? void 0 : t.features.has(h.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) === !1;
    return (
        (e =
            null == t || j
                ? (0, r.jsx)(s.$jN, {})
                : null != v
                  ? (0, r.jsx)(p.Z, {
                        guild: t,
                        config: v,
                    })
                  : O
                    ? (0, r.jsx)(f.Z, { guild: t })
                    : (0, r.jsx)(m.Z, {
                          guild: t,
                          application: n,
                      })),
        (0, r.jsx)("div", {
            className: x.settingsColumn,
            children: (0, r.jsx)("div", {
                className: x.settingsContainer,
                children: (0, r.jsx)(s.w0Z, {
                    className: x.settingsScroller,
                    children: (0, r.jsx)("main", {
                        ref: _,
                        className: x.settingsContent,
                        children: (0, r.jsx)(s.JcV, {
                            containerRef: _,
                            children: e,
                        }),
                    }),
                }),
            }),
        })
    );
}
