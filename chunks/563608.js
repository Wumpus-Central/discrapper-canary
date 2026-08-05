i.d(a, { A: () => Z }), i(321073);
var t = i(477900),
    n = i(582128),
    s = i(176999),
    l = i(598748),
    r = i(17928),
    c = i(688810),
    d = i(549699),
    o = i(29496),
    u = i(352003),
    m = i(429913),
    p = i(201718),
    f = i(773669),
    x = i(403362),
    h = i(183555),
    I = i(633075),
    g = i(289173),
    j = i(210598),
    E = i(80330),
    N = i(503698),
    C = i.n(N),
    A = i(794248),
    R = i(331322),
    _ = i(834730),
    v = i(890856),
    P = i(619517),
    M = i(946356),
    b = i(259853);
function S(e) {
    let { applicationName: a, applicationIcon: i } = e;
    return (0, t.jsxs)(R.B, {
        direction: "horizontal",
        gap: 4,
        children: [
            null != i
                ? (0, t.jsx)(P.Ay, { width: 16, height: 16, src: i, className: b.In })
                : (0, t.jsx)("div", { className: b.Fi }),
            (0, t.jsx)(_.E, { variant: "text-xs/medium", children: a }),
        ],
    });
}
function k(e) {
    let { application: a, rendererProps: i, className: s, onClick: r } = e,
        { trackUserProfileAction: c } = (0, h.NJ)(),
        d = i.surfaceConfigs[l.m.MINI_PROFILE],
        o = a.id;
    return (!(function (e) {
        let { trackUserProfileAction: a } = (0, h.NJ)(),
            i = n.useRef(!1);
        n.useEffect(() => {
            i.current || (a({ action: "VIEW_APPLICATION_WIDGET_PREVIEW", applicationId: e }), (i.current = !0));
        }, [a, e]);
    })(o),
    null == d)
        ? null
        : (0, t.jsx)(v.s, {
              onClick: () => {
                  c({ action: "PRESS_APPLICATION_WIDGET_PREVIEW", applicationId: o }), r?.();
              },
              "aria-label": a.name,
              children: (0, t.jsx)(M.A.Overlay, {
                  className: C()(b.kL, s),
                  children: (0, t.jsx)(A.kH, {
                      ...i,
                      surface: l.m.MINI_PROFILE,
                      surfaceConfig: d,
                      header: (0, t.jsx)(S, { applicationName: a.name, applicationIcon: a.getIconURL(16) }),
                  }),
              }),
          });
}
var w = i(403581),
    W = i(661531),
    D = i(297264),
    O = i(939249),
    L = i(326009),
    V = i(375708),
    G = i(943919);
function T(e) {
    let { header: a } = e;
    return (0, t.jsxs)("div", {
        className: G.wx,
        children: [
            (0, t.jsx)(w.t, { className: G.nr, size: "xxs", color: W.A.colors.ICON_DEFAULT }),
            (0, t.jsx)(_.E, { className: G.TK, variant: "text-xs/medium", lineClamp: 1, children: a }),
        ],
    });
}
function y(e) {
    let { header: a, section: i, userId: n } = e;
    return (0, t.jsxs)("div", {
        className: G.PY,
        children: [
            (0, t.jsxs)("div", {
                className: G.rD,
                children: [
                    (0, t.jsx)(T, { header: a }),
                    (0, t.jsx)(D.D, {
                        className: G.CH,
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: i.title,
                    }),
                    (0, t.jsx)(_.E, {
                        className: G.G6,
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        children: V.intl.string(V.t["8L/eYB"]),
                    }),
                ],
            }),
            null != i.image ? (0, t.jsx)(L.N, { className: G.N4, userId: n, image: i.image }) : null,
        ],
    });
}
function B(e) {
    let { header: a, section: i, userId: n } = e,
        s = i.fields.map((e) => e.image).filter(x.Vq);
    return 0 === s.length
        ? (0, t.jsx)(F, { header: a })
        : (0, t.jsxs)("div", {
              className: G.Zz,
              children: [
                  (0, t.jsx)(T, { header: a }),
                  (0, t.jsx)("div", {
                      className: G.SS,
                      children: s.map((e, a) => (0, t.jsx)(L.N, { className: G.Bi, userId: n, image: e }, a)),
                  }),
              ],
          });
}
function F(e) {
    let { header: a } = e;
    return (0, t.jsxs)("div", {
        className: G.$R,
        children: [
            (0, t.jsx)(T, { header: a }),
            (0, t.jsx)(_.E, {
                className: G.VC,
                variant: "text-xs/medium",
                color: "text-subtle",
                children: V.intl.string(V.t["8L/eYB"]),
            }),
        ],
    });
}
function q(e) {
    let { userId: a, widget: i } = e,
        n = i.sections[0];
    return null == n
        ? (0, t.jsx)(F, { header: i.header })
        : "cover" === n.type && ("" !== n.title || null != n.image)
          ? (0, t.jsx)(y, { header: i.header, section: n, userId: a })
          : "fields" === n.type
            ? (0, t.jsx)(B, { header: i.header, section: n, userId: a })
            : (0, t.jsx)(F, { header: i.header });
}
function z(e) {
    let { className: a, onClick: i, userId: s, widget: l } = e,
        { trackUserProfileAction: r } = (0, h.NJ)(),
        c = n.useRef(!1);
    return (
        n.useEffect(() => {
            c.current || (r({ action: "VIEW_PERSONAL_WIDGET_PREVIEW" }), (c.current = !0));
        }, [r, l.id]),
        (0, t.jsx)(O.D, {
            onClick: function () {
                r({ action: "PRESS_PERSONAL_WIDGET_PREVIEW" }), i?.();
            },
            "aria-label": V.intl.string(V.t["2sdfeb"]),
            children: (0, t.jsx)(M.A.Overlay, {
                className: C()(G.kL, a),
                children: (0, t.jsx)(q, { userId: s, widget: l }),
            }),
        })
    );
}
var J = i(321108),
    U = i(939496),
    Y = i(996988),
    H = i(107562);
function K(e) {
    var a;
    let i,
        { widgets: s = [], onClick: l, className: r } = e,
        { trackUserProfileAction: c } = (0, h.NJ)(),
        d =
            ((a = s.filter((e) => e instanceof I.R)),
            (i = (0, m.A)(a.map((e) => e.applicationId))),
            (0, n.useMemo)(
                () =>
                    Object.fromEntries(
                        i
                            .filter(x.Vq)
                            .map((e) => [e.id, e.getCanonicalGameId()])
                            .filter((e) => {
                                let [a, i] = e;
                                return null != i;
                            }),
                    ),
                [i],
            )),
        o = (0, n.useMemo)(
            () => [
                ...new Set(
                    s
                        .map((e) =>
                            e instanceof g.Yy
                                ? e.games.map((e) => e.gameId)
                                : e instanceof I.R
                                  ? d[e.applicationId]
                                  : void 0,
                        )
                        .filter(x.Vq)
                        .flat(),
                ),
            ],
            [s, d],
        ),
        { themeType: u } = (0, U.E)(),
        p = u === Y.d.SIDEBAR,
        f = (0, n.useRef)(!1),
        j = (0, J.A)(o),
        E = (0, n.useMemo)(
            () =>
                j
                    .map((e) => ({ image: e.getIconURL(48) ?? "", name: e.name }))
                    .filter((e) => "" !== e.image)
                    .slice(0, 4),
            [j],
        );
    return (
        (0, n.useEffect)(() => {
            0 === E.length || f.current || (c({ action: "VIEW_GAME_WIDGET_BREADCRUMB" }), (f.current = !0));
        }, [c, E.length]),
        (0, t.jsx)(O.D, {
            "aria-label": V.intl.string(V.t.JjiwFx),
            onClick: () => {
                c({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), l();
            },
            className: H.QF,
            children: (0, t.jsxs)(M.A.Overlay, {
                className: C()(H.WH, r),
                children: [
                    (0, t.jsx)(_.E, {
                        variant: p ? "text-sm/medium" : "text-xs/medium",
                        children: V.intl.string(V.t.JjiwFx),
                    }),
                    (0, t.jsx)("div", {
                        className: H.Pt,
                        children: E.map((e, a) =>
                            (0, t.jsx)(
                                Q,
                                {
                                    iconUrl: e.image,
                                    name: e.name,
                                    displayCount: a === E.length - 1 && o.length > 4,
                                    gameCount: o.length - E.length,
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
function Q(e) {
    let { iconUrl: a, name: i, displayCount: n, gameCount: s } = e;
    return (0, t.jsxs)("div", {
        className: H.Kk,
        children: [
            (0, t.jsx)("img", { className: C()({ [H.um]: n }), src: a, alt: i }),
            n &&
                (0, t.jsx)("div", {
                    className: H.pp,
                    children: (0, t.jsxs)(_.E, { variant: "text-xs/medium", className: H.gq, children: ["+", s] }),
                }),
        ],
    });
}
var $ = i(518477);
function Z(e) {
    let { user: a, widgets: i = [], ...N } = e,
        { openModal: C, onExpand: A } = (function (e) {
            let { onOpenUserProfileModal: a } = e,
                { analyticsLocations: i } = (0, c.Ay)(),
                { trackUserProfileAction: t } = (0, h.NJ)(),
                s = n.useCallback(() => {
                    a?.({ tabSection: $.RP.WIDGETS });
                }, [a]),
                l = n.useCallback(() => {
                    t({ action: "PRESS_SHOW_MORE_WIDGETS", analyticsLocations: i }), s();
                }, [t, i, s]);
            return { openModal: s, onExpand: l };
        })({ user: a, widgets: i, ...N }),
        R = n.useMemo(() => i.filter((e) => e instanceof I.R), [i]),
        _ = n.useMemo(() => R.map((e) => e.applicationId), [R]),
        v = (0, m.A)(_),
        P = n.useMemo(() => new Map(v.filter(x.Vq).map((e) => [e.id, e])), [v]),
        M = (0, u.A)(_),
        b = n.useMemo(() => new Map(M.map((e) => [e.application_id, e])), [M]),
        { data: S } = (0, p.P)(a.id),
        w = n.useMemo(() => new Map(S?.map((e) => [e.application_id, e])), [S]),
        W = (0, r.bG)([f.default], () => f.default.locale),
        D = (0, r.cf)([o.A], () => Object.fromEntries(R.map((e) => [e.applicationId, o.A.getAssets(e.applicationId)]))),
        O = n.useMemo(
            () =>
                0 === P.size || 0 === b.size || 0 === w.size
                    ? null
                    : new Map(
                          R.map((e) => {
                              let a = P.get(e.applicationId),
                                  i = b.get(e.applicationId),
                                  t = w.get(e.applicationId);
                              if (null == a || null == i || null == t) return null;
                              let n = i.surfaces;
                              if (null == n || null == n[l.m.MINI_PROFILE]) return null;
                              let r = (0, s.VG)(t.profile),
                                  c = Object.values(D[e.applicationId] ?? {}).filter(x.Vq);
                              return [e, { surfaceConfigs: i.surfaces, data: r, application: a, assets: c }];
                          }).filter(x.Vq),
                      ),
            [R, P, b, w, D],
        ),
        L = n.useCallback(
            (e) => {
                let n = [],
                    s = !1;
                for (let l of i)
                    if (l instanceof I.R) {
                        let a = O?.get(l);
                        if (null == a) continue;
                        n.push(
                            (0, t.jsx)(
                                k,
                                {
                                    application: a.application,
                                    rendererProps: {
                                        locale: W,
                                        surfaceConfigs: a.surfaceConfigs,
                                        isLoading: !1,
                                        hasIdentity: !0,
                                        resolutionContext: {
                                            data: a.data,
                                            applicationAssets: a.assets,
                                            getApplicationAssetUrl: (e) =>
                                                (0, d.Q)(l.applicationId, e, e.metadata.width),
                                            localizedStrings: [],
                                        },
                                    },
                                    onClick: C,
                                    ...e,
                                },
                                `application-widget-${l.applicationId}`,
                            ),
                        );
                    } else
                        l instanceof g.Yy && !s
                            ? (n.push((0, t.jsx)(K, { widgets: i, onClick: C, ...e }, "collection-breadcrumb")),
                              (s = !0))
                            : l instanceof j.Tu &&
                              n.push(
                                  (0, t.jsx)(
                                      z,
                                      { userId: a.id, widget: l, onClick: C, ...e },
                                      l.id ?? "personal-widget",
                                  ),
                              );
                return n;
            },
            [i, C, O, W, a.id],
        );
    return 0 === i.length ? null : (0, t.jsx)(E.A, { renderCards: L, heading: V.intl.string(V.t.Y55Tua), onExpand: A });
}
