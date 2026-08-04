"use strict";
n.d(t, { A: () => V }), n(321073);
var i = n(477900),
    r = n(582128),
    a = n(176999),
    s = n(598748),
    l = n(17928),
    o = n(688810),
    d = n(549699),
    c = n(29496),
    u = n(352003),
    _ = n(429913),
    E = n(201718),
    A = n(773669),
    h = n(403362),
    I = n(183555),
    f = n(633075),
    p = n(289173),
    T = n(80330),
    m = n(503698),
    g = n.n(m),
    S = n(794248),
    N = n(331322),
    C = n(834730),
    O = n(890856),
    R = n(619517),
    L = n(946356),
    D = n(259853);
function y(e) {
    let { applicationName: t, applicationIcon: n } = e;
    return (0, i.jsxs)(N.B, {
        direction: "horizontal",
        gap: 4,
        children: [
            null != n
                ? (0, i.jsx)(R.Ay, { width: 16, height: 16, src: n, className: D.In })
                : (0, i.jsx)("div", { className: D.Fi }),
            (0, i.jsx)(C.E, { variant: "text-xs/medium", children: t }),
        ],
    });
}
function v(e) {
    let { application: t, rendererProps: n, className: a, onClick: l } = e,
        { trackUserProfileAction: o } = (0, I.NJ)(),
        d = n.surfaceConfigs[s.m.MINI_PROFILE],
        c = t.id;
    return (!(function (e) {
        let { trackUserProfileAction: t } = (0, I.NJ)(),
            n = r.useRef(!1);
        r.useEffect(() => {
            n.current || (t({ action: "VIEW_APPLICATION_WIDGET_PREVIEW", applicationId: e }), (n.current = !0));
        }, [t, e]);
    })(c),
    null == d)
        ? null
        : (0, i.jsx)(O.s, {
              onClick: () => {
                  o({ action: "PRESS_APPLICATION_WIDGET_PREVIEW", applicationId: c }), l?.();
              },
              "aria-label": t.name,
              children: (0, i.jsx)(L.A.Overlay, {
                  className: g()(D.kL, a),
                  children: (0, i.jsx)(S.kH, {
                      ...n,
                      surface: s.m.MINI_PROFILE,
                      surfaceConfig: d,
                      header: (0, i.jsx)(y, { applicationName: t.name, applicationIcon: t.getIconURL(16) }),
                  }),
              }),
          });
}
var b = n(939249),
    M = n(321108),
    P = n(939496),
    U = n(996988),
    w = n(375708),
    G = n(107562);
function x(e) {
    var t;
    let n,
        { widgets: a = [], onClick: s, className: l } = e,
        { trackUserProfileAction: o } = (0, I.NJ)(),
        d =
            ((t = a.filter((e) => e instanceof f.R)),
            (n = (0, _.A)(t.map((e) => e.applicationId))),
            (0, r.useMemo)(
                () =>
                    Object.fromEntries(
                        n
                            .filter(h.Vq)
                            .map((e) => [e.id, e.getCanonicalGameId()])
                            .filter((e) => {
                                let [t, n] = e;
                                return null != n;
                            }),
                    ),
                [n],
            )),
        c = (0, r.useMemo)(
            () => [
                ...new Set(
                    a
                        .map((e) =>
                            e instanceof p.Yy
                                ? e.games.map((e) => e.applicationId)
                                : e instanceof f.R
                                  ? d[e.applicationId]
                                  : void 0,
                        )
                        .filter(h.Vq)
                        .flat(),
                ),
            ],
            [a, d],
        ),
        { themeType: u } = (0, P.E)(),
        E = u === U.d.SIDEBAR,
        A = (0, r.useRef)(!1),
        T = (0, M.A)(c),
        m = (0, r.useMemo)(
            () =>
                T.map((e) => ({ image: e.getIconURL(48) ?? "", name: e.name }))
                    .filter((e) => "" !== e.image)
                    .slice(0, 4),
            [T],
        );
    return (
        (0, r.useEffect)(() => {
            0 === m.length || A.current || (o({ action: "VIEW_GAME_WIDGET_BREADCRUMB" }), (A.current = !0));
        }, [o, m.length]),
        (0, i.jsx)(b.D, {
            "aria-label": w.intl.string(w.t.JjiwFx),
            onClick: () => {
                o({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), s();
            },
            className: G.QF,
            children: (0, i.jsxs)(L.A.Overlay, {
                className: g()(G.WH, l),
                children: [
                    (0, i.jsx)(C.E, {
                        variant: E ? "text-sm/medium" : "text-xs/medium",
                        children: w.intl.string(w.t.JjiwFx),
                    }),
                    (0, i.jsx)("div", {
                        className: G.Pt,
                        children: m.map((e, t) =>
                            (0, i.jsx)(
                                k,
                                {
                                    iconUrl: e.image,
                                    name: e.name,
                                    displayCount: t === m.length - 1 && c.length > 4,
                                    gameCount: c.length - m.length,
                                },
                                t,
                            ),
                        ),
                    }),
                ],
            }),
        })
    );
}
function k(e) {
    let { iconUrl: t, name: n, displayCount: r, gameCount: a } = e;
    return (0, i.jsxs)("div", {
        className: G.Kk,
        children: [
            (0, i.jsx)("img", { className: g()({ [G.um]: r }), src: t, alt: n }),
            r &&
                (0, i.jsx)("div", {
                    className: G.pp,
                    children: (0, i.jsxs)(C.E, { variant: "text-xs/medium", className: G.gq, children: ["+", a] }),
                }),
        ],
    });
}
var F = n(518477);
function V(e) {
    let { user: t, widgets: n = [], ...m } = e,
        { openModal: g, onExpand: S } = (function (e) {
            let { onOpenUserProfileModal: t } = e,
                { analyticsLocations: n } = (0, o.Ay)(),
                { trackUserProfileAction: i } = (0, I.NJ)(),
                a = r.useCallback(() => {
                    t?.({ tabSection: F.RP.WIDGETS });
                }, [t]),
                s = r.useCallback(() => {
                    i({ action: "PRESS_SHOW_MORE_WIDGETS", analyticsLocations: n }), a();
                }, [i, n, a]);
            return { openModal: a, onExpand: s };
        })({ user: t, widgets: n, ...m }),
        N = r.useMemo(() => n.filter((e) => e instanceof f.R), [n]),
        C = r.useMemo(() => N.map((e) => e.applicationId), [N]),
        O = (0, _.A)(C),
        R = r.useMemo(() => new Map(O.filter(h.Vq).map((e) => [e.id, e])), [O]),
        L = (0, u.A)(C),
        D = r.useMemo(() => new Map(L.map((e) => [e.application_id, e])), [L]),
        { data: y } = (0, E.P)(t.id),
        b = r.useMemo(() => new Map(y?.map((e) => [e.application_id, e])), [y]),
        M = (0, l.bG)([A.default], () => A.default.locale),
        P = (0, l.cf)([c.A], () => Object.fromEntries(N.map((e) => [e.applicationId, c.A.getAssets(e.applicationId)]))),
        U = r.useMemo(
            () =>
                0 === R.size || 0 === D.size || 0 === b.size
                    ? null
                    : new Map(
                          N.map((e) => {
                              let t = R.get(e.applicationId),
                                  n = D.get(e.applicationId),
                                  i = b.get(e.applicationId);
                              if (null == t || null == n || null == i) return null;
                              let r = n.surfaces;
                              if (null == r || null == r[s.m.MINI_PROFILE]) return null;
                              let l = (0, a.VG)(i.profile),
                                  o = Object.values(P[e.applicationId] ?? {}).filter(h.Vq);
                              return [e, { surfaceConfigs: n.surfaces, data: l, application: t, assets: o }];
                          }).filter(h.Vq),
                      ),
            [N, R, D, b, P],
        ),
        G = r.useCallback(
            (e) => {
                let t = [],
                    r = !1;
                for (let a of n)
                    if (a instanceof f.R) {
                        let n = U?.get(a);
                        if (null == n) continue;
                        t.push(
                            (0, i.jsx)(
                                v,
                                {
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
                                                (0, d.Q)(a.applicationId, e, e.metadata.width),
                                            localizedStrings: [],
                                        },
                                    },
                                    onClick: g,
                                    ...e,
                                },
                                `application-widget-${a.applicationId}`,
                            ),
                        );
                    } else
                        a instanceof p.Yy &&
                            !r &&
                            (t.push((0, i.jsx)(x, { widgets: n, onClick: g, ...e }, "collection-breadcrumb")),
                            (r = !0));
                return t;
            },
            [n, g, U, M],
        );
    return 0 === n.length ? null : (0, i.jsx)(T.A, { renderCards: G, heading: w.intl.string(w.t.Y55Tua), onExpand: S });
}
