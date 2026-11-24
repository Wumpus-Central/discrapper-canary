var i = n(855986),
    r = n(73153),
    a = n(46653);
n(475489);
let s = null,
    l = null,
    o = !1,
    d = 0,
    c = null,
    u = null,
    _ = !1,
    E = !1,
    A = !1,
    f = !1,
    h = 100,
    I = !1,
    p = !1;
function m() {
    ((s = null),
        (l = null),
        (o = !1),
        (d = 0),
        (c = null),
        (u = null),
        (_ = !1),
        (E = !1),
        (A = !1),
        (f = !1),
        (h = 100),
        (I = !1),
        (p = !1));
}
function g() {
    return (c?.quantity ?? 0) + (u?.quantity ?? 0) + d;
}
function T(e) {
    let { userId: t } = e;
    return t === a.default.getId();
}
function S() {
    ((c = u), (u = null));
}
class N extends i.Ay.PersistedStore {
    static displayName = "OrbVoidStore";
    static persistKey = "OrbVoidStore";
    initialize(e) {
        (this.waitFor(a.default),
            m(),
            (s = e?.snapshot ?? null),
            (c = e?.batch ?? null),
            (u = e?.nextBatch ?? null),
            (f = e?.hasConsented ?? !1),
            (h = e?.soundVolume ?? 100),
            (I = e?.isSoundMuted ?? !1),
            (p = e?.hasHeardElevatorMusic ?? !1));
    }
    getState() {
        return {
            snapshot: s,
            batch: c,
            nextBatch: u,
            hasConsented: f,
            soundVolume: h,
            isSoundMuted: I,
            hasHeardElevatorMusic: p,
        };
    }
    get hasConsented() {
        return f;
    }
    get hasHeardElevatorMusic() {
        return p;
    }
    get soundVolume() {
        return h;
    }
    get isSoundMuted() {
        return I;
    }
    get soundLevel() {
        return I ? 0 : h / 100;
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
        return null == s ? null : Math.max(0, s.balance - g());
    }
    getDisplayedTotal() {
        return null == s ? null : s.totalBurned + g();
    }
    getBatchToSend() {
        return _ || E ? null : c;
    }
    canSpend(e) {
        let t = this.getDisplayedBalance();
        return !!o && null != l && null != t && !(t < e) && (u?.quantity ?? 0) + d + e <= l.maxBatchQuantity;
    }
}
let C = new N(r.h, {
    ORB_VOID_CONSENT_GRANT: function () {
        if (f) return !1;
        f = !0;
    },
    ORB_VOID_ELEVATOR_MUSIC_HEARD: function () {
        if (p) return !1;
        p = !0;
    },
    ORB_VOID_SOUND_MUTE_TOGGLE: function () {
        if (!I && 0 === h) {
            h = 100;
            return;
        }
        I = !I;
    },
    ORB_VOID_SOUND_VOLUME_SET: function (e) {
        let { volume: t } = e,
            n = Math.min(200, Math.max(0, t));
        if (n === h && !I) return !1;
        ((h = n), (I = !1));
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
        if (!T(e)) return !1;
        (E && ((c = null), (E = !1)),
            (o = e.state.eligible),
            (l = e.state.config),
            (_ && null != s) || (s = e.state.snapshot));
        let t = (u?.quantity ?? 0) + d;
        ((!o || s.balance < t) && ((u = null), (d = 0)), o || _ || (c = null), null == c && S());
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
        if (!T(e) || c?.sinkId !== e.sinkId) return !1;
        ((s = e.snapshot), S(), (_ = !1));
    },
    ORB_VOID_BURN_FAILURE: function (e) {
        if (!T(e) || c?.sinkId !== e.sinkId) return !1;
        ((_ = !1), (E = !e.retryable));
    },
    LOGOUT: function () {
        m();
    },
});
n.d(t, {}, { A: C });
