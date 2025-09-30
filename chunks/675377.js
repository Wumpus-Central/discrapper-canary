n.d(t, { Z: () => B }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(525654),
    o = n.n(a),
    c = n(442837),
    d = n(846519),
    u = n(481060),
    m = n(232567),
    g = n(596454),
    p = n(410030),
    f = n(100527),
    h = n(906732),
    x = n(623624),
    b = n(357156),
    j = n(208049),
    v = n(763296),
    _ = n(22382),
    O = n(747071),
    y = n(286654),
    C = n(892001),
    N = n(430824),
    E = n(594174),
    I = n(15385),
    S = n(768581),
    T = n(267642),
    P = n(358085),
    w = n(51144),
    R = n(999382),
    D = n(803305),
    Z = n(981631),
    A = n(710111),
    L = n(388032),
    k = n(360054);
function G(e) {
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
function M(e, t) {
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
let U = P.isPlatformEmbedded || "Safari" !== o().name;
function B() {
    let e = (0, c.e7)([R.Z], () => R.Z.getProps().guild),
        { analyticsLocations: t } = (0, h.ZP)(f.Z.GUILD_SETTINGS_SOUNDBOARD);
    return null == e
        ? null
        : (0, r.jsx)(h.Gt, {
              value: t,
              children: (0, r.jsx)(u.hjN, {
                  tag: u.RB0.H1,
                  title: L.intl.string(L.t.OWQNYm),
                  children: (0, r.jsx)(W, { guild: e }),
              }),
          });
}
function F(e) {
    let { children: t } = e;
    return (0, r.jsx)(u.X6q, {
        className: k.tableHeader,
        variant: "heading-sm/semibold",
        color: "header-secondary",
        children: t,
    });
}
function H(e) {
    let { currentTier: t, availableSounds: n, guildId: i } = e,
        l = N.Z.getGuild(i),
        s = null != l ? (0, T.nL)(l) : 0;
    return 0 === t
        ? (0, r.jsx)(r.Fragment, {
              children: L.intl.format(L.t["7E9Hd3"], {
                  slots: n,
                  totalSlots: s,
              }),
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(u.ua7, {
                      text: L.intl.formatToPlainString(L.t.tuuJJS, { currentBoostLevel: t }),
                      children: (e) =>
                          (0, r.jsx)(u.P3F, {
                              className: k.boostingIconWrapper,
                              onClick: () => {
                                  (0, x.f)({
                                      guildId: i,
                                      location: {
                                          section: Z.jXE.GUILD_SETTINGS_SOUNDBOARD,
                                          object: Z.qAy.BOOST_GEM_ICON,
                                      },
                                  });
                              },
                              tabIndex: -1,
                              children: (0, r.jsx)(I.Z, G({}, e)),
                          }),
                  }),
                  L.intl.format(L.t.HHCdvb, {
                      slots: n,
                      totalSlots: s,
                      boostLevel: t,
                  }),
              ],
          });
}
let z = (e) => {
        var { renderPopoutBody: t, renderPopoutChildren: n, popoutTargetRef: l } = e,
            s = (function (e, t) {
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
        let [a, o] = i.useState(!1),
            c = i.useMemo(() => new d.V7(), []),
            m = i.useCallback(() => {
                c.stop(), o(!0);
            }, [c]),
            g = i.useCallback(() => {
                c.start(200, () => o(!1));
            }, [c]),
            p = {
                onMouseEnter: m,
                onMouseLeave: g,
            };
        return (0, r.jsx)(
            u.yRy,
            M(
                G(
                    {
                        shouldShow: a,
                        renderPopout: (e) =>
                            (0, r.jsx)(u.VqE, {
                                className: k.browserUnsupportedDialog,
                                onMouseEnter: m,
                                onMouseLeave: g,
                                children: t(e),
                            }),
                    },
                    s,
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
                (0, r.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: L.intl.format(L.t.bGXPVl, {}),
                }),
            renderPopoutChildren: (t, n) =>
                (0, r.jsx)(
                    "div",
                    M(G({ ref: e }, n), {
                        children: (0, r.jsx)(
                            u.zxk,
                            M(G({}, t), {
                                disabled: !0,
                                variant: "primary",
                                text: L.intl.string(L.t["/uNYPD"]),
                            }),
                        ),
                    }),
                ),
            popoutTargetRef: e,
        });
    };
function W(e) {
    let { guild: t } = e,
        [l, s] = (0, c.Wu)([v.Z], () => {
            var e;
            return [
                null != (e = v.Z.getSoundsForGuild(t.id)) ? e : A.Hy,
                v.Z.isFetchingSounds() || v.Z.isFetchingDefaultSounds(),
            ];
        }),
        { canCreateExpressions: a } = (0, b.XJ)(t),
        o = i.useRef(null),
        d = (0, p.ZP)(),
        m = t.premiumTier,
        g = (0, T.yw)(t, l, m);
    i.useEffect(() => {
        (0, j.w)();
    }, []);
    let f = i.useMemo(() => l.reduce((e, t) => ((e[t.soundId] = new Audio((0, _.Z)(t.soundId))), e), {}), [l]),
        h = 0 === l.length && !s;
    function x(e) {
        var t;
        null == (t = o.current) || t.pause();
        let n = f[e.soundId];
        null != n && ((o.current = n), (n.currentTime = 0), (n.volume = (0, O.Z)(e.volume)), n.play());
    }
    if (
        (i.useEffect(
            () => () => {
                var e;
                null == (e = o.current) || e.pause();
            },
            [],
        ),
        s)
    )
        return (0, r.jsx)(u.$jN, {});
    let y = U
        ? (0, r.jsx)(u.zxk, {
              variant: "primary",
              text: L.intl.string(L.t["/uNYPD"]),
              onClick: function () {
                  (0, u.ZDy)(async () => {
                      let { default: e } = await n.e("56035").then(n.bind(n, 758961));
                      return (n) => (0, r.jsx)(e, M(G({}, n), { guildId: t.id }));
                  });
              },
              disabled: g <= 0 || !a,
          })
        : (0, r.jsx)(V, {});
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(u.Text, {
                        className: k.helpText,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: L.intl.string(L.t.BohnsL),
                    }),
                    (0, r.jsx)("div", {
                        className: k.buttons,
                        children: !h && y,
                    }),
                ],
            }),
            h
                ? (0, r.jsxs)(u.ubH, {
                      theme: d,
                      className: k.empty,
                      children: [
                          (0, r.jsx)(u.oxh, {
                              darkSrc: n(458601),
                              lightSrc: n(673557),
                              width: 272,
                              height: 212,
                          }),
                          (0, r.jsx)(u.OZU, {
                              note: L.intl.string(L.t.ZhoSBA),
                              noteClassName: k.emptyText,
                              children: L.intl.string(L.t.I6P1p6),
                          }),
                          y,
                      ],
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(u.izJ, { className: k.divider }),
                          (0, r.jsx)(u.X6q, {
                              className: k.tableTitle,
                              variant: "heading-md/bold",
                              color: "header-primary",
                              children: (0, r.jsx)(H, {
                                  guildId: t.id,
                                  currentTier: m,
                                  availableSounds: g,
                              }),
                          }),
                          (0, r.jsx)(D.Z, {
                              guild: t,
                              numSounds: l.length,
                              isOutOfSlots: 0 === g,
                          }),
                          (0, r.jsxs)("div", {
                              className: k.soundTable,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: k.tableHeaders,
                                      children: [
                                          (0, r.jsx)(F, { children: L.intl.string(L.t.sMOuub) }),
                                          (0, r.jsx)(F, { children: L.intl.string(L.t.lLFvlZ) }),
                                          (0, r.jsx)(F, { children: L.intl.string(L.t["85qMS0"]) }),
                                      ],
                                  }),
                                  l.map((e) =>
                                      (0, r.jsx)(
                                          K,
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
function K(e) {
    let { sound: t, isPlaying: l, onPlaySound: a, guild: o } = e,
        { soundId: d, name: p, user: f, userId: x, emojiId: v, emojiName: _ } = t,
        { analyticsLocations: O } = (0, h.ZP)(),
        N = (0, c.e7)([E.default], () => (null != f ? f : E.default.getUser(x)), [x, f]),
        { canManageGuildExpression: I } = (0, b.XJ)(o),
        T = i.useMemo(() => I(t), [t, I]),
        P = null != v || null != _,
        [R, D] = i.useState(!1),
        Z = (0, y.z)(t, o.id);
    async function A() {
        if (!R) {
            D(!0);
            try {
                await (0, j.AA)(o.id, d);
            } catch (e) {
                D(!1);
            }
        }
    }
    i.useEffect(() => {
        null == N && e();
        async function e() {
            await (0, m.PR)(x);
        }
    }, [N, x]);
    let U = i.useCallback(() => {
            null != N &&
                (0, C.openUserProfileModal)({
                    userId: N.id,
                    guildId: o.id,
                    sourceAnalyticsLocations: O,
                });
        }, [N, o.id, O]),
        B = w.ZP.useUserTag(N);
    return (0, r.jsxs)("div", {
        className: s()(k.row, { [k.active]: l }),
        children: [
            P
                ? (0, r.jsx)(g.Z, {
                      emojiId: v,
                      emojiName: _,
                      className: k.emoji,
                  })
                : (0, r.jsx)(u.XBm, {
                      size: "md",
                      color: "currentColor",
                      className: k.emoji,
                  }),
            (0, r.jsx)(u.P3F, {
                onClick: () => {
                    R || a(t);
                },
                onContextMenu: Z,
                className: k.soundName,
                children: (0, r.jsxs)(u.Text, {
                    variant: "text-sm/normal",
                    className: k.soundName,
                    children: [
                        p,
                        " ",
                        (0, r.jsx)(u.gj8, {
                            size: "md",
                            color: "currentColor",
                            className: k.soundPreviewIcon,
                        }),
                    ],
                }),
            }),
            null != N &&
                (0, r.jsxs)(u.P3F, {
                    className: k.uploader,
                    onClick: U,
                    children: [
                        (0, r.jsx)(u.qEK, {
                            "aria-label": B,
                            size: u.EFr.SIZE_24,
                            className: k.uploaderAvatar,
                            src: (0, S.ov)(N, !1, 24),
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            lineClamp: 1,
                            children: B,
                        }),
                    ],
                }),
            T
                ? (0, r.jsxs)("div", {
                      className: k.soundEditContainer,
                      children: [
                          (0, r.jsx)(u.P3F, {
                              className: k.soundUpdate,
                              onClick: function (e) {
                                  e.stopPropagation(),
                                      (0, u.ZDy)(async () => {
                                          let { default: e } = await n.e("56035").then(n.bind(n, 758961));
                                          return (n) =>
                                              (0, r.jsx)(
                                                  e,
                                                  M(G({}, n), {
                                                      guildId: o.id,
                                                      existingSound: t,
                                                  }),
                                              );
                                      });
                              },
                              "aria-label": L.intl.string(L.t.bt75u7),
                              children: (0, r.jsx)(u.vdY, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: k.soundEditIcon,
                              }),
                          }),
                          (0, r.jsx)(u.P3F, {
                              className: k.soundRemove,
                              onClick: function (e) {
                                  e.stopPropagation(),
                                      (0, u.h7j)((e) =>
                                          (0, r.jsx)(
                                              u.ConfirmModal,
                                              M(
                                                  G(
                                                      {
                                                          header: L.intl.formatToPlainString(L.t["PR/VbG"], {
                                                              soundName: p,
                                                          }),
                                                          confirmText: L.intl.string(L.t.oyYWHB),
                                                          cancelText: L.intl.string(L.t["ETE/oK"]),
                                                          onConfirm: A,
                                                      },
                                                      e,
                                                  ),
                                                  {
                                                      children: (0, r.jsx)(u.Text, {
                                                          variant: "text-md/normal",
                                                          children: L.intl.format(L.t["u6+CmJ"], { soundName: p }),
                                                      }),
                                                  },
                                              ),
                                          ),
                                      );
                              },
                              "aria-label": L.intl.string(L.t.N86XcH),
                              children: (0, r.jsx)(u.Dio, {
                                  size: "md",
                                  color: "currentColor",
                                  className: k.soundEditIcon,
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
