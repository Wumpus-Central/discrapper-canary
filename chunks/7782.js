n.d(t, { Z: () => Z });
var r = n(200651),
    i = n(192379),
    l = n(873546),
    o = n(442837),
    a = n(481060),
    s = n(194359),
    c = n(686546),
    u = n(333984),
    d = n(486622),
    p = n(922409),
    h = n(86203),
    f = n(6025),
    m = n(621853),
    g = n(171368),
    b = n(433355),
    _ = n(699516),
    C = n(594174),
    v = n(768581),
    y = n(525541),
    x = n(981631),
    j = n(377668),
    O = n(228168),
    N = n(388032),
    E = n(864754);
let P = (e) => {
        let { userId: t, channelId: n } = e,
            l = (0, o.e7)([m.Z], () => m.Z.getMutualGuilds(t), [t]),
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
                                              className: E.avatar
                                          },
                                          t
                                      );
                                  return o
                                      ? a
                                      : (0, r.jsx)(
                                            c.ZP,
                                            {
                                                className: E.avatarMask,
                                                mask: c.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
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
                  children: N.NW.string(N.t.zjVh8v)
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)('div', {
                          className: E.avatarContainer,
                          children: s
                      }),
                      (0, r.jsx)(a.P3F, {
                          onClick: () => {
                              (0, g.openUserProfileModal)({
                                  userId: t,
                                  channelId: n,
                                  section: O.oh.MUTUAL_GUILDS,
                                  analyticsLocation: { section: x.jXE.DIRECT_MESSAGE }
                              });
                          },
                          children: (0, r.jsx)(a.Text, {
                              className: E.mutualGuilds,
                              variant: 'text-sm/normal',
                              children: N.NW.format(N.t.eE3oen, { count: l.length })
                          })
                      })
                  ]
              });
    },
    I = (e) => {
        var t;
        let { relationshipType: n, userId: i, showingBanner: l } = e,
            o = null === (t = C.default.getUser(i)) || void 0 === t ? void 0 : t.bot,
            c = () => {
                s.Z.addRelationship({
                    userId: i,
                    context: { location: x.ZY5.DM_CHANNEL }
                });
            },
            u = (0, r.jsx)(a.zxk, {
                className: E.action,
                size: a.zxk.Sizes.TINY,
                color: a.zxk.Colors.PRIMARY,
                onClick: () => {
                    s.Z.addRelationship({
                        userId: i,
                        context: { location: x.ZY5.DM_CHANNEL },
                        type: x.OGo.BLOCKED
                    });
                },
                children: N.NW.string(N.t.l4EmaW)
            });
        switch (n) {
            case x.OGo.NONE:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        !o &&
                            !l &&
                            (0, r.jsx)(a.zxk, {
                                className: E.action,
                                size: a.zxk.Sizes.TINY,
                                onClick: c,
                                children: N.NW.string(N.t.w5uwoK)
                            }),
                        u
                    ]
                });
            case x.OGo.FRIEND:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(a.zxk, {
                            className: E.action,
                            size: a.zxk.Sizes.TINY,
                            onClick: () => {
                                s.Z.removeFriend(i, { location: x.ZY5.DM_CHANNEL });
                            },
                            color: a.zxk.Colors.PRIMARY,
                            children: N.NW.string(N.t.cvSt1N)
                        }),
                        u
                    ]
                });
            case x.OGo.BLOCKED:
                return (0, r.jsx)(a.zxk, {
                    className: E.action,
                    size: a.zxk.Sizes.TINY,
                    onClick: () => {
                        s.Z.unblockUser(i, { location: x.ZY5.DM_CHANNEL });
                    },
                    color: a.zxk.Colors.PRIMARY,
                    children: N.NW.string(N.t.XyHpKC)
                });
            case x.OGo.PENDING_INCOMING:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(a.Text, {
                            className: E.action,
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            children: N.NW.string(N.t.c2v5nJ)
                        }),
                        (0, r.jsx)(a.zxk, {
                            className: E.action,
                            size: a.zxk.Sizes.TINY,
                            onClick: c,
                            children: N.NW.string(N.t['+WbSn5'])
                        }),
                        (0, r.jsx)(a.zxk, {
                            className: E.action,
                            size: a.zxk.Sizes.TINY,
                            color: a.zxk.Colors.PRIMARY,
                            onClick: () => {
                                s.Z.cancelFriendRequest(i, { location: x.ZY5.DM_CHANNEL });
                            },
                            children: N.NW.string(N.t.rQSndn)
                        }),
                        u
                    ]
                });
            case x.OGo.PENDING_OUTGOING:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(a.zxk, {
                            className: E.action,
                            size: a.zxk.Sizes.TINY,
                            disabled: !0,
                            children: N.NW.string(N.t.xMH6vL)
                        }),
                        u
                    ]
                });
            default:
                return null;
        }
    },
    S = (e) => {
        let { channelId: t, otherUserId: n } = e,
            l = i.useCallback(() => {
                (0, a.showToast)((0, a.createToast)(N.NW.string(N.t.a2j0ho), a.ToastType.FAILURE));
            }, []),
            o = i.useCallback(() => {
                f.Z.closeChannelSidebar(b.uZ);
            }, []),
            s = i.useCallback(() => {
                f.Z.closeChannelSidebar(b.uZ);
            }, []),
            {
                acceptMessageRequest: c,
                rejectMessageRequest: u,
                isAcceptLoading: p,
                isRejectLoading: h,
                isOptimisticAccepted: m,
                isOptimisticRejected: g
            } = (0, d.m)({
                user: C.default.getUser(n),
                onError: l,
                onAcceptSuccess: s,
                onRejectSuccess: o
            }),
            _ = p || h || m || g;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.zxk, {
                    className: E.action,
                    size: a.zxk.Sizes.TINY,
                    onClick: () => c(t),
                    disabled: _,
                    submitting: p,
                    children: N.NW.string(N.t.Kz8Pws)
                }),
                (0, r.jsx)(a.zxk, {
                    className: E.action,
                    size: a.zxk.Sizes.TINY,
                    onClick: () => u(t),
                    color: a.zxk.Colors.PRIMARY,
                    disabled: _,
                    submitting: h,
                    children: N.NW.string(N.t.B2nygY)
                })
            ]
        });
    },
    Z = (e) => {
        let { userId: t, channel: n, showingBanner: i } = e,
            { channelId: a } = (0, p._)(),
            s = (0, o.e7)([u.Z], () => null != a && u.Z.isSpam(a), [a]),
            c = (0, o.e7)([_.Z], () => _.Z.getRelationshipType(t), [t]),
            d = n.id === a,
            f = !l.tq && !d,
            m = !!l.tq || d || s;
        if (t === j.fL) return null;
        let g =
            s || d
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(S, {
                              channelId: n.id,
                              otherUserId: t
                          }),
                          (0, r.jsx)(h.Z, { channel: n })
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(I, {
                              relationshipType: c,
                              userId: t,
                              showingBanner: i
                          }),
                          !i &&
                              (0, r.jsx)(y.Z, {
                                  otherUserId: t,
                                  channel: n,
                                  navigateAwayOnReportSuccess: f
                              })
                      ]
                  });
        return (0, r.jsxs)('div', {
            className: m ? E.mobileContainer : E.container,
            children: [
                (0, r.jsx)('div', {
                    className: E.inline,
                    children: (0, r.jsx)(P, {
                        userId: t,
                        channelId: n.id
                    })
                }),
                !m && (0, r.jsx)('div', { className: E.divider }),
                (0, r.jsx)('div', {
                    className: E.inline,
                    children: g
                })
            ]
        });
    };
