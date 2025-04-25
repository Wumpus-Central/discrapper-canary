n.d(t, { Z: () => A });
var r = n(200651),
    i = n(192379),
    l = n(873546),
    o = n(442837),
    a = n(481060),
    s = n(194359),
    c = n(100527),
    u = n(686546),
    d = n(276506),
    p = n(333984),
    h = n(486622),
    f = n(488634),
    m = n(86203),
    g = n(6025),
    b = n(621853),
    _ = n(892001),
    y = n(433355),
    x = n(699516),
    C = n(594174),
    v = n(768581),
    j = n(525541),
    O = n(981631),
    E = n(377668),
    I = n(228168),
    P = n(388032),
    S = n(882875);
let Z = (e) => {
        let { userId: t, channelId: n } = e,
            l = (0, o.e7)([b.Z], () => b.Z.getMutualGuilds(t), [t]),
            s = i.useMemo(
                () =>
                    null != l
                        ? l
                              .slice(0, 3)
                              .map((e, t) => {
                                  let { guild: n } = e,
                                      i =
                                          null != n
                                              ? v.ZP.getGuildIconURL({
                                                    id: n.id,
                                                    icon: n.icon,
                                                    size: 24
                                                })
                                              : null;
                                  if (null == i) return null;
                                  let o = t === (l.length > 3 ? 3 : l.length) - 1,
                                      a = (0, r.jsx)(
                                          'img',
                                          {
                                              src: i,
                                              alt: '',
                                              className: S.avatar
                                          },
                                          t
                                      );
                                  return o
                                      ? a
                                      : (0, r.jsx)(
                                            u.ZP,
                                            {
                                                className: S.avatarMask,
                                                mask: u.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                                width: 24,
                                                height: 24,
                                                children: a
                                            },
                                            t
                                        );
                              })
                              .filter((e) => null != e)
                        : [],
                [l]
            );
        return null == l || 0 === l.length
            ? (0, r.jsx)(a.Text, {
                  color: 'header-secondary',
                  variant: 'text-sm/normal',
                  children: P.intl.string(P.t.zjVh8v)
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)('div', {
                          className: S.avatarContainer,
                          children: s
                      }),
                      (0, r.jsx)(a.P3F, {
                          onClick: () => {
                              (0, _.openUserProfileModal)({
                                  userId: t,
                                  channelId: n,
                                  section: I.oh.MUTUAL_GUILDS,
                                  sourceAnalyticsLocations: [c.Z.DM_CHANNEL]
                              });
                          },
                          children: (0, r.jsx)(a.Text, {
                              className: S.mutualGuilds,
                              variant: 'text-sm/normal',
                              children: P.intl.format(P.t.eE3oen, { count: l.length })
                          })
                      })
                  ]
              });
    },
    N = (e) => {
        var t;
        let { relationshipType: n, userId: i, showingBanner: l } = e,
            o = null == (t = C.default.getUser(i)) ? void 0 : t.bot,
            c = () => {
                s.Z.addRelationship({
                    userId: i,
                    context: { location: O.ZY5.DM_CHANNEL }
                });
            },
            u = (0, r.jsx)(a.zxk, {
                className: S.action,
                size: a.zxk.Sizes.TINY,
                color: a.zxk.Colors.PRIMARY,
                onClick: () => {
                    s.Z.blockUser(i, { location: O.ZY5.DM_CHANNEL });
                },
                children: P.intl.string(P.t.l4EmaW)
            }),
            p = (0, d.n)({ userId: i });
        switch (n) {
            case O.OGo.NONE:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        !o &&
                            !l &&
                            (0, r.jsx)(a.zxk, {
                                className: S.action,
                                size: a.zxk.Sizes.TINY,
                                onClick: c,
                                children: p
                            }),
                        u
                    ]
                });
            case O.OGo.FRIEND:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(a.zxk, {
                            className: S.action,
                            size: a.zxk.Sizes.TINY,
                            onClick: () => {
                                s.Z.removeFriend(i, { location: O.ZY5.DM_CHANNEL });
                            },
                            color: a.zxk.Colors.PRIMARY,
                            children: P.intl.string(P.t.cvSt1N)
                        }),
                        u
                    ]
                });
            case O.OGo.BLOCKED:
                return (0, r.jsx)(a.zxk, {
                    className: S.action,
                    size: a.zxk.Sizes.TINY,
                    onClick: () => {
                        s.Z.unblockUser(i, { location: O.ZY5.DM_CHANNEL });
                    },
                    color: a.zxk.Colors.PRIMARY,
                    children: P.intl.string(P.t.XyHpKC)
                });
            case O.OGo.PENDING_INCOMING:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(a.Text, {
                            className: S.action,
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            children: P.intl.string(P.t.c2v5nJ)
                        }),
                        (0, r.jsx)(a.zxk, {
                            className: S.action,
                            size: a.zxk.Sizes.TINY,
                            onClick: c,
                            children: P.intl.string(P.t['+WbSn5'])
                        }),
                        (0, r.jsx)(a.zxk, {
                            className: S.action,
                            size: a.zxk.Sizes.TINY,
                            color: a.zxk.Colors.PRIMARY,
                            onClick: () => {
                                s.Z.cancelFriendRequest(i, { location: O.ZY5.DM_CHANNEL });
                            },
                            children: P.intl.string(P.t.rQSndn)
                        }),
                        u
                    ]
                });
            case O.OGo.PENDING_OUTGOING:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(a.zxk, {
                            className: S.action,
                            size: a.zxk.Sizes.TINY,
                            disabled: !0,
                            children: P.intl.string(P.t.xMH6vL)
                        }),
                        u
                    ]
                });
            default:
                return null;
        }
    },
    T = (e) => {
        let { channelId: t, otherUserId: n } = e,
            l = i.useCallback(() => {
                (0, a.showToast)((0, a.createToast)(P.intl.string(P.t.a2j0ho), a.ToastType.FAILURE));
            }, []),
            o = i.useCallback(() => {
                g.Z.closeChannelSidebar(y.uZ);
            }, []),
            s = i.useCallback(() => {
                g.Z.closeChannelSidebar(y.uZ);
            }, []),
            {
                acceptMessageRequest: c,
                rejectMessageRequest: u,
                isAcceptLoading: d,
                isRejectLoading: p,
                isOptimisticAccepted: f,
                isOptimisticRejected: m
            } = (0, h.m)({
                user: C.default.getUser(n),
                onError: l,
                onAcceptSuccess: s,
                onRejectSuccess: o
            }),
            b = d || p || f || m;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.zxk, {
                    className: S.action,
                    size: a.zxk.Sizes.TINY,
                    onClick: () => c(t),
                    disabled: b,
                    submitting: d,
                    children: P.intl.string(P.t.Kz8Pws)
                }),
                (0, r.jsx)(a.zxk, {
                    className: S.action,
                    size: a.zxk.Sizes.TINY,
                    onClick: () => u(t),
                    color: a.zxk.Colors.PRIMARY,
                    disabled: b,
                    submitting: p,
                    children: P.intl.string(P.t.B2nygY)
                })
            ]
        });
    },
    A = (e) => {
        let { userId: t, channel: n, showingBanner: i } = e,
            { channelId: a } = (0, f._)(),
            s = (0, o.e7)([p.Z], () => null != a && p.Z.isSpam(a), [a]),
            c = (0, o.e7)([x.Z], () => x.Z.getRelationshipType(t), [t]),
            u = n.id === a,
            d = !l.tq && !u,
            h = !!l.tq || u || s;
        if (t === E.fL) return null;
        let g =
            s || u
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(T, {
                              channelId: n.id,
                              otherUserId: t
                          }),
                          (0, r.jsx)(m.Z, { channel: n })
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(N, {
                              relationshipType: c,
                              userId: t,
                              showingBanner: i
                          }),
                          !i &&
                              (0, r.jsx)(j.Z, {
                                  otherUserId: t,
                                  channel: n,
                                  navigateAwayOnReportSuccess: d
                              })
                      ]
                  });
        return (0, r.jsxs)('div', {
            className: h ? S.mobileContainer : S.container,
            children: [
                (0, r.jsx)('div', {
                    className: S.inline,
                    children: (0, r.jsx)(Z, {
                        userId: t,
                        channelId: n.id
                    })
                }),
                !h && (0, r.jsx)('div', { className: S.divider }),
                (0, r.jsx)('div', {
                    className: S.inline,
                    children: g
                })
            ]
        });
    };
