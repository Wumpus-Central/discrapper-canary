n.d(t, { Z: () => F }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(525654),
    o = n.n(s),
    c = n(442837),
    d = n(846519),
    u = n(28664),
    g = n(481060),
    m = n(232567),
    p = n(596454),
    f = n(410030),
    h = n(100527),
    b = n(906732),
    x = n(623624),
    j = n(357156),
    _ = n(208049),
    v = n(763296),
    O = n(22382),
    C = n(747071),
    y = n(286654),
    N = n(892001),
    E = n(430824),
    I = n(594174),
    S = n(15385),
    T = n(768581),
    P = n(267642),
    w = n(358085),
    Z = n(51144),
    R = n(999382),
    D = n(803305),
    A = n(981631),
    L = n(710111),
    k = n(388032),
    G = n(909258);
function M(e) {
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
function U(e, t) {
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
let B = w.isPlatformEmbedded || "Safari" !== o().name;
function F() {
    let e = (0, c.e7)([R.Z], () => R.Z.getProps().guild),
        { analyticsLocations: t } = (0, b.ZP)(h.Z.GUILD_SETTINGS_SOUNDBOARD);
    return null == e
        ? null
        : (0, r.jsx)(b.Gt, {
              value: t,
              children: (0, r.jsxs)(g.Kqy, {
                  gap: 8,
                  children: [
                      (0, r.jsx)(g.Heading, {
                          variant: "heading-lg/semibold",
                          children: k.intl.string(k.t.OWQNYr),
                      }),
                      (0, r.jsx)(K, { guild: e }),
                  ],
              }),
          });
}
function H(e) {
    let { children: t } = e;
    return (0, r.jsx)(g.Heading, {
        className: G.tableHeader,
        variant: "heading-sm/semibold",
        color: "header-secondary",
        children: t,
    });
}
function W(e) {
    let { currentTier: t, availableSounds: n, guildId: i } = e,
        l = E.Z.getGuild(i),
        a = null != l ? (0, P.nL)(l) : 0;
    return 0 === t
        ? (0, r.jsx)(r.Fragment, {
              children: k.intl.format(k.t["7E9Hdz"], {
                  slots: n,
                  totalSlots: a,
              }),
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(u.u, {
                      text: k.intl.formatToPlainString(k.t.tuuJJT, { currentBoostLevel: t }),
                      children: (0, r.jsx)(g.P3F, {
                          className: G.boostingIconWrapper,
                          onClick: () => {
                              (0, x.f)({
                                  guildId: i,
                                  location: {
                                      section: A.jXE.GUILD_SETTINGS_SOUNDBOARD,
                                      object: A.qAy.BOOST_GEM_ICON,
                                  },
                              });
                          },
                          tabIndex: -1,
                          children: (0, r.jsx)(S.Z, {}),
                      }),
                  }),
                  k.intl.format(k.t.HHCdvU, {
                      slots: n,
                      totalSlots: a,
                      boostLevel: t,
                  }),
              ],
          });
}
let z = (e) => {
        var { renderPopoutBody: t, renderPopoutChildren: n, popoutTargetRef: l } = e,
            a = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ["renderPopoutBody", "renderPopoutChildren", "popoutTargetRef"]);
        let [s, o] = i.useState(!1),
            c = i.useMemo(() => new d.V7(), []),
            u = i.useCallback(() => {
                c.stop(), o(!0);
            }, [c]),
            m = i.useCallback(() => {
                c.start(200, () => o(!1));
            }, [c]),
            p = {
                onMouseEnter: u,
                onMouseLeave: m,
            };
        return (0, r.jsx)(
            g.yRy,
            U(
                M(
                    {
                        shouldShow: s,
                        renderPopout: (e) =>
                            (0, r.jsx)(g.VqE, {
                                className: G.browserUnsupportedDialog,
                                onMouseEnter: u,
                                onMouseLeave: m,
                                children: t(e),
                            }),
                    },
                    a,
                ),
                {
                    targetElementRef: l,
                    children: (e) => n(e, p),
                },
            ),
        );
    },
    V = () => {
        let e = i.useRef(null);
        return (0, r.jsx)(z, {
            renderPopoutBody: () =>
                (0, r.jsx)(g.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: k.intl.format(k.t.bGXPVt, {}),
                }),
            renderPopoutChildren: (t, n) =>
                (0, r.jsx)(
                    "div",
                    U(M({ ref: e }, n), {
                        children: (0, r.jsx)(
                            g.Button,
                            U(M({}, t), {
                                disabled: !0,
                                variant: "primary",
                                text: k.intl.string(k.t["/uNYPJ"]),
                            }),
                        ),
                    }),
                ),
            popoutTargetRef: e,
        });
    };
function K(e) {
    let { guild: t } = e,
        [l, a] = (0, c.Wu)([v.Z], () => {
            var e;
            return [
                null != (e = v.Z.getSoundsForGuild(t.id)) ? e : L.Hy,
                v.Z.isFetchingSounds() || v.Z.isFetchingDefaultSounds(),
            ];
        }),
        { canCreateExpressions: s } = (0, j.XJ)(t),
        o = i.useRef(null),
        d = (0, f.ZP)(),
        u = t.premiumTier,
        m = (0, P.yw)(t, l, u);
    i.useEffect(() => {
        (0, _.w)();
    }, []);
    let p = i.useMemo(() => l.reduce((e, t) => ((e[t.soundId] = new Audio((0, O.Z)(t.soundId))), e), {}), [l]),
        h = 0 === l.length && !a;
    function b(e) {
        var t;
        null == (t = o.current) || t.pause();
        let n = p[e.soundId];
        null != n && ((o.current = n), (n.currentTime = 0), (n.volume = (0, C.Z)(e.volume)), n.play());
    }
    if (
        (i.useEffect(
            () => () => {
                var e;
                null == (e = o.current) || e.pause();
            },
            [],
        ),
        a)
    )
        return (0, r.jsx)(g.$jN, {});
    let x = B
        ? (0, r.jsx)(g.Button, {
              variant: "primary",
              text: k.intl.string(k.t["/uNYPJ"]),
              onClick: function () {
                  (0, g.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e("56035"), n.e("24675")]).then(n.bind(n, 758961));
                      return (n) => (0, r.jsx)(e, U(M({}, n), { guildId: t.id }));
                  });
              },
              disabled: m <= 0 || !s,
          })
        : (0, r.jsx)(V, {});
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(g.Text, {
                        className: G.helpText,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: k.intl.string(k.t.BohnsE),
                    }),
                    (0, r.jsx)("div", {
                        className: G.buttons,
                        children: !h && x,
                    }),
                ],
            }),
            h
                ? (0, r.jsxs)(g.ubH, {
                      theme: d,
                      className: G.empty,
                      children: [
                          (0, r.jsx)(g.oxh, {
                              darkSrc: n(458601),
                              lightSrc: n(673557),
                              width: 272,
                              height: 212,
                          }),
                          (0, r.jsx)(g.OZU, {
                              note: k.intl.string(k.t.ZhoSBI),
                              noteClassName: G.emptyText,
                              children: k.intl.string(k.t.I6P1p7),
                          }),
                          x,
                      ],
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(g.izJ, { className: G.divider }),
                          (0, r.jsx)(g.Heading, {
                              className: G.tableTitle,
                              variant: "heading-md/bold",
                              color: "header-primary",
                              children: (0, r.jsx)(W, {
                                  guildId: t.id,
                                  currentTier: u,
                                  availableSounds: m,
                              }),
                          }),
                          (0, r.jsx)(D.Z, {
                              guild: t,
                              numSounds: l.length,
                              isOutOfSlots: 0 === m,
                          }),
                          (0, r.jsxs)("div", {
                              className: G.soundTable,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: G.tableHeaders,
                                      children: [
                                          (0, r.jsx)(H, { children: k.intl.string(k.t.sMOuuS) }),
                                          (0, r.jsx)(H, { children: k.intl.string(k.t.lLFvlT) }),
                                          (0, r.jsx)(H, { children: k.intl.string(k.t["85qMS/"]) }),
                                      ],
                                  }),
                                  l.map((e) =>
                                      (0, r.jsx)(
                                          Y,
                                          {
                                              sound: e,
                                              isPlaying: !1,
                                              guild: t,
                                              onPlaySound: b,
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
function Y(e) {
    let { sound: t, isPlaying: l, onPlaySound: s, guild: o } = e,
        { soundId: d, name: u, user: f, userId: h, emojiId: x, emojiName: v } = t,
        { analyticsLocations: O } = (0, b.ZP)(),
        C = (0, c.e7)([I.default], () => (null != f ? f : I.default.getUser(h)), [h, f]),
        { canManageGuildExpression: E } = (0, j.XJ)(o),
        S = i.useMemo(() => E(t), [t, E]),
        P = null != x || null != v,
        [w, R] = i.useState(!1),
        D = (0, y.z)(t, o.id);
    async function A() {
        if (!w) {
            R(!0);
            try {
                await (0, _.AA)(o.id, d);
            } catch (e) {
                R(!1);
            }
        }
    }
    i.useEffect(() => {
        null == C && e();
        async function e() {
            await (0, m.PR)(h);
        }
    }, [C, h]);
    let L = i.useCallback(() => {
            null != C &&
                (0, N.openUserProfileModal)({
                    userId: C.id,
                    guildId: o.id,
                    sourceAnalyticsLocations: O,
                });
        }, [C, o.id, O]),
        B = Z.ZP.useUserTag(C);
    return (0, r.jsxs)("div", {
        className: a()(G.row, { [G.active]: l }),
        children: [
            P
                ? (0, r.jsx)(p.Z, {
                      emojiId: x,
                      emojiName: v,
                      className: G.emoji,
                  })
                : (0, r.jsx)(g.XBm, {
                      size: "md",
                      color: "currentColor",
                      className: G.emoji,
                  }),
            (0, r.jsx)(g.P3F, {
                onClick: () => {
                    w || s(t);
                },
                onContextMenu: D,
                className: G.soundName,
                children: (0, r.jsxs)(g.Text, {
                    variant: "text-sm/normal",
                    className: G.soundName,
                    children: [
                        u,
                        " ",
                        (0, r.jsx)(g.gj8, {
                            size: "md",
                            color: "currentColor",
                            className: G.soundPreviewIcon,
                        }),
                    ],
                }),
            }),
            null != C &&
                (0, r.jsxs)(g.P3F, {
                    className: G.uploader,
                    onClick: L,
                    children: [
                        (0, r.jsx)(g.qEK, {
                            "aria-label": B,
                            size: g.EFr.SIZE_24,
                            className: G.uploaderAvatar,
                            src: (0, T.ov)(C, !1, 24),
                        }),
                        (0, r.jsx)(g.Text, {
                            variant: "text-sm/normal",
                            lineClamp: 1,
                            children: B,
                        }),
                    ],
                }),
            S
                ? (0, r.jsxs)("div", {
                      className: G.soundEditContainer,
                      children: [
                          (0, r.jsx)(g.P3F, {
                              className: G.soundUpdate,
                              onClick: function (e) {
                                  e.stopPropagation(),
                                      (0, g.ZDy)(async () => {
                                          let { default: e } = await Promise.all([n.e("56035"), n.e("24675")]).then(
                                              n.bind(n, 758961),
                                          );
                                          return (n) =>
                                              (0, r.jsx)(
                                                  e,
                                                  U(M({}, n), {
                                                      guildId: o.id,
                                                      existingSound: t,
                                                  }),
                                              );
                                      });
                              },
                              "aria-label": k.intl.string(k.t.bt75uw),
                              children: (0, r.jsx)(g.vdY, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: G.soundEditIcon,
                              }),
                          }),
                          (0, r.jsx)(g.P3F, {
                              className: G.soundRemove,
                              onClick: function (e) {
                                  e.stopPropagation(),
                                      (0, g.h7j)((e) =>
                                          (0, r.jsx)(
                                              g.ConfirmModal,
                                              U(
                                                  M(
                                                      {
                                                          header: k.intl.formatToPlainString(k.t["PR/VbI"], {
                                                              soundName: u,
                                                          }),
                                                          confirmText: k.intl.string(k.t.oyYWHE),
                                                          cancelText: k.intl.string(k.t["ETE/oC"]),
                                                          onConfirm: A,
                                                      },
                                                      e,
                                                  ),
                                                  {
                                                      children: (0, r.jsx)(g.Text, {
                                                          variant: "text-md/normal",
                                                          children: k.intl.format(k.t["u6+CmN"], { soundName: u }),
                                                      }),
                                                  },
                                              ),
                                          ),
                                      );
                              },
                              "aria-label": k.intl.string(k.t.N86XcP),
                              children: (0, r.jsx)(g.Dio, {
                                  size: "md",
                                  color: "currentColor",
                                  className: G.soundEditIcon,
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
