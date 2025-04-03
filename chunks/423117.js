n.d(t, {
    AE: () => v,
    FP: () => g,
    I1: () => O,
    O0: () => T,
    Qb: () => h,
    W2: () => m,
    Xj: () => N,
    _d: () => y,
    dA: () => S,
    uw: () => E,
    vY: () => b
}),
    n(47120);
var r = n(379649),
    i = n(570140),
    o = n(355467),
    a = n(821849),
    s = n(367907),
    l = n(626135),
    c = n(70956),
    u = n(295141),
    d = n(981631);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
let p = 3;
async function h(e) {
    let t = await u.X2(e);
    i.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS',
        settings: t
    });
}
async function m(e, t) {
    let n = await u.ci(e, t);
    i.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS',
        settings: n
    });
}
async function g(e) {
    let { includeSoftDeleted: t = !0, countryCode: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    i.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS',
        guildId: e
    });
    try {
        let [r, a, s] = await Promise.all([
            u.rD(e, {
                includeSoftDeleted: t,
                countryCode: n
            }),
            u.X2(e),
            u.eI(e),
            (0, o.jg)()
        ]);
        i.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS',
            guildId: e,
            groupListings: r,
            settings: a,
            subscriptionTrials: s
        });
    } catch (t) {
        i.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE',
            guildId: e
        });
    }
}
async function E(e, t) {
    let n = await u.bg(e, t);
    return (
        i.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING',
            listing: n
        }),
        n
    );
}
async function b(e) {
    var t;
    i.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN',
        planId: e
    });
    let n = await u.iW(e);
    for (let r of (i.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS',
        groupListing: n
    }),
    null != (t = n.subscription_listings) ? t : []))
        r.subscription_plans[0].id === e && (await a.GZ(r.id, void 0, void 0, !0));
}
async function y(e, t, n) {
    await u.es(e, t, n),
        i.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING',
            listingId: n
        });
}
async function v(e, t, n) {
    let r = await u.V_(e, t, n);
    i.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING',
        listing: r
    });
}
async function O(e, t, n) {
    let r = await u.MI(e, t, n);
    i.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL',
        subscriptionTrial: r
    });
}
async function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = await u.K5(e, t, n);
    return (
        i.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING',
            listing: r
        }),
        r
    );
}
async function S(e) {
    let { guildId: t, groupListingId: n, data: r, analyticsContext: o, onBeforeDispatchNewListing: a } = e,
        c = await u.aG(t, n, r);
    return (
        l.default.track(
            d.rMx.ROLE_SUBSCRIPTION_LISTING_CREATED,
            _(
                {
                    role_subscription_listing_id: c.id,
                    role_subscription_group_listing_id: n,
                    template_name: o.templateCategory,
                    has_change_from_template: o.hasChangeFromTemplate
                },
                (0, s.hH)(t)
            )
        ),
        await I(t, n, { includeArchivedListings: !0 }),
        null == a || a(c),
        i.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING',
            listing: c
        }),
        c
    );
}
async function T(e) {
    let { guildId: t, listingId: n, groupListingId: r, data: o } = e,
        a = await u.nU(t, r, n, o);
    return (
        i.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING',
            listing: a
        }),
        await I(t, r, { includeArchivedListings: !0 }),
        a
    );
}
async function N(e) {
    let { signal: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = !1;
    for (let o = 0; o < p; o++)
        try {
            if (null == t ? void 0 : t.aborted)
                return void i.Z.dispatch({
                    type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED',
                    guildId: e
                });
            i.Z.dispatch({
                type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS',
                guildId: e
            });
            let { restrictions: r } = await u.j8(e, { signal: t });
            i.Z.dispatch({
                type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS',
                guildId: e,
                restrictions: null != r ? r : []
            }),
                (n = !0);
            break;
        } catch (e) {
            await (0, r._v)((o + 1) * c.Z.Millis.SECOND);
        }
    n ||
        i.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE',
            guildId: e
        });
}
