(n.d(t, { FT: () => A, UY: () => E, wm: () => h }), n(321073));
var i = n(873298),
    r = n(353202),
    a = n(826767),
    s = n(95701),
    l = n(734057),
    o = n(576705),
    d = n(573163),
    c = n(927813),
    u = n(181079),
    _ = n(818348);
function E(e) {
    return Object.values(u.A.getFavoriteChannels())
        .filter((t) => {
            if (t.type !== i.Ip.REFERENCE_ORIGINAL || (null != e && t.parentId !== e)) return !1;
            let n = l.A.getChannel(t.id);
            return null != n ? n.isThread() : null != t.channelType && s.Le.has(t.channelType);
        })
        .map((e) => e.id);
}
async function A(e) {
    await r.A.loadThreadsBulk(E(e));
}
function h(e) {
    let { days: t, categoryId: n } = e;
    if (!Number.isSafeInteger(t) || t < 1) return [];
    let i = Date.now() - t * c.A.Millis.DAY,
        r = [];
    for (let e of E(n)) {
        let t = l.A.getChannel(e);
        if (null == t || null == t.threadMetadata || !o.A.can(_.xB.VIEW_CHANNEL, t)) continue;
        if (t.threadMetadata.archived) {
            r.push(t);
            continue;
        }
        if (d.Ay.hasUnreadOrMentions(e)) continue;
        let n = (0, a.F)(t);
        Number.isFinite(n) && n > 0 && n < i && r.push(t);
    }
    return r
        .map((e) => {
            let t = (0, a.F)(e);
            return { channel: e, activity: Number.isFinite(t) && t > 0 ? t : 1 / 0 };
        })
        .sort((e, t) => e.activity - t.activity)
        .map((e) => {
            let { channel: t } = e;
            return t;
        });
}
