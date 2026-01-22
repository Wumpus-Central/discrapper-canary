n.d(t, { A: () => d });
var a = n(627968),
    l = n(311907),
    i = n(397927),
    r = n(576470),
    s = n(99753),
    o = n(693879),
    c = n(424994);
function d() {
    let e = (0, l.bG)([s.A], () => {
            var e;
            return (null == (e = s.A.getFeed(c.X1.GLOBAL_FEED)) ? void 0 : e.refresh_stale_inbox_after_ms) != null;
        }),
        { loading: t, nextFetchDate: n } = (0, l.cf)([s.A], () => {
            var e;
            return null != (e = s.A.getFeedState(c.X1.GLOBAL_FEED)) ? e : { loading: !1 };
        }),
        d = (0, l.bG)([s.A], () => s.A.getLastFeedFetchDate(c.X1.GLOBAL_FEED));
    return (0, a.jsxs)("div", {
        children: [
            t
                ? (0, a.jsx)(i.Text, {
                      variant: "text-md/normal",
                      children: "(fetching)",
                  })
                : (0, a.jsxs)(i.Text, {
                      variant: "text-md/normal",
                      children: [
                          "Next fetch: ",
                          null != n ? (0, a.jsx)(r.A, { deadline: n }) : e ? "(awaiting push)" : "(unscheduled)",
                      ],
                  }),
            (0, a.jsxs)(i.Text, {
                variant: "text-md/normal",
                children: [
                    "Last fetch:",
                    " ",
                    null != d
                        ? (0, a.jsx)(o.z, {
                              inline: !0,
                              entry: { start: d.getTime() },
                          })
                        : "(never)",
                ],
            }),
        ],
    });
}
