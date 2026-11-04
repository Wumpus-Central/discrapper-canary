var n = l(477900),
    i = l(866665),
    a = l(821609),
    s = l(729829),
    r = l(756977),
    o = l(861089),
    c = l(792996);
l.d(
    t,
    {},
    {
        B: function (e) {
            let { userId: t, channel: l, onAction: u, variant: d = "primary" } = e,
                m = (0, s.u)(t, l),
                [A, h] = (0, r.A)(t, l.id);
            return null == m
                ? null
                : (0, n.jsx)(i.m, {
                      position: "top",
                      text: h,
                      shouldShow: A,
                      asContainer: !0,
                      children: (0, n.jsx)(a.$, {
                          text: c.intl.string(o.default.DKHhec),
                          variant: d,
                          size: "sm",
                          onClick: () => {
                              (m.handleRequestToStream({ analyticsLocation: "request to stream button" }), u?.());
                          },
                          fullWidth: !0,
                          disabled: A,
                      }),
                  });
        },
    },
);
