n.d(t, {
    A: () => d,
}),
    n(638769),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(166403),
    l = n(510898),
    c = n(985018),
    u = n(104579);

function d(e) {
    let { onGoBack: t } = e,
        n = (0, a.yK)([o.A], () => {
            var e, t;
            return null !=
                (e =
                    null == (t = o.A.getActiveApplicationSubscriptions())
                        ? void 0
                        : t.slice().sort((e, t) => {
                              var n, r, i, a;
                              return (
                                  (null != (n = null == (i = e.createdAt) ? void 0 : i.getTime())
                                      ? n
                                      : e.currentPeriodStart.getTime()) -
                                  (null != (r = null == (a = t.createdAt) ? void 0 : a.getTime())
                                      ? r
                                      : t.currentPeriodStart.getTime())
                              );
                          }))
                ? e
                : [];
        }),
        [s, d] = i.useState();
    null == s &&
        (s = (0, r.jsx)(f, {
            onBack: t,
            title: c.intl.string(c.t["DB/m9a"]),
        }));
    let p = (e, t) => {
        d(
            (0, r.jsx)(f, {
                title: e,
                onBack: () => {
                    t(), d(void 0);
                },
            }),
        );
    };
    return (0, r.jsxs)("div", {
        children: [
            s,
            (0, r.jsx)("div", {
                className: u.A,
                children: (0, r.jsx)(l.A, {
                    subscriptions: n,
                    updateHeader: p,
                }),
            }),
        ],
    });
}

function f(e) {
    let { onBack: t, title: n } = e;
    return (0, r.jsxs)("div", {
        className: u.D,
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
