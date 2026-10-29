(n.d(t, { default: () => _ }), n(321073));
var l = n(477900),
    i = n(582128),
    r = n(896170),
    a = n(189213),
    s = n(834730),
    u = n(683071),
    o = n(858899),
    d = n(331322),
    c = n(193249),
    m = n(404778),
    f = n(890497),
    h = n(872162),
    g = n(939249),
    x = n(890283),
    y = n(219893),
    v = n(95396),
    b = n(153739);
function p(e) {
    let { initial: t, defaultValue: n } = e;
    return i.useState(() => (null != t ? { hours: t.hours, minutes: t.minutes } : n));
}
var S = n(82157),
    j = n(105292),
    N = n(39627);
let C = 48,
    k = /^(\d{1,2}):(\d{1,2})$/;
function w(e) {
    let [t, n] = e.split(":").map(Number);
    return { hours: t, minutes: n };
}
function M(e) {
    return `${e.hours}:${String(e.minutes).padStart(2, "0")}`;
}
function T(e) {
    let t = k.exec(e.trim());
    if (null == t) return [];
    let n = Number(t[1]),
        l = 1 === t[2].length ? 10 * Number(t[2]) : Number(t[2]);
    if (n >= 24 || l >= 60) return [];
    let i = [{ hours: n, minutes: l }];
    return (12 === n ? i.push({ hours: 0, minutes: l }) : n >= 1 && n < 12 && i.push({ hours: n + 12, minutes: l }), i);
}
function E(e) {
    return { hours: Math.floor((30 * e) / 60), minutes: (30 * e) % 60 };
}
function H(e, t) {
    return (0, y.yN)(w(e.value)) - (0, y.yN)(w(t.value));
}
function A(e) {
    let t = M(e);
    return { id: t, value: t, label: (0, y.fU)(e) };
}
function $(e) {
    let { durationMinutes: t } = e;
    return (0, l.jsxs)("div", {
        className: N.Hr,
        children: [
            (0, l.jsx)(s.E, {
                tag: "span",
                variant: "text-sm/normal",
                color: "text-subtle",
                className: N.qu,
                "aria-hidden": !0,
                children: "\u2022",
            }),
            (0, l.jsx)(s.E, { tag: "span", variant: "text-sm/normal", color: "text-subtle", children: (0, y.a3)(t) }),
        ],
    });
}
function B(e) {
    return function (t) {
        let n = M(t),
            i = (0, y.yN)(t);
        return {
            id: n,
            value: n,
            label: (0, y.fU)(t),
            trailing: (0, l.jsx)($, { durationMinutes: i > e ? i - e : 1440 - e + i }),
        };
    };
}
function I(e, t, n) {
    let l = M(t);
    e.some((e) => e.value === l) || e.push(n(t));
}
function U(e) {
    let { conflictingEntries: t } = e;
    return 0 === t.length
        ? null
        : (0, l.jsx)("div", {
              className: N.VE,
              children: (0, l.jsx)(u.w, {
                  type: "warning",
                  message: j.intl.string(S.default["26A0Df"]),
                  messageList: t.map((e) => {
                      let { dayLabel: t, timeRange: n } = e;
                      return `${t}  ${n}`;
                  }),
                  role: "status",
              }),
          });
}
function _(e) {
    let { transitionState: t, onClose: n, teenId: u, rule: k } = e,
        { enabled: $ } = x.A.useConfig({ location: "family-center-schedule-downtime-repeat-days" }),
        _ = null != k,
        z = (0, b.F7)(u),
        [K, R] = p({ initial: k?.startTime, defaultValue: { hours: 22, minutes: 0 } }),
        [V, W] = i.useState(""),
        [O, D] = p({ initial: k?.endTime, defaultValue: { hours: 7, minutes: 0 } }),
        [G, L] = i.useState(""),
        [P, Z] = i.useState(() => (null != k ? new Set(k.days) : new Set())),
        [q, F] = i.useState(!1),
        [Q, J] = i.useState(!1),
        [X, Y] = i.useState(k?.enabled ?? !0),
        ee = i.useMemo(() => (0, y.yK)("short"), []),
        et = i.useMemo(() => y.yG.map((e, t) => ({ id: String(e), label: ee[t] })), [ee]),
        en = i.useMemo(() => new Set(Array.from(P, (e) => String(e))), [P]),
        el = i.useMemo(() => {
            let e = Array.from({ length: C }, (e, t) => {
                let n = E(t),
                    l = M(n);
                return { id: l, value: l, label: (0, y.fU)(n) };
            });
            for (let t of (I(e, K, A), T(V))) I(e, t, A);
            return e.sort(H);
        }, [K, V]),
        ei = i.useMemo(() => {
            let e,
                t,
                n,
                l = (0, y.yN)(K),
                i =
                    ((t = Math.floor((e = (0, y.yN)(K)) / 30) + 1),
                    (n = B(e)),
                    Array.from({ length: C - 1 }, (e, l) => n(E((t + l) % C))));
            for (let e of (I(i, O, B(l)), T(G))) I(i, e, B(l));
            return i.sort(
                (function (e) {
                    function t(t) {
                        let n = (0, y.yN)(w(t));
                        return n > e ? n - e : 1440 - e + n;
                    }
                    return (e, n) => t(e.value) - t(n.value);
                })(l),
            );
        }, [K, O, G]),
        er = i.useMemo(() => {
            let e = z?.restrictedSchedule?.rules ?? [];
            return _ && null != k ? e.filter((e) => e.ruleId !== k.ruleId) : e;
        }, [_, k, z?.restrictedSchedule?.rules]),
        ea = i.useMemo(() => (0, y.d)(P, er, ee), [ee, er, P]),
        es = (0, y.yN)(K) > (0, y.yN)(O),
        eu = (0, y.yN)(K) !== (0, y.yN)(O);
    function eo(e) {
        Z((t) => {
            let n = new Set(t);
            return (n.has(e) ? n.delete(e) : n.add(e), n);
        });
    }
    async function ed() {
        F(!0);
        try {
            let e = { label: "", start_time: (0, y.v9)(K), end_time: (0, y.v9)(O), days: Array.from(P), enabled: X };
            (_ ? await (0, v.Um)(u, k.ruleId, e) : await (0, v.qP)(u, e), n());
        } catch {
            (0, o.P0)({ text: j.intl.string(S.default.Wu8BK2), variant: "critical" });
        } finally {
            F(!1);
        }
    }
    async function ec() {
        if (_) {
            J(!0);
            try {
                (await (0, v.CS)(u, k.ruleId), n());
            } catch {
                (0, o.P0)({ text: j.intl.string(S.default.Wu8BK2), variant: "critical" });
            } finally {
                J(!1);
            }
        }
    }
    let em = {
            startTime: (0, y.fU)(K),
            endTime: (0, y.fU)(O),
            timeHook: (e, t) =>
                (0, l.jsx)(s.E, { variant: "text-sm/medium", color: "text-default", tag: "span", children: e }, t),
        },
        ef = es ? j.intl.format(S.default.R87Y2K, em) : j.intl.format(S.default.vX7xid, em),
        eh = q || Q,
        eg = _
            ? [
                  {
                      variant: "critical-secondary",
                      text: j.intl.string(S.default.d8pizZ),
                      onClick: ec,
                      disabled: eh,
                      loading: Q,
                  },
                  {
                      text: j.intl.string(S.default.TDc9mW),
                      onClick: ed,
                      disabled: 0 === P.size || !eu || eh,
                      loading: q,
                  },
              ]
            : [
                  { variant: "secondary", text: j.intl.string(j.t["ETE/oC"]), onClick: n, disabled: eh },
                  {
                      text: j.intl.string(S.default.pvcruO),
                      onClick: ed,
                      disabled: 0 === P.size || !eu || eh,
                      loading: q,
                  },
              ];
    return (0, l.jsx)(a.a, {
        transitionState: t,
        onClose: n,
        title: j.intl.string(S.default["w/ISB8"]),
        subtitle: j.intl.string(S.default.AcJ4ke),
        actions: eg,
        children: (0, l.jsxs)(d.B, {
            gap: 24,
            children: [
                _ &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(c.d, {
                                checked: X,
                                label: j.intl.string(S.default["30Owsd"]),
                                onChange: function () {
                                    Y((e) => !e);
                                },
                            }),
                            (0, l.jsx)(m.c, {}),
                        ],
                    }),
                (0, l.jsxs)(d.B, {
                    gap: 8,
                    children: [
                        (0, l.jsx)(s.E, { variant: "text-sm/semibold", children: j.intl.string(S.default["37z4a2"]) }),
                        (0, l.jsxs)("div", {
                            className: N.ae,
                            children: [
                                (0, l.jsx)("div", {
                                    className: N.k3,
                                    children: (0, l.jsx)(f.Z, {
                                        label: j.intl.string(S.default["37z4a2"]),
                                        hideLabel: !0,
                                        selectionMode: "single",
                                        options: el,
                                        value: M(K),
                                        matchSorterOptions: {
                                            keys: ["value", "label"],
                                            threshold: r.Ht.rankings.STARTS_WITH,
                                        },
                                        onQueryChange: (e) => W(e.currentTarget.value),
                                        onSelectionChange: (e) => {
                                            if (null != e) {
                                                let t = w(e);
                                                (R(t), W(""));
                                                let n = ((0, y.yN)(t) + 540) % 1440;
                                                D({ hours: Math.floor(n / 60), minutes: n % 60 });
                                            }
                                        },
                                    }),
                                }),
                                (0, l.jsx)(s.E, {
                                    variant: "text-md/medium",
                                    children: j.intl.string(S.default.n2mCrR),
                                }),
                                (0, l.jsx)("div", {
                                    className: `${N.k3} ${N.H7}`,
                                    children: (0, l.jsx)(f.Z, {
                                        label: j.intl.string(S.default.n2mCrR),
                                        hideLabel: !0,
                                        selectionMode: "single",
                                        options: ei,
                                        value: M(O),
                                        matchSorterOptions: {
                                            keys: ["value", "label"],
                                            threshold: r.Ht.rankings.STARTS_WITH,
                                        },
                                        onQueryChange: (e) => L(e.currentTarget.value),
                                        onSelectionChange: (e) => {
                                            null != e && (D(w(e)), L(""));
                                        },
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsx)(m.c, {}),
                (0, l.jsxs)(d.B, {
                    gap: 8,
                    children: [
                        (0, l.jsxs)(d.B, {
                            gap: 4,
                            children: [
                                (0, l.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    children: j.intl.string(S.default.HaV0Sg),
                                }),
                                (0, l.jsx)(s.E, { variant: "text-sm/normal", color: "text-muted", children: ef }),
                            ],
                        }),
                        $
                            ? (0, l.jsx)(h.C, {
                                  variant: "filter",
                                  selectionMode: "multiple",
                                  label: j.intl.string(S.default.HaV0Sg),
                                  items: et,
                                  selectedKeys: en,
                                  onSelectionChange: (e) => {
                                      if ("all" === e) return;
                                      let t = y.yG.find((t) => e.has(String(t)) !== P.has(t));
                                      null != t && eo(t);
                                  },
                              })
                            : (0, l.jsx)("div", {
                                  className: N.kS,
                                  children: y.yG.map((e, t) => {
                                      let n = P.has(e);
                                      return (0, l.jsx)(
                                          g.D,
                                          {
                                              role: "button",
                                              "aria-pressed": n,
                                              className: `${N.ly} ${n ? N.wH : ""}`,
                                              onClick: () => eo(e),
                                              children: (0, l.jsx)(s.E, {
                                                  variant: "text-sm/semibold",
                                                  color: "currentColor",
                                                  children: ee[t],
                                              }),
                                          },
                                          e,
                                      );
                                  }),
                              }),
                        (0, l.jsx)(U, { conflictingEntries: ea.conflictingEntries }),
                    ],
                }),
            ],
        }),
    });
}
