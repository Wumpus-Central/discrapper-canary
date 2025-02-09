n.d(t, { Z: () => f });
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(704215),
    a = n(481060),
    o = n(725803),
    c = n(605236),
    d = n(999382),
    u = n(614342),
    m = n(303737),
    h = n(618748),
    g = n(500395),
    x = n(975464),
    p = n(981631),
    _ = n(674563),
    C = n(926468);
function f() {
    let e;
    let t = (0, l.e7)([d.Z], () => d.Z.getGuild()),
        { application: n, loading: f } = (0, o.Z)(null == t ? void 0 : t.id, _.wW.GUILD_ROLE_SUBSCRIPTIONS),
        v = r.useRef(null),
        N = (0, u.Z)(null != t ? t : void 0);
    r.useEffect(() => {
        null != t && (0, m.sO)(t) && (0, c.EW)(s.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE);
    }, [t]);
    let j = (null == t ? void 0 : t.hasFeature(p.oNc.CREATOR_MONETIZABLE)) === !1 && (null == t ? void 0 : t.hasFeature(p.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) === !1;
    return (
        (e =
            null == t || f
                ? (0, i.jsx)(a.$jN, {})
                : null != N
                  ? (0, i.jsx)(g.Z, {
                        guild: t,
                        config: N
                    })
                  : j
                    ? (0, i.jsx)(x.Z, { guild: t })
                    : (0, i.jsx)(h.Z, {
                          guild: t,
                          application: n
                      })),
        (0, i.jsx)('div', {
            className: C.settingsColumn,
            children: (0, i.jsx)('div', {
                className: C.settingsContainer,
                children: (0, i.jsx)(a.w0Z, {
                    className: C.settingsScroller,
                    children: (0, i.jsx)('main', {
                        ref: v,
                        className: C.settingsContent,
                        children: (0, i.jsx)(a.JcV, {
                            containerRef: v,
                            children: e
                        })
                    })
                })
            })
        })
    );
}
