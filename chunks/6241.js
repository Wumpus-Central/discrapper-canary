l.d(t, { default: () => y }), l(321073);
var n = l(627968),
    i = l(64700),
    a = l(158954),
    s = l(397927),
    r = l(219893),
    d = l(95396),
    u = l(153739),
    c = l(728499),
    o = l(602339),
    m = l(985018),
    h = l(166670);
let x = 48;
function f(e) {
    let [t, l] = e.split(":").map(Number);
    return { hours: t, minutes: l };
}
function j(e) {
    return `${e.hours}:${e.minutes}`;
}
function g(e) {
    return { hours: Math.floor((30 * e) / 60), minutes: (30 * e) % 60 };
}
function p(e) {
    let { conflictingEntries: t } = e;
    return 0 === t.length
        ? null
        : (0, n.jsx)(a.po8, {
              className: h.VE,
              messageType: a.YCn.WARNING,
              children: (0, n.jsxs)(a.BJc, {
                  gap: 8,
                  children: [
                      (0, n.jsx)(a.EYj, { variant: "text-sm/medium", children: m.intl.string(o.default["26A0Df"]) }),
                      (0, n.jsx)(a.BJc, {
                          gap: 4,
                          children: t.map((e) => {
                              let { dayLabel: t, timeRange: l } = e;
                              return (0, n.jsx)(a.EYj, { variant: "text-sm/medium", children: `${t}  ${l}` }, t);
                          }),
                      }),
                  ],
              }),
          });
}
function y(e) {
    let { transitionState: t, onClose: l, teenId: y, rule: b } = e,
        v = null != b,
        S = (0, u.F7)(y),
        [C, N] = (0, c.A)({ initial: b?.startTime, defaultValue: { hours: 22, minutes: 0 } }),
        [_, k] = (0, c.A)({ initial: b?.endTime, defaultValue: { hours: 7, minutes: 0 } }),
        [w, E] = i.useState(() => (null != b ? new Set(b.days) : new Set())),
        [M, Y] = i.useState(!1),
        [A, B] = i.useState(!1),
        [T, J] = i.useState(b?.enabled ?? !0),
        $ = i.useMemo(() => (0, r.yK)("short"), []),
        I = i.useMemo(
            () =>
                Array.from({ length: x }, (e, t) => {
                    let l = g(t),
                        n = j(l);
                    return { id: n, value: n, label: (0, r.fU)(l) };
                }),
            [],
        ),
        R = i.useMemo(
            () =>
                (function (e) {
                    let t = (0, r.yN)(e),
                        l = (0, r.yN)(e) / 30,
                        i = [];
                    for (let e = 1; e < x; e++) {
                        let a = g((l + e) % x),
                            s = (0, r.yN)(a),
                            d = s > t ? s - t : 1440 - t + s,
                            u = j(a);
                        i.push({
                            id: u,
                            value: u,
                            label: (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, r.fU)(a),
                                    (0, n.jsx)("span", { className: h.us, children: ` \xb7 ${(0, r.a3)(d)}` }),
                                ],
                            }),
                        });
                    }
                    return i;
                })(C),
            [C],
        ),
        U = i.useMemo(() => {
            let e = S?.restrictedSchedule?.rules ?? [];
            return v && null != b ? e.filter((e) => e.ruleId !== b.ruleId) : e;
        }, [v, b, S?.restrictedSchedule?.rules]),
        z = i.useMemo(() => (0, r.d)(w, U, $), [$, U, w]),
        G = (0, r.yN)(C) > (0, r.yN)(_),
        H = (0, r.yN)(C) !== (0, r.yN)(_),
        V = async () => {
            Y(!0);
            try {
                let e = {
                    label: "",
                    start_time: (0, r.v9)(C),
                    end_time: (0, r.v9)(_),
                    days: Array.from(w),
                    enabled: T,
                };
                v ? await (0, d.Um)(y, b.ruleId, e) : await (0, d.qP)(y, e), l();
            } finally {
                Y(!1);
            }
        },
        D = async () => {
            if (v) {
                B(!0);
                try {
                    await (0, d.CS)(y, b.ruleId), l();
                } finally {
                    B(!1);
                }
            }
        },
        F = {
            startTime: (0, r.fU)(C),
            endTime: (0, r.fU)(_),
            timeHook: (e, t) =>
                (0, n.jsx)(a.EYj, { variant: "text-sm/medium", color: "text-default", tag: "span", children: e }, t),
        },
        O = G ? m.intl.format(o.default.R87Y2K, F) : m.intl.format(o.default.vX7xid, F),
        P = M || A,
        W = v
            ? [
                  {
                      variant: "critical-secondary",
                      text: m.intl.string(o.default.d8pizZ),
                      onClick: D,
                      disabled: P,
                      loading: A,
                  },
                  { text: m.intl.string(o.default.TDc9mW), onClick: V, disabled: 0 === w.size || !H || P, loading: M },
              ]
            : [
                  { variant: "secondary", text: m.intl.string(m.t["ETE/oC"]), onClick: l, disabled: P },
                  { text: m.intl.string(o.default.pvcruO), onClick: V, disabled: 0 === w.size || !H || P, loading: M },
              ];
    return (0, n.jsx)(a.Modal, {
        transitionState: t,
        onClose: l,
        title: m.intl.string(o.default["w/ISB8"]),
        subtitle: m.intl.string(o.default.AcJ4ke),
        actions: W,
        children: (0, n.jsxs)(a.BJc, {
            gap: 24,
            children: [
                v &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(a.dOG, {
                                checked: T,
                                label: m.intl.string(o.default["30Owsd"]),
                                onChange: () => {
                                    J((e) => !e);
                                },
                            }),
                            (0, n.jsx)(a.cGx, {}),
                        ],
                    }),
                (0, n.jsxs)(a.BJc, {
                    gap: 8,
                    children: [
                        (0, n.jsx)(a.EYj, {
                            variant: "text-sm/semibold",
                            children: m.intl.string(o.default["37z4a2"]),
                        }),
                        (0, n.jsxs)("div", {
                            className: h.ae,
                            children: [
                                (0, n.jsx)("div", {
                                    className: h.k3,
                                    children: (0, n.jsx)(a.l6P, {
                                        label: m.intl.string(o.default["37z4a2"]),
                                        hideLabel: !0,
                                        selectionMode: "single",
                                        options: I,
                                        value: j(C),
                                        onSelectionChange: (e) => {
                                            if (null != e) {
                                                let t = f(e);
                                                N(t);
                                                let l = ((0, r.yN)(t) + 540) % 1440;
                                                k({ hours: Math.floor(l / 60), minutes: l % 60 });
                                            }
                                        },
                                    }),
                                }),
                                (0, n.jsx)(a.EYj, {
                                    variant: "text-md/medium",
                                    children: m.intl.string(o.default.n2mCrR),
                                }),
                                (0, n.jsx)("div", {
                                    className: h.k3,
                                    children: (0, n.jsx)(a.l6P, {
                                        label: m.intl.string(o.default.n2mCrR),
                                        hideLabel: !0,
                                        selectionMode: "single",
                                        options: R,
                                        value: j(_),
                                        onSelectionChange: (e) => {
                                            null != e && k(f(e));
                                        },
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsx)(a.cGx, {}),
                (0, n.jsxs)(a.BJc, {
                    gap: 8,
                    children: [
                        (0, n.jsxs)(a.BJc, {
                            gap: 4,
                            children: [
                                (0, n.jsx)(a.EYj, {
                                    variant: "text-sm/semibold",
                                    children: m.intl.string(o.default.HaV0Sg),
                                }),
                                (0, n.jsx)(a.EYj, { variant: "text-sm/normal", color: "text-muted", children: O }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: h.kS,
                            children: r.yG.map((e, t) => {
                                let l = w.has(e);
                                return (0, n.jsx)(
                                    s.DUT,
                                    {
                                        role: "button",
                                        "aria-pressed": l,
                                        className: `${h.ly} ${l ? h.wH : ""}`,
                                        onClick: () => {
                                            E((t) => {
                                                let l = new Set(t);
                                                return l.has(e) ? l.delete(e) : l.add(e), l;
                                            });
                                        },
                                        children: (0, n.jsx)(a.EYj, {
                                            variant: "text-sm/semibold",
                                            color: "currentColor",
                                            children: $[t],
                                        }),
                                    },
                                    e,
                                );
                            }),
                        }),
                        (0, n.jsx)(p, { conflictingEntries: z.conflictingEntries }),
                    ],
                }),
            ],
        }),
    });
}
