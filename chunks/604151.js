n.d(t, { Ay: () => N, LP: () => C, nK: () => f });
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
    A = n(106148),
    x = n(652215),
    h = n(985018),
    p = n(193291);
function T(e) {
    let { listType: t, numberOfUsers: n } = e,
        s = "blocked" === t;
    return (0, i.jsxs)("div", {
        className: p.wx,
        children: [
            (0, i.jsx)("div", { className: p.zc, children: s ? (0, i.jsx)(o.KTN, {}) : (0, i.jsx)(o.G3N, {}) }),
            (0, i.jsxs)("div", {
                className: p.Qq,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: h.intl.string(s ? h.t.PFOUKW : h.t["93ZDWE"]),
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: s
                            ? h.intl.format(h.t["r91W/h"], { numberOfBlockedUsers: n })
                            : h.intl.format(h.t.rXUeOl, { numberOfIgnoredUsers: n }),
                    }),
                ],
            }),
        ],
    });
}
function E(e) {
    let { userId: t, last: n } = e,
        l = (0, r.bG)([_.A], () => _.A.isBlocked(t)),
        g = (0, r.bG)([m.default], () => m.default.getUser(t)),
        [A, x] = s.useState(!1),
        T = s.useCallback(() => {
            x(!0),
                l
                    ? d.A.unblockUser(t).catch(() => {
                          x(!1);
                      })
                    : d.A.unignoreUser(t, u.A.USER_SETTINGS).catch(() => {
                          x(!1);
                      });
        }, [l, t]);
    return null == g
        ? null
        : (0, i.jsxs)("div", {
              className: a()(p.nM, { [p.fW]: n }),
              children: [
                  (0, i.jsxs)("div", {
                      className: p.eF,
                      children: [
                          (0, i.jsx)(c.A, { user: g, size: o._3J.SIZE_40 }),
                          (0, i.jsxs)("div", {
                              className: p.Qq,
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
                      text: h.intl.string(l ? h.t.XyHpKH : h.t["8wXU9B"]),
                      onClick: T,
                      loading: A,
                  }),
              ],
          });
}
function S(e) {
    let { userIds: t, listType: n } = e,
        [l, a] = s.useState(5);
    return (0, i.jsx)(A.h, {
        children: (0, i.jsxs)("div", {
            className: p.Nr,
            children: [
                (0, i.jsx)(T, { listType: n, numberOfUsers: t.length }),
                (0, i.jsx)("div", {
                    className: p.jS,
                    children: t.slice(0, l).map((e, n) => (0, i.jsx)(E, { userId: e, last: n === t.length - 1 }, e)),
                }),
                l < t.length
                    ? (0, i.jsx)("div", {
                          className: p.vM,
                          children: (0, i.jsx)(o.DUT, {
                              onClick: () => {
                                  a((e) => e + 5);
                              },
                              className: p.Qf,
                              children: (0, i.jsx)(o.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: h.intl.format(h.t.jULEDr, {
                                      numberOfUsers: l + 5 < t.length ? 5 : t.length - l,
                                  }),
                              }),
                          }),
                      })
                    : null,
            ],
        }),
    });
}
function C() {
    let e = (0, r.yK)([_.A], () => _.A.getBlockedIDs());
    return (0, i.jsx)(S, { userIds: e, listType: "blocked" });
}
function f() {
    let e = (0, r.yK)([_.A], () => _.A.getIgnoredIDs());
    return (0, i.jsx)(S, { userIds: e, listType: "ignored" });
}
function N() {
    return (0, i.jsxs)(A.h, {
        children: [
            (0, i.jsx)(A._, {
                header: h.intl.string(h.t["3wRort"]),
                description: h.intl.format(h.t["0aNQo9"], {
                    helpArticle: g.A.getArticleURL(x.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE),
                }),
            }),
            (0, i.jsx)(C, {}),
            (0, i.jsx)(f, {}),
        ],
    });
}
