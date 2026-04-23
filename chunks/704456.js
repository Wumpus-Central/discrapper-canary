n.d(t, { Ce: () => A, kh: () => m, le: () => C, vr: () => p });
var l,
    i = n(64700),
    s = n(989349),
    a = n.n(s),
    r = n(17928),
    o = n(308528),
    c = n(22007),
    d = n(95701),
    u = n(734057),
    h = n(652215),
    g = n(985018),
    m = (((l = {})[(l.LONG = 0)] = "LONG"), (l[(l.SHORT = 1)] = "SHORT"), l);
function A(e) {
    let { dueAt: t, now: n, type: l } = e;
    if (null == t) return { string: "", isOverdue: !1 };
    let i = 0 === l ? g.t.TjNWNF : g.t.H4gnX9,
        s = 0 === l ? g.t.haia16 : g.t["Uq7Y+7"],
        r = n > t;
    return {
        dueInText: g.intl.formatToPlainString(r ? s : i, {
            duration: a()
                .duration(t.getTime() - n.getTime(), "millisecond")
                .humanize(),
        }),
        isOverdue: r,
    };
}
function p(e) {
    let t = (0, r.bG)([u.A], () => u.A.getChannel(e.saveData.channelId));
    return i.useMemo(
        () =>
            null != t
                ? t
                : null != e.message
                  ? new d.jb({
                        id: e.saveData.channelId,
                        guild_id: e.saveData.guildId,
                        type: h.rbe.UNKNOWN,
                        name: g.intl.string(g.t.J90oLW),
                    })
                  : void 0,
        [t, e],
    );
}
async function C(e, t) {
    if (t?.type === h.rbe.UNKNOWN && null == e.saveData.guildId)
        try {
            let t = await o.A.fetchChannel(e.saveData.channelId);
            if (null == t.recipients || t.recipients.length > 1) return;
            await o.A.ensurePrivateChannel(t.recipients.map((e) => e.id));
        } catch (e) {}
    (0, c.A)(h.BVt.CHANNEL(t?.getGuildId(), e.saveData.channelId, e.saveData.messageId), { openChannel: !0 });
}
