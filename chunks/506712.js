r.d(n, {
    A: function () {
        return _;
    },
    q: function () {
        return p;
    }
});
var i = r(724458);
var a = r(392711),
    o = r.n(a),
    s = r(131704),
    l = r(592125),
    u = r(580005),
    c = r(650774),
    d = r(70956),
    f = r(789662);
function p(e, n, r, i, a) {
    var o, s, u, d;
    let p = l.Z.getMutableGuildChannelsForGuild(e.id),
        _ = i.filter((e) => e.channel_id in p),
        m = null !== (o = r.filter((n) => n.guild_id === e.id)[0]) && void 0 !== o ? o : {},
        g = c.Z.getMemberCount(e.id),
        E = h('year', i, _, (e) => {
            var n;
            return Number(null !== (n = e.num_year_opens) && void 0 !== n ? n : 0);
        }),
        v = h('one month', i, _, (e) => {
            var n;
            return Number(null !== (n = e.num_month_opens) && void 0 !== n ? n : 0);
        }),
        y = h('three month', i, _, (e) => {
            var n;
            return Number(null !== (n = e.num_three_month_opens) && void 0 !== n ? n : 0);
        }),
        b = [
            v,
            y,
            h('six month', i, _, (e) => {
                var n;
                return Number(null !== (n = e.num_six_month_opens) && void 0 !== n ? n : 0);
            }),
            E
        ],
        I = 0,
        T = 0;
    _.forEach((e) => {
        var n;
        I++, (T += null !== (n = Number(e.num_messages)) && void 0 !== n ? n : 0);
    });
    let S = '\n**Pain**:\n- Everyones: '
            .concat(f.XR[null !== (s = m.everyones) && void 0 !== s ? s : 0], '\n- Messages: ')
            .concat(f.XR[null !== (u = m.messages) && void 0 !== u ? u : 0], '\n- Size: ')
            .concat(g, '\n**Remote**:\n- Channels: ')
            .concat(I, '\n- AllVisits: ')
            .concat(b.map((e) => e.totalOpensAcrossAllServers).join(' / '), '\n- GuildVisits: ')
            .concat(b.map((e) => e.guildOpens).join(' / '), '\n- Biggest Channel (abs): ')
            .concat(b.map((e) => e.biggestChannel).join(' / '), '\n- Biggest Channel (%): ')
            .concat(b.map((e) => e.biggestChannelFormatted).join(' / '), '\n- Sent Msgs: ')
            .concat(T, '\n'),
        A = y.guildOpens >= 0.02 * y.totalOpensAcrossAllServers,
        C = (null !== (d = E.guildOpens) && void 0 !== d ? d : 0) > 0;
    if (m.messages === f.XR.High) {
        if (!a) return [f.AR.UseGreyDot, A, 'UseGreyDot' + S];
        if (!A && C) return [f.AR.UseGreyDot, A, 'UseGreyDot' + S];
    }
    return [f.AR.KeepAsIs, A, 'KeepAsIs' + S];
}
function h(e, n, r, i) {
    let a = n.reduce((e, n) => e + i(n), 0),
        s = r.reduce((e, n) => e + i(n), 0),
        l = o().sortBy(r, i).reverse()[0],
        u = null == l ? 0 : i(l),
        c = ((u / s) * 100).toFixed(1);
    return {
        label: e,
        totalOpensAcrossAllServers: a,
        guildOpens: s,
        biggestChannel: u,
        biggestChannelFormatted: c
    };
}
function _(e, n) {
    var r, i;
    let a = null !== (r = n.filter((n) => n.guild_id === e.id)[0]) && void 0 !== r ? r : {},
        o = null !== (i = c.Z.getMemberCount(e.id)) && void 0 !== i ? i : 0,
        l = Date.now() - d.Z.Millis.DAYS_30,
        p = u.Z.getFrequentlyWithoutFetchingLatest().filter((n) => n instanceof s.Sf && n.guild_id === e.id),
        h = p.filter((e) => {
            var n, r;
            let i = null !== (r = null === (n = u.Z.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === n ? void 0 : n.recentUses) && void 0 !== r ? r : [];
            return 0 !== i.length && i[i.length - 1] >= l;
        }),
        _ = h.length >= 5,
        m = p.reduce((e, n) => {
            var r, i;
            return e + (null !== (i = null === (r = u.Z.frecencyWithoutFetchingLatest.usageHistory[n.id]) || void 0 === r ? void 0 : r.totalUses) && void 0 !== i ? i : 0);
        }, 0),
        g = '\n- **Local**:\n    - Guild Visits: '.concat(m, '\n    - Channels: ').concat(p.length, '\n    - Recent Channels: ').concat(h.length, '\n');
    return a.messages === f.XR.High || o > 1000 ? [f.AR.UseGreyDot, _, 'SuggestGreyDot' + g] : [f.AR.KeepAsIs, _, 'KeepAsIs' + g];
}
