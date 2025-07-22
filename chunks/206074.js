n.d(t, { Z: () => c });
var r = n(73800),
    i = n(915346),
    a = n(783097),
    o = n(728345),
    s = n(133340),
    l = n(131734);
function c(e) {
    let { application: t, location: n, analyticsLocations: c } = e,
        { enabled: u } = s.t.useExperiment({ location: n }, { autoTrackExposure: !0 }),
        d = (0, l.Z)(t),
        _ = null == d ? void 0 : d.id,
        { data: f } = (0, o.IX)(_),
        { bot: p } = null != f ? f : { bot: null };
    return r.useMemo(
        () =>
            u && null != _ && null != p && null != f && (0, a.ye)(f)
                ? () => {
                      (0, i.W)({
                          appId: _,
                          botId: p.id,
                          analyticsLocations: null != c ? c : []
                      });
                  }
                : null,
        [c, u, f, p, _]
    );
}
