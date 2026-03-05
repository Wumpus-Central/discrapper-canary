n.d(t, { Af: () => f, Ay: () => b, Ob: () => C, jH: () => S });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(793574),
    c = n(200921),
    u = n(754333),
    _ = n(287809),
    g = n(791606),
    m = n(403362),
    A = n(780964),
    h = n(740625),
    p = n(840065),
    x = n(652215),
    E = n(985018),
    T = n(928344);
function S() {
    return (0, i.jsx)(o.Text, { variant: "text-sm/normal", className: T.h_, children: E.intl.string(E.t.zZp618) });
}
function C() {
    let { currentSession: e } = (0, u.r)();
    return null == e
        ? (0, i.jsx)("div", { className: T.Lq, children: (0, i.jsx)(o.y$y, {}) })
        : (0, i.jsx)(o.nVY, { label: E.intl.string(E.t.LLS19o), children: (0, i.jsx)(N, { session: e, current: !0 }) });
}
function I(e) {
    let { checked: t, otherSessions: n } = e;
    return (0, i.jsx)(o.D0$, {
        label: t.size > 0 ? E.intl.string(E.t.mMEmRO) : E.intl.string(E.t.Vij32M),
        description: E.intl.string(E.t.OTXyaf),
        children: (0, i.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: T.Cn,
            children: (0, i.jsx)(o.Button, {
                variant: "critical-secondary",
                size: "sm",
                text:
                    t.size > 0
                        ? E.intl.formatToPlainString(E.t["83CPLj"], { count: t.size })
                        : E.intl.string(E.t.cLmmeY),
                onClick: () => {
                    t.size > 0 ? (0, c.U0)(Array.from(t)) : (0, c.U0)(n.map((e) => e.id_hash));
                },
            }),
        }),
    });
}
function f() {
    let { currentSession: e, otherSessions: t } = (0, u.r)(),
        n = (0, r.bG)([_.default], () => _.default.getCurrentUser()),
        [l, a] = s.useState(new Set());
    return (null == e && 0 === t.length) || (0 === t.length && n?.mfaEnabled)
        ? null
        : t.length > 0 || !n?.mfaEnabled
          ? (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)(o.nVY, {
                        label: E.intl.string(E.t.xx1MWc),
                        children: [
                            t.map((e) =>
                                (0, i.jsx)(
                                    N,
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
                            n?.mfaEnabled ? null : (0, i.jsx)(v, {}),
                        ],
                    }),
                    t.length > 0 &&
                        (0, i.jsx)("div", {
                            className: T.wq,
                            children: (0, i.jsx)(I, { checked: l, otherSessions: t }),
                        }),
                ],
            })
          : null;
}
function b() {
    return (
        s.useEffect(
            () => (
                (0, c.GY)(),
                () => {
                    (0, c.ZQ)();
                }
            ),
            [],
        ),
        (0, i.jsxs)(h.R, {
            header: E.intl.string(E.t["+1h0k/"]),
            children: [
                (0, i.jsx)(S, {}),
                (0, i.jsxs)(o.BJc, { gap: 24, className: T.Mf, children: [(0, i.jsx)(C, {}), (0, i.jsx)(f, {})] }),
            ],
        })
    );
}
function N(e) {
    let { session: t, current: n, setChecked: s, checked: l, useChecks: r } = e,
        d = t.client_info?.location ?? t.client_info?.ip,
        _ = t.client_info?.platform,
        { text: g, icon: A } = (function (e) {
            switch (e?.toLowerCase().trim()) {
                case null:
                case void 0:
                case "":
                    return { text: E.intl.string(E.t.cDHCNY), icon: o.kN9 };
                case "ios":
                case "android":
                    return { text: e, icon: o.u6o };
                case "horizon os":
                    return { text: e, icon: o.G47 };
                default:
                    return { text: e, icon: o.kN9 };
            }
        })(t.client_info?.os),
        h = n ? null : (0, u.Y)(t.approx_last_used_time),
        p = [g, _].filter(m.Vq),
        x = [d, h].filter(m.Vq);
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
                            children: (0, i.jsx)(A, { size: "md", color: "currentColor" }),
                        }),
                        (0, i.jsxs)("div", {
                            className: T.F3,
                            children: [
                                (0, i.jsxs)(o.Text, {
                                    variant: "eyebrow",
                                    className: T.nT,
                                    children: [
                                        (0, i.jsx)("span", { children: p[0] }),
                                        p.length > 1 &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)("span", { children: "\xb7" }),
                                                    (0, i.jsx)("span", { children: p[1] }),
                                                ],
                                            }),
                                    ],
                                }),
                                (0, i.jsxs)(o.Text, {
                                    variant: "text-sm/medium",
                                    className: T.nT,
                                    children: [
                                        (0, i.jsx)("span", { children: x[0] }),
                                        x.length > 1 &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)("span", { children: "\xb7" }),
                                                    (0, i.jsx)("span", { children: x[1] }),
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
                                    "aria-label": E.intl.string(E.t.E4MJNt),
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
function v() {
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
                                children: (0, i.jsx)("span", { children: E.intl.string(E.t.iUa0sn) }),
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                className: T.nT,
                                color: "text-muted",
                                children: (0, i.jsx)("span", {
                                    children: E.intl.format(E.t["044+8i"], {
                                        onClick: () =>
                                            (0, p.openUserSettings)(A.X.ACCOUNT_PANEL, {
                                                section: x.nc_.ACCOUNT,
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
