t.d(i, { A: () => ex }), t(321073);
var a = t(477900),
    l = t(582128),
    n = t(176999),
    s = t(598748),
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
    j = t(183555),
    g = t(633075),
    I = t(646976),
    E = t(289173),
    v = t(210598);
let N = (0, t(945810).mj)({
    name: "2026-07-clips-on-profile-viewer",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var C = t(80330),
    A = t(139730),
    R = t(503698),
    b = t.n(R),
    k = t(297264),
    w = t(123292),
    y = t(946356),
    P = t(3026),
    _ = t(782134),
    M = t(939249),
    S = t(834730),
    T = t(314531),
    L = t(798108),
    V = t(558285),
    D = t(608857),
    G = t(375708),
    O = t(599672);
function W(e) {
    return e.clips
        .flatMap((e) =>
            "saved" === e.status
                ? [{ status: "saved", key: e.id, videoURL: e.videoURL, thumbnailURL: e.thumbnailURL, title: e.title }]
                : [],
        )
        .filter(D.K)
        .slice(0, 3);
}
function U(e) {
    let { size: i } = e;
    return (0, a.jsx)("div", {
        className: b()(O.playButton, O[i]),
        "aria-hidden": !0,
        children: (0, a.jsx)(_.PlayIcon, {
            size: "custom",
            width: "lg" === i ? 14 : 8,
            height: "lg" === i ? 14 : 8,
            color: "currentColor",
        }),
    });
}
function z(e) {
    let { item: i, isPlaying: t, onHoverStart: l, onHoverEnd: n, onPlay: s, className: r, children: c } = e;
    return (0, a.jsxs)("div", {
        className: b()(O.tile, r),
        onMouseEnter: () => l(i.key),
        onMouseLeave: n,
        children: [
            (0, a.jsx)(T.A, { item: i, ringSize: "sm", isPlaying: t, className: O.tileMedia }),
            c,
            (0, a.jsx)(M.D, { className: O.playHitArea, "aria-label": G.intl.string(G.t.CscLHM), onClick: s }),
        ],
    });
}
function F(e) {
    let { items: i } = e,
        [t, n] = l.useState(null),
        s = l.useRef(void 0),
        r = l.useCallback(
            (e) => {
                (0, V.A)({ clips: i, startingIndex: e });
            },
            [i],
        ),
        c = l.useCallback((e) => {
            window.clearTimeout(s.current), (s.current = window.setTimeout(() => n(e), 150));
        }, []),
        o = l.useCallback(() => {
            window.clearTimeout(s.current), n(null);
        }, []);
    l.useEffect(() => () => window.clearTimeout(s.current), []);
    let [d, ...u] = i;
    if (null == d) return null;
    let m = d.title;
    return (0, a.jsxs)("div", {
        className: O.mosaic,
        children: [
            (0, a.jsx)(z, {
                item: d,
                isPlaying: t === d.key,
                onHoverStart: c,
                onHoverEnd: o,
                onPlay: () => r(0),
                className: O.feature,
                children: (0, a.jsx)(L.A, {
                    contentClassName: O.featureOverlayContent,
                    children: (0, a.jsxs)("div", {
                        className: O.featureFooter,
                        children: [
                            null != m &&
                                "" !== m.trim() &&
                                (0, a.jsx)(S.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-overlay-light",
                                    className: O.featureTitle,
                                    children: (0, a.jsx)(P.A, { children: m }),
                                }),
                            (0, a.jsx)(U, { size: "lg" }),
                        ],
                    }),
                }),
            }),
            u.length > 0 &&
                (0, a.jsx)("div", {
                    className: O.stack,
                    children: u.map((e, i) =>
                        (0, a.jsx)(
                            z,
                            {
                                item: e,
                                isPlaying: t === e.key,
                                onHoverStart: c,
                                onHoverEnd: o,
                                onPlay: () => r(i + 1),
                                className: O.stackTile,
                                children: (0, a.jsx)(U, { size: "sm" }),
                            },
                            e.key,
                        ),
                    ),
                }),
        ],
    });
}
var H = t(4431);
function B(e) {
    let { items: i, onViewAll: t, className: n } = e,
        s = l.useId();
    return (0, a.jsx)("section", {
        "aria-labelledby": s,
        children: (0, a.jsxs)(y.A.Overlay, {
            className: b()(H.k, n),
            children: [
                (0, a.jsxs)("div", {
                    className: H.w,
                    children: [
                        (0, a.jsx)(k.D, { variant: "text-xs/medium", id: s, children: G.intl.string(G.t.zY8Ghg) }),
                        (0, a.jsx)(w.Q, {
                            variant: "secondary",
                            textVariant: "text-xs/medium",
                            onClick: t,
                            text: G.intl.string(G.t.rUEjBe),
                        }),
                    ],
                }),
                (0, a.jsx)(F, { items: i }),
            ],
        }),
    });
}
var q = t(403581),
    J = t(661531),
    K = t(448766),
    Y = t(326009),
    Q = t(892572),
    $ = t(564118);
function Z(e) {
    let { header: i } = e;
    return (0, a.jsxs)("div", {
        className: $.wx,
        children: [
            (0, a.jsx)(q.t, { className: $.nr, size: "xxs", color: J.A.colors.ICON_DEFAULT }),
            (0, a.jsx)(S.E, { className: $.TK, variant: "text-xs/medium", lineClamp: 1, children: i }),
        ],
    });
}
function X(e) {
    let { header: i, section: t, userId: l } = e,
        n = "" !== t.title;
    return (0, a.jsxs)("div", {
        className: $.PY,
        children: [
            (0, a.jsxs)("div", {
                className: $.rD,
                children: [
                    (0, a.jsx)(Z, { header: i }),
                    (0, a.jsxs)("div", {
                        className: $.I_,
                        children: [
                            n
                                ? (0, a.jsx)(k.D, {
                                      className: b()($.CH, Q.YD),
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, K.j)(t.title),
                                  })
                                : null,
                            (0, a.jsx)(S.E, {
                                className: $.G6,
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: G.intl.string(G.t.KOUwKV),
                            }),
                        ],
                    }),
                ],
            }),
            null != t.image
                ? (0, a.jsx)(Y.N, { className: b()($.N4, { [$.kF]: !n }), userId: l, image: t.image })
                : null,
        ],
    });
}
function ee(e) {
    let { header: i, section: t, userId: l } = e,
        n = t.fields.map((e) => e.image).filter(h.Vq);
    return 0 === n.length
        ? (0, a.jsx)(ei, { header: i })
        : (0, a.jsxs)("div", {
              className: $.Zz,
              children: [
                  (0, a.jsx)(Z, { header: i }),
                  (0, a.jsx)("div", {
                      className: $.SS,
                      children: n.map((e, i) =>
                          (0, a.jsx)(Y.N, { className: $.Bi, userId: l, image: e, canAnimate: !1 }, i),
                      ),
                  }),
              ],
          });
}
function ei(e) {
    let { header: i } = e;
    return (0, a.jsxs)("div", {
        className: $.$R,
        children: [
            (0, a.jsx)(Z, { header: i }),
            (0, a.jsx)(S.E, {
                className: $.VC,
                variant: "text-xs/medium",
                color: "text-subtle",
                children: G.intl.string(G.t.KOUwKV),
            }),
        ],
    });
}
function et(e) {
    let { userId: i, widget: t } = e,
        l = t.sections[0];
    return null == l
        ? (0, a.jsx)(ei, { header: t.header })
        : "cover" === l.type && ("" !== l.title || null != l.image)
          ? (0, a.jsx)(X, { header: t.header, section: l, userId: i })
          : "fields" === l.type
            ? (0, a.jsx)(ee, { header: t.header, section: l, userId: i })
            : (0, a.jsx)(ei, { header: t.header });
}
function ea(e) {
    let { className: i, onClick: t, userId: n, widget: s } = e,
        { trackUserProfileAction: r } = (0, j.NJ)(),
        c = l.useRef(!1);
    return (
        l.useEffect(() => {
            c.current || (r({ action: "VIEW_PERSONAL_WIDGET_PREVIEW" }), (c.current = !0));
        }, [r, s.id]),
        (0, a.jsx)(M.D, {
            onClick: function () {
                r({ action: "PRESS_PERSONAL_WIDGET_PREVIEW" }), t?.();
            },
            "aria-label": G.intl.string(G.t["2sdfeb"]),
            children: (0, a.jsx)(y.A.Overlay, {
                className: b()($.kL, i),
                children: (0, a.jsx)(et, { userId: n, widget: s }),
            }),
        })
    );
}
var el = t(321108),
    en = t(939496),
    es = t(996988),
    er = t(580065);
function ec(e) {
    var i;
    let t,
        { widgets: n = [], onClick: s, className: r } = e,
        { trackUserProfileAction: c } = (0, j.NJ)(),
        o =
            ((i = n.filter((e) => e instanceof g.R)),
            (t = (0, x.A)(i.map((e) => e.applicationId))),
            (0, l.useMemo)(
                () =>
                    Object.fromEntries(
                        t
                            .filter(h.Vq)
                            .map((e) => [e.id, e.getCanonicalGameId()])
                            .filter((e) => {
                                let [i, t] = e;
                                return null != t;
                            }),
                    ),
                [t],
            )),
        d = (0, l.useMemo)(
            () => [
                ...new Set(
                    n
                        .map((e) =>
                            e instanceof E.Yy
                                ? e.games.map((e) => e.gameId)
                                : e instanceof g.R
                                  ? o[e.applicationId]
                                  : void 0,
                        )
                        .filter(h.Vq)
                        .flat(),
                ),
            ],
            [n, o],
        ),
        { themeType: u } = (0, en.E)(),
        m = u === es.d.SIDEBAR,
        f = (0, l.useRef)(!1),
        p = (0, el.A)(d),
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
        (0, a.jsx)(M.D, {
            "aria-label": G.intl.string(G.t.JjiwFx),
            onClick: () => {
                c({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), s();
            },
            className: er.QF,
            children: (0, a.jsxs)(y.A.Overlay, {
                className: b()(er.WH, r),
                children: [
                    (0, a.jsx)(S.E, {
                        variant: m ? "text-sm/medium" : "text-xs/medium",
                        children: G.intl.string(G.t.JjiwFx),
                    }),
                    (0, a.jsx)("div", {
                        className: er.Pt,
                        children: I.map((e, i) =>
                            (0, a.jsx)(
                                eo,
                                {
                                    iconUrl: e.image,
                                    name: e.name,
                                    displayCount: i === I.length - 1 && d.length > 4,
                                    gameCount: d.length - I.length,
                                },
                                i,
                            ),
                        ),
                    }),
                ],
            }),
        })
    );
}
function eo(e) {
    let { iconUrl: i, name: t, displayCount: l, gameCount: n } = e;
    return (0, a.jsxs)("div", {
        className: er.Kk,
        children: [
            (0, a.jsx)("img", { className: b()({ [er.um]: l }), src: i, alt: t }),
            l &&
                (0, a.jsx)("div", {
                    className: er.pp,
                    children: (0, a.jsxs)(S.E, { variant: "text-xs/medium", className: er.gq, children: ["+", n] }),
                }),
        ],
    });
}
var ed = t(518477);
function eu(e) {
    let { user: i, widgets: t = [], isClipsGalleryViewerEnabled: N, ...R } = e,
        {
            openModal: b,
            onExpand: k,
            openClipsGallery: w,
        } = (function (e) {
            let { onOpenUserProfileModal: i } = e,
                { analyticsLocations: t } = (0, o.Ay)(),
                { trackUserProfileAction: a } = (0, j.NJ)(),
                n = l.useCallback(() => {
                    i?.({ tabSection: ed.RP.WIDGETS });
                }, [i]),
                s = l.useCallback(() => {
                    a({ action: "PRESS_SHOW_MORE_WIDGETS", analyticsLocations: t }), n();
                }, [a, t, n]);
            return {
                openModal: n,
                onExpand: s,
                openClipsGallery: l.useCallback(() => {
                    i?.({ tabSection: ed.RP.WIDGETS, scrollTarget: r.x.CLIPS_GALLERY });
                }, [i]),
            };
        })({ user: i, widgets: t, ...R }),
        y = l.useMemo(() => t.filter((e) => e instanceof g.R), [t]),
        P = l.useMemo(() => y.map((e) => e.applicationId), [y]),
        _ = (0, x.A)(P),
        M = l.useMemo(() => new Map(_.filter(h.Vq).map((e) => [e.id, e])), [_]),
        S = (0, m.A)(P),
        T = l.useMemo(() => new Map(S.map((e) => [e.application_id, e])), [S]),
        { data: L } = (0, f.P)(i.id),
        V = l.useMemo(() => new Map(L?.map((e) => [e.application_id, e])), [L]),
        D = (0, c.bG)([p.default], () => p.default.locale),
        O = (0, c.cf)([u.A], () => Object.fromEntries(y.map((e) => [e.applicationId, u.A.getAssets(e.applicationId)]))),
        U = l.useMemo(
            () =>
                0 === M.size || 0 === T.size || 0 === V.size
                    ? null
                    : new Map(
                          y
                              .map((e) => {
                                  let i = M.get(e.applicationId),
                                      t = T.get(e.applicationId),
                                      a = V.get(e.applicationId);
                                  if (null == i || null == t || null == a) return null;
                                  let l = t.surfaces;
                                  if (null == l || null == l[s.m.MINI_PROFILE]) return null;
                                  let r = (0, n.VG)(a.profile),
                                      c = Object.values(O[e.applicationId] ?? {}).filter(h.Vq);
                                  return [e, { surfaceConfigs: t.surfaces, data: r, application: i, assets: c }];
                              })
                              .filter(h.Vq),
                      ),
            [y, M, T, V, O],
        ),
        z = l.useCallback(
            (e) => {
                let l = [],
                    n = !1;
                for (let s of t)
                    if (s instanceof g.R) {
                        let i = U?.get(s);
                        if (null == i) continue;
                        l.push(
                            (0, a.jsx)(
                                A.A,
                                {
                                    application: i.application,
                                    rendererProps: {
                                        locale: D,
                                        surfaceConfigs: i.surfaceConfigs,
                                        isLoading: !1,
                                        hasIdentity: !0,
                                        resolutionContext: {
                                            data: i.data,
                                            applicationAssets: i.assets,
                                            getApplicationAssetUrl: (e) =>
                                                (0, d.Q)(s.applicationId, e, e.metadata.width),
                                            localizedStrings: [],
                                        },
                                    },
                                    onClick: b,
                                    ...e,
                                },
                                `application-widget-${s.applicationId}`,
                            ),
                        );
                    } else if (s instanceof E.Yy && !n)
                        l.push((0, a.jsx)(ec, { widgets: t, onClick: b, ...e }, "collection-breadcrumb")), (n = !0);
                    else if (s instanceof v.Tu)
                        l.push(
                            (0, a.jsx)(ea, { userId: i.id, widget: s, onClick: b, ...e }, s.id ?? "personal-widget"),
                        );
                    else if (s instanceof I.k) {
                        if (!N) continue;
                        let i = W(s);
                        if (0 === i.length) continue;
                        l.push((0, a.jsx)(B, { items: i, onViewAll: w, ...e }, s.id ?? "clips-gallery-widget"));
                    }
                return l;
            },
            [t, b, U, D, i.id, N, w],
        );
    return 0 === t.length ? null : (0, a.jsx)(C.A, { renderCards: z, heading: G.intl.string(G.t.Y55Tua), onExpand: k });
}
function em(e) {
    let i = N.useConfig({ location: "UserProfileStackedWidgetPreviews" }).enabled;
    return (0, a.jsx)(eu, { ...e, isClipsGalleryViewerEnabled: i });
}
function ex(e) {
    let { widgets: i = [] } = e;
    return l.useMemo(() => i.some((e) => e instanceof I.k && W(e).length > 0), [i])
        ? (0, a.jsx)(em, { ...e })
        : (0, a.jsx)(eu, { ...e, isClipsGalleryViewerEnabled: !1 });
}
