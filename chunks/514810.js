n.d(t, { N: () => r });
var i = n(64700),
    l = n(17928),
    s = n(287809),
    a = n(985018);
function r(e) {
    let t = e.linkedLobby?.linked_at,
        n = (0, l.bG)([s.default], () => s.default.getUser(e.linkedLobby?.linked_by));
    return i.useMemo(() => {
        if (null == t) return;
        let e = new Date(t);
        return null != n
            ? a.intl.format(a.t["xPrJ+q"], { username: n.username, linkedAtDate: e })
            : a.intl.formatToPlainString(a.t.EyygeM, { linkedAtDate: e });
    }, [t, n]);
}
