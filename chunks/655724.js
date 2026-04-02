i.d(e, { B: () => c });
var n = i(627968),
    l = i(158954),
    r = i(311907),
    s = i(990078),
    a = i(309010),
    o = i(235052),
    d = i(55705),
    u = i(985018);
function c(t) {
    let { userId: e, channel: i, onAction: c, variant: p = "primary" } = t,
        m = (0, o.u)(e, i, "useRequestToStreamButton"),
        A = (0, r.bG)([a.A], () => a.A.getVoiceChannelId() === i.id, [i.id]);
    if (null == m) return null;
    let h = (0, n.jsx)(l.$nd, {
        text: u.intl.string(d.default.DKHhec),
        variant: p,
        size: "sm",
        onClick: () => {
            m.handleRequestToStream("request to stream button"), c?.();
        },
        fullWidth: !0,
        disabled: !A,
    });
    return A
        ? h
        : (0, n.jsx)(s.m, { position: "top", text: u.intl.string(d.default.qRXats), asContainer: !0, children: h });
}
