"use strict";
n.d(t, {
    DO: () => E,
    H7: () => g,
    J1: () => A,
    J4: () => m,
    K0: () => T,
    LJ: () => N,
    W5: () => c,
    WA: () => h,
    _R: () => f,
    mK: () => p,
    vW: () => S,
});
var i = n(499979),
    r = n(228366),
    s = n(73825),
    a = n(58149),
    o = n(323082),
    l = n(954571),
    d = n(927813),
    _ = n(695825),
    u = n(652215);
async function c(e) {
    let t = await _.b3(e);
    r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS", settings: t });
}
async function E(e, t) {
    let n = await _.ux(e, t);
    r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS", settings: n });
}
async function h(e) {
    let { includeSoftDeleted: t = !0, countryCode: n } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS", guildId: e });
    try {
        let [i, s, a] = await Promise.all([
                _.z9(e, { includeSoftDeleted: t, countryCode: n }),
                _.b3(e),
                _.AE(e),
                (0, o.hP)(),
            ]),
            l = i.flatMap((e) => e.benefit_channels ?? []);
        r.h.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
            guildId: e,
            groupListings: i,
            benefitChannels: l,
            settings: s,
            subscriptionTrials: a,
        });
    } catch (t) {
        r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE", guildId: e });
    }
}
async function m(e, t) {
    let n = await _.aC(e, t);
    return r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING", listing: n }), n;
}
async function f(e) {
    r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN", planId: e });
    let t = await _.Nb(e);
    for (let n of (r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS", groupListing: t }),
    t.subscription_listings ?? []))
        n.subscription_plans[0].id === e && (await s.ur(n.id, void 0, void 0, !0));
}
async function g(e, t, n) {
    await _.wJ(e, t, n), r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING", listingId: n });
}
async function p(e, t, n) {
    let i = await _.PC(e, t, n);
    r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING", listing: i });
}
async function A(e, t, n) {
    let i = await _.D7(e, t, n);
    r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL", subscriptionTrial: i });
}
async function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = await _.WV(e, t, n);
    return r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING", listing: i }), i;
}
async function T(e) {
    let { guildId: t, groupListingId: n, data: i, analyticsContext: s, onBeforeDispatchNewListing: o } = e,
        d = await _.DQ(t, n, i);
    return (
        l.default.track(u.HAw.ROLE_SUBSCRIPTION_LISTING_CREATED, {
            role_subscription_listing_id: d.id,
            role_subscription_group_listing_id: n,
            template_name: s.templateCategory,
            has_change_from_template: s.hasChangeFromTemplate,
            ...(0, a.H$)(t),
        }),
        await I(t, n, { includeArchivedListings: !0 }),
        o?.(d),
        r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING", listing: d }),
        d
    );
}
async function S(e) {
    let { guildId: t, listingId: n, groupListingId: i, data: s } = e,
        a = await _.qt(t, i, n, s);
    return (
        r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING", listing: a }),
        await I(t, i, { includeArchivedListings: !0 }),
        a
    );
}
async function N(e) {
    let { signal: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = !1;
    for (let s = 0; s < 3; s++)
        try {
            if (t?.aborted)
                return void r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED", guildId: e });
            r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS", guildId: e });
            let { restrictions: i } = await _.iG(e, { signal: t });
            r.h.dispatch({
                type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
                guildId: e,
                restrictions: i ?? [],
            }),
                (n = !0);
            break;
        } catch (e) {
            await (0, i.yy)((s + 1) * d.A.Millis.SECOND);
        }
    n || r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE", guildId: e });
}
