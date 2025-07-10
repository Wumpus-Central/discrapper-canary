n.d(t, {
    AT: () => g,
    fC: () => S,
    gr: () => m,
    hQ: () => f
});
var r,
    l = n(73800),
    s = n(913527),
    a = n.n(s),
    i = n(442837),
    o = n(493683),
    c = n(336197),
    u = n(131704),
    d = n(592125),
    h = n(981631),
    p = n(388032),
    f = (((r = {})[(r.LONG = 0)] = 'LONG'), (r[(r.SHORT = 1)] = 'SHORT'), r);
function g(e) {
    let { dueAt: t, now: n, type: r } = e;
    if (null == t)
        return {
            string: '',
            isOverdue: !1
        };
    let l = 0 === r ? p.t.TjNWND : p.t.H4gnX1,
        s = 0 === r ? p.t.haia19 : p.t['Uq7Y+/'],
        i = n > t;
    return {
        dueInText: p.intl.formatToPlainString(i ? s : l, {
            duration: a()
                .duration(t.getTime() - n.getTime(), 'millisecond')
                .humanize()
        }),
        isOverdue: i
    };
}
function m(e) {
    let t = (0, i.e7)([d.Z], () => d.Z.getChannel(e.saveData.channelId));
    return l.useMemo(
        () =>
            null != t
                ? t
                : null != e.message
                  ? new u.nl({
                        id: e.saveData.channelId,
                        guild_id: e.saveData.guildId,
                        type: h.d4z.UNKNOWN,
                        name: p.intl.string(p.t.J90oLS)
                    })
                  : void 0,
        [t, e]
    );
}
async function S(e, t) {
    if ((null == t ? void 0 : t.type) === h.d4z.UNKNOWN && null == e.saveData.guildId)
        try {
            let t = await o.Z.fetchChannel(e.saveData.channelId);
            if (null == t.recipients || t.recipients.length > 1) return;
            await o.Z.ensurePrivateChannel(t.recipients.map((e) => e.id));
        } catch (e) {}
    (0, c.Z)(h.Z5c.CHANNEL(null == t ? void 0 : t.getGuildId(), e.saveData.channelId, e.saveData.messageId), { openChannel: !0 });
}
