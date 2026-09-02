n.d(t, {
    KE: () => I,
    Tq: () => p,
    XE: () => m,
    Yc: () => N,
    cY: () => h,
    dB: () => A,
    dL: () => L,
    eb: () => _,
    et: () => C,
    hc: () => S,
    uP: () => g,
    uk: () => f,
}),
    n(321073);
var r = n(582128),
    l = n(17928),
    i = n(724442),
    s = n(608461),
    u = n(597643);
n(403362);
var o = n(300233),
    a = n(579908),
    c = n(636194),
    d = n(624456);
let E = [];
function h(e) {
    let { includeSoftDeleted: t = !1, includeUnpublished: n = !0 } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, l.yK)([c.A], () => {
        if (null == e) return [];
        let r = c.A.getSubscriptionGroupListing(e);
        if (null == r) return [];
        let l = [];
        for (let e of r.subscription_listings_ids) {
            let r = c.A.getSubscriptionListing(e);
            null != r && (!r.soft_deleted || t) && (r.published || n) && l.push(r);
        }
        return l;
    }, [e, t, n]);
}
function A(e) {
    return (0, l.bG)([c.A], () => (null != e ? c.A.getSubscriptionListing(e) : null));
}
function f(e) {
    let t = (0, o.X)("useGroupListingsForGuild");
    return (0, l.bG)([c.A], () => (null != e && t ? c.A.getSubscriptionGroupListingsForGuild(e) : E));
}
function g(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { includeSoftDeleted: !1, sortDeletedListingsLast: !1 };
    return (
        !(function (e) {
            let {
                    refetchOnMount: t = !1,
                    includeSoftDeleted: n = !0,
                    countryCode: s,
                    dontFetchWhileTrue: o,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                d = (0, l.bG)([u.A], () => u.A.isConnected()),
                E = (0, l.bG)([c.A], () =>
                    null != e ? c.A.getSubscriptionGroupListingsForGuildFetchState(e) : c.e.FETCHED,
                ),
                h = r.useRef(t);
            r.useEffect(() => {
                if (null == e || !d || !0 === o) return;
                let r = c.A.getSubscriptionGroupListingsForGuildFetchState(e);
                (t || r === c.e.NOT_FETCHED) && ((h.current = !1), a.WA(e, { includeSoftDeleted: n, countryCode: s }));
            }, [d, e, n, t, s, o]),
                (0, i.A)(h),
                c.e.FETCHED;
        })(e),
        (0, l.yK)([c.A], () => {
            let n = null != e ? c.A.getSubscriptionGroupListingsForGuild(e) : E,
                r = [];
            for (let e of n)
                for (let n of e.subscription_listings_ids) {
                    let e = c.A.getSubscriptionListing(n);
                    null != e && (t.includeSoftDeleted || !e.soft_deleted) && r.push(e);
                }
            return t.includeSoftDeleted && t.sortDeletedListingsLast
                ? [...r.filter((e) => !e.soft_deleted), ...r.filter((e) => e.soft_deleted)]
                : r;
        })
    );
}
let _ = (e) => {
    let [t, n] = r.useState(!1),
        i = r.useMemo(() => e.map(d.M), [e]),
        s = (0, l.yK)([c.A], () => i.filter((e) => !c.A.getDidFetchListingForSubscriptionPlanId(e)), [i]);
    return (
        r.useEffect(() => {
            !t &&
                s.length > 0 &&
                (n(!0),
                Promise.all(s.map((e) => a._R(e)))
                    .catch(() => {})
                    .then(() => {
                        n(!1);
                    }));
        }, [t, s]),
        { loading: t }
    );
};
function C() {
    let [e, t] = r.useState(!1),
        [n, l] = r.useState(null);
    return {
        error: n,
        submitting: e,
        deleteSubscriptionListing: async function (e, n, r) {
            try {
                return t(!0), l(null), await a.H7(e, n, r), !0;
            } catch (e) {
                l(e);
            } finally {
                t(!1);
            }
        },
    };
}
function S() {
    let [e, t] = (0, s.A)(a.mK),
        { loading: n, error: r } = t;
    return { error: r, submitting: n, archiveSubscriptionListing: e };
}
function N() {
    let [e, t] = r.useState(!1),
        [n, l] = r.useState(null);
    return {
        error: n,
        submitting: e,
        publishSubscriptionListing: async function (e) {
            let { guildId: n, groupListingId: r, listingId: i } = e;
            try {
                return (
                    t(!0),
                    l(null),
                    await a.vW({ guildId: n, groupListingId: r, listingId: i, data: { published: !0 } }),
                    !0
                );
            } catch (e) {
                l(e);
            } finally {
                t(!1);
            }
        },
        clearError: () => l(null),
    };
}
function p(e) {
    return (0, l.bG)([c.A], () => (null != e ? c.A.getSubscriptionSettings(e) : void 0));
}
function I() {
    let [e, t] = r.useState(!1),
        [n, l] = r.useState(null);
    return {
        loading: e,
        updateSubscriptionsSettings: r.useCallback(async (e, n) => {
            t(!0), l(null);
            try {
                await a.DO(e, n);
            } catch (e) {
                l(e);
            } finally {
                t(!1);
            }
        }, []),
        error: n,
    };
}
function m() {
    let [e, t] = r.useState(!1),
        [n, l] = r.useState(null);
    return {
        loading: e,
        fetchSubscriptionsSettings: r.useCallback(async (e) => {
            t(!0), l(null);
            try {
                await a.W5(e);
            } catch (e) {
                l(e);
            } finally {
                t(!1);
            }
        }, []),
        error: n,
    };
}
function L(e) {
    return (0, l.bG)([c.A], () => (null != e ? c.A.getSubscriptionTrial(e) : null));
}
