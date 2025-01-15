n.d(t, {
    GF: function () {
        return I;
    },
    ZP: function () {
        return v;
    },
    yo: function () {
        return N;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(442837),
    o = n(481060),
    c = n(194359),
    d = n(99690),
    u = n(100527),
    m = n(699516),
    g = n(594174),
    h = n(63063),
    p = n(838436),
    x = n(526761),
    f = n(726985),
    _ = n(981631),
    E = n(388032),
    C = n(599764);
function T(e) {
    let { listType: t, numberOfUsers: n } = e,
        s = 'blocked' === t;
    return (0, i.jsxs)('div', {
        className: C.header,
        children: [
            (0, i.jsx)('div', {
                className: C.iconContainer,
                children: s ? (0, i.jsx)(o.DenyIcon, {}) : (0, i.jsx)(o.EyeSlashIcon, {})
            }),
            (0, i.jsxs)('div', {
                className: C.text,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/semibold',
                        color: 'interactive-active',
                        children: E.intl.string(s ? E.t.PFOUKS : E.t['93ZDWF'])
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: s ? E.intl.format(E.t['r91W/v'], { numberOfBlockedUsers: n }) : E.intl.format(E.t.rXUeOj, { numberOfIgnoredUsers: n })
                    })
                ]
            })
        ]
    });
}
function S(e) {
    var t;
    let { userId: n, last: r } = e,
        h = (0, l.e7)([m.Z], () => m.Z.isBlocked(n)),
        p = (0, l.e7)([g.default], () => g.default.getUser(n)),
        [x, f] = s.useState(!1),
        _ = s.useCallback(() => {
            f(!0),
                h
                    ? c.Z.unblockUser(n).catch(() => {
                          f(!1);
                      })
                    : c.Z.unignoreUser(n, u.Z.USER_SETTINGS).catch(() => {
                          f(!1);
                      });
        }, [h, n]);
    return null == p
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: (0, i.jsxs)('div', {
                  className: a()(C.row, { [C.lastRow]: r }),
                  children: [
                      (0, i.jsxs)('div', {
                          className: C.userInfo,
                          children: [
                              (0, i.jsx)(d.Z, {
                                  user: p,
                                  size: o.AvatarSizes.SIZE_40
                              }),
                              (0, i.jsxs)('div', {
                                  className: C.text,
                                  children: [
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-md/semibold',
                                          color: 'header-primary',
                                          children: null !== (t = p.globalName) && void 0 !== t ? t : p.username
                                      }),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'header-secondary',
                                          children: null != p.globalName ? p.username : null
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, i.jsx)(o.Button, {
                          color: o.ButtonColors.PRIMARY,
                          onClick: _,
                          submitting: x,
                          children: E.intl.string(h ? E.t.XyHpKC : E.t['8wXU9P'])
                      })
                  ]
              })
          });
}
function b(e) {
    let { setting: t, userIds: n, listType: r } = e,
        [a, l] = s.useState(5);
    return (0, i.jsx)(p.U, {
        setting: t,
        children: (0, i.jsxs)('div', {
            className: C.card,
            children: [
                (0, i.jsx)(T, {
                    listType: r,
                    numberOfUsers: n.length
                }),
                (0, i.jsx)('div', {
                    className: C.usersList,
                    children: n.slice(0, a).map((e, t) =>
                        (0, i.jsx)(
                            S,
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
                          className: C.loadMoreContainer,
                          children: (0, i.jsx)(o.Clickable, {
                              onClick: () => {
                                  l((e) => e + 5);
                              },
                              className: C.loadMoreButton,
                              children: (0, i.jsx)(o.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-normal',
                                  children: E.intl.format(E.t.jULEDg, { numberOfUsers: a + 5 < n.length ? 5 : n.length - a })
                              })
                          })
                      })
                    : null
            ]
        })
    });
}
function I() {
    let e = (0, l.Wu)([m.Z], () => m.Z.getBlockedIDs());
    return (0, i.jsx)(b, {
        setting: f.s6.BLOCKED_USERS,
        userIds: e,
        listType: 'blocked'
    });
}
function N() {
    let e = (0, l.Wu)([m.Z], () => m.Z.getIgnoredIDs());
    return (0, i.jsx)(b, {
        setting: f.s6.IGNORED_USERS,
        userIds: e,
        listType: 'ignored'
    });
}
function v() {
    return (0, i.jsxs)(p.U, {
        setting: f.s6.RESTRICTED_USERS,
        scrollPosition: x.FY.RESTRICTED_ACCOUNTS,
        scrollHighlightDelay: 900,
        children: [
            (0, i.jsx)(p.H, {
                header: E.intl.string(E.t['3wRorq']),
                description: E.intl.format(E.t['0aNQo6'], { helpArticle: h.Z.getArticleURL(_.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE) })
            }),
            (0, i.jsx)(I, {}),
            (0, i.jsx)(N, {})
        ]
    });
}
