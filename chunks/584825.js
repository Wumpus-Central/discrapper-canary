(n.d(t, {
    GG: () => p,
    HQ: () => T,
    JH: () => m,
    QV: () => N,
    YB: () => f,
    _1: () => O,
    _k: () => E,
    jO: () => I,
    oC: () => R,
    qi: () => C,
    r4: () => S,
    sp: () => g
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
    d = n(289393),
    u = n(697227);
let _ = [],
    h = function (e) {
        let { refetchOnMount: t = !1, includeSoftDeleted: n = !0, countryCode: o, dontFetchWhileTrue: a } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            u = (0, r.e7)([s.Z], () => s.Z.isConnected()),
            _ = (0, r.e7)([d.Z], () => (null != e ? d.Z.getSubscriptionGroupListingsForGuildFetchState(e) : d.M.FETCHED)),
            h = i.useRef(t);
        i.useEffect(() => {
            if (null == e || !u || !0 === a) return;
            let i = d.Z.getSubscriptionGroupListingsForGuildFetchState(e);
            (t || i === d.M.NOT_FETCHED) &&
                ((h.current = !1),
                c.FP(e, {
                    includeSoftDeleted: n,
                    countryCode: o
                }));
        }, [u, e, n, t, o, a]);
        let E = (0, l.Z)(h);
        return { listingsLoaded: _ === d.M.FETCHED && !0 !== E };
    },
    E = function (e) {
        let { includeSoftDeleted: t = !1, includeUnpublished: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, r.Wu)(
            [d.Z],
            () => {
                if (null == e) return [];
                let i = d.Z.getSubscriptionGroupListing(e);
                if (null == i) return [];
                let r = [];
                for (let e of i.subscription_listings_ids) {
                    let i = d.Z.getSubscriptionListing(e);
                    null != i && (!i.soft_deleted || t) && (i.published || n) && r.push(i);
                }
                return r;
            },
            [e, t, n]
        );
    },
    I = (e) => (0, r.e7)([d.Z], () => (null != e ? d.Z.getSubscriptionListing(e) : null)),
    p = (e) => {
        let t = (0, a.f)('useGroupListingsForGuild');
        return (0, r.e7)([d.Z], () => (null != e && t ? d.Z.getSubscriptionGroupListingsForGuild(e) : _));
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
            (0, r.Wu)([d.Z], () => {
                let n = null != e ? d.Z.getSubscriptionGroupListingsForGuild(e) : _,
                    i = [];
                for (let e of n)
                    for (let n of e.subscription_listings_ids) {
                        let e = d.Z.getSubscriptionListing(n);
                        null != e && (t.includeSoftDeleted || !e.soft_deleted) && i.push(e);
                    }
                return t.includeSoftDeleted && t.sortDeletedListingsLast ? [...i.filter((e) => !e.soft_deleted), ...i.filter((e) => e.soft_deleted)] : i;
            })
        );
    },
    g = (e) => {
        let [t, n] = i.useState(!1),
            l = i.useMemo(() => e.map(u.W), [e]),
            o = (0, r.Wu)([d.Z], () => l.filter((e) => !d.Z.getDidFetchListingForSubscriptionPlanId(e)), [l]);
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
    S = () => {
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
    O = () => {
        let [e, t] = (0, o.Z)(c.AE),
            { loading: n, error: i } = t;
        return {
            error: i,
            submitting: n,
            archiveSubscriptionListing: e
        };
    },
    T = () => {
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
    f = (e) => (0, r.e7)([d.Z], () => (null != e ? d.Z.getSubscriptionSettings(e) : void 0)),
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
    m = () => {
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
    R = (e) => (0, r.e7)([d.Z], () => (null != e ? d.Z.getSubscriptionTrial(e) : null));
