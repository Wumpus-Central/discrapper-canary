"use strict";
n.d(t, { A: () => B }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(284513),
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
    S = n(331322),
    N = n(834730),
    C = n(890856),
    R = n(619517),
    O = n(946356),
    L = n(297173);
function D(e) {
    let { applicationName: t, applicationIcon: n } = e;
    return (0, i.jsxs)(S.B, {
        direction: "horizontal",
        gap: 4,
        children: [
            null != n
                ? (0, i.jsx)(R.Ay, { width: 16, height: 16, src: n, className: L.In })
                : (0, i.jsx)("div", { className: L.Fi }),
            (0, i.jsx)(N.E, { variant: "text-xs/medium", children: t }),
        ],
    });
}
function y(e) {
    let { application: t, rendererProps: n, className: l, onClick: o } = e,
        { trackUserProfileAction: d } = (0, I.NJ)(),
        c = n.surfaceConfigs[s.m.MINI_PROFILE],
        u = t.id;
    return (!(function (e) {
        let { trackUserProfileAction: t } = (0, I.NJ)(),
            n = r.useRef(!1);
        r.useEffect(() => {
            n.current || (t({ action: "VIEW_APPLICATION_WIDGET_PREVIEW", applicationId: e }), (n.current = !0));
        }, [t, e]);
    })(u),
    null == c)
        ? null
        : (0, i.jsx)(C.s, {
              onClick: () => {
                  d({ action: "PRESS_APPLICATION_WIDGET_PREVIEW", applicationId: u }), o?.();
              },
              "aria-label": t.name,
              children: (0, i.jsx)(O.A.Overlay, {
                  className: g()(L.kL, l),
                  children: (0, i.jsx)(a.kH, {
                      ...n,
                      surface: s.m.MINI_PROFILE,
                      surfaceConfig: c,
                      header: (0, i.jsx)(D, { applicationName: t.name, applicationIcon: t.getIconURL(16) }),
                  }),
              }),
          });
}
var v = n(939249),
    b = n(780907),
    M = n(760751),
    P = n(486020),
    U = n(939496),
    w = n(996988),
    G = n(375708),
    x = n(135442);
function k(e) {
    var t;
    let n,
        { widgets: a = [], onClick: s, className: o } = e,
        { trackUserProfileAction: d } = (0, I.NJ)(),
        c =
            ((t = a.filter((e) => e instanceof f.R)),
            (n = (0, _.A)(t.map((e) => e.applicationId))),
            (0, l.cf)([M.A], () =>
                Object.fromEntries(
                    n
                        .filter(h.Vq)
                        .map((e) => [e.id, M.A.getGameByApplication(e)])
                        .filter((e) => {
                            let [t, n] = e;
                            return null != n;
                        }),
                ),
            )),
        u = (0, r.useMemo)(
            () => [
                ...new Set(
                    a
                        .map((e) =>
                            e instanceof p.Yy
                                ? e.games.map((e) => e.applicationId)
                                : e instanceof f.R
                                  ? c[e.applicationId]?.id
                                  : void 0,
                        )
                        .filter(h.Vq)
                        .flat(),
                ),
            ],
            [a, c],
        ),
        E = (0, l.bG)([M.A], () => M.A.canFetchDetectableGames()),
        [A, T] = (0, r.useState)([]),
        { themeType: m } = (0, U.E)(),
        S = m === w.d.SIDEBAR,
        C = (0, r.useRef)(!1);
    return (
        (0, r.useEffect)(() => {
            E
                ? b.Ay.getDetectableGames()
                : T(
                      u
                          .map((e) => M.A.getDetectableGame(e))
                          .filter((e) => null != e)
                          .map((e) => ({
                              image: P.Ay.getApplicationIconURL({ id: e.id, icon: e.icon }) ?? "",
                              name: e.name,
                          }))
                          .filter((e) => "" !== e.image)
                          .slice(0, 4),
                  );
        }, [u, E]),
        (0, r.useEffect)(() => {
            0 === A.length || C.current || (d({ action: "VIEW_GAME_WIDGET_BREADCRUMB" }), (C.current = !0));
        }, [d, A.length]),
        (0, i.jsx)(v.D, {
            "aria-label": G.intl.string(G.t.JjiwFx),
            onClick: () => {
                d({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), s();
            },
            className: x.QF,
            children: (0, i.jsxs)(O.A.Overlay, {
                className: g()(x.WH, o),
                children: [
                    (0, i.jsx)(N.E, {
                        variant: S ? "text-sm/medium" : "text-xs/medium",
                        children: G.intl.string(G.t.JjiwFx),
                    }),
                    (0, i.jsx)("div", {
                        className: x.Pt,
                        children: A.map((e, t) =>
                            (0, i.jsx)(
                                F,
                                {
                                    iconUrl: e.image,
                                    name: e.name,
                                    displayCount: t === A.length - 1 && u.length > 4,
                                    gameCount: u.length - A.length,
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
function F(e) {
    let { iconUrl: t, name: n, displayCount: r, gameCount: a } = e;
    return (0, i.jsxs)("div", {
        className: x.Kk,
        children: [
            (0, i.jsx)("img", { className: g()({ [x.um]: r }), src: t, alt: n }),
            r &&
                (0, i.jsx)("div", {
                    className: x.pp,
                    children: (0, i.jsxs)(N.E, { variant: "text-xs/medium", className: x.gq, children: ["+", a] }),
                }),
        ],
    });
}
var V = n(518477);
function B(e) {
    let { user: t, widgets: n = [], ...m } = e,
        { openModal: g, onExpand: S } = (function (e) {
            let { onOpenUserProfileModal: t } = e,
                { analyticsLocations: n } = (0, o.Ay)(),
                { trackUserProfileAction: i } = (0, I.NJ)(),
                a = r.useCallback(() => {
                    t?.({ tabSection: V.RP.WIDGETS });
                }, [t]),
                s = r.useCallback(() => {
                    i({ action: "PRESS_SHOW_MORE_WIDGETS", analyticsLocations: n }), a();
                }, [i, n, a]);
            return { openModal: a, onExpand: s };
        })({ user: t, widgets: n, ...m }),
        N = r.useMemo(() => n.filter((e) => e instanceof f.R), [n]),
        C = r.useMemo(() => N.map((e) => e.applicationId), [N]),
        R = (0, _.A)(C),
        O = r.useMemo(() => new Map(R.filter(h.Vq).map((e) => [e.id, e])), [R]),
        L = (0, u.A)(C),
        D = r.useMemo(() => new Map(L.map((e) => [e.application_id, e])), [L]),
        { data: v } = (0, E.P)(t.id),
        b = r.useMemo(() => new Map(v?.map((e) => [e.application_id, e])), [v]),
        M = (0, l.bG)([A.default], () => A.default.locale),
        P = (0, l.cf)([c.A], () => Object.fromEntries(N.map((e) => [e.applicationId, c.A.getAssets(e.applicationId)]))),
        U = r.useMemo(
            () =>
                0 === O.size || 0 === D.size || 0 === b.size
                    ? null
                    : new Map(
                          N.map((e) => {
                              let t = O.get(e.applicationId),
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
            [N, O, D, b, P],
        ),
        w = r.useCallback(
            (e) => {
                let t = [],
                    r = !1;
                for (let a of n)
                    if (a instanceof f.R) {
                        let n = U?.get(a);
                        if (null == n) continue;
                        t.push(
                            (0, i.jsx)(
                                y,
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
                            (t.push((0, i.jsx)(k, { widgets: n, onClick: g, ...e }, "collection-breadcrumb")),
                            (r = !0));
                return t;
            },
            [n, g, U, M],
        );
    return 0 === n.length ? null : (0, i.jsx)(T.A, { renderCards: w, heading: G.intl.string(G.t.Y55Tua), onExpand: S });
}
