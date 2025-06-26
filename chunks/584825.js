n.d(t, {
    GG: () => f,
    HQ: () => m,
    JH: () => b,
    QV: () => E,
    YB: () => _,
    _1: () => S,
    _k: () => C,
    jO: () => p,
    oC: () => w,
    qi: () => I,
    r4: () => v,
    sp: () => y
}),
    n(388685),
    n(539854);
var i = n(73800),
    s = n(442837),
    r = n(990169),
    l = n(935369),
    a = n(38618);
n(823379);
var o = n(730647),
    d = n(423117),
    h = n(289393),
    u = n(697227);
let c = [],
    g = function (e) {
        let { refetchOnMount: t = !1, includeSoftDeleted: n = !0, countryCode: l, dontFetchWhileTrue: o } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            u = (0, s.e7)([a.Z], () => a.Z.isConnected()),
            c = (0, s.e7)([h.Z], () => (null != e ? h.Z.getSubscriptionGroupListingsForGuildFetchState(e) : h.M.FETCHED)),
            g = i.useRef(t);
        i.useEffect(() => {
            if (null == e || !u || !0 === o) return;
            let i = h.Z.getSubscriptionGroupListingsForGuildFetchState(e);
            (t || i === h.M.NOT_FETCHED) &&
                ((g.current = !1),
                d.FP(e, {
                    includeSoftDeleted: n,
                    countryCode: l
                }));
        }, [u, e, n, t, l, o]);
        let C = (0, r.Z)(g);
        return { listingsLoaded: c === h.M.FETCHED && !0 !== C };
    },
    C = function (e) {
        let { includeSoftDeleted: t = !1, includeUnpublished: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, s.Wu)(
            [h.Z],
            () => {
                if (null == e) return [];
                let i = h.Z.getSubscriptionGroupListing(e);
                if (null == i) return [];
                let s = [];
                for (let e of i.subscription_listings_ids) {
                    let i = h.Z.getSubscriptionListing(e);
                    null != i && (!i.soft_deleted || t) && (i.published || n) && s.push(i);
                }
                return s;
            },
            [e, t, n]
        );
    },
    p = (e) => (0, s.e7)([h.Z], () => (null != e ? h.Z.getSubscriptionListing(e) : null)),
    f = (e) => {
        let t = (0, o.f)('useGroupListingsForGuild');
        return (0, s.e7)([h.Z], () => (null != e && t ? h.Z.getSubscriptionGroupListingsForGuild(e) : c));
    },
    I = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      includeSoftDeleted: !1,
                      sortDeletedListingsLast: !1
                  };
        return (
            g(e),
            (0, s.Wu)([h.Z], () => {
                let n = null != e ? h.Z.getSubscriptionGroupListingsForGuild(e) : c,
                    i = [];
                for (let e of n)
                    for (let n of e.subscription_listings_ids) {
                        let e = h.Z.getSubscriptionListing(n);
                        null != e && (t.includeSoftDeleted || !e.soft_deleted) && i.push(e);
                    }
                return t.includeSoftDeleted && t.sortDeletedListingsLast ? [...i.filter((e) => !e.soft_deleted), ...i.filter((e) => e.soft_deleted)] : i;
            })
        );
    },
    y = (e) => {
        let [t, n] = i.useState(!1),
            r = i.useMemo(() => e.map(u.W), [e]),
            l = (0, s.Wu)([h.Z], () => r.filter((e) => !h.Z.getDidFetchListingForSubscriptionPlanId(e)), [r]);
        return (
            i.useEffect(() => {
                !t &&
                    l.length > 0 &&
                    (n(!0),
                    Promise.all(l.map((e) => d.vY(e)))
                        .catch(() => {})
                        .then(() => {
                            n(!1);
                        }));
            }, [t, l]),
            { loading: t }
        );
    },
    v = () => {
        let [e, t] = i.useState(!1),
            [n, s] = i.useState(null);
        return {
            error: n,
            submitting: e,
            deleteSubscriptionListing: async (e, n, i) => {
                try {
                    return t(!0), s(null), await d._d(e, n, i), !0;
                } catch (e) {
                    s(e);
                } finally {
                    t(!1);
                }
            }
        };
    },
    S = () => {
        let [e, t] = (0, l.Z)(d.AE),
            { loading: n, error: i } = t;
        return {
            error: i,
            submitting: n,
            archiveSubscriptionListing: e
        };
    },
    m = () => {
        let [e, t] = i.useState(!1),
            [n, s] = i.useState(null);
        return {
            error: n,
            submitting: e,
            publishSubscriptionListing: async (e) => {
                let { guildId: n, groupListingId: i, listingId: r } = e;
                try {
                    return (
                        t(!0),
                        s(null),
                        await d.O0({
                            guildId: n,
                            groupListingId: i,
                            listingId: r,
                            data: { published: !0 }
                        }),
                        !0
                    );
                } catch (e) {
                    s(e);
                } finally {
                    t(!1);
                }
            },
            clearError: () => s(null)
        };
    },
    _ = (e) => (0, s.e7)([h.Z], () => (null != e ? h.Z.getSubscriptionSettings(e) : void 0)),
    E = () => {
        let [e, t] = i.useState(!1),
            [n, s] = i.useState(null);
        return {
            loading: e,
            updateSubscriptionsSettings: i.useCallback(async (e, n) => {
                t(!0), s(null);
                try {
                    await d.W2(e, n);
                } catch (e) {
                    s(e);
                } finally {
                    t(!1);
                }
            }, []),
            error: n
        };
    },
    b = () => {
        let [e, t] = i.useState(!1),
            [n, s] = i.useState(null);
        return {
            loading: e,
            fetchSubscriptionsSettings: i.useCallback(async (e) => {
                t(!0), s(null);
                try {
                    await d.Qb(e);
                } catch (e) {
                    s(e);
                } finally {
                    t(!1);
                }
            }, []),
            error: n
        };
    },
    w = (e) => (0, s.e7)([h.Z], () => (null != e ? h.Z.getSubscriptionTrial(e) : null));
