n.d(t, {
    KE: () => N,
    Tq: () => g,
    XE: () => T,
    Yc: () => I,
    cY: () => E,
    dB: () => h,
    dL: () => m,
    eb: () => p,
    et: () => f,
    hc: () => S,
    uP: () => A,
    uk: () => _,
}),
    n(321073);
var l = n(582128),
    r = n(17928),
    i = n(724442),
    o = n(608461),
    u = n(597643);
n(403362);
var s = n(300233),
    a = n(579908),
    c = n(636194),
    d = n(624456);
let C = [];
function E(e) {
    let { includeSoftDeleted: t = !1, includeUnpublished: n = !0 } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, r.yK)([c.A], () => {
        if (null == e) return [];
        let l = c.A.getSubscriptionGroupListing(e);
        if (null == l) return [];
        let r = [];
        for (let e of l.subscription_listings_ids) {
            let l = c.A.getSubscriptionListing(e);
            null != l && (!l.soft_deleted || t) && (l.published || n) && r.push(l);
        }
        return r;
    }, [e, t, n]);
}
function h(e) {
    return (0, r.bG)([c.A], () => (null != e ? c.A.getSubscriptionListing(e) : null));
}
function _(e) {
    let t = (0, s.X)("useGroupListingsForGuild");
    return (0, r.bG)([c.A], () => (null != e && t ? c.A.getSubscriptionGroupListingsForGuild(e) : C));
}
function A(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { includeSoftDeleted: !1, sortDeletedListingsLast: !1 };
    return (
        !(function (e) {
            let {
                    refetchOnMount: t = !1,
                    includeSoftDeleted: n = !0,
                    countryCode: o,
                    dontFetchWhileTrue: s,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                d = (0, r.bG)([u.A], () => u.A.isConnected()),
                C = (0, r.bG)([c.A], () =>
                    null != e ? c.A.getSubscriptionGroupListingsForGuildFetchState(e) : c.e.FETCHED,
                ),
                E = l.useRef(t);
            l.useEffect(() => {
                if (null == e || !d || !0 === s) return;
                let l = c.A.getSubscriptionGroupListingsForGuildFetchState(e);
                (t || l === c.e.NOT_FETCHED) && ((E.current = !1), a.WA(e, { includeSoftDeleted: n, countryCode: o }));
            }, [d, e, n, t, o, s]),
                (0, i.A)(E),
                c.e.FETCHED;
        })(e),
        (0, r.yK)([c.A], () => {
            let n = null != e ? c.A.getSubscriptionGroupListingsForGuild(e) : C,
                l = [];
            for (let e of n)
                for (let n of e.subscription_listings_ids) {
                    let e = c.A.getSubscriptionListing(n);
                    null != e && (t.includeSoftDeleted || !e.soft_deleted) && l.push(e);
                }
            return t.includeSoftDeleted && t.sortDeletedListingsLast
                ? [...l.filter((e) => !e.soft_deleted), ...l.filter((e) => e.soft_deleted)]
                : l;
        })
    );
}
let p = (e) => {
    let [t, n] = l.useState(!1),
        i = l.useMemo(() => e.map(d.M), [e]),
        o = (0, r.yK)([c.A], () => i.filter((e) => !c.A.getDidFetchListingForSubscriptionPlanId(e)), [i]);
    return (
        l.useEffect(() => {
            !t &&
                o.length > 0 &&
                (n(!0),
                Promise.all(o.map((e) => a._R(e)))
                    .catch(() => {})
                    .then(() => {
                        n(!1);
                    }));
        }, [t, o]),
        { loading: t }
    );
};
function f() {
    let [e, t] = l.useState(!1),
        [n, r] = l.useState(null);
    return {
        error: n,
        submitting: e,
        deleteSubscriptionListing: async function (e, n, l) {
            try {
                return t(!0), r(null), await a.H7(e, n, l), !0;
            } catch (e) {
                r(e);
            } finally {
                t(!1);
            }
        },
    };
}
function S() {
    let [e, t] = (0, o.A)(a.mK),
        { loading: n, error: l } = t;
    return { error: l, submitting: n, archiveSubscriptionListing: e };
}
function I() {
    let [e, t] = l.useState(!1),
        [n, r] = l.useState(null);
    return {
        error: n,
        submitting: e,
        publishSubscriptionListing: async function (e) {
            let { guildId: n, groupListingId: l, listingId: i } = e;
            try {
                return (
                    t(!0),
                    r(null),
                    await a.vW({ guildId: n, groupListingId: l, listingId: i, data: { published: !0 } }),
                    !0
                );
            } catch (e) {
                r(e);
            } finally {
                t(!1);
            }
        },
        clearError: () => r(null),
    };
}
function g(e) {
    return (0, r.bG)([c.A], () => (null != e ? c.A.getSubscriptionSettings(e) : void 0));
}
function N() {
    let [e, t] = l.useState(!1),
        [n, r] = l.useState(null);
    return {
        loading: e,
        updateSubscriptionsSettings: l.useCallback(async (e, n) => {
            t(!0), r(null);
            try {
                await a.DO(e, n);
            } catch (e) {
                r(e);
            } finally {
                t(!1);
            }
        }, []),
        error: n,
    };
}
function T() {
    let [e, t] = l.useState(!1),
        [n, r] = l.useState(null);
    return {
        loading: e,
        fetchSubscriptionsSettings: l.useCallback(async (e) => {
            t(!0), r(null);
            try {
                await a.W5(e);
            } catch (e) {
                r(e);
            } finally {
                t(!1);
            }
        }, []),
        error: n,
    };
}
function m(e) {
    return (0, r.bG)([c.A], () => (null != e ? c.A.getSubscriptionTrial(e) : null));
}
