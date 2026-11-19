var i = n(855986),
    r = n(73153),
    a = n(46653);
let s = null,
    l = null,
    o = !1,
    d = 0,
    c = null,
    u = null,
    _ = !1,
    E = !1,
    A = !1,
    f = !1;
function h() {
    ((s = null), (l = null), (o = !1), (d = 0), (c = null), (u = null), (_ = !1), (E = !1), (A = !1), (f = !1));
}
function I() {
    return (c?.quantity ?? 0) + (u?.quantity ?? 0) + d;
}
function p(e) {
    let { userId: t } = e;
    return t === a.default.getId();
}
function m() {
    ((c = u), (u = null));
}
class g extends i.Ay.PersistedStore {
    static displayName = "OrbVoidStore";
    static persistKey = "OrbVoidStore";
    initialize(e) {
        (this.waitFor(a.default),
            h(),
            (s = e?.snapshot ?? null),
            (c = e?.batch ?? null),
            (u = e?.nextBatch ?? null),
            (f = e?.hasConsented ?? !1));
    }
    getState() {
        return { snapshot: s, batch: c, nextBatch: u, hasConsented: f };
    }
    get hasConsented() {
        return f;
    }
    get eligible() {
        return o;
    }
    get isModalOpen() {
        return A;
    }
    get isRejected() {
        return E;
    }
    hasFetchedState() {
        return null != l;
    }
    getDisplayedBalance() {
        return null == s ? null : Math.max(0, s.balance - I());
    }
    getDisplayedTotal() {
        return null == s ? null : s.totalBurned + I();
    }
    getBatchToSend() {
        return _ || E ? null : c;
    }
    canSpend(e) {
        let t = this.getDisplayedBalance();
        return !!o && null != l && null != t && !(t < e) && (u?.quantity ?? 0) + d + e <= l.maxBatchQuantity;
    }
}
let T = new g(r.h, {
    ORB_VOID_CONSENT_GRANT: function () {
        if (f) return !1;
        f = !0;
    },
    ORB_VOID_MODAL_OPEN: function () {
        if (A) return !1;
        A = !0;
    },
    ORB_VOID_MODAL_CLOSE: function () {
        if (!A) return !1;
        A = !1;
    },
    ORB_VOID_STATE_FETCH_SUCCESS: function (e) {
        if (!p(e)) return !1;
        (E && ((c = null), (E = !1)), (s = e.state.snapshot), (o = e.state.eligible), (l = e.state.config));
        let t = (u?.quantity ?? 0) + d;
        ((!o || s.balance < t) && ((u = null), (d = 0)), o || _ || (c = null), null == c && m());
    },
    ORB_VOID_CLICK: function (e) {
        let { amount: t } = e;
        if (t <= 0) return !1;
        d += t;
    },
    ORB_VOID_FLUSH: function (e) {
        let { sinkId: t, batchTimestamp: n } = e;
        if (d <= 0) return !1;
        (null == c
            ? (c = { sinkId: t, quantity: d, batchTimestamp: n })
            : (u = null == u ? { sinkId: t, quantity: d, batchTimestamp: n } : { ...u, quantity: u.quantity + d }),
            (d = 0));
    },
    ORB_VOID_BURN_BEGIN: function () {
        if (_) return !1;
        _ = !0;
    },
    ORB_VOID_BURN_SUCCESS: function (e) {
        if (!p(e) || c?.sinkId !== e.sinkId) return !1;
        ((s = e.snapshot), m(), (_ = !1));
    },
    ORB_VOID_BURN_FAILURE: function (e) {
        if (!p(e) || c?.sinkId !== e.sinkId) return !1;
        ((_ = !1), (E = !e.retryable));
    },
    LOGOUT: function () {
        h();
    },
});
n.d(t, {}, { A: T });
