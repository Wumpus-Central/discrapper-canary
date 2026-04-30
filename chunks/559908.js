"use strict";
n.d(t, { Ay: () => T, gN: () => g });
var i = n(17928),
    r = n(713402),
    s = n(451988),
    a = n(228366),
    o = n(495544),
    l = n(309010),
    u = n(625494),
    c = n(3137),
    d = n(103640),
    _ = n(31408),
    f = n(652215);
let h = new Set(),
    p = new r.J(
        function (e) {
            let { userId: t, channelId: n } = e;
            return [t, n];
        },
        function (e) {
            let { userId: t, channelId: n } = e;
            return `${n}-${t}`;
        },
    ),
    E = new r.J(
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
    ),
    m = (e) => {
        let { userId: t, channelId: n } = e;
        return `${t}-${n}`;
    };
function g(e, t, n, i) {
    return !(e !== t || null == n || i.has(n)) && (i.add(n), !0);
}
class A extends i.Ay.Store {
    static displayName = "PoggermodeStore";
    initialize() {
        this.waitFor(o.default, c.A, l.A);
    }
    getComboScore(e, t) {
        let n = p.get(m({ userId: e, channelId: t }));
        return null == n ? 0 : (0, d.RL)(n);
    }
    getUserCombo(e, t) {
        return p.get(m({ userId: e, channelId: t }));
    }
    isComboing(e, t) {
        var n;
        let i = this.getUserCombo(e, t);
        return null != i && i.value >= c.A.combosRequiredCount && null != (n = i) && (n.value > 0 || n?.multiplier > 1);
    }
    getMessageCombo(e) {
        let t = E.get(e);
        return t?.combo ?? void 0;
    }
    getMostRecentMessageCombo(e) {
        let t = E.values(e);
        return t[t.length - 1];
    }
    getUserComboShakeIntensity(e, t, n, i) {
        let r = this.getUserCombo(e, t);
        return null != r ? (0, d.U$)(r, i) * n : 0;
    }
}
let I = new A(a.h, {
        POGGERMODE_UPDATE_COMBO: function (e) {
            let { type: t, ...n } = e;
            if (!c.A.isEnabled()) return !1;
            !(function e(t) {
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    i = p.get(m(t)),
                    r = {
                        ...i,
                        ...t,
                        value: t.value ?? i?.value ?? 0,
                        multiplier: Math.min(t.multiplier ?? i?.multiplier ?? 1, 7),
                        decayInterval: i?.decayInterval ?? new s.IX(),
                    };
                p.set(m(t), r),
                    n &&
                        r.decayInterval?.start(1e3, () => {
                            let t = p.get(m(r));
                            if (null != t) {
                                let n = r.multiplier !== t.multiplier && r.value !== t.value;
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
                message: { mentions: n, author: i, nonce: r },
            } = e;
            if (!c.A.isEnabled()) return !1;
            let s = o.default.getId();
            if (!g(i?.id, s, r, h)) return !1;
            let a = p.get(m({ userId: i?.id ?? "???", channelId: t }));
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
