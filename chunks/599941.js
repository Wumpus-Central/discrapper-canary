n.d(t, {
    KE: () => g,
    Tq: () => m,
    XE: () => N,
    Yc: () => f,
    cY: () => C,
    dB: () => h,
    dL: () => T,
    eb: () => I,
    et: () => p,
    hc: () => A,
    uP: () => _,
    uk: () => S,
}),
    n(321073);
var r = n(582128),
    l = n(17928),
    i = n(724442),
    o = n(608461),
    u = n(617710);
n(403362);
var s = n(300233),
    a = n(579908),
    c = n(636194),
    d = n(624456);
let E = [];
function C(e) {
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
function h(e) {
    return (0, l.bG)([c.A], () => (null != e ? c.A.getSubscriptionListing(e) : null));
}
function S(e) {
    let t = (0, s.X)("useGroupListingsForGuild");
    return (0, l.bG)([c.A], () => (null != e && t ? c.A.getSubscriptionGroupListingsForGuild(e) : E));
}
function _(e) {
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
                d = (0, l.bG)([u.A], () => u.A.isConnected()),
                E = (0, l.bG)([c.A], () =>
                    null != e ? c.A.getSubscriptionGroupListingsForGuildFetchState(e) : c.e.FETCHED,
                ),
                C = r.useRef(t);
            r.useEffect(() => {
                if (null == e || !d || !0 === s) return;
                let r = c.A.getSubscriptionGroupListingsForGuildFetchState(e);
                (t || r === c.e.NOT_FETCHED) && ((C.current = !1), a.WA(e, { includeSoftDeleted: n, countryCode: o }));
            }, [d, e, n, t, o, s]),
                (0, i.A)(C),
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
let I = (e) => {
    let [t, n] = r.useState(!1),
        i = r.useMemo(() => e.map(d.M), [e]),
        o = (0, l.yK)([c.A], () => i.filter((e) => !c.A.getDidFetchListingForSubscriptionPlanId(e)), [i]);
    return (
        r.useEffect(() => {
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
function p() {
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
function A() {
    let [e, t] = (0, o.A)(a.mK),
        { loading: n, error: r } = t;
    return { error: r, submitting: n, archiveSubscriptionListing: e };
}
function f() {
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
function m(e) {
    return (0, l.bG)([c.A], () => (null != e ? c.A.getSubscriptionSettings(e) : void 0));
}
function g() {
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
function N() {
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
function T(e) {
    return (0, l.bG)([c.A], () => (null != e ? c.A.getSubscriptionTrial(e) : null));
}
