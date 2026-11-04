(t.d(i, { A: () => em }), t(321073));
var a = t(477900),
    l = t(582128),
    s = t(90947),
    n = t(598748),
    r = t(540185),
    c = t(855986),
    o = t(688810),
    d = t(549699),
    u = t(29496),
    m = t(352003),
    x = t(429913),
    p = t(201718),
    f = t(773669),
    h = t(403362),
    g = t(183555),
    j = t(633075),
    E = t(646976),
    I = t(289173),
    v = t(210598);
let C = (0, t(945810).mj)({
    name: "2026-07-clips-on-profile-viewer",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var N = t(80330),
    b = t(139730),
    R = t(503698),
    y = t.n(R),
    L = t(3026),
    A = t(534514),
    P = t(939249),
    _ = t(834730),
    w = t(123292),
    S = t(946356),
    k = t(782134),
    M = t(682176),
    V = t(741934),
    D = t(798108),
    G = t(558285),
    T = t(608857),
    W = t(792996),
    U = t(599672);
function O(e) {
    let { className: i } = e;
    return (0, a.jsx)("div", {
        className: y()(U.Rr, i),
        "aria-hidden": !0,
        children: (0, a.jsx)(k.PlayIcon, { size: "xxs", color: "currentColor" }),
    });
}
function Y(e) {
    let { title: i } = e;
    return null == i || "" === i.trim()
        ? (0, a.jsx)(O, { className: U.Or })
        : (0, a.jsx)(D.A, {
              contentClassName: U.W_,
              children: (0, a.jsxs)("div", {
                  className: U.E4,
                  children: [
                      (0, a.jsx)(_.E, {
                          variant: "body-xs/semibold",
                          color: "text-overlay-light",
                          className: U.rd,
                          children: (0, a.jsx)(L.A, { children: i }),
                      }),
                      (0, a.jsx)(O, { className: U.l9 }),
                  ],
              }),
          });
}
function z(e) {
    let { item: i, isPlaying: t, onPlay: l, onHoverStart: s, onHoverEnd: n, className: r, children: c } = e;
    return (0, a.jsxs)(P.D, {
        className: y()(U.Vs, r),
        "aria-label": W.intl.string(W.t.CscLHM),
        onClick: l,
        onMouseEnter: () => s(i.key),
        onMouseLeave: n,
        children: [(0, a.jsx)(V.A, { item: i, ringSize: "sm", isPlaying: t, className: U.nC }), c],
    });
}
function H(e) {
    let { items: i, onPlay: t, onHoverPlay: s } = e,
        [n, r] = l.useState(null),
        c = l.useRef(void 0);
    l.useEffect(() => {
        (0, M.v)();
    }, []);
    let o = l.useCallback(
            (e) => {
                (t?.(), (0, G.A)({ clips: i, startingIndex: e }));
            },
            [i, t],
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
    let [m, ...x] = i;
    if (null == m) return null;
    let p = x.slice(0, 2),
        f = 0 === p.length,
        h = 1 === p.length,
        g = f ? void 0 : m.title;
    return (0, a.jsxs)("div", {
        className: y()(U.z7, { [U.J0]: f, [U.V2]: h }),
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
                    children: p.map((e, i) =>
                        (0, a.jsx)(
                            z,
                            {
                                item: e,
                                isPlaying: n === e.key,
                                onPlay: () => o(i + 1),
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
var B = t(4431);
function q(e) {
    let { items: i, onViewAll: t, className: s } = e,
        n = l.useId(),
        { trackUserProfileAction: c } = (0, g.NJ)(),
        o = l.useRef(!1);
    function d() {
        (c({ action: "PRESS_CLIPS_WIDGET_PREVIEW", widgetType: r.x.CLIPS_GALLERY }), t());
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
        x = (0, a.jsx)(A.D, { variant: "body-xs/medium", id: n, children: W.intl.string(W.t.zY8Ghg) }),
        p = (0, a.jsx)(H, { items: i, onPlay: u, onHoverPlay: m }),
        f = 1 === i.length,
        h = f ? i[0].title?.trim() : void 0;
    return (0, a.jsx)("section", {
        "aria-labelledby": n,
        children: (0, a.jsxs)(S.A.Overlay, {
            className: y()(B.kL, f && B.oE, s),
            children: [
                f
                    ? (0, a.jsxs)(P.D, {
                          className: B.XL,
                          "aria-label": W.intl.string(W.t.rUEjBe),
                          onClick: d,
                          children: [
                              x,
                              null != h &&
                                  "" !== h &&
                                  (0, a.jsx)(_.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      className: B.ID,
                                      children: (0, a.jsx)(L.A, { children: h }),
                                  }),
                          ],
                      })
                    : (0, a.jsxs)("div", {
                          className: B.wx,
                          children: [
                              x,
                              (0, a.jsx)(w.Q, {
                                  variant: "secondary",
                                  textVariant: "body-xs/medium",
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
var J = t(403581),
    K = t(646514),
    F = t(448766),
    Q = t(494633),
    $ = t(892572),
    Z = t(564118);
function X(e) {
    let { header: i } = e;
    return (0, a.jsxs)("div", {
        className: Z.wx,
        children: [
            (0, a.jsx)(J.t, { className: Z.nr, size: "xxs", color: K.A.colors.ICON_DEFAULT }),
            (0, a.jsx)(_.E, { className: Z.TK, variant: "body-xs/medium", lineClamp: 1, children: i }),
        ],
    });
}
function ee(e) {
    let { header: i, section: t, userId: l } = e,
        s = "" !== t.title;
    return (0, a.jsxs)("div", {
        className: Z.PY,
        children: [
            (0, a.jsxs)("div", {
                className: Z.rD,
                children: [
                    (0, a.jsx)(X, { header: i }),
                    (0, a.jsxs)("div", {
                        className: Z.I_,
                        children: [
                            s
                                ? (0, a.jsx)(A.D, {
                                      className: y()(Z.CH, $.YD),
                                      variant: "heading-xs/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, F.j)(t.title),
                                  })
                                : null,
                            (0, a.jsx)(_.E, {
                                className: Z.G6,
                                variant: "body-xs/normal",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: W.intl.string(W.t.KOUwKV),
                            }),
                        ],
                    }),
                ],
            }),
            null != t.image
                ? (0, a.jsx)(Q.N, { className: y()(Z.N4, { [Z.kF]: !s }), userId: l, image: t.image })
                : null,
        ],
    });
}
function ei(e) {
    let { header: i, section: t, userId: l } = e,
        s = t.fields.map((e) => e.image).filter(h.Vq);
    return 0 === s.length
        ? (0, a.jsx)(et, { header: i })
        : (0, a.jsxs)("div", {
              className: Z.Zz,
              children: [
                  (0, a.jsx)(X, { header: i }),
                  (0, a.jsx)("div", {
                      className: Z.SS,
                      children: s.map((e, i) =>
                          (0, a.jsx)(Q.N, { className: Z.Bi, userId: l, image: e, canAnimate: !1 }, i),
                      ),
                  }),
              ],
          });
}
function et(e) {
    let { header: i } = e;
    return (0, a.jsxs)("div", {
        className: Z.$R,
        children: [
            (0, a.jsx)(X, { header: i }),
            (0, a.jsx)(_.E, {
                className: Z.VC,
                variant: "body-xs/medium",
                color: "text-subtle",
                children: W.intl.string(W.t.KOUwKV),
            }),
        ],
    });
}
function ea(e) {
    let { userId: i, widget: t } = e,
        l = t.sections[0];
    return null == l
        ? (0, a.jsx)(et, { header: t.header })
        : "cover" === l.type && ("" !== l.title || null != l.image)
          ? (0, a.jsx)(ee, { header: t.header, section: l, userId: i })
          : "fields" === l.type
            ? (0, a.jsx)(ei, { header: t.header, section: l, userId: i })
            : (0, a.jsx)(et, { header: t.header });
}
function el(e) {
    let { className: i, onClick: t, userId: s, widget: n } = e,
        { trackUserProfileAction: r } = (0, g.NJ)(),
        c = l.useRef(!1);
    return (
        l.useEffect(() => {
            c.current || (r({ action: "VIEW_PERSONAL_WIDGET_PREVIEW" }), (c.current = !0));
        }, [r, n.id]),
        (0, a.jsx)(P.D, {
            onClick: function () {
                (r({ action: "PRESS_PERSONAL_WIDGET_PREVIEW" }), t?.());
            },
            "aria-label": W.intl.string(W.t["2sdfeb"]),
            children: (0, a.jsx)(S.A.Overlay, {
                className: y()(Z.kL, i),
                children: (0, a.jsx)(ea, { userId: s, widget: n }),
            }),
        })
    );
}
var es = t(321108),
    en = t(939496),
    er = t(996988),
    ec = t(580065);
function eo(e) {
    var i;
    let t,
        { widgets: s = [], onClick: n, className: r } = e,
        { trackUserProfileAction: c } = (0, g.NJ)(),
        o =
            ((i = s.filter((e) => e instanceof j.R)),
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
        (0, a.jsx)(P.D, {
            "aria-label": W.intl.string(W.t.JjiwFx),
            onClick: () => {
                (c({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), n());
            },
            className: ec.QF,
            children: (0, a.jsxs)(S.A.Overlay, {
                className: y()(ec.WH, r),
                children: [
                    (0, a.jsx)(_.E, {
                        variant: m ? "body-sm/medium" : "body-xs/medium",
                        color: "text-strong",
                        children: W.intl.string(W.t.JjiwFx),
                    }),
                    (0, a.jsx)("div", {
                        className: ec.Pt,
                        children: E.map((e, i) =>
                            (0, a.jsx)(
                                ed,
                                {
                                    iconUrl: e.image,
                                    name: e.name,
                                    displayCount: i === E.length - 1 && d.length > 4,
                                    gameCount: d.length - E.length,
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
function ed(e) {
    let { iconUrl: i, name: t, displayCount: l, gameCount: s } = e;
    return (0, a.jsxs)("div", {
        className: ec.Kk,
        children: [
            (0, a.jsx)("img", { className: y()({ [ec.um]: l }), src: i, alt: t }),
            l &&
                (0, a.jsx)("div", {
                    className: ec.pp,
                    children: (0, a.jsxs)(_.E, { variant: "body-xs/medium", className: ec.gq, children: ["+", s] }),
                }),
        ],
    });
}
var eu = t(518477);
function em(e) {
    let { user: i, widgets: t = [], ...R } = e,
        {
            openModal: y,
            onExpand: L,
            openClipsGallery: A,
        } = (function (e) {
            let { onOpenUserProfileModal: i } = e,
                { analyticsLocations: t } = (0, o.Ay)(),
                { trackUserProfileAction: a } = (0, g.NJ)(),
                s = l.useCallback(() => {
                    i?.({ tabSection: eu.RP.WIDGETS });
                }, [i]),
                n = l.useCallback(() => {
                    (a({ action: "PRESS_SHOW_MORE_WIDGETS", analyticsLocations: t }), s());
                }, [a, t, s]);
            return {
                openModal: s,
                onExpand: n,
                openClipsGallery: l.useCallback(() => {
                    i?.({ tabSection: eu.RP.WIDGETS, scrollTarget: r.x.CLIPS_GALLERY });
                }, [i]),
            };
        })({ user: i, widgets: t, ...R }),
        P = C.useConfig({ location: "UserProfileStackedWidgetPreviews" }).enabled,
        _ = l.useMemo(() => t.filter((e) => e instanceof j.R), [t]),
        w = l.useMemo(() => _.map((e) => e.applicationId), [_]),
        S = (0, x.A)(w),
        k = l.useMemo(() => new Map(S.filter(h.Vq).map((e) => [e.id, e])), [S]),
        M = (0, m.A)(w),
        V = l.useMemo(() => new Map(M.map((e) => [e.application_id, e])), [M]),
        { data: D } = (0, p.P)(i.id),
        G = l.useMemo(() => new Map(D?.map((e) => [e.application_id, e])), [D]),
        U = (0, c.bG)([f.default], () => f.default.locale),
        O = (0, c.cf)([u.A], () => Object.fromEntries(_.map((e) => [e.applicationId, u.A.getAssets(e.applicationId)]))),
        Y = l.useMemo(
            () =>
                0 === k.size || 0 === V.size || 0 === G.size
                    ? null
                    : new Map(
                          _.map((e) => {
                              let i = k.get(e.applicationId),
                                  t = V.get(e.applicationId),
                                  a = G.get(e.applicationId);
                              if (null == i || null == t || null == a) return null;
                              let l = t.surfaces;
                              if (null == l || null == l[n.m.MINI_PROFILE]) return null;
                              let r = (0, s.VG)(a.profile),
                                  c = Object.values(O[e.applicationId] ?? {}).filter(h.Vq);
                              return [e, { surfaceConfigs: t.surfaces, data: r, application: i, assets: c }];
                          }).filter(h.Vq),
                      ),
            [_, k, V, G, O],
        ),
        z = l.useCallback(
            (e) => {
                let l = [],
                    s = !1;
                for (let n of t)
                    if (n instanceof j.R) {
                        let i = Y?.get(n);
                        if (null == i) continue;
                        l.push(
                            (0, a.jsx)(
                                b.A,
                                {
                                    application: i.application,
                                    rendererProps: {
                                        locale: U,
                                        surfaceConfigs: i.surfaceConfigs,
                                        isLoading: !1,
                                        hasIdentity: !0,
                                        resolutionContext: {
                                            data: i.data,
                                            applicationAssets: i.assets,
                                            getApplicationAssetUrl: (e) =>
                                                (0, d.Q)(n.applicationId, e, e.metadata.width),
                                            localizedStrings: [],
                                        },
                                    },
                                    onClick: y,
                                    ...e,
                                },
                                `application-widget-${n.applicationId}`,
                            ),
                        );
                    } else if (n instanceof I.Yy && !s)
                        (l.push((0, a.jsx)(eo, { widgets: t, onClick: y, ...e }, "collection-breadcrumb")), (s = !0));
                    else if (n instanceof v.Tu)
                        l.push(
                            (0, a.jsx)(el, { userId: i.id, widget: n, onClick: y, ...e }, n.id ?? "personal-widget"),
                        );
                    else if (n instanceof E.kM) {
                        if (!P) continue;
                        let i = n.clips
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
                        if (0 === i.length) continue;
                        l.push((0, a.jsx)(q, { items: i, onViewAll: A, ...e }, n.id ?? "clips-gallery-widget"));
                    }
                return l;
            },
            [t, y, Y, U, i.id, P, A],
        );
    return 0 === t.length ? null : (0, a.jsx)(N.A, { renderCards: z, heading: W.intl.string(W.t.Y55Tua), onExpand: L });
}
