l.d(t, { default: () => g }), l(321073);
var n = l(627968),
    a = l(64700),
    i = l(158954),
    s = l(397927),
    r = l(219893),
    d = l(95396),
    u = l(728499),
    o = l(221425),
    c = l(985018),
    m = l(212350);
let h = 48;
function x(e) {
    let [t, l] = e.split(":").map(Number);
    return { hours: t, minutes: l };
}
function f(e) {
    return `${e.hours}:${e.minutes}`;
}
function j(e) {
    return { hours: Math.floor((30 * e) / 60), minutes: (30 * e) % 60 };
}
function g(e) {
    let { transitionState: t, onClose: l, teenId: g, rule: y } = e,
        b = null != y,
        [p, v] = (0, u.A)({ initial: y?.startTime, defaultValue: { hours: 22, minutes: 0 } }),
        [S, k] = (0, u.A)({ initial: y?.endTime, defaultValue: { hours: 7, minutes: 0 } }),
        [C, _] = a.useState(() => (null != y ? new Set(y.days) : new Set())),
        [N, w] = a.useState(!1),
        [E, M] = a.useState(!1),
        [T, Y] = a.useState(y?.enabled ?? !0),
        A = a.useMemo(() => (0, r.yK)("short"), []),
        B = a.useMemo(
            () =>
                Array.from({ length: h }, (e, t) => {
                    let l = j(t),
                        n = f(l);
                    return { id: n, value: n, label: (0, r.fU)(l) };
                }),
            [],
        ),
        U = a.useMemo(
            () =>
                (function (e) {
                    let t = (0, r.yN)(e),
                        l = (0, r.yN)(e) / 30,
                        a = [];
                    for (let e = 1; e < h; e++) {
                        let i = j((l + e) % h),
                            s = (0, r.yN)(i),
                            d = s > t ? s - t : 1440 - t + s,
                            u = f(i);
                        a.push({
                            id: u,
                            value: u,
                            label: (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, r.fU)(i),
                                    (0, n.jsx)("span", { className: m.us, children: ` \xb7 ${(0, r.a3)(d)}` }),
                                ],
                            }),
                        });
                    }
                    return a;
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
                    start_time: (0, r.v9)(p),
                    end_time: (0, r.v9)(S),
                    days: Array.from(C),
                    enabled: T,
                };
                b ? await (0, d.Um)(g, y.ruleId, e) : await (0, d.qP)(g, e), l();
            } finally {
                w(!1);
            }
        },
        R = async () => {
            if (b) {
                M(!0);
                try {
                    await (0, d.CS)(g, y.ruleId), l();
                } finally {
                    M(!1);
                }
            }
        },
        $ = {
            startTime: (0, r.fU)(p),
            endTime: (0, r.fU)(S),
            timeHook: (e, t) =>
                (0, n.jsx)(i.EYj, { variant: "text-sm/medium", color: "text-default", tag: "span", children: e }, t),
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
                  { variant: "secondary", text: c.intl.string(c.t["ETE/oC"]), onClick: l, disabled: I },
                  { text: c.intl.string(o.default.pvcruO), onClick: J, disabled: 0 === C.size || !H || I, loading: N },
              ];
    return (0, n.jsx)(i.Modal, {
        transitionState: t,
        onClose: l,
        title: c.intl.string(o.default["w/ISB8"]),
        subtitle: c.intl.string(o.default.AcJ4ke),
        actions: O,
        children: (0, n.jsxs)(i.BJc, {
            gap: 24,
            children: [
                b &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(i.dOG, {
                                checked: T,
                                label: c.intl.string(o.default["30Owsd"]),
                                onChange: () => {
                                    Y((e) => !e);
                                },
                            }),
                            (0, n.jsx)(i.cGx, {}),
                        ],
                    }),
                (0, n.jsxs)(i.BJc, {
                    gap: 8,
                    children: [
                        (0, n.jsx)(i.EYj, {
                            variant: "text-sm/semibold",
                            children: c.intl.string(o.default["37z4a2"]),
                        }),
                        (0, n.jsxs)("div", {
                            className: m.ae,
                            children: [
                                (0, n.jsx)("div", {
                                    className: m.k3,
                                    children: (0, n.jsx)(i.l6P, {
                                        label: c.intl.string(o.default["37z4a2"]),
                                        hideLabel: !0,
                                        selectionMode: "single",
                                        options: B,
                                        value: f(p),
                                        onSelectionChange: (e) => {
                                            if (null != e) {
                                                let t = x(e);
                                                v(t);
                                                let l = ((0, r.yN)(t) + 540) % 1440;
                                                k({ hours: Math.floor(l / 60), minutes: l % 60 });
                                            }
                                        },
                                    }),
                                }),
                                (0, n.jsx)(i.EYj, {
                                    variant: "text-md/medium",
                                    children: c.intl.string(o.default.n2mCrR),
                                }),
                                (0, n.jsx)("div", {
                                    className: m.k3,
                                    children: (0, n.jsx)(i.l6P, {
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
                (0, n.jsx)(i.cGx, {}),
                (0, n.jsxs)(i.BJc, {
                    gap: 8,
                    children: [
                        (0, n.jsxs)(i.BJc, {
                            gap: 4,
                            children: [
                                (0, n.jsx)(i.EYj, {
                                    variant: "text-sm/semibold",
                                    children: c.intl.string(o.default.HaV0Sg),
                                }),
                                (0, n.jsx)(i.EYj, { variant: "text-sm/normal", color: "text-muted", children: G }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: m.kS,
                            children: r.yG.map((e, t) => {
                                let l = C.has(e);
                                return (0, n.jsx)(
                                    s.DUT,
                                    {
                                        role: "button",
                                        "aria-pressed": l,
                                        className: `${m.ly} ${l ? m.wH : ""}`,
                                        onClick: () => {
                                            _((t) => {
                                                let l = new Set(t);
                                                return l.has(e) ? l.delete(e) : l.add(e), l;
                                            });
                                        },
                                        children: (0, n.jsx)(i.EYj, {
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
