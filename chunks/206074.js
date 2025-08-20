n.d(t, {
    Z: () => g,
    q: () => m,
}),
    n(997841);
var r = n(647438),
    i = n(704215),
    a = n(915346),
    o = n(783097),
    s = n(728345),
    l = n(266454),
    c = n(626135),
    u = n(630388),
    d = n(133340),
    f = n(131734),
    _ = n(981631),
    p = n(921944);
function h(e) {
    return (0, u.yE)(e.flags, _.udG.CLOUD_GAMING_DEMO) && (0, u.yE)(e.flags, _.udG.EMBEDDED);
}
function m(e, t) {
    let { enabled: n } = d.t.useExperiment({ location: t }, { autoTrackExposure: !1 }),
        r = null != e ? (0, f.Z)(e) : null,
        i = null == r ? void 0 : r.id,
        { data: a } = (0, s.IX)(i),
        { bot: l } = null != a ? a : { bot: null };
    return !!n && null != e && (!!h(e) || (null != i && null != l && null != a && !!(0, o.ye)(a)));
}
function g(e) {
    let { application: t, location: n, analyticsLocations: o } = e,
        u = m(t, n),
        { bot: d } = null != t ? t : { bot: null },
        g = (0, f.Z)(t),
        E = null == g ? void 0 : g.id,
        { data: b } = (0, s.IX)(E),
        { bot: y } = null != b ? b : { bot: null };
    return r.useMemo(() => {
        if (!u || null == t) return null;
        let e = () => {
            (0, l.Q3)(i.z.CLOUD_PLAY_NEW_BADGE, { dismissAction: p.L.TAKE_ACTION });
        };
        return h(t) && null != d
            ? () => {
                  e(),
                      c.default.track(_.rMx.CLOUD_PLAY_CTA_CLICKED, {
                          source_application_id: t.id,
                          launching_application_id: t.id,
                          location_stack: null != o ? o : [],
                      }),
                      (0, a.W)({
                          appId: t.id,
                          botId: d.id,
                          analyticsLocations: null != o ? o : [],
                      });
              }
            : null != E && null != y
              ? () => {
                    e(),
                        c.default.track(_.rMx.CLOUD_PLAY_CTA_CLICKED, {
                            source_application_id: t.id,
                            launching_application_id: E,
                            location_stack: null != o ? o : [],
                        }),
                        (0, a.W)({
                            appId: E,
                            botId: y.id,
                            analyticsLocations: null != o ? o : [],
                        });
                }
              : void 0;
    }, [u, t, d, E, y, o]);
}
