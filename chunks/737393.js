"use strict";
n.d(t, { A: () => v, J: () => I });
var l = n(64700),
    i = n(554146),
    s = n(522305),
    a = n(735991),
    r = n(627363),
    o = n(20015),
    c = n(826673),
    u = n(17928),
    d = n(830215),
    h = n(121780),
    m = n(652215);
let p = (0, u.UT)(h.A, {
    getQueryId: m.fic.USER_COUNTRY_CODE,
    get: () => h.A.getCountryCode(),
    load: async () => {
        await d.A.getLocationMetadata();
    },
});
var f = n(954571),
    g = n(155718),
    _ = n(49999);
let x = new Set();
function C(e) {
    return (0, o.n)(e, m.gfo.CLOUD_GAMING_DEMO) && (0, o.n)(e, m.gfo.EMBEDDED);
}
function A(e) {
    let { countryCode: t, activity: n } = e;
    return (
        null == t ||
        (!n.blocked_locales.includes(t) && (!(n.supported_locales.length > 0) || !!n.supported_locales.includes(t)))
    );
}
function E(e) {
    let t =
            null != e
                ? (function (e) {
                      if (null == e) return null;
                      let { linkedGames: t = [] } = e,
                          n = t.find((e) => e.type === g.Mh.NVIDIA);
                      return null != n ? n : e.thirdPartySkus.find((e) => e.distributor === m.d3x.NVIDIA_GDN_APP);
                  })(e)
                : null,
        n = t?.id,
        { data: i, refetch: s } = (0, r.YY)(n);
    return (
        l.useEffect(() => {
            null == n || null == i || null != i.bot || x.has(n) || (s(), x.add(n));
        }, [n, i, s]),
        i
    );
}
function I(e) {
    let { data: t } = p(),
        n = E(e),
        { bot: l } = n ?? { bot: null };
    return (
        null != e &&
        (e?.embeddedActivityConfig == null || !!A({ countryCode: t?.alpha2, activity: e.embeddedActivityConfig })) &&
        (!!C(e) ||
            (null != l &&
                null != n &&
                !!(0, a.Ag)(n) &&
                (n?.embeddedActivityConfig == null ||
                    !!A({ countryCode: t?.alpha2, activity: n.embeddedActivityConfig }))))
    );
}
function v(e) {
    let { application: t, analyticsLocations: n } = e,
        a = I(t),
        { bot: r } = t ?? { bot: null },
        o = E(t),
        { bot: u } = o ?? { bot: null },
        d = o?.id,
        h = u?.id;
    return l.useMemo(() => {
        if (!a || null == t) return null;
        let e = () => {
            (0, c.Dr)(i.M.CLOUD_PLAY_NEW_BADGE, { dismissAction: _.i.TAKE_ACTION }),
                (0, c.Dr)(i.M.CLOUD_PLAY_POPOVER, { dismissAction: _.i.TAKE_ACTION });
        };
        return C(t) && null != r
            ? () => {
                  e(),
                      f.default.track(m.HAw.CLOUD_PLAY_CTA_CLICKED, {
                          source_application_id: t.id,
                          launching_application_id: t.id,
                          location_stack: n,
                      }),
                      (0, s.Q)({ appId: t.id, botId: r.id, analyticsLocations: n ?? [] });
              }
            : null != d && null != h
              ? () => {
                    e(),
                        f.default.track(m.HAw.CLOUD_PLAY_CTA_CLICKED, {
                            source_application_id: t.id,
                            launching_application_id: d,
                            location_stack: n,
                        }),
                        (0, s.Q)({ appId: d, botId: h, analyticsLocations: n ?? [] });
                }
              : void 0;
    }, [a, t, r, d, h, n]);
}
