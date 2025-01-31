let i;
n.d(t, {
    E: () => D,
    Z: () => en
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
    x = {},
    L = {},
    P = 0,
    w = !0,
    M = {},
    k = !1,
    U = [S.kg4.PUSH_TO_TALK, S.kg4.TOGGLE_OVERLAY_INPUT_LOCK, S.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET];
function G(e, t) {
    let n = e === D.id ? D : L[e];
    null != n && M[n.action].onTrigger(t, n);
}
function B() {
    let { showKeybindIndicators: e } = g.Z.getCurrentConfig({ location: 'KeybindsStore' });
    null == f().find(L, (e) => D.action === e.action && e.enabled && e.shortcut.length > 0) && !__OVERLAY__ && !k && w && e && (H(D), (k = !0));
}
function Z() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    (k || e) && (j(D.id), (k = !1));
}
function F(e) {
    let { showKeybindIndicators: t } = e;
    t ? B() : Z(!0);
}
function V(e, t, n, i) {
    if (y.isPlatformEmbedded) I.ZP.inputEventRegister(parseInt(e), t, n, i);
    else {
        j(e);
        let r = l()(new (s())(document));
        i.keyup && r.bindGlobal((0, b.BB)(t), () => n(!1), 'keyup'), i.keydown && r.bindGlobal((0, b.BB)(t), () => n(!0), 'keydown'), (x[e] = r);
    }
}
function j(e) {
    if (y.isPlatformEmbedded) I.ZP.inputEventUnregister(parseInt(e, 10));
    else if (x[e]) {
        let t = L[e],
            n = M[t.action];
        (null == n ? void 0 : n.isPressed) === !0 && C.nextTick(() => n.onTrigger(!1, t)), x[e].reset(), (x[e] = null);
    }
}
function H(e) {
    if (!w || __OVERLAY__) return;
    let { shortcut: t, action: n, enabled: i } = e;
    if ('' === t || null == t || n === S.kg4.UNASSIGNED || !i) return;
    if (null == M[n]) {
        O.error('[kb store] KeybindStore: Looking for callback action '.concat(n, " but it doesn't exist in this version. Skipping"));
        return;
    }
    let r = e.id,
        a = M[n].keyEvents;
    e.action === S.kg4.TOGGLE_MUTE && Z(),
        V(r, t, (e) => G(r, e), {
            focused: !0,
            blurred: !0,
            keydown: !1,
            keyup: !1,
            ...a
        }),
        h.Z.validateKeybind((0, b.BB)(e.shortcut));
}
function Y(e) {
    let t = {
        id: P.toString(),
        enabled: !0,
        action: S.kg4.UNASSIGNED,
        shortcut: [],
        managed: !1,
        params: {},
        ...e
    };
    return (
        (L = {
            ...L,
            [t.id]: t
        }),
        (P += 1),
        t
    );
}
function W(e) {
    j(e.id), (L = { ...L }), delete L[e.id], e.action === S.kg4.TOGGLE_MUTE && B();
}
function K(e) {
    let { keybind: t } = e;
    H(Y(t));
}
function z(e) {
    let { id: t } = e,
        n = L[t];
    __OVERLAY__ ||
        v.default.track(S.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
            keybind_action: n.action,
            keybind_is_bound: !1,
            keybind_has_shortcut: !1
        }),
        null != n && W(n);
}
function q(e) {
    let { keybind: t } = e;
    (L = {
        ...L,
        [t.id]: t
    }),
        __OVERLAY__ ||
            (v.default.track(S.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
                keybind_action: t.action,
                keybind_is_bound: !0,
                keybind_has_shortcut: t.shortcut.length > 0
            }),
            t.action === S.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? v.default.track(S.rMx.OVERLAY_SETTINGS_UPDATED, { hotkey: t.action === S.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? (0, b.BB)(t.shortcut) : null }) : t.action === S.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET && v.default.track(S.rMx.OVERLAY_SETTINGS_UPDATED, { text_activation_hotkey: t.action === S.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, b.BB)(t.shortcut) : null })),
        H(t);
}
function Q(e) {
    let { enable: t } = e;
    (w = t), t ? (h.Z.enable(), f().forEach(L, H), B()) : (h.Z.disable(), f().forEach(L, (e) => j(e.id)), Z());
}
function X(e) {
    let { keybinds: t } = e;
    (M = t),
        (x = {}),
        (P = 0),
        Object.values(L).filter((e) => U.includes(e.action) && e.managed).length !== U.length && ee(),
        f().forEach(L, (e) => {
            P = Math.max(parseInt(e.id, 10), P) + 1;
            try {
                H(e);
            } catch (t) {
                O.error('Failed to register keybind', e, t);
            }
        }),
        (w = !0),
        null == i && (i = g.Z.subscribe({ location: 'KeybindsStore' }, F));
}
function J(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        null == f().find(L, (t) => t.action === e && (!n || t.managed === n)) &&
        (H(
            Y({
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
let $ = [
    function () {
        let e = E.Z.getShortcuts();
        return (
            f().each(L, (t) => {
                t.action === S.kg4.PUSH_TO_TALK && !0 === t.managed && (null == t.context || null == e[t.context]) && W(t);
            }),
            f().reduce(
                E.Z.getShortcuts(),
                (e, t, n) => {
                    let i = f().find(L, (e) => e.action === S.kg4.PUSH_TO_TALK && !0 === e.managed && e.context === n);
                    if (null == i)
                        H(
                            Y({
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
                        q({
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
        return !!T.Z.enabled && J(S.kg4.TOGGLE_OVERLAY_INPUT_LOCK, 'shift+`');
    },
    function () {
        return !!T.Z.enabled && J(S.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, ']`');
    },
    function () {
        return J(S.kg4.SOUNDBOARD_HOLD, N.D_, !1);
    },
    function () {
        return J(S.kg4.SAVE_CLIP, A.D_);
    }
];
function ee() {
    return B(), $.reduce((e, t) => t() || e, !1);
}
h.Z.setGetKeybindList(() => {
    let e = [];
    for (let t in L) L.hasOwnProperty(t) && e.push((0, b.BB)(L[t].shortcut));
    let { showKeybindIndicators: t } = g.Z.getCurrentConfig({ location: 'KeybindsStore' });
    return t && e.push((0, b.BB)(D.shortcut)), e;
});
class et extends (r = _.ZP.DeviceSettingsStore) {
    initialize(e) {
        __OVERLAY__ || this.waitFor(E.Z, T.Z), (L = null != e ? e : {});
    }
    getUserAgnosticState() {
        return L;
    }
    hasKeybind(e, t, n) {
        for (let i in L) for (let r of L[i].shortcut) if (r[0] === e && r[1] === t && (void 0 === n || n === r[2])) return !0;
        return !1;
    }
    hasExactKeybind(e) {
        for (let t in L) {
            let n = L[t];
            if (f().isEqual(n.shortcut, e)) return !0;
        }
        return !1;
    }
    getKeybindForAction(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            { showKeybindIndicators: i } = g.Z.getCurrentConfig({ location: 'KeybindsStore' }),
            r = f().find(L, (i) => i.action === e && (!t || i.managed) && (!n || (i.shortcut.length > 0 && i.enabled)));
        return null != r ? r : i && e === S.kg4.TOGGLE_MUTE ? D : null;
    }
    getOverlayKeybind() {
        return this.getKeybindForAction(S.kg4.TOGGLE_OVERLAY_INPUT_LOCK, !0);
    }
    getOverlayChatKeybind() {
        return this.getKeybindForAction(S.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0);
    }
}
R(et, 'displayName', 'KeybindsStore'),
    R(et, 'persistKey', 'keybinds'),
    R(et, 'migrations', [
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
let en = new et(p.Z, {
    CONNECTION_OPEN: ee,
    AUDIO_SET_MODE: ee,
    OVERLAY_SET_ENABLED: ee,
    RPC_APP_CONNECTED: ee,
    RPC_APP_DISCONNECTED: ee,
    KEYBINDS_ADD_KEYBIND: K,
    KEYBINDS_DELETE_KEYBIND: z,
    KEYBINDS_SET_KEYBIND: q,
    KEYBINDS_ENABLE_ALL_KEYBINDS: Q,
    KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: X
});
