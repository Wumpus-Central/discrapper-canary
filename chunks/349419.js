t.d(a, { A: () => B }), t(321073);
var i = t(627968),
    n = t(64700),
    l = t(176999),
    s = t(598748),
    c = t(17928),
    r = t(688810),
    o = t(549699),
    u = t(29496),
    p = t(352003),
    d = t(429913),
    m = t(201718),
    f = t(773669),
    I = t(403362),
    g = t(183555),
    h = t(633075),
    E = t(289173),
    A = t(80330),
    x = t(503698),
    j = t.n(x),
    R = t(794248),
    C = t(331322),
    _ = t(834730),
    N = t(890856),
    M = t(619517),
    b = t(946356),
    P = t(259853);
function v(e) {
    let { applicationName: a, applicationIcon: t } = e;
    return (0, i.jsxs)(C.B, {
        direction: "horizontal",
        gap: 4,
        children: [
            null != t
                ? (0, i.jsx)(M.Ay, { width: 16, height: 16, src: t, className: P.In })
                : (0, i.jsx)("div", { className: P.Fi }),
            (0, i.jsx)(_.E, { variant: "text-xs/medium", children: a }),
        ],
    });
}
function G(e) {
    let { application: a, rendererProps: t, className: l, onClick: c } = e,
        { trackUserProfileAction: r } = (0, g.NJ)(),
        o = t.surfaceConfigs[s.m.MINI_PROFILE],
        u = a.id;
    return (!(function (e) {
        let { trackUserProfileAction: a } = (0, g.NJ)(),
            t = n.useRef(!1);
        n.useEffect(() => {
            t.current || (a({ action: "VIEW_APPLICATION_WIDGET_PREVIEW", applicationId: e }), (t.current = !0));
        }, [a, e]);
    })(u),
    null == o)
        ? null
        : (0, i.jsx)(N.s, {
              onClick: () => {
                  r({ action: "PRESS_APPLICATION_WIDGET_PREVIEW", applicationId: u }), c?.();
              },
              "aria-label": a.name,
              children: (0, i.jsx)(b.A.Overlay, {
                  className: j()(P.kL, l),
                  children: (0, i.jsx)(R.kH, {
                      ...t,
                      surface: s.m.MINI_PROFILE,
                      surfaceConfig: o,
                      header: (0, i.jsx)(v, { applicationName: a.name, applicationIcon: a.getIconURL(16) }),
                  }),
              }),
          });
}
var k = t(939249),
    S = t(780907),
    w = t(760751),
    D = t(486020),
    O = t(939496),
    W = t(996988),
    y = t(375708),
    V = t(107562);
function L(e) {
    var a;
    let t,
        { widgets: l = [], onClick: s, className: r } = e,
        { trackUserProfileAction: o } = (0, g.NJ)(),
        u =
            ((a = l.filter((e) => e instanceof h.R)),
            (t = (0, d.A)(a.map((e) => e.applicationId))),
            (0, c.cf)([w.A], () =>
                Object.fromEntries(
                    t
                        .filter(I.Vq)
                        .map((e) => [e.id, w.A.getGameByApplication(e)])
                        .filter((e) => {
                            let [a, t] = e;
                            return null != t;
                        }),
                ),
            )),
        p = (0, n.useMemo)(
            () => [
                ...new Set(
                    l
                        .map((e) =>
                            e instanceof E.Yy
                                ? e.games.map((e) => e.applicationId)
                                : e instanceof h.R
                                  ? u[e.applicationId]?.id
                                  : void 0,
                        )
                        .filter(I.Vq)
                        .flat(),
                ),
            ],
            [l, u],
        ),
        m = (0, c.bG)([w.A], () => w.A.canFetchDetectableGames()),
        [f, A] = (0, n.useState)([]),
        { themeType: x } = (0, O.E)(),
        R = x === W.d.SIDEBAR,
        C = (0, n.useRef)(!1);
    return (
        (0, n.useEffect)(() => {
            m
                ? S.Ay.getDetectableGames()
                : A(
                      p
                          .map((e) => w.A.getDetectableGame(e))
                          .filter((e) => null != e)
                          .map((e) => ({
                              image: D.Ay.getApplicationIconURL({ id: e.id, icon: e.icon }) ?? "",
                              name: e.name,
                          }))
                          .filter((e) => "" !== e.image)
                          .slice(0, 4),
                  );
        }, [p, m]),
        (0, n.useEffect)(() => {
            0 === f.length || C.current || (o({ action: "VIEW_GAME_WIDGET_BREADCRUMB" }), (C.current = !0));
        }, [o, f.length]),
        (0, i.jsx)(k.D, {
            "aria-label": y.intl.string(y.t.JjiwFx),
            onClick: () => {
                o({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), s();
            },
            className: V.QF,
            children: (0, i.jsxs)(b.A.Overlay, {
                className: j()(V.WH, r),
                children: [
                    (0, i.jsx)(_.E, {
                        variant: R ? "text-sm/medium" : "text-xs/medium",
                        children: y.intl.string(y.t.JjiwFx),
                    }),
                    (0, i.jsx)("div", {
                        className: V.Pt,
                        children: f.map((e, a) =>
                            (0, i.jsx)(
                                T,
                                {
                                    iconUrl: e.image,
                                    name: e.name,
                                    displayCount: a === f.length - 1 && p.length > 4,
                                    gameCount: p.length - f.length,
                                },
                                a,
                            ),
                        ),
                    }),
                ],
            }),
        })
    );
}
function T(e) {
    let { iconUrl: a, name: t, displayCount: n, gameCount: l } = e;
    return (0, i.jsxs)("div", {
        className: V.Kk,
        children: [
            (0, i.jsx)("img", { className: j()({ [V.um]: n }), src: a, alt: t }),
            n &&
                (0, i.jsx)("div", {
                    className: V.pp,
                    children: (0, i.jsxs)(_.E, { variant: "text-xs/medium", className: V.gq, children: ["+", l] }),
                }),
        ],
    });
}
var F = t(518477);
function B(e) {
    let { user: a, widgets: t = [], ...x } = e,
        { openModal: j, onExpand: R } = (function (e) {
            let { onOpenUserProfileModal: a } = e,
                { analyticsLocations: t } = (0, r.Ay)(),
                { trackUserProfileAction: i } = (0, g.NJ)(),
                l = n.useCallback(() => {
                    a?.({ tabSection: F.RP.WIDGETS });
                }, [a]),
                s = n.useCallback(() => {
                    i({ action: "PRESS_SHOW_MORE_WIDGETS", analyticsLocations: t }), l();
                }, [i, t, l]);
            return { openModal: l, onExpand: s };
        })({ user: a, widgets: t, ...x }),
        C = n.useMemo(() => t.filter((e) => e instanceof h.R), [t]),
        _ = n.useMemo(() => C.map((e) => e.applicationId), [C]),
        N = (0, d.A)(_),
        M = n.useMemo(() => new Map(N.filter(I.Vq).map((e) => [e.id, e])), [N]),
        b = (0, p.A)(_),
        P = n.useMemo(() => new Map(b.map((e) => [e.application_id, e])), [b]),
        { data: v } = (0, m.P)(a.id),
        k = n.useMemo(() => new Map(v?.map((e) => [e.application_id, e])), [v]),
        S = (0, c.bG)([f.default], () => f.default.locale),
        w = (0, c.cf)([u.A], () => Object.fromEntries(C.map((e) => [e.applicationId, u.A.getAssets(e.applicationId)]))),
        D = n.useMemo(
            () =>
                0 === M.size || 0 === P.size || 0 === k.size
                    ? null
                    : new Map(
                          C.map((e) => {
                              let a = M.get(e.applicationId),
                                  t = P.get(e.applicationId),
                                  i = k.get(e.applicationId);
                              if (null == a || null == t || null == i) return null;
                              let n = t.surfaces;
                              if (null == n || null == n[s.m.MINI_PROFILE]) return null;
                              let c = (0, l.VG)(i.profile),
                                  r = Object.values(w[e.applicationId] ?? {}).filter(I.Vq);
                              return [e, { surfaceConfigs: t.surfaces, data: c, application: a, assets: r }];
                          }).filter(I.Vq),
                      ),
            [C, M, P, k, w],
        ),
        O = n.useCallback(
            (e) => {
                let a = [],
                    n = !1;
                for (let l of t)
                    if (l instanceof h.R) {
                        let t = D?.get(l);
                        if (null == t) continue;
                        a.push(
                            (0, i.jsx)(
                                G,
                                {
                                    application: t.application,
                                    rendererProps: {
                                        locale: S,
                                        surfaceConfigs: t.surfaceConfigs,
                                        isLoading: !1,
                                        hasIdentity: !0,
                                        resolutionContext: {
                                            data: t.data,
                                            applicationAssets: t.assets,
                                            getApplicationAssetUrl: (e) =>
                                                (0, o.Q)(l.applicationId, e, e.metadata.width),
                                            localizedStrings: [],
                                        },
                                    },
                                    onClick: j,
                                    ...e,
                                },
                                `application-widget-${l.applicationId}`,
                            ),
                        );
                    } else
                        l instanceof E.Yy &&
                            !n &&
                            (a.push((0, i.jsx)(L, { widgets: t, onClick: j, ...e }, "collection-breadcrumb")),
                            (n = !0));
                return a;
            },
            [t, j, D, S],
        );
    return 0 === t.length ? null : (0, i.jsx)(A.A, { renderCards: O, heading: y.intl.string(y.t.Y55Tua), onExpand: R });
}
