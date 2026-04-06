"use strict";
n.d(t, { A: () => v }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(485584),
    a = n(598748),
    o = n(311907),
    l = n(688810),
    u = n(369374),
    c = n(850046),
    d = n(188951),
    _ = n(429913),
    f = n(201718),
    p = n(773669),
    h = n(403362),
    m = n(183555),
    E = n(633075),
    g = n(289173),
    A = n(80330),
    I = n(139730),
    T = n(783256),
    S = n(518477),
    y = n(985018);
function v(e) {
    let { enabled: t } = u.A.useConfig({ location: "UserProfileStackedWidgetPreviews" });
    return t ? (0, r.jsx)(R, { ...e }) : (0, r.jsx)(C, { ...e });
}
function N(e) {
    let { onOpenUserProfileModal: t } = e,
        { analyticsLocations: n } = (0, l.Ay)(),
        { trackUserProfileAction: r } = (0, m.NJ)(),
        s = i.useCallback(() => {
            t?.({ tabSection: S.RP.WIDGETS });
        }, [t]),
        a = i.useCallback(() => {
            r({ action: "PRESS_SHOW_MORE_WIDGETS", analyticsLocations: n }), s();
        }, [r, n, s]);
    return { openModal: s, onExpand: a };
}
function C(e) {
    let { user: t, widgets: n = [], ...s } = e,
        { openModal: a, onExpand: o } = N({ user: t, widgets: n, ...s }),
        l = i.useMemo(() => n.filter((e) => e instanceof E.R), [n]),
        u = i.useMemo(() => l.map((e) => e.applicationId), [l]),
        d = (0, c.A)(t.id, u),
        _ = i.useCallback(
            (e) => {
                let t = [],
                    i = !1;
                for (let s of n)
                    if (s instanceof E.R) {
                        let n = d[s.applicationId];
                        null != n &&
                            t.push(
                                (0, r.jsx)(
                                    I.A,
                                    { type: "v1", previewData: n, onClick: a, ...e },
                                    `application-widget-${s.applicationId}`,
                                ),
                            );
                    } else
                        s instanceof g.Yy &&
                            !i &&
                            (t.push((0, r.jsx)(T.A, { widgets: n, onClick: a, ...e }, "collection-breadcrumb")),
                            (i = !0));
                return t;
            },
            [d, a, n],
        );
    return 0 === n.length ? null : (0, r.jsx)(A.A, { renderCards: _, heading: y.intl.string(y.t.Y55Tua), onExpand: o });
}
function R(e) {
    let { user: t, widgets: n = [], ...l } = e,
        { openModal: u, onExpand: c } = N({ user: t, widgets: n, ...l }),
        m = i.useMemo(() => n.filter((e) => e instanceof E.R), [n]),
        S = i.useMemo(() => m.map((e) => e.applicationId), [m]),
        v = (0, _.A)(S),
        C = i.useMemo(() => new Map(v.filter(h.Vq).map((e) => [e.id, e])), [v]),
        R = (0, d.A)(S),
        O = i.useMemo(() => new Map(R.map((e) => [e.application_id, e])), [R]),
        { data: b } = (0, f.P)(t.id),
        D = i.useMemo(() => new Map(b?.map((e) => [e.application_id, e])), [b]),
        L = (0, o.bG)([p.default], () => p.default.locale),
        w = i.useMemo(
            () =>
                0 === C.size || 0 === O.size || 0 === D.size
                    ? null
                    : new Map(
                          m
                              .map((e) => {
                                  let t = C.get(e.applicationId),
                                      n = O.get(e.applicationId),
                                      r = D.get(e.applicationId);
                                  if (null == t || null == n || null == r) return null;
                                  let i = n.surfaces;
                                  if (null == i || null == i[a.m.MINI_PROFILE]) return null;
                                  let o = (0, s.VG)(r.profile);
                                  return [e, { surfaceConfigs: n.surfaces, data: o, application: t }];
                              })
                              .filter(h.Vq),
                      ),
            [m, C, O, D],
        ),
        M = i.useCallback(
            (e) => {
                let t = [],
                    i = !1;
                for (let s of n)
                    if (s instanceof E.R) {
                        let n = w?.get(s);
                        if (null == n) continue;
                        t.push(
                            (0, r.jsx)(
                                I.A,
                                {
                                    type: "v2",
                                    application: n.application,
                                    rendererProps: {
                                        locale: L,
                                        surfaceConfigs: n.surfaceConfigs,
                                        isLoading: !1,
                                        hasIdentity: !0,
                                        resolutionContext: {
                                            data: n.data,
                                            applicationAssets: [],
                                            getApplicationAssetUrl: () => "",
                                            localizedStrings: [],
                                        },
                                    },
                                    onClick: u,
                                    ...e,
                                },
                                `application-widget-${s.applicationId}`,
                            ),
                        );
                    } else
                        s instanceof g.Yy &&
                            !i &&
                            (t.push((0, r.jsx)(T.A, { widgets: n, onClick: u, ...e }, "collection-breadcrumb")),
                            (i = !0));
                return t;
            },
            [n, u, w, L],
        );
    return 0 === n.length ? null : (0, r.jsx)(A.A, { renderCards: M, heading: y.intl.string(y.t.Y55Tua), onExpand: c });
}
