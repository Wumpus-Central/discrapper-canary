l.d(t, { default: () => k }), l(321073);
var n = l(627968),
    a = l(64700),
    r = l(158954),
    i = l(397927),
    s = l(219893),
    u = l(95396),
    d = l(153739),
    o = l(728499),
    c = l(602339),
    m = l(985018),
    h = l(166670);
let f = 48,
    x = /^(\d{1,2}):(\d{2})$/;
function g(e) {
    let [t, l] = e.split(":").map(Number);
    return { hours: t, minutes: l };
}
function j(e) {
    return `${e.hours}:${String(e.minutes).padStart(2, "0")}`;
}
function y(e) {
    let t = x.exec(e.trim());
    if (null == t) return [];
    let l = Number(t[1]),
        n = Number(t[2]);
    if (l >= 24 || n >= 60) return [];
    let a = [{ hours: l, minutes: n }];
    return l >= 1 && l < 12 && a.push({ hours: l + 12, minutes: n }), a;
}
function p(e) {
    return { hours: Math.floor((30 * e) / 60), minutes: (30 * e) % 60 };
}
function v(e, t) {
    return (0, s.yN)(g(e.value)) - (0, s.yN)(g(t.value));
}
function b(e) {
    let t = j(e);
    return { id: t, value: t, label: (0, s.fU)(e) };
}
function S(e) {
    return (t) => {
        var l;
        let a = j(t),
            r = (0, s.yN)(t);
        return {
            id: a,
            value: a,
            label: (0, s.fU)(t),
            trailing:
                ((l = r > e ? r - e : 1440 - e + r), (0, n.jsx)("span", { className: h.us, children: (0, s.a3)(l) })),
        };
    };
}
function N(e, t, l) {
    let n = j(t);
    e.some((e) => e.value === n) || e.push(l(t));
}
function C(e) {
    let { conflictingEntries: t } = e;
    return 0 === t.length
        ? null
        : (0, n.jsx)(r.po8, {
              className: h.VE,
              messageType: r.YCn.WARNING,
              children: (0, n.jsxs)(r.BJc, {
                  gap: 8,
                  children: [
                      (0, n.jsx)(r.EYj, { variant: "text-sm/medium", children: m.intl.string(c.default["26A0Df"]) }),
                      (0, n.jsx)(r.BJc, {
                          gap: 4,
                          children: t.map((e) => {
                              let { dayLabel: t, timeRange: l } = e;
                              return (0, n.jsx)(r.EYj, { variant: "text-sm/medium", children: `${t}  ${l}` }, t);
                          }),
                      }),
                  ],
              }),
          });
}
function k(e) {
    let { transitionState: t, onClose: l, teenId: x, rule: k } = e,
        _ = null != k,
        E = (0, d.F7)(x),
        [w, M] = (0, o.A)({ initial: k?.startTime, defaultValue: { hours: 22, minutes: 0 } }),
        [T, Y] = a.useState(""),
        [A, B] = (0, o.A)({ initial: k?.endTime, defaultValue: { hours: 7, minutes: 0 } }),
        [J, U] = a.useState(""),
        [$, I] = a.useState(() => (null != k ? new Set(k.days) : new Set())),
        [R, z] = a.useState(!1),
        [G, H] = a.useState(!1),
        [O, V] = a.useState(k?.enabled ?? !0),
        D = a.useMemo(() => (0, s.yK)("short"), []),
        W = a.useMemo(() => {
            let e = Array.from({ length: f }, (e, t) => {
                let l = p(t),
                    n = j(l);
                return { id: n, value: n, label: (0, s.fU)(l) };
            });
            for (let t of (N(e, w, b), y(T))) N(e, t, b);
            return e.sort(v);
        }, [w, T]),
        Z = a.useMemo(() => {
            let e,
                t,
                l,
                n,
                a = (0, s.yN)(w),
                r =
                    ((t = Math.floor((e = (0, s.yN)(w)) / 30) + 1),
                    (l = S(e)),
                    Array.from({ length: f - 1 }, (e, n) => l(p((t + n) % f))));
            for (let e of (N(r, A, S(a)), y(J))) N(r, e, S(a));
            return r.sort(
                ((n = (e) => {
                    let t = (0, s.yN)(g(e));
                    return t > a ? t - a : 1440 - a + t;
                }),
                (e, t) => n(e.value) - n(t.value)),
            );
        }, [w, A, J]),
        F = a.useMemo(() => {
            let e = E?.restrictedSchedule?.rules ?? [];
            return _ && null != k ? e.filter((e) => e.ruleId !== k.ruleId) : e;
        }, [_, k, E?.restrictedSchedule?.rules]),
        K = a.useMemo(() => (0, s.d)($, F, D), [D, F, $]),
        L = (0, s.yN)(w) > (0, s.yN)(A),
        Q = (0, s.yN)(w) !== (0, s.yN)(A),
        q = async () => {
            z(!0);
            try {
                let e = {
                    label: "",
                    start_time: (0, s.v9)(w),
                    end_time: (0, s.v9)(A),
                    days: Array.from($),
                    enabled: O,
                };
                _ ? await (0, u.Um)(x, k.ruleId, e) : await (0, u.qP)(x, e), l();
            } finally {
                z(!1);
            }
        },
        P = async () => {
            if (_) {
                H(!0);
                try {
                    await (0, u.CS)(x, k.ruleId), l();
                } finally {
                    H(!1);
                }
            }
        },
        X = {
            startTime: (0, s.fU)(w),
            endTime: (0, s.fU)(A),
            timeHook: (e, t) =>
                (0, n.jsx)(r.EYj, { variant: "text-sm/medium", color: "text-default", tag: "span", children: e }, t),
        },
        ee = L ? m.intl.format(c.default.R87Y2K, X) : m.intl.format(c.default.vX7xid, X),
        et = R || G,
        el = _
            ? [
                  {
                      variant: "critical-secondary",
                      text: m.intl.string(c.default.d8pizZ),
                      onClick: P,
                      disabled: et,
                      loading: G,
                  },
                  { text: m.intl.string(c.default.TDc9mW), onClick: q, disabled: 0 === $.size || !Q || et, loading: R },
              ]
            : [
                  { variant: "secondary", text: m.intl.string(m.t["ETE/oC"]), onClick: l, disabled: et },
                  { text: m.intl.string(c.default.pvcruO), onClick: q, disabled: 0 === $.size || !Q || et, loading: R },
              ];
    return (0, n.jsx)(r.Modal, {
        transitionState: t,
        onClose: l,
        title: m.intl.string(c.default["w/ISB8"]),
        subtitle: m.intl.string(c.default.AcJ4ke),
        actions: el,
        children: (0, n.jsxs)(r.BJc, {
            gap: 24,
            children: [
                _ &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(r.dOG, {
                                checked: O,
                                label: m.intl.string(c.default["30Owsd"]),
                                onChange: () => {
                                    V((e) => !e);
                                },
                            }),
                            (0, n.jsx)(r.cGx, {}),
                        ],
                    }),
                (0, n.jsxs)(r.BJc, {
                    gap: 8,
                    children: [
                        (0, n.jsx)(r.EYj, {
                            variant: "text-sm/semibold",
                            children: m.intl.string(c.default["37z4a2"]),
                        }),
                        (0, n.jsxs)("div", {
                            className: h.ae,
                            children: [
                                (0, n.jsx)("div", {
                                    className: h.k3,
                                    children: (0, n.jsx)(i.ZiE, {
                                        label: m.intl.string(c.default["37z4a2"]),
                                        hideLabel: !0,
                                        selectionMode: "single",
                                        options: W,
                                        value: j(w),
                                        matchSorterOptions: { keys: ["value", "label"] },
                                        onQueryChange: (e) => Y(e.currentTarget.value),
                                        onSelectionChange: (e) => {
                                            if (null != e) {
                                                let t = g(e);
                                                M(t), Y("");
                                                let l = ((0, s.yN)(t) + 540) % 1440;
                                                B({ hours: Math.floor(l / 60), minutes: l % 60 });
                                            }
                                        },
                                    }),
                                }),
                                (0, n.jsx)(r.EYj, {
                                    variant: "text-md/medium",
                                    children: m.intl.string(c.default.n2mCrR),
                                }),
                                (0, n.jsx)("div", {
                                    className: h.k3,
                                    children: (0, n.jsx)(i.ZiE, {
                                        label: m.intl.string(c.default.n2mCrR),
                                        hideLabel: !0,
                                        selectionMode: "single",
                                        options: Z,
                                        value: j(A),
                                        matchSorterOptions: { keys: ["value", "label"] },
                                        onQueryChange: (e) => U(e.currentTarget.value),
                                        onSelectionChange: (e) => {
                                            null != e && (B(g(e)), U(""));
                                        },
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsx)(r.cGx, {}),
                (0, n.jsxs)(r.BJc, {
                    gap: 8,
                    children: [
                        (0, n.jsxs)(r.BJc, {
                            gap: 4,
                            children: [
                                (0, n.jsx)(r.EYj, {
                                    variant: "text-sm/semibold",
                                    children: m.intl.string(c.default.HaV0Sg),
                                }),
                                (0, n.jsx)(r.EYj, { variant: "text-sm/normal", color: "text-muted", children: ee }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: h.kS,
                            children: s.yG.map((e, t) => {
                                let l = $.has(e);
                                return (0, n.jsx)(
                                    i.DUT,
                                    {
                                        role: "button",
                                        "aria-pressed": l,
                                        className: `${h.ly} ${l ? h.wH : ""}`,
                                        onClick: () => {
                                            I((t) => {
                                                let l = new Set(t);
                                                return l.has(e) ? l.delete(e) : l.add(e), l;
                                            });
                                        },
                                        children: (0, n.jsx)(r.EYj, {
                                            variant: "text-sm/semibold",
                                            color: "currentColor",
                                            children: D[t],
                                        }),
                                    },
                                    e,
                                );
                            }),
                        }),
                        (0, n.jsx)(C, { conflictingEntries: K.conflictingEntries }),
                    ],
                }),
            ],
        }),
    });
}
