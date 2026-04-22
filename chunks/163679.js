n.d(t, { A: () => I });
var i = n(627968),
    s = n(64700),
    l = n(289873),
    a = n(331322),
    r = n(534514),
    o = n(834730),
    d = n(821609),
    c = n(964486),
    u = n(847599),
    p = n(767379),
    h = n(240248),
    m = n(39537),
    _ = n(278466),
    A = n(805866),
    f = n(627575),
    g = n(870341),
    x = n(686267),
    E = n(231723),
    C = n(818348),
    T = n(837451),
    v = n(985018),
    S = n(561452);
let b = n(843020);
function j(e) {
    let { task: t, handleSubmit: n, disabled: l } = e,
        [a, r] = s.useState(t),
        o = s.useMemo(() => ({ task: a, setTask: r }), [a, r]);
    return (
        s.useEffect(() => {
            r(t);
        }, [t]),
        (0, i.jsxs)(_.h.Provider, {
            value: o,
            children: [(0, i.jsx)(x.A, {}), (0, i.jsx)(g.A, { onSubmit: n, disabled: l })],
        })
    );
}
let I = function (e) {
    let { transitionState: t, onClose: n } = e,
        [_, g] = s.useState(null),
        [x, I] = s.useState(!0),
        [R, N] = s.useState(null),
        [y, O] = s.useState(!1),
        M = s.useCallback(async () => {
            I(!0), N(null);
            try {
                let e = await (0, m.$R)();
                if (null == e) return void n();
                !(0, h.uJ)(e.ui_component?.component.type) && A.Vn.has(e.ui_component.component.type)
                    ? g(e)
                    : g({
                          task_id: e.task_id,
                          task_type: A.wP.REFRESH_APP,
                          assignment_id: e.assignment_id,
                          ui_component: { component: { type: A.Qq.REFRESH_APP, data: {} } },
                          flow_context: { tasks: [], flow_id: e.flow_context.flow_id },
                      });
            } catch {
                N(v.intl.string(T.default["/f++3g"]));
            } finally {
                I(!1);
            }
        }, [n]),
        U = s.useCallback(
            async (e) => {
                if (null !== _) {
                    O(!0);
                    try {
                        let t = { task_id: _.task_id, flow_id: _.flow_context.flow_id, data: e };
                        await (0, m.Rt)(t), M();
                    } catch (e) {
                        N(v.intl.string(T.default["+QRSxc"]));
                    } finally {
                        O(!1);
                    }
                }
            },
            [_, M],
        );
    (0, c.Ay)(() => {
        M();
    });
    let k = s.useMemo(() => _?.task_type === A.wP.AGE_VERIFICATION, [_]);
    return (0, i.jsxs)("div", {
        className: S.Tp,
        children: [
            (0, i.jsx)("img", { className: S.xX, src: b, alt: "" }),
            k
                ? (0, i.jsx)(p.default, {
                      transitionState: t ?? E.ip.ENTERED,
                      entryPoint: u.q1.SAFETY_FLOWS,
                      onClose: C.tE,
                      onComplete: async () => {
                          await U({ type: A.Ij.Empty });
                      },
                      dismissable: !1,
                  })
                : (0, i.jsx)("div", {
                      className: S.nA,
                      children: x
                          ? (0, i.jsx)(l.y, { type: l.y.Type.SPINNING_CIRCLE })
                          : (0, i.jsx)("div", {
                                className: S.kL,
                                children: (0, i.jsxs)(a.B, {
                                    direction: "horizontal",
                                    justify: "start",
                                    className: S.rf,
                                    children: [
                                        null !== R &&
                                            (0, i.jsxs)(a.B, {
                                                direction: "vertical",
                                                justify: "space-between",
                                                align: "center",
                                                className: S.Nj,
                                                padding: 16,
                                                children: [
                                                    (0, i.jsxs)(a.B, {
                                                        direction: "vertical",
                                                        gap: 4,
                                                        children: [
                                                            (0, i.jsx)(r.D, {
                                                                variant: "heading-xl/semibold",
                                                                children: v.intl.string(v.t.c6kn6F),
                                                            }),
                                                            (0, i.jsx)(o.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-muted",
                                                                children: v.intl.string(v.t.ZUEGFn),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, i.jsxs)(a.B, {
                                                        direction: "horizontal",
                                                        justify: "center",
                                                        align: "center",
                                                        children: [
                                                            (0, i.jsx)(d.$, {
                                                                fullWidth: !0,
                                                                variant: "secondary",
                                                                text: v.intl.string(v.t["2jxGer"]),
                                                                onClick: () => {
                                                                    (0, f.k)("safety_flows_modal");
                                                                },
                                                            }),
                                                            (0, i.jsx)(d.$, {
                                                                fullWidth: !0,
                                                                text: v.intl.string(v.t["7NqTJn"]),
                                                                onClick: () => {
                                                                    M();
                                                                },
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        null === R &&
                                            null != _ &&
                                            (0, i.jsx)(j, { task: _, handleSubmit: U, disabled: y }),
                                    ],
                                }),
                            }),
                  }),
        ],
    });
};
