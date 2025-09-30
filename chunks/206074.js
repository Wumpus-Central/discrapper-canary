n.d(t, {
    Z: () => b,
    q: () => E,
}),
    n(997841);
var r = n(647438),
    i = n(704215),
    a = n(915346),
    o = n(783097),
    s = n(728345),
    l = n(266454),
    c = n(165062),
    u = n(626135),
    d = n(630388),
    f = n(133340),
    _ = n(131734),
    p = n(981631),
    h = n(921944);
function m(e) {
    return (0, d.yE)(e.flags, p.udG.CLOUD_GAMING_DEMO) && (0, d.yE)(e.flags, p.udG.EMBEDDED);
}
function g(e) {
    let { countryCode: t, activity: n } = e;
    return (
        null == t ||
        (!n.blocked_locales.includes(t) && (!(n.supported_locales.length > 0) || !!n.supported_locales.includes(t)))
    );
}
function E(e, t) {
    let { enabled: n } = f.tL.useExperiment({ location: t }, { autoTrackExposure: !1 }),
        { data: r } = (0, c.f)(),
        i = null != e ? (0, _.Z)(e) : null,
        a = null == i ? void 0 : i.id,
        { data: l } = (0, s.IX)(a),
        { bot: u } = null != l ? l : { bot: null },
        d = (0, f.b0)(null == e ? void 0 : e.id);
    return (
        null != e &&
        (!!n || !!d) &&
        ((null == e ? void 0 : e.embeddedActivityConfig) == null ||
            !!g({
                countryCode: null == r ? void 0 : r.alpha2,
                activity: e.embeddedActivityConfig,
            })) &&
        (!!m(e) ||
            (null != a &&
                null != u &&
                null != l &&
                !!(0, o.ye)(l) &&
                ((null == l ? void 0 : l.embeddedActivityConfig) == null ||
                    !!g({
                        countryCode: null == r ? void 0 : r.alpha2,
                        activity: l.embeddedActivityConfig,
                    }))))
    );
}
function b(e) {
    let { application: t, analyticsLocations: n } = e,
        o = E(t, n.length > 0 ? n[n.length - 1] : ""),
        { bot: c } = null != t ? t : { bot: null },
        d = (0, _.Z)(t),
        f = null == d ? void 0 : d.id,
        { data: g } = (0, s.IX)(f),
        { bot: b } = null != g ? g : { bot: null };
    return r.useMemo(() => {
        if (!o || null == t) return null;
        let e = () => {
            (0, l.Q3)(i.z.CLOUD_PLAY_NEW_BADGE, { dismissAction: h.L.TAKE_ACTION }),
                (0, l.Q3)(i.z.CLOUD_PLAY_POPOVER, { dismissAction: h.L.TAKE_ACTION });
        };
        return m(t) && null != c
            ? () => {
                  e(),
                      u.default.track(p.rMx.CLOUD_PLAY_CTA_CLICKED, {
                          source_application_id: t.id,
                          launching_application_id: t.id,
                          location_stack: n,
                      }),
                      (0, a.W)({
                          appId: t.id,
                          botId: c.id,
                          analyticsLocations: null != n ? n : [],
                      });
              }
            : null != f && null != b
              ? () => {
                    e(),
                        u.default.track(p.rMx.CLOUD_PLAY_CTA_CLICKED, {
                            source_application_id: t.id,
                            launching_application_id: f,
                            location_stack: n,
                        }),
                        (0, a.W)({
                            appId: f,
                            botId: b.id,
                            analyticsLocations: null != n ? n : [],
                        });
                }
              : void 0;
    }, [o, t, c, f, b, n]);
}
