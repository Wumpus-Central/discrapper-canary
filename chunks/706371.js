n.d(t, {
    Z: () => d,
    r: () => c
}),
    n(388685),
    n(539854),
    n(642613);
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(447003),
    l = n(984933),
    a = n(512508),
    o = n(981631);
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (0, i.Wu)(
        [l.ZP],
        () => {
            let i = l.ZP.getChannels(e)[o.d4z.GUILD_CATEGORY],
                c = [...l.ZP.getChannels(e)[l.sH], ...l.ZP.getChannels(e)[l.Zb]],
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
                    let { channel: i, comparator: l } = e;
                    !(i.isThread() || t.has(i.id) || (i.isGuildStageVoice() && !r)) &&
                        ((!n && (0, s.Z)(i)) ||
                            (null == i.parent_id
                                ? d.push({
                                      channel: i,
                                      comparator: l
                                  })
                                : (null == u[i.parent_id] && (u[i.parent_id] = []),
                                  u[i.parent_id].push({
                                      channel: i,
                                      comparator: l
                                  }))));
                }),
                d
                    .sort((e, t) => {
                        let { comparator: n, channel: r } = e,
                            { comparator: i, channel: s } = t;
                        return r.isCategory() && !s.isCategory() ? 1 : !r.isCategory() && s.isCategory() ? -1 : i - n;
                    })
                    .reduce((e, n) => {
                        let { channel: r } = n;
                        if (r.isGuildStageVoice() || r.isThread() || t.has(r.id)) return e;
                        e.push((0, a.PM)(r).row);
                        let i = u[r.id];
                        return (
                            null != i &&
                                i.length > 0 &&
                                i.forEach((t) => {
                                    let { channel: n } = t;
                                    e.push((0, a.PM)(n).row);
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
    let { guildId: t, selectedChannelIds: n, onChange: i, placeholder: s, includeRoleRestrictedPrivateChannels: l = !1, includeStageVoiceChannels: o = !1, helperText: d, className: u } = e,
        m = c(t, n, l, o);
    return (0, r.jsx)(a.ZP, {
        channelRows: m,
        guildId: t,
        selectedChannelIds: n,
        onChange: (e, t) => i(e),
        placeholder: s,
        helperText: d,
        className: u
    });
}
