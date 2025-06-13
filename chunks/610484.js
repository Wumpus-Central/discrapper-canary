n.d(t, {
    Iy: () => m,
    qN: () => h
}),
    n(539854),
    n(388685);
var r = n(579806),
    i = n(43267),
    a = n(933557),
    o = n(710845),
    s = n(699516),
    l = n(594174),
    c = n(768581),
    u = n(403011),
    d = n(981631);
let _ = new o.Z('NativeSearch');
function f(e) {
    return (null == e ? void 0 : e.startsWith('/')) ? location.origin + e : null != e ? e : void 0;
}
function p(e, t) {
    var n;
    let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        o = (0, a.F6)(e, l.default, s.Z, !0),
        c = (0, a.F6)(e, l.default, s.Z, !1),
        u = o + ((null == t ? void 0 : t.properties) != null ? ' (' + t.properties.name + ')' : ''),
        _ = [o, c],
        p = [];
    (null == t ? void 0 : t.properties) != null && p.push(t.properties.name), e.type === d.d4z.GUILD_VOICE && _.push('!' + c);
    let h = r ? f((0, i.x)(e, 128, !1)) : void 0,
        m = d.Z5c.CHANNEL(null != (n = null == t ? void 0 : t.id) ? n : d.ME, e.id);
    return {
        id: m,
        relatedUniqueIdentifier: m,
        type: 'url',
        title: u,
        displayName: u,
        thumbnailURL: h,
        rankingHint: e.type === d.d4z.DM ? 75 : 50,
        keywords: p,
        alternateNames: _
    };
}
function h(e) {
    if (!u.Z.getCurrentConfig({ location: 'searchIndexConnectionOpen' }).searchEnabled) return;
    try {
        r.Z.ipc.invoke('DISCORD_SEARCH_CLEAR_INDEX');
    } catch (e) {
        _.warn('searchIndexConnectionOpen: clear: '.concat(e));
    }
    let t = [];
    for (let r of e.guilds) {
        var n;
        if (null == r.properties) continue;
        let e = f(
                c.ZP.getGuildIconURL({
                    id: r.id,
                    icon: r.properties.icon,
                    size: 128
                })
            ),
            i = d.Z5c.CHANNEL(r.id),
            a = [
                {
                    id: i,
                    relatedUniqueIdentifier: i,
                    type: 'url',
                    title: r.properties.name,
                    displayName: r.properties.name,
                    keywords: [r.properties.name, '*' + r.properties.name],
                    rankingHint: 100
                }
            ];
        for (let e of null != (n = r.channels) ? n : []) a.push(p(e, r, !1));
        t.push({
            id: r.id,
            relatedUniqueIdentifier: r.id,
            items: a,
            defaultThumbnailURL: e
        });
    }
    let i = [];
    for (let t of e.initialPrivateChannels) i.push(p(t));
    t.push({
        id: d.ME,
        items: i
    });
    try {
        r.Z.ipc.invoke('DISCORD_SEARCH_INDEX_DOMAINS', t);
    } catch (e) {
        _.warn('searchIndexConnectionOpen: index: '.concat(e));
    }
}
function m(e) {
    if (!u.Z.getCurrentConfig({ location: 'searchIndexLazyPrivateChannels' }).searchEnabled) return;
    let t = [];
    for (let n of e) t.push(p(n));
    try {
        r.Z.ipc.invoke('DISCORD_SEARCH_INDEX_DOMAINS', [
            {
                id: d.ME,
                items: t
            }
        ]);
    } catch (e) {
        _.warn('searchIndexLazyPrivateChannels: '.concat(e));
    }
}
