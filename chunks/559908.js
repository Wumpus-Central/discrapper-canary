"use strict";
n.d(t, { Ay: () => O, gN: () => C });
var r = n(311907),
    i = n(713402),
    a = n(451988),
    s = n(73153),
    o = n(961350),
    l = n(309010),
    u = n(203982),
    c = n(3137),
    d = n(103640),
    _ = n(31408),
    f = n(652215);
let p = 7,
    h = 1e3,
    m = new Set(),
    g = new i.J(
        function (e) {
            let { userId: t, channelId: n } = e;
            return [t, n];
        },
        function (e) {
            let { userId: t, channelId: n } = e;
            return `${n}-${t}`;
        },
    );
function E(e) {
    return null != e && (e.value > 0 || e?.multiplier > 1);
}
let A = new i.J(
        function (e) {
            let {
                messageId: t,
                channelId: n,
                combo: { userId: r },
            } = e;
            return [t, n, r];
        },
        function (e) {
            let {
                messageId: t,
                channelId: n,
                combo: { userId: r },
            } = e;
            return `${n}-${r}-${t}`;
        },
    ),
    I = (e) => {
        let { userId: t, channelId: n } = e;
        return `${t}-${n}`;
    };
function T(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = g.get(I(e)),
        r = {
            ...n,
            ...e,
            value: e.value ?? n?.value ?? 0,
            multiplier: Math.min(e.multiplier ?? n?.multiplier ?? 1, p),
            decayInterval: n?.decayInterval ?? new a.IX(),
        };
    g.set(I(e), r),
        t &&
            r.decayInterval?.start(h, () => {
                let e = g.get(I(r));
                if (null != e) {
                    let t = r.multiplier !== e.multiplier && r.value !== e.value;
                    e.value <= 0 || t
                        ? (e.decayInterval?.stop(),
                          e.value <= 0 && (T({ ...e, value: 0, multiplier: 1 }), R.emitChange()))
                        : (T({ ...e, value: e.value - 1 }), R.emitChange());
                }
            });
}
function y(e) {
    A.set(e.messageId, e);
}
function S(e) {
    let { type: t, ...n } = e;
    if (!c.A.isEnabled()) return !1;
    T(n);
}
function v(e) {
    let { comboMessage: t } = e;
    if (!c.A.isEnabled()) return !1;
    y(t);
}
function C(e, t, n, r) {
    return !(e !== t || null == n || r.has(n)) && (r.add(n), !0);
}
function b(e) {
    let {
        channelId: t,
        message: { mentions: n, author: r, nonce: i },
    } = e;
    if (!c.A.isEnabled()) return !1;
    let a = o.default.getId();
    if (!C(r?.id, a, i, m)) return !1;
    let s = g.get(I({ userId: r?.id ?? "???", channelId: t }));
    if (
        c.A.screenshakeEnabled &&
        c.A.screenshakeEnabledLocations[_.uD.MENTION] &&
        null != n &&
        null != n.find((e) => e.id === a)
    ) {
        let e = null != s ? ((0, d.U$)(s, _.fZ.LEVEL_4) ?? 0.001) : 4 * Math.random();
        return u._.dispatch(f.jej.SHAKE_APP, { duration: 1e3, intensity: e }), !0;
    }
    return !1;
}
class N extends r.Ay.Store {
    static displayName = "PoggermodeStore";
    initialize() {
        this.waitFor(o.default, c.A, l.A);
    }
    getComboScore(e, t) {
        let n = g.get(I({ userId: e, channelId: t }));
        return null == n ? 0 : (0, d.RL)(n);
    }
    getUserCombo(e, t) {
        return g.get(I({ userId: e, channelId: t }));
    }
    isComboing(e, t) {
        let n = this.getUserCombo(e, t);
        return null != n && n.value >= c.A.combosRequiredCount && E(n);
    }
    getMessageCombo(e) {
        let t = A.get(e);
        return t?.combo ?? void 0;
    }
    getMostRecentMessageCombo(e) {
        let t = A.values(e);
        return t[t.length - 1];
    }
    getUserComboShakeIntensity(e, t, n, r) {
        let i = this.getUserCombo(e, t);
        return null != i ? (0, d.U$)(i, r) * n : 0;
    }
}
let R = new N(s.h, { POGGERMODE_UPDATE_COMBO: S, POGGERMODE_UPDATE_MESSAGE_COMBO: v, MESSAGE_CREATE: b }),
    O = R;
