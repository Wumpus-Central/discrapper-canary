n.d(t, {
    Z: () => y,
    q: () => b,
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
    f = n(131734),
    _ = n(981631),
    p = n(921944);
let h = new Set();
function m(e) {
    return (0, d.yE)(e.flags, _.udG.CLOUD_GAMING_DEMO) && (0, d.yE)(e.flags, _.udG.EMBEDDED);
}
function g(e) {
    let { countryCode: t, activity: n } = e;
    return (
        null == t ||
        (!n.blocked_locales.includes(t) && (!(n.supported_locales.length > 0) || !!n.supported_locales.includes(t)))
    );
}
function E(e) {
    let t = null != e ? (0, f.Z)(e) : null,
        n = null == t ? void 0 : t.id,
        { data: i, refetch: a } = (0, s.IX)(n);
    return (
        r.useEffect(() => {
            null == n || null == i || null != i.bot || h.has(n) || (a(), h.add(n));
        }, [n, i, a]),
        i
    );
}
function b(e) {
    let { data: t } = (0, c.f)(),
        n = E(e),
        { bot: r } = null != n ? n : { bot: null };
    return (
        null != e &&
        ((null == e ? void 0 : e.embeddedActivityConfig) == null ||
            !!g({
                countryCode: null == t ? void 0 : t.alpha2,
                activity: e.embeddedActivityConfig,
            })) &&
        (!!m(e) ||
            (null != r &&
                null != n &&
                !!(0, o.ye)(n) &&
                ((null == n ? void 0 : n.embeddedActivityConfig) == null ||
                    !!g({
                        countryCode: null == t ? void 0 : t.alpha2,
                        activity: n.embeddedActivityConfig,
                    }))))
    );
}
function y(e) {
    let { application: t, analyticsLocations: n } = e,
        o = b(t),
        { bot: s } = null != t ? t : { bot: null },
        c = E(t),
        { bot: d } = null != c ? c : { bot: null };
    return r.useMemo(() => {
        if (!o || null == t) return null;
        let e = () => {
            (0, l.Q3)(i.z.CLOUD_PLAY_NEW_BADGE, { dismissAction: p.L.TAKE_ACTION }),
                (0, l.Q3)(i.z.CLOUD_PLAY_POPOVER, { dismissAction: p.L.TAKE_ACTION });
        };
        return m(t) && null != s
            ? () => {
                  e(),
                      u.default.track(_.rMx.CLOUD_PLAY_CTA_CLICKED, {
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
                        u.default.track(_.rMx.CLOUD_PLAY_CTA_CLICKED, {
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
