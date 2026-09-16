(i.d(a, { A: () => ed }), i(321073));
var t = i(477900),
    l = i(582128),
    n = i(176999),
    s = i(598748),
    r = i(540185),
    c = i(17928),
    o = i(688810),
    d = i(549699),
    u = i(29496),
    m = i(352003),
    x = i(429913),
    f = i(201718),
    p = i(773669),
    h = i(403362),
    g = i(183555),
    j = i(633075),
    E = i(646976),
    I = i(289173),
    N = i(210598);
let v = (0, i(945810).mj)({
    name: "2026-07-clips-on-profile-viewer",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var C = i(80330),
    P = i(139730),
    R = i(503698),
    A = i.n(R),
    _ = i(3026),
    L = i(297264),
    b = i(939249),
    S = i(834730),
    k = i(123292),
    w = i(946356),
    y = i(782134),
    T = i(314531),
    M = i(798108),
    V = i(558285),
    W = i(608857),
    D = i(375708),
    G = i(599672);
function O(e) {
    let { className: a } = e;
    return (0, t.jsx)("div", {
        className: A()(G.Rr, a),
        "aria-hidden": !0,
        children: (0, t.jsx)(y.PlayIcon, { size: "xxs", color: "currentColor" }),
    });
}
function U(e) {
    let { item: a, isPlaying: i, onPlay: l, onHoverStart: n, onHoverEnd: s, className: r, children: c } = e;
    return (0, t.jsxs)(b.D, {
        className: A()(G.Vs, r),
        "aria-label": D.intl.string(D.t.CscLHM),
        onClick: l,
        onMouseEnter: () => n(a.key),
        onMouseLeave: s,
        children: [(0, t.jsx)(T.A, { item: a, ringSize: "sm", isPlaying: i, className: G.nC }), c],
    });
}
function Y(e) {
    let { items: a, onPlay: i, onHoverPlay: n } = e,
        [s, r] = l.useState(null),
        c = l.useRef(void 0),
        o = l.useCallback(
            (e) => {
                (i?.(), (0, V.A)({ clips: a, startingIndex: e }));
            },
            [a, i],
        ),
        d = l.useCallback(
            (e) => {
                (window.clearTimeout(c.current),
                    (c.current = window.setTimeout(() => {
                        (r(e), n?.());
                    }, 150)));
            },
            [n],
        ),
        u = l.useCallback(() => {
            (window.clearTimeout(c.current), r(null));
        }, []);
    l.useEffect(() => () => window.clearTimeout(c.current), []);
    let [m, ...x] = a;
    if (null == m) return null;
    let f = x.slice(0, 2),
        p = 0 === f.length,
        h = 1 === f.length,
        g = p ? void 0 : m.title,
        j = null != g && "" !== g.trim();
    return (0, t.jsxs)("div", {
        className: A()(G.z7, { [G.J0]: p, [G.V2]: h }),
        children: [
            (0, t.jsx)(U, {
                item: m,
                isPlaying: s === m.key,
                onPlay: () => o(0),
                onHoverStart: d,
                onHoverEnd: u,
                className: G.N4,
                children: j
                    ? (0, t.jsx)(M.A, {
                          contentClassName: G.W_,
                          children: (0, t.jsxs)("div", {
                              className: G.E4,
                              children: [
                                  (0, t.jsx)(S.E, {
                                      variant: "text-xs/semibold",
                                      color: "text-overlay-light",
                                      className: G.rd,
                                      children: (0, t.jsx)(_.A, { children: g }),
                                  }),
                                  (0, t.jsx)(O, { className: G.l9 }),
                              ],
                          }),
                      })
                    : (0, t.jsx)(O, { className: G.Or }),
            }),
            f.length > 0 &&
                (0, t.jsx)("div", {
                    className: G.t$,
                    children: f.map((e, a) =>
                        (0, t.jsx)(
                            U,
                            {
                                item: e,
                                isPlaying: s === e.key,
                                onPlay: () => o(a + 1),
                                onHoverStart: d,
                                onHoverEnd: u,
                                className: G.ZL,
                                children: (0, t.jsx)(O, { className: G.Or }),
                            },
                            e.key,
                        ),
                    ),
                }),
        ],
    });
}
var z = i(4431);
function H(e) {
    let { items: a, onViewAll: i, className: n } = e,
        s = l.useId(),
        { trackUserProfileAction: c } = (0, g.NJ)(),
        o = l.useRef(!1);
    function d() {
        (c({ action: "PRESS_CLIPS_WIDGET_PREVIEW", widgetType: r.x.CLIPS_GALLERY }), i());
    }
    l.useEffect(() => {
        o.current || (c({ action: "VIEW_CLIPS_WIDGET_PREVIEW", widgetType: r.x.CLIPS_GALLERY }), (o.current = !0));
    }, [c]);
    let u = l.useCallback(() => {
            c({ action: "PRESS_PLAY_CLIP", widgetType: r.x.CLIPS_GALLERY });
        }, [c]),
        m = l.useCallback(() => {
            c({ action: "HOVER_PLAY_CLIP", widgetType: r.x.CLIPS_GALLERY });
        }, [c]),
        x = (0, t.jsx)(L.D, { variant: "text-xs/medium", id: s, children: D.intl.string(D.t.zY8Ghg) }),
        f = (0, t.jsx)(Y, { items: a, onPlay: u, onHoverPlay: m }),
        p = 1 === a.length,
        h = p ? a[0].title?.trim() : void 0;
    return (0, t.jsx)("section", {
        "aria-labelledby": s,
        children: (0, t.jsxs)(w.A.Overlay, {
            className: A()(z.kL, p && z.oE, n),
            children: [
                p
                    ? (0, t.jsxs)(b.D, {
                          className: z.XL,
                          "aria-label": D.intl.string(D.t.rUEjBe),
                          onClick: d,
                          children: [
                              x,
                              null != h &&
                                  "" !== h &&
                                  (0, t.jsx)(S.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      className: z.ID,
                                      children: (0, t.jsx)(_.A, { children: h }),
                                  }),
                          ],
                      })
                    : (0, t.jsxs)("div", {
                          className: z.wx,
                          children: [
                              x,
                              (0, t.jsx)(k.Q, {
                                  variant: "secondary",
                                  textVariant: "text-xs/medium",
                                  onClick: d,
                                  text: D.intl.string(D.t.rUEjBe),
                              }),
                          ],
                      }),
                f,
            ],
        }),
    });
}
var B = i(403581),
    F = i(661531),
    J = i(448766),
    q = i(326009),
    K = i(892572),
    Q = i(564118);
function $(e) {
    let { header: a } = e;
    return (0, t.jsxs)("div", {
        className: Q.wx,
        children: [
            (0, t.jsx)(B.t, { className: Q.nr, size: "xxs", color: F.A.colors.ICON_DEFAULT }),
            (0, t.jsx)(S.E, { className: Q.TK, variant: "text-xs/medium", lineClamp: 1, children: a }),
        ],
    });
}
function Z(e) {
    let { header: a, section: i, userId: l } = e,
        n = "" !== i.title;
    return (0, t.jsxs)("div", {
        className: Q.PY,
        children: [
            (0, t.jsxs)("div", {
                className: Q.rD,
                children: [
                    (0, t.jsx)($, { header: a }),
                    (0, t.jsxs)("div", {
                        className: Q.I_,
                        children: [
                            n
                                ? (0, t.jsx)(L.D, {
                                      className: A()(Q.CH, K.YD),
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, J.j)(i.title),
                                  })
                                : null,
                            (0, t.jsx)(S.E, {
                                className: Q.G6,
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: D.intl.string(D.t.KOUwKV),
                            }),
                        ],
                    }),
                ],
            }),
            null != i.image
                ? (0, t.jsx)(q.N, { className: A()(Q.N4, { [Q.kF]: !n }), userId: l, image: i.image })
                : null,
        ],
    });
}
function X(e) {
    let { header: a, section: i, userId: l } = e,
        n = i.fields.map((e) => e.image).filter(h.Vq);
    return 0 === n.length
        ? (0, t.jsx)(ee, { header: a })
        : (0, t.jsxs)("div", {
              className: Q.Zz,
              children: [
                  (0, t.jsx)($, { header: a }),
                  (0, t.jsx)("div", {
                      className: Q.SS,
                      children: n.map((e, a) =>
                          (0, t.jsx)(q.N, { className: Q.Bi, userId: l, image: e, canAnimate: !1 }, a),
                      ),
                  }),
              ],
          });
}
function ee(e) {
    let { header: a } = e;
    return (0, t.jsxs)("div", {
        className: Q.$R,
        children: [
            (0, t.jsx)($, { header: a }),
            (0, t.jsx)(S.E, {
                className: Q.VC,
                variant: "text-xs/medium",
                color: "text-subtle",
                children: D.intl.string(D.t.KOUwKV),
            }),
        ],
    });
}
function ea(e) {
    let { userId: a, widget: i } = e,
        l = i.sections[0];
    return null == l
        ? (0, t.jsx)(ee, { header: i.header })
        : "cover" === l.type && ("" !== l.title || null != l.image)
          ? (0, t.jsx)(Z, { header: i.header, section: l, userId: a })
          : "fields" === l.type
            ? (0, t.jsx)(X, { header: i.header, section: l, userId: a })
            : (0, t.jsx)(ee, { header: i.header });
}
function ei(e) {
    let { className: a, onClick: i, userId: n, widget: s } = e,
        { trackUserProfileAction: r } = (0, g.NJ)(),
        c = l.useRef(!1);
    return (
        l.useEffect(() => {
            c.current || (r({ action: "VIEW_PERSONAL_WIDGET_PREVIEW" }), (c.current = !0));
        }, [r, s.id]),
        (0, t.jsx)(b.D, {
            onClick: function () {
                (r({ action: "PRESS_PERSONAL_WIDGET_PREVIEW" }), i?.());
            },
            "aria-label": D.intl.string(D.t["2sdfeb"]),
            children: (0, t.jsx)(w.A.Overlay, {
                className: A()(Q.kL, a),
                children: (0, t.jsx)(ea, { userId: n, widget: s }),
            }),
        })
    );
}
var et = i(321108),
    el = i(939496),
    en = i(996988),
    es = i(580065);
function er(e) {
    var a;
    let i,
        { widgets: n = [], onClick: s, className: r } = e,
        { trackUserProfileAction: c } = (0, g.NJ)(),
        o =
            ((a = n.filter((e) => e instanceof j.R)),
            (i = (0, x.A)(a.map((e) => e.applicationId))),
            (0, l.useMemo)(
                () =>
                    Object.fromEntries(
                        i
                            .filter(h.Vq)
                            .map((e) => [e.id, e.getCanonicalGameId()])
                            .filter((e) => {
                                let [a, i] = e;
                                return null != i;
                            }),
                    ),
                [i],
            )),
        d = (0, l.useMemo)(
            () => [
                ...new Set(
                    n
                        .map((e) =>
                            e instanceof I.Yy
                                ? e.games.map((e) => e.gameId)
                                : e instanceof j.R
                                  ? o[e.applicationId]
                                  : void 0,
                        )
                        .filter(h.Vq)
                        .flat(),
                ),
            ],
            [n, o],
        ),
        { themeType: u } = (0, el.E)(),
        m = u === en.d.SIDEBAR,
        f = (0, l.useRef)(!1),
        p = (0, et.A)(d),
        E = (0, l.useMemo)(
            () =>
                p
                    .map((e) => ({ image: e.getIconURL(48) ?? "", name: e.name }))
                    .filter((e) => "" !== e.image)
                    .slice(0, 4),
            [p],
        );
    return (
        (0, l.useEffect)(() => {
            0 === E.length || f.current || (c({ action: "VIEW_GAME_WIDGET_BREADCRUMB" }), (f.current = !0));
        }, [c, E.length]),
        (0, t.jsx)(b.D, {
            "aria-label": D.intl.string(D.t.JjiwFx),
            onClick: () => {
                (c({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), s());
            },
            className: es.QF,
            children: (0, t.jsxs)(w.A.Overlay, {
                className: A()(es.WH, r),
                children: [
                    (0, t.jsx)(S.E, {
                        variant: m ? "text-sm/medium" : "text-xs/medium",
                        children: D.intl.string(D.t.JjiwFx),
                    }),
                    (0, t.jsx)("div", {
                        className: es.Pt,
                        children: E.map((e, a) =>
                            (0, t.jsx)(
                                ec,
                                {
                                    iconUrl: e.image,
                                    name: e.name,
                                    displayCount: a === E.length - 1 && d.length > 4,
                                    gameCount: d.length - E.length,
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
function ec(e) {
    let { iconUrl: a, name: i, displayCount: l, gameCount: n } = e;
    return (0, t.jsxs)("div", {
        className: es.Kk,
        children: [
            (0, t.jsx)("img", { className: A()({ [es.um]: l }), src: a, alt: i }),
            l &&
                (0, t.jsx)("div", {
                    className: es.pp,
                    children: (0, t.jsxs)(S.E, { variant: "text-xs/medium", className: es.gq, children: ["+", n] }),
                }),
        ],
    });
}
var eo = i(518477);
function ed(e) {
    let { user: a, widgets: i = [], ...R } = e,
        {
            openModal: A,
            onExpand: _,
            openClipsGallery: L,
        } = (function (e) {
            let { onOpenUserProfileModal: a } = e,
                { analyticsLocations: i } = (0, o.Ay)(),
                { trackUserProfileAction: t } = (0, g.NJ)(),
                n = l.useCallback(() => {
                    a?.({ tabSection: eo.RP.WIDGETS });
                }, [a]),
                s = l.useCallback(() => {
                    (t({ action: "PRESS_SHOW_MORE_WIDGETS", analyticsLocations: i }), n());
                }, [t, i, n]);
            return {
                openModal: n,
                onExpand: s,
                openClipsGallery: l.useCallback(() => {
                    a?.({ tabSection: eo.RP.WIDGETS, scrollTarget: r.x.CLIPS_GALLERY });
                }, [a]),
            };
        })({ user: a, widgets: i, ...R }),
        b = v.useConfig({ location: "UserProfileStackedWidgetPreviews" }).enabled,
        S = l.useMemo(() => i.filter((e) => e instanceof j.R), [i]),
        k = l.useMemo(() => S.map((e) => e.applicationId), [S]),
        w = (0, x.A)(k),
        y = l.useMemo(() => new Map(w.filter(h.Vq).map((e) => [e.id, e])), [w]),
        T = (0, m.A)(k),
        M = l.useMemo(() => new Map(T.map((e) => [e.application_id, e])), [T]),
        { data: V } = (0, f.P)(a.id),
        G = l.useMemo(() => new Map(V?.map((e) => [e.application_id, e])), [V]),
        O = (0, c.bG)([p.default], () => p.default.locale),
        U = (0, c.cf)([u.A], () => Object.fromEntries(S.map((e) => [e.applicationId, u.A.getAssets(e.applicationId)]))),
        Y = l.useMemo(
            () =>
                0 === y.size || 0 === M.size || 0 === G.size
                    ? null
                    : new Map(
                          S.map((e) => {
                              let a = y.get(e.applicationId),
                                  i = M.get(e.applicationId),
                                  t = G.get(e.applicationId);
                              if (null == a || null == i || null == t) return null;
                              let l = i.surfaces;
                              if (null == l || null == l[s.m.MINI_PROFILE]) return null;
                              let r = (0, n.VG)(t.profile),
                                  c = Object.values(U[e.applicationId] ?? {}).filter(h.Vq);
                              return [e, { surfaceConfigs: i.surfaces, data: r, application: a, assets: c }];
                          }).filter(h.Vq),
                      ),
            [S, y, M, G, U],
        ),
        z = l.useCallback(
            (e) => {
                let l = [],
                    n = !1;
                for (let s of i)
                    if (s instanceof j.R) {
                        let a = Y?.get(s);
                        if (null == a) continue;
                        l.push(
                            (0, t.jsx)(
                                P.A,
                                {
                                    application: a.application,
                                    rendererProps: {
                                        locale: O,
                                        surfaceConfigs: a.surfaceConfigs,
                                        isLoading: !1,
                                        hasIdentity: !0,
                                        resolutionContext: {
                                            data: a.data,
                                            applicationAssets: a.assets,
                                            getApplicationAssetUrl: (e) =>
                                                (0, d.Q)(s.applicationId, e, e.metadata.width),
                                            localizedStrings: [],
                                        },
                                    },
                                    onClick: A,
                                    ...e,
                                },
                                `application-widget-${s.applicationId}`,
                            ),
                        );
                    } else if (s instanceof I.Yy && !n)
                        (l.push((0, t.jsx)(er, { widgets: i, onClick: A, ...e }, "collection-breadcrumb")), (n = !0));
                    else if (s instanceof N.Tu)
                        l.push(
                            (0, t.jsx)(ei, { userId: a.id, widget: s, onClick: A, ...e }, s.id ?? "personal-widget"),
                        );
                    else if (s instanceof E.k) {
                        if (!b) continue;
                        let a = s.clips
                            .flatMap((e) =>
                                "saved" === e.status
                                    ? [
                                          {
                                              status: "saved",
                                              key: e.id,
                                              gameId: e.gameId,
                                              videoURL: e.videoURL,
                                              thumbnailURL: e.thumbnailURL,
                                              title: e.title,
                                              tags: e.tags,
                                          },
                                      ]
                                    : [],
                            )
                            .filter(W.K);
                        if (0 === a.length) continue;
                        l.push((0, t.jsx)(H, { items: a, onViewAll: L, ...e }, s.id ?? "clips-gallery-widget"));
                    }
                return l;
            },
            [i, A, Y, O, a.id, b, L],
        );
    return 0 === i.length ? null : (0, t.jsx)(C.A, { renderCards: z, heading: D.intl.string(D.t.Y55Tua), onExpand: _ });
}
