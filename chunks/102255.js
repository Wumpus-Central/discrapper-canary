n.d(t, { AF: () => E, Im: () => S, jH: () => f });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(793574),
    c = n(200921),
    u = n(754333),
    m = n(287809),
    g = n(791606),
    _ = n(403362),
    x = n(780964),
    A = n(858897),
    h = n(336926),
    p = n(985018),
    T = n(237350);
function f() {
    return (0, i.jsx)(o.Text, { variant: "text-sm/normal", className: T.h_, children: p.intl.string(p.t.zZp618) });
}
function S() {
    let { currentSession: e } = (0, u.r)();
    return null == e
        ? (0, i.jsx)("div", { className: T.Lq, children: (0, i.jsx)(o.y$y, {}) })
        : (0, i.jsx)(o.nVY, { label: p.intl.string(p.t.LLS19o), children: (0, i.jsx)(C, { session: e, current: !0 }) });
}
function b(e) {
    let { checked: t, otherSessions: n } = e;
    return (0, i.jsx)(o.D0$, {
        label: t.size > 0 ? p.intl.string(p.t.mMEmRO) : p.intl.string(p.t.Vij32M),
        description: p.intl.string(p.t.OTXyaf),
        children: (0, i.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: T.Cn,
            children: (0, i.jsx)(o.Button, {
                variant: "critical-secondary",
                size: "sm",
                text:
                    t.size > 0
                        ? p.intl.formatToPlainString(p.t["83CPLj"], { count: t.size })
                        : p.intl.string(p.t.cLmmeY),
                onClick: () => {
                    t.size > 0 ? (0, c.U0)(Array.from(t)) : (0, c.U0)(n.map((e) => e.id_hash));
                },
            }),
        }),
    });
}
function E() {
    let { currentSession: e, otherSessions: t } = (0, u.r)(),
        n = (0, r.bG)([m.default], () => m.default.getCurrentUser()),
        [l, a] = s.useState(new Set());
    return (null == e && 0 === t.length) || (0 === t.length && n?.mfaEnabled)
        ? null
        : t.length > 0 || !n?.mfaEnabled
          ? (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)(o.nVY, {
                        label: p.intl.string(p.t.xx1MWc),
                        children: [
                            t.map((e) =>
                                (0, i.jsx)(
                                    C,
                                    {
                                        session: e,
                                        useChecks: l.size > 0,
                                        checked: l.has(e.id_hash),
                                        setChecked: (t) => {
                                            let n = new Set(l);
                                            t ? n.add(e.id_hash) : n.delete(e.id_hash), a(n);
                                        },
                                    },
                                    e.id_hash,
                                ),
                            ),
                            n?.mfaEnabled ? null : (0, i.jsx)(N, {}),
                        ],
                    }),
                    t.length > 0 &&
                        (0, i.jsx)("div", {
                            className: T.wq,
                            children: (0, i.jsx)(b, { checked: l, otherSessions: t }),
                        }),
                ],
            })
          : null;
}
function C(e) {
    let { session: t, current: n, setChecked: s, checked: l, useChecks: r } = e,
        { location: d, platform: u, os: m, Icon: g, lastActive: x } = (0, h.T)(t, n),
        A = [m, u].filter(_.Vq),
        f = [d, x].filter(_.Vq);
    return (0, i.jsxs)(
        "div",
        {
            className: a()(T.dZ, { [T.gg]: n }),
            children: [
                (0, i.jsxs)("div", {
                    className: T.OC,
                    children: [
                        (0, i.jsx)("div", {
                            className: T.km,
                            children: (0, i.jsx)(g, { size: "md", color: "currentColor" }),
                        }),
                        (0, i.jsxs)("div", {
                            className: T.F3,
                            children: [
                                (0, i.jsxs)(o.Text, {
                                    variant: "eyebrow",
                                    className: T.nT,
                                    children: [
                                        (0, i.jsx)("span", { children: A[0] }),
                                        A.length > 1 &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)("span", { children: "\xb7" }),
                                                    (0, i.jsx)("span", { children: A[1] }),
                                                ],
                                            }),
                                    ],
                                }),
                                (0, i.jsxs)(o.Text, {
                                    variant: "text-sm/medium",
                                    className: T.nT,
                                    children: [
                                        (0, i.jsx)("span", { children: f[0] }),
                                        f.length > 1 &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)("span", { children: "\xb7" }),
                                                    (0, i.jsx)("span", { children: f[1] }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        n
                            ? null
                            : r
                              ? (0, i.jsx)("div", {
                                    className: T.GR,
                                    children: (0, i.jsx)(o.JuY, {
                                        onChange: (e) => {
                                            s?.(e);
                                        },
                                        checked: l,
                                    }),
                                })
                              : (0, i.jsx)(o.DUT, {
                                    className: T.ux,
                                    onClick: (e) => {
                                        e.shiftKey ? s?.(!0) : (0, c.U0)(t.id_hash);
                                    },
                                    "aria-label": p.intl.string(p.t.E4MJNt),
                                    children: (0, i.jsx)(o.PGe, { size: "md", color: "currentColor" }),
                                }),
                    ],
                }),
                !n && (0, i.jsx)(o.cGx, { className: T.O9 }),
            ],
        },
        t.id_hash,
    );
}
function N() {
    return (0, i.jsxs)("div", {
        className: a()(T.dZ, T.EC),
        children: [
            (0, i.jsxs)("div", {
                className: T.OC,
                children: [
                    (0, i.jsx)("div", { className: T.km, children: (0, i.jsx)(g.A, { width: "32", height: "32" }) }),
                    (0, i.jsxs)("div", {
                        className: T.F3,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: "eyebrow",
                                className: T.nT,
                                color: "text-muted",
                                children: (0, i.jsx)("span", { children: p.intl.string(p.t.iUa0sn) }),
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                className: T.nT,
                                color: "text-muted",
                                children: (0, i.jsx)("span", {
                                    children: p.intl.format(p.t["044+8i"], {
                                        onClick: () =>
                                            (0, A.openUserSettings)(x.X.ACCOUNT_PANEL, {
                                                analyticsLocations: [d.A.USER_SETTINGS_SESSIONS],
                                            }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: T.O9 }),
        ],
    });
}
