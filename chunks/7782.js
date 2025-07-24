n.d(t, { Z: () => A });
var r = n(255367),
    i = n(73800),
    l = n(873546),
    a = n(442837),
    o = n(755721),
    s = n(481060),
    c = n(194359),
    u = n(100527),
    d = n(686546),
    p = n(276506),
    h = n(333984),
    f = n(486622),
    m = n(488634),
    g = n(86203),
    b = n(6025),
    _ = n(621853),
    y = n(892001),
    C = n(433355),
    x = n(699516),
    v = n(594174),
    j = n(768581),
    O = n(525541),
    E = n(981631),
    S = n(228168),
    P = n(388032),
    I = n(882875);
let Z = (e) => {
        let { userId: t, channelId: n } = e,
            l = (0, a.e7)([_.Z], () => _.Z.getMutualGuilds(t), [t]),
            o = i.useMemo(
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
                                              className: I.avatar
                                          },
                                          t
                                      );
                                  return a
                                      ? o
                                      : (0, r.jsx)(
                                            d.ZP,
                                            {
                                                className: I.avatarMask,
                                                mask: d.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
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
            ? (0, r.jsx)(s.Text, {
                  color: 'header-secondary',
                  variant: 'text-sm/normal',
                  children: P.intl.string(P.t.zjVh8v)
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)('div', {
                          className: I.avatarContainer,
                          children: o
                      }),
                      (0, r.jsx)(s.P3F, {
                          onClick: () => {
                              (0, y.openUserProfileModal)({
                                  userId: t,
                                  channelId: n,
                                  section: S.oh.MUTUAL_GUILDS,
                                  sourceAnalyticsLocations: [u.Z.DM_CHANNEL]
                              });
                          },
                          children: (0, r.jsx)(s.Text, {
                              className: I.mutualGuilds,
                              variant: 'text-sm/normal',
                              children: P.intl.format(P.t.eE3oen, { count: l.length })
                          })
                      })
                  ]
              });
    },
    T = (e) => {
        var t;
        let { relationshipType: n, userId: i, showingBanner: l } = e,
            a = null == (t = v.default.getUser(i)) ? void 0 : t.bot,
            u = () => {
                c.Z.addRelationship({
                    userId: i,
                    context: { location: E.ZY5.DM_CHANNEL }
                });
            },
            d = (0, r.jsx)(o.zx, {
                className: I.action,
                size: o.zx.Sizes.TINY,
                color: o.zx.Colors.PRIMARY,
                onClick: () => {
                    c.Z.blockUser(i, { location: E.ZY5.DM_CHANNEL });
                },
                children: P.intl.string(P.t.l4EmaW)
            }),
            h = (0, p.n)({ userId: i });
        switch (n) {
            case E.OGo.NONE:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        !a &&
                            !l &&
                            (0, r.jsx)(o.zx, {
                                className: I.action,
                                size: o.zx.Sizes.TINY,
                                onClick: u,
                                children: h
                            }),
                        d
                    ]
                });
            case E.OGo.FRIEND:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(o.zx, {
                            className: I.action,
                            size: o.zx.Sizes.TINY,
                            onClick: () => {
                                c.Z.removeFriend(i, { location: E.ZY5.DM_CHANNEL });
                            },
                            color: o.zx.Colors.PRIMARY,
                            children: P.intl.string(P.t.cvSt1N)
                        }),
                        d
                    ]
                });
            case E.OGo.BLOCKED:
                return (0, r.jsx)(o.zx, {
                    className: I.action,
                    size: o.zx.Sizes.TINY,
                    onClick: () => {
                        c.Z.unblockUser(i, { location: E.ZY5.DM_CHANNEL });
                    },
                    color: o.zx.Colors.PRIMARY,
                    children: P.intl.string(P.t.XyHpKC)
                });
            case E.OGo.PENDING_INCOMING:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(s.Text, {
                            className: I.action,
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            children: P.intl.string(P.t.c2v5nJ)
                        }),
                        (0, r.jsx)(o.zx, {
                            className: I.action,
                            size: o.zx.Sizes.TINY,
                            onClick: u,
                            children: P.intl.string(P.t['+WbSn5'])
                        }),
                        (0, r.jsx)(o.zx, {
                            className: I.action,
                            size: o.zx.Sizes.TINY,
                            color: o.zx.Colors.PRIMARY,
                            onClick: () => {
                                c.Z.cancelFriendRequest(i, { location: E.ZY5.DM_CHANNEL });
                            },
                            children: P.intl.string(P.t.rQSndn)
                        }),
                        d
                    ]
                });
            case E.OGo.PENDING_OUTGOING:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(o.zx, {
                            className: I.action,
                            size: o.zx.Sizes.TINY,
                            disabled: !0,
                            children: P.intl.string(P.t.xMH6vL)
                        }),
                        d
                    ]
                });
            default:
                return null;
        }
    },
    N = (e) => {
        let { channelId: t, otherUserId: n } = e,
            l = i.useCallback(() => {
                (0, s.showToast)((0, s.createToast)(P.intl.string(P.t.a2j0ho), s.ToastType.FAILURE));
            }, []),
            a = i.useCallback(() => {
                b.Z.closeChannelSidebar(C.uZ);
            }, []),
            c = i.useCallback(() => {
                b.Z.closeChannelSidebar(C.uZ);
            }, []),
            {
                acceptMessageRequest: u,
                rejectMessageRequest: d,
                isAcceptLoading: p,
                isRejectLoading: h,
                isOptimisticAccepted: m,
                isOptimisticRejected: g
            } = (0, f.m)({
                user: v.default.getUser(n),
                onError: l,
                onAcceptSuccess: c,
                onRejectSuccess: a
            }),
            _ = p || h || m || g;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.zx, {
                    className: I.action,
                    size: o.zx.Sizes.TINY,
                    onClick: () => u(t),
                    disabled: _,
                    submitting: p,
                    children: P.intl.string(P.t.Kz8Pws)
                }),
                (0, r.jsx)(o.zx, {
                    className: I.action,
                    size: o.zx.Sizes.TINY,
                    onClick: () => d(t),
                    color: o.zx.Colors.PRIMARY,
                    disabled: _,
                    submitting: h,
                    children: P.intl.string(P.t.B2nygY)
                })
            ]
        });
    },
    A = (e) => {
        let { userId: t, channel: n, showingBanner: i } = e,
            { channelId: o } = (0, m._)(),
            s = (0, a.e7)([h.Z], () => null != o && h.Z.isSpam(o), [o]),
            c = (0, a.e7)([x.Z], () => x.Z.getRelationshipType(t), [t]),
            u = n.id === o,
            d = !l.tq && !u,
            p = !!l.tq || u || s,
            f =
                s || u
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(N, {
                                  channelId: n.id,
                                  otherUserId: t
                              }),
                              (0, r.jsx)(g.Z, { channel: n })
                          ]
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(T, {
                                  relationshipType: c,
                                  userId: t,
                                  showingBanner: i
                              }),
                              !i &&
                                  (0, r.jsx)(O.Z, {
                                      otherUserId: t,
                                      channel: n,
                                      navigateAwayOnReportSuccess: d
                                  })
                          ]
                      });
        return (0, r.jsxs)('div', {
            className: p ? I.mobileContainer : I.container,
            children: [
                (0, r.jsx)('div', {
                    className: I.inline,
                    children: (0, r.jsx)(Z, {
                        userId: t,
                        channelId: n.id
                    })
                }),
                !p && (0, r.jsx)('div', { className: I.divider }),
                (0, r.jsx)('div', {
                    className: I.inline,
                    children: f
                })
            ]
        });
    };
