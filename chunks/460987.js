i.d(a, { A: () => Y }), i(321073);
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
    N = i(139730),
    A = i(503698),
    C = i.n(A),
    R = i(403581),
    _ = i(661531),
    v = i(834730),
    P = i(297264),
    M = i(939249),
    b = i(448766),
    w = i(946356),
    S = i(326009),
    k = i(375708),
    O = i(892572),
    D = i(564118);
function V(e) {
    let { header: a } = e;
    return (0, t.jsxs)("div", {
        className: D.wx,
        children: [
            (0, t.jsx)(R.t, { className: D.nr, size: "xxs", color: _.A.colors.ICON_DEFAULT }),
            (0, t.jsx)(v.E, { className: D.TK, variant: "text-xs/medium", lineClamp: 1, children: a }),
        ],
    });
}
function W(e) {
    let { header: a, section: i, userId: n } = e,
        s = "" !== i.title;
    return (0, t.jsxs)("div", {
        className: D.PY,
        children: [
            (0, t.jsxs)("div", {
                className: D.rD,
                children: [
                    (0, t.jsx)(V, { header: a }),
                    (0, t.jsxs)("div", {
                        className: D.I_,
                        children: [
                            s
                                ? (0, t.jsx)(P.D, {
                                      className: C()(D.CH, O.YD),
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, b.j)(i.title),
                                  })
                                : null,
                            (0, t.jsx)(v.E, {
                                className: D.G6,
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: k.intl.string(k.t.KOUwKV),
                            }),
                        ],
                    }),
                ],
            }),
            null != i.image
                ? (0, t.jsx)(S.N, { className: C()(D.N4, { [D.kF]: !s }), userId: n, image: i.image })
                : null,
        ],
    });
}
function T(e) {
    let { header: a, section: i, userId: n } = e,
        s = i.fields.map((e) => e.image).filter(x.Vq);
    return 0 === s.length
        ? (0, t.jsx)(G, { header: a })
        : (0, t.jsxs)("div", {
              className: D.Zz,
              children: [
                  (0, t.jsx)(V, { header: a }),
                  (0, t.jsx)("div", {
                      className: D.SS,
                      children: s.map((e, a) =>
                          (0, t.jsx)(S.N, { className: D.Bi, userId: n, image: e, canAnimate: !1 }, a),
                      ),
                  }),
              ],
          });
}
function G(e) {
    let { header: a } = e;
    return (0, t.jsxs)("div", {
        className: D.$R,
        children: [
            (0, t.jsx)(V, { header: a }),
            (0, t.jsx)(v.E, {
                className: D.VC,
                variant: "text-xs/medium",
                color: "text-subtle",
                children: k.intl.string(k.t.KOUwKV),
            }),
        ],
    });
}
function L(e) {
    let { userId: a, widget: i } = e,
        n = i.sections[0];
    return null == n
        ? (0, t.jsx)(G, { header: i.header })
        : "cover" === n.type && ("" !== n.title || null != n.image)
          ? (0, t.jsx)(W, { header: i.header, section: n, userId: a })
          : "fields" === n.type
            ? (0, t.jsx)(T, { header: i.header, section: n, userId: a })
            : (0, t.jsx)(G, { header: i.header });
}
function y(e) {
    let { className: a, onClick: i, userId: s, widget: l } = e,
        { trackUserProfileAction: r } = (0, h.NJ)(),
        c = n.useRef(!1);
    return (
        n.useEffect(() => {
            c.current || (r({ action: "VIEW_PERSONAL_WIDGET_PREVIEW" }), (c.current = !0));
        }, [r, l.id]),
        (0, t.jsx)(M.D, {
            onClick: function () {
                r({ action: "PRESS_PERSONAL_WIDGET_PREVIEW" }), i?.();
            },
            "aria-label": k.intl.string(k.t["2sdfeb"]),
            children: (0, t.jsx)(w.A.Overlay, {
                className: C()(D.kL, a),
                children: (0, t.jsx)(L, { userId: s, widget: l }),
            }),
        })
    );
}
var F = i(321108),
    U = i(939496),
    q = i(996988),
    z = i(580065);
function B(e) {
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
        p = u === q.d.SIDEBAR,
        f = (0, n.useRef)(!1),
        j = (0, F.A)(o),
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
        (0, t.jsx)(M.D, {
            "aria-label": k.intl.string(k.t.JjiwFx),
            onClick: () => {
                c({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), l();
            },
            className: z.QF,
            children: (0, t.jsxs)(w.A.Overlay, {
                className: C()(z.WH, r),
                children: [
                    (0, t.jsx)(v.E, {
                        variant: p ? "text-sm/medium" : "text-xs/medium",
                        children: k.intl.string(k.t.JjiwFx),
                    }),
                    (0, t.jsx)("div", {
                        className: z.Pt,
                        children: E.map((e, a) =>
                            (0, t.jsx)(
                                J,
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
function J(e) {
    let { iconUrl: a, name: i, displayCount: n, gameCount: s } = e;
    return (0, t.jsxs)("div", {
        className: z.Kk,
        children: [
            (0, t.jsx)("img", { className: C()({ [z.um]: n }), src: a, alt: i }),
            n &&
                (0, t.jsx)("div", {
                    className: z.pp,
                    children: (0, t.jsxs)(v.E, { variant: "text-xs/medium", className: z.gq, children: ["+", s] }),
                }),
        ],
    });
}
var K = i(518477);
function Y(e) {
    let { user: a, widgets: i = [], ...A } = e,
        { openModal: C, onExpand: R } = (function (e) {
            let { onOpenUserProfileModal: a } = e,
                { analyticsLocations: i } = (0, c.Ay)(),
                { trackUserProfileAction: t } = (0, h.NJ)(),
                s = n.useCallback(() => {
                    a?.({ tabSection: K.RP.WIDGETS });
                }, [a]),
                l = n.useCallback(() => {
                    t({ action: "PRESS_SHOW_MORE_WIDGETS", analyticsLocations: i }), s();
                }, [t, i, s]);
            return { openModal: s, onExpand: l };
        })({ user: a, widgets: i, ...A }),
        _ = n.useMemo(() => i.filter((e) => e instanceof I.R), [i]),
        v = n.useMemo(() => _.map((e) => e.applicationId), [_]),
        P = (0, m.A)(v),
        M = n.useMemo(() => new Map(P.filter(x.Vq).map((e) => [e.id, e])), [P]),
        b = (0, u.A)(v),
        w = n.useMemo(() => new Map(b.map((e) => [e.application_id, e])), [b]),
        { data: S } = (0, p.P)(a.id),
        O = n.useMemo(() => new Map(S?.map((e) => [e.application_id, e])), [S]),
        D = (0, r.bG)([f.default], () => f.default.locale),
        V = (0, r.cf)([o.A], () => Object.fromEntries(_.map((e) => [e.applicationId, o.A.getAssets(e.applicationId)]))),
        W = n.useMemo(
            () =>
                0 === M.size || 0 === w.size || 0 === O.size
                    ? null
                    : new Map(
                          _.map((e) => {
                              let a = M.get(e.applicationId),
                                  i = w.get(e.applicationId),
                                  t = O.get(e.applicationId);
                              if (null == a || null == i || null == t) return null;
                              let n = i.surfaces;
                              if (null == n || null == n[l.m.MINI_PROFILE]) return null;
                              let r = (0, s.VG)(t.profile),
                                  c = Object.values(V[e.applicationId] ?? {}).filter(x.Vq);
                              return [e, { surfaceConfigs: i.surfaces, data: r, application: a, assets: c }];
                          }).filter(x.Vq),
                      ),
            [_, M, w, O, V],
        ),
        T = n.useCallback(
            (e) => {
                let n = [],
                    s = !1;
                for (let l of i)
                    if (l instanceof I.R) {
                        let a = W?.get(l);
                        if (null == a) continue;
                        n.push(
                            (0, t.jsx)(
                                N.A,
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
                                    onClick: C,
                                    ...e,
                                },
                                `application-widget-${l.applicationId}`,
                            ),
                        );
                    } else
                        l instanceof g.Yy && !s
                            ? (n.push((0, t.jsx)(B, { widgets: i, onClick: C, ...e }, "collection-breadcrumb")),
                              (s = !0))
                            : l instanceof j.Tu &&
                              n.push(
                                  (0, t.jsx)(
                                      y,
                                      { userId: a.id, widget: l, onClick: C, ...e },
                                      l.id ?? "personal-widget",
                                  ),
                              );
                return n;
            },
            [i, C, W, D, a.id],
        );
    return 0 === i.length ? null : (0, t.jsx)(E.A, { renderCards: T, heading: k.intl.string(k.t.Y55Tua), onExpand: R });
}
