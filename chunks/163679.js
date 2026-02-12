n.d(t, { A: () => A });
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
    x = n(870341),
    p = n(686267),
    g = n(818348),
    _ = n(646284),
    f = n(985018),
    v = n(36303);
let b = n(843020);
function j(e) {
    let { task: t, handleSubmit: n, disabled: s } = e,
        [l, r] = i.useState(t),
        o = i.useMemo(() => ({ task: l, setTask: r }), [l, r]);
    return (
        i.useEffect(() => {
            r(t);
        }, [t]),
        (0, a.jsxs)(u.h.Provider, {
            value: o,
            children: [(0, a.jsx)(p.A, {}), (0, a.jsx)(x.A, { onSubmit: n, disabled: s })],
        })
    );
}
let A = function (e) {
    let { onClose: t } = e,
        [n, u] = i.useState(null),
        [x, p] = i.useState(!0),
        [A, C] = i.useState(null),
        [S, T] = i.useState(!1),
        y = i.useCallback(async () => {
            p(!0), C(null);
            try {
                let e = await (0, c.$R)();
                if (null == e) return void t();
                !(0, d.uJ)(e.ui_component?.component.type) && m.Vn.has(e.ui_component.component.type)
                    ? u(e)
                    : u({
                          task_id: e.task_id,
                          task_type: m.wP.REFRESH_APP,
                          assignment_id: e.assignment_id,
                          ui_component: { component: { type: m.Qq.REFRESH_APP, data: {} } },
                          flow_context: { tasks: [], flow_id: e.flow_context.flow_id },
                      });
            } catch {
                C(f.intl.string(_.default["/f++3g"]));
            } finally {
                p(!1);
            }
        }, [t]),
        E = i.useCallback(
            async (e) => {
                if (null !== n) {
                    T(!0);
                    try {
                        let t = { task_id: n.task_id, flow_id: n.flow_context.flow_id, data: e };
                        await (0, c.Rt)(t), y();
                    } catch (e) {
                        C(f.intl.string(_.default["+QRSxc"]));
                    } finally {
                        T(!1);
                    }
                }
            },
            [n, y],
        );
    (0, l.Ay)(() => {
        y();
    });
    let N = i.useMemo(() => n?.task_type === m.wP.AGE_VERIFICATION, [n]);
    return (0, a.jsxs)("div", {
        className: v.Tp,
        children: [
            (0, a.jsx)("img", { className: v.xX, src: b, alt: "" }),
            N
                ? (0, a.jsx)(o.default, {
                      transitionState: s.ip4.ENTERED,
                      entryPoint: r.q1.SAFETY_FLOWS,
                      onClose: g.tE,
                      onComplete: async () => {
                          await E({ type: m.Ij.Empty });
                      },
                      dismissable: !1,
                  })
                : (0, a.jsx)("div", {
                      className: v.nA,
                      children: x
                          ? (0, a.jsx)(s.y$y, { type: s.y$y.Type.SPINNING_CIRCLE })
                          : (0, a.jsx)("div", {
                                className: v.kL,
                                children: (0, a.jsxs)(s.BJc, {
                                    direction: "horizontal",
                                    justify: "start",
                                    className: v.rf,
                                    children: [
                                        null !== A &&
                                            (0, a.jsxs)(s.BJc, {
                                                direction: "vertical",
                                                justify: "space-between",
                                                align: "center",
                                                className: v.Nj,
                                                padding: 16,
                                                children: [
                                                    (0, a.jsxs)(s.BJc, {
                                                        direction: "vertical",
                                                        gap: 4,
                                                        children: [
                                                            (0, a.jsx)(s.Heading, {
                                                                variant: "heading-xl/semibold",
                                                                children: f.intl.string(f.t.c6kn6F),
                                                            }),
                                                            (0, a.jsx)(s.Text, {
                                                                variant: "text-md/normal",
                                                                color: "text-muted",
                                                                children: f.intl.string(f.t.ZUEGFn),
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
                                                                text: f.intl.string(f.t["2jxGer"]),
                                                                onClick: () => {
                                                                    (0, h.k)("safety_flows_modal");
                                                                },
                                                            }),
                                                            (0, a.jsx)(s.Button, {
                                                                fullWidth: !0,
                                                                text: f.intl.string(f.t["7NqTJn"]),
                                                                onClick: () => {
                                                                    y();
                                                                },
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        null === A &&
                                            null != n &&
                                            (0, a.jsx)(j, { task: n, handleSubmit: E, disabled: S }),
                                    ],
                                }),
                            }),
                  }),
        ],
    });
};
