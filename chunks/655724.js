i.d(t, { B: () => u });
var n = i(627968),
    a = i(158954),
    l = i(311907),
    r = i(990078),
    s = i(309010),
    o = i(235052),
    d = i(426127),
    c = i(985018);
function u(e) {
    let { userId: t, channel: i, onAction: u, variant: m = "primary" } = e,
        A = (0, o.u)(t, i, "useRequestToStreamButton"),
        _ = (0, l.bG)([s.A], () => s.A.getVoiceChannelId() === i.id, [i.id]);
    if (null == A) return null;
    let g = (0, n.jsx)(a.$nd, {
        text: c.intl.string(d.default.DKHhec),
        variant: m,
        size: "sm",
        onClick: () => {
            A.handleRequestToStream("request to stream button"), u?.();
        },
        fullWidth: !0,
        disabled: !_,
    });
    return _
        ? g
        : (0, n.jsx)(r.m, { position: "top", text: c.intl.string(d.default.qRXats), asContainer: !0, children: g });
}
