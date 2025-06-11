n.d(t, {
    GG: () => y,
    HQ: () => E,
    JH: () => j,
    QV: () => I,
    YB: () => h,
    _1: () => S,
    _k: () => f,
    jO: () => _,
    oC: () => D,
    qi: () => b,
    r4: () => O,
    sp: () => m
}),
    n(388685),
    n(539854);
var r = n(73800),
    i = n(442837),
    l = n(990169),
    o = n(935369),
    a = n(38618);
n(823379);
var u = n(730647),
    s = n(423117),
    c = n(289393),
    d = n(697227);
let p = [],
    g = function (e) {
        let { refetchOnMount: t = !1, includeSoftDeleted: n = !0, countryCode: o, dontFetchWhileTrue: u } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            d = (0, i.e7)([a.Z], () => a.Z.isConnected()),
            p = (0, i.e7)([c.Z], () => (null != e ? c.Z.getSubscriptionGroupListingsForGuildFetchState(e) : c.M.FETCHED)),
            g = r.useRef(t);
        r.useEffect(() => {
            if (null == e || !d || !0 === u) return;
            let r = c.Z.getSubscriptionGroupListingsForGuildFetchState(e);
            (t || r === c.M.NOT_FETCHED) &&
                ((g.current = !1),
                s.FP(e, {
                    includeSoftDeleted: n,
                    countryCode: o
                }));
        }, [d, e, n, t, o, u]);
        let f = (0, l.Z)(g);
        return { listingsLoaded: p === c.M.FETCHED && !0 !== f };
    },
    f = function (e) {
        let { includeSoftDeleted: t = !1, includeUnpublished: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, i.Wu)(
            [c.Z],
            () => {
                if (null == e) return [];
                let r = c.Z.getSubscriptionGroupListing(e);
                if (null == r) return [];
                let i = [];
                for (let e of r.subscription_listings_ids) {
                    let r = c.Z.getSubscriptionListing(e);
                    null != r && (!r.soft_deleted || t) && (r.published || n) && i.push(r);
                }
                return i;
            },
            [e, t, n]
        );
    },
    _ = (e) => (0, i.e7)([c.Z], () => (null != e ? c.Z.getSubscriptionListing(e) : null)),
    y = (e) => {
        let t = (0, u.f)('useGroupListingsForGuild');
        return (0, i.e7)([c.Z], () => (null != e && t ? c.Z.getSubscriptionGroupListingsForGuild(e) : p));
    },
    b = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      includeSoftDeleted: !1,
                      sortDeletedListingsLast: !1
                  };
        return (
            g(e),
            (0, i.Wu)([c.Z], () => {
                let n = null != e ? c.Z.getSubscriptionGroupListingsForGuild(e) : p,
                    r = [];
                for (let e of n)
                    for (let n of e.subscription_listings_ids) {
                        let e = c.Z.getSubscriptionListing(n);
                        null != e && (t.includeSoftDeleted || !e.soft_deleted) && r.push(e);
                    }
                return t.includeSoftDeleted && t.sortDeletedListingsLast ? [...r.filter((e) => !e.soft_deleted), ...r.filter((e) => e.soft_deleted)] : r;
            })
        );
    },
    m = (e) => {
        let [t, n] = r.useState(!1),
            l = r.useMemo(() => e.map(d.W), [e]),
            o = (0, i.Wu)([c.Z], () => l.filter((e) => !c.Z.getDidFetchListingForSubscriptionPlanId(e)), [l]);
        return (
            r.useEffect(() => {
                !t &&
                    o.length > 0 &&
                    (n(!0),
                    Promise.all(o.map((e) => s.vY(e)))
                        .catch(() => {})
                        .then(() => {
                            n(!1);
                        }));
            }, [t, o]),
            { loading: t }
        );
    },
    O = () => {
        let [e, t] = r.useState(!1),
            [n, i] = r.useState(null);
        return {
            error: n,
            submitting: e,
            deleteSubscriptionListing: async (e, n, r) => {
                try {
                    return t(!0), i(null), await s._d(e, n, r), !0;
                } catch (e) {
                    i(e);
                } finally {
                    t(!1);
                }
            }
        };
    },
    S = () => {
        let [e, t] = (0, o.Z)(s.AE),
            { loading: n, error: r } = t;
        return {
            error: r,
            submitting: n,
            archiveSubscriptionListing: e
        };
    },
    E = () => {
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
                        await s.O0({
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
    h = (e) => (0, i.e7)([c.Z], () => (null != e ? c.Z.getSubscriptionSettings(e) : void 0)),
    I = () => {
        let [e, t] = r.useState(!1),
            [n, i] = r.useState(null);
        return {
            loading: e,
            updateSubscriptionsSettings: r.useCallback(async (e, n) => {
                t(!0), i(null);
                try {
                    await s.W2(e, n);
                } catch (e) {
                    i(e);
                } finally {
                    t(!1);
                }
            }, []),
            error: n
        };
    },
    j = () => {
        let [e, t] = r.useState(!1),
            [n, i] = r.useState(null);
        return {
            loading: e,
            fetchSubscriptionsSettings: r.useCallback(async (e) => {
                t(!0), i(null);
                try {
                    await s.Qb(e);
                } catch (e) {
                    i(e);
                } finally {
                    t(!1);
                }
            }, []),
            error: n
        };
    },
    D = (e) => (0, i.e7)([c.Z], () => (null != e ? c.Z.getSubscriptionTrial(e) : null));
