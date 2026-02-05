n.d(t, { A: () => d });
var i = n(311907),
    l = n(961350),
    a = n(741961),
    s = n(3137),
    r = n(559908),
    o = n(208343),
    c = n(31408);
function d(e) {
    let t = (0, o.A)(c.uD.CHAT_INPUT),
        n = (0, i.bG)([s.A], () => s.A.isEnabled({ shakeLocation: c.uD.CHAT_INPUT }));
    return (0, i.bG)([a.A, r.Ay, l.default], () =>
        n && a.A.isTyping(e, l.default.getId()) ? r.Ay.getUserComboShakeIntensity(l.default.getId(), e, t) : 0,
    );
}
