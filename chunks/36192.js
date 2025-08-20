n.d(t, { Z: () => S }), n(388685), n(953529), n(781311);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(544891),
    c = n(704215),
    u = n(481060),
    d = n(230711),
    f = n(497321),
    _ = n(100527),
    p = n(43015),
    h = n(136097),
    m = n(266454),
    g = n(246946),
    E = n(594174),
    b = n(460562),
    y = n(823379),
    O = n(981631),
    v = n(921944),
    I = n(388032),
    T = n(844642);
function S() {
    let e,
        { currentSession: t, otherSessions: n } = (0, h.h)(),
        a = (0, s.e7)([g.Z], () => g.Z.hidePersonalInformation),
        o = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
        [d, _] = i.useState(!1);
    i.useEffect(() => {
        (0, m.Q3)(c.z.AUTH_SESSIONS_NEW, { dismissAction: v.L.AUTO }), (0, p.fw)();
        let e = setTimeout(() => _(!0), 500);
        return () => {
            clearTimeout(e), (0, p.$Z)();
        };
    }, []);
    let b = () => {
            l.tn.post({
                url: O.ANM.AUTH_SESSION_NOTIFICATIONS_DEBUG,
                rejectWithError: !0,
            });
        },
        [y, S] = i.useState(new Set());
    return a
        ? (0, r.jsx)(f.Z, {})
        : ((e =
              null == t && 0 === n.length
                  ? d
                      ? (0, r.jsx)("div", {
                            className: T.loading,
                            children: (0, r.jsx)(u.$jN, {}),
                        })
                      : null
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)("div", {
                                className: T.sessions,
                                children: [
                                    (0, r.jsx)(u.hjN, {
                                        tag: u.RB0.H5,
                                        title: I.intl.string(I.t.LLS19v),
                                        titleClassName: T.groupTitle,
                                        children:
                                            null != t
                                                ? (0, r.jsx)(A, {
                                                      session: t,
                                                      current: !0,
                                                  })
                                                : null,
                                    }),
                                    !(n.length > 0) && (null == o ? void 0 : o.mfaEnabled)
                                        ? null
                                        : (0, r.jsxs)(u.hjN, {
                                              tag: u.RB0.H5,
                                              title: I.intl.string(I.t.xx1MWV),
                                              titleClassName: T.groupTitle,
                                              className: T.otherSessions,
                                              children: [
                                                  n.map((e) =>
                                                      (0, r.jsx)(
                                                          A,
                                                          {
                                                              session: e,
                                                              useChecks: y.size > 0,
                                                              checked: y.has(e.id_hash),
                                                              setChecked: (t) => {
                                                                  let n = new Set(y);
                                                                  t ? n.add(e.id_hash) : n.delete(e.id_hash), S(n);
                                                              },
                                                          },
                                                          e.id_hash,
                                                      ),
                                                  ),
                                                  (null == o ? void 0 : o.mfaEnabled) ? null : (0, r.jsx)(C, {}),
                                              ],
                                          }),
                                ],
                            }),
                            n.length > 0
                                ? (0, r.jsxs)(u.hjN, {
                                      tag: u.RB0.H5,
                                      title: y.size > 0 ? I.intl.string(I.t.mMEmRE) : I.intl.string(I.t.Vij32N),
                                      children: [
                                          (0, r.jsx)(u.R94, {
                                              type: u.geA.DESCRIPTION,
                                              children: I.intl.string(I.t.OTXyaW),
                                          }),
                                          (0, r.jsx)("div", {
                                              "data-button-hoisted-classname-wrapper": !0,
                                              className: T.logOutAllButton,
                                              children: (0, r.jsx)(u.zxk, {
                                                  variant: "critical-secondary",
                                                  size: "sm",
                                                  text:
                                                      y.size > 0
                                                          ? I.intl.formatToPlainString(I.t["83CPLi"], { count: y.size })
                                                          : I.intl.string(I.t.cLmmeX),
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
          (0, r.jsxs)(u.hjN, {
              tag: u.RB0.H1,
              title: I.intl.string(I.t["+1h0k5"]),
              children: [
                  (0, r.jsx)(u.R94, {
                      type: u.geA.DESCRIPTION,
                      className: T.description,
                      children: I.intl.string(I.t.zZp619),
                  }),
                  (null == o ? void 0 : o.isStaff())
                      ? (0, r.jsxs)("div", {
                            className: T.tools,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    className: T.toolsTitle,
                                    variant: "text-md/bold",
                                    children: "DEV TOOLS",
                                }),
                                (0, r.jsx)(u.Text, {
                                    className: T.toolsTitle,
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
function A(e) {
    var t, n, i, a, s;
    let { session: l, current: c, setChecked: d, checked: f, useChecks: _ } = e,
        m =
            null != (s = null == (t = l.client_info) ? void 0 : t.location)
                ? s
                : null == (n = l.client_info)
                  ? void 0
                  : n.ip,
        g = null == (i = l.client_info) ? void 0 : i.platform,
        { text: E, icon: b } = N(null == (a = l.client_info) ? void 0 : a.os),
        O = c ? null : (0, h.p)(l.approx_last_used_time),
        v = [E, g].filter(y.lm),
        S = [m, O].filter(y.lm);
    return (0, r.jsxs)(
        "div",
        {
            className: o()(T.session, c ? T.currentSession : null),
            children: [
                (0, r.jsx)("div", {
                    className: T.sessionIcon,
                    children: (0, r.jsx)(b, {
                        size: "md",
                        color: "currentColor",
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: T.sessionInfo,
                    children: [
                        (0, r.jsxs)(u.Text, {
                            variant: "eyebrow",
                            className: T.sessionInfoRow,
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
                            className: T.sessionInfoRow,
                            children: [
                                (0, r.jsx)("span", { children: S[0] }),
                                S.length > 1 &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)("span", { children: "\xB7" }),
                                            (0, r.jsx)("span", { children: S[1] }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
                c
                    ? null
                    : _
                      ? (0, r.jsx)("div", {
                            className: T.sessionCheckbox,
                            children: (0, r.jsx)(u.XZJ, {
                                onChange: (e, t) => {
                                    null == d || d(t);
                                },
                                value: f,
                            }),
                        })
                      : (0, r.jsx)(u.P3F, {
                            className: T.sessionMoreButton,
                            onClick: (e) => {
                                e.shiftKey ? null == d || d(!0) : (0, p.L$)(l.id_hash);
                            },
                            "aria-label": I.intl.string(I.t.E4MJNj),
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
function C() {
    return (0, r.jsxs)("div", {
        className: o()(T.session, T.legacySession),
        children: [
            (0, r.jsx)("div", {
                className: T.sessionIcon,
                children: (0, r.jsx)(b.Z, {
                    width: "32",
                    height: "32",
                }),
            }),
            (0, r.jsxs)("div", {
                className: T.sessionInfo,
                children: [
                    (0, r.jsx)(u.Text, {
                        variant: "eyebrow",
                        className: T.sessionInfoRow,
                        color: "text-muted",
                        children: (0, r.jsx)("span", { children: I.intl.string(I.t.iUa0sr) }),
                    }),
                    (0, r.jsx)(u.Text, {
                        variant: "text-sm/medium",
                        className: T.sessionInfoRow,
                        color: "text-muted",
                        children: (0, r.jsx)("span", {
                            children: I.intl.format(I.t["044+8v"], {
                                onClick: () =>
                                    d.Z.setSection(O.oAB.ACCOUNT, null, {
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
function N(e) {
    switch (null == e ? void 0 : e.toLowerCase().trim()) {
        case null:
        case void 0:
        case "":
            return {
                text: I.intl.string(I.t.cDHCNT),
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
