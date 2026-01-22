n.d(t, { A: () => _ }), n(896048);
var a = n(627968),
    l = n(64700),
    i = n(397927),
    r = n(964486),
    s = n(847599),
    o = n(767379),
    c = n(240248),
    d = n(39537),
    u = n(278466),
    m = n(805866),
    p = n(627575),
    h = n(870341),
    f = n(686267),
    x = n(818348),
    b = n(646284),
    g = n(985018),
    v = n(36303);
let j = n(843020);
function y(e) {
    let { task: t, handleSubmit: n, disabled: i } = e,
        [r, s] = l.useState(t),
        o = l.useMemo(
            () => ({
                task: r,
                setTask: s,
            }),
            [r, s],
        );
    return (
        l.useEffect(() => {
            s(t);
        }, [t]),
        (0, a.jsxs)(u.h.Provider, {
            value: o,
            children: [
                (0, a.jsx)(f.A, {}),
                (0, a.jsx)(h.A, {
                    onSubmit: n,
                    disabled: i,
                }),
            ],
        })
    );
}
let _ = function (e) {
    let { onClose: t } = e,
        [n, u] = l.useState(null),
        [h, f] = l.useState(!0),
        [_, A] = l.useState(null),
        [C, S] = l.useState(!1),
        O = l.useCallback(async () => {
            f(!0), A(null);
            try {
                var e;
                let n = await (0, d.$R)();
                if (null == n) return void t();
                !(0, c.uJ)(null == (e = n.ui_component) ? void 0 : e.component.type) &&
                m.Vn.has(n.ui_component.component.type)
                    ? u(n)
                    : u({
                          task_id: n.task_id,
                          task_type: m.wP.REFRESH_APP,
                          assignment_id: n.assignment_id,
                          ui_component: {
                              component: {
                                  type: m.Qq.REFRESH_APP,
                                  data: {},
                              },
                          },
                          flow_context: {
                              tasks: [],
                              flow_id: n.flow_context.flow_id,
                          },
                      });
            } catch (e) {
                A(g.intl.string(b.default["/f++3g"]));
            } finally {
                f(!1);
            }
        }, [t]),
        E = l.useCallback(
            async (e) => {
                if (null !== n) {
                    S(!0);
                    try {
                        let t = {
                            task_id: n.task_id,
                            flow_id: n.flow_context.flow_id,
                            data: e,
                        };
                        await (0, d.Rt)(t), O();
                    } catch (e) {
                        A(g.intl.string(b.default["+QRSxc"]));
                    } finally {
                        S(!1);
                    }
                }
            },
            [n, O],
        );
    (0, r.Ay)(() => {
        O();
    });
    let N = l.useMemo(() => (null == n ? void 0 : n.task_type) === m.wP.AGE_VERIFICATION, [n]);
    return (0, a.jsxs)("div", {
        className: v.Tp,
        children: [
            (0, a.jsx)("img", {
                className: v.xX,
                src: j,
                alt: "",
            }),
            N
                ? (0, a.jsx)(o.default, {
                      transitionState: i.ip4.ENTERED,
                      entryPoint: s.q1.SAFETY_FLOWS,
                      onClose: x.tE,
                      onComplete: async () => {
                          await E({ type: m.Ij.Empty });
                      },
                      dismissable: !1,
                  })
                : (0, a.jsx)("div", {
                      className: v.nA,
                      children: h
                          ? (0, a.jsx)(i.y$y, { type: i.y$y.Type.SPINNING_CIRCLE })
                          : (0, a.jsx)("div", {
                                className: v.kL,
                                children: (0, a.jsxs)(i.BJc, {
                                    direction: "horizontal",
                                    justify: "start",
                                    className: v.rf,
                                    children: [
                                        null !== _ &&
                                            (0, a.jsxs)(i.BJc, {
                                                direction: "vertical",
                                                justify: "space-between",
                                                align: "center",
                                                className: v.Nj,
                                                padding: 16,
                                                children: [
                                                    (0, a.jsxs)(i.BJc, {
                                                        direction: "vertical",
                                                        gap: 4,
                                                        children: [
                                                            (0, a.jsx)(i.Heading, {
                                                                variant: "heading-xl/semibold",
                                                                children: g.intl.string(g.t.c6kn6F),
                                                            }),
                                                            (0, a.jsx)(i.Text, {
                                                                variant: "text-md/normal",
                                                                color: "text-muted",
                                                                children: g.intl.string(g.t.ZUEGFn),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, a.jsxs)(i.BJc, {
                                                        direction: "horizontal",
                                                        justify: "center",
                                                        align: "center",
                                                        children: [
                                                            (0, a.jsx)(i.Button, {
                                                                fullWidth: !0,
                                                                variant: "secondary",
                                                                text: g.intl.string(g.t["2jxGer"]),
                                                                onClick: () => {
                                                                    (0, p.k)("safety_flows_modal");
                                                                },
                                                            }),
                                                            (0, a.jsx)(i.Button, {
                                                                fullWidth: !0,
                                                                text: g.intl.string(g.t["7NqTJn"]),
                                                                onClick: () => {
                                                                    O();
                                                                },
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        null === _ &&
                                            null != n &&
                                            (0, a.jsx)(y, {
                                                task: n,
                                                handleSubmit: E,
                                                disabled: C,
                                            }),
                                    ],
                                }),
                            }),
                  }),
        ],
    });
};
