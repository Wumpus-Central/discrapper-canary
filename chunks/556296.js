let r;
(n.d(t, {
    Ek: () => D,
    I1: () => k,
    ZP: () => eE
}),
    n(415506),
    n(388685),
    n(539854),
    n(704826),
    n(35282));
var i,
    a = n(348327),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(570140),
    d = n(714338),
    f = n(710845),
    _ = n(280049),
    p = n(658785),
    h = n(41534),
    m = n(131951),
    g = n(626135),
    E = n(358085),
    b = n(998502),
    y = n(378799),
    O = n(13140),
    v = n(808506),
    I = n(981631),
    T = n(356659),
    S = n(710111),
    A = n(444675);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            }));
    }
    return e;
}
function R(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let w = new f.Z('KeybindsStore'),
    D = {
        id: '1000',
        action: I.kg4.TOGGLE_MUTE,
        shortcut: (0, O.Kd)('mod+shift+m'),
        enabled: !0,
        managed: !0,
        params: {}
    };
function L() {
    var e;
    let t = null != (e = (0, y.pz)(!1).get('Backquote')) ? e : '`';
    return ('+' === t ? (t = 'plus') : 0 === t.length && (t = '`'), 'shift+'.concat(t));
}
let x = '1001',
    M = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return {
            id: x,
            action: I.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
            shortcut: e,
            enabled: t,
            managed: !0,
            params: {}
        };
    },
    k = (e) => {
        let t = (0, O.UR)('shift');
        return null != t && (1 !== e.length || e[0][1] !== t);
    },
    j = (e, t, n, r) => {
        var i, a;
        let o = (0, y.pz)(!1).get('Backquote'),
            s = (0, y.pz)(!0).get('Backquote');
        (0, h.IK)(e.message, null, {
            tags: {
                backquoteKey: null != o ? o : 'unknown',
                nativeBackquoteKey: null != s ? s : 'unknown',
                backquoteCode: ''.concat(null == (i = (0, y.T_)(null != o ? o : '`')) ? void 0 : i.keyCode),
                nativeBackquoteCode: ''.concat(null == (a = (0, y.T_)(null != s ? s : '`')) ? void 0 : a.keyCode)
            },
            extra: C(
                {
                    stack: e.stack,
                    keyCombo: t,
                    combo: n,
                    layoutMapBacktick: o,
                    env: I.CgE[(0, O.dU)()],
                    backtickEventShape: (0, y.T_)('`'),
                    backquoteKeyShape: (0, y.T_)(null != o ? o : '`'),
                    nativeBackquoteKeyShape: (0, y.T_)(null != s ? s : '`')
                },
                r
            )
        });
    };
function U(e) {
    var t;
    let n = (0, O.Kd)(e),
        r = (0, y.T_)('`'),
        i = null != (t = null == r ? void 0 : r.keyCode) ? t : (0, O.UR)('`');
    return k(n) ? n : null == i ? (j(Error('Unable to get backtick code for overlay default keybind'), e, n, { rawBacktickShape: r }), null) : (j(Error('Default overlay keybind is unsupported'), e, n, { rawBacktickCode: i }), [...n, [I.MoX.KEYBOARD_KEY, i, (0, O.dU)()]]);
}
let G = () => {
        let e = L();
        'shift' === e && (j(Error('Default overlay keybind is only shift'), e, null), (e = 'shift+`'));
        let t = U(e);
        if (null == t) return M([], !1);
        if (k(t)) return M(t, !0);
        let n = (0, O.UR)('shift'),
            r = (0, y.T_)('`');
        return (0 === t.length ? j(Error('Default overlay keybind combo is empty'), e, t) : null == n ? j(Error('Unable to get shift code'), e, t, { shiftCode: n }) : null == r && j(Error('Unable to get backtick code'), e, t), M(t, !1));
    },
    B = {},
    V = {},
    F = 0,
    Z = !0,
    H = {},
    Y = !1,
    W = !1,
    K = [I.kg4.PUSH_TO_TALK, I.kg4.TOGGLE_OVERLAY_INPUT_LOCK, I.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET];
function z(e) {
    switch (e) {
        case D.id:
            return D;
        case G().id:
            return G();
        default:
            return V[e];
    }
}
function q(e, t) {
    let n = z(e);
    null != n && H[n.action].onTrigger(t, n);
}
function X() {
    let e = G();
    null == l().find(V, (t) => e.action === t.action && t.enabled && t.shortcut.length > 0) && Z && !W && (er(e), (W = !0));
}
function Q() {
    let e = G();
    W && (en(e.id), (W = !1));
}
function J() {
    let { showKeybindIndicators: e } = p.Z.getCurrentConfig({ location: 'KeybindsStore' });
    null == l().find(V, (e) => D.action === e.action && e.enabled && e.shortcut.length > 0) && !__OVERLAY__ && !Y && Z && e && (er(D), (Y = !0));
}
function $() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    (Y || e) && (en(D.id), (Y = !1));
}
function ee(e) {
    let { showKeybindIndicators: t } = e;
    t ? J() : $(!0);
}
function et(e, t, n, r) {
    if (E.isPlatformEmbedded) b.ZP.inputEventRegister(parseInt(e), t, n, r);
    else {
        en(e);
        let i = (0, _.r)(document);
        (r.keyup && i.bindGlobal((0, O.BB)(t), () => n(!1), 'keyup'), r.keydown && i.bindGlobal((0, O.BB)(t), () => n(!0), 'keydown'), (B[e] = i));
    }
}
function en(e) {
    if (E.isPlatformEmbedded) b.ZP.inputEventUnregister(parseInt(e, 10));
    else {
        let t = B[e];
        if (null != t) {
            let n = V[e];
            if (null != n) {
                let e = H[n.action];
                (null == e ? void 0 : e.isPressed) === !0 && A.nextTick(() => e.onTrigger(!1, n));
            }
            (t.reset(), (B[e] = null));
        }
    }
}
function er(e) {
    if (!Z || __OVERLAY__) return;
    let { shortcut: t, action: n, enabled: r } = e;
    if (0 === t.length || null == t || n === I.kg4.UNASSIGNED || !r) return;
    if (null == H[n]) return void w.error('[kb store] KeybindStore: Looking for callback action '.concat(n, " but it doesn't exist in this version. Skipping"));
    let i = e.id,
        a = H[n].keyEvents;
    (e.action === I.kg4.TOGGLE_MUTE && $(),
        e.action === I.kg4.TOGGLE_OVERLAY_INPUT_LOCK && Q(),
        et(
            i,
            t,
            (e) => q(i, e),
            C(
                {
                    focused: !0,
                    blurred: !0,
                    keydown: !1,
                    keyup: !1
                },
                a
            )
        ),
        d.Z.validateKeybind((0, O.BB)(t)));
}
function ei(e) {
    let t = C(
        {
            id: F.toString(),
            enabled: !0,
            action: I.kg4.UNASSIGNED,
            shortcut: [],
            managed: !1,
            params: {}
        },
        e
    );
    return ((V = P(C({}, V), { [t.id]: t })), (F += 1), t);
}
function ea(e) {
    (en(e.id), (V = C({}, V)), delete V[e.id], e.action === I.kg4.TOGGLE_MUTE && J(), e.action === I.kg4.TOGGLE_OVERLAY_INPUT_LOCK && X());
}
function eo(e) {
    let { keybind: t } = e;
    er(ei(t));
}
function es(e) {
    let { id: t } = e,
        n = V[t];
    (__OVERLAY__ ||
        g.default.track(I.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
            keybind_action: n.action,
            keybind_is_bound: !1,
            keybind_has_shortcut: !1
        }),
        null != n && ea(n));
}
function el(e) {
    let { keybind: t } = e;
    ((V = P(C({}, V), { [t.id]: t })),
        __OVERLAY__ ||
            (g.default.track(I.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
                keybind_action: t.action,
                keybind_is_bound: !0,
                keybind_has_shortcut: t.shortcut.length > 0
            }),
            t.action === I.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? g.default.track(I.rMx.OVERLAY_SETTINGS_UPDATED, { hotkey: t.action === I.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? (0, O.BB)(t.shortcut) : null }) : t.action === I.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET && g.default.track(I.rMx.OVERLAY_SETTINGS_UPDATED, { text_activation_hotkey: t.action === I.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, O.BB)(t.shortcut) : null })),
        er(t));
}
function ec(e) {
    let { enable: t } = e;
    ((Z = t), t ? (d.Z.enable(), l().forEach(V, er), J(), X()) : (d.Z.disable(), l().forEach(V, (e) => en(e.id)), $(), Q()));
}
function eu(e) {
    let { keybinds: t } = e;
    ((H = t),
        (B = {}),
        (F = 0),
        Object.values(V).filter((e) => K.includes(e.action) && e.managed).length !== K.length && ep(),
        l().forEach(V, (e) => {
            F = Math.max(parseInt(e.id, 10), F) + 1;
            try {
                er(e);
            } catch (t) {
                w.error('Failed to register keybind', e, t);
            }
        }),
        (Z = !0),
        null == r && (r = p.Z.subscribe({ location: 'KeybindsStore' }, ee)));
}
function ed(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        null == l().find(V, (t) => t.action === e && (!n || t.managed === n)) &&
        (er(
            ei({
                action: e,
                enabled: !0,
                shortcut: (0, O.Kd)(t),
                managed: !0,
                params: {}
            })
        ),
        !0)
    );
}
function ef(e) {
    let t = !1;
    return (
        l().each(V, (n) => {
            n.action === e && !0 === n.managed && (ea(n), (t = !0));
        }),
        t
    );
}
let e_ = [
    function () {
        let e = m.Z.getShortcuts();
        return (
            l().each(V, (t) => {
                t.action === I.kg4.PUSH_TO_TALK && !0 === t.managed && (null == t.context || null == e[t.context]) && ea(t);
            }),
            l().reduce(
                m.Z.getShortcuts(),
                (e, t, n) => {
                    let r = l().find(V, (e) => e.action === I.kg4.PUSH_TO_TALK && !0 === e.managed && e.context === n);
                    if (null == r)
                        er(
                            ei({
                                action: I.kg4.PUSH_TO_TALK,
                                enabled: !0,
                                shortcut: t,
                                managed: !0,
                                params: {},
                                context: n
                            })
                        );
                    else {
                        if (null == t) return e || !1;
                        el({
                            keybind: P(C({}, r), {
                                shortcut: 'string' == typeof t ? (0, O.Kd)(t) : t,
                                context: n
                            })
                        });
                    }
                    return !0;
                },
                !1
            )
        );
    },
    function () {
        return !!v.default.getAnyGlobalEnabledOverlay() && ed(I.kg4.TOGGLE_OVERLAY_INPUT_LOCK, L());
    },
    function () {
        return !!v.default.getAnyGlobalEnabledOverlay() && ed(I.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, ']`');
    },
    function () {
        let e = ef(I.kg4.SOUNDBOARD_HOLD);
        return ed(I.kg4.SOUNDBOARD_HOLD, S.D_, !1) || e;
    },
    function () {
        return ed(I.kg4.SAVE_CLIP, T.D_);
    }
];
function ep() {
    return (J(), X(), e_.reduce((e, t) => t() || e, !1));
}
function eh() {
    return (
        (async () => {
            (await (0, y.SW)(), ep() && eg.emitChange());
        })(),
        !1
    );
}
d.Z.setGetKeybindList(() => {
    let e = [];
    for (let t in V) V.hasOwnProperty(t) && e.push((0, O.BB)(V[t].shortcut));
    let { showKeybindIndicators: t } = p.Z.getCurrentConfig({ location: 'KeybindsStore' });
    return (t && e.push((0, O.BB)(D.shortcut)), e);
});
class em extends (i = c.ZP.DeviceSettingsStore) {
    initialize(e) {
        (__OVERLAY__ || this.waitFor(m.Z, v.default), (V = null != e ? e : {}));
    }
    getUserAgnosticState() {
        return V;
    }
    hasKeybind(e, t, n) {
        for (let r in V) for (let i of V[r].shortcut) if (i[0] === e && i[1] === t && (void 0 === n || n === i[2])) return !0;
        return !1;
    }
    hasExactKeybind(e) {
        for (let t in V) {
            let n = V[t];
            if (l().isEqual(n.shortcut, e)) return !0;
        }
        return !1;
    }
    getKeybindForAction(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            { showKeybindIndicators: r } = p.Z.getCurrentConfig({ location: 'KeybindsStore' }),
            i = l().find(V, (r) => r.action === e && (!t || r.managed) && (!n || (r.shortcut.length > 0 && r.enabled)));
        return null != i ? i : r && e === I.kg4.TOGGLE_MUTE ? D : null;
    }
    getOverlayKeybind() {
        let e = this.getKeybindForAction(I.kg4.TOGGLE_OVERLAY_INPUT_LOCK, !0);
        return null != e ? e : G();
    }
    getOverlayChatKeybind() {
        return this.getKeybindForAction(I.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0);
    }
}
(N(em, 'displayName', 'KeybindsStore'),
    N(em, 'persistKey', 'keybinds'),
    N(em, 'migrations', [
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { v: t, keybinds: n = e } = e;
            return l().reduce(n, (e, n, r) => (isNaN(parseInt(n.id, 10)) || n.id !== r || ((null == t || t < 2) && ('string' == typeof n.shortcut ? ((n.shortcut = n.shortcut.replace('escape', 'esc').replace('capslock', 'caps lock').replace('numlock', 'num lock').replace('pageup', 'page up').replace('pagedown', 'page down')), (n.shortcut = (0, O.Kd)(n.shortcut))) : (n.shortcut = n.shortcut.map((e) => (e.length < 3 ? [...e, (0, O.dU)()] : e)))), (e[r] = n)), e), {});
        },
        (e) => e,
        (e) => {
            let { keybinds: t = e } = e;
            return l().reduce(
                t,
                (e, t, n) => {
                    if ((0, E.isLinux)() && t.action === I.kg4.SOUNDBOARD_HOLD) {
                        let n = t.shortcut.map((e) => e[1]),
                            r = (0, O.Kd)('`').map((e) => e[1]);
                        if (o()(n, r)) return e;
                    }
                    return P(C({}, e), { [n]: t });
                },
                {}
            );
        },
        (e) => {
            let t = {};
            for (let r in e) {
                let i = e[r];
                if (null != i) {
                    if (null == i.params || null == i.enabled) {
                        var n;
                        i = P(C({}, i), {
                            enabled: !1 !== i.enabled,
                            params: null != (n = i.params) ? n : {}
                        });
                    }
                    t[r] = i;
                }
            }
            return t;
        },
        (e) => l().reduce(e, (e, t, n) => (t.action === I.kg4.TOGGLE_GO_LIVE_STREAMING && t.managed ? e : P(C({}, e), { [n]: t })), {})
    ]));
let eg = new em(u.Z, {
        CONNECTION_OPEN: ep,
        LOGIN_SUCCESS: eh,
        AUDIO_SET_MODE: ep,
        OVERLAY_SET_ENABLED: ep,
        RPC_APP_CONNECTED: ep,
        RPC_APP_DISCONNECTED: ep,
        KEYBINDS_ADD_KEYBIND: eo,
        KEYBINDS_DELETE_KEYBIND: es,
        KEYBINDS_SET_KEYBIND: el,
        KEYBINDS_ENABLE_ALL_KEYBINDS: ec,
        KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: eu
    }),
    eE = eg;
