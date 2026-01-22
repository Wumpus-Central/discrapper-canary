n.d(t, {
    Ay: () => C,
    LP: () => I,
    nK: () => T,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(49229),
    u = n(730134),
    d = n(793574),
    f = n(994500),
    p = n(287809),
    _ = n(975571),
    h = n(871930),
    m = n(355097),
    g = n(531525),
    E = n(652215),
    b = n(985018),
    y = n(193291);
let O = 5;

function A(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, r.jsxs)("div", {
        className: y.wx,
        children: [
            (0, r.jsx)("div", {
                className: y.zc,
                children: i ? (0, r.jsx)(l.KTN, {}) : (0, r.jsx)(l.G3N, {}),
            }),
            (0, r.jsxs)("div", {
                className: y.Qq,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: b.intl.string(i ? b.t.PFOUKW : b.t["93ZDWE"]),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: i
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

function v(e) {
    var t;
    let { userId: n, last: a } = e,
        _ = (0, o.bG)([f.A], () => f.A.isBlocked(n)),
        h = (0, o.bG)([p.default], () => p.default.getUser(n)),
        [m, g] = i.useState(!1),
        E = i.useCallback(() => {
            g(!0),
                _
                    ? c.A.unblockUser(n).catch(() => {
                          g(!1);
                      })
                    : c.A.unignoreUser(n, d.A.USER_SETTINGS).catch(() => {
                          g(!1);
                      });
        }, [_, n]);
    return null == h
        ? null
        : (0, r.jsxs)("div", {
              className: s()(y.nM, {
                  [y.fW]: a,
              }),
              children: [
                  (0, r.jsxs)("div", {
                      className: y.eF,
                      children: [
                          (0, r.jsx)(u.A, {
                              user: h,
                              size: l._3J.SIZE_40,
                          }),
                          (0, r.jsxs)("div", {
                              className: y.Qq,
                              children: [
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: null != (t = h.globalName) ? t : h.username,
                                  }),
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != h.globalName ? h.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, r.jsx)(l.Button, {
                      variant: "secondary",
                      text: b.intl.string(_ ? b.t.XyHpKH : b.t["8wXU9B"]),
                      onClick: E,
                      loading: m,
                  }),
              ],
          });
}

function S(e) {
    let { setting: t, userIds: n, listType: a } = e,
        [s, o] = i.useState(O),
        c = () => {
            o((e) => e + O);
        };
    return (0, r.jsx)(h.h, {
        setting: t,
        children: (0, r.jsxs)("div", {
            className: y.Nr,
            children: [
                (0, r.jsx)(A, {
                    listType: a,
                    numberOfUsers: n.length,
                }),
                (0, r.jsx)("div", {
                    className: y.jS,
                    children: n.slice(0, s).map((e, t) =>
                        (0, r.jsx)(
                            v,
                            {
                                userId: e,
                                last: t === n.length - 1,
                            },
                            e,
                        ),
                    ),
                }),
                s < n.length
                    ? (0, r.jsx)("div", {
                          className: y.vM,
                          children: (0, r.jsx)(l.DUT, {
                              onClick: c,
                              className: y.Qf,
                              children: (0, r.jsx)(l.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: b.intl.format(b.t.jULEDr, {
                                      numberOfUsers: s + O < n.length ? O : n.length - s,
                                  }),
                              }),
                          }),
                      })
                    : null,
            ],
        }),
    });
}

function I() {
    let e = (0, o.yK)([f.A], () => f.A.getBlockedIDs());
    return (0, r.jsx)(S, {
        setting: g.H.BLOCKED_USERS,
        userIds: e,
        listType: "blocked",
    });
}

function T() {
    let e = (0, o.yK)([f.A], () => f.A.getIgnoredIDs());
    return (0, r.jsx)(S, {
        setting: g.H.IGNORED_USERS,
        userIds: e,
        listType: "ignored",
    });
}

function C() {
    return (0, r.jsxs)(h.h, {
        setting: g.H.RESTRICTED_USERS,
        scrollPosition: m.d1.RESTRICTED_ACCOUNTS,
        scrollHighlightDelay: 900,
        children: [
            (0, r.jsx)(h._, {
                header: b.intl.string(b.t["3wRort"]),
                description: b.intl.format(b.t["0aNQo9"], {
                    helpArticle: _.A.getArticleURL(E.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE),
                }),
            }),
            (0, r.jsx)(I, {}),
            (0, r.jsx)(T, {}),
        ],
    });
}
