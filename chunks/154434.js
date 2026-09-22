(n.d(t, { default: () => R }), n(321073));
var l = n(477900),
    r = n(582128),
    i = n(896170),
    a = n(834730),
    s = n(512950),
    u = n(331322),
    o = n(189213),
    d = n(193249),
    c = n(404778),
    m = n(890497),
    h = n(669257),
    f = n(939249),
    g = n(890283),
    x = n(219893),
    y = n(95396),
    p = n(153739);
function v(e) {
    let { initial: t, defaultValue: n } = e;
    return r.useState(() => (null != t ? { hours: t.hours, minutes: t.minutes } : n));
}
var b = n(513687),
    j = n(375708),
    S = n(39627);
let N = 48,
    C = /^(\d{1,2}):(\d{1,2})$/;
function k(e) {
    let [t, n] = e.split(":").map(Number);
    return { hours: t, minutes: n };
}
function E(e) {
    return `${e.hours}:${String(e.minutes).padStart(2, "0")}`;
}
function M(e) {
    let t = C.exec(e.trim());
    if (null == t) return [];
    let n = Number(t[1]),
        l = 1 === t[2].length ? 10 * Number(t[2]) : Number(t[2]);
    if (n >= 24 || l >= 60) return [];
    let r = [{ hours: n, minutes: l }];
    return (12 === n ? r.push({ hours: 0, minutes: l }) : n >= 1 && n < 12 && r.push({ hours: n + 12, minutes: l }), r);
}
function T(e) {
    return { hours: Math.floor((30 * e) / 60), minutes: (30 * e) % 60 };
}
function w(e, t) {
    return (0, x.yN)(k(e.value)) - (0, x.yN)(k(t.value));
}
function A(e) {
    let t = E(e);
    return { id: t, value: t, label: (0, x.fU)(e) };
}
function H(e) {
    let { durationMinutes: t } = e;
    return (0, l.jsxs)("div", {
        className: S.Hr,
        children: [
            (0, l.jsx)(a.E, {
                tag: "span",
                variant: "text-sm/normal",
                color: "text-subtle",
                className: S.qu,
                "aria-hidden": !0,
                children: "\u2022",
            }),
            (0, l.jsx)(a.E, { tag: "span", variant: "text-sm/normal", color: "text-subtle", children: (0, x.a3)(t) }),
        ],
    });
}
function $(e) {
    return function (t) {
        let n = E(t),
            r = (0, x.yN)(t);
        return {
            id: n,
            value: n,
            label: (0, x.fU)(t),
            trailing: (0, l.jsx)(H, { durationMinutes: r > e ? r - e : 1440 - e + r }),
        };
    };
}
function I(e, t, n) {
    let l = E(t);
    e.some((e) => e.value === l) || e.push(n(t));
}
function B(e) {
    let { conflictingEntries: t } = e;
    return 0 === t.length
        ? null
        : (0, l.jsx)(s.p, {
              className: S.VE,
              messageType: s.Y.WARNING,
              children: (0, l.jsxs)(u.B, {
                  gap: 8,
                  children: [
                      (0, l.jsx)(a.E, { variant: "text-sm/medium", children: j.intl.string(b.default["26A0Df"]) }),
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
function R(e) {
    let { transitionState: t, onClose: n, teenId: s, rule: C } = e,
        { enabled: H } = g.A.useConfig({ location: "family-center-schedule-downtime-repeat-days" }),
        R = null != C,
        U = (0, p.F7)(s),
        [_, z] = v({ initial: C?.startTime, defaultValue: { hours: 22, minutes: 0 } }),
        [V, G] = r.useState(""),
        [O, W] = v({ initial: C?.endTime, defaultValue: { hours: 7, minutes: 0 } }),
        [D, K] = r.useState(""),
        [Z, q] = r.useState(() => (null != C ? new Set(C.days) : new Set())),
        [F, L] = r.useState(!1),
        [Q, Y] = r.useState(!1),
        [J, P] = r.useState(C?.enabled ?? !0),
        X = r.useMemo(() => (0, x.yK)("short"), []),
        ee = r.useMemo(() => x.yG.map((e, t) => ({ id: String(e), label: X[t] })), [X]),
        et = r.useMemo(() => new Set(Array.from(Z, (e) => String(e))), [Z]),
        en = r.useMemo(() => {
            let e = Array.from({ length: N }, (e, t) => {
                let n = T(t),
                    l = E(n);
                return { id: l, value: l, label: (0, x.fU)(n) };
            });
            for (let t of (I(e, _, A), M(V))) I(e, t, A);
            return e.sort(w);
        }, [_, V]),
        el = r.useMemo(() => {
            let e,
                t,
                n,
                l = (0, x.yN)(_),
                r =
                    ((t = Math.floor((e = (0, x.yN)(_)) / 30) + 1),
                    (n = $(e)),
                    Array.from({ length: N - 1 }, (e, l) => n(T((t + l) % N))));
            for (let e of (I(r, O, $(l)), M(D))) I(r, e, $(l));
            return r.sort(
                (function (e) {
                    function t(t) {
                        let n = (0, x.yN)(k(t));
                        return n > e ? n - e : 1440 - e + n;
                    }
                    return (e, n) => t(e.value) - t(n.value);
                })(l),
            );
        }, [_, O, D]),
        er = r.useMemo(() => {
            let e = U?.restrictedSchedule?.rules ?? [];
            return R && null != C ? e.filter((e) => e.ruleId !== C.ruleId) : e;
        }, [R, C, U?.restrictedSchedule?.rules]),
        ei = r.useMemo(() => (0, x.d)(Z, er, X), [X, er, Z]),
        ea = (0, x.yN)(_) > (0, x.yN)(O),
        es = (0, x.yN)(_) !== (0, x.yN)(O);
    function eu(e) {
        q((t) => {
            let n = new Set(t);
            return (n.has(e) ? n.delete(e) : n.add(e), n);
        });
    }
    async function eo() {
        L(!0);
        try {
            let e = { label: "", start_time: (0, x.v9)(_), end_time: (0, x.v9)(O), days: Array.from(Z), enabled: J };
            (R ? await (0, y.Um)(s, C.ruleId, e) : await (0, y.qP)(s, e), n());
        } finally {
            L(!1);
        }
    }
    async function ed() {
        if (R) {
            Y(!0);
            try {
                (await (0, y.CS)(s, C.ruleId), n());
            } finally {
                Y(!1);
            }
        }
    }
    let ec = {
            startTime: (0, x.fU)(_),
            endTime: (0, x.fU)(O),
            timeHook: (e, t) =>
                (0, l.jsx)(a.E, { variant: "text-sm/medium", color: "text-default", tag: "span", children: e }, t),
        },
        em = ea ? j.intl.format(b.default.R87Y2K, ec) : j.intl.format(b.default.vX7xid, ec),
        eh = F || Q,
        ef = R
            ? [
                  {
                      variant: "critical-secondary",
                      text: j.intl.string(b.default.d8pizZ),
                      onClick: ed,
                      disabled: eh,
                      loading: Q,
                  },
                  {
                      text: j.intl.string(b.default.TDc9mW),
                      onClick: eo,
                      disabled: 0 === Z.size || !es || eh,
                      loading: F,
                  },
              ]
            : [
                  { variant: "secondary", text: j.intl.string(j.t["ETE/oC"]), onClick: n, disabled: eh },
                  {
                      text: j.intl.string(b.default.pvcruO),
                      onClick: eo,
                      disabled: 0 === Z.size || !es || eh,
                      loading: F,
                  },
              ];
    return (0, l.jsx)(o.Modal, {
        transitionState: t,
        onClose: n,
        title: j.intl.string(b.default["w/ISB8"]),
        subtitle: j.intl.string(b.default.AcJ4ke),
        actions: ef,
        children: (0, l.jsxs)(u.B, {
            gap: 24,
            children: [
                R &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(d.d, {
                                checked: J,
                                label: j.intl.string(b.default["30Owsd"]),
                                onChange: function () {
                                    P((e) => !e);
                                },
                            }),
                            (0, l.jsx)(c.c, {}),
                        ],
                    }),
                (0, l.jsxs)(u.B, {
                    gap: 8,
                    children: [
                        (0, l.jsx)(a.E, { variant: "text-sm/semibold", children: j.intl.string(b.default["37z4a2"]) }),
                        (0, l.jsxs)("div", {
                            className: S.ae,
                            children: [
                                (0, l.jsx)("div", {
                                    className: S.k3,
                                    children: (0, l.jsx)(m.Z, {
                                        label: j.intl.string(b.default["37z4a2"]),
                                        hideLabel: !0,
                                        selectionMode: "single",
                                        options: en,
                                        value: E(_),
                                        matchSorterOptions: {
                                            keys: ["value", "label"],
                                            threshold: i.Ht.rankings.STARTS_WITH,
                                        },
                                        onQueryChange: (e) => G(e.currentTarget.value),
                                        onSelectionChange: (e) => {
                                            if (null != e) {
                                                let t = k(e);
                                                (z(t), G(""));
                                                let n = ((0, x.yN)(t) + 540) % 1440;
                                                W({ hours: Math.floor(n / 60), minutes: n % 60 });
                                            }
                                        },
                                    }),
                                }),
                                (0, l.jsx)(a.E, {
                                    variant: "text-md/medium",
                                    children: j.intl.string(b.default.n2mCrR),
                                }),
                                (0, l.jsx)("div", {
                                    className: `${S.k3} ${S.H7}`,
                                    children: (0, l.jsx)(m.Z, {
                                        label: j.intl.string(b.default.n2mCrR),
                                        hideLabel: !0,
                                        selectionMode: "single",
                                        options: el,
                                        value: E(O),
                                        matchSorterOptions: {
                                            keys: ["value", "label"],
                                            threshold: i.Ht.rankings.STARTS_WITH,
                                        },
                                        onQueryChange: (e) => K(e.currentTarget.value),
                                        onSelectionChange: (e) => {
                                            null != e && (W(k(e)), K(""));
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
                                    children: j.intl.string(b.default.HaV0Sg),
                                }),
                                (0, l.jsx)(a.E, { variant: "text-sm/normal", color: "text-muted", children: em }),
                            ],
                        }),
                        H
                            ? (0, l.jsx)(h.C, {
                                  variant: "filter",
                                  selectionMode: "multiple",
                                  label: j.intl.string(b.default.HaV0Sg),
                                  items: ee,
                                  selectedKeys: et,
                                  onSelectionChange: (e) => {
                                      if ("all" === e) return;
                                      let t = x.yG.find((t) => e.has(String(t)) !== Z.has(t));
                                      null != t && eu(t);
                                  },
                              })
                            : (0, l.jsx)("div", {
                                  className: S.kS,
                                  children: x.yG.map((e, t) => {
                                      let n = Z.has(e);
                                      return (0, l.jsx)(
                                          f.D,
                                          {
                                              role: "button",
                                              "aria-pressed": n,
                                              className: `${S.ly} ${n ? S.wH : ""}`,
                                              onClick: () => eu(e),
                                              children: (0, l.jsx)(a.E, {
                                                  variant: "text-sm/semibold",
                                                  color: "currentColor",
                                                  children: X[t],
                                              }),
                                          },
                                          e,
                                      );
                                  }),
                              }),
                        (0, l.jsx)(B, { conflictingEntries: ei.conflictingEntries }),
                    ],
                }),
            ],
        }),
    });
}
