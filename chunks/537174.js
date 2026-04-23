l.d(t, { A: () => d });
var n = l(64700),
    i = l(317097),
    a = l(311907),
    s = l(602853),
    r = l(827734),
    o = l(775602),
    u = l(521427),
    c = l(381941);
function d(e) {
    let t = (0, s.r)(r.A.colors.BACKGROUND_BASE_LOWER).hex(),
        l = (0, a.bG)([o.A], () => (o.A.desaturateUserColors ? o.A.saturation : 1));
    return n.useMemo(() => {
        if (null == e) return;
        let n = (0, u.Fy)(e, t, l, c.oe).hex();
        return {
            "--custom-guild-official-message": (0, i.$k)(e, !0),
            "--custom-guild-official-message-hsl": (0, i.BK)(e, !0),
            "--custom-guild-official-message-alpha": c.cZ,
            "--custom-guild-official-message-selected-alpha": c.oe,
            "--custom-guild-official-message-text": n,
        };
    }, [e, t, l]);
}
