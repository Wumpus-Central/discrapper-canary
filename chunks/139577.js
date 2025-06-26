n.d(t, { Z: () => u });
var r = n(442837),
    i = n(314897),
    l = n(111583),
    o = n(351780),
    a = n(843693),
    s = n(170248),
    c = n(524484);
function u(e) {
    let t = (0, s.Z)(c.oZ.CHAT_INPUT),
        n = (0, r.e7)([o.Z], () => o.Z.isEnabled({ shakeLocation: c.oZ.CHAT_INPUT }));
    return (0, r.e7)([l.Z, a.ZP, i.default], () => (n && l.Z.isTyping(e, i.default.getId()) ? a.ZP.getUserComboShakeIntensity(i.default.getId(), e, t) : 0));
}
