"use strict";
n.d(t, {
    KE: () => S,
    Tq: () => y,
    XE: () => v,
    Yc: () => T,
    cY: () => p,
    dB: () => h,
    dL: () => C,
    eb: () => E,
    et: () => A,
    hc: () => I,
    uP: () => g,
    uk: () => m,
}),
    n(321073);
var r = n(64700),
    i = n(311907),
    a = n(724442),
    s = n(608461),
    o = n(142120);
n(403362);
var l = n(300233),
    u = n(579908),
    c = n(636194),
    d = n(624456);
let _ = [],
    f = function (e) {
        let {
                refetchOnMount: t = !1,
                includeSoftDeleted: n = !0,
                countryCode: s,
                dontFetchWhileTrue: l,
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            d = (0, i.bG)([o.A], () => o.A.isConnected()),
            _ = (0, i.bG)([c.A], () =>
                null != e ? c.A.getSubscriptionGroupListingsForGuildFetchState(e) : c.e.FETCHED,
            ),
            f = r.useRef(t);
        r.useEffect(() => {
            if (null == e || !d || !0 === l) return;
            let r = c.A.getSubscriptionGroupListingsForGuildFetchState(e);
            (t || r === c.e.NOT_FETCHED) && ((f.current = !1), u.WA(e, { includeSoftDeleted: n, countryCode: s }));
        }, [d, e, n, t, s, l]);
        let p = (0, a.A)(f);
        return { listingsLoaded: _ === c.e.FETCHED && !0 !== p };
    },
    p = function (e) {
        let { includeSoftDeleted: t = !1, includeUnpublished: n = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, i.yK)([c.A], () => {
            if (null == e) return [];
            let r = c.A.getSubscriptionGroupListing(e);
            if (null == r) return [];
            let i = [];
            for (let e of r.subscription_listings_ids) {
                let r = c.A.getSubscriptionListing(e);
                null != r && (!r.soft_deleted || t) && (r.published || n) && i.push(r);
            }
            return i;
        }, [e, t, n]);
    },
    h = (e) => (0, i.bG)([c.A], () => (null != e ? c.A.getSubscriptionListing(e) : null)),
    m = (e) => {
        let t = (0, l.X)("useGroupListingsForGuild");
        return (0, i.bG)([c.A], () => (null != e && t ? c.A.getSubscriptionGroupListingsForGuild(e) : _));
    },
    g = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { includeSoftDeleted: !1, sortDeletedListingsLast: !1 };
        return (
            f(e),
            (0, i.yK)([c.A], () => {
                let n = null != e ? c.A.getSubscriptionGroupListingsForGuild(e) : _,
                    r = [];
                for (let e of n)
                    for (let n of e.subscription_listings_ids) {
                        let e = c.A.getSubscriptionListing(n);
                        null != e && (t.includeSoftDeleted || !e.soft_deleted) && r.push(e);
                    }
                return t.includeSoftDeleted && t.sortDeletedListingsLast
                    ? [...r.filter((e) => !e.soft_deleted), ...r.filter((e) => e.soft_deleted)]
                    : r;
            })
        );
    },
    E = (e) => {
        let [t, n] = r.useState(!1),
            a = r.useMemo(() => e.map(d.M), [e]),
            s = (0, i.yK)([c.A], () => a.filter((e) => !c.A.getDidFetchListingForSubscriptionPlanId(e)), [a]);
        return (
            r.useEffect(() => {
                !t &&
                    s.length > 0 &&
                    (n(!0),
                    Promise.all(s.map((e) => u._R(e)))
                        .catch(() => {})
                        .then(() => {
                            n(!1);
                        }));
            }, [t, s]),
            { loading: t }
        );
    },
    A = () => {
        let [e, t] = r.useState(!1),
            [n, i] = r.useState(null);
        return {
            error: n,
            submitting: e,
            deleteSubscriptionListing: async (e, n, r) => {
                try {
                    return t(!0), i(null), await u.H7(e, n, r), !0;
                } catch (e) {
                    i(e);
                } finally {
                    t(!1);
                }
            },
        };
    },
    I = () => {
        let [e, t] = (0, s.A)(u.mK),
            { loading: n, error: r } = t;
        return { error: r, submitting: n, archiveSubscriptionListing: e };
    },
    T = () => {
        let [e, t] = r.useState(!1),
            [n, i] = r.useState(null);
        return {
            error: n,
            submitting: e,
            publishSubscriptionListing: async (e) => {
                let { guildId: n, groupListingId: r, listingId: a } = e;
                try {
                    return (
                        t(!0),
                        i(null),
                        await u.vW({ guildId: n, groupListingId: r, listingId: a, data: { published: !0 } }),
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
    y = (e) => (0, i.bG)([c.A], () => (null != e ? c.A.getSubscriptionSettings(e) : void 0)),
    S = () => {
        let [e, t] = r.useState(!1),
            [n, i] = r.useState(null);
        return {
            loading: e,
            updateSubscriptionsSettings: r.useCallback(async (e, n) => {
                t(!0), i(null);
                try {
                    await u.DO(e, n);
                } catch (e) {
                    i(e);
                } finally {
                    t(!1);
                }
            }, []),
            error: n,
        };
    },
    v = () => {
        let [e, t] = r.useState(!1),
            [n, i] = r.useState(null);
        return {
            loading: e,
            fetchSubscriptionsSettings: r.useCallback(async (e) => {
                t(!0), i(null);
                try {
                    await u.W5(e);
                } catch (e) {
                    i(e);
                } finally {
                    t(!1);
                }
            }, []),
            error: n,
        };
    },
    C = (e) => (0, i.bG)([c.A], () => (null != e ? c.A.getSubscriptionTrial(e) : null));
