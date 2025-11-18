n.d(t, { Z: () => w });
var i = n(54381),
    r = n(473749),
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
    v = n(892001),
    _ = n(433355),
    x = n(699516),
    j = n(594174),
    O = n(768581),
    E = n(525541),
    S = n(981631),
    P = n(228168),
    I = n(388032),
    Z = n(90985);
let T = (e) => {
        let { userId: t, channelId: n } = e,
            l = (0, s.e7)([C.Z], () => C.Z.getMutualGuilds(t), [t]),
            a = r.useMemo(
                () =>
                    null != l
                        ? l
                              .slice(0, 3)
                              .map((e, t) => {
                                  let { guild: n } = e,
                                      r =
                                          null != n
                                              ? O.ZP.getGuildIconURL({
                                                    id: n.id,
                                                    icon: n.icon,
                                                    size: 24,
                                                })
                                              : null;
                                  if (null == r) return null;
                                  let a = t === (l.length > 3 ? 3 : l.length) - 1,
                                      o = (0, i.jsx)(
                                          "img",
                                          {
                                              src: r,
                                              alt: "",
                                              className: Z.avatar,
                                          },
                                          t,
                                      );
                                  return a
                                      ? o
                                      : (0, i.jsx)(
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
            ? (0, i.jsx)(c.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children: I.intl.string(I.t.zjVh8h),
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", {
                          className: Z.avatarContainer,
                          children: a,
                      }),
                      (0, i.jsx)(c.P3F, {
                          onClick: () => {
                              (0, v.openUserProfileModal)({
                                  userId: t,
                                  channelId: n,
                                  section: P.oh.MUTUAL_GUILDS,
                                  sourceAnalyticsLocations: [d.Z.DM_CHANNEL],
                              });
                          },
                          children: (0, i.jsx)(c.Text, {
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
        let { relationshipType: n, userId: r, showingBanner: l } = e,
            a = null == (t = j.default.getUser(r)) ? void 0 : t.bot,
            o = () => {
                u.Z.addRelationship({
                    userId: r,
                    context: { location: S.ZY5.DM_CHANNEL },
                });
            },
            s = (0, i.jsx)(c.Button, {
                size: "sm",
                variant: "secondary",
                onClick: () => {
                    u.Z.blockUser(r, { location: S.ZY5.DM_CHANNEL });
                },
                text: I.intl.string(I.t.l4Emac),
            }),
            d = (0, h.n)({ userId: r });
        switch (n) {
            case S.OGo.NONE:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        !a &&
                            !l &&
                            (0, i.jsx)(c.Button, {
                                size: "sm",
                                variant: "primary",
                                onClick: o,
                                text: d,
                            }),
                        s,
                    ],
                });
            case S.OGo.FRIEND:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(c.Button, {
                            size: "sm",
                            variant: "secondary",
                            onClick: () => {
                                u.Z.removeFriend(r, { location: S.ZY5.DM_CHANNEL });
                            },
                            text: I.intl.string(I.t.cvSt1J),
                        }),
                        s,
                    ],
                });
            case S.OGo.BLOCKED:
                return (0, i.jsx)(c.Button, {
                    size: "sm",
                    variant: "secondary",
                    onClick: () => {
                        u.Z.unblockUser(r, { location: S.ZY5.DM_CHANNEL });
                    },
                    text: I.intl.string(I.t.XyHpKH),
                });
            case S.OGo.PENDING_INCOMING:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(c.Button, {
                            size: "sm",
                            variant: "primary",
                            onClick: o,
                            text: I.intl.string(I.t["+WbSn5"]),
                        }),
                        (0, i.jsx)(c.Button, {
                            size: "sm",
                            variant: "secondary",
                            onClick: () => {
                                u.Z.cancelFriendRequest(r, { location: S.ZY5.DM_CHANNEL });
                            },
                            text: I.intl.string(I.t.rQSndv),
                        }),
                        s,
                    ],
                });
            case S.OGo.PENDING_OUTGOING:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(c.Button, {
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
            l = r.useCallback(() => {
                (0, c.showToast)((0, c.createToast)(I.intl.string(I.t.a2j0hv), c.ToastType.FAILURE));
            }, []),
            a = r.useCallback(() => {
                y.Z.closeChannelSidebar(_.uZ);
            }, []),
            o = r.useCallback(() => {
                y.Z.closeChannelSidebar(_.uZ);
            }, []),
            {
                acceptMessageRequest: s,
                rejectMessageRequest: u,
                isAcceptLoading: d,
                isRejectLoading: p,
                isOptimisticAccepted: h,
                isOptimisticRejected: f,
            } = (0, m.m)({
                user: j.default.getUser(n),
                onError: l,
                onAcceptSuccess: o,
                onRejectSuccess: a,
            }),
            g = d || p || h || f;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.Button, {
                    variant: "primary",
                    size: "sm",
                    disabled: g,
                    onClick: () => s(t),
                    loading: d,
                    text: I.intl.string(I.t.Kz8Pwr),
                }),
                (0, i.jsx)(c.Button, {
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
        let { userId: t, channel: n, showingBanner: r } = e,
            { channelId: l } = (0, g._)(),
            u = (0, s.e7)([f.Z], () => null != l && f.Z.isSpam(l), [l]),
            d = (0, s.e7)([x.Z], () => x.Z.getRelationshipType(t), [t]),
            p = n.id === l,
            h = !o.tq && !p,
            m = !!o.tq || p || u,
            y =
                u || p
                    ? (0, i.jsxs)("div", {
                          className: Z.inline,
                          children: [
                              (0, i.jsx)(A, {
                                  channelId: n.id,
                                  otherUserId: t,
                              }),
                              (0, i.jsx)(b.Z, { channel: n }),
                          ],
                      })
                    : (0, i.jsxs)("div", {
                          className: Z.inline,
                          children: [
                              (0, i.jsx)(N, {
                                  relationshipType: d,
                                  userId: t,
                                  showingBanner: r,
                              }),
                              !r &&
                                  (0, i.jsx)(E.Z, {
                                      otherUserId: t,
                                      channel: n,
                                      navigateAwayOnReportSuccess: h,
                                  }),
                          ],
                      }),
            C =
                d !== S.OGo.PENDING_INCOMING || u || p
                    ? null
                    : (0, i.jsx)(c.Text, {
                          color: "header-secondary",
                          variant: "text-sm/normal",
                          children: I.intl.string(I.t.c2v5nO),
                      });
        return (0, i.jsxs)("div", {
            className: m ? Z.mobileContainer : Z.container,
            children: [
                (0, i.jsx)("div", {
                    className: Z.inline,
                    children: (0, i.jsx)(T, {
                        userId: t,
                        channelId: n.id,
                    }),
                }),
                !m && (0, i.jsx)("div", { className: Z.divider }),
                (0, i.jsxs)("div", {
                    className: a()(Z.inline, Z.wrap),
                    children: [C, y],
                }),
            ],
        });
    };
