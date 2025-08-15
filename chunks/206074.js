n.d(t, {
    Z: () => m,
    q: () => h,
}),
    n(997841);
var r = n(73800),
    i = n(704215),
    o = n(915346),
    a = n(783097),
    s = n(728345),
    l = n(266454),
    c = n(630388),
    u = n(133340),
    d = n(131734),
    f = n(981631),
    _ = n(921944);
function p(e) {
    return (0, c.yE)(e.flags, f.udG.CLOUD_GAMING_DEMO) && (0, c.yE)(e.flags, f.udG.EMBEDDED);
}
function h(e, t) {
    let { enabled: n } = u.t.useExperiment({ location: t }, { autoTrackExposure: !1 }),
        r = null != e ? (0, d.Z)(e) : null,
        i = null == r ? void 0 : r.id,
        { data: o } = (0, s.IX)(i),
        { bot: l } = null != o ? o : { bot: null };
    return !!n && null != e && (!!p(e) || (null != i && null != l && null != o && !!(0, a.ye)(o)));
}
function m(e) {
    let { application: t, location: n, analyticsLocations: a } = e,
        c = h(t, n),
        { bot: u } = null != t ? t : { bot: null },
        f = (0, d.Z)(t),
        m = null == f ? void 0 : f.id,
        { data: g } = (0, s.IX)(m),
        { bot: E } = null != g ? g : { bot: null };
    return r.useMemo(() => {
        if (!c || null == t) return null;
        let e = () => {
            (0, l.Q3)(i.z.CLOUD_PLAY_NEW_BADGE, { dismissAction: _.L.TAKE_ACTION });
        };
        return p(t) && null != u
            ? () => {
                  e(),
                      (0, o.W)({
                          appId: t.id,
                          botId: u.id,
                          analyticsLocations: null != a ? a : [],
                      });
              }
            : null != m && null != E
              ? () => {
                    e(),
                        (0, o.W)({
                            appId: m,
                            botId: E.id,
                            analyticsLocations: null != a ? a : [],
                        });
                }
              : void 0;
    }, [c, t, u, m, E, a]);
}
