a.d(s, { A: () => f });
var i = a(64700),
    t = a(317097),
    u = a(17928),
    o = a(602853),
    l = a(661531),
    c = a(775602),
    r = a(780574),
    d = a(381941);
function f(e) {
    let s = (0, o.r)(l.A.colors.BACKGROUND_BASE_LOWER).hex(),
        a = (0, u.bG)([c.A], () => (c.A.desaturateUserColors ? c.A.saturation : 1));
    return i.useMemo(() => {
        if (null == e) return;
        let i = (0, r.Fy)(e, s, a, d.oe).hex();
        return {
            "--custom-guild-official-message": (0, t.$k)(e, !0),
            "--custom-guild-official-message-hsl": (0, t.BK)(e, !0),
            "--custom-guild-official-message-alpha": d.cZ,
            "--custom-guild-official-message-selected-alpha": d.oe,
            "--custom-guild-official-message-text": i,
        };
    }, [e, s, a]);
}
