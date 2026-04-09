"use strict";
n.d(t, { A: () => C }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(485584),
    a = n(598748),
    o = n(311907),
    l = n(688810),
    u = n(549699),
    c = n(29496),
    d = n(369374),
    _ = n(850046),
    f = n(188951),
    p = n(429913),
    h = n(201718),
    m = n(773669),
    E = n(403362),
    g = n(183555),
    A = n(633075),
    I = n(289173),
    T = n(80330),
    S = n(139730),
    y = n(783256),
    v = n(518477),
    N = n(985018);
function C(e) {
    let { enabled: t } = d.A.useConfig({ location: "UserProfileStackedWidgetPreviews" });
    return t ? (0, r.jsx)(b, { ...e }) : (0, r.jsx)(O, { ...e });
}
function R(e) {
    let { onOpenUserProfileModal: t } = e,
        { analyticsLocations: n } = (0, l.Ay)(),
        { trackUserProfileAction: r } = (0, g.NJ)(),
        s = i.useCallback(() => {
            t?.({ tabSection: v.RP.WIDGETS });
        }, [t]),
        a = i.useCallback(() => {
            r({ action: "PRESS_SHOW_MORE_WIDGETS", analyticsLocations: n }), s();
        }, [r, n, s]);
    return { openModal: s, onExpand: a };
}
function O(e) {
    let { user: t, widgets: n = [], ...s } = e,
        { openModal: a, onExpand: o } = R({ user: t, widgets: n, ...s }),
        l = i.useMemo(() => n.filter((e) => e instanceof A.R), [n]),
        u = i.useMemo(() => l.map((e) => e.applicationId), [l]),
        c = (0, _.A)(t.id, u),
        d = i.useCallback(
            (e) => {
                let t = [],
                    i = !1;
                for (let s of n)
                    if (s instanceof A.R) {
                        let n = c[s.applicationId];
                        null != n &&
                            t.push(
                                (0, r.jsx)(
                                    S.A,
                                    { type: "v1", previewData: n, onClick: a, ...e },
                                    `application-widget-${s.applicationId}`,
                                ),
                            );
                    } else
                        s instanceof I.Yy &&
                            !i &&
                            (t.push((0, r.jsx)(y.A, { widgets: n, onClick: a, ...e }, "collection-breadcrumb")),
                            (i = !0));
                return t;
            },
            [c, a, n],
        );
    return 0 === n.length ? null : (0, r.jsx)(T.A, { renderCards: d, heading: N.intl.string(N.t.Y55Tua), onExpand: o });
}
function b(e) {
    let { user: t, widgets: n = [], ...l } = e,
        { openModal: d, onExpand: _ } = R({ user: t, widgets: n, ...l }),
        g = i.useMemo(() => n.filter((e) => e instanceof A.R), [n]),
        v = i.useMemo(() => g.map((e) => e.applicationId), [g]),
        C = (0, p.A)(v),
        O = i.useMemo(() => new Map(C.filter(E.Vq).map((e) => [e.id, e])), [C]),
        b = (0, f.A)(v),
        D = i.useMemo(() => new Map(b.map((e) => [e.application_id, e])), [b]),
        { data: L } = (0, h.P)(t.id),
        w = i.useMemo(() => new Map(L?.map((e) => [e.application_id, e])), [L]),
        M = (0, o.bG)([m.default], () => m.default.locale),
        x = (0, o.cf)([c.A], () => Object.fromEntries(g.map((e) => [e.applicationId, c.A.getAssets(e.applicationId)]))),
        P = i.useMemo(
            () =>
                0 === O.size || 0 === D.size || 0 === w.size
                    ? null
                    : new Map(
                          g
                              .map((e) => {
                                  let t = O.get(e.applicationId),
                                      n = D.get(e.applicationId),
                                      r = w.get(e.applicationId);
                                  if (null == t || null == n || null == r) return null;
                                  let i = n.surfaces;
                                  if (null == i || null == i[a.m.MINI_PROFILE]) return null;
                                  let o = (0, s.VG)(r.profile),
                                      l = Object.values(x[e.applicationId] ?? {}).filter(E.Vq);
                                  return [e, { surfaceConfigs: n.surfaces, data: o, application: t, assets: l }];
                              })
                              .filter(E.Vq),
                      ),
            [g, O, D, w, x],
        ),
        k = i.useCallback(
            (e) => {
                let t = [],
                    i = !1;
                for (let s of n)
                    if (s instanceof A.R) {
                        let n = P?.get(s);
                        if (null == n) continue;
                        t.push(
                            (0, r.jsx)(
                                S.A,
                                {
                                    type: "v2",
                                    application: n.application,
                                    rendererProps: {
                                        locale: M,
                                        surfaceConfigs: n.surfaceConfigs,
                                        isLoading: !1,
                                        hasIdentity: !0,
                                        resolutionContext: {
                                            data: n.data,
                                            applicationAssets: n.assets,
                                            getApplicationAssetUrl: (e) =>
                                                (0, u.Q)(s.applicationId, e, e.metadata.width),
                                            localizedStrings: [],
                                        },
                                    },
                                    onClick: d,
                                    ...e,
                                },
                                `application-widget-${s.applicationId}`,
                            ),
                        );
                    } else
                        s instanceof I.Yy &&
                            !i &&
                            (t.push((0, r.jsx)(y.A, { widgets: n, onClick: d, ...e }, "collection-breadcrumb")),
                            (i = !0));
                return t;
            },
            [n, d, P, M],
        );
    return 0 === n.length ? null : (0, r.jsx)(T.A, { renderCards: k, heading: N.intl.string(N.t.Y55Tua), onExpand: _ });
}
