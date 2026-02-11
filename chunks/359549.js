"use strict";
n.d(t, { A: () => I, J: () => A });
var r = n(64700),
    i = n(554146),
    a = n(522305),
    s = n(735991),
    o = n(627363),
    l = n(20015),
    u = n(826673),
    c = n(438652),
    d = n(954571),
    _ = n(450995),
    f = n(652215),
    p = n(49999);
let h = new Set();
function m(e) {
    return (0, l.n)(e, f.gfo.CLOUD_GAMING_DEMO) && (0, l.n)(e, f.gfo.EMBEDDED);
}
function g(e) {
    let { countryCode: t, activity: n } = e;
    return (
        null == t ||
        (!n.blocked_locales.includes(t) && (!(n.supported_locales.length > 0) || !!n.supported_locales.includes(t)))
    );
}
function E(e) {
    let t = null != e ? (0, _.A)(e) : null,
        n = t?.id,
        { data: i, refetch: a } = (0, o.YY)(n);
    return (
        r.useEffect(() => {
            null == n || null == i || null != i.bot || h.has(n) || (a(), h.add(n));
        }, [n, i, a]),
        i
    );
}
function A(e) {
    let { data: t } = (0, c.Q)(),
        n = E(e),
        { bot: r } = n ?? { bot: null };
    return (
        null != e &&
        (e?.embeddedActivityConfig == null || !!g({ countryCode: t?.alpha2, activity: e.embeddedActivityConfig })) &&
        (!!m(e) ||
            (null != r &&
                null != n &&
                !!(0, s.Ag)(n) &&
                (n?.embeddedActivityConfig == null ||
                    !!g({ countryCode: t?.alpha2, activity: n.embeddedActivityConfig }))))
    );
}
function I(e) {
    let { application: t, analyticsLocations: n } = e,
        s = A(t),
        { bot: o } = t ?? { bot: null },
        l = E(t),
        { bot: c } = l ?? { bot: null },
        _ = l?.id,
        h = c?.id;
    return r.useMemo(() => {
        if (!s || null == t) return null;
        let e = () => {
            (0, u.Dr)(i.M.CLOUD_PLAY_NEW_BADGE, { dismissAction: p.i.TAKE_ACTION }),
                (0, u.Dr)(i.M.CLOUD_PLAY_POPOVER, { dismissAction: p.i.TAKE_ACTION });
        };
        return m(t) && null != o
            ? () => {
                  e(),
                      d.default.track(f.HAw.CLOUD_PLAY_CTA_CLICKED, {
                          source_application_id: t.id,
                          launching_application_id: t.id,
                          location_stack: n,
                      }),
                      (0, a.Q)({ appId: t.id, botId: o.id, analyticsLocations: n ?? [] });
              }
            : null != _ && null != h
              ? () => {
                    e(),
                        d.default.track(f.HAw.CLOUD_PLAY_CTA_CLICKED, {
                            source_application_id: t.id,
                            launching_application_id: _,
                            location_stack: n,
                        }),
                        (0, a.Q)({ appId: _, botId: h, analyticsLocations: n ?? [] });
                }
              : void 0;
    }, [s, t, o, _, h, n]);
}
