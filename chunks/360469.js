e.d(r, { Z: () => o });
var i = e(951288),
    n = e(793030),
    l = e(442837),
    a = e(5888),
    s = e(198358),
    d = e(506945),
    c = e(388032);
function o() {
    let {
        messages: { numMessagesSent: t, numMessagesSentPercentile: r },
    } = (0, l.e7)([a.Z], () => a.Z.getCheckpointData());
    return (0, i.jsxs)(s.Z, {
        children: [
            (0, i.jsx)(n.xvT, {
                variant: "display-sm",
                color: "text-primary",
                children: c.intl.format(d.default.nPTMHj, { numMessages: t }),
            }),
            (0, i.jsx)(n.xvT, {
                variant: "display-sm",
                color: "text-primary",
                children: c.intl.format(d.default.ixvOza, {
                    percent: 100 - r,
                    percentHook: (t, r) =>
                        (0, i.jsx)(
                            n.xvT,
                            {
                                variant: "display-sm",
                                color: "text-primary",
                                children: t,
                            },
                            r,
                        ),
                }),
            }),
        ],
    });
}
