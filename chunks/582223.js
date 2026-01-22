n.d(t, { A: () => u });
var r = n(311907),
    l = n(961350),
    i = n(741961),
    a = n(3137),
    s = n(559908),
    o = n(208343),
    c = n(31408);
function u(e) {
    let t = (0, o.A)(c.uD.CHAT_INPUT),
        n = (0, r.bG)([a.A], () => a.A.isEnabled({ shakeLocation: c.uD.CHAT_INPUT }));
    return (0, r.bG)([i.A, s.Ay, l.default], () =>
        n && i.A.isTyping(e, l.default.getId()) ? s.Ay.getUserComboShakeIntensity(l.default.getId(), e, t) : 0,
    );
}
