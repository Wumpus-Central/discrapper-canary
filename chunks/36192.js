n.d(t, { Z: () => T }), n(388685), n(953529), n(781311);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(544891),
    c = n(28664),
    u = n(481060),
    d = n(497321),
    f = n(100527),
    p = n(43015),
    _ = n(136097),
    m = n(246946),
    h = n(594174),
    g = n(460562),
    E = n(823379),
    b = n(313789),
    y = n(10298),
    O = n(518596),
    v = n(981631),
    S = n(388032),
    I = n(844642);
function T() {
    let e,
        { currentSession: t, otherSessions: n } = (0, _.h)(),
        a = (0, s.e7)([m.Z], () => m.Z.hidePersonalInformation),
        o = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        [f, g] = i.useState(!1);
    i.useEffect(() => {
        (0, p.fw)();
        let e = setTimeout(() => g(!0), 500);
        return () => {
            clearTimeout(e), (0, p.$Z)();
        };
    }, []);
    let E = () => {
            l.tn.post({
                url: v.ANM.AUTH_SESSION_NOTIFICATIONS_DEBUG,
                rejectWithError: !0,
            });
        },
        [b, O] = i.useState(new Set());
    return a
        ? (0, r.jsx)(d.Z, {})
        : ((e =
              null == t && 0 === n.length
                  ? f
                      ? (0, r.jsx)("div", {
                            className: I.loading,
                            children: (0, r.jsx)(u.$jN, {}),
                        })
                      : null
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)(u.Kqy, {
                                gap: 24,
                                className: I.sessions,
                                children: [
                                    (0, r.jsx)(u.C3N, {
                                        label: S.intl.string(S.t.LLS19o),
                                        children:
                                            null != t
                                                ? (0, r.jsx)(C, {
                                                      session: t,
                                                      current: !0,
                                                  })
                                                : null,
                                    }),
                                    !(n.length > 0) && (null == o ? void 0 : o.mfaEnabled)
                                        ? null
                                        : (0, r.jsxs)(u.C3N, {
                                              label: S.intl.string(S.t.xx1MWc),
                                              children: [
                                                  n.map((e) =>
                                                      (0, r.jsx)(
                                                          C,
                                                          {
                                                              session: e,
                                                              useChecks: b.size > 0,
                                                              checked: b.has(e.id_hash),
                                                              setChecked: (t) => {
                                                                  let n = new Set(b);
                                                                  t ? n.add(e.id_hash) : n.delete(e.id_hash), O(n);
                                                              },
                                                          },
                                                          e.id_hash,
                                                      ),
                                                  ),
                                                  (null == o ? void 0 : o.mfaEnabled) ? null : (0, r.jsx)(A, {}),
                                              ],
                                          }),
                                ],
                            }),
                            n.length > 0
                                ? (0, r.jsx)(u.gNt, {
                                      label: b.size > 0 ? S.intl.string(S.t.mMEmRO) : S.intl.string(S.t.Vij32M),
                                      description: S.intl.string(S.t.OTXyaf),
                                      children: (0, r.jsx)("div", {
                                          "data-button-hoisted-classname-wrapper": !0,
                                          className: I.logOutAllButton,
                                          children: (0, r.jsx)(u.Button, {
                                              variant: "critical-secondary",
                                              size: "sm",
                                              text:
                                                  b.size > 0
                                                      ? S.intl.formatToPlainString(S.t["83CPLj"], { count: b.size })
                                                      : S.intl.string(S.t.cLmmeY),
                                              onClick: () => {
                                                  b.size > 0
                                                      ? (0, p.L$)(Array.from(b))
                                                      : (0, p.L$)(n.map((e) => e.id_hash));
                                              },
                                          }),
                                      }),
                                  })
                                : null,
                        ],
                    })),
          (0, r.jsxs)(y.N, {
              header: S.intl.string(S.t["+1h0k/"]),
              children: [
                  (0, r.jsx)(u.Text, {
                      variant: "text-sm/normal",
                      className: I.description,
                      children: S.intl.string(S.t.zZp618),
                  }),
                  (null == o ? void 0 : o.isStaff())
                      ? (0, r.jsxs)("div", {
                            className: I.tools,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    className: I.toolsTitle,
                                    variant: "text-md/bold",
                                    children: "DEV TOOLS",
                                }),
                                (0, r.jsx)(u.Text, {
                                    className: I.toolsTitle,
                                    variant: "text-sm/normal",
                                    color: "text-feedback-critical",
                                    children: "These tools are only shown to staff users.",
                                }),
                                (0, r.jsx)(c.u, {
                                    text: "Triggers mobile and email suspicious session notifications for the current user",
                                    children: (0, r.jsx)(u.Button, {
                                        variant: "secondary",
                                        size: "sm",
                                        text: "Trigger Suspicious Sessions Notification",
                                        onClick: E,
                                    }),
                                }),
                            ],
                        })
                      : null,
                  e,
              ],
          }));
}
function C(e) {
    var t, n, i, a, s;
    let { session: l, current: c, setChecked: d, checked: f, useChecks: m } = e,
        h =
            null != (s = null == (t = l.client_info) ? void 0 : t.location)
                ? s
                : null == (n = l.client_info)
                  ? void 0
                  : n.ip,
        g = null == (i = l.client_info) ? void 0 : i.platform,
        { text: b, icon: y } = N(null == (a = l.client_info) ? void 0 : a.os),
        O = c ? null : (0, _.p)(l.approx_last_used_time),
        v = [b, g].filter(E.lm),
        T = [h, O].filter(E.lm);
    return (0, r.jsxs)(
        "div",
        {
            className: o()(I.session, c ? I.currentSession : null),
            children: [
                (0, r.jsx)("div", {
                    className: I.sessionIcon,
                    children: (0, r.jsx)(y, {
                        size: "md",
                        color: "currentColor",
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: I.sessionInfo,
                    children: [
                        (0, r.jsxs)(u.Text, {
                            variant: "eyebrow",
                            className: I.sessionInfoRow,
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
                            className: I.sessionInfoRow,
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
                            className: I.sessionCheckbox,
                            children: (0, r.jsx)(u.Cnq, {
                                onChange: (e) => {
                                    null == d || d(e);
                                },
                                checked: f,
                            }),
                        })
                      : (0, r.jsx)(u.P3F, {
                            className: I.sessionMoreButton,
                            onClick: (e) => {
                                e.shiftKey ? null == d || d(!0) : (0, p.L$)(l.id_hash);
                            },
                            "aria-label": S.intl.string(S.t.E4MJNt),
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
function A() {
    return (0, r.jsxs)("div", {
        className: o()(I.session, I.legacySession),
        children: [
            (0, r.jsx)("div", {
                className: I.sessionIcon,
                children: (0, r.jsx)(g.Z, {
                    width: "32",
                    height: "32",
                }),
            }),
            (0, r.jsxs)("div", {
                className: I.sessionInfo,
                children: [
                    (0, r.jsx)(u.Text, {
                        variant: "eyebrow",
                        className: I.sessionInfoRow,
                        color: "text-muted",
                        children: (0, r.jsx)("span", { children: S.intl.string(S.t.iUa0sn) }),
                    }),
                    (0, r.jsx)(u.Text, {
                        variant: "text-sm/medium",
                        className: I.sessionInfoRow,
                        color: "text-muted",
                        children: (0, r.jsx)("span", {
                            children: S.intl.format(S.t["044+8i"], {
                                onClick: () =>
                                    (0, O.openUserSettings)(b.n.ACCOUNT_PANEL, {
                                        section: v.oAB.ACCOUNT,
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
function N(e) {
    switch (null == e ? void 0 : e.toLowerCase().trim()) {
        case null:
        case void 0:
        case "":
            return {
                text: S.intl.string(S.t.cDHCNY),
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
