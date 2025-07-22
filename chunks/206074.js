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
        f = null == d ? void 0 : d.id,
        { data: _ } = (0, o.IX)(f),
        { bot: p } = null != _ ? _ : { bot: null };
    return r.useMemo(
        () =>
            u && null != f && null != p && null != _ && (0, a.ye)(_)
                ? () => {
                      (0, i.W)({
                          appId: f,
                          botId: p.id,
                          analyticsLocations: null != c ? c : []
                      });
                  }
                : null,
        [c, u, _, p, f]
    );
}
