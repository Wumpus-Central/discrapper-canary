"use strict";
n.d(t, {
    DO: () => h,
    H7: () => m,
    J1: () => A,
    J4: () => p,
    K0: () => T,
    LJ: () => y,
    W5: () => _,
    WA: () => f,
    _R: () => E,
    mK: () => g,
    vW: () => S,
});
var i = n(499979),
    r = n(228366),
    s = n(73825),
    a = n(95561),
    o = n(753390),
    l = n(174459),
    u = n(927813),
    c = n(695825),
    d = n(652215);
async function _(e) {
    let t = await c.b3(e);
    r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS", settings: t });
}
async function h(e, t) {
    let n = await c.ux(e, t);
    r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS", settings: n });
}
async function f(e) {
    let { includeSoftDeleted: t = !0, countryCode: n } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS", guildId: e });
    try {
        let [i, s, a] = await Promise.all([
                c.z9(e, { includeSoftDeleted: t, countryCode: n }),
                c.b3(e),
                c.AE(e),
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
async function p(e, t) {
    let n = await c.aC(e, t);
    return r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING", listing: n }), n;
}
async function E(e) {
    r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN", planId: e });
    let t = await c.Nb(e);
    for (let n of (r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS", groupListing: t }),
    t.subscription_listings ?? []))
        n.subscription_plans[0].id === e && (await s.ur(n.id, void 0, void 0, !0));
}
async function m(e, t, n) {
    await c.wJ(e, t, n), r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING", listingId: n });
}
async function g(e, t, n) {
    let i = await c.PC(e, t, n);
    r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING", listing: i });
}
async function A(e, t, n) {
    let i = await c.D7(e, t, n);
    r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL", subscriptionTrial: i });
}
async function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = await c.WV(e, t, n);
    return r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING", listing: i }), i;
}
async function T(e) {
    let { guildId: t, groupListingId: n, data: i, analyticsContext: s, onBeforeDispatchNewListing: o } = e,
        u = await c.DQ(t, n, i);
    return (
        l.default.track(d.HAw.ROLE_SUBSCRIPTION_LISTING_CREATED, {
            role_subscription_listing_id: u.id,
            role_subscription_group_listing_id: n,
            template_name: s.templateCategory,
            has_change_from_template: s.hasChangeFromTemplate,
            ...(0, a.H$)(t),
        }),
        await I(t, n, { includeArchivedListings: !0 }),
        o?.(u),
        r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING", listing: u }),
        u
    );
}
async function S(e) {
    let { guildId: t, listingId: n, groupListingId: i, data: s } = e,
        a = await c.qt(t, i, n, s);
    return (
        r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING", listing: a }),
        await I(t, i, { includeArchivedListings: !0 }),
        a
    );
}
async function y(e) {
    let { signal: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = !1;
    for (let s = 0; s < 3; s++)
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
            await (0, i.yy)((s + 1) * u.A.Millis.SECOND);
        }
    n || r.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE", guildId: e });
}
