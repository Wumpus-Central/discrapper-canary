n.d(t, { Z: () => u });
var i = n(54381),
    s = n(793030),
    r = n(442837),
    l = n(5888),
    o = n(198358),
    a = n(140939),
    c = n(388032);
function u() {
    let {
        messages: { numMessagesSent: e, numMessagesSentPercentile: t } = {
            numMessagesSent: 0,
            numMessagesSentPercentile: 0,
        },
    } = (0, r.e7)([l.Z], () => l.Z.getCheckpointData());
    return (0, i.jsxs)(o.Z, {
        children: [
            (0, i.jsx)(s.xvT, {
                variant: "display-sm",
                color: "text-strong",
                children: c.intl.format(a.default.nPTMHj, { numMessages: e }),
            }),
            null != t
                ? (0, i.jsx)(s.xvT, {
                      variant: "display-sm",
                      color: "text-strong",
                      children: c.intl.format(a.default.ixvOza, {
                          percent: 100 - t,
                          percentHook: (e, t) =>
                              (0, i.jsx)(
                                  s.xvT,
                                  {
                                      variant: "display-sm",
                                      color: "text-strong",
                                      children: e,
                                  },
                                  t,
                              ),
                      }),
                  })
                : null,
        ],
    });
}
