t.d(n, { Ay: () => O, JC: () => E, rC: () => m });
var l = t(582128),
    a = t(991690),
    u = t(554146),
    e = t(452295),
    c = t(735991),
    d = t(627363),
    o = t(20015),
    _ = t(826673),
    r = t(438652),
    p = t(174459),
    s = t(881698),
    A = t(652215),
    C = t(49999);
let f = new Set();
function h(i) {
    return (0, o.n)(i, A.gfo.CLOUD_GAMING_DEMO) && i.supportsEmbeddedSurface(a.U.MAIN);
}
function b() {
    ((0, _.Dr)(u.M.CLOUD_PLAY_NEW_BADGE, { dismissAction: C.i.TAKE_ACTION }),
        (0, _.Dr)(u.M.CLOUD_PLAY_POPOVER, { dismissAction: C.i.TAKE_ACTION }));
}
function D(i) {
    let { countryCode: n, activity: t } = i;
    return (
        null == n ||
        (!t.blocked_locales.includes(n) && (!(t.supported_locales.length > 0) || !!t.supported_locales.includes(n)))
    );
}
function L(i, n) {
    return (
        i?.bot != null &&
        !!(0, c.Z$)(i) &&
        (null == i.embeddedActivityConfig || D({ countryCode: n, activity: i.embeddedActivityConfig }))
    );
}
function k(i) {
    let { data: n, refetch: t } = (0, d.YY)(i);
    return (
        l.useEffect(() => {
            null == i || null == n || null != n.bot || f.has(i) || (t(), f.add(i));
        }, [i, n, t]),
        n
    );
}
function I(i) {
    return k((0, s.A)(i?.linkedGames)?.id);
}
function E(i) {
    let { data: n } = (0, r.Q)(),
        t = I(i);
    return (
        null != i &&
        (i?.embeddedActivityConfig == null || !!D({ countryCode: n?.alpha2, activity: i.embeddedActivityConfig })) &&
        (!!h(i) || L(t, n?.alpha2))
    );
}
function O(i) {
    let { application: n, analyticsLocations: t } = i,
        a = E(n),
        { bot: u } = n ?? { bot: null },
        c = I(n),
        { bot: d } = c ?? { bot: null },
        o = c?.id,
        _ = d?.id;
    return l.useMemo(
        () =>
            a && null != n
                ? h(n) && null != u
                    ? () => {
                          (b(),
                              p.default.track(A.HAw.CLOUD_PLAY_CTA_CLICKED, {
                                  source_application_id: n.id,
                                  launching_application_id: n.id,
                                  location_stack: t,
                              }),
                              e.A.launch({ applicationId: n.id, analyticsLocations: t }));
                      }
                    : null != o && null != _
                      ? () => {
                            (b(),
                                p.default.track(A.HAw.CLOUD_PLAY_CTA_CLICKED, {
                                    source_application_id: n.id,
                                    launching_application_id: o,
                                    location_stack: t,
                                }),
                                e.A.launch({ applicationId: o, analyticsLocations: t }));
                        }
                      : void 0
                : null,
        [a, n, u, o, _, t],
    );
}
function m(i) {
    let { applicationId: n, sourceApplicationId: t, analyticsLocations: a } = i,
        { data: u } = (0, r.Q)(),
        c = k(n);
    return l.useMemo(
        () =>
            c?.bot != null && L(c, u?.alpha2)
                ? () => {
                      (b(),
                          p.default.track(A.HAw.CLOUD_PLAY_CTA_CLICKED, {
                              source_application_id: t ?? c.id,
                              launching_application_id: c.id,
                              location_stack: a,
                          }),
                          e.A.launch({ applicationId: c.id, analyticsLocations: a }));
                  }
                : null,
        [c, u, t, a],
    );
}
