n.d(t, {
    GG: () => O,
    HQ: () => m,
    JH: () => g,
    QV: () => A,
    YB: () => R,
    _1: () => S,
    _k: () => I,
    jO: () => T,
    oC: () => P,
    qi: () => p,
    r4: () => f,
    sp: () => N,
}),
    n(388685),
    n(539854);
var r = n(647438),
    i = n(442837),
    l = n(990169),
    a = n(935369),
    o = n(38618);
n(823379);
var c = n(730647),
    s = n(423117),
    u = n(289393),
    d = n(697227);
let _ = [],
    E = function (e) {
        let {
                refetchOnMount: t = !1,
                includeSoftDeleted: n = !0,
                countryCode: a,
                dontFetchWhileTrue: c,
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            d = (0, i.e7)([o.Z], () => o.Z.isConnected()),
            _ = (0, i.e7)([u.Z], () =>
                null != e ? u.Z.getSubscriptionGroupListingsForGuildFetchState(e) : u.M.FETCHED,
            ),
            E = r.useRef(t);
        r.useEffect(() => {
            if (null == e || !d || !0 === c) return;
            let r = u.Z.getSubscriptionGroupListingsForGuildFetchState(e);
            (t || r === u.M.NOT_FETCHED) &&
                ((E.current = !1),
                s.FP(e, {
                    includeSoftDeleted: n,
                    countryCode: a,
                }));
        }, [d, e, n, t, a, c]);
        let I = (0, l.Z)(E);
        return { listingsLoaded: _ === u.M.FETCHED && !0 !== I };
    },
    I = function (e) {
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
    T = (e) => (0, i.e7)([u.Z], () => (null != e ? u.Z.getSubscriptionListing(e) : null)),
    O = (e) => {
        let t = (0, c.f)("useGroupListingsForGuild");
        return (0, i.e7)([u.Z], () => (null != e && t ? u.Z.getSubscriptionGroupListingsForGuild(e) : _));
    },
    p = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      includeSoftDeleted: !1,
                      sortDeletedListingsLast: !1,
                  };
        return (
            E(e),
            (0, i.Wu)([u.Z], () => {
                let n = null != e ? u.Z.getSubscriptionGroupListingsForGuild(e) : _,
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
    N = (e) => {
        let [t, n] = r.useState(!1),
            l = r.useMemo(() => e.map(d.W), [e]),
            a = (0, i.Wu)([u.Z], () => l.filter((e) => !u.Z.getDidFetchListingForSubscriptionPlanId(e)), [l]);
        return (
            r.useEffect(() => {
                !t &&
                    a.length > 0 &&
                    (n(!0),
                    Promise.all(a.map((e) => s.vY(e)))
                        .catch(() => {})
                        .then(() => {
                            n(!1);
                        }));
            }, [t, a]),
            { loading: t }
        );
    },
    f = () => {
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
            },
        };
    },
    S = () => {
        let [e, t] = (0, a.Z)(s.AE),
            { loading: n, error: r } = t;
        return {
            error: r,
            submitting: n,
            archiveSubscriptionListing: e,
        };
    },
    m = () => {
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
    R = (e) => (0, i.e7)([u.Z], () => (null != e ? u.Z.getSubscriptionSettings(e) : void 0)),
    A = () => {
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
            error: n,
        };
    },
    g = () => {
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
            error: n,
        };
    },
    P = (e) => (0, i.e7)([u.Z], () => (null != e ? u.Z.getSubscriptionTrial(e) : null));
