n.d(t, {
    KE: () => v,
    Tq: () => I,
    XE: () => b,
    Yc: () => E,
    cY: () => h,
    dB: () => p,
    dL: () => T,
    eb: () => f,
    et: () => x,
    hc: () => C,
    uP: () => A,
    uk: () => g,
}),
    n(321073);
var i = n(64700),
    l = n(311907),
    a = n(724442),
    s = n(608461),
    r = n(142120);
n(403362);
var o = n(300233),
    d = n(579908),
    c = n(636194),
    u = n(624456);
let m = [],
    _ = function (e) {
        let {
                refetchOnMount: t = !1,
                includeSoftDeleted: n = !0,
                countryCode: s,
                dontFetchWhileTrue: o,
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            u = (0, l.bG)([r.A], () => r.A.isConnected()),
            m = (0, l.bG)([c.A], () =>
                null != e ? c.A.getSubscriptionGroupListingsForGuildFetchState(e) : c.e.FETCHED,
            ),
            _ = i.useRef(t);
        i.useEffect(() => {
            if (null == e || !u || !0 === o) return;
            let i = c.A.getSubscriptionGroupListingsForGuildFetchState(e);
            (t || i === c.e.NOT_FETCHED) && ((_.current = !1), d.WA(e, { includeSoftDeleted: n, countryCode: s }));
        }, [u, e, n, t, s, o]);
        let h = (0, a.A)(_);
        return { listingsLoaded: m === c.e.FETCHED && !0 !== h };
    },
    h = function (e) {
        let { includeSoftDeleted: t = !1, includeUnpublished: n = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, l.yK)([c.A], () => {
            if (null == e) return [];
            let i = c.A.getSubscriptionGroupListing(e);
            if (null == i) return [];
            let l = [];
            for (let e of i.subscription_listings_ids) {
                let i = c.A.getSubscriptionListing(e);
                null != i && (!i.soft_deleted || t) && (i.published || n) && l.push(i);
            }
            return l;
        }, [e, t, n]);
    },
    p = (e) => (0, l.bG)([c.A], () => (null != e ? c.A.getSubscriptionListing(e) : null)),
    g = (e) => {
        let t = (0, o.X)("useGroupListingsForGuild");
        return (0, l.bG)([c.A], () => (null != e && t ? c.A.getSubscriptionGroupListingsForGuild(e) : m));
    },
    A = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { includeSoftDeleted: !1, sortDeletedListingsLast: !1 };
        return (
            _(e),
            (0, l.yK)([c.A], () => {
                let n = null != e ? c.A.getSubscriptionGroupListingsForGuild(e) : m,
                    i = [];
                for (let e of n)
                    for (let n of e.subscription_listings_ids) {
                        let e = c.A.getSubscriptionListing(n);
                        null != e && (t.includeSoftDeleted || !e.soft_deleted) && i.push(e);
                    }
                return t.includeSoftDeleted && t.sortDeletedListingsLast
                    ? [...i.filter((e) => !e.soft_deleted), ...i.filter((e) => e.soft_deleted)]
                    : i;
            })
        );
    },
    f = (e) => {
        let [t, n] = i.useState(!1),
            a = i.useMemo(() => e.map(u.M), [e]),
            s = (0, l.yK)([c.A], () => a.filter((e) => !c.A.getDidFetchListingForSubscriptionPlanId(e)), [a]);
        return (
            i.useEffect(() => {
                !t &&
                    s.length > 0 &&
                    (n(!0),
                    Promise.all(s.map((e) => d._R(e)))
                        .catch(() => {})
                        .then(() => {
                            n(!1);
                        }));
            }, [t, s]),
            { loading: t }
        );
    },
    x = () => {
        let [e, t] = i.useState(!1),
            [n, l] = i.useState(null);
        return {
            error: n,
            submitting: e,
            deleteSubscriptionListing: async (e, n, i) => {
                try {
                    return t(!0), l(null), await d.H7(e, n, i), !0;
                } catch (e) {
                    l(e);
                } finally {
                    t(!1);
                }
            },
        };
    },
    C = () => {
        let [e, t] = (0, s.A)(d.mK),
            { loading: n, error: i } = t;
        return { error: i, submitting: n, archiveSubscriptionListing: e };
    },
    E = () => {
        let [e, t] = i.useState(!1),
            [n, l] = i.useState(null);
        return {
            error: n,
            submitting: e,
            publishSubscriptionListing: async (e) => {
                let { guildId: n, groupListingId: i, listingId: a } = e;
                try {
                    return (
                        t(!0),
                        l(null),
                        await d.vW({ guildId: n, groupListingId: i, listingId: a, data: { published: !0 } }),
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
    I = (e) => (0, l.bG)([c.A], () => (null != e ? c.A.getSubscriptionSettings(e) : void 0)),
    v = () => {
        let [e, t] = i.useState(!1),
            [n, l] = i.useState(null);
        return {
            loading: e,
            updateSubscriptionsSettings: i.useCallback(async (e, n) => {
                t(!0), l(null);
                try {
                    await d.DO(e, n);
                } catch (e) {
                    l(e);
                } finally {
                    t(!1);
                }
            }, []),
            error: n,
        };
    },
    b = () => {
        let [e, t] = i.useState(!1),
            [n, l] = i.useState(null);
        return {
            loading: e,
            fetchSubscriptionsSettings: i.useCallback(async (e) => {
                t(!0), l(null);
                try {
                    await d.W5(e);
                } catch (e) {
                    l(e);
                } finally {
                    t(!1);
                }
            }, []),
            error: n,
        };
    },
    T = (e) => (0, l.bG)([c.A], () => (null != e ? c.A.getSubscriptionTrial(e) : null));
