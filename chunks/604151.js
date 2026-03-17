n.d(t, { Ay: () => N, LP: () => f, nK: () => b });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(49229),
    c = n(730134),
    u = n(793574),
    _ = n(994500),
    m = n(287809),
    g = n(975571),
    A = n(871930),
    h = n(531525),
    x = n(652215),
    p = n(985018),
    T = n(193291);
function E(e) {
    let { listType: t, numberOfUsers: n } = e,
        s = "blocked" === t;
    return (0, i.jsxs)("div", {
        className: T.wx,
        children: [
            (0, i.jsx)("div", { className: T.zc, children: s ? (0, i.jsx)(o.KTN, {}) : (0, i.jsx)(o.G3N, {}) }),
            (0, i.jsxs)("div", {
                className: T.Qq,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: p.intl.string(s ? p.t.PFOUKW : p.t["93ZDWE"]),
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: s
                            ? p.intl.format(p.t["r91W/h"], { numberOfBlockedUsers: n })
                            : p.intl.format(p.t.rXUeOl, { numberOfIgnoredUsers: n }),
                    }),
                ],
            }),
        ],
    });
}
function S(e) {
    let { userId: t, last: n } = e,
        l = (0, r.bG)([_.A], () => _.A.isBlocked(t)),
        g = (0, r.bG)([m.default], () => m.default.getUser(t)),
        [A, h] = s.useState(!1),
        x = s.useCallback(() => {
            h(!0),
                l
                    ? d.A.unblockUser(t).catch(() => {
                          h(!1);
                      })
                    : d.A.unignoreUser(t, u.A.USER_SETTINGS).catch(() => {
                          h(!1);
                      });
        }, [l, t]);
    return null == g
        ? null
        : (0, i.jsxs)("div", {
              className: a()(T.nM, { [T.fW]: n }),
              children: [
                  (0, i.jsxs)("div", {
                      className: T.eF,
                      children: [
                          (0, i.jsx)(c.A, { user: g, size: o._3J.SIZE_40 }),
                          (0, i.jsxs)("div", {
                              className: T.Qq,
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
                      text: p.intl.string(l ? p.t.XyHpKH : p.t["8wXU9B"]),
                      onClick: x,
                      loading: A,
                  }),
              ],
          });
}
function C(e) {
    let { setting: t, userIds: n, listType: l } = e,
        [a, r] = s.useState(5);
    return (0, i.jsx)(A.h, {
        setting: t,
        children: (0, i.jsxs)("div", {
            className: T.Nr,
            children: [
                (0, i.jsx)(E, { listType: l, numberOfUsers: n.length }),
                (0, i.jsx)("div", {
                    className: T.jS,
                    children: n.slice(0, a).map((e, t) => (0, i.jsx)(S, { userId: e, last: t === n.length - 1 }, e)),
                }),
                a < n.length
                    ? (0, i.jsx)("div", {
                          className: T.vM,
                          children: (0, i.jsx)(o.DUT, {
                              onClick: () => {
                                  r((e) => e + 5);
                              },
                              className: T.Qf,
                              children: (0, i.jsx)(o.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: p.intl.format(p.t.jULEDr, {
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
function f() {
    let e = (0, r.yK)([_.A], () => _.A.getBlockedIDs());
    return (0, i.jsx)(C, { setting: h.H.BLOCKED_USERS, userIds: e, listType: "blocked" });
}
function b() {
    let e = (0, r.yK)([_.A], () => _.A.getIgnoredIDs());
    return (0, i.jsx)(C, { setting: h.H.IGNORED_USERS, userIds: e, listType: "ignored" });
}
function N() {
    return (0, i.jsxs)(A.h, {
        setting: h.H.RESTRICTED_USERS,
        children: [
            (0, i.jsx)(A._, {
                header: p.intl.string(p.t["3wRort"]),
                description: p.intl.format(p.t["0aNQo9"], {
                    helpArticle: g.A.getArticleURL(x.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE),
                }),
            }),
            (0, i.jsx)(f, {}),
            (0, i.jsx)(b, {}),
        ],
    });
}
