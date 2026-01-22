n.d(t, {
    Ce: () => _,
    kh: () => p,
    le: () => m,
    vr: () => h,
});
var r = n(64700),
    i = n(989349),
    a = n.n(i),
    s = n(311907),
    o = n(308528),
    l = n(22007),
    c = n(95701),
    u = n(734057),
    d = n(652215),
    f = n(985018),
    p = (function (e) {
        return (e[(e.LONG = 0)] = "LONG"), (e[(e.SHORT = 1)] = "SHORT"), e;
    })({});

function _(e) {
    let { dueAt: t, now: n, type: r } = e;
    if (null == t)
        return {
            string: "",
            isOverdue: !1,
        };
    let i = 0 === r ? f.t.TjNWNF : f.t.H4gnX9,
        s = 0 === r ? f.t.haia16 : f.t["Uq7Y+7"],
        o = n > t,
        l = o ? s : i;
    return {
        dueInText: f.intl.formatToPlainString(l, {
            duration: a()
                .duration(t.getTime() - n.getTime(), "millisecond")
                .humanize(),
        }),
        isOverdue: o,
    };
}

function h(e) {
    let t = (0, s.bG)([u.A], () => u.A.getChannel(e.saveData.channelId));
    return r.useMemo(
        () =>
            null != t
                ? t
                : null != e.message
                  ? new c.jb({
                        id: e.saveData.channelId,
                        guild_id: e.saveData.guildId,
                        type: d.rbe.UNKNOWN,
                        name: f.intl.string(f.t.J90oLW),
                    })
                  : void 0,
        [t, e],
    );
}
async function m(e, t) {
    if ((null == t ? void 0 : t.type) === d.rbe.UNKNOWN && null == e.saveData.guildId)
        try {
            let t = await o.A.fetchChannel(e.saveData.channelId);
            if (null == t.recipients || t.recipients.length > 1) return;
            await o.A.ensurePrivateChannel(t.recipients.map((e) => e.id));
        } catch (e) {}
    (0, l.A)(d.BVt.CHANNEL(null == t ? void 0 : t.getGuildId(), e.saveData.channelId, e.saveData.messageId), {
        openChannel: !0,
    });
}
