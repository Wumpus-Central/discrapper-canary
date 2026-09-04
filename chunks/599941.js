n.d(t, {
    KE: () => A,
    Tq: () => g,
    XE: () => P,
    Yc: () => I,
    cY: () => p,
    dB: () => C,
    dL: () => v,
    eb: () => E,
    et: () => S,
    hc: () => y,
    uP: () => f,
    uk: () => h,
}),
    n(321073);
var l = n(582128),
    i = n(17928),
    r = n(724442),
    a = n(608461),
    s = n(597643);
n(403362);
var o = n(300233),
    u = n(579908),
    c = n(636194),
    d = n(624456);
let m = [];
function p(e) {
    let { includeSoftDeleted: t = !1, includeUnpublished: n = !0 } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, i.yK)([c.A], () => {
        if (null == e) return [];
        let l = c.A.getSubscriptionGroupListing(e);
        if (null == l) return [];
        let i = [];
        for (let e of l.subscription_listings_ids) {
            let l = c.A.getSubscriptionListing(e);
            null != l && (!l.soft_deleted || t) && (l.published || n) && i.push(l);
        }
        return i;
    }, [e, t, n]);
}
function C(e) {
    return (0, i.bG)([c.A], () => (null != e ? c.A.getSubscriptionListing(e) : null));
}
function h(e) {
    let t = (0, o.X)("useGroupListingsForGuild");
    return (0, i.bG)([c.A], () => (null != e && t ? c.A.getSubscriptionGroupListingsForGuild(e) : m));
}
function f(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { includeSoftDeleted: !1, sortDeletedListingsLast: !1 };
    return (
        !(function (e) {
            let {
                    refetchOnMount: t = !1,
                    includeSoftDeleted: n = !0,
                    countryCode: a,
                    dontFetchWhileTrue: o,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                d = (0, i.bG)([s.A], () => s.A.isConnected()),
                m = (0, i.bG)([c.A], () =>
                    null != e ? c.A.getSubscriptionGroupListingsForGuildFetchState(e) : c.e.FETCHED,
                ),
                p = l.useRef(t);
            l.useEffect(() => {
                if (null == e || !d || !0 === o) return;
                let l = c.A.getSubscriptionGroupListingsForGuildFetchState(e);
                (t || l === c.e.NOT_FETCHED) && ((p.current = !1), u.WA(e, { includeSoftDeleted: n, countryCode: a }));
            }, [d, e, n, t, a, o]),
                (0, r.A)(p),
                c.e.FETCHED;
        })(e),
        (0, i.yK)([c.A], () => {
            let n = null != e ? c.A.getSubscriptionGroupListingsForGuild(e) : m,
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
let E = (e) => {
    let [t, n] = l.useState(!1),
        r = l.useMemo(() => e.map(d.M), [e]),
        a = (0, i.yK)([c.A], () => r.filter((e) => !c.A.getDidFetchListingForSubscriptionPlanId(e)), [r]);
    return (
        l.useEffect(() => {
            !t &&
                a.length > 0 &&
                (n(!0),
                Promise.all(a.map((e) => u._R(e)))
                    .catch(() => {})
                    .then(() => {
                        n(!1);
                    }));
        }, [t, a]),
        { loading: t }
    );
};
function S() {
    let [e, t] = l.useState(!1),
        [n, i] = l.useState(null);
    return {
        error: n,
        submitting: e,
        deleteSubscriptionListing: async function (e, n, l) {
            try {
                return t(!0), i(null), await u.H7(e, n, l), !0;
            } catch (e) {
                i(e);
            } finally {
                t(!1);
            }
        },
    };
}
function y() {
    let [e, t] = (0, a.A)(u.mK),
        { loading: n, error: l } = t;
    return { error: l, submitting: n, archiveSubscriptionListing: e };
}
function I() {
    let [e, t] = l.useState(!1),
        [n, i] = l.useState(null);
    return {
        error: n,
        submitting: e,
        publishSubscriptionListing: async function (e) {
            let { guildId: n, groupListingId: l, listingId: r } = e;
            try {
                return (
                    t(!0),
                    i(null),
                    await u.vW({ guildId: n, groupListingId: l, listingId: r, data: { published: !0 } }),
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
}
function g(e) {
    return (0, i.bG)([c.A], () => (null != e ? c.A.getSubscriptionSettings(e) : void 0));
}
function A() {
    let [e, t] = l.useState(!1),
        [n, i] = l.useState(null);
    return {
        loading: e,
        updateSubscriptionsSettings: l.useCallback(async (e, n) => {
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
}
function P() {
    let [e, t] = l.useState(!1),
        [n, i] = l.useState(null);
    return {
        loading: e,
        fetchSubscriptionsSettings: l.useCallback(async (e) => {
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
}
function v(e) {
    return (0, i.bG)([c.A], () => (null != e ? c.A.getSubscriptionTrial(e) : null));
}
