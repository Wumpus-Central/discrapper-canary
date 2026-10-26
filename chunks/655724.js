l.d(t, { B: () => d });
var n = l(477900),
    i = l(866665),
    a = l(821609),
    s = l(382028),
    r = l(756977),
    c = l(905322),
    o = l(105292);
function d(e) {
    let { userId: t, channel: l, onAction: d, variant: u = "primary" } = e,
        m = (0, s.u)(t, l),
        [A, p] = (0, r.A)(t, l.id);
    return null == m
        ? null
        : (0, n.jsx)(i.m, {
              position: "top",
              text: p,
              shouldShow: A,
              asContainer: !0,
              children: (0, n.jsx)(a.$, {
                  text: o.intl.string(c.default.DKHhec),
                  variant: u,
                  size: "sm",
                  onClick: () => {
                      (m.handleRequestToStream({ analyticsLocation: "request to stream button" }), d?.());
                  },
                  fullWidth: !0,
                  disabled: A,
              }),
          });
}
