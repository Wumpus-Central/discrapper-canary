n.d(t, {
    Z: function () {
        return v;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(704215),
    s = n(481060),
    o = n(725803),
    c = n(605236),
    d = n(999382),
    u = n(614342),
    m = n(303737),
    h = n(618748),
    g = n(500395),
    x = n(975464),
    p = n(981631),
    f = n(674563),
    C = n(838581);
function v() {
    let e;
    let t = (0, l.e7)([d.Z], () => d.Z.getGuild()),
        { application: n, loading: v } = (0, o.Z)(null == t ? void 0 : t.id, f.wW.GUILD_ROLE_SUBSCRIPTIONS),
        _ = r.useRef(null),
        I = (0, u.Z)(null != t ? t : void 0);
    r.useEffect(() => {
        null != t && (0, m.sO)(t) && (0, c.EW)(a.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE);
    }, [t]);
    let N = (null == t ? void 0 : t.hasFeature(p.oNc.CREATOR_MONETIZABLE)) === !1 && (null == t ? void 0 : t.hasFeature(p.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) === !1;
    return (
        (e =
            null == t || v
                ? (0, i.jsx)(s.Spinner, {})
                : null != I
                  ? (0, i.jsx)(g.Z, {
                        guild: t,
                        config: I
                    })
                  : N
                    ? (0, i.jsx)(x.Z, { guild: t })
                    : (0, i.jsx)(h.Z, {
                          guild: t,
                          application: n
                      })),
        (0, i.jsx)('div', {
            className: C.settingsColumn,
            children: (0, i.jsx)('div', {
                className: C.settingsContainer,
                children: (0, i.jsx)(s.ScrollerAuto, {
                    className: C.settingsScroller,
                    children: (0, i.jsx)('main', {
                        ref: _,
                        className: C.settingsContent,
                        children: (0, i.jsx)(s.FocusRingScope, {
                            containerRef: _,
                            children: e
                        })
                    })
                })
            })
        })
    );
}
