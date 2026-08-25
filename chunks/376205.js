function l(e, n) {
    return e.filter((e) => {
        let t = e.instance.subscriptionId;
        return null != t && null != n(t);
    });
}
function r(e) {
    let { subscriptionId: n, hasFetchedSubscriptions: t, getSubscriptionById: l } = e;
    return null != n && (!t || null != l(n));
}
function a(e, n, t) {
    let l = new Set();
    for (let r of e) {
        let e = r.instance.planId;
        if (null == e) continue;
        l.add(e);
        let a = r.instance.subscriptionId,
            s = null != a ? t(a) : null;
        if (s?.renewalMutations != null)
            for (let t of n) {
                let n = t.plans;
                if (null != n && n.some((n) => n.id === e)) for (let e of n) l.add(e.id);
            }
    }
    return Array.from(l);
}
t.d(n, { HY: () => a, Yg: () => r, eP: () => l });
