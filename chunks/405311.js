a.d(t, { A: () => c });
var n = a(627968),
    l = a(311907),
    i = a(834730),
    s = a(576470),
    r = a(99753),
    o = a(693879),
    d = a(424994);
function c() {
    let e = (0, l.bG)([r.A], () => r.A.getFeed(d.X1.GLOBAL_FEED)?.refresh_stale_inbox_after_ms != null),
        { loading: t, nextFetchDate: a } = (0, l.cf)(
            [r.A],
            () => r.A.getFeedState(d.X1.GLOBAL_FEED) ?? { loading: !1 },
        ),
        c = (0, l.bG)([r.A], () => r.A.getLastFeedFetchDate(d.X1.GLOBAL_FEED));
    return (0, n.jsxs)("div", {
        children: [
            t
                ? (0, n.jsx)(i.E, { variant: "text-md/normal", children: "(fetching)" })
                : (0, n.jsxs)(i.E, {
                      variant: "text-md/normal",
                      children: [
                          "Next fetch: ",
                          null != a ? (0, n.jsx)(s.A, { deadline: a }) : e ? "(awaiting push)" : "(unscheduled)",
                      ],
                  }),
            (0, n.jsxs)(i.E, {
                variant: "text-md/normal",
                children: [
                    "Last fetch:",
                    " ",
                    null != c ? (0, n.jsx)(o.z, { inline: !0, entry: { start: c.getTime() } }) : "(never)",
                ],
            }),
        ],
    });
}
