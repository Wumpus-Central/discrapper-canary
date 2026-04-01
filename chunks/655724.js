i.d(t, { B: () => u });
var n = i(627968),
    a = i(158954),
    l = i(311907),
    s = i(990078),
    r = i(309010),
    o = i(235052),
    c = i(426127),
    d = i(985018);
function u(e) {
    let { userId: t, channel: i, onAction: u, variant: m = "primary" } = e,
        _ = (0, o.u)(t, i, "useRequestToStreamButton"),
        p = (0, l.bG)([r.A], () => r.A.getVoiceChannelId() === i.id, [i.id]);
    if (null == _) return null;
    let h = (0, n.jsx)(a.$nd, {
        text: d.intl.string(c.default.DKHhec),
        variant: m,
        size: "sm",
        onClick: () => {
            _.handleRequestToStream("request to stream button"), u?.();
        },
        fullWidth: !0,
        disabled: !p,
    });
    return p
        ? h
        : (0, n.jsx)(s.m, { position: "top", text: d.intl.string(c.default.qRXats), asContainer: !0, children: h });
}
