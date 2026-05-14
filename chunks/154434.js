l.d(t, { default: () => I }), l(321073);
var n = l(627968),
    r = l(64700),
    a = l(896170),
    i = l(834730),
    s = l(512950),
    u = l(331322),
    d = l(189213),
    o = l(243721),
    c = l(404778),
    m = l(783878),
    h = l(939249),
    f = l(219893),
    x = l(95396),
    g = l(153739);
function v(e) {
    let { initial: t, defaultValue: l } = e;
    return r.useState(() => (null != t ? { hours: t.hours, minutes: t.minutes } : l));
}
var p = l(602339),
    j = l(375708),
    y = l(166670);
let b = 48,
    S = /^(\d{1,2}):(\d{1,2})$/;
function N(e) {
    let [t, l] = e.split(":").map(Number);
    return { hours: t, minutes: l };
}
function k(e) {
    return `${e.hours}:${String(e.minutes).padStart(2, "0")}`;
}
function C(e) {
    let t = S.exec(e.trim());
    if (null == t) return [];
    let l = Number(t[1]),
        n = 1 === t[2].length ? 10 * Number(t[2]) : Number(t[2]);
    if (l >= 24 || n >= 60) return [];
    let r = [{ hours: l, minutes: n }];
    return 12 === l ? r.push({ hours: 0, minutes: n }) : l >= 1 && l < 12 && r.push({ hours: l + 12, minutes: n }), r;
}
function E(e) {
    return { hours: Math.floor((30 * e) / 60), minutes: (30 * e) % 60 };
}
function T(e, t) {
    return (0, f.yN)(N(e.value)) - (0, f.yN)(N(t.value));
}
function M(e) {
    let t = k(e);
    return { id: t, value: t, label: (0, f.fU)(e) };
}
function w(e) {
    let { durationMinutes: t } = e;
    return (0, n.jsxs)("div", {
        className: y.Hr,
        children: [
            (0, n.jsx)(i.E, {
                tag: "span",
                variant: "text-sm/normal",
                color: "text-subtle",
                className: y.qu,
                "aria-hidden": !0,
                children: "\u2022",
            }),
            (0, n.jsx)(i.E, { tag: "span", variant: "text-sm/normal", color: "text-subtle", children: (0, f.a3)(t) }),
        ],
    });
}
function H(e) {
    return function (t) {
        let l = k(t),
            r = (0, f.yN)(t);
        return {
            id: l,
            value: l,
            label: (0, f.fU)(t),
            trailing: (0, n.jsx)(w, { durationMinutes: r > e ? r - e : 1440 - e + r }),
        };
    };
}
function $(e, t, l) {
    let n = k(t);
    e.some((e) => e.value === n) || e.push(l(t));
}
function A(e) {
    let { conflictingEntries: t } = e;
    return 0 === t.length
        ? null
        : (0, n.jsx)(s.p, {
              className: y.VE,
              messageType: s.Y.WARNING,
              children: (0, n.jsxs)(u.B, {
                  gap: 8,
                  children: [
                      (0, n.jsx)(i.E, { variant: "text-sm/medium", children: j.intl.string(p.default["26A0Df"]) }),
                      (0, n.jsx)(u.B, {
                          gap: 4,
                          children: t.map((e) => {
                              let { dayLabel: t, timeRange: l } = e;
                              return (0, n.jsx)(i.E, { variant: "text-sm/medium", children: `${t}  ${l}` }, t);
                          }),
                      }),
                  ],
              }),
          });
}
function I(e) {
    let { transitionState: t, onClose: l, teenId: s, rule: S } = e,
        w = null != S,
        I = (0, g.F7)(s),
        [B, R] = v({ initial: S?.startTime, defaultValue: { hours: 22, minutes: 0 } }),
        [U, _] = r.useState(""),
        [z, O] = v({ initial: S?.endTime, defaultValue: { hours: 7, minutes: 0 } }),
        [V, W] = r.useState(""),
        [D, Z] = r.useState(() => (null != S ? new Set(S.days) : new Set())),
        [q, F] = r.useState(!1),
        [G, K] = r.useState(!1),
        [L, Q] = r.useState(S?.enabled ?? !0),
        Y = r.useMemo(() => (0, f.yK)("short"), []),
        J = r.useMemo(() => {
            let e = Array.from({ length: b }, (e, t) => {
                let l = E(t),
                    n = k(l);
                return { id: n, value: n, label: (0, f.fU)(l) };
            });
            for (let t of ($(e, B, M), C(U))) $(e, t, M);
            return e.sort(T);
        }, [B, U]),
        P = r.useMemo(() => {
            let e,
                t,
                l,
                n,
                r = (0, f.yN)(B),
                a =
                    ((t = Math.floor((e = (0, f.yN)(B)) / 30) + 1),
                    (l = H(e)),
                    Array.from({ length: b - 1 }, (e, n) => l(E((t + n) % b))));
            for (let e of ($(a, z, H(r)), C(V))) $(a, e, H(r));
            return a.sort(
                ((n = (e) => {
                    let t = (0, f.yN)(N(e));
                    return t > r ? t - r : 1440 - r + t;
                }),
                (e, t) => n(e.value) - n(t.value)),
            );
        }, [B, z, V]),
        X = r.useMemo(() => {
            let e = I?.restrictedSchedule?.rules ?? [];
            return w && null != S ? e.filter((e) => e.ruleId !== S.ruleId) : e;
        }, [w, S, I?.restrictedSchedule?.rules]),
        ee = r.useMemo(() => (0, f.d)(D, X, Y), [Y, X, D]),
        et = (0, f.yN)(B) > (0, f.yN)(z),
        el = (0, f.yN)(B) !== (0, f.yN)(z),
        en = async () => {
            F(!0);
            try {
                let e = {
                    label: "",
                    start_time: (0, f.v9)(B),
                    end_time: (0, f.v9)(z),
                    days: Array.from(D),
                    enabled: L,
                };
                w ? await (0, x.Um)(s, S.ruleId, e) : await (0, x.qP)(s, e), l();
            } finally {
                F(!1);
            }
        },
        er = async () => {
            if (w) {
                K(!0);
                try {
                    await (0, x.CS)(s, S.ruleId), l();
                } finally {
                    K(!1);
                }
            }
        },
        ea = {
            startTime: (0, f.fU)(B),
            endTime: (0, f.fU)(z),
            timeHook: (e, t) =>
                (0, n.jsx)(i.E, { variant: "text-sm/medium", color: "text-default", tag: "span", children: e }, t),
        },
        ei = et ? j.intl.format(p.default.R87Y2K, ea) : j.intl.format(p.default.vX7xid, ea),
        es = q || G,
        eu = w
            ? [
                  {
                      variant: "critical-secondary",
                      text: j.intl.string(p.default.d8pizZ),
                      onClick: er,
                      disabled: es,
                      loading: G,
                  },
                  {
                      text: j.intl.string(p.default.TDc9mW),
                      onClick: en,
                      disabled: 0 === D.size || !el || es,
                      loading: q,
                  },
              ]
            : [
                  { variant: "secondary", text: j.intl.string(j.t["ETE/oC"]), onClick: l, disabled: es },
                  {
                      text: j.intl.string(p.default.pvcruO),
                      onClick: en,
                      disabled: 0 === D.size || !el || es,
                      loading: q,
                  },
              ];
    return (0, n.jsx)(d.Modal, {
        transitionState: t,
        onClose: l,
        title: j.intl.string(p.default["w/ISB8"]),
        subtitle: j.intl.string(p.default.AcJ4ke),
        actions: eu,
        children: (0, n.jsxs)(u.B, {
            gap: 24,
            children: [
                w &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(o.d, {
                                checked: L,
                                label: j.intl.string(p.default["30Owsd"]),
                                onChange: () => {
                                    Q((e) => !e);
                                },
                            }),
                            (0, n.jsx)(c.c, {}),
                        ],
                    }),
                (0, n.jsxs)(u.B, {
                    gap: 8,
                    children: [
                        (0, n.jsx)(i.E, { variant: "text-sm/semibold", children: j.intl.string(p.default["37z4a2"]) }),
                        (0, n.jsxs)("div", {
                            className: y.ae,
                            children: [
                                (0, n.jsx)("div", {
                                    className: y.k3,
                                    children: (0, n.jsx)(m.Z, {
                                        label: j.intl.string(p.default["37z4a2"]),
                                        hideLabel: !0,
                                        selectionMode: "single",
                                        options: J,
                                        value: k(B),
                                        matchSorterOptions: {
                                            keys: ["value", "label"],
                                            threshold: a.Ht.rankings.STARTS_WITH,
                                        },
                                        onQueryChange: (e) => _(e.currentTarget.value),
                                        onSelectionChange: (e) => {
                                            if (null != e) {
                                                let t = N(e);
                                                R(t), _("");
                                                let l = ((0, f.yN)(t) + 540) % 1440;
                                                O({ hours: Math.floor(l / 60), minutes: l % 60 });
                                            }
                                        },
                                    }),
                                }),
                                (0, n.jsx)(i.E, {
                                    variant: "text-md/medium",
                                    children: j.intl.string(p.default.n2mCrR),
                                }),
                                (0, n.jsx)("div", {
                                    className: `${y.k3} ${y.H7}`,
                                    children: (0, n.jsx)(m.Z, {
                                        label: j.intl.string(p.default.n2mCrR),
                                        hideLabel: !0,
                                        selectionMode: "single",
                                        options: P,
                                        value: k(z),
                                        matchSorterOptions: {
                                            keys: ["value", "label"],
                                            threshold: a.Ht.rankings.STARTS_WITH,
                                        },
                                        onQueryChange: (e) => W(e.currentTarget.value),
                                        onSelectionChange: (e) => {
                                            null != e && (O(N(e)), W(""));
                                        },
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsx)(c.c, {}),
                (0, n.jsxs)(u.B, {
                    gap: 8,
                    children: [
                        (0, n.jsxs)(u.B, {
                            gap: 4,
                            children: [
                                (0, n.jsx)(i.E, {
                                    variant: "text-sm/semibold",
                                    children: j.intl.string(p.default.HaV0Sg),
                                }),
                                (0, n.jsx)(i.E, { variant: "text-sm/normal", color: "text-muted", children: ei }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: y.kS,
                            children: f.yG.map((e, t) => {
                                let l = D.has(e);
                                return (0, n.jsx)(
                                    h.D,
                                    {
                                        role: "button",
                                        "aria-pressed": l,
                                        className: `${y.ly} ${l ? y.wH : ""}`,
                                        onClick: () => {
                                            Z((t) => {
                                                let l = new Set(t);
                                                return l.has(e) ? l.delete(e) : l.add(e), l;
                                            });
                                        },
                                        children: (0, n.jsx)(i.E, {
                                            variant: "text-sm/semibold",
                                            color: "currentColor",
                                            children: Y[t],
                                        }),
                                    },
                                    e,
                                );
                            }),
                        }),
                        (0, n.jsx)(A, { conflictingEntries: ee.conflictingEntries }),
                    ],
                }),
            ],
        }),
    });
}
