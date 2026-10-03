(i.d(t, { A: () => em }), i(321073));
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
    p = i(201718),
    f = i(773669),
    h = i(403362),
    g = i(183555),
    j = i(633075),
    E = i(646976),
    I = i(289173),
    v = i(210598);
let C = (0, i(945810).mj)({
    name: "2026-07-clips-on-profile-viewer",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var N = i(80330),
    R = i(139730),
    L = i(503698),
    A = i.n(L),
    P = i(3026),
    _ = i(297264),
    b = i(939249),
    w = i(834730),
    S = i(123292),
    k = i(946356),
    y = i(782134),
    M = i(682176),
    V = i(314531),
    D = i(798108),
    G = i(558285),
    T = i(608857),
    W = i(375708),
    U = i(599672);
function O(e) {
    let { className: t } = e;
    return (0, a.jsx)("div", {
        className: A()(U.Rr, t),
        "aria-hidden": !0,
        children: (0, a.jsx)(y.PlayIcon, { size: "xxs", color: "currentColor" }),
    });
}
function Y(e) {
    let { title: t } = e;
    return null == t || "" === t.trim()
        ? (0, a.jsx)(O, { className: U.Or })
        : (0, a.jsx)(D.A, {
              contentClassName: U.W_,
              children: (0, a.jsxs)("div", {
                  className: U.E4,
                  children: [
                      (0, a.jsx)(w.E, {
                          variant: "text-xs/semibold",
                          color: "text-overlay-light",
                          className: U.rd,
                          children: (0, a.jsx)(P.A, { children: t }),
                      }),
                      (0, a.jsx)(O, { className: U.l9 }),
                  ],
              }),
          });
}
function z(e) {
    let { item: t, isPlaying: i, onPlay: l, onHoverStart: s, onHoverEnd: n, className: r, children: c } = e;
    return (0, a.jsxs)(b.D, {
        className: A()(U.Vs, r),
        "aria-label": W.intl.string(W.t.CscLHM),
        onClick: l,
        onMouseEnter: () => s(t.key),
        onMouseLeave: n,
        children: [(0, a.jsx)(V.A, { item: t, ringSize: "sm", isPlaying: i, className: U.nC }), c],
    });
}
function H(e) {
    let { items: t, onPlay: i, onHoverPlay: s } = e,
        [n, r] = l.useState(null),
        c = l.useRef(void 0);
    l.useEffect(() => {
        (0, M.v)();
    }, []);
    let o = l.useCallback(
            (e) => {
                (i?.(), (0, G.A)({ clips: t, startingIndex: e }));
            },
            [t, i],
        ),
        d = l.useCallback(
            (e) => {
                (window.clearTimeout(c.current),
                    (c.current = window.setTimeout(() => {
                        (r(e), s?.());
                    }, 150)));
            },
            [s],
        ),
        u = l.useCallback(() => {
            (window.clearTimeout(c.current), r(null));
        }, []);
    l.useEffect(() => () => window.clearTimeout(c.current), []);
    let [m, ...x] = t;
    if (null == m) return null;
    let p = x.slice(0, 2),
        f = 0 === p.length,
        h = 1 === p.length,
        g = f ? void 0 : m.title;
    return (0, a.jsxs)("div", {
        className: A()(U.z7, { [U.J0]: f, [U.V2]: h }),
        children: [
            (0, a.jsx)(z, {
                item: m,
                isPlaying: n === m.key,
                onPlay: () => o(0),
                onHoverStart: d,
                onHoverEnd: u,
                className: U.N4,
                children: (0, a.jsx)(Y, { title: g }),
            }),
            p.length > 0 &&
                (0, a.jsx)("div", {
                    className: U.t$,
                    children: p.map((e, t) =>
                        (0, a.jsx)(
                            z,
                            {
                                item: e,
                                isPlaying: n === e.key,
                                onPlay: () => o(t + 1),
                                onHoverStart: d,
                                onHoverEnd: u,
                                className: U.ZL,
                                children: (0, a.jsx)(Y, { title: h ? e.title : void 0 }),
                            },
                            e.key,
                        ),
                    ),
                }),
        ],
    });
}
var B = i(4431);
function q(e) {
    let { items: t, onViewAll: i, className: s } = e,
        n = l.useId(),
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
        x = (0, a.jsx)(_.D, { variant: "text-xs/medium", id: n, children: W.intl.string(W.t.zY8Ghg) }),
        p = (0, a.jsx)(H, { items: t, onPlay: u, onHoverPlay: m }),
        f = 1 === t.length,
        h = f ? t[0].title?.trim() : void 0;
    return (0, a.jsx)("section", {
        "aria-labelledby": n,
        children: (0, a.jsxs)(k.A.Overlay, {
            className: A()(B.kL, f && B.oE, s),
            children: [
                f
                    ? (0, a.jsxs)(b.D, {
                          className: B.XL,
                          "aria-label": W.intl.string(W.t.rUEjBe),
                          onClick: d,
                          children: [
                              x,
                              null != h &&
                                  "" !== h &&
                                  (0, a.jsx)(w.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      className: B.ID,
                                      children: (0, a.jsx)(P.A, { children: h }),
                                  }),
                          ],
                      })
                    : (0, a.jsxs)("div", {
                          className: B.wx,
                          children: [
                              x,
                              (0, a.jsx)(S.Q, {
                                  variant: "secondary",
                                  textVariant: "text-xs/medium",
                                  onClick: d,
                                  text: W.intl.string(W.t.rUEjBe),
                              }),
                          ],
                      }),
                p,
            ],
        }),
    });
}
var J = i(403581),
    K = i(661531),
    F = i(448766),
    Q = i(326009),
    $ = i(892572),
    Z = i(564118);
function X(e) {
    let { header: t } = e;
    return (0, a.jsxs)("div", {
        className: Z.wx,
        children: [
            (0, a.jsx)(J.t, { className: Z.nr, size: "xxs", color: K.A.colors.ICON_DEFAULT }),
            (0, a.jsx)(w.E, { className: Z.TK, variant: "text-xs/medium", lineClamp: 1, children: t }),
        ],
    });
}
function ee(e) {
    let { header: t, section: i, userId: l } = e,
        s = "" !== i.title;
    return (0, a.jsxs)("div", {
        className: Z.PY,
        children: [
            (0, a.jsxs)("div", {
                className: Z.rD,
                children: [
                    (0, a.jsx)(X, { header: t }),
                    (0, a.jsxs)("div", {
                        className: Z.I_,
                        children: [
                            s
                                ? (0, a.jsx)(_.D, {
                                      className: A()(Z.CH, $.YD),
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, F.j)(i.title),
                                  })
                                : null,
                            (0, a.jsx)(w.E, {
                                className: Z.G6,
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: W.intl.string(W.t.KOUwKV),
                            }),
                        ],
                    }),
                ],
            }),
            null != i.image
                ? (0, a.jsx)(Q.N, { className: A()(Z.N4, { [Z.kF]: !s }), userId: l, image: i.image })
                : null,
        ],
    });
}
function et(e) {
    let { header: t, section: i, userId: l } = e,
        s = i.fields.map((e) => e.image).filter(h.Vq);
    return 0 === s.length
        ? (0, a.jsx)(ei, { header: t })
        : (0, a.jsxs)("div", {
              className: Z.Zz,
              children: [
                  (0, a.jsx)(X, { header: t }),
                  (0, a.jsx)("div", {
                      className: Z.SS,
                      children: s.map((e, t) =>
                          (0, a.jsx)(Q.N, { className: Z.Bi, userId: l, image: e, canAnimate: !1 }, t),
                      ),
                  }),
              ],
          });
}
function ei(e) {
    let { header: t } = e;
    return (0, a.jsxs)("div", {
        className: Z.$R,
        children: [
            (0, a.jsx)(X, { header: t }),
            (0, a.jsx)(w.E, {
                className: Z.VC,
                variant: "text-xs/medium",
                color: "text-subtle",
                children: W.intl.string(W.t.KOUwKV),
            }),
        ],
    });
}
function ea(e) {
    let { userId: t, widget: i } = e,
        l = i.sections[0];
    return null == l
        ? (0, a.jsx)(ei, { header: i.header })
        : "cover" === l.type && ("" !== l.title || null != l.image)
          ? (0, a.jsx)(ee, { header: i.header, section: l, userId: t })
          : "fields" === l.type
            ? (0, a.jsx)(et, { header: i.header, section: l, userId: t })
            : (0, a.jsx)(ei, { header: i.header });
}
function el(e) {
    let { className: t, onClick: i, userId: s, widget: n } = e,
        { trackUserProfileAction: r } = (0, g.NJ)(),
        c = l.useRef(!1);
    return (
        l.useEffect(() => {
            c.current || (r({ action: "VIEW_PERSONAL_WIDGET_PREVIEW" }), (c.current = !0));
        }, [r, n.id]),
        (0, a.jsx)(b.D, {
            onClick: function () {
                (r({ action: "PRESS_PERSONAL_WIDGET_PREVIEW" }), i?.());
            },
            "aria-label": W.intl.string(W.t["2sdfeb"]),
            children: (0, a.jsx)(k.A.Overlay, {
                className: A()(Z.kL, t),
                children: (0, a.jsx)(ea, { userId: s, widget: n }),
            }),
        })
    );
}
var es = i(321108),
    en = i(939496),
    er = i(996988),
    ec = i(580065);
function eo(e) {
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
            [s, o],
        ),
        { themeType: u } = (0, en.E)(),
        m = u === er.d.SIDEBAR,
        p = (0, l.useRef)(!1),
        f = (0, es.A)(d),
        E = (0, l.useMemo)(
            () =>
                f
                    .map((e) => ({ image: e.getIconURL(48) ?? "", name: e.name }))
                    .filter((e) => "" !== e.image)
                    .slice(0, 4),
            [f],
        );
    return (
        (0, l.useEffect)(() => {
            0 === E.length || p.current || (c({ action: "VIEW_GAME_WIDGET_BREADCRUMB" }), (p.current = !0));
        }, [c, E.length]),
        (0, a.jsx)(b.D, {
            "aria-label": W.intl.string(W.t.JjiwFx),
            onClick: () => {
                (c({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), n());
            },
            className: ec.QF,
            children: (0, a.jsxs)(k.A.Overlay, {
                className: A()(ec.WH, r),
                children: [
                    (0, a.jsx)(w.E, {
                        variant: m ? "text-sm/medium" : "text-xs/medium",
                        children: W.intl.string(W.t.JjiwFx),
                    }),
                    (0, a.jsx)("div", {
                        className: ec.Pt,
                        children: E.map((e, t) =>
                            (0, a.jsx)(
                                ed,
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
function ed(e) {
    let { iconUrl: t, name: i, displayCount: l, gameCount: s } = e;
    return (0, a.jsxs)("div", {
        className: ec.Kk,
        children: [
            (0, a.jsx)("img", { className: A()({ [ec.um]: l }), src: t, alt: i }),
            l &&
                (0, a.jsx)("div", {
                    className: ec.pp,
                    children: (0, a.jsxs)(w.E, { variant: "text-xs/medium", className: ec.gq, children: ["+", s] }),
                }),
        ],
    });
}
var eu = i(518477);
function em(e) {
    let { user: t, widgets: i = [], ...L } = e,
        {
            openModal: A,
            onExpand: P,
            openClipsGallery: _,
        } = (function (e) {
            let { onOpenUserProfileModal: t } = e,
                { analyticsLocations: i } = (0, o.Ay)(),
                { trackUserProfileAction: a } = (0, g.NJ)(),
                s = l.useCallback(() => {
                    t?.({ tabSection: eu.RP.WIDGETS });
                }, [t]),
                n = l.useCallback(() => {
                    (a({ action: "PRESS_SHOW_MORE_WIDGETS", analyticsLocations: i }), s());
                }, [a, i, s]);
            return {
                openModal: s,
                onExpand: n,
                openClipsGallery: l.useCallback(() => {
                    t?.({ tabSection: eu.RP.WIDGETS, scrollTarget: r.x.CLIPS_GALLERY });
                }, [t]),
            };
        })({ user: t, widgets: i, ...L }),
        b = C.useConfig({ location: "UserProfileStackedWidgetPreviews" }).enabled,
        w = l.useMemo(() => i.filter((e) => e instanceof j.R), [i]),
        S = l.useMemo(() => w.map((e) => e.applicationId), [w]),
        k = (0, x.A)(S),
        y = l.useMemo(() => new Map(k.filter(h.Vq).map((e) => [e.id, e])), [k]),
        M = (0, m.A)(S),
        V = l.useMemo(() => new Map(M.map((e) => [e.application_id, e])), [M]),
        { data: D } = (0, p.P)(t.id),
        G = l.useMemo(() => new Map(D?.map((e) => [e.application_id, e])), [D]),
        U = (0, c.bG)([f.default], () => f.default.locale),
        O = (0, c.cf)([u.A], () => Object.fromEntries(w.map((e) => [e.applicationId, u.A.getAssets(e.applicationId)]))),
        Y = l.useMemo(
            () =>
                0 === y.size || 0 === V.size || 0 === G.size
                    ? null
                    : new Map(
                          w
                              .map((e) => {
                                  let t = y.get(e.applicationId),
                                      i = V.get(e.applicationId),
                                      a = G.get(e.applicationId);
                                  if (null == t || null == i || null == a) return null;
                                  let l = i.surfaces;
                                  if (null == l || null == l[n.m.MINI_PROFILE]) return null;
                                  let r = (0, s.VG)(a.profile),
                                      c = Object.values(O[e.applicationId] ?? {}).filter(h.Vq);
                                  return [e, { surfaceConfigs: i.surfaces, data: r, application: t, assets: c }];
                              })
                              .filter(h.Vq),
                      ),
            [w, y, V, G, O],
        ),
        z = l.useCallback(
            (e) => {
                let l = [],
                    s = !1;
                for (let n of i)
                    if (n instanceof j.R) {
                        let t = Y?.get(n);
                        if (null == t) continue;
                        l.push(
                            (0, a.jsx)(
                                R.A,
                                {
                                    application: t.application,
                                    rendererProps: {
                                        locale: U,
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
                                    onClick: A,
                                    ...e,
                                },
                                `application-widget-${n.applicationId}`,
                            ),
                        );
                    } else if (n instanceof I.Yy && !s)
                        (l.push((0, a.jsx)(eo, { widgets: i, onClick: A, ...e }, "collection-breadcrumb")), (s = !0));
                    else if (n instanceof v.Tu)
                        l.push(
                            (0, a.jsx)(el, { userId: t.id, widget: n, onClick: A, ...e }, n.id ?? "personal-widget"),
                        );
                    else if (n instanceof E.kM) {
                        if (!b) continue;
                        let t = n.clips
                            .flatMap((e) =>
                                "saved" === e.status
                                    ? [
                                          {
                                              status: "saved",
                                              key: e.id,
                                              gameId: e.gameId,
                                              videoURL: e.videoURL,
                                              thumbnailURL: e.thumbnailURL,
                                              spritesheetImageURL: e.spritesheetImageURL,
                                              spritesheetVttURL: e.spritesheetVttURL,
                                              title: e.title,
                                              tags: e.tags,
                                          },
                                      ]
                                    : [],
                            )
                            .filter(T.K);
                        if (0 === t.length) continue;
                        l.push((0, a.jsx)(q, { items: t, onViewAll: _, ...e }, n.id ?? "clips-gallery-widget"));
                    }
                return l;
            },
            [i, A, Y, U, t.id, b, _],
        );
    return 0 === i.length ? null : (0, a.jsx)(N.A, { renderCards: z, heading: W.intl.string(W.t.Y55Tua), onExpand: P });
}
