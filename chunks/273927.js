(n.d(t, {
    GF: () => S,
    ZP: () => T,
    yo: () => v
}),
    n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(194359),
    d = n(99690),
    u = n(100527),
    m = n(699516),
    p = n(594174),
    g = n(63063),
    h = n(838436),
    f = n(526761),
    b = n(726985),
    x = n(981631),
    _ = n(388032),
    E = n(569834);
function j(e) {
    let { listType: t, numberOfUsers: n } = e,
        r = 'blocked' === t;
    return (0, i.jsxs)('div', {
        className: E.header,
        children: [
            (0, i.jsx)('div', {
                className: E.iconContainer,
                children: r ? (0, i.jsx)(o.t6m, {}) : (0, i.jsx)(o.kZF, {})
            }),
            (0, i.jsxs)('div', {
                className: E.text,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/semibold',
                        color: 'interactive-active',
                        children: _.intl.string(r ? _.t.PFOUKS : _.t['93ZDWF'])
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: r ? _.intl.format(_.t['r91W/v'], { numberOfBlockedUsers: n }) : _.intl.format(_.t.rXUeOj, { numberOfIgnoredUsers: n })
                    })
                ]
            })
        ]
    });
}
function C(e) {
    var t;
    let { userId: n, last: s } = e,
        g = (0, a.e7)([m.Z], () => m.Z.isBlocked(n)),
        h = (0, a.e7)([p.default], () => p.default.getUser(n)),
        [f, b] = r.useState(!1),
        x = r.useCallback(() => {
            (b(!0),
                g
                    ? c.Z.unblockUser(n).catch(() => {
                          b(!1);
                      })
                    : c.Z.unignoreUser(n, u.Z.USER_SETTINGS).catch(() => {
                          b(!1);
                      }));
        }, [g, n]);
    return null == h
        ? null
        : (0, i.jsxs)('div', {
              className: l()(E.row, { [E.lastRow]: s }),
              children: [
                  (0, i.jsxs)('div', {
                      className: E.userInfo,
                      children: [
                          (0, i.jsx)(d.Z, {
                              user: h,
                              size: o.EFr.SIZE_40
                          }),
                          (0, i.jsxs)('div', {
                              className: E.text,
                              children: [
                                  (0, i.jsx)(o.Text, {
                                      variant: 'text-md/semibold',
                                      color: 'header-primary',
                                      children: null != (t = h.globalName) ? t : h.username
                                  }),
                                  (0, i.jsx)(o.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'header-secondary',
                                      children: null != h.globalName ? h.username : null
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, i.jsx)(o.zxk, {
                      color: o.Ttl.PRIMARY,
                      onClick: x,
                      submitting: f,
                      children: _.intl.string(g ? _.t.XyHpKC : _.t['8wXU9P'])
                  })
              ]
          });
}
function O(e) {
    let { setting: t, userIds: n, listType: s } = e,
        [l, a] = r.useState(5);
    return (0, i.jsx)(h.U, {
        setting: t,
        children: (0, i.jsxs)('div', {
            className: E.card,
            children: [
                (0, i.jsx)(j, {
                    listType: s,
                    numberOfUsers: n.length
                }),
                (0, i.jsx)('div', {
                    className: E.usersList,
                    children: n.slice(0, l).map((e, t) =>
                        (0, i.jsx)(
                            C,
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
                          className: E.loadMoreContainer,
                          children: (0, i.jsx)(o.P3F, {
                              onClick: () => {
                                  a((e) => e + 5);
                              },
                              className: E.loadMoreButton,
                              children: (0, i.jsx)(o.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-default',
                                  children: _.intl.format(_.t.jULEDg, { numberOfUsers: l + 5 < n.length ? 5 : n.length - l })
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
    return (0, i.jsx)(O, {
        setting: b.s6.BLOCKED_USERS,
        userIds: e,
        listType: 'blocked'
    });
}
function v() {
    let e = (0, a.Wu)([m.Z], () => m.Z.getIgnoredIDs());
    return (0, i.jsx)(O, {
        setting: b.s6.IGNORED_USERS,
        userIds: e,
        listType: 'ignored'
    });
}
function T() {
    return (0, i.jsxs)(h.U, {
        setting: b.s6.RESTRICTED_USERS,
        scrollPosition: f.FY.RESTRICTED_ACCOUNTS,
        scrollHighlightDelay: 900,
        children: [
            (0, i.jsx)(h.H, {
                header: _.intl.string(_.t['3wRorq']),
                description: _.intl.format(_.t['0aNQo6'], { helpArticle: g.Z.getArticleURL(x.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE) })
            }),
            (0, i.jsx)(S, {}),
            (0, i.jsx)(v, {})
        ]
    });
}
