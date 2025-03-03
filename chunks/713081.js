n.d(t, {
    Fm: () => p,
    H6: () => h,
    Qh: () => f,
    Sn: () => _,
    Th: () => g,
    jd: () => d
});
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
        let t = s.G.concat(s.W);
        i.Z.dispatch({
            type: 'GUILD_POWERUP_CATALOG_FETCH_SUCCESS',
            guildId: e,
            powerups: t.filter(o.lm).reduce((e, t) => ((e[t.skuId] = t), e), {})
        });
        return;
    }
    let n = { application_id: c.N };
    return (0, a.Kb)({
        url: u.ANM.STORE_PUBLISHED_LISTINGS_SKUS,
        query: n,
        oldFormErrors: !0,
        rejectWithError: !1
    }).then((t) => {
        let n = t.body
            .map((e) => (0, l.Z)(e))
            .filter(o.lm)
            .reduce((e, t) => ((e[t.skuId] = t), e), {});
        return (
            i.Z.dispatch({
                type: 'GUILD_POWERUP_CATALOG_FETCH_SUCCESS',
                guildId: e,
                powerups: n
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
        let n = t.body.reduce((e, t) => ((e[t.sku_id] = t), e), {});
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
function g(e, t) {
    return r.tn.del({
        url: u.ANM.GUILD_POWERUP_TOGGLE(e, t),
        rejectWithError: !0
    });
}
