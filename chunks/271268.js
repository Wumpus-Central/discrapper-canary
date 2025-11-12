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
        voice: { totalVoiceMinutes: t, totalVoiceMinutesPercentile: r },
    } = (0, l.e7)([a.Z], () => a.Z.getCheckpointData());
    return (0, i.jsxs)(s.Z, {
        children: [
            t >= 1000
                ? (0, i.jsx)(n.xvT, {
                      variant: "display-sm",
                      color: "text-primary",
                      children: c.intl.format(d.default.Xu0QsX, { numHours: Math.floor(t / 60) }),
                  })
                : (0, i.jsx)(n.xvT, {
                      variant: "display-sm",
                      color: "text-primary",
                      children: c.intl.format(d.default.UZbUtl, { numMinutes: Math.floor(t) }),
                  }),
            (0, i.jsx)(n.xvT, {
                variant: "display-sm",
                color: "text-primary",
                children: c.intl.format(d.default["36PZwu"], {
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
