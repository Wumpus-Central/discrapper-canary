"use strict";
n.d(t, { Ce: () => h, kh: () => _, le: () => b, vr: () => g });
var i,
    r = n(64700),
    a = n(989349),
    s = n.n(a),
    l = n(17928),
    o = n(308528),
    d = n(22007),
    c = n(95701),
    u = n(734057),
    m = n(652215),
    p = n(985018),
    _ = (((i = {})[(i.LONG = 0)] = "LONG"), (i[(i.SHORT = 1)] = "SHORT"), i);
function h(e) {
    let { dueAt: t, now: n, type: i } = e;
    if (null == t) return { string: "", isOverdue: !1 };
    let r = 0 === i ? p.t.TjNWNF : p.t.H4gnX9,
        a = 0 === i ? p.t.haia16 : p.t["Uq7Y+7"],
        l = n > t;
    return {
        dueInText: p.intl.formatToPlainString(l ? a : r, {
            duration: s()
                .duration(t.getTime() - n.getTime(), "millisecond")
                .humanize(),
        }),
        isOverdue: l,
    };
}
function g(e) {
    let t = (0, l.bG)([u.A], () => u.A.getChannel(e.saveData.channelId));
    return r.useMemo(
        () =>
            null != t
                ? t
                : null != e.message
                  ? new c.jb({
                        id: e.saveData.channelId,
                        guild_id: e.saveData.guildId,
                        type: m.rbe.UNKNOWN,
                        name: p.intl.string(p.t.J90oLW),
                    })
                  : void 0,
        [t, e],
    );
}
async function b(e, t) {
    if (t?.type === m.rbe.UNKNOWN && null == e.saveData.guildId)
        try {
            let t = await o.A.fetchChannel(e.saveData.channelId);
            if (null == t.recipients || t.recipients.length > 1) return;
            await o.A.ensurePrivateChannel(t.recipients.map((e) => e.id));
        } catch (e) {}
    (0, d.A)(m.BVt.CHANNEL(t?.getGuildId(), e.saveData.channelId, e.saveData.messageId), { openChannel: !0 });
}
