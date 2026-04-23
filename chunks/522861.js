n.d(t, { LP: () => v, nK: () => N });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(428678),
    d = n(952270),
    u = n(834730),
    c = n(778712),
    g = n(821609),
    m = n(939249),
    _ = n(49229),
    A = n(730134),
    h = n(793574),
    p = n(994500),
    x = n(287809);
n(975571);
var E = n(106148);
n(652215);
var T = n(985018),
    S = n(741304);
function f(e) {
    let { listType: t, numberOfUsers: n } = e,
        s = "blocked" === t;
    return (0, i.jsxs)("div", {
        className: S.wx,
        children: [
            (0, i.jsx)("div", { className: S.zc, children: s ? (0, i.jsx)(o.K, {}) : (0, i.jsx)(d.G, {}) }),
            (0, i.jsxs)("div", {
                className: S.Qq,
                children: [
                    (0, i.jsx)(u.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: T.intl.string(s ? T.t.PFOUKW : T.t["93ZDWE"]),
                    }),
                    (0, i.jsx)(u.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: s
                            ? T.intl.format(T.t["r91W/h"], { numberOfBlockedUsers: n })
                            : T.intl.format(T.t.rXUeOl, { numberOfIgnoredUsers: n }),
                    }),
                ],
            }),
        ],
    });
}
function b(e) {
    let { userId: t, last: n } = e,
        l = (0, r.bG)([p.A], () => p.A.isBlocked(t)),
        o = (0, r.bG)([x.default], () => x.default.getUser(t)),
        [d, m] = s.useState(!1),
        E = s.useCallback(() => {
            m(!0),
                l
                    ? _.A.unblockUser(t).catch(() => {
                          m(!1);
                      })
                    : _.A.unignoreUser(t, h.A.USER_SETTINGS).catch(() => {
                          m(!1);
                      });
        }, [l, t]);
    return null == o
        ? null
        : (0, i.jsxs)("div", {
              className: a()(S.nM, { [S.fW]: n }),
              children: [
                  (0, i.jsxs)("div", {
                      className: S.eF,
                      children: [
                          (0, i.jsx)(A.A, { user: o, size: c._3.SIZE_40 }),
                          (0, i.jsxs)("div", {
                              className: S.Qq,
                              children: [
                                  (0, i.jsx)(u.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: o.globalName ?? o.username,
                                  }),
                                  (0, i.jsx)(u.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != o.globalName ? o.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, i.jsx)(g.$, {
                      variant: "secondary",
                      text: T.intl.string(l ? T.t.XyHpKH : T.t["8wXU9B"]),
                      onClick: E,
                      loading: d,
                  }),
              ],
          });
}
function C(e) {
    let { userIds: t, listType: n } = e,
        [l, a] = s.useState(5);
    return (0, i.jsx)(E.h, {
        children: (0, i.jsxs)("div", {
            className: S.Nr,
            children: [
                (0, i.jsx)(f, { listType: n, numberOfUsers: t.length }),
                (0, i.jsx)("div", {
                    className: S.jS,
                    children: t.slice(0, l).map((e, n) => (0, i.jsx)(b, { userId: e, last: n === t.length - 1 }, e)),
                }),
                l < t.length
                    ? (0, i.jsx)("div", {
                          className: S.vM,
                          children: (0, i.jsx)(m.D, {
                              onClick: () => {
                                  a((e) => e + 5);
                              },
                              className: S.Qf,
                              children: (0, i.jsx)(u.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: T.intl.format(T.t.jULEDr, {
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
function v() {
    let e = (0, r.yK)([p.A], () => p.A.getBlockedIDs());
    return (0, i.jsx)(C, { userIds: e, listType: "blocked" });
}
function N() {
    let e = (0, r.yK)([p.A], () => p.A.getIgnoredIDs());
    return (0, i.jsx)(C, { userIds: e, listType: "ignored" });
}
