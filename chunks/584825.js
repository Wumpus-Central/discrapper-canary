n.d(e, {
    GG: () => m,
    HQ: () => y,
    JH: () => v,
    QV: () => C,
    YB: () => T,
    _1: () => I,
    _k: () => f,
    jO: () => p,
    oC: () => D,
    qi: () => E,
    r4: () => h,
    sp: () => S
}),
    n(47120),
    n(653041);
var i = n(192379),
    r = n(442837),
    l = n(990169),
    a = n(935369),
    u = n(38618);
n(823379);
var s = n(730647),
    o = n(423117),
    d = n(289393),
    c = n(697227);
let g = [],
    _ = function (t) {
        let { refetchOnMount: e = !1, includeSoftDeleted: n = !0, countryCode: a, dontFetchWhileTrue: s } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            c = (0, r.e7)([u.Z], () => u.Z.isConnected()),
            g = (0, r.e7)([d.Z], () => (null != t ? d.Z.getSubscriptionGroupListingsForGuildFetchState(t) : d.M.FETCHED)),
            _ = i.useRef(e);
        i.useEffect(() => {
            if (null == t || !c || !0 === s) return;
            let i = d.Z.getSubscriptionGroupListingsForGuildFetchState(t);
            (e || i === d.M.NOT_FETCHED) &&
                ((_.current = !1),
                o.FP(t, {
                    includeSoftDeleted: n,
                    countryCode: a
                }));
        }, [c, t, n, e, a, s]);
        let f = (0, l.Z)(_);
        return { listingsLoaded: g === d.M.FETCHED && !0 !== f };
    },
    f = function (t) {
        let { includeSoftDeleted: e = !1, includeUnpublished: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, r.Wu)(
            [d.Z],
            () => {
                if (null == t) return [];
                let i = d.Z.getSubscriptionGroupListing(t);
                if (null == i) return [];
                let r = [];
                for (let t of i.subscription_listings_ids) {
                    let i = d.Z.getSubscriptionListing(t);
                    null != i && (!i.soft_deleted || e) && (i.published || n) && r.push(i);
                }
                return r;
            },
            [t, e, n]
        );
    },
    p = (t) => (0, r.e7)([d.Z], () => (null != t ? d.Z.getSubscriptionListing(t) : null)),
    m = (t) => {
        let e = (0, s.f)('useGroupListingsForGuild');
        return (0, r.e7)([d.Z], () => (null != t && e ? d.Z.getSubscriptionGroupListingsForGuild(t) : g));
    },
    E = function (t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      includeSoftDeleted: !1,
                      sortDeletedListingsLast: !1
                  };
        return (
            _(t),
            (0, r.Wu)([d.Z], () => {
                let n = null != t ? d.Z.getSubscriptionGroupListingsForGuild(t) : g,
                    i = [];
                for (let t of n)
                    for (let n of t.subscription_listings_ids) {
                        let t = d.Z.getSubscriptionListing(n);
                        null != t && (e.includeSoftDeleted || !t.soft_deleted) && i.push(t);
                    }
                return e.includeSoftDeleted && e.sortDeletedListingsLast ? [...i.filter((t) => !t.soft_deleted), ...i.filter((t) => t.soft_deleted)] : i;
            })
        );
    },
    S = (t) => {
        let [e, n] = i.useState(!1),
            l = i.useMemo(() => t.map(c.W), [t]),
            a = (0, r.Wu)([d.Z], () => l.filter((t) => !d.Z.getDidFetchListingForSubscriptionPlanId(t)), [l]);
        return (
            i.useEffect(() => {
                !e &&
                    a.length > 0 &&
                    (n(!0),
                    Promise.all(a.map((t) => o.vY(t)))
                        .catch(() => {})
                        .then(() => {
                            n(!1);
                        }));
            }, [e, a]),
            { loading: e }
        );
    },
    h = () => {
        let [t, e] = i.useState(!1),
            [n, r] = i.useState(null);
        return {
            error: n,
            submitting: t,
            deleteSubscriptionListing: async (t, n, i) => {
                try {
                    return e(!0), r(null), await o._d(t, n, i), !0;
                } catch (t) {
                    r(t);
                } finally {
                    e(!1);
                }
            }
        };
    },
    I = () => {
        let [t, e] = (0, a.Z)(o.AE),
            { loading: n, error: i } = e;
        return {
            error: i,
            submitting: n,
            archiveSubscriptionListing: t
        };
    },
    y = () => {
        let [t, e] = i.useState(!1),
            [n, r] = i.useState(null);
        return {
            error: n,
            submitting: t,
            publishSubscriptionListing: async (t) => {
                let { guildId: n, groupListingId: i, listingId: l } = t;
                try {
                    return (
                        e(!0),
                        r(null),
                        await o.O0({
                            guildId: n,
                            groupListingId: i,
                            listingId: l,
                            data: { published: !0 }
                        }),
                        !0
                    );
                } catch (t) {
                    r(t);
                } finally {
                    e(!1);
                }
            },
            clearError: () => r(null)
        };
    },
    T = (t) => (0, r.e7)([d.Z], () => (null != t ? d.Z.getSubscriptionSettings(t) : void 0)),
    C = () => {
        let [t, e] = i.useState(!1),
            [n, r] = i.useState(null);
        return {
            loading: t,
            updateSubscriptionsSettings: i.useCallback(async (t, n) => {
                e(!0), r(null);
                try {
                    await o.W2(t, n);
                } catch (t) {
                    r(t);
                } finally {
                    e(!1);
                }
            }, []),
            error: n
        };
    },
    v = () => {
        let [t, e] = i.useState(!1),
            [n, r] = i.useState(null);
        return {
            loading: t,
            fetchSubscriptionsSettings: i.useCallback(async (t) => {
                e(!0), r(null);
                try {
                    await o.Qb(t);
                } catch (t) {
                    r(t);
                } finally {
                    e(!1);
                }
            }, []),
            error: n
        };
    },
    D = (t) => (0, r.e7)([d.Z], () => (null != t ? d.Z.getSubscriptionTrial(t) : null));
