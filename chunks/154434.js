n.d(t, { default: () => I }), n(321073);
var l = n(627968),
    r = n(64700),
    i = n(896170),
    a = n(834730),
    s = n(512950),
    u = n(331322),
    d = n(189213),
    o = n(243721),
    c = n(404778),
    m = n(783878),
    h = n(939249),
    f = n(219893),
    x = n(95396),
    g = n(153739);
function v(e) {
    let { initial: t, defaultValue: n } = e;
    return r.useState(() => (null != t ? { hours: t.hours, minutes: t.minutes } : n));
}
var p = n(602339),
    j = n(375708),
    y = n(166670);
let b = 48,
    S = /^(\d{1,2}):(\d{1,2})$/;
function N(e) {
    let [t, n] = e.split(":").map(Number);
    return { hours: t, minutes: n };
}
function k(e) {
    return `${e.hours}:${String(e.minutes).padStart(2, "0")}`;
}
function C(e) {
    let t = S.exec(e.trim());
    if (null == t) return [];
    let n = Number(t[1]),
        l = 1 === t[2].length ? 10 * Number(t[2]) : Number(t[2]);
    if (n >= 24 || l >= 60) return [];
    let r = [{ hours: n, minutes: l }];
    return 12 === n ? r.push({ hours: 0, minutes: l }) : n >= 1 && n < 12 && r.push({ hours: n + 12, minutes: l }), r;
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
    return (0, l.jsxs)("div", {
        className: y.Hr,
        children: [
            (0, l.jsx)(a.E, {
                tag: "span",
                variant: "text-sm/normal",
                color: "text-subtle",
                className: y.qu,
                "aria-hidden": !0,
                children: "\u2022",
            }),
            (0, l.jsx)(a.E, { tag: "span", variant: "text-sm/normal", color: "text-subtle", children: (0, f.a3)(t) }),
        ],
    });
}
function H(e) {
    return function (t) {
        let n = k(t),
            r = (0, f.yN)(t);
        return {
            id: n,
            value: n,
            label: (0, f.fU)(t),
            trailing: (0, l.jsx)(w, { durationMinutes: r > e ? r - e : 1440 - e + r }),
        };
    };
}
function $(e, t, n) {
    let l = k(t);
    e.some((e) => e.value === l) || e.push(n(t));
}
function A(e) {
    let { conflictingEntries: t } = e;
    return 0 === t.length
        ? null
        : (0, l.jsx)(s.p, {
              className: y.VE,
              messageType: s.Y.WARNING,
              children: (0, l.jsxs)(u.B, {
                  gap: 8,
                  children: [
                      (0, l.jsx)(a.E, { variant: "text-sm/medium", children: j.intl.string(p.default["26A0Df"]) }),
                      (0, l.jsx)(u.B, {
                          gap: 4,
                          children: t.map((e) => {
                              let { dayLabel: t, timeRange: n } = e;
                              return (0, l.jsx)(a.E, { variant: "text-sm/medium", children: `${t}  ${n}` }, t);
                          }),
                      }),
                  ],
              }),
          });
}
function I(e) {
    let { transitionState: t, onClose: n, teenId: s, rule: S } = e,
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
                let n = E(t),
                    l = k(n);
                return { id: l, value: l, label: (0, f.fU)(n) };
            });
            for (let t of ($(e, B, M), C(U))) $(e, t, M);
            return e.sort(T);
        }, [B, U]),
        P = r.useMemo(() => {
            let e,
                t,
                n,
                l = (0, f.yN)(B),
                r =
                    ((t = Math.floor((e = (0, f.yN)(B)) / 30) + 1),
                    (n = H(e)),
                    Array.from({ length: b - 1 }, (e, l) => n(E((t + l) % b))));
            for (let e of ($(r, z, H(l)), C(V))) $(r, e, H(l));
            return r.sort(
                (function (e) {
                    function t(t) {
                        let n = (0, f.yN)(N(t));
                        return n > e ? n - e : 1440 - e + n;
                    }
                    return (e, n) => t(e.value) - t(n.value);
                })(l),
            );
        }, [B, z, V]),
        X = r.useMemo(() => {
            let e = I?.restrictedSchedule?.rules ?? [];
            return w && null != S ? e.filter((e) => e.ruleId !== S.ruleId) : e;
        }, [w, S, I?.restrictedSchedule?.rules]),
        ee = r.useMemo(() => (0, f.d)(D, X, Y), [Y, X, D]),
        et = (0, f.yN)(B) > (0, f.yN)(z),
        en = (0, f.yN)(B) !== (0, f.yN)(z);
    async function el() {
        F(!0);
        try {
            let e = { label: "", start_time: (0, f.v9)(B), end_time: (0, f.v9)(z), days: Array.from(D), enabled: L };
            w ? await (0, x.Um)(s, S.ruleId, e) : await (0, x.qP)(s, e), n();
        } finally {
            F(!1);
        }
    }
    async function er() {
        if (w) {
            K(!0);
            try {
                await (0, x.CS)(s, S.ruleId), n();
            } finally {
                K(!1);
            }
        }
    }
    let ei = {
            startTime: (0, f.fU)(B),
            endTime: (0, f.fU)(z),
            timeHook: (e, t) =>
                (0, l.jsx)(a.E, { variant: "text-sm/medium", color: "text-default", tag: "span", children: e }, t),
        },
        ea = et ? j.intl.format(p.default.R87Y2K, ei) : j.intl.format(p.default.vX7xid, ei),
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
                      onClick: el,
                      disabled: 0 === D.size || !en || es,
                      loading: q,
                  },
              ]
            : [
                  { variant: "secondary", text: j.intl.string(j.t["ETE/oC"]), onClick: n, disabled: es },
                  {
                      text: j.intl.string(p.default.pvcruO),
                      onClick: el,
                      disabled: 0 === D.size || !en || es,
                      loading: q,
                  },
              ];
    return (0, l.jsx)(d.Modal, {
        transitionState: t,
        onClose: n,
        title: j.intl.string(p.default["w/ISB8"]),
        subtitle: j.intl.string(p.default.AcJ4ke),
        actions: eu,
        children: (0, l.jsxs)(u.B, {
            gap: 24,
            children: [
                w &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(o.d, {
                                checked: L,
                                label: j.intl.string(p.default["30Owsd"]),
                                onChange: function () {
                                    Q((e) => !e);
                                },
                            }),
                            (0, l.jsx)(c.c, {}),
                        ],
                    }),
                (0, l.jsxs)(u.B, {
                    gap: 8,
                    children: [
                        (0, l.jsx)(a.E, { variant: "text-sm/semibold", children: j.intl.string(p.default["37z4a2"]) }),
                        (0, l.jsxs)("div", {
                            className: y.ae,
                            children: [
                                (0, l.jsx)("div", {
                                    className: y.k3,
                                    children: (0, l.jsx)(m.Z, {
                                        label: j.intl.string(p.default["37z4a2"]),
                                        hideLabel: !0,
                                        selectionMode: "single",
                                        options: J,
                                        value: k(B),
                                        matchSorterOptions: {
                                            keys: ["value", "label"],
                                            threshold: i.Ht.rankings.STARTS_WITH,
                                        },
                                        onQueryChange: (e) => _(e.currentTarget.value),
                                        onSelectionChange: (e) => {
                                            if (null != e) {
                                                let t = N(e);
                                                R(t), _("");
                                                let n = ((0, f.yN)(t) + 540) % 1440;
                                                O({ hours: Math.floor(n / 60), minutes: n % 60 });
                                            }
                                        },
                                    }),
                                }),
                                (0, l.jsx)(a.E, {
                                    variant: "text-md/medium",
                                    children: j.intl.string(p.default.n2mCrR),
                                }),
                                (0, l.jsx)("div", {
                                    className: `${y.k3} ${y.H7}`,
                                    children: (0, l.jsx)(m.Z, {
                                        label: j.intl.string(p.default.n2mCrR),
                                        hideLabel: !0,
                                        selectionMode: "single",
                                        options: P,
                                        value: k(z),
                                        matchSorterOptions: {
                                            keys: ["value", "label"],
                                            threshold: i.Ht.rankings.STARTS_WITH,
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
                (0, l.jsx)(c.c, {}),
                (0, l.jsxs)(u.B, {
                    gap: 8,
                    children: [
                        (0, l.jsxs)(u.B, {
                            gap: 4,
                            children: [
                                (0, l.jsx)(a.E, {
                                    variant: "text-sm/semibold",
                                    children: j.intl.string(p.default.HaV0Sg),
                                }),
                                (0, l.jsx)(a.E, { variant: "text-sm/normal", color: "text-muted", children: ea }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: y.kS,
                            children: f.yG.map((e, t) => {
                                let n = D.has(e);
                                return (0, l.jsx)(
                                    h.D,
                                    {
                                        role: "button",
                                        "aria-pressed": n,
                                        className: `${y.ly} ${n ? y.wH : ""}`,
                                        onClick: () => {
                                            Z((t) => {
                                                let n = new Set(t);
                                                return n.has(e) ? n.delete(e) : n.add(e), n;
                                            });
                                        },
                                        children: (0, l.jsx)(a.E, {
                                            variant: "text-sm/semibold",
                                            color: "currentColor",
                                            children: Y[t],
                                        }),
                                    },
                                    e,
                                );
                            }),
                        }),
                        (0, l.jsx)(A, { conflictingEntries: ee.conflictingEntries }),
                    ],
                }),
            ],
        }),
    });
}
