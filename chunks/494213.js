(i.d(t, { A: () => Z }), i(321073));
var a = i(477900),
    l = i(582128),
    n = i(90947),
    s = i(598748),
    r = i(540185),
    c = i(855986),
    o = i(688810),
    d = i(549699),
    u = i(29496),
    m = i(352003),
    p = i(429913),
    f = i(201718),
    g = i(773669),
    x = i(403362),
    h = i(183555),
    E = i(633075),
    j = i(646976),
    I = i(289173);
let v = (0, i(945810).mj)({
    name: "2026-07-clips-on-profile-viewer",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var C = i(80330),
    b = i(139730),
    R = i(503698),
    L = i.n(R),
    y = i(3026),
    A = i(534514),
    P = i(939249),
    _ = i(834730),
    k = i(123292),
    w = i(946356),
    S = i(782134),
    N = i(682176),
    M = i(741934),
    G = i(798108),
    T = i(558285),
    V = i(608857),
    U = i(792996),
    D = i(599672);
function W(e) {
    let { className: t } = e;
    return (0, a.jsx)("div", {
        className: L()(D.Rr, t),
        "aria-hidden": !0,
        children: (0, a.jsx)(S.PlayIcon, { size: "xxs", color: "currentColor" }),
    });
}
function Y(e) {
    let { title: t } = e;
    return null == t || "" === t.trim()
        ? (0, a.jsx)(W, { className: D.Or })
        : (0, a.jsx)(G.A, {
              contentClassName: D.W_,
              children: (0, a.jsxs)("div", {
                  className: D.E4,
                  children: [
                      (0, a.jsx)(_.E, {
                          variant: "body-xs/semibold",
                          color: "text-overlay-light",
                          className: D.rd,
                          children: (0, a.jsx)(y.A, { children: t }),
                      }),
                      (0, a.jsx)(W, { className: D.l9 }),
                  ],
              }),
          });
}
function O(e) {
    let { item: t, isPlaying: i, onPlay: l, onHoverStart: n, onHoverEnd: s, className: r, children: c } = e;
    return (0, a.jsxs)(P.D, {
        className: L()(D.Vs, r),
        "aria-label": U.intl.string(U.t.CscLHM),
        onClick: l,
        onMouseEnter: () => n(t.key),
        onMouseLeave: s,
        children: [(0, a.jsx)(M.A, { item: t, ringSize: "sm", isPlaying: i, className: D.nC }), c],
    });
}
function H(e) {
    let { items: t, onPlay: i, onHoverPlay: n } = e,
        [s, r] = l.useState(null),
        c = l.useRef(void 0);
    l.useEffect(() => {
        (0, N.v)();
    }, []);
    let o = l.useCallback(
            (e) => {
                (i?.(), (0, T.A)({ clips: t, startingIndex: e }));
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
    let [m, ...p] = t;
    if (null == m) return null;
    let f = p.slice(0, 2),
        g = 0 === f.length,
        x = 1 === f.length,
        h = g ? void 0 : m.title;
    return (0, a.jsxs)("div", {
        className: L()(D.z7, { [D.J0]: g, [D.V2]: x }),
        children: [
            (0, a.jsx)(O, {
                item: m,
                isPlaying: s === m.key,
                onPlay: () => o(0),
                onHoverStart: d,
                onHoverEnd: u,
                className: D.N4,
                children: (0, a.jsx)(Y, { title: h }),
            }),
            f.length > 0 &&
                (0, a.jsx)("div", {
                    className: D.t$,
                    children: f.map((e, t) =>
                        (0, a.jsx)(
                            O,
                            {
                                item: e,
                                isPlaying: s === e.key,
                                onPlay: () => o(t + 1),
                                onHoverStart: d,
                                onHoverEnd: u,
                                className: D.ZL,
                                children: (0, a.jsx)(Y, { title: x ? e.title : void 0 }),
                            },
                            e.key,
                        ),
                    ),
                }),
        ],
    });
}
var z = i(4431);
function B(e) {
    let { items: t, onViewAll: i, className: n } = e,
        s = l.useId(),
        { trackUserProfileAction: c } = (0, h.NJ)(),
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
        p = (0, a.jsx)(A.D, { variant: "body-xs/medium", id: s, children: U.intl.string(U.t.zY8Ghg) }),
        f = (0, a.jsx)(H, { items: t, onPlay: u, onHoverPlay: m }),
        g = 1 === t.length,
        x = g ? t[0].title?.trim() : void 0;
    return (0, a.jsx)("section", {
        "aria-labelledby": s,
        children: (0, a.jsxs)(w.A.Overlay, {
            className: L()(z.kL, g && z.oE, n),
            children: [
                g
                    ? (0, a.jsxs)(P.D, {
                          className: z.XL,
                          "aria-label": U.intl.string(U.t.rUEjBe),
                          onClick: d,
                          children: [
                              p,
                              null != x &&
                                  "" !== x &&
                                  (0, a.jsx)(_.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      className: z.ID,
                                      children: (0, a.jsx)(y.A, { children: x }),
                                  }),
                          ],
                      })
                    : (0, a.jsxs)("div", {
                          className: z.wx,
                          children: [
                              p,
                              (0, a.jsx)(k.Q, {
                                  variant: "secondary",
                                  textVariant: "body-xs/medium",
                                  onClick: d,
                                  text: U.intl.string(U.t.rUEjBe),
                              }),
                          ],
                      }),
                f,
            ],
        }),
    });
}
var q = i(321108),
    J = i(939496),
    F = i(996988),
    Q = i(580065);
function K(e) {
    var t;
    let i,
        { widgets: n = [], onClick: s, className: r } = e,
        { trackUserProfileAction: c } = (0, h.NJ)(),
        o =
            ((t = n.filter((e) => e instanceof E.R)),
            (i = (0, p.A)(t.map((e) => e.applicationId))),
            (0, l.useMemo)(
                () =>
                    Object.fromEntries(
                        i
                            .filter(x.Vq)
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
                                : e instanceof E.R
                                  ? o[e.applicationId]
                                  : void 0,
                        )
                        .filter(x.Vq)
                        .flat(),
                ),
            ],
            [n, o],
        ),
        { themeType: u } = (0, J.E)(),
        m = u === F.d.SIDEBAR,
        f = (0, l.useRef)(!1),
        g = (0, q.A)(d),
        j = (0, l.useMemo)(
            () =>
                g
                    .map((e) => ({ image: e.getIconURL(48) ?? "", name: e.name }))
                    .filter((e) => "" !== e.image)
                    .slice(0, 4),
            [g],
        );
    return (
        (0, l.useEffect)(() => {
            0 === j.length || f.current || (c({ action: "VIEW_GAME_WIDGET_BREADCRUMB" }), (f.current = !0));
        }, [c, j.length]),
        (0, a.jsx)(P.D, {
            "aria-label": U.intl.string(U.t.JjiwFx),
            onClick: () => {
                (c({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), s());
            },
            className: Q.QF,
            children: (0, a.jsxs)(w.A.Overlay, {
                className: L()(Q.WH, r),
                children: [
                    (0, a.jsx)(_.E, {
                        variant: m ? "body-sm/medium" : "body-xs/medium",
                        color: "text-strong",
                        children: U.intl.string(U.t.JjiwFx),
                    }),
                    (0, a.jsx)("div", {
                        className: Q.Pt,
                        children: j.map((e, t) =>
                            (0, a.jsx)(
                                $,
                                {
                                    iconUrl: e.image,
                                    name: e.name,
                                    displayCount: t === j.length - 1 && d.length > 4,
                                    gameCount: d.length - j.length,
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
function $(e) {
    let { iconUrl: t, name: i, displayCount: l, gameCount: n } = e;
    return (0, a.jsxs)("div", {
        className: Q.Kk,
        children: [
            (0, a.jsx)("img", { className: L()({ [Q.um]: l }), src: t, alt: i }),
            l &&
                (0, a.jsx)("div", {
                    className: Q.pp,
                    children: (0, a.jsxs)(_.E, { variant: "body-xs/medium", className: Q.gq, children: ["+", n] }),
                }),
        ],
    });
}
var X = i(518477);
function Z(e) {
    let { user: t, widgets: i = [], ...R } = e,
        {
            openModal: L,
            onExpand: y,
            openClipsGallery: A,
        } = (function (e) {
            let { onOpenUserProfileModal: t } = e,
                { analyticsLocations: i } = (0, o.Ay)(),
                { trackUserProfileAction: a } = (0, h.NJ)(),
                n = l.useCallback(() => {
                    t?.({ tabSection: X.RP.WIDGETS });
                }, [t]),
                s = l.useCallback(() => {
                    (a({ action: "PRESS_SHOW_MORE_WIDGETS", analyticsLocations: i }), n());
                }, [a, i, n]);
            return {
                openModal: n,
                onExpand: s,
                openClipsGallery: l.useCallback(() => {
                    t?.({ tabSection: X.RP.WIDGETS, scrollTarget: r.x.CLIPS_GALLERY });
                }, [t]),
            };
        })({ user: t, widgets: i, ...R }),
        P = v.useConfig({ location: "UserProfileStackedWidgetPreviews" }).enabled,
        _ = l.useMemo(() => i.filter((e) => e instanceof E.R), [i]),
        k = l.useMemo(() => _.map((e) => e.applicationId), [_]),
        w = (0, p.A)(k),
        S = l.useMemo(() => new Map(w.filter(x.Vq).map((e) => [e.id, e])), [w]),
        N = (0, m.A)(k),
        M = l.useMemo(() => new Map(N.map((e) => [e.application_id, e])), [N]),
        { data: G } = (0, f.P)(t.id),
        T = l.useMemo(() => new Map(G?.map((e) => [e.application_id, e])), [G]),
        D = (0, c.bG)([g.default], () => g.default.locale),
        W = (0, c.cf)([u.A], () => Object.fromEntries(_.map((e) => [e.applicationId, u.A.getAssets(e.applicationId)]))),
        Y = l.useMemo(
            () =>
                0 === S.size || 0 === M.size || 0 === T.size
                    ? null
                    : new Map(
                          _.map((e) => {
                              let t = S.get(e.applicationId),
                                  i = M.get(e.applicationId),
                                  a = T.get(e.applicationId);
                              if (null == t || null == i || null == a) return null;
                              let l = i.surfaces;
                              if (null == l || null == l[s.m.MINI_PROFILE]) return null;
                              let r = (0, n.VG)(a.profile),
                                  c = Object.values(W[e.applicationId] ?? {}).filter(x.Vq);
                              return [e, { surfaceConfigs: i.surfaces, data: r, application: t, assets: c }];
                          }).filter(x.Vq),
                      ),
            [_, S, M, T, W],
        ),
        O = l.useCallback(
            (e) => {
                let t = [],
                    l = !1;
                for (let n of i)
                    if (n instanceof E.R) {
                        let i = Y?.get(n);
                        if (null == i) continue;
                        t.push(
                            (0, a.jsx)(
                                b.A,
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
                                                (0, d.Q)(n.applicationId, e, e.metadata.width),
                                            localizedStrings: [],
                                        },
                                    },
                                    onClick: L,
                                    ...e,
                                },
                                `application-widget-${n.applicationId}`,
                            ),
                        );
                    } else if (n instanceof I.Yy && !l)
                        (t.push((0, a.jsx)(K, { widgets: i, onClick: L, ...e }, "collection-breadcrumb")), (l = !0));
                    else if (n instanceof j.kM) {
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
                            .filter(V.K);
                        if (0 === i.length) continue;
                        t.push((0, a.jsx)(B, { items: i, onViewAll: A, ...e }, n.id ?? "clips-gallery-widget"));
                    }
                return t;
            },
            [i, L, Y, D, P, A],
        );
    return 0 === i.length ? null : (0, a.jsx)(C.A, { renderCards: O, heading: U.intl.string(U.t.Y55Tua), onExpand: y });
}
