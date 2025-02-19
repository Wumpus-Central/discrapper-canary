let r;
n.d(t, {
    Ek: () => x,
    ZP: () => es
}),
    n(653041),
    n(47120),
    n(757143),
    n(301563);
var i,
    o = n(879443),
    a = n.n(o),
    s = n(414861),
    l = n.n(s),
    c = n(348327),
    u = n.n(c),
    d = n(392711),
    f = n.n(d),
    p = n(442837),
    _ = n(570140),
    h = n(714338),
    m = n(710845),
    g = n(658785),
    E = n(131951),
    v = n(626135),
    b = n(358085),
    y = n(998502),
    O = n(13140),
    S = n(808506),
    I = n(981631),
    T = n(356659),
    N = n(710111),
    A = n(444675);
function C(e, t, n) {
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
function R(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = new m.Z('KeybindsStore'),
    x = {
        id: '1000',
        action: I.kg4.TOGGLE_MUTE,
        shortcut: (0, O.Kd)('mod+shift+m'),
        enabled: !0,
        managed: !0,
        params: {}
    },
    L = {
        id: '1001',
        action: I.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
        shortcut: (0, O.Kd)('shift+`'),
        enabled: !0,
        managed: !0,
        params: {}
    },
    M = {},
    k = {},
    j = 0,
    U = !0,
    G = {},
    B = !1,
    Z = [I.kg4.PUSH_TO_TALK, I.kg4.TOGGLE_OVERLAY_INPUT_LOCK, I.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET];
function F(e) {
    switch (e) {
        case x.id:
            return x;
        case L.id:
            return L;
        default:
            return k[e];
    }
}
function V(e, t) {
    let n = F(e);
    null != n && G[n.action].onTrigger(t, n);
}
function H() {
    let { showKeybindIndicators: e } = g.Z.getCurrentConfig({ location: 'KeybindsStore' });
    null == f().find(k, (e) => x.action === e.action && e.enabled && e.shortcut.length > 0) && !__OVERLAY__ && !B && U && e && (q(x), (B = !0));
}
function W() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    (B || e) && (z(x.id), (B = !1));
}
function Y(e) {
    let { showKeybindIndicators: t } = e;
    t ? H() : W(!0);
}
function K(e, t, n, r) {
    if (b.isPlatformEmbedded) y.ZP.inputEventRegister(parseInt(e), t, n, r);
    else {
        z(e);
        let i = l()(new (a())(document));
        r.keyup && i.bindGlobal((0, O.BB)(t), () => n(!1), 'keyup'), r.keydown && i.bindGlobal((0, O.BB)(t), () => n(!0), 'keydown'), (M[e] = i);
    }
}
function z(e) {
    if (b.isPlatformEmbedded) y.ZP.inputEventUnregister(parseInt(e, 10));
    else if (M[e]) {
        let t = k[e],
            n = G[t.action];
        (null == n ? void 0 : n.isPressed) === !0 && A.nextTick(() => n.onTrigger(!1, t)), M[e].reset(), (M[e] = null);
    }
}
function q(e) {
    if (!U || __OVERLAY__) return;
    let { shortcut: t, action: n, enabled: r } = e;
    if ('' === t || null == t || n === I.kg4.UNASSIGNED || !r) return;
    if (null == G[n]) {
        D.error('[kb store] KeybindStore: Looking for callback action '.concat(n, " but it doesn't exist in this version. Skipping"));
        return;
    }
    let i = e.id,
        o = G[n].keyEvents;
    e.action === I.kg4.TOGGLE_MUTE && W(),
        K(
            i,
            t,
            (e) => V(i, e),
            R(
                {
                    focused: !0,
                    blurred: !0,
                    keydown: !1,
                    keyup: !1
                },
                o
            )
        ),
        h.Z.validateKeybind((0, O.BB)(e.shortcut));
}
function Q(e) {
    let t = R(
        {
            id: j.toString(),
            enabled: !0,
            action: I.kg4.UNASSIGNED,
            shortcut: [],
            managed: !1,
            params: {}
        },
        e
    );
    return (k = w(R({}, k), { [t.id]: t })), (j += 1), t;
}
function X(e) {
    z(e.id), (k = R({}, k)), delete k[e.id], e.action === I.kg4.TOGGLE_MUTE && H();
}
function J(e) {
    let { keybind: t } = e;
    q(Q(t));
}
function $(e) {
    let { id: t } = e,
        n = k[t];
    __OVERLAY__ ||
        v.default.track(I.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
            keybind_action: n.action,
            keybind_is_bound: !1,
            keybind_has_shortcut: !1
        }),
        null != n && X(n);
}
function ee(e) {
    let { keybind: t } = e;
    (k = w(R({}, k), { [t.id]: t })),
        __OVERLAY__ ||
            (v.default.track(I.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
                keybind_action: t.action,
                keybind_is_bound: !0,
                keybind_has_shortcut: t.shortcut.length > 0
            }),
            t.action === I.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? v.default.track(I.rMx.OVERLAY_SETTINGS_UPDATED, { hotkey: t.action === I.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? (0, O.BB)(t.shortcut) : null }) : t.action === I.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET && v.default.track(I.rMx.OVERLAY_SETTINGS_UPDATED, { text_activation_hotkey: t.action === I.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, O.BB)(t.shortcut) : null })),
        q(t);
}
function et(e) {
    let { enable: t } = e;
    (U = t), t ? (h.Z.enable(), f().forEach(k, q), H()) : (h.Z.disable(), f().forEach(k, (e) => z(e.id)), W());
}
function en(e) {
    let { keybinds: t } = e;
    (G = t),
        (M = {}),
        (j = 0),
        Object.values(k).filter((e) => Z.includes(e.action) && e.managed).length !== Z.length && eo(),
        f().forEach(k, (e) => {
            j = Math.max(parseInt(e.id, 10), j) + 1;
            try {
                q(e);
            } catch (t) {
                D.error('Failed to register keybind', e, t);
            }
        }),
        (U = !0),
        null == r && (r = g.Z.subscribe({ location: 'KeybindsStore' }, Y));
}
function er(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        null == f().find(k, (t) => t.action === e && (!n || t.managed === n)) &&
        (q(
            Q({
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
let ei = [
    function () {
        let e = E.Z.getShortcuts();
        return (
            f().each(k, (t) => {
                t.action === I.kg4.PUSH_TO_TALK && !0 === t.managed && (null == t.context || null == e[t.context]) && X(t);
            }),
            f().reduce(
                E.Z.getShortcuts(),
                (e, t, n) => {
                    let r = f().find(k, (e) => e.action === I.kg4.PUSH_TO_TALK && !0 === e.managed && e.context === n);
                    if (null == r)
                        q(
                            Q({
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
                        ee({
                            keybind: w(R({}, r), {
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
        return !!S.Z.getAnyGlobalEnabledOverlay() && er(I.kg4.TOGGLE_OVERLAY_INPUT_LOCK, 'shift+`');
    },
    function () {
        return !!S.Z.getAnyGlobalEnabledOverlay() && er(I.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, ']`');
    },
    function () {
        return er(I.kg4.SOUNDBOARD_HOLD, N.D_, !1);
    },
    function () {
        return er(I.kg4.SAVE_CLIP, T.D_);
    }
];
function eo() {
    return H(), ei.reduce((e, t) => t() || e, !1);
}
h.Z.setGetKeybindList(() => {
    let e = [];
    for (let t in k) k.hasOwnProperty(t) && e.push((0, O.BB)(k[t].shortcut));
    let { showKeybindIndicators: t } = g.Z.getCurrentConfig({ location: 'KeybindsStore' });
    return t && e.push((0, O.BB)(x.shortcut)), e;
});
class ea extends (i = p.ZP.DeviceSettingsStore) {
    initialize(e) {
        __OVERLAY__ || this.waitFor(E.Z, S.Z), (k = null != e ? e : {});
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
            if (f().isEqual(n.shortcut, e)) return !0;
        }
        return !1;
    }
    getKeybindForAction(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            { showKeybindIndicators: r } = g.Z.getCurrentConfig({ location: 'KeybindsStore' }),
            i = f().find(k, (r) => r.action === e && (!t || r.managed) && (!n || (r.shortcut.length > 0 && r.enabled)));
        return null != i ? i : r && e === I.kg4.TOGGLE_MUTE ? x : null;
    }
    getOverlayKeybind() {
        let e = this.getKeybindForAction(I.kg4.TOGGLE_OVERLAY_INPUT_LOCK, !0);
        return null != e ? e : L;
    }
    getOverlayChatKeybind() {
        return this.getKeybindForAction(I.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0);
    }
}
C(ea, 'displayName', 'KeybindsStore'),
    C(ea, 'persistKey', 'keybinds'),
    C(ea, 'migrations', [
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { v: t, keybinds: n = e } = e;
            return f().reduce(n, (e, n, r) => (isNaN(parseInt(n.id, 10)) || n.id !== r || ((null == t || t < 2) && ('string' == typeof n.shortcut ? ((n.shortcut = n.shortcut.replace('escape', 'esc').replace('capslock', 'caps lock').replace('numlock', 'num lock').replace('pageup', 'page up').replace('pagedown', 'page down')), (n.shortcut = (0, O.Kd)(n.shortcut))) : (n.shortcut = n.shortcut.map((e) => (e.length < 3 ? [...e, (0, O.dU)()] : e)))), (e[r] = n)), e), {});
        },
        (e) => e,
        (e) => {
            let { keybinds: t = e } = e;
            return f().reduce(
                t,
                (e, t, n) => {
                    if ((0, b.isLinux)() && t.action === I.kg4.SOUNDBOARD_HOLD) {
                        let n = t.shortcut.map((e) => e[1]),
                            r = (0, O.Kd)('`').map((e) => e[1]);
                        if (u()(n, r)) return e;
                    }
                    return w(R({}, e), { [n]: t });
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
                        i = w(R({}, i), {
                            enabled: !1 !== i.enabled,
                            params: null !== (n = i.params) && void 0 !== n ? n : {}
                        });
                    }
                    t[r] = i;
                }
            }
            return t;
        },
        (e) => f().reduce(e, (e, t, n) => (t.action === I.kg4.TOGGLE_GO_LIVE_STREAMING && t.managed ? e : w(R({}, e), { [n]: t })), {})
    ]);
let es = new ea(_.Z, {
    CONNECTION_OPEN: eo,
    AUDIO_SET_MODE: eo,
    OVERLAY_SET_ENABLED: eo,
    RPC_APP_CONNECTED: eo,
    RPC_APP_DISCONNECTED: eo,
    KEYBINDS_ADD_KEYBIND: J,
    KEYBINDS_DELETE_KEYBIND: $,
    KEYBINDS_SET_KEYBIND: ee,
    KEYBINDS_ENABLE_ALL_KEYBINDS: et,
    KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: en
});
