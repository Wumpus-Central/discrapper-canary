n.d(t, {
    AE: () => v,
    FP: () => h,
    I1: () => y,
    O0: () => T,
    Qb: () => _,
    W2: () => p,
    Xj: () => S,
    _d: () => E,
    dA: () => b,
    uw: () => m,
    vY: () => g
}),
    n(47120);
var i = n(379649),
    r = n(570140),
    a = n(355467),
    s = n(821849),
    o = n(367907),
    l = n(626135),
    u = n(70956),
    c = n(295141),
    d = n(981631);
let f = 3;
async function _(e) {
    let t = await c.X2(e);
    r.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS',
        settings: t
    });
}
async function p(e, t) {
    let n = await c.ci(e, t);
    r.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS',
        settings: n
    });
}
async function h(e) {
    let { includeSoftDeleted: t = !0, countryCode: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    r.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS',
        guildId: e
    });
    try {
        let [i, s, o] = await Promise.all([
            c.rD(e, {
                includeSoftDeleted: t,
                countryCode: n
            }),
            c.X2(e),
            c.eI(e),
            (0, a.jg)()
        ]);
        r.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS',
            guildId: e,
            groupListings: i,
            settings: s,
            subscriptionTrials: o
        });
    } catch (t) {
        r.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE',
            guildId: e
        });
    }
}
async function m(e, t) {
    let n = await c.bg(e, t);
    return (
        r.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING',
            listing: n
        }),
        n
    );
}
async function g(e) {
    var t;
    r.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN',
        planId: e
    });
    let n = await c.iW(e);
    for (let i of (r.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS',
        groupListing: n
    }),
    null !== (t = n.subscription_listings) && void 0 !== t ? t : []))
        i.subscription_plans[0].id === e && (await s.GZ(i.id, void 0, void 0, !0));
}
async function E(e, t, n) {
    await c.es(e, t, n),
        r.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING',
            listingId: n
        });
}
async function v(e, t, n) {
    let i = await c.V_(e, t, n);
    r.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING',
        listing: i
    });
}
async function y(e, t, n) {
    let i = await c.MI(e, t, n);
    r.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL',
        subscriptionTrial: i
    });
}
async function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = await c.K5(e, t, n);
    return (
        r.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING',
            listing: i
        }),
        i
    );
}
async function b(e) {
    let { guildId: t, groupListingId: n, data: i, analyticsContext: a, onBeforeDispatchNewListing: s } = e,
        u = await c.aG(t, n, i);
    return (
        l.default.track(d.rMx.ROLE_SUBSCRIPTION_LISTING_CREATED, {
            role_subscription_listing_id: u.id,
            role_subscription_group_listing_id: n,
            template_name: a.templateCategory,
            has_change_from_template: a.hasChangeFromTemplate,
            ...(0, o.hH)(t)
        }),
        await I(t, n, { includeArchivedListings: !0 }),
        null == s || s(u),
        r.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING',
            listing: u
        }),
        u
    );
}
async function T(e) {
    let { guildId: t, listingId: n, groupListingId: i, data: a } = e,
        s = await c.nU(t, i, n, a);
    return (
        r.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING',
            listing: s
        }),
        await I(t, i, { includeArchivedListings: !0 }),
        s
    );
}
async function S(e) {
    let { signal: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = !1;
    for (let a = 0; a < f; a++)
        try {
            if (null == t ? void 0 : t.aborted) {
                r.Z.dispatch({
                    type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED',
                    guildId: e
                });
                return;
            }
            r.Z.dispatch({
                type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS',
                guildId: e
            });
            let { restrictions: i } = await c.j8(e, { signal: t });
            r.Z.dispatch({
                type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS',
                guildId: e,
                restrictions: null != i ? i : []
            }),
                (n = !0);
            break;
        } catch (e) {
            await (0, i._v)((a + 1) * u.Z.Millis.SECOND);
        }
    n ||
        r.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE',
            guildId: e
        });
}
