i.d(t, { B: () => c });
var n = i(627968),
    l = i(158954),
    r = i(311907),
    s = i(990078),
    a = i(309010),
    o = i(235052),
    d = i(426127),
    u = i(985018);
function c(e) {
    let { userId: t, channel: i, onAction: c, variant: A = "primary" } = e,
        h = (0, o.u)(t, i, "useRequestToStreamButton"),
        m = (0, r.bG)([a.A], () => a.A.getVoiceChannelId() === i.id, [i.id]);
    if (null == h) return null;
    let p = (0, n.jsx)(l.$nd, {
        text: u.intl.string(d.default.DKHhec),
        variant: A,
        size: "sm",
        onClick: () => {
            h.handleRequestToStream("request to stream button"), c?.();
        },
        fullWidth: !0,
        disabled: !m,
    });
    return m
        ? p
        : (0, n.jsx)(s.m, { position: "top", text: u.intl.string(d.default.qRXats), asContainer: !0, children: p });
}
