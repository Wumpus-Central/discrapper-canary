n.d(t, {
    DO: () => E,
    H7: () => f,
    J1: () => T,
    J4: () => h,
    K0: () => g,
    LJ: () => N,
    W5: () => _,
    WA: () => A,
    _R: () => I,
    mK: () => p,
    vW: () => S,
});
var i = n(499979),
    r = n(228366),
    a = n(73825),
    s = n(95561),
    l = n(277984),
    o = n(174459),
    d = n(927813),
    c = n(695825),
    u = n(652215);
async function _(e) {
    let t = await c.b3(e);
    r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS", settings: t });
}
async function E(e, t) {
    let n = await c.ux(e, t);
    r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS", settings: n });
}
async function A(e) {
    let { includeSoftDeleted: t = !0, countryCode: n } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS", guildId: e });
    try {
        let [i, a, s] = await Promise.all([
                c.z9(e, { includeSoftDeleted: t, countryCode: n }),
                c.b3(e),
                c.AE(e),
                (0, l.hP)(),
            ]),
            o = i.flatMap((e) => e.benefit_channels ?? []);
        r.h.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
            guildId: e,
            groupListings: i,
            benefitChannels: o,
            settings: a,
            subscriptionTrials: s,
        });
    } catch (t) {
        r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE", guildId: e });
    }
}
async function h(e, t) {
    let n = await c.aC(e, t);
    return r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING", listing: n }), n;
}
async function I(e) {
    r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN", planId: e });
    let t = await c.Nb(e);
    for (let n of (r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS", groupListing: t }),
    t.subscription_listings ?? []))
        n.subscription_plans[0].id === e && (await a.ur(n.id, void 0, void 0, !0));
}
async function f(e, t, n) {
    await c.wJ(e, t, n), r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING", listingId: n });
}
async function p(e, t, n) {
    let i = await c.PC(e, t, n);
    r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING", listing: i });
}
async function T(e, t, n) {
    let i = await c.D7(e, t, n);
    r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL", subscriptionTrial: i });
}
async function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = await c.WV(e, t, n);
    return r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING", listing: i }), i;
}
async function g(e) {
    let { guildId: t, groupListingId: n, data: i, analyticsContext: a, onBeforeDispatchNewListing: l } = e,
        d = await c.DQ(t, n, i);
    return (
        o.default.track(u.HAw.ROLE_SUBSCRIPTION_LISTING_CREATED, {
            role_subscription_listing_id: d.id,
            role_subscription_group_listing_id: n,
            template_name: a.templateCategory,
            has_change_from_template: a.hasChangeFromTemplate,
            ...(0, s.H$)(t),
        }),
        await m(t, n, { includeArchivedListings: !0 }),
        l?.(d),
        r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING", listing: d }),
        d
    );
}
async function S(e) {
    let { guildId: t, listingId: n, groupListingId: i, data: a } = e,
        s = await c.qt(t, i, n, a);
    return (
        r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING", listing: s }),
        await m(t, i, { includeArchivedListings: !0 }),
        s
    );
}
async function N(e) {
    let { signal: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = !1;
    for (let a = 0; a < 3; a++)
        try {
            if (t?.aborted)
                return void r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED", guildId: e });
            r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS", guildId: e });
            let { restrictions: i } = await c.iG(e, { signal: t });
            r.h.dispatch({
                type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
                guildId: e,
                restrictions: i ?? [],
            }),
                (n = !0);
            break;
        } catch (e) {
            await (0, i.yy)((a + 1) * d.A.Millis.SECOND);
        }
    n || r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE", guildId: e });
}
