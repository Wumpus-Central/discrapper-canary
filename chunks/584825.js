e.d(n, {
    GG: function () {
        return g;
    },
    HQ: function () {
        return T;
    },
    JH: function () {
        return N;
    },
    QV: function () {
        return v;
    },
    YB: function () {
        return h;
    },
    _1: function () {
        return I;
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
        return C;
    },
    sp: function () {
        return m;
    }
}),
    e(47120),
    e(653041);
var i = e(192379),
    r = e(442837),
    l = e(990169),
    u = e(935369),
    o = e(38618);
e(823379);
var a = e(730647),
    s = e(423117),
    c = e(289393),
    d = e(697227);
let f = [],
    _ = function (t) {
        let { refetchOnMount: n = !1, includeSoftDeleted: e = !0, countryCode: u, dontFetchWhileTrue: a } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            d = (0, r.e7)([o.Z], () => o.Z.isConnected()),
            f = (0, r.e7)([c.Z], () => (null != t ? c.Z.getSubscriptionGroupListingsForGuildFetchState(t) : c.M.FETCHED)),
            _ = i.useRef(n);
        i.useEffect(() => {
            if (null == t || !d || !0 === a) return;
            let i = c.Z.getSubscriptionGroupListingsForGuildFetchState(t);
            (n || i === c.M.NOT_FETCHED) &&
                ((_.current = !1),
                s.FP(t, {
                    includeSoftDeleted: e,
                    countryCode: u
                }));
        }, [d, t, e, n, u, a]);
        let E = (0, l.Z)(_);
        return { listingsLoaded: f === c.M.FETCHED && !0 !== E };
    },
    E = function (t) {
        let { includeSoftDeleted: n = !1, includeUnpublished: e = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, r.Wu)(
            [c.Z],
            () => {
                if (null == t) return [];
                let i = c.Z.getSubscriptionGroupListing(t);
                if (null == i) return [];
                let r = [];
                for (let t of i.subscription_listings_ids) {
                    let i = c.Z.getSubscriptionListing(t);
                    if (null != i && (!i.soft_deleted || !!n)) (i.published || e) && r.push(i);
                }
                return r;
            },
            [t, n, e]
        );
    },
    p = (t) => (0, r.e7)([c.Z], () => (null != t ? c.Z.getSubscriptionListing(t) : null)),
    g = (t) => {
        let n = (0, a.f)('useGroupListingsForGuild');
        return (0, r.e7)([c.Z], () => (null != t && n ? c.Z.getSubscriptionGroupListingsForGuild(t) : f));
    },
    S = function (t) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      includeSoftDeleted: !1,
                      sortDeletedListingsLast: !1
                  };
        return (
            _(t),
            (0, r.Wu)([c.Z], () => {
                let e = null != t ? c.Z.getSubscriptionGroupListingsForGuild(t) : f,
                    i = [];
                for (let t of e)
                    for (let e of t.subscription_listings_ids) {
                        let t = c.Z.getSubscriptionListing(e);
                        null != t && (n.includeSoftDeleted || !t.soft_deleted) && i.push(t);
                    }
                return n.includeSoftDeleted && n.sortDeletedListingsLast ? [...i.filter((t) => !t.soft_deleted), ...i.filter((t) => t.soft_deleted)] : i;
            })
        );
    },
    m = (t) => {
        let [n, e] = i.useState(!1),
            l = i.useMemo(() => t.map(d.W), [t]),
            u = (0, r.Wu)([c.Z], () => l.filter((t) => !c.Z.getDidFetchListingForSubscriptionPlanId(t)), [l]);
        return (
            i.useEffect(() => {
                !n &&
                    u.length > 0 &&
                    (e(!0),
                    Promise.all(u.map((t) => s.vY(t)))
                        .catch(() => {})
                        .then(() => {
                            e(!1);
                        }));
            }, [n, u]),
            { loading: n }
        );
    },
    C = () => {
        let [t, n] = i.useState(!1),
            [e, r] = i.useState(null);
        return {
            error: e,
            submitting: t,
            deleteSubscriptionListing: async (t, e, i) => {
                try {
                    return n(!0), r(null), await s._d(t, e, i), !0;
                } catch (t) {
                    r(t);
                } finally {
                    n(!1);
                }
            }
        };
    },
    I = () => {
        let [t, n] = (0, u.Z)(s.AE),
            { loading: e, error: i } = n;
        return {
            error: i,
            submitting: e,
            archiveSubscriptionListing: t
        };
    },
    T = () => {
        let [t, n] = i.useState(!1),
            [e, r] = i.useState(null);
        return {
            error: e,
            submitting: t,
            publishSubscriptionListing: async (t) => {
                let { guildId: e, groupListingId: i, listingId: l } = t;
                try {
                    return (
                        n(!0),
                        r(null),
                        await s.O0({
                            guildId: e,
                            groupListingId: i,
                            listingId: l,
                            data: { published: !0 }
                        }),
                        !0
                    );
                } catch (t) {
                    r(t);
                } finally {
                    n(!1);
                }
            },
            clearError: () => r(null)
        };
    },
    h = (t) => (0, r.e7)([c.Z], () => (null != t ? c.Z.getSubscriptionSettings(t) : void 0)),
    v = () => {
        let [t, n] = i.useState(!1),
            [e, r] = i.useState(null);
        return {
            loading: t,
            updateSubscriptionsSettings: i.useCallback(async (t, e) => {
                n(!0), r(null);
                try {
                    await s.W2(t, e);
                } catch (t) {
                    r(t);
                } finally {
                    n(!1);
                }
            }, []),
            error: e
        };
    },
    N = () => {
        let [t, n] = i.useState(!1),
            [e, r] = i.useState(null);
        return {
            loading: t,
            fetchSubscriptionsSettings: i.useCallback(async (t) => {
                n(!0), r(null);
                try {
                    await s.Qb(t);
                } catch (t) {
                    r(t);
                } finally {
                    n(!1);
                }
            }, []),
            error: e
        };
    },
    A = (t) => (0, r.e7)([c.Z], () => (null != t ? c.Z.getSubscriptionTrial(t) : null));
