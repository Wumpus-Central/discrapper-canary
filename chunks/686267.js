n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var s = n(331322),
    l = n(534514),
    a = n(834730),
    r = n(754302),
    o = n(278466),
    d = n(805866),
    c = n(627575),
    u = n(204821),
    p = n(837451),
    h = n(985018),
    m = n(721940);
let _ = {
        [d.wP.EMAIL_VERIFICATION]: h.intl.string(p.default.HC4IiR),
        [d.wP.REFRESH_APP]: h.intl.string(p.default.SzfxQ3),
        [d.wP.AGE_VERIFICATION]: h.intl.string(p.default["dSkE/A"]),
    },
    A = function () {
        let { task: e } = (0, o.Z)(),
            t = e.flow_context.tasks.findIndex((t) => t.task_type === e.task_type);
        return (0, i.jsxs)(s.B, {
            direction: "vertical",
            justify: "space-between",
            padding: u.p,
            className: m.k,
            children: [
                (0, i.jsxs)(s.B, {
                    direction: "vertical",
                    justify: "space-between",
                    children: [
                        (0, i.jsx)(l.D, {
                            variant: "display-md",
                            className: m.D,
                            children: h.intl.string(p.default["/OpRAP"]),
                        }),
                        (0, i.jsx)(s.B, {
                            direction: "vertical",
                            justify: "space-between",
                            gap: 0,
                            children: e.flow_context.tasks.map((e, n) =>
                                (0, i.jsx)(
                                    r.B,
                                    {
                                        title: _[e.task_type] ?? "",
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
                (0, i.jsx)(a.E, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    children: h.intl.format(p.default["0DHxym"], {
                        handleLogOut: () => (0, c.k)("safety_flows_sidebar"),
                    }),
                }),
            ],
        });
    };
