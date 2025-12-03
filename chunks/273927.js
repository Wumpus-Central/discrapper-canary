n.d(t, {
    GF: () => T,
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
    p = n(594174),
    _ = n(63063),
    m = n(838436),
    h = n(526761),
    g = n(726985),
    E = n(981631),
    b = n(388032),
    y = n(602201);
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
                        color: "text-default",
                        children: i
                            ? b.intl.format(b.t["r91W/h"], { numberOfBlockedUsers: n })
                            : b.intl.format(b.t.rXUeOl, { numberOfIgnoredUsers: n }),
                    }),
                ],
            }),
        ],
    });
}
function S(e) {
    var t;
    let { userId: n, last: a } = e,
        _ = (0, s.e7)([f.Z], () => f.Z.isBlocked(n)),
        m = (0, s.e7)([p.default], () => p.default.getUser(n)),
        [h, g] = i.useState(!1),
        E = i.useCallback(() => {
            g(!0),
                _
                    ? c.Z.unblockUser(n).catch(() => {
                          g(!1);
                      })
                    : c.Z.unignoreUser(n, d.Z.USER_SETTINGS).catch(() => {
                          g(!1);
                      });
        }, [_, n]);
    return null == m
        ? null
        : (0, r.jsxs)("div", {
              className: o()(y.row, { [y.lastRow]: a }),
              children: [
                  (0, r.jsxs)("div", {
                      className: y.userInfo,
                      children: [
                          (0, r.jsx)(u.Z, {
                              user: m,
                              size: l.EFr.SIZE_40,
                          }),
                          (0, r.jsxs)("div", {
                              className: y.text,
                              children: [
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-md/semibold",
                                      color: "header-primary",
                                      children: null != (t = m.globalName) ? t : m.username,
                                  }),
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != m.globalName ? m.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, r.jsx)(l.Button, {
                      variant: "secondary",
                      text: b.intl.string(_ ? b.t.XyHpKH : b.t["8wXU9B"]),
                      onClick: E,
                      loading: h,
                  }),
              ],
          });
}
function I(e) {
    let { setting: t, userIds: n, listType: a } = e,
        [o, s] = i.useState(O),
        c = () => {
            s((e) => e + O);
        };
    return (0, r.jsx)(m.U, {
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
                            S,
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
function T() {
    let e = (0, s.Wu)([f.Z], () => f.Z.getBlockedIDs());
    return (0, r.jsx)(I, {
        setting: g.s6.BLOCKED_USERS,
        userIds: e,
        listType: "blocked",
    });
}
function A() {
    let e = (0, s.Wu)([f.Z], () => f.Z.getIgnoredIDs());
    return (0, r.jsx)(I, {
        setting: g.s6.IGNORED_USERS,
        userIds: e,
        listType: "ignored",
    });
}
function C() {
    return (0, r.jsxs)(m.U, {
        setting: g.s6.RESTRICTED_USERS,
        scrollPosition: h.FY.RESTRICTED_ACCOUNTS,
        scrollHighlightDelay: 900,
        children: [
            (0, r.jsx)(m.H, {
                header: b.intl.string(b.t["3wRort"]),
                description: b.intl.format(b.t["0aNQo9"], {
                    helpArticle: _.Z.getArticleURL(E.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE),
                }),
            }),
            (0, r.jsx)(T, {}),
            (0, r.jsx)(A, {}),
        ],
    });
}
