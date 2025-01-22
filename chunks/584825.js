n.d(t, {
    GG: function () {
        return p;
    },
    HQ: function () {
        return v;
    },
    JH: function () {
        return N;
    },
    QV: function () {
        return T;
    },
    YB: function () {
        return m;
    },
    _1: function () {
        return S;
    },
    _k: function () {
        return g;
    },
    jO: function () {
        return C;
    },
    oC: function () {
        return A;
    },
    qi: function () {
        return E;
    },
    r4: function () {
        return I;
    },
    sp: function () {
        return _;
    }
}),
    n(47120),
    n(653041);
var i = n(192379),
    r = n(442837),
    l = n(990169),
    o = n(935369),
    s = n(38618);
n(823379);
var a = n(730647),
    u = n(423117),
    d = n(289393),
    c = n(697227);
let h = [],
    f = function (e) {
        let { refetchOnMount: t = !1, includeSoftDeleted: n = !0, countryCode: o, dontFetchWhileTrue: a } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            c = (0, r.e7)([s.Z], () => s.Z.isConnected()),
            h = (0, r.e7)([d.Z], () => (null != e ? d.Z.getSubscriptionGroupListingsForGuildFetchState(e) : d.M.FETCHED)),
            f = i.useRef(t);
        i.useEffect(() => {
            if (null == e || !c || !0 === a) return;
            let i = d.Z.getSubscriptionGroupListingsForGuildFetchState(e);
            (t || i === d.M.NOT_FETCHED) &&
                ((f.current = !1),
                u.FP(e, {
                    includeSoftDeleted: n,
                    countryCode: o
                }));
        }, [c, e, n, t, o, a]);
        let g = (0, l.Z)(f);
        return { listingsLoaded: h === d.M.FETCHED && !0 !== g };
    },
    g = function (e) {
        let { includeSoftDeleted: t = !1, includeUnpublished: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, r.Wu)(
            [d.Z],
            () => {
                if (null == e) return [];
                let i = d.Z.getSubscriptionGroupListing(e);
                if (null == i) return [];
                let r = [];
                for (let e of i.subscription_listings_ids) {
                    let i = d.Z.getSubscriptionListing(e);
                    if (null != i && (!i.soft_deleted || !!t)) (i.published || n) && r.push(i);
                }
                return r;
            },
            [e, t, n]
        );
    },
    C = (e) => (0, r.e7)([d.Z], () => (null != e ? d.Z.getSubscriptionListing(e) : null)),
    p = (e) => {
        let t = (0, a.f)('useGroupListingsForGuild');
        return (0, r.e7)([d.Z], () => (null != e && t ? d.Z.getSubscriptionGroupListingsForGuild(e) : h));
    },
    E = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      includeSoftDeleted: !1,
                      sortDeletedListingsLast: !1
                  };
        return (
            f(e),
            (0, r.Wu)([d.Z], () => {
                let n = null != e ? d.Z.getSubscriptionGroupListingsForGuild(e) : h,
                    i = [];
                for (let e of n)
                    for (let n of e.subscription_listings_ids) {
                        let e = d.Z.getSubscriptionListing(n);
                        null != e && (t.includeSoftDeleted || !e.soft_deleted) && i.push(e);
                    }
                return t.includeSoftDeleted && t.sortDeletedListingsLast ? [...i.filter((e) => !e.soft_deleted), ...i.filter((e) => e.soft_deleted)] : i;
            })
        );
    },
    _ = (e) => {
        let [t, n] = i.useState(!1),
            l = i.useMemo(() => e.map(c.W), [e]),
            o = (0, r.Wu)([d.Z], () => l.filter((e) => !d.Z.getDidFetchListingForSubscriptionPlanId(e)), [l]);
        return (
            i.useEffect(() => {
                !t &&
                    o.length > 0 &&
                    (n(!0),
                    Promise.all(o.map((e) => u.vY(e)))
                        .catch(() => {})
                        .then(() => {
                            n(!1);
                        }));
            }, [t, o]),
            { loading: t }
        );
    },
    I = () => {
        let [e, t] = i.useState(!1),
            [n, r] = i.useState(null);
        return {
            error: n,
            submitting: e,
            deleteSubscriptionListing: async (e, n, i) => {
                try {
                    return t(!0), r(null), await u._d(e, n, i), !0;
                } catch (e) {
                    r(e);
                } finally {
                    t(!1);
                }
            }
        };
    },
    S = () => {
        let [e, t] = (0, o.Z)(u.AE),
            { loading: n, error: i } = t;
        return {
            error: i,
            submitting: n,
            archiveSubscriptionListing: e
        };
    },
    v = () => {
        let [e, t] = i.useState(!1),
            [n, r] = i.useState(null);
        return {
            error: n,
            submitting: e,
            publishSubscriptionListing: async (e) => {
                let { guildId: n, groupListingId: i, listingId: l } = e;
                try {
                    return (
                        t(!0),
                        r(null),
                        await u.O0({
                            guildId: n,
                            groupListingId: i,
                            listingId: l,
                            data: { published: !0 }
                        }),
                        !0
                    );
                } catch (e) {
                    r(e);
                } finally {
                    t(!1);
                }
            },
            clearError: () => r(null)
        };
    },
    m = (e) => (0, r.e7)([d.Z], () => (null != e ? d.Z.getSubscriptionSettings(e) : void 0)),
    T = () => {
        let [e, t] = i.useState(!1),
            [n, r] = i.useState(null);
        return {
            loading: e,
            updateSubscriptionsSettings: i.useCallback(async (e, n) => {
                t(!0), r(null);
                try {
                    await u.W2(e, n);
                } catch (e) {
                    r(e);
                } finally {
                    t(!1);
                }
            }, []),
            error: n
        };
    },
    N = () => {
        let [e, t] = i.useState(!1),
            [n, r] = i.useState(null);
        return {
            loading: e,
            fetchSubscriptionsSettings: i.useCallback(async (e) => {
                t(!0), r(null);
                try {
                    await u.Qb(e);
                } catch (e) {
                    r(e);
                } finally {
                    t(!1);
                }
            }, []),
            error: n
        };
    },
    A = (e) => (0, r.e7)([d.Z], () => (null != e ? d.Z.getSubscriptionTrial(e) : null));
