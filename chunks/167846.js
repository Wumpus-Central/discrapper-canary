n.d(e, { default: () => b });
var a = n(477900),
    i = n(189213),
    l = n(331322),
    r = n(771871),
    s = n(404778),
    u = n(834730),
    d = n(582128),
    c = n(855986),
    o = n(181079),
    f = n(794412),
    g = n(349828),
    p = n(708526),
    v = n(792996);
function b(t) {
    let { onClose: e, transitionState: n } = t,
        b = (function (t) {
            let e = (0, c.bG)([o.A], () => o.A.autoAddThreadsMode),
                n = (0, c.bG)([o.A], () => o.A.pruneInactiveThreads),
                a = (0, c.bG)([o.A], () => o.A.pruneInactiveThreadsDays),
                i = (0, c.bG)([o.A], () => o.A.pruneInactiveThreadsScope),
                [l, r] = d.useState(e),
                [s, u] = d.useState(n),
                [g, p] = d.useState(a),
                [v, b] = d.useState(i),
                [h, m] = d.useState(!1),
                [A, S] = d.useState(!1),
                x = d.useRef(!1),
                T = d.useRef(!0);
            d.useEffect(
                () => (
                    (T.current = !0),
                    () => {
                        T.current = !1;
                    }
                ),
                [],
            );
            let k = s ? g : -1,
                C = l !== e || s !== n || (s && (g !== a || v !== i));
            return {
                autoAdd: l,
                setAutoAdd: r,
                prune: s,
                setPrune: u,
                days: g,
                setDays: p,
                pruneTiming: k,
                setPruneTiming: function (t) {
                    -1 === t ? u(!1) : (u(!0), p(t));
                },
                canSave: C,
                scope: v,
                setScope: b,
                loading: h,
                error: A,
                save: async function () {
                    if (C && !x.current) {
                        ((x.current = !0), m(!0), S(!1));
                        try {
                            ((0, f.Ub)(l), await (0, f.u$)(s, g, v), T.current && t());
                        } catch {
                            T.current && S(!0);
                        } finally {
                            ((x.current = !1), T.current && m(!1));
                        }
                    }
                },
            };
        })(e),
        { loading: h } = b;
    return (0, a.jsx)(i.a, {
        title: v.intl.string(p.default.hklnjs),
        transitionState: n,
        onClose: e,
        actions: [
            { text: v.intl.string(v.t["ETE/oC"]), variant: "secondary", disabled: h, onClick: e },
            {
                text: v.intl.string(v.t["R3BPH+"]),
                variant: "primary",
                disabled: h || !b.canSave,
                loading: h,
                onClick: b.save,
            },
        ],
        children: (0, a.jsxs)(l.B, {
            gap: 16,
            children: [
                (0, a.jsx)(r.z, {
                    label: v.intl.string(p.default.IY55rr),
                    value: b.autoAdd,
                    onChange: b.setAutoAdd,
                    disabled: h,
                    options: [
                        {
                            name: v.intl.string(p.default.z6aUMH),
                            desc: v.intl.string(p.default["5pZtcn"]),
                            value: g.Gv,
                        },
                        {
                            name: v.intl.string(p.default.MOBbbf),
                            desc: v.intl.string(p.default["4wUEWy"]),
                            value: g.AK,
                        },
                        { name: v.intl.string(p.default["uJRN0+"]), value: "never" },
                    ],
                }),
                (0, a.jsx)(s.c, {}),
                (0, a.jsx)(r.z, {
                    label: v.intl.string(p.default.THUVKS),
                    description: v.intl.string(p.default["89dcNP"]),
                    value: b.pruneTiming,
                    onChange: b.setPruneTiming,
                    disabled: h,
                    options: [
                        ...g.Rq.map((t) => ({
                            name:
                                0 === t
                                    ? v.intl.string(p.default.EIVQqq)
                                    : v.intl.formatToPlainString(p.default.ankeKO, { days: t }),
                            value: t,
                        })),
                        { name: v.intl.string(p.default.LxrV05), value: -1 },
                    ],
                }),
                (0, a.jsx)(r.z, {
                    label: v.intl.string(p.default.YFhloA),
                    value: b.scope,
                    onChange: b.setScope,
                    disabled: h || !b.prune,
                    options: [
                        { name: v.intl.string(p.default.fDT7MF), value: g.l0 },
                        { name: v.intl.string(p.default["gOUr+P"]), value: "all" },
                    ],
                }),
                b.error
                    ? (0, a.jsx)(u.E, {
                          variant: "body-sm/normal",
                          color: "text-feedback-critical",
                          role: "alert",
                          children: v.intl.string(p.default.toOYQw),
                      })
                    : null,
            ],
        }),
    });
}
