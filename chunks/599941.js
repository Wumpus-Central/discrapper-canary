n.d(t, {
    KE: () => m,
    Tq: () => p,
    XE: () => D,
    Yc: () => O,
    cY: () => A,
    dB: () => T,
    dL: () => P,
    eb: () => R,
    et: () => S,
    hc: () => C,
    uP: () => N,
    uk: () => I,
}),
    n(321073);
var i = n(64700),
    l = n(311907),
    r = n(724442),
    a = n(608461),
    s = n(142120);
n(403362);
var o = n(300233),
    c = n(579908),
    _ = n(636194),
    E = n(624456);
let d = [],
    u = function (e) {
        let {
                refetchOnMount: t = !1,
                includeSoftDeleted: n = !0,
                countryCode: a,
                dontFetchWhileTrue: o,
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            E = (0, l.bG)([s.A], () => s.A.isConnected()),
            d = (0, l.bG)([_.A], () =>
                null != e ? _.A.getSubscriptionGroupListingsForGuildFetchState(e) : _.e.FETCHED,
            ),
            u = i.useRef(t);
        i.useEffect(() => {
            if (null == e || !E || !0 === o) return;
            let i = _.A.getSubscriptionGroupListingsForGuildFetchState(e);
            (t || i === _.e.NOT_FETCHED) && ((u.current = !1), c.WA(e, { includeSoftDeleted: n, countryCode: a }));
        }, [E, e, n, t, a, o]);
        let A = (0, r.A)(u);
        return { listingsLoaded: d === _.e.FETCHED && !0 !== A };
    },
    A = function (e) {
        let { includeSoftDeleted: t = !1, includeUnpublished: n = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, l.yK)([_.A], () => {
            if (null == e) return [];
            let i = _.A.getSubscriptionGroupListing(e);
            if (null == i) return [];
            let l = [];
            for (let e of i.subscription_listings_ids) {
                let i = _.A.getSubscriptionListing(e);
                null != i && (!i.soft_deleted || t) && (i.published || n) && l.push(i);
            }
            return l;
        }, [e, t, n]);
    },
    T = (e) => (0, l.bG)([_.A], () => (null != e ? _.A.getSubscriptionListing(e) : null)),
    I = (e) => {
        let t = (0, o.X)("useGroupListingsForGuild");
        return (0, l.bG)([_.A], () => (null != e && t ? _.A.getSubscriptionGroupListingsForGuild(e) : d));
    },
    N = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { includeSoftDeleted: !1, sortDeletedListingsLast: !1 };
        return (
            u(e),
            (0, l.yK)([_.A], () => {
                let n = null != e ? _.A.getSubscriptionGroupListingsForGuild(e) : d,
                    i = [];
                for (let e of n)
                    for (let n of e.subscription_listings_ids) {
                        let e = _.A.getSubscriptionListing(n);
                        null != e && (t.includeSoftDeleted || !e.soft_deleted) && i.push(e);
                    }
                return t.includeSoftDeleted && t.sortDeletedListingsLast
                    ? [...i.filter((e) => !e.soft_deleted), ...i.filter((e) => e.soft_deleted)]
                    : i;
            })
        );
    },
    R = (e) => {
        let [t, n] = i.useState(!1),
            r = i.useMemo(() => e.map(E.M), [e]),
            a = (0, l.yK)([_.A], () => r.filter((e) => !_.A.getDidFetchListingForSubscriptionPlanId(e)), [r]);
        return (
            i.useEffect(() => {
                !t &&
                    a.length > 0 &&
                    (n(!0),
                    Promise.all(a.map((e) => c._R(e)))
                        .catch(() => {})
                        .then(() => {
                            n(!1);
                        }));
            }, [t, a]),
            { loading: t }
        );
    },
    S = () => {
        let [e, t] = i.useState(!1),
            [n, l] = i.useState(null);
        return {
            error: n,
            submitting: e,
            deleteSubscriptionListing: async (e, n, i) => {
                try {
                    return t(!0), l(null), await c.H7(e, n, i), !0;
                } catch (e) {
                    l(e);
                } finally {
                    t(!1);
                }
            },
        };
    },
    C = () => {
        let [e, t] = (0, a.A)(c.mK),
            { loading: n, error: i } = t;
        return { error: i, submitting: n, archiveSubscriptionListing: e };
    },
    O = () => {
        let [e, t] = i.useState(!1),
            [n, l] = i.useState(null);
        return {
            error: n,
            submitting: e,
            publishSubscriptionListing: async (e) => {
                let { guildId: n, groupListingId: i, listingId: r } = e;
                try {
                    return (
                        t(!0),
                        l(null),
                        await c.vW({ guildId: n, groupListingId: i, listingId: r, data: { published: !0 } }),
                        !0
                    );
                } catch (e) {
                    l(e);
                } finally {
                    t(!1);
                }
            },
            clearError: () => l(null),
        };
    },
    p = (e) => (0, l.bG)([_.A], () => (null != e ? _.A.getSubscriptionSettings(e) : void 0)),
    m = () => {
        let [e, t] = i.useState(!1),
            [n, l] = i.useState(null);
        return {
            loading: e,
            updateSubscriptionsSettings: i.useCallback(async (e, n) => {
                t(!0), l(null);
                try {
                    await c.DO(e, n);
                } catch (e) {
                    l(e);
                } finally {
                    t(!1);
                }
            }, []),
            error: n,
        };
    },
    D = () => {
        let [e, t] = i.useState(!1),
            [n, l] = i.useState(null);
        return {
            loading: e,
            fetchSubscriptionsSettings: i.useCallback(async (e) => {
                t(!0), l(null);
                try {
                    await c.W5(e);
                } catch (e) {
                    l(e);
                } finally {
                    t(!1);
                }
            }, []),
            error: n,
        };
    },
    P = (e) => (0, l.bG)([_.A], () => (null != e ? _.A.getSubscriptionTrial(e) : null));
