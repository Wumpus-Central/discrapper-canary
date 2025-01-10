n.d(e, {
    GG: function () {
        return g;
    },
    HQ: function () {
        return C;
    },
    JH: function () {
        return N;
    },
    QV: function () {
        return v;
    },
    YB: function () {
        return T;
    },
    _1: function () {
        return h;
    },
    _k: function () {
        return E;
    },
    jO: function () {
        return p;
    },
    oC: function () {
        return A;
    },
    qi: function () {
        return S;
    },
    r4: function () {
        return I;
    },
    sp: function () {
        return m;
    }
}),
    n(47120),
    n(653041);
var i = n(192379),
    r = n(442837),
    l = n(990169),
    o = n(935369),
    u = n(38618);
n(823379);
var a = n(730647),
    s = n(423117),
    c = n(289393),
    d = n(697227);
let f = [],
    _ = function (t) {
        let { refetchOnMount: e = !1, includeSoftDeleted: n = !0, countryCode: o, dontFetchWhileTrue: a } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            d = (0, r.e7)([u.Z], () => u.Z.isConnected()),
            f = (0, r.e7)([c.Z], () => (null != t ? c.Z.getSubscriptionGroupListingsForGuildFetchState(t) : c.M.FETCHED)),
            _ = i.useRef(e);
        i.useEffect(() => {
            if (null == t || !d || !0 === a) return;
            let i = c.Z.getSubscriptionGroupListingsForGuildFetchState(t);
            (e || i === c.M.NOT_FETCHED) &&
                ((_.current = !1),
                s.FP(t, {
                    includeSoftDeleted: n,
                    countryCode: o
                }));
        }, [d, t, n, e, o, a]);
        let E = (0, l.Z)(_);
        return { listingsLoaded: f === c.M.FETCHED && !0 !== E };
    },
    E = function (t) {
        let { includeSoftDeleted: e = !1, includeUnpublished: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, r.Wu)(
            [c.Z],
            () => {
                if (null == t) return [];
                let i = c.Z.getSubscriptionGroupListing(t);
                if (null == i) return [];
                let r = [];
                for (let t of i.subscription_listings_ids) {
                    let i = c.Z.getSubscriptionListing(t);
                    if (null != i && (!i.soft_deleted || !!e)) (i.published || n) && r.push(i);
                }
                return r;
            },
            [t, e, n]
        );
    },
    p = (t) => (0, r.e7)([c.Z], () => (null != t ? c.Z.getSubscriptionListing(t) : null)),
    g = (t) => {
        let e = (0, a.f)('useGroupListingsForGuild');
        return (0, r.e7)([c.Z], () => (null != t && e ? c.Z.getSubscriptionGroupListingsForGuild(t) : f));
    },
    S = function (t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      includeSoftDeleted: !1,
                      sortDeletedListingsLast: !1
                  };
        return (
            _(t),
            (0, r.Wu)([c.Z], () => {
                let n = null != t ? c.Z.getSubscriptionGroupListingsForGuild(t) : f,
                    i = [];
                for (let t of n)
                    for (let n of t.subscription_listings_ids) {
                        let t = c.Z.getSubscriptionListing(n);
                        null != t && (e.includeSoftDeleted || !t.soft_deleted) && i.push(t);
                    }
                return e.includeSoftDeleted && e.sortDeletedListingsLast ? [...i.filter((t) => !t.soft_deleted), ...i.filter((t) => t.soft_deleted)] : i;
            })
        );
    },
    m = (t) => {
        let [e, n] = i.useState(!1),
            l = i.useMemo(() => t.map(d.W), [t]),
            o = (0, r.Wu)([c.Z], () => l.filter((t) => !c.Z.getDidFetchListingForSubscriptionPlanId(t)), [l]);
        return (
            i.useEffect(() => {
                !e &&
                    o.length > 0 &&
                    (n(!0),
                    Promise.all(o.map((t) => s.vY(t)))
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
                    return e(!0), r(null), await s._d(t, n, i), !0;
                } catch (t) {
                    r(t);
                } finally {
                    e(!1);
                }
            }
        };
    },
    h = () => {
        let [t, e] = (0, o.Z)(s.AE),
            { loading: n, error: i } = e;
        return {
            error: i,
            submitting: n,
            archiveSubscriptionListing: t
        };
    },
    C = () => {
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
                        await s.O0({
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
    T = (t) => (0, r.e7)([c.Z], () => (null != t ? c.Z.getSubscriptionSettings(t) : void 0)),
    v = () => {
        let [t, e] = i.useState(!1),
            [n, r] = i.useState(null);
        return {
            loading: t,
            updateSubscriptionsSettings: i.useCallback(async (t, n) => {
                e(!0), r(null);
                try {
                    await s.W2(t, n);
                } catch (t) {
                    r(t);
                } finally {
                    e(!1);
                }
            }, []),
            error: n
        };
    },
    N = () => {
        let [t, e] = i.useState(!1),
            [n, r] = i.useState(null);
        return {
            loading: t,
            fetchSubscriptionsSettings: i.useCallback(async (t) => {
                e(!0), r(null);
                try {
                    await s.Qb(t);
                } catch (t) {
                    r(t);
                } finally {
                    e(!1);
                }
            }, []),
            error: n
        };
    },
    A = (t) => (0, r.e7)([c.Z], () => (null != t ? c.Z.getSubscriptionTrial(t) : null));
