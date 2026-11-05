var l = n(582128),
    c = n(991690),
    a = n(554146),
    e = n(273626),
    u = n(735991),
    d = n(627363),
    o = n(20015),
    r = n(826673),
    s = n(438652),
    _ = n(129230),
    p = n(881698),
    A = n(652215),
    C = n(49999);
let f = new Set();
function h(t) {
    return (0, o.n)(t, A.gfo.CLOUD_GAMING_DEMO) && t.supportsEmbeddedSurface(c.U.MAIN);
}
function b() {
    ((0, r.Dr)(a.M.CLOUD_PLAY_NEW_BADGE, { dismissAction: C.i.TAKE_ACTION }),
        (0, r.Dr)(a.M.CLOUD_PLAY_POPOVER, { dismissAction: C.i.TAKE_ACTION }));
}
function I(t) {
    let { countryCode: i, activity: n } = t;
    return (
        null == i ||
        (!n.blocked_locales.includes(i) && (!(n.supported_locales.length > 0) || !!n.supported_locales.includes(i)))
    );
}
function g(t, i) {
    return (
        t?.bot != null &&
        !!(0, u.Z$)(t) &&
        (null == t.embeddedActivityConfig || I({ countryCode: i, activity: t.embeddedActivityConfig }))
    );
}
function m(t) {
    let { data: i, refetch: n } = (0, d.YY)(t);
    return (
        l.useEffect(() => {
            null == t || null == i || null != i.bot || f.has(t) || (n(), f.add(t));
        }, [t, i, n]),
        i
    );
}
function D(t) {
    return m((0, p.A)(t?.linkedGames)?.id);
}
function L(t) {
    let { data: i } = (0, s.Q)(),
        n = D(t);
    return (
        null != t &&
        (t?.embeddedActivityConfig == null || !!I({ countryCode: i?.alpha2, activity: t.embeddedActivityConfig })) &&
        (!!h(t) || g(n, i?.alpha2))
    );
}
n.d(
    i,
    {},
    {
        Ay: function (t) {
            let { application: i, analyticsLocations: n } = t,
                c = L(i),
                { bot: a } = i ?? { bot: null },
                u = D(i),
                { bot: d } = u ?? { bot: null },
                o = u?.id,
                r = d?.id;
            return l.useMemo(
                () =>
                    c && null != i
                        ? h(i) && null != a
                            ? () => {
                                  (b(),
                                      _.default.track(A.HAw.CLOUD_PLAY_CTA_CLICKED, {
                                          source_application_id: i.id,
                                          launching_application_id: i.id,
                                          location_stack: n,
                                      }),
                                      e.A.launch({ applicationId: i.id, analyticsLocations: n }));
                              }
                            : null != o && null != r
                              ? () => {
                                    (b(),
                                        _.default.track(A.HAw.CLOUD_PLAY_CTA_CLICKED, {
                                            source_application_id: i.id,
                                            launching_application_id: o,
                                            location_stack: n,
                                        }),
                                        e.A.launch({ applicationId: o, analyticsLocations: n }));
                                }
                              : void 0
                        : null,
                [c, i, a, o, r, n],
            );
        },
        JC: L,
        rC: function (t) {
            let { applicationId: i, sourceApplicationId: n, analyticsLocations: c } = t,
                { data: a } = (0, s.Q)(),
                u = m(i);
            return l.useMemo(
                () =>
                    u?.bot != null && g(u, a?.alpha2)
                        ? () => {
                              (b(),
                                  _.default.track(A.HAw.CLOUD_PLAY_CTA_CLICKED, {
                                      source_application_id: n ?? u.id,
                                      launching_application_id: u.id,
                                      location_stack: c,
                                  }),
                                  e.A.launch({ applicationId: u.id, analyticsLocations: c }));
                          }
                        : null,
                [u, a, n, c],
            );
        },
    },
);
