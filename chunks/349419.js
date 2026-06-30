"use strict";
n.d(t, { A: () => B }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(432585),
    a = n(598748),
    o = n(17928),
    l = n(688810),
    u = n(549699),
    c = n(29496),
    d = n(352003),
    _ = n(429913),
    h = n(201718),
    f = n(773669),
    p = n(403362),
    E = n(183555),
    m = n(633075),
    g = n(289173),
    A = n(80330),
    I = n(503698),
    T = n.n(I),
    S = n(331322),
    y = n(834730),
    C = n(890856),
    N = n(619517),
    v = n(946356),
    R = n(646997);
function O(e) {
    let { applicationName: t, applicationIcon: n } = e;
    return (0, i.jsxs)(S.B, {
        direction: "horizontal",
        gap: 4,
        children: [
            null != n
                ? (0, i.jsx)(N.Ay, { width: 16, height: 16, src: n, className: R.In })
                : (0, i.jsx)("div", { className: R.Fi }),
            (0, i.jsx)(y.E, { variant: "text-xs/medium", children: t }),
        ],
    });
}
function b(e) {
    let { application: t, rendererProps: n, className: o, onClick: l } = e,
        { trackUserProfileAction: u } = (0, E.NJ)(),
        c = n.surfaceConfigs[a.m.MINI_PROFILE],
        d = t.id;
    return (!(function (e) {
        let { trackUserProfileAction: t } = (0, E.NJ)(),
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
              children: (0, i.jsx)(v.A.Overlay, {
                  className: T()(R.kL, o),
                  children: (0, i.jsx)(s.kH, {
                      ...n,
                      surface: a.m.MINI_PROFILE,
                      surfaceConfig: c,
                      header: (0, i.jsx)(O, { applicationName: t.name, applicationIcon: t.getIconURL(16) }),
                  }),
              }),
          });
}
var D = n(939249),
    L = n(780907),
    w = n(760751),
    M = n(486020),
    P = n(939496),
    x = n(996988),
    k = n(375708),
    U = n(216914);
function G(e) {
    var t;
    let n,
        { widgets: s = [], onClick: a, className: l } = e,
        { trackUserProfileAction: u } = (0, E.NJ)(),
        c =
            ((t = s.filter((e) => e instanceof m.R)),
            (n = (0, _.A)(t.map((e) => e.applicationId))),
            (0, o.cf)([w.A], () =>
                Object.fromEntries(
                    n
                        .filter(p.Vq)
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
                        .filter(p.Vq)
                        .flat(),
                ),
            ],
            [s, c],
        ),
        h = (0, o.bG)([w.A], () => w.A.canFetchDetectableGames()),
        [f, A] = (0, r.useState)([]),
        { themeType: I } = (0, P.E)(),
        S = I === x.d.SIDEBAR,
        C = (0, r.useRef)(!1);
    return (
        (0, r.useEffect)(() => {
            h
                ? L.Ay.getDetectableGames()
                : A(
                      d
                          .map((e) => w.A.getDetectableGame(e))
                          .filter((e) => null != e)
                          .map((e) => ({
                              image: M.Ay.getApplicationIconURL({ id: e.id, icon: e.icon }) ?? "",
                              name: e.name,
                          }))
                          .filter((e) => "" !== e.image)
                          .slice(0, 4),
                  );
        }, [d, h]),
        (0, r.useEffect)(() => {
            0 === f.length || C.current || (u({ action: "VIEW_GAME_WIDGET_BREADCRUMB" }), (C.current = !0));
        }, [u, f.length]),
        (0, i.jsx)(D.D, {
            "aria-label": k.intl.string(k.t.JjiwFx),
            onClick: () => {
                u({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), a();
            },
            className: U.QF,
            children: (0, i.jsxs)(v.A.Overlay, {
                className: T()(U.WH, l),
                children: [
                    (0, i.jsx)(y.E, {
                        variant: S ? "text-sm/medium" : "text-xs/medium",
                        children: k.intl.string(k.t.JjiwFx),
                    }),
                    (0, i.jsx)("div", {
                        className: U.Pt,
                        children: f.map((e, t) =>
                            (0, i.jsx)(
                                F,
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
function F(e) {
    let { iconUrl: t, name: n, displayCount: r, gameCount: s } = e;
    return (0, i.jsxs)("div", {
        className: U.Kk,
        children: [
            (0, i.jsx)("img", { className: T()({ [U.um]: r }), src: t, alt: n }),
            r &&
                (0, i.jsx)("div", {
                    className: U.pp,
                    children: (0, i.jsxs)(y.E, { variant: "text-xs/medium", className: U.gq, children: ["+", s] }),
                }),
        ],
    });
}
var V = n(518477);
function B(e) {
    let { user: t, widgets: n = [], ...I } = e,
        { openModal: T, onExpand: S } = (function (e) {
            let { onOpenUserProfileModal: t } = e,
                { analyticsLocations: n } = (0, l.Ay)(),
                { trackUserProfileAction: i } = (0, E.NJ)(),
                s = r.useCallback(() => {
                    t?.({ tabSection: V.RP.WIDGETS });
                }, [t]),
                a = r.useCallback(() => {
                    i({ action: "PRESS_SHOW_MORE_WIDGETS", analyticsLocations: n }), s();
                }, [i, n, s]);
            return { openModal: s, onExpand: a };
        })({ user: t, widgets: n, ...I }),
        y = r.useMemo(() => n.filter((e) => e instanceof m.R), [n]),
        C = r.useMemo(() => y.map((e) => e.applicationId), [y]),
        N = (0, _.A)(C),
        v = r.useMemo(() => new Map(N.filter(p.Vq).map((e) => [e.id, e])), [N]),
        R = (0, d.A)(C),
        O = r.useMemo(() => new Map(R.map((e) => [e.application_id, e])), [R]),
        { data: D } = (0, h.P)(t.id),
        L = r.useMemo(() => new Map(D?.map((e) => [e.application_id, e])), [D]),
        w = (0, o.bG)([f.default], () => f.default.locale),
        M = (0, o.cf)([c.A], () => Object.fromEntries(y.map((e) => [e.applicationId, c.A.getAssets(e.applicationId)]))),
        P = r.useMemo(
            () =>
                0 === v.size || 0 === O.size || 0 === L.size
                    ? null
                    : new Map(
                          y
                              .map((e) => {
                                  let t = v.get(e.applicationId),
                                      n = O.get(e.applicationId),
                                      i = L.get(e.applicationId);
                                  if (null == t || null == n || null == i) return null;
                                  let r = n.surfaces;
                                  if (null == r || null == r[a.m.MINI_PROFILE]) return null;
                                  let o = (0, s.VG)(i.profile),
                                      l = Object.values(M[e.applicationId] ?? {}).filter(p.Vq);
                                  return [e, { surfaceConfigs: n.surfaces, data: o, application: t, assets: l }];
                              })
                              .filter(p.Vq),
                      ),
            [y, v, O, L, M],
        ),
        x = r.useCallback(
            (e) => {
                let t = [],
                    r = !1;
                for (let s of n)
                    if (s instanceof m.R) {
                        let n = P?.get(s);
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
            [n, T, P, w],
        );
    return 0 === n.length ? null : (0, i.jsx)(A.A, { renderCards: x, heading: k.intl.string(k.t.Y55Tua), onExpand: S });
}
