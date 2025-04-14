let r;
n.d(t, {
    Ek: () => w,
    ZP: () => e_
}),
    n(539854),
    n(388685),
    n(704826),
    n(35282);
var i,
    o = n(348327),
    a = n.n(o),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(570140),
    d = n(714338),
    f = n(710845),
    _ = n(280049),
    p = n(658785),
    h = n(131951),
    m = n(626135),
    g = n(358085),
    E = n(998502),
    b = n(378799),
    y = n(13140),
    v = n(808506),
    O = n(981631),
    I = n(356659),
    S = n(710111),
    T = n(444675);
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
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = new f.Z('KeybindsStore'),
    w = {
        id: '1000',
        action: O.kg4.TOGGLE_MUTE,
        shortcut: (0, y.Kd)('mod+shift+m'),
        enabled: !0,
        managed: !0,
        params: {}
    };
function D() {
    var e;
    let t = null != (e = (0, b.pz)(!1).get('Backquote')) ? e : '`';
    return '+' === t && (t = 'plus'), 'shift+'.concat(t);
}
let L = '1001',
    x = () => {
        let e = D(),
            t = (0, y.Kd)(e);
        return {
            id: L,
            action: O.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
            shortcut: t,
            enabled: !0,
            managed: !0,
            params: {}
        };
    },
    M = {},
    k = {},
    j = 0,
    U = !0,
    G = {},
    B = !1,
    V = !1,
    F = [O.kg4.PUSH_TO_TALK, O.kg4.TOGGLE_OVERLAY_INPUT_LOCK, O.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET];
function Z(e) {
    switch (e) {
        case w.id:
            return w;
        case x().id:
            return x();
        default:
            return k[e];
    }
}
function H(e, t) {
    let n = Z(e);
    null != n && G[n.action].onTrigger(t, n);
}
function W() {
    let e = x();
    null == l().find(k, (t) => e.action === t.action && t.enabled && t.shortcut.length > 0) && U && !V && (J(e), (V = !0));
}
function Y() {
    let e = x();
    V && (X(e.id), (V = !1));
}
function K() {
    let { showKeybindIndicators: e } = p.Z.getCurrentConfig({ location: 'KeybindsStore' });
    null == l().find(k, (e) => w.action === e.action && e.enabled && e.shortcut.length > 0) && !__OVERLAY__ && !B && U && e && (J(w), (B = !0));
}
function z() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    (B || e) && (X(w.id), (B = !1));
}
function q(e) {
    let { showKeybindIndicators: t } = e;
    t ? K() : z(!0);
}
function Q(e, t, n, r) {
    if (g.isPlatformEmbedded) E.ZP.inputEventRegister(parseInt(e), t, n, r);
    else {
        X(e);
        let i = (0, _.r)(document);
        r.keyup && i.bindGlobal((0, y.BB)(t), () => n(!1), 'keyup'), r.keydown && i.bindGlobal((0, y.BB)(t), () => n(!0), 'keydown'), (M[e] = i);
    }
}
function X(e) {
    if (g.isPlatformEmbedded) E.ZP.inputEventUnregister(parseInt(e, 10));
    else {
        let t = M[e];
        if (null != t) {
            let n = k[e];
            if (null != n) {
                let e = G[n.action];
                (null == e ? void 0 : e.isPressed) === !0 && T.nextTick(() => e.onTrigger(!1, n));
            }
            t.reset(), (M[e] = null);
        }
    }
}
function J(e) {
    if (!U || __OVERLAY__) return;
    let { shortcut: t, action: n, enabled: r } = e;
    if (0 === t.length || null == t || n === O.kg4.UNASSIGNED || !r) return;
    if (null == G[n]) return void P.error('[kb store] KeybindStore: Looking for callback action '.concat(n, " but it doesn't exist in this version. Skipping"));
    let i = e.id,
        o = G[n].keyEvents;
    e.action === O.kg4.TOGGLE_MUTE && z(),
        e.action === O.kg4.TOGGLE_OVERLAY_INPUT_LOCK && Y(),
        Q(
            i,
            t,
            (e) => H(i, e),
            A(
                {
                    focused: !0,
                    blurred: !0,
                    keydown: !1,
                    keyup: !1
                },
                o
            )
        ),
        d.Z.validateKeybind((0, y.BB)(e.shortcut));
}
function $(e) {
    let t = A(
        {
            id: j.toString(),
            enabled: !0,
            action: O.kg4.UNASSIGNED,
            shortcut: [],
            managed: !1,
            params: {}
        },
        e
    );
    return (k = R(A({}, k), { [t.id]: t })), (j += 1), t;
}
function ee(e) {
    X(e.id), (k = A({}, k)), delete k[e.id], e.action === O.kg4.TOGGLE_MUTE && K(), e.action === O.kg4.TOGGLE_OVERLAY_INPUT_LOCK && W();
}
function et(e) {
    let { keybind: t } = e;
    J($(t));
}
function en(e) {
    let { id: t } = e,
        n = k[t];
    __OVERLAY__ ||
        m.default.track(O.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
            keybind_action: n.action,
            keybind_is_bound: !1,
            keybind_has_shortcut: !1
        }),
        null != n && ee(n);
}
function er(e) {
    let { keybind: t } = e;
    (k = R(A({}, k), { [t.id]: t })),
        __OVERLAY__ ||
            (m.default.track(O.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
                keybind_action: t.action,
                keybind_is_bound: !0,
                keybind_has_shortcut: t.shortcut.length > 0
            }),
            t.action === O.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? m.default.track(O.rMx.OVERLAY_SETTINGS_UPDATED, { hotkey: t.action === O.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? (0, y.BB)(t.shortcut) : null }) : t.action === O.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET && m.default.track(O.rMx.OVERLAY_SETTINGS_UPDATED, { text_activation_hotkey: t.action === O.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, y.BB)(t.shortcut) : null })),
        J(t);
}
function ei(e) {
    let { enable: t } = e;
    (U = t), t ? (d.Z.enable(), l().forEach(k, J), K(), W()) : (d.Z.disable(), l().forEach(k, (e) => X(e.id)), z(), Y());
}
function eo(e) {
    let { keybinds: t } = e;
    (G = t),
        (M = {}),
        (j = 0),
        Object.values(k).filter((e) => F.includes(e.action) && e.managed).length !== F.length && ec(),
        l().forEach(k, (e) => {
            j = Math.max(parseInt(e.id, 10), j) + 1;
            try {
                J(e);
            } catch (t) {
                P.error('Failed to register keybind', e, t);
            }
        }),
        (U = !0),
        null == r && (r = p.Z.subscribe({ location: 'KeybindsStore' }, q));
}
function ea(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        null == l().find(k, (t) => t.action === e && (!n || t.managed === n)) &&
        (J(
            $({
                action: e,
                enabled: !0,
                shortcut: (0, y.Kd)(t),
                managed: !0,
                params: {}
            })
        ),
        !0)
    );
}
function es(e) {
    let t = !1;
    return (
        l().each(k, (n) => {
            n.action === e && !0 === n.managed && (ee(n), (t = !0));
        }),
        t
    );
}
let el = [
    function () {
        let e = h.Z.getShortcuts();
        return (
            l().each(k, (t) => {
                t.action === O.kg4.PUSH_TO_TALK && !0 === t.managed && (null == t.context || null == e[t.context]) && ee(t);
            }),
            l().reduce(
                h.Z.getShortcuts(),
                (e, t, n) => {
                    let r = l().find(k, (e) => e.action === O.kg4.PUSH_TO_TALK && !0 === e.managed && e.context === n);
                    if (null == r)
                        J(
                            $({
                                action: O.kg4.PUSH_TO_TALK,
                                enabled: !0,
                                shortcut: t,
                                managed: !0,
                                params: {},
                                context: n
                            })
                        );
                    else {
                        if (null == t) return e || !1;
                        er({
                            keybind: R(A({}, r), {
                                shortcut: 'string' == typeof t ? (0, y.Kd)(t) : t,
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
        return !!v.default.getAnyGlobalEnabledOverlay() && ea(O.kg4.TOGGLE_OVERLAY_INPUT_LOCK, D());
    },
    function () {
        return !!v.default.getAnyGlobalEnabledOverlay() && ea(O.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, ']`');
    },
    function () {
        let e = es(O.kg4.SOUNDBOARD_HOLD);
        return ea(O.kg4.SOUNDBOARD_HOLD, S.D_, !1) || e;
    },
    function () {
        return ea(O.kg4.SAVE_CLIP, I.D_);
    }
];
function ec() {
    return K(), W(), el.reduce((e, t) => t() || e, !1);
}
function eu() {
    return (
        (async () => {
            await (0, b.SW)(), ec() && ef.emitChange();
        })(),
        !1
    );
}
d.Z.setGetKeybindList(() => {
    let e = [];
    for (let t in k) k.hasOwnProperty(t) && e.push((0, y.BB)(k[t].shortcut));
    let { showKeybindIndicators: t } = p.Z.getCurrentConfig({ location: 'KeybindsStore' });
    return t && e.push((0, y.BB)(w.shortcut)), e;
});
class ed extends (i = c.ZP.DeviceSettingsStore) {
    initialize(e) {
        __OVERLAY__ || this.waitFor(h.Z, v.default), (k = null != e ? e : {});
    }
    getUserAgnosticState() {
        return k;
    }
    hasKeybind(e, t, n) {
        for (let r in k) for (let i of k[r].shortcut) if (i[0] === e && i[1] === t && (void 0 === n || n === i[2])) return !0;
        return !1;
    }
    hasExactKeybind(e) {
        for (let t in k) {
            let n = k[t];
            if (l().isEqual(n.shortcut, e)) return !0;
        }
        return !1;
    }
    getKeybindForAction(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            { showKeybindIndicators: r } = p.Z.getCurrentConfig({ location: 'KeybindsStore' }),
            i = l().find(k, (r) => r.action === e && (!t || r.managed) && (!n || (r.shortcut.length > 0 && r.enabled)));
        return null != i ? i : r && e === O.kg4.TOGGLE_MUTE ? w : null;
    }
    getOverlayKeybind() {
        let e = this.getKeybindForAction(O.kg4.TOGGLE_OVERLAY_INPUT_LOCK, !0);
        return null != e ? e : x();
    }
    getOverlayChatKeybind() {
        return this.getKeybindForAction(O.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0);
    }
}
N(ed, 'displayName', 'KeybindsStore'),
    N(ed, 'persistKey', 'keybinds'),
    N(ed, 'migrations', [
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { v: t, keybinds: n = e } = e;
            return l().reduce(n, (e, n, r) => (isNaN(parseInt(n.id, 10)) || n.id !== r || ((null == t || t < 2) && ('string' == typeof n.shortcut ? ((n.shortcut = n.shortcut.replace('escape', 'esc').replace('capslock', 'caps lock').replace('numlock', 'num lock').replace('pageup', 'page up').replace('pagedown', 'page down')), (n.shortcut = (0, y.Kd)(n.shortcut))) : (n.shortcut = n.shortcut.map((e) => (e.length < 3 ? [...e, (0, y.dU)()] : e)))), (e[r] = n)), e), {});
        },
        (e) => e,
        (e) => {
            let { keybinds: t = e } = e;
            return l().reduce(
                t,
                (e, t, n) => {
                    if ((0, g.isLinux)() && t.action === O.kg4.SOUNDBOARD_HOLD) {
                        let n = t.shortcut.map((e) => e[1]),
                            r = (0, y.Kd)('`').map((e) => e[1]);
                        if (a()(n, r)) return e;
                    }
                    return R(A({}, e), { [n]: t });
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
                        i = R(A({}, i), {
                            enabled: !1 !== i.enabled,
                            params: null != (n = i.params) ? n : {}
                        });
                    }
                    t[r] = i;
                }
            }
            return t;
        },
        (e) => l().reduce(e, (e, t, n) => (t.action === O.kg4.TOGGLE_GO_LIVE_STREAMING && t.managed ? e : R(A({}, e), { [n]: t })), {})
    ]);
let ef = new ed(u.Z, {
        CONNECTION_OPEN: ec,
        LOGIN_SUCCESS: eu,
        AUDIO_SET_MODE: ec,
        OVERLAY_SET_ENABLED: ec,
        RPC_APP_CONNECTED: ec,
        RPC_APP_DISCONNECTED: ec,
        KEYBINDS_ADD_KEYBIND: et,
        KEYBINDS_DELETE_KEYBIND: en,
        KEYBINDS_SET_KEYBIND: er,
        KEYBINDS_ENABLE_ALL_KEYBINDS: ei,
        KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: eo
    }),
    e_ = ef;
