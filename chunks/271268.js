i.d(e, { Z: () => o });
var n = i(54381),
    r = i(793030),
    l = i(442837),
    a = i(5888),
    s = i(198358),
    d = i(140939),
    c = i(388032);
function o() {
    let {
        voice: { totalVoiceMinutes: t, totalVoiceMinutesPercentile: e } = {
            totalVoiceMinutes: 0,
            totalVoiceMinutesPercentile: 0,
        },
    } = (0, l.e7)([a.Z], () => a.Z.getCheckpointData());
    return (0, n.jsxs)(s.Z, {
        children: [
            t >= 1000
                ? (0, n.jsx)(r.xvT, {
                      variant: "display-sm",
                      color: "text-primary",
                      children: c.intl.format(d.default.Xu0QsX, { numHours: Math.floor(t / 60) }),
                  })
                : (0, n.jsx)(r.xvT, {
                      variant: "display-sm",
                      color: "text-primary",
                      children: c.intl.format(d.default.UZbUtl, { numMinutes: Math.floor(t) }),
                  }),
            null != e
                ? (0, n.jsx)(r.xvT, {
                      variant: "display-sm",
                      color: "text-primary",
                      children: c.intl.format(d.default["36PZwu"], {
                          percent: 100 - e,
                          percentHook: (t, e) =>
                              (0, n.jsx)(
                                  r.xvT,
                                  {
                                      variant: "display-sm",
                                      color: "text-primary",
                                      children: t,
                                  },
                                  e,
                              ),
                      }),
                  })
                : null,
        ],
    });
}
