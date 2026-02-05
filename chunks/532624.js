"use strict";
let r;
n.d(t, { Ay: () => em, DV: () => L, aS: () => P, xC: () => b }), n(321073);
var i = n(812729),
    a = n.n(i),
    s = n(735438),
    o = n.n(s),
    l = n(311907),
    u = n(73153),
    c = n(775121),
    d = n(626584),
    _ = n(549205),
    f = n(641376),
    p = n(430452),
    h = n(954571),
    m = n(723702),
    g = n(837921),
    E = n(316501),
    A = n(350535),
    I = n(242286),
    T = n(652215),
    y = n(696016);
n(980504);
var S = n(650583),
    v = n(72290);
let C = new d.A("KeybindsStore"),
    b = {
        id: "1000",
        action: T.hCu.TOGGLE_MUTE,
        shortcut: (0, A.OH)("mod+shift+m"),
        enabled: !0,
        managed: !0,
        params: {},
    };
function N() {
    let e = (0, E.Ze)(!1).get("Backquote") ?? "`";
    return "+" === e ? (e = "plus") : 0 === e.length && (e = "`"), `shift+${e}`;
}
let R = "1001",
    O = 10,
    D = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return { id: R, action: T.hCu.TOGGLE_OVERLAY_INPUT_LOCK, shortcut: e, enabled: t, managed: !0, params: {} };
    },
    L = (e) => {
        let t = (0, A.Z0)("shift");
        return null != t && (1 !== e.length || e[0][1] !== t);
    },
    w = (e, t, n, r) => {
        let i = (0, E.Ze)(!1).get("Backquote"),
            a = (0, E.Ze)(!0).get("Backquote");
        C.log(e, {
            tags: {
                backquoteKey: i ?? "unknown",
                nativeBackquoteKey: a ?? "unknown",
                backquoteCode: `${((0, E.Q_))(i ?? "`")?.keyCode}`,
                nativeBackquoteCode: `${((0, E.Q_))(a ?? "`")?.keyCode}`,
            },
            extra: {
                keyCombo: t,
                combo: n,
                layoutMapBacktick: i,
                env: S.g$[(0, A._$)()],
                backtickEventShape: (0, E.Q_)("`"),
                backquoteKeyShape: (0, E.Q_)(i ?? "`"),
                nativeBackquoteKeyShape: (0, E.Q_)(a ?? "`"),
                ...r,
            },
        });
    };
function x(e) {
    let t = (0, A.OH)(e),
        n = (0, E.Q_)("`"),
        r = n?.keyCode ?? (0, A.Z0)("`");
    return L(t)
        ? t
        : null == r
          ? (w("Unable to get backtick code for overlay default keybind", e, t, { rawBacktickShape: n }), null)
          : (w("Default overlay keybind is unsupported", e, t, { rawBacktickCode: r }),
            [...t, [S.zY.KEYBOARD_KEY, r, (0, A._$)()]]);
}
let P = () => {
        let e = N();
        "shift" === e && (w("Default overlay keybind is only shift", e, null), (e = "shift+`"));
        let t = x(e);
        if (null == t) return D([], !1);
        if (L(t)) return D(t, !0);
        let n = (0, A.Z0)("shift"),
            r = (0, E.Q_)("`");
        return (
            0 === t.length
                ? w("Default overlay keybind combo is empty", e, t)
                : null == n
                  ? w("Unable to get shift code", e, t, { shiftCode: n })
                  : null == r && w("Unable to get backtick code", e, t),
            D(t, !1)
        );
    },
    M = {},
    k = {},
    U = 0,
    G = !0,
    V = {},
    F = !1,
    B = !1,
    j = [T.hCu.PUSH_TO_TALK, T.hCu.TOGGLE_OVERLAY_INPUT_LOCK, T.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET],
    H = [];
function Y(e) {
    switch (e) {
        case b.id:
            return b;
        case P().id:
            return P();
        default:
            return k[e];
    }
}
function W(e, t) {
    return (
        !(e.shortcut.length >= t.shortcut.length) &&
        e.shortcut.every((e) => t.shortcut.some((t) => t[0] === e[0] && t[1] === e[1]))
    );
}
function K(e, t, n) {
    h.default.track(T.HAw.KEYBOARD_SHORTCUT_USED, {
        shortcut_name: n.action,
        shortcut_combo: (0, A.dI)(n.shortcut),
        is_native_keyboard_event: !0,
    }),
        t.onTrigger(e, n);
}
function z(e, t) {
    let n = Y(e);
    if (null == n) return;
    let r = V[n.action]?.keyEvents;
    if (null == r) return;
    let i = V[n.action];
    if (r.keydown && r.keyup) {
        null != i && K(t, V[n.action], n);
        return;
    }
    H.push(e),
        setTimeout(() => {
            for (let t of H) {
                if (t === e) continue;
                let r = Y(t);
                if (null != r && W(n, r)) {
                    H.includes(e) && H.splice(H.indexOf(e), 1);
                    return;
                }
            }
            try {
                null != i && K(t, i, n);
            } finally {
                setTimeout(() => {
                    H.includes(e) && H.splice(H.indexOf(e), 1);
                }, O);
            }
        }, O);
}
function $() {
    let e = P();
    null == o().find(k, (t) => e.action === t.action && t.enabled && t.shortcut.length > 0) &&
        G &&
        !B &&
        (et(e), (B = !0));
}
function q() {
    let e = P();
    B && (ee(e.id), (B = !1));
}
function Z() {
    let { showKeybindIndicators: e } = f.A.getCurrentConfig({ location: "KeybindsStore" });
    null == o().find(k, (e) => b.action === e.action && e.enabled && e.shortcut.length > 0) &&
        !__OVERLAY__ &&
        !F &&
        G &&
        e &&
        (et(b), (F = !0));
}
function Q() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    (F || e) && (ee(b.id), (F = !1));
}
function X(e) {
    let { showKeybindIndicators: t } = e;
    t ? Z() : Q(!0);
}
function J(e, t, n, r) {
    if (m.isPlatformEmbedded)
        try {
            g.Ay.inputEventRegister(e, t, n, r);
        } catch (n) {
            throw (C.error("Failed to register native keybind", { eventId: e, shortcut: t }, n), n);
        }
    else {
        ee(e.toString());
        let i = (0, _.I)(document);
        r.keyup && i.bindGlobal((0, A.dI)(t), () => n(!1), "keyup"),
            r.keydown && i.bindGlobal((0, A.dI)(t), () => n(!0), "keydown"),
            (M[e] = i);
    }
}
function ee(e) {
    if (m.isPlatformEmbedded) g.Ay.inputEventUnregister(parseInt(e, 10));
    else {
        let t = M[e];
        if (null != t) {
            let n = k[e];
            if (null != n) {
                let e = V[n.action];
                e?.isPressed === !0 && v.nextTick(() => K(!1, e, n));
            }
            t.reset(), (M[e] = null);
        }
    }
}
function et(e) {
    if (!G || __OVERLAY__) return;
    let { shortcut: t, action: n, enabled: r } = e;
    if (0 === t.length || null == t || n === T.hCu.UNASSIGNED || !r) return;
    if (null == V[n])
        return void C.error(
            `[kb store] KeybindStore: Looking for callback action ${n} but it doesn't exist in this version. Skipping`,
        );
    let i = e.id,
        a = parseInt(i, 10);
    if (isNaN(a))
        return void C.error("[kb store] KeybindStore: Keybind id is not a number. Skipping registration.", {
            keybind: e,
        });
    let s = V[n].keyEvents;
    e.action === T.hCu.TOGGLE_MUTE && Q(),
        e.action === T.hCu.TOGGLE_OVERLAY_INPUT_LOCK && q(),
        J(a, t, (e) => z(i, e), { focused: !0, blurred: !0, keydown: !1, keyup: !1, ...s }),
        c.A.validateKeybind((0, A.dI)(t));
}
function en(e) {
    let t = { id: U.toString(), enabled: !0, action: T.hCu.UNASSIGNED, shortcut: [], managed: !1, params: {}, ...e };
    return (k = { ...k, [t.id]: t }), (U += 1), t;
}
function er(e) {
    ee(e.id),
        (k = { ...k }),
        delete k[e.id],
        e.action === T.hCu.TOGGLE_MUTE && Z(),
        e.action === T.hCu.TOGGLE_OVERLAY_INPUT_LOCK && $();
}
function ei(e) {
    let { keybind: t } = e;
    et(en(t));
}
function ea(e) {
    let { id: t } = e,
        n = k[t];
    __OVERLAY__ ||
        h.default.track(T.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
            keybind_action: n.action,
            keybind_is_bound: !1,
            keybind_has_shortcut: !1,
        }),
        null != n && er(n);
}
function es(e) {
    let { keybind: t } = e;
    (k = { ...k, [t.id]: t }),
        __OVERLAY__ ||
            (h.default.track(T.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
                keybind_action: t.action,
                keybind_is_bound: !0,
                keybind_has_shortcut: t.shortcut.length > 0,
            }),
            t.action === T.hCu.TOGGLE_OVERLAY_INPUT_LOCK
                ? h.default.track(T.HAw.OVERLAY_SETTINGS_UPDATED, {
                      hotkey: t.action === T.hCu.TOGGLE_OVERLAY_INPUT_LOCK ? (0, A.dI)(t.shortcut) : null,
                  })
                : t.action === T.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET &&
                  h.default.track(T.HAw.OVERLAY_SETTINGS_UPDATED, {
                      text_activation_hotkey:
                          t.action === T.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, A.dI)(t.shortcut) : null,
                  })),
        et(t);
}
function eo(e) {
    let { enable: t } = e;
    (G = t),
        t ? (c.A.enable(), o().forEach(k, et), Z(), $()) : (c.A.disable(), o().forEach(k, (e) => ee(e.id)), Q(), q());
}
function el(e) {
    let { keybinds: t } = e;
    (V = t),
        (M = {}),
        (U = 0),
        Object.values(k).filter((e) => j.includes(e.action) && e.managed).length !== j.length && e_(),
        o().forEach(k, (e) => {
            U = Math.max(parseInt(e.id, 10), U) + 1;
            try {
                et(e);
            } catch (t) {
                C.error("Failed to register keybind", e, t);
            }
        }),
        (G = !0),
        null == r && (r = f.A.subscribe({ location: "KeybindsStore" }, X));
}
function eu(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        null == o().find(k, (t) => t.action === e && (!n || t.managed === n)) &&
        (et(en({ action: e, enabled: !0, shortcut: (0, A.OH)(t), managed: !0, params: {} })), !0)
    );
}
function ec(e) {
    let t = !1;
    return (
        o().each(k, (n) => {
            n.action === e && !0 === n.managed && (er(n), (t = !0));
        }),
        t
    );
}
let ed = [
    function () {
        let e = p.A.getShortcuts();
        return (
            o().each(k, (t) => {
                t.action === T.hCu.PUSH_TO_TALK &&
                    !0 === t.managed &&
                    (null == t.context || null == e[t.context]) &&
                    er(t);
            }),
            o().reduce(
                p.A.getShortcuts(),
                (e, t, n) => {
                    let r = o().find(k, (e) => e.action === T.hCu.PUSH_TO_TALK && !0 === e.managed && e.context === n);
                    if (null == r)
                        et(
                            en({
                                action: T.hCu.PUSH_TO_TALK,
                                enabled: !0,
                                shortcut: t,
                                managed: !0,
                                params: {},
                                context: n,
                            }),
                        );
                    else {
                        if (null == t) return e || !1;
                        es({ keybind: { ...r, shortcut: "string" == typeof t ? (0, A.OH)(t) : t, context: n } });
                    }
                    return !0;
                },
                !1,
            )
        );
    },
    function () {
        return !!I.default.getAnyGlobalEnabledOverlay() && eu(T.hCu.TOGGLE_OVERLAY_INPUT_LOCK, N());
    },
    function () {
        return !!I.default.getAnyGlobalEnabledOverlay() && eu(T.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`");
    },
    function () {
        let e = ec(T.hCu.SOUNDBOARD_HOLD);
        return eu(T.hCu.SOUNDBOARD_HOLD, "ctrl+`", !1) || e;
    },
    function () {
        return eu(T.hCu.SAVE_CLIP, y.Ot);
    },
    function () {
        return eu(T.hCu.SAVE_SCREENSHOT, y.sz);
    },
];
function e_() {
    return Z(), $(), ed.reduce((e, t) => t() || e, !1);
}
function ef() {
    return (
        (async () => {
            await (0, E.AD)(), e_() && eh.emitChange();
        })(),
        !1
    );
}
c.A.setGetKeybindList(() => {
    let e = [];
    for (let t in k) k.hasOwnProperty(t) && e.push((0, A.dI)(k[t].shortcut));
    let { showKeybindIndicators: t } = f.A.getCurrentConfig({ location: "KeybindsStore" });
    return t && e.push((0, A.dI)(b.shortcut)), e;
});
class ep extends l.Ay.DeviceSettingsStore {
    static displayName = "KeybindsStore";
    static persistKey = "keybinds";
    static migrations = [
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { v: t, keybinds: n = e } = e;
            return o().reduce(
                n,
                (e, n, r) => (
                    isNaN(parseInt(n.id, 10)) ||
                        n.id !== r ||
                        ((null == t || t < 2) &&
                            ("string" == typeof n.shortcut
                                ? ((n.shortcut = n.shortcut
                                      .replace("escape", "esc")
                                      .replace("capslock", "caps lock")
                                      .replace("numlock", "num lock")
                                      .replace("pageup", "page up")
                                      .replace("pagedown", "page down")),
                                  (n.shortcut = (0, A.OH)(n.shortcut)))
                                : (n.shortcut = n.shortcut.map((e) => (e.length < 3 ? [...e, (0, A._$)()] : e)))),
                        (e[r] = n)),
                    e
                ),
                {},
            );
        },
        (e) => e,
        (e) => {
            let { keybinds: t = e } = e;
            return o().reduce(
                t,
                (e, t, n) => {
                    if ((0, m.isLinux)() && t.action === T.hCu.SOUNDBOARD_HOLD) {
                        let n = t.shortcut.map((e) => e[1]),
                            r = (0, A.OH)("`").map((e) => e[1]);
                        if (a()(n, r)) return e;
                    }
                    return { ...e, [n]: t };
                },
                {},
            );
        },
        (e) => {
            let t = {};
            for (let n in e) {
                let r = e[n];
                null != r &&
                    ((null == r.params || null == r.enabled) &&
                        (r = { ...r, enabled: !1 !== r.enabled, params: r.params ?? {} }),
                    (t[n] = r));
            }
            return t;
        },
        (e) =>
            o().reduce(
                e,
                (e, t, n) => (t.action === T.hCu.TOGGLE_GO_LIVE_STREAMING && t.managed ? e : { ...e, [n]: t }),
                {},
            ),
    ];
    initialize(e) {
        for (let t in (__OVERLAY__ || this.waitFor(p.A, I.default), (k = e ?? {})))
            delete k[t].latched, delete k[t].pressedTime;
    }
    getUserAgnosticState() {
        return k;
    }
    hasKeybind(e, t, n) {
        for (let r in k)
            for (let i of k[r].shortcut) if (i[0] === e && i[1] === t && (void 0 === n || n === i[2])) return !0;
        return !1;
    }
    hasExactKeybind(e) {
        for (let t in k) {
            let n = k[t];
            if (o().isEqual(n.shortcut, e)) return !0;
        }
        return !1;
    }
    getKeybindForAction(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            { showKeybindIndicators: r } = f.A.getCurrentConfig({ location: "KeybindsStore" }),
            i = o().find(k, (r) => r.action === e && (!t || r.managed) && (!n || (r.shortcut.length > 0 && r.enabled)));
        return null != i ? i : r && e === T.hCu.TOGGLE_MUTE ? b : null;
    }
    getOverlayKeybind() {
        let e = this.getKeybindForAction(T.hCu.TOGGLE_OVERLAY_INPUT_LOCK, !0);
        return null != e ? e : P();
    }
    getOverlayChatKeybind() {
        return this.getKeybindForAction(T.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0);
    }
}
let eh = new ep(u.h, {
        CONNECTION_OPEN: e_,
        LOGIN_SUCCESS: ef,
        AUDIO_SET_MODE: e_,
        OVERLAY_SET_ENABLED: e_,
        RPC_APP_CONNECTED: e_,
        RPC_APP_DISCONNECTED: e_,
        KEYBINDS_ADD_KEYBIND: ei,
        KEYBINDS_DELETE_KEYBIND: ea,
        KEYBINDS_SET_KEYBIND: es,
        KEYBINDS_ENABLE_ALL_KEYBINDS: eo,
        KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: el,
    }),
    em = eh;
