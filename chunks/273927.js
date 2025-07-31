(n.d(t, {
    GF: () => v,
    ZP: () => T,
    yo: () => S
}),
    n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
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
    j = n(569834);
function O(e) {
    let { listType: t, numberOfUsers: n } = e,
        r = 'blocked' === t;
    return (0, i.jsxs)('div', {
        className: j.header,
        children: [
            (0, i.jsx)('div', {
                className: j.iconContainer,
                children: r ? (0, i.jsx)(o.t6m, {}) : (0, i.jsx)(o.kZF, {})
            }),
            (0, i.jsxs)('div', {
                className: j.text,
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
function E(e) {
    var t;
    let { userId: n, last: s } = e,
        g = (0, l.e7)([m.Z], () => m.Z.isBlocked(n)),
        h = (0, l.e7)([p.default], () => p.default.getUser(n)),
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
              className: a()(j.row, { [j.lastRow]: s }),
              children: [
                  (0, i.jsxs)('div', {
                      className: j.userInfo,
                      children: [
                          (0, i.jsx)(d.Z, {
                              user: h,
                              size: o.EFr.SIZE_40
                          }),
                          (0, i.jsxs)('div', {
                              className: j.text,
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
                      variant: 'secondary',
                      text: _.intl.string(g ? _.t.XyHpKC : _.t['8wXU9P']),
                      onClick: x,
                      loading: f
                  })
              ]
          });
}
function C(e) {
    let { setting: t, userIds: n, listType: s } = e,
        [a, l] = r.useState(5);
    return (0, i.jsx)(h.U, {
        setting: t,
        children: (0, i.jsxs)('div', {
            className: j.card,
            children: [
                (0, i.jsx)(O, {
                    listType: s,
                    numberOfUsers: n.length
                }),
                (0, i.jsx)('div', {
                    className: j.usersList,
                    children: n.slice(0, a).map((e, t) =>
                        (0, i.jsx)(
                            E,
                            {
                                userId: e,
                                last: t === n.length - 1
                            },
                            e
                        )
                    )
                }),
                a < n.length
                    ? (0, i.jsx)('div', {
                          className: j.loadMoreContainer,
                          children: (0, i.jsx)(o.P3F, {
                              onClick: () => {
                                  l((e) => e + 5);
                              },
                              className: j.loadMoreButton,
                              children: (0, i.jsx)(o.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-default',
                                  children: _.intl.format(_.t.jULEDg, { numberOfUsers: a + 5 < n.length ? 5 : n.length - a })
                              })
                          })
                      })
                    : null
            ]
        })
    });
}
function v() {
    let e = (0, l.Wu)([m.Z], () => m.Z.getBlockedIDs());
    return (0, i.jsx)(C, {
        setting: b.s6.BLOCKED_USERS,
        userIds: e,
        listType: 'blocked'
    });
}
function S() {
    let e = (0, l.Wu)([m.Z], () => m.Z.getIgnoredIDs());
    return (0, i.jsx)(C, {
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
            (0, i.jsx)(v, {}),
            (0, i.jsx)(S, {})
        ]
    });
}
