n.d(t, {
    A: () => _,
    q: () => d
}),
    n(724458);
var i = n(392711),
    r = n.n(i),
    a = n(131704),
    s = n(592125),
    o = n(580005),
    l = n(650774),
    u = n(70956),
    c = n(789662);
function d(e, t, n, i, r) {
    var a, o, u, d;
    let _ = s.Z.getMutableGuildChannelsForGuild(e.id),
        p = i.filter((e) => e.channel_id in _),
        h = null !== (a = n.filter((t) => t.guild_id === e.id)[0]) && void 0 !== a ? a : {},
        m = l.Z.getMemberCount(e.id),
        g = f('year', i, p, (e) => {
            var t;
            return Number(null !== (t = e.num_year_opens) && void 0 !== t ? t : 0);
        }),
        E = f('one month', i, p, (e) => {
            var t;
            return Number(null !== (t = e.num_month_opens) && void 0 !== t ? t : 0);
        }),
        v = f('three month', i, p, (e) => {
            var t;
            return Number(null !== (t = e.num_three_month_opens) && void 0 !== t ? t : 0);
        }),
        y = [
            E,
            v,
            f('six month', i, p, (e) => {
                var t;
                return Number(null !== (t = e.num_six_month_opens) && void 0 !== t ? t : 0);
            }),
            g
        ],
        I = 0,
        b = 0;
    p.forEach((e) => {
        var t;
        I++, (b += null !== (t = Number(e.num_messages)) && void 0 !== t ? t : 0);
    });
    let T = '\n**Pain**:\n- Everyones: '
            .concat(c.XR[null !== (o = h.everyones) && void 0 !== o ? o : 0], '\n- Messages: ')
            .concat(c.XR[null !== (u = h.messages) && void 0 !== u ? u : 0], '\n- Size: ')
            .concat(m, '\n**Remote**:\n- Channels: ')
            .concat(I, '\n- AllVisits: ')
            .concat(y.map((e) => e.totalOpensAcrossAllServers).join(' / '), '\n- GuildVisits: ')
            .concat(y.map((e) => e.guildOpens).join(' / '), '\n- Biggest Channel (abs): ')
            .concat(y.map((e) => e.biggestChannel).join(' / '), '\n- Biggest Channel (%): ')
            .concat(y.map((e) => e.biggestChannelFormatted).join(' / '), '\n- Sent Msgs: ')
            .concat(b, '\n'),
        S = v.guildOpens >= 0.02 * v.totalOpensAcrossAllServers,
        A = (null !== (d = g.guildOpens) && void 0 !== d ? d : 0) > 0;
    return h.messages !== c.XR.High || (r && (S || !A)) ? [c.AR.KeepAsIs, S, 'KeepAsIs' + T] : [c.AR.UseGreyDot, S, 'UseGreyDot' + T];
}
function f(e, t, n, i) {
    let a = t.reduce((e, t) => e + i(t), 0),
        s = n.reduce((e, t) => e + i(t), 0),
        o = r().sortBy(n, i).reverse()[0],
        l = null == o ? 0 : i(o),
        u = ((l / s) * 100).toFixed(1);
    return {
        label: e,
        totalOpensAcrossAllServers: a,
        guildOpens: s,
        biggestChannel: l,
        biggestChannelFormatted: u
    };
}
function _(e, t) {
    var n, i;
    let r = null !== (n = t.filter((t) => t.guild_id === e.id)[0]) && void 0 !== n ? n : {},
        s = null !== (i = l.Z.getMemberCount(e.id)) && void 0 !== i ? i : 0,
        d = Date.now() - u.Z.Millis.DAYS_30,
        f = o.Z.getFrequentlyWithoutFetchingLatest().filter((t) => t instanceof a.Sf && t.guild_id === e.id),
        _ = f.filter((e) => {
            var t, n;
            let i = null !== (n = null === (t = o.Z.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
            return 0 !== i.length && i[i.length - 1] >= d;
        }),
        p = _.length >= 5,
        h = f.reduce((e, t) => {
            var n, i;
            return e + (null !== (i = null === (n = o.Z.frecencyWithoutFetchingLatest.usageHistory[t.id]) || void 0 === n ? void 0 : n.totalUses) && void 0 !== i ? i : 0);
        }, 0),
        m = '\n- **Local**:\n    - Guild Visits: '.concat(h, '\n    - Channels: ').concat(f.length, '\n    - Recent Channels: ').concat(_.length, '\n');
    return r.messages === c.XR.High || s > 1000 ? [c.AR.UseGreyDot, p, 'SuggestGreyDot' + m] : [c.AR.KeepAsIs, p, 'KeepAsIs' + m];
}
