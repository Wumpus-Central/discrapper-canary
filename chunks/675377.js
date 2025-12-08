n.d(t, { Z: () => H }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(525654),
    o = n.n(s),
    c = n(442837),
    d = n(846519),
    u = n(248514),
    g = n(28664),
    m = n(481060),
    p = n(232567),
    f = n(596454),
    h = n(410030),
    b = n(100527),
    x = n(906732),
    j = n(623624),
    _ = n(357156),
    v = n(208049),
    O = n(763296),
    C = n(22382),
    y = n(747071),
    N = n(286654),
    E = n(892001),
    I = n(430824),
    S = n(594174),
    T = n(15385),
    P = n(768581),
    w = n(267642),
    Z = n(358085),
    R = n(51144),
    D = n(999382),
    A = n(803305),
    L = n(981631),
    k = n(710111),
    G = n(388032),
    M = n(360054);
function U(e) {
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
let F = Z.isPlatformEmbedded || "Safari" !== o().name;
function H() {
    let e = (0, c.e7)([D.Z], () => D.Z.getProps().guild),
        { analyticsLocations: t } = (0, x.ZP)(b.Z.GUILD_SETTINGS_SOUNDBOARD);
    return null == e
        ? null
        : (0, r.jsx)(x.Gt, {
              value: t,
              children: (0, r.jsxs)(m.Kqy, {
                  gap: 8,
                  children: [
                      (0, r.jsx)(m.Heading, {
                          variant: "heading-lg/semibold",
                          children: G.intl.string(G.t.OWQNYr),
                      }),
                      (0, r.jsx)(Y, { guild: e }),
                  ],
              }),
          });
}
function z(e) {
    let { children: t } = e;
    return (0, r.jsx)(m.Heading, {
        className: M.tableHeader,
        variant: "heading-sm/semibold",
        color: "text-default",
        children: t,
    });
}
function W(e) {
    let { currentTier: t, availableSounds: n, guildId: i } = e,
        l = I.Z.getGuild(i),
        a = null != l ? (0, w.nL)(l) : 0;
    return 0 === t
        ? (0, r.jsx)(r.Fragment, {
              children: G.intl.format(G.t["7E9Hdz"], {
                  slots: n,
                  totalSlots: a,
              }),
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(g.u, {
                      text: G.intl.formatToPlainString(G.t.tuuJJT, { currentBoostLevel: t }),
                      children: (0, r.jsx)(m.P3F, {
                          className: M.boostingIconWrapper,
                          onClick: () => {
                              (0, j.f)({
                                  guildId: i,
                                  location: {
                                      section: L.jXE.GUILD_SETTINGS_SOUNDBOARD,
                                      object: L.qAy.BOOST_GEM_ICON,
                                  },
                              });
                          },
                          tabIndex: -1,
                          children: (0, r.jsx)(T.Z, {}),
                      }),
                  }),
                  G.intl.format(G.t.HHCdvU, {
                      slots: n,
                      totalSlots: a,
                      boostLevel: t,
                  }),
              ],
          });
}
let V = (e) => {
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
            g = i.useCallback(() => {
                c.start(200, () => o(!1));
            }, [c]),
            p = {
                onMouseEnter: u,
                onMouseLeave: g,
            };
        return (0, r.jsx)(
            m.yRy,
            B(
                U(
                    {
                        shouldShow: s,
                        renderPopout: (e) =>
                            (0, r.jsx)(m.VqE, {
                                className: M.browserUnsupportedDialog,
                                onMouseEnter: u,
                                onMouseLeave: g,
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
    K = () => {
        let e = i.useRef(null);
        return (0, r.jsx)(V, {
            renderPopoutBody: () =>
                (0, r.jsx)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: G.intl.format(G.t.bGXPVt, {}),
                }),
            renderPopoutChildren: (t, n) =>
                (0, r.jsx)(
                    "div",
                    B(U({ ref: e }, n), {
                        children: (0, r.jsx)(
                            m.Button,
                            B(U({}, t), {
                                disabled: !0,
                                variant: "primary",
                                text: G.intl.string(G.t["/uNYPJ"]),
                            }),
                        ),
                    }),
                ),
            popoutTargetRef: e,
        });
    };
function Y(e) {
    let { guild: t } = e,
        [l, a] = (0, c.Wu)([O.Z], () => {
            var e;
            return [
                null != (e = O.Z.getSoundsForGuild(t.id)) ? e : k.Hy,
                O.Z.isFetchingSounds() || O.Z.isFetchingDefaultSounds(),
            ];
        }),
        { canCreateExpressions: s } = (0, _.XJ)(t),
        o = i.useRef(null),
        d = (0, h.ZP)(),
        u = t.premiumTier,
        g = (0, w.yw)(t, l, u);
    i.useEffect(() => {
        (0, v.w)();
    }, []);
    let p = i.useMemo(() => l.reduce((e, t) => ((e[t.soundId] = new Audio((0, C.Z)(t.soundId))), e), {}), [l]),
        f = 0 === l.length && !a;
    function b(e) {
        var t;
        null == (t = o.current) || t.pause();
        let n = p[e.soundId];
        null != n && ((o.current = n), (n.currentTime = 0), (n.volume = (0, y.Z)(e.volume)), n.play());
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
        return (0, r.jsx)(m.$jN, {});
    let x = F
        ? (0, r.jsx)(m.Button, {
              variant: "primary",
              text: G.intl.string(G.t["/uNYPJ"]),
              onClick: function () {
                  (0, m.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e("56035"), n.e("87262")]).then(n.bind(n, 758961));
                      return (n) => (0, r.jsx)(e, B(U({}, n), { guildId: t.id }));
                  });
              },
              disabled: g <= 0 || !s,
          })
        : (0, r.jsx)(K, {});
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(m.Text, {
                        className: M.helpText,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: G.intl.string(G.t.BohnsE),
                    }),
                    (0, r.jsx)("div", {
                        className: M.buttons,
                        children: !f && x,
                    }),
                ],
            }),
            f
                ? (0, r.jsxs)(m.ubH, {
                      theme: d,
                      className: M.empty,
                      children: [
                          (0, r.jsx)(m.oxh, {
                              darkSrc: n(458601),
                              lightSrc: n(673557),
                              width: 272,
                              height: 212,
                          }),
                          (0, r.jsx)(m.OZU, {
                              note: G.intl.string(G.t.ZhoSBI),
                              noteClassName: M.emptyText,
                              children: G.intl.string(G.t.I6P1p7),
                          }),
                          x,
                      ],
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(m.izJ, { className: M.divider }),
                          (0, r.jsx)(m.Heading, {
                              className: M.tableTitle,
                              variant: "heading-md/bold",
                              color: "header-primary",
                              children: (0, r.jsx)(W, {
                                  guildId: t.id,
                                  currentTier: u,
                                  availableSounds: g,
                              }),
                          }),
                          (0, r.jsx)(A.Z, {
                              guild: t,
                              numSounds: l.length,
                              isOutOfSlots: 0 === g,
                          }),
                          (0, r.jsxs)("div", {
                              className: M.soundTable,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: M.tableHeaders,
                                      children: [
                                          (0, r.jsx)(z, { children: G.intl.string(G.t.sMOuuS) }),
                                          (0, r.jsx)(z, { children: G.intl.string(G.t.lLFvlT) }),
                                          (0, r.jsx)(z, { children: G.intl.string(G.t["85qMS/"]) }),
                                      ],
                                  }),
                                  l.map((e) =>
                                      (0, r.jsx)(
                                          q,
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
function q(e) {
    let { sound: t, isPlaying: l, onPlaySound: s, guild: o } = e,
        { soundId: d, name: g, user: h, userId: b, emojiId: j, emojiName: O } = t,
        { analyticsLocations: C } = (0, x.ZP)(),
        y = (0, c.e7)([S.default], () => (null != h ? h : S.default.getUser(b)), [b, h]),
        { canManageGuildExpression: I } = (0, _.XJ)(o),
        T = i.useMemo(() => I(t), [t, I]),
        w = null != j || null != O,
        [Z, D] = i.useState(!1),
        A = (0, N.z)(t, o.id);
    async function L() {
        if (!Z) {
            D(!0);
            try {
                await (0, v.AA)(o.id, d);
            } catch (e) {
                D(!1);
            }
        }
    }
    i.useEffect(() => {
        null == y && e();
        async function e() {
            await (0, p.PR)(b);
        }
    }, [y, b]);
    let k = i.useCallback(() => {
            null != y &&
                (0, E.openUserProfileModal)({
                    userId: y.id,
                    guildId: o.id,
                    sourceAnalyticsLocations: C,
                });
        }, [y, o.id, C]),
        F = R.ZP.useUserTag(y);
    return (0, r.jsxs)("div", {
        className: a()(M.row, { [M.active]: l }),
        children: [
            w
                ? (0, r.jsx)(f.Z, {
                      emojiId: j,
                      emojiName: O,
                      className: M.emoji,
                  })
                : (0, r.jsx)(m.XBm, {
                      size: "md",
                      color: "currentColor",
                      className: M.emoji,
                  }),
            (0, r.jsx)(m.P3F, {
                onClick: () => {
                    Z || s(t);
                },
                onContextMenu: A,
                className: M.soundName,
                children: (0, r.jsxs)(m.Text, {
                    variant: "text-sm/normal",
                    className: M.soundName,
                    children: [
                        g,
                        " ",
                        (0, r.jsx)(m.gj8, {
                            size: "md",
                            color: "currentColor",
                            className: M.soundPreviewIcon,
                        }),
                    ],
                }),
            }),
            null != y &&
                (0, r.jsxs)(m.P3F, {
                    className: M.uploader,
                    onClick: k,
                    children: [
                        (0, r.jsx)(m.qEK, {
                            "aria-label": F,
                            size: m.EFr.SIZE_24,
                            className: M.uploaderAvatar,
                            src: (0, P.ov)(y, !1, 24),
                        }),
                        (0, r.jsx)(m.Text, {
                            variant: "text-sm/normal",
                            lineClamp: 1,
                            children: F,
                        }),
                    ],
                }),
            T
                ? (0, r.jsxs)("div", {
                      className: M.soundEditContainer,
                      children: [
                          (0, r.jsx)(m.P3F, {
                              className: M.soundUpdate,
                              onClick: function (e) {
                                  e.stopPropagation(),
                                      (0, m.ZDy)(async () => {
                                          let { default: e } = await Promise.all([n.e("56035"), n.e("87262")]).then(
                                              n.bind(n, 758961),
                                          );
                                          return (n) =>
                                              (0, r.jsx)(
                                                  e,
                                                  B(U({}, n), {
                                                      guildId: o.id,
                                                      existingSound: t,
                                                  }),
                                              );
                                      });
                              },
                              "aria-label": G.intl.string(G.t.bt75uw),
                              children: (0, r.jsx)(m.vdY, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: M.soundEditIcon,
                              }),
                          }),
                          (0, r.jsx)(m.P3F, {
                              className: M.soundRemove,
                              onClick: function (e) {
                                  e.stopPropagation(),
                                      (0, u.Z)({
                                          title: G.intl.formatToPlainString(G.t["PR/VbI"], { soundName: g }),
                                          subtitle: G.intl.format(G.t["u6+CmN"], { soundName: g }),
                                          confirmText: G.intl.string(G.t.oyYWHE),
                                          onConfirm: L,
                                      });
                              },
                              "aria-label": G.intl.string(G.t.N86XcP),
                              children: (0, r.jsx)(m.Dio, {
                                  size: "md",
                                  color: "currentColor",
                                  className: M.soundEditIcon,
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
