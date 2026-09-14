(a.d(t, { A: () => ed }), a(321073));
var i = a(477900),
    l = a(582128),
    n = a(176999),
    s = a(598748),
    r = a(540185),
    c = a(17928),
    o = a(688810),
    d = a(549699),
    u = a(29496),
    m = a(352003),
    x = a(429913),
    f = a(201718),
    p = a(773669),
    h = a(403362),
    g = a(183555),
    j = a(633075),
    I = a(646976),
    E = a(289173),
    v = a(210598);
let N = (0, a(945810).mj)({
    name: "2026-07-clips-on-profile-viewer",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var C = a(80330),
    P = a(139730),
    R = a(503698),
    A = a.n(R),
    _ = a(297264),
    L = a(123292),
    y = a(946356),
    k = a(3026),
    S = a(782134),
    w = a(939249),
    b = a(834730),
    T = a(314531),
    M = a(798108),
    G = a(558285),
    W = a(608857),
    V = a(375708),
    D = a(599672);
function O(e) {
    let { size: t, className: a } = e;
    return (0, i.jsx)("div", {
        className: A()(D.playButton, D[t], a),
        "aria-hidden": !0,
        children: (0, i.jsx)(S.PlayIcon, {
            size: "custom",
            width: "lg" === t ? 14 : 8,
            height: "lg" === t ? 14 : 8,
            color: "currentColor",
        }),
    });
}
function U(e) {
    let { item: t, isPlaying: a, onPlay: l, onHoverStart: n, onHoverEnd: s, className: r, children: c } = e;
    return (0, i.jsxs)(w.D, {
        className: A()(D.tile, r),
        "aria-label": V.intl.string(V.t.CscLHM),
        onClick: l,
        onMouseEnter: () => n(t.key),
        onMouseLeave: s,
        children: [(0, i.jsx)(T.A, { item: t, ringSize: "sm", isPlaying: a, className: D.tileMedia }), c],
    });
}
function z(e) {
    let { items: t, onPlay: a, onHoverPlay: n } = e,
        [s, r] = l.useState(null),
        c = l.useRef(void 0),
        o = l.useCallback(
            (e) => {
                (a?.(), (0, G.A)({ clips: t, startingIndex: e }));
            },
            [t, a],
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
    let [m, ...x] = t;
    if (null == m) return null;
    let f = x.slice(0, 2),
        p = 1 === f.length,
        h = m.title;
    return (0, i.jsxs)("div", {
        className: D.mosaic,
        children: [
            (0, i.jsx)(U, {
                item: m,
                isPlaying: s === m.key,
                onPlay: () => o(0),
                onHoverStart: d,
                onHoverEnd: u,
                className: D.feature,
                children: (0, i.jsx)(M.A, {
                    contentClassName: D.featureOverlayContent,
                    children: (0, i.jsxs)("div", {
                        className: D.featureFooter,
                        children: [
                            null != h &&
                                "" !== h.trim() &&
                                (0, i.jsx)(b.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-overlay-light",
                                    className: D.featureTitle,
                                    children: (0, i.jsx)(k.A, { children: h }),
                                }),
                            (0, i.jsx)(O, { size: "lg", className: D.featurePlayButton }),
                        ],
                    }),
                }),
            }),
            f.length > 0 &&
                (0, i.jsx)("div", {
                    className: A()(D.stack, { [D.equallySizedTile]: p }),
                    children: f.map((e, t) =>
                        (0, i.jsx)(
                            U,
                            {
                                item: e,
                                isPlaying: s === e.key,
                                onPlay: () => o(t + 1),
                                onHoverStart: d,
                                onHoverEnd: u,
                                className: D.stackTile,
                                children: (0, i.jsx)(O, { size: p ? "lg" : "sm", className: D.stackPlayButton }),
                            },
                            e.key,
                        ),
                    ),
                }),
        ],
    });
}
var Y = a(4431);
function B(e) {
    let { items: t, onViewAll: a, className: n } = e,
        s = l.useId(),
        { trackUserProfileAction: c } = (0, g.NJ)(),
        o = l.useRef(!1);
    l.useEffect(() => {
        o.current || (c({ action: "VIEW_CLIPS_WIDGET_PREVIEW", widgetType: r.x.CLIPS_GALLERY }), (o.current = !0));
    }, [c]);
    let d = l.useCallback(() => {
            c({ action: "PRESS_PLAY_CLIP", widgetType: r.x.CLIPS_GALLERY });
        }, [c]),
        u = l.useCallback(() => {
            c({ action: "HOVER_PLAY_CLIP", widgetType: r.x.CLIPS_GALLERY });
        }, [c]);
    return (0, i.jsx)("section", {
        "aria-labelledby": s,
        children: (0, i.jsxs)(y.A.Overlay, {
            className: A()(Y.k, n),
            children: [
                (0, i.jsxs)("div", {
                    className: Y.w,
                    children: [
                        (0, i.jsx)(_.D, { variant: "text-xs/medium", id: s, children: V.intl.string(V.t.zY8Ghg) }),
                        (0, i.jsx)(L.Q, {
                            variant: "secondary",
                            textVariant: "text-xs/medium",
                            onClick: function () {
                                (c({ action: "PRESS_CLIPS_WIDGET_PREVIEW", widgetType: r.x.CLIPS_GALLERY }), a());
                            },
                            text: V.intl.string(V.t.rUEjBe),
                        }),
                    ],
                }),
                (0, i.jsx)(z, { items: t, onPlay: d, onHoverPlay: u }),
            ],
        }),
    });
}
var H = a(403581),
    F = a(661531),
    q = a(448766),
    J = a(326009),
    K = a(892572),
    Q = a(564118);
function $(e) {
    let { header: t } = e;
    return (0, i.jsxs)("div", {
        className: Q.wx,
        children: [
            (0, i.jsx)(H.t, { className: Q.nr, size: "xxs", color: F.A.colors.ICON_DEFAULT }),
            (0, i.jsx)(b.E, { className: Q.TK, variant: "text-xs/medium", lineClamp: 1, children: t }),
        ],
    });
}
function Z(e) {
    let { header: t, section: a, userId: l } = e,
        n = "" !== a.title;
    return (0, i.jsxs)("div", {
        className: Q.PY,
        children: [
            (0, i.jsxs)("div", {
                className: Q.rD,
                children: [
                    (0, i.jsx)($, { header: t }),
                    (0, i.jsxs)("div", {
                        className: Q.I_,
                        children: [
                            n
                                ? (0, i.jsx)(_.D, {
                                      className: A()(Q.CH, K.YD),
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, q.j)(a.title),
                                  })
                                : null,
                            (0, i.jsx)(b.E, {
                                className: Q.G6,
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: V.intl.string(V.t.KOUwKV),
                            }),
                        ],
                    }),
                ],
            }),
            null != a.image
                ? (0, i.jsx)(J.N, { className: A()(Q.N4, { [Q.kF]: !n }), userId: l, image: a.image })
                : null,
        ],
    });
}
function X(e) {
    let { header: t, section: a, userId: l } = e,
        n = a.fields.map((e) => e.image).filter(h.Vq);
    return 0 === n.length
        ? (0, i.jsx)(ee, { header: t })
        : (0, i.jsxs)("div", {
              className: Q.Zz,
              children: [
                  (0, i.jsx)($, { header: t }),
                  (0, i.jsx)("div", {
                      className: Q.SS,
                      children: n.map((e, t) =>
                          (0, i.jsx)(J.N, { className: Q.Bi, userId: l, image: e, canAnimate: !1 }, t),
                      ),
                  }),
              ],
          });
}
function ee(e) {
    let { header: t } = e;
    return (0, i.jsxs)("div", {
        className: Q.$R,
        children: [
            (0, i.jsx)($, { header: t }),
            (0, i.jsx)(b.E, {
                className: Q.VC,
                variant: "text-xs/medium",
                color: "text-subtle",
                children: V.intl.string(V.t.KOUwKV),
            }),
        ],
    });
}
function et(e) {
    let { userId: t, widget: a } = e,
        l = a.sections[0];
    return null == l
        ? (0, i.jsx)(ee, { header: a.header })
        : "cover" === l.type && ("" !== l.title || null != l.image)
          ? (0, i.jsx)(Z, { header: a.header, section: l, userId: t })
          : "fields" === l.type
            ? (0, i.jsx)(X, { header: a.header, section: l, userId: t })
            : (0, i.jsx)(ee, { header: a.header });
}
function ea(e) {
    let { className: t, onClick: a, userId: n, widget: s } = e,
        { trackUserProfileAction: r } = (0, g.NJ)(),
        c = l.useRef(!1);
    return (
        l.useEffect(() => {
            c.current || (r({ action: "VIEW_PERSONAL_WIDGET_PREVIEW" }), (c.current = !0));
        }, [r, s.id]),
        (0, i.jsx)(w.D, {
            onClick: function () {
                (r({ action: "PRESS_PERSONAL_WIDGET_PREVIEW" }), a?.());
            },
            "aria-label": V.intl.string(V.t["2sdfeb"]),
            children: (0, i.jsx)(y.A.Overlay, {
                className: A()(Q.kL, t),
                children: (0, i.jsx)(et, { userId: n, widget: s }),
            }),
        })
    );
}
var ei = a(321108),
    el = a(939496),
    en = a(996988),
    es = a(580065);
function er(e) {
    var t;
    let a,
        { widgets: n = [], onClick: s, className: r } = e,
        { trackUserProfileAction: c } = (0, g.NJ)(),
        o =
            ((t = n.filter((e) => e instanceof j.R)),
            (a = (0, x.A)(t.map((e) => e.applicationId))),
            (0, l.useMemo)(
                () =>
                    Object.fromEntries(
                        a
                            .filter(h.Vq)
                            .map((e) => [e.id, e.getCanonicalGameId()])
                            .filter((e) => {
                                let [t, a] = e;
                                return null != a;
                            }),
                    ),
                [a],
            )),
        d = (0, l.useMemo)(
            () => [
                ...new Set(
                    n
                        .map((e) =>
                            e instanceof E.Yy
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
        p = (0, ei.A)(d),
        I = (0, l.useMemo)(
            () =>
                p
                    .map((e) => ({ image: e.getIconURL(48) ?? "", name: e.name }))
                    .filter((e) => "" !== e.image)
                    .slice(0, 4),
            [p],
        );
    return (
        (0, l.useEffect)(() => {
            0 === I.length || f.current || (c({ action: "VIEW_GAME_WIDGET_BREADCRUMB" }), (f.current = !0));
        }, [c, I.length]),
        (0, i.jsx)(w.D, {
            "aria-label": V.intl.string(V.t.JjiwFx),
            onClick: () => {
                (c({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), s());
            },
            className: es.QF,
            children: (0, i.jsxs)(y.A.Overlay, {
                className: A()(es.WH, r),
                children: [
                    (0, i.jsx)(b.E, {
                        variant: m ? "text-sm/medium" : "text-xs/medium",
                        children: V.intl.string(V.t.JjiwFx),
                    }),
                    (0, i.jsx)("div", {
                        className: es.Pt,
                        children: I.map((e, t) =>
                            (0, i.jsx)(
                                ec,
                                {
                                    iconUrl: e.image,
                                    name: e.name,
                                    displayCount: t === I.length - 1 && d.length > 4,
                                    gameCount: d.length - I.length,
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
function ec(e) {
    let { iconUrl: t, name: a, displayCount: l, gameCount: n } = e;
    return (0, i.jsxs)("div", {
        className: es.Kk,
        children: [
            (0, i.jsx)("img", { className: A()({ [es.um]: l }), src: t, alt: a }),
            l &&
                (0, i.jsx)("div", {
                    className: es.pp,
                    children: (0, i.jsxs)(b.E, { variant: "text-xs/medium", className: es.gq, children: ["+", n] }),
                }),
        ],
    });
}
var eo = a(518477);
function ed(e) {
    let { user: t, widgets: a = [], ...R } = e,
        {
            openModal: A,
            onExpand: _,
            openClipsGallery: L,
        } = (function (e) {
            let { onOpenUserProfileModal: t } = e,
                { analyticsLocations: a } = (0, o.Ay)(),
                { trackUserProfileAction: i } = (0, g.NJ)(),
                n = l.useCallback(() => {
                    t?.({ tabSection: eo.RP.WIDGETS });
                }, [t]),
                s = l.useCallback(() => {
                    (i({ action: "PRESS_SHOW_MORE_WIDGETS", analyticsLocations: a }), n());
                }, [i, a, n]);
            return {
                openModal: n,
                onExpand: s,
                openClipsGallery: l.useCallback(() => {
                    t?.({ tabSection: eo.RP.WIDGETS, scrollTarget: r.x.CLIPS_GALLERY });
                }, [t]),
            };
        })({ user: t, widgets: a, ...R }),
        y = N.useConfig({ location: "UserProfileStackedWidgetPreviews" }).enabled,
        k = l.useMemo(() => a.filter((e) => e instanceof j.R), [a]),
        S = l.useMemo(() => k.map((e) => e.applicationId), [k]),
        w = (0, x.A)(S),
        b = l.useMemo(() => new Map(w.filter(h.Vq).map((e) => [e.id, e])), [w]),
        T = (0, m.A)(S),
        M = l.useMemo(() => new Map(T.map((e) => [e.application_id, e])), [T]),
        { data: G } = (0, f.P)(t.id),
        D = l.useMemo(() => new Map(G?.map((e) => [e.application_id, e])), [G]),
        O = (0, c.bG)([p.default], () => p.default.locale),
        U = (0, c.cf)([u.A], () => Object.fromEntries(k.map((e) => [e.applicationId, u.A.getAssets(e.applicationId)]))),
        z = l.useMemo(
            () =>
                0 === b.size || 0 === M.size || 0 === D.size
                    ? null
                    : new Map(
                          k
                              .map((e) => {
                                  let t = b.get(e.applicationId),
                                      a = M.get(e.applicationId),
                                      i = D.get(e.applicationId);
                                  if (null == t || null == a || null == i) return null;
                                  let l = a.surfaces;
                                  if (null == l || null == l[s.m.MINI_PROFILE]) return null;
                                  let r = (0, n.VG)(i.profile),
                                      c = Object.values(U[e.applicationId] ?? {}).filter(h.Vq);
                                  return [e, { surfaceConfigs: a.surfaces, data: r, application: t, assets: c }];
                              })
                              .filter(h.Vq),
                      ),
            [k, b, M, D, U],
        ),
        Y = l.useCallback(
            (e) => {
                let l = [],
                    n = !1;
                for (let s of a)
                    if (s instanceof j.R) {
                        let t = z?.get(s);
                        if (null == t) continue;
                        l.push(
                            (0, i.jsx)(
                                P.A,
                                {
                                    application: t.application,
                                    rendererProps: {
                                        locale: O,
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
                                    onClick: A,
                                    ...e,
                                },
                                `application-widget-${s.applicationId}`,
                            ),
                        );
                    } else if (s instanceof E.Yy && !n)
                        (l.push((0, i.jsx)(er, { widgets: a, onClick: A, ...e }, "collection-breadcrumb")), (n = !0));
                    else if (s instanceof v.Tu)
                        l.push(
                            (0, i.jsx)(ea, { userId: t.id, widget: s, onClick: A, ...e }, s.id ?? "personal-widget"),
                        );
                    else if (s instanceof I.k) {
                        if (!y) continue;
                        let t = s.clips
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
                        if (0 === t.length) continue;
                        l.push((0, i.jsx)(B, { items: t, onViewAll: L, ...e }, s.id ?? "clips-gallery-widget"));
                    }
                return l;
            },
            [a, A, z, O, t.id, y, L],
        );
    return 0 === a.length ? null : (0, i.jsx)(C.A, { renderCards: Y, heading: V.intl.string(V.t.Y55Tua), onExpand: _ });
}
