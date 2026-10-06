n.d(i, { Ay: () => E, JC: () => y, rC: () => O });
var l = n(582128),
    a = n(991690),
    d = n(554146),
    e = n(522305),
    o = n(735991),
    u = n(627363),
    c = n(20015),
    r = n(826673),
    s = n(438652),
    _ = n(174459),
    p = n(881698),
    A = n(652215),
    C = n(49999);
let f = new Set();
function b(t) {
    return (0, c.n)(t, A.gfo.CLOUD_GAMING_DEMO) && t.supportsEmbeddedSurface(a.U.MAIN);
}
function L() {
    ((0, r.Dr)(d.M.CLOUD_PLAY_NEW_BADGE, { dismissAction: C.i.TAKE_ACTION }),
        (0, r.Dr)(d.M.CLOUD_PLAY_POPOVER, { dismissAction: C.i.TAKE_ACTION }));
}
function I(t) {
    let { countryCode: i, activity: n } = t;
    return (
        null == i ||
        (!n.blocked_locales.includes(i) && (!(n.supported_locales.length > 0) || !!n.supported_locales.includes(i)))
    );
}
function h(t, i) {
    return (
        t?.bot != null &&
        !!(0, o.Z$)(t) &&
        (null == t.embeddedActivityConfig || I({ countryCode: i, activity: t.embeddedActivityConfig }))
    );
}
function D(t) {
    let { data: i, refetch: n } = (0, u.YY)(t);
    return (
        l.useEffect(() => {
            null == t || null == i || null != i.bot || f.has(t) || (n(), f.add(t));
        }, [t, i, n]),
        i
    );
}
function k(t) {
    return D((0, p.A)(t?.linkedGames)?.id);
}
function y(t) {
    let { data: i } = (0, s.Q)(),
        n = k(t);
    return (
        null != t &&
        (t?.embeddedActivityConfig == null || !!I({ countryCode: i?.alpha2, activity: t.embeddedActivityConfig })) &&
        (!!b(t) || h(n, i?.alpha2))
    );
}
function E(t) {
    let { application: i, analyticsLocations: n } = t,
        a = y(i),
        { bot: d } = i ?? { bot: null },
        o = k(i),
        { bot: u } = o ?? { bot: null },
        c = o?.id,
        r = u?.id;
    return l.useMemo(
        () =>
            a && null != i
                ? b(i) && null != d
                    ? () => {
                          (L(),
                              _.default.track(A.HAw.CLOUD_PLAY_CTA_CLICKED, {
                                  source_application_id: i.id,
                                  launching_application_id: i.id,
                                  location_stack: n,
                              }),
                              (0, e.Q)({ appId: i.id, botId: d.id, analyticsLocations: n ?? [] }));
                      }
                    : null != c && null != r
                      ? () => {
                            (L(),
                                _.default.track(A.HAw.CLOUD_PLAY_CTA_CLICKED, {
                                    source_application_id: i.id,
                                    launching_application_id: c,
                                    location_stack: n,
                                }),
                                (0, e.Q)({ appId: c, botId: r, analyticsLocations: n ?? [] }));
                        }
                      : void 0
                : null,
        [a, i, d, c, r, n],
    );
}
function O(t) {
    let { applicationId: i, sourceApplicationId: n, analyticsLocations: a } = t,
        { data: d } = (0, s.Q)(),
        o = D(i);
    return l.useMemo(() => {
        if (o?.bot == null || !h(o, d?.alpha2)) return null;
        let t = o.bot;
        return () => {
            (L(),
                _.default.track(A.HAw.CLOUD_PLAY_CTA_CLICKED, {
                    source_application_id: n ?? o.id,
                    launching_application_id: o.id,
                    location_stack: a,
                }),
                (0, e.Q)({ appId: o.id, botId: t.id, analyticsLocations: a ?? [] }));
        };
    }, [o, d, n, a]);
}
