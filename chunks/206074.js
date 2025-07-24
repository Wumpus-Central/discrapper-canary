(n.d(t, {
    Z: () => f,
    q: () => _
}),
    n(997841));
var r = n(73800),
    i = n(915346),
    a = n(783097),
    o = n(728345),
    s = n(630388),
    l = n(133340),
    c = n(131734),
    u = n(981631);
function d(e) {
    return (0, s.yE)(e.flags, u.udG.CLOUD_GAMING_DEMO) && (0, s.yE)(e.flags, u.udG.EMBEDDED);
}
function _(e, t) {
    let { enabled: n } = l.t.useExperiment({ location: t }, { autoTrackExposure: !1 }),
        r = null != e ? (0, c.Z)(e) : null,
        i = null == r ? void 0 : r.id,
        { data: s } = (0, o.IX)(i),
        { bot: u } = null != s ? s : { bot: null };
    return !!n && null != e && (!!d(e) || (null != i && null != u && null != s && !!(0, a.ye)(s)));
}
function f(e) {
    let { application: t, location: n, analyticsLocations: a } = e,
        s = _(t, n),
        { bot: l } = null != t ? t : { bot: null },
        u = (0, c.Z)(t),
        f = null == u ? void 0 : u.id,
        { data: p } = (0, o.IX)(f),
        { bot: h } = null != p ? p : { bot: null };
    return r.useMemo(
        () =>
            s
                ? d(t) && null != l
                    ? () => {
                          (0, i.W)({
                              appId: t.id,
                              botId: l.id,
                              analyticsLocations: null != a ? a : []
                          });
                      }
                    : null != f && null != h
                      ? () => {
                            (0, i.W)({
                                appId: f,
                                botId: h.id,
                                analyticsLocations: null != a ? a : []
                            });
                        }
                      : void 0
                : null,
        [a, l, s, t, h, f]
    );
}
