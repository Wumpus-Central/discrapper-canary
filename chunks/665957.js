n.d(t, {
    Z: () => f,
    _: () => p,
}),
    n(388685),
    n(642613);
var r = n(473749),
    i = n(442837),
    l = n(179360),
    o = n(616780),
    a = n(899667),
    s = n(720202),
    c = n(271383),
    u = n(430824),
    d = n(709054);
function f(e, t) {
    let n = (0, i.Wu)([a.Z], () => {
            var t;
            return null != (t = a.Z.getAppliedGuildBoostsForGuild(e)) ? t : [];
        }, [e]),
        f = r.useMemo(
            () =>
                [...n]
                    .sort((e, t) => (d.default.extractTimestamp(e.id) < d.default.extractTimestamp(t.id) ? 1 : -1))
                    .slice(0, t),
            [n, t],
        ),
        p = (0, i.Wu)([c.ZP], () => {
            let t = new Set();
            return (
                f.forEach((n) => {
                    null == c.ZP.getMember(e, n.userId) && t.add(n.userId);
                }),
                Array.from(t)
            );
        }, [e, f]);
    r.useEffect(() => {
        p.length > 0 && p.forEach((t) => s.Z.requestMember(e, t));
    }, [e, p]);
    let m = r.useMemo(() => (p.length > 0 ? { [e]: p } : {}), [e, p]);
    (0, o.$)(m, "GuildPowerupsRecentActivity");
    let g = (0, i.e7)([u.Z], () => {
        var t;
        return null == (t = u.Z.getGuild(e)) ? void 0 : t.premiumSubscriberCount;
    });
    return (
        r.useEffect(() => {
            g !== n.length && (0, l.C0)(e);
        }, [e, g, n.length]),
        f
    );
}
function p(e) {
    let t = new Date(d.default.extractTimestamp(e.id)),
        {
            username: n,
            roleColor: r,
            roleColorStrings: l,
        } = (0, i.cj)([c.ZP], () => {
            var t, n, r, i;
            let l = c.ZP.getMember(e.guildId, e.userId);
            return {
                username:
                    null != (n = c.ZP.getNick(e.guildId, e.userId)) ? n : null == (t = e.user) ? void 0 : t.username,
                roleColor: null != (r = null == l ? void 0 : l.colorString) ? r : null,
                roleColorStrings: null != (i = null == l ? void 0 : l.colorStrings) ? i : null,
            };
        }, [e]);
    return {
        timestamp: t,
        username: n,
        roleColor: r,
        roleColorStrings: l,
    };
}
