n.d(t, { Z: () => w });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(873546),
    s = n(442837),
    c = n(481060),
    u = n(194359),
    d = n(100527),
    p = n(686546),
    h = n(276506),
    f = n(333984),
    m = n(486622),
    g = n(488634),
    b = n(86203),
    y = n(6025),
    C = n(621853),
    _ = n(892001),
    v = n(433355),
    x = n(699516),
    O = n(594174),
    j = n(768581),
    E = n(525541),
    S = n(981631),
    P = n(228168),
    I = n(388032),
    Z = n(291738);
let T = (e) => {
        let { userId: t, channelId: n } = e,
            l = (0, s.e7)([C.Z], () => C.Z.getMutualGuilds(t), [t]),
            a = i.useMemo(
                () =>
                    null != l
                        ? l
                              .slice(0, 3)
                              .map((e, t) => {
                                  let { guild: n } = e,
                                      i =
                                          null != n
                                              ? j.ZP.getGuildIconURL({
                                                    id: n.id,
                                                    icon: n.icon,
                                                    size: 24,
                                                })
                                              : null;
                                  if (null == i) return null;
                                  let a = t === (l.length > 3 ? 3 : l.length) - 1,
                                      o = (0, r.jsx)(
                                          "img",
                                          {
                                              src: i,
                                              alt: "",
                                              className: Z.avatar,
                                          },
                                          t,
                                      );
                                  return a
                                      ? o
                                      : (0, r.jsx)(
                                            p.ZP,
                                            {
                                                className: Z.avatarMask,
                                                mask: p.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                                width: 24,
                                                height: 24,
                                                children: o,
                                            },
                                            t,
                                        );
                              })
                              .filter((e) => null != e)
                        : [],
                [l],
            );
        return null == l || 0 === l.length
            ? (0, r.jsx)(c.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children: I.intl.string(I.t.zjVh8v),
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("div", {
                          className: Z.avatarContainer,
                          children: a,
                      }),
                      (0, r.jsx)(c.P3F, {
                          onClick: () => {
                              (0, _.openUserProfileModal)({
                                  userId: t,
                                  channelId: n,
                                  section: P.oh.MUTUAL_GUILDS,
                                  sourceAnalyticsLocations: [d.Z.DM_CHANNEL],
                              });
                          },
                          children: (0, r.jsx)(c.Text, {
                              className: Z.mutualGuilds,
                              variant: "text-sm/normal",
                              children: I.intl.format(I.t.eE3oen, { count: l.length }),
                          }),
                      }),
                  ],
              });
    },
    N = (e) => {
        var t;
        let { relationshipType: n, userId: i, showingBanner: l } = e,
            a = null == (t = O.default.getUser(i)) ? void 0 : t.bot,
            o = () => {
                u.Z.addRelationship({
                    userId: i,
                    context: { location: S.ZY5.DM_CHANNEL },
                });
            },
            s = (0, r.jsx)(c.zxk, {
                size: "sm",
                variant: "secondary",
                onClick: () => {
                    u.Z.blockUser(i, { location: S.ZY5.DM_CHANNEL });
                },
                text: I.intl.string(I.t.l4EmaW),
            }),
            d = (0, h.n)({ userId: i });
        switch (n) {
            case S.OGo.NONE:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        !a &&
                            !l &&
                            (0, r.jsx)(c.zxk, {
                                size: "sm",
                                variant: "primary",
                                onClick: o,
                                text: d,
                            }),
                        s,
                    ],
                });
            case S.OGo.FRIEND:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(c.zxk, {
                            size: "sm",
                            variant: "secondary",
                            onClick: () => {
                                u.Z.removeFriend(i, { location: S.ZY5.DM_CHANNEL });
                            },
                            text: I.intl.string(I.t.cvSt1N),
                        }),
                        s,
                    ],
                });
            case S.OGo.BLOCKED:
                return (0, r.jsx)(c.zxk, {
                    size: "sm",
                    variant: "secondary",
                    onClick: () => {
                        u.Z.unblockUser(i, { location: S.ZY5.DM_CHANNEL });
                    },
                    text: I.intl.string(I.t.XyHpKC),
                });
            case S.OGo.PENDING_INCOMING:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(c.zxk, {
                            size: "sm",
                            variant: "primary",
                            onClick: o,
                            text: I.intl.string(I.t["+WbSn5"]),
                        }),
                        (0, r.jsx)(c.zxk, {
                            size: "sm",
                            variant: "secondary",
                            onClick: () => {
                                u.Z.cancelFriendRequest(i, { location: S.ZY5.DM_CHANNEL });
                            },
                            text: I.intl.string(I.t.rQSndn),
                        }),
                        s,
                    ],
                });
            case S.OGo.PENDING_OUTGOING:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(c.zxk, {
                            size: "sm",
                            variant: "primary",
                            disabled: !0,
                            text: I.intl.string(I.t.xMH6vL),
                        }),
                        s,
                    ],
                });
            default:
                return null;
        }
    },
    A = (e) => {
        let { channelId: t, otherUserId: n } = e,
            l = i.useCallback(() => {
                (0, c.showToast)((0, c.createToast)(I.intl.string(I.t.a2j0ho), c.ToastType.FAILURE));
            }, []),
            a = i.useCallback(() => {
                y.Z.closeChannelSidebar(v.uZ);
            }, []),
            o = i.useCallback(() => {
                y.Z.closeChannelSidebar(v.uZ);
            }, []),
            {
                acceptMessageRequest: s,
                rejectMessageRequest: u,
                isAcceptLoading: d,
                isRejectLoading: p,
                isOptimisticAccepted: h,
                isOptimisticRejected: f,
            } = (0, m.m)({
                user: O.default.getUser(n),
                onError: l,
                onAcceptSuccess: o,
                onRejectSuccess: a,
            }),
            g = d || p || h || f;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.zxk, {
                    variant: "primary",
                    size: "sm",
                    disabled: g,
                    onClick: () => s(t),
                    loading: d,
                    text: I.intl.string(I.t.Kz8Pws),
                }),
                (0, r.jsx)(c.zxk, {
                    variant: "secondary",
                    size: "sm",
                    disabled: g,
                    onClick: () => u(t),
                    loading: p,
                    text: I.intl.string(I.t.B2nygY),
                }),
            ],
        });
    },
    w = (e) => {
        let { userId: t, channel: n, showingBanner: i } = e,
            { channelId: l } = (0, g._)(),
            u = (0, s.e7)([f.Z], () => null != l && f.Z.isSpam(l), [l]),
            d = (0, s.e7)([x.Z], () => x.Z.getRelationshipType(t), [t]),
            p = n.id === l,
            h = !o.tq && !p,
            m = !!o.tq || p || u,
            y =
                u || p
                    ? (0, r.jsxs)("div", {
                          className: Z.inline,
                          children: [
                              (0, r.jsx)(A, {
                                  channelId: n.id,
                                  otherUserId: t,
                              }),
                              (0, r.jsx)(b.Z, { channel: n }),
                          ],
                      })
                    : (0, r.jsxs)("div", {
                          className: Z.inline,
                          children: [
                              (0, r.jsx)(N, {
                                  relationshipType: d,
                                  userId: t,
                                  showingBanner: i,
                              }),
                              !i &&
                                  (0, r.jsx)(E.Z, {
                                      otherUserId: t,
                                      channel: n,
                                      navigateAwayOnReportSuccess: h,
                                  }),
                          ],
                      }),
            C =
                d !== S.OGo.PENDING_INCOMING || u || p
                    ? null
                    : (0, r.jsx)(c.Text, {
                          color: "header-secondary",
                          variant: "text-sm/normal",
                          children: I.intl.string(I.t.c2v5nJ),
                      });
        return (0, r.jsxs)("div", {
            className: m ? Z.mobileContainer : Z.container,
            children: [
                (0, r.jsx)("div", {
                    className: Z.inline,
                    children: (0, r.jsx)(T, {
                        userId: t,
                        channelId: n.id,
                    }),
                }),
                !m && (0, r.jsx)("div", { className: Z.divider }),
                (0, r.jsxs)("div", {
                    className: a()(Z.inline, Z.wrap),
                    children: [C, y],
                }),
            ],
        });
    };
