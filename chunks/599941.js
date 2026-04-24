a.d(t, {
    KE: () => E,
    Tq: () => I,
    XE: () => y,
    Yc: () => A,
    cY: () => p,
    dB: () => g,
    dL: () => v,
    eb: () => C,
    et: () => S,
    hc: () => b,
    uP: () => h,
    uk: () => m,
}),
    a(321073);
var n = a(64700),
    i = a(17928),
    r = a(724442),
    l = a(608461),
    o = a(366853);
a(403362);
var s = a(300233),
    d = a(579908),
    c = a(636194),
    u = a(624456);
let _ = [],
    f = function (e) {
        let {
                refetchOnMount: t = !1,
                includeSoftDeleted: a = !0,
                countryCode: l,
                dontFetchWhileTrue: s,
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            u = (0, i.bG)([o.A], () => o.A.isConnected()),
            _ = (0, i.bG)([c.A], () =>
                null != e ? c.A.getSubscriptionGroupListingsForGuildFetchState(e) : c.e.FETCHED,
            ),
            f = n.useRef(t);
        n.useEffect(() => {
            if (null == e || !u || !0 === s) return;
            let n = c.A.getSubscriptionGroupListingsForGuildFetchState(e);
            (t || n === c.e.NOT_FETCHED) && ((f.current = !1), d.WA(e, { includeSoftDeleted: a, countryCode: l }));
        }, [u, e, a, t, l, s]);
        let p = (0, r.A)(f);
        return { listingsLoaded: _ === c.e.FETCHED && !0 !== p };
    },
    p = function (e) {
        let { includeSoftDeleted: t = !1, includeUnpublished: a = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, i.yK)([c.A], () => {
            if (null == e) return [];
            let n = c.A.getSubscriptionGroupListing(e);
            if (null == n) return [];
            let i = [];
            for (let e of n.subscription_listings_ids) {
                let n = c.A.getSubscriptionListing(e);
                null != n && (!n.soft_deleted || t) && (n.published || a) && i.push(n);
            }
            return i;
        }, [e, t, a]);
    },
    g = (e) => (0, i.bG)([c.A], () => (null != e ? c.A.getSubscriptionListing(e) : null)),
    m = (e) => {
        let t = (0, s.X)("useGroupListingsForGuild");
        return (0, i.bG)([c.A], () => (null != e && t ? c.A.getSubscriptionGroupListingsForGuild(e) : _));
    },
    h = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { includeSoftDeleted: !1, sortDeletedListingsLast: !1 };
        return (
            f(e),
            (0, i.yK)([c.A], () => {
                let a = null != e ? c.A.getSubscriptionGroupListingsForGuild(e) : _,
                    n = [];
                for (let e of a)
                    for (let a of e.subscription_listings_ids) {
                        let e = c.A.getSubscriptionListing(a);
                        null != e && (t.includeSoftDeleted || !e.soft_deleted) && n.push(e);
                    }
                return t.includeSoftDeleted && t.sortDeletedListingsLast
                    ? [...n.filter((e) => !e.soft_deleted), ...n.filter((e) => e.soft_deleted)]
                    : n;
            })
        );
    },
    C = (e) => {
        let [t, a] = n.useState(!1),
            r = n.useMemo(() => e.map(u.M), [e]),
            l = (0, i.yK)([c.A], () => r.filter((e) => !c.A.getDidFetchListingForSubscriptionPlanId(e)), [r]);
        return (
            n.useEffect(() => {
                !t &&
                    l.length > 0 &&
                    (a(!0),
                    Promise.all(l.map((e) => d._R(e)))
                        .catch(() => {})
                        .then(() => {
                            a(!1);
                        }));
            }, [t, l]),
            { loading: t }
        );
    },
    S = () => {
        let [e, t] = n.useState(!1),
            [a, i] = n.useState(null);
        return {
            error: a,
            submitting: e,
            deleteSubscriptionListing: async (e, a, n) => {
                try {
                    return t(!0), i(null), await d.H7(e, a, n), !0;
                } catch (e) {
                    i(e);
                } finally {
                    t(!1);
                }
            },
        };
    },
    b = () => {
        let [e, t] = (0, l.A)(d.mK),
            { loading: a, error: n } = t;
        return { error: n, submitting: a, archiveSubscriptionListing: e };
    },
    A = () => {
        let [e, t] = n.useState(!1),
            [a, i] = n.useState(null);
        return {
            error: a,
            submitting: e,
            publishSubscriptionListing: async (e) => {
                let { guildId: a, groupListingId: n, listingId: r } = e;
                try {
                    return (
                        t(!0),
                        i(null),
                        await d.vW({ guildId: a, groupListingId: n, listingId: r, data: { published: !0 } }),
                        !0
                    );
                } catch (e) {
                    i(e);
                } finally {
                    t(!1);
                }
            },
            clearError: () => i(null),
        };
    },
    I = (e) => (0, i.bG)([c.A], () => (null != e ? c.A.getSubscriptionSettings(e) : void 0)),
    E = () => {
        let [e, t] = n.useState(!1),
            [a, i] = n.useState(null);
        return {
            loading: e,
            updateSubscriptionsSettings: n.useCallback(async (e, a) => {
                t(!0), i(null);
                try {
                    await d.DO(e, a);
                } catch (e) {
                    i(e);
                } finally {
                    t(!1);
                }
            }, []),
            error: a,
        };
    },
    y = () => {
        let [e, t] = n.useState(!1),
            [a, i] = n.useState(null);
        return {
            loading: e,
            fetchSubscriptionsSettings: n.useCallback(async (e) => {
                t(!0), i(null);
                try {
                    await d.W5(e);
                } catch (e) {
                    i(e);
                } finally {
                    t(!1);
                }
            }, []),
            error: a,
        };
    },
    v = (e) => (0, i.bG)([c.A], () => (null != e ? c.A.getSubscriptionTrial(e) : null));
