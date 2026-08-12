"use strict";
n.d(t, { A: () => ee }), n(321073);
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
    T = n(210598),
    m = n(80330),
    g = n(503698),
    S = n.n(g),
    N = n(794248),
    C = n(331322),
    O = n(834730),
    R = n(890856),
    L = n(619517),
    D = n(946356),
    y = n(259853);
function v(e) {
    let { applicationName: t, applicationIcon: n } = e;
    return (0, i.jsxs)(C.B, {
        direction: "horizontal",
        gap: 4,
        children: [
            null != n
                ? (0, i.jsx)(L.Ay, { width: 16, height: 16, src: n, className: y.In })
                : (0, i.jsx)("div", { className: y.Fi }),
            (0, i.jsx)(O.E, { variant: "text-xs/medium", children: t }),
        ],
    });
}
function b(e) {
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
        : (0, i.jsx)(R.s, {
              onClick: () => {
                  o({ action: "PRESS_APPLICATION_WIDGET_PREVIEW", applicationId: c }), l?.();
              },
              "aria-label": t.name,
              children: (0, i.jsx)(D.A.Overlay, {
                  className: S()(y.kL, a),
                  children: (0, i.jsx)(N.kH, {
                      ...n,
                      surface: s.m.MINI_PROFILE,
                      surfaceConfig: d,
                      header: (0, i.jsx)(v, { applicationName: t.name, applicationIcon: t.getIconURL(16) }),
                  }),
              }),
          });
}
var M = n(403581),
    P = n(661531),
    U = n(297264),
    w = n(939249),
    G = n(448766),
    x = n(326009),
    k = n(375708),
    F = n(995919),
    V = n(943919);
function B(e) {
    let { header: t } = e;
    return (0, i.jsxs)("div", {
        className: V.wx,
        children: [
            (0, i.jsx)(M.t, { className: V.nr, size: "xxs", color: P.A.colors.ICON_DEFAULT }),
            (0, i.jsx)(O.E, { className: V.TK, variant: "text-xs/medium", lineClamp: 1, children: t }),
        ],
    });
}
function H(e) {
    let { header: t, section: n, userId: r } = e;
    return (0, i.jsxs)("div", {
        className: V.PY,
        children: [
            (0, i.jsxs)("div", {
                className: V.rD,
                children: [
                    (0, i.jsx)(B, { header: t }),
                    (0, i.jsx)(U.D, {
                        className: S()(V.CH, F.Y),
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: (0, G.j)(n.title),
                    }),
                    (0, i.jsx)(O.E, {
                        className: V.G6,
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        children: k.intl.string(k.t["8L/eYB"]),
                    }),
                ],
            }),
            null != n.image ? (0, i.jsx)(x.N, { className: V.N4, userId: r, image: n.image }) : null,
        ],
    });
}
function j(e) {
    let { header: t, section: n, userId: r } = e,
        a = n.fields.map((e) => e.image).filter(h.Vq);
    return 0 === a.length
        ? (0, i.jsx)(W, { header: t })
        : (0, i.jsxs)("div", {
              className: V.Zz,
              children: [
                  (0, i.jsx)(B, { header: t }),
                  (0, i.jsx)("div", {
                      className: V.SS,
                      children: a.map((e, t) => (0, i.jsx)(x.N, { className: V.Bi, userId: r, image: e }, t)),
                  }),
              ],
          });
}
function W(e) {
    let { header: t } = e;
    return (0, i.jsxs)("div", {
        className: V.$R,
        children: [
            (0, i.jsx)(B, { header: t }),
            (0, i.jsx)(O.E, {
                className: V.VC,
                variant: "text-xs/medium",
                color: "text-subtle",
                children: k.intl.string(k.t["8L/eYB"]),
            }),
        ],
    });
}
function Y(e) {
    let { userId: t, widget: n } = e,
        r = n.sections[0];
    return null == r
        ? (0, i.jsx)(W, { header: n.header })
        : "cover" === r.type && ("" !== r.title || null != r.image)
          ? (0, i.jsx)(H, { header: n.header, section: r, userId: t })
          : "fields" === r.type
            ? (0, i.jsx)(j, { header: n.header, section: r, userId: t })
            : (0, i.jsx)(W, { header: n.header });
}
function K(e) {
    let { className: t, onClick: n, userId: a, widget: s } = e,
        { trackUserProfileAction: l } = (0, I.NJ)(),
        o = r.useRef(!1);
    return (
        r.useEffect(() => {
            o.current || (l({ action: "VIEW_PERSONAL_WIDGET_PREVIEW" }), (o.current = !0));
        }, [l, s.id]),
        (0, i.jsx)(w.D, {
            onClick: function () {
                l({ action: "PRESS_PERSONAL_WIDGET_PREVIEW" }), n?.();
            },
            "aria-label": k.intl.string(k.t["2sdfeb"]),
            children: (0, i.jsx)(D.A.Overlay, {
                className: S()(V.kL, t),
                children: (0, i.jsx)(Y, { userId: a, widget: s }),
            }),
        })
    );
}
var $ = n(321108),
    z = n(939496),
    q = n(996988),
    Z = n(107562);
function X(e) {
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
                                ? e.games.map((e) => e.gameId)
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
        { themeType: u } = (0, z.E)(),
        E = u === q.d.SIDEBAR,
        A = (0, r.useRef)(!1),
        T = (0, $.A)(c),
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
        (0, i.jsx)(w.D, {
            "aria-label": k.intl.string(k.t.JjiwFx),
            onClick: () => {
                o({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), s();
            },
            className: Z.QF,
            children: (0, i.jsxs)(D.A.Overlay, {
                className: S()(Z.WH, l),
                children: [
                    (0, i.jsx)(O.E, {
                        variant: E ? "text-sm/medium" : "text-xs/medium",
                        children: k.intl.string(k.t.JjiwFx),
                    }),
                    (0, i.jsx)("div", {
                        className: Z.Pt,
                        children: m.map((e, t) =>
                            (0, i.jsx)(
                                Q,
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
function Q(e) {
    let { iconUrl: t, name: n, displayCount: r, gameCount: a } = e;
    return (0, i.jsxs)("div", {
        className: Z.Kk,
        children: [
            (0, i.jsx)("img", { className: S()({ [Z.um]: r }), src: t, alt: n }),
            r &&
                (0, i.jsx)("div", {
                    className: Z.pp,
                    children: (0, i.jsxs)(O.E, { variant: "text-xs/medium", className: Z.gq, children: ["+", a] }),
                }),
        ],
    });
}
var J = n(518477);
function ee(e) {
    let { user: t, widgets: n = [], ...g } = e,
        { openModal: S, onExpand: N } = (function (e) {
            let { onOpenUserProfileModal: t } = e,
                { analyticsLocations: n } = (0, o.Ay)(),
                { trackUserProfileAction: i } = (0, I.NJ)(),
                a = r.useCallback(() => {
                    t?.({ tabSection: J.RP.WIDGETS });
                }, [t]),
                s = r.useCallback(() => {
                    i({ action: "PRESS_SHOW_MORE_WIDGETS", analyticsLocations: n }), a();
                }, [i, n, a]);
            return { openModal: a, onExpand: s };
        })({ user: t, widgets: n, ...g }),
        C = r.useMemo(() => n.filter((e) => e instanceof f.R), [n]),
        O = r.useMemo(() => C.map((e) => e.applicationId), [C]),
        R = (0, _.A)(O),
        L = r.useMemo(() => new Map(R.filter(h.Vq).map((e) => [e.id, e])), [R]),
        D = (0, u.A)(O),
        y = r.useMemo(() => new Map(D.map((e) => [e.application_id, e])), [D]),
        { data: v } = (0, E.P)(t.id),
        M = r.useMemo(() => new Map(v?.map((e) => [e.application_id, e])), [v]),
        P = (0, l.bG)([A.default], () => A.default.locale),
        U = (0, l.cf)([c.A], () => Object.fromEntries(C.map((e) => [e.applicationId, c.A.getAssets(e.applicationId)]))),
        w = r.useMemo(
            () =>
                0 === L.size || 0 === y.size || 0 === M.size
                    ? null
                    : new Map(
                          C.map((e) => {
                              let t = L.get(e.applicationId),
                                  n = y.get(e.applicationId),
                                  i = M.get(e.applicationId);
                              if (null == t || null == n || null == i) return null;
                              let r = n.surfaces;
                              if (null == r || null == r[s.m.MINI_PROFILE]) return null;
                              let l = (0, a.VG)(i.profile),
                                  o = Object.values(U[e.applicationId] ?? {}).filter(h.Vq);
                              return [e, { surfaceConfigs: n.surfaces, data: l, application: t, assets: o }];
                          }).filter(h.Vq),
                      ),
            [C, L, y, M, U],
        ),
        G = r.useCallback(
            (e) => {
                let r = [],
                    a = !1;
                for (let s of n)
                    if (s instanceof f.R) {
                        let t = w?.get(s);
                        if (null == t) continue;
                        r.push(
                            (0, i.jsx)(
                                b,
                                {
                                    application: t.application,
                                    rendererProps: {
                                        locale: P,
                                        surfaceConfigs: t.surfaceConfigs,
                                        isLoading: !1,
                                        hasIdentity: !0,
                                        resolutionContext: {
                                            data: t.data,
                                            applicationAssets: t.assets,
                                            getApplicationAssetUrl: (e) =>
                                                (0, d.Q)(s.applicationId, e, e.metadata.width),
                                            localizedStrings: [],
                                        },
                                    },
                                    onClick: S,
                                    ...e,
                                },
                                `application-widget-${s.applicationId}`,
                            ),
                        );
                    } else
                        s instanceof p.Yy && !a
                            ? (r.push((0, i.jsx)(X, { widgets: n, onClick: S, ...e }, "collection-breadcrumb")),
                              (a = !0))
                            : s instanceof T.Tu &&
                              r.push(
                                  (0, i.jsx)(
                                      K,
                                      { userId: t.id, widget: s, onClick: S, ...e },
                                      s.id ?? "personal-widget",
                                  ),
                              );
                return r;
            },
            [n, S, w, P, t.id],
        );
    return 0 === n.length ? null : (0, i.jsx)(m.A, { renderCards: G, heading: k.intl.string(k.t.Y55Tua), onExpand: N });
}
