n.d(t, {
    GF: () => S,
    ZP: () => v,
    yo: () => b
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(194359),
    d = n(99690),
    u = n(100527),
    m = n(699516),
    h = n(594174),
    g = n(63063),
    _ = n(838436),
    x = n(526761),
    p = n(726985),
    E = n(981631),
    C = n(388032),
    f = n(599764);
function T(e) {
    let { listType: t, numberOfUsers: n } = e,
        s = 'blocked' === t;
    return (0, i.jsxs)('div', {
        className: f.header,
        children: [
            (0, i.jsx)('div', {
                className: f.iconContainer,
                children: s ? (0, i.jsx)(o.t6m, {}) : (0, i.jsx)(o.kZF, {})
            }),
            (0, i.jsxs)('div', {
                className: f.text,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/semibold',
                        color: 'interactive-active',
                        children: C.intl.string(s ? C.t.PFOUKS : C.t['93ZDWF'])
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: s ? C.intl.format(C.t['r91W/v'], { numberOfBlockedUsers: n }) : C.intl.format(C.t.rXUeOj, { numberOfIgnoredUsers: n })
                    })
                ]
            })
        ]
    });
}
function N(e) {
    var t;
    let { userId: n, last: r } = e,
        g = (0, a.e7)([m.Z], () => m.Z.isBlocked(n)),
        _ = (0, a.e7)([h.default], () => h.default.getUser(n)),
        [x, p] = s.useState(!1),
        E = s.useCallback(() => {
            p(!0),
                g
                    ? c.Z.unblockUser(n).catch(() => {
                          p(!1);
                      })
                    : c.Z.unignoreUser(n, u.Z.USER_SETTINGS).catch(() => {
                          p(!1);
                      });
        }, [g, n]);
    return null == _
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: (0, i.jsxs)('div', {
                  className: l()(f.row, { [f.lastRow]: r }),
                  children: [
                      (0, i.jsxs)('div', {
                          className: f.userInfo,
                          children: [
                              (0, i.jsx)(d.Z, {
                                  user: _,
                                  size: o.EFr.SIZE_40
                              }),
                              (0, i.jsxs)('div', {
                                  className: f.text,
                                  children: [
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-md/semibold',
                                          color: 'header-primary',
                                          children: null !== (t = _.globalName) && void 0 !== t ? t : _.username
                                      }),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'header-secondary',
                                          children: null != _.globalName ? _.username : null
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, i.jsx)(o.zxk, {
                          color: o.Ttl.PRIMARY,
                          onClick: E,
                          submitting: x,
                          children: C.intl.string(g ? C.t.XyHpKC : C.t['8wXU9P'])
                      })
                  ]
              })
          });
}
function I(e) {
    let { setting: t, userIds: n, listType: r } = e,
        [l, a] = s.useState(5);
    return (0, i.jsx)(_.U, {
        setting: t,
        children: (0, i.jsxs)('div', {
            className: f.card,
            children: [
                (0, i.jsx)(T, {
                    listType: r,
                    numberOfUsers: n.length
                }),
                (0, i.jsx)('div', {
                    className: f.usersList,
                    children: n.slice(0, l).map((e, t) =>
                        (0, i.jsx)(
                            N,
                            {
                                userId: e,
                                last: t === n.length - 1
                            },
                            e
                        )
                    )
                }),
                l < n.length
                    ? (0, i.jsx)('div', {
                          className: f.loadMoreContainer,
                          children: (0, i.jsx)(o.P3F, {
                              onClick: () => {
                                  a((e) => e + 5);
                              },
                              className: f.loadMoreButton,
                              children: (0, i.jsx)(o.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-normal',
                                  children: C.intl.format(C.t.jULEDg, { numberOfUsers: l + 5 < n.length ? 5 : n.length - l })
                              })
                          })
                      })
                    : null
            ]
        })
    });
}
function S() {
    let e = (0, a.Wu)([m.Z], () => m.Z.getBlockedIDs());
    return (0, i.jsx)(I, {
        setting: p.s6.BLOCKED_USERS,
        userIds: e,
        listType: 'blocked'
    });
}
function b() {
    let e = (0, a.Wu)([m.Z], () => m.Z.getIgnoredIDs());
    return (0, i.jsx)(I, {
        setting: p.s6.IGNORED_USERS,
        userIds: e,
        listType: 'ignored'
    });
}
function v() {
    return (0, i.jsxs)(_.U, {
        setting: p.s6.RESTRICTED_USERS,
        scrollPosition: x.FY.RESTRICTED_ACCOUNTS,
        scrollHighlightDelay: 900,
        children: [
            (0, i.jsx)(_.H, {
                header: C.intl.string(C.t['3wRorq']),
                description: C.intl.format(C.t['0aNQo6'], { helpArticle: g.Z.getArticleURL(E.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE) })
            }),
            (0, i.jsx)(S, {}),
            (0, i.jsx)(b, {})
        ]
    });
}
