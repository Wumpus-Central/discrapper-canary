"use strict";
n.d(t, { A: () => N, J: () => S });
var i = n(64700),
    r = n(554146),
    s = n(522305),
    a = n(735991),
    o = n(627363),
    l = n(20015),
    d = n(826673),
    _ = n(17928),
    u = n(830215),
    c = n(121780),
    E = n(652215);
let h = (0, _.UT)(c.A, {
    getQueryId: E.fic.USER_COUNTRY_CODE,
    get: () => c.A.getCountryCode(),
    load: async () => {
        await u.A.getLocationMetadata();
    },
});
var m = n(954571),
    f = n(155718),
    g = n(49999);
let p = new Set();
function A(e) {
    return (0, l.n)(e, E.gfo.CLOUD_GAMING_DEMO) && (0, l.n)(e, E.gfo.EMBEDDED);
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
                          n = t.find((e) => e.type === f.Mh.NVIDIA);
                      return null != n ? n : e.thirdPartySkus.find((e) => e.distributor === E.d3x.NVIDIA_GDN_APP);
                  })(e)
                : null,
        n = t?.id,
        { data: r, refetch: s } = (0, o.YY)(n);
    return (
        i.useEffect(() => {
            null == n || null == r || null != r.bot || p.has(n) || (s(), p.add(n));
        }, [n, r, s]),
        r
    );
}
function S(e) {
    let { data: t } = h(),
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
function N(e) {
    let { application: t, analyticsLocations: n } = e,
        a = S(t),
        { bot: o } = t ?? { bot: null },
        l = T(t),
        { bot: _ } = l ?? { bot: null },
        u = l?.id,
        c = _?.id;
    return i.useMemo(() => {
        if (!a || null == t) return null;
        let e = () => {
            (0, d.Dr)(r.M.CLOUD_PLAY_NEW_BADGE, { dismissAction: g.i.TAKE_ACTION }),
                (0, d.Dr)(r.M.CLOUD_PLAY_POPOVER, { dismissAction: g.i.TAKE_ACTION });
        };
        return A(t) && null != o
            ? () => {
                  e(),
                      m.default.track(E.HAw.CLOUD_PLAY_CTA_CLICKED, {
                          source_application_id: t.id,
                          launching_application_id: t.id,
                          location_stack: n,
                      }),
                      (0, s.Q)({ appId: t.id, botId: o.id, analyticsLocations: n ?? [] });
              }
            : null != u && null != c
              ? () => {
                    e(),
                        m.default.track(E.HAw.CLOUD_PLAY_CTA_CLICKED, {
                            source_application_id: t.id,
                            launching_application_id: u,
                            location_stack: n,
                        }),
                        (0, s.Q)({ appId: u, botId: c, analyticsLocations: n ?? [] });
                }
              : void 0;
    }, [a, t, o, u, c, n]);
}
