n.d(e, {
    GG: function () {
        return p;
    },
    HQ: function () {
        return h;
    },
    JH: function () {
        return v;
    },
    QV: function () {
        return T;
    },
    YB: function () {
        return C;
    },
    _1: function () {
        return S;
    },
    _k: function () {
        return _;
    },
    jO: function () {
        return E;
    },
    oC: function () {
        return N;
    },
    qi: function () {
        return m;
    },
    r4: function () {
        return I;
    },
    sp: function () {
        return g;
    }
}),
    n(47120),
    n(653041);
var i = n(192379),
    r = n(442837),
    l = n(935369),
    o = n(38618);
n(823379);
var u = n(730647),
    a = n(423117),
    s = n(289393),
    c = n(697227);
let d = [],
    f = function (t) {
        let { refetchOnMount: e = !1, includeSoftDeleted: n = !0, countryCode: l, dontFetchWhileTrue: u } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            c = (0, r.e7)([o.Z], () => o.Z.isConnected()),
            d = (0, r.e7)([s.Z], () => (null != t ? s.Z.getSubscriptionGroupListingsForGuildFetchState(t) : s.M.FETCHED)),
            f = i.useRef(e);
        return (
            i.useEffect(() => {
                if (null == t || !c || !0 === u) return;
                let i = s.Z.getSubscriptionGroupListingsForGuildFetchState(t);
                (e || i === s.M.NOT_FETCHED) &&
                    ((f.current = !1),
                    a.FP(t, {
                        includeSoftDeleted: n,
                        countryCode: l
                    }));
            }, [c, t, n, e, l, u]),
            { listingsLoaded: d === s.M.FETCHED && !0 !== f.current }
        );
    },
    _ = function (t) {
        let { includeSoftDeleted: e = !1, includeUnpublished: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, r.Wu)(
            [s.Z],
            () => {
                if (null == t) return [];
                let i = s.Z.getSubscriptionGroupListing(t);
                if (null == i) return [];
                let r = [];
                for (let t of i.subscription_listings_ids) {
                    let i = s.Z.getSubscriptionListing(t);
                    if (null != i && (!i.soft_deleted || !!e)) (i.published || n) && r.push(i);
                }
                return r;
            },
            [t, e, n]
        );
    },
    E = (t) => (0, r.e7)([s.Z], () => (null != t ? s.Z.getSubscriptionListing(t) : null)),
    p = (t) => {
        let e = (0, u.f)('useGroupListingsForGuild');
        return (0, r.e7)([s.Z], () => (null != t && e ? s.Z.getSubscriptionGroupListingsForGuild(t) : d));
    },
    m = function (t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      includeSoftDeleted: !1,
                      sortDeletedListingsLast: !1
                  };
        return (
            f(t),
            (0, r.Wu)([s.Z], () => {
                let n = null != t ? s.Z.getSubscriptionGroupListingsForGuild(t) : d,
                    i = [];
                for (let t of n)
                    for (let n of t.subscription_listings_ids) {
                        let t = s.Z.getSubscriptionListing(n);
                        null != t && (e.includeSoftDeleted || !t.soft_deleted) && i.push(t);
                    }
                return e.includeSoftDeleted && e.sortDeletedListingsLast ? [...i.filter((t) => !t.soft_deleted), ...i.filter((t) => t.soft_deleted)] : i;
            })
        );
    },
    g = (t) => {
        let [e, n] = i.useState(!1),
            l = i.useMemo(() => t.map(c.W), [t]),
            o = (0, r.Wu)([s.Z], () => l.filter((t) => !s.Z.getDidFetchListingForSubscriptionPlanId(t)), [l]);
        return (
            i.useEffect(() => {
                !e &&
                    o.length > 0 &&
                    (n(!0),
                    Promise.all(o.map((t) => a.vY(t)))
                        .catch(() => {})
                        .then(() => {
                            n(!1);
                        }));
            }, [e, o]),
            { loading: e }
        );
    },
    I = () => {
        let [t, e] = i.useState(!1),
            [n, r] = i.useState(null);
        return {
            error: n,
            submitting: t,
            deleteSubscriptionListing: async (t, n, i) => {
                try {
                    return e(!0), r(null), await a._d(t, n, i), !0;
                } catch (t) {
                    r(t);
                } finally {
                    e(!1);
                }
            }
        };
    },
    S = () => {
        let [t, e] = (0, l.Z)(a.AE),
            { loading: n, error: i } = e;
        return {
            error: i,
            submitting: n,
            archiveSubscriptionListing: t
        };
    },
    h = () => {
        let [t, e] = i.useState(!1),
            [n, r] = i.useState(null);
        return {
            error: n,
            submitting: t,
            publishSubscriptionListing: async (t) => {
                let { guildId: n, groupListingId: i, listingId: l } = t;
                try {
                    return (
                        e(!0),
                        r(null),
                        await a.O0({
                            guildId: n,
                            groupListingId: i,
                            listingId: l,
                            data: { published: !0 }
                        }),
                        !0
                    );
                } catch (t) {
                    r(t);
                } finally {
                    e(!1);
                }
            },
            clearError: () => r(null)
        };
    },
    C = (t) => (0, r.e7)([s.Z], () => (null != t ? s.Z.getSubscriptionSettings(t) : void 0)),
    T = () => {
        let [t, e] = i.useState(!1),
            [n, r] = i.useState(null);
        return {
            loading: t,
            updateSubscriptionsSettings: i.useCallback(async (t, n) => {
                e(!0), r(null);
                try {
                    await a.W2(t, n);
                } catch (t) {
                    r(t);
                } finally {
                    e(!1);
                }
            }, []),
            error: n
        };
    },
    v = () => {
        let [t, e] = i.useState(!1),
            [n, r] = i.useState(null);
        return {
            loading: t,
            fetchSubscriptionsSettings: i.useCallback(async (t) => {
                e(!0), r(null);
                try {
                    await a.Qb(t);
                } catch (t) {
                    r(t);
                } finally {
                    e(!1);
                }
            }, []),
            error: n
        };
    },
    N = (t) => (0, r.e7)([s.Z], () => (null != t ? s.Z.getSubscriptionTrial(t) : null));
