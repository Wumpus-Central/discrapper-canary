"use strict";
n.d(t, { A: () => z }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(162817),
    a = n(598748),
    o = n(17928),
    l = n(688810),
    u = n(549699),
    c = n(29496),
    d = n(369374),
    _ = n(850046),
    f = n(188951),
    h = n(429913),
    p = n(201718),
    E = n(773669),
    m = n(403362),
    g = n(183555),
    A = n(633075),
    I = n(289173),
    T = n(80330),
    S = n(503698),
    N = n.n(S),
    y = n(331322),
    C = n(834730),
    v = n(890856),
    O = n(123292),
    R = n(619517),
    b = n(946356),
    D = n(375708),
    L = n(646997);
function w(e) {
    let { applicationName: t, applicationIcon: n } = e;
    return (0, i.jsxs)(y.B, {
        direction: "horizontal",
        gap: 4,
        children: [
            null != n
                ? (0, i.jsx)(R.Ay, { width: 16, height: 16, src: n, className: L.In })
                : (0, i.jsx)("div", { className: L.Fi }),
            (0, i.jsx)(C.E, { variant: "text-xs/medium", children: t }),
        ],
    });
}
function M(e) {
    let { trackUserProfileAction: t } = (0, g.NJ)(),
        n = r.useRef(!1);
    r.useEffect(() => {
        n.current || (t({ action: "VIEW_APPLICATION_WIDGET_PREVIEW", applicationId: e }), (n.current = !0));
    }, [t, e]);
}
function P(e) {
    let { previewData: t, className: n, onClick: r } = e,
        { trackUserProfileAction: s } = (0, g.NJ)();
    return (
        M(t.application.id),
        (0, i.jsx)(v.s, {
            onClick: () => {
                s({ action: "PRESS_APPLICATION_WIDGET_PREVIEW", applicationId: t.application.id }), r?.();
            },
            "aria-label": t.application.name,
            children: (0, i.jsxs)(b.A.Overlay, {
                className: N()(L.kL, n),
                children: [
                    (0, i.jsxs)(y.B, {
                        gap: 8,
                        padding: 8,
                        className: L.Qs,
                        children: [
                            (0, i.jsx)(w, { applicationName: t.application.name, applicationIcon: t.application.icon }),
                            (0, i.jsxs)("div", {
                                className: L.P_,
                                children: [
                                    (0, i.jsxs)(C.E, {
                                        tag: "div",
                                        variant: "heading-sm/semibold",
                                        lineClamp: 2,
                                        children: [
                                            t.previewText,
                                            null != t.previewIcon &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        " ",
                                                        (0, i.jsx)("div", {
                                                            className: L.mP,
                                                            children: (0, i.jsx)(R.Ay, {
                                                                src: t.previewIcon.proxyUrl,
                                                                width: t.previewIcon.width,
                                                                height: t.previewIcon.height,
                                                                responsive: !0,
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                    (0, i.jsx)(O.Q, {
                                        textVariant: "text-xs/normal",
                                        text: D.intl.string(D.t.qI8ZP6),
                                        variant: "secondary",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: L.Pq,
                        children: (0, i.jsx)(R.Ay, {
                            src: t.previewImage.proxyUrl,
                            width: t.previewImage.width,
                            height: t.previewImage.height,
                            responsive: !0,
                            className: L.oz,
                        }),
                    }),
                ],
            }),
        })
    );
}
function x(e) {
    let { application: t, rendererProps: n, className: r, onClick: o } = e,
        { trackUserProfileAction: l } = (0, g.NJ)(),
        u = n.surfaceConfigs[a.m.MINI_PROFILE],
        c = t.id;
    return (M(c), null == u)
        ? null
        : (0, i.jsx)(v.s, {
              onClick: () => {
                  l({ action: "PRESS_APPLICATION_WIDGET_PREVIEW", applicationId: c }), o?.();
              },
              "aria-label": t.name,
              children: (0, i.jsx)(b.A.Overlay, {
                  className: N()(L.iW, r),
                  children: (0, i.jsx)(s.kH, {
                      ...n,
                      surface: a.m.MINI_PROFILE,
                      surfaceConfig: u,
                      header: (0, i.jsx)(w, { applicationName: t.name, applicationIcon: t.getIconURL(16) }),
                  }),
              }),
          });
}
let U = function (e) {
    return "v2" === e.type ? (0, i.jsx)(x, { ...e }) : (0, i.jsx)(P, { ...e });
};
var k = n(939249),
    G = n(780907),
    F = n(760751),
    V = n(486020),
    B = n(939496),
    H = n(996988),
    j = n(216914);
function Y(e) {
    var t;
    let n,
        { widgets: s = [], onClick: a, className: l } = e,
        { trackUserProfileAction: u } = (0, g.NJ)(),
        c =
            ((t = s.filter((e) => e instanceof A.R)),
            (n = (0, h.A)(t.map((e) => e.applicationId))),
            (0, o.cf)([F.A], () =>
                Object.fromEntries(
                    n
                        .filter(m.Vq)
                        .map((e) => [e.id, F.A.getGameByApplication(e)])
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
                            e instanceof I.Yy
                                ? e.games.map((e) => e.applicationId)
                                : e instanceof A.R
                                  ? c[e.applicationId]?.id
                                  : void 0,
                        )
                        .filter(m.Vq)
                        .flat(),
                ),
            ],
            [s, c],
        ),
        _ = (0, o.bG)([F.A], () => F.A.canFetchDetectableGames()),
        [f, p] = (0, r.useState)([]),
        { themeType: E } = (0, B.E)(),
        T = E === H.d.SIDEBAR,
        S = (0, r.useRef)(!1);
    return (
        (0, r.useEffect)(() => {
            _
                ? G.Ay.getDetectableGames()
                : p(
                      d
                          .map((e) => F.A.getDetectableGame(e))
                          .filter((e) => null != e)
                          .map((e) => ({
                              image: V.Ay.getApplicationIconURL({ id: e.id, icon: e.icon }) ?? "",
                              name: e.name,
                          }))
                          .filter((e) => "" !== e.image)
                          .slice(0, 4),
                  );
        }, [d, _]),
        (0, r.useEffect)(() => {
            0 === f.length || S.current || (u({ action: "VIEW_GAME_WIDGET_BREADCRUMB" }), (S.current = !0));
        }, [u, f.length]),
        (0, i.jsx)(k.D, {
            "aria-label": D.intl.string(D.t.JjiwFx),
            onClick: () => {
                u({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), a();
            },
            className: j.QF,
            children: (0, i.jsxs)(b.A.Overlay, {
                className: N()(j.WH, l),
                children: [
                    (0, i.jsx)(C.E, {
                        variant: T ? "text-sm/medium" : "text-xs/medium",
                        children: D.intl.string(D.t.JjiwFx),
                    }),
                    (0, i.jsx)("div", {
                        className: j.Pt,
                        children: f.map((e, t) =>
                            (0, i.jsx)(
                                W,
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
function W(e) {
    let { iconUrl: t, name: n, displayCount: r, gameCount: s } = e;
    return (0, i.jsxs)("div", {
        className: j.Kk,
        children: [
            (0, i.jsx)("img", { className: N()({ [j.um]: r }), src: t, alt: n }),
            r &&
                (0, i.jsx)("div", {
                    className: j.pp,
                    children: (0, i.jsxs)(C.E, { variant: "text-xs/medium", className: j.gq, children: ["+", s] }),
                }),
        ],
    });
}
var K = n(518477);
function z(e) {
    let { enabled: t } = d.A.useConfig({ location: "UserProfileStackedWidgetPreviews" });
    return t ? (0, i.jsx)(Z, { ...e }) : (0, i.jsx)(q, { ...e });
}
function $(e) {
    let { onOpenUserProfileModal: t } = e,
        { analyticsLocations: n } = (0, l.Ay)(),
        { trackUserProfileAction: i } = (0, g.NJ)(),
        s = r.useCallback(() => {
            t?.({ tabSection: K.RP.WIDGETS });
        }, [t]),
        a = r.useCallback(() => {
            i({ action: "PRESS_SHOW_MORE_WIDGETS", analyticsLocations: n }), s();
        }, [i, n, s]);
    return { openModal: s, onExpand: a };
}
function q(e) {
    let { user: t, widgets: n = [], ...s } = e,
        { openModal: a, onExpand: o } = $({ user: t, widgets: n, ...s }),
        l = r.useMemo(() => n.filter((e) => e instanceof A.R), [n]),
        u = r.useMemo(() => l.map((e) => e.applicationId), [l]),
        c = (0, _.A)(t.id, u),
        d = r.useCallback(
            (e) => {
                let t = [],
                    r = !1;
                for (let s of n)
                    if (s instanceof A.R) {
                        let n = c[s.applicationId];
                        null != n &&
                            t.push(
                                (0, i.jsx)(
                                    U,
                                    { type: "v1", previewData: n, onClick: a, ...e },
                                    `application-widget-${s.applicationId}`,
                                ),
                            );
                    } else
                        s instanceof I.Yy &&
                            !r &&
                            (t.push((0, i.jsx)(Y, { widgets: n, onClick: a, ...e }, "collection-breadcrumb")),
                            (r = !0));
                return t;
            },
            [c, a, n],
        );
    return 0 === n.length ? null : (0, i.jsx)(T.A, { renderCards: d, heading: D.intl.string(D.t.Y55Tua), onExpand: o });
}
function Z(e) {
    let { user: t, widgets: n = [], ...l } = e,
        { openModal: d, onExpand: _ } = $({ user: t, widgets: n, ...l }),
        g = r.useMemo(() => n.filter((e) => e instanceof A.R), [n]),
        S = r.useMemo(() => g.map((e) => e.applicationId), [g]),
        N = (0, h.A)(S),
        y = r.useMemo(() => new Map(N.filter(m.Vq).map((e) => [e.id, e])), [N]),
        C = (0, f.A)(S),
        v = r.useMemo(() => new Map(C.map((e) => [e.application_id, e])), [C]),
        { data: O } = (0, p.P)(t.id),
        R = r.useMemo(() => new Map(O?.map((e) => [e.application_id, e])), [O]),
        b = (0, o.bG)([E.default], () => E.default.locale),
        L = (0, o.cf)([c.A], () => Object.fromEntries(g.map((e) => [e.applicationId, c.A.getAssets(e.applicationId)]))),
        w = r.useMemo(
            () =>
                0 === y.size || 0 === v.size || 0 === R.size
                    ? null
                    : new Map(
                          g
                              .map((e) => {
                                  let t = y.get(e.applicationId),
                                      n = v.get(e.applicationId),
                                      i = R.get(e.applicationId);
                                  if (null == t || null == n || null == i) return null;
                                  let r = n.surfaces;
                                  if (null == r || null == r[a.m.MINI_PROFILE]) return null;
                                  let o = (0, s.VG)(i.profile),
                                      l = Object.values(L[e.applicationId] ?? {}).filter(m.Vq);
                                  return [e, { surfaceConfigs: n.surfaces, data: o, application: t, assets: l }];
                              })
                              .filter(m.Vq),
                      ),
            [g, y, v, R, L],
        ),
        M = r.useCallback(
            (e) => {
                let t = [],
                    r = !1;
                for (let s of n)
                    if (s instanceof A.R) {
                        let n = w?.get(s);
                        if (null == n) continue;
                        t.push(
                            (0, i.jsx)(
                                U,
                                {
                                    type: "v2",
                                    application: n.application,
                                    rendererProps: {
                                        locale: b,
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
                            !r &&
                            (t.push((0, i.jsx)(Y, { widgets: n, onClick: d, ...e }, "collection-breadcrumb")),
                            (r = !0));
                return t;
            },
            [n, d, w, b],
        );
    return 0 === n.length ? null : (0, i.jsx)(T.A, { renderCards: M, heading: D.intl.string(D.t.Y55Tua), onExpand: _ });
}
