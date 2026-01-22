n.d(t, {
    A: () => d,
    r: () => c,
});
var r = n(311907),
    l = n(541702),
    i = n(309632),
    s = n(253932),
    a = n(617617),
    o = n(222823),
    u = n(461012);
function c(e) {
    return (0, r.bG)([a.A], () => {
        var t, n, r;
        let l;
        return (
            (t = a.A.settings.guilds),
            null !=
                (l =
                    null != e
                        ? null == t || null == (r = t.guilds[e]) || null == (n = r.mobileRedesignChannelListSettings)
                            ? void 0
                            : n.messagePreviews
                        : null) && s.AB.has(l.value)
                ? l.value
                : s.wT.getSetting()
        );
    });
}
function d(e, t) {
    let { unread: n, disabled: s } = t,
        a = c(e.guild_id),
        d = (0, r.bG)([o.Ay], () => null != e && o.Ay.hasUnread(e.id)),
        p = (0, l.A)(e),
        m = s || p || a === u.P.NONE || (a === u.P.UNREADS && !(null != n ? n : d));
    return (0, i.A)(e, m);
}
