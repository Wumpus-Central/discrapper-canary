n.d(t, { A: () => ei });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(481613),
    o = n.n(a),
    d = n(311907),
    c = n(451988),
    u = n(314116),
    m = n(990078),
    g = n(331322),
    h = n(534514),
    x = n(939249),
    _ = n(305866),
    p = n(265872),
    A = n(834730),
    E = n(821609),
    f = n(192308),
    j = n(289873),
    N = n(396478),
    I = n(404778),
    C = n(191023),
    b = n(983851),
    v = n(97808),
    S = n(778712),
    T = n(22231),
    y = n(789645),
    R = n(803306),
    L = n(565645),
    D = n(736653),
    O = n(793574),
    G = n(688810),
    M = n(509536),
    k = n(931991),
    U = n(796774),
    w = n(209932),
    P = n(102597),
    B = n(904054),
    F = n(496502),
    H = n(657331),
    V = n(71393),
    z = n(287809),
    W = n(358431),
    Y = n(486020),
    K = n(473145),
    X = n(723702),
    Z = n(427262),
    J = n(555337),
    q = n(619842),
    Q = n(652215),
    $ = n(980504),
    ee = n(985018),
    et = n(864825);
let en = X.isPlatformEmbedded || "Safari" !== o().name;
function ei() {
    let e = (0, d.bG)([J.A], () => J.A.getProps().guild),
        { analyticsLocations: t } = (0, G.Ay)(O.A.GUILD_SETTINGS_SOUNDBOARD);
    return null == e
        ? null
        : (0, i.jsx)(G.f5, {
              value: t,
              children: (0, i.jsxs)(g.B, {
                  gap: 8,
                  children: [
                      (0, i.jsx)(h.D, { variant: "heading-lg/semibold", children: ee.intl.string(ee.t.OWQNYr) }),
                      (0, i.jsx)(eo, { guild: e }),
                  ],
              }),
          });
}
function el(e) {
    let { children: t } = e;
    return (0, i.jsx)(h.D, { className: et.qd, variant: "heading-sm/semibold", color: "text-default", children: t });
}
function es(e) {
    let { currentTier: t, availableSounds: n, guildId: l } = e,
        s = V.A.getGuild(l),
        r = null != s ? (0, K.fA)(s) : 0;
    return 0 === t
        ? (0, i.jsx)(i.Fragment, { children: ee.intl.format(ee.t["7E9Hdz"], { slots: n, totalSlots: r }) })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(m.m, {
                      text: ee.intl.formatToPlainString(ee.t.tuuJJT, { currentBoostLevel: t }),
                      children: (0, i.jsx)(x.D, {
                          className: et.c7,
                          onClick: () => {
                              (0, M.K4)({
                                  guildId: l,
                                  location: { section: Q.JJy.GUILD_SETTINGS_SOUNDBOARD, object: Q.ZSU.BOOST_GEM_ICON },
                              });
                          },
                          tabIndex: -1,
                          children: (0, i.jsx)(W.A, {}),
                      }),
                  }),
                  ee.intl.format(ee.t.HHCdvU, { slots: n, totalSlots: r, boostLevel: t }),
              ],
          });
}
let er = (e) => {
        let { renderPopoutBody: t, renderPopoutChildren: n, popoutTargetRef: s, ...r } = e,
            [a, o] = l.useState(!1),
            d = l.useMemo(() => new c.Ep(), []),
            u = l.useCallback(() => {
                d.stop(), o(!0);
            }, [d]),
            m = l.useCallback(() => {
                d.start(200, () => o(!1));
            }, [d]),
            g = { onMouseEnter: u, onMouseLeave: m };
        return (0, i.jsx)(p.Y, {
            shouldShow: a,
            renderPopout: (e) =>
                (0, i.jsx)(_.l, { className: et.gk, onMouseEnter: u, onMouseLeave: m, children: t(e) }),
            ...r,
            targetElementRef: s,
            children: (e) => n(e, g),
        });
    },
    ea = () => {
        let e = l.useRef(null);
        return (0, i.jsx)(er, {
            renderPopoutBody: () =>
                (0, i.jsx)(A.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ee.intl.format(ee.t.bGXPVt, {}),
                }),
            renderPopoutChildren: (t, n) =>
                (0, i.jsx)("div", {
                    ref: e,
                    ...n,
                    children: (0, i.jsx)(E.$, {
                        ...t,
                        disabled: !0,
                        variant: "primary",
                        text: ee.intl.string(ee.t["/uNYPJ"]),
                    }),
                }),
            popoutTargetRef: e,
        });
    };
function eo(e) {
    let { guild: t } = e,
        [s, r] = (0, d.yK)([w.A], () => [
            w.A.getSoundsForGuild(t.id) ?? $.pD,
            w.A.isFetchingSounds() || w.A.isFetchingDefaultSounds(),
        ]),
        { canCreateExpressions: a } = (0, k.nr)(t),
        o = l.useRef(null),
        c = (0, D.Ay)(),
        u = t.premiumTier,
        m = (0, K.tO)(t, s, u);
    l.useEffect(() => {
        (0, U.E7)();
    }, []);
    let g = l.useMemo(() => s.reduce((e, t) => ((e[t.soundId] = new Audio((0, P.A)(t.soundId))), e), {}), [s]),
        x = 0 === s.length && !r;
    function _(e) {
        o.current?.pause();
        let t = g[e.soundId];
        null != t && ((o.current = t), (t.currentTime = 0), (t.volume = (0, B.A)(e.volume)), t.play());
    }
    if (
        (l.useEffect(
            () => () => {
                o.current?.pause();
            },
            [],
        ),
        r)
    )
        return (0, i.jsx)(j.y, {});
    let p = en
        ? (0, i.jsx)(E.$, {
              variant: "primary",
              text: ee.intl.string(ee.t["/uNYPJ"]),
              onClick: function () {
                  (0, f.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([n.e("40556"), n.e("18101")]).then(n.bind(n, 6503));
                      return (n) => (0, i.jsx)(e, { ...n, guildId: t.id });
                  });
              },
              disabled: m <= 0 || !a,
          })
        : (0, i.jsx)(ea, {});
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(A.E, {
                        className: et.BK,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: ee.intl.string(ee.t.BohnsE),
                    }),
                    (0, i.jsx)("div", { className: et.Uo, children: !x && p }),
                ],
            }),
            x
                ? (0, i.jsxs)(N.pp, {
                      theme: c,
                      className: et.Ie,
                      children: [
                          (0, i.jsx)(N.G8, { darkSrc: n(223685), lightSrc: n(388547), width: 272, height: 212 }),
                          (0, i.jsx)(N.SG, {
                              note: ee.intl.string(ee.t.ZhoSBI),
                              noteClassName: et.BI,
                              children: ee.intl.string(ee.t.I6P1p7),
                          }),
                          p,
                      ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(I.c, { className: et.yF }),
                          (0, i.jsx)(h.D, {
                              className: et.jA,
                              variant: "heading-md/bold",
                              color: "text-strong",
                              children: (0, i.jsx)(es, { guildId: t.id, currentTier: u, availableSounds: m }),
                          }),
                          (0, i.jsx)(q.A, { guild: t, numSounds: s.length, isOutOfSlots: 0 === m }),
                          (0, i.jsxs)("div", {
                              className: et.uE,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: et.ZF,
                                      children: [
                                          (0, i.jsx)(el, { children: ee.intl.string(ee.t.sMOuuS) }),
                                          (0, i.jsx)(el, { children: ee.intl.string(ee.t.lLFvlT) }),
                                          (0, i.jsx)(el, { children: ee.intl.string(ee.t["85qMS/"]) }),
                                      ],
                                  }),
                                  s.map((e) =>
                                      (0, i.jsx)(ed, { sound: e, isPlaying: !1, guild: t, onPlaySound: _ }, e.soundId),
                                  ),
                              ],
                          }),
                      ],
                  }),
        ],
    });
}
function ed(e) {
    let { sound: t, isPlaying: s, onPlaySound: a, guild: o } = e,
        { soundId: c, name: m, user: g, userId: h, emojiId: _, emojiName: p } = t,
        { analyticsLocations: E } = (0, G.Ay)(),
        j = (0, d.bG)([z.default], () => g ?? z.default.getUser(h), [h, g]),
        { canManageGuildExpression: N } = (0, k.nr)(o),
        I = l.useMemo(() => N(t), [t, N]),
        D = null != _ || null != p,
        [O, M] = l.useState(!1),
        w = (0, F.v)(t, o.id);
    async function P() {
        if (!O) {
            M(!0);
            try {
                await (0, U.ty)(o.id, c);
            } catch {
                M(!1);
            }
        }
    }
    l.useEffect(() => {
        null == j && e();
        async function e() {
            await (0, R.wz)(h);
        }
    }, [j, h]);
    let B = l.useCallback(() => {
            null != j && (0, H.openUserProfileModal)({ userId: j.id, guildId: o.id, sourceAnalyticsLocations: E });
        }, [j, o.id, E]),
        V = Z.Ay.useUserTag(j);
    return (0, i.jsxs)("div", {
        className: r()(et.nM, { [et.vu]: s }),
        children: [
            D
                ? (0, i.jsx)(L.A, { emojiId: _, emojiName: p, className: et.Zg })
                : (0, i.jsx)(C.x, { size: "md", color: "currentColor", className: et.Zg }),
            (0, i.jsx)(x.D, {
                onClick: () => {
                    O || a(t);
                },
                onContextMenu: w,
                className: et.TW,
                children: (0, i.jsxs)(A.E, {
                    variant: "text-sm/normal",
                    className: et.TW,
                    children: [m, " ", (0, i.jsx)(b.H, { size: "md", color: "currentColor", className: et.Ns })],
                }),
            }),
            null != j &&
                (0, i.jsxs)(x.D, {
                    className: et.xp,
                    onClick: B,
                    children: [
                        (0, i.jsx)(v.eu, {
                            "aria-label": V,
                            size: S._3.SIZE_24,
                            className: et.Cp,
                            src: (0, Y.ku)(j, !1, 24),
                        }),
                        (0, i.jsx)(A.E, { variant: "text-sm/normal", lineClamp: 1, children: V }),
                    ],
                }),
            I
                ? (0, i.jsxs)("div", {
                      className: et.vO,
                      children: [
                          (0, i.jsx)(x.D, {
                              className: et.Bw,
                              onClick: function (e) {
                                  e.stopPropagation(),
                                      (0, f.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([n.e("40556"), n.e("18101")]).then(
                                              n.bind(n, 6503),
                                          );
                                          return (n) => (0, i.jsx)(e, { ...n, guildId: o.id, existingSound: t });
                                      });
                              },
                              "aria-label": ee.intl.string(ee.t.bt75uw),
                              children: (0, i.jsx)(T.R, { size: "xs", color: "currentColor", className: et.J4 }),
                          }),
                          (0, i.jsx)(x.D, {
                              className: et.QR,
                              onClick: function (e) {
                                  e.stopPropagation(),
                                      (0, u.A)({
                                          title: ee.intl.formatToPlainString(ee.t["PR/VbI"], { soundName: m }),
                                          subtitle: ee.intl.format(ee.t["u6+CmN"], { soundName: m }),
                                          confirmText: ee.intl.string(ee.t.oyYWHE),
                                          onConfirm: P,
                                      });
                              },
                              "aria-label": ee.intl.string(ee.t.N86XcP),
                              children: (0, i.jsx)(y.P, { size: "md", color: "currentColor", className: et.J4 }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
