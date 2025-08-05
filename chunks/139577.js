n.d(t, { Z: () => u });
var r = n(442837),
    i = n(314897),
    a = n(111583),
    o = n(351780),
    s = n(843693),
    l = n(170248),
    c = n(524484);
function u(e) {
    let t = (0, l.Z)(c.oZ.CHAT_INPUT),
        n = (0, r.e7)([o.Z], () => o.Z.isEnabled({ shakeLocation: c.oZ.CHAT_INPUT }));
    return (0, r.e7)([a.Z, s.ZP, i.default], () => (n && a.Z.isTyping(e, i.default.getId()) ? s.ZP.getUserComboShakeIntensity(i.default.getId(), e, t) : 0));
}
