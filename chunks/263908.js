i.d(l, { P: () => V });
var t,
    n = i(477900),
    s = i(582128),
    a = i(503698),
    r = i.n(a),
    o = i(834730),
    c = i(17928),
    d = i(997013),
    u = i(311043),
    m = i(454908),
    x = i(280450),
    I = i(403362),
    h = (((t = {})[(t.NONE = 0)] = "NONE"), (t[(t.LOW = 1)] = "LOW"), (t[(t.HIGH = 2)] = "HIGH"), t),
    v = i(825860),
    j = i(661531),
    g = i(866665),
    A = i(573435),
    N = i(409626),
    f = i(692969),
    b = i(658630);
function y(e) {
    let { game: l, activityLevel: i, hideTooltip: t } = e,
        s = (0, f.A)({ gameId: l.id, source: N.GameProfileSources.GuildProfileGames, trackEntryPointImpression: !0 }),
        a = null != s,
        c = l.getIconURL(24);
    if (null == c) return null;
    let d = i?.level === h.HIGH,
        u = (0, n.jsx)(o.E, { variant: "body-sm/medium", color: "interactive-text-active", children: l.name }),
        m = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("img", { className: b.T_, src: c, alt: l.name }),
                d &&
                    (0, n.jsx)(A.Ay, {
                        mask: A.hW.GAMEPLAY_HIGH_ACTIVITY_ICON,
                        width: 14,
                        height: 14,
                        className: b.Sy,
                        children: (0, n.jsx)("div", {
                            className: b._8,
                            children: (0, n.jsx)(v.FireIcon, {
                                color: j.A.unsafe_rawColors.ORANGE_330.css,
                                width: 10,
                                height: 10,
                                size: "custom",
                            }),
                        }),
                    }),
            ],
        });
    return (0, n.jsx)(g.m, {
        __unsupportedReactNodeAsText: u,
        position: "bottom",
        "aria-label": l.name,
        shouldShow: !t,
        children: a
            ? (0, n.jsx)("button", { type: "button", className: r()(b.Gt, b.U_), onClick: s, children: m })
            : (0, n.jsx)("div", { className: b.Gt, children: m }),
    });
}
function C(e) {
    let { games: l, activity: i } = e;
    return (0, n.jsx)("div", {
        className: b.Fz,
        children: l.map((e) =>
            (0, n.jsxs)(
                "div",
                {
                    className: b.ZS,
                    children: [
                        (0, n.jsx)(y, { game: e, activityLevel: i[e.id] }),
                        (0, n.jsx)(o.E, {
                            variant: "body-xs/medium",
                            color: "interactive-text-active",
                            children: e.name,
                        }),
                    ],
                },
                e.id,
            ),
        ),
    });
}
function p(e) {
    let { game: l, activityLevel: i } = e;
    return (0, n.jsxs)("div", {
        className: b.E,
        children: [
            (0, n.jsx)(y, { game: l, activityLevel: i, hideTooltip: !0 }),
            (0, n.jsx)(o.E, { variant: "body-sm/medium", color: "text-default", children: l.name }),
        ],
    });
}
function E(e) {
    let { gamesToDisplay: l, lastGameToDisplay: i, remainingGames: t, activity: a } = e,
        c = i?.getIconURL(24),
        d = s.useMemo(
            () =>
                null == i || null == c
                    ? null
                    : 0 === t.length
                      ? (0, n.jsx)(y, { game: i, activityLevel: a[i.id] })
                      : (0, n.jsx)(g.m, {
                            "aria-label": "",
                            position: "bottom",
                            __unsupportedReactNodeAsText: (0, n.jsx)(C, { games: t, activity: a }),
                            children: (0, n.jsxs)("div", {
                                className: r()(b.Gt, b.oL),
                                children: [
                                    (0, n.jsx)("img", { className: r()(b.T_, b.tJ), src: c, alt: i.name }),
                                    (0, n.jsx)("div", { className: b.Fg }),
                                    (0, n.jsx)("div", {
                                        className: b.AZ,
                                        children: (0, n.jsx)(o.E, {
                                            variant: "body-xs/normal",
                                            color: "text-overlay-light",
                                            children: `+${t.length}`,
                                        }),
                                    }),
                                ],
                            }),
                        }),
            [i, c, t, a],
        );
    return null == l || 0 === l.length
        ? null
        : 1 === l.length
          ? (0, n.jsx)("div", { className: b.kL, children: (0, n.jsx)(p, { game: l[0], activityLevel: a[l[0].id] }) })
          : (0, n.jsxs)("div", {
                className: b.kL,
                children: [l.map((e) => (0, n.jsx)(y, { game: e, activityLevel: a[e.id] }, e.id)), d],
            });
}
var _ = i(3666),
    P = i(788026),
    L = i(775602),
    T = i(713517),
    G = i(690521),
    k = i(229576);
function O(e) {
    let { emoji: l, shouldAnimate: i } = e;
    if (null == l) return null;
    let t = G.Ay.isCustomEmoji(l) ? l.name : l.surrogates;
    return (0, n.jsx)(P.A, { className: k.Pw, emojiId: l.id, emojiName: t, animated: l.animated, shouldAnimate: i });
}
function R(e) {
    let { trait: l, ellipsize: i, traitColor: t } = e,
        a = s.useRef(null),
        d = (0, T.M)(a),
        u = (0, c.bG)([L.Ay], () => L.Ay.useReducedMotion);
    return null == l.label || l.label.length <= 0
        ? null
        : (0, n.jsxs)("div", {
              ref: a,
              className: r()(k.Bj, { [k.mc]: i }),
              children: [
                  (0, n.jsx)(O, { emoji: l.emoji, shouldAnimate: !u && d }),
                  (0, n.jsx)(o.E, {
                      tag: "span",
                      className: i ? k.mc : void 0,
                      variant: "body-sm/normal",
                      color: t,
                      children: l.label,
                  }),
              ],
          });
}
function M(e) {
    let { items: l, traitColor: i = "text-default" } = e,
        t = s.useCallback(
            (e, l) =>
                "string" == typeof e
                    ? (0, n.jsx)(
                          "div",
                          {
                              className: r()(k.Bj, { [k.mc]: l.ellipsize }),
                              children: (0, n.jsx)(o.E, {
                                  tag: "span",
                                  variant: "body-sm/normal",
                                  color: i,
                                  children: e,
                              }),
                          },
                          "overflow",
                      )
                    : (0, n.jsx)(R, { trait: e, ellipsize: l.ellipsize, traitColor: i }, e.key),
            [i],
        ),
        a = s.useCallback((e) => t(e, { ellipsize: !0 }), [t]),
        c = s.useCallback((e) => t(e, { ellipsize: !1 }), [t]),
        d = s.useCallback((e) => (0, n.jsx)(_.g2, { items: e, renderItem: c }), [c]);
    return 0 === l.length
        ? null
        : (0, n.jsx)(_.ZV, { className: k.kL, items: l, renderItem: a, renderOverflow: d, maxLines: 2, itemGapPx: 4 });
}
var S = i(377476);
function V(e) {
    let l,
        i,
        t,
        a,
        h,
        v,
        j,
        g,
        { profile: A, className: N } = e,
        {
            gamesToDisplay: f,
            lastGameToDisplay: b,
            remainingGames: y,
        } = ((l = A.gameActivity),
        (i = A.games),
        (t = (0, c.bG)([x.default], () => x.default.isAuthenticated())),
        (a = null != i && !t),
        (0, m.x)(a ? [] : A.gameApplicationIds),
        (h = s.useMemo(() => {
            let e = new Map();
            if (null == i) return e;
            for (let l of i) e.set(l.id, new d.A(l));
            return e;
        }, [i])),
        (v = (0, c.yK)([u.A], () => A.gameApplicationIds.map((e) => u.A.getGame(e) ?? h.get(e)).filter(I.Vq))),
        (j = s.useMemo(
            () =>
                [...v].sort((e, i) => {
                    let t = l[e.id]?.score ?? 0,
                        n = l[i.id]?.score ?? 0;
                    return t !== n ? n - t : 0;
                }),
            [v, l],
        )),
        (g = s.useMemo(() => j.slice(0, 5), [j])),
        {
            gamesToDisplay: g,
            lastGameToDisplay: s.useMemo(() => j[5] ?? null, [j]),
            remainingGames: s.useMemo(() => j.slice(5), [j]),
        }),
        C = s.useMemo(
            () => A.traits.map((e, l) => ({ key: `trait-${l}`, ...e })).filter((e) => e.label.length > 0),
            [A],
        ),
        p = A.description.length > 0;
    return p || f.length > 0 || C.length > 0
        ? (0, n.jsxs)("div", {
              className: r()(S.rf, N),
              children: [
                  p
                      ? (0, n.jsx)(o.E, { variant: "body-sm/normal", color: "text-subtle", children: A.description })
                      : null,
                  (0, n.jsx)(E, {
                      gamesToDisplay: f,
                      lastGameToDisplay: b,
                      remainingGames: y,
                      activity: A.gameActivity,
                  }),
                  (0, n.jsx)(M, { items: C }),
              ],
          })
        : (0, n.jsx)("div", { className: S.C3 });
}
