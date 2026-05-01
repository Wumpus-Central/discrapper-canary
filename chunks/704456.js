e.d(n, { Ce: () => m, kh: () => A, le: () => O, vr: () => C });
var i,
    a = e(64700),
    l = e(989349),
    s = e.n(l),
    r = e(17928),
    d = e(308528),
    u = e(741231),
    c = e(95701),
    o = e(734057),
    g = e(652215),
    h = e(375708),
    A = (((i = {})[(i.LONG = 0)] = "LONG"), (i[(i.SHORT = 1)] = "SHORT"), i);
function m(t) {
    let { dueAt: n, now: e, type: i } = t;
    if (null == n) return { string: "", isOverdue: !1 };
    let a = 0 === i ? h.t.TjNWNF : h.t.H4gnX9,
        l = 0 === i ? h.t.haia16 : h.t["Uq7Y+7"],
        r = e > n;
    return {
        dueInText: h.intl.formatToPlainString(r ? l : a, {
            duration: s()
                .duration(n.getTime() - e.getTime(), "millisecond")
                .humanize(),
        }),
        isOverdue: r,
    };
}
function C(t) {
    let n = (0, r.bG)([o.A], () => o.A.getChannel(t.saveData.channelId));
    return a.useMemo(
        () =>
            null != n
                ? n
                : null != t.message
                  ? new c.jb({
                        id: t.saveData.channelId,
                        guild_id: t.saveData.guildId,
                        type: g.rbe.UNKNOWN,
                        name: h.intl.string(h.t.J90oLW),
                    })
                  : void 0,
        [n, t],
    );
}
async function O(t, n) {
    if (n?.type === g.rbe.UNKNOWN && null == t.saveData.guildId)
        try {
            let n = await d.A.fetchChannel(t.saveData.channelId);
            if (null == n.recipients || n.recipients.length > 1) return;
            await d.A.ensurePrivateChannel(n.recipients.map((t) => t.id));
        } catch (t) {}
    (0, u.A)(g.BVt.CHANNEL(n?.getGuildId(), t.saveData.channelId, t.saveData.messageId), { openChannel: !0 });
}
