n.d(t, {
    GF: () => S,
    ZP: () => C,
    yo: () => A,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(194359),
    u = n(99690),
    d = n(100527),
    f = n(699516),
    _ = n(594174),
    p = n(63063),
    h = n(838436),
    m = n(526761),
    g = n(726985),
    E = n(981631),
    b = n(388032),
    y = n(280103);
let O = 5;
function v(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, r.jsxs)("div", {
        className: y.header,
        children: [
            (0, r.jsx)("div", {
                className: y.iconContainer,
                children: i ? (0, r.jsx)(l.t6m, {}) : (0, r.jsx)(l.kZF, {}),
            }),
            (0, r.jsxs)("div", {
                className: y.text,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-md/semibold",
                        color: "interactive-active",
                        children: b.intl.string(i ? b.t.PFOUKW : b.t["93ZDWE"]),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-md/medium",
                        color: "header-secondary",
                        children: i
                            ? b.intl.format(b.t["r91W/h"], { numberOfBlockedUsers: n })
                            : b.intl.format(b.t.rXUeOl, { numberOfIgnoredUsers: n }),
                    }),
                ],
            }),
        ],
    });
}
function I(e) {
    var t;
    let { userId: n, last: a } = e,
        p = (0, s.e7)([f.Z], () => f.Z.isBlocked(n)),
        h = (0, s.e7)([_.default], () => _.default.getUser(n)),
        [m, g] = i.useState(!1),
        E = i.useCallback(() => {
            g(!0),
                p
                    ? c.Z.unblockUser(n).catch(() => {
                          g(!1);
                      })
                    : c.Z.unignoreUser(n, d.Z.USER_SETTINGS).catch(() => {
                          g(!1);
                      });
        }, [p, n]);
    return null == h
        ? null
        : (0, r.jsxs)("div", {
              className: o()(y.row, { [y.lastRow]: a }),
              children: [
                  (0, r.jsxs)("div", {
                      className: y.userInfo,
                      children: [
                          (0, r.jsx)(u.Z, {
                              user: h,
                              size: l.EFr.SIZE_40,
                          }),
                          (0, r.jsxs)("div", {
                              className: y.text,
                              children: [
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-md/semibold",
                                      color: "header-primary",
                                      children: null != (t = h.globalName) ? t : h.username,
                                  }),
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-sm/medium",
                                      color: "header-secondary",
                                      children: null != h.globalName ? h.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, r.jsx)(l.Button, {
                      variant: "secondary",
                      text: b.intl.string(p ? b.t.XyHpKH : b.t["8wXU9B"]),
                      onClick: E,
                      loading: m,
                  }),
              ],
          });
}
function T(e) {
    let { setting: t, userIds: n, listType: a } = e,
        [o, s] = i.useState(O),
        c = () => {
            s((e) => e + O);
        };
    return (0, r.jsx)(h.U, {
        setting: t,
        children: (0, r.jsxs)("div", {
            className: y.card,
            children: [
                (0, r.jsx)(v, {
                    listType: a,
                    numberOfUsers: n.length,
                }),
                (0, r.jsx)("div", {
                    className: y.usersList,
                    children: n.slice(0, o).map((e, t) =>
                        (0, r.jsx)(
                            I,
                            {
                                userId: e,
                                last: t === n.length - 1,
                            },
                            e,
                        ),
                    ),
                }),
                o < n.length
                    ? (0, r.jsx)("div", {
                          className: y.loadMoreContainer,
                          children: (0, r.jsx)(l.P3F, {
                              onClick: c,
                              className: y.loadMoreButton,
                              children: (0, r.jsx)(l.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: b.intl.format(b.t.jULEDr, {
                                      numberOfUsers: o + O < n.length ? O : n.length - o,
                                  }),
                              }),
                          }),
                      })
                    : null,
            ],
        }),
    });
}
function S() {
    let e = (0, s.Wu)([f.Z], () => f.Z.getBlockedIDs());
    return (0, r.jsx)(T, {
        setting: g.s6.BLOCKED_USERS,
        userIds: e,
        listType: "blocked",
    });
}
function A() {
    let e = (0, s.Wu)([f.Z], () => f.Z.getIgnoredIDs());
    return (0, r.jsx)(T, {
        setting: g.s6.IGNORED_USERS,
        userIds: e,
        listType: "ignored",
    });
}
function C() {
    return (0, r.jsxs)(h.U, {
        setting: g.s6.RESTRICTED_USERS,
        scrollPosition: m.FY.RESTRICTED_ACCOUNTS,
        scrollHighlightDelay: 900,
        children: [
            (0, r.jsx)(h.H, {
                header: b.intl.string(b.t["3wRort"]),
                description: b.intl.format(b.t["0aNQo9"], {
                    helpArticle: p.Z.getArticleURL(E.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE),
                }),
            }),
            (0, r.jsx)(S, {}),
            (0, r.jsx)(A, {}),
        ],
    });
}
