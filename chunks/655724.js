n.d(e, { B: () => c });
var i = n(627968),
    l = n(158954),
    r = n(311907),
    s = n(990078),
    a = n(309010),
    o = n(235052),
    u = n(55705),
    d = n(985018);
function c(t) {
    let { userId: e, channel: n, onAction: c, variant: h = "primary" } = t,
        A = (0, o.u)(e, n, "useRequestToStreamButton"),
        m = (0, r.bG)([a.A], () => a.A.getVoiceChannelId() === n.id, [n.id]);
    if (null == A) return null;
    let p = (0, i.jsx)(l.$nd, {
        text: d.intl.string(u.default.DKHhec),
        variant: h,
        size: "sm",
        onClick: () => {
            A.handleRequestToStream("request to stream button"), c?.();
        },
        fullWidth: !0,
        disabled: !m,
    });
    return m
        ? p
        : (0, i.jsx)(s.m, { position: "top", text: d.intl.string(u.default.qRXats), asContainer: !0, children: p });
}
