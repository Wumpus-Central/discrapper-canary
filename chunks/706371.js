n.d(t, {
    Z: () => u,
    r: () => c
}),
    n(388685),
    n(539854),
    n(642613);
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(447003),
    s = n(984933),
    a = n(512508),
    o = n(981631);
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (0, i.Wu)(
        [s.ZP],
        () => {
            let i = s.ZP.getChannels(e)[o.d4z.GUILD_CATEGORY],
                c = [...s.ZP.getChannels(e)[s.sH], ...s.ZP.getChannels(e)[s.Zb]],
                u = [],
                d = {};
            return (
                i.forEach((e) => {
                    let { channel: t, comparator: n } = e;
                    'null' !== t.id &&
                        ((d[t.id] = []),
                        u.push({
                            channel: t,
                            comparator: n
                        }));
                }),
                c.forEach((e) => {
                    let { channel: i, comparator: s } = e;
                    !(i.isThread() || t.has(i.id) || (i.isGuildStageVoice() && !r)) &&
                        ((!n && (0, l.Z)(i)) ||
                            (null == i.parent_id
                                ? u.push({
                                      channel: i,
                                      comparator: s
                                  })
                                : (null == d[i.parent_id] && (d[i.parent_id] = []),
                                  d[i.parent_id].push({
                                      channel: i,
                                      comparator: s
                                  }))));
                }),
                u
                    .sort((e, t) => {
                        let { comparator: n, channel: r } = e,
                            { comparator: i, channel: l } = t;
                        return r.isCategory() && !l.isCategory() ? 1 : !r.isCategory() && l.isCategory() ? -1 : i - n;
                    })
                    .reduce((e, n) => {
                        let { channel: r } = n;
                        if (r.isGuildStageVoice() || r.isThread() || t.has(r.id)) return e;
                        e.push((0, a.PM)(r).row);
                        let i = d[r.id];
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
function u(e) {
    let { guildId: t, selectedChannelIds: n, onChange: i, placeholder: l, includeRoleRestrictedPrivateChannels: s = !1, includeStageVoiceChannels: o = !1, helperText: u, className: d } = e,
        m = c(t, n, s, o);
    return (0, r.jsx)(a.ZP, {
        channelRows: m,
        guildId: t,
        selectedChannelIds: n,
        onChange: (e, t) => i(e),
        placeholder: l,
        helperText: u,
        className: d
    });
}
