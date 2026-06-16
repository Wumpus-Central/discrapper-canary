"use strict";
n.d(t, { A: () => y, J: () => S });
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
function I(e) {
    let { countryCode: t, activity: n } = e;
    return (
        null == t ||
        (!n.blocked_locales.includes(t) && (!(n.supported_locales.length > 0) || !!n.supported_locales.includes(t)))
    );
}
function T(e) {
    let t =
            null != e
                ? (function (e) {
                      if (null == e) return null;
                      let { linkedGames: t = [] } = e,
                          n = t.find((e) => e.type === E.Mh.NVIDIA);
                      return null != n ? n : e.thirdPartySkus.find((e) => e.distributor === h.d3x.NVIDIA_GDN_APP);
                  })(e)
                : null,
        n = t?.id,
        { data: r, refetch: s } = (0, o.YY)(n);
    return (
        i.useEffect(() => {
            null == n || null == r || null != r.bot || g.has(n) || (s(), g.add(n));
        }, [n, r, s]),
        r
    );
}
function S(e) {
    let { data: t } = f(),
        n = T(e),
        { bot: i } = n ?? { bot: null };
    return (
        null != e &&
        (e?.embeddedActivityConfig == null || !!I({ countryCode: t?.alpha2, activity: e.embeddedActivityConfig })) &&
        (!!A(e) ||
            (null != i &&
                null != n &&
                !!(0, a.Ag)(n) &&
                (n?.embeddedActivityConfig == null ||
                    !!I({ countryCode: t?.alpha2, activity: n.embeddedActivityConfig }))))
    );
}
function y(e) {
    let { application: t, analyticsLocations: n } = e,
        a = S(t),
        { bot: o } = t ?? { bot: null },
        l = T(t),
        { bot: c } = l ?? { bot: null },
        d = l?.id,
        _ = c?.id;
    return i.useMemo(() => {
        if (!a || null == t) return null;
        let e = () => {
            (0, u.Dr)(r.M.CLOUD_PLAY_NEW_BADGE, { dismissAction: m.i.TAKE_ACTION }),
                (0, u.Dr)(r.M.CLOUD_PLAY_POPOVER, { dismissAction: m.i.TAKE_ACTION });
        };
        return A(t) && null != o
            ? () => {
                  e(),
                      p.default.track(h.HAw.CLOUD_PLAY_CTA_CLICKED, {
                          source_application_id: t.id,
                          launching_application_id: t.id,
                          location_stack: n,
                      }),
                      (0, s.Q)({ appId: t.id, botId: o.id, analyticsLocations: n ?? [] });
              }
            : null != d && null != _
              ? () => {
                    e(),
                        p.default.track(h.HAw.CLOUD_PLAY_CTA_CLICKED, {
                            source_application_id: t.id,
                            launching_application_id: d,
                            location_stack: n,
                        }),
                        (0, s.Q)({ appId: d, botId: _, analyticsLocations: n ?? [] });
                }
              : void 0;
    }, [a, t, o, d, _, n]);
}
