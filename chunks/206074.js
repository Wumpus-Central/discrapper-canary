n.d(t, {
    Z: () => O,
    q: () => y,
}),
    n(388685),
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
let m = new Set();
function g(e) {
    return (0, d.yE)(e.flags, p.udG.CLOUD_GAMING_DEMO) && (0, d.yE)(e.flags, p.udG.EMBEDDED);
}
function E(e) {
    let { countryCode: t, activity: n } = e;
    return (
        null == t ||
        (!n.blocked_locales.includes(t) && (!(n.supported_locales.length > 0) || !!n.supported_locales.includes(t)))
    );
}
function b(e) {
    let t = null != e ? (0, _.Z)(e) : null,
        n = null == t ? void 0 : t.id,
        { data: i, refetch: a } = (0, s.IX)(n);
    return (
        r.useEffect(() => {
            null == n || null == i || null != i.bot || m.has(n) || (a(), m.add(n));
        }, [n, i, a]),
        i
    );
}
function y(e, t) {
    let { enabled: n } = f.tL.useExperiment({ location: t }, { autoTrackExposure: !1 }),
        { data: r } = (0, c.f)(),
        i = b(e),
        { bot: a } = null != i ? i : { bot: null },
        s = (0, f.b0)(null == e ? void 0 : e.id);
    return (
        null != e &&
        (!!n || !!s) &&
        ((null == e ? void 0 : e.embeddedActivityConfig) == null ||
            !!E({
                countryCode: null == r ? void 0 : r.alpha2,
                activity: e.embeddedActivityConfig,
            })) &&
        (!!g(e) ||
            (null != a &&
                null != i &&
                !!(0, o.ye)(i) &&
                ((null == i ? void 0 : i.embeddedActivityConfig) == null ||
                    !!E({
                        countryCode: null == r ? void 0 : r.alpha2,
                        activity: i.embeddedActivityConfig,
                    }))))
    );
}
function O(e) {
    let { application: t, analyticsLocations: n } = e,
        o = y(t, n.length > 0 ? n[n.length - 1] : ""),
        { bot: s } = null != t ? t : { bot: null },
        c = b(t),
        { bot: d } = null != c ? c : { bot: null };
    return r.useMemo(() => {
        if (!o || null == t) return null;
        let e = () => {
            (0, l.Q3)(i.z.CLOUD_PLAY_NEW_BADGE, { dismissAction: h.L.TAKE_ACTION }),
                (0, l.Q3)(i.z.CLOUD_PLAY_POPOVER, { dismissAction: h.L.TAKE_ACTION });
        };
        return g(t) && null != s
            ? () => {
                  e(),
                      u.default.track(p.rMx.CLOUD_PLAY_CTA_CLICKED, {
                          source_application_id: t.id,
                          launching_application_id: t.id,
                          location_stack: n,
                      }),
                      (0, a.W)({
                          appId: t.id,
                          botId: s.id,
                          analyticsLocations: null != n ? n : [],
                      });
              }
            : (null == c ? void 0 : c.id) != null && (null == d ? void 0 : d.id) != null
              ? () => {
                    e(),
                        u.default.track(p.rMx.CLOUD_PLAY_CTA_CLICKED, {
                            source_application_id: t.id,
                            launching_application_id: c.id,
                            location_stack: n,
                        }),
                        (0, a.W)({
                            appId: c.id,
                            botId: d.id,
                            analyticsLocations: null != n ? n : [],
                        });
                }
              : void 0;
    }, [o, t, s, null == c ? void 0 : c.id, null == d ? void 0 : d.id, n]);
}
