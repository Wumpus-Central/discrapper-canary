n.d(t, { Z: () => u });
var r = n(442837),
    i = n(314897),
    o = n(111583),
    a = n(351780),
    s = n(339478),
    l = n(170248),
    c = n(524484);
function u(e) {
    let t = (0, l.Z)(c.oZ.CHAT_INPUT),
        n = (0, r.e7)([a.Z], () => a.Z.isEnabled({ shakeLocation: c.oZ.CHAT_INPUT }));
    return (0, r.e7)([o.Z, s.ZP, i.default], () =>
        n && o.Z.isTyping(e, i.default.getId()) ? s.ZP.getUserComboShakeIntensity(i.default.getId(), e, t) : 0,
    );
}
