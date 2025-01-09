n.d(t, {
    Z: function () {
        return d;
    },
    r: function () {
        return c;
    }
}),
    n(47120),
    n(653041),
    n(724458);
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(447003),
    s = n(984933),
    a = n(512508),
    o = n(981631);
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (0, r.Wu)(
        [s.ZP],
        () => {
            let r = s.ZP.getChannels(e)[o.d4z.GUILD_CATEGORY],
                c = [...s.ZP.getChannels(e)[s.sH], ...s.ZP.getChannels(e)[s.Zb]],
                d = [],
                u = {};
            return (
                r.forEach((e) => {
                    let { channel: t, comparator: n } = e;
                    'null' !== t.id &&
                        ((u[t.id] = []),
                        d.push({
                            channel: t,
                            comparator: n
                        }));
                }),
                c.forEach((e) => {
                    let { channel: r, comparator: s } = e;
                    if (!(r.isThread() || t.has(r.id) || (r.isGuildStageVoice() && !i) || (!n && (0, l.Z)(r))))
                        null == r.parent_id
                            ? d.push({
                                  channel: r,
                                  comparator: s
                              })
                            : (null == u[r.parent_id] && (u[r.parent_id] = []),
                              u[r.parent_id].push({
                                  channel: r,
                                  comparator: s
                              }));
                }),
                d
                    .sort((e, t) => {
                        let { comparator: n, channel: i } = e,
                            { comparator: r, channel: l } = t;
                        return i.isCategory() && !l.isCategory() ? 1 : !i.isCategory() && l.isCategory() ? -1 : r - n;
                    })
                    .reduce((e, n) => {
                        let { channel: i } = n;
                        if (i.isGuildStageVoice() || i.isThread() || t.has(i.id)) return e;
                        e.push((0, a.PM)(i).row);
                        let r = u[i.id];
                        return (
                            null != r &&
                                r.length > 0 &&
                                r.forEach((t) => {
                                    let { channel: n } = t;
                                    e.push((0, a.PM)(n).row);
                                }),
                            e
                        );
                    }, [])
            );
        },
        [e, n, i, t]
    );
}
function d(e) {
    let { guildId: t, selectedChannelIds: n, onChange: r, placeholder: l, includeRoleRestrictedPrivateChannels: s = !1, includeStageVoiceChannels: o = !1, helperText: d, className: u } = e,
        m = c(t, n, s, o);
    return (0, i.jsx)(a.ZP, {
        channelRows: m,
        guildId: t,
        selectedChannelIds: n,
        onChange: (e, t) => r(e),
        placeholder: l,
        helperText: d,
        className: u
    });
}
