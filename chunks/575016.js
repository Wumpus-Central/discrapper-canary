n.d(t, {
    AT: () => h,
    fC: () => _,
    gr: () => g,
    hQ: () => f
});
var r,
    i = n(192379),
    a = n(913527),
    o = n.n(a),
    l = n(442837),
    s = n(493683),
    c = n(336197),
    d = n(131704),
    u = n(592125),
    p = n(981631),
    m = n(388032),
    f = (((r = {})[(r.LONG = 0)] = 'LONG'), (r[(r.SHORT = 1)] = 'SHORT'), r);
function h(e) {
    let { dueAt: t, now: n, type: r } = e;
    if (null == t)
        return {
            string: '',
            isOverdue: !1
        };
    let i = 0 === r ? m.t.TjNWND : m.t.H4gnX1,
        a = 0 === r ? m.t.haia19 : m.t['Uq7Y+/'],
        l = n > t;
    return {
        dueInText: m.NW.formatToPlainString(l ? a : i, {
            duration: o()
                .duration(t.getTime() - n.getTime(), 'millisecond')
                .humanize()
        }),
        isOverdue: l
    };
}
function g(e) {
    let t = (0, l.e7)([u.Z], () => u.Z.getChannel(e.saveData.channelId));
    return i.useMemo(
        () =>
            null != t
                ? t
                : null != e.message
                  ? new d.nl({
                        id: e.saveData.channelId,
                        guild_id: e.saveData.guildId,
                        type: p.d4z.UNKNOWN,
                        name: m.NW.string(m.t.J90oLS)
                    })
                  : void 0,
        [t, e]
    );
}
async function _(e, t) {
    if ((null == t ? void 0 : t.type) === p.d4z.UNKNOWN && null == e.saveData.guildId)
        try {
            let t = await s.Z.fetchChannel(e.saveData.channelId);
            if (null == t.recipients || t.recipients.length > 1) return;
            await s.Z.ensurePrivateChannel(t.recipients.map((e) => e.id));
        } catch (e) {}
    (0, c.Z)(p.Z5c.CHANNEL(null == t ? void 0 : t.getGuildId(), e.saveData.channelId, e.saveData.messageId), { openChannel: !0 });
}
