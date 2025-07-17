(n.d(t, {
    GG: () => p,
    HQ: () => S,
    JH: () => R,
    QV: () => N,
    YB: () => f,
    _1: () => g,
    _k: () => E,
    jO: () => I,
    oC: () => m,
    qi: () => C,
    r4: () => T,
    sp: () => O
}),
    n(388685),
    n(539854));
var i = n(73800),
    r = n(442837),
    l = n(990169),
    o = n(935369),
    s = n(38618);
n(823379);
var a = n(730647),
    c = n(423117),
    u = n(289393),
    d = n(697227);
let _ = [],
    h = function (e) {
        let { refetchOnMount: t = !1, includeSoftDeleted: n = !0, countryCode: o, dontFetchWhileTrue: a } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            d = (0, r.e7)([s.Z], () => s.Z.isConnected()),
            _ = (0, r.e7)([u.Z], () => (null != e ? u.Z.getSubscriptionGroupListingsForGuildFetchState(e) : u.M.FETCHED)),
            h = i.useRef(t);
        i.useEffect(() => {
            if (null == e || !d || !0 === a) return;
            let i = u.Z.getSubscriptionGroupListingsForGuildFetchState(e);
            (t || i === u.M.NOT_FETCHED) &&
                ((h.current = !1),
                c.FP(e, {
                    includeSoftDeleted: n,
                    countryCode: o
                }));
        }, [d, e, n, t, o, a]);
        let E = (0, l.Z)(h);
        return { listingsLoaded: _ === u.M.FETCHED && !0 !== E };
    },
    E = function (e) {
        let { includeSoftDeleted: t = !1, includeUnpublished: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, r.Wu)(
            [u.Z],
            () => {
                if (null == e) return [];
                let i = u.Z.getSubscriptionGroupListing(e);
                if (null == i) return [];
                let r = [];
                for (let e of i.subscription_listings_ids) {
                    let i = u.Z.getSubscriptionListing(e);
                    null != i && (!i.soft_deleted || t) && (i.published || n) && r.push(i);
                }
                return r;
            },
            [e, t, n]
        );
    },
    I = (e) => (0, r.e7)([u.Z], () => (null != e ? u.Z.getSubscriptionListing(e) : null)),
    p = (e) => {
        let t = (0, a.f)('useGroupListingsForGuild');
        return (0, r.e7)([u.Z], () => (null != e && t ? u.Z.getSubscriptionGroupListingsForGuild(e) : _));
    },
    C = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      includeSoftDeleted: !1,
                      sortDeletedListingsLast: !1
                  };
        return (
            h(e),
            (0, r.Wu)([u.Z], () => {
                let n = null != e ? u.Z.getSubscriptionGroupListingsForGuild(e) : _,
                    i = [];
                for (let e of n)
                    for (let n of e.subscription_listings_ids) {
                        let e = u.Z.getSubscriptionListing(n);
                        null != e && (t.includeSoftDeleted || !e.soft_deleted) && i.push(e);
                    }
                return t.includeSoftDeleted && t.sortDeletedListingsLast ? [...i.filter((e) => !e.soft_deleted), ...i.filter((e) => e.soft_deleted)] : i;
            })
        );
    },
    O = (e) => {
        let [t, n] = i.useState(!1),
            l = i.useMemo(() => e.map(d.W), [e]),
            o = (0, r.Wu)([u.Z], () => l.filter((e) => !u.Z.getDidFetchListingForSubscriptionPlanId(e)), [l]);
        return (
            i.useEffect(() => {
                !t &&
                    o.length > 0 &&
                    (n(!0),
                    Promise.all(o.map((e) => c.vY(e)))
                        .catch(() => {})
                        .then(() => {
                            n(!1);
                        }));
            }, [t, o]),
            { loading: t }
        );
    },
    T = () => {
        let [e, t] = i.useState(!1),
            [n, r] = i.useState(null);
        return {
            error: n,
            submitting: e,
            deleteSubscriptionListing: async (e, n, i) => {
                try {
                    return (t(!0), r(null), await c._d(e, n, i), !0);
                } catch (e) {
                    r(e);
                } finally {
                    t(!1);
                }
            }
        };
    },
    g = () => {
        let [e, t] = (0, o.Z)(c.AE),
            { loading: n, error: i } = t;
        return {
            error: i,
            submitting: n,
            archiveSubscriptionListing: e
        };
    },
    S = () => {
        let [e, t] = i.useState(!1),
            [n, r] = i.useState(null);
        return {
            error: n,
            submitting: e,
            publishSubscriptionListing: async (e) => {
                let { guildId: n, groupListingId: i, listingId: l } = e;
                try {
                    return (
                        t(!0),
                        r(null),
                        await c.O0({
                            guildId: n,
                            groupListingId: i,
                            listingId: l,
                            data: { published: !0 }
                        }),
                        !0
                    );
                } catch (e) {
                    r(e);
                } finally {
                    t(!1);
                }
            },
            clearError: () => r(null)
        };
    },
    f = (e) => (0, r.e7)([u.Z], () => (null != e ? u.Z.getSubscriptionSettings(e) : void 0)),
    N = () => {
        let [e, t] = i.useState(!1),
            [n, r] = i.useState(null);
        return {
            loading: e,
            updateSubscriptionsSettings: i.useCallback(async (e, n) => {
                (t(!0), r(null));
                try {
                    await c.W2(e, n);
                } catch (e) {
                    r(e);
                } finally {
                    t(!1);
                }
            }, []),
            error: n
        };
    },
    R = () => {
        let [e, t] = i.useState(!1),
            [n, r] = i.useState(null);
        return {
            loading: e,
            fetchSubscriptionsSettings: i.useCallback(async (e) => {
                (t(!0), r(null));
                try {
                    await c.Qb(e);
                } catch (e) {
                    r(e);
                } finally {
                    t(!1);
                }
            }, []),
            error: n
        };
    },
    m = (e) => (0, r.e7)([u.Z], () => (null != e ? u.Z.getSubscriptionTrial(e) : null));
