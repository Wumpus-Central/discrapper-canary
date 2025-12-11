n.d(t, {
    Q: () => h,
    Z: () => m,
}),
    n(472816),
    n(794429),
    n(388685);
var r = n(473749),
    i = n(442837),
    a = n(353647),
    o = n(26033),
    s = n(931847),
    l = n(836197),
    c = n(621853),
    u = n(687158),
    d = n(158776),
    f = n(823379),
    p = n(699955),
    _ = n(582113);
function m(e) {
    let { displayProfile: t, location: n } = e,
        u = (0, p.cZ)({ location: n }),
        m = (0, i.Wu)([c.Z], () => {
            var e;
            return (null == t ? void 0 : t.userId) == null ? [] : null != (e = c.Z.getMutualGuilds(t.userId)) ? e : [];
        }),
        h = (0, i.Wu)([d.Z], () => ((null == t ? void 0 : t.userId) == null ? [] : d.Z.getActivities(t.userId))),
        g = (0, i.e7)([a.Z], () => ((null == t ? void 0 : t.userId) != null ? a.Z.getUserOutbox(t.userId) : null)),
        E = r.useMemo(() => null != m && m.some((e) => e.guild.id === _.ON), [m]),
        b = r.useMemo(() => {
            if ((null == t ? void 0 : t.widgets) == null) return !1;
            let e = new Set(
                null == t
                    ? void 0
                    : t.widgets
                          .map((e) =>
                              e instanceof l.zy
                                  ? e.games.map((e) => e.applicationId)
                                  : e instanceof s.q
                                    ? e.applicationId
                                    : void 0,
                          )
                          .filter(f.lm)
                          .flat(),
            );
            for (let t of _.RI) if (e.has(t)) return !0;
            return !1;
        }, [null == t ? void 0 : t.widgets]),
        y = r.useMemo(() => null != h && h.some((e) => null != e.application_id && _.RI.has(e.application_id)), [h]),
        O = r.useMemo(() => {
            var e;
            return (
                null !=
                    (e =
                        null == g
                            ? void 0
                            : g.entries.some((e) => null != e && (0, o.dX)(e) && _.RI.has(e.extra.application_id))) && e
            );
        }, [g]);
    return {
        isDisplayProfileSocialLayerStorefrontEligible:
            (null == t ? void 0 : t.application) == null && u && (E || b || y || O),
        hasMarketingApplicationInWidgets: b,
    };
}
function h(e) {
    let { userId: t, location: n } = e;
    return m({
        displayProfile: (0, u.ZP)(t),
        location: n,
    });
}
