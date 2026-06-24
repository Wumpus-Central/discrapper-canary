e.d(n, { default: () => C });
var i = e(627968),
    r = e(64700),
    o = e(189213),
    a = e(964486),
    u = e(174459),
    s = e(137728),
    l = e(751877),
    c = e(788868),
    d = e(88001),
    f = e(652215),
    m = e(466919),
    _ = e(375708);
let p = { 1: "what_you_lose", 2: "confirmation" };
function P(t) {
    let { onClose: n, currentUser: e, onNext: r, ...a } = t;
    return (0, i.jsx)(o.Modal, {
        title: _.intl.formatToPlainString(m.default["4e7WtF"], { premiumGroupProductName: (0, d.DP)() }),
        subtitle: _.intl.formatToPlainString(m.default["3kVEg0"], { cooldownMonths: d.wl }),
        onClose: n,
        ...a,
        actions: [
            { text: _.intl.string(m.default.UFHNtO), variant: "secondary", onClick: n },
            { text: _.intl.string(_.t["3PatSz"]), variant: "primary", onClick: r },
        ],
        children: (0, i.jsx)(s.l, {
            currentUser: e,
            premiumType: c.PremiumTypes.TIER_2,
            onClose: n,
            isDowngrade: !1,
            isPremiumRebrand: !0,
        }),
    });
}
function w(t) {
    let { onClose: n, onConfirm: e, isRemovingUser: r, ...a } = t;
    return (0, i.jsx)(o.Modal, {
        size: "md",
        title: _.intl.formatToPlainString(m.default.IrvJHs, { premiumGroupProductName: (0, d.DP)() }),
        subtitle: _.intl.formatToPlainString(m.default.cQDYKU, {
            premiumGroupProductName: (0, d.DP)(),
            cooldownMonths: d.wl,
        }),
        onClose: n,
        actions: [
            { text: _.intl.string(m.default.UFHNtO), variant: "secondary", onClick: n },
            { text: _.intl.string(_.t["cY+Oob"]), variant: "critical-primary", onClick: e, loading: r },
        ],
        ...a,
    });
}
let C = function (t) {
    let { premiumGroupSubscriptionId: n, currentUser: e, onClose: o, ...s } = t,
        [c, d] = r.useState(1),
        [m, _] = r.useState(!1),
        C = r.useRef(0),
        E = r.useRef(0);
    function M(t, e) {
        u.default.track(f.HAw.PREMIUM_GROUP_MEMBER_CANCELLATION_STEP, {
            subscription_id: n,
            from_step: p[t],
            to_step: e,
            step_duration_ms: Date.now() - E.current,
            flow_duration_ms: Date.now() - C.current,
        }),
            (E.current = Date.now());
    }
    async function R() {
        M(c, null), await o();
    }
    async function T() {
        _(!0),
            (await (0, l.oO)(n, e.id)).ok &&
                (u.default.track(f.HAw.PREMIUM_GROUP_MEMBER_CANCELLATION_COMPLETED, { subscription_id: n }), o()),
            _(!1);
    }
    switch (
        ((0, a.Ay)(() => {
            let t = Date.now();
            (C.current = t),
                (E.current = t),
                u.default.track(f.HAw.PREMIUM_GROUP_MEMBER_CANCELLATION_STARTED, { subscription_id: n });
        }),
        c)
    ) {
        case 1:
            return (0, i.jsx)(P, {
                ...s,
                onNext: function () {
                    M(c, p[2]), d(2);
                },
                currentUser: e,
                onClose: R,
            });
        case 2:
            return (0, i.jsx)(w, { ...s, onConfirm: T, onClose: R, isRemovingUser: m });
        default:
            return null;
    }
};
