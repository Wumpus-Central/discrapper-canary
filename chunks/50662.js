n.d(t, { Z: () => C });
var a = n(200651);
n(192379);
var i = n(913527),
    r = n.n(i),
    l = n(442837),
    o = n(692547),
    s = n(481060),
    c = n(239091),
    d = n(171368),
    u = n(650774),
    m = n(271383),
    _ = n(594174),
    x = n(709054),
    f = n(246364),
    h = n(360328),
    p = n(981631),
    b = n(388032),
    g = n(364068);
function C(e) {
    var t;
    let { guildJoinRequest: i, guild: C, guildJoinRequestUser: v } = e,
        { createdAt: j, actionedAt: I, guildId: T, userId: R } = i,
        { approveRequest: E, rejectRequest: P, submitting: w } = (0, h.s)(T, R, i.joinRequestId),
        N = null === (t = i.actionedByUser) || void 0 === t ? void 0 : t.id,
        S = (0, l.e7)([_.default], () => _.default.getUser(N)),
        A = (0, l.e7)([m.ZP], () => (null != N ? m.ZP.getMember(T, N) : null), [N, T]),
        Z = (0, l.e7)([u.Z], () => u.Z.getMemberCount(T)),
        B = (null != Z ? Z : 0) >= C.maxMembers,
        k = b.intl.string(b.t['4eQVBA']),
        y = (0, a.jsx)(s.T39, {
            size: 'custom',
            color: 'currentColor',
            width: 24,
            height: 24,
            className: g.icon
        });
    i.applicationStatus === f.wB.APPROVED
        ? ((k = b.intl.string(b.t.aURgY2)),
          (y = (0, a.jsx)(s.owK, {
              size: 'md',
              className: g.iconApproved,
              color: o.Z.colors.WHITE.css,
              secondaryColor: 'currentColor'
          })))
        : i.applicationStatus === f.wB.REJECTED &&
          ((k = b.intl.string(b.t.bSZklZ)),
          (y = (0, a.jsx)(s.k$p, {
              size: 'md',
              color: o.Z.colors.WHITE.css,
              secondaryColor: o.Z.colors.STATUS_DANGER.css
          })));
    let F =
        null != S && null != I
            ? b.intl.format(b.t.pRpZCQ, {
                  date: r()(x.default.extractTimestamp(I)).format('ll'),
                  usernameHook: function () {
                      var e;
                      return (0, a.jsx)(
                          s.P3F,
                          {
                              className: g.actionedByUser,
                              onClick: () =>
                                  (0, d.openUserProfileModal)({
                                      userId: S.id,
                                      guildId: T,
                                      analyticsLocation: {
                                          section: p.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                                          object: p.qAy.ACTIONED_BY_USER
                                      }
                                  }),
                              tag: 'div',
                              role: 'link',
                              children: (0, a.jsx)(s.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'header-primary',
                                  children: null !== (e = null == A ? void 0 : A.nick) && void 0 !== e ? e : S.username
                              })
                          },
                          'username-hook'
                      );
                  }
              })
            : r()(j).format('lll');
    return (0, a.jsxs)('div', {
        className: g.container,
        children: [
            (0, a.jsxs)('div', {
                className: g.wrapper,
                children: [
                    (0, a.jsxs)('div', {
                        className: g.inline,
                        children: [
                            y,
                            (0, a.jsxs)('div', {
                                children: [
                                    (0, a.jsx)(s.X6q, {
                                        variant: 'heading-sm/semibold',
                                        children: k
                                    }),
                                    (0, a.jsx)(s.Text, {
                                        className: g.headerSubtext,
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        children: F
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: g.inline,
                        children: [
                            i.applicationStatus === f.wB.SUBMITTED &&
                                (0, a.jsxs)('div', {
                                    className: g.buttons,
                                    children: [
                                        (0, a.jsx)(s.ua7, {
                                            text: b.intl.string(b.t.RbIXi4),
                                            shouldShow: B,
                                            children: (e) =>
                                                (0, a.jsx)(s.zxk, {
                                                    ...e,
                                                    color: s.zxk.Colors.GREEN,
                                                    submitting: w,
                                                    disabled: B,
                                                    onClick: E,
                                                    children: b.intl.string(b.t.BzjDQE)
                                                })
                                        }),
                                        (0, a.jsx)(s.zxk, {
                                            color: s.zxk.Colors.RED,
                                            onClick: P,
                                            disabled: w,
                                            children: b.intl.string(b.t.hDtbs7)
                                        })
                                    ]
                                }),
                            (0, a.jsx)(s.P3F, {
                                onClick: (e) => {
                                    (0, c.jW)(e, async () => {
                                        let { default: e } = await n.e('84259').then(n.bind(n, 597409));
                                        return (t) =>
                                            (0, a.jsx)(e, {
                                                ...t,
                                                guild: C,
                                                user: v
                                            });
                                    });
                                },
                                className: g.overflow,
                                children: (0, a.jsx)(s.xhG, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 20,
                                    height: 20,
                                    className: g.iconInteractive
                                })
                            })
                        ]
                    })
                ]
            }),
            i.applicationStatus === f.wB.REJECTED &&
                null != i.rejectionReason &&
                (0, a.jsx)('div', {
                    className: g.rejectionReason,
                    children: (0, a.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        children: i.rejectionReason
                    })
                })
        ]
    });
}
