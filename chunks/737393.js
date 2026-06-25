"use strict";
n.d(t, { JC: () => N, Ay: () => v, rC: () => R });
var i = n(64700),
    r = n(554146),
    s = n(522305),
    a = n(735991),
    o = n(627363),
    l = n(20015),
    u = n(826673),
    c = n(17928),
    d = n(830215),
    _ = n(121780),
    h = n(652215);
let f = (0, c.UT)(_.A, {
    getQueryId: h.fic.USER_COUNTRY_CODE,
    get: () => _.A.getCountryCode(),
    load: async () => {
        await d.A.getLocationMetadata();
    },
});
var p = n(174459),
    E = n(155718),
    m = n(49999);
let g = new Set();
function A(e) {
    return (0, l.n)(e, h.gfo.CLOUD_GAMING_DEMO) && (0, l.n)(e, h.gfo.EMBEDDED);
}
function I() {
    (0, u.Dr)(r.M.CLOUD_PLAY_NEW_BADGE, { dismissAction: m.i.TAKE_ACTION }),
        (0, u.Dr)(r.M.CLOUD_PLAY_POPOVER, { dismissAction: m.i.TAKE_ACTION });
}
function T(e) {
    let { countryCode: t, activity: n } = e;
    return (
        null == t ||
        (!n.blocked_locales.includes(t) && (!(n.supported_locales.length > 0) || !!n.supported_locales.includes(t)))
    );
}
function S(e, t) {
    return (
        e?.bot != null &&
        !!(0, a.Ag)(e) &&
        (null == e.embeddedActivityConfig || T({ countryCode: t, activity: e.embeddedActivityConfig }))
    );
}
function y(e) {
    let { data: t, refetch: n } = (0, o.YY)(e);
    return (
        i.useEffect(() => {
            null == e || null == t || null != t.bot || g.has(e) || (n(), g.add(e));
        }, [e, t, n]),
        t
    );
}
function C(e) {
    let t =
        null != e
            ? (function (e) {
                  if (null == e) return null;
                  let { linkedGames: t = [] } = e,
                      n = t.find((e) => e.type === E.Mh.NVIDIA);
                  return null != n ? n : e.thirdPartySkus.find((e) => e.distributor === h.d3x.NVIDIA_GDN_APP);
              })(e)
            : null;
    return y(t?.id);
}
function N(e) {
    let { data: t } = f(),
        n = C(e);
    return (
        null != e &&
        (e?.embeddedActivityConfig == null || !!T({ countryCode: t?.alpha2, activity: e.embeddedActivityConfig })) &&
        (!!A(e) || S(n, t?.alpha2))
    );
}
function v(e) {
    let { application: t, analyticsLocations: n } = e,
        r = N(t),
        { bot: a } = t ?? { bot: null },
        o = C(t),
        { bot: l } = o ?? { bot: null },
        u = o?.id,
        c = l?.id;
    return i.useMemo(
        () =>
            r && null != t
                ? A(t) && null != a
                    ? () => {
                          I(),
                              p.default.track(h.HAw.CLOUD_PLAY_CTA_CLICKED, {
                                  source_application_id: t.id,
                                  launching_application_id: t.id,
                                  location_stack: n,
                              }),
                              (0, s.Q)({ appId: t.id, botId: a.id, analyticsLocations: n ?? [] });
                      }
                    : null != u && null != c
                      ? () => {
                            I(),
                                p.default.track(h.HAw.CLOUD_PLAY_CTA_CLICKED, {
                                    source_application_id: t.id,
                                    launching_application_id: u,
                                    location_stack: n,
                                }),
                                (0, s.Q)({ appId: u, botId: c, analyticsLocations: n ?? [] });
                        }
                      : void 0
                : null,
        [r, t, a, u, c, n],
    );
}
function R(e) {
    let { applicationId: t, sourceApplicationId: n, analyticsLocations: r } = e,
        { data: a } = f(),
        o = y(t);
    return i.useMemo(() => {
        if (o?.bot == null || !S(o, a?.alpha2)) return null;
        let e = o.bot;
        return () => {
            I(),
                p.default.track(h.HAw.CLOUD_PLAY_CTA_CLICKED, {
                    source_application_id: n ?? o.id,
                    launching_application_id: o.id,
                    location_stack: r,
                }),
                (0, s.Q)({ appId: o.id, botId: e.id, analyticsLocations: r ?? [] });
        };
    }, [o, a, n, r]);
}
