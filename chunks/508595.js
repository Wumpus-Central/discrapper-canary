n.d(t, { A: () => c, q: () => d }), n(321073);
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(148719),
    r = n(808728),
    a = n(64749),
    o = n(652215);
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (0, l.yK)([r.Ay], () => {
        let l = r.Ay.getChannels(e)[o.rbe.GUILD_CATEGORY],
            d = [...r.Ay.getChannels(e)[r.I6], ...r.Ay.getChannels(e)[r.vM]],
            c = [],
            u = {};
        return (
            l.forEach((e) => {
                let { channel: t, comparator: n } = e;
                "null" !== t.id && ((u[t.id] = []), c.push({ channel: t, comparator: n }));
            }),
            d.forEach((e) => {
                let { channel: l, comparator: r } = e;
                l.isThread() ||
                    t.has(l.id) ||
                    (l.isGuildStageVoice() && !i) ||
                    (!n && (0, s.A)(l)) ||
                    (null == l.parent_id
                        ? c.push({ channel: l, comparator: r })
                        : (null == u[l.parent_id] && (u[l.parent_id] = []),
                          u[l.parent_id].push({ channel: l, comparator: r })));
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
                    e.push((0, a.eW)(i).row);
                    let l = u[i.id];
                    return (
                        null != l &&
                            l.length > 0 &&
                            l.forEach((t) => {
                                let { channel: n } = t;
                                e.push((0, a.eW)(n).row);
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
            includeRoleRestrictedPrivateChannels: r = !1,
            includeStageVoiceChannels: o = !1,
            helperText: c,
            className: u,
        } = e,
        m = d(t, n, r, o);
    return (0, i.jsx)(a.Ay, {
        channelRows: m,
        guildId: t,
        selectedChannelIds: n,
        onChange: (e, t) => l(e),
        placeholder: s,
        helperText: c,
        className: u,
    });
}
