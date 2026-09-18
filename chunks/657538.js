(i.d(t, { A: () => eu }), i(321073));
var a = i(477900),
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
    v = i(210598);
let N = (0, i(945810).mj)({
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
    let { className: t } = e;
    return (0, a.jsx)("div", {
        className: A()(G.Rr, t),
        "aria-hidden": !0,
        children: (0, a.jsx)(y.PlayIcon, { size: "xxs", color: "currentColor" }),
    });
}
function U(e) {
    let { title: t } = e;
    return null == t || "" === t.trim()
        ? (0, a.jsx)(O, { className: G.Or })
        : (0, a.jsx)(M.A, {
              contentClassName: G.W_,
              children: (0, a.jsxs)("div", {
                  className: G.E4,
                  children: [
                      (0, a.jsx)(S.E, {
                          variant: "text-xs/semibold",
                          color: "text-overlay-light",
                          className: G.rd,
                          children: (0, a.jsx)(_.A, { children: t }),
                      }),
                      (0, a.jsx)(O, { className: G.l9 }),
                  ],
              }),
          });
}
function Y(e) {
    let { item: t, isPlaying: i, onPlay: l, onHoverStart: n, onHoverEnd: s, className: r, children: c } = e;
    return (0, a.jsxs)(b.D, {
        className: A()(G.Vs, r),
        "aria-label": D.intl.string(D.t.CscLHM),
        onClick: l,
        onMouseEnter: () => n(t.key),
        onMouseLeave: s,
        children: [(0, a.jsx)(T.A, { item: t, ringSize: "sm", isPlaying: i, className: G.nC }), c],
    });
}
function z(e) {
    let { items: t, onPlay: i, onHoverPlay: n } = e,
        [s, r] = l.useState(null),
        c = l.useRef(void 0),
        o = l.useCallback(
            (e) => {
                (i?.(), (0, V.A)({ clips: t, startingIndex: e }));
            },
            [t, i],
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
        p = 0 === f.length,
        h = 1 === f.length,
        g = p ? void 0 : m.title;
    return (0, a.jsxs)("div", {
        className: A()(G.z7, { [G.J0]: p, [G.V2]: h }),
        children: [
            (0, a.jsx)(Y, {
                item: m,
                isPlaying: s === m.key,
                onPlay: () => o(0),
                onHoverStart: d,
                onHoverEnd: u,
                className: G.N4,
                children: (0, a.jsx)(U, { title: g }),
            }),
            f.length > 0 &&
                (0, a.jsx)("div", {
                    className: G.t$,
                    children: f.map((e, t) =>
                        (0, a.jsx)(
                            Y,
                            {
                                item: e,
                                isPlaying: s === e.key,
                                onPlay: () => o(t + 1),
                                onHoverStart: d,
                                onHoverEnd: u,
                                className: G.ZL,
                                children: (0, a.jsx)(U, { title: h ? e.title : void 0 }),
                            },
                            e.key,
                        ),
                    ),
                }),
        ],
    });
}
var H = i(4431);
function B(e) {
    let { items: t, onViewAll: i, className: n } = e,
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
        x = (0, a.jsx)(L.D, { variant: "text-xs/medium", id: s, children: D.intl.string(D.t.zY8Ghg) }),
        f = (0, a.jsx)(z, { items: t, onPlay: u, onHoverPlay: m }),
        p = 1 === t.length,
        h = p ? t[0].title?.trim() : void 0;
    return (0, a.jsx)("section", {
        "aria-labelledby": s,
        children: (0, a.jsxs)(w.A.Overlay, {
            className: A()(H.kL, p && H.oE, n),
            children: [
                p
                    ? (0, a.jsxs)(b.D, {
                          className: H.XL,
                          "aria-label": D.intl.string(D.t.rUEjBe),
                          onClick: d,
                          children: [
                              x,
                              null != h &&
                                  "" !== h &&
                                  (0, a.jsx)(S.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      className: H.ID,
                                      children: (0, a.jsx)(_.A, { children: h }),
                                  }),
                          ],
                      })
                    : (0, a.jsxs)("div", {
                          className: H.wx,
                          children: [
                              x,
                              (0, a.jsx)(k.Q, {
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
var F = i(403581),
    J = i(661531),
    q = i(448766),
    K = i(326009),
    Q = i(892572),
    $ = i(564118);
function Z(e) {
    let { header: t } = e;
    return (0, a.jsxs)("div", {
        className: $.wx,
        children: [
            (0, a.jsx)(F.t, { className: $.nr, size: "xxs", color: J.A.colors.ICON_DEFAULT }),
            (0, a.jsx)(S.E, { className: $.TK, variant: "text-xs/medium", lineClamp: 1, children: t }),
        ],
    });
}
function X(e) {
    let { header: t, section: i, userId: l } = e,
        n = "" !== i.title;
    return (0, a.jsxs)("div", {
        className: $.PY,
        children: [
            (0, a.jsxs)("div", {
                className: $.rD,
                children: [
                    (0, a.jsx)(Z, { header: t }),
                    (0, a.jsxs)("div", {
                        className: $.I_,
                        children: [
                            n
                                ? (0, a.jsx)(L.D, {
                                      className: A()($.CH, Q.YD),
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, q.j)(i.title),
                                  })
                                : null,
                            (0, a.jsx)(S.E, {
                                className: $.G6,
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
                ? (0, a.jsx)(K.N, { className: A()($.N4, { [$.kF]: !n }), userId: l, image: i.image })
                : null,
        ],
    });
}
function ee(e) {
    let { header: t, section: i, userId: l } = e,
        n = i.fields.map((e) => e.image).filter(h.Vq);
    return 0 === n.length
        ? (0, a.jsx)(et, { header: t })
        : (0, a.jsxs)("div", {
              className: $.Zz,
              children: [
                  (0, a.jsx)(Z, { header: t }),
                  (0, a.jsx)("div", {
                      className: $.SS,
                      children: n.map((e, t) =>
                          (0, a.jsx)(K.N, { className: $.Bi, userId: l, image: e, canAnimate: !1 }, t),
                      ),
                  }),
              ],
          });
}
function et(e) {
    let { header: t } = e;
    return (0, a.jsxs)("div", {
        className: $.$R,
        children: [
            (0, a.jsx)(Z, { header: t }),
            (0, a.jsx)(S.E, {
                className: $.VC,
                variant: "text-xs/medium",
                color: "text-subtle",
                children: D.intl.string(D.t.KOUwKV),
            }),
        ],
    });
}
function ei(e) {
    let { userId: t, widget: i } = e,
        l = i.sections[0];
    return null == l
        ? (0, a.jsx)(et, { header: i.header })
        : "cover" === l.type && ("" !== l.title || null != l.image)
          ? (0, a.jsx)(X, { header: i.header, section: l, userId: t })
          : "fields" === l.type
            ? (0, a.jsx)(ee, { header: i.header, section: l, userId: t })
            : (0, a.jsx)(et, { header: i.header });
}
function ea(e) {
    let { className: t, onClick: i, userId: n, widget: s } = e,
        { trackUserProfileAction: r } = (0, g.NJ)(),
        c = l.useRef(!1);
    return (
        l.useEffect(() => {
            c.current || (r({ action: "VIEW_PERSONAL_WIDGET_PREVIEW" }), (c.current = !0));
        }, [r, s.id]),
        (0, a.jsx)(b.D, {
            onClick: function () {
                (r({ action: "PRESS_PERSONAL_WIDGET_PREVIEW" }), i?.());
            },
            "aria-label": D.intl.string(D.t["2sdfeb"]),
            children: (0, a.jsx)(w.A.Overlay, {
                className: A()($.kL, t),
                children: (0, a.jsx)(ei, { userId: n, widget: s }),
            }),
        })
    );
}
var el = i(321108),
    en = i(939496),
    es = i(996988),
    er = i(580065);
function ec(e) {
    var t;
    let i,
        { widgets: n = [], onClick: s, className: r } = e,
        { trackUserProfileAction: c } = (0, g.NJ)(),
        o =
            ((t = n.filter((e) => e instanceof j.R)),
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
        { themeType: u } = (0, en.E)(),
        m = u === es.d.SIDEBAR,
        f = (0, l.useRef)(!1),
        p = (0, el.A)(d),
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
        (0, a.jsx)(b.D, {
            "aria-label": D.intl.string(D.t.JjiwFx),
            onClick: () => {
                (c({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), s());
            },
            className: er.QF,
            children: (0, a.jsxs)(w.A.Overlay, {
                className: A()(er.WH, r),
                children: [
                    (0, a.jsx)(S.E, {
                        variant: m ? "text-sm/medium" : "text-xs/medium",
                        children: D.intl.string(D.t.JjiwFx),
                    }),
                    (0, a.jsx)("div", {
                        className: er.Pt,
                        children: E.map((e, t) =>
                            (0, a.jsx)(
                                eo,
                                {
                                    iconUrl: e.image,
                                    name: e.name,
                                    displayCount: t === E.length - 1 && d.length > 4,
                                    gameCount: d.length - E.length,
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
function eo(e) {
    let { iconUrl: t, name: i, displayCount: l, gameCount: n } = e;
    return (0, a.jsxs)("div", {
        className: er.Kk,
        children: [
            (0, a.jsx)("img", { className: A()({ [er.um]: l }), src: t, alt: i }),
            l &&
                (0, a.jsx)("div", {
                    className: er.pp,
                    children: (0, a.jsxs)(S.E, { variant: "text-xs/medium", className: er.gq, children: ["+", n] }),
                }),
        ],
    });
}
var ed = i(518477);
function eu(e) {
    let { user: t, widgets: i = [], ...R } = e,
        {
            openModal: A,
            onExpand: _,
            openClipsGallery: L,
        } = (function (e) {
            let { onOpenUserProfileModal: t } = e,
                { analyticsLocations: i } = (0, o.Ay)(),
                { trackUserProfileAction: a } = (0, g.NJ)(),
                n = l.useCallback(() => {
                    t?.({ tabSection: ed.RP.WIDGETS });
                }, [t]),
                s = l.useCallback(() => {
                    (a({ action: "PRESS_SHOW_MORE_WIDGETS", analyticsLocations: i }), n());
                }, [a, i, n]);
            return {
                openModal: n,
                onExpand: s,
                openClipsGallery: l.useCallback(() => {
                    t?.({ tabSection: ed.RP.WIDGETS, scrollTarget: r.x.CLIPS_GALLERY });
                }, [t]),
            };
        })({ user: t, widgets: i, ...R }),
        b = N.useConfig({ location: "UserProfileStackedWidgetPreviews" }).enabled,
        S = l.useMemo(() => i.filter((e) => e instanceof j.R), [i]),
        k = l.useMemo(() => S.map((e) => e.applicationId), [S]),
        w = (0, x.A)(k),
        y = l.useMemo(() => new Map(w.filter(h.Vq).map((e) => [e.id, e])), [w]),
        T = (0, m.A)(k),
        M = l.useMemo(() => new Map(T.map((e) => [e.application_id, e])), [T]),
        { data: V } = (0, f.P)(t.id),
        G = l.useMemo(() => new Map(V?.map((e) => [e.application_id, e])), [V]),
        O = (0, c.bG)([p.default], () => p.default.locale),
        U = (0, c.cf)([u.A], () => Object.fromEntries(S.map((e) => [e.applicationId, u.A.getAssets(e.applicationId)]))),
        Y = l.useMemo(
            () =>
                0 === y.size || 0 === M.size || 0 === G.size
                    ? null
                    : new Map(
                          S.map((e) => {
                              let t = y.get(e.applicationId),
                                  i = M.get(e.applicationId),
                                  a = G.get(e.applicationId);
                              if (null == t || null == i || null == a) return null;
                              let l = i.surfaces;
                              if (null == l || null == l[s.m.MINI_PROFILE]) return null;
                              let r = (0, n.VG)(a.profile),
                                  c = Object.values(U[e.applicationId] ?? {}).filter(h.Vq);
                              return [e, { surfaceConfigs: i.surfaces, data: r, application: t, assets: c }];
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
                        let t = Y?.get(s);
                        if (null == t) continue;
                        l.push(
                            (0, a.jsx)(
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
                    } else if (s instanceof I.Yy && !n)
                        (l.push((0, a.jsx)(ec, { widgets: i, onClick: A, ...e }, "collection-breadcrumb")), (n = !0));
                    else if (s instanceof v.Tu)
                        l.push(
                            (0, a.jsx)(ea, { userId: t.id, widget: s, onClick: A, ...e }, s.id ?? "personal-widget"),
                        );
                    else if (s instanceof E.kM) {
                        if (!b) continue;
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
                        l.push((0, a.jsx)(B, { items: t, onViewAll: L, ...e }, s.id ?? "clips-gallery-widget"));
                    }
                return l;
            },
            [i, A, Y, O, t.id, b, L],
        );
    return 0 === i.length ? null : (0, a.jsx)(C.A, { renderCards: z, heading: D.intl.string(D.t.Y55Tua), onExpand: _ });
}
