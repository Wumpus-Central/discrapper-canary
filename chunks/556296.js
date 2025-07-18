let r;
(n.d(t, {
    Ek: () => D,
    ZP: () => eg,
    s4: () => k
}),
    n(415506),
    n(539854),
    n(388685),
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
        return null == t || (1 === e.length && e[0][1] === t);
    },
    j = (e, t, n, r) => {
        (0, h.D)(e, null, {
            extra: C(
                {
                    keyCombo: t,
                    combo: n,
                    layoutMapBacktick: (0, y.pz)(!1).get('Backquote'),
                    nativeLayoutMapBacktick: (0, y.pz)(!0).get('Backquote'),
                    env: I.CgE[(0, O.dU)()],
                    eventShape: (0, y.T_)('`')
                },
                r
            )
        });
    },
    U = () => {
        let e = L();
        'shift' === e && (j(Error('Default overlay keybind is only shift'), e, null), (e = 'shift+`'));
        let t = (0, O.Kd)(e),
            n = (0, O.UR)('shift');
        if (null == n) return (j(Error('Unable to get shift code'), e, t, { shiftCode: n }), M(t, !1));
        if (0 === t.length) return (j(Error('Default overlay keybind combo is empty'), e, t), M(t, !1));
        if (k(t)) {
            let n = (0, O.UR)('`');
            if (null == n) return (j(Error('Unable to get backtick code'), e, t), M(t, !1));
            (j(Error('Default overlay keybind combo is only shift'), e, t, { rawBacktickCode: n }), t.push([I.MoX.KEYBOARD_KEY, n, (0, O.dU)()]));
        }
        return M(t);
    },
    G = {},
    B = {},
    V = 0,
    F = !0,
    Z = {},
    H = !1,
    Y = !1,
    W = [I.kg4.PUSH_TO_TALK, I.kg4.TOGGLE_OVERLAY_INPUT_LOCK, I.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET];
function K(e) {
    switch (e) {
        case D.id:
            return D;
        case U().id:
            return U();
        default:
            return B[e];
    }
}
function z(e, t) {
    let n = K(e);
    null != n && Z[n.action].onTrigger(t, n);
}
function q() {
    let e = U();
    null == l().find(B, (t) => e.action === t.action && t.enabled && t.shortcut.length > 0) && F && !Y && (en(e), (Y = !0));
}
function X() {
    let e = U();
    Y && (et(e.id), (Y = !1));
}
function Q() {
    let { showKeybindIndicators: e } = p.Z.getCurrentConfig({ location: 'KeybindsStore' });
    null == l().find(B, (e) => D.action === e.action && e.enabled && e.shortcut.length > 0) && !__OVERLAY__ && !H && F && e && (en(D), (H = !0));
}
function J() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    (H || e) && (et(D.id), (H = !1));
}
function $(e) {
    let { showKeybindIndicators: t } = e;
    t ? Q() : J(!0);
}
function ee(e, t, n, r) {
    if (E.isPlatformEmbedded) b.ZP.inputEventRegister(parseInt(e), t, n, r);
    else {
        et(e);
        let i = (0, _.r)(document);
        (r.keyup && i.bindGlobal((0, O.BB)(t), () => n(!1), 'keyup'), r.keydown && i.bindGlobal((0, O.BB)(t), () => n(!0), 'keydown'), (G[e] = i));
    }
}
function et(e) {
    if (E.isPlatformEmbedded) b.ZP.inputEventUnregister(parseInt(e, 10));
    else {
        let t = G[e];
        if (null != t) {
            let n = B[e];
            if (null != n) {
                let e = Z[n.action];
                (null == e ? void 0 : e.isPressed) === !0 && A.nextTick(() => e.onTrigger(!1, n));
            }
            (t.reset(), (G[e] = null));
        }
    }
}
function en(e) {
    if (!F || __OVERLAY__) return;
    let { shortcut: t, action: n, enabled: r } = e;
    if (0 === t.length || null == t || n === I.kg4.UNASSIGNED || !r) return;
    if (null == Z[n]) return void w.error('[kb store] KeybindStore: Looking for callback action '.concat(n, " but it doesn't exist in this version. Skipping"));
    let i = e.id,
        a = Z[n].keyEvents;
    (e.action === I.kg4.TOGGLE_MUTE && J(),
        e.action === I.kg4.TOGGLE_OVERLAY_INPUT_LOCK && X(),
        ee(
            i,
            t,
            (e) => z(i, e),
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
function er(e) {
    let t = C(
        {
            id: V.toString(),
            enabled: !0,
            action: I.kg4.UNASSIGNED,
            shortcut: [],
            managed: !1,
            params: {}
        },
        e
    );
    return ((B = P(C({}, B), { [t.id]: t })), (V += 1), t);
}
function ei(e) {
    (et(e.id), (B = C({}, B)), delete B[e.id], e.action === I.kg4.TOGGLE_MUTE && Q(), e.action === I.kg4.TOGGLE_OVERLAY_INPUT_LOCK && q());
}
function ea(e) {
    let { keybind: t } = e;
    en(er(t));
}
function eo(e) {
    let { id: t } = e,
        n = B[t];
    (__OVERLAY__ ||
        g.default.track(I.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
            keybind_action: n.action,
            keybind_is_bound: !1,
            keybind_has_shortcut: !1
        }),
        null != n && ei(n));
}
function es(e) {
    let { keybind: t } = e;
    ((B = P(C({}, B), { [t.id]: t })),
        __OVERLAY__ ||
            (g.default.track(I.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
                keybind_action: t.action,
                keybind_is_bound: !0,
                keybind_has_shortcut: t.shortcut.length > 0
            }),
            t.action === I.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? g.default.track(I.rMx.OVERLAY_SETTINGS_UPDATED, { hotkey: t.action === I.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? (0, O.BB)(t.shortcut) : null }) : t.action === I.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET && g.default.track(I.rMx.OVERLAY_SETTINGS_UPDATED, { text_activation_hotkey: t.action === I.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, O.BB)(t.shortcut) : null })),
        en(t));
}
function el(e) {
    let { enable: t } = e;
    ((F = t), t ? (d.Z.enable(), l().forEach(B, en), Q(), q()) : (d.Z.disable(), l().forEach(B, (e) => et(e.id)), J(), X()));
}
function ec(e) {
    let { keybinds: t } = e;
    ((Z = t),
        (G = {}),
        (V = 0),
        Object.values(B).filter((e) => W.includes(e.action) && e.managed).length !== W.length && e_(),
        l().forEach(B, (e) => {
            V = Math.max(parseInt(e.id, 10), V) + 1;
            try {
                en(e);
            } catch (t) {
                w.error('Failed to register keybind', e, t);
            }
        }),
        (F = !0),
        null == r && (r = p.Z.subscribe({ location: 'KeybindsStore' }, $)));
}
function eu(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        null == l().find(B, (t) => t.action === e && (!n || t.managed === n)) &&
        (en(
            er({
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
function ed(e) {
    let t = !1;
    return (
        l().each(B, (n) => {
            n.action === e && !0 === n.managed && (ei(n), (t = !0));
        }),
        t
    );
}
let ef = [
    function () {
        let e = m.Z.getShortcuts();
        return (
            l().each(B, (t) => {
                t.action === I.kg4.PUSH_TO_TALK && !0 === t.managed && (null == t.context || null == e[t.context]) && ei(t);
            }),
            l().reduce(
                m.Z.getShortcuts(),
                (e, t, n) => {
                    let r = l().find(B, (e) => e.action === I.kg4.PUSH_TO_TALK && !0 === e.managed && e.context === n);
                    if (null == r)
                        en(
                            er({
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
                        es({
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
        return !!v.default.getAnyGlobalEnabledOverlay() && eu(I.kg4.TOGGLE_OVERLAY_INPUT_LOCK, L());
    },
    function () {
        return !!v.default.getAnyGlobalEnabledOverlay() && eu(I.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, ']`');
    },
    function () {
        let e = ed(I.kg4.SOUNDBOARD_HOLD);
        return eu(I.kg4.SOUNDBOARD_HOLD, S.D_, !1) || e;
    },
    function () {
        return eu(I.kg4.SAVE_CLIP, T.D_);
    }
];
function e_() {
    return (Q(), q(), ef.reduce((e, t) => t() || e, !1));
}
function ep() {
    return (
        (async () => {
            (await (0, y.SW)(), e_() && em.emitChange());
        })(),
        !1
    );
}
d.Z.setGetKeybindList(() => {
    let e = [];
    for (let t in B) B.hasOwnProperty(t) && e.push((0, O.BB)(B[t].shortcut));
    let { showKeybindIndicators: t } = p.Z.getCurrentConfig({ location: 'KeybindsStore' });
    return (t && e.push((0, O.BB)(D.shortcut)), e);
});
class eh extends (i = c.ZP.DeviceSettingsStore) {
    initialize(e) {
        (__OVERLAY__ || this.waitFor(m.Z, v.default), (B = null != e ? e : {}));
    }
    getUserAgnosticState() {
        return B;
    }
    hasKeybind(e, t, n) {
        for (let r in B) for (let i of B[r].shortcut) if (i[0] === e && i[1] === t && (void 0 === n || n === i[2])) return !0;
        return !1;
    }
    hasExactKeybind(e) {
        for (let t in B) {
            let n = B[t];
            if (l().isEqual(n.shortcut, e)) return !0;
        }
        return !1;
    }
    getKeybindForAction(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            { showKeybindIndicators: r } = p.Z.getCurrentConfig({ location: 'KeybindsStore' }),
            i = l().find(B, (r) => r.action === e && (!t || r.managed) && (!n || (r.shortcut.length > 0 && r.enabled)));
        return null != i ? i : r && e === I.kg4.TOGGLE_MUTE ? D : null;
    }
    getOverlayKeybind() {
        let e = this.getKeybindForAction(I.kg4.TOGGLE_OVERLAY_INPUT_LOCK, !0);
        return null != e ? e : U();
    }
    getOverlayChatKeybind() {
        return this.getKeybindForAction(I.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0);
    }
}
(N(eh, 'displayName', 'KeybindsStore'),
    N(eh, 'persistKey', 'keybinds'),
    N(eh, 'migrations', [
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
let em = new eh(u.Z, {
        CONNECTION_OPEN: e_,
        LOGIN_SUCCESS: ep,
        AUDIO_SET_MODE: e_,
        OVERLAY_SET_ENABLED: e_,
        RPC_APP_CONNECTED: e_,
        RPC_APP_DISCONNECTED: e_,
        KEYBINDS_ADD_KEYBIND: ea,
        KEYBINDS_DELETE_KEYBIND: eo,
        KEYBINDS_SET_KEYBIND: es,
        KEYBINDS_ENABLE_ALL_KEYBINDS: el,
        KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: ec
    }),
    eg = em;
