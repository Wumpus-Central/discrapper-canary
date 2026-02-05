i.d(t, { B: () => o });
var n = i(627968),
    a = i(158954),
    l = i(235052),
    r = i(426127),
    s = i(985018);
function o(e) {
    let { userId: t, channel: i, onAction: o, variant: d = "primary" } = e,
        c = (0, l.u)(t, i, "useRequestToStreamButton");
    return null == c
        ? null
        : (0, n.jsx)(a.$nd, {
              text: s.intl.string(r.default.DKHhec),
              variant: d,
              size: "sm",
              onClick: () => {
                  c.handleRequestToStream("request to stream button"), o?.();
              },
              fullWidth: !0,
          });
}
