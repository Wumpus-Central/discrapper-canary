r.d(t, { Z: () => o });
var e = r(951288),
    n = r(793030),
    a = r(442837),
    l = r(5888),
    s = r(198358),
    d = r(506945),
    c = r(388032);
function o() {
    let {
        voice: { totalVoiceMinutes: i, totalVoiceMinutesPercentile: t },
    } = (0, a.e7)([l.Z], () => l.Z.getCheckpointData());
    return (0, e.jsxs)(s.Z, {
        children: [
            i >= 1000
                ? (0, e.jsx)(n.xvT, {
                      variant: "display-sm",
                      color: "text-primary",
                      children: c.intl.format(d.default.Xu0QsX, { numHours: Math.floor(i / 60) }),
                  })
                : (0, e.jsx)(n.xvT, {
                      variant: "display-sm",
                      color: "text-primary",
                      children: c.intl.format(d.default.UZbUtl, { numMinutes: Math.floor(i) }),
                  }),
            (0, e.jsx)(n.xvT, {
                variant: "display-sm",
                color: "text-primary",
                children: c.intl.format(d.default["36PZwu"], { percent: 100 - t }),
            }),
        ],
    });
}
