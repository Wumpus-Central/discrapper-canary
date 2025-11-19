n.d(t, {
    AT: () => p,
    fC: () => m,
    gr: () => h,
    hQ: () => _,
});
var r = n(473749),
    i = n(913527),
    a = n.n(i),
    o = n(442837),
    s = n(493683),
    l = n(336197),
    c = n(131704),
    u = n(592125),
    d = n(981631),
    f = n(388032),
    _ = (function (e) {
        return (e[(e.LONG = 0)] = "LONG"), (e[(e.SHORT = 1)] = "SHORT"), e;
    })({});
function p(e) {
    let { dueAt: t, now: n, type: r } = e;
    if (null == t)
        return {
            string: "",
            isOverdue: !1,
        };
    let i = 0 === r ? f.t.TjNWNF : f.t.H4gnX9,
        o = 0 === r ? f.t.haia16 : f.t["Uq7Y+7"],
        s = n > t,
        l = s ? o : i;
    return {
        dueInText: f.intl.formatToPlainString(l, {
            duration: a()
                .duration(t.getTime() - n.getTime(), "millisecond")
                .humanize(),
        }),
        isOverdue: s,
    };
}
function h(e) {
    let t = (0, o.e7)([u.Z], () => u.Z.getChannel(e.saveData.channelId));
    return r.useMemo(
        () =>
            null != t
                ? t
                : null != e.message
                  ? new c.nl({
                        id: e.saveData.channelId,
                        guild_id: e.saveData.guildId,
                        type: d.d4z.UNKNOWN,
                        name: f.intl.string(f.t.J90oLW),
                    })
                  : void 0,
        [t, e],
    );
}
async function m(e, t) {
    if ((null == t ? void 0 : t.type) === d.d4z.UNKNOWN && null == e.saveData.guildId)
        try {
            let t = await s.Z.fetchChannel(e.saveData.channelId);
            if (null == t.recipients || t.recipients.length > 1) return;
            await s.Z.ensurePrivateChannel(t.recipients.map((e) => e.id));
        } catch (e) {}
    (0, l.Z)(d.Z5c.CHANNEL(null == t ? void 0 : t.getGuildId(), e.saveData.channelId, e.saveData.messageId), {
        openChannel: !0,
    });
}
