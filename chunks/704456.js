"use strict";
s.d(t, { Ce: () => f, kh: () => h, le: () => A, vr: () => m });
var n,
    i = s(64700),
    r = s(989349),
    a = s.n(r),
    l = s(311907),
    c = s(308528),
    o = s(22007),
    d = s(95701),
    u = s(734057),
    p = s(652215),
    g = s(985018),
    h = (((n = {})[(n.LONG = 0)] = "LONG"), (n[(n.SHORT = 1)] = "SHORT"), n);
function f(e) {
    let { dueAt: t, now: s, type: n } = e;
    if (null == t) return { string: "", isOverdue: !1 };
    let i = 0 === n ? g.t.TjNWNF : g.t.H4gnX9,
        r = 0 === n ? g.t.haia16 : g.t["Uq7Y+7"],
        l = s > t;
    return {
        dueInText: g.intl.formatToPlainString(l ? r : i, {
            duration: a()
                .duration(t.getTime() - s.getTime(), "millisecond")
                .humanize(),
        }),
        isOverdue: l,
    };
}
function m(e) {
    let t = (0, l.bG)([u.A], () => u.A.getChannel(e.saveData.channelId));
    return i.useMemo(
        () =>
            null != t
                ? t
                : null != e.message
                  ? new d.jb({
                        id: e.saveData.channelId,
                        guild_id: e.saveData.guildId,
                        type: p.rbe.UNKNOWN,
                        name: g.intl.string(g.t.J90oLW),
                    })
                  : void 0,
        [t, e],
    );
}
async function A(e, t) {
    if (t?.type === p.rbe.UNKNOWN && null == e.saveData.guildId)
        try {
            let t = await c.A.fetchChannel(e.saveData.channelId);
            if (null == t.recipients || t.recipients.length > 1) return;
            await c.A.ensurePrivateChannel(t.recipients.map((e) => e.id));
        } catch (e) {}
    (0, o.A)(p.BVt.CHANNEL(t?.getGuildId(), e.saveData.channelId, e.saveData.messageId), { openChannel: !0 });
}
