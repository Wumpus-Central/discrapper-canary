n.d(t, { default: () => h });
var a = n(477900),
    i = n(189213),
    l = n(331322),
    r = n(150934),
    s = n(771871),
    d = n(834730),
    u = n(582128),
    c = n(855986),
    o = n(181079),
    p = n(146092),
    f = n(349828),
    b = n(708526),
    g = n(792996);
function h(e) {
    let { onClose: t, transitionState: n } = e,
        h = (function (e) {
            let t = (0, c.bG)([o.A], () => o.A.autoAddJoinedThreads),
                n = (0, c.bG)([o.A], () => o.A.pruneInactiveThreads),
                a = (0, c.bG)([o.A], () => o.A.pruneInactiveThreadsDays),
                i = (0, c.bG)([o.A], () => o.A.pruneInactiveThreadsScope),
                [l, r] = u.useState(t),
                [s, d] = u.useState(n),
                [f, b] = u.useState(a),
                [g, h] = u.useState(i),
                [v, S] = u.useState(!1),
                [A, x] = u.useState(!1),
                k = u.useRef(!1),
                y = u.useRef(!0);
            u.useEffect(
                () => (
                    (y.current = !0),
                    () => {
                        y.current = !1;
                    }
                ),
                [],
            );
            let C = l !== t || s !== n || (s && (f !== a || g !== i));
            return {
                autoAdd: l,
                setAutoAdd: r,
                prune: s,
                setPrune: d,
                days: f,
                setDays: b,
                canSave: C,
                scope: g,
                setScope: h,
                loading: v,
                error: A,
                save: async function () {
                    if (C && !k.current) {
                        ((k.current = !0), S(!0), x(!1));
                        try {
                            ((0, p.Ub)(l), await (0, p.u$)(s, f, g), y.current && e());
                        } catch {
                            y.current && x(!0);
                        } finally {
                            ((k.current = !1), y.current && S(!1));
                        }
                    }
                },
            };
        })(t),
        { loading: v } = h;
    return (0, a.jsx)(i.a, {
        title: g.intl.string(b.default.hklnjs),
        transitionState: n,
        onClose: t,
        actions: [
            { text: g.intl.string(g.t["ETE/oC"]), variant: "secondary", disabled: v, onClick: t },
            {
                text: g.intl.string(g.t["R3BPH+"]),
                variant: "primary",
                disabled: v || !h.canSave,
                loading: v,
                onClick: h.save,
            },
        ],
        children: (0, a.jsxs)(l.B, {
            gap: 16,
            children: [
                (0, a.jsx)(r.S, {
                    label: g.intl.string(b.default.DIyQIF),
                    description: g.intl.string(b.default.d15FpO),
                    checked: h.autoAdd,
                    disabled: v,
                    onChange: h.setAutoAdd,
                }),
                (0, a.jsx)(r.S, {
                    label: g.intl.string(b.default["bI/czq"]),
                    description: g.intl.string(b.default.RRsgY0),
                    checked: h.prune,
                    disabled: v,
                    onChange: h.setPrune,
                }),
                h.prune
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(s.z, {
                                  label: g.intl.string(b.default.THUVKS),
                                  value: h.days,
                                  onChange: h.setDays,
                                  options: f.Rq.map((e) => ({
                                      name:
                                          0 === e
                                              ? g.intl.string(b.default.EIVQqq)
                                              : g.intl.formatToPlainString(b.default.eic1d0, { days: e }),
                                      value: e,
                                      disabled: v,
                                  })),
                              }),
                              (0, a.jsx)(s.z, {
                                  label: g.intl.string(b.default.KIzpqi),
                                  value: h.scope,
                                  onChange: h.setScope,
                                  options: [
                                      { name: f.A, value: f.l0, disabled: v },
                                      { name: g.intl.string(b.default["gOUr+P"]), value: "all", disabled: v },
                                  ],
                              }),
                          ],
                      })
                    : null,
                h.error
                    ? (0, a.jsx)(d.E, {
                          variant: "body-sm/normal",
                          color: "text-feedback-critical",
                          role: "alert",
                          children: g.intl.string(b.default.toOYQw),
                      })
                    : null,
            ],
        }),
    });
}
