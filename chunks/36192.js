n.d(t, {
    $0: () => v,
    Vy: () => S,
    ZP: () => I,
    kC: () => O,
}),
    n(953529),
    n(388685),
    n(781311);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(100527),
    u = n(43015),
    d = n(136097),
    f = n(594174),
    p = n(460562),
    _ = n(823379),
    m = n(313789),
    h = n(10298),
    g = n(518596),
    E = n(981631),
    b = n(388032),
    y = n(713791);
function O() {
    return (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        className: y.description,
        children: b.intl.string(b.t.zZp618),
    });
}
function v() {
    let { currentSession: e } = (0, d.h)();
    return null == e
        ? (0, r.jsx)("div", {
              className: y.loading,
              children: (0, r.jsx)(l.$jN, {}),
          })
        : (0, r.jsx)(l.C3N, {
              label: b.intl.string(b.t.LLS19o),
              children: (0, r.jsx)(T, {
                  session: e,
                  current: !0,
              }),
          });
}
function S() {
    let { currentSession: e, otherSessions: t } = (0, d.h)(),
        n = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
        [a, o] = i.useState(new Set());
    return (null == e && 0 === t.length) ||
        (0 === t.length && (null == n ? void 0 : n.mfaEnabled)) ||
        (!(t.length > 0) && (null == n ? void 0 : n.mfaEnabled))
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(l.C3N, {
                      label: b.intl.string(b.t.xx1MWc),
                      children: [
                          t.map((e) =>
                              (0, r.jsx)(
                                  T,
                                  {
                                      session: e,
                                      useChecks: a.size > 0,
                                      checked: a.has(e.id_hash),
                                      setChecked: (t) => {
                                          let n = new Set(a);
                                          t ? n.add(e.id_hash) : n.delete(e.id_hash), o(n);
                                      },
                                  },
                                  e.id_hash,
                              ),
                          ),
                          (null == n ? void 0 : n.mfaEnabled) ? null : (0, r.jsx)(C, {}),
                      ],
                  }),
                  t.length > 0
                      ? (0, r.jsx)(l.gNt, {
                            label: a.size > 0 ? b.intl.string(b.t.mMEmRO) : b.intl.string(b.t.Vij32M),
                            description: b.intl.string(b.t.OTXyaf),
                            children: (0, r.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: y.logOutAllButton,
                                children: (0, r.jsx)(l.Button, {
                                    variant: "critical-secondary",
                                    size: "sm",
                                    text:
                                        a.size > 0
                                            ? b.intl.formatToPlainString(b.t["83CPLj"], { count: a.size })
                                            : b.intl.string(b.t.cLmmeY),
                                    onClick: () => {
                                        a.size > 0 ? (0, u.L$)(Array.from(a)) : (0, u.L$)(t.map((e) => e.id_hash));
                                    },
                                }),
                            }),
                        })
                      : null,
              ],
          });
}
function I() {
    return (
        i.useEffect(
            () => (
                (0, u.fw)(),
                () => {
                    (0, u.$Z)();
                }
            ),
            [],
        ),
        (0, r.jsxs)(h.N, {
            header: b.intl.string(b.t["+1h0k/"]),
            children: [
                (0, r.jsx)(O, {}),
                (0, r.jsxs)(l.Kqy, {
                    gap: 24,
                    className: y.sessions,
                    children: [(0, r.jsx)(v, {}), (0, r.jsx)(S, {})],
                }),
            ],
        })
    );
}
function T(e) {
    var t, n, i, a, s;
    let { session: c, current: f, setChecked: p, checked: m, useChecks: h } = e,
        g =
            null != (s = null == (t = c.client_info) ? void 0 : t.location)
                ? s
                : null == (n = c.client_info)
                  ? void 0
                  : n.ip,
        E = null == (i = c.client_info) ? void 0 : i.platform,
        { text: O, icon: v } = A(null == (a = c.client_info) ? void 0 : a.os),
        S = f ? null : (0, d.p)(c.approx_last_used_time),
        I = [O, E].filter(_.lm),
        T = [g, S].filter(_.lm);
    return (0, r.jsxs)(
        "div",
        {
            className: o()(y.session, f ? y.currentSession : null),
            children: [
                (0, r.jsx)("div", {
                    className: y.sessionIcon,
                    children: (0, r.jsx)(v, {
                        size: "md",
                        color: "currentColor",
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: y.sessionInfo,
                    children: [
                        (0, r.jsxs)(l.Text, {
                            variant: "eyebrow",
                            className: y.sessionInfoRow,
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
                        (0, r.jsxs)(l.Text, {
                            variant: "text-sm/medium",
                            className: y.sessionInfoRow,
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
                f
                    ? null
                    : h
                      ? (0, r.jsx)("div", {
                            className: y.sessionCheckbox,
                            children: (0, r.jsx)(l.Cnq, {
                                onChange: (e) => {
                                    null == p || p(e);
                                },
                                checked: m,
                            }),
                        })
                      : (0, r.jsx)(l.P3F, {
                            className: y.sessionMoreButton,
                            onClick: (e) => {
                                e.shiftKey ? null == p || p(!0) : (0, u.L$)(c.id_hash);
                            },
                            "aria-label": b.intl.string(b.t.E4MJNt),
                            children: (0, r.jsx)(l.Dio, {
                                size: "md",
                                color: "currentColor",
                            }),
                        }),
            ],
        },
        c.id_hash,
    );
}
function C() {
    return (0, r.jsxs)("div", {
        className: o()(y.session, y.legacySession),
        children: [
            (0, r.jsx)("div", {
                className: y.sessionIcon,
                children: (0, r.jsx)(p.Z, {
                    width: "32",
                    height: "32",
                }),
            }),
            (0, r.jsxs)("div", {
                className: y.sessionInfo,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "eyebrow",
                        className: y.sessionInfoRow,
                        color: "text-muted",
                        children: (0, r.jsx)("span", { children: b.intl.string(b.t.iUa0sn) }),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        className: y.sessionInfoRow,
                        color: "text-muted",
                        children: (0, r.jsx)("span", {
                            children: b.intl.format(b.t["044+8i"], {
                                onClick: () =>
                                    (0, g.openUserSettings)(m.n.ACCOUNT_PANEL, {
                                        section: E.oAB.ACCOUNT,
                                        analyticsLocations: [c.Z.USER_SETTINGS_SESSIONS],
                                    }),
                            }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
function A(e) {
    switch (null == e ? void 0 : e.toLowerCase().trim()) {
        case null:
        case void 0:
        case "":
            return {
                text: b.intl.string(b.t.cDHCNY),
                icon: l.pzj,
            };
        case "ios":
        case "android":
            return {
                text: e,
                icon: l.AtH,
            };
        case "horizon os":
            return {
                text: e,
                icon: l.Pb9,
            };
        default:
            return {
                text: e,
                icon: l.pzj,
            };
    }
}
