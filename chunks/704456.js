l.d(t, { Ce: () => I, kh: () => _, le: () => L, vr: () => E });
var a,
    n = l(64700),
    s = l(989349),
    i = l.n(s),
    r = l(311907),
    A = l(308528),
    c = l(22007),
    u = l(95701),
    d = l(734057),
    o = l(652215),
    h = l(985018),
    _ = (((a = {})[(a.LONG = 0)] = "LONG"), (a[(a.SHORT = 1)] = "SHORT"), a);
function I(e) {
    let { dueAt: t, now: l, type: a } = e;
    if (null == t) return { string: "", isOverdue: !1 };
    let n = 0 === a ? h.t.TjNWNF : h.t.H4gnX9,
        s = 0 === a ? h.t.haia16 : h.t["Uq7Y+7"],
        r = l > t;
    return {
        dueInText: h.intl.formatToPlainString(r ? s : n, {
            duration: i()
                .duration(t.getTime() - l.getTime(), "millisecond")
                .humanize(),
        }),
        isOverdue: r,
    };
}
function E(e) {
    let t = (0, r.bG)([d.A], () => d.A.getChannel(e.saveData.channelId));
    return n.useMemo(
        () =>
            null != t
                ? t
                : null != e.message
                  ? new u.jb({
                        id: e.saveData.channelId,
                        guild_id: e.saveData.guildId,
                        type: o.rbe.UNKNOWN,
                        name: h.intl.string(h.t.J90oLW),
                    })
                  : void 0,
        [t, e],
    );
}
async function L(e, t) {
    if (t?.type === o.rbe.UNKNOWN && null == e.saveData.guildId)
        try {
            let t = await A.A.fetchChannel(e.saveData.channelId);
            if (null == t.recipients || t.recipients.length > 1) return;
            await A.A.ensurePrivateChannel(t.recipients.map((e) => e.id));
        } catch (e) {}
    (0, c.A)(o.BVt.CHANNEL(t?.getGuildId(), e.saveData.channelId, e.saveData.messageId), { openChannel: !0 });
}
