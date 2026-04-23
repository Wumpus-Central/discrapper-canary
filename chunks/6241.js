l.d(t, { default: () => T }), l(321073);
var n = l(627968),
    a = l(64700),
    r = l(512950),
    i = l(331322),
    s = l(834730),
    u = l(189213),
    d = l(243721),
    o = l(404778),
    c = l(783878),
    m = l(939249),
    h = l(219893),
    f = l(95396),
    x = l(153739),
    g = l(728499),
    y = l(602339),
    p = l(985018),
    v = l(166670);
let j = 48,
    b = /^(\d{1,2}):(\d{2})$/;
function S(e) {
    let [t, l] = e.split(":").map(Number);
    return { hours: t, minutes: l };
}
function N(e) {
    return `${e.hours}:${String(e.minutes).padStart(2, "0")}`;
}
function k(e) {
    let t = b.exec(e.trim());
    if (null == t) return [];
    let l = Number(t[1]),
        n = Number(t[2]);
    if (l >= 24 || n >= 60) return [];
    let a = [{ hours: l, minutes: n }];
    return l >= 1 && l < 12 && a.push({ hours: l + 12, minutes: n }), a;
}
function C(e) {
    return { hours: Math.floor((30 * e) / 60), minutes: (30 * e) % 60 };
}
function _(e, t) {
    return (0, h.yN)(S(e.value)) - (0, h.yN)(S(t.value));
}
function w(e) {
    let t = N(e);
    return { id: t, value: t, label: (0, h.fU)(e) };
}
function E(e) {
    return (t) => {
        var l;
        let a = N(t),
            r = (0, h.yN)(t);
        return {
            id: a,
            value: a,
            label: (0, h.fU)(t),
            trailing:
                ((l = r > e ? r - e : 1440 - e + r), (0, n.jsx)("span", { className: v.us, children: (0, h.a3)(l) })),
        };
    };
}
function M(e, t, l) {
    let n = N(t);
    e.some((e) => e.value === n) || e.push(l(t));
}
function A(e) {
    let { conflictingEntries: t } = e;
    return 0 === t.length
        ? null
        : (0, n.jsx)(r.p, {
              className: v.VE,
              messageType: r.Y.WARNING,
              children: (0, n.jsxs)(i.B, {
                  gap: 8,
                  children: [
                      (0, n.jsx)(s.E, { variant: "text-sm/medium", children: p.intl.string(y.default["26A0Df"]) }),
                      (0, n.jsx)(i.B, {
                          gap: 4,
                          children: t.map((e) => {
                              let { dayLabel: t, timeRange: l } = e;
                              return (0, n.jsx)(s.E, { variant: "text-sm/medium", children: `${t}  ${l}` }, t);
                          }),
                      }),
                  ],
              }),
          });
}
function T(e) {
    let { transitionState: t, onClose: l, teenId: r, rule: b } = e,
        T = null != b,
        B = (0, x.F7)(r),
        [$, I] = (0, g.A)({ initial: b?.startTime, defaultValue: { hours: 22, minutes: 0 } }),
        [R, U] = a.useState(""),
        [z, H] = (0, g.A)({ initial: b?.endTime, defaultValue: { hours: 7, minutes: 0 } }),
        [V, O] = a.useState(""),
        [D, W] = a.useState(() => (null != b ? new Set(b.days) : new Set())),
        [Z, F] = a.useState(!1),
        [G, K] = a.useState(!1),
        [L, Q] = a.useState(b?.enabled ?? !0),
        Y = a.useMemo(() => (0, h.yK)("short"), []),
        q = a.useMemo(() => {
            let e = Array.from({ length: j }, (e, t) => {
                let l = C(t),
                    n = N(l);
                return { id: n, value: n, label: (0, h.fU)(l) };
            });
            for (let t of (M(e, $, w), k(R))) M(e, t, w);
            return e.sort(_);
        }, [$, R]),
        J = a.useMemo(() => {
            let e,
                t,
                l,
                n,
                a = (0, h.yN)($),
                r =
                    ((t = Math.floor((e = (0, h.yN)($)) / 30) + 1),
                    (l = E(e)),
                    Array.from({ length: j - 1 }, (e, n) => l(C((t + n) % j))));
            for (let e of (M(r, z, E(a)), k(V))) M(r, e, E(a));
            return r.sort(
                ((n = (e) => {
                    let t = (0, h.yN)(S(e));
                    return t > a ? t - a : 1440 - a + t;
                }),
                (e, t) => n(e.value) - n(t.value)),
            );
        }, [$, z, V]),
        P = a.useMemo(() => {
            let e = B?.restrictedSchedule?.rules ?? [];
            return T && null != b ? e.filter((e) => e.ruleId !== b.ruleId) : e;
        }, [T, b, B?.restrictedSchedule?.rules]),
        X = a.useMemo(() => (0, h.d)(D, P, Y), [Y, P, D]),
        ee = (0, h.yN)($) > (0, h.yN)(z),
        et = (0, h.yN)($) !== (0, h.yN)(z),
        el = async () => {
            F(!0);
            try {
                let e = {
                    label: "",
                    start_time: (0, h.v9)($),
                    end_time: (0, h.v9)(z),
                    days: Array.from(D),
                    enabled: L,
                };
                T ? await (0, f.Um)(r, b.ruleId, e) : await (0, f.qP)(r, e), l();
            } finally {
                F(!1);
            }
        },
        en = async () => {
            if (T) {
                K(!0);
                try {
                    await (0, f.CS)(r, b.ruleId), l();
                } finally {
                    K(!1);
                }
            }
        },
        ea = {
            startTime: (0, h.fU)($),
            endTime: (0, h.fU)(z),
            timeHook: (e, t) =>
                (0, n.jsx)(s.E, { variant: "text-sm/medium", color: "text-default", tag: "span", children: e }, t),
        },
        er = ee ? p.intl.format(y.default.R87Y2K, ea) : p.intl.format(y.default.vX7xid, ea),
        ei = Z || G,
        es = T
            ? [
                  {
                      variant: "critical-secondary",
                      text: p.intl.string(y.default.d8pizZ),
                      onClick: en,
                      disabled: ei,
                      loading: G,
                  },
                  {
                      text: p.intl.string(y.default.TDc9mW),
                      onClick: el,
                      disabled: 0 === D.size || !et || ei,
                      loading: Z,
                  },
              ]
            : [
                  { variant: "secondary", text: p.intl.string(p.t["ETE/oC"]), onClick: l, disabled: ei },
                  {
                      text: p.intl.string(y.default.pvcruO),
                      onClick: el,
                      disabled: 0 === D.size || !et || ei,
                      loading: Z,
                  },
              ];
    return (0, n.jsx)(u.Modal, {
        transitionState: t,
        onClose: l,
        title: p.intl.string(y.default["w/ISB8"]),
        subtitle: p.intl.string(y.default.AcJ4ke),
        actions: es,
        children: (0, n.jsxs)(i.B, {
            gap: 24,
            children: [
                T &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(d.d, {
                                checked: L,
                                label: p.intl.string(y.default["30Owsd"]),
                                onChange: () => {
                                    Q((e) => !e);
                                },
                            }),
                            (0, n.jsx)(o.c, {}),
                        ],
                    }),
                (0, n.jsxs)(i.B, {
                    gap: 8,
                    children: [
                        (0, n.jsx)(s.E, { variant: "text-sm/semibold", children: p.intl.string(y.default["37z4a2"]) }),
                        (0, n.jsxs)("div", {
                            className: v.ae,
                            children: [
                                (0, n.jsx)("div", {
                                    className: v.k3,
                                    children: (0, n.jsx)(c.Z, {
                                        label: p.intl.string(y.default["37z4a2"]),
                                        hideLabel: !0,
                                        selectionMode: "single",
                                        options: q,
                                        value: N($),
                                        matchSorterOptions: { keys: ["value", "label"] },
                                        onQueryChange: (e) => U(e.currentTarget.value),
                                        onSelectionChange: (e) => {
                                            if (null != e) {
                                                let t = S(e);
                                                I(t), U("");
                                                let l = ((0, h.yN)(t) + 540) % 1440;
                                                H({ hours: Math.floor(l / 60), minutes: l % 60 });
                                            }
                                        },
                                    }),
                                }),
                                (0, n.jsx)(s.E, {
                                    variant: "text-md/medium",
                                    children: p.intl.string(y.default.n2mCrR),
                                }),
                                (0, n.jsx)("div", {
                                    className: v.k3,
                                    children: (0, n.jsx)(c.Z, {
                                        label: p.intl.string(y.default.n2mCrR),
                                        hideLabel: !0,
                                        selectionMode: "single",
                                        options: J,
                                        value: N(z),
                                        matchSorterOptions: { keys: ["value", "label"] },
                                        onQueryChange: (e) => O(e.currentTarget.value),
                                        onSelectionChange: (e) => {
                                            null != e && (H(S(e)), O(""));
                                        },
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsx)(o.c, {}),
                (0, n.jsxs)(i.B, {
                    gap: 8,
                    children: [
                        (0, n.jsxs)(i.B, {
                            gap: 4,
                            children: [
                                (0, n.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    children: p.intl.string(y.default.HaV0Sg),
                                }),
                                (0, n.jsx)(s.E, { variant: "text-sm/normal", color: "text-muted", children: er }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: v.kS,
                            children: h.yG.map((e, t) => {
                                let l = D.has(e);
                                return (0, n.jsx)(
                                    m.D,
                                    {
                                        role: "button",
                                        "aria-pressed": l,
                                        className: `${v.ly} ${l ? v.wH : ""}`,
                                        onClick: () => {
                                            W((t) => {
                                                let l = new Set(t);
                                                return l.has(e) ? l.delete(e) : l.add(e), l;
                                            });
                                        },
                                        children: (0, n.jsx)(s.E, {
                                            variant: "text-sm/semibold",
                                            color: "currentColor",
                                            children: Y[t],
                                        }),
                                    },
                                    e,
                                );
                            }),
                        }),
                        (0, n.jsx)(A, { conflictingEntries: X.conflictingEntries }),
                    ],
                }),
            ],
        }),
    });
}
