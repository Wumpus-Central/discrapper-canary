n.d(t, { A: () => g });
var i = n(627968),
    l = n(17928),
    a = n(477782),
    r = n(690990),
    d = n(495544),
    o = n(734057),
    s = n(994500),
    u = n(309010),
    c = n(652215),
    A = n(985018);
function g(e) {
    let { user: t, context: n } = e,
        g = (0, l.bG)([d.default], () => d.default.getId() === t.id),
        f = (0, l.bG)([s.A], () => s.A.isBlocked(t.id)),
        E = (0, l.bG)([u.A, o.A], () => u.A.getVoiceChannelId() === o.A.getDMFromUserId(t.id)),
        { runVoiceCallAction: b } = (0, r.b)({ userId: t.id });
    return g || n === c.BRT.POPOUT || E || t.bot || t.isProvisional
        ? null
        : (0, i.jsx)(a.Dr, { id: "call", label: A.intl.string(A.t["ZeP+kK"]), action: b, disabled: f });
}
