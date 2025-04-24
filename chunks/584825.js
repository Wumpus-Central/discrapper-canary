n.d(t, {
    GG: () => T,
    HQ: () => A,
    JH: () => C,
    QV: () => P,
    YB: () => f,
    _1: () => R,
    _k: () => O,
    jO: () => I,
    oC: () => D,
    qi: () => N,
    r4: () => p,
    sp: () => S
}),
    n(388685),
    n(539854);
var r = n(192379),
    i = n(442837),
    l = n(990169),
    o = n(935369),
    a = n(38618);
n(823379);
var s = n(730647),
    c = n(423117),
    u = n(289393),
    d = n(697227);
let E = [],
    _ = function (e) {
        let { refetchOnMount: t = !1, includeSoftDeleted: n = !0, countryCode: o, dontFetchWhileTrue: s } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            d = (0, i.e7)([a.Z], () => a.Z.isConnected()),
            E = (0, i.e7)([u.Z], () => (null != e ? u.Z.getSubscriptionGroupListingsForGuildFetchState(e) : u.M.FETCHED)),
            _ = r.useRef(t);
        r.useEffect(() => {
            if (null == e || !d || !0 === s) return;
            let r = u.Z.getSubscriptionGroupListingsForGuildFetchState(e);
            (t || r === u.M.NOT_FETCHED) &&
                ((_.current = !1),
                c.FP(e, {
                    includeSoftDeleted: n,
                    countryCode: o
                }));
        }, [d, e, n, t, o, s]);
        let O = (0, l.Z)(_);
        return { listingsLoaded: E === u.M.FETCHED && !0 !== O };
    },
    O = function (e) {
        let { includeSoftDeleted: t = !1, includeUnpublished: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, i.Wu)(
            [u.Z],
            () => {
                if (null == e) return [];
                let r = u.Z.getSubscriptionGroupListing(e);
                if (null == r) return [];
                let i = [];
                for (let e of r.subscription_listings_ids) {
                    let r = u.Z.getSubscriptionListing(e);
                    null != r && (!r.soft_deleted || t) && (r.published || n) && i.push(r);
                }
                return i;
            },
            [e, t, n]
        );
    },
    I = (e) => (0, i.e7)([u.Z], () => (null != e ? u.Z.getSubscriptionListing(e) : null)),
    T = (e) => {
        let t = (0, s.f)('useGroupListingsForGuild');
        return (0, i.e7)([u.Z], () => (null != e && t ? u.Z.getSubscriptionGroupListingsForGuild(e) : E));
    },
    N = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      includeSoftDeleted: !1,
                      sortDeletedListingsLast: !1
                  };
        return (
            _(e),
            (0, i.Wu)([u.Z], () => {
                let n = null != e ? u.Z.getSubscriptionGroupListingsForGuild(e) : E,
                    r = [];
                for (let e of n)
                    for (let n of e.subscription_listings_ids) {
                        let e = u.Z.getSubscriptionListing(n);
                        null != e && (t.includeSoftDeleted || !e.soft_deleted) && r.push(e);
                    }
                return t.includeSoftDeleted && t.sortDeletedListingsLast ? [...r.filter((e) => !e.soft_deleted), ...r.filter((e) => e.soft_deleted)] : r;
            })
        );
    },
    S = (e) => {
        let [t, n] = r.useState(!1),
            l = r.useMemo(() => e.map(d.W), [e]),
            o = (0, i.Wu)([u.Z], () => l.filter((e) => !u.Z.getDidFetchListingForSubscriptionPlanId(e)), [l]);
        return (
            r.useEffect(() => {
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
    p = () => {
        let [e, t] = r.useState(!1),
            [n, i] = r.useState(null);
        return {
            error: n,
            submitting: e,
            deleteSubscriptionListing: async (e, n, r) => {
                try {
                    return t(!0), i(null), await c._d(e, n, r), !0;
                } catch (e) {
                    i(e);
                } finally {
                    t(!1);
                }
            }
        };
    },
    R = () => {
        let [e, t] = (0, o.Z)(c.AE),
            { loading: n, error: r } = t;
        return {
            error: r,
            submitting: n,
            archiveSubscriptionListing: e
        };
    },
    A = () => {
        let [e, t] = r.useState(!1),
            [n, i] = r.useState(null);
        return {
            error: n,
            submitting: e,
            publishSubscriptionListing: async (e) => {
                let { guildId: n, groupListingId: r, listingId: l } = e;
                try {
                    return (
                        t(!0),
                        i(null),
                        await c.O0({
                            guildId: n,
                            groupListingId: r,
                            listingId: l,
                            data: { published: !0 }
                        }),
                        !0
                    );
                } catch (e) {
                    i(e);
                } finally {
                    t(!1);
                }
            },
            clearError: () => i(null)
        };
    },
    f = (e) => (0, i.e7)([u.Z], () => (null != e ? u.Z.getSubscriptionSettings(e) : void 0)),
    P = () => {
        let [e, t] = r.useState(!1),
            [n, i] = r.useState(null);
        return {
            loading: e,
            updateSubscriptionsSettings: r.useCallback(async (e, n) => {
                t(!0), i(null);
                try {
                    await c.W2(e, n);
                } catch (e) {
                    i(e);
                } finally {
                    t(!1);
                }
            }, []),
            error: n
        };
    },
    C = () => {
        let [e, t] = r.useState(!1),
            [n, i] = r.useState(null);
        return {
            loading: e,
            fetchSubscriptionsSettings: r.useCallback(async (e) => {
                t(!0), i(null);
                try {
                    await c.Qb(e);
                } catch (e) {
                    i(e);
                } finally {
                    t(!1);
                }
            }, []),
            error: n
        };
    },
    D = (e) => (0, i.e7)([u.Z], () => (null != e ? u.Z.getSubscriptionTrial(e) : null));
