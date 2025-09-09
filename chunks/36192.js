n.d(t, { Z: () => A }), n(388685), n(953529), n(781311);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(544891),
    c = n(704215),
    u = n(755721),
    d = n(481060),
    f = n(230711),
    _ = n(497321),
    p = n(100527),
    h = n(43015),
    m = n(136097),
    g = n(266454),
    E = n(246946),
    b = n(594174),
    y = n(460562),
    O = n(823379),
    v = n(981631),
    I = n(921944),
    T = n(388032),
    S = n(844642);
function A() {
    let e,
        { currentSession: t, otherSessions: n } = (0, m.h)(),
        a = (0, s.e7)([E.Z], () => E.Z.hidePersonalInformation),
        o = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
        [u, f] = i.useState(!1);
    i.useEffect(() => {
        (0, g.Q3)(c.z.AUTH_SESSIONS_NEW, { dismissAction: I.L.AUTO }), (0, h.fw)();
        let e = setTimeout(() => f(!0), 500);
        return () => {
            clearTimeout(e), (0, h.$Z)();
        };
    }, []);
    let p = () => {
            l.tn.post({
                url: v.ANM.AUTH_SESSION_NOTIFICATIONS_DEBUG,
                rejectWithError: !0,
            });
        },
        [y, O] = i.useState(new Set());
    return a
        ? (0, r.jsx)(_.Z, {})
        : ((e =
              null == t && 0 === n.length
                  ? u
                      ? (0, r.jsx)("div", {
                            className: S.loading,
                            children: (0, r.jsx)(d.$jN, {}),
                        })
                      : null
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)("div", {
                                className: S.sessions,
                                children: [
                                    (0, r.jsx)(d.hjN, {
                                        title: T.intl.string(T.t.LLS19v),
                                        titleClassName: S.groupTitle,
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
                                        : (0, r.jsxs)(d.hjN, {
                                              title: T.intl.string(T.t.xx1MWV),
                                              titleClassName: S.groupTitle,
                                              className: S.otherSessions,
                                              children: [
                                                  n.map((e) =>
                                                      (0, r.jsx)(
                                                          C,
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
                                                  (null == o ? void 0 : o.mfaEnabled) ? null : (0, r.jsx)(N, {}),
                                              ],
                                          }),
                                ],
                            }),
                            n.length > 0
                                ? (0, r.jsxs)(d.hjN, {
                                      title: y.size > 0 ? T.intl.string(T.t.mMEmRE) : T.intl.string(T.t.Vij32N),
                                      children: [
                                          (0, r.jsx)(d.R94, {
                                              type: d.geA.DESCRIPTION,
                                              children: T.intl.string(T.t.OTXyaW),
                                          }),
                                          (0, r.jsx)("div", {
                                              "data-button-hoisted-classname-wrapper": !0,
                                              className: S.logOutAllButton,
                                              children: (0, r.jsx)(d.zxk, {
                                                  variant: "critical-secondary",
                                                  size: "sm",
                                                  text:
                                                      y.size > 0
                                                          ? T.intl.formatToPlainString(T.t["83CPLi"], { count: y.size })
                                                          : T.intl.string(T.t.cLmmeX),
                                                  onClick: () => {
                                                      y.size > 0
                                                          ? (0, h.L$)(Array.from(y))
                                                          : (0, h.L$)(n.map((e) => e.id_hash));
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
              title: T.intl.string(T.t["+1h0k5"]),
              children: [
                  (0, r.jsx)(d.R94, {
                      type: d.geA.DESCRIPTION,
                      className: S.description,
                      children: T.intl.string(T.t.zZp619),
                  }),
                  (null == o ? void 0 : o.isStaff())
                      ? (0, r.jsxs)("div", {
                            className: S.tools,
                            children: [
                                (0, r.jsx)(d.Text, {
                                    className: S.toolsTitle,
                                    variant: "text-md/bold",
                                    children: "DEV TOOLS",
                                }),
                                (0, r.jsx)(d.Text, {
                                    className: S.toolsTitle,
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
                                            onClick: p,
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
function C(e) {
    var t, n, i, a, s;
    let { session: l, current: c, setChecked: f, checked: _, useChecks: p } = e,
        g =
            null != (s = null == (t = l.client_info) ? void 0 : t.location)
                ? s
                : null == (n = l.client_info)
                  ? void 0
                  : n.ip,
        E = null == (i = l.client_info) ? void 0 : i.platform,
        { text: b, icon: y } = R(null == (a = l.client_info) ? void 0 : a.os),
        v = c ? null : (0, m.p)(l.approx_last_used_time),
        I = [b, E].filter(O.lm),
        A = [g, v].filter(O.lm);
    return (0, r.jsxs)(
        "div",
        {
            className: o()(S.session, c ? S.currentSession : null),
            children: [
                (0, r.jsx)("div", {
                    className: S.sessionIcon,
                    children: (0, r.jsx)(y, {
                        size: "md",
                        color: "currentColor",
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: S.sessionInfo,
                    children: [
                        (0, r.jsxs)(d.Text, {
                            variant: "eyebrow",
                            className: S.sessionInfoRow,
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
                            className: S.sessionInfoRow,
                            children: [
                                (0, r.jsx)("span", { children: A[0] }),
                                A.length > 1 &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)("span", { children: "\xB7" }),
                                            (0, r.jsx)("span", { children: A[1] }),
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
                            className: S.sessionCheckbox,
                            children: (0, r.jsx)(u.$q, {
                                onChange: (e, t) => {
                                    null == f || f(t);
                                },
                                value: _,
                            }),
                        })
                      : (0, r.jsx)(d.P3F, {
                            className: S.sessionMoreButton,
                            onClick: (e) => {
                                e.shiftKey ? null == f || f(!0) : (0, h.L$)(l.id_hash);
                            },
                            "aria-label": T.intl.string(T.t.E4MJNj),
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
function N() {
    return (0, r.jsxs)("div", {
        className: o()(S.session, S.legacySession),
        children: [
            (0, r.jsx)("div", {
                className: S.sessionIcon,
                children: (0, r.jsx)(y.Z, {
                    width: "32",
                    height: "32",
                }),
            }),
            (0, r.jsxs)("div", {
                className: S.sessionInfo,
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: "eyebrow",
                        className: S.sessionInfoRow,
                        color: "text-muted",
                        children: (0, r.jsx)("span", { children: T.intl.string(T.t.iUa0sr) }),
                    }),
                    (0, r.jsx)(d.Text, {
                        variant: "text-sm/medium",
                        className: S.sessionInfoRow,
                        color: "text-muted",
                        children: (0, r.jsx)("span", {
                            children: T.intl.format(T.t["044+8v"], {
                                onClick: () =>
                                    f.Z.setSection(v.oAB.ACCOUNT, null, {
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
function R(e) {
    switch (null == e ? void 0 : e.toLowerCase().trim()) {
        case null:
        case void 0:
        case "":
            return {
                text: T.intl.string(T.t.cDHCNT),
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
