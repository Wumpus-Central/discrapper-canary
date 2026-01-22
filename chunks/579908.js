n.d(t, {
    DO: () => m,
    H7: () => y,
    J1: () => A,
    J4: () => E,
    K0: () => S,
    LJ: () => T,
    W5: () => h,
    WA: () => g,
    _R: () => b,
    mK: () => O,
    vW: () => I,
}),
    n(896048);
var r = n(499979),
    i = n(73153),
    a = n(384904),
    s = n(73825),
    o = n(58149),
    l = n(954571),
    c = n(927813),
    u = n(695825),
    d = n(652215);

function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
let _ = 3;
async function h(e) {
    let t = await u.b3(e);
    i.h.dispatch({
        type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS",
        settings: t,
    });
}
async function m(e, t) {
    let n = await u.ux(e, t);
    i.h.dispatch({
        type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS",
        settings: n,
    });
}
async function g(e) {
    let { includeSoftDeleted: t = !0, countryCode: n } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    i.h.dispatch({
        type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS",
        guildId: e,
    });
    try {
        let [r, s, o] = await Promise.all([
            u.z9(e, {
                includeSoftDeleted: t,
                countryCode: n,
            }),
            u.b3(e),
            u.AE(e),
            (0, a.hP)(),
        ]);
        i.h.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
            guildId: e,
            groupListings: r,
            settings: s,
            subscriptionTrials: o,
        });
    } catch (t) {
        i.h.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
            guildId: e,
        });
    }
}
async function E(e, t) {
    let n = await u.aC(e, t);
    return (
        i.h.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING",
            listing: n,
        }),
        n
    );
}
async function b(e) {
    var t;
    i.h.dispatch({
        type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
        planId: e,
    });
    let n = await u.Nb(e);
    for (let r of (i.h.dispatch({
        type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
        groupListing: n,
    }),
    null != (t = n.subscription_listings) ? t : []))
        r.subscription_plans[0].id === e && (await s.ur(r.id, void 0, void 0, !0));
}
async function y(e, t, n) {
    await u.wJ(e, t, n),
        i.h.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING",
            listingId: n,
        });
}
async function O(e, t, n) {
    let r = await u.PC(e, t, n);
    i.h.dispatch({
        type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
        listing: r,
    });
}
async function A(e, t, n) {
    let r = await u.D7(e, t, n);
    i.h.dispatch({
        type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL",
        subscriptionTrial: r,
    });
}
async function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = await u.WV(e, t, n);
    return (
        i.h.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING",
            listing: r,
        }),
        r
    );
}
async function S(e) {
    let { guildId: t, groupListingId: n, data: r, analyticsContext: a, onBeforeDispatchNewListing: s } = e,
        c = await u.DQ(t, n, r);
    return (
        l.default.track(
            d.HAw.ROLE_SUBSCRIPTION_LISTING_CREATED,
            p(
                {
                    role_subscription_listing_id: c.id,
                    role_subscription_group_listing_id: n,
                    template_name: a.templateCategory,
                    has_change_from_template: a.hasChangeFromTemplate,
                },
                (0, o.H$)(t),
            ),
        ),
        await v(t, n, {
            includeArchivedListings: !0,
        }),
        null == s || s(c),
        i.h.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
            listing: c,
        }),
        c
    );
}
async function I(e) {
    let { guildId: t, listingId: n, groupListingId: r, data: a } = e,
        s = await u.qt(t, r, n, a);
    return (
        i.h.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
            listing: s,
        }),
        await v(t, r, {
            includeArchivedListings: !0,
        }),
        s
    );
}
async function T(e) {
    let { signal: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = !1;
    for (let a = 0; a < _; a++)
        try {
            if (null == t ? void 0 : t.aborted)
                return void i.h.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED",
                    guildId: e,
                });
            i.h.dispatch({
                type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS",
                guildId: e,
            });
            let { restrictions: r } = await u.iG(e, {
                signal: t,
            });
            i.h.dispatch({
                type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
                guildId: e,
                restrictions: null != r ? r : [],
            }),
                (n = !0);
            break;
        } catch (e) {
            await (0, r.yy)((a + 1) * c.A.Millis.SECOND);
        }
    n ||
        i.h.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE",
            guildId: e,
        });
}
