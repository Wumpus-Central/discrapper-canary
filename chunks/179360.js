n.d(t, {
    C0: () => u,
    W3: () => _,
    X8: () => f,
    bG: () => m,
    dG: () => p,
    pD: () => h,
    tH: () => d
});
var r = n(544891),
    i = n(570140),
    o = n(881052),
    a = n(932015),
    s = n(209747),
    l = n(78839),
    c = n(981631);
async function u(e) {
    let t = (
        await r.tn.get({
            url: c.ANM.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
            oldFormErrors: !0,
            rejectWithError: !0
        })
    ).body.map((e) => a.Z.createFromServer(e));
    return (
        i.Z.dispatch({
            type: 'GUILD_APPLIED_BOOSTS_FETCH_SUCCESS',
            guildId: e,
            appliedBoosts: t
        }),
        t
    );
}
async function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (
            await r.tn.get({
                url: c.ANM.USER_APPLIED_GUILD_BOOSTS,
                oldFormErrors: !0,
                query: { paused: e },
                rejectWithError: !0
            })
        ).body.map((e) => a.Z.createFromServer(e));
    return (
        i.Z.dispatch({
            type: 'USER_APPLIED_BOOSTS_FETCH_SUCCESS',
            appliedGuildBoosts: t
        }),
        t
    );
}
async function f() {
    let e = (
        await r.tn.get({
            url: c.ANM.USER_GUILD_BOOST_SLOTS,
            oldFormErrors: !0,
            rejectWithError: !1
        })
    ).body.map((e) => s.Z.createFromServer(e, l.ZP.getSubscriptionById(e.subscription_id)));
    return (
        i.Z.dispatch({
            type: 'GUILD_BOOST_SLOTS_FETCH_SUCCESS',
            guildBoostSlots: e
        }),
        e
    );
}
async function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    i.Z.dispatch({ type: 'GUILD_APPLY_BOOST_START' });
    try {
        let o = await r.tn.put({
                url: c.ANM.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                body: {
                    user_premium_guild_subscription_slot_ids: t,
                    disable_powerup_auto_apply: n
                },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            s = Array.isArray(o.body) ? o.body.map(a.Z.createFromServer) : [a.Z.createFromServer(o.body)];
        return (
            i.Z.dispatch({
                type: 'GUILD_APPLY_BOOST_SUCCESS',
                appliedGuildBoost: s
            }),
            f(),
            s
        );
    } catch (t) {
        let e = new o.zN(t);
        throw (
            (i.Z.dispatch({
                type: 'GUILD_APPLY_BOOST_FAIL',
                error: e
            }),
            e)
        );
    }
}
async function p(e, t) {
    i.Z.dispatch({ type: 'GUILD_UNAPPLY_BOOST_START' });
    try {
        await r.tn.del({
            url: c.ANM.APPLIED_GUILD_BOOST(e, t),
            oldFormErrors: !0,
            rejectWithError: !1
        }),
            f();
    } catch (t) {
        let e = new o.zN(t);
        throw (
            (i.Z.dispatch({
                type: 'GUILD_UNAPPLY_BOOST_FAIL',
                error: e
            }),
            e)
        );
    }
    i.Z.dispatch({
        type: 'GUILD_UNAPPLY_BOOST_SUCCESS',
        boostId: t
    });
}
async function h(e) {
    let t = await r.tn.post({
            url: c.ANM.USER_GUILD_BOOST_SLOT_CANCEL(e),
            oldFormErrors: !0,
            rejectWithError: !0
        }),
        n = s.Z.createFromServer(t.body, l.ZP.getSubscriptionById(t.body.subscription_id));
    return (
        i.Z.dispatch({
            type: 'GUILD_BOOST_SLOT_UPDATE_SUCCESS',
            guildBoostSlot: n
        }),
        n
    );
}
async function m(e) {
    let t = await r.tn.post({
            url: c.ANM.USER_GUILD_BOOST_SLOT_UNCANCEL(e),
            oldFormErrors: !0,
            rejectWithError: !0
        }),
        n = s.Z.createFromServer(t.body, l.ZP.getSubscriptionById(t.body.subscription_id));
    return (
        i.Z.dispatch({
            type: 'GUILD_BOOST_SLOT_UPDATE_SUCCESS',
            guildBoostSlot: n
        }),
        n
    );
}
