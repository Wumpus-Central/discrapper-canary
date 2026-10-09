e.d(n, { Ce: () => f, kh: () => m, le: () => A, vr: () => p });
var i,
    a = e(582128),
    l = e(536637),
    r = e.n(l),
    s = e(17928),
    c = e(308528),
    u = e(741231),
    d = e(95701),
    o = e(734057),
    g = e(652215),
    h = e(660183),
    m = (((i = {})[(i.LONG = 0)] = "LONG"), (i[(i.SHORT = 1)] = "SHORT"), i);
function f(t) {
    let { dueAt: n, now: e, type: i } = t;
    if (null == n) return { string: "", isOverdue: !1 };
    let a = 0 === i ? h.t.TjNWNF : h.t.H4gnX9,
        l = 0 === i ? h.t.haia16 : h.t["Uq7Y+7"],
        s = e > n;
    return {
        dueInText: h.intl.formatToPlainString(s ? l : a, {
            duration: r()
                .duration(n.getTime() - e.getTime(), "millisecond")
                .humanize(),
        }),
        isOverdue: s,
    };
}
function p(t) {
    let n = (0, s.bG)([o.A], () => o.A.getChannel(t.saveData.channelId));
    return a.useMemo(
        () =>
            null != n
                ? n
                : null != t.message
                  ? new d.jb({
                        id: t.saveData.channelId,
                        guild_id: t.saveData.guildId,
                        type: g.rbe.UNKNOWN,
                        name: h.intl.string(h.t.J90oLW),
                    })
                  : void 0,
        [n, t],
    );
}
async function A(t, n) {
    if (n?.type === g.rbe.UNKNOWN && null == t.saveData.guildId)
        try {
            let n = await c.A.fetchChannel(t.saveData.channelId);
            if (null == n.recipients || n.recipients.length > 1) return;
            await c.A.ensurePrivateChannel(n.recipients.map((t) => t.id));
        } catch (t) {}
    (0, u.A)(g.BVt.CHANNEL(n?.getGuildId(), t.saveData.channelId, t.saveData.messageId), { openChannel: !0 });
}
