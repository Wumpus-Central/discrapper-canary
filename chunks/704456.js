n.d(t, { Ce: () => p, kh: () => m, le: () => A, vr: () => h });
var i,
    r = n(64700),
    a = n(989349),
    o = n.n(a),
    s = n(17928),
    l = n(308528),
    c = n(22007),
    _ = n(95701),
    d = n(734057),
    u = n(652215),
    g = n(985018),
    m = (((i = {})[(i.LONG = 0)] = "LONG"), (i[(i.SHORT = 1)] = "SHORT"), i);
function p(e) {
    let { dueAt: t, now: n, type: i } = e;
    if (null == t) return { string: "", isOverdue: !1 };
    let r = 0 === i ? g.t.TjNWNF : g.t.H4gnX9,
        a = 0 === i ? g.t.haia16 : g.t["Uq7Y+7"],
        s = n > t;
    return {
        dueInText: g.intl.formatToPlainString(s ? a : r, {
            duration: o()
                .duration(t.getTime() - n.getTime(), "millisecond")
                .humanize(),
        }),
        isOverdue: s,
    };
}
function h(e) {
    let t = (0, s.bG)([d.A], () => d.A.getChannel(e.saveData.channelId));
    return r.useMemo(
        () =>
            null != t
                ? t
                : null != e.message
                  ? new _.jb({
                        id: e.saveData.channelId,
                        guild_id: e.saveData.guildId,
                        type: u.rbe.UNKNOWN,
                        name: g.intl.string(g.t.J90oLW),
                    })
                  : void 0,
        [t, e],
    );
}
async function A(e, t) {
    if (t?.type === u.rbe.UNKNOWN && null == e.saveData.guildId)
        try {
            let t = await l.A.fetchChannel(e.saveData.channelId);
            if (null == t.recipients || t.recipients.length > 1) return;
            await l.A.ensurePrivateChannel(t.recipients.map((e) => e.id));
        } catch (e) {}
    (0, c.A)(u.BVt.CHANNEL(t?.getGuildId(), e.saveData.channelId, e.saveData.messageId), { openChannel: !0 });
}
