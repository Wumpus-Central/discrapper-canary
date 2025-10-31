r.d(t, { Z: () => o });
var n = r(951288),
    e = r(793030),
    a = r(442837),
    s = r(5888),
    l = r(198358),
    d = r(506945),
    c = r(388032);
function o() {
    let {
        messages: { numMessagesSent: i, numMessagesSentPercentile: t },
    } = (0, a.e7)([s.Z], () => s.Z.getCheckpointData());
    return (0, n.jsxs)(l.Z, {
        children: [
            (0, n.jsx)(e.xvT, {
                variant: "display-sm",
                color: "text-primary",
                children: c.intl.format(d.default.nPTMHj, { numMessages: i }),
            }),
            (0, n.jsx)(e.xvT, {
                variant: "display-sm",
                color: "text-primary",
                children: c.intl.format(d.default.ixvOza, { percent: 100 - t }),
            }),
        ],
    });
}
