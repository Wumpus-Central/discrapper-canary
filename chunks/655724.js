var l = n(477900),
    i = n(866665),
    a = n(821609),
    r = n(729829),
    s = n(756977),
    o = n(902435),
    u = n(792996);
n.d(
    t,
    {},
    {
        B: function (e) {
            let { userId: t, channel: n, onAction: c, variant: d = "primary" } = e,
                m = (0, r.u)(t, n),
                [A, p] = (0, s.A)(t, n.id);
            return null == m
                ? null
                : (0, l.jsx)(i.m, {
                      position: "top",
                      text: p,
                      shouldShow: A,
                      asContainer: !0,
                      children: (0, l.jsx)(a.$, {
                          text: u.intl.string(o.default.DKHhec),
                          variant: d,
                          size: "sm",
                          onClick: () => {
                              (m.handleRequestToStream({ analyticsLocation: "request to stream button" }), c?.());
                          },
                          fullWidth: !0,
                          disabled: A,
                      }),
                  });
        },
    },
);
