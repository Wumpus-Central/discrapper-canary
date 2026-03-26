"use strict";
n.d(t, { A: () => F });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(481613),
    o = n.n(a),
    d = n(311907),
    c = n(451988),
    u = n(314116),
    m = n(990078),
    g = n(397927),
    x = n(803306),
    h = n(565645),
    _ = n(736653),
    p = n(793574),
    A = n(688810),
    f = n(509536),
    j = n(931991),
    N = n(796774),
    E = n(209932),
    b = n(102597),
    C = n(904054),
    T = n(496502),
    I = n(657331),
    v = n(71393),
    S = n(287809),
    y = n(358431),
    R = n(486020),
    O = n(473145),
    L = n(723702),
    G = n(427262),
    D = n(555337),
    M = n(619842),
    k = n(652215),
    U = n(980504),
    P = n(985018),
    w = n(656489);
let B = L.isPlatformEmbedded || "Safari" !== o().name;
function F() {
    let e = (0, d.bG)([D.A], () => D.A.getProps().guild),
        { analyticsLocations: t } = (0, A.Ay)(p.A.GUILD_SETTINGS_SOUNDBOARD);
    return null == e
        ? null
        : (0, i.jsx)(A.f5, {
              value: t,
              children: (0, i.jsxs)(g.BJc, {
                  gap: 8,
                  children: [
                      (0, i.jsx)(g.Heading, { variant: "heading-lg/semibold", children: P.intl.string(P.t.OWQNYr) }),
                      (0, i.jsx)(K, { guild: e }),
                  ],
              }),
          });
}
function H(e) {
    let { children: t } = e;
    return (0, i.jsx)(g.Heading, {
        className: w.qd,
        variant: "heading-sm/semibold",
        color: "text-default",
        children: t,
    });
}
function V(e) {
    let { currentTier: t, availableSounds: n, guildId: s } = e,
        l = v.A.getGuild(s),
        r = null != l ? (0, O.fA)(l) : 0;
    return 0 === t
        ? (0, i.jsx)(i.Fragment, { children: P.intl.format(P.t["7E9Hdz"], { slots: n, totalSlots: r }) })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(m.m, {
                      text: P.intl.formatToPlainString(P.t.tuuJJT, { currentBoostLevel: t }),
                      children: (0, i.jsx)(g.DUT, {
                          className: w.c7,
                          onClick: () => {
                              (0, f.K4)({
                                  guildId: s,
                                  location: { section: k.JJy.GUILD_SETTINGS_SOUNDBOARD, object: k.ZSU.BOOST_GEM_ICON },
                              });
                          },
                          tabIndex: -1,
                          children: (0, i.jsx)(y.A, {}),
                      }),
                  }),
                  P.intl.format(P.t.HHCdvU, { slots: n, totalSlots: r, boostLevel: t }),
              ],
          });
}
let z = (e) => {
        let { renderPopoutBody: t, renderPopoutChildren: n, popoutTargetRef: l, ...r } = e,
            [a, o] = s.useState(!1),
            d = s.useMemo(() => new c.Ep(), []),
            u = s.useCallback(() => {
                d.stop(), o(!0);
            }, [d]),
            m = s.useCallback(() => {
                d.start(200, () => o(!1));
            }, [d]),
            x = { onMouseEnter: u, onMouseLeave: m };
        return (0, i.jsx)(g.YNO, {
            shouldShow: a,
            renderPopout: (e) =>
                (0, i.jsx)(g.lGe, { className: w.gk, onMouseEnter: u, onMouseLeave: m, children: t(e) }),
            ...r,
            targetElementRef: l,
            children: (e) => n(e, x),
        });
    },
    W = () => {
        let e = s.useRef(null);
        return (0, i.jsx)(z, {
            renderPopoutBody: () =>
                (0, i.jsx)(g.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: P.intl.format(P.t.bGXPVt, {}),
                }),
            renderPopoutChildren: (t, n) =>
                (0, i.jsx)("div", {
                    ref: e,
                    ...n,
                    children: (0, i.jsx)(g.Button, {
                        ...t,
                        disabled: !0,
                        variant: "primary",
                        text: P.intl.string(P.t["/uNYPJ"]),
                    }),
                }),
            popoutTargetRef: e,
        });
    };
function K(e) {
    let { guild: t } = e,
        [l, r] = (0, d.yK)([E.A], () => [
            E.A.getSoundsForGuild(t.id) ?? U.pD,
            E.A.isFetchingSounds() || E.A.isFetchingDefaultSounds(),
        ]),
        { canCreateExpressions: a } = (0, j.nr)(t),
        o = s.useRef(null),
        c = (0, _.Ay)(),
        u = t.premiumTier,
        m = (0, O.tO)(t, l, u);
    s.useEffect(() => {
        (0, N.E7)();
    }, []);
    let x = s.useMemo(() => l.reduce((e, t) => ((e[t.soundId] = new Audio((0, b.A)(t.soundId))), e), {}), [l]),
        h = 0 === l.length && !r;
    function p(e) {
        o.current?.pause();
        let t = x[e.soundId];
        null != t && ((o.current = t), (t.currentTime = 0), (t.volume = (0, C.A)(e.volume)), t.play());
    }
    if (
        (s.useEffect(
            () => () => {
                o.current?.pause();
            },
            [],
        ),
        r)
    )
        return (0, i.jsx)(g.y$y, {});
    let A = B
        ? (0, i.jsx)(g.Button, {
              variant: "primary",
              text: P.intl.string(P.t["/uNYPJ"]),
              onClick: function () {
                  (0, g.mMO)(async () => {
                      let { default: e } = await Promise.all([n.e("40556"), n.e("18550")]).then(n.bind(n, 228884));
                      return (n) => (0, i.jsx)(e, { ...n, guildId: t.id });
                  });
              },
              disabled: m <= 0 || !a,
          })
        : (0, i.jsx)(W, {});
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(g.Text, {
                        className: w.BK,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: P.intl.string(P.t.BohnsE),
                    }),
                    (0, i.jsx)("div", { className: w.Uo, children: !h && A }),
                ],
            }),
            h
                ? (0, i.jsxs)(g.ppr, {
                      theme: c,
                      className: w.Ie,
                      children: [
                          (0, i.jsx)(g.G8R, { darkSrc: n(223685), lightSrc: n(388547), width: 272, height: 212 }),
                          (0, i.jsx)(g.SGT, {
                              note: P.intl.string(P.t.ZhoSBI),
                              noteClassName: w.BI,
                              children: P.intl.string(P.t.I6P1p7),
                          }),
                          A,
                      ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.cGx, { className: w.yF }),
                          (0, i.jsx)(g.Heading, {
                              className: w.jA,
                              variant: "heading-md/bold",
                              color: "text-strong",
                              children: (0, i.jsx)(V, { guildId: t.id, currentTier: u, availableSounds: m }),
                          }),
                          (0, i.jsx)(M.A, { guild: t, numSounds: l.length, isOutOfSlots: 0 === m }),
                          (0, i.jsxs)("div", {
                              className: w.uE,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: w.ZF,
                                      children: [
                                          (0, i.jsx)(H, { children: P.intl.string(P.t.sMOuuS) }),
                                          (0, i.jsx)(H, { children: P.intl.string(P.t.lLFvlT) }),
                                          (0, i.jsx)(H, { children: P.intl.string(P.t["85qMS/"]) }),
                                      ],
                                  }),
                                  l.map((e) =>
                                      (0, i.jsx)(Y, { sound: e, isPlaying: !1, guild: t, onPlaySound: p }, e.soundId),
                                  ),
                              ],
                          }),
                      ],
                  }),
        ],
    });
}
function Y(e) {
    let { sound: t, isPlaying: l, onPlaySound: a, guild: o } = e,
        { soundId: c, name: m, user: _, userId: p, emojiId: f, emojiName: E } = t,
        { analyticsLocations: b } = (0, A.Ay)(),
        C = (0, d.bG)([S.default], () => _ ?? S.default.getUser(p), [p, _]),
        { canManageGuildExpression: v } = (0, j.nr)(o),
        y = s.useMemo(() => v(t), [t, v]),
        O = null != f || null != E,
        [L, D] = s.useState(!1),
        M = (0, T.v)(t, o.id);
    async function k() {
        if (!L) {
            D(!0);
            try {
                await (0, N.ty)(o.id, c);
            } catch {
                D(!1);
            }
        }
    }
    s.useEffect(() => {
        null == C && e();
        async function e() {
            await (0, x.wz)(p);
        }
    }, [C, p]);
    let U = s.useCallback(() => {
            null != C && (0, I.openUserProfileModal)({ userId: C.id, guildId: o.id, sourceAnalyticsLocations: b });
        }, [C, o.id, b]),
        B = G.Ay.useUserTag(C);
    return (0, i.jsxs)("div", {
        className: r()(w.nM, { [w.vu]: l }),
        children: [
            O
                ? (0, i.jsx)(h.A, { emojiId: f, emojiName: E, className: w.Zg })
                : (0, i.jsx)(g.xfq, { size: "md", color: "currentColor", className: w.Zg }),
            (0, i.jsx)(g.DUT, {
                onClick: () => {
                    L || a(t);
                },
                onContextMenu: M,
                className: w.TW,
                children: (0, i.jsxs)(g.Text, {
                    variant: "text-sm/normal",
                    className: w.TW,
                    children: [m, " ", (0, i.jsx)(g.HKD, { size: "md", color: "currentColor", className: w.Ns })],
                }),
            }),
            null != C &&
                (0, i.jsxs)(g.DUT, {
                    className: w.xp,
                    onClick: U,
                    children: [
                        (0, i.jsx)(g.euF, {
                            "aria-label": B,
                            size: g._3J.SIZE_24,
                            className: w.Cp,
                            src: (0, R.ku)(C, !1, 24),
                        }),
                        (0, i.jsx)(g.Text, { variant: "text-sm/normal", lineClamp: 1, children: B }),
                    ],
                }),
            y
                ? (0, i.jsxs)("div", {
                      className: w.vO,
                      children: [
                          (0, i.jsx)(g.DUT, {
                              className: w.Bw,
                              onClick: function (e) {
                                  e.stopPropagation(),
                                      (0, g.mMO)(async () => {
                                          let { default: e } = await Promise.all([n.e("40556"), n.e("18550")]).then(
                                              n.bind(n, 228884),
                                          );
                                          return (n) => (0, i.jsx)(e, { ...n, guildId: o.id, existingSound: t });
                                      });
                              },
                              "aria-label": P.intl.string(P.t.bt75uw),
                              children: (0, i.jsx)(g.R2l, { size: "xs", color: "currentColor", className: w.J4 }),
                          }),
                          (0, i.jsx)(g.DUT, {
                              className: w.QR,
                              onClick: function (e) {
                                  e.stopPropagation(),
                                      (0, u.A)({
                                          title: P.intl.formatToPlainString(P.t["PR/VbI"], { soundName: m }),
                                          subtitle: P.intl.format(P.t["u6+CmN"], { soundName: m }),
                                          confirmText: P.intl.string(P.t.oyYWHE),
                                          onConfirm: k,
                                      });
                              },
                              "aria-label": P.intl.string(P.t.N86XcP),
                              children: (0, i.jsx)(g.PGe, { size: "md", color: "currentColor", className: w.J4 }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
