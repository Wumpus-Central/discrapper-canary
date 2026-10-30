l.d(t, { B: () => u });
var n = l(477900),
    i = l(866665),
    a = l(821609),
    s = l(382028),
    r = l(756977),
    c = l(51685),
    o = l(105292);
function u(e) {
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
                  text: o.intl.string(c.default.DKHhec),
                  variant: d,
                  size: "sm",
                  onClick: () => {
                      (m.handleRequestToStream({ analyticsLocation: "request to stream button" }), u?.());
                  },
                  fullWidth: !0,
                  disabled: A,
              }),
          });
}
