n.d(t, { Z: () => j });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    s = n(704215),
    a = n(481060),
    o = n(725803),
    c = n(605236),
    d = n(999382),
    u = n(614342),
    m = n(303737),
    g = n(618748),
    p = n(500395),
    h = n(975464),
    f = n(981631),
    x = n(674563),
    b = n(94072);
function j() {
    let e,
        t = (0, l.e7)([d.Z], () => d.Z.getGuild()),
        { application: n, loading: j } = (0, o.Z)(null == t ? void 0 : t.id, x.wW.GUILD_ROLE_SUBSCRIPTIONS),
        _ = i.useRef(null),
        v = (0, u.Z)(null != t ? t : void 0);
    i.useEffect(() => {
        null != t && (0, m.sO)(t) && (0, c.EW)(s.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE);
    }, [t]);
    let O = (null == t ? void 0 : t.hasFeature(f.oNc.CREATOR_MONETIZABLE)) === !1 && (null == t ? void 0 : t.hasFeature(f.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) === !1;
    return (
        (e =
            null == t || j
                ? (0, r.jsx)(a.$jN, {})
                : null != v
                  ? (0, r.jsx)(p.Z, {
                        guild: t,
                        config: v
                    })
                  : O
                    ? (0, r.jsx)(h.Z, { guild: t })
                    : (0, r.jsx)(g.Z, {
                          guild: t,
                          application: n
                      })),
        (0, r.jsx)('div', {
            className: b.settingsColumn,
            children: (0, r.jsx)('div', {
                className: b.settingsContainer,
                children: (0, r.jsx)(a.w0Z, {
                    className: b.settingsScroller,
                    children: (0, r.jsx)('main', {
                        ref: _,
                        className: b.settingsContent,
                        children: (0, r.jsx)(a.JcV, {
                            containerRef: _,
                            children: e
                        })
                    })
                })
            })
        })
    );
}
