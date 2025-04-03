n.d(t, { Z: () => C });
var r = n(200651);
n(192379);
var a = n(913527),
    i = n.n(a),
    o = n(442837),
    l = n(692547),
    s = n(481060),
    c = n(239091),
    d = n(171368),
    u = n(650774),
    m = n(271383),
    p = n(594174),
    f = n(709054),
    x = n(246364),
    h = n(360328),
    b = n(981631),
    j = n(388032),
    _ = n(572308);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e) {
    var t;
    let { guildJoinRequest: a, guild: C, guildJoinRequestUser: y } = e,
        { createdAt: N, actionedAt: T, guildId: I, userId: w } = a,
        { approveRequest: O, rejectRequest: P, submitting: R } = (0, h.s)(I, w, a.joinRequestId),
        E = null == (t = a.actionedByUser) ? void 0 : t.id,
        S = (0, o.e7)([p.default], () => p.default.getUser(E)),
        B = (0, o.e7)([m.ZP], () => (null != E ? m.ZP.getMember(I, E) : null), [E, I]),
        k = (0, o.e7)([u.Z], () => u.Z.getMemberCount(I)),
        F = (null != k ? k : 0) >= C.maxMembers,
        q = j.NW.string(j.t['4eQVBA']),
        Z = (0, r.jsx)(s.T39, {
            size: 'custom',
            color: 'currentColor',
            width: 24,
            height: 24,
            className: _.icon
        });
    a.applicationStatus === x.wB.APPROVED
        ? ((q = j.NW.string(j.t.aURgY2)),
          (Z = (0, r.jsx)(s.owK, {
              size: 'md',
              className: _.iconApproved,
              color: l.Z.colors.WHITE.css,
              secondaryColor: 'currentColor'
          })))
        : a.applicationStatus === x.wB.REJECTED &&
          ((q = j.NW.string(j.t.bSZklZ)),
          (Z = (0, r.jsx)(s.k$p, {
              size: 'md',
              color: l.Z.colors.WHITE.css,
              secondaryColor: l.Z.colors.STATUS_DANGER.css
          })));
    let A =
        null != S && null != T
            ? j.NW.format(j.t.pRpZCQ, {
                  date: i()(f.default.extractTimestamp(T)).format('ll'),
                  usernameHook: function () {
                      var e;
                      return (0, r.jsx)(
                          s.P3F,
                          {
                              className: _.actionedByUser,
                              onClick: () =>
                                  (0, d.openUserProfileModal)({
                                      userId: S.id,
                                      guildId: I,
                                      analyticsLocation: {
                                          section: b.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                                          object: b.qAy.ACTIONED_BY_USER
                                      }
                                  }),
                              tag: 'div',
                              role: 'link',
                              children: (0, r.jsx)(s.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'header-primary',
                                  children: null != (e = null == B ? void 0 : B.nick) ? e : S.username
                              })
                          },
                          'username-hook'
                      );
                  }
              })
            : i()(N).format('lll');
    return (0, r.jsxs)('div', {
        className: _.container,
        children: [
            (0, r.jsxs)('div', {
                className: _.wrapper,
                children: [
                    (0, r.jsxs)('div', {
                        className: _.inline,
                        children: [
                            Z,
                            (0, r.jsxs)('div', {
                                children: [
                                    (0, r.jsx)(s.X6q, {
                                        variant: 'heading-sm/semibold',
                                        children: q
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        className: _.headerSubtext,
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        children: A
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: _.inline,
                        children: [
                            a.applicationStatus === x.wB.SUBMITTED &&
                                (0, r.jsxs)('div', {
                                    className: _.buttons,
                                    children: [
                                        (0, r.jsx)(s.ua7, {
                                            text: j.NW.string(j.t.cdPGbG),
                                            shouldShow: F,
                                            children: (e) =>
                                                (0, r.jsx)(
                                                    s.zxk,
                                                    v(g({}, e), {
                                                        color: s.zxk.Colors.GREEN,
                                                        submitting: R,
                                                        disabled: F,
                                                        onClick: O,
                                                        children: j.NW.string(j.t.BzjDQE)
                                                    })
                                                )
                                        }),
                                        (0, r.jsx)(s.zxk, {
                                            color: s.zxk.Colors.RED,
                                            onClick: P,
                                            disabled: R,
                                            children: j.NW.string(j.t.hDtbs7)
                                        })
                                    ]
                                }),
                            (0, r.jsx)(s.P3F, {
                                onClick: (e) => {
                                    (0, c.jW)(e, async () => {
                                        let { default: e } = await n.e('84259').then(n.bind(n, 597409));
                                        return (t) =>
                                            (0, r.jsx)(
                                                e,
                                                v(g({}, t), {
                                                    guild: C,
                                                    user: y
                                                })
                                            );
                                    });
                                },
                                className: _.overflow,
                                children: (0, r.jsx)(s.xhG, {
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
            a.applicationStatus === x.wB.REJECTED &&
                null != a.rejectionReason &&
                (0, r.jsx)('div', {
                    className: _.rejectionReason,
                    children: (0, r.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        children: a.rejectionReason
                    })
                })
        ]
    });
}
