t.d(l, { P: () => w });
var i,
    n = t(477900),
    s = t(582128),
    a = t(503698),
    r = t.n(a),
    o = t(834730),
    c = t(17928),
    d = t(997013),
    u = t(311043),
    m = t(569926),
    x = t(280450),
    v = t(403362),
    g = (((i = {})[(i.NONE = 0)] = "NONE"), (i[(i.LOW = 1)] = "LOW"), (i[(i.HIGH = 2)] = "HIGH"), i),
    h = t(825860),
    I = t(661531),
    j = t(866665),
    A = t(573435),
    N = t(409626),
    f = t(692969),
    C = t(658630);
function p(e) {
    let { game: l, activityLevel: t, hideTooltip: i } = e,
        s = (0, f.A)({ gameId: l.id, source: N.GameProfileSources.GuildProfileGames, trackEntryPointImpression: !0 }),
        a = null != s,
        c = l.getIconURL(24);
    if (null == c) return null;
    let d = t?.level === g.HIGH,
        u = (0, n.jsx)(o.E, { variant: "text-sm/medium", color: "interactive-text-active", children: l.name }),
        m = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("img", { className: C.T_, src: c, alt: l.name }),
                d &&
                    (0, n.jsx)(A.Ay, {
                        mask: A.hW.GAMEPLAY_HIGH_ACTIVITY_ICON,
                        width: 14,
                        height: 14,
                        className: C.Sy,
                        children: (0, n.jsx)("div", {
                            className: C._8,
                            children: (0, n.jsx)(h.FireIcon, {
                                color: I.A.unsafe_rawColors.ORANGE_330.css,
                                width: 10,
                                height: 10,
                                size: "custom",
                            }),
                        }),
                    }),
            ],
        });
    return (0, n.jsx)(j.m, {
        __unsupportedReactNodeAsText: u,
        position: "bottom",
        "aria-label": l.name,
        shouldShow: !i,
        children: a
            ? (0, n.jsx)("button", { type: "button", className: r()(C.Gt, C.U_), onClick: s, children: m })
            : (0, n.jsx)("div", { className: C.Gt, children: m }),
    });
}
function b(e) {
    let { games: l, activity: t } = e;
    return (0, n.jsx)("div", {
        className: C.Fz,
        children: l.map((e) =>
            (0, n.jsxs)(
                "div",
                {
                    className: C.ZS,
                    children: [
                        (0, n.jsx)(p, { game: e, activityLevel: t[e.id] }),
                        (0, n.jsx)(o.E, {
                            variant: "text-xs/medium",
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
function E(e) {
    let { game: l, activityLevel: t } = e;
    return (0, n.jsxs)("div", {
        className: C.E,
        children: [
            (0, n.jsx)(p, { game: l, activityLevel: t, hideTooltip: !0 }),
            (0, n.jsx)(o.E, { variant: "text-sm/medium", color: "text-default", children: l.name }),
        ],
    });
}
function y(e) {
    let { gamesToDisplay: l, lastGameToDisplay: t, remainingGames: i, activity: a } = e,
        c = t?.getIconURL(24),
        d = s.useMemo(
            () =>
                null == t || null == c
                    ? null
                    : 0 === i.length
                      ? (0, n.jsx)(p, { game: t, activityLevel: a[t.id] })
                      : (0, n.jsx)(j.m, {
                            "aria-label": "",
                            position: "bottom",
                            __unsupportedReactNodeAsText: (0, n.jsx)(b, { games: i, activity: a }),
                            children: (0, n.jsxs)("div", {
                                className: r()(C.Gt, C.oL),
                                children: [
                                    (0, n.jsx)("img", { className: r()(C.T_, C.tJ), src: c, alt: t.name }),
                                    (0, n.jsx)("div", { className: C.Fg }),
                                    (0, n.jsx)("div", {
                                        className: C.AZ,
                                        children: (0, n.jsx)(o.E, {
                                            variant: "text-xs/normal",
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
          ? (0, n.jsx)("div", { className: C.kL, children: (0, n.jsx)(E, { game: l[0], activityLevel: a[l[0].id] }) })
          : (0, n.jsxs)("div", {
                className: C.kL,
                children: [l.map((e) => (0, n.jsx)(p, { game: e, activityLevel: a[e.id] }, e.id)), d],
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
                      variant: "text-sm/normal",
                      color: i,
                      children: l.label,
                  }),
              ],
          });
}
function S(e) {
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
                                  variant: "text-sm/normal",
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
var M = t(377476);
function w(e) {
    let l,
        t,
        i,
        a,
        g,
        h,
        I,
        j,
        { profile: A, className: N } = e,
        {
            gamesToDisplay: f,
            lastGameToDisplay: C,
            remainingGames: p,
        } = ((l = A.gameActivity),
        (t = A.games),
        (i = (0, c.bG)([x.default], () => x.default.isAuthenticated())),
        (a = null != t && !i),
        (0, m.x)(a ? [] : A.gameApplicationIds),
        (g = s.useMemo(() => {
            let e = new Map();
            if (null == t) return e;
            for (let l of t) e.set(l.id, new d.A(l));
            return e;
        }, [t])),
        (h = (0, c.yK)([u.A], () => A.gameApplicationIds.map((e) => u.A.getGame(e) ?? g.get(e)).filter(v.Vq))),
        (I = s.useMemo(
            () =>
                [...h].sort((e, t) => {
                    let i = l[e.id]?.score ?? 0,
                        n = l[t.id]?.score ?? 0;
                    return i !== n ? n - i : 0;
                }),
            [h, l],
        )),
        (j = s.useMemo(() => I.slice(0, 5), [I])),
        {
            gamesToDisplay: j,
            lastGameToDisplay: s.useMemo(() => I[5] ?? null, [I]),
            remainingGames: s.useMemo(() => I.slice(5), [I]),
        }),
        b = s.useMemo(
            () => A.traits.map((e, l) => ({ key: `trait-${l}`, ...e })).filter((e) => e.label.length > 0),
            [A],
        ),
        E = A.description.length > 0;
    return E || f.length > 0 || b.length > 0
        ? (0, n.jsxs)("div", {
              className: r()(M.rf, N),
              children: [
                  E
                      ? (0, n.jsx)(o.E, { variant: "text-sm/normal", color: "text-subtle", children: A.description })
                      : null,
                  (0, n.jsx)(y, {
                      gamesToDisplay: f,
                      lastGameToDisplay: C,
                      remainingGames: p,
                      activity: A.gameActivity,
                  }),
                  (0, n.jsx)(S, { items: b }),
              ],
          })
        : (0, n.jsx)("div", { className: M.C3 });
}
