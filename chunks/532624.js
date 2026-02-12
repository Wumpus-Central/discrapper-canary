"use strict";
n.d(t, { Ay: () => ec, DV: () => O, aS: () => w }), n(321073);
var r = n(812729),
    i = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(311907),
    l = n(73153),
    u = n(775121),
    c = n(626584),
    d = n(549205),
    _ = n(430452),
    f = n(954571),
    h = n(723702),
    p = n(837921),
    g = n(316501),
    E = n(350535),
    A = n(242286),
    I = n(652215),
    T = n(696016);
n(980504);
var y = n(650583),
    S = n(72290);
let v = new c.A("KeybindsStore");
function C() {
    let e = (0, g.Ze)(!1).get("Backquote") ?? "`";
    return "+" === e ? (e = "plus") : 0 === e.length && (e = "`"), `shift+${e}`;
}
let b = "1001",
    N = 10,
    R = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return { id: b, action: I.hCu.TOGGLE_OVERLAY_INPUT_LOCK, shortcut: e, enabled: t, managed: !0, params: {} };
    },
    O = (e) => {
        let t = (0, E.Z0)("shift");
        return null != t && (1 !== e.length || e[0][1] !== t);
    },
    D = (e, t, n, r) => {
        let i = (0, g.Ze)(!1).get("Backquote"),
            a = (0, g.Ze)(!0).get("Backquote");
        v.log(e, {
            tags: {
                backquoteKey: i ?? "unknown",
                nativeBackquoteKey: a ?? "unknown",
                backquoteCode: `${((0, g.Q_))(i ?? "`")?.keyCode}`,
                nativeBackquoteCode: `${((0, g.Q_))(a ?? "`")?.keyCode}`,
            },
            extra: {
                keyCombo: t,
                combo: n,
                layoutMapBacktick: i,
                env: y.g$[(0, E._$)()],
                backtickEventShape: (0, g.Q_)("`"),
                backquoteKeyShape: (0, g.Q_)(i ?? "`"),
                nativeBackquoteKeyShape: (0, g.Q_)(a ?? "`"),
                ...r,
            },
        });
    };
function L(e) {
    let t = (0, E.OH)(e),
        n = (0, g.Q_)("`"),
        r = n?.keyCode ?? (0, E.Z0)("`");
    return O(t)
        ? t
        : null == r
          ? (D("Unable to get backtick code for overlay default keybind", e, t, { rawBacktickShape: n }), null)
          : (D("Default overlay keybind is unsupported", e, t, { rawBacktickCode: r }),
            [...t, [y.zY.KEYBOARD_KEY, r, (0, E._$)()]]);
}
let w = () => {
        let e = C();
        "shift" === e && (D("Default overlay keybind is only shift", e, null), (e = "shift+`"));
        let t = L(e);
        if (null == t) return R([], !1);
        if (O(t)) return R(t, !0);
        let n = (0, E.Z0)("shift"),
            r = (0, g.Q_)("`");
        return (
            0 === t.length
                ? D("Default overlay keybind combo is empty", e, t)
                : null == n
                  ? D("Unable to get shift code", e, t, { shiftCode: n })
                  : null == r && D("Unable to get backtick code", e, t),
            R(t, !1)
        );
    },
    x = {},
    P = {},
    M = 0,
    k = !0,
    U = {},
    G = !1,
    F = [I.hCu.PUSH_TO_TALK, I.hCu.TOGGLE_OVERLAY_INPUT_LOCK, I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET],
    V = [];
function B(e) {
    return e === w().id ? w() : P[e];
}
function j(e, t) {
    return (
        !(e.shortcut.length >= t.shortcut.length) &&
        e.shortcut.every((e) => t.shortcut.some((t) => t[0] === e[0] && t[1] === e[1]))
    );
}
function H(e, t, n) {
    f.default.track(I.HAw.KEYBOARD_SHORTCUT_USED, {
        shortcut_name: n.action,
        shortcut_combo: (0, E.dI)(n.shortcut),
        is_native_keyboard_event: !0,
    }),
        t.onTrigger(e, n);
}
function Y(e, t) {
    let n = B(e);
    if (null == n) return;
    let r = U[n.action]?.keyEvents;
    if (null == r) return;
    let i = U[n.action];
    if (r.keydown && r.keyup) {
        null != i && H(t, U[n.action], n);
        return;
    }
    V.push(e),
        setTimeout(() => {
            for (let t of V) {
                if (t === e) continue;
                let r = B(t);
                if (null != r && j(n, r)) {
                    V.includes(e) && V.splice(V.indexOf(e), 1);
                    return;
                }
            }
            try {
                null != i && H(t, i, n);
            } finally {
                setTimeout(() => {
                    V.includes(e) && V.splice(V.indexOf(e), 1);
                }, N);
            }
        }, N);
}
function W() {
    let e = w();
    null == s().find(P, (t) => e.action === t.action && t.enabled && t.shortcut.length > 0) &&
        k &&
        !G &&
        (q(e), (G = !0));
}
function K() {
    let e = w();
    G && (z(e.id), (G = !1));
}
function $(e, t, n, r) {
    if (h.isPlatformEmbedded)
        try {
            p.Ay.inputEventRegister(e, t, n, r);
        } catch (n) {
            throw (v.error("Failed to register native keybind", { eventId: e, shortcut: t }, n), n);
        }
    else {
        z(e.toString());
        let i = (0, d.I)(document);
        r.keyup && i.bindGlobal((0, E.dI)(t), () => n(!1), "keyup"),
            r.keydown && i.bindGlobal((0, E.dI)(t), () => n(!0), "keydown"),
            (x[e] = i);
    }
}
function z(e) {
    if (h.isPlatformEmbedded) p.Ay.inputEventUnregister(parseInt(e, 10));
    else {
        let t = x[e];
        if (null != t) {
            let n = P[e];
            if (null != n) {
                let e = U[n.action];
                e?.isPressed === !0 && S.nextTick(() => H(!1, e, n));
            }
            t.reset(), (x[e] = null);
        }
    }
}
function q(e) {
    if (!k || __OVERLAY__) return;
    let { shortcut: t, action: n, enabled: r } = e;
    if (0 === t.length || null == t || n === I.hCu.UNASSIGNED || !r) return;
    if (null == U[n])
        return void v.error(
            `[kb store] KeybindStore: Looking for callback action ${n} but it doesn't exist in this version. Skipping`,
        );
    let i = e.id,
        a = parseInt(i, 10);
    if (isNaN(a))
        return void v.error("[kb store] KeybindStore: Keybind id is not a number. Skipping registration.", {
            keybind: e,
        });
    let s = U[n].keyEvents;
    e.action === I.hCu.TOGGLE_OVERLAY_INPUT_LOCK && K(),
        $(a, t, (e) => Y(i, e), { focused: !0, blurred: !0, keydown: !1, keyup: !1, ...s }),
        u.A.validateKeybind((0, E.dI)(t));
}
function X(e) {
    let t = { id: M.toString(), enabled: !0, action: I.hCu.UNASSIGNED, shortcut: [], managed: !1, params: {}, ...e };
    return (P = { ...P, [t.id]: t }), (M += 1), t;
}
function Z(e) {
    z(e.id), (P = { ...P }), delete P[e.id], e.action === I.hCu.TOGGLE_OVERLAY_INPUT_LOCK && W();
}
function Q(e) {
    let { keybind: t } = e;
    q(X(t));
}
function J(e) {
    let { id: t } = e,
        n = P[t];
    __OVERLAY__ ||
        f.default.track(I.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
            keybind_action: n.action,
            keybind_is_bound: !1,
            keybind_has_shortcut: !1,
        }),
        null != n && Z(n);
}
function ee(e) {
    let { keybind: t } = e;
    (P = { ...P, [t.id]: t }),
        __OVERLAY__ ||
            (f.default.track(I.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
                keybind_action: t.action,
                keybind_is_bound: !0,
                keybind_has_shortcut: t.shortcut.length > 0,
            }),
            t.action === I.hCu.TOGGLE_OVERLAY_INPUT_LOCK
                ? f.default.track(I.HAw.OVERLAY_SETTINGS_UPDATED, {
                      hotkey: t.action === I.hCu.TOGGLE_OVERLAY_INPUT_LOCK ? (0, E.dI)(t.shortcut) : null,
                  })
                : t.action === I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET &&
                  f.default.track(I.HAw.OVERLAY_SETTINGS_UPDATED, {
                      text_activation_hotkey:
                          t.action === I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, E.dI)(t.shortcut) : null,
                  })),
        q(t);
}
function et(e) {
    let { enable: t } = e;
    (k = t), t ? (u.A.enable(), s().forEach(P, q), W()) : (u.A.disable(), s().forEach(P, (e) => z(e.id)), K());
}
function en(e) {
    let { keybinds: t } = e;
    (U = t),
        (x = {}),
        (M = 0),
        Object.values(P).filter((e) => F.includes(e.action) && e.managed).length !== F.length && es(),
        s().forEach(P, (e) => {
            M = Math.max(parseInt(e.id, 10), M) + 1;
            try {
                q(e);
            } catch (t) {
                v.error("Failed to register keybind", e, t);
            }
        }),
        (k = !0);
}
function er(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        null == s().find(P, (t) => t.action === e && (!n || t.managed === n)) &&
        (q(X({ action: e, enabled: !0, shortcut: (0, E.OH)(t), managed: !0, params: {} })), !0)
    );
}
function ei(e) {
    let t = !1;
    return (
        s().each(P, (n) => {
            n.action === e && !0 === n.managed && (Z(n), (t = !0));
        }),
        t
    );
}
let ea = [
    function () {
        let e = _.Ay.getShortcuts();
        return (
            s().each(P, (t) => {
                t.action === I.hCu.PUSH_TO_TALK &&
                    !0 === t.managed &&
                    (null == t.context || null == e[t.context]) &&
                    Z(t);
            }),
            s().reduce(
                _.Ay.getShortcuts(),
                (e, t, n) => {
                    let r = s().find(P, (e) => e.action === I.hCu.PUSH_TO_TALK && !0 === e.managed && e.context === n);
                    if (null == r)
                        q(
                            X({
                                action: I.hCu.PUSH_TO_TALK,
                                enabled: !0,
                                shortcut: t,
                                managed: !0,
                                params: {},
                                context: n,
                            }),
                        );
                    else {
                        if (null == t) return e || !1;
                        ee({ keybind: { ...r, shortcut: "string" == typeof t ? (0, E.OH)(t) : t, context: n } });
                    }
                    return !0;
                },
                !1,
            )
        );
    },
    function () {
        return !!A.default.getAnyGlobalEnabledOverlay() && er(I.hCu.TOGGLE_OVERLAY_INPUT_LOCK, C());
    },
    function () {
        return !!A.default.getAnyGlobalEnabledOverlay() && er(I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`");
    },
    function () {
        let e = ei(I.hCu.SOUNDBOARD_HOLD);
        return er(I.hCu.SOUNDBOARD_HOLD, "ctrl+`", !1) || e;
    },
    function () {
        return er(I.hCu.SAVE_CLIP, T.Ot);
    },
    function () {
        return er(I.hCu.SAVE_SCREENSHOT, T.sz);
    },
];
function es() {
    return W(), ea.reduce((e, t) => t() || e, !1);
}
function eo() {
    return (
        (async () => {
            await (0, g.AD)(), es() && eu.emitChange();
        })(),
        !1
    );
}
u.A.setGetKeybindList(() => {
    let e = [];
    for (let t in P) P.hasOwnProperty(t) && e.push((0, E.dI)(P[t].shortcut));
    return e;
});
class el extends o.Ay.DeviceSettingsStore {
    static displayName = "KeybindsStore";
    static persistKey = "keybinds";
    static migrations = [
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { v: t, keybinds: n = e } = e;
            return s().reduce(
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
                                  (n.shortcut = (0, E.OH)(n.shortcut)))
                                : (n.shortcut = n.shortcut.map((e) => (e.length < 3 ? [...e, (0, E._$)()] : e)))),
                        (e[r] = n)),
                    e
                ),
                {},
            );
        },
        (e) => e,
        (e) => {
            let { keybinds: t = e } = e;
            return s().reduce(
                t,
                (e, t, n) => {
                    if ((0, h.isLinux)() && t.action === I.hCu.SOUNDBOARD_HOLD) {
                        let n = t.shortcut.map((e) => e[1]),
                            r = (0, E.OH)("`").map((e) => e[1]);
                        if (i()(n, r)) return e;
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
            s().reduce(
                e,
                (e, t, n) => (t.action === I.hCu.TOGGLE_GO_LIVE_STREAMING && t.managed ? e : { ...e, [n]: t }),
                {},
            ),
    ];
    initialize(e) {
        for (let t in (__OVERLAY__ || this.waitFor(_.Ay, A.default), (P = e ?? {})))
            delete P[t].latched, delete P[t].pressedTime;
    }
    getUserAgnosticState() {
        return P;
    }
    hasKeybind(e, t, n) {
        for (let r in P)
            for (let i of P[r].shortcut) if (i[0] === e && i[1] === t && (void 0 === n || n === i[2])) return !0;
        return !1;
    }
    hasExactKeybind(e) {
        for (let t in P) {
            let n = P[t];
            if (s().isEqual(n.shortcut, e)) return !0;
        }
        return !1;
    }
    getKeybindForAction(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (
            s().find(P, (r) => r.action === e && (!t || r.managed) && (!n || (r.shortcut.length > 0 && r.enabled))) ??
            null
        );
    }
    getOverlayKeybind() {
        let e = this.getKeybindForAction(I.hCu.TOGGLE_OVERLAY_INPUT_LOCK, !0);
        return null != e ? e : w();
    }
    getOverlayChatKeybind() {
        return this.getKeybindForAction(I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0);
    }
}
let eu = new el(l.h, {
        CONNECTION_OPEN: es,
        LOGIN_SUCCESS: eo,
        AUDIO_SET_MODE: es,
        OVERLAY_SET_ENABLED: es,
        RPC_APP_CONNECTED: es,
        RPC_APP_DISCONNECTED: es,
        KEYBINDS_ADD_KEYBIND: Q,
        KEYBINDS_DELETE_KEYBIND: J,
        KEYBINDS_SET_KEYBIND: ee,
        KEYBINDS_ENABLE_ALL_KEYBINDS: et,
        KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: en,
    }),
    ec = eu;
