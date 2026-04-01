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
    return t ? (0, r.jsx)(O, { ...e }) : (0, r.jsx)(R, { ...e });
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
function C(e, t, n, i) {
    let s = !1;
    for (let a of e)
        a instanceof g.Yy &&
            !s &&
            (i.push((0, r.jsx)(T.A, { widgets: e, onClick: t, ...n }, "collection-breadcrumb")), (s = !0));
}
function R(e) {
    let { user: t, widgets: n = [], ...s } = e,
        { openModal: a, onExpand: o } = N({ user: t, widgets: n, ...s }),
        l = i.useMemo(() => n.filter((e) => e instanceof E.R), [n]),
        u = i.useMemo(() => l.map((e) => e.applicationId), [l]),
        d = (0, c.A)(t.id, u),
        _ = i.useCallback(
            (e) => {
                let t = [];
                for (let i of n)
                    if (i instanceof E.R) {
                        let n = d[i.applicationId];
                        null != n &&
                            t.push(
                                (0, r.jsx)(
                                    I.A,
                                    { type: "v1", previewData: n, onClick: a, ...e },
                                    `application-widget-${i.applicationId}`,
                                ),
                            );
                    }
                return C(n, a, e, t), t;
            },
            [d, a, n],
        );
    return 0 === n.length ? null : (0, r.jsx)(A.A, { renderCards: _, heading: y.intl.string(y.t.Y55Tua), onExpand: o });
}
function O(e) {
    let { user: t, widgets: n = [], ...l } = e,
        { openModal: u, onExpand: c } = N({ user: t, widgets: n, ...l }),
        m = i.useMemo(() => n.filter((e) => e instanceof E.R), [n]),
        g = i.useMemo(() => m.map((e) => e.applicationId), [m]),
        T = (0, _.A)(g),
        S = i.useMemo(() => new Map(T.filter(h.Vq).map((e) => [e.id, e])), [T]),
        v = (0, d.A)(g),
        R = i.useMemo(() => new Map(v.map((e) => [e.application_id, e])), [v]),
        { data: O } = (0, f.P)(t.id),
        b = i.useMemo(() => new Map(O?.map((e) => [e.application_id, e])), [O]),
        D = (0, o.bG)([p.default], () => p.default.locale),
        L = i.useMemo(
            () =>
                0 === S.size || 0 === R.size || 0 === b.size
                    ? []
                    : m
                          .map((e) => {
                              let t = S.get(e.applicationId),
                                  n = R.get(e.applicationId),
                                  r = b.get(e.applicationId);
                              if (null == t || null == n || null == r) return null;
                              let i = n.surfaces;
                              if (null == i || null == i[a.m.MINI_PROFILE]) return null;
                              let o = (0, s.VG)(r.profile);
                              return { widget: e, surfaceConfigs: n.surfaces, data: o, application: t };
                          })
                          .filter(h.Vq),
            [m, S, R, b],
        ),
        w = i.useCallback(
            (e) => {
                let t = [];
                for (let { widget: n, surfaceConfigs: i, data: s, application: a } of L)
                    t.push(
                        (0, r.jsx)(
                            I.A,
                            {
                                type: "v2",
                                application: a,
                                rendererProps: {
                                    data: s,
                                    locale: D,
                                    surfaceConfigs: i,
                                    applicationAssets: [],
                                    localizedStrings: [],
                                    isLoading: !1,
                                    hasIdentity: !0,
                                },
                                onClick: u,
                                ...e,
                            },
                            `application-widget-${n.applicationId}`,
                        ),
                    );
                return C(n, u, e, t), t;
            },
            [n, u, L, D],
        );
    return 0 === n.length ? null : (0, r.jsx)(A.A, { renderCards: w, heading: y.intl.string(y.t.Y55Tua), onExpand: c });
}
