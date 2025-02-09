n.d(t, { Z: () => P });
var i = n(200651),
    l = n(192379),
    a = n(873546),
    r = n(442837),
    s = n(481060),
    o = n(194359),
    c = n(686546),
    d = n(333984),
    u = n(486622),
    h = n(922409),
    p = n(86203),
    m = n(922611),
    f = n(6025),
    g = n(621853),
    _ = n(171368),
    C = n(433355),
    x = n(699516),
    v = n(594174),
    E = n(768581),
    I = n(525541),
    b = n(981631),
    Z = n(377668),
    N = n(228168),
    T = n(388032),
    S = n(773079);
let j = (e) => {
        let { userId: t, channelId: n } = e,
            a = (0, r.e7)([g.Z], () => g.Z.getMutualGuilds(t), [t]),
            o = l.useMemo(
                () =>
                    null != a
                        ? a
                              .slice(0, 3)
                              .map((e, t) => {
                                  let { guild: n } = e,
                                      l =
                                          null != n
                                              ? E.ZP.getGuildIconURL({
                                                    id: n.id,
                                                    icon: n.icon,
                                                    size: 24
                                                })
                                              : null;
                                  if (null == l) return null;
                                  let r = t === (a.length > 3 ? 3 : a.length) - 1,
                                      s = (0, i.jsx)(
                                          'img',
                                          {
                                              src: l,
                                              alt: '',
                                              className: S.avatar
                                          },
                                          t
                                      );
                                  return r
                                      ? s
                                      : (0, i.jsx)(
                                            c.ZP,
                                            {
                                                className: S.avatarMask,
                                                mask: c.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                                width: 24,
                                                height: 24,
                                                children: s
                                            },
                                            t
                                        );
                              })
                              .filter((e) => null != e)
                        : [],
                [a]
            );
        return null == a || 0 === a.length
            ? (0, i.jsx)(s.Text, {
                  color: 'header-secondary',
                  variant: 'text-sm/normal',
                  children: T.intl.string(T.t.zjVh8v)
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)('div', {
                          className: S.avatarContainer,
                          children: o
                      }),
                      (0, i.jsx)(s.P3F, {
                          onClick: () => {
                              (0, _.openUserProfileModal)({
                                  userId: t,
                                  channelId: n,
                                  section: N.oh.MUTUAL_GUILDS,
                                  analyticsLocation: { section: b.jXE.DIRECT_MESSAGE }
                              });
                          },
                          children: (0, i.jsx)(s.Text, {
                              className: S.mutualGuilds,
                              variant: 'text-sm/normal',
                              children: T.intl.format(T.t.eE3oen, { count: a.length })
                          })
                      })
                  ]
              });
    },
    y = (e) => {
        var t;
        let { relationshipType: n, userId: l, showingBanner: a } = e,
            r = null === (t = v.default.getUser(l)) || void 0 === t ? void 0 : t.bot,
            c = (0, m.Do)({ location: 'RelationshipActions' }),
            d = () => {
                o.Z.addRelationship({
                    userId: l,
                    context: { location: b.ZY5.DM_CHANNEL }
                });
            },
            u = (0, i.jsx)(s.zxk, {
                className: S.action,
                size: s.zxk.Sizes.TINY,
                color: s.zxk.Colors.PRIMARY,
                onClick: () => {
                    o.Z.addRelationship({
                        userId: l,
                        context: { location: b.ZY5.DM_CHANNEL },
                        type: b.OGo.BLOCKED
                    });
                },
                children: T.intl.string(T.t.l4EmaW)
            });
        switch (n) {
            case b.OGo.NONE:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        !r &&
                            !a &&
                            (0, i.jsx)(s.zxk, {
                                className: S.action,
                                size: s.zxk.Sizes.TINY,
                                onClick: d,
                                children: T.intl.string(T.t.w5uwoK)
                            }),
                        u
                    ]
                });
            case b.OGo.FRIEND:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.zxk, {
                            className: S.action,
                            size: s.zxk.Sizes.TINY,
                            onClick: () => {
                                o.Z.removeFriend(l, { location: b.ZY5.DM_CHANNEL });
                            },
                            color: s.zxk.Colors.PRIMARY,
                            children: T.intl.string(T.t.cvSt1N)
                        }),
                        u
                    ]
                });
            case b.OGo.BLOCKED:
                return (0, i.jsx)(s.zxk, {
                    className: S.action,
                    size: s.zxk.Sizes.TINY,
                    onClick: () => {
                        o.Z.unblockUser(l, { location: b.ZY5.DM_CHANNEL });
                    },
                    color: s.zxk.Colors.PRIMARY,
                    children: T.intl.string(T.t.XyHpKC)
                });
            case b.OGo.PENDING_INCOMING:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.Text, {
                            className: S.action,
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            children: T.intl.string(T.t.c2v5nJ)
                        }),
                        (0, i.jsx)(s.zxk, {
                            className: S.action,
                            size: s.zxk.Sizes.TINY,
                            onClick: d,
                            children: T.intl.string(c ? T.t['+WbSn5'] : T.t.ZcibdX)
                        }),
                        (0, i.jsx)(s.zxk, {
                            className: S.action,
                            size: s.zxk.Sizes.TINY,
                            color: s.zxk.Colors.PRIMARY,
                            onClick: () => {
                                o.Z.cancelFriendRequest(l, { location: b.ZY5.DM_CHANNEL });
                            },
                            children: T.intl.string(c ? T.t.rQSndn : T.t.xuio0N)
                        }),
                        u
                    ]
                });
            case b.OGo.PENDING_OUTGOING:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.zxk, {
                            className: S.action,
                            size: s.zxk.Sizes.TINY,
                            disabled: !0,
                            children: T.intl.string(T.t.xMH6vL)
                        }),
                        u
                    ]
                });
            default:
                return null;
        }
    },
    A = (e) => {
        let { channelId: t, otherUserId: n } = e,
            a = l.useCallback(() => {
                (0, s.showToast)((0, s.createToast)(T.intl.string(T.t.a2j0ho), s.ToastType.FAILURE));
            }, []),
            r = l.useCallback(() => {
                f.Z.closeChannelSidebar(C.uZ);
            }, []),
            o = l.useCallback(() => {
                f.Z.closeChannelSidebar(C.uZ);
            }, []),
            {
                acceptMessageRequest: c,
                rejectMessageRequest: d,
                isAcceptLoading: h,
                isRejectLoading: p,
                isOptimisticAccepted: m,
                isOptimisticRejected: g
            } = (0, u.m)({
                user: v.default.getUser(n),
                onError: a,
                onAcceptSuccess: o,
                onRejectSuccess: r
            }),
            _ = h || p || m || g;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(s.zxk, {
                    className: S.action,
                    size: s.zxk.Sizes.TINY,
                    onClick: () => c(t),
                    disabled: _,
                    submitting: h,
                    children: T.intl.string(T.t.Kz8Pws)
                }),
                (0, i.jsx)(s.zxk, {
                    className: S.action,
                    size: s.zxk.Sizes.TINY,
                    onClick: () => d(t),
                    color: s.zxk.Colors.PRIMARY,
                    disabled: _,
                    submitting: p,
                    children: T.intl.string(T.t.B2nygY)
                })
            ]
        });
    },
    P = (e) => {
        let { userId: t, channel: n, showingBanner: l } = e,
            { channelId: s } = (0, h._)(),
            o = (0, r.e7)([d.Z], () => null != s && d.Z.isSpam(s), [s]),
            c = (0, r.e7)([x.Z], () => x.Z.getRelationshipType(t), [t]),
            u = n.id === s,
            m = !a.tq && !u,
            f = !!a.tq || u || o;
        if (t === Z.fL) return null;
        let g =
            o || u
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(A, {
                              channelId: n.id,
                              otherUserId: t
                          }),
                          (0, i.jsx)(p.Z, { channel: n })
                      ]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(y, {
                              relationshipType: c,
                              userId: t,
                              showingBanner: l
                          }),
                          !l &&
                              (0, i.jsx)(I.Z, {
                                  otherUserId: t,
                                  channel: n,
                                  navigateAwayOnReportSuccess: m
                              })
                      ]
                  });
        return (0, i.jsxs)('div', {
            className: f ? S.mobileContainer : S.container,
            children: [
                (0, i.jsx)('div', {
                    className: S.inline,
                    children: (0, i.jsx)(j, {
                        userId: t,
                        channelId: n.id
                    })
                }),
                !f && (0, i.jsx)('div', { className: S.divider }),
                (0, i.jsx)('div', {
                    className: S.inline,
                    children: g
                })
            ]
        });
    };
