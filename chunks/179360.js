n.d(t, {
    C0: () => c,
    W3: () => _,
    X8: () => f,
    bG: () => m,
    dG: () => p,
    pD: () => h,
    tH: () => d
});
var i = n(544891),
    r = n(570140),
    a = n(881052),
    s = n(932015),
    o = n(209747),
    l = n(78839),
    u = n(981631);
async function c(e) {
    let t = (
        await i.tn.get({
            url: u.ANM.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
            oldFormErrors: !0,
            rejectWithError: !0
        })
    ).body.map((e) => s.Z.createFromServer(e));
    return (
        r.Z.dispatch({
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
            await i.tn.get({
                url: u.ANM.USER_APPLIED_GUILD_BOOSTS,
                oldFormErrors: !0,
                query: { paused: e },
                rejectWithError: !0
            })
        ).body.map((e) => s.Z.createFromServer(e));
    return (
        r.Z.dispatch({
            type: 'USER_APPLIED_BOOSTS_FETCH_SUCCESS',
            appliedGuildBoosts: t
        }),
        t
    );
}
async function f() {
    let e = (
        await i.tn.get({
            url: u.ANM.USER_GUILD_BOOST_SLOTS,
            oldFormErrors: !0,
            rejectWithError: !1
        })
    ).body.map((e) => o.Z.createFromServer(e, l.ZP.getSubscriptionById(e.subscription_id)));
    return (
        r.Z.dispatch({
            type: 'GUILD_BOOST_SLOTS_FETCH_SUCCESS',
            guildBoostSlots: e
        }),
        e
    );
}
async function _(e, t) {
    r.Z.dispatch({ type: 'GUILD_APPLY_BOOST_START' });
    try {
        let n = await i.tn.put({
                url: u.ANM.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                body: { user_premium_guild_subscription_slot_ids: t },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            a = Array.isArray(n.body) ? n.body.map(s.Z.createFromServer) : [s.Z.createFromServer(n.body)];
        return (
            r.Z.dispatch({
                type: 'GUILD_APPLY_BOOST_SUCCESS',
                appliedGuildBoost: a
            }),
            f(),
            a
        );
    } catch (t) {
        let e = new a.zN(t);
        throw (
            (r.Z.dispatch({
                type: 'GUILD_APPLY_BOOST_FAIL',
                error: e
            }),
            e)
        );
    }
}
async function p(e, t) {
    r.Z.dispatch({ type: 'GUILD_UNAPPLY_BOOST_START' });
    try {
        await i.tn.del({
            url: u.ANM.APPLIED_GUILD_BOOST(e, t),
            oldFormErrors: !0,
            rejectWithError: !1
        }),
            f();
    } catch (t) {
        let e = new a.zN(t);
        throw (
            (r.Z.dispatch({
                type: 'GUILD_UNAPPLY_BOOST_FAIL',
                error: e
            }),
            e)
        );
    }
    r.Z.dispatch({
        type: 'GUILD_UNAPPLY_BOOST_SUCCESS',
        boostId: t
    });
}
async function h(e) {
    let t = await i.tn.post({
            url: u.ANM.USER_GUILD_BOOST_SLOT_CANCEL(e),
            oldFormErrors: !0,
            rejectWithError: !0
        }),
        n = o.Z.createFromServer(t.body, l.ZP.getSubscriptionById(t.body.subscription_id));
    return (
        r.Z.dispatch({
            type: 'GUILD_BOOST_SLOT_UPDATE_SUCCESS',
            guildBoostSlot: n
        }),
        n
    );
}
async function m(e) {
    let t = await i.tn.post({
            url: u.ANM.USER_GUILD_BOOST_SLOT_UNCANCEL(e),
            oldFormErrors: !0,
            rejectWithError: !0
        }),
        n = o.Z.createFromServer(t.body, l.ZP.getSubscriptionById(t.body.subscription_id));
    return (
        r.Z.dispatch({
            type: 'GUILD_BOOST_SLOT_UPDATE_SUCCESS',
            guildBoostSlot: n
        }),
        n
    );
}
