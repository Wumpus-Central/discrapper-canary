l.d(t, {
    A: () => f,
    U: () => p,
}),
    l(896048),
    l(638769);
var r = l(64700),
    n = l(311907),
    i = l(923408),
    s = l(80682),
    o = l(859241),
    a = l(256587),
    u = l(696451),
    d = l(71393),
    c = l(661191);

function f(e, t) {
    let l = (0, n.yK)([o.A], () => {
            var t;
            return null != (t = o.A.getAppliedGuildBoostsForGuild(e)) ? t : [];
        }, [e]),
        f = r.useMemo(
            () =>
                [...l]
                    .sort((e, t) => (c.default.extractTimestamp(e.id) < c.default.extractTimestamp(t.id) ? 1 : -1))
                    .slice(0, t),
            [l, t],
        ),
        p = (0, n.yK)([u.Ay], () => {
            let t = new Set();
            return (
                f.forEach((l) => {
                    null == u.Ay.getMember(e, l.userId) && t.add(l.userId);
                }),
                Array.from(t)
            );
        }, [e, f]);
    r.useEffect(() => {
        p.length > 0 && p.forEach((t) => a.A.requestMember(e, t));
    }, [e, p]);
    let m = r.useMemo(
        () =>
            p.length > 0
                ? {
                      [e]: p,
                  }
                : {},
        [e, p],
    );
    (0, s.E)(m, "GuildPowerupsRecentActivity");
    let v = (0, n.bG)([d.A], () => {
        var t;
        return null == (t = d.A.getGuild(e)) ? void 0 : t.premiumSubscriberCount;
    });
    return (
        r.useEffect(() => {
            v !== l.length && (0, i.VU)(e);
        }, [e, v, l.length]),
        f
    );
}

function p(e) {
    let t = new Date(c.default.extractTimestamp(e.id)),
        {
            username: l,
            roleColor: r,
            roleColorStrings: i,
        } = (0, n.cf)([u.Ay], () => {
            var t, l, r, n;
            let i = u.Ay.getMember(e.guildId, e.userId);
            return {
                username:
                    null != (t = u.Ay.getNick(e.guildId, e.userId)) ? t : null == (n = e.user) ? void 0 : n.username,
                roleColor: null != (l = null == i ? void 0 : i.colorString) ? l : null,
                roleColorStrings: null != (r = null == i ? void 0 : i.colorStrings) ? r : null,
            };
        }, [e]);
    return {
        timestamp: t,
        username: l,
        roleColor: r,
        roleColorStrings: i,
    };
}
