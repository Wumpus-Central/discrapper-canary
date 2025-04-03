n.d(t, { Z: () => T });
var r = n(200651),
    i = n(192379),
    l = n(873546),
    o = n(442837),
    a = n(481060),
    s = n(194359),
    c = n(686546),
    u = n(276506),
    d = n(333984),
    p = n(486622),
    h = n(922409),
    f = n(86203),
    m = n(6025),
    g = n(621853),
    b = n(171368),
    _ = n(433355),
    C = n(699516),
    y = n(594174),
    x = n(768581),
    v = n(525541),
    j = n(981631),
    O = n(377668),
    E = n(228168),
    N = n(388032),
    I = n(882875);
let P = (e) => {
        let { userId: t, channelId: n } = e,
            l = (0, o.e7)([g.Z], () => g.Z.getMutualGuilds(t), [t]),
            s = i.useMemo(
                () =>
                    null != l
                        ? l
                              .slice(0, 3)
                              .map((e, t) => {
                                  let { guild: n } = e,
                                      i =
                                          null != n
                                              ? x.ZP.getGuildIconURL({
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
                                              className: I.avatar
                                          },
                                          t
                                      );
                                  return o
                                      ? a
                                      : (0, r.jsx)(
                                            c.ZP,
                                            {
                                                className: I.avatarMask,
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
                          className: I.avatarContainer,
                          children: s
                      }),
                      (0, r.jsx)(a.P3F, {
                          onClick: () => {
                              (0, b.openUserProfileModal)({
                                  userId: t,
                                  channelId: n,
                                  section: E.oh.MUTUAL_GUILDS,
                                  analyticsLocation: { section: j.jXE.DIRECT_MESSAGE }
                              });
                          },
                          children: (0, r.jsx)(a.Text, {
                              className: I.mutualGuilds,
                              variant: 'text-sm/normal',
                              children: N.NW.format(N.t.eE3oen, { count: l.length })
                          })
                      })
                  ]
              });
    },
    S = (e) => {
        var t;
        let { relationshipType: n, userId: i, showingBanner: l } = e,
            o = null == (t = y.default.getUser(i)) ? void 0 : t.bot,
            c = () => {
                s.Z.addRelationship({
                    userId: i,
                    context: { location: j.ZY5.DM_CHANNEL }
                });
            },
            d = (0, r.jsx)(a.zxk, {
                className: I.action,
                size: a.zxk.Sizes.TINY,
                color: a.zxk.Colors.PRIMARY,
                onClick: () => {
                    s.Z.blockUser(i, { location: j.ZY5.DM_CHANNEL });
                },
                children: N.NW.string(N.t.l4EmaW)
            }),
            p = (0, u.n)({ userId: i });
        switch (n) {
            case j.OGo.NONE:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        !o &&
                            !l &&
                            (0, r.jsx)(a.zxk, {
                                className: I.action,
                                size: a.zxk.Sizes.TINY,
                                onClick: c,
                                children: p
                            }),
                        d
                    ]
                });
            case j.OGo.FRIEND:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(a.zxk, {
                            className: I.action,
                            size: a.zxk.Sizes.TINY,
                            onClick: () => {
                                s.Z.removeFriend(i, { location: j.ZY5.DM_CHANNEL });
                            },
                            color: a.zxk.Colors.PRIMARY,
                            children: N.NW.string(N.t.cvSt1N)
                        }),
                        d
                    ]
                });
            case j.OGo.BLOCKED:
                return (0, r.jsx)(a.zxk, {
                    className: I.action,
                    size: a.zxk.Sizes.TINY,
                    onClick: () => {
                        s.Z.unblockUser(i, { location: j.ZY5.DM_CHANNEL });
                    },
                    color: a.zxk.Colors.PRIMARY,
                    children: N.NW.string(N.t.XyHpKC)
                });
            case j.OGo.PENDING_INCOMING:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(a.Text, {
                            className: I.action,
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            children: N.NW.string(N.t.c2v5nJ)
                        }),
                        (0, r.jsx)(a.zxk, {
                            className: I.action,
                            size: a.zxk.Sizes.TINY,
                            onClick: c,
                            children: N.NW.string(N.t['+WbSn5'])
                        }),
                        (0, r.jsx)(a.zxk, {
                            className: I.action,
                            size: a.zxk.Sizes.TINY,
                            color: a.zxk.Colors.PRIMARY,
                            onClick: () => {
                                s.Z.cancelFriendRequest(i, { location: j.ZY5.DM_CHANNEL });
                            },
                            children: N.NW.string(N.t.rQSndn)
                        }),
                        d
                    ]
                });
            case j.OGo.PENDING_OUTGOING:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(a.zxk, {
                            className: I.action,
                            size: a.zxk.Sizes.TINY,
                            disabled: !0,
                            children: N.NW.string(N.t.xMH6vL)
                        }),
                        d
                    ]
                });
            default:
                return null;
        }
    },
    Z = (e) => {
        let { channelId: t, otherUserId: n } = e,
            l = i.useCallback(() => {
                (0, a.showToast)((0, a.createToast)(N.NW.string(N.t.a2j0ho), a.ToastType.FAILURE));
            }, []),
            o = i.useCallback(() => {
                m.Z.closeChannelSidebar(_.uZ);
            }, []),
            s = i.useCallback(() => {
                m.Z.closeChannelSidebar(_.uZ);
            }, []),
            {
                acceptMessageRequest: c,
                rejectMessageRequest: u,
                isAcceptLoading: d,
                isRejectLoading: h,
                isOptimisticAccepted: f,
                isOptimisticRejected: g
            } = (0, p.m)({
                user: y.default.getUser(n),
                onError: l,
                onAcceptSuccess: s,
                onRejectSuccess: o
            }),
            b = d || h || f || g;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.zxk, {
                    className: I.action,
                    size: a.zxk.Sizes.TINY,
                    onClick: () => c(t),
                    disabled: b,
                    submitting: d,
                    children: N.NW.string(N.t.Kz8Pws)
                }),
                (0, r.jsx)(a.zxk, {
                    className: I.action,
                    size: a.zxk.Sizes.TINY,
                    onClick: () => u(t),
                    color: a.zxk.Colors.PRIMARY,
                    disabled: b,
                    submitting: h,
                    children: N.NW.string(N.t.B2nygY)
                })
            ]
        });
    },
    T = (e) => {
        let { userId: t, channel: n, showingBanner: i } = e,
            { channelId: a } = (0, h._)(),
            s = (0, o.e7)([d.Z], () => null != a && d.Z.isSpam(a), [a]),
            c = (0, o.e7)([C.Z], () => C.Z.getRelationshipType(t), [t]),
            u = n.id === a,
            p = !l.tq && !u,
            m = !!l.tq || u || s;
        if (t === O.fL) return null;
        let g =
            s || u
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(Z, {
                              channelId: n.id,
                              otherUserId: t
                          }),
                          (0, r.jsx)(f.Z, { channel: n })
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(S, {
                              relationshipType: c,
                              userId: t,
                              showingBanner: i
                          }),
                          !i &&
                              (0, r.jsx)(v.Z, {
                                  otherUserId: t,
                                  channel: n,
                                  navigateAwayOnReportSuccess: p
                              })
                      ]
                  });
        return (0, r.jsxs)('div', {
            className: m ? I.mobileContainer : I.container,
            children: [
                (0, r.jsx)('div', {
                    className: I.inline,
                    children: (0, r.jsx)(P, {
                        userId: t,
                        channelId: n.id
                    })
                }),
                !m && (0, r.jsx)('div', { className: I.divider }),
                (0, r.jsx)('div', {
                    className: I.inline,
                    children: g
                })
            ]
        });
    };
