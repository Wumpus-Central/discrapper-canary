i.d(t, {
    KE: () => v,
    Tq: () => L,
    XE: () => x,
    Yc: () => C,
    cY: () => g,
    dB: () => h,
    dL: () => E,
    eb: () => m,
    et: () => S,
    hc: () => y,
    uP: () => b,
    uk: () => p,
}),
    i(321073);
var n = i(64700),
    l = i(17928),
    s = i(724442),
    r = i(608461),
    a = i(617710);
i(403362);
var u = i(300233),
    o = i(579908),
    c = i(636194),
    d = i(624456);
let f = [],
    A = function (e) {
        let {
                refetchOnMount: t = !1,
                includeSoftDeleted: i = !0,
                countryCode: r,
                dontFetchWhileTrue: u,
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            d = (0, l.bG)([a.A], () => a.A.isConnected()),
            f = (0, l.bG)([c.A], () =>
                null != e ? c.A.getSubscriptionGroupListingsForGuildFetchState(e) : c.e.FETCHED,
            ),
            A = n.useRef(t);
        n.useEffect(() => {
            if (null == e || !d || !0 === u) return;
            let n = c.A.getSubscriptionGroupListingsForGuildFetchState(e);
            (t || n === c.e.NOT_FETCHED) && ((A.current = !1), o.WA(e, { includeSoftDeleted: i, countryCode: r }));
        }, [d, e, i, t, r, u]);
        let g = (0, s.A)(A);
        return { listingsLoaded: f === c.e.FETCHED && !0 !== g };
    },
    g = function (e) {
        let { includeSoftDeleted: t = !1, includeUnpublished: i = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, l.yK)([c.A], () => {
            if (null == e) return [];
            let n = c.A.getSubscriptionGroupListing(e);
            if (null == n) return [];
            let l = [];
            for (let e of n.subscription_listings_ids) {
                let n = c.A.getSubscriptionListing(e);
                null != n && (!n.soft_deleted || t) && (n.published || i) && l.push(n);
            }
            return l;
        }, [e, t, i]);
    },
    h = (e) => (0, l.bG)([c.A], () => (null != e ? c.A.getSubscriptionListing(e) : null)),
    p = (e) => {
        let t = (0, u.X)("useGroupListingsForGuild");
        return (0, l.bG)([c.A], () => (null != e && t ? c.A.getSubscriptionGroupListingsForGuild(e) : f));
    },
    b = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { includeSoftDeleted: !1, sortDeletedListingsLast: !1 };
        return (
            A(e),
            (0, l.yK)([c.A], () => {
                let i = null != e ? c.A.getSubscriptionGroupListingsForGuild(e) : f,
                    n = [];
                for (let e of i)
                    for (let i of e.subscription_listings_ids) {
                        let e = c.A.getSubscriptionListing(i);
                        null != e && (t.includeSoftDeleted || !e.soft_deleted) && n.push(e);
                    }
                return t.includeSoftDeleted && t.sortDeletedListingsLast
                    ? [...n.filter((e) => !e.soft_deleted), ...n.filter((e) => e.soft_deleted)]
                    : n;
            })
        );
    },
    m = (e) => {
        let [t, i] = n.useState(!1),
            s = n.useMemo(() => e.map(d.M), [e]),
            r = (0, l.yK)([c.A], () => s.filter((e) => !c.A.getDidFetchListingForSubscriptionPlanId(e)), [s]);
        return (
            n.useEffect(() => {
                !t &&
                    r.length > 0 &&
                    (i(!0),
                    Promise.all(r.map((e) => o._R(e)))
                        .catch(() => {})
                        .then(() => {
                            i(!1);
                        }));
            }, [t, r]),
            { loading: t }
        );
    },
    S = () => {
        let [e, t] = n.useState(!1),
            [i, l] = n.useState(null);
        return {
            error: i,
            submitting: e,
            deleteSubscriptionListing: async (e, i, n) => {
                try {
                    return t(!0), l(null), await o.H7(e, i, n), !0;
                } catch (e) {
                    l(e);
                } finally {
                    t(!1);
                }
            },
        };
    },
    y = () => {
        let [e, t] = (0, r.A)(o.mK),
            { loading: i, error: n } = t;
        return { error: n, submitting: i, archiveSubscriptionListing: e };
    },
    C = () => {
        let [e, t] = n.useState(!1),
            [i, l] = n.useState(null);
        return {
            error: i,
            submitting: e,
            publishSubscriptionListing: async (e) => {
                let { guildId: i, groupListingId: n, listingId: s } = e;
                try {
                    return (
                        t(!0),
                        l(null),
                        await o.vW({ guildId: i, groupListingId: n, listingId: s, data: { published: !0 } }),
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
    L = (e) => (0, l.bG)([c.A], () => (null != e ? c.A.getSubscriptionSettings(e) : void 0)),
    v = () => {
        let [e, t] = n.useState(!1),
            [i, l] = n.useState(null);
        return {
            loading: e,
            updateSubscriptionsSettings: n.useCallback(async (e, i) => {
                t(!0), l(null);
                try {
                    await o.DO(e, i);
                } catch (e) {
                    l(e);
                } finally {
                    t(!1);
                }
            }, []),
            error: i,
        };
    },
    x = () => {
        let [e, t] = n.useState(!1),
            [i, l] = n.useState(null);
        return {
            loading: e,
            fetchSubscriptionsSettings: n.useCallback(async (e) => {
                t(!0), l(null);
                try {
                    await o.W5(e);
                } catch (e) {
                    l(e);
                } finally {
                    t(!1);
                }
            }, []),
            error: i,
        };
    },
    E = (e) => (0, l.bG)([c.A], () => (null != e ? c.A.getSubscriptionTrial(e) : null));
