r.d(n, {
    AE: function () {
        return b;
    },
    FP: function () {
        return g;
    },
    I1: function () {
        return I;
    },
    O0: function () {
        return A;
    },
    Qb: function () {
        return _;
    },
    W2: function () {
        return m;
    },
    Xj: function () {
        return C;
    },
    _d: function () {
        return y;
    },
    dA: function () {
        return S;
    },
    uw: function () {
        return E;
    },
    vY: function () {
        return v;
    }
});
var i = r(47120);
var a = r(379649),
    o = r(570140),
    s = r(355467),
    l = r(821849),
    u = r(367907),
    c = r(626135),
    d = r(70956),
    f = r(295141),
    p = r(981631);
let h = 3;
async function _(e) {
    let n = await f.X2(e);
    o.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS',
        settings: n
    });
}
async function m(e, n) {
    let r = await f.ci(e, n);
    o.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS',
        settings: r
    });
}
async function g(e) {
    let { includeSoftDeleted: n = !0, countryCode: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    o.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS',
        guildId: e
    });
    try {
        let [i, a, l] = await Promise.all([
            f.rD(e, {
                includeSoftDeleted: n,
                countryCode: r
            }),
            f.X2(e),
            f.eI(e),
            (0, s.jg)()
        ]);
        o.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS',
            guildId: e,
            groupListings: i,
            settings: a,
            subscriptionTrials: l
        });
    } catch (n) {
        o.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE',
            guildId: e
        });
    }
}
async function E(e, n) {
    let r = await f.bg(e, n);
    return (
        o.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING',
            listing: r
        }),
        r
    );
}
async function v(e) {
    var n;
    o.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN',
        planId: e
    });
    let r = await f.iW(e);
    for (let i of (o.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS',
        groupListing: r
    }),
    null !== (n = r.subscription_listings) && void 0 !== n ? n : []))
        i.subscription_plans[0].id === e && (await l.GZ(i.id, void 0, void 0, !0));
}
async function y(e, n, r) {
    await f.es(e, n, r),
        o.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING',
            listingId: r
        });
}
async function b(e, n, r) {
    let i = await f.V_(e, n, r);
    o.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING',
        listing: i
    });
}
async function I(e, n, r) {
    let i = await f.MI(e, n, r);
    o.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL',
        subscriptionTrial: i
    });
}
async function T(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = await f.K5(e, n, r);
    return (
        o.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING',
            listing: i
        }),
        i
    );
}
async function S(e) {
    let { guildId: n, groupListingId: r, data: i, analyticsContext: a, onBeforeDispatchNewListing: s } = e,
        l = await f.aG(n, r, i);
    return (
        c.default.track(p.rMx.ROLE_SUBSCRIPTION_LISTING_CREATED, {
            role_subscription_listing_id: l.id,
            role_subscription_group_listing_id: r,
            template_name: a.templateCategory,
            has_change_from_template: a.hasChangeFromTemplate,
            ...(0, u.hH)(n)
        }),
        await T(n, r, { includeArchivedListings: !0 }),
        null == s || s(l),
        o.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING',
            listing: l
        }),
        l
    );
}
async function A(e) {
    let { guildId: n, listingId: r, groupListingId: i, data: a } = e,
        s = await f.nU(n, i, r, a);
    return (
        o.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING',
            listing: s
        }),
        await T(n, i, { includeArchivedListings: !0 }),
        s
    );
}
async function C(e) {
    let { signal: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = !1;
    for (let i = 0; i < h; i++)
        try {
            if (null == n ? void 0 : n.aborted) {
                o.Z.dispatch({
                    type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED',
                    guildId: e
                });
                return;
            }
            o.Z.dispatch({
                type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS',
                guildId: e
            });
            let { restrictions: i } = await f.j8(e, { signal: n });
            o.Z.dispatch({
                type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS',
                guildId: e,
                restrictions: null != i ? i : []
            }),
                (r = !0);
            break;
        } catch (e) {
            await (0, a._v)((i + 1) * d.Z.Millis.SECOND);
        }
    !r &&
        o.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE',
            guildId: e
        });
}
