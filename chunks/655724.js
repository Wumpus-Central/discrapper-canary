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
    let { userId: e, channel: i, onAction: c, variant: m = "primary" } = t,
        p = (0, o.u)(e, i, "useRequestToStreamButton"),
        h = (0, r.bG)([a.A], () => a.A.getVoiceChannelId() === i.id, [i.id]);
    if (null == p) return null;
    let A = (0, n.jsx)(l.$nd, {
        text: u.intl.string(d.default.DKHhec),
        variant: m,
        size: "sm",
        onClick: () => {
            p.handleRequestToStream("request to stream button"), c?.();
        },
        fullWidth: !0,
        disabled: !h,
    });
    return h
        ? A
        : (0, n.jsx)(s.m, { position: "top", text: u.intl.string(d.default.qRXats), asContainer: !0, children: A });
}
