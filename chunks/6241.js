n.d(t, { default: () => g }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(158954),
    a = n(397927),
    r = n(219893),
    d = n(95396),
    u = n(728499),
    o = n(221425),
    c = n(985018),
    m = n(212350);
let h = 48;
function x(e) {
    let [t, n] = e.split(":").map(Number);
    return { hours: t, minutes: n };
}
function f(e) {
    return `${e.hours}:${e.minutes}`;
}
function j(e) {
    return { hours: Math.floor((30 * e) / 60), minutes: (30 * e) % 60 };
}
function g(e) {
    let { transitionState: t, onClose: n, teenId: g, rule: y } = e,
        b = null != y,
        [p, v] = (0, u.A)({ initial: y?.startTime, defaultValue: { hours: 22, minutes: 0 } }),
        [S, k] = (0, u.A)({ initial: y?.endTime, defaultValue: { hours: 7, minutes: 0 } }),
        [C, _] = i.useState(() => (null != y ? new Set(y.days) : new Set())),
        [N, w] = i.useState(!1),
        [E, M] = i.useState(!1),
        [T, Y] = i.useState(y?.enabled ?? !0),
        A = i.useMemo(r.yK, []),
        B = i.useMemo(
            () =>
                Array.from({ length: h }, (e, t) => {
                    let n = j(t),
                        l = f(n);
                    return { id: l, value: l, label: (0, r.fU)(n) };
                }),
            [],
        ),
        U = i.useMemo(
            () =>
                (function (e) {
                    let t = (0, r.yN)(e),
                        n = (0, r.yN)(e) / 30,
                        i = [];
                    for (let e = 1; e < h; e++) {
                        let s = j((n + e) % h),
                            a = (0, r.yN)(s),
                            d = a > t ? a - t : 1440 - t + a,
                            u = f(s);
                        i.push({
                            id: u,
                            value: u,
                            label: (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, r.fU)(s),
                                    (0, l.jsx)("span", { className: m.us, children: ` \xb7 ${(0, r.a3)(d)}` }),
                                ],
                            }),
                        });
                    }
                    return i;
                })(p),
            [p],
        ),
        z = (0, r.yN)(p) > (0, r.yN)(S),
        H = (0, r.yN)(p) !== (0, r.yN)(S),
        J = async () => {
            w(!0);
            try {
                let e = {
                    label: "",
                    start_time: { hours: p.hours, minutes: p.minutes, seconds: 0, nanos: 0 },
                    end_time: { hours: S.hours, minutes: S.minutes, seconds: 0, nanos: 0 },
                    days: Array.from(C),
                    enabled: T,
                };
                b ? await (0, d.Um)(g, y.ruleId, e) : await (0, d.qP)(g, e), n();
            } finally {
                w(!1);
            }
        },
        R = async () => {
            if (b) {
                M(!0);
                try {
                    await (0, d.CS)(g, y.ruleId), n();
                } finally {
                    M(!1);
                }
            }
        },
        $ = {
            startTime: (0, r.fU)(p),
            endTime: (0, r.fU)(S),
            timeHook: (e, t) =>
                (0, l.jsx)(s.EYj, { variant: "text-sm/medium", color: "text-default", tag: "span", children: e }, t),
        },
        G = z ? c.intl.format(o.default.R87Y2K, $) : c.intl.format(o.default.vX7xid, $),
        I = N || E,
        O = b
            ? [
                  {
                      variant: "critical-secondary",
                      text: c.intl.string(o.default.d8pizZ),
                      onClick: R,
                      disabled: I,
                      loading: E,
                  },
                  { text: c.intl.string(o.default.TDc9mW), onClick: J, disabled: 0 === C.size || !H || I, loading: N },
              ]
            : [
                  { variant: "secondary", text: c.intl.string(c.t["ETE/oC"]), onClick: n, disabled: I },
                  { text: c.intl.string(o.default.pvcruO), onClick: J, disabled: 0 === C.size || !H || I, loading: N },
              ];
    return (0, l.jsx)(s.Modal, {
        transitionState: t,
        onClose: n,
        title: c.intl.string(o.default["w/ISB8"]),
        subtitle: c.intl.string(o.default.AcJ4ke),
        actions: O,
        children: (0, l.jsxs)(s.BJc, {
            gap: 24,
            children: [
                b &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(s.dOG, {
                                checked: T,
                                label: c.intl.string(o.default["30Owsd"]),
                                onChange: () => {
                                    Y((e) => !e);
                                },
                            }),
                            (0, l.jsx)(s.cGx, {}),
                        ],
                    }),
                (0, l.jsxs)(s.BJc, {
                    gap: 8,
                    children: [
                        (0, l.jsx)(s.EYj, {
                            variant: "text-sm/semibold",
                            children: c.intl.string(o.default["37z4a2"]),
                        }),
                        (0, l.jsxs)("div", {
                            className: m.ae,
                            children: [
                                (0, l.jsx)("div", {
                                    className: m.k3,
                                    children: (0, l.jsx)(s.l6P, {
                                        label: c.intl.string(o.default["37z4a2"]),
                                        hideLabel: !0,
                                        selectionMode: "single",
                                        options: B,
                                        value: f(p),
                                        onSelectionChange: (e) => {
                                            if (null != e) {
                                                let t = x(e);
                                                v(t);
                                                let n = ((0, r.yN)(t) + 540) % 1440;
                                                k({ hours: Math.floor(n / 60), minutes: n % 60 });
                                            }
                                        },
                                    }),
                                }),
                                (0, l.jsx)(s.EYj, {
                                    variant: "text-md/medium",
                                    children: c.intl.string(o.default.n2mCrR),
                                }),
                                (0, l.jsx)("div", {
                                    className: m.k3,
                                    children: (0, l.jsx)(s.l6P, {
                                        label: c.intl.string(o.default.n2mCrR),
                                        hideLabel: !0,
                                        selectionMode: "single",
                                        options: U,
                                        value: f(S),
                                        onSelectionChange: (e) => {
                                            null != e && k(x(e));
                                        },
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsx)(s.cGx, {}),
                (0, l.jsxs)(s.BJc, {
                    gap: 8,
                    children: [
                        (0, l.jsxs)(s.BJc, {
                            gap: 4,
                            children: [
                                (0, l.jsx)(s.EYj, {
                                    variant: "text-sm/semibold",
                                    children: c.intl.string(o.default.HaV0Sg),
                                }),
                                (0, l.jsx)(s.EYj, { variant: "text-sm/normal", color: "text-muted", children: G }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: m.kS,
                            children: r.yG.map((e, t) => {
                                let n = C.has(e);
                                return (0, l.jsx)(
                                    a.DUT,
                                    {
                                        role: "button",
                                        "aria-pressed": n,
                                        className: `${m.ly} ${n ? m.wH : ""}`,
                                        onClick: () => {
                                            _((t) => {
                                                let n = new Set(t);
                                                return n.has(e) ? n.delete(e) : n.add(e), n;
                                            });
                                        },
                                        children: (0, l.jsx)(s.EYj, {
                                            variant: "text-sm/semibold",
                                            color: "currentColor",
                                            children: A[t],
                                        }),
                                    },
                                    e,
                                );
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
