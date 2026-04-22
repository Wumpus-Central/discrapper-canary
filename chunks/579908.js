"use strict";
n.d(t, {
    DO: () => f,
    H7: () => m,
    J1: () => A,
    J4: () => h,
    K0: () => T,
    LJ: () => y,
    W5: () => _,
    WA: () => E,
    _R: () => p,
    mK: () => g,
    vW: () => S,
});
var r = n(499979),
    i = n(73153),
    s = n(73825),
    a = n(58149),
    o = n(323082),
    l = n(954571),
    u = n(927813),
    d = n(695825),
    c = n(652215);
async function _(e) {
    let t = await d.b3(e);
    i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS", settings: t });
}
async function f(e, t) {
    let n = await d.ux(e, t);
    i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS", settings: n });
}
async function E(e) {
    let { includeSoftDeleted: t = !0, countryCode: n } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS", guildId: e });
    try {
        let [r, s, a] = await Promise.all([
                d.z9(e, { includeSoftDeleted: t, countryCode: n }),
                d.b3(e),
                d.AE(e),
                (0, o.hP)(),
            ]),
            l = r.flatMap((e) => e.benefit_channels ?? []);
        i.h.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
            guildId: e,
            groupListings: r,
            benefitChannels: l,
            settings: s,
            subscriptionTrials: a,
        });
    } catch (t) {
        i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE", guildId: e });
    }
}
async function h(e, t) {
    let n = await d.aC(e, t);
    return i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING", listing: n }), n;
}
async function p(e) {
    i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN", planId: e });
    let t = await d.Nb(e);
    for (let n of (i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS", groupListing: t }),
    t.subscription_listings ?? []))
        n.subscription_plans[0].id === e && (await s.ur(n.id, void 0, void 0, !0));
}
async function m(e, t, n) {
    await d.wJ(e, t, n), i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING", listingId: n });
}
async function g(e, t, n) {
    let r = await d.PC(e, t, n);
    i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING", listing: r });
}
async function A(e, t, n) {
    let r = await d.D7(e, t, n);
    i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL", subscriptionTrial: r });
}
async function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = await d.WV(e, t, n);
    return i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING", listing: r }), r;
}
async function T(e) {
    let { guildId: t, groupListingId: n, data: r, analyticsContext: s, onBeforeDispatchNewListing: o } = e,
        u = await d.DQ(t, n, r);
    return (
        l.default.track(c.HAw.ROLE_SUBSCRIPTION_LISTING_CREATED, {
            role_subscription_listing_id: u.id,
            role_subscription_group_listing_id: n,
            template_name: s.templateCategory,
            has_change_from_template: s.hasChangeFromTemplate,
            ...(0, a.H$)(t),
        }),
        await I(t, n, { includeArchivedListings: !0 }),
        o?.(u),
        i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING", listing: u }),
        u
    );
}
async function S(e) {
    let { guildId: t, listingId: n, groupListingId: r, data: s } = e,
        a = await d.qt(t, r, n, s);
    return (
        i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING", listing: a }),
        await I(t, r, { includeArchivedListings: !0 }),
        a
    );
}
async function y(e) {
    let { signal: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = !1;
    for (let s = 0; s < 3; s++)
        try {
            if (t?.aborted)
                return void i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED", guildId: e });
            i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS", guildId: e });
            let { restrictions: r } = await d.iG(e, { signal: t });
            i.h.dispatch({
                type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
                guildId: e,
                restrictions: r ?? [],
            }),
                (n = !0);
            break;
        } catch (e) {
            await (0, r.yy)((s + 1) * u.A.Millis.SECOND);
        }
    n || i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE", guildId: e });
}
