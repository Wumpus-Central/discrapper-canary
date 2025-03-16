let r;
n.d(t, {
    Ek: () => P,
    ZP: () => eo
}),
    n(653041),
    n(47120),
    n(757143),
    n(301563);
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
    b = n(13140),
    v = n(808506),
    y = n(981631),
    O = n(356659),
    I = n(710111),
    S = n(444675);
function T(e, t, n) {
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
function N(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let R = new f.Z('KeybindsStore'),
    P = {
        id: '1000',
        action: y.kg4.TOGGLE_MUTE,
        shortcut: (0, b.Kd)('mod+shift+m'),
        enabled: !0,
        managed: !0,
        params: {}
    },
    w = {
        id: '1001',
        action: y.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
        shortcut: (0, b.Kd)('shift+`'),
        enabled: !0,
        managed: !0,
        params: {}
    },
    D = {},
    L = {},
    x = 0,
    M = !0,
    k = {},
    j = !1,
    U = [y.kg4.PUSH_TO_TALK, y.kg4.TOGGLE_OVERLAY_INPUT_LOCK, y.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET];
function G(e) {
    switch (e) {
        case P.id:
            return P;
        case w.id:
            return w;
        default:
            return L[e];
    }
}
function B(e, t) {
    let n = G(e);
    null != n && k[n.action].onTrigger(t, n);
}
function F() {
    let { showKeybindIndicators: e } = p.Z.getCurrentConfig({ location: 'KeybindsStore' });
    null == l().find(L, (e) => P.action === e.action && e.enabled && e.shortcut.length > 0) && !__OVERLAY__ && !j && M && e && (Y(P), (j = !0));
}
function V() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    (j || e) && (W(P.id), (j = !1));
}
function Z(e) {
    let { showKeybindIndicators: t } = e;
    t ? F() : V(!0);
}
function H(e, t, n, r) {
    if (g.isPlatformEmbedded) E.ZP.inputEventRegister(parseInt(e), t, n, r);
    else {
        W(e);
        let i = (0, _.r)(document);
        r.keyup && i.bindGlobal((0, b.BB)(t), () => n(!1), 'keyup'), r.keydown && i.bindGlobal((0, b.BB)(t), () => n(!0), 'keydown'), (D[e] = i);
    }
}
function W(e) {
    if (g.isPlatformEmbedded) E.ZP.inputEventUnregister(parseInt(e, 10));
    else {
        let t = D[e];
        if (null != t) {
            let n = L[e],
                r = k[n.action];
            (null == r ? void 0 : r.isPressed) === !0 && S.nextTick(() => r.onTrigger(!1, n)), t.reset(), (D[e] = null);
        }
    }
}
function Y(e) {
    if (!M || __OVERLAY__) return;
    let { shortcut: t, action: n, enabled: r } = e;
    if ('' === t || null == t || n === y.kg4.UNASSIGNED || !r) return;
    if (null == k[n]) {
        R.error('[kb store] KeybindStore: Looking for callback action '.concat(n, " but it doesn't exist in this version. Skipping"));
        return;
    }
    let i = e.id,
        o = k[n].keyEvents;
    e.action === y.kg4.TOGGLE_MUTE && V(),
        H(
            i,
            t,
            (e) => B(i, e),
            N(
                {
                    focused: !0,
                    blurred: !0,
                    keydown: !1,
                    keyup: !1
                },
                o
            )
        ),
        d.Z.validateKeybind((0, b.BB)(e.shortcut));
}
function K(e) {
    let t = N(
        {
            id: x.toString(),
            enabled: !0,
            action: y.kg4.UNASSIGNED,
            shortcut: [],
            managed: !1,
            params: {}
        },
        e
    );
    return (L = C(N({}, L), { [t.id]: t })), (x += 1), t;
}
function z(e) {
    W(e.id), (L = N({}, L)), delete L[e.id], e.action === y.kg4.TOGGLE_MUTE && F();
}
function q(e) {
    let { keybind: t } = e;
    Y(K(t));
}
function Q(e) {
    let { id: t } = e,
        n = L[t];
    __OVERLAY__ ||
        m.default.track(y.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
            keybind_action: n.action,
            keybind_is_bound: !1,
            keybind_has_shortcut: !1
        }),
        null != n && z(n);
}
function X(e) {
    let { keybind: t } = e;
    (L = C(N({}, L), { [t.id]: t })),
        __OVERLAY__ ||
            (m.default.track(y.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
                keybind_action: t.action,
                keybind_is_bound: !0,
                keybind_has_shortcut: t.shortcut.length > 0
            }),
            t.action === y.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? m.default.track(y.rMx.OVERLAY_SETTINGS_UPDATED, { hotkey: t.action === y.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? (0, b.BB)(t.shortcut) : null }) : t.action === y.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET && m.default.track(y.rMx.OVERLAY_SETTINGS_UPDATED, { text_activation_hotkey: t.action === y.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, b.BB)(t.shortcut) : null })),
        Y(t);
}
function J(e) {
    let { enable: t } = e;
    (M = t), t ? (d.Z.enable(), l().forEach(L, Y), F()) : (d.Z.disable(), l().forEach(L, (e) => W(e.id)), V());
}
function $(e) {
    let { keybinds: t } = e;
    (k = t),
        (D = {}),
        (x = 0),
        Object.values(L).filter((e) => U.includes(e.action) && e.managed).length !== U.length && er(),
        l().forEach(L, (e) => {
            x = Math.max(parseInt(e.id, 10), x) + 1;
            try {
                Y(e);
            } catch (t) {
                R.error('Failed to register keybind', e, t);
            }
        }),
        (M = !0),
        null == r && (r = p.Z.subscribe({ location: 'KeybindsStore' }, Z));
}
function ee(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        null == l().find(L, (t) => t.action === e && (!n || t.managed === n)) &&
        (Y(
            K({
                action: e,
                enabled: !0,
                shortcut: (0, b.Kd)(t),
                managed: !0,
                params: {}
            })
        ),
        !0)
    );
}
function et(e) {
    let t = !1;
    return (
        l().each(L, (n) => {
            n.action === e && !0 === n.managed && (z(n), (t = !0));
        }),
        t
    );
}
let en = [
    function () {
        let e = h.Z.getShortcuts();
        return (
            l().each(L, (t) => {
                t.action === y.kg4.PUSH_TO_TALK && !0 === t.managed && (null == t.context || null == e[t.context]) && z(t);
            }),
            l().reduce(
                h.Z.getShortcuts(),
                (e, t, n) => {
                    let r = l().find(L, (e) => e.action === y.kg4.PUSH_TO_TALK && !0 === e.managed && e.context === n);
                    if (null == r)
                        Y(
                            K({
                                action: y.kg4.PUSH_TO_TALK,
                                enabled: !0,
                                shortcut: t,
                                managed: !0,
                                params: {},
                                context: n
                            })
                        );
                    else {
                        if (null == t) return e || !1;
                        X({
                            keybind: C(N({}, r), {
                                shortcut: 'string' == typeof t ? (0, b.Kd)(t) : t,
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
        return !!v.default.getAnyGlobalEnabledOverlay() && ee(y.kg4.TOGGLE_OVERLAY_INPUT_LOCK, 'shift+`');
    },
    function () {
        return !!v.default.getAnyGlobalEnabledOverlay() && ee(y.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, ']`');
    },
    function () {
        let e = et(y.kg4.SOUNDBOARD_HOLD);
        return ee(y.kg4.SOUNDBOARD_HOLD, I.D_, !1) || e;
    },
    function () {
        return ee(y.kg4.SAVE_CLIP, O.D_);
    }
];
function er() {
    return F(), en.reduce((e, t) => t() || e, !1);
}
d.Z.setGetKeybindList(() => {
    let e = [];
    for (let t in L) L.hasOwnProperty(t) && e.push((0, b.BB)(L[t].shortcut));
    let { showKeybindIndicators: t } = p.Z.getCurrentConfig({ location: 'KeybindsStore' });
    return t && e.push((0, b.BB)(P.shortcut)), e;
});
class ei extends (i = c.ZP.DeviceSettingsStore) {
    initialize(e) {
        __OVERLAY__ || this.waitFor(h.Z, v.default), (L = null != e ? e : {});
    }
    getUserAgnosticState() {
        return L;
    }
    hasKeybind(e, t, n) {
        for (let r in L) for (let i of L[r].shortcut) if (i[0] === e && i[1] === t && (void 0 === n || n === i[2])) return !0;
        return !1;
    }
    hasExactKeybind(e) {
        for (let t in L) {
            let n = L[t];
            if (l().isEqual(n.shortcut, e)) return !0;
        }
        return !1;
    }
    getKeybindForAction(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            { showKeybindIndicators: r } = p.Z.getCurrentConfig({ location: 'KeybindsStore' }),
            i = l().find(L, (r) => r.action === e && (!t || r.managed) && (!n || (r.shortcut.length > 0 && r.enabled)));
        return null != i ? i : r && e === y.kg4.TOGGLE_MUTE ? P : null;
    }
    getOverlayKeybind() {
        let e = this.getKeybindForAction(y.kg4.TOGGLE_OVERLAY_INPUT_LOCK, !0);
        return null != e ? e : w;
    }
    getOverlayChatKeybind() {
        return this.getKeybindForAction(y.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0);
    }
}
T(ei, 'displayName', 'KeybindsStore'),
    T(ei, 'persistKey', 'keybinds'),
    T(ei, 'migrations', [
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { v: t, keybinds: n = e } = e;
            return l().reduce(n, (e, n, r) => (isNaN(parseInt(n.id, 10)) || n.id !== r || ((null == t || t < 2) && ('string' == typeof n.shortcut ? ((n.shortcut = n.shortcut.replace('escape', 'esc').replace('capslock', 'caps lock').replace('numlock', 'num lock').replace('pageup', 'page up').replace('pagedown', 'page down')), (n.shortcut = (0, b.Kd)(n.shortcut))) : (n.shortcut = n.shortcut.map((e) => (e.length < 3 ? [...e, (0, b.dU)()] : e)))), (e[r] = n)), e), {});
        },
        (e) => e,
        (e) => {
            let { keybinds: t = e } = e;
            return l().reduce(
                t,
                (e, t, n) => {
                    if ((0, g.isLinux)() && t.action === y.kg4.SOUNDBOARD_HOLD) {
                        let n = t.shortcut.map((e) => e[1]),
                            r = (0, b.Kd)('`').map((e) => e[1]);
                        if (a()(n, r)) return e;
                    }
                    return C(N({}, e), { [n]: t });
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
                        i = C(N({}, i), {
                            enabled: !1 !== i.enabled,
                            params: null !== (n = i.params) && void 0 !== n ? n : {}
                        });
                    }
                    t[r] = i;
                }
            }
            return t;
        },
        (e) => l().reduce(e, (e, t, n) => (t.action === y.kg4.TOGGLE_GO_LIVE_STREAMING && t.managed ? e : C(N({}, e), { [n]: t })), {})
    ]);
let eo = new ei(u.Z, {
    CONNECTION_OPEN: er,
    AUDIO_SET_MODE: er,
    OVERLAY_SET_ENABLED: er,
    RPC_APP_CONNECTED: er,
    RPC_APP_DISCONNECTED: er,
    KEYBINDS_ADD_KEYBIND: q,
    KEYBINDS_DELETE_KEYBIND: Q,
    KEYBINDS_SET_KEYBIND: X,
    KEYBINDS_ENABLE_ALL_KEYBINDS: J,
    KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: $
});
