let i;
n.d(t, {
    Ek: () => D,
    ZP: () => er
}),
    n(724458),
    n(653041),
    n(47120),
    n(757143);
var r,
    a = n(879443),
    s = n.n(a),
    o = n(414861),
    l = n.n(o),
    u = n(348327),
    c = n.n(u),
    d = n(392711),
    f = n.n(d),
    _ = n(442837),
    p = n(570140),
    h = n(714338),
    m = n(710845),
    g = n(658785),
    E = n(131951),
    v = n(626135),
    y = n(358085),
    I = n(998502),
    b = n(13140),
    T = n(808506),
    S = n(981631),
    A = n(356659),
    N = n(710111),
    C = n(444675);
function R(e, t, n) {
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
let O = new m.Z('KeybindsStore'),
    D = {
        id: '1000',
        action: S.kg4.TOGGLE_MUTE,
        shortcut: (0, b.Kd)('mod+shift+m'),
        enabled: !0,
        managed: !0,
        params: {}
    },
    x = {
        id: '1001',
        action: S.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
        shortcut: (0, b.Kd)('shift+`'),
        enabled: !0,
        managed: !0,
        params: {}
    },
    L = {},
    P = {},
    w = 0,
    M = !0,
    k = {},
    U = !1,
    G = [S.kg4.PUSH_TO_TALK, S.kg4.TOGGLE_OVERLAY_INPUT_LOCK, S.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET];
function B(e) {
    switch (e) {
        case D.id:
            return D;
        case x.id:
            return x;
        default:
            return P[e];
    }
}
function Z(e, t) {
    let n = B(e);
    null != n && k[n.action].onTrigger(t, n);
}
function F() {
    let { showKeybindIndicators: e } = g.Z.getCurrentConfig({ location: 'KeybindsStore' });
    null == f().find(P, (e) => D.action === e.action && e.enabled && e.shortcut.length > 0) && !__OVERLAY__ && !U && M && e && (W(D), (U = !0));
}
function V() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    (U || e) && (Y(D.id), (U = !1));
}
function j(e) {
    let { showKeybindIndicators: t } = e;
    t ? F() : V(!0);
}
function H(e, t, n, i) {
    if (y.isPlatformEmbedded) I.ZP.inputEventRegister(parseInt(e), t, n, i);
    else {
        Y(e);
        let r = l()(new (s())(document));
        i.keyup && r.bindGlobal((0, b.BB)(t), () => n(!1), 'keyup'), i.keydown && r.bindGlobal((0, b.BB)(t), () => n(!0), 'keydown'), (L[e] = r);
    }
}
function Y(e) {
    if (y.isPlatformEmbedded) I.ZP.inputEventUnregister(parseInt(e, 10));
    else if (L[e]) {
        let t = P[e],
            n = k[t.action];
        (null == n ? void 0 : n.isPressed) === !0 && C.nextTick(() => n.onTrigger(!1, t)), L[e].reset(), (L[e] = null);
    }
}
function W(e) {
    if (!M || __OVERLAY__) return;
    let { shortcut: t, action: n, enabled: i } = e;
    if ('' === t || null == t || n === S.kg4.UNASSIGNED || !i) return;
    if (null == k[n]) {
        O.error('[kb store] KeybindStore: Looking for callback action '.concat(n, " but it doesn't exist in this version. Skipping"));
        return;
    }
    let r = e.id,
        a = k[n].keyEvents;
    e.action === S.kg4.TOGGLE_MUTE && V(),
        H(r, t, (e) => Z(r, e), {
            focused: !0,
            blurred: !0,
            keydown: !1,
            keyup: !1,
            ...a
        }),
        h.Z.validateKeybind((0, b.BB)(e.shortcut));
}
function K(e) {
    let t = {
        id: w.toString(),
        enabled: !0,
        action: S.kg4.UNASSIGNED,
        shortcut: [],
        managed: !1,
        params: {},
        ...e
    };
    return (
        (P = {
            ...P,
            [t.id]: t
        }),
        (w += 1),
        t
    );
}
function z(e) {
    Y(e.id), (P = { ...P }), delete P[e.id], e.action === S.kg4.TOGGLE_MUTE && F();
}
function q(e) {
    let { keybind: t } = e;
    W(K(t));
}
function Q(e) {
    let { id: t } = e,
        n = P[t];
    __OVERLAY__ ||
        v.default.track(S.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
            keybind_action: n.action,
            keybind_is_bound: !1,
            keybind_has_shortcut: !1
        }),
        null != n && z(n);
}
function X(e) {
    let { keybind: t } = e;
    (P = {
        ...P,
        [t.id]: t
    }),
        __OVERLAY__ ||
            (v.default.track(S.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
                keybind_action: t.action,
                keybind_is_bound: !0,
                keybind_has_shortcut: t.shortcut.length > 0
            }),
            t.action === S.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? v.default.track(S.rMx.OVERLAY_SETTINGS_UPDATED, { hotkey: t.action === S.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? (0, b.BB)(t.shortcut) : null }) : t.action === S.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET && v.default.track(S.rMx.OVERLAY_SETTINGS_UPDATED, { text_activation_hotkey: t.action === S.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, b.BB)(t.shortcut) : null })),
        W(t);
}
function J(e) {
    let { enable: t } = e;
    (M = t), t ? (h.Z.enable(), f().forEach(P, W), F()) : (h.Z.disable(), f().forEach(P, (e) => Y(e.id)), V());
}
function $(e) {
    let { keybinds: t } = e;
    (k = t),
        (L = {}),
        (w = 0),
        Object.values(P).filter((e) => G.includes(e.action) && e.managed).length !== G.length && en(),
        f().forEach(P, (e) => {
            w = Math.max(parseInt(e.id, 10), w) + 1;
            try {
                W(e);
            } catch (t) {
                O.error('Failed to register keybind', e, t);
            }
        }),
        (M = !0),
        null == i && (i = g.Z.subscribe({ location: 'KeybindsStore' }, j));
}
function ee(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        null == f().find(P, (t) => t.action === e && (!n || t.managed === n)) &&
        (W(
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
let et = [
    function () {
        let e = E.Z.getShortcuts();
        return (
            f().each(P, (t) => {
                t.action === S.kg4.PUSH_TO_TALK && !0 === t.managed && (null == t.context || null == e[t.context]) && z(t);
            }),
            f().reduce(
                E.Z.getShortcuts(),
                (e, t, n) => {
                    let i = f().find(P, (e) => e.action === S.kg4.PUSH_TO_TALK && !0 === e.managed && e.context === n);
                    if (null == i)
                        W(
                            K({
                                action: S.kg4.PUSH_TO_TALK,
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
                            keybind: {
                                ...i,
                                shortcut: 'string' == typeof t ? (0, b.Kd)(t) : t,
                                context: n
                            }
                        });
                    }
                    return !0;
                },
                !1
            )
        );
    },
    function () {
        return !!T.Z.getAnyGlobalEnabledOverlay() && ee(S.kg4.TOGGLE_OVERLAY_INPUT_LOCK, 'shift+`');
    },
    function () {
        return !!T.Z.getAnyGlobalEnabledOverlay() && ee(S.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, ']`');
    },
    function () {
        return ee(S.kg4.SOUNDBOARD_HOLD, N.D_, !1);
    },
    function () {
        return ee(S.kg4.SAVE_CLIP, A.D_);
    }
];
function en() {
    return F(), et.reduce((e, t) => t() || e, !1);
}
h.Z.setGetKeybindList(() => {
    let e = [];
    for (let t in P) P.hasOwnProperty(t) && e.push((0, b.BB)(P[t].shortcut));
    let { showKeybindIndicators: t } = g.Z.getCurrentConfig({ location: 'KeybindsStore' });
    return t && e.push((0, b.BB)(D.shortcut)), e;
});
class ei extends (r = _.ZP.DeviceSettingsStore) {
    initialize(e) {
        __OVERLAY__ || this.waitFor(E.Z, T.Z), (P = null != e ? e : {});
    }
    getUserAgnosticState() {
        return P;
    }
    hasKeybind(e, t, n) {
        for (let i in P) for (let r of P[i].shortcut) if (r[0] === e && r[1] === t && (void 0 === n || n === r[2])) return !0;
        return !1;
    }
    hasExactKeybind(e) {
        for (let t in P) {
            let n = P[t];
            if (f().isEqual(n.shortcut, e)) return !0;
        }
        return !1;
    }
    getKeybindForAction(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            { showKeybindIndicators: i } = g.Z.getCurrentConfig({ location: 'KeybindsStore' }),
            r = f().find(P, (i) => i.action === e && (!t || i.managed) && (!n || (i.shortcut.length > 0 && i.enabled)));
        return null != r ? r : i && e === S.kg4.TOGGLE_MUTE ? D : null;
    }
    getOverlayKeybind() {
        let e = this.getKeybindForAction(S.kg4.TOGGLE_OVERLAY_INPUT_LOCK, !0);
        return null != e ? e : x;
    }
    getOverlayChatKeybind() {
        return this.getKeybindForAction(S.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0);
    }
}
R(ei, 'displayName', 'KeybindsStore'),
    R(ei, 'persistKey', 'keybinds'),
    R(ei, 'migrations', [
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { v: t, keybinds: n = e } = e;
            return f().reduce(n, (e, n, i) => (isNaN(parseInt(n.id, 10)) || n.id !== i || ((null == t || t < 2) && ('string' == typeof n.shortcut ? ((n.shortcut = n.shortcut.replace('escape', 'esc').replace('capslock', 'caps lock').replace('numlock', 'num lock').replace('pageup', 'page up').replace('pagedown', 'page down')), (n.shortcut = (0, b.Kd)(n.shortcut))) : (n.shortcut = n.shortcut.map((e) => (e.length < 3 ? [...e, (0, b.dU)()] : e)))), (e[i] = n)), e), {});
        },
        (e) => e,
        (e) => {
            let { keybinds: t = e } = e;
            return f().reduce(
                t,
                (e, t, n) => {
                    if ((0, y.isLinux)() && t.action === S.kg4.SOUNDBOARD_HOLD) {
                        let n = t.shortcut.map((e) => e[1]),
                            i = (0, b.Kd)('`').map((e) => e[1]);
                        if (c()(n, i)) return e;
                    }
                    return {
                        ...e,
                        [n]: t
                    };
                },
                {}
            );
        },
        (e) => {
            let t = {};
            for (let i in e) {
                let r = e[i];
                if (null != r) {
                    if (null == r.params || null == r.enabled) {
                        var n;
                        r = {
                            ...r,
                            enabled: !1 !== r.enabled,
                            params: null !== (n = r.params) && void 0 !== n ? n : {}
                        };
                    }
                    t[i] = r;
                }
            }
            return t;
        },
        (e) =>
            f().reduce(
                e,
                (e, t, n) =>
                    t.action === S.kg4.TOGGLE_GO_LIVE_STREAMING && t.managed
                        ? e
                        : {
                              ...e,
                              [n]: t
                          },
                {}
            )
    ]);
let er = new ei(p.Z, {
    CONNECTION_OPEN: en,
    AUDIO_SET_MODE: en,
    OVERLAY_SET_ENABLED: en,
    RPC_APP_CONNECTED: en,
    RPC_APP_DISCONNECTED: en,
    KEYBINDS_ADD_KEYBIND: q,
    KEYBINDS_DELETE_KEYBIND: Q,
    KEYBINDS_SET_KEYBIND: X,
    KEYBINDS_ENABLE_ALL_KEYBINDS: J,
    KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: $
});
