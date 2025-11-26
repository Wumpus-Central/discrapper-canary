i.d(e, { Z: () => o });
var n = i(54381),
    r = i(793030),
    l = i(442837),
    a = i(5888),
    s = i(198358),
    d = i(140939),
    c = i(388032);
function o() {
    let {
        messages: { numMessagesSent: t, numMessagesSentPercentile: e } = {
            numMessagesSent: 0,
            numMessagesSentPercentile: 0,
        },
    } = (0, l.e7)([a.Z], () => a.Z.getCheckpointData());
    return (0, n.jsxs)(s.Z, {
        children: [
            (0, n.jsx)(r.xvT, {
                variant: "display-sm",
                color: "text-primary",
                children: c.intl.format(d.default.nPTMHj, { numMessages: t }),
            }),
            null != e
                ? (0, n.jsx)(r.xvT, {
                      variant: "display-sm",
                      color: "text-primary",
                      children: c.intl.format(d.default.ixvOza, {
                          percent: 100 - e,
                          percentHook: (t, e) =>
                              (0, n.jsx)(
                                  r.xvT,
                                  {
                                      variant: "display-sm",
                                      color: "text-primary",
                                      children: t,
                                  },
                                  e,
                              ),
                      }),
                  })
                : null,
        ],
    });
}
