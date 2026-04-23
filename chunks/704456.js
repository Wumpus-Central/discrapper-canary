n.d(t, { Ce: () => m, kh: () => h, le: () => p, vr: () => f });
var i,
    l = n(64700),
    a = n(989349),
    r = n.n(a),
    s = n(311907),
    o = n(308528),
    d = n(22007),
    c = n(95701),
    u = n(734057),
    g = n(652215),
    A = n(985018),
    h = (((i = {})[(i.LONG = 0)] = "LONG"), (i[(i.SHORT = 1)] = "SHORT"), i);
function m(e) {
    let { dueAt: t, now: n, type: i } = e;
    if (null == t) return { string: "", isOverdue: !1 };
    let l = 0 === i ? A.t.TjNWNF : A.t.H4gnX9,
        a = 0 === i ? A.t.haia16 : A.t["Uq7Y+7"],
        s = n > t;
    return {
        dueInText: A.intl.formatToPlainString(s ? a : l, {
            duration: r()
                .duration(t.getTime() - n.getTime(), "millisecond")
                .humanize(),
        }),
        isOverdue: s,
    };
}
function f(e) {
    let t = (0, s.bG)([u.A], () => u.A.getChannel(e.saveData.channelId));
    return l.useMemo(
        () =>
            null != t
                ? t
                : null != e.message
                  ? new c.jb({
                        id: e.saveData.channelId,
                        guild_id: e.saveData.guildId,
                        type: g.rbe.UNKNOWN,
                        name: A.intl.string(A.t.J90oLW),
                    })
                  : void 0,
        [t, e],
    );
}
async function p(e, t) {
    if (t?.type === g.rbe.UNKNOWN && null == e.saveData.guildId)
        try {
            let t = await o.A.fetchChannel(e.saveData.channelId);
            if (null == t.recipients || t.recipients.length > 1) return;
            await o.A.ensurePrivateChannel(t.recipients.map((e) => e.id));
        } catch (e) {}
    (0, d.A)(g.BVt.CHANNEL(t?.getGuildId(), e.saveData.channelId, e.saveData.messageId), { openChannel: !0 });
}
