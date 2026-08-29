i.d(t, { A: () => ed }), i(321073);
var a = i(477900),
    l = i(582128),
    s = i(176999),
    n = i(598748),
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
    I = i(646976),
    v = i(289173),
    E = i(210598);
let N = (0, i(945810).mj)({
    name: "2026-07-clips-on-profile-viewer",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var C = i(80330),
    A = i(139730),
    R = i(503698),
    k = i.n(R),
    b = i(297264),
    w = i(123292),
    P = i(946356),
    _ = i(3026),
    y = i(939249),
    S = i(782134),
    M = i(834730),
    T = i(314531),
    L = i(798108),
    D = i(558285),
    O = i(608857),
    V = i(375708),
    W = i(599672);
function G(e) {
    let { size: t, onPlay: i } = e;
    return (0, a.jsx)(y.D, {
        className: k()(W.playButton, W[t]),
        "aria-label": V.intl.string(V.t.CscLHM),
        onClick: i,
        children: (0, a.jsx)(S.PlayIcon, {
            size: "custom",
            width: "lg" === t ? 14 : 8,
            height: "lg" === t ? 14 : 8,
            color: "currentColor",
        }),
    });
}
function U(e) {
    let { item: t, isPlaying: i, onHoverStart: l, onHoverEnd: s, className: n, children: r } = e;
    return (0, a.jsxs)("div", {
        className: k()(W.tile, n),
        onMouseEnter: () => l(t.key),
        onMouseLeave: s,
        children: [(0, a.jsx)(T.A, { item: t, ringSize: "sm", isPlaying: i, className: W.tileMedia }), r],
    });
}
function z(e) {
    let { items: t } = e,
        [i, s] = l.useState(null),
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
    let m = d.title;
    return (0, a.jsxs)("div", {
        className: W.mosaic,
        children: [
            (0, a.jsx)(U, {
                item: d,
                isPlaying: i === d.key,
                onHoverStart: c,
                onHoverEnd: o,
                className: W.feature,
                children: (0, a.jsx)(L.A, {
                    contentClassName: W.featureOverlayContent,
                    children: (0, a.jsxs)("div", {
                        className: W.featureFooter,
                        children: [
                            null != m &&
                                "" !== m.trim() &&
                                (0, a.jsx)(M.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-overlay-light",
                                    className: W.featureTitle,
                                    children: (0, a.jsx)(_.A, { children: m }),
                                }),
                            (0, a.jsx)(G, { size: "lg", onPlay: () => r(0) }),
                        ],
                    }),
                }),
            }),
            u.length > 0 &&
                (0, a.jsx)("div", {
                    className: k()(W.stack, { [W.stackEven]: 1 === u.length }),
                    children: u.map((e, t) =>
                        (0, a.jsx)(
                            U,
                            {
                                item: e,
                                isPlaying: i === e.key,
                                onHoverStart: c,
                                onHoverEnd: o,
                                className: W.stackTile,
                                children: (0, a.jsx)(G, { size: "sm", onPlay: () => r(t + 1) }),
                            },
                            e.key,
                        ),
                    ),
                }),
        ],
    });
}
var F = i(4431);
function B(e) {
    let { items: t, onViewAll: i, className: s } = e,
        n = l.useId();
    return (0, a.jsx)("section", {
        "aria-labelledby": n,
        children: (0, a.jsxs)(P.A.Overlay, {
            className: k()(F.k, s),
            children: [
                (0, a.jsxs)("div", {
                    className: F.w,
                    children: [
                        (0, a.jsx)(b.D, { variant: "text-xs/medium", id: n, children: V.intl.string(V.t.zY8Ghg) }),
                        (0, a.jsx)(w.Q, {
                            variant: "secondary",
                            textVariant: "text-xs/medium",
                            onClick: i,
                            text: V.intl.string(V.t.rUEjBe),
                        }),
                    ],
                }),
                (0, a.jsx)(z, { items: t }),
            ],
        }),
    });
}
var H = i(403581),
    q = i(661531),
    J = i(448766),
    K = i(326009),
    Y = i(892572),
    Q = i(564118);
function $(e) {
    let { header: t } = e;
    return (0, a.jsxs)("div", {
        className: Q.wx,
        children: [
            (0, a.jsx)(H.t, { className: Q.nr, size: "xxs", color: q.A.colors.ICON_DEFAULT }),
            (0, a.jsx)(M.E, { className: Q.TK, variant: "text-xs/medium", lineClamp: 1, children: t }),
        ],
    });
}
function Z(e) {
    let { header: t, section: i, userId: l } = e,
        s = "" !== i.title;
    return (0, a.jsxs)("div", {
        className: Q.PY,
        children: [
            (0, a.jsxs)("div", {
                className: Q.rD,
                children: [
                    (0, a.jsx)($, { header: t }),
                    (0, a.jsxs)("div", {
                        className: Q.I_,
                        children: [
                            s
                                ? (0, a.jsx)(b.D, {
                                      className: k()(Q.CH, Y.YD),
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, J.j)(i.title),
                                  })
                                : null,
                            (0, a.jsx)(M.E, {
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
            null != i.image
                ? (0, a.jsx)(K.N, { className: k()(Q.N4, { [Q.kF]: !s }), userId: l, image: i.image })
                : null,
        ],
    });
}
function X(e) {
    let { header: t, section: i, userId: l } = e,
        s = i.fields.map((e) => e.image).filter(h.Vq);
    return 0 === s.length
        ? (0, a.jsx)(ee, { header: t })
        : (0, a.jsxs)("div", {
              className: Q.Zz,
              children: [
                  (0, a.jsx)($, { header: t }),
                  (0, a.jsx)("div", {
                      className: Q.SS,
                      children: s.map((e, t) =>
                          (0, a.jsx)(K.N, { className: Q.Bi, userId: l, image: e, canAnimate: !1 }, t),
                      ),
                  }),
              ],
          });
}
function ee(e) {
    let { header: t } = e;
    return (0, a.jsxs)("div", {
        className: Q.$R,
        children: [
            (0, a.jsx)($, { header: t }),
            (0, a.jsx)(M.E, {
                className: Q.VC,
                variant: "text-xs/medium",
                color: "text-subtle",
                children: V.intl.string(V.t.KOUwKV),
            }),
        ],
    });
}
function et(e) {
    let { userId: t, widget: i } = e,
        l = i.sections[0];
    return null == l
        ? (0, a.jsx)(ee, { header: i.header })
        : "cover" === l.type && ("" !== l.title || null != l.image)
          ? (0, a.jsx)(Z, { header: i.header, section: l, userId: t })
          : "fields" === l.type
            ? (0, a.jsx)(X, { header: i.header, section: l, userId: t })
            : (0, a.jsx)(ee, { header: i.header });
}
function ei(e) {
    let { className: t, onClick: i, userId: s, widget: n } = e,
        { trackUserProfileAction: r } = (0, g.NJ)(),
        c = l.useRef(!1);
    return (
        l.useEffect(() => {
            c.current || (r({ action: "VIEW_PERSONAL_WIDGET_PREVIEW" }), (c.current = !0));
        }, [r, n.id]),
        (0, a.jsx)(y.D, {
            onClick: function () {
                r({ action: "PRESS_PERSONAL_WIDGET_PREVIEW" }), i?.();
            },
            "aria-label": V.intl.string(V.t["2sdfeb"]),
            children: (0, a.jsx)(P.A.Overlay, {
                className: k()(Q.kL, t),
                children: (0, a.jsx)(et, { userId: s, widget: n }),
            }),
        })
    );
}
var ea = i(321108),
    el = i(939496),
    es = i(996988),
    en = i(580065);
function er(e) {
    var t;
    let i,
        { widgets: s = [], onClick: n, className: r } = e,
        { trackUserProfileAction: c } = (0, g.NJ)(),
        o =
            ((t = s.filter((e) => e instanceof j.R)),
            (i = (0, x.A)(t.map((e) => e.applicationId))),
            (0, l.useMemo)(
                () =>
                    Object.fromEntries(
                        i
                            .filter(h.Vq)
                            .map((e) => [e.id, e.getCanonicalGameId()])
                            .filter((e) => {
                                let [t, i] = e;
                                return null != i;
                            }),
                    ),
                [i],
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
        p = (0, ea.A)(d),
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
        (0, a.jsx)(y.D, {
            "aria-label": V.intl.string(V.t.JjiwFx),
            onClick: () => {
                c({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), n();
            },
            className: en.QF,
            children: (0, a.jsxs)(P.A.Overlay, {
                className: k()(en.WH, r),
                children: [
                    (0, a.jsx)(M.E, {
                        variant: m ? "text-sm/medium" : "text-xs/medium",
                        children: V.intl.string(V.t.JjiwFx),
                    }),
                    (0, a.jsx)("div", {
                        className: en.Pt,
                        children: I.map((e, t) =>
                            (0, a.jsx)(
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
    let { iconUrl: t, name: i, displayCount: l, gameCount: s } = e;
    return (0, a.jsxs)("div", {
        className: en.Kk,
        children: [
            (0, a.jsx)("img", { className: k()({ [en.um]: l }), src: t, alt: i }),
            l &&
                (0, a.jsx)("div", {
                    className: en.pp,
                    children: (0, a.jsxs)(M.E, { variant: "text-xs/medium", className: en.gq, children: ["+", s] }),
                }),
        ],
    });
}
var eo = i(518477);
function ed(e) {
    let { user: t, widgets: i = [], ...R } = e,
        {
            openModal: k,
            onExpand: b,
            openClipsGallery: w,
        } = (function (e) {
            let { onOpenUserProfileModal: t } = e,
                { analyticsLocations: i } = (0, o.Ay)(),
                { trackUserProfileAction: a } = (0, g.NJ)(),
                s = l.useCallback(() => {
                    t?.({ tabSection: eo.RP.WIDGETS });
                }, [t]),
                n = l.useCallback(() => {
                    a({ action: "PRESS_SHOW_MORE_WIDGETS", analyticsLocations: i }), s();
                }, [a, i, s]);
            return {
                openModal: s,
                onExpand: n,
                openClipsGallery: l.useCallback(() => {
                    t?.({ tabSection: eo.RP.WIDGETS, scrollTarget: r.x.CLIPS_GALLERY });
                }, [t]),
            };
        })({ user: t, widgets: i, ...R }),
        P = N.useConfig({ location: "UserProfileStackedWidgetPreviews" }).enabled,
        _ = l.useMemo(() => i.filter((e) => e instanceof j.R), [i]),
        y = l.useMemo(() => _.map((e) => e.applicationId), [_]),
        S = (0, x.A)(y),
        M = l.useMemo(() => new Map(S.filter(h.Vq).map((e) => [e.id, e])), [S]),
        T = (0, m.A)(y),
        L = l.useMemo(() => new Map(T.map((e) => [e.application_id, e])), [T]),
        { data: D } = (0, f.P)(t.id),
        W = l.useMemo(() => new Map(D?.map((e) => [e.application_id, e])), [D]),
        G = (0, c.bG)([p.default], () => p.default.locale),
        U = (0, c.cf)([u.A], () => Object.fromEntries(_.map((e) => [e.applicationId, u.A.getAssets(e.applicationId)]))),
        z = l.useMemo(
            () =>
                0 === M.size || 0 === L.size || 0 === W.size
                    ? null
                    : new Map(
                          _.map((e) => {
                              let t = M.get(e.applicationId),
                                  i = L.get(e.applicationId),
                                  a = W.get(e.applicationId);
                              if (null == t || null == i || null == a) return null;
                              let l = i.surfaces;
                              if (null == l || null == l[n.m.MINI_PROFILE]) return null;
                              let r = (0, s.VG)(a.profile),
                                  c = Object.values(U[e.applicationId] ?? {}).filter(h.Vq);
                              return [e, { surfaceConfigs: i.surfaces, data: r, application: t, assets: c }];
                          }).filter(h.Vq),
                      ),
            [_, M, L, W, U],
        ),
        F = l.useCallback(
            (e) => {
                let l = [],
                    s = !1;
                for (let n of i)
                    if (n instanceof j.R) {
                        let t = z?.get(n);
                        if (null == t) continue;
                        l.push(
                            (0, a.jsx)(
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
                        l.push((0, a.jsx)(er, { widgets: i, onClick: k, ...e }, "collection-breadcrumb")), (s = !0);
                    else if (n instanceof E.Tu)
                        l.push(
                            (0, a.jsx)(ei, { userId: t.id, widget: n, onClick: k, ...e }, n.id ?? "personal-widget"),
                        );
                    else if (n instanceof I.k) {
                        if (!P) continue;
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
                        l.push((0, a.jsx)(B, { items: t, onViewAll: w, ...e }, n.id ?? "clips-gallery-widget"));
                    }
                return l;
            },
            [i, k, z, G, t.id, P, w],
        );
    return 0 === i.length ? null : (0, a.jsx)(C.A, { renderCards: F, heading: V.intl.string(V.t.Y55Tua), onExpand: b });
}
