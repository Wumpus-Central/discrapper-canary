r.d(i, { Z: () => o });
var e = r(951288),
    n = r(793030),
    a = r(442837),
    s = r(5888),
    l = r(198358),
    d = r(509950),
    c = r(388032);
function o() {
    let {
        voice: { numMinutesInVoice: t, numMinutesInVoicePercentile: i },
    } = (0, a.e7)([s.Z], () => s.Z.getCheckpointData());
    return (0, e.jsxs)(l.Z, {
        children: [
            t >= 1000
                ? (0, e.jsx)(n.xvT, {
                      variant: "display-sm",
                      color: "text-primary",
                      children: c.intl.format(d.default.Xu0Qsb, {
                          numHours: Math.floor(t / 60),
                          hoursHook: (t, i) =>
                              (0, e.jsx)(
                                  n.xvT,
                                  {
                                      variant: "display-lg",
                                      color: "text-primary",
                                      children: t,
                                  },
                                  i,
                              ),
                      }),
                  })
                : (0, e.jsx)(n.xvT, {
                      variant: "display-sm",
                      color: "text-primary",
                      children: c.intl.format(d.default.UZbUtr, {
                          numMinutes: Math.floor(t),
                          minutesHook: (t, i) =>
                              (0, e.jsx)(
                                  n.xvT,
                                  {
                                      variant: "display-lg",
                                      color: "text-primary",
                                      children: t,
                                  },
                                  i,
                              ),
                      }),
                  }),
            (0, e.jsx)(n.xvT, {
                variant: "display-sm",
                color: "text-primary",
                children: c.intl.format(d.default["36PZws"], { percent: i }),
            }),
        ],
    });
}
