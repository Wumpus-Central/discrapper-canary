n.d(t, {
    GF: () => C,
    ZP: () => v,
    yo: () => S
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(194359),
    d = n(99690),
    u = n(100527),
    m = n(699516),
    g = n(594174),
    p = n(63063),
    h = n(838436),
    f = n(526761),
    b = n(726985),
    N = n(981631),
    x = n(388032),
    _ = n(569834);
function E(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = 'blocked' === t;
    return (0, r.jsxs)('div', {
        className: _.header,
        children: [
            (0, r.jsx)('div', {
                className: _.iconContainer,
                children: i ? (0, r.jsx)(o.t6m, {}) : (0, r.jsx)(o.kZF, {})
            }),
            (0, r.jsxs)('div', {
                className: _.text,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: 'text-md/semibold',
                        color: 'interactive-active',
                        children: x.NW.string(i ? x.t.PFOUKS : x.t['93ZDWF'])
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: i ? x.NW.format(x.t['r91W/v'], { numberOfBlockedUsers: n }) : x.NW.format(x.t.rXUeOj, { numberOfIgnoredUsers: n })
                    })
                ]
            })
        ]
    });
}
function j(e) {
    var t;
    let { userId: n, last: s } = e,
        p = (0, l.e7)([m.Z], () => m.Z.isBlocked(n)),
        h = (0, l.e7)([g.default], () => g.default.getUser(n)),
        [f, b] = i.useState(!1),
        N = i.useCallback(() => {
            b(!0),
                p
                    ? c.Z.unblockUser(n).catch(() => {
                          b(!1);
                      })
                    : c.Z.unignoreUser(n, u.Z.USER_SETTINGS).catch(() => {
                          b(!1);
                      });
        }, [p, n]);
    return null == h
        ? null
        : (0, r.jsxs)('div', {
              className: a()(_.row, { [_.lastRow]: s }),
              children: [
                  (0, r.jsxs)('div', {
                      className: _.userInfo,
                      children: [
                          (0, r.jsx)(d.Z, {
                              user: h,
                              size: o.EFr.SIZE_40
                          }),
                          (0, r.jsxs)('div', {
                              className: _.text,
                              children: [
                                  (0, r.jsx)(o.Text, {
                                      variant: 'text-md/semibold',
                                      color: 'header-primary',
                                      children: null != (t = h.globalName) ? t : h.username
                                  }),
                                  (0, r.jsx)(o.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'header-secondary',
                                      children: null != h.globalName ? h.username : null
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, r.jsx)(o.zxk, {
                      color: o.Ttl.PRIMARY,
                      onClick: N,
                      submitting: f,
                      children: x.NW.string(p ? x.t.XyHpKC : x.t['8wXU9P'])
                  })
              ]
          });
}
function O(e) {
    let { setting: t, userIds: n, listType: s } = e,
        [a, l] = i.useState(5);
    return (0, r.jsx)(h.U, {
        setting: t,
        children: (0, r.jsxs)('div', {
            className: _.card,
            children: [
                (0, r.jsx)(E, {
                    listType: s,
                    numberOfUsers: n.length
                }),
                (0, r.jsx)('div', {
                    className: _.usersList,
                    children: n.slice(0, a).map((e, t) =>
                        (0, r.jsx)(
                            j,
                            {
                                userId: e,
                                last: t === n.length - 1
                            },
                            e
                        )
                    )
                }),
                a < n.length
                    ? (0, r.jsx)('div', {
                          className: _.loadMoreContainer,
                          children: (0, r.jsx)(o.P3F, {
                              onClick: () => {
                                  l((e) => e + 5);
                              },
                              className: _.loadMoreButton,
                              children: (0, r.jsx)(o.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-normal',
                                  children: x.NW.format(x.t.jULEDg, { numberOfUsers: a + 5 < n.length ? 5 : n.length - a })
                              })
                          })
                      })
                    : null
            ]
        })
    });
}
function C() {
    let e = (0, l.Wu)([m.Z], () => m.Z.getBlockedIDs());
    return (0, r.jsx)(O, {
        setting: b.s6.BLOCKED_USERS,
        userIds: e,
        listType: 'blocked'
    });
}
function S() {
    let e = (0, l.Wu)([m.Z], () => m.Z.getIgnoredIDs());
    return (0, r.jsx)(O, {
        setting: b.s6.IGNORED_USERS,
        userIds: e,
        listType: 'ignored'
    });
}
function v() {
    return (0, r.jsxs)(h.U, {
        setting: b.s6.RESTRICTED_USERS,
        scrollPosition: f.FY.RESTRICTED_ACCOUNTS,
        scrollHighlightDelay: 900,
        children: [
            (0, r.jsx)(h.H, {
                header: x.NW.string(x.t['3wRorq']),
                description: x.NW.format(x.t['0aNQo6'], { helpArticle: p.Z.getArticleURL(N.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE) })
            }),
            (0, r.jsx)(C, {}),
            (0, r.jsx)(S, {})
        ]
    });
}
