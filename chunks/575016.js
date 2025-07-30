n.d(t, {
    AT: () => g,
    fC: () => y,
    gr: () => m,
    hQ: () => f
});
var r,
    s = n(73800),
    l = n(913527),
    a = n.n(l),
    i = n(442837),
    o = n(493683),
    c = n(336197),
    u = n(131704),
    h = n(592125),
    d = n(981631),
    p = n(388032),
    f = (((r = {})[(r.LONG = 0)] = 'LONG'), (r[(r.SHORT = 1)] = 'SHORT'), r);
function g(e) {
    let { dueAt: t, now: n, type: r } = e;
    if (null == t)
        return {
            string: '',
            isOverdue: !1
        };
    let s = 0 === r ? p.t.TjNWND : p.t.H4gnX1,
        l = 0 === r ? p.t.haia19 : p.t['Uq7Y+/'],
        i = n > t;
    return {
        dueInText: p.intl.formatToPlainString(i ? l : s, {
            duration: a()
                .duration(t.getTime() - n.getTime(), 'millisecond')
                .humanize()
        }),
        isOverdue: i
    };
}
function m(e) {
    let t = (0, i.e7)([h.Z], () => h.Z.getChannel(e.saveData.channelId));
    return s.useMemo(
        () =>
            null != t
                ? t
                : null != e.message
                  ? new u.nl({
                        id: e.saveData.channelId,
                        guild_id: e.saveData.guildId,
                        type: d.d4z.UNKNOWN,
                        name: p.intl.string(p.t.J90oLS)
                    })
                  : void 0,
        [t, e]
    );
}
async function y(e, t) {
    if ((null == t ? void 0 : t.type) === d.d4z.UNKNOWN && null == e.saveData.guildId)
        try {
            let t = await o.Z.fetchChannel(e.saveData.channelId);
            if (null == t.recipients || t.recipients.length > 1) return;
            await o.Z.ensurePrivateChannel(t.recipients.map((e) => e.id));
        } catch (e) {}
    (0, c.Z)(d.Z5c.CHANNEL(null == t ? void 0 : t.getGuildId(), e.saveData.channelId, e.saveData.messageId), { openChannel: !0 });
}
