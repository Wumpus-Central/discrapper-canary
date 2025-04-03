n.d(t, { Z: () => j });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(704215),
    l = n(481060),
    o = n(725803),
    c = n(605236),
    d = n(999382),
    u = n(614342),
    m = n(303737),
    g = n(618748),
    p = n(500395),
    h = n(975464),
    f = n(981631),
    b = n(674563),
    x = n(94072);
function j() {
    let e,
        t = (0, s.e7)([d.Z], () => d.Z.getGuild()),
        { application: n, loading: j } = (0, o.Z)(null == t ? void 0 : t.id, b.wW.GUILD_ROLE_SUBSCRIPTIONS),
        N = i.useRef(null),
        _ = (0, u.Z)(null != t ? t : void 0);
    i.useEffect(() => {
        null != t && (0, m.sO)(t) && (0, c.EW)(a.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE);
    }, [t]);
    let v = (null == t ? void 0 : t.hasFeature(f.oNc.CREATOR_MONETIZABLE)) === !1 && (null == t ? void 0 : t.hasFeature(f.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) === !1;
    return (
        (e =
            null == t || j
                ? (0, r.jsx)(l.$jN, {})
                : null != _
                  ? (0, r.jsx)(p.Z, {
                        guild: t,
                        config: _
                    })
                  : v
                    ? (0, r.jsx)(h.Z, { guild: t })
                    : (0, r.jsx)(g.Z, {
                          guild: t,
                          application: n
                      })),
        (0, r.jsx)('div', {
            className: x.settingsColumn,
            children: (0, r.jsx)('div', {
                className: x.settingsContainer,
                children: (0, r.jsx)(l.w0Z, {
                    className: x.settingsScroller,
                    children: (0, r.jsx)('main', {
                        ref: N,
                        className: x.settingsContent,
                        children: (0, r.jsx)(l.JcV, {
                            containerRef: N,
                            children: e
                        })
                    })
                })
            })
        })
    );
}
