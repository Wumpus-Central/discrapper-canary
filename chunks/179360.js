n.d(t, {
    C0: () => u,
    W3: () => p,
    X8: () => f,
    bG: () => m,
    dG: () => _,
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
async function p(e, t) {
    i.Z.dispatch({ type: 'GUILD_APPLY_BOOST_START' });
    try {
        let n = await r.tn.put({
                url: c.ANM.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                body: { user_premium_guild_subscription_slot_ids: t },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            o = Array.isArray(n.body) ? n.body.map(a.Z.createFromServer) : [a.Z.createFromServer(n.body)];
        return (
            i.Z.dispatch({
                type: 'GUILD_APPLY_BOOST_SUCCESS',
                appliedGuildBoost: o
            }),
            f(),
            o
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
async function _(e, t) {
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
