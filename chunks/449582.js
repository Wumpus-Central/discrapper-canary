n.d(l, { r: () => i });
var t = n(582128),
    u = n(17928),
    r = n(696451),
    a = n(780898);
function i(e) {
    let { user: l, guildId: n } = e,
        i = (0, u.bG)([r.Ay], () => (null != n && null != l ? r.Ay.getMember(n, l.id) : null));
    return t.useMemo(() => {
        if (null != l) return (0, a.WK)(i?.collectibles?.nameplate) ?? l.nameplate;
    }, [i, l]);
}
