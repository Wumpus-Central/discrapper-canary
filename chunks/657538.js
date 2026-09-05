t.d(a, { A: () => ed }), t(321073);
var i = t(477900),
    l = t(582128),
    s = t(176999),
    n = t(598748),
    r = t(540185),
    c = t(17928),
    o = t(688810),
    d = t(549699),
    u = t(29496),
    m = t(352003),
    x = t(429913),
    f = t(201718),
    p = t(773669),
    h = t(403362),
    g = t(183555),
    j = t(633075),
    I = t(646976),
    v = t(289173),
    E = t(210598);
let N = (0, t(945810).mj)({
    name: "2026-07-clips-on-profile-viewer",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var C = t(80330),
    A = t(139730),
    R = t(503698),
    k = t.n(R),
    b = t(297264),
    P = t(123292),
    w = t(946356),
    y = t(3026),
    _ = t(782134),
    S = t(939249),
    M = t(834730),
    T = t(314531),
    L = t(798108),
    D = t(558285),
    O = t(608857),
    V = t(375708),
    W = t(599672);
function G(e) {
    let { size: a, className: t } = e;
    return (0, i.jsx)("div", {
        className: k()(W.playButton, W[a], t),
        "aria-hidden": !0,
        children: (0, i.jsx)(_.PlayIcon, {
            size: "custom",
            width: "lg" === a ? 14 : 8,
            height: "lg" === a ? 14 : 8,
            color: "currentColor",
        }),
    });
}
function U(e) {
    let { item: a, isPlaying: t, onPlay: l, onHoverStart: s, onHoverEnd: n, className: r, children: c } = e;
    return (0, i.jsxs)(S.D, {
        className: k()(W.tile, r),
        "aria-label": V.intl.string(V.t.CscLHM),
        onClick: l,
        onMouseEnter: () => s(a.key),
        onMouseLeave: n,
        children: [(0, i.jsx)(T.A, { item: a, ringSize: "sm", isPlaying: t, className: W.tileMedia }), c],
    });
}
function z(e) {
    let { items: a } = e,
        [t, s] = l.useState(null),
        n = l.useRef(void 0),
        r = l.useCallback(
            (e) => {
                (0, D.A)({ clips: a, startingIndex: e });
            },
            [a],
        ),
        c = l.useCallback((e) => {
            window.clearTimeout(n.current), (n.current = window.setTimeout(() => s(e), 150));
        }, []),
        o = l.useCallback(() => {
            window.clearTimeout(n.current), s(null);
        }, []);
    l.useEffect(() => () => window.clearTimeout(n.current), []);
    let [d, ...u] = a;
    if (null == d) return null;
    let m = u.slice(0, 2),
        x = 1 === m.length,
        f = d.title;
    return (0, i.jsxs)("div", {
        className: W.mosaic,
        children: [
            (0, i.jsx)(U, {
                item: d,
                isPlaying: t === d.key,
                onPlay: () => r(0),
                onHoverStart: c,
                onHoverEnd: o,
                className: W.feature,
                children: (0, i.jsx)(L.A, {
                    contentClassName: W.featureOverlayContent,
                    children: (0, i.jsxs)("div", {
                        className: W.featureFooter,
                        children: [
                            null != f &&
                                "" !== f.trim() &&
                                (0, i.jsx)(M.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-overlay-light",
                                    className: W.featureTitle,
                                    children: (0, i.jsx)(y.A, { children: f }),
                                }),
                            (0, i.jsx)(G, { size: "lg", className: W.featurePlayButton }),
                        ],
                    }),
                }),
            }),
            m.length > 0 &&
                (0, i.jsx)("div", {
                    className: k()(W.stack, { [W.equallySizedTile]: x }),
                    children: m.map((e, a) =>
                        (0, i.jsx)(
                            U,
                            {
                                item: e,
                                isPlaying: t === e.key,
                                onPlay: () => r(a + 1),
                                onHoverStart: c,
                                onHoverEnd: o,
                                className: W.stackTile,
                                children: (0, i.jsx)(G, { size: x ? "lg" : "sm", className: W.stackPlayButton }),
                            },
                            e.key,
                        ),
                    ),
                }),
        ],
    });
}
var B = t(4431);
function F(e) {
    let { items: a, onViewAll: t, className: s } = e,
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
                            onClick: t,
                            text: V.intl.string(V.t.rUEjBe),
                        }),
                    ],
                }),
                (0, i.jsx)(z, { items: a }),
            ],
        }),
    });
}
var H = t(403581),
    q = t(661531),
    J = t(448766),
    K = t(326009),
    Y = t(892572),
    Q = t(564118);
function $(e) {
    let { header: a } = e;
    return (0, i.jsxs)("div", {
        className: Q.wx,
        children: [
            (0, i.jsx)(H.t, { className: Q.nr, size: "xxs", color: q.A.colors.ICON_DEFAULT }),
            (0, i.jsx)(M.E, { className: Q.TK, variant: "text-xs/medium", lineClamp: 1, children: a }),
        ],
    });
}
function Z(e) {
    let { header: a, section: t, userId: l } = e,
        s = "" !== t.title;
    return (0, i.jsxs)("div", {
        className: Q.PY,
        children: [
            (0, i.jsxs)("div", {
                className: Q.rD,
                children: [
                    (0, i.jsx)($, { header: a }),
                    (0, i.jsxs)("div", {
                        className: Q.I_,
                        children: [
                            s
                                ? (0, i.jsx)(b.D, {
                                      className: k()(Q.CH, Y.YD),
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, J.j)(t.title),
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
            null != t.image
                ? (0, i.jsx)(K.N, { className: k()(Q.N4, { [Q.kF]: !s }), userId: l, image: t.image })
                : null,
        ],
    });
}
function X(e) {
    let { header: a, section: t, userId: l } = e,
        s = t.fields.map((e) => e.image).filter(h.Vq);
    return 0 === s.length
        ? (0, i.jsx)(ee, { header: a })
        : (0, i.jsxs)("div", {
              className: Q.Zz,
              children: [
                  (0, i.jsx)($, { header: a }),
                  (0, i.jsx)("div", {
                      className: Q.SS,
                      children: s.map((e, a) =>
                          (0, i.jsx)(K.N, { className: Q.Bi, userId: l, image: e, canAnimate: !1 }, a),
                      ),
                  }),
              ],
          });
}
function ee(e) {
    let { header: a } = e;
    return (0, i.jsxs)("div", {
        className: Q.$R,
        children: [
            (0, i.jsx)($, { header: a }),
            (0, i.jsx)(M.E, {
                className: Q.VC,
                variant: "text-xs/medium",
                color: "text-subtle",
                children: V.intl.string(V.t.KOUwKV),
            }),
        ],
    });
}
function ea(e) {
    let { userId: a, widget: t } = e,
        l = t.sections[0];
    return null == l
        ? (0, i.jsx)(ee, { header: t.header })
        : "cover" === l.type && ("" !== l.title || null != l.image)
          ? (0, i.jsx)(Z, { header: t.header, section: l, userId: a })
          : "fields" === l.type
            ? (0, i.jsx)(X, { header: t.header, section: l, userId: a })
            : (0, i.jsx)(ee, { header: t.header });
}
function et(e) {
    let { className: a, onClick: t, userId: s, widget: n } = e,
        { trackUserProfileAction: r } = (0, g.NJ)(),
        c = l.useRef(!1);
    return (
        l.useEffect(() => {
            c.current || (r({ action: "VIEW_PERSONAL_WIDGET_PREVIEW" }), (c.current = !0));
        }, [r, n.id]),
        (0, i.jsx)(S.D, {
            onClick: function () {
                r({ action: "PRESS_PERSONAL_WIDGET_PREVIEW" }), t?.();
            },
            "aria-label": V.intl.string(V.t["2sdfeb"]),
            children: (0, i.jsx)(w.A.Overlay, {
                className: k()(Q.kL, a),
                children: (0, i.jsx)(ea, { userId: s, widget: n }),
            }),
        })
    );
}
var ei = t(321108),
    el = t(939496),
    es = t(996988),
    en = t(580065);
function er(e) {
    var a;
    let t,
        { widgets: s = [], onClick: n, className: r } = e,
        { trackUserProfileAction: c } = (0, g.NJ)(),
        o =
            ((a = s.filter((e) => e instanceof j.R)),
            (t = (0, x.A)(a.map((e) => e.applicationId))),
            (0, l.useMemo)(
                () =>
                    Object.fromEntries(
                        t
                            .filter(h.Vq)
                            .map((e) => [e.id, e.getCanonicalGameId()])
                            .filter((e) => {
                                let [a, t] = e;
                                return null != t;
                            }),
                    ),
                [t],
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
        (0, i.jsx)(S.D, {
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
                        children: I.map((e, a) =>
                            (0, i.jsx)(
                                ec,
                                {
                                    iconUrl: e.image,
                                    name: e.name,
                                    displayCount: a === I.length - 1 && d.length > 4,
                                    gameCount: d.length - I.length,
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
    let { iconUrl: a, name: t, displayCount: l, gameCount: s } = e;
    return (0, i.jsxs)("div", {
        className: en.Kk,
        children: [
            (0, i.jsx)("img", { className: k()({ [en.um]: l }), src: a, alt: t }),
            l &&
                (0, i.jsx)("div", {
                    className: en.pp,
                    children: (0, i.jsxs)(M.E, { variant: "text-xs/medium", className: en.gq, children: ["+", s] }),
                }),
        ],
    });
}
var eo = t(518477);
function ed(e) {
    let { user: a, widgets: t = [], ...R } = e,
        {
            openModal: k,
            onExpand: b,
            openClipsGallery: P,
        } = (function (e) {
            let { onOpenUserProfileModal: a } = e,
                { analyticsLocations: t } = (0, o.Ay)(),
                { trackUserProfileAction: i } = (0, g.NJ)(),
                s = l.useCallback(() => {
                    a?.({ tabSection: eo.RP.WIDGETS });
                }, [a]),
                n = l.useCallback(() => {
                    i({ action: "PRESS_SHOW_MORE_WIDGETS", analyticsLocations: t }), s();
                }, [i, t, s]);
            return {
                openModal: s,
                onExpand: n,
                openClipsGallery: l.useCallback(() => {
                    a?.({ tabSection: eo.RP.WIDGETS, scrollTarget: r.x.CLIPS_GALLERY });
                }, [a]),
            };
        })({ user: a, widgets: t, ...R }),
        w = N.useConfig({ location: "UserProfileStackedWidgetPreviews" }).enabled,
        y = l.useMemo(() => t.filter((e) => e instanceof j.R), [t]),
        _ = l.useMemo(() => y.map((e) => e.applicationId), [y]),
        S = (0, x.A)(_),
        M = l.useMemo(() => new Map(S.filter(h.Vq).map((e) => [e.id, e])), [S]),
        T = (0, m.A)(_),
        L = l.useMemo(() => new Map(T.map((e) => [e.application_id, e])), [T]),
        { data: D } = (0, f.P)(a.id),
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
                                  let a = M.get(e.applicationId),
                                      t = L.get(e.applicationId),
                                      i = W.get(e.applicationId);
                                  if (null == a || null == t || null == i) return null;
                                  let l = t.surfaces;
                                  if (null == l || null == l[n.m.MINI_PROFILE]) return null;
                                  let r = (0, s.VG)(i.profile),
                                      c = Object.values(U[e.applicationId] ?? {}).filter(h.Vq);
                                  return [e, { surfaceConfigs: t.surfaces, data: r, application: a, assets: c }];
                              })
                              .filter(h.Vq),
                      ),
            [y, M, L, W, U],
        ),
        B = l.useCallback(
            (e) => {
                let l = [],
                    s = !1;
                for (let n of t)
                    if (n instanceof j.R) {
                        let a = z?.get(n);
                        if (null == a) continue;
                        l.push(
                            (0, i.jsx)(
                                A.A,
                                {
                                    application: a.application,
                                    rendererProps: {
                                        locale: G,
                                        surfaceConfigs: a.surfaceConfigs,
                                        isLoading: !1,
                                        hasIdentity: !0,
                                        resolutionContext: {
                                            data: a.data,
                                            applicationAssets: a.assets,
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
                        l.push((0, i.jsx)(er, { widgets: t, onClick: k, ...e }, "collection-breadcrumb")), (s = !0);
                    else if (n instanceof E.Tu)
                        l.push(
                            (0, i.jsx)(et, { userId: a.id, widget: n, onClick: k, ...e }, n.id ?? "personal-widget"),
                        );
                    else if (n instanceof I.k) {
                        if (!w) continue;
                        let a = n.clips
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
                            .filter(O.K);
                        if (0 === a.length) continue;
                        l.push((0, i.jsx)(F, { items: a, onViewAll: P, ...e }, n.id ?? "clips-gallery-widget"));
                    }
                return l;
            },
            [t, k, z, G, a.id, w, P],
        );
    return 0 === t.length ? null : (0, i.jsx)(C.A, { renderCards: B, heading: V.intl.string(V.t.Y55Tua), onExpand: b });
}
