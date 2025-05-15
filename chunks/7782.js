n.d(t, { Z: () => A });
var r = n(255367),
    i = n(73800),
    l = n(873546),
    a = n(442837),
    o = n(481060),
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
    C = n(433355),
    x = n(699516),
    y = n(594174),
    v = n(768581),
    j = n(525541),
    O = n(981631),
    E = n(377668),
    I = n(228168),
    S = n(388032),
    P = n(882875);
let Z = (e) => {
        let { userId: t, channelId: n } = e,
            l = (0, a.e7)([b.Z], () => b.Z.getMutualGuilds(t), [t]),
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
                                  let a = t === (l.length > 3 ? 3 : l.length) - 1,
                                      o = (0, r.jsx)(
                                          'img',
                                          {
                                              src: i,
                                              alt: '',
                                              className: P.avatar
                                          },
                                          t
                                      );
                                  return a
                                      ? o
                                      : (0, r.jsx)(
                                            u.ZP,
                                            {
                                                className: P.avatarMask,
                                                mask: u.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                                width: 24,
                                                height: 24,
                                                children: o
                                            },
                                            t
                                        );
                              })
                              .filter((e) => null != e)
                        : [],
                [l]
            );
        return null == l || 0 === l.length
            ? (0, r.jsx)(o.Text, {
                  color: 'header-secondary',
                  variant: 'text-sm/normal',
                  children: S.intl.string(S.t.zjVh8v)
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)('div', {
                          className: P.avatarContainer,
                          children: s
                      }),
                      (0, r.jsx)(o.P3F, {
                          onClick: () => {
                              (0, _.openUserProfileModal)({
                                  userId: t,
                                  channelId: n,
                                  section: I.oh.MUTUAL_GUILDS,
                                  sourceAnalyticsLocations: [c.Z.DM_CHANNEL]
                              });
                          },
                          children: (0, r.jsx)(o.Text, {
                              className: P.mutualGuilds,
                              variant: 'text-sm/normal',
                              children: S.intl.format(S.t.eE3oen, { count: l.length })
                          })
                      })
                  ]
              });
    },
    N = (e) => {
        var t;
        let { relationshipType: n, userId: i, showingBanner: l } = e,
            a = null == (t = y.default.getUser(i)) ? void 0 : t.bot,
            c = () => {
                s.Z.addRelationship({
                    userId: i,
                    context: { location: O.ZY5.DM_CHANNEL }
                });
            },
            u = (0, r.jsx)(o.zxk, {
                className: P.action,
                size: o.zxk.Sizes.TINY,
                color: o.zxk.Colors.PRIMARY,
                onClick: () => {
                    s.Z.blockUser(i, { location: O.ZY5.DM_CHANNEL });
                },
                children: S.intl.string(S.t.l4EmaW)
            }),
            p = (0, d.n)({ userId: i });
        switch (n) {
            case O.OGo.NONE:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        !a &&
                            !l &&
                            (0, r.jsx)(o.zxk, {
                                className: P.action,
                                size: o.zxk.Sizes.TINY,
                                onClick: c,
                                children: p
                            }),
                        u
                    ]
                });
            case O.OGo.FRIEND:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(o.zxk, {
                            className: P.action,
                            size: o.zxk.Sizes.TINY,
                            onClick: () => {
                                s.Z.removeFriend(i, { location: O.ZY5.DM_CHANNEL });
                            },
                            color: o.zxk.Colors.PRIMARY,
                            children: S.intl.string(S.t.cvSt1N)
                        }),
                        u
                    ]
                });
            case O.OGo.BLOCKED:
                return (0, r.jsx)(o.zxk, {
                    className: P.action,
                    size: o.zxk.Sizes.TINY,
                    onClick: () => {
                        s.Z.unblockUser(i, { location: O.ZY5.DM_CHANNEL });
                    },
                    color: o.zxk.Colors.PRIMARY,
                    children: S.intl.string(S.t.XyHpKC)
                });
            case O.OGo.PENDING_INCOMING:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(o.Text, {
                            className: P.action,
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            children: S.intl.string(S.t.c2v5nJ)
                        }),
                        (0, r.jsx)(o.zxk, {
                            className: P.action,
                            size: o.zxk.Sizes.TINY,
                            onClick: c,
                            children: S.intl.string(S.t['+WbSn5'])
                        }),
                        (0, r.jsx)(o.zxk, {
                            className: P.action,
                            size: o.zxk.Sizes.TINY,
                            color: o.zxk.Colors.PRIMARY,
                            onClick: () => {
                                s.Z.cancelFriendRequest(i, { location: O.ZY5.DM_CHANNEL });
                            },
                            children: S.intl.string(S.t.rQSndn)
                        }),
                        u
                    ]
                });
            case O.OGo.PENDING_OUTGOING:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(o.zxk, {
                            className: P.action,
                            size: o.zxk.Sizes.TINY,
                            disabled: !0,
                            children: S.intl.string(S.t.xMH6vL)
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
                (0, o.showToast)((0, o.createToast)(S.intl.string(S.t.a2j0ho), o.ToastType.FAILURE));
            }, []),
            a = i.useCallback(() => {
                g.Z.closeChannelSidebar(C.uZ);
            }, []),
            s = i.useCallback(() => {
                g.Z.closeChannelSidebar(C.uZ);
            }, []),
            {
                acceptMessageRequest: c,
                rejectMessageRequest: u,
                isAcceptLoading: d,
                isRejectLoading: p,
                isOptimisticAccepted: f,
                isOptimisticRejected: m
            } = (0, h.m)({
                user: y.default.getUser(n),
                onError: l,
                onAcceptSuccess: s,
                onRejectSuccess: a
            }),
            b = d || p || f || m;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.zxk, {
                    className: P.action,
                    size: o.zxk.Sizes.TINY,
                    onClick: () => c(t),
                    disabled: b,
                    submitting: d,
                    children: S.intl.string(S.t.Kz8Pws)
                }),
                (0, r.jsx)(o.zxk, {
                    className: P.action,
                    size: o.zxk.Sizes.TINY,
                    onClick: () => u(t),
                    color: o.zxk.Colors.PRIMARY,
                    disabled: b,
                    submitting: p,
                    children: S.intl.string(S.t.B2nygY)
                })
            ]
        });
    },
    A = (e) => {
        let { userId: t, channel: n, showingBanner: i } = e,
            { channelId: o } = (0, f._)(),
            s = (0, a.e7)([p.Z], () => null != o && p.Z.isSpam(o), [o]),
            c = (0, a.e7)([x.Z], () => x.Z.getRelationshipType(t), [t]),
            u = n.id === o,
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
            className: h ? P.mobileContainer : P.container,
            children: [
                (0, r.jsx)('div', {
                    className: P.inline,
                    children: (0, r.jsx)(Z, {
                        userId: t,
                        channelId: n.id
                    })
                }),
                !h && (0, r.jsx)('div', { className: P.divider }),
                (0, r.jsx)('div', {
                    className: P.inline,
                    children: g
                })
            ]
        });
    };
