a.d(i, { A: () => R }), a(321073);
var n = a(627968),
    t = a(64700),
    l = a(485584),
    s = a(598748),
    c = a(311907),
    r = a(688810),
    o = a(549699),
    d = a(29496),
    p = a(369374),
    u = a(850046),
    m = a(188951),
    h = a(429913),
    f = a(201718),
    x = a(773669),
    g = a(403362),
    I = a(183555),
    A = a(633075),
    j = a(289173),
    v = a(80330),
    E = a(139730),
    N = a(783256),
    C = a(518477),
    b = a(985018);
function R(e) {
    let { enabled: i } = p.A.useConfig({ location: "UserProfileStackedWidgetPreviews" });
    return i ? (0, n.jsx)(_, { ...e }) : (0, n.jsx)(P, { ...e });
}
function w(e) {
    let { onOpenUserProfileModal: i } = e,
        { analyticsLocations: a } = (0, r.Ay)(),
        { trackUserProfileAction: n } = (0, I.NJ)(),
        l = t.useCallback(() => {
            i?.({ tabSection: C.RP.WIDGETS });
        }, [i]),
        s = t.useCallback(() => {
            n({ action: "PRESS_SHOW_MORE_WIDGETS", analyticsLocations: a }), l();
        }, [n, a, l]);
    return { openModal: l, onExpand: s };
}
function P(e) {
    let { user: i, widgets: a = [], ...l } = e,
        { openModal: s, onExpand: c } = w({ user: i, widgets: a, ...l }),
        r = t.useMemo(() => a.filter((e) => e instanceof A.R), [a]),
        o = t.useMemo(() => r.map((e) => e.applicationId), [r]),
        d = (0, u.A)(i.id, o),
        p = t.useCallback(
            (e) => {
                let i = [],
                    t = !1;
                for (let l of a)
                    if (l instanceof A.R) {
                        let a = d[l.applicationId];
                        null != a &&
                            i.push(
                                (0, n.jsx)(
                                    E.A,
                                    { type: "v1", previewData: a, onClick: s, ...e },
                                    `application-widget-${l.applicationId}`,
                                ),
                            );
                    } else
                        l instanceof j.Yy &&
                            !t &&
                            (i.push((0, n.jsx)(N.A, { widgets: a, onClick: s, ...e }, "collection-breadcrumb")),
                            (t = !0));
                return i;
            },
            [d, s, a],
        );
    return 0 === a.length ? null : (0, n.jsx)(v.A, { renderCards: p, heading: b.intl.string(b.t.Y55Tua), onExpand: c });
}
function _(e) {
    let { user: i, widgets: a = [], ...r } = e,
        { openModal: p, onExpand: u } = w({ user: i, widgets: a, ...r }),
        I = t.useMemo(() => a.filter((e) => e instanceof A.R), [a]),
        C = t.useMemo(() => I.map((e) => e.applicationId), [I]),
        R = (0, h.A)(C),
        P = t.useMemo(() => new Map(R.filter(g.Vq).map((e) => [e.id, e])), [R]),
        _ = (0, m.A)(C),
        y = t.useMemo(() => new Map(_.map((e) => [e.application_id, e])), [_]),
        { data: S } = (0, f.P)(i.id),
        M = t.useMemo(() => new Map(S?.map((e) => [e.application_id, e])), [S]),
        k = (0, c.bG)([x.default], () => x.default.locale),
        O = (0, c.cf)([d.A], () => Object.fromEntries(I.map((e) => [e.applicationId, d.A.getAssets(e.applicationId)]))),
        G = t.useMemo(
            () =>
                0 === P.size || 0 === y.size || 0 === M.size
                    ? null
                    : new Map(
                          I.map((e) => {
                              let i = P.get(e.applicationId),
                                  a = y.get(e.applicationId),
                                  n = M.get(e.applicationId);
                              if (null == i || null == a || null == n) return null;
                              let t = a.surfaces;
                              if (null == t || null == t[s.m.MINI_PROFILE]) return null;
                              let c = (0, l.VG)(n.profile),
                                  r = Object.values(O[e.applicationId] ?? {}).filter(g.Vq);
                              return [e, { surfaceConfigs: a.surfaces, data: c, application: i, assets: r }];
                          }).filter(g.Vq),
                      ),
            [I, P, y, M, O],
        ),
        T = t.useCallback(
            (e) => {
                let i = [],
                    t = !1;
                for (let l of a)
                    if (l instanceof A.R) {
                        let a = G?.get(l);
                        if (null == a) continue;
                        i.push(
                            (0, n.jsx)(
                                E.A,
                                {
                                    type: "v2",
                                    application: a.application,
                                    rendererProps: {
                                        locale: k,
                                        surfaceConfigs: a.surfaceConfigs,
                                        isLoading: !1,
                                        hasIdentity: !0,
                                        resolutionContext: {
                                            data: a.data,
                                            applicationAssets: a.assets,
                                            getApplicationAssetUrl: (e) =>
                                                (0, o.Q)(l.applicationId, e, e.metadata.width),
                                            localizedStrings: [],
                                        },
                                    },
                                    onClick: p,
                                    ...e,
                                },
                                `application-widget-${l.applicationId}`,
                            ),
                        );
                    } else
                        l instanceof j.Yy &&
                            !t &&
                            (i.push((0, n.jsx)(N.A, { widgets: a, onClick: p, ...e }, "collection-breadcrumb")),
                            (t = !0));
                return i;
            },
            [a, p, G, k],
        );
    return 0 === a.length ? null : (0, n.jsx)(v.A, { renderCards: T, heading: b.intl.string(b.t.Y55Tua), onExpand: u });
}
