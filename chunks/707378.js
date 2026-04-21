t.d(n, { A: () => g });
var l = t(627968),
    i = t(311907),
    r = t(397927),
    a = t(690990),
    d = t(961350),
    s = t(734057),
    u = t(994500),
    o = t(309010),
    c = t(652215),
    A = t(985018);
function g(e) {
    let { user: n, context: t } = e,
        g = (0, i.bG)([d.default], () => d.default.getId() === n.id),
        m = (0, i.bG)([u.A], () => u.A.isBlocked(n.id)),
        x = (0, i.bG)([o.A, s.A], () => o.A.getVoiceChannelId() === s.A.getDMFromUserId(n.id)),
        { runVoiceCallAction: b } = (0, a.b)({ userId: n.id });
    return g || t === c.BRT.POPOUT || x || n.bot || n.isProvisional
        ? null
        : (0, l.jsx)(r.Drp, { id: "call", label: A.intl.string(A.t["ZeP+kK"]), action: b, disabled: m });
}
