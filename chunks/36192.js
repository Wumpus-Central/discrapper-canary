n.d(t, { Z: () => N }), n(388685), n(953529), n(781311);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(544891),
    c = n(704215),
    u = n(28664),
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
    v = n(10298),
    I = n(947889),
    T = n(981631),
    S = n(921944),
    A = n(388032),
    C = n(844642);
function N() {
    let e,
        { currentSession: t, otherSessions: n } = (0, h.h)(),
        a = (0, s.e7)([g.Z], () => g.Z.hidePersonalInformation),
        o = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
        [_, b] = i.useState(!1);
    i.useEffect(() => {
        (0, m.Q3)(c.z.AUTH_SESSIONS_NEW, { dismissAction: S.L.AUTO }), (0, p.fw)();
        let e = setTimeout(() => b(!0), 500);
        return () => {
            clearTimeout(e), (0, p.$Z)();
        };
    }, []);
    let y = () => {
            l.tn.post({
                url: T.ANM.AUTH_SESSION_NOTIFICATIONS_DEBUG,
                rejectWithError: !0,
            });
        },
        [O, I] = i.useState(new Set());
    return a
        ? (0, r.jsx)(f.Z, {})
        : ((e =
              null == t && 0 === n.length
                  ? _
                      ? (0, r.jsx)("div", {
                            className: C.loading,
                            children: (0, r.jsx)(d.$jN, {}),
                        })
                      : null
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)("div", {
                                className: C.sessions,
                                children: [
                                    (0, r.jsx)(d.hjN, {
                                        title: A.intl.string(A.t.LLS19v),
                                        titleClassName: C.groupTitle,
                                        children:
                                            null != t
                                                ? (0, r.jsx)(R, {
                                                      session: t,
                                                      current: !0,
                                                  })
                                                : null,
                                    }),
                                    !(n.length > 0) && (null == o ? void 0 : o.mfaEnabled)
                                        ? null
                                        : (0, r.jsxs)(d.hjN, {
                                              title: A.intl.string(A.t.xx1MWV),
                                              titleClassName: C.groupTitle,
                                              className: C.otherSessions,
                                              children: [
                                                  n.map((e) =>
                                                      (0, r.jsx)(
                                                          R,
                                                          {
                                                              session: e,
                                                              useChecks: O.size > 0,
                                                              checked: O.has(e.id_hash),
                                                              setChecked: (t) => {
                                                                  let n = new Set(O);
                                                                  t ? n.add(e.id_hash) : n.delete(e.id_hash), I(n);
                                                              },
                                                          },
                                                          e.id_hash,
                                                      ),
                                                  ),
                                                  (null == o ? void 0 : o.mfaEnabled) ? null : (0, r.jsx)(P, {}),
                                              ],
                                          }),
                                ],
                            }),
                            n.length > 0
                                ? (0, r.jsx)(d.NIc, {
                                      label: O.size > 0 ? A.intl.string(A.t.mMEmRE) : A.intl.string(A.t.Vij32N),
                                      description: A.intl.string(A.t.OTXyaW),
                                      children: (0, r.jsx)("div", {
                                          "data-button-hoisted-classname-wrapper": !0,
                                          className: C.logOutAllButton,
                                          children: (0, r.jsx)(d.zxk, {
                                              variant: "critical-secondary",
                                              size: "sm",
                                              text:
                                                  O.size > 0
                                                      ? A.intl.formatToPlainString(A.t["83CPLi"], { count: O.size })
                                                      : A.intl.string(A.t.cLmmeX),
                                              onClick: () => {
                                                  O.size > 0
                                                      ? (0, p.L$)(Array.from(O))
                                                      : (0, p.L$)(n.map((e) => e.id_hash));
                                              },
                                          }),
                                      }),
                                  })
                                : null,
                        ],
                    })),
          (0, r.jsxs)(v.N, {
              header: A.intl.string(A.t["+1h0k5"]),
              children: [
                  (0, r.jsx)(d.Text, {
                      variant: "text-sm/normal",
                      className: C.description,
                      children: A.intl.string(A.t.zZp619),
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
                                    color: "text-danger",
                                    children: "These tools are only shown to staff users.",
                                }),
                                (0, r.jsx)(u.u, {
                                    text: "Triggers mobile and email suspicious session notifications for the current user",
                                    children: (0, r.jsx)(d.zxk, {
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
function R(e) {
    var t, n, i, a, s;
    let { session: l, current: c, setChecked: u, checked: f, useChecks: _ } = e,
        m =
            null != (s = null == (t = l.client_info) ? void 0 : t.location)
                ? s
                : null == (n = l.client_info)
                  ? void 0
                  : n.ip,
        g = null == (i = l.client_info) ? void 0 : i.platform,
        { text: E, icon: b } = w(null == (a = l.client_info) ? void 0 : a.os),
        O = c ? null : (0, h.p)(l.approx_last_used_time),
        v = [E, g].filter(y.lm),
        I = [m, O].filter(y.lm);
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
                    : _
                      ? (0, r.jsx)("div", {
                            className: C.sessionCheckbox,
                            children: (0, r.jsx)(d.XZJ, {
                                onChange: (e) => {
                                    null == u || u(e);
                                },
                                checked: f,
                            }),
                        })
                      : (0, r.jsx)(d.P3F, {
                            className: C.sessionMoreButton,
                            onClick: (e) => {
                                e.shiftKey ? null == u || u(!0) : (0, p.L$)(l.id_hash);
                            },
                            "aria-label": A.intl.string(A.t.E4MJNj),
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
function P() {
    let e = (0, I.Z)();
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
                        children: (0, r.jsx)("span", { children: A.intl.string(A.t.iUa0sr) }),
                    }),
                    (0, r.jsx)(d.Text, {
                        variant: "text-sm/medium",
                        className: C.sessionInfoRow,
                        color: "text-muted",
                        children: (0, r.jsx)("span", {
                            children: A.intl.format(A.t["044+8v"], {
                                onClick: () =>
                                    e(O.n.ACCOUNT_PANEL, {
                                        section: T.oAB.ACCOUNT,
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
function w(e) {
    switch (null == e ? void 0 : e.toLowerCase().trim()) {
        case null:
        case void 0:
        case "":
            return {
                text: A.intl.string(A.t.cDHCNT),
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
