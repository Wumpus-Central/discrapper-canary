n.d(t, {
    KE: () => v,
    Tq: () => A,
    XE: () => S,
    Yc: () => O,
    cY: () => _,
    dB: () => h,
    dL: () => I,
    eb: () => E,
    et: () => b,
    hc: () => y,
    uP: () => g,
    uk: () => m,
}),
    n(896048),
    n(321073);
var r = n(64700),
    i = n(311907),
    a = n(724442),
    s = n(608461),
    o = n(142120);
n(403362);
var l = n(300233),
    c = n(579908),
    u = n(636194),
    d = n(624456);
let f = [],
    p = function (e) {
        let {
                refetchOnMount: t = !1,
                includeSoftDeleted: n = !0,
                countryCode: s,
                dontFetchWhileTrue: l,
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            d = (0, i.bG)([o.A], () => o.A.isConnected()),
            f = (0, i.bG)([u.A], () =>
                null != e ? u.A.getSubscriptionGroupListingsForGuildFetchState(e) : u.e.FETCHED,
            ),
            p = r.useRef(t);
        r.useEffect(() => {
            if (null == e || !d || !0 === l) return;
            let r = u.A.getSubscriptionGroupListingsForGuildFetchState(e);
            (t || r === u.e.NOT_FETCHED) &&
                ((p.current = !1),
                c.WA(e, {
                    includeSoftDeleted: n,
                    countryCode: s,
                }));
        }, [d, e, n, t, s, l]);
        let _ = (0, a.A)(p);
        return {
            listingsLoaded: f === u.e.FETCHED && !0 !== _,
        };
    },
    _ = function (e) {
        let { includeSoftDeleted: t = !1, includeUnpublished: n = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, i.yK)([u.A], () => {
            if (null == e) return [];
            let r = u.A.getSubscriptionGroupListing(e);
            if (null == r) return [];
            let i = [];
            for (let e of r.subscription_listings_ids) {
                let r = u.A.getSubscriptionListing(e);
                null != r && (!r.soft_deleted || t) && (r.published || n) && i.push(r);
            }
            return i;
        }, [e, t, n]);
    },
    h = (e) => (0, i.bG)([u.A], () => (null != e ? u.A.getSubscriptionListing(e) : null)),
    m = (e) => {
        let t = (0, l.X)("useGroupListingsForGuild");
        return (0, i.bG)([u.A], () => (null != e && t ? u.A.getSubscriptionGroupListingsForGuild(e) : f));
    },
    g = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      includeSoftDeleted: !1,
                      sortDeletedListingsLast: !1,
                  };
        return (
            p(e),
            (0, i.yK)([u.A], () => {
                let n = null != e ? u.A.getSubscriptionGroupListingsForGuild(e) : f,
                    r = [];
                for (let e of n)
                    for (let n of e.subscription_listings_ids) {
                        let e = u.A.getSubscriptionListing(n);
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
            s = (0, i.yK)([u.A], () => a.filter((e) => !u.A.getDidFetchListingForSubscriptionPlanId(e)), [a]);
        return (
            r.useEffect(() => {
                !t &&
                    s.length > 0 &&
                    (n(!0),
                    Promise.all(s.map((e) => c._R(e)))
                        .catch(() => {})
                        .then(() => {
                            n(!1);
                        }));
            }, [t, s]),
            {
                loading: t,
            }
        );
    },
    b = () => {
        let [e, t] = r.useState(!1),
            [n, i] = r.useState(null);
        return {
            error: n,
            submitting: e,
            deleteSubscriptionListing: async (e, n, r) => {
                try {
                    return t(!0), i(null), await c.H7(e, n, r), !0;
                } catch (e) {
                    i(e);
                } finally {
                    t(!1);
                }
            },
        };
    },
    y = () => {
        let [e, t] = (0, s.A)(c.mK),
            { loading: n, error: r } = t;
        return {
            error: r,
            submitting: n,
            archiveSubscriptionListing: e,
        };
    },
    O = () => {
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
                        await c.vW({
                            guildId: n,
                            groupListingId: r,
                            listingId: a,
                            data: {
                                published: !0,
                            },
                        }),
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
    A = (e) => (0, i.bG)([u.A], () => (null != e ? u.A.getSubscriptionSettings(e) : void 0)),
    v = () => {
        let [e, t] = r.useState(!1),
            [n, i] = r.useState(null);
        return {
            loading: e,
            updateSubscriptionsSettings: r.useCallback(async (e, n) => {
                t(!0), i(null);
                try {
                    await c.DO(e, n);
                } catch (e) {
                    i(e);
                } finally {
                    t(!1);
                }
            }, []),
            error: n,
        };
    },
    S = () => {
        let [e, t] = r.useState(!1),
            [n, i] = r.useState(null);
        return {
            loading: e,
            fetchSubscriptionsSettings: r.useCallback(async (e) => {
                t(!0), i(null);
                try {
                    await c.W5(e);
                } catch (e) {
                    i(e);
                } finally {
                    t(!1);
                }
            }, []),
            error: n,
        };
    },
    I = (e) => (0, i.bG)([u.A], () => (null != e ? u.A.getSubscriptionTrial(e) : null));
