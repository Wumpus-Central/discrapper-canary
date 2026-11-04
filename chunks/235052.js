var n = i(477900);
i(582128);
var l = i(477782),
    a = i(500060),
    r = i(729829),
    s = i(756977),
    u = i(861089),
    o = i(792996);
i.d(
    e,
    {},
    {
        A: function (t, e) {
            let i = (0, r.u)(t, e),
                [c, d] = (0, s.A)(t, e.id);
            return null == i
                ? null
                : (0, n.jsx)(
                      l.Dr,
                      {
                          id: "request-to-stream",
                          label:
                              null == i.playingApplication
                                  ? o.intl.string(u.default.DKHhec)
                                  : o.intl.format(u.default["8qq+H7"], {
                                        applicationName: i.playingApplication?.name ?? "",
                                    }),
                          action: () => i.handleRequestToStream({ analyticsLocation: "request to stream item" }),
                          icon: a.o,
                          leadingAccessory: { type: "icon", icon: a.o },
                          disabled: c,
                          subtext: c ? d : void 0,
                      },
                      "request-to-stream",
                  );
        },
    },
);
