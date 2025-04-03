n.d(t, {
    A: () => _,
    q: () => d
}),
    n(978209);
var r = n(392711),
    i = n.n(r),
    o = n(131704),
    a = n(592125),
    s = n(580005),
    l = n(650774),
    c = n(70956),
    u = n(789662);
function d(e, t, n, r, i) {
    var o, s, c, d;
    let _ = a.Z.getMutableGuildChannelsForGuild(e.id),
        p = r.filter((e) => e.channel_id in _),
        h = null != (o = n.filter((t) => t.guild_id === e.id)[0]) ? o : {},
        m = l.Z.getMemberCount(e.id),
        g = f('year', r, p, (e) => {
            var t;
            return Number(null != (t = e.num_year_opens) ? t : 0);
        }),
        E = f('one month', r, p, (e) => {
            var t;
            return Number(null != (t = e.num_month_opens) ? t : 0);
        }),
        b = f('three month', r, p, (e) => {
            var t;
            return Number(null != (t = e.num_three_month_opens) ? t : 0);
        }),
        y = [
            E,
            b,
            f('six month', r, p, (e) => {
                var t;
                return Number(null != (t = e.num_six_month_opens) ? t : 0);
            }),
            g
        ],
        v = 0,
        O = 0;
    p.forEach((e) => {
        var t;
        v++, (O += null != (t = Number(e.num_messages)) ? t : 0);
    });
    let I = '\n**Pain**:\n- Everyones: '
            .concat(u.XR[null != (s = h.everyones) ? s : 0], '\n- Messages: ')
            .concat(u.XR[null != (c = h.messages) ? c : 0], '\n- Size: ')
            .concat(m, '\n**Remote**:\n- Channels: ')
            .concat(v, '\n- AllVisits: ')
            .concat(y.map((e) => e.totalOpensAcrossAllServers).join(' / '), '\n- GuildVisits: ')
            .concat(y.map((e) => e.guildOpens).join(' / '), '\n- Biggest Channel (abs): ')
            .concat(y.map((e) => e.biggestChannel).join(' / '), '\n- Biggest Channel (%): ')
            .concat(y.map((e) => e.biggestChannelFormatted).join(' / '), '\n- Sent Msgs: ')
            .concat(O, '\n'),
        S = b.guildOpens >= 0.02 * b.totalOpensAcrossAllServers,
        T = (null != (d = g.guildOpens) ? d : 0) > 0;
    if (h.messages === u.XR.High) {
        if (!i) return [u.AR.UseGreyDot, S, 'UseGreyDot' + I];
        else if (!S && T) return [u.AR.UseGreyDot, S, 'UseGreyDot' + I];
    }
    return [u.AR.KeepAsIs, S, 'KeepAsIs' + I];
}
function f(e, t, n, r) {
    let o = t.reduce((e, t) => e + r(t), 0),
        a = n.reduce((e, t) => e + r(t), 0),
        s = i().sortBy(n, r).reverse()[0],
        l = null == s ? 0 : r(s),
        c = ((l / a) * 100).toFixed(1);
    return {
        label: e,
        totalOpensAcrossAllServers: o,
        guildOpens: a,
        biggestChannel: l,
        biggestChannelFormatted: c
    };
}
function _(e, t) {
    var n, r;
    let i = null != (n = t.filter((t) => t.guild_id === e.id)[0]) ? n : {},
        a = null != (r = l.Z.getMemberCount(e.id)) ? r : 0,
        d = Date.now() - c.Z.Millis.DAYS_30,
        f = s.Z.getFrequentlyWithoutFetchingLatest().filter((t) => t instanceof o.Sf && t.guild_id === e.id),
        _ = f.filter((e) => {
            var t, n;
            let r = null != (n = null == (t = s.Z.frecencyWithoutFetchingLatest.usageHistory[e.id]) ? void 0 : t.recentUses) ? n : [];
            return 0 !== r.length && r[r.length - 1] >= d;
        }),
        p = _.length >= 5,
        h = f.reduce((e, t) => {
            var n, r;
            return e + (null != (r = null == (n = s.Z.frecencyWithoutFetchingLatest.usageHistory[t.id]) ? void 0 : n.totalUses) ? r : 0);
        }, 0),
        m = '\n- **Local**:\n    - Guild Visits: '.concat(h, '\n    - Channels: ').concat(f.length, '\n    - Recent Channels: ').concat(_.length, '\n');
    return i.messages === u.XR.High || a > 1000 ? [u.AR.UseGreyDot, p, 'SuggestGreyDot' + m] : [u.AR.KeepAsIs, p, 'KeepAsIs' + m];
}
