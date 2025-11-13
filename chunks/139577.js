n.d(t, { Z: () => u });
var i = n(442837),
    r = n(314897),
    l = n(111583),
    a = n(351780),
    o = n(843693),
    s = n(170248),
    c = n(524484);
function u(e) {
    let t = (0, s.Z)(c.oZ.CHAT_INPUT),
        n = (0, i.e7)([a.Z], () => a.Z.isEnabled({ shakeLocation: c.oZ.CHAT_INPUT }));
    return (0, i.e7)([l.Z, o.ZP, r.default], () =>
        n && l.Z.isTyping(e, r.default.getId()) ? o.ZP.getUserComboShakeIntensity(r.default.getId(), e, t) : 0,
    );
}
