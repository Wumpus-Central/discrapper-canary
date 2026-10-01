n.d(i, { JC: () => O, Ay: () => k, rC: () => v });
var l = n(582128),
    a = n(554146),
    e = n(522305),
    o = n(735991),
    d = n(627363),
    u = n(20015),
    c = n(826673),
    r = n(17928),
    _ = n(830215),
    s = n(121780),
    p = n(652215);
let A = (0, r.UT)(s.A, {
    getQueryId: p.fic.USER_COUNTRY_CODE,
    get: () => s.A.getCountryCode(),
    load: async () => {
        await _.A.getLocationMetadata();
    },
});
var C = n(174459),
    f = n(881698),
    b = n(49999);
let D = new Set();
function L(t) {
    return (0, u.n)(t, p.gfo.CLOUD_GAMING_DEMO) && (0, u.n)(t, p.gfo.EMBEDDED);
}
function g() {
    ((0, c.Dr)(a.M.CLOUD_PLAY_NEW_BADGE, { dismissAction: b.i.TAKE_ACTION }),
        (0, c.Dr)(a.M.CLOUD_PLAY_POPOVER, { dismissAction: b.i.TAKE_ACTION }));
}
function y(t) {
    let { countryCode: i, activity: n } = t;
    return (
        null == i ||
        (!n.blocked_locales.includes(i) && (!(n.supported_locales.length > 0) || !!n.supported_locales.includes(i)))
    );
}
function E(t, i) {
    return (
        t?.bot != null &&
        !!(0, o.Ag)(t) &&
        (null == t.embeddedActivityConfig || y({ countryCode: i, activity: t.embeddedActivityConfig }))
    );
}
function I(t) {
    let { data: i, refetch: n } = (0, d.YY)(t);
    return (
        l.useEffect(() => {
            null == t || null == i || null != i.bot || D.has(t) || (n(), D.add(t));
        }, [t, i, n]),
        i
    );
}
function h(t) {
    return I((0, f.A)(t?.linkedGames)?.id);
}
function O(t) {
    let { data: i } = A(),
        n = h(t);
    return (
        null != t &&
        (t?.embeddedActivityConfig == null || !!y({ countryCode: i?.alpha2, activity: t.embeddedActivityConfig })) &&
        (!!L(t) || E(n, i?.alpha2))
    );
}
function k(t) {
    let { application: i, analyticsLocations: n } = t,
        a = O(i),
        { bot: o } = i ?? { bot: null },
        d = h(i),
        { bot: u } = d ?? { bot: null },
        c = d?.id,
        r = u?.id;
    return l.useMemo(
        () =>
            a && null != i
                ? L(i) && null != o
                    ? () => {
                          (g(),
                              C.default.track(p.HAw.CLOUD_PLAY_CTA_CLICKED, {
                                  source_application_id: i.id,
                                  launching_application_id: i.id,
                                  location_stack: n,
                              }),
                              (0, e.Q)({ appId: i.id, botId: o.id, analyticsLocations: n ?? [] }));
                      }
                    : null != c && null != r
                      ? () => {
                            (g(),
                                C.default.track(p.HAw.CLOUD_PLAY_CTA_CLICKED, {
                                    source_application_id: i.id,
                                    launching_application_id: c,
                                    location_stack: n,
                                }),
                                (0, e.Q)({ appId: c, botId: r, analyticsLocations: n ?? [] }));
                        }
                      : void 0
                : null,
        [a, i, o, c, r, n],
    );
}
function v(t) {
    let { applicationId: i, sourceApplicationId: n, analyticsLocations: a } = t,
        { data: o } = A(),
        d = I(i);
    return l.useMemo(() => {
        if (d?.bot == null || !E(d, o?.alpha2)) return null;
        let t = d.bot;
        return () => {
            (g(),
                C.default.track(p.HAw.CLOUD_PLAY_CTA_CLICKED, {
                    source_application_id: n ?? d.id,
                    launching_application_id: d.id,
                    location_stack: a,
                }),
                (0, e.Q)({ appId: d.id, botId: t.id, analyticsLocations: a ?? [] }));
        };
    }, [d, o, n, a]);
}
