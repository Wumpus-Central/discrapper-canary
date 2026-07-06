"use strict";
n.d(t, { A: () => B }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(284513),
    a = n(598748),
    o = n(17928),
    l = n(688810),
    u = n(549699),
    c = n(29496),
    d = n(352003),
    _ = n(429913),
    h = n(201718),
    f = n(773669),
    E = n(403362),
    p = n(183555),
    m = n(633075),
    g = n(289173),
    A = n(80330),
    I = n(503698),
    T = n.n(I),
    S = n(331322),
    N = n(834730),
    C = n(890856),
    y = n(619517),
    O = n(946356),
    R = n(646997);
function v(e) {
    let { applicationName: t, applicationIcon: n } = e;
    return (0, i.jsxs)(S.B, {
        direction: "horizontal",
        gap: 4,
        children: [
            null != n
                ? (0, i.jsx)(y.Ay, { width: 16, height: 16, src: n, className: R.In })
                : (0, i.jsx)("div", { className: R.Fi }),
            (0, i.jsx)(N.E, { variant: "text-xs/medium", children: t }),
        ],
    });
}
function b(e) {
    let { application: t, rendererProps: n, className: o, onClick: l } = e,
        { trackUserProfileAction: u } = (0, p.NJ)(),
        c = n.surfaceConfigs[a.m.MINI_PROFILE],
        d = t.id;
    return (!(function (e) {
        let { trackUserProfileAction: t } = (0, p.NJ)(),
            n = r.useRef(!1);
        r.useEffect(() => {
            n.current || (t({ action: "VIEW_APPLICATION_WIDGET_PREVIEW", applicationId: e }), (n.current = !0));
        }, [t, e]);
    })(d),
    null == c)
        ? null
        : (0, i.jsx)(C.s, {
              onClick: () => {
                  u({ action: "PRESS_APPLICATION_WIDGET_PREVIEW", applicationId: d }), l?.();
              },
              "aria-label": t.name,
              children: (0, i.jsx)(O.A.Overlay, {
                  className: T()(R.kL, o),
                  children: (0, i.jsx)(s.kH, {
                      ...n,
                      surface: a.m.MINI_PROFILE,
                      surfaceConfig: c,
                      header: (0, i.jsx)(v, { applicationName: t.name, applicationIcon: t.getIconURL(16) }),
                  }),
              }),
          });
}
var L = n(939249),
    D = n(780907),
    w = n(760751),
    P = n(486020),
    M = n(939496),
    x = n(996988),
    U = n(375708),
    k = n(216914);
function G(e) {
    var t;
    let n,
        { widgets: s = [], onClick: a, className: l } = e,
        { trackUserProfileAction: u } = (0, p.NJ)(),
        c =
            ((t = s.filter((e) => e instanceof m.R)),
            (n = (0, _.A)(t.map((e) => e.applicationId))),
            (0, o.cf)([w.A], () =>
                Object.fromEntries(
                    n
                        .filter(E.Vq)
                        .map((e) => [e.id, w.A.getGameByApplication(e)])
                        .filter((e) => {
                            let [t, n] = e;
                            return null != n;
                        }),
                ),
            )),
        d = (0, r.useMemo)(
            () => [
                ...new Set(
                    s
                        .map((e) =>
                            e instanceof g.Yy
                                ? e.games.map((e) => e.applicationId)
                                : e instanceof m.R
                                  ? c[e.applicationId]?.id
                                  : void 0,
                        )
                        .filter(E.Vq)
                        .flat(),
                ),
            ],
            [s, c],
        ),
        h = (0, o.bG)([w.A], () => w.A.canFetchDetectableGames()),
        [f, A] = (0, r.useState)([]),
        { themeType: I } = (0, M.E)(),
        S = I === x.d.SIDEBAR,
        C = (0, r.useRef)(!1);
    return (
        (0, r.useEffect)(() => {
            h
                ? D.Ay.getDetectableGames()
                : A(
                      d
                          .map((e) => w.A.getDetectableGame(e))
                          .filter((e) => null != e)
                          .map((e) => ({
                              image: P.Ay.getApplicationIconURL({ id: e.id, icon: e.icon }) ?? "",
                              name: e.name,
                          }))
                          .filter((e) => "" !== e.image)
                          .slice(0, 4),
                  );
        }, [d, h]),
        (0, r.useEffect)(() => {
            0 === f.length || C.current || (u({ action: "VIEW_GAME_WIDGET_BREADCRUMB" }), (C.current = !0));
        }, [u, f.length]),
        (0, i.jsx)(L.D, {
            "aria-label": U.intl.string(U.t.JjiwFx),
            onClick: () => {
                u({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), a();
            },
            className: k.QF,
            children: (0, i.jsxs)(O.A.Overlay, {
                className: T()(k.WH, l),
                children: [
                    (0, i.jsx)(N.E, {
                        variant: S ? "text-sm/medium" : "text-xs/medium",
                        children: U.intl.string(U.t.JjiwFx),
                    }),
                    (0, i.jsx)("div", {
                        className: k.Pt,
                        children: f.map((e, t) =>
                            (0, i.jsx)(
                                V,
                                {
                                    iconUrl: e.image,
                                    name: e.name,
                                    displayCount: t === f.length - 1 && d.length > 4,
                                    gameCount: d.length - f.length,
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
function V(e) {
    let { iconUrl: t, name: n, displayCount: r, gameCount: s } = e;
    return (0, i.jsxs)("div", {
        className: k.Kk,
        children: [
            (0, i.jsx)("img", { className: T()({ [k.um]: r }), src: t, alt: n }),
            r &&
                (0, i.jsx)("div", {
                    className: k.pp,
                    children: (0, i.jsxs)(N.E, { variant: "text-xs/medium", className: k.gq, children: ["+", s] }),
                }),
        ],
    });
}
var F = n(518477);
function B(e) {
    let { user: t, widgets: n = [], ...I } = e,
        { openModal: T, onExpand: S } = (function (e) {
            let { onOpenUserProfileModal: t } = e,
                { analyticsLocations: n } = (0, l.Ay)(),
                { trackUserProfileAction: i } = (0, p.NJ)(),
                s = r.useCallback(() => {
                    t?.({ tabSection: F.RP.WIDGETS });
                }, [t]),
                a = r.useCallback(() => {
                    i({ action: "PRESS_SHOW_MORE_WIDGETS", analyticsLocations: n }), s();
                }, [i, n, s]);
            return { openModal: s, onExpand: a };
        })({ user: t, widgets: n, ...I }),
        N = r.useMemo(() => n.filter((e) => e instanceof m.R), [n]),
        C = r.useMemo(() => N.map((e) => e.applicationId), [N]),
        y = (0, _.A)(C),
        O = r.useMemo(() => new Map(y.filter(E.Vq).map((e) => [e.id, e])), [y]),
        R = (0, d.A)(C),
        v = r.useMemo(() => new Map(R.map((e) => [e.application_id, e])), [R]),
        { data: L } = (0, h.P)(t.id),
        D = r.useMemo(() => new Map(L?.map((e) => [e.application_id, e])), [L]),
        w = (0, o.bG)([f.default], () => f.default.locale),
        P = (0, o.cf)([c.A], () => Object.fromEntries(N.map((e) => [e.applicationId, c.A.getAssets(e.applicationId)]))),
        M = r.useMemo(
            () =>
                0 === O.size || 0 === v.size || 0 === D.size
                    ? null
                    : new Map(
                          N.map((e) => {
                              let t = O.get(e.applicationId),
                                  n = v.get(e.applicationId),
                                  i = D.get(e.applicationId);
                              if (null == t || null == n || null == i) return null;
                              let r = n.surfaces;
                              if (null == r || null == r[a.m.MINI_PROFILE]) return null;
                              let o = (0, s.VG)(i.profile),
                                  l = Object.values(P[e.applicationId] ?? {}).filter(E.Vq);
                              return [e, { surfaceConfigs: n.surfaces, data: o, application: t, assets: l }];
                          }).filter(E.Vq),
                      ),
            [N, O, v, D, P],
        ),
        x = r.useCallback(
            (e) => {
                let t = [],
                    r = !1;
                for (let s of n)
                    if (s instanceof m.R) {
                        let n = M?.get(s);
                        if (null == n) continue;
                        t.push(
                            (0, i.jsx)(
                                b,
                                {
                                    application: n.application,
                                    rendererProps: {
                                        locale: w,
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
                                    onClick: T,
                                    ...e,
                                },
                                `application-widget-${s.applicationId}`,
                            ),
                        );
                    } else
                        s instanceof g.Yy &&
                            !r &&
                            (t.push((0, i.jsx)(G, { widgets: n, onClick: T, ...e }, "collection-breadcrumb")),
                            (r = !0));
                return t;
            },
            [n, T, M, w],
        );
    return 0 === n.length ? null : (0, i.jsx)(A.A, { renderCards: x, heading: U.intl.string(U.t.Y55Tua), onExpand: S });
}
