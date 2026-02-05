n.d(t, { Ay: () => T, LP: () => b, nK: () => N });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(49229),
    c = n(730134),
    u = n(793574),
    h = n(994500),
    A = n(287809),
    g = n(975571),
    m = n(871930),
    p = n(355097),
    _ = n(531525),
    x = n(652215),
    f = n(985018),
    E = n(193291);
function C(e) {
    let { listType: t, numberOfUsers: n } = e,
        l = "blocked" === t;
    return (0, i.jsxs)("div", {
        className: E.wx,
        children: [
            (0, i.jsx)("div", { className: E.zc, children: l ? (0, i.jsx)(o.KTN, {}) : (0, i.jsx)(o.G3N, {}) }),
            (0, i.jsxs)("div", {
                className: E.Qq,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: f.intl.string(l ? f.t.PFOUKW : f.t["93ZDWE"]),
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: l
                            ? f.intl.format(f.t["r91W/h"], { numberOfBlockedUsers: n })
                            : f.intl.format(f.t.rXUeOl, { numberOfIgnoredUsers: n }),
                    }),
                ],
            }),
        ],
    });
}
function I(e) {
    let { userId: t, last: n } = e,
        s = (0, r.bG)([h.A], () => h.A.isBlocked(t)),
        g = (0, r.bG)([A.default], () => A.default.getUser(t)),
        [m, p] = l.useState(!1),
        _ = l.useCallback(() => {
            p(!0),
                s
                    ? d.A.unblockUser(t).catch(() => {
                          p(!1);
                      })
                    : d.A.unignoreUser(t, u.A.USER_SETTINGS).catch(() => {
                          p(!1);
                      });
        }, [s, t]);
    return null == g
        ? null
        : (0, i.jsxs)("div", {
              className: a()(E.nM, { [E.fW]: n }),
              children: [
                  (0, i.jsxs)("div", {
                      className: E.eF,
                      children: [
                          (0, i.jsx)(c.A, { user: g, size: o._3J.SIZE_40 }),
                          (0, i.jsxs)("div", {
                              className: E.Qq,
                              children: [
                                  (0, i.jsx)(o.Text, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: g.globalName ?? g.username,
                                  }),
                                  (0, i.jsx)(o.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != g.globalName ? g.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, i.jsx)(o.Button, {
                      variant: "secondary",
                      text: f.intl.string(s ? f.t.XyHpKH : f.t["8wXU9B"]),
                      onClick: _,
                      loading: m,
                  }),
              ],
          });
}
function S(e) {
    let { setting: t, userIds: n, listType: s } = e,
        [a, r] = l.useState(5);
    return (0, i.jsx)(m.h, {
        setting: t,
        children: (0, i.jsxs)("div", {
            className: E.Nr,
            children: [
                (0, i.jsx)(C, { listType: s, numberOfUsers: n.length }),
                (0, i.jsx)("div", {
                    className: E.jS,
                    children: n.slice(0, a).map((e, t) => (0, i.jsx)(I, { userId: e, last: t === n.length - 1 }, e)),
                }),
                a < n.length
                    ? (0, i.jsx)("div", {
                          className: E.vM,
                          children: (0, i.jsx)(o.DUT, {
                              onClick: () => {
                                  r((e) => e + 5);
                              },
                              className: E.Qf,
                              children: (0, i.jsx)(o.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: f.intl.format(f.t.jULEDr, {
                                      numberOfUsers: a + 5 < n.length ? 5 : n.length - a,
                                  }),
                              }),
                          }),
                      })
                    : null,
            ],
        }),
    });
}
function b() {
    let e = (0, r.yK)([h.A], () => h.A.getBlockedIDs());
    return (0, i.jsx)(S, { setting: _.H.BLOCKED_USERS, userIds: e, listType: "blocked" });
}
function N() {
    let e = (0, r.yK)([h.A], () => h.A.getIgnoredIDs());
    return (0, i.jsx)(S, { setting: _.H.IGNORED_USERS, userIds: e, listType: "ignored" });
}
function T() {
    return (0, i.jsxs)(m.h, {
        setting: _.H.RESTRICTED_USERS,
        scrollPosition: p.d1.RESTRICTED_ACCOUNTS,
        scrollHighlightDelay: 900,
        children: [
            (0, i.jsx)(m._, {
                header: f.intl.string(f.t["3wRort"]),
                description: f.intl.format(f.t["0aNQo9"], {
                    helpArticle: g.A.getArticleURL(x.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE),
                }),
            }),
            (0, i.jsx)(b, {}),
            (0, i.jsx)(N, {}),
        ],
    });
}
