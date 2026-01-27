n.d(t, {
    A: () => u,
}),
    n(638769),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(166403),
    o = n(510898),
    c = n(985018),
    d = n(104579);

function u(e) {
    let { onGoBack: t } = e,
        n = (0, l.yK)([a.A], () => {
            var e, t;
            return null !=
                (e =
                    null == (t = a.A.getActiveApplicationSubscriptions())
                        ? void 0
                        : t.slice().sort((e, t) => {
                              var n, r, i, l;
                              return (
                                  (null != (n = null == (i = e.createdAt) ? void 0 : i.getTime())
                                      ? n
                                      : e.currentPeriodStart.getTime()) -
                                  (null != (r = null == (l = t.createdAt) ? void 0 : l.getTime())
                                      ? r
                                      : t.currentPeriodStart.getTime())
                              );
                          }))
                ? e
                : [];
        }),
        [s, u] = i.useState();
    return (
        null == s &&
            (s = (0, r.jsx)(_, {
                onBack: t,
                title: c.intl.string(c.t["DB/m9a"]),
            })),
        (0, r.jsxs)("div", {
            children: [
                s,
                (0, r.jsx)("div", {
                    className: d.A,
                    children: (0, r.jsx)(o.A, {
                        subscriptions: n,
                        updateHeader: (e, t) => {
                            u(
                                (0, r.jsx)(_, {
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
    return (0, r.jsxs)("div", {
        className: d.D,
        children: [
            (0, r.jsx)(s.K0, {
                "aria-label": c.intl.string(c.t["13/7kX"]),
                icon: () =>
                    (0, r.jsx)(s.Zge, {
                        size: "sm",
                    }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, r.jsx)(s.Heading, {
                variant: "heading-lg/semibold",
                children: n,
            }),
        ],
    });
}
