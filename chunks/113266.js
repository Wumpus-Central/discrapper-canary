n.d(t, {
    A: () => V,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(481613),
    c = n.n(a),
    o = n(311907),
    d = n(451988),
    u = n(314116),
    f = n(990078),
    g = n(397927),
    b = n(803306),
    m = n(565645),
    p = n(736653),
    x = n(793574),
    h = n(688810),
    j = n(509536),
    O = n(931991),
    y = n(796774),
    v = n(209932),
    A = n(102597),
    E = n(904054),
    N = n(496502),
    _ = n(657331),
    S = n(71393),
    T = n(287809),
    I = n(358431),
    C = n(486020),
    P = n(473145),
    w = n(723702),
    R = n(427262),
    D = n(555337),
    G = n(619842),
    L = n(652215),
    k = n(980504),
    M = n(985018),
    U = n(252308);

function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let H = w.isPlatformEmbedded || "Safari" !== c().name;

function V() {
    let e = (0, o.bG)([D.A], () => D.A.getProps().guild),
        { analyticsLocations: t } = (0, h.Ay)(x.A.GUILD_SETTINGS_SOUNDBOARD);
    return null == e
        ? null
        : (0, r.jsx)(h.f5, {
              value: t,
              children: (0, r.jsxs)(g.BJc, {
                  gap: 8,
                  children: [
                      (0, r.jsx)(g.Heading, {
                          variant: "heading-lg/semibold",
                          children: M.intl.string(M.t.OWQNYr),
                      }),
                      (0, r.jsx)(X, {
                          guild: e,
                      }),
                  ],
              }),
          });
}

function K(e) {
    let { children: t } = e;
    return (0, r.jsx)(g.Heading, {
        className: U.qd,
        variant: "heading-sm/semibold",
        color: "text-default",
        children: t,
    });
}

function z(e) {
    let { currentTier: t, availableSounds: n, guildId: i } = e,
        l = S.A.getGuild(i),
        s = null != l ? (0, P.fA)(l) : 0;
    return 0 === t
        ? (0, r.jsx)(r.Fragment, {
              children: M.intl.format(M.t["7E9Hdz"], {
                  slots: n,
                  totalSlots: s,
              }),
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(f.m, {
                      text: M.intl.formatToPlainString(M.t.tuuJJT, {
                          currentBoostLevel: t,
                      }),
                      children: (0, r.jsx)(g.DUT, {
                          className: U.c7,
                          onClick: () => {
                              (0, j.K)({
                                  guildId: i,
                                  location: {
                                      section: L.JJy.GUILD_SETTINGS_SOUNDBOARD,
                                      object: L.ZSU.BOOST_GEM_ICON,
                                  },
                              });
                          },
                          tabIndex: -1,
                          children: (0, r.jsx)(I.A, {}),
                      }),
                  }),
                  M.intl.format(M.t.HHCdvU, {
                      slots: n,
                      totalSlots: s,
                      boostLevel: t,
                  }),
              ],
          });
}
let Y = (e) => {
        let { renderPopoutBody: t, renderPopoutChildren: n, popoutTargetRef: l } = e,
            s = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i,
                    l = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l;
                }
                if (
                    ((l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.getOwnPropertyNames(e);
                        for (r = 0; r < l.length; r++)
                            (n = l[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (i[n] = e[n]);
                        return i;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            })(e, ["renderPopoutBody", "renderPopoutChildren", "popoutTargetRef"]),
            [a, c] = i.useState(!1),
            o = i.useMemo(() => new d.Ep(), []),
            u = i.useCallback(() => {
                o.stop(), c(!0);
            }, [o]),
            f = i.useCallback(() => {
                o.start(200, () => c(!1));
            }, [o]),
            b = {
                onMouseEnter: u,
                onMouseLeave: f,
            };
        return (0, r.jsx)(
            g.YNO,
            B(
                F(
                    {
                        shouldShow: a,
                        renderPopout: (e) =>
                            (0, r.jsx)(g.lGe, {
                                className: U.gk,
                                onMouseEnter: u,
                                onMouseLeave: f,
                                children: t(e),
                            }),
                    },
                    s,
                ),
                {
                    targetElementRef: l,
                    children: (e) => n(e, b),
                },
            ),
        );
    },
    W = () => {
        let e = i.useRef(null);
        return (0, r.jsx)(Y, {
            renderPopoutBody: () =>
                (0, r.jsx)(g.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: M.intl.format(M.t.bGXPVt, {}),
                }),
            renderPopoutChildren: (t, n) =>
                (0, r.jsx)(
                    "div",
                    B(
                        F(
                            {
                                ref: e,
                            },
                            n,
                        ),
                        {
                            children: (0, r.jsx)(
                                g.Button,
                                B(F({}, t), {
                                    disabled: !0,
                                    variant: "primary",
                                    text: M.intl.string(M.t["/uNYPJ"]),
                                }),
                            ),
                        },
                    ),
                ),
            popoutTargetRef: e,
        });
    };

function X(e) {
    let { guild: t } = e,
        [l, s] = (0, o.yK)([v.A], () => {
            var e;
            return [
                null != (e = v.A.getSoundsForGuild(t.id)) ? e : k.pD,
                v.A.isFetchingSounds() || v.A.isFetchingDefaultSounds(),
            ];
        }),
        { canCreateExpressions: a } = (0, O.nr)(t),
        c = i.useRef(null),
        d = (0, p.Ay)(),
        u = t.premiumTier,
        f = (0, P.tO)(t, l, u);
    i.useEffect(() => {
        (0, y.E7)();
    }, []);
    let b = i.useMemo(() => l.reduce((e, t) => ((e[t.soundId] = new Audio((0, A.A)(t.soundId))), e), {}), [l]),
        m = 0 === l.length && !s;

    function x(e) {
        var t;
        null == (t = c.current) || t.pause();
        let n = b[e.soundId];
        null != n && ((c.current = n), (n.currentTime = 0), (n.volume = (0, E.A)(e.volume)), n.play());
    }
    if (
        (i.useEffect(
            () => () => {
                var e;
                null == (e = c.current) || e.pause();
            },
            [],
        ),
        s)
    )
        return (0, r.jsx)(g.y$y, {});
    let h = H
        ? (0, r.jsx)(g.Button, {
              variant: "primary",
              text: M.intl.string(M.t["/uNYPJ"]),
              onClick: function () {
                  (0, g.mMO)(async () => {
                      let { default: e } = await Promise.all([n.e("40556"), n.e("61274")]).then(n.bind(n, 6503));
                      return (n) =>
                          (0, r.jsx)(
                              e,
                              B(F({}, n), {
                                  guildId: t.id,
                              }),
                          );
                  });
              },
              disabled: f <= 0 || !a,
          })
        : (0, r.jsx)(W, {});
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(g.Text, {
                        className: U.BK,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: M.intl.string(M.t.BohnsE),
                    }),
                    (0, r.jsx)("div", {
                        className: U.Uo,
                        children: !m && h,
                    }),
                ],
            }),
            m
                ? (0, r.jsxs)(g.ppr, {
                      theme: d,
                      className: U.Ie,
                      children: [
                          (0, r.jsx)(g.G8R, {
                              darkSrc: n(223685),
                              lightSrc: n(388547),
                              width: 272,
                              height: 212,
                          }),
                          (0, r.jsx)(g.SGT, {
                              note: M.intl.string(M.t.ZhoSBI),
                              noteClassName: U.BI,
                              children: M.intl.string(M.t.I6P1p7),
                          }),
                          h,
                      ],
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(g.cGx, {
                              className: U.yF,
                          }),
                          (0, r.jsx)(g.Heading, {
                              className: U.jA,
                              variant: "heading-md/bold",
                              color: "text-strong",
                              children: (0, r.jsx)(z, {
                                  guildId: t.id,
                                  currentTier: u,
                                  availableSounds: f,
                              }),
                          }),
                          (0, r.jsx)(G.A, {
                              guild: t,
                              numSounds: l.length,
                              isOutOfSlots: 0 === f,
                          }),
                          (0, r.jsxs)("div", {
                              className: U.uE,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: U.ZF,
                                      children: [
                                          (0, r.jsx)(K, {
                                              children: M.intl.string(M.t.sMOuuS),
                                          }),
                                          (0, r.jsx)(K, {
                                              children: M.intl.string(M.t.lLFvlT),
                                          }),
                                          (0, r.jsx)(K, {
                                              children: M.intl.string(M.t["85qMS/"]),
                                          }),
                                      ],
                                  }),
                                  l.map((e) =>
                                      (0, r.jsx)(
                                          J,
                                          {
                                              sound: e,
                                              isPlaying: !1,
                                              guild: t,
                                              onPlaySound: x,
                                          },
                                          e.soundId,
                                      ),
                                  ),
                              ],
                          }),
                      ],
                  }),
        ],
    });
}

function J(e) {
    let { sound: t, isPlaying: l, onPlaySound: a, guild: c } = e,
        { soundId: d, name: f, user: p, userId: x, emojiId: j, emojiName: v } = t,
        { analyticsLocations: A } = (0, h.Ay)(),
        E = (0, o.bG)([T.default], () => (null != p ? p : T.default.getUser(x)), [x, p]),
        { canManageGuildExpression: S } = (0, O.nr)(c),
        I = i.useMemo(() => S(t), [t, S]),
        P = null != j || null != v,
        [w, D] = i.useState(!1),
        G = (0, N.v)(t, c.id);
    async function L() {
        if (!w) {
            D(!0);
            try {
                await (0, y.ty)(c.id, d);
            } catch (e) {
                D(!1);
            }
        }
    }
    i.useEffect(() => {
        null == E && e();
        async function e() {
            await (0, b.wz)(x);
        }
    }, [E, x]);
    let k = i.useCallback(() => {
            null != E &&
                (0, _.openUserProfileModal)({
                    userId: E.id,
                    guildId: c.id,
                    sourceAnalyticsLocations: A,
                });
        }, [E, c.id, A]),
        H = R.Ay.useUserTag(E);
    return (0, r.jsxs)("div", {
        className: s()(U.nM, {
            [U.vu]: l,
        }),
        children: [
            P
                ? (0, r.jsx)(m.A, {
                      emojiId: j,
                      emojiName: v,
                      className: U.Zg,
                  })
                : (0, r.jsx)(g.xfq, {
                      size: "md",
                      color: "currentColor",
                      className: U.Zg,
                  }),
            (0, r.jsx)(g.DUT, {
                onClick: () => {
                    w || a(t);
                },
                onContextMenu: G,
                className: U.TW,
                children: (0, r.jsxs)(g.Text, {
                    variant: "text-sm/normal",
                    className: U.TW,
                    children: [
                        f,
                        " ",
                        (0, r.jsx)(g.HKD, {
                            size: "md",
                            color: "currentColor",
                            className: U.Ns,
                        }),
                    ],
                }),
            }),
            null != E &&
                (0, r.jsxs)(g.DUT, {
                    className: U.xp,
                    onClick: k,
                    children: [
                        (0, r.jsx)(g.euF, {
                            "aria-label": H,
                            size: g._3J.SIZE_24,
                            className: U.Cp,
                            src: (0, C.ku)(E, !1, 24),
                        }),
                        (0, r.jsx)(g.Text, {
                            variant: "text-sm/normal",
                            lineClamp: 1,
                            children: H,
                        }),
                    ],
                }),
            I
                ? (0, r.jsxs)("div", {
                      className: U.vO,
                      children: [
                          (0, r.jsx)(g.DUT, {
                              className: U.Bw,
                              onClick: function (e) {
                                  e.stopPropagation(),
                                      (0, g.mMO)(async () => {
                                          let { default: e } = await Promise.all([n.e("40556"), n.e("61274")]).then(
                                              n.bind(n, 6503),
                                          );
                                          return (n) =>
                                              (0, r.jsx)(
                                                  e,
                                                  B(F({}, n), {
                                                      guildId: c.id,
                                                      existingSound: t,
                                                  }),
                                              );
                                      });
                              },
                              "aria-label": M.intl.string(M.t.bt75uw),
                              children: (0, r.jsx)(g.R2l, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: U.J4,
                              }),
                          }),
                          (0, r.jsx)(g.DUT, {
                              className: U.QR,
                              onClick: function (e) {
                                  e.stopPropagation(),
                                      (0, u.A)({
                                          title: M.intl.formatToPlainString(M.t["PR/VbI"], {
                                              soundName: f,
                                          }),
                                          subtitle: M.intl.format(M.t["u6+CmN"], {
                                              soundName: f,
                                          }),
                                          confirmText: M.intl.string(M.t.oyYWHE),
                                          onConfirm: L,
                                      });
                              },
                              "aria-label": M.intl.string(M.t.N86XcP),
                              children: (0, r.jsx)(g.PGe, {
                                  size: "md",
                                  color: "currentColor",
                                  className: U.J4,
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
