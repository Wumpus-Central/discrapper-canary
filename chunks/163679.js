n.d(t, { A: () => C });
var a = n(627968),
    i = n(64700),
    s = n(397927),
    l = n(964486),
    r = n(847599),
    o = n(767379),
    d = n(240248),
    c = n(39537),
    u = n(278466),
    m = n(805866),
    h = n(627575),
    p = n(870341),
    x = n(686267),
    g = n(231723),
    _ = n(818348),
    f = n(774630),
    v = n(985018),
    b = n(248065);
let j = n(843020);
function A(e) {
    let { task: t, handleSubmit: n, disabled: s } = e,
        [l, r] = i.useState(t),
        o = i.useMemo(() => ({ task: l, setTask: r }), [l, r]);
    return (
        i.useEffect(() => {
            r(t);
        }, [t]),
        (0, a.jsxs)(u.h.Provider, {
            value: o,
            children: [(0, a.jsx)(x.A, {}), (0, a.jsx)(p.A, { onSubmit: n, disabled: s })],
        })
    );
}
let C = function (e) {
    let { transitionState: t, onClose: n } = e,
        [u, p] = i.useState(null),
        [x, C] = i.useState(!0),
        [y, T] = i.useState(null),
        [S, E] = i.useState(!1),
        N = i.useCallback(async () => {
            C(!0), T(null);
            try {
                let e = await (0, c.$R)();
                if (null == e) return void n();
                !(0, d.uJ)(e.ui_component?.component.type) && m.Vn.has(e.ui_component.component.type)
                    ? p(e)
                    : p({
                          task_id: e.task_id,
                          task_type: m.wP.REFRESH_APP,
                          assignment_id: e.assignment_id,
                          ui_component: { component: { type: m.Qq.REFRESH_APP, data: {} } },
                          flow_context: { tasks: [], flow_id: e.flow_context.flow_id },
                      });
            } catch {
                T(v.intl.string(f.default["/f++3g"]));
            } finally {
                C(!1);
            }
        }, [n]),
        I = i.useCallback(
            async (e) => {
                if (null !== u) {
                    E(!0);
                    try {
                        let t = { task_id: u.task_id, flow_id: u.flow_context.flow_id, data: e };
                        await (0, c.Rt)(t), N();
                    } catch (e) {
                        T(v.intl.string(f.default["+QRSxc"]));
                    } finally {
                        E(!1);
                    }
                }
            },
            [u, N],
        );
    (0, l.Ay)(() => {
        N();
    });
    let k = i.useMemo(() => u?.task_type === m.wP.AGE_VERIFICATION, [u]);
    return (0, a.jsxs)("div", {
        className: b.Tp,
        children: [
            (0, a.jsx)("img", { className: b.xX, src: j, alt: "" }),
            k
                ? (0, a.jsx)(o.default, {
                      transitionState: t ?? g.ip.ENTERED,
                      entryPoint: r.q1.SAFETY_FLOWS,
                      onClose: _.tE,
                      onComplete: async () => {
                          await I({ type: m.Ij.Empty });
                      },
                      dismissable: !1,
                  })
                : (0, a.jsx)("div", {
                      className: b.nA,
                      children: x
                          ? (0, a.jsx)(s.y$y, { type: s.y$y.Type.SPINNING_CIRCLE })
                          : (0, a.jsx)("div", {
                                className: b.kL,
                                children: (0, a.jsxs)(s.BJc, {
                                    direction: "horizontal",
                                    justify: "start",
                                    className: b.rf,
                                    children: [
                                        null !== y &&
                                            (0, a.jsxs)(s.BJc, {
                                                direction: "vertical",
                                                justify: "space-between",
                                                align: "center",
                                                className: b.Nj,
                                                padding: 16,
                                                children: [
                                                    (0, a.jsxs)(s.BJc, {
                                                        direction: "vertical",
                                                        gap: 4,
                                                        children: [
                                                            (0, a.jsx)(s.Heading, {
                                                                variant: "heading-xl/semibold",
                                                                children: v.intl.string(v.t.c6kn6F),
                                                            }),
                                                            (0, a.jsx)(s.Text, {
                                                                variant: "text-md/normal",
                                                                color: "text-muted",
                                                                children: v.intl.string(v.t.ZUEGFn),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, a.jsxs)(s.BJc, {
                                                        direction: "horizontal",
                                                        justify: "center",
                                                        align: "center",
                                                        children: [
                                                            (0, a.jsx)(s.Button, {
                                                                fullWidth: !0,
                                                                variant: "secondary",
                                                                text: v.intl.string(v.t["2jxGer"]),
                                                                onClick: () => {
                                                                    (0, h.k)("safety_flows_modal");
                                                                },
                                                            }),
                                                            (0, a.jsx)(s.Button, {
                                                                fullWidth: !0,
                                                                text: v.intl.string(v.t["7NqTJn"]),
                                                                onClick: () => {
                                                                    N();
                                                                },
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        null === y &&
                                            null != u &&
                                            (0, a.jsx)(A, { task: u, handleSubmit: I, disabled: S }),
                                    ],
                                }),
                            }),
                  }),
        ],
    });
};
