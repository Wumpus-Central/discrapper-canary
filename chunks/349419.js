"use strict";
n.d(t, { A: () => H }), n(321073);
var i = n(627968),
    r = n(64700),
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
    y = n(259853);
function D(e) {
    let { applicationName: t, applicationIcon: n } = e;
    return (0, i.jsxs)(N.B, {
        direction: "horizontal",
        gap: 4,
        children: [
            null != n
                ? (0, i.jsx)(R.Ay, { width: 16, height: 16, src: n, className: y.In })
                : (0, i.jsx)("div", { className: y.Fi }),
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
                  className: g()(y.kL, a),
                  children: (0, i.jsx)(S.kH, {
                      ...n,
                      surface: s.m.MINI_PROFILE,
                      surfaceConfig: d,
                      header: (0, i.jsx)(D, { applicationName: t.name, applicationIcon: t.getIconURL(16) }),
                  }),
              }),
          });
}
var b = n(939249),
    M = n(780907),
    P = n(760751),
    U = n(486020),
    w = n(939496),
    G = n(996988),
    x = n(375708),
    k = n(107562);
function F(e) {
    var t;
    let n,
        { widgets: a = [], onClick: s, className: o } = e,
        { trackUserProfileAction: d } = (0, I.NJ)(),
        c =
            ((t = a.filter((e) => e instanceof f.R)),
            (n = (0, _.A)(t.map((e) => e.applicationId))),
            (0, l.cf)([P.A], () =>
                Object.fromEntries(
                    n
                        .filter(h.Vq)
                        .map((e) => [e.id, P.A.getGameByApplication(e)])
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
        E = (0, l.bG)([P.A], () => P.A.canFetchDetectableGames()),
        [A, T] = (0, r.useState)([]),
        { themeType: m } = (0, w.E)(),
        S = m === G.d.SIDEBAR,
        N = (0, r.useRef)(!1);
    return (
        (0, r.useEffect)(() => {
            E
                ? M.Ay.getDetectableGames()
                : T(
                      u
                          .map((e) => P.A.getDetectableGame(e))
                          .filter((e) => null != e)
                          .map((e) => ({
                              image: U.Ay.getApplicationIconURL({ id: e.id, icon: e.icon }) ?? "",
                              name: e.name,
                          }))
                          .filter((e) => "" !== e.image)
                          .slice(0, 4),
                  );
        }, [u, E]),
        (0, r.useEffect)(() => {
            0 === A.length || N.current || (d({ action: "VIEW_GAME_WIDGET_BREADCRUMB" }), (N.current = !0));
        }, [d, A.length]),
        (0, i.jsx)(b.D, {
            "aria-label": x.intl.string(x.t.JjiwFx),
            onClick: () => {
                d({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), s();
            },
            className: k.QF,
            children: (0, i.jsxs)(L.A.Overlay, {
                className: g()(k.WH, o),
                children: [
                    (0, i.jsx)(C.E, {
                        variant: S ? "text-sm/medium" : "text-xs/medium",
                        children: x.intl.string(x.t.JjiwFx),
                    }),
                    (0, i.jsx)("div", {
                        className: k.Pt,
                        children: A.map((e, t) =>
                            (0, i.jsx)(
                                V,
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
function V(e) {
    let { iconUrl: t, name: n, displayCount: r, gameCount: a } = e;
    return (0, i.jsxs)("div", {
        className: k.Kk,
        children: [
            (0, i.jsx)("img", { className: g()({ [k.um]: r }), src: t, alt: n }),
            r &&
                (0, i.jsx)("div", {
                    className: k.pp,
                    children: (0, i.jsxs)(C.E, { variant: "text-xs/medium", className: k.gq, children: ["+", a] }),
                }),
        ],
    });
}
var B = n(518477);
function H(e) {
    let { user: t, widgets: n = [], ...m } = e,
        { openModal: g, onExpand: S } = (function (e) {
            let { onOpenUserProfileModal: t } = e,
                { analyticsLocations: n } = (0, o.Ay)(),
                { trackUserProfileAction: i } = (0, I.NJ)(),
                a = r.useCallback(() => {
                    t?.({ tabSection: B.RP.WIDGETS });
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
        y = r.useMemo(() => new Map(L.map((e) => [e.application_id, e])), [L]),
        { data: D } = (0, E.P)(t.id),
        b = r.useMemo(() => new Map(D?.map((e) => [e.application_id, e])), [D]),
        M = (0, l.bG)([A.default], () => A.default.locale),
        P = (0, l.cf)([c.A], () => Object.fromEntries(N.map((e) => [e.applicationId, c.A.getAssets(e.applicationId)]))),
        U = r.useMemo(
            () =>
                0 === R.size || 0 === y.size || 0 === b.size
                    ? null
                    : new Map(
                          N.map((e) => {
                              let t = R.get(e.applicationId),
                                  n = y.get(e.applicationId),
                                  i = b.get(e.applicationId);
                              if (null == t || null == n || null == i) return null;
                              let r = n.surfaces;
                              if (null == r || null == r[s.m.MINI_PROFILE]) return null;
                              let l = (0, a.VG)(i.profile),
                                  o = Object.values(P[e.applicationId] ?? {}).filter(h.Vq);
                              return [e, { surfaceConfigs: n.surfaces, data: l, application: t, assets: o }];
                          }).filter(h.Vq),
                      ),
            [N, R, y, b, P],
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
                            (t.push((0, i.jsx)(F, { widgets: n, onClick: g, ...e }, "collection-breadcrumb")),
                            (r = !0));
                return t;
            },
            [n, g, U, M],
        );
    return 0 === n.length ? null : (0, i.jsx)(T.A, { renderCards: w, heading: x.intl.string(x.t.Y55Tua), onExpand: S });
}
