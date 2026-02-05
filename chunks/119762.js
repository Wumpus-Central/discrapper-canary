n.d(t, { Af: () => N, Ay: () => T, Ob: () => S, jH: () => I });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(793574),
    c = n(200921),
    u = n(754333),
    h = n(287809),
    A = n(791606),
    g = n(403362),
    m = n(780964),
    p = n(358776),
    _ = n(740625),
    x = n(840065),
    f = n(652215),
    E = n(985018),
    C = n(928344);
function I() {
    return (0, i.jsx)(o.Text, { variant: "text-sm/normal", className: C.h_, children: E.intl.string(E.t.zZp618) });
}
function S() {
    let { currentSession: e } = (0, u.r)();
    return null == e
        ? (0, i.jsx)("div", { className: C.Lq, children: (0, i.jsx)(o.y$y, {}) })
        : (0, i.jsx)(o.nVY, { label: E.intl.string(E.t.LLS19o), children: (0, i.jsx)(j, { session: e, current: !0 }) });
}
function b(e) {
    let { checked: t, otherSessions: n } = e;
    return (0, i.jsx)(o.D0$, {
        label: t.size > 0 ? E.intl.string(E.t.mMEmRO) : E.intl.string(E.t.Vij32M),
        description: E.intl.string(E.t.OTXyaf),
        children: (0, i.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: C.Cn,
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
function N() {
    let e = (0, p.dk)("OtherSessionsSetting"),
        { currentSession: t, otherSessions: n } = (0, u.r)(),
        s = (0, r.bG)([h.default], () => h.default.getCurrentUser()),
        [a, d] = l.useState(new Set());
    return (null == t && 0 === n.length) || (0 === n.length && s?.mfaEnabled)
        ? null
        : n.length > 0 || !s?.mfaEnabled
          ? (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)(o.nVY, {
                        label: E.intl.string(E.t.xx1MWc),
                        children: [
                            n.map((e) =>
                                (0, i.jsx)(
                                    j,
                                    {
                                        session: e,
                                        useChecks: a.size > 0,
                                        checked: a.has(e.id_hash),
                                        setChecked: (t) => {
                                            let n = new Set(a);
                                            t ? n.add(e.id_hash) : n.delete(e.id_hash), d(n);
                                        },
                                    },
                                    e.id_hash,
                                ),
                            ),
                            s?.mfaEnabled ? null : (0, i.jsx)(v, {}),
                        ],
                    }),
                    n.length > 0 &&
                        (e
                            ? (0, i.jsx)("div", {
                                  className: C.hI,
                                  children: (0, i.jsx)(b, { checked: a, otherSessions: n }),
                              })
                            : (0, i.jsx)(b, { checked: a, otherSessions: n })),
                ],
            })
          : null;
}
function T() {
    return (
        l.useEffect(
            () => (
                (0, c.GY)(),
                () => {
                    (0, c.ZQ)();
                }
            ),
            [],
        ),
        (0, i.jsxs)(_.R, {
            header: E.intl.string(E.t["+1h0k/"]),
            children: [
                (0, i.jsx)(I, {}),
                (0, i.jsxs)(o.BJc, { gap: 24, className: C.Mf, children: [(0, i.jsx)(S, {}), (0, i.jsx)(N, {})] }),
            ],
        })
    );
}
function j(e) {
    let { session: t, current: n, setChecked: l, checked: s, useChecks: r } = e,
        d = t.client_info?.location ?? t.client_info?.ip,
        h = t.client_info?.platform,
        { text: A, icon: m } = (function (e) {
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
        p = n ? null : (0, u.Y)(t.approx_last_used_time),
        _ = [A, h].filter(g.Vq),
        x = [d, p].filter(g.Vq);
    return (0, i.jsxs)(
        "div",
        {
            className: a()(C.dZ, { [C.gg]: n }),
            children: [
                (0, i.jsxs)("div", {
                    className: C.OC,
                    children: [
                        (0, i.jsx)("div", {
                            className: C.km,
                            children: (0, i.jsx)(m, { size: "md", color: "currentColor" }),
                        }),
                        (0, i.jsxs)("div", {
                            className: C.F3,
                            children: [
                                (0, i.jsxs)(o.Text, {
                                    variant: "eyebrow",
                                    className: C.nT,
                                    children: [
                                        (0, i.jsx)("span", { children: _[0] }),
                                        _.length > 1 &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)("span", { children: "\xb7" }),
                                                    (0, i.jsx)("span", { children: _[1] }),
                                                ],
                                            }),
                                    ],
                                }),
                                (0, i.jsxs)(o.Text, {
                                    variant: "text-sm/medium",
                                    className: C.nT,
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
                                    className: C.GR,
                                    children: (0, i.jsx)(o.JuY, {
                                        onChange: (e) => {
                                            l?.(e);
                                        },
                                        checked: s,
                                    }),
                                })
                              : (0, i.jsx)(o.DUT, {
                                    className: C.ux,
                                    onClick: (e) => {
                                        e.shiftKey ? l?.(!0) : (0, c.U0)(t.id_hash);
                                    },
                                    "aria-label": E.intl.string(E.t.E4MJNt),
                                    children: (0, i.jsx)(o.PGe, { size: "md", color: "currentColor" }),
                                }),
                    ],
                }),
                !n && (0, i.jsx)(o.cGx, { className: C.O9 }),
            ],
        },
        t.id_hash,
    );
}
function v() {
    return (0, i.jsxs)("div", {
        className: a()(C.dZ, C.EC),
        children: [
            (0, i.jsxs)("div", {
                className: C.OC,
                children: [
                    (0, i.jsx)("div", { className: C.km, children: (0, i.jsx)(A.A, { width: "32", height: "32" }) }),
                    (0, i.jsxs)("div", {
                        className: C.F3,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: "eyebrow",
                                className: C.nT,
                                color: "text-muted",
                                children: (0, i.jsx)("span", { children: E.intl.string(E.t.iUa0sn) }),
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                className: C.nT,
                                color: "text-muted",
                                children: (0, i.jsx)("span", {
                                    children: E.intl.format(E.t["044+8i"], {
                                        onClick: () =>
                                            (0, x.openUserSettings)(m.X.ACCOUNT_PANEL, {
                                                section: f.nc_.ACCOUNT,
                                                analyticsLocations: [d.A.USER_SETTINGS_SESSIONS],
                                            }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: C.O9 }),
        ],
    });
}
