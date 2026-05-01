t.d(n, { Ce: () => v, kh: () => p, le: () => m, vr: () => N });
var a,
    i = t(64700),
    l = t(989349),
    r = t.n(l),
    s = t(17928),
    u = t(308528),
    d = t(22007),
    c = t(95701),
    h = t(734057),
    g = t(652215),
    o = t(985018),
    p = (((a = {})[(a.LONG = 0)] = "LONG"), (a[(a.SHORT = 1)] = "SHORT"), a);
function v(e) {
    let { dueAt: n, now: t, type: a } = e;
    if (null == n) return { string: "", isOverdue: !1 };
    let i = 0 === a ? o.t.TjNWNF : o.t.H4gnX9,
        l = 0 === a ? o.t.haia16 : o.t["Uq7Y+7"],
        s = t > n;
    return {
        dueInText: o.intl.formatToPlainString(s ? l : i, {
            duration: r()
                .duration(n.getTime() - t.getTime(), "millisecond")
                .humanize(),
        }),
        isOverdue: s,
    };
}
function N(e) {
    let n = (0, s.bG)([h.A], () => h.A.getChannel(e.saveData.channelId));
    return i.useMemo(
        () =>
            null != n
                ? n
                : null != e.message
                  ? new c.jb({
                        id: e.saveData.channelId,
                        guild_id: e.saveData.guildId,
                        type: g.rbe.UNKNOWN,
                        name: o.intl.string(o.t.J90oLW),
                    })
                  : void 0,
        [n, e],
    );
}
async function m(e, n) {
    if (n?.type === g.rbe.UNKNOWN && null == e.saveData.guildId)
        try {
            let n = await u.A.fetchChannel(e.saveData.channelId);
            if (null == n.recipients || n.recipients.length > 1) return;
            await u.A.ensurePrivateChannel(n.recipients.map((e) => e.id));
        } catch (e) {}
    (0, d.A)(g.BVt.CHANNEL(n?.getGuildId(), e.saveData.channelId, e.saveData.messageId), { openChannel: !0 });
}
