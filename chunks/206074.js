n.d(t, {
    Z: () => y,
    q: () => b,
}),
    n(388685),
    n(997841);
var r = n(473749),
    i = n(95015),
    a = n(704215),
    o = n(915346),
    s = n(783097),
    l = n(728345),
    c = n(266454),
    u = n(165062),
    d = n(626135),
    f = n(131734),
    p = n(981631),
    _ = n(921944);
let m = new Set();
function h(e) {
    return (0, i.yE)(e.flags, p.udG.CLOUD_GAMING_DEMO) && (0, i.yE)(e.flags, p.udG.EMBEDDED);
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
        { data: i, refetch: a } = (0, l.IX)(n);
    return (
        r.useEffect(() => {
            null == n || null == i || null != i.bot || m.has(n) || (a(), m.add(n));
        }, [n, i, a]),
        i
    );
}
function b(e) {
    let { data: t } = (0, u.f)(),
        n = E(e),
        { bot: r } = null != n ? n : { bot: null };
    return (
        null != e &&
        ((null == e ? void 0 : e.embeddedActivityConfig) == null ||
            !!g({
                countryCode: null == t ? void 0 : t.alpha2,
                activity: e.embeddedActivityConfig,
            })) &&
        (!!h(e) ||
            (null != r &&
                null != n &&
                !!(0, s.ye)(n) &&
                ((null == n ? void 0 : n.embeddedActivityConfig) == null ||
                    !!g({
                        countryCode: null == t ? void 0 : t.alpha2,
                        activity: n.embeddedActivityConfig,
                    }))))
    );
}
function y(e) {
    let { application: t, analyticsLocations: n } = e,
        i = b(t),
        { bot: s } = null != t ? t : { bot: null },
        l = E(t),
        { bot: u } = null != l ? l : { bot: null },
        f = null == l ? void 0 : l.id,
        m = null == u ? void 0 : u.id;
    return r.useMemo(() => {
        if (!i || null == t) return null;
        let e = () => {
            (0, c.Q3)(a.z.CLOUD_PLAY_NEW_BADGE, { dismissAction: _.L.TAKE_ACTION }),
                (0, c.Q3)(a.z.CLOUD_PLAY_POPOVER, { dismissAction: _.L.TAKE_ACTION });
        };
        return h(t) && null != s
            ? () => {
                  e(),
                      d.default.track(p.rMx.CLOUD_PLAY_CTA_CLICKED, {
                          source_application_id: t.id,
                          launching_application_id: t.id,
                          location_stack: n,
                      }),
                      (0, o.W)({
                          appId: t.id,
                          botId: s.id,
                          analyticsLocations: null != n ? n : [],
                      });
              }
            : null != f && null != m
              ? () => {
                    e(),
                        d.default.track(p.rMx.CLOUD_PLAY_CTA_CLICKED, {
                            source_application_id: t.id,
                            launching_application_id: f,
                            location_stack: n,
                        }),
                        (0, o.W)({
                            appId: f,
                            botId: m,
                            analyticsLocations: null != n ? n : [],
                        });
                }
              : void 0;
    }, [i, t, s, f, m, n]);
}
