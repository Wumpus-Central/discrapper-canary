n.d(i, { JC: () => k, Ay: () => m, rC: () => v });
var l = n(582128),
    a = n(991690),
    e = n(554146),
    d = n(522305),
    o = n(735991),
    u = n(627363),
    c = n(20015),
    r = n(826673),
    s = n(17928),
    _ = n(830215),
    p = n(121780),
    A = n(652215);
let C = (0, s.UT)(p.A, {
    getQueryId: A.fic.USER_COUNTRY_CODE,
    get: () => p.A.getCountryCode(),
    load: async () => {
        await _.A.getLocationMetadata();
    },
});
var f = n(174459),
    b = n(881698),
    L = n(49999);
let I = new Set();
function y(t) {
    return (0, c.n)(t, A.gfo.CLOUD_GAMING_DEMO) && t.supportsEmbeddedSurface(a.U.MAIN);
}
function D() {
    ((0, r.Dr)(e.M.CLOUD_PLAY_NEW_BADGE, { dismissAction: L.i.TAKE_ACTION }),
        (0, r.Dr)(e.M.CLOUD_PLAY_POPOVER, { dismissAction: L.i.TAKE_ACTION }));
}
function h(t) {
    let { countryCode: i, activity: n } = t;
    return (
        null == i ||
        (!n.blocked_locales.includes(i) && (!(n.supported_locales.length > 0) || !!n.supported_locales.includes(i)))
    );
}
function g(t, i) {
    return (
        t?.bot != null &&
        !!(0, o.Z$)(t) &&
        (null == t.embeddedActivityConfig || h({ countryCode: i, activity: t.embeddedActivityConfig }))
    );
}
function E(t) {
    let { data: i, refetch: n } = (0, u.YY)(t);
    return (
        l.useEffect(() => {
            null == t || null == i || null != i.bot || I.has(t) || (n(), I.add(t));
        }, [t, i, n]),
        i
    );
}
function O(t) {
    return E((0, b.A)(t?.linkedGames)?.id);
}
function k(t) {
    let { data: i } = C(),
        n = O(t);
    return (
        null != t &&
        (t?.embeddedActivityConfig == null || !!h({ countryCode: i?.alpha2, activity: t.embeddedActivityConfig })) &&
        (!!y(t) || g(n, i?.alpha2))
    );
}
function m(t) {
    let { application: i, analyticsLocations: n } = t,
        a = k(i),
        { bot: e } = i ?? { bot: null },
        o = O(i),
        { bot: u } = o ?? { bot: null },
        c = o?.id,
        r = u?.id;
    return l.useMemo(
        () =>
            a && null != i
                ? y(i) && null != e
                    ? () => {
                          (D(),
                              f.default.track(A.HAw.CLOUD_PLAY_CTA_CLICKED, {
                                  source_application_id: i.id,
                                  launching_application_id: i.id,
                                  location_stack: n,
                              }),
                              (0, d.Q)({ appId: i.id, botId: e.id, analyticsLocations: n ?? [] }));
                      }
                    : null != c && null != r
                      ? () => {
                            (D(),
                                f.default.track(A.HAw.CLOUD_PLAY_CTA_CLICKED, {
                                    source_application_id: i.id,
                                    launching_application_id: c,
                                    location_stack: n,
                                }),
                                (0, d.Q)({ appId: c, botId: r, analyticsLocations: n ?? [] }));
                        }
                      : void 0
                : null,
        [a, i, e, c, r, n],
    );
}
function v(t) {
    let { applicationId: i, sourceApplicationId: n, analyticsLocations: a } = t,
        { data: e } = C(),
        o = E(i);
    return l.useMemo(() => {
        if (o?.bot == null || !g(o, e?.alpha2)) return null;
        let t = o.bot;
        return () => {
            (D(),
                f.default.track(A.HAw.CLOUD_PLAY_CTA_CLICKED, {
                    source_application_id: n ?? o.id,
                    launching_application_id: o.id,
                    location_stack: a,
                }),
                (0, d.Q)({ appId: o.id, botId: t.id, analyticsLocations: a ?? [] }));
        };
    }, [o, e, n, a]);
}
