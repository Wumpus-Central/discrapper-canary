n.d(e, { B: () => c });
var i = n(627968),
    l = n(158954),
    r = n(311907),
    a = n(990078),
    s = n(309010),
    o = n(235052),
    d = n(426127),
    u = n(985018);
function c(t) {
    let { userId: e, channel: n, onAction: c, variant: A = "primary" } = t,
        p = (0, o.u)(e, n, "useRequestToStreamButton"),
        m = (0, r.bG)([s.A], () => s.A.getVoiceChannelId() === n.id, [n.id]);
    if (null == p) return null;
    let h = (0, i.jsx)(l.$nd, {
        text: u.intl.string(d.default.DKHhec),
        variant: A,
        size: "sm",
        onClick: () => {
            p.handleRequestToStream("request to stream button"), c?.();
        },
        fullWidth: !0,
        disabled: !m,
    });
    return m
        ? h
        : (0, i.jsx)(a.m, { position: "top", text: u.intl.string(d.default.qRXats), asContainer: !0, children: h });
}
