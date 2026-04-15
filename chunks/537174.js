n.d(t, { A: () => d });
var i = n(64700),
    l = n(317097),
    a = n(311907),
    r = n(397927),
    s = n(775602),
    o = n(521427),
    u = n(381941);
function d(e) {
    let t = (0, r.rdh)(r.LU0.colors.BACKGROUND_BASE_LOWER).hex(),
        n = (0, a.bG)([s.A], () => (s.A.desaturateUserColors ? s.A.saturation : 1));
    return i.useMemo(() => {
        if (null == e) return;
        let i = (0, o.Fy)(e, t, n, u.oe).hex();
        return {
            "--custom-guild-official-message": (0, l.$k)(e, !0),
            "--custom-guild-official-message-hsl": (0, l.BK)(e, !0),
            "--custom-guild-official-message-alpha": u.cZ,
            "--custom-guild-official-message-selected-alpha": u.oe,
            "--custom-guild-official-message-text": i,
        };
    }, [e, t, n]);
}
