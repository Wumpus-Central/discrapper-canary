n.d(t, { Z: () => x });
var r = n(255367),
    i = n(73800),
    o = n(873546),
    a = n(442837),
    s = n(755721),
    l = n(481060),
    c = n(194359),
    u = n(100527),
    d = n(686546),
    f = n(276506),
    _ = n(333984),
    p = n(486622),
    h = n(488634),
    m = n(86203),
    g = n(6025),
    E = n(621853),
    b = n(892001),
    y = n(433355),
    O = n(699516),
    v = n(594174),
    I = n(768581),
    T = n(525541),
    S = n(981631),
    A = n(228168),
    N = n(388032),
    C = n(291738);
let R = 24,
    P = 3,
    w = (e) => {
        let { userId: t, channelId: n } = e,
            o = (0, a.e7)([E.Z], () => E.Z.getMutualGuilds(t), [t]),
            s = i.useMemo(
                () =>
                    null != o
                        ? o
                              .slice(0, P)
                              .map((e, t) => {
                                  let { guild: n } = e,
                                      i =
                                          null != n
                                              ? I.ZP.getGuildIconURL({
                                                    id: n.id,
                                                    icon: n.icon,
                                                    size: R,
                                                })
                                              : null;
                                  if (null == i) return null;
                                  let a = t === (o.length > P ? P : o.length) - 1,
                                      s = (0, r.jsx)(
                                          "img",
                                          {
                                              src: i,
                                              alt: "",
                                              className: C.avatar,
                                          },
                                          t,
                                      );
                                  return a
                                      ? s
                                      : (0, r.jsx)(
                                            d.ZP,
                                            {
                                                className: C.avatarMask,
                                                mask: d.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                                width: R,
                                                height: R,
                                                children: s,
                                            },
                                            t,
                                        );
                              })
                              .filter((e) => null != e)
                        : [],
                [o],
            );
        if (null == o || 0 === o.length)
            return (0, r.jsx)(l.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                children: N.intl.string(N.t.zjVh8v),
            });
        let c = () => {
            (0, b.openUserProfileModal)({
                userId: t,
                channelId: n,
                section: A.oh.MUTUAL_GUILDS,
                sourceAnalyticsLocations: [u.Z.DM_CHANNEL],
            });
        };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", {
                    className: C.avatarContainer,
                    children: s,
                }),
                (0, r.jsx)(l.P3F, {
                    onClick: c,
                    children: (0, r.jsx)(l.Text, {
                        className: C.mutualGuilds,
                        variant: "text-sm/normal",
                        children: N.intl.format(N.t.eE3oen, { count: o.length }),
                    }),
                }),
            ],
        });
    },
    D = (e) => {
        var t;
        let { relationshipType: n, userId: i, showingBanner: o } = e,
            a = null == (t = v.default.getUser(i)) ? void 0 : t.bot,
            u = () => {
                c.Z.blockUser(i, { location: S.ZY5.DM_CHANNEL });
            },
            d = () => {
                c.Z.removeFriend(i, { location: S.ZY5.DM_CHANNEL });
            },
            _ = () => {
                c.Z.unblockUser(i, { location: S.ZY5.DM_CHANNEL });
            },
            p = () => {
                c.Z.cancelFriendRequest(i, { location: S.ZY5.DM_CHANNEL });
            },
            h = () => {
                c.Z.addRelationship({
                    userId: i,
                    context: { location: S.ZY5.DM_CHANNEL },
                });
            },
            m = (0, r.jsx)(s.zx, {
                className: C.action,
                size: s.zx.Sizes.TINY,
                color: s.zx.Colors.PRIMARY,
                onClick: u,
                children: N.intl.string(N.t.l4EmaW),
            }),
            g = (0, f.n)({ userId: i });
        switch (n) {
            case S.OGo.NONE:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        !a &&
                            !o &&
                            (0, r.jsx)(s.zx, {
                                className: C.action,
                                size: s.zx.Sizes.TINY,
                                onClick: h,
                                children: g,
                            }),
                        m,
                    ],
                });
            case S.OGo.FRIEND:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(s.zx, {
                            className: C.action,
                            size: s.zx.Sizes.TINY,
                            onClick: d,
                            color: s.zx.Colors.PRIMARY,
                            children: N.intl.string(N.t.cvSt1N),
                        }),
                        m,
                    ],
                });
            case S.OGo.BLOCKED:
                return (0, r.jsx)(s.zx, {
                    className: C.action,
                    size: s.zx.Sizes.TINY,
                    onClick: _,
                    color: s.zx.Colors.PRIMARY,
                    children: N.intl.string(N.t.XyHpKC),
                });
            case S.OGo.PENDING_INCOMING:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.Text, {
                            className: C.action,
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: N.intl.string(N.t.c2v5nJ),
                        }),
                        (0, r.jsx)(s.zx, {
                            className: C.action,
                            size: s.zx.Sizes.TINY,
                            onClick: h,
                            children: N.intl.string(N.t["+WbSn5"]),
                        }),
                        (0, r.jsx)(s.zx, {
                            className: C.action,
                            size: s.zx.Sizes.TINY,
                            color: s.zx.Colors.PRIMARY,
                            onClick: p,
                            children: N.intl.string(N.t.rQSndn),
                        }),
                        m,
                    ],
                });
            case S.OGo.PENDING_OUTGOING:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(s.zx, {
                            className: C.action,
                            size: s.zx.Sizes.TINY,
                            disabled: !0,
                            children: N.intl.string(N.t.xMH6vL),
                        }),
                        m,
                    ],
                });
            default:
                return null;
        }
    },
    L = (e) => {
        let { channelId: t, otherUserId: n } = e,
            o = i.useCallback(() => {
                (0, l.showToast)((0, l.createToast)(N.intl.string(N.t.a2j0ho), l.ToastType.FAILURE));
            }, []),
            a = i.useCallback(() => {
                g.Z.closeChannelSidebar(y.uZ);
            }, []),
            s = i.useCallback(() => {
                g.Z.closeChannelSidebar(y.uZ);
            }, []),
            {
                acceptMessageRequest: c,
                rejectMessageRequest: u,
                isAcceptLoading: d,
                isRejectLoading: f,
                isOptimisticAccepted: _,
                isOptimisticRejected: h,
            } = (0, p.m)({
                user: v.default.getUser(n),
                onError: o,
                onAcceptSuccess: s,
                onRejectSuccess: a,
            }),
            m = _ || h,
            E = d || f || m;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.zxk, {
                    variant: "primary",
                    size: "sm",
                    disabled: E,
                    onClick: () => c(t),
                    loading: d,
                    text: N.intl.string(N.t.Kz8Pws),
                }),
                (0, r.jsx)(l.zxk, {
                    variant: "secondary",
                    size: "sm",
                    disabled: E,
                    onClick: () => u(t),
                    loading: f,
                    text: N.intl.string(N.t.B2nygY),
                }),
            ],
        });
    },
    x = (e) => {
        let { userId: t, channel: n, showingBanner: i } = e,
            { channelId: s } = (0, h._)(),
            l = (0, a.e7)([_.Z], () => null != s && _.Z.isSpam(s), [s]),
            c = (0, a.e7)([O.Z], () => O.Z.getRelationshipType(t), [t]),
            u = n.id === s,
            d = !o.tq && !u,
            f = !!o.tq || u || l,
            p =
                l || u
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(L, {
                                  channelId: n.id,
                                  otherUserId: t,
                              }),
                              (0, r.jsx)(m.Z, { channel: n }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(D, {
                                  relationshipType: c,
                                  userId: t,
                                  showingBanner: i,
                              }),
                              !i &&
                                  (0, r.jsx)(T.Z, {
                                      otherUserId: t,
                                      channel: n,
                                      navigateAwayOnReportSuccess: d,
                                  }),
                          ],
                      });
        return (0, r.jsxs)("div", {
            className: f ? C.mobileContainer : C.container,
            children: [
                (0, r.jsx)("div", {
                    className: C.inline,
                    children: (0, r.jsx)(w, {
                        userId: t,
                        channelId: n.id,
                    }),
                }),
                !f && (0, r.jsx)("div", { className: C.divider }),
                (0, r.jsx)("div", {
                    className: C.inline,
                    children: p,
                }),
            ],
        });
    };
