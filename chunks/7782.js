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
    f = n(276506),
    h = n(333984),
    m = n(486622),
    g = n(488634),
    b = n(86203),
    _ = n(6025),
    y = n(621853),
    C = n(892001),
    v = n(433355),
    O = n(699516),
    x = n(594174),
    E = n(768581),
    j = n(525541),
    S = n(981631),
    P = n(228168),
    I = n(388032),
    Z = n(291738);
let T = (e) => {
        let { userId: t, channelId: n } = e,
            l = (0, s.e7)([y.Z], () => y.Z.getMutualGuilds(t), [t]),
            a = i.useMemo(
                () =>
                    null != l
                        ? l
                              .slice(0, 3)
                              .map((e, t) => {
                                  let { guild: n } = e,
                                      i =
                                          null != n
                                              ? E.ZP.getGuildIconURL({
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
                  children: I.intl.string(I.t.zjVh8h),
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("div", {
                          className: Z.avatarContainer,
                          children: a,
                      }),
                      (0, r.jsx)(c.P3F, {
                          onClick: () => {
                              (0, C.openUserProfileModal)({
                                  userId: t,
                                  channelId: n,
                                  section: P.oh.MUTUAL_GUILDS,
                                  sourceAnalyticsLocations: [d.Z.DM_CHANNEL],
                              });
                          },
                          children: (0, r.jsx)(c.Text, {
                              className: Z.mutualGuilds,
                              variant: "text-sm/normal",
                              children: I.intl.format(I.t.eE3oep, { count: l.length }),
                          }),
                      }),
                  ],
              });
    },
    N = (e) => {
        var t;
        let { relationshipType: n, userId: i, showingBanner: l } = e,
            a = null == (t = x.default.getUser(i)) ? void 0 : t.bot,
            o = () => {
                u.Z.addRelationship({
                    userId: i,
                    context: { location: S.ZY5.DM_CHANNEL },
                });
            },
            s = (0, r.jsx)(c.Button, {
                size: "sm",
                variant: "secondary",
                onClick: () => {
                    u.Z.blockUser(i, { location: S.ZY5.DM_CHANNEL });
                },
                text: I.intl.string(I.t.l4Emac),
            }),
            d = (0, f.n)({ userId: i });
        switch (n) {
            case S.OGo.NONE:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        !a &&
                            !l &&
                            (0, r.jsx)(c.Button, {
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
                        (0, r.jsx)(c.Button, {
                            size: "sm",
                            variant: "secondary",
                            onClick: () => {
                                u.Z.removeFriend(i, { location: S.ZY5.DM_CHANNEL });
                            },
                            text: I.intl.string(I.t.cvSt1J),
                        }),
                        s,
                    ],
                });
            case S.OGo.BLOCKED:
                return (0, r.jsx)(c.Button, {
                    size: "sm",
                    variant: "secondary",
                    onClick: () => {
                        u.Z.unblockUser(i, { location: S.ZY5.DM_CHANNEL });
                    },
                    text: I.intl.string(I.t.XyHpKH),
                });
            case S.OGo.PENDING_INCOMING:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(c.Button, {
                            size: "sm",
                            variant: "primary",
                            onClick: o,
                            text: I.intl.string(I.t["+WbSn5"]),
                        }),
                        (0, r.jsx)(c.Button, {
                            size: "sm",
                            variant: "secondary",
                            onClick: () => {
                                u.Z.cancelFriendRequest(i, { location: S.ZY5.DM_CHANNEL });
                            },
                            text: I.intl.string(I.t.rQSndv),
                        }),
                        s,
                    ],
                });
            case S.OGo.PENDING_OUTGOING:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(c.Button, {
                            size: "sm",
                            variant: "primary",
                            disabled: !0,
                            text: I.intl.string(I.t.xMH6vD),
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
                (0, c.showToast)((0, c.createToast)(I.intl.string(I.t.a2j0hv), c.ToastType.FAILURE));
            }, []),
            a = i.useCallback(() => {
                _.Z.closeChannelSidebar(v.uZ);
            }, []),
            o = i.useCallback(() => {
                _.Z.closeChannelSidebar(v.uZ);
            }, []),
            {
                acceptMessageRequest: s,
                rejectMessageRequest: u,
                isAcceptLoading: d,
                isRejectLoading: p,
                isOptimisticAccepted: f,
                isOptimisticRejected: h,
            } = (0, m.m)({
                user: x.default.getUser(n),
                onError: l,
                onAcceptSuccess: o,
                onRejectSuccess: a,
            }),
            g = d || p || f || h;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.Button, {
                    variant: "primary",
                    size: "sm",
                    disabled: g,
                    onClick: () => s(t),
                    loading: d,
                    text: I.intl.string(I.t.Kz8Pwr),
                }),
                (0, r.jsx)(c.Button, {
                    variant: "secondary",
                    size: "sm",
                    disabled: g,
                    onClick: () => u(t),
                    loading: p,
                    text: I.intl.string(I.t.B2nygW),
                }),
            ],
        });
    },
    w = (e) => {
        let { userId: t, channel: n, showingBanner: i } = e,
            { channelId: l } = (0, g._)(),
            u = (0, s.e7)([h.Z], () => null != l && h.Z.isSpam(l), [l]),
            d = (0, s.e7)([O.Z], () => O.Z.getRelationshipType(t), [t]),
            p = n.id === l,
            f = !o.tq && !p,
            m = !!o.tq || p || u,
            _ =
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
                                  (0, r.jsx)(j.Z, {
                                      otherUserId: t,
                                      channel: n,
                                      navigateAwayOnReportSuccess: f,
                                  }),
                          ],
                      }),
            y =
                d !== S.OGo.PENDING_INCOMING || u || p
                    ? null
                    : (0, r.jsx)(c.Text, {
                          color: "header-secondary",
                          variant: "text-sm/normal",
                          children: I.intl.string(I.t.c2v5nO),
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
                    children: [y, _],
                }),
            ],
        });
    };
