n.d(t, {
    AT: () => p,
    fC: () => f,
    gr: () => g,
    hQ: () => h
});
var i,
    l = n(192379),
    a = n(913527),
    r = n.n(a),
    s = n(442837),
    o = n(493683),
    c = n(336197),
    d = n(131704),
    u = n(592125),
    m = n(981631),
    _ = n(388032),
    h = (((i = {})[(i.LONG = 0)] = 'LONG'), (i[(i.SHORT = 1)] = 'SHORT'), i);
function p(e) {
    let { dueAt: t, now: n, type: i } = e;
    if (null == t)
        return {
            string: '',
            isOverdue: !1
        };
    let l = 0 === i ? _.t.TjNWND : _.t.H4gnX1,
        a = 0 === i ? _.t.haia19 : _.t['Uq7Y+/'],
        s = n > t;
    return {
        dueInText: _.intl.formatToPlainString(s ? a : l, {
            duration: r()
                .duration(t.getTime() - n.getTime(), 'millisecond')
                .humanize()
        }),
        isOverdue: s
    };
}
function g(e) {
    let t = (0, s.e7)([u.Z], () => u.Z.getChannel(e.saveData.channelId));
    return l.useMemo(
        () =>
            null != t
                ? t
                : null != e.message
                  ? new d.nl({
                        id: e.saveData.channelId,
                        guild_id: e.saveData.guildId,
                        type: m.d4z.UNKNOWN,
                        name: _.intl.string(_.t.J90oLS)
                    })
                  : void 0,
        [t, e]
    );
}
async function f(e, t) {
    if ((null == t ? void 0 : t.type) === m.d4z.UNKNOWN && null == e.saveData.guildId)
        try {
            let t = await o.Z.fetchChannel(e.saveData.channelId);
            if (null == t.recipients || t.recipients.length > 1) return;
            await o.Z.ensurePrivateChannel(t.recipients.map((e) => e.id));
        } catch (e) {}
    (0, c.Z)(m.Z5c.CHANNEL(null == t ? void 0 : t.getGuildId(), e.saveData.channelId, e.saveData.messageId), { openChannel: !0 });
}
