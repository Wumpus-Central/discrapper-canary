r.d(t, { Z: () => o });
var e = r(951288),
    n = r(793030),
    a = r(442837),
    l = r(5888),
    s = r(198358),
    d = r(484718),
    c = r(388032);
function o() {
    let {
        messages: { numMessagesSent: i, numMessagesSentPercentile: t },
    } = (0, a.e7)([l.Z], () => l.Z.getCheckpointData());
    return (0, e.jsxs)(s.Z, {
        children: [
            (0, e.jsx)(n.xvT, {
                variant: "display-sm",
                color: "text-primary",
                children: c.intl.format(d.default.nPTMHh, {
                    numMessages: i,
                    messagesHook: (i, t) =>
                        (0, e.jsx)(
                            n.xvT,
                            {
                                variant: "display-lg",
                                color: "text-primary",
                                children: i,
                            },
                            t,
                        ),
                }),
            }),
            (0, e.jsx)(n.xvT, {
                variant: "display-sm",
                color: "text-primary",
                children: c.intl.format(d.default.ixvOzc, { percent: t }),
            }),
        ],
    });
}
