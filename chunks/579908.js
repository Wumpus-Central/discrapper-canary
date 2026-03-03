"use strict";
n.d(t, {
    DO: () => p,
    H7: () => g,
    J1: () => I,
    J4: () => m,
    K0: () => S,
    LJ: () => v,
    W5: () => f,
    WA: () => h,
    _R: () => E,
    mK: () => A,
    vW: () => y,
});
var r = n(499979),
    i = n(73153),
    s = n(384904),
    a = n(73825),
    o = n(58149),
    l = n(954571),
    u = n(927813),
    c = n(695825),
    d = n(652215);
let _ = 3;
async function f(e) {
    let t = await c.b3(e);
    i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS", settings: t });
}
async function p(e, t) {
    let n = await c.ux(e, t);
    i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS", settings: n });
}
async function h(e) {
    let { includeSoftDeleted: t = !0, countryCode: n } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS", guildId: e });
    try {
        let [r, a, o] = await Promise.all([
                c.z9(e, { includeSoftDeleted: t, countryCode: n }),
                c.b3(e),
                c.AE(e),
                (0, s.hP)(),
            ]),
            l = r.flatMap((e) => e.benefit_channels ?? []);
        i.h.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
            guildId: e,
            groupListings: r,
            benefitChannels: l,
            settings: a,
            subscriptionTrials: o,
        });
    } catch (t) {
        i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE", guildId: e });
    }
}
async function m(e, t) {
    let n = await c.aC(e, t);
    return i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING", listing: n }), n;
}
async function E(e) {
    i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN", planId: e });
    let t = await c.Nb(e);
    for (let n of (i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS", groupListing: t }),
    t.subscription_listings ?? []))
        n.subscription_plans[0].id === e && (await a.ur(n.id, void 0, void 0, !0));
}
async function g(e, t, n) {
    await c.wJ(e, t, n), i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING", listingId: n });
}
async function A(e, t, n) {
    let r = await c.PC(e, t, n);
    i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING", listing: r });
}
async function I(e, t, n) {
    let r = await c.D7(e, t, n);
    i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL", subscriptionTrial: r });
}
async function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = await c.WV(e, t, n);
    return i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING", listing: r }), r;
}
async function S(e) {
    let { guildId: t, groupListingId: n, data: r, analyticsContext: s, onBeforeDispatchNewListing: a } = e,
        u = await c.DQ(t, n, r);
    return (
        l.default.track(d.HAw.ROLE_SUBSCRIPTION_LISTING_CREATED, {
            role_subscription_listing_id: u.id,
            role_subscription_group_listing_id: n,
            template_name: s.templateCategory,
            has_change_from_template: s.hasChangeFromTemplate,
            ...(0, o.H$)(t),
        }),
        await T(t, n, { includeArchivedListings: !0 }),
        a?.(u),
        i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING", listing: u }),
        u
    );
}
async function y(e) {
    let { guildId: t, listingId: n, groupListingId: r, data: s } = e,
        a = await c.qt(t, r, n, s);
    return (
        i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING", listing: a }),
        await T(t, r, { includeArchivedListings: !0 }),
        a
    );
}
async function v(e) {
    let { signal: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = !1;
    for (let s = 0; s < _; s++)
        try {
            if (t?.aborted)
                return void i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED", guildId: e });
            i.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS", guildId: e });
            let { restrictions: r } = await c.iG(e, { signal: t });
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
