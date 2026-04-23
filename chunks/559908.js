n.d(t, { Ay: () => f, gN: () => N });
var i = n(17928),
    r = n(713402),
    a = n(451988),
    s = n(228366),
    _ = n(495544),
    l = n(309010),
    o = n(625494),
    E = n(3137),
    d = n(103640),
    c = n(31408),
    u = n(652215);
let I = new Set(),
    A = new r.J(
        function (e) {
            let { userId: t, channelId: n } = e;
            return [t, n];
        },
        function (e) {
            let { userId: t, channelId: n } = e;
            return `${n}-${t}`;
        },
    ),
    T = new r.J(
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
    S = (e) => {
        let { userId: t, channelId: n } = e;
        return `${t}-${n}`;
    };
function N(e, t, n, i) {
    return !(e !== t || null == n || i.has(n)) && (i.add(n), !0);
}
class O extends i.Ay.Store {
    static displayName = "PoggermodeStore";
    initialize() {
        this.waitFor(_.default, E.A, l.A);
    }
    getComboScore(e, t) {
        let n = A.get(S({ userId: e, channelId: t }));
        return null == n ? 0 : (0, d.RL)(n);
    }
    getUserCombo(e, t) {
        return A.get(S({ userId: e, channelId: t }));
    }
    isComboing(e, t) {
        var n;
        let i = this.getUserCombo(e, t);
        return null != i && i.value >= E.A.combosRequiredCount && null != (n = i) && (n.value > 0 || n?.multiplier > 1);
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
        let r = this.getUserCombo(e, t);
        return null != r ? (0, d.U$)(r, i) * n : 0;
    }
}
let R = new O(s.h, {
        POGGERMODE_UPDATE_COMBO: function (e) {
            let { type: t, ...n } = e;
            if (!E.A.isEnabled()) return !1;
            !(function e(t) {
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    i = A.get(S(t)),
                    r = {
                        ...i,
                        ...t,
                        value: t.value ?? i?.value ?? 0,
                        multiplier: Math.min(t.multiplier ?? i?.multiplier ?? 1, 7),
                        decayInterval: i?.decayInterval ?? new a.IX(),
                    };
                A.set(S(t), r),
                    n &&
                        r.decayInterval?.start(1e3, () => {
                            let t = A.get(S(r));
                            if (null != t) {
                                let n = r.multiplier !== t.multiplier && r.value !== t.value;
                                t.value <= 0 || n
                                    ? (t.decayInterval?.stop(),
                                      t.value <= 0 && (e({ ...t, value: 0, multiplier: 1 }), R.emitChange()))
                                    : (e({ ...t, value: t.value - 1 }), R.emitChange());
                            }
                        });
            })(n);
        },
        POGGERMODE_UPDATE_MESSAGE_COMBO: function (e) {
            let { comboMessage: t } = e;
            if (!E.A.isEnabled()) return !1;
            T.set(t.messageId, t);
        },
        MESSAGE_CREATE: function (e) {
            let {
                channelId: t,
                message: { mentions: n, author: i, nonce: r },
            } = e;
            if (!E.A.isEnabled()) return !1;
            let a = _.default.getId();
            if (!N(i?.id, a, r, I)) return !1;
            let s = A.get(S({ userId: i?.id ?? "???", channelId: t }));
            if (
                E.A.screenshakeEnabled &&
                E.A.screenshakeEnabledLocations[c.uD.MENTION] &&
                null != n &&
                null != n.find((e) => e.id === a)
            ) {
                let e = null != s ? ((0, d.U$)(s, c.fZ.LEVEL_4) ?? 0.001) : 4 * Math.random();
                return o._.dispatch(u.jej.SHAKE_APP, { duration: 1e3, intensity: e }), !0;
            }
            return !1;
        },
    }),
    f = R;
