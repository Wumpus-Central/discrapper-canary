var l = n(582128),
    c = n(991690),
    a = n(554146),
    e = n(273626),
    d = n(735991),
    u = n(627363),
    o = n(20015),
    r = n(826673),
    s = n(438652),
    _ = n(129230),
    p = n(881698),
    A = n(652215),
    C = n(49999);
let f = new Set();
function h(i) {
    return (0, o.n)(i, A.gfo.CLOUD_GAMING_DEMO) && i.supportsEmbeddedSurface(c.U.MAIN);
}
function b() {
    ((0, r.Dr)(a.M.CLOUD_PLAY_NEW_BADGE, { dismissAction: C.i.TAKE_ACTION }),
        (0, r.Dr)(a.M.CLOUD_PLAY_POPOVER, { dismissAction: C.i.TAKE_ACTION }));
}
function g(i) {
    let { countryCode: t, activity: n } = i;
    return (
        null == t ||
        (!n.blocked_locales.includes(t) && (!(n.supported_locales.length > 0) || !!n.supported_locales.includes(t)))
    );
}
function m(i, t) {
    return (
        i?.bot != null &&
        !!(0, d.Z$)(i) &&
        (null == i.embeddedActivityConfig || g({ countryCode: t, activity: i.embeddedActivityConfig }))
    );
}
function D(i) {
    let { data: t, refetch: n } = (0, u.YY)(i);
    return (
        l.useEffect(() => {
            null == i || null == t || null != t.bot || f.has(i) || (n(), f.add(i));
        }, [i, t, n]),
        t
    );
}
function I(i) {
    return D((0, p.A)(i?.linkedGames)?.id);
}
function L(i) {
    let { data: t } = (0, s.Q)(),
        n = I(i);
    return (
        null != i &&
        (i?.embeddedActivityConfig == null || !!g({ countryCode: t?.alpha2, activity: i.embeddedActivityConfig })) &&
        (!!h(i) || m(n, t?.alpha2))
    );
}
n.d(
    t,
    {},
    {
        Ay: function (i) {
            let { application: t, analyticsLocations: n } = i,
                c = L(t),
                { bot: a } = t ?? { bot: null },
                d = I(t),
                { bot: u } = d ?? { bot: null },
                o = d?.id,
                r = u?.id;
            return l.useMemo(
                () =>
                    c && null != t
                        ? h(t) && null != a
                            ? () => {
                                  (b(),
                                      _.default.track(A.HAw.CLOUD_PLAY_CTA_CLICKED, {
                                          source_application_id: t.id,
                                          launching_application_id: t.id,
                                          location_stack: n,
                                      }),
                                      e.A.launch({ applicationId: t.id, analyticsLocations: n }));
                              }
                            : null != o && null != r
                              ? () => {
                                    (b(),
                                        _.default.track(A.HAw.CLOUD_PLAY_CTA_CLICKED, {
                                            source_application_id: t.id,
                                            launching_application_id: o,
                                            location_stack: n,
                                        }),
                                        e.A.launch({ applicationId: o, analyticsLocations: n }));
                                }
                              : void 0
                        : null,
                [c, t, a, o, r, n],
            );
        },
        JC: L,
        rC: function (i) {
            let { applicationId: t, sourceApplicationId: n, analyticsLocations: c } = i,
                { data: a } = (0, s.Q)(),
                d = D(t);
            return l.useMemo(
                () =>
                    d?.bot != null && m(d, a?.alpha2)
                        ? () => {
                              (b(),
                                  _.default.track(A.HAw.CLOUD_PLAY_CTA_CLICKED, {
                                      source_application_id: n ?? d.id,
                                      launching_application_id: d.id,
                                      location_stack: c,
                                  }),
                                  e.A.launch({ applicationId: d.id, analyticsLocations: c }));
                          }
                        : null,
                [d, a, n, c],
            );
        },
    },
);
