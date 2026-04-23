"use strict";
n.d(t, { A: () => I, J: () => A });
var r = n(64700),
    i = n(554146),
    s = n(522305),
    a = n(735991),
    o = n(627363),
    l = n(20015),
    u = n(826673),
    c = n(438652),
    d = n(954571),
    _ = n(450995),
    f = n(652215),
    p = n(49999);
let h = new Set();
function E(e) {
    return (0, l.n)(e, f.gfo.CLOUD_GAMING_DEMO) && (0, l.n)(e, f.gfo.EMBEDDED);
}
function m(e) {
    let { countryCode: t, activity: n } = e;
    return (
        null == t ||
        (!n.blocked_locales.includes(t) && (!(n.supported_locales.length > 0) || !!n.supported_locales.includes(t)))
    );
}
function g(e) {
    let t = null != e ? (0, _.A)(e) : null,
        n = t?.id,
        { data: i, refetch: s } = (0, o.YY)(n);
    return (
        r.useEffect(() => {
            null == n || null == i || null != i.bot || h.has(n) || (s(), h.add(n));
        }, [n, i, s]),
        i
    );
}
function A(e) {
    let { data: t } = (0, c.Q)(),
        n = g(e),
        { bot: r } = n ?? { bot: null };
    return (
        null != e &&
        (e?.embeddedActivityConfig == null || !!m({ countryCode: t?.alpha2, activity: e.embeddedActivityConfig })) &&
        (!!E(e) ||
            (null != r &&
                null != n &&
                !!(0, a.Ag)(n) &&
                (n?.embeddedActivityConfig == null ||
                    !!m({ countryCode: t?.alpha2, activity: n.embeddedActivityConfig }))))
    );
}
function I(e) {
    let { application: t, analyticsLocations: n } = e,
        a = A(t),
        { bot: o } = t ?? { bot: null },
        l = g(t),
        { bot: c } = l ?? { bot: null },
        _ = l?.id,
        h = c?.id;
    return r.useMemo(() => {
        if (!a || null == t) return null;
        let e = () => {
            (0, u.Dr)(i.M.CLOUD_PLAY_NEW_BADGE, { dismissAction: p.i.TAKE_ACTION }),
                (0, u.Dr)(i.M.CLOUD_PLAY_POPOVER, { dismissAction: p.i.TAKE_ACTION });
        };
        return E(t) && null != o
            ? () => {
                  e(),
                      d.default.track(f.HAw.CLOUD_PLAY_CTA_CLICKED, {
                          source_application_id: t.id,
                          launching_application_id: t.id,
                          location_stack: n,
                      }),
                      (0, s.Q)({ appId: t.id, botId: o.id, analyticsLocations: n ?? [] });
              }
            : null != _ && null != h
              ? () => {
                    e(),
                        d.default.track(f.HAw.CLOUD_PLAY_CTA_CLICKED, {
                            source_application_id: t.id,
                            launching_application_id: _,
                            location_stack: n,
                        }),
                        (0, s.Q)({ appId: _, botId: h, analyticsLocations: n ?? [] });
                }
              : void 0;
    }, [a, t, o, _, h, n]);
}
