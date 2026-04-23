n.d(t, { B: () => u });
var i = n(627968),
    l = n(821609),
    a = n(311907),
    s = n(990078),
    r = n(309010),
    o = n(235052),
    c = n(783198),
    d = n(985018);
function u(e) {
    let { userId: t, channel: n, onAction: u, variant: h = "primary" } = e,
        m = (0, o.u)(t, n, "useRequestToStreamButton"),
        A = (0, a.bG)([r.A], () => r.A.getVoiceChannelId() === n.id, [n.id]);
    if (null == m) return null;
    let g = (0, i.jsx)(l.$, {
        text: d.intl.string(c.default.DKHhec),
        variant: h,
        size: "sm",
        onClick: () => {
            m.handleRequestToStream("request to stream button"), u?.();
        },
        fullWidth: !0,
        disabled: !A,
    });
    return A
        ? g
        : (0, i.jsx)(s.m, { position: "top", text: d.intl.string(c.default.qRXats), asContainer: !0, children: g });
}
