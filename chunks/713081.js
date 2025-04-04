n.d(t, {
    Fm: () => p,
    H6: () => h,
    Qh: () => f,
    Sn: () => _,
    Th: () => m,
    jd: () => d
}),
    n(47120),
    n(230036),
    n(653041);
var r = n(544891),
    i = n(570140),
    o = n(823379),
    a = n(73346),
    s = n(763792),
    l = n(377154),
    c = n(535396),
    u = n(981631);
function d(e) {
    i.Z.dispatch({
        type: 'GUILD_POWERUPS_ACK_NOTIFICATION',
        guildId: e
    });
}
function f() {
    i.Z.dispatch({ type: 'GUILD_POWERUPS_RESET_NOTIFICATIONS' });
}
function _(e, t) {
    if (!0 === t) {
        let t = s.G.concat(s.W),
            n = new Map();
        n.set(c.Us.LEVEL, s.G),
            n.set(c.Us.PERK, s.W),
            i.Z.dispatch({
                type: 'GUILD_POWERUP_CATALOG_FETCH_SUCCESS',
                guildId: e,
                powerups: t.sort((e, t) => (e.skuId >= t.skuId ? 1 : -1)).reduce((e, t) => (e.set(t.skuId, t), e), new Map()),
                catalog: n
            });
        return;
    }
    let n = { application_id: c.NO };
    return (0, a.Kb)({
        url: u.ANM.STORE_PUBLISHED_LISTINGS_SKUS,
        query: n,
        oldFormErrors: !0,
        rejectWithError: !1
    }).then((t) => {
        let { powerups: n, catalog: r } = t.body
            .map((e) => (0, l.Z)(t.body, e))
            .filter(o.lm)
            .sort((e, t) => (e.skuId >= t.skuId ? 1 : -1))
            .reduce(
                (e, t) => {
                    var n, r;
                    let { powerups: i, catalog: o } = e;
                    return i.set(t.skuId, t), null == o.get(t.type) && o.set(t.type, []), null == (r = o.get(t.type)) || null == (n = r.push) || n.call(r, t), e;
                },
                {
                    powerups: new Map(),
                    catalog: new Map()
                }
            );
        return (
            i.Z.dispatch({
                type: 'GUILD_POWERUP_CATALOG_FETCH_SUCCESS',
                guildId: e,
                powerups: n,
                catalog: r
            }),
            t.body
        );
    });
}
function p(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, a.Kb)({
        url: u.ANM.GUILD_POWERUPS(e),
        query: { include_ends_at: t },
        oldFormErrors: !0,
        rejectWithError: !1
    }).then((t) => {
        let n = t.body.reduce((e, t) => (e.set(t.sku_id, t), e), new Map());
        return (
            i.Z.dispatch({
                type: 'GUILD_UNLOCKED_POWERUPS_FETCH_SUCCESS',
                guildId: e,
                unlocked: n
            }),
            t.body
        );
    });
}
function h(e, t) {
    return r.tn.post({
        url: u.ANM.GUILD_POWERUP_TOGGLE(e, t),
        rejectWithError: !0
    });
}
function m(e, t) {
    return r.tn.del({
        url: u.ANM.GUILD_POWERUP_TOGGLE(e, t),
        rejectWithError: !0
    });
}
