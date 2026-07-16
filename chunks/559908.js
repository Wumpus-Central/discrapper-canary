"use strict";
n.d(t, { Ay: () => g, gN: () => p });
var i = n(17928),
    r = n(713402),
    a = n(451988),
    s = n(228366),
    l = n(280450),
    o = n(309010),
    d = n(625494),
    c = n(3137),
    u = n(103640),
    _ = n(31408),
    E = n(652215);
let A = new Set(),
    h = new r.J(
        function (e) {
            let { userId: t, channelId: n } = e;
            return [t, n];
        },
        function (e) {
            let { userId: t, channelId: n } = e;
            return `${n}-${t}`;
        },
    ),
    I = new r.J(
        function (e) {
            let {
                messageId: t,
                channelId: n,
                combo: { userId: i },
            } = e;
            return [t, n, i];
        },
        function (e) {
            let {
                messageId: t,
                channelId: n,
                combo: { userId: i },
            } = e;
            return `${n}-${i}-${t}`;
        },
    );
function f(e) {
    let { userId: t, channelId: n } = e;
    return `${t}-${n}`;
}
function p(e, t, n, i) {
    return !(e !== t || null == n || i.has(n)) && (i.add(n), !0);
}
class T extends i.Ay.Store {
    static displayName = "PoggermodeStore";
    initialize() {
        this.waitFor(l.default, c.A, o.Ay);
    }
    getComboScore(e, t) {
        let n = h.get(f({ userId: e, channelId: t }));
        return null == n ? 0 : (0, u.RL)(n);
    }
    getUserCombo(e, t) {
        return h.get(f({ userId: e, channelId: t }));
    }
    isComboing(e, t) {
        var n;
        let i = this.getUserCombo(e, t);
        return null != i && i.value >= c.A.combosRequiredCount && null != (n = i) && (n.value > 0 || n?.multiplier > 1);
    }
    getMessageCombo(e) {
        let t = I.get(e);
        return t?.combo ?? void 0;
    }
    getMostRecentMessageCombo(e) {
        let t = I.values(e);
        return t[t.length - 1];
    }
    getUserComboShakeIntensity(e, t, n, i) {
        let r = this.getUserCombo(e, t);
        return null != r ? (0, u.U$)(r, i) * n : 0;
    }
}
let m = new T(s.h, {
        POGGERMODE_UPDATE_COMBO: function (e) {
            let { type: t, ...n } = e;
            if (!c.A.isEnabled()) return !1;
            !(function e(t) {
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    i = h.get(f(t)),
                    r = {
                        ...i,
                        ...t,
                        value: t.value ?? i?.value ?? 0,
                        multiplier: Math.min(t.multiplier ?? i?.multiplier ?? 1, 7),
                        decayInterval: i?.decayInterval ?? new a.IX(),
                    };
                h.set(f(t), r),
                    n &&
                        r.decayInterval?.start(1e3, () => {
                            let t = h.get(f(r));
                            if (null != t) {
                                let n = r.multiplier !== t.multiplier && r.value !== t.value;
                                t.value <= 0 || n
                                    ? (t.decayInterval?.stop(),
                                      t.value <= 0 && (e({ ...t, value: 0, multiplier: 1 }), m.emitChange()))
                                    : (e({ ...t, value: t.value - 1 }), m.emitChange());
                            }
                        });
            })(n);
        },
        POGGERMODE_UPDATE_MESSAGE_COMBO: function (e) {
            let { comboMessage: t } = e;
            if (!c.A.isEnabled()) return !1;
            I.set(t.messageId, t);
        },
        MESSAGE_CREATE: function (e) {
            let {
                channelId: t,
                message: { mentions: n, author: i, nonce: r },
            } = e;
            if (!c.A.isEnabled()) return !1;
            let a = l.default.getId();
            if (!p(i?.id, a, r, A)) return !1;
            let s = h.get(f({ userId: i?.id ?? "???", channelId: t }));
            if (
                c.A.screenshakeEnabled &&
                c.A.screenshakeEnabledLocations[_.uD.MENTION] &&
                null != n &&
                null != n.find((e) => e.id === a)
            ) {
                let e = null != s ? ((0, u.U$)(s, _.fZ.LEVEL_4) ?? 0.001) : 4 * Math.random();
                return d._.dispatch(E.jej.SHAKE_APP, { duration: 1e3, intensity: e }), !0;
            }
            return !1;
        },
    }),
    g = m;
