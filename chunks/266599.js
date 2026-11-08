n(321073);
var i = n(873298),
    r = n(353202),
    a = n(826767),
    s = n(95701),
    l = n(734057),
    o = n(71393),
    d = n(576705),
    c = n(218461),
    u = n(927813),
    _ = n(181079),
    E = n(349828),
    A = n(818348);
function f(e) {
    return Object.values(_.A.getFavoriteChannels())
        .filter((t) => {
            if (t.type !== i.Ip.REFERENCE_ORIGINAL || (null != e && (null == t.parentId || !e.includes(t.parentId))))
                return !1;
            let n = l.A.getChannel(t.id);
            return null != n ? n.isThread() : null != t.channelType && s.Le.has(t.channelType);
        })
        .map((e) => e.id);
}
n.d(
    t,
    {},
    {
        FT: async function (e) {
            await r.A.loadThreadsBulk(f(e));
        },
        PG: function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.A.getFavoriteChannels(),
                t = new Set([E.A.toLowerCase()]);
            if (_.A.autoAddThreadsMode === E.Gv) for (let e of o.A.getGuildsArray()) t.add(e.name.trim().toLowerCase());
            let n = [];
            for (let r of Object.values(e)) {
                if (r.type !== i.Ip.CATEGORY || null == r.nickname) continue;
                let e = r.nickname.trim().toLowerCase();
                t.has(e) && (n.push(r.id), t.delete(e));
            }
            return n;
        },
        wm: function (e) {
            let { days: t, categoryIds: n } = e;
            if (!Number.isSafeInteger(t) || t < 0) return [];
            let i = Date.now() - t * u.A.Millis.DAY,
                r = [];
            for (let e of f(n)) {
                let n = l.A.getChannel(e);
                if (
                    null == n ||
                    null == n.threadMetadata ||
                    !d.A.can(A.xB.VIEW_CHANNEL, n) ||
                    c.Ay.hasUnreadOrMentions(e)
                )
                    continue;
                if (n.threadMetadata.archived) {
                    r.push(n);
                    continue;
                }
                if (0 === t) continue;
                let s = (0, a.F)(n);
                Number.isFinite(s) && s > 0 && s < i && r.push(n);
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
        },
    },
);
