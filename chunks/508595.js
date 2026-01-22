n.d(t, {
    A: () => d,
    q: () => o,
}),
    n(896048),
    n(321073),
    n(638769);
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(148719),
    s = n(808728),
    a = n(64749),
    c = n(652215);
function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (0, i.yK)([s.Ay], () => {
        let i = s.Ay.getChannels(e)[c.rbe.GUILD_CATEGORY],
            o = [...s.Ay.getChannels(e)[s.I6], ...s.Ay.getChannels(e)[s.vM]],
            d = [],
            u = {};
        return (
            i.forEach((e) => {
                let { channel: t, comparator: n } = e;
                "null" !== t.id &&
                    ((u[t.id] = []),
                    d.push({
                        channel: t,
                        comparator: n,
                    }));
            }),
            o.forEach((e) => {
                let { channel: i, comparator: s } = e;
                i.isThread() ||
                    t.has(i.id) ||
                    (i.isGuildStageVoice() && !r) ||
                    (!n && (0, l.A)(i)) ||
                    (null == i.parent_id
                        ? d.push({
                              channel: i,
                              comparator: s,
                          })
                        : (null == u[i.parent_id] && (u[i.parent_id] = []),
                          u[i.parent_id].push({
                              channel: i,
                              comparator: s,
                          })));
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
                    e.push((0, a.eW)(r).row);
                    let i = u[r.id];
                    return (
                        null != i &&
                            i.length > 0 &&
                            i.forEach((t) => {
                                let { channel: n } = t;
                                e.push((0, a.eW)(n).row);
                            }),
                        e
                    );
                }, [])
        );
    }, [e, n, r, t]);
}
function d(e) {
    let {
            guildId: t,
            selectedChannelIds: n,
            onChange: i,
            placeholder: l,
            includeRoleRestrictedPrivateChannels: s = !1,
            includeStageVoiceChannels: c = !1,
            helperText: d,
            className: u,
        } = e,
        f = o(t, n, s, c);
    return (0, r.jsx)(a.Ay, {
        channelRows: f,
        guildId: t,
        selectedChannelIds: n,
        onChange: (e, t) => i(e),
        placeholder: l,
        helperText: d,
        className: u,
    });
}
