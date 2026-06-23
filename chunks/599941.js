"use strict";
n.d(t, {
    KE: () => S,
    Tq: () => T,
    XE: () => y,
    Yc: () => I,
    cY: () => h,
    dB: () => f,
    dL: () => C,
    eb: () => m,
    et: () => g,
    hc: () => A,
    uP: () => E,
    uk: () => p,
}),
    n(321073);
var i = n(64700),
    r = n(17928),
    s = n(724442),
    a = n(608461),
    o = n(617710);
n(403362);
var l = n(300233),
    u = n(579908),
    c = n(636194),
    d = n(624456);
let _ = [];
function h(e) {
    let { includeSoftDeleted: t = !1, includeUnpublished: n = !0 } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, r.yK)([c.A], () => {
        if (null == e) return [];
        let i = c.A.getSubscriptionGroupListing(e);
        if (null == i) return [];
        let r = [];
        for (let e of i.subscription_listings_ids) {
            let i = c.A.getSubscriptionListing(e);
            null != i && (!i.soft_deleted || t) && (i.published || n) && r.push(i);
        }
        return r;
    }, [e, t, n]);
}
function f(e) {
    return (0, r.bG)([c.A], () => (null != e ? c.A.getSubscriptionListing(e) : null));
}
function p(e) {
    let t = (0, l.X)("useGroupListingsForGuild");
    return (0, r.bG)([c.A], () => (null != e && t ? c.A.getSubscriptionGroupListingsForGuild(e) : _));
}
function E(e) {
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
                    dontFetchWhileTrue: l,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                d = (0, r.bG)([o.A], () => o.A.isConnected()),
                _ = (0, r.bG)([c.A], () =>
                    null != e ? c.A.getSubscriptionGroupListingsForGuildFetchState(e) : c.e.FETCHED,
                ),
                h = i.useRef(t);
            i.useEffect(() => {
                if (null == e || !d || !0 === l) return;
                let i = c.A.getSubscriptionGroupListingsForGuildFetchState(e);
                (t || i === c.e.NOT_FETCHED) && ((h.current = !1), u.WA(e, { includeSoftDeleted: n, countryCode: a }));
            }, [d, e, n, t, a, l]),
                (0, s.A)(h),
                c.e.FETCHED;
        })(e),
        (0, r.yK)([c.A], () => {
            let n = null != e ? c.A.getSubscriptionGroupListingsForGuild(e) : _,
                i = [];
            for (let e of n)
                for (let n of e.subscription_listings_ids) {
                    let e = c.A.getSubscriptionListing(n);
                    null != e && (t.includeSoftDeleted || !e.soft_deleted) && i.push(e);
                }
            return t.includeSoftDeleted && t.sortDeletedListingsLast
                ? [...i.filter((e) => !e.soft_deleted), ...i.filter((e) => e.soft_deleted)]
                : i;
        })
    );
}
let m = (e) => {
    let [t, n] = i.useState(!1),
        s = i.useMemo(() => e.map(d.M), [e]),
        a = (0, r.yK)([c.A], () => s.filter((e) => !c.A.getDidFetchListingForSubscriptionPlanId(e)), [s]);
    return (
        i.useEffect(() => {
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
function g() {
    let [e, t] = i.useState(!1),
        [n, r] = i.useState(null);
    return {
        error: n,
        submitting: e,
        deleteSubscriptionListing: async function (e, n, i) {
            try {
                return t(!0), r(null), await u.H7(e, n, i), !0;
            } catch (e) {
                r(e);
            } finally {
                t(!1);
            }
        },
    };
}
function A() {
    let [e, t] = (0, a.A)(u.mK),
        { loading: n, error: i } = t;
    return { error: i, submitting: n, archiveSubscriptionListing: e };
}
function I() {
    let [e, t] = i.useState(!1),
        [n, r] = i.useState(null);
    return {
        error: n,
        submitting: e,
        publishSubscriptionListing: async function (e) {
            let { guildId: n, groupListingId: i, listingId: s } = e;
            try {
                return (
                    t(!0),
                    r(null),
                    await u.vW({ guildId: n, groupListingId: i, listingId: s, data: { published: !0 } }),
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
function T(e) {
    return (0, r.bG)([c.A], () => (null != e ? c.A.getSubscriptionSettings(e) : void 0));
}
function S() {
    let [e, t] = i.useState(!1),
        [n, r] = i.useState(null);
    return {
        loading: e,
        updateSubscriptionsSettings: i.useCallback(async (e, n) => {
            t(!0), r(null);
            try {
                await u.DO(e, n);
            } catch (e) {
                r(e);
            } finally {
                t(!1);
            }
        }, []),
        error: n,
    };
}
function y() {
    let [e, t] = i.useState(!1),
        [n, r] = i.useState(null);
    return {
        loading: e,
        fetchSubscriptionsSettings: i.useCallback(async (e) => {
            t(!0), r(null);
            try {
                await u.W5(e);
            } catch (e) {
                r(e);
            } finally {
                t(!1);
            }
        }, []),
        error: n,
    };
}
function C(e) {
    return (0, r.bG)([c.A], () => (null != e ? c.A.getSubscriptionTrial(e) : null));
}
