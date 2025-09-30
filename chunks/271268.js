t.d(e, { Z: () => o });
var n = t(951288),
    r = t(793030),
    s = t(442837),
    l = t(5888),
    a = t(198358),
    d = t(509950),
    c = t(388032);
function o() {
    let {
        voice: { numMinutesInVoice: i, numMinutesInVoicePercentile: e },
    } = (0, s.e7)([l.Z], () => l.Z.getCheckpointData());
    return (0, n.jsxs)(a.Z, {
        children: [
            (0, n.jsx)(r.xvT, {
                variant: "display-lg",
                color: "text-primary",
                children: i.toLocaleString(),
            }),
            (0, n.jsx)(r.xvT, {
                variant: "display-sm",
                color: "text-primary",
                children: c.intl.string(d.default["3NjdFR"]),
            }),
            (0, n.jsx)(r.xvT, {
                variant: "display-sm",
                color: "text-primary",
                children: c.intl.format(d.default["36PZws"], { percent: e }),
            }),
        ],
    });
}
