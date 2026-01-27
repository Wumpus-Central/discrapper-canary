r.d(t, {
    Ce: () => g,
    kh: () => f,
    le: () => E,
    vr: () => S,
});
var n,
    l = r(64700),
    s = r(989349),
    a = r.n(s),
    i = r(311907),
    o = r(308528),
    c = r(22007),
    u = r(95701),
    d = r(734057),
    h = r(652215),
    p = r(985018),
    f = (((n = {})[(n.LONG = 0)] = "LONG"), (n[(n.SHORT = 1)] = "SHORT"), n);

function g(e) {
    let { dueAt: t, now: r, type: n } = e;
    if (null == t)
        return {
            string: "",
            isOverdue: !1,
        };
    let l = 0 === n ? p.t.TjNWNF : p.t.H4gnX9,
        s = 0 === n ? p.t.haia16 : p.t["Uq7Y+7"],
        i = r > t;
    return {
        dueInText: p.intl.formatToPlainString(i ? s : l, {
            duration: a()
                .duration(t.getTime() - r.getTime(), "millisecond")
                .humanize(),
        }),
        isOverdue: i,
    };
}

function S(e) {
    let t = (0, i.bG)([d.A], () => d.A.getChannel(e.saveData.channelId));
    return l.useMemo(
        () =>
            null != t
                ? t
                : null != e.message
                  ? new u.jb({
                        id: e.saveData.channelId,
                        guild_id: e.saveData.guildId,
                        type: h.rbe.UNKNOWN,
                        name: p.intl.string(p.t.J90oLW),
                    })
                  : void 0,
        [t, e],
    );
}
async function E(e, t) {
    if ((null == t ? void 0 : t.type) === h.rbe.UNKNOWN && null == e.saveData.guildId)
        try {
            let t = await o.A.fetchChannel(e.saveData.channelId);
            if (null == t.recipients || t.recipients.length > 1) return;
            await o.A.ensurePrivateChannel(t.recipients.map((e) => e.id));
        } catch (e) {}
    (0, c.A)(h.BVt.CHANNEL(null == t ? void 0 : t.getGuildId(), e.saveData.channelId, e.saveData.messageId), {
        openChannel: !0,
    });
}
