n.d(t, { Z: () => N }), n(388685), n(953529), n(781311);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(544891),
    c = n(704215),
    u = n(28664),
    d = n(481060),
    f = n(497321),
    p = n(100527),
    _ = n(43015),
    m = n(136097),
    h = n(266454),
    g = n(246946),
    E = n(594174),
    b = n(460562),
    y = n(823379),
    O = n(313789),
    v = n(10298),
    S = n(518596),
    I = n(981631),
    T = n(921944),
    A = n(388032),
    C = n(844642);
function N() {
    let e,
        { currentSession: t, otherSessions: n } = (0, m.h)(),
        a = (0, s.e7)([g.Z], () => g.Z.hidePersonalInformation),
        o = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
        [p, b] = i.useState(!1);
    i.useEffect(() => {
        (0, h.Q3)(c.z.AUTH_SESSIONS_NEW, { dismissAction: T.L.AUTO }), (0, _.fw)();
        let e = setTimeout(() => b(!0), 500);
        return () => {
            clearTimeout(e), (0, _.$Z)();
        };
    }, []);
    let y = () => {
            l.tn.post({
                url: I.ANM.AUTH_SESSION_NOTIFICATIONS_DEBUG,
                rejectWithError: !0,
            });
        },
        [O, S] = i.useState(new Set());
    return a
        ? (0, r.jsx)(f.Z, {})
        : ((e =
              null == t && 0 === n.length
                  ? p
                      ? (0, r.jsx)("div", {
                            className: C.loading,
                            children: (0, r.jsx)(d.$jN, {}),
                        })
                      : null
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)(d.Kqy, {
                                gap: 24,
                                className: C.sessions,
                                children: [
                                    (0, r.jsx)(d.C3N, {
                                        label: A.intl.string(A.t.LLS19o),
                                        children:
                                            null != t
                                                ? (0, r.jsx)(P, {
                                                      session: t,
                                                      current: !0,
                                                  })
                                                : null,
                                    }),
                                    !(n.length > 0) && (null == o ? void 0 : o.mfaEnabled)
                                        ? null
                                        : (0, r.jsxs)(d.C3N, {
                                              label: A.intl.string(A.t.xx1MWc),
                                              children: [
                                                  n.map((e) =>
                                                      (0, r.jsx)(
                                                          P,
                                                          {
                                                              session: e,
                                                              useChecks: O.size > 0,
                                                              checked: O.has(e.id_hash),
                                                              setChecked: (t) => {
                                                                  let n = new Set(O);
                                                                  t ? n.add(e.id_hash) : n.delete(e.id_hash), S(n);
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
                                ? (0, r.jsx)(d.gNt, {
                                      label: O.size > 0 ? A.intl.string(A.t.mMEmRO) : A.intl.string(A.t.Vij32M),
                                      description: A.intl.string(A.t.OTXyaf),
                                      children: (0, r.jsx)("div", {
                                          "data-button-hoisted-classname-wrapper": !0,
                                          className: C.logOutAllButton,
                                          children: (0, r.jsx)(d.Button, {
                                              variant: "critical-secondary",
                                              size: "sm",
                                              text:
                                                  O.size > 0
                                                      ? A.intl.formatToPlainString(A.t["83CPLj"], { count: O.size })
                                                      : A.intl.string(A.t.cLmmeY),
                                              onClick: () => {
                                                  O.size > 0
                                                      ? (0, _.L$)(Array.from(O))
                                                      : (0, _.L$)(n.map((e) => e.id_hash));
                                              },
                                          }),
                                      }),
                                  })
                                : null,
                        ],
                    })),
          (0, r.jsxs)(v.N, {
              header: A.intl.string(A.t["+1h0k/"]),
              children: [
                  (0, r.jsx)(d.Text, {
                      variant: "text-sm/normal",
                      className: C.description,
                      children: A.intl.string(A.t.zZp618),
                  }),
                  (null == o ? void 0 : o.isStaff())
                      ? (0, r.jsxs)("div", {
                            className: C.tools,
                            children: [
                                (0, r.jsx)(d.Text, {
                                    className: C.toolsTitle,
                                    variant: "text-md/bold",
                                    children: "DEV TOOLS",
                                }),
                                (0, r.jsx)(d.Text, {
                                    className: C.toolsTitle,
                                    variant: "text-sm/normal",
                                    color: "text-feedback-critical",
                                    children: "These tools are only shown to staff users.",
                                }),
                                (0, r.jsx)(u.u, {
                                    text: "Triggers mobile and email suspicious session notifications for the current user",
                                    children: (0, r.jsx)(d.Button, {
                                        variant: "secondary",
                                        size: "sm",
                                        text: "Trigger Suspicious Sessions Notification",
                                        onClick: y,
                                    }),
                                }),
                            ],
                        })
                      : null,
                  e,
              ],
          }));
}
function P(e) {
    var t, n, i, a, s;
    let { session: l, current: c, setChecked: u, checked: f, useChecks: p } = e,
        h =
            null != (s = null == (t = l.client_info) ? void 0 : t.location)
                ? s
                : null == (n = l.client_info)
                  ? void 0
                  : n.ip,
        g = null == (i = l.client_info) ? void 0 : i.platform,
        { text: E, icon: b } = D(null == (a = l.client_info) ? void 0 : a.os),
        O = c ? null : (0, m.p)(l.approx_last_used_time),
        v = [E, g].filter(y.lm),
        S = [h, O].filter(y.lm);
    return (0, r.jsxs)(
        "div",
        {
            className: o()(C.session, c ? C.currentSession : null),
            children: [
                (0, r.jsx)("div", {
                    className: C.sessionIcon,
                    children: (0, r.jsx)(b, {
                        size: "md",
                        color: "currentColor",
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: C.sessionInfo,
                    children: [
                        (0, r.jsxs)(d.Text, {
                            variant: "eyebrow",
                            className: C.sessionInfoRow,
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
                        (0, r.jsxs)(d.Text, {
                            variant: "text-sm/medium",
                            className: C.sessionInfoRow,
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
                    : p
                      ? (0, r.jsx)("div", {
                            className: C.sessionCheckbox,
                            children: (0, r.jsx)(d.Cnq, {
                                onChange: (e) => {
                                    null == u || u(e);
                                },
                                checked: f,
                            }),
                        })
                      : (0, r.jsx)(d.P3F, {
                            className: C.sessionMoreButton,
                            onClick: (e) => {
                                e.shiftKey ? null == u || u(!0) : (0, _.L$)(l.id_hash);
                            },
                            "aria-label": A.intl.string(A.t.E4MJNt),
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
    return (0, r.jsxs)("div", {
        className: o()(C.session, C.legacySession),
        children: [
            (0, r.jsx)("div", {
                className: C.sessionIcon,
                children: (0, r.jsx)(b.Z, {
                    width: "32",
                    height: "32",
                }),
            }),
            (0, r.jsxs)("div", {
                className: C.sessionInfo,
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: "eyebrow",
                        className: C.sessionInfoRow,
                        color: "text-muted",
                        children: (0, r.jsx)("span", { children: A.intl.string(A.t.iUa0sn) }),
                    }),
                    (0, r.jsx)(d.Text, {
                        variant: "text-sm/medium",
                        className: C.sessionInfoRow,
                        color: "text-muted",
                        children: (0, r.jsx)("span", {
                            children: A.intl.format(A.t["044+8i"], {
                                onClick: () =>
                                    (0, S.openUserSettings)(O.n.ACCOUNT_PANEL, {
                                        section: I.oAB.ACCOUNT,
                                        analyticsLocations: [p.Z.USER_SETTINGS_SESSIONS],
                                    }),
                            }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
function D(e) {
    switch (null == e ? void 0 : e.toLowerCase().trim()) {
        case null:
        case void 0:
        case "":
            return {
                text: A.intl.string(A.t.cDHCNY),
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
