n.d(t, { AF: () => R, Im: () => j, jH: () => y });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(834730),
    d = n(289873),
    u = n(270003),
    c = n(452027),
    g = n(821609),
    m = n(568385),
    _ = n(939249),
    A = n(789645),
    h = n(404778),
    p = n(793574),
    x = n(200921),
    E = n(754333),
    T = n(287809),
    S = n(791606),
    f = n(403362),
    b = n(780964),
    C = n(858897),
    v = n(336926),
    N = n(985018),
    I = n(405814);
function y() {
    return (0, i.jsx)(o.E, { variant: "text-sm/normal", className: I.h_, children: N.intl.string(N.t.zZp618) });
}
function j() {
    let { currentSession: e } = (0, E.r)();
    return null == e
        ? (0, i.jsx)("div", { className: I.Lq, children: (0, i.jsx)(d.y, {}) })
        : (0, i.jsx)(u.n, { label: N.intl.string(N.t.LLS19o), children: (0, i.jsx)(L, { session: e, current: !0 }) });
}
function O(e) {
    let { checked: t, otherSessions: n } = e;
    return (0, i.jsx)(c.D, {
        label: t.size > 0 ? N.intl.string(N.t.mMEmRO) : N.intl.string(N.t.Vij32M),
        description: N.intl.string(N.t.OTXyaf),
        children: (0, i.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: I.Cn,
            children: (0, i.jsx)(g.$, {
                variant: "critical-secondary",
                size: "sm",
                text:
                    t.size > 0
                        ? N.intl.formatToPlainString(N.t["83CPLj"], { count: t.size })
                        : N.intl.string(N.t.cLmmeY),
                onClick: () => {
                    t.size > 0 ? (0, x.U0)(Array.from(t)) : (0, x.U0)(n.map((e) => e.id_hash));
                },
            }),
        }),
    });
}
function R() {
    let { currentSession: e, otherSessions: t } = (0, E.r)(),
        n = (0, r.bG)([T.default], () => T.default.getCurrentUser()),
        [l, a] = s.useState(new Set());
    return (null == e && 0 === t.length) || (0 === t.length && n?.mfaEnabled)
        ? null
        : t.length > 0 || !n?.mfaEnabled
          ? (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)(u.n, {
                        label: N.intl.string(N.t.xx1MWc),
                        children: [
                            t.map((e) =>
                                (0, i.jsx)(
                                    L,
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
                            n?.mfaEnabled ? null : (0, i.jsx)(D, {}),
                        ],
                    }),
                    t.length > 0 &&
                        (0, i.jsx)("div", {
                            className: I.wq,
                            children: (0, i.jsx)(O, { checked: l, otherSessions: t }),
                        }),
                ],
            })
          : null;
}
function L(e) {
    let { session: t, current: n, setChecked: s, checked: l, useChecks: r } = e,
        { location: d, platform: u, os: c, Icon: g, lastActive: p } = (0, v.T)(t, n),
        E = [c, u].filter(f.Vq),
        T = [d, p].filter(f.Vq);
    return (0, i.jsxs)(
        "div",
        {
            className: a()(I.dZ, { [I.gg]: n }),
            children: [
                (0, i.jsxs)("div", {
                    className: I.OC,
                    children: [
                        (0, i.jsx)("div", {
                            className: I.km,
                            children: (0, i.jsx)(g, { size: "md", color: "currentColor" }),
                        }),
                        (0, i.jsxs)("div", {
                            className: I.F3,
                            children: [
                                (0, i.jsxs)(o.E, {
                                    variant: "eyebrow",
                                    className: I.nT,
                                    children: [
                                        (0, i.jsx)("span", { children: E[0] }),
                                        E.length > 1 &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)("span", { children: "\xb7" }),
                                                    (0, i.jsx)("span", { children: E[1] }),
                                                ],
                                            }),
                                    ],
                                }),
                                (0, i.jsxs)(o.E, {
                                    variant: "text-sm/medium",
                                    className: I.nT,
                                    children: [
                                        (0, i.jsx)("span", { children: T[0] }),
                                        T.length > 1 &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)("span", { children: "\xb7" }),
                                                    (0, i.jsx)("span", { children: T[1] }),
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
                                    className: I.GR,
                                    children: (0, i.jsx)(m.J, {
                                        onChange: (e) => {
                                            s?.(e);
                                        },
                                        checked: l,
                                    }),
                                })
                              : (0, i.jsx)(_.D, {
                                    className: I.ux,
                                    onClick: (e) => {
                                        e.shiftKey ? s?.(!0) : (0, x.U0)(t.id_hash);
                                    },
                                    "aria-label": N.intl.string(N.t.E4MJNt),
                                    children: (0, i.jsx)(A.P, { size: "md", color: "currentColor" }),
                                }),
                    ],
                }),
                !n && (0, i.jsx)(h.c, { className: I.O9 }),
            ],
        },
        t.id_hash,
    );
}
function D() {
    return (0, i.jsxs)("div", {
        className: a()(I.dZ, I.EC),
        children: [
            (0, i.jsxs)("div", {
                className: I.OC,
                children: [
                    (0, i.jsx)("div", { className: I.km, children: (0, i.jsx)(S.A, { width: "32", height: "32" }) }),
                    (0, i.jsxs)("div", {
                        className: I.F3,
                        children: [
                            (0, i.jsx)(o.E, {
                                variant: "eyebrow",
                                className: I.nT,
                                color: "text-muted",
                                children: (0, i.jsx)("span", { children: N.intl.string(N.t.iUa0sn) }),
                            }),
                            (0, i.jsx)(o.E, {
                                variant: "text-sm/medium",
                                className: I.nT,
                                color: "text-muted",
                                children: (0, i.jsx)("span", {
                                    children: N.intl.format(N.t["044+8i"], {
                                        onClick: () =>
                                            (0, C.openUserSettings)(b.X.ACCOUNT_PANEL, {
                                                analyticsLocations: [p.A.USER_SETTINGS_SESSIONS],
                                            }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: I.O9 }),
        ],
    });
}
