n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(408278),
    r = n(548411),
    o = n(534514),
    d = n(166403),
    u = n(510898),
    c = n(985018),
    g = n(470464);
function m(e) {
    let { onGoBack: t } = e,
        n = (0, l.yK)(
            [d.A],
            () =>
                d.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [a, r] = s.useState();
    return (
        null == a && (a = (0, i.jsx)(_, { onBack: t, title: c.intl.string(c.t["DB/m9a"]) })),
        (0, i.jsxs)("div", {
            children: [
                a,
                (0, i.jsx)("div", {
                    className: g.A,
                    children: (0, i.jsx)(u.A, {
                        subscriptions: n,
                        updateHeader: (e, t) => {
                            r(
                                (0, i.jsx)(_, {
                                    title: e,
                                    onBack: () => {
                                        t(), r(void 0);
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
        className: g.D,
        children: [
            (0, i.jsx)(a.K, {
                "aria-label": c.intl.string(c.t["13/7kX"]),
                icon: () => (0, i.jsx)(r.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, i.jsx)(o.D, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
