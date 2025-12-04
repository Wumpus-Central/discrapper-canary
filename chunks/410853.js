n.d(t, { Z: () => A }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(442837),
    s = n(481060),
    l = n(596454),
    c = n(607070),
    u = n(324060),
    d = n(5888),
    f = n(639949),
    p = n(909397),
    _ = n(198358),
    m = n(391876),
    h = n(947189),
    g = n(883166),
    E = n(693018),
    b = n(343438),
    y = n(612776),
    O = n(140939),
    v = n(388032),
    S = n(417788),
    I = n(559153);
function T(e) {
    let { onClick: t, emoji: n, index: i, reducedMotion: a, isActive: o } = e,
        s = (0, g.gl)();
    return (0, r.jsx)(g.QR, {
        spring: s,
        children: (0, r.jsxs)(f.Z, {
            contentClassName: I.emojiContainer,
            onClick: () => t(n),
            active: o,
            children: [
                (0, r.jsx)(l.Z, {
                    className: I.emoji,
                    emojiId: n.id,
                    emojiName: n.name,
                    animated: !a && n.animated,
                }),
                (0, r.jsxs)(m.Z, {
                    variant: "text-lg/bold",
                    children: ["#", i + 1],
                }),
            ],
        }),
    });
}
function A() {
    let e = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        t = i.useContext(u.Q),
        n = (0, s.dQu)(t.primaryColor).hex(),
        {
            emojis: { numEmojisSent: l, emojis: f } = {
                numEmojisSent: 0,
                emojis: [],
            },
        } = (0, o.e7)([d.Z], () => d.Z.getCheckpointData()),
        g = 0 === l || 0 === f.length,
        [A, C] = i.useState(
            g
                ? {
                      name: "\uD83D\uDE22",
                      animated: !1,
                  }
                : f[0],
        ),
        N = g ? b.H : a.EO4;
    return (0, r.jsx)(_.Z, {
        children: (0, r.jsxs)("div", {
            className: I.container,
            children: [
                (0, r.jsx)(E.Z, { emoji: A }),
                (0, r.jsxs)("div", {
                    className: I.content,
                    children: [
                        (0, r.jsxs)("div", {
                            className: S.title,
                            children: [
                                (0, r.jsx)(N, {
                                    size: "refresh_sm",
                                    color: n,
                                    className: S.titleIcon,
                                    colorClass: S.iconColor,
                                }),
                                (0, r.jsx)(m.Z, {
                                    variant: "eyebrow",
                                    className: S.eyebrow,
                                    children: g
                                        ? v.intl.string(O.default.vnG9Sx)
                                        : v.intl.format(O.default.JwFMdL, { numEmojis: l }),
                                }),
                            ],
                        }),
                        g
                            ? (0, r.jsx)(m.Z, {
                                  variant: "heading-xxl/medium",
                                  className: I.emptySubtitle,
                                  children: v.intl.string(O.default.BHbwK1),
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(h.Z, { end: l }),
                                      (0, r.jsx)(m.Z, {
                                          variant: "heading-xxl/medium",
                                          className: I.subtitle,
                                          children: v.intl.string(O.default.ZuvPfg),
                                      }),
                                      (0, r.jsx)("div", {
                                          className: I.emojis,
                                          children: f.map((t, n) =>
                                              (0, r.jsx)(
                                                  T,
                                                  {
                                                      onClick: () => C(t),
                                                      emoji: t,
                                                      index: n,
                                                      reducedMotion: e,
                                                      isActive: t === A,
                                                  },
                                                  "emoji-".concat(n),
                                              ),
                                          ),
                                      }),
                                  ],
                              }),
                        (0, r.jsx)(p.o, { slide: y.yD.EMOJIS }),
                    ],
                }),
            ],
        }),
    });
}
