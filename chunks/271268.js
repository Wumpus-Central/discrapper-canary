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
        voice: { totalVoiceMinutes: t, totalVoiceMinutesPercentile: e },
    } = (0, l.e7)([a.Z], () => a.Z.getCheckpointData());
    return (0, r.jsxs)(s.Z, {
        children: [
            t >= 1000
                ? (0, r.jsx)(n.xvT, {
                      variant: "display-sm",
                      color: "text-primary",
                      children: c.intl.format(d.default.Xu0QsX, { numHours: Math.floor(t / 60) }),
                  })
                : (0, r.jsx)(n.xvT, {
                      variant: "display-sm",
                      color: "text-primary",
                      children: c.intl.format(d.default.UZbUtl, { numMinutes: Math.floor(t) }),
                  }),
            (0, r.jsx)(n.xvT, {
                variant: "display-sm",
                color: "text-primary",
                children: c.intl.format(d.default["36PZwu"], {
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
