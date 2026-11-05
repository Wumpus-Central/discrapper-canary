var i = n(477900);
n(582128);
var a = n(477782),
    l = n(500060),
    r = n(729829),
    s = n(756977),
    u = n(861089),
    c = n(792996);
n.d(
    e,
    {},
    {
        A: function (t, e) {
            let n = (0, r.u)(t, e),
                [o, d] = (0, s.A)(t, e.id);
            return null == n
                ? null
                : (0, i.jsx)(
                      a.Dr,
                      {
                          id: "request-to-stream",
                          label:
                              null == n.playingApplication
                                  ? c.intl.string(u.default.DKHhec)
                                  : c.intl.format(u.default["8qq+H7"], {
                                        applicationName: n.playingApplication?.name ?? "",
                                    }),
                          action: () => n.handleRequestToStream({ analyticsLocation: "request to stream item" }),
                          icon: l.ScreenStreamIcon,
                          leadingAccessory: { type: "icon", icon: l.ScreenStreamIcon },
                          disabled: o,
                          subtext: o ? d : void 0,
                      },
                      "request-to-stream",
                  );
        },
    },
);
