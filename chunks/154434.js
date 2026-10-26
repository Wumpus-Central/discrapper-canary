(n.d(t, { default: () => _ }), n(321073));
var l = n(477900),
    r = n(582128),
    i = n(896170),
    a = n(189213),
    s = n(834730),
    u = n(683071),
    o = n(331322),
    d = n(193249),
    c = n(404778),
    m = n(890497),
    f = n(872162),
    h = n(939249),
    g = n(890283),
    x = n(219893),
    y = n(95396),
    v = n(153739);
function b(e) {
    let { initial: t, defaultValue: n } = e;
    return r.useState(() => (null != t ? { hours: t.hours, minutes: t.minutes } : n));
}
var p = n(513687),
    S = n(105292),
    j = n(39627);
let N = 48,
    C = /^(\d{1,2}):(\d{1,2})$/;
function k(e) {
    let [t, n] = e.split(":").map(Number);
    return { hours: t, minutes: n };
}
function w(e) {
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
function E(e, t) {
    return (0, x.yN)(k(e.value)) - (0, x.yN)(k(t.value));
}
function H(e) {
    let t = w(e);
    return { id: t, value: t, label: (0, x.fU)(e) };
}
function A(e) {
    let { durationMinutes: t } = e;
    return (0, l.jsxs)("div", {
        className: j.Hr,
        children: [
            (0, l.jsx)(s.E, {
                tag: "span",
                variant: "text-sm/normal",
                color: "text-subtle",
                className: j.qu,
                "aria-hidden": !0,
                children: "\u2022",
            }),
            (0, l.jsx)(s.E, { tag: "span", variant: "text-sm/normal", color: "text-subtle", children: (0, x.a3)(t) }),
        ],
    });
}
function $(e) {
    return function (t) {
        let n = w(t),
            r = (0, x.yN)(t);
        return {
            id: n,
            value: n,
            label: (0, x.fU)(t),
            trailing: (0, l.jsx)(A, { durationMinutes: r > e ? r - e : 1440 - e + r }),
        };
    };
}
function I(e, t, n) {
    let l = w(t);
    e.some((e) => e.value === l) || e.push(n(t));
}
function U(e) {
    let { conflictingEntries: t } = e;
    return 0 === t.length
        ? null
        : (0, l.jsx)("div", {
              className: j.VE,
              children: (0, l.jsx)(u.w, {
                  type: "warning",
                  message: S.intl.string(p.default["26A0Df"]),
                  messageList: t.map((e) => {
                      let { dayLabel: t, timeRange: n } = e;
                      return `${t}  ${n}`;
                  }),
                  role: "status",
              }),
          });
}
function _(e) {
    let { transitionState: t, onClose: n, teenId: u, rule: C } = e,
        { enabled: A } = g.A.useConfig({ location: "family-center-schedule-downtime-repeat-days" }),
        _ = null != C,
        z = (0, v.F7)(u),
        [B, R] = b({ initial: C?.startTime, defaultValue: { hours: 22, minutes: 0 } }),
        [V, O] = r.useState(""),
        [D, G] = b({ initial: C?.endTime, defaultValue: { hours: 7, minutes: 0 } }),
        [K, L] = r.useState(""),
        [W, Z] = r.useState(() => (null != C ? new Set(C.days) : new Set())),
        [q, F] = r.useState(!1),
        [Q, J] = r.useState(!1),
        [P, X] = r.useState(C?.enabled ?? !0),
        Y = r.useMemo(() => (0, x.yK)("short"), []),
        ee = r.useMemo(() => x.yG.map((e, t) => ({ id: String(e), label: Y[t] })), [Y]),
        et = r.useMemo(() => new Set(Array.from(W, (e) => String(e))), [W]),
        en = r.useMemo(() => {
            let e = Array.from({ length: N }, (e, t) => {
                let n = T(t),
                    l = w(n);
                return { id: l, value: l, label: (0, x.fU)(n) };
            });
            for (let t of (I(e, B, H), M(V))) I(e, t, H);
            return e.sort(E);
        }, [B, V]),
        el = r.useMemo(() => {
            let e,
                t,
                n,
                l = (0, x.yN)(B),
                r =
                    ((t = Math.floor((e = (0, x.yN)(B)) / 30) + 1),
                    (n = $(e)),
                    Array.from({ length: N - 1 }, (e, l) => n(T((t + l) % N))));
            for (let e of (I(r, D, $(l)), M(K))) I(r, e, $(l));
            return r.sort(
                (function (e) {
                    function t(t) {
                        let n = (0, x.yN)(k(t));
                        return n > e ? n - e : 1440 - e + n;
                    }
                    return (e, n) => t(e.value) - t(n.value);
                })(l),
            );
        }, [B, D, K]),
        er = r.useMemo(() => {
            let e = z?.restrictedSchedule?.rules ?? [];
            return _ && null != C ? e.filter((e) => e.ruleId !== C.ruleId) : e;
        }, [_, C, z?.restrictedSchedule?.rules]),
        ei = r.useMemo(() => (0, x.d)(W, er, Y), [Y, er, W]),
        ea = (0, x.yN)(B) > (0, x.yN)(D),
        es = (0, x.yN)(B) !== (0, x.yN)(D);
    function eu(e) {
        Z((t) => {
            let n = new Set(t);
            return (n.has(e) ? n.delete(e) : n.add(e), n);
        });
    }
    async function eo() {
        F(!0);
        try {
            let e = { label: "", start_time: (0, x.v9)(B), end_time: (0, x.v9)(D), days: Array.from(W), enabled: P };
            (_ ? await (0, y.Um)(u, C.ruleId, e) : await (0, y.qP)(u, e), n());
        } finally {
            F(!1);
        }
    }
    async function ed() {
        if (_) {
            J(!0);
            try {
                (await (0, y.CS)(u, C.ruleId), n());
            } finally {
                J(!1);
            }
        }
    }
    let ec = {
            startTime: (0, x.fU)(B),
            endTime: (0, x.fU)(D),
            timeHook: (e, t) =>
                (0, l.jsx)(s.E, { variant: "text-sm/medium", color: "text-default", tag: "span", children: e }, t),
        },
        em = ea ? S.intl.format(p.default.R87Y2K, ec) : S.intl.format(p.default.vX7xid, ec),
        ef = q || Q,
        eh = _
            ? [
                  {
                      variant: "critical-secondary",
                      text: S.intl.string(p.default.d8pizZ),
                      onClick: ed,
                      disabled: ef,
                      loading: Q,
                  },
                  {
                      text: S.intl.string(p.default.TDc9mW),
                      onClick: eo,
                      disabled: 0 === W.size || !es || ef,
                      loading: q,
                  },
              ]
            : [
                  { variant: "secondary", text: S.intl.string(S.t["ETE/oC"]), onClick: n, disabled: ef },
                  {
                      text: S.intl.string(p.default.pvcruO),
                      onClick: eo,
                      disabled: 0 === W.size || !es || ef,
                      loading: q,
                  },
              ];
    return (0, l.jsx)(a.a, {
        transitionState: t,
        onClose: n,
        title: S.intl.string(p.default["w/ISB8"]),
        subtitle: S.intl.string(p.default.AcJ4ke),
        actions: eh,
        children: (0, l.jsxs)(o.B, {
            gap: 24,
            children: [
                _ &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(d.d, {
                                checked: P,
                                label: S.intl.string(p.default["30Owsd"]),
                                onChange: function () {
                                    X((e) => !e);
                                },
                            }),
                            (0, l.jsx)(c.c, {}),
                        ],
                    }),
                (0, l.jsxs)(o.B, {
                    gap: 8,
                    children: [
                        (0, l.jsx)(s.E, { variant: "text-sm/semibold", children: S.intl.string(p.default["37z4a2"]) }),
                        (0, l.jsxs)("div", {
                            className: j.ae,
                            children: [
                                (0, l.jsx)("div", {
                                    className: j.k3,
                                    children: (0, l.jsx)(m.Z, {
                                        label: S.intl.string(p.default["37z4a2"]),
                                        hideLabel: !0,
                                        selectionMode: "single",
                                        options: en,
                                        value: w(B),
                                        matchSorterOptions: {
                                            keys: ["value", "label"],
                                            threshold: i.Ht.rankings.STARTS_WITH,
                                        },
                                        onQueryChange: (e) => O(e.currentTarget.value),
                                        onSelectionChange: (e) => {
                                            if (null != e) {
                                                let t = k(e);
                                                (R(t), O(""));
                                                let n = ((0, x.yN)(t) + 540) % 1440;
                                                G({ hours: Math.floor(n / 60), minutes: n % 60 });
                                            }
                                        },
                                    }),
                                }),
                                (0, l.jsx)(s.E, {
                                    variant: "text-md/medium",
                                    children: S.intl.string(p.default.n2mCrR),
                                }),
                                (0, l.jsx)("div", {
                                    className: `${j.k3} ${j.H7}`,
                                    children: (0, l.jsx)(m.Z, {
                                        label: S.intl.string(p.default.n2mCrR),
                                        hideLabel: !0,
                                        selectionMode: "single",
                                        options: el,
                                        value: w(D),
                                        matchSorterOptions: {
                                            keys: ["value", "label"],
                                            threshold: i.Ht.rankings.STARTS_WITH,
                                        },
                                        onQueryChange: (e) => L(e.currentTarget.value),
                                        onSelectionChange: (e) => {
                                            null != e && (G(k(e)), L(""));
                                        },
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsx)(c.c, {}),
                (0, l.jsxs)(o.B, {
                    gap: 8,
                    children: [
                        (0, l.jsxs)(o.B, {
                            gap: 4,
                            children: [
                                (0, l.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    children: S.intl.string(p.default.HaV0Sg),
                                }),
                                (0, l.jsx)(s.E, { variant: "text-sm/normal", color: "text-muted", children: em }),
                            ],
                        }),
                        A
                            ? (0, l.jsx)(f.C, {
                                  variant: "filter",
                                  selectionMode: "multiple",
                                  label: S.intl.string(p.default.HaV0Sg),
                                  items: ee,
                                  selectedKeys: et,
                                  onSelectionChange: (e) => {
                                      if ("all" === e) return;
                                      let t = x.yG.find((t) => e.has(String(t)) !== W.has(t));
                                      null != t && eu(t);
                                  },
                              })
                            : (0, l.jsx)("div", {
                                  className: j.kS,
                                  children: x.yG.map((e, t) => {
                                      let n = W.has(e);
                                      return (0, l.jsx)(
                                          h.D,
                                          {
                                              role: "button",
                                              "aria-pressed": n,
                                              className: `${j.ly} ${n ? j.wH : ""}`,
                                              onClick: () => eu(e),
                                              children: (0, l.jsx)(s.E, {
                                                  variant: "text-sm/semibold",
                                                  color: "currentColor",
                                                  children: Y[t],
                                              }),
                                          },
                                          e,
                                      );
                                  }),
                              }),
                        (0, l.jsx)(U, { conflictingEntries: ei.conflictingEntries }),
                    ],
                }),
            ],
        }),
    });
}
