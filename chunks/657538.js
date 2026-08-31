a.d(t, { A: () => ed }), a(321073);
var i = a(477900),
    l = a(582128),
    s = a(176999),
    n = a(598748),
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
    v = a(289173),
    E = a(210598);
let N = (0, a(945810).mj)({
    name: "2026-07-clips-on-profile-viewer",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var C = a(80330),
    A = a(139730),
    R = a(503698),
    k = a.n(R),
    b = a(297264),
    P = a(123292),
    w = a(946356),
    y = a(3026),
    _ = a(939249),
    S = a(782134),
    M = a(834730),
    T = a(314531),
    L = a(798108),
    D = a(558285),
    O = a(608857),
    V = a(375708),
    W = a(599672);
function G(e) {
    let { size: t, className: a, onPlay: l } = e;
    return (0, i.jsx)(_.D, {
        className: k()(W.playButton, W[t], a),
        "aria-label": V.intl.string(V.t.CscLHM),
        onClick: l,
        children: (0, i.jsx)(S.PlayIcon, {
            size: "custom",
            width: "lg" === t ? 14 : 8,
            height: "lg" === t ? 14 : 8,
            color: "currentColor",
        }),
    });
}
function U(e) {
    let { item: t, isPlaying: a, onHoverStart: l, onHoverEnd: s, className: n, children: r } = e;
    return (0, i.jsxs)("div", {
        className: k()(W.tile, n),
        onMouseEnter: () => l(t.key),
        onMouseLeave: s,
        children: [(0, i.jsx)(T.A, { item: t, ringSize: "sm", isPlaying: a, className: W.tileMedia }), r],
    });
}
function z(e) {
    let { items: t } = e,
        [a, s] = l.useState(null),
        n = l.useRef(void 0),
        r = l.useCallback(
            (e) => {
                (0, D.A)({ clips: t, startingIndex: e });
            },
            [t],
        ),
        c = l.useCallback((e) => {
            window.clearTimeout(n.current), (n.current = window.setTimeout(() => s(e), 150));
        }, []),
        o = l.useCallback(() => {
            window.clearTimeout(n.current), s(null);
        }, []);
    l.useEffect(() => () => window.clearTimeout(n.current), []);
    let [d, ...u] = t;
    if (null == d) return null;
    let m = 1 === u.length,
        x = d.title;
    return (0, i.jsxs)("div", {
        className: W.mosaic,
        children: [
            (0, i.jsx)(U, {
                item: d,
                isPlaying: a === d.key,
                onHoverStart: c,
                onHoverEnd: o,
                className: W.feature,
                children: (0, i.jsx)(L.A, {
                    contentClassName: W.featureOverlayContent,
                    children: (0, i.jsxs)("div", {
                        className: W.featureFooter,
                        children: [
                            null != x &&
                                "" !== x.trim() &&
                                (0, i.jsx)(M.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-overlay-light",
                                    className: W.featureTitle,
                                    children: (0, i.jsx)(y.A, { children: x }),
                                }),
                            (0, i.jsx)(G, { size: "lg", className: W.featurePlayButton, onPlay: () => r(0) }),
                        ],
                    }),
                }),
            }),
            u.length > 0 &&
                (0, i.jsx)("div", {
                    className: k()(W.stack, { [W.equallySizedTile]: m }),
                    children: u.map((e, t) =>
                        (0, i.jsx)(
                            U,
                            {
                                item: e,
                                isPlaying: a === e.key,
                                onHoverStart: c,
                                onHoverEnd: o,
                                className: W.stackTile,
                                children: (0, i.jsx)(G, {
                                    size: m ? "lg" : "sm",
                                    className: W.stackPlayButton,
                                    onPlay: () => r(t + 1),
                                }),
                            },
                            e.key,
                        ),
                    ),
                }),
        ],
    });
}
var B = a(4431);
function F(e) {
    let { items: t, onViewAll: a, className: s } = e,
        n = l.useId();
    return (0, i.jsx)("section", {
        "aria-labelledby": n,
        children: (0, i.jsxs)(w.A.Overlay, {
            className: k()(B.k, s),
            children: [
                (0, i.jsxs)("div", {
                    className: B.w,
                    children: [
                        (0, i.jsx)(b.D, { variant: "text-xs/medium", id: n, children: V.intl.string(V.t.zY8Ghg) }),
                        (0, i.jsx)(P.Q, {
                            variant: "secondary",
                            textVariant: "text-xs/medium",
                            onClick: a,
                            text: V.intl.string(V.t.rUEjBe),
                        }),
                    ],
                }),
                (0, i.jsx)(z, { items: t }),
            ],
        }),
    });
}
var H = a(403581),
    q = a(661531),
    J = a(448766),
    K = a(326009),
    Y = a(892572),
    Q = a(564118);
function $(e) {
    let { header: t } = e;
    return (0, i.jsxs)("div", {
        className: Q.wx,
        children: [
            (0, i.jsx)(H.t, { className: Q.nr, size: "xxs", color: q.A.colors.ICON_DEFAULT }),
            (0, i.jsx)(M.E, { className: Q.TK, variant: "text-xs/medium", lineClamp: 1, children: t }),
        ],
    });
}
function Z(e) {
    let { header: t, section: a, userId: l } = e,
        s = "" !== a.title;
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
                            s
                                ? (0, i.jsx)(b.D, {
                                      className: k()(Q.CH, Y.YD),
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, J.j)(a.title),
                                  })
                                : null,
                            (0, i.jsx)(M.E, {
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
                ? (0, i.jsx)(K.N, { className: k()(Q.N4, { [Q.kF]: !s }), userId: l, image: a.image })
                : null,
        ],
    });
}
function X(e) {
    let { header: t, section: a, userId: l } = e,
        s = a.fields.map((e) => e.image).filter(h.Vq);
    return 0 === s.length
        ? (0, i.jsx)(ee, { header: t })
        : (0, i.jsxs)("div", {
              className: Q.Zz,
              children: [
                  (0, i.jsx)($, { header: t }),
                  (0, i.jsx)("div", {
                      className: Q.SS,
                      children: s.map((e, t) =>
                          (0, i.jsx)(K.N, { className: Q.Bi, userId: l, image: e, canAnimate: !1 }, t),
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
            (0, i.jsx)(M.E, {
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
    let { className: t, onClick: a, userId: s, widget: n } = e,
        { trackUserProfileAction: r } = (0, g.NJ)(),
        c = l.useRef(!1);
    return (
        l.useEffect(() => {
            c.current || (r({ action: "VIEW_PERSONAL_WIDGET_PREVIEW" }), (c.current = !0));
        }, [r, n.id]),
        (0, i.jsx)(_.D, {
            onClick: function () {
                r({ action: "PRESS_PERSONAL_WIDGET_PREVIEW" }), a?.();
            },
            "aria-label": V.intl.string(V.t["2sdfeb"]),
            children: (0, i.jsx)(w.A.Overlay, {
                className: k()(Q.kL, t),
                children: (0, i.jsx)(et, { userId: s, widget: n }),
            }),
        })
    );
}
var ei = a(321108),
    el = a(939496),
    es = a(996988),
    en = a(580065);
function er(e) {
    var t;
    let a,
        { widgets: s = [], onClick: n, className: r } = e,
        { trackUserProfileAction: c } = (0, g.NJ)(),
        o =
            ((t = s.filter((e) => e instanceof j.R)),
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
                    s
                        .map((e) =>
                            e instanceof v.Yy
                                ? e.games.map((e) => e.gameId)
                                : e instanceof j.R
                                  ? o[e.applicationId]
                                  : void 0,
                        )
                        .filter(h.Vq)
                        .flat(),
                ),
            ],
            [s, o],
        ),
        { themeType: u } = (0, el.E)(),
        m = u === es.d.SIDEBAR,
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
        (0, i.jsx)(_.D, {
            "aria-label": V.intl.string(V.t.JjiwFx),
            onClick: () => {
                c({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), n();
            },
            className: en.QF,
            children: (0, i.jsxs)(w.A.Overlay, {
                className: k()(en.WH, r),
                children: [
                    (0, i.jsx)(M.E, {
                        variant: m ? "text-sm/medium" : "text-xs/medium",
                        children: V.intl.string(V.t.JjiwFx),
                    }),
                    (0, i.jsx)("div", {
                        className: en.Pt,
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
    let { iconUrl: t, name: a, displayCount: l, gameCount: s } = e;
    return (0, i.jsxs)("div", {
        className: en.Kk,
        children: [
            (0, i.jsx)("img", { className: k()({ [en.um]: l }), src: t, alt: a }),
            l &&
                (0, i.jsx)("div", {
                    className: en.pp,
                    children: (0, i.jsxs)(M.E, { variant: "text-xs/medium", className: en.gq, children: ["+", s] }),
                }),
        ],
    });
}
var eo = a(518477);
function ed(e) {
    let { user: t, widgets: a = [], ...R } = e,
        {
            openModal: k,
            onExpand: b,
            openClipsGallery: P,
        } = (function (e) {
            let { onOpenUserProfileModal: t } = e,
                { analyticsLocations: a } = (0, o.Ay)(),
                { trackUserProfileAction: i } = (0, g.NJ)(),
                s = l.useCallback(() => {
                    t?.({ tabSection: eo.RP.WIDGETS });
                }, [t]),
                n = l.useCallback(() => {
                    i({ action: "PRESS_SHOW_MORE_WIDGETS", analyticsLocations: a }), s();
                }, [i, a, s]);
            return {
                openModal: s,
                onExpand: n,
                openClipsGallery: l.useCallback(() => {
                    t?.({ tabSection: eo.RP.WIDGETS, scrollTarget: r.x.CLIPS_GALLERY });
                }, [t]),
            };
        })({ user: t, widgets: a, ...R }),
        w = N.useConfig({ location: "UserProfileStackedWidgetPreviews" }).enabled,
        y = l.useMemo(() => a.filter((e) => e instanceof j.R), [a]),
        _ = l.useMemo(() => y.map((e) => e.applicationId), [y]),
        S = (0, x.A)(_),
        M = l.useMemo(() => new Map(S.filter(h.Vq).map((e) => [e.id, e])), [S]),
        T = (0, m.A)(_),
        L = l.useMemo(() => new Map(T.map((e) => [e.application_id, e])), [T]),
        { data: D } = (0, f.P)(t.id),
        W = l.useMemo(() => new Map(D?.map((e) => [e.application_id, e])), [D]),
        G = (0, c.bG)([p.default], () => p.default.locale),
        U = (0, c.cf)([u.A], () => Object.fromEntries(y.map((e) => [e.applicationId, u.A.getAssets(e.applicationId)]))),
        z = l.useMemo(
            () =>
                0 === M.size || 0 === L.size || 0 === W.size
                    ? null
                    : new Map(
                          y
                              .map((e) => {
                                  let t = M.get(e.applicationId),
                                      a = L.get(e.applicationId),
                                      i = W.get(e.applicationId);
                                  if (null == t || null == a || null == i) return null;
                                  let l = a.surfaces;
                                  if (null == l || null == l[n.m.MINI_PROFILE]) return null;
                                  let r = (0, s.VG)(i.profile),
                                      c = Object.values(U[e.applicationId] ?? {}).filter(h.Vq);
                                  return [e, { surfaceConfigs: a.surfaces, data: r, application: t, assets: c }];
                              })
                              .filter(h.Vq),
                      ),
            [y, M, L, W, U],
        ),
        B = l.useCallback(
            (e) => {
                let l = [],
                    s = !1;
                for (let n of a)
                    if (n instanceof j.R) {
                        let t = z?.get(n);
                        if (null == t) continue;
                        l.push(
                            (0, i.jsx)(
                                A.A,
                                {
                                    application: t.application,
                                    rendererProps: {
                                        locale: G,
                                        surfaceConfigs: t.surfaceConfigs,
                                        isLoading: !1,
                                        hasIdentity: !0,
                                        resolutionContext: {
                                            data: t.data,
                                            applicationAssets: t.assets,
                                            getApplicationAssetUrl: (e) =>
                                                (0, d.Q)(n.applicationId, e, e.metadata.width),
                                            localizedStrings: [],
                                        },
                                    },
                                    onClick: k,
                                    ...e,
                                },
                                `application-widget-${n.applicationId}`,
                            ),
                        );
                    } else if (n instanceof v.Yy && !s)
                        l.push((0, i.jsx)(er, { widgets: a, onClick: k, ...e }, "collection-breadcrumb")), (s = !0);
                    else if (n instanceof E.Tu)
                        l.push(
                            (0, i.jsx)(ea, { userId: t.id, widget: n, onClick: k, ...e }, n.id ?? "personal-widget"),
                        );
                    else if (n instanceof I.k) {
                        if (!w) continue;
                        let t = n.clips
                            .flatMap((e) =>
                                "saved" === e.status
                                    ? [
                                          {
                                              status: "saved",
                                              key: e.id,
                                              videoURL: e.videoURL,
                                              thumbnailURL: e.thumbnailURL,
                                              title: e.title,
                                              tags: e.tags,
                                          },
                                      ]
                                    : [],
                            )
                            .filter(O.K)
                            .slice(0, 3);
                        if (0 === t.length) continue;
                        l.push((0, i.jsx)(F, { items: t, onViewAll: P, ...e }, n.id ?? "clips-gallery-widget"));
                    }
                return l;
            },
            [a, k, z, G, t.id, w, P],
        );
    return 0 === a.length ? null : (0, i.jsx)(C.A, { renderCards: B, heading: V.intl.string(V.t.Y55Tua), onExpand: b });
}
