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
    f = n(481060),
    m = n(232567),
    b = n(596454),
    p = n(410030),
    h = n(100527),
    x = n(906732),
    j = n(623624),
    v = n(357156),
    O = n(208049),
    C = n(763296),
    y = n(22382),
    N = n(747071),
    E = n(286654),
    I = n(892001),
    S = n(430824),
    _ = n(594174),
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
    M = n(411194);
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
        { analyticsLocations: t } = (0, x.ZP)(h.Z.GUILD_SETTINGS_SOUNDBOARD);
    return null == e
        ? null
        : (0, r.jsx)(x.Gt, {
              value: t,
              children: (0, r.jsxs)(f.Kqy, {
                  gap: 8,
                  children: [
                      (0, r.jsx)(f.Heading, {
                          variant: "heading-lg/semibold",
                          children: G.intl.string(G.t.OWQNYr),
                      }),
                      (0, r.jsx)(Y, { guild: e }),
                  ],
              }),
          });
}
function W(e) {
    let { children: t } = e;
    return (0, r.jsx)(f.Heading, {
        className: M.tableHeader,
        variant: "heading-sm/semibold",
        color: "text-default",
        children: t,
    });
}
function z(e) {
    let { currentTier: t, availableSounds: n, guildId: i } = e,
        l = S.Z.getGuild(i),
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
                      children: (0, r.jsx)(f.P3F, {
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
            m = {
                onMouseEnter: u,
                onMouseLeave: g,
            };
        return (0, r.jsx)(
            f.yRy,
            B(
                U(
                    {
                        shouldShow: s,
                        renderPopout: (e) =>
                            (0, r.jsx)(f.VqE, {
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
                    children: (e) => n(e, m),
                },
            ),
        );
    },
    K = () => {
        let e = i.useRef(null);
        return (0, r.jsx)(V, {
            renderPopoutBody: () =>
                (0, r.jsx)(f.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: G.intl.format(G.t.bGXPVt, {}),
                }),
            renderPopoutChildren: (t, n) =>
                (0, r.jsx)(
                    "div",
                    B(U({ ref: e }, n), {
                        children: (0, r.jsx)(
                            f.Button,
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
        [l, a] = (0, c.Wu)([C.Z], () => {
            var e;
            return [
                null != (e = C.Z.getSoundsForGuild(t.id)) ? e : k.Hy,
                C.Z.isFetchingSounds() || C.Z.isFetchingDefaultSounds(),
            ];
        }),
        { canCreateExpressions: s } = (0, v.XJ)(t),
        o = i.useRef(null),
        d = (0, p.ZP)(),
        u = t.premiumTier,
        g = (0, w.yw)(t, l, u);
    i.useEffect(() => {
        (0, O.w)();
    }, []);
    let m = i.useMemo(() => l.reduce((e, t) => ((e[t.soundId] = new Audio((0, y.Z)(t.soundId))), e), {}), [l]),
        b = 0 === l.length && !a;
    function h(e) {
        var t;
        null == (t = o.current) || t.pause();
        let n = m[e.soundId];
        null != n && ((o.current = n), (n.currentTime = 0), (n.volume = (0, N.Z)(e.volume)), n.play());
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
        return (0, r.jsx)(f.$jN, {});
    let x = F
        ? (0, r.jsx)(f.Button, {
              variant: "primary",
              text: G.intl.string(G.t["/uNYPJ"]),
              onClick: function () {
                  (0, f.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e("56035"), n.e("48899")]).then(n.bind(n, 758961));
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
                    (0, r.jsx)(f.Text, {
                        className: M.helpText,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: G.intl.string(G.t.BohnsE),
                    }),
                    (0, r.jsx)("div", {
                        className: M.buttons,
                        children: !b && x,
                    }),
                ],
            }),
            b
                ? (0, r.jsxs)(f.ubH, {
                      theme: d,
                      className: M.empty,
                      children: [
                          (0, r.jsx)(f.oxh, {
                              darkSrc: n(458601),
                              lightSrc: n(673557),
                              width: 272,
                              height: 212,
                          }),
                          (0, r.jsx)(f.OZU, {
                              note: G.intl.string(G.t.ZhoSBI),
                              noteClassName: M.emptyText,
                              children: G.intl.string(G.t.I6P1p7),
                          }),
                          x,
                      ],
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(f.izJ, { className: M.divider }),
                          (0, r.jsx)(f.Heading, {
                              className: M.tableTitle,
                              variant: "heading-md/bold",
                              color: "text-strong",
                              children: (0, r.jsx)(z, {
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
                                          (0, r.jsx)(W, { children: G.intl.string(G.t.sMOuuS) }),
                                          (0, r.jsx)(W, { children: G.intl.string(G.t.lLFvlT) }),
                                          (0, r.jsx)(W, { children: G.intl.string(G.t["85qMS/"]) }),
                                      ],
                                  }),
                                  l.map((e) =>
                                      (0, r.jsx)(
                                          q,
                                          {
                                              sound: e,
                                              isPlaying: !1,
                                              guild: t,
                                              onPlaySound: h,
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
        { soundId: d, name: g, user: p, userId: h, emojiId: j, emojiName: C } = t,
        { analyticsLocations: y } = (0, x.ZP)(),
        N = (0, c.e7)([_.default], () => (null != p ? p : _.default.getUser(h)), [h, p]),
        { canManageGuildExpression: S } = (0, v.XJ)(o),
        T = i.useMemo(() => S(t), [t, S]),
        w = null != j || null != C,
        [Z, D] = i.useState(!1),
        A = (0, E.z)(t, o.id);
    async function L() {
        if (!Z) {
            D(!0);
            try {
                await (0, O.AA)(o.id, d);
            } catch (e) {
                D(!1);
            }
        }
    }
    i.useEffect(() => {
        null == N && e();
        async function e() {
            await (0, m.PR)(h);
        }
    }, [N, h]);
    let k = i.useCallback(() => {
            null != N &&
                (0, I.openUserProfileModal)({
                    userId: N.id,
                    guildId: o.id,
                    sourceAnalyticsLocations: y,
                });
        }, [N, o.id, y]),
        F = R.ZP.useUserTag(N);
    return (0, r.jsxs)("div", {
        className: a()(M.row, { [M.active]: l }),
        children: [
            w
                ? (0, r.jsx)(b.Z, {
                      emojiId: j,
                      emojiName: C,
                      className: M.emoji,
                  })
                : (0, r.jsx)(f.XBm, {
                      size: "md",
                      color: "currentColor",
                      className: M.emoji,
                  }),
            (0, r.jsx)(f.P3F, {
                onClick: () => {
                    Z || s(t);
                },
                onContextMenu: A,
                className: M.soundName,
                children: (0, r.jsxs)(f.Text, {
                    variant: "text-sm/normal",
                    className: M.soundName,
                    children: [
                        g,
                        " ",
                        (0, r.jsx)(f.gj8, {
                            size: "md",
                            color: "currentColor",
                            className: M.soundPreviewIcon,
                        }),
                    ],
                }),
            }),
            null != N &&
                (0, r.jsxs)(f.P3F, {
                    className: M.uploader,
                    onClick: k,
                    children: [
                        (0, r.jsx)(f.qEK, {
                            "aria-label": F,
                            size: f.EFr.SIZE_24,
                            className: M.uploaderAvatar,
                            src: (0, P.ov)(N, !1, 24),
                        }),
                        (0, r.jsx)(f.Text, {
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
                          (0, r.jsx)(f.P3F, {
                              className: M.soundUpdate,
                              onClick: function (e) {
                                  e.stopPropagation(),
                                      (0, f.ZDy)(async () => {
                                          let { default: e } = await Promise.all([n.e("56035"), n.e("48899")]).then(
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
                              children: (0, r.jsx)(f.vdY, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: M.soundEditIcon,
                              }),
                          }),
                          (0, r.jsx)(f.P3F, {
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
                              children: (0, r.jsx)(f.Dio, {
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
