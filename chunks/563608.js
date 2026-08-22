i.d(a, { A: () => ee }), i(321073);
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
    A = i.n(N),
    C = i(794248),
    R = i(331322),
    _ = i(834730),
    v = i(890856),
    P = i(619517),
    M = i(946356),
    b = i(981006);
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
                  className: A()(b.kL, s),
                  children: (0, t.jsx)(C.kH, {
                      ...i,
                      surface: l.m.MINI_PROFILE,
                      surfaceConfig: d,
                      header: (0, t.jsx)(S, { applicationName: a.name, applicationIcon: a.getIconURL(16) }),
                  }),
              }),
          });
}
var w = i(403581),
    D = i(661531),
    W = i(297264),
    O = i(939249),
    L = i(448766),
    V = i(326009),
    G = i(375708),
    T = i(892572),
    y = i(564118);
function B(e) {
    let { header: a } = e;
    return (0, t.jsxs)("div", {
        className: y.wx,
        children: [
            (0, t.jsx)(w.t, { className: y.nr, size: "xxs", color: D.A.colors.ICON_DEFAULT }),
            (0, t.jsx)(_.E, { className: y.TK, variant: "text-xs/medium", lineClamp: 1, children: a }),
        ],
    });
}
function F(e) {
    let { header: a, section: i, userId: n } = e;
    return (0, t.jsxs)("div", {
        className: y.PY,
        children: [
            (0, t.jsxs)("div", {
                className: y.rD,
                children: [
                    (0, t.jsx)(B, { header: a }),
                    (0, t.jsx)(W.D, {
                        className: A()(y.CH, T.YD),
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: (0, L.j)(i.title),
                    }),
                    (0, t.jsx)(_.E, {
                        className: y.G6,
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        children: G.intl.string(G.t["8L/eYB"]),
                    }),
                ],
            }),
            null != i.image ? (0, t.jsx)(V.N, { className: y.N4, userId: n, image: i.image }) : null,
        ],
    });
}
function q(e) {
    let { header: a, section: i, userId: n } = e,
        s = i.fields.map((e) => e.image).filter(x.Vq);
    return 0 === s.length
        ? (0, t.jsx)(z, { header: a })
        : (0, t.jsxs)("div", {
              className: y.Zz,
              children: [
                  (0, t.jsx)(B, { header: a }),
                  (0, t.jsx)("div", {
                      className: y.SS,
                      children: s.map((e, a) =>
                          (0, t.jsx)(V.N, { className: y.Bi, userId: n, image: e, canAnimate: !1 }, a),
                      ),
                  }),
              ],
          });
}
function z(e) {
    let { header: a } = e;
    return (0, t.jsxs)("div", {
        className: y.$R,
        children: [
            (0, t.jsx)(B, { header: a }),
            (0, t.jsx)(_.E, {
                className: y.VC,
                variant: "text-xs/medium",
                color: "text-subtle",
                children: G.intl.string(G.t["8L/eYB"]),
            }),
        ],
    });
}
function J(e) {
    let { userId: a, widget: i } = e,
        n = i.sections[0];
    return null == n
        ? (0, t.jsx)(z, { header: i.header })
        : "cover" === n.type && ("" !== n.title || null != n.image)
          ? (0, t.jsx)(F, { header: i.header, section: n, userId: a })
          : "fields" === n.type
            ? (0, t.jsx)(q, { header: i.header, section: n, userId: a })
            : (0, t.jsx)(z, { header: i.header });
}
function U(e) {
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
            "aria-label": G.intl.string(G.t["2sdfeb"]),
            children: (0, t.jsx)(M.A.Overlay, {
                className: A()(y.kL, a),
                children: (0, t.jsx)(J, { userId: s, widget: l }),
            }),
        })
    );
}
var Y = i(321108),
    H = i(939496),
    K = i(996988),
    Q = i(580065);
function $(e) {
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
        { themeType: u } = (0, H.E)(),
        p = u === K.d.SIDEBAR,
        f = (0, n.useRef)(!1),
        j = (0, Y.A)(o),
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
            "aria-label": G.intl.string(G.t.JjiwFx),
            onClick: () => {
                c({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), l();
            },
            className: Q.QF,
            children: (0, t.jsxs)(M.A.Overlay, {
                className: A()(Q.WH, r),
                children: [
                    (0, t.jsx)(_.E, {
                        variant: p ? "text-sm/medium" : "text-xs/medium",
                        children: G.intl.string(G.t.JjiwFx),
                    }),
                    (0, t.jsx)("div", {
                        className: Q.Pt,
                        children: E.map((e, a) =>
                            (0, t.jsx)(
                                Z,
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
function Z(e) {
    let { iconUrl: a, name: i, displayCount: n, gameCount: s } = e;
    return (0, t.jsxs)("div", {
        className: Q.Kk,
        children: [
            (0, t.jsx)("img", { className: A()({ [Q.um]: n }), src: a, alt: i }),
            n &&
                (0, t.jsx)("div", {
                    className: Q.pp,
                    children: (0, t.jsxs)(_.E, { variant: "text-xs/medium", className: Q.gq, children: ["+", s] }),
                }),
        ],
    });
}
var X = i(518477);
function ee(e) {
    let { user: a, widgets: i = [], ...N } = e,
        { openModal: A, onExpand: C } = (function (e) {
            let { onOpenUserProfileModal: a } = e,
                { analyticsLocations: i } = (0, c.Ay)(),
                { trackUserProfileAction: t } = (0, h.NJ)(),
                s = n.useCallback(() => {
                    a?.({ tabSection: X.RP.WIDGETS });
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
        D = (0, r.bG)([f.default], () => f.default.locale),
        W = (0, r.cf)([o.A], () => Object.fromEntries(R.map((e) => [e.applicationId, o.A.getAssets(e.applicationId)]))),
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
                                  c = Object.values(W[e.applicationId] ?? {}).filter(x.Vq);
                              return [e, { surfaceConfigs: i.surfaces, data: r, application: a, assets: c }];
                          }).filter(x.Vq),
                      ),
            [R, P, b, w, W],
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
                                        locale: D,
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
                                    onClick: A,
                                    ...e,
                                },
                                `application-widget-${l.applicationId}`,
                            ),
                        );
                    } else
                        l instanceof g.Yy && !s
                            ? (n.push((0, t.jsx)($, { widgets: i, onClick: A, ...e }, "collection-breadcrumb")),
                              (s = !0))
                            : l instanceof j.Tu &&
                              n.push(
                                  (0, t.jsx)(
                                      U,
                                      { userId: a.id, widget: l, onClick: A, ...e },
                                      l.id ?? "personal-widget",
                                  ),
                              );
                return n;
            },
            [i, A, O, D, a.id],
        );
    return 0 === i.length ? null : (0, t.jsx)(E.A, { renderCards: L, heading: G.intl.string(G.t.Y55Tua), onExpand: C });
}
