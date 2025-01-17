let i;
r.d(n, {
    E: function () {
        return M;
    }
});
var a,
    s = r(724458);
var o = r(653041);
var l = r(47120);
var u = r(757143);
var c = r(879443),
    d = r.n(c),
    f = r(414861),
    _ = r.n(f),
    h = r(348327),
    p = r.n(h),
    m = r(392711),
    g = r.n(m),
    E = r(442837),
    v = r(570140),
    I = r(714338),
    T = r(710845),
    b = r(658785),
    y = r(131951),
    S = r(626135),
    A = r(358085),
    N = r(998502),
    C = r(13140),
    R = r(808506),
    O = r(981631),
    D = r(356659),
    L = r(710111),
    x = r(444675);
function w(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let P = new T.Z('KeybindsStore'),
    M = {
        id: '1000',
        action: O.kg4.TOGGLE_MUTE,
        shortcut: (0, C.Kd)('mod+shift+m'),
        enabled: !0,
        managed: !0,
        params: {}
    },
    k = {},
    U = {},
    B = 0,
    G = !0,
    Z = {},
    F = !1,
    V = [O.kg4.PUSH_TO_TALK, O.kg4.TOGGLE_OVERLAY_INPUT_LOCK, O.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET];
function j(e, n) {
    let r = e === M.id ? M : U[e];
    null != r && Z[r.action].onTrigger(n, r);
}
function H() {
    let { showKeybindIndicators: e } = b.Z.getCurrentConfig({ location: 'KeybindsStore' });
    null == g().find(U, (e) => M.action === e.action && e.enabled && e.shortcut.length > 0) && !__OVERLAY__ && !F && G && e && (q(M), (F = !0));
}
function Y() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    (F || e) && (z(M.id), (F = !1));
}
function W(e) {
    let { showKeybindIndicators: n } = e;
    n ? H() : Y(!0);
}
function K(e, n, r, i) {
    if (A.isPlatformEmbedded) N.ZP.inputEventRegister(parseInt(e), n, r, i);
    else {
        z(e);
        let a = _()(new (d())(document));
        i.keyup && a.bindGlobal((0, C.BB)(n), () => r(!1), 'keyup'), i.keydown && a.bindGlobal((0, C.BB)(n), () => r(!0), 'keydown'), (k[e] = a);
    }
}
function z(e) {
    if (A.isPlatformEmbedded) N.ZP.inputEventUnregister(parseInt(e, 10));
    else if (k[e]) {
        let n = U[e],
            r = Z[n.action];
        (null == r ? void 0 : r.isPressed) === !0 && x.nextTick(() => r.onTrigger(!1, n)), k[e].reset(), (k[e] = null);
    }
}
function q(e) {
    if (!G || __OVERLAY__) return;
    let { shortcut: n, action: r, enabled: i } = e;
    if ('' === n || null == n || r === O.kg4.UNASSIGNED || !i) return;
    if (null == Z[r]) {
        P.error('[kb store] KeybindStore: Looking for callback action '.concat(r, " but it doesn't exist in this version. Skipping"));
        return;
    }
    let a = e.id,
        s = Z[r].keyEvents;
    e.action === O.kg4.TOGGLE_MUTE && Y(),
        K(a, n, (e) => j(a, e), {
            focused: !0,
            blurred: !0,
            keydown: !1,
            keyup: !1,
            ...s
        }),
        I.Z.validateKeybind((0, C.BB)(e.shortcut));
}
function Q(e) {
    let n = {
        id: B.toString(),
        enabled: !0,
        action: O.kg4.UNASSIGNED,
        shortcut: [],
        managed: !1,
        params: {},
        ...e
    };
    return (
        (U = {
            ...U,
            [n.id]: n
        }),
        (B += 1),
        n
    );
}
function X(e) {
    z(e.id), (U = { ...U }), delete U[e.id], e.action === O.kg4.TOGGLE_MUTE && H();
}
function J(e) {
    let { keybind: n } = e;
    q(Q(n));
}
function $(e) {
    let { id: n } = e,
        r = U[n];
    !__OVERLAY__ &&
        S.default.track(O.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
            keybind_action: r.action,
            keybind_is_bound: !1,
            keybind_has_shortcut: !1
        }),
        null != r && X(r);
}
function ee(e) {
    let { keybind: n } = e;
    (U = {
        ...U,
        [n.id]: n
    }),
        !__OVERLAY__ &&
            (S.default.track(O.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
                keybind_action: n.action,
                keybind_is_bound: !0,
                keybind_has_shortcut: n.shortcut.length > 0
            }),
            n.action === O.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? S.default.track(O.rMx.OVERLAY_SETTINGS_UPDATED, { hotkey: n.action === O.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? (0, C.BB)(n.shortcut) : null }) : n.action === O.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET && S.default.track(O.rMx.OVERLAY_SETTINGS_UPDATED, { text_activation_hotkey: n.action === O.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, C.BB)(n.shortcut) : null })),
        q(n);
}
function et(e) {
    let { enable: n } = e;
    (G = n), n ? (I.Z.enable(), g().forEach(U, q), H()) : (I.Z.disable(), g().forEach(U, (e) => z(e.id)), Y());
}
function en(e) {
    let { keybinds: n } = e;
    (Z = n),
        (k = {}),
        (B = 0),
        Object.values(U).filter((e) => V.includes(e.action) && e.managed).length !== V.length && ea(),
        g().forEach(U, (e) => {
            B = Math.max(parseInt(e.id, 10), B) + 1;
            try {
                q(e);
            } catch (n) {
                P.error('Failed to register keybind', e, n);
            }
        }),
        (G = !0),
        null == i && (i = b.Z.subscribe({ location: 'KeybindsStore' }, W));
}
function er(e, n) {
    let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        null == g().find(U, (n) => n.action === e && (!r || n.managed === r)) &&
        (q(
            Q({
                action: e,
                enabled: !0,
                shortcut: (0, C.Kd)(n),
                managed: !0,
                params: {}
            })
        ),
        !0)
    );
}
let ei = [
    function e() {
        let e = y.Z.getShortcuts();
        return (
            g().each(U, (n) => {
                n.action === O.kg4.PUSH_TO_TALK && !0 === n.managed && (null == n.context || null == e[n.context]) && X(n);
            }),
            g().reduce(
                y.Z.getShortcuts(),
                (e, n, r) => {
                    let i = g().find(U, (e) => e.action === O.kg4.PUSH_TO_TALK && !0 === e.managed && e.context === r);
                    if (null == i)
                        q(
                            Q({
                                action: O.kg4.PUSH_TO_TALK,
                                enabled: !0,
                                shortcut: n,
                                managed: !0,
                                params: {},
                                context: r
                            })
                        );
                    else {
                        if (null == n) return e || !1;
                        ee({
                            keybind: {
                                ...i,
                                shortcut: 'string' == typeof n ? (0, C.Kd)(n) : n,
                                context: r
                            }
                        });
                    }
                    return !0;
                },
                !1
            )
        );
    },
    function e() {
        return !!R.Z.enabled && er(O.kg4.TOGGLE_OVERLAY_INPUT_LOCK, 'shift+`');
    },
    function e() {
        return !!R.Z.enabled && er(O.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, ']`');
    },
    function e() {
        return er(O.kg4.SOUNDBOARD_HOLD, L.D_, !1);
    },
    function e() {
        return er(O.kg4.SAVE_CLIP, D.D_);
    }
];
function ea() {
    return H(), ei.reduce((e, n) => n() || e, !1);
}
I.Z.setGetKeybindList(() => {
    let e = [];
    for (let n in U) {
        if (!!U.hasOwnProperty(n)) e.push((0, C.BB)(U[n].shortcut));
    }
    let { showKeybindIndicators: n } = b.Z.getCurrentConfig({ location: 'KeybindsStore' });
    return n && e.push((0, C.BB)(M.shortcut)), e;
});
class es extends (a = E.ZP.DeviceSettingsStore) {
    initialize(e) {
        !__OVERLAY__ && this.waitFor(y.Z, R.Z), (U = null != e ? e : {});
    }
    getUserAgnosticState() {
        return U;
    }
    hasKeybind(e, n, r) {
        for (let i in U) for (let a of U[i].shortcut) if (a[0] === e && a[1] === n && (void 0 === r || r === a[2])) return !0;
        return !1;
    }
    hasExactKeybind(e) {
        for (let n in U) {
            let r = U[n];
            if (g().isEqual(r.shortcut, e)) return !0;
        }
        return !1;
    }
    getKeybindForAction(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            { showKeybindIndicators: i } = b.Z.getCurrentConfig({ location: 'KeybindsStore' }),
            a = g().find(U, (i) => i.action === e && (!n || i.managed) && (!r || (i.shortcut.length > 0 && i.enabled)));
        return null != a ? a : i && e === O.kg4.TOGGLE_MUTE ? M : null;
    }
    getOverlayKeybind() {
        return this.getKeybindForAction(O.kg4.TOGGLE_OVERLAY_INPUT_LOCK, !0);
    }
    getOverlayChatKeybind() {
        return this.getKeybindForAction(O.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0);
    }
}
w(es, 'displayName', 'KeybindsStore'),
    w(es, 'persistKey', 'keybinds'),
    w(es, 'migrations', [
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { v: n, keybinds: r = e } = e;
            return g().reduce(r, (e, r, i) => (isNaN(parseInt(r.id, 10)) || r.id !== i ? e : ((null == n || n < 2) && ('string' == typeof r.shortcut ? ((r.shortcut = r.shortcut.replace('escape', 'esc').replace('capslock', 'caps lock').replace('numlock', 'num lock').replace('pageup', 'page up').replace('pagedown', 'page down')), (r.shortcut = (0, C.Kd)(r.shortcut))) : (r.shortcut = r.shortcut.map((e) => (e.length < 3 ? [...e, (0, C.dU)()] : e)))), (e[i] = r), e)), {});
        },
        (e) => e,
        (e) => {
            let { keybinds: n = e } = e;
            return g().reduce(
                n,
                (e, n, r) => {
                    if ((0, A.isLinux)() && n.action === O.kg4.SOUNDBOARD_HOLD) {
                        let r = n.shortcut.map((e) => e[1]),
                            i = (0, C.Kd)('`').map((e) => e[1]);
                        if (p()(r, i)) return e;
                    }
                    return {
                        ...e,
                        [r]: n
                    };
                },
                {}
            );
        },
        (e) => {
            let n = {};
            for (let i in e) {
                let a = e[i];
                if (null != a) {
                    if (null == a.params || null == a.enabled) {
                        var r;
                        a = {
                            ...a,
                            enabled: !1 !== a.enabled,
                            params: null !== (r = a.params) && void 0 !== r ? r : {}
                        };
                    }
                    n[i] = a;
                }
            }
            return n;
        },
        (e) =>
            g().reduce(
                e,
                (e, n, r) =>
                    n.action === O.kg4.TOGGLE_GO_LIVE_STREAMING && n.managed
                        ? e
                        : {
                              ...e,
                              [r]: n
                          },
                {}
            )
    ]),
    (n.Z = new es(v.Z, {
        CONNECTION_OPEN: ea,
        AUDIO_SET_MODE: ea,
        OVERLAY_SET_ENABLED: ea,
        RPC_APP_CONNECTED: ea,
        RPC_APP_DISCONNECTED: ea,
        KEYBINDS_ADD_KEYBIND: J,
        KEYBINDS_DELETE_KEYBIND: $,
        KEYBINDS_SET_KEYBIND: ee,
        KEYBINDS_ENABLE_ALL_KEYBINDS: et,
        KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: en
    }));
