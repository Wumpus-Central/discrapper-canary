n.d(t, { Z: () => v });
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
    x = n(594174),
    h = n(709054),
    _ = n(246364),
    p = n(360328),
    f = n(981631),
    C = n(388032),
    j = n(306077);
function v(e) {
    var t;
    let { guildJoinRequest: i, guild: v, guildJoinRequestUser: b } = e,
        { createdAt: g, actionedAt: T, guildId: I, userId: R } = i,
        { approveRequest: N, rejectRequest: E, submitting: w } = (0, p.s)(I, R, i.joinRequestId),
        B = null === (t = i.actionedByUser) || void 0 === t ? void 0 : t.id,
        S = (0, l.e7)([x.default], () => x.default.getUser(B)),
        P = (0, l.e7)([m.ZP], () => (null != B ? m.ZP.getMember(I, B) : null), [B, I]),
        F = (0, l.e7)([u.Z], () => u.Z.getMemberCount(I)),
        y = (null != F ? F : 0) >= v.maxMembers,
        q = C.intl.string(C.t['4eQVBA']),
        Z = (0, a.jsx)(s.T39, {
            size: 'custom',
            color: 'currentColor',
            width: 24,
            height: 24,
            className: j.icon
        });
    i.applicationStatus === _.wB.APPROVED
        ? ((q = C.intl.string(C.t.aURgY2)),
          (Z = (0, a.jsx)(s.owK, {
              size: 'md',
              className: j.iconApproved,
              color: o.Z.colors.WHITE.css,
              secondaryColor: 'currentColor'
          })))
        : i.applicationStatus === _.wB.REJECTED &&
          ((q = C.intl.string(C.t.bSZklZ)),
          (Z = (0, a.jsx)(s.k$p, {
              size: 'md',
              color: o.Z.colors.WHITE.css,
              secondaryColor: o.Z.colors.STATUS_DANGER.css
          })));
    let k =
        null != S && null != T
            ? C.intl.format(C.t.pRpZCQ, {
                  date: r()(h.default.extractTimestamp(T)).format('ll'),
                  usernameHook: function () {
                      var e;
                      return (0, a.jsx)(
                          s.P3F,
                          {
                              className: j.actionedByUser,
                              onClick: () =>
                                  (0, d.openUserProfileModal)({
                                      userId: S.id,
                                      guildId: I,
                                      analyticsLocation: {
                                          section: f.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                                          object: f.qAy.ACTIONED_BY_USER
                                      }
                                  }),
                              tag: 'div',
                              role: 'link',
                              children: (0, a.jsx)(s.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'header-primary',
                                  children: null !== (e = null == P ? void 0 : P.nick) && void 0 !== e ? e : S.username
                              })
                          },
                          'username-hook'
                      );
                  }
              })
            : r()(g).format('lll');
    return (0, a.jsxs)('div', {
        className: j.container,
        children: [
            (0, a.jsxs)('div', {
                className: j.wrapper,
                children: [
                    (0, a.jsxs)('div', {
                        className: j.inline,
                        children: [
                            Z,
                            (0, a.jsxs)('div', {
                                children: [
                                    (0, a.jsx)(s.X6q, {
                                        variant: 'heading-sm/semibold',
                                        children: q
                                    }),
                                    (0, a.jsx)(s.Text, {
                                        className: j.headerSubtext,
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        children: k
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: j.inline,
                        children: [
                            i.applicationStatus === _.wB.SUBMITTED &&
                                (0, a.jsxs)('div', {
                                    className: j.buttons,
                                    children: [
                                        (0, a.jsx)(s.ua7, {
                                            text: C.intl.string(C.t.RbIXi4),
                                            shouldShow: y,
                                            children: (e) =>
                                                (0, a.jsx)(s.zxk, {
                                                    ...e,
                                                    color: s.zxk.Colors.GREEN,
                                                    submitting: w,
                                                    disabled: y,
                                                    onClick: N,
                                                    children: C.intl.string(C.t.BzjDQE)
                                                })
                                        }),
                                        (0, a.jsx)(s.zxk, {
                                            color: s.zxk.Colors.RED,
                                            onClick: E,
                                            disabled: w,
                                            children: C.intl.string(C.t.hDtbs7)
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
                                                guild: v,
                                                user: b
                                            });
                                    });
                                },
                                className: j.overflow,
                                children: (0, a.jsx)(s.xhG, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 20,
                                    height: 20,
                                    className: j.iconInteractive
                                })
                            })
                        ]
                    })
                ]
            }),
            i.applicationStatus === _.wB.REJECTED &&
                null != i.rejectionReason &&
                (0, a.jsx)('div', {
                    className: j.rejectionReason,
                    children: (0, a.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        children: i.rejectionReason
                    })
                })
        ]
    });
}
