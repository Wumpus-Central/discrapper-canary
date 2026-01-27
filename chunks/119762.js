n.d(t, {
    Af: () => T,
    Ay: () => C,
    Ob: () => f,
    jH: () => E,
}),
    n(228524),
    n(896048),
    n(733351);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(793574),
    d = n(200921),
    u = n(754333),
    g = n(287809),
    h = n(791606),
    x = n(403362),
    A = n(780964),
    p = n(358776),
    m = n(740625),
    j = n(840065),
    b = n(652215),
    O = n(985018),
    S = n(928344);

function E() {
    return (0, i.jsx)(o.Text, {
        variant: "text-sm/normal",
        className: S.h_,
        children: O.intl.string(O.t.zZp618),
    });
}

function f() {
    let { currentSession: e } = (0, u.r)();
    return null == e
        ? (0, i.jsx)("div", {
              className: S.Lq,
              children: (0, i.jsx)(o.y$y, {}),
          })
        : (0, i.jsx)(o.nVY, {
              label: O.intl.string(O.t.LLS19o),
              children: (0, i.jsx)(y, {
                  session: e,
                  current: !0,
              }),
          });
}

function v(e) {
    let { checked: t, otherSessions: n } = e;
    return (0, i.jsx)(o.D0$, {
        label: t.size > 0 ? O.intl.string(O.t.mMEmRO) : O.intl.string(O.t.Vij32M),
        description: O.intl.string(O.t.OTXyaf),
        children: (0, i.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: S.Cn,
            children: (0, i.jsx)(o.Button, {
                variant: "critical-secondary",
                size: "sm",
                text:
                    t.size > 0
                        ? O.intl.formatToPlainString(O.t["83CPLj"], {
                              count: t.size,
                          })
                        : O.intl.string(O.t.cLmmeY),
                onClick: () => {
                    t.size > 0 ? (0, d.U0)(Array.from(t)) : (0, d.U0)(n.map((e) => e.id_hash));
                },
            }),
        }),
    });
}

function T() {
    let e = (0, p.dk)("OtherSessionsSetting"),
        { currentSession: t, otherSessions: n } = (0, u.r)(),
        l = (0, a.bG)([g.default], () => g.default.getCurrentUser()),
        [r, c] = s.useState(new Set());
    return (null == t && 0 === n.length) ||
        (0 === n.length && (null == l ? void 0 : l.mfaEnabled)) ||
        (!(n.length > 0) && (null == l ? void 0 : l.mfaEnabled))
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(o.nVY, {
                      label: O.intl.string(O.t.xx1MWc),
                      children: [
                          n.map((e) =>
                              (0, i.jsx)(
                                  y,
                                  {
                                      session: e,
                                      useChecks: r.size > 0,
                                      checked: r.has(e.id_hash),
                                      setChecked: (t) => {
                                          let n = new Set(r);
                                          t ? n.add(e.id_hash) : n.delete(e.id_hash), c(n);
                                      },
                                  },
                                  e.id_hash,
                              ),
                          ),
                          (null == l ? void 0 : l.mfaEnabled) ? null : (0, i.jsx)(N, {}),
                      ],
                  }),
                  n.length > 0 &&
                      (e
                          ? (0, i.jsx)("div", {
                                className: S.hI,
                                children: (0, i.jsx)(v, {
                                    checked: r,
                                    otherSessions: n,
                                }),
                            })
                          : (0, i.jsx)(v, {
                                checked: r,
                                otherSessions: n,
                            })),
              ],
          });
}

function C() {
    return (
        s.useEffect(
            () => (
                (0, d.GY)(),
                () => {
                    (0, d.ZQ)();
                }
            ),
            [],
        ),
        (0, i.jsxs)(m.R, {
            header: O.intl.string(O.t["+1h0k/"]),
            children: [
                (0, i.jsx)(E, {}),
                (0, i.jsxs)(o.BJc, {
                    gap: 24,
                    className: S.Mf,
                    children: [(0, i.jsx)(f, {}), (0, i.jsx)(T, {})],
                }),
            ],
        })
    );
}

function y(e) {
    var t, n, s, l, a;
    let { session: c, current: g, setChecked: h, checked: A, useChecks: p } = e,
        m =
            null != (t = null == (n = c.client_info) ? void 0 : n.location)
                ? t
                : null == (s = c.client_info)
                  ? void 0
                  : s.ip,
        j = null == (l = c.client_info) ? void 0 : l.platform,
        { text: b, icon: E } = (function (e) {
            switch (null == e ? void 0 : e.toLowerCase().trim()) {
                case null:
                case void 0:
                case "":
                    return {
                        text: O.intl.string(O.t.cDHCNY),
                        icon: o.kN9,
                    };
                case "ios":
                case "android":
                    return {
                        text: e,
                        icon: o.u6o,
                    };
                case "horizon os":
                    return {
                        text: e,
                        icon: o.G47,
                    };
                default:
                    return {
                        text: e,
                        icon: o.kN9,
                    };
            }
        })(null == (a = c.client_info) ? void 0 : a.os),
        f = g ? null : (0, u.Y)(c.approx_last_used_time),
        v = [b, j].filter(x.Vq),
        T = [m, f].filter(x.Vq);
    return (0, i.jsxs)(
        "div",
        {
            className: r()(S.dZ, {
                [S.gg]: g,
            }),
            children: [
                (0, i.jsxs)("div", {
                    className: S.OC,
                    children: [
                        (0, i.jsx)("div", {
                            className: S.km,
                            children: (0, i.jsx)(E, {
                                size: "md",
                                color: "currentColor",
                            }),
                        }),
                        (0, i.jsxs)("div", {
                            className: S.F3,
                            children: [
                                (0, i.jsxs)(o.Text, {
                                    variant: "eyebrow",
                                    className: S.nT,
                                    children: [
                                        (0, i.jsx)("span", {
                                            children: v[0],
                                        }),
                                        v.length > 1 &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)("span", {
                                                        children: "\xb7",
                                                    }),
                                                    (0, i.jsx)("span", {
                                                        children: v[1],
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                                (0, i.jsxs)(o.Text, {
                                    variant: "text-sm/medium",
                                    className: S.nT,
                                    children: [
                                        (0, i.jsx)("span", {
                                            children: T[0],
                                        }),
                                        T.length > 1 &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)("span", {
                                                        children: "\xb7",
                                                    }),
                                                    (0, i.jsx)("span", {
                                                        children: T[1],
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        g
                            ? null
                            : p
                              ? (0, i.jsx)("div", {
                                    className: S.GR,
                                    children: (0, i.jsx)(o.JuY, {
                                        onChange: (e) => {
                                            null == h || h(e);
                                        },
                                        checked: A,
                                    }),
                                })
                              : (0, i.jsx)(o.DUT, {
                                    className: S.ux,
                                    onClick: (e) => {
                                        e.shiftKey ? null == h || h(!0) : (0, d.U0)(c.id_hash);
                                    },
                                    "aria-label": O.intl.string(O.t.E4MJNt),
                                    children: (0, i.jsx)(o.PGe, {
                                        size: "md",
                                        color: "currentColor",
                                    }),
                                }),
                    ],
                }),
                !g &&
                    (0, i.jsx)(o.cGx, {
                        className: S.O9,
                    }),
            ],
        },
        c.id_hash,
    );
}

function N() {
    return (0, i.jsxs)("div", {
        className: r()(S.dZ, S.EC),
        children: [
            (0, i.jsxs)("div", {
                className: S.OC,
                children: [
                    (0, i.jsx)("div", {
                        className: S.km,
                        children: (0, i.jsx)(h.A, {
                            width: "32",
                            height: "32",
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: S.F3,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: "eyebrow",
                                className: S.nT,
                                color: "text-muted",
                                children: (0, i.jsx)("span", {
                                    children: O.intl.string(O.t.iUa0sn),
                                }),
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                className: S.nT,
                                color: "text-muted",
                                children: (0, i.jsx)("span", {
                                    children: O.intl.format(O.t["044+8i"], {
                                        onClick: () =>
                                            (0, j.openUserSettings)(A.X.ACCOUNT_PANEL, {
                                                section: b.nc_.ACCOUNT,
                                                analyticsLocations: [c.A.USER_SETTINGS_SESSIONS],
                                            }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: S.O9,
            }),
        ],
    });
}
