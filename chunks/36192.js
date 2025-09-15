n.d(t, { Z: () => C }), n(388685), n(953529), n(781311);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(544891),
    c = n(704215),
    u = n(755721),
    d = n(481060),
    f = n(497321),
    _ = n(100527),
    p = n(43015),
    h = n(136097),
    m = n(266454),
    g = n(246946),
    E = n(594174),
    b = n(460562),
    y = n(823379),
    O = n(313789),
    v = n(947889),
    I = n(981631),
    T = n(921944),
    S = n(388032),
    A = n(844642);
function C() {
    let e,
        { currentSession: t, otherSessions: n } = (0, h.h)(),
        a = (0, s.e7)([g.Z], () => g.Z.hidePersonalInformation),
        o = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
        [u, _] = i.useState(!1);
    i.useEffect(() => {
        (0, m.Q3)(c.z.AUTH_SESSIONS_NEW, { dismissAction: T.L.AUTO }), (0, p.fw)();
        let e = setTimeout(() => _(!0), 500);
        return () => {
            clearTimeout(e), (0, p.$Z)();
        };
    }, []);
    let b = () => {
            l.tn.post({
                url: I.ANM.AUTH_SESSION_NOTIFICATIONS_DEBUG,
                rejectWithError: !0,
            });
        },
        [y, O] = i.useState(new Set());
    return a
        ? (0, r.jsx)(f.Z, {})
        : ((e =
              null == t && 0 === n.length
                  ? u
                      ? (0, r.jsx)("div", {
                            className: A.loading,
                            children: (0, r.jsx)(d.$jN, {}),
                        })
                      : null
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)("div", {
                                className: A.sessions,
                                children: [
                                    (0, r.jsx)(d.hjN, {
                                        title: S.intl.string(S.t.LLS19v),
                                        titleClassName: A.groupTitle,
                                        children:
                                            null != t
                                                ? (0, r.jsx)(N, {
                                                      session: t,
                                                      current: !0,
                                                  })
                                                : null,
                                    }),
                                    !(n.length > 0) && (null == o ? void 0 : o.mfaEnabled)
                                        ? null
                                        : (0, r.jsxs)(d.hjN, {
                                              title: S.intl.string(S.t.xx1MWV),
                                              titleClassName: A.groupTitle,
                                              className: A.otherSessions,
                                              children: [
                                                  n.map((e) =>
                                                      (0, r.jsx)(
                                                          N,
                                                          {
                                                              session: e,
                                                              useChecks: y.size > 0,
                                                              checked: y.has(e.id_hash),
                                                              setChecked: (t) => {
                                                                  let n = new Set(y);
                                                                  t ? n.add(e.id_hash) : n.delete(e.id_hash), O(n);
                                                              },
                                                          },
                                                          e.id_hash,
                                                      ),
                                                  ),
                                                  (null == o ? void 0 : o.mfaEnabled) ? null : (0, r.jsx)(R, {}),
                                              ],
                                          }),
                                ],
                            }),
                            n.length > 0
                                ? (0, r.jsxs)(d.hjN, {
                                      title: y.size > 0 ? S.intl.string(S.t.mMEmRE) : S.intl.string(S.t.Vij32N),
                                      children: [
                                          (0, r.jsx)(d.R94, {
                                              type: d.geA.DESCRIPTION,
                                              children: S.intl.string(S.t.OTXyaW),
                                          }),
                                          (0, r.jsx)("div", {
                                              "data-button-hoisted-classname-wrapper": !0,
                                              className: A.logOutAllButton,
                                              children: (0, r.jsx)(d.zxk, {
                                                  variant: "critical-secondary",
                                                  size: "sm",
                                                  text:
                                                      y.size > 0
                                                          ? S.intl.formatToPlainString(S.t["83CPLi"], { count: y.size })
                                                          : S.intl.string(S.t.cLmmeX),
                                                  onClick: () => {
                                                      y.size > 0
                                                          ? (0, p.L$)(Array.from(y))
                                                          : (0, p.L$)(n.map((e) => e.id_hash));
                                                  },
                                              }),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    })),
          (0, r.jsxs)(d.hjN, {
              tag: d.RB0.H1,
              title: S.intl.string(S.t["+1h0k5"]),
              children: [
                  (0, r.jsx)(d.R94, {
                      type: d.geA.DESCRIPTION,
                      className: A.description,
                      children: S.intl.string(S.t.zZp619),
                  }),
                  (null == o ? void 0 : o.isStaff())
                      ? (0, r.jsxs)("div", {
                            className: A.tools,
                            children: [
                                (0, r.jsx)(d.Text, {
                                    className: A.toolsTitle,
                                    variant: "text-md/bold",
                                    children: "DEV TOOLS",
                                }),
                                (0, r.jsx)(d.Text, {
                                    className: A.toolsTitle,
                                    variant: "text-sm/normal",
                                    color: "text-danger",
                                    children: "These tools are only shown to staff users.",
                                }),
                                (0, r.jsx)(d.ua7, {
                                    text: "Triggers mobile and email suspicious session notifications for the current user",
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: n } = e;
                                        return (0, r.jsx)(d.zxk, {
                                            variant: "secondary",
                                            size: "sm",
                                            text: "Trigger Suspicious Sessions Notification",
                                            onClick: b,
                                            onMouseEnter: t,
                                            onMouseLeave: n,
                                        });
                                    },
                                }),
                            ],
                        })
                      : null,
                  e,
              ],
          }));
}
function N(e) {
    var t, n, i, a, s;
    let { session: l, current: c, setChecked: f, checked: _, useChecks: m } = e,
        g =
            null != (s = null == (t = l.client_info) ? void 0 : t.location)
                ? s
                : null == (n = l.client_info)
                  ? void 0
                  : n.ip,
        E = null == (i = l.client_info) ? void 0 : i.platform,
        { text: b, icon: O } = P(null == (a = l.client_info) ? void 0 : a.os),
        v = c ? null : (0, h.p)(l.approx_last_used_time),
        I = [b, E].filter(y.lm),
        T = [g, v].filter(y.lm);
    return (0, r.jsxs)(
        "div",
        {
            className: o()(A.session, c ? A.currentSession : null),
            children: [
                (0, r.jsx)("div", {
                    className: A.sessionIcon,
                    children: (0, r.jsx)(O, {
                        size: "md",
                        color: "currentColor",
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: A.sessionInfo,
                    children: [
                        (0, r.jsxs)(d.Text, {
                            variant: "eyebrow",
                            className: A.sessionInfoRow,
                            children: [
                                (0, r.jsx)("span", { children: I[0] }),
                                I.length > 1 &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)("span", { children: "\xB7" }),
                                            (0, r.jsx)("span", { children: I[1] }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, r.jsxs)(d.Text, {
                            variant: "text-sm/medium",
                            className: A.sessionInfoRow,
                            children: [
                                (0, r.jsx)("span", { children: T[0] }),
                                T.length > 1 &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)("span", { children: "\xB7" }),
                                            (0, r.jsx)("span", { children: T[1] }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
                c
                    ? null
                    : m
                      ? (0, r.jsx)("div", {
                            className: A.sessionCheckbox,
                            children: (0, r.jsx)(u.$q, {
                                onChange: (e, t) => {
                                    null == f || f(t);
                                },
                                value: _,
                            }),
                        })
                      : (0, r.jsx)(d.P3F, {
                            className: A.sessionMoreButton,
                            onClick: (e) => {
                                e.shiftKey ? null == f || f(!0) : (0, p.L$)(l.id_hash);
                            },
                            "aria-label": S.intl.string(S.t.E4MJNj),
                            children: (0, r.jsx)(d.Dio, {
                                size: "md",
                                color: "currentColor",
                            }),
                        }),
            ],
        },
        l.id_hash,
    );
}
function R() {
    let e = (0, v.Z)();
    return (0, r.jsxs)("div", {
        className: o()(A.session, A.legacySession),
        children: [
            (0, r.jsx)("div", {
                className: A.sessionIcon,
                children: (0, r.jsx)(b.Z, {
                    width: "32",
                    height: "32",
                }),
            }),
            (0, r.jsxs)("div", {
                className: A.sessionInfo,
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: "eyebrow",
                        className: A.sessionInfoRow,
                        color: "text-muted",
                        children: (0, r.jsx)("span", { children: S.intl.string(S.t.iUa0sr) }),
                    }),
                    (0, r.jsx)(d.Text, {
                        variant: "text-sm/medium",
                        className: A.sessionInfoRow,
                        color: "text-muted",
                        children: (0, r.jsx)("span", {
                            children: S.intl.format(S.t["044+8v"], {
                                onClick: () =>
                                    e(O.n.ACCOUNT_PANEL, {
                                        section: I.oAB.ACCOUNT,
                                        analyticsLocations: [_.Z.USER_SETTINGS_SESSIONS],
                                    }),
                            }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
function P(e) {
    switch (null == e ? void 0 : e.toLowerCase().trim()) {
        case null:
        case void 0:
        case "":
            return {
                text: S.intl.string(S.t.cDHCNT),
                icon: d.pzj,
            };
        case "ios":
        case "android":
            return {
                text: e,
                icon: d.AtH,
            };
        default:
            return {
                text: e,
                icon: d.pzj,
            };
    }
}
