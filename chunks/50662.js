n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var r = n(913527),
    a = n.n(r),
    o = n(442837),
    l = n(692547),
    c = n(481060),
    s = n(239091),
    d = n(171368),
    u = n(650774),
    m = n(271383),
    f = n(594174),
    x = n(709054),
    b = n(246364),
    h = n(360328),
    p = n(981631),
    C = n(388032),
    _ = n(364068);
function g(e) {
    var t;
    let { guildJoinRequest: r, guild: g, guildJoinRequestUser: v } = e,
        { createdAt: j, actionedAt: I, guildId: T, userId: R } = r,
        { approveRequest: E, rejectRequest: S, submitting: A } = (0, h.s)(T, R, r.joinRequestId),
        w = null === (t = r.actionedByUser) || void 0 === t ? void 0 : t.id,
        N = (0, o.e7)([f.default], () => f.default.getUser(w)),
        P = (0, o.e7)([m.ZP], () => (null != w ? m.ZP.getMember(T, w) : null), [w, T]),
        B = (0, o.e7)([u.Z], () => u.Z.getMemberCount(T)),
        Z = (null != B ? B : 0) >= g.maxMembers,
        k = C.intl.string(C.t['4eQVBA']),
        M = (0, i.jsx)(c.ClockIcon, {
            size: 'custom',
            color: 'currentColor',
            width: 24,
            height: 24,
            className: _.icon
        });
    r.applicationStatus === b.wB.APPROVED
        ? ((k = C.intl.string(C.t.aURgY2)),
          (M = (0, i.jsx)(c.CircleCheckIcon, {
              size: 'md',
              className: _.iconApproved,
              color: l.Z.colors.WHITE.css,
              secondaryColor: 'currentColor'
          })))
        : r.applicationStatus === b.wB.REJECTED &&
          ((k = C.intl.string(C.t.bSZklZ)),
          (M = (0, i.jsx)(c.CircleXIcon, {
              size: 'md',
              color: l.Z.colors.WHITE.css,
              secondaryColor: l.Z.colors.STATUS_DANGER.css
          })));
    let y =
        null != N && null != I
            ? C.intl.format(C.t.pRpZCQ, {
                  date: a()(x.default.extractTimestamp(I)).format('ll'),
                  usernameHook: function () {
                      var e;
                      return (0, i.jsx)(
                          c.Clickable,
                          {
                              className: _.actionedByUser,
                              onClick: () =>
                                  (0, d.openUserProfileModal)({
                                      userId: N.id,
                                      guildId: T,
                                      analyticsLocation: {
                                          section: p.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                                          object: p.qAy.ACTIONED_BY_USER
                                      }
                                  }),
                              tag: 'div',
                              role: 'link',
                              children: (0, i.jsx)(c.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'header-primary',
                                  children: null !== (e = null == P ? void 0 : P.nick) && void 0 !== e ? e : N.username
                              })
                          },
                          'username-hook'
                      );
                  }
              })
            : a()(j).format('lll');
    return (0, i.jsxs)('div', {
        className: _.container,
        children: [
            (0, i.jsxs)('div', {
                className: _.wrapper,
                children: [
                    (0, i.jsxs)('div', {
                        className: _.inline,
                        children: [
                            M,
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsx)(c.Heading, {
                                        variant: 'heading-sm/semibold',
                                        children: k
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        className: _.headerSubtext,
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        children: y
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: _.inline,
                        children: [
                            r.applicationStatus === b.wB.SUBMITTED &&
                                (0, i.jsxs)('div', {
                                    className: _.buttons,
                                    children: [
                                        (0, i.jsx)(c.Tooltip, {
                                            text: C.intl.string(C.t.RbIXi4),
                                            shouldShow: Z,
                                            children: (e) =>
                                                (0, i.jsx)(c.Button, {
                                                    ...e,
                                                    color: c.Button.Colors.GREEN,
                                                    submitting: A,
                                                    disabled: Z,
                                                    onClick: E,
                                                    children: C.intl.string(C.t.BzjDQE)
                                                })
                                        }),
                                        (0, i.jsx)(c.Button, {
                                            color: c.Button.Colors.RED,
                                            onClick: S,
                                            disabled: A,
                                            children: C.intl.string(C.t.hDtbs7)
                                        })
                                    ]
                                }),
                            (0, i.jsx)(c.Clickable, {
                                onClick: (e) => {
                                    (0, s.jW)(e, async () => {
                                        let { default: e } = await n.e('84259').then(n.bind(n, 597409));
                                        return (t) =>
                                            (0, i.jsx)(e, {
                                                ...t,
                                                guild: g,
                                                user: v
                                            });
                                    });
                                },
                                className: _.overflow,
                                children: (0, i.jsx)(c.MoreHorizontalIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 20,
                                    height: 20,
                                    className: _.iconInteractive
                                })
                            })
                        ]
                    })
                ]
            }),
            r.applicationStatus === b.wB.REJECTED &&
                null != r.rejectionReason &&
                (0, i.jsx)('div', {
                    className: _.rejectionReason,
                    children: (0, i.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        children: r.rejectionReason
                    })
                })
        ]
    });
}
