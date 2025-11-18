i.d(e, { Z: () => o });
var r = i(54381),
    n = i(793030),
    l = i(442837),
    a = i(5888),
    s = i(198358),
    d = i(79046),
    c = i(388032);
function o() {
    let {
        messages: { numMessagesSent: t, numMessagesSentPercentile: e },
    } = (0, l.e7)([a.Z], () => a.Z.getCheckpointData());
    return (0, r.jsxs)(s.Z, {
        children: [
            (0, r.jsx)(n.xvT, {
                variant: "display-sm",
                color: "text-primary",
                children: c.intl.format(d.default.nPTMHj, { numMessages: t }),
            }),
            (0, r.jsx)(n.xvT, {
                variant: "display-sm",
                color: "text-primary",
                children: c.intl.format(d.default.ixvOza, {
                    percent: 100 - e,
                    percentHook: (t, e) =>
                        (0, r.jsx)(
                            n.xvT,
                            {
                                variant: "display-sm",
                                color: "text-primary",
                                children: t,
                            },
                            e,
                        ),
                }),
            }),
        ],
    });
}
