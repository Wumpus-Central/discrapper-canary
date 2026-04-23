"use strict";
n.d(t, { Ay: () => T, gN: () => g });
var r = n(311907),
    i = n(713402),
    s = n(451988),
    a = n(73153),
    o = n(961350),
    l = n(309010),
    u = n(203982),
    c = n(3137),
    d = n(103640),
    _ = n(31408),
    f = n(652215);
let p = new Set(),
    h = new i.J(
        function (e) {
            let { userId: t, channelId: n } = e;
            return [t, n];
        },
        function (e) {
            let { userId: t, channelId: n } = e;
            return `${n}-${t}`;
        },
    ),
    E = new i.J(
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
    m = (e) => {
        let { userId: t, channelId: n } = e;
        return `${t}-${n}`;
    };
function g(e, t, n, r) {
    return !(e !== t || null == n || r.has(n)) && (r.add(n), !0);
}
class A extends r.Ay.Store {
    static displayName = "PoggermodeStore";
    initialize() {
        this.waitFor(o.default, c.A, l.A);
    }
    getComboScore(e, t) {
        let n = h.get(m({ userId: e, channelId: t }));
        return null == n ? 0 : (0, d.RL)(n);
    }
    getUserCombo(e, t) {
        return h.get(m({ userId: e, channelId: t }));
    }
    isComboing(e, t) {
        var n;
        let r = this.getUserCombo(e, t);
        return null != r && r.value >= c.A.combosRequiredCount && null != (n = r) && (n.value > 0 || n?.multiplier > 1);
    }
    getMessageCombo(e) {
        let t = E.get(e);
        return t?.combo ?? void 0;
    }
    getMostRecentMessageCombo(e) {
        let t = E.values(e);
        return t[t.length - 1];
    }
    getUserComboShakeIntensity(e, t, n, r) {
        let i = this.getUserCombo(e, t);
        return null != i ? (0, d.U$)(i, r) * n : 0;
    }
}
let I = new A(a.h, {
        POGGERMODE_UPDATE_COMBO: function (e) {
            let { type: t, ...n } = e;
            if (!c.A.isEnabled()) return !1;
            !(function e(t) {
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    r = h.get(m(t)),
                    i = {
                        ...r,
                        ...t,
                        value: t.value ?? r?.value ?? 0,
                        multiplier: Math.min(t.multiplier ?? r?.multiplier ?? 1, 7),
                        decayInterval: r?.decayInterval ?? new s.IX(),
                    };
                h.set(m(t), i),
                    n &&
                        i.decayInterval?.start(1e3, () => {
                            let t = h.get(m(i));
                            if (null != t) {
                                let n = i.multiplier !== t.multiplier && i.value !== t.value;
                                t.value <= 0 || n
                                    ? (t.decayInterval?.stop(),
                                      t.value <= 0 && (e({ ...t, value: 0, multiplier: 1 }), I.emitChange()))
                                    : (e({ ...t, value: t.value - 1 }), I.emitChange());
                            }
                        });
            })(n);
        },
        POGGERMODE_UPDATE_MESSAGE_COMBO: function (e) {
            let { comboMessage: t } = e;
            if (!c.A.isEnabled()) return !1;
            E.set(t.messageId, t);
        },
        MESSAGE_CREATE: function (e) {
            let {
                channelId: t,
                message: { mentions: n, author: r, nonce: i },
            } = e;
            if (!c.A.isEnabled()) return !1;
            let s = o.default.getId();
            if (!g(r?.id, s, i, p)) return !1;
            let a = h.get(m({ userId: r?.id ?? "???", channelId: t }));
            if (
                c.A.screenshakeEnabled &&
                c.A.screenshakeEnabledLocations[_.uD.MENTION] &&
                null != n &&
                null != n.find((e) => e.id === s)
            ) {
                let e = null != a ? ((0, d.U$)(a, _.fZ.LEVEL_4) ?? 0.001) : 4 * Math.random();
                return u._.dispatch(f.jej.SHAKE_APP, { duration: 1e3, intensity: e }), !0;
            }
            return !1;
        },
    }),
    T = I;
