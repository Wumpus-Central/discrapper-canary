n.d(t, { Z: () => C }), n(388685), n(953529), n(781311);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(544891),
    c = n(704215),
    u = n(481060),
    d = n(497321),
    f = n(100527),
    _ = n(43015),
    p = n(136097),
    h = n(266454),
    m = n(246946),
    g = n(594174),
    E = n(460562),
    b = n(823379),
    y = n(313789),
    O = n(10298),
    v = n(947889),
    I = n(981631),
    T = n(921944),
    S = n(388032),
    A = n(792058);
function C() {
    let e,
        { currentSession: t, otherSessions: n } = (0, p.h)(),
        a = (0, s.e7)([m.Z], () => m.Z.hidePersonalInformation),
        o = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
        [f, E] = i.useState(!1);
    i.useEffect(() => {
        (0, h.Q3)(c.z.AUTH_SESSIONS_NEW, { dismissAction: T.L.AUTO }), (0, _.fw)();
        let e = setTimeout(() => E(!0), 500);
        return () => {
            clearTimeout(e), (0, _.$Z)();
        };
    }, []);
    let b = () => {
            l.tn.post({
                url: I.ANM.AUTH_SESSION_NOTIFICATIONS_DEBUG,
                rejectWithError: !0,
            });
        },
        [y, v] = i.useState(new Set());
    return a
        ? (0, r.jsx)(d.Z, {})
        : ((e =
              null == t && 0 === n.length
                  ? f
                      ? (0, r.jsx)("div", {
                            className: A.loading,
                            children: (0, r.jsx)(u.$jN, {}),
                        })
                      : null
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)("div", {
                                className: A.sessions,
                                children: [
                                    (0, r.jsx)(u.hjN, {
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
                                        : (0, r.jsxs)(u.hjN, {
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
                                                                  t ? n.add(e.id_hash) : n.delete(e.id_hash), v(n);
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
                                ? (0, r.jsxs)(u.hjN, {
                                      title: y.size > 0 ? S.intl.string(S.t.mMEmRE) : S.intl.string(S.t.Vij32N),
                                      children: [
                                          (0, r.jsx)(u.R94, {
                                              type: u.geA.DESCRIPTION,
                                              children: S.intl.string(S.t.OTXyaW),
                                          }),
                                          (0, r.jsx)("div", {
                                              "data-button-hoisted-classname-wrapper": !0,
                                              className: A.logOutAllButton,
                                              children: (0, r.jsx)(u.zxk, {
                                                  variant: "critical-secondary",
                                                  size: "sm",
                                                  text:
                                                      y.size > 0
                                                          ? S.intl.formatToPlainString(S.t["83CPLi"], { count: y.size })
                                                          : S.intl.string(S.t.cLmmeX),
                                                  onClick: () => {
                                                      y.size > 0
                                                          ? (0, _.L$)(Array.from(y))
                                                          : (0, _.L$)(n.map((e) => e.id_hash));
                                                  },
                                              }),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    })),
          (0, r.jsxs)(O.N, {
              header: S.intl.string(S.t["+1h0k5"]),
              children: [
                  (0, r.jsx)(u.R94, {
                      type: u.geA.DESCRIPTION,
                      className: A.description,
                      children: S.intl.string(S.t.zZp619),
                  }),
                  (null == o ? void 0 : o.isStaff())
                      ? (0, r.jsxs)("div", {
                            className: A.tools,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    className: A.toolsTitle,
                                    variant: "text-md/bold",
                                    children: "DEV TOOLS",
                                }),
                                (0, r.jsx)(u.Text, {
                                    className: A.toolsTitle,
                                    variant: "text-sm/normal",
                                    color: "text-danger",
                                    children: "These tools are only shown to staff users.",
                                }),
                                (0, r.jsx)(u.ua7, {
                                    text: "Triggers mobile and email suspicious session notifications for the current user",
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: n } = e;
                                        return (0, r.jsx)(u.zxk, {
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
    let { session: l, current: c, setChecked: d, checked: f, useChecks: h } = e,
        m =
            null != (s = null == (t = l.client_info) ? void 0 : t.location)
                ? s
                : null == (n = l.client_info)
                  ? void 0
                  : n.ip,
        g = null == (i = l.client_info) ? void 0 : i.platform,
        { text: E, icon: y } = P(null == (a = l.client_info) ? void 0 : a.os),
        O = c ? null : (0, p.p)(l.approx_last_used_time),
        v = [E, g].filter(b.lm),
        I = [m, O].filter(b.lm);
    return (0, r.jsxs)(
        "div",
        {
            className: o()(A.session, c ? A.currentSession : null),
            children: [
                (0, r.jsx)("div", {
                    className: A.sessionIcon,
                    children: (0, r.jsx)(y, {
                        size: "md",
                        color: "currentColor",
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: A.sessionInfo,
                    children: [
                        (0, r.jsxs)(u.Text, {
                            variant: "eyebrow",
                            className: A.sessionInfoRow,
                            children: [
                                (0, r.jsx)("span", { children: v[0] }),
                                v.length > 1 &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)("span", { children: "\xB7" }),
                                            (0, r.jsx)("span", { children: v[1] }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, r.jsxs)(u.Text, {
                            variant: "text-sm/medium",
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
                    ],
                }),
                c
                    ? null
                    : h
                      ? (0, r.jsx)("div", {
                            className: A.sessionCheckbox,
                            children: (0, r.jsx)(u.XZJ, {
                                onChange: (e) => {
                                    null == d || d(e);
                                },
                                checked: f,
                            }),
                        })
                      : (0, r.jsx)(u.P3F, {
                            className: A.sessionMoreButton,
                            onClick: (e) => {
                                e.shiftKey ? null == d || d(!0) : (0, _.L$)(l.id_hash);
                            },
                            "aria-label": S.intl.string(S.t.E4MJNj),
                            children: (0, r.jsx)(u.Dio, {
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
                children: (0, r.jsx)(E.Z, {
                    width: "32",
                    height: "32",
                }),
            }),
            (0, r.jsxs)("div", {
                className: A.sessionInfo,
                children: [
                    (0, r.jsx)(u.Text, {
                        variant: "eyebrow",
                        className: A.sessionInfoRow,
                        color: "text-muted",
                        children: (0, r.jsx)("span", { children: S.intl.string(S.t.iUa0sr) }),
                    }),
                    (0, r.jsx)(u.Text, {
                        variant: "text-sm/medium",
                        className: A.sessionInfoRow,
                        color: "text-muted",
                        children: (0, r.jsx)("span", {
                            children: S.intl.format(S.t["044+8v"], {
                                onClick: () =>
                                    e(y.n.ACCOUNT_PANEL, {
                                        section: I.oAB.ACCOUNT,
                                        analyticsLocations: [f.Z.USER_SETTINGS_SESSIONS],
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
                icon: u.pzj,
            };
        case "ios":
        case "android":
            return {
                text: e,
                icon: u.AtH,
            };
        default:
            return {
                text: e,
                icon: u.pzj,
            };
    }
}
