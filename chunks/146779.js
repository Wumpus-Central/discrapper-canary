"use strict";
n.d(t, { JC: () => _, Ay: () => N, rC: () => T });
var l = n(582128),
    i = n(554146),
    s = n(522305),
    r = n(735991),
    a = n(627363),
    o = n(20015),
    u = n(826673),
    c = n(17928),
    d = n(830215),
    h = n(121780),
    m = n(652215);
let f = (0, c.UT)(h.A, {
    getQueryId: m.fic.USER_COUNTRY_CODE,
    get: () => h.A.getCountryCode(),
    load: async () => {
        await d.A.getLocationMetadata();
    },
});
var p = n(174459),
    g = n(881698),
    x = n(49999);
let A = new Set();
function E(e) {
    return (0, o.n)(e, m.gfo.CLOUD_GAMING_DEMO) && (0, o.n)(e, m.gfo.EMBEDDED);
}
function C() {
    (0, u.Dr)(i.M.CLOUD_PLAY_NEW_BADGE, { dismissAction: x.i.TAKE_ACTION }),
        (0, u.Dr)(i.M.CLOUD_PLAY_POPOVER, { dismissAction: x.i.TAKE_ACTION });
}
function I(e) {
    let { countryCode: t, activity: n } = e;
    return (
        null == t ||
        (!n.blocked_locales.includes(t) && (!(n.supported_locales.length > 0) || !!n.supported_locales.includes(t)))
    );
}
function y(e, t) {
    return (
        e?.bot != null &&
        !!(0, r.Ag)(e) &&
        (null == e.embeddedActivityConfig || I({ countryCode: t, activity: e.embeddedActivityConfig }))
    );
}
function S(e) {
    let { data: t, refetch: n } = (0, a.YY)(e);
    return (
        l.useEffect(() => {
            null == e || null == t || null != t.bot || A.has(e) || (n(), A.add(e));
        }, [e, t, n]),
        t
    );
}
function v(e) {
    return S((0, g.A)(e?.linkedGames)?.id);
}
function _(e) {
    let { data: t } = f(),
        n = v(e);
    return (
        null != e &&
        (e?.embeddedActivityConfig == null || !!I({ countryCode: t?.alpha2, activity: e.embeddedActivityConfig })) &&
        (!!E(e) || y(n, t?.alpha2))
    );
}
function N(e) {
    let { application: t, analyticsLocations: n } = e,
        i = _(t),
        { bot: r } = t ?? { bot: null },
        a = v(t),
        { bot: o } = a ?? { bot: null },
        u = a?.id,
        c = o?.id;
    return l.useMemo(
        () =>
            i && null != t
                ? E(t) && null != r
                    ? () => {
                          C(),
                              p.default.track(m.HAw.CLOUD_PLAY_CTA_CLICKED, {
                                  source_application_id: t.id,
                                  launching_application_id: t.id,
                                  location_stack: n,
                              }),
                              (0, s.Q)({ appId: t.id, botId: r.id, analyticsLocations: n ?? [] });
                      }
                    : null != u && null != c
                      ? () => {
                            C(),
                                p.default.track(m.HAw.CLOUD_PLAY_CTA_CLICKED, {
                                    source_application_id: t.id,
                                    launching_application_id: u,
                                    location_stack: n,
                                }),
                                (0, s.Q)({ appId: u, botId: c, analyticsLocations: n ?? [] });
                        }
                      : void 0
                : null,
        [i, t, r, u, c, n],
    );
}
function T(e) {
    let { applicationId: t, sourceApplicationId: n, analyticsLocations: i } = e,
        { data: r } = f(),
        a = S(t);
    return l.useMemo(() => {
        if (a?.bot == null || !y(a, r?.alpha2)) return null;
        let e = a.bot;
        return () => {
            C(),
                p.default.track(m.HAw.CLOUD_PLAY_CTA_CLICKED, {
                    source_application_id: n ?? a.id,
                    launching_application_id: a.id,
                    location_stack: i,
                }),
                (0, s.Q)({ appId: a.id, botId: e.id, analyticsLocations: i ?? [] });
        };
    }, [a, r, n, i]);
}
