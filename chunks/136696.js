t.d(l, { P: () => V });
var i,
    n = t(477900),
    s = t(582128),
    a = t(503698),
    r = t.n(a),
    o = t(834730),
    c = t(855986),
    d = t(997013),
    u = t(311043),
    m = t(454908),
    x = t(46653),
    I = t(403362),
    h = (((i = {})[(i.NONE = 0)] = "NONE"), (i[(i.LOW = 1)] = "LOW"), (i[(i.HIGH = 2)] = "HIGH"), i),
    v = t(825860),
    j = t(646514),
    g = t(866665),
    A = t(573435),
    N = t(409626),
    f = t(692969),
    b = t(658630);
function y(e) {
    let { game: l, activityLevel: t, hideTooltip: i } = e,
        s = (0, f.A)({ gameId: l.id, source: N.GameProfileSources.GuildProfileGames, trackEntryPointImpression: !0 }),
        a = null != s,
        c = l.getIconURL(24);
    if (null == c) return null;
    let d = t?.level === h.HIGH,
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
        shouldShow: !i,
        children: a
            ? (0, n.jsx)("button", { type: "button", className: r()(b.Gt, b.U_), onClick: s, children: m })
            : (0, n.jsx)("div", { className: b.Gt, children: m }),
    });
}
function C(e) {
    let { games: l, activity: t } = e;
    return (0, n.jsx)("div", {
        className: b.Fz,
        children: l.map((e) =>
            (0, n.jsxs)(
                "div",
                {
                    className: b.ZS,
                    children: [
                        (0, n.jsx)(y, { game: e, activityLevel: t[e.id] }),
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
    let { game: l, activityLevel: t } = e;
    return (0, n.jsxs)("div", {
        className: b.E,
        children: [
            (0, n.jsx)(y, { game: l, activityLevel: t, hideTooltip: !0 }),
            (0, n.jsx)(o.E, { variant: "body-sm/medium", color: "text-default", children: l.name }),
        ],
    });
}
function E(e) {
    let { gamesToDisplay: l, lastGameToDisplay: t, remainingGames: i, activity: a } = e,
        c = t?.getIconURL(24),
        d = s.useMemo(
            () =>
                null == t || null == c
                    ? null
                    : 0 === i.length
                      ? (0, n.jsx)(y, { game: t, activityLevel: a[t.id] })
                      : (0, n.jsx)(g.m, {
                            "aria-label": "",
                            position: "bottom",
                            __unsupportedReactNodeAsText: (0, n.jsx)(C, { games: i, activity: a }),
                            children: (0, n.jsxs)("div", {
                                className: r()(b.Gt, b.oL),
                                children: [
                                    (0, n.jsx)("img", { className: r()(b.T_, b.tJ), src: c, alt: t.name }),
                                    (0, n.jsx)("div", { className: b.Fg }),
                                    (0, n.jsx)("div", {
                                        className: b.AZ,
                                        children: (0, n.jsx)(o.E, {
                                            variant: "body-xs/normal",
                                            color: "text-overlay-light",
                                            children: `+${i.length}`,
                                        }),
                                    }),
                                ],
                            }),
                        }),
            [t, c, i, a],
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
var _ = t(3666),
    P = t(565645),
    T = t(775602),
    L = t(713517),
    G = t(690521),
    k = t(229576);
function O(e) {
    let { emoji: l, shouldAnimate: t } = e;
    if (null == l) return null;
    let i = G.Ay.isCustomEmoji(l) ? l.name : l.surrogates;
    return (0, n.jsx)(P.A, { className: k.Pw, emojiId: l.id, emojiName: i, animated: l.animated, shouldAnimate: t });
}
function R(e) {
    let { trait: l, ellipsize: t, traitColor: i } = e,
        a = s.useRef(null),
        d = (0, L.M)(a),
        u = (0, c.bG)([T.Ay], () => T.Ay.useReducedMotion);
    return null == l.label || l.label.length <= 0
        ? null
        : (0, n.jsxs)("div", {
              ref: a,
              className: r()(k.Bj, { [k.mc]: t }),
              children: [
                  (0, n.jsx)(O, { emoji: l.emoji, shouldAnimate: !u && d }),
                  (0, n.jsx)(o.E, {
                      tag: "span",
                      className: t ? k.mc : void 0,
                      variant: "body-sm/normal",
                      color: i,
                      children: l.label,
                  }),
              ],
          });
}
function M(e) {
    let { items: l, traitColor: t = "text-default" } = e,
        i = s.useCallback(
            (e, l) =>
                "string" == typeof e
                    ? (0, n.jsx)(
                          "div",
                          {
                              className: r()(k.Bj, { [k.mc]: l.ellipsize }),
                              children: (0, n.jsx)(o.E, {
                                  tag: "span",
                                  variant: "body-sm/normal",
                                  color: t,
                                  children: e,
                              }),
                          },
                          "overflow",
                      )
                    : (0, n.jsx)(R, { trait: e, ellipsize: l.ellipsize, traitColor: t }, e.key),
            [t],
        ),
        a = s.useCallback((e) => i(e, { ellipsize: !0 }), [i]),
        c = s.useCallback((e) => i(e, { ellipsize: !1 }), [i]),
        d = s.useCallback((e) => (0, n.jsx)(_.g2, { items: e, renderItem: c }), [c]);
    return 0 === l.length
        ? null
        : (0, n.jsx)(_.ZV, { className: k.kL, items: l, renderItem: a, renderOverflow: d, maxLines: 2, itemGapPx: 4 });
}
var S = t(377476);
function V(e) {
    let l,
        t,
        i,
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
        (t = A.games),
        (i = (0, c.bG)([x.default], () => x.default.isAuthenticated())),
        (a = null != t && !i),
        (0, m.x)(a ? [] : A.gameApplicationIds),
        (h = s.useMemo(() => {
            let e = new Map();
            if (null == t) return e;
            for (let l of t) e.set(l.id, new d.A(l));
            return e;
        }, [t])),
        (v = (0, c.yK)([u.A], () => A.gameApplicationIds.map((e) => u.A.getGame(e) ?? h.get(e)).filter(I.Vq))),
        (j = s.useMemo(() => {
            let e = (e, t) => {
                let i = l[e.id]?.score ?? 0,
                    n = l[t.id]?.score ?? 0;
                return i !== n ? n - i : 0;
            };
            return [...v].sort(e);
        }, [v, l])),
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
