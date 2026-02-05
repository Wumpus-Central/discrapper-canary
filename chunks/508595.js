"use strict";
n.d(t, { A: () => c, q: () => d }), n(321073);
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(148719),
    r = n(808728),
    a = n(64749),
    o = n(652215);
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (0, s.yK)([r.Ay], () => {
        let s = r.Ay.getChannels(e)[o.rbe.GUILD_CATEGORY],
            d = [...r.Ay.getChannels(e)[r.I6], ...r.Ay.getChannels(e)[r.vM]],
            c = [],
            u = {};
        return (
            s.forEach((e) => {
                let { channel: t, comparator: n } = e;
                "null" !== t.id && ((u[t.id] = []), c.push({ channel: t, comparator: n }));
            }),
            d.forEach((e) => {
                let { channel: s, comparator: r } = e;
                s.isThread() ||
                    t.has(s.id) ||
                    (s.isGuildStageVoice() && !i) ||
                    (!n && (0, l.A)(s)) ||
                    (null == s.parent_id
                        ? c.push({ channel: s, comparator: r })
                        : (null == u[s.parent_id] && (u[s.parent_id] = []),
                          u[s.parent_id].push({ channel: s, comparator: r })));
            }),
            c
                .sort((e, t) => {
                    let { comparator: n, channel: i } = e,
                        { comparator: s, channel: l } = t;
                    return i.isCategory() && !l.isCategory() ? 1 : !i.isCategory() && l.isCategory() ? -1 : s - n;
                })
                .reduce((e, n) => {
                    let { channel: i } = n;
                    if (i.isGuildStageVoice() || i.isThread() || t.has(i.id)) return e;
                    e.push((0, a.eW)(i).row);
                    let s = u[i.id];
                    return (
                        null != s &&
                            s.length > 0 &&
                            s.forEach((t) => {
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
            onChange: s,
            placeholder: l,
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
        onChange: (e, t) => s(e),
        placeholder: l,
        helperText: c,
        className: u,
    });
}
