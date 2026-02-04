n.d(t, {
    B: () => s,
});
var r = n(627968),
    i = n(158954),
    l = n(235052),
    a = n(426127),
    o = n(985018);

function s(e) {
    let { userId: t, channel: n, onAction: s, variant: c = "primary" } = e,
        u = (0, l.u)(t, n, "useRequestToStreamButton");
    return null == u
        ? null
        : (0, r.jsx)(i.$nd, {
              text: o.intl.string(a.default.DKHhec),
              variant: c,
              size: "sm",
              onClick: () => {
                  u.handleRequestToStream("request to stream button"), null == s || s();
              },
              fullWidth: !0,
          });
}
