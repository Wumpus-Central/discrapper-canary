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
        voice: { totalVoiceMinutes: i, totalVoiceMinutesPercentile: t },
    } = (0, a.e7)([s.Z], () => s.Z.getCheckpointData());
    return (0, n.jsxs)(l.Z, {
        children: [
            i >= 1000
                ? (0, n.jsx)(e.xvT, {
                      variant: "display-sm",
                      color: "text-primary",
                      children: c.intl.format(d.default.Xu0QsX, { numHours: Math.floor(i / 60) }),
                  })
                : (0, n.jsx)(e.xvT, {
                      variant: "display-sm",
                      color: "text-primary",
                      children: c.intl.format(d.default.UZbUtl, { numMinutes: Math.floor(i) }),
                  }),
            (0, n.jsx)(e.xvT, {
                variant: "display-sm",
                color: "text-primary",
                children: c.intl.format(d.default["36PZwu"], { percent: 100 - t }),
            }),
        ],
    });
}
