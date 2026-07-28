"use strict";
n.d(t, { JC: () => O, Ay: () => R, rC: () => L });
var i = n(582128),
    r = n(554146),
    a = n(522305),
    s = n(735991),
    l = n(627363),
    o = n(20015),
    d = n(826673),
    c = n(17928),
    u = n(830215),
    _ = n(121780),
    E = n(652215);
let A = (0, c.UT)(_.A, {
    getQueryId: E.fic.USER_COUNTRY_CODE,
    get: () => _.A.getCountryCode(),
    load: async () => {
        await u.A.getLocationMetadata();
    },
});
var h = n(174459),
    I = n(155718),
    f = n(49999);
let p = new Set();
function T(e) {
    return (0, o.n)(e, E.gfo.CLOUD_GAMING_DEMO) && (0, o.n)(e, E.gfo.EMBEDDED);
}
function m() {
    (0, d.Dr)(r.M.CLOUD_PLAY_NEW_BADGE, { dismissAction: f.i.TAKE_ACTION }),
        (0, d.Dr)(r.M.CLOUD_PLAY_POPOVER, { dismissAction: f.i.TAKE_ACTION });
}
function g(e) {
    let { countryCode: t, activity: n } = e;
    return (
        null == t ||
        (!n.blocked_locales.includes(t) && (!(n.supported_locales.length > 0) || !!n.supported_locales.includes(t)))
    );
}
function S(e, t) {
    return (
        e?.bot != null &&
        !!(0, s.Ag)(e) &&
        (null == e.embeddedActivityConfig || g({ countryCode: t, activity: e.embeddedActivityConfig }))
    );
}
function N(e) {
    let { data: t, refetch: n } = (0, l.YY)(e);
    return (
        i.useEffect(() => {
            null == e || null == t || null != t.bot || p.has(e) || (n(), p.add(e));
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
                      n = t.find((e) => e.type === I.Mh.NVIDIA);
                  return null != n ? n : e.thirdPartySkus.find((e) => e.distributor === E.d3x.NVIDIA_GDN_APP);
              })(e)
            : null;
    return N(t?.id);
}
function O(e) {
    let { data: t } = A(),
        n = C(e);
    return (
        null != e &&
        (e?.embeddedActivityConfig == null || !!g({ countryCode: t?.alpha2, activity: e.embeddedActivityConfig })) &&
        (!!T(e) || S(n, t?.alpha2))
    );
}
function R(e) {
    let { application: t, analyticsLocations: n } = e,
        r = O(t),
        { bot: s } = t ?? { bot: null },
        l = C(t),
        { bot: o } = l ?? { bot: null },
        d = l?.id,
        c = o?.id;
    return i.useMemo(
        () =>
            r && null != t
                ? T(t) && null != s
                    ? () => {
                          m(),
                              h.default.track(E.HAw.CLOUD_PLAY_CTA_CLICKED, {
                                  source_application_id: t.id,
                                  launching_application_id: t.id,
                                  location_stack: n,
                              }),
                              (0, a.Q)({ appId: t.id, botId: s.id, analyticsLocations: n ?? [] });
                      }
                    : null != d && null != c
                      ? () => {
                            m(),
                                h.default.track(E.HAw.CLOUD_PLAY_CTA_CLICKED, {
                                    source_application_id: t.id,
                                    launching_application_id: d,
                                    location_stack: n,
                                }),
                                (0, a.Q)({ appId: d, botId: c, analyticsLocations: n ?? [] });
                        }
                      : void 0
                : null,
        [r, t, s, d, c, n],
    );
}
function L(e) {
    let { applicationId: t, sourceApplicationId: n, analyticsLocations: r } = e,
        { data: s } = A(),
        l = N(t);
    return i.useMemo(() => {
        if (l?.bot == null || !S(l, s?.alpha2)) return null;
        let e = l.bot;
        return () => {
            m(),
                h.default.track(E.HAw.CLOUD_PLAY_CTA_CLICKED, {
                    source_application_id: n ?? l.id,
                    launching_application_id: l.id,
                    location_stack: r,
                }),
                (0, a.Q)({ appId: l.id, botId: e.id, analyticsLocations: r ?? [] });
        };
    }, [l, s, n, r]);
}
