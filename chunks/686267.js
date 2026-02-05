n.d(t, { A: () => x });
var a = n(627968);
n(64700);
var s = n(397927),
    i = n(754302),
    l = n(278466),
    r = n(805866),
    o = n(627575),
    d = n(204821),
    c = n(646284),
    u = n(985018),
    m = n(528891);
let h = {
        [r.wP.EMAIL_VERIFICATION]: u.intl.string(c.default.HC4IiR),
        [r.wP.REFRESH_APP]: u.intl.string(c.default.SzfxQ3),
        [r.wP.AGE_VERIFICATION]: u.intl.string(c.default["dSkE/A"]),
    },
    x = function () {
        let { task: e } = (0, l.Z)(),
            t = e.flow_context.tasks.findIndex((t) => t.task_type === e.task_type);
        return (0, a.jsxs)(s.BJc, {
            direction: "vertical",
            justify: "space-between",
            padding: d.p,
            className: m.k,
            children: [
                (0, a.jsxs)(s.BJc, {
                    direction: "vertical",
                    justify: "space-between",
                    children: [
                        (0, a.jsx)(s.Heading, {
                            variant: "display-md",
                            className: m.D,
                            children: u.intl.string(c.default["/OpRAP"]),
                        }),
                        (0, a.jsx)(s.BJc, {
                            direction: "vertical",
                            justify: "space-between",
                            gap: 0,
                            children: e.flow_context.tasks.map((e, n) =>
                                (0, a.jsx)(
                                    i.B,
                                    {
                                        title: h[e.task_type] ?? "",
                                        listType: "numbered",
                                        index: n,
                                        color: n === t ? "text-strong" : n < t ? "feedback-positive" : "text-muted",
                                        completed: n < t,
                                    },
                                    e.task_type,
                                ),
                            ),
                        }),
                    ],
                }),
                (0, a.jsx)(s.Text, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    children: u.intl.format(c.default["0DHxym"], {
                        handleLogOut: () => (0, o.k)("safety_flows_sidebar"),
                    }),
                }),
            ],
        });
    };
