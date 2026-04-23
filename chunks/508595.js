n.d(t, { A: () => c, q: () => d }), n(321073);
var i = n(627968);
n(64700);
var l = n(17928),
    s = n(148719),
    a = n(808728),
    r = n(64749),
    o = n(652215);
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (0, l.yK)([a.Ay], () => {
        let l = a.Ay.getChannels(e)[o.rbe.GUILD_CATEGORY],
            d = [...a.Ay.getChannels(e)[a.I6], ...a.Ay.getChannels(e)[a.vM]],
            c = [],
            u = {};
        return (
            l.forEach((e) => {
                let { channel: t, comparator: n } = e;
                "null" !== t.id && ((u[t.id] = []), c.push({ channel: t, comparator: n }));
            }),
            d.forEach((e) => {
                let { channel: l, comparator: a } = e;
                l.isThread() ||
                    t.has(l.id) ||
                    (l.isGuildStageVoice() && !i) ||
                    (!n && (0, s.A)(l)) ||
                    (null == l.parent_id
                        ? c.push({ channel: l, comparator: a })
                        : (null == u[l.parent_id] && (u[l.parent_id] = []),
                          u[l.parent_id].push({ channel: l, comparator: a })));
            }),
            c
                .sort((e, t) => {
                    let { comparator: n, channel: i } = e,
                        { comparator: l, channel: s } = t;
                    return i.isCategory() && !s.isCategory() ? 1 : !i.isCategory() && s.isCategory() ? -1 : l - n;
                })
                .reduce((e, n) => {
                    let { channel: i } = n;
                    if (i.isGuildStageVoice() || i.isThread() || t.has(i.id)) return e;
                    e.push((0, r.eW)(i).row);
                    let l = u[i.id];
                    return (
                        null != l &&
                            l.length > 0 &&
                            l.forEach((t) => {
                                let { channel: n } = t;
                                e.push((0, r.eW)(n).row);
                            }),
                        e
                    );
                }, [])
        );
    }, [e, n, i, t]);
}
function c(e) {
    let {
            guildId: t,
            selectedChannelIds: n,
            onChange: l,
            placeholder: s,
            includeRoleRestrictedPrivateChannels: a = !1,
            includeStageVoiceChannels: o = !1,
            helperText: c,
            className: u,
        } = e,
        m = d(t, n, a, o);
    return (0, i.jsx)(r.Ay, {
        channelRows: m,
        guildId: t,
        selectedChannelIds: n,
        onChange: (e, t) => l(e),
        placeholder: s,
        helperText: c,
        className: u,
    });
}
