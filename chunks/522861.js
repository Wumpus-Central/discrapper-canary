n.d(t, { LP: () => E, nK: () => f });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(49229),
    c = n(730134),
    u = n(793574),
    m = n(994500),
    _ = n(287809);
n(975571);
var g = n(106148);
n(652215);
var A = n(985018),
    x = n(762765);
function p(e) {
    let { listType: t, numberOfUsers: n } = e,
        s = "blocked" === t;
    return (0, i.jsxs)("div", {
        className: x.wx,
        children: [
            (0, i.jsx)("div", { className: x.zc, children: s ? (0, i.jsx)(o.KTN, {}) : (0, i.jsx)(o.G3N, {}) }),
            (0, i.jsxs)("div", {
                className: x.Qq,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: A.intl.string(s ? A.t.PFOUKW : A.t["93ZDWE"]),
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: s
                            ? A.intl.format(A.t["r91W/h"], { numberOfBlockedUsers: n })
                            : A.intl.format(A.t.rXUeOl, { numberOfIgnoredUsers: n }),
                    }),
                ],
            }),
        ],
    });
}
function h(e) {
    let { userId: t, last: n } = e,
        l = (0, r.bG)([m.A], () => m.A.isBlocked(t)),
        g = (0, r.bG)([_.default], () => _.default.getUser(t)),
        [p, h] = s.useState(!1),
        T = s.useCallback(() => {
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
              className: a()(x.nM, { [x.fW]: n }),
              children: [
                  (0, i.jsxs)("div", {
                      className: x.eF,
                      children: [
                          (0, i.jsx)(c.A, { user: g, size: o._3J.SIZE_40 }),
                          (0, i.jsxs)("div", {
                              className: x.Qq,
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
                      text: A.intl.string(l ? A.t.XyHpKH : A.t["8wXU9B"]),
                      onClick: T,
                      loading: p,
                  }),
              ],
          });
}
function T(e) {
    let { userIds: t, listType: n } = e,
        [l, a] = s.useState(5);
    return (0, i.jsx)(g.h, {
        children: (0, i.jsxs)("div", {
            className: x.Nr,
            children: [
                (0, i.jsx)(p, { listType: n, numberOfUsers: t.length }),
                (0, i.jsx)("div", {
                    className: x.jS,
                    children: t.slice(0, l).map((e, n) => (0, i.jsx)(h, { userId: e, last: n === t.length - 1 }, e)),
                }),
                l < t.length
                    ? (0, i.jsx)("div", {
                          className: x.vM,
                          children: (0, i.jsx)(o.DUT, {
                              onClick: () => {
                                  a((e) => e + 5);
                              },
                              className: x.Qf,
                              children: (0, i.jsx)(o.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: A.intl.format(A.t.jULEDr, {
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
function E() {
    let e = (0, r.yK)([m.A], () => m.A.getBlockedIDs());
    return (0, i.jsx)(T, { userIds: e, listType: "blocked" });
}
function f() {
    let e = (0, r.yK)([m.A], () => m.A.getIgnoredIDs());
    return (0, i.jsx)(T, { userIds: e, listType: "ignored" });
}
