n.d(t, {
    GG: () => m,
    HQ: () => O,
    JH: () => T,
    QV: () => I,
    YB: () => v,
    _1: () => y,
    _k: () => p,
    jO: () => h,
    oC: () => S,
    qi: () => g,
    r4: () => b,
    sp: () => E,
}),
    n(388685),
    n(539854);
var r = n(473749),
    i = n(442837),
    a = n(990169),
    o = n(935369),
    s = n(38618);
n(823379);
var l = n(730647),
    c = n(423117),
    u = n(289393),
    d = n(697227);
let f = [],
    _ = function (e) {
        let {
                refetchOnMount: t = !1,
                includeSoftDeleted: n = !0,
                countryCode: o,
                dontFetchWhileTrue: l,
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            d = (0, i.e7)([s.Z], () => s.Z.isConnected()),
            f = (0, i.e7)([u.Z], () =>
                null != e ? u.Z.getSubscriptionGroupListingsForGuildFetchState(e) : u.M.FETCHED,
            ),
            _ = r.useRef(t);
        r.useEffect(() => {
            if (null == e || !d || !0 === l) return;
            let r = u.Z.getSubscriptionGroupListingsForGuildFetchState(e);
            (t || r === u.M.NOT_FETCHED) &&
                ((_.current = !1),
                c.FP(e, {
                    includeSoftDeleted: n,
                    countryCode: o,
                }));
        }, [d, e, n, t, o, l]);
        let p = (0, a.Z)(_);
        return { listingsLoaded: f === u.M.FETCHED && !0 !== p };
    },
    p = function (e) {
        let { includeSoftDeleted: t = !1, includeUnpublished: n = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, i.Wu)([u.Z], () => {
            if (null == e) return [];
            let r = u.Z.getSubscriptionGroupListing(e);
            if (null == r) return [];
            let i = [];
            for (let e of r.subscription_listings_ids) {
                let r = u.Z.getSubscriptionListing(e);
                null != r && (!r.soft_deleted || t) && (r.published || n) && i.push(r);
            }
            return i;
        }, [e, t, n]);
    },
    h = (e) => (0, i.e7)([u.Z], () => (null != e ? u.Z.getSubscriptionListing(e) : null)),
    m = (e) => {
        let t = (0, l.f)("useGroupListingsForGuild");
        return (0, i.e7)([u.Z], () => (null != e && t ? u.Z.getSubscriptionGroupListingsForGuild(e) : f));
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
            _(e),
            (0, i.Wu)([u.Z], () => {
                let n = null != e ? u.Z.getSubscriptionGroupListingsForGuild(e) : f,
                    r = [];
                for (let e of n)
                    for (let n of e.subscription_listings_ids) {
                        let e = u.Z.getSubscriptionListing(n);
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
            a = r.useMemo(() => e.map(d.W), [e]),
            o = (0, i.Wu)([u.Z], () => a.filter((e) => !u.Z.getDidFetchListingForSubscriptionPlanId(e)), [a]);
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
    b = () => {
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
            },
        };
    },
    y = () => {
        let [e, t] = (0, o.Z)(c.AE),
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
                        await c.O0({
                            guildId: n,
                            groupListingId: r,
                            listingId: a,
                            data: { published: !0 },
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
    v = (e) => (0, i.e7)([u.Z], () => (null != e ? u.Z.getSubscriptionSettings(e) : void 0)),
    I = () => {
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
            error: n,
        };
    },
    T = () => {
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
            error: n,
        };
    },
    S = (e) => (0, i.e7)([u.Z], () => (null != e ? u.Z.getSubscriptionTrial(e) : null));
