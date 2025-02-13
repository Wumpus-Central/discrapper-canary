n.d(t, {
    GF: () => S,
    ZP: () => v,
    yo: () => j
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(194359),
    d = n(99690),
    u = n(100527),
    h = n(699516),
    m = n(594174),
    g = n(63063),
    x = n(838436),
    _ = n(526761),
    p = n(726985),
    E = n(981631),
    C = n(388032),
    N = n(268296);
function f(e) {
    let { listType: t, numberOfUsers: n } = e,
        s = 'blocked' === t;
    return (0, i.jsxs)('div', {
        className: N.header,
        children: [
            (0, i.jsx)('div', {
                className: N.iconContainer,
                children: s ? (0, i.jsx)(o.t6m, {}) : (0, i.jsx)(o.kZF, {})
            }),
            (0, i.jsxs)('div', {
                className: N.text,
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
function I(e) {
    var t;
    let { userId: n, last: l } = e,
        g = (0, a.e7)([h.Z], () => h.Z.isBlocked(n)),
        x = (0, a.e7)([m.default], () => m.default.getUser(n)),
        [_, p] = s.useState(!1),
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
    return null == x
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: (0, i.jsxs)('div', {
                  className: r()(N.row, { [N.lastRow]: l }),
                  children: [
                      (0, i.jsxs)('div', {
                          className: N.userInfo,
                          children: [
                              (0, i.jsx)(d.Z, {
                                  user: x,
                                  size: o.EFr.SIZE_40
                              }),
                              (0, i.jsxs)('div', {
                                  className: N.text,
                                  children: [
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-md/semibold',
                                          color: 'header-primary',
                                          children: null !== (t = x.globalName) && void 0 !== t ? t : x.username
                                      }),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'header-secondary',
                                          children: null != x.globalName ? x.username : null
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, i.jsx)(o.zxk, {
                          color: o.Ttl.PRIMARY,
                          onClick: E,
                          submitting: _,
                          children: C.intl.string(g ? C.t.XyHpKC : C.t['8wXU9P'])
                      })
                  ]
              })
          });
}
function T(e) {
    let { setting: t, userIds: n, listType: l } = e,
        [r, a] = s.useState(5);
    return (0, i.jsx)(x.U, {
        setting: t,
        children: (0, i.jsxs)('div', {
            className: N.card,
            children: [
                (0, i.jsx)(f, {
                    listType: l,
                    numberOfUsers: n.length
                }),
                (0, i.jsx)('div', {
                    className: N.usersList,
                    children: n.slice(0, r).map((e, t) =>
                        (0, i.jsx)(
                            I,
                            {
                                userId: e,
                                last: t === n.length - 1
                            },
                            e
                        )
                    )
                }),
                r < n.length
                    ? (0, i.jsx)('div', {
                          className: N.loadMoreContainer,
                          children: (0, i.jsx)(o.P3F, {
                              onClick: () => {
                                  a((e) => e + 5);
                              },
                              className: N.loadMoreButton,
                              children: (0, i.jsx)(o.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-normal',
                                  children: C.intl.format(C.t.jULEDg, { numberOfUsers: r + 5 < n.length ? 5 : n.length - r })
                              })
                          })
                      })
                    : null
            ]
        })
    });
}
function S() {
    let e = (0, a.Wu)([h.Z], () => h.Z.getBlockedIDs());
    return (0, i.jsx)(T, {
        setting: p.s6.BLOCKED_USERS,
        userIds: e,
        listType: 'blocked'
    });
}
function j() {
    let e = (0, a.Wu)([h.Z], () => h.Z.getIgnoredIDs());
    return (0, i.jsx)(T, {
        setting: p.s6.IGNORED_USERS,
        userIds: e,
        listType: 'ignored'
    });
}
function v() {
    return (0, i.jsxs)(x.U, {
        setting: p.s6.RESTRICTED_USERS,
        scrollPosition: _.FY.RESTRICTED_ACCOUNTS,
        scrollHighlightDelay: 900,
        children: [
            (0, i.jsx)(x.H, {
                header: C.intl.string(C.t['3wRorq']),
                description: C.intl.format(C.t['0aNQo6'], { helpArticle: g.Z.getArticleURL(E.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE) })
            }),
            (0, i.jsx)(S, {}),
            (0, i.jsx)(j, {})
        ]
    });
}
