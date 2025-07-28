(n.d(t, {
    Z: () => d,
    r: () => c
}),
    n(388685),
    n(539854),
    n(642613));
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(447003),
    a = n(984933),
    s = n(512508),
    o = n(981631);
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (0, i.Wu)(
        [a.ZP],
        () => {
            let i = a.ZP.getChannels(e)[o.d4z.GUILD_CATEGORY],
                c = [...a.ZP.getChannels(e)[a.sH], ...a.ZP.getChannels(e)[a.Zb]],
                d = [],
                u = {};
            return (
                i.forEach((e) => {
                    let { channel: t, comparator: n } = e;
                    'null' !== t.id &&
                        ((u[t.id] = []),
                        d.push({
                            channel: t,
                            comparator: n
                        }));
                }),
                c.forEach((e) => {
                    let { channel: i, comparator: a } = e;
                    !(i.isThread() || t.has(i.id) || (i.isGuildStageVoice() && !r)) &&
                        ((!n && (0, l.Z)(i)) ||
                            (null == i.parent_id
                                ? d.push({
                                      channel: i,
                                      comparator: a
                                  })
                                : (null == u[i.parent_id] && (u[i.parent_id] = []),
                                  u[i.parent_id].push({
                                      channel: i,
                                      comparator: a
                                  }))));
                }),
                d
                    .sort((e, t) => {
                        let { comparator: n, channel: r } = e,
                            { comparator: i, channel: l } = t;
                        return r.isCategory() && !l.isCategory() ? 1 : !r.isCategory() && l.isCategory() ? -1 : i - n;
                    })
                    .reduce((e, n) => {
                        let { channel: r } = n;
                        if (r.isGuildStageVoice() || r.isThread() || t.has(r.id)) return e;
                        e.push((0, s.PM)(r).row);
                        let i = u[r.id];
                        return (
                            null != i &&
                                i.length > 0 &&
                                i.forEach((t) => {
                                    let { channel: n } = t;
                                    e.push((0, s.PM)(n).row);
                                }),
                            e
                        );
                    }, [])
            );
        },
        [e, n, r, t]
    );
}
function d(e) {
    let { guildId: t, selectedChannelIds: n, onChange: i, placeholder: l, includeRoleRestrictedPrivateChannels: a = !1, includeStageVoiceChannels: o = !1, helperText: d, className: u } = e,
        m = c(t, n, a, o);
    return (0, r.jsx)(s.ZP, {
        channelRows: m,
        guildId: t,
        selectedChannelIds: n,
        onChange: (e, t) => i(e),
        placeholder: l,
        helperText: d,
        className: u
    });
}
