n.d(t, { Ay: () => p, gN: () => S });
var i = n(17928),
    a = n(713402),
    r = n(451988),
    s = n(228366),
    l = n(495544),
    o = n(309010),
    d = n(625494),
    c = n(3137),
    _ = n(103640),
    E = n(31408),
    u = n(652215);
let A = new Set(),
    I = new a.J(
        function (e) {
            let { userId: t, channelId: n } = e;
            return [t, n];
        },
        function (e) {
            let { userId: t, channelId: n } = e;
            return `${n}-${t}`;
        },
    ),
    T = new a.J(
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
    h = (e) => {
        let { userId: t, channelId: n } = e;
        return `${t}-${n}`;
    };
function S(e, t, n, i) {
    return !(e !== t || null == n || i.has(n)) && (i.add(n), !0);
}
class N extends i.Ay.Store {
    static displayName = "PoggermodeStore";
    initialize() {
        this.waitFor(l.default, c.A, o.A);
    }
    getComboScore(e, t) {
        let n = I.get(h({ userId: e, channelId: t }));
        return null == n ? 0 : (0, _.RL)(n);
    }
    getUserCombo(e, t) {
        return I.get(h({ userId: e, channelId: t }));
    }
    isComboing(e, t) {
        var n;
        let i = this.getUserCombo(e, t);
        return null != i && i.value >= c.A.combosRequiredCount && null != (n = i) && (n.value > 0 || n?.multiplier > 1);
    }
    getMessageCombo(e) {
        let t = T.get(e);
        return t?.combo ?? void 0;
    }
    getMostRecentMessageCombo(e) {
        let t = T.values(e);
        return t[t.length - 1];
    }
    getUserComboShakeIntensity(e, t, n, i) {
        let a = this.getUserCombo(e, t);
        return null != a ? (0, _.U$)(a, i) * n : 0;
    }
}
let f = new N(s.h, {
        POGGERMODE_UPDATE_COMBO: function (e) {
            let { type: t, ...n } = e;
            if (!c.A.isEnabled()) return !1;
            !(function e(t) {
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    i = I.get(h(t)),
                    a = {
                        ...i,
                        ...t,
                        value: t.value ?? i?.value ?? 0,
                        multiplier: Math.min(t.multiplier ?? i?.multiplier ?? 1, 7),
                        decayInterval: i?.decayInterval ?? new r.IX(),
                    };
                I.set(h(t), a),
                    n &&
                        a.decayInterval?.start(1e3, () => {
                            let t = I.get(h(a));
                            if (null != t) {
                                let n = a.multiplier !== t.multiplier && a.value !== t.value;
                                t.value <= 0 || n
                                    ? (t.decayInterval?.stop(),
                                      t.value <= 0 && (e({ ...t, value: 0, multiplier: 1 }), f.emitChange()))
                                    : (e({ ...t, value: t.value - 1 }), f.emitChange());
                            }
                        });
            })(n);
        },
        POGGERMODE_UPDATE_MESSAGE_COMBO: function (e) {
            let { comboMessage: t } = e;
            if (!c.A.isEnabled()) return !1;
            T.set(t.messageId, t);
        },
        MESSAGE_CREATE: function (e) {
            let {
                channelId: t,
                message: { mentions: n, author: i, nonce: a },
            } = e;
            if (!c.A.isEnabled()) return !1;
            let r = l.default.getId();
            if (!S(i?.id, r, a, A)) return !1;
            let s = I.get(h({ userId: i?.id ?? "???", channelId: t }));
            if (
                c.A.screenshakeEnabled &&
                c.A.screenshakeEnabledLocations[E.uD.MENTION] &&
                null != n &&
                null != n.find((e) => e.id === r)
            ) {
                let e = null != s ? ((0, _.U$)(s, E.fZ.LEVEL_4) ?? 0.001) : 4 * Math.random();
                return d._.dispatch(u.jej.SHAKE_APP, { duration: 1e3, intensity: e }), !0;
            }
            return !1;
        },
    }),
    p = f;
