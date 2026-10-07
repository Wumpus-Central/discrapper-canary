e.d(n, { Ce: () => O, kh: () => A, le: () => C, vr: () => m });
var i,
    l = e(582128),
    a = e(536637),
    s = e.n(a),
    r = e(17928),
    u = e(308528),
    d = e(741231),
    c = e(95701),
    o = e(734057),
    g = e(652215),
    h = e(660183),
    A = (((i = {})[(i.LONG = 0)] = "LONG"), (i[(i.SHORT = 1)] = "SHORT"), i);
function O(t) {
    let { dueAt: n, now: e, type: i } = t;
    if (null == n) return { string: "", isOverdue: !1 };
    let l = 0 === i ? h.t.TjNWNF : h.t.H4gnX9,
        a = 0 === i ? h.t.haia16 : h.t["Uq7Y+7"],
        r = e > n;
    return {
        dueInText: h.intl.formatToPlainString(r ? a : l, {
            duration: s()
                .duration(n.getTime() - e.getTime(), "millisecond")
                .humanize(),
        }),
        isOverdue: r,
    };
}
function m(t) {
    let n = (0, r.bG)([o.A], () => o.A.getChannel(t.saveData.channelId));
    return l.useMemo(
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
async function C(t, n) {
    if (n?.type === g.rbe.UNKNOWN && null == t.saveData.guildId)
        try {
            let n = await u.A.fetchChannel(t.saveData.channelId);
            if (null == n.recipients || n.recipients.length > 1) return;
            await u.A.ensurePrivateChannel(n.recipients.map((t) => t.id));
        } catch (t) {}
    (0, d.A)(g.BVt.CHANNEL(n?.getGuildId(), t.saveData.channelId, t.saveData.messageId), { openChannel: !0 });
}
