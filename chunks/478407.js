n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    r = n(311907),
    a = n(397927),
    l = n(166403),
    o = n(510898),
    c = n(985018),
    d = n(104579);
function u(e) {
    let { onGoBack: t } = e,
        n = (0, r.yK)(
            [l.A],
            () =>
                l.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [a, u] = s.useState();
    return (
        null == a && (a = (0, i.jsx)(_, { onBack: t, title: c.intl.string(c.t["DB/m9a"]) })),
        (0, i.jsxs)("div", {
            children: [
                a,
                (0, i.jsx)("div", {
                    className: d.A,
                    children: (0, i.jsx)(o.A, {
                        subscriptions: n,
                        updateHeader: (e, t) => {
                            u(
                                (0, i.jsx)(_, {
                                    title: e,
                                    onBack: () => {
                                        t(), u(void 0);
                                    },
                                }),
                            );
                        },
                    }),
                }),
            ],
        })
    );
}
function _(e) {
    let { onBack: t, title: n } = e;
    return (0, i.jsxs)("div", {
        className: d.D,
        children: [
            (0, i.jsx)(a.K0, {
                "aria-label": c.intl.string(c.t["13/7kX"]),
                icon: () => (0, i.jsx)(a.Zge, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, i.jsx)(a.Heading, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
