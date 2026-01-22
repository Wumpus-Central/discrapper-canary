n.d(t, {
    A: () => h,
});
var a = n(627968);
n(64700);
var l = n(397927),
    i = n(754302),
    r = n(278466),
    s = n(805866),
    o = n(627575),
    c = n(204821),
    d = n(646284),
    u = n(985018),
    m = n(528891);
let p = {
        [s.wP.EMAIL_VERIFICATION]: u.intl.string(d.default.HC4IiR),
        [s.wP.REFRESH_APP]: u.intl.string(d.default.SzfxQ3),
        [s.wP.AGE_VERIFICATION]: u.intl.string(d.default["dSkE/A"]),
    },
    h = function () {
        let { task: e } = (0, r.Z)(),
            t = e.flow_context.tasks.findIndex((t) => t.task_type === e.task_type);
        return (0, a.jsxs)(l.BJc, {
            direction: "vertical",
            justify: "space-between",
            padding: c.p,
            className: m.k,
            children: [
                (0, a.jsxs)(l.BJc, {
                    direction: "vertical",
                    justify: "space-between",
                    children: [
                        (0, a.jsx)(l.Heading, {
                            variant: "display-md",
                            className: m.D,
                            children: u.intl.string(d.default["/OpRAP"]),
                        }),
                        (0, a.jsx)(l.BJc, {
                            direction: "vertical",
                            justify: "space-between",
                            gap: 0,
                            children: e.flow_context.tasks.map((e, n) => {
                                var l;
                                return (0, a.jsx)(
                                    i.B,
                                    {
                                        title: null != (l = p[e.task_type]) ? l : "",
                                        listType: "numbered",
                                        index: n,
                                        color: n === t ? "text-strong" : n < t ? "feedback-positive" : "text-muted",
                                        completed: n < t,
                                    },
                                    e.task_type,
                                );
                            }),
                        }),
                    ],
                }),
                (0, a.jsx)(l.Text, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    children: u.intl.format(d.default["0DHxym"], {
                        handleLogOut: () => (0, o.k)("safety_flows_sidebar"),
                    }),
                }),
            ],
        });
    };
