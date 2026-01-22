n.d(t, {
    A: () => T,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(311907),
    o = n(397927),
    l = n(565645),
    c = n(775602),
    u = n(854987),
    d = n(719718),
    f = n(612082),
    p = n(155286),
    _ = n(573138),
    h = n(877272),
    m = n(359588),
    g = n(398225),
    E = n(213533),
    b = n(419244),
    y = n(532294),
    O = n(622865),
    A = n(985018),
    v = n(308021),
    S = n(964801);

function I(e) {
    let { onClick: t, emoji: n, index: i, reducedMotion: a, isActive: s } = e,
        o = (0, g.vy)();
    return (0, r.jsx)(g.vw, {
        spring: o,
        children: (0, r.jsxs)(f.A, {
            contentClassName: S.qq,
            onClick: () => t(n),
            active: s,
            children: [
                (0, r.jsx)(l.A, {
                    className: S.Zg,
                    emojiId: n.id,
                    emojiName: n.name,
                    animated: !a && n.animated,
                }),
                (0, r.jsxs)(h.A, {
                    variant: "text-lg/bold",
                    children: ["#", i + 1],
                }),
            ],
        }),
    });
}

function T() {
    let e = (0, s.bG)([c.A], () => c.A.useReducedMotion),
        t = i.useContext(u.P),
        n = (0, o.rdh)(t.primaryColor).hex(),
        {
            emojis: { numEmojisSent: l, emojis: f } = {
                numEmojisSent: 0,
                emojis: [],
            },
        } = (0, s.bG)([d.A], () => d.A.getCheckpointData()),
        g = 0 === l || 0 === f.length,
        [T, C] = i.useState(
            g
                ? {
                      name: "\uD83D\uDE22",
                      animated: !1,
                  }
                : f[0],
        ),
        N = g ? b.o : a.nm2;
    return (0, r.jsx)(_.A, {
        children: (0, r.jsxs)("div", {
            className: S.kL,
            children: [
                (0, r.jsx)(E.A, {
                    emoji: T,
                }),
                (0, r.jsxs)("div", {
                    className: S.Qs,
                    children: [
                        (0, r.jsxs)("div", {
                            className: v.DD,
                            children: [
                                (0, r.jsx)(N, {
                                    size: "refresh_sm",
                                    color: n,
                                    className: v.gr,
                                    colorClass: v.d7,
                                }),
                                (0, r.jsx)(h.A, {
                                    variant: "eyebrow",
                                    className: v.UP,
                                    children: g
                                        ? A.intl.string(O.default.vnG9Sx)
                                        : A.intl.format(O.default.JwFMdL, {
                                              numEmojis: l,
                                          }),
                                }),
                            ],
                        }),
                        g
                            ? (0, r.jsx)(h.A, {
                                  variant: "heading-xxl/medium",
                                  className: S.YI,
                                  children: A.intl.string(O.default.BHbwK1),
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(m.A, {
                                          end: l,
                                      }),
                                      (0, r.jsx)(h.A, {
                                          variant: "heading-xxl/medium",
                                          className: S.VA,
                                          children: A.intl.string(O.default.ZuvPfg),
                                      }),
                                      (0, r.jsx)("div", {
                                          className: S.gm,
                                          children: f.map((t, n) =>
                                              (0, r.jsx)(
                                                  I,
                                                  {
                                                      onClick: () => C(t),
                                                      emoji: t,
                                                      index: n,
                                                      reducedMotion: e,
                                                      isActive: t === T,
                                                  },
                                                  "emoji-".concat(n),
                                              ),
                                          ),
                                      }),
                                  ],
                              }),
                        (0, r.jsx)(p.e, {
                            slide: y.P7.EMOJIS,
                        }),
                    ],
                }),
            ],
        }),
    });
}
