n.d(t, { r: () => a });
var l = n(582128),
    i = n(17928),
    s = n(696451),
    r = n(780898);
function a(e) {
    let { user: t, guildId: n } = e,
        a = (0, i.bG)([s.Ay], () => (null != n && null != t ? s.Ay.getMember(n, t.id) : null));
    return l.useMemo(() => {
        if (null != t) return (0, r.WK)(a?.collectibles?.nameplate) ?? t.nameplate;
    }, [a, t]);
}
