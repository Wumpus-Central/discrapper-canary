n.d(t, {
    Ay: () => C,
    LP: () => v,
    nK: () => T,
}),
    n(896048);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(49229),
    d = n(730134),
    u = n(793574),
    g = n(994500),
    h = n(287809),
    x = n(975571),
    A = n(871930),
    p = n(355097),
    m = n(531525),
    j = n(652215),
    b = n(985018),
    O = n(193291);

function S(e) {
    let { listType: t, numberOfUsers: n } = e,
        s = "blocked" === t;
    return (0, i.jsxs)("div", {
        className: O.wx,
        children: [
            (0, i.jsx)("div", {
                className: O.zc,
                children: s ? (0, i.jsx)(o.KTN, {}) : (0, i.jsx)(o.G3N, {}),
            }),
            (0, i.jsxs)("div", {
                className: O.Qq,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: b.intl.string(s ? b.t.PFOUKW : b.t["93ZDWE"]),
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: s
                            ? b.intl.format(b.t["r91W/h"], {
                                  numberOfBlockedUsers: n,
                              })
                            : b.intl.format(b.t.rXUeOl, {
                                  numberOfIgnoredUsers: n,
                              }),
                    }),
                ],
            }),
        ],
    });
}

function E(e) {
    var t;
    let { userId: n, last: l } = e,
        x = (0, a.bG)([g.A], () => g.A.isBlocked(n)),
        A = (0, a.bG)([h.default], () => h.default.getUser(n)),
        [p, m] = s.useState(!1),
        j = s.useCallback(() => {
            m(!0),
                x
                    ? c.A.unblockUser(n).catch(() => {
                          m(!1);
                      })
                    : c.A.unignoreUser(n, u.A.USER_SETTINGS).catch(() => {
                          m(!1);
                      });
        }, [x, n]);
    return null == A
        ? null
        : (0, i.jsxs)("div", {
              className: r()(O.nM, {
                  [O.fW]: l,
              }),
              children: [
                  (0, i.jsxs)("div", {
                      className: O.eF,
                      children: [
                          (0, i.jsx)(d.A, {
                              user: A,
                              size: o._3J.SIZE_40,
                          }),
                          (0, i.jsxs)("div", {
                              className: O.Qq,
                              children: [
                                  (0, i.jsx)(o.Text, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: null != (t = A.globalName) ? t : A.username,
                                  }),
                                  (0, i.jsx)(o.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != A.globalName ? A.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, i.jsx)(o.Button, {
                      variant: "secondary",
                      text: b.intl.string(x ? b.t.XyHpKH : b.t["8wXU9B"]),
                      onClick: j,
                      loading: p,
                  }),
              ],
          });
}

function f(e) {
    let { setting: t, userIds: n, listType: l } = e,
        [r, a] = s.useState(5);
    return (0, i.jsx)(A.h, {
        setting: t,
        children: (0, i.jsxs)("div", {
            className: O.Nr,
            children: [
                (0, i.jsx)(S, {
                    listType: l,
                    numberOfUsers: n.length,
                }),
                (0, i.jsx)("div", {
                    className: O.jS,
                    children: n.slice(0, r).map((e, t) =>
                        (0, i.jsx)(
                            E,
                            {
                                userId: e,
                                last: t === n.length - 1,
                            },
                            e,
                        ),
                    ),
                }),
                r < n.length
                    ? (0, i.jsx)("div", {
                          className: O.vM,
                          children: (0, i.jsx)(o.DUT, {
                              onClick: () => {
                                  a((e) => e + 5);
                              },
                              className: O.Qf,
                              children: (0, i.jsx)(o.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: b.intl.format(b.t.jULEDr, {
                                      numberOfUsers: r + 5 < n.length ? 5 : n.length - r,
                                  }),
                              }),
                          }),
                      })
                    : null,
            ],
        }),
    });
}

function v() {
    let e = (0, a.yK)([g.A], () => g.A.getBlockedIDs());
    return (0, i.jsx)(f, {
        setting: m.H.BLOCKED_USERS,
        userIds: e,
        listType: "blocked",
    });
}

function T() {
    let e = (0, a.yK)([g.A], () => g.A.getIgnoredIDs());
    return (0, i.jsx)(f, {
        setting: m.H.IGNORED_USERS,
        userIds: e,
        listType: "ignored",
    });
}

function C() {
    return (0, i.jsxs)(A.h, {
        setting: m.H.RESTRICTED_USERS,
        scrollPosition: p.d1.RESTRICTED_ACCOUNTS,
        scrollHighlightDelay: 900,
        children: [
            (0, i.jsx)(A._, {
                header: b.intl.string(b.t["3wRort"]),
                description: b.intl.format(b.t["0aNQo9"], {
                    helpArticle: x.A.getArticleURL(j.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE),
                }),
            }),
            (0, i.jsx)(v, {}),
            (0, i.jsx)(T, {}),
        ],
    });
}
