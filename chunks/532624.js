"use strict";
n.d(t, { Ay: () => eu, DV: () => R, aS: () => L }), n(321073);
var r = n(812729),
    i = n.n(r),
    s = n(735438),
    a = n.n(s),
    o = n(311907),
    l = n(73153),
    u = n(775121),
    c = n(626584),
    d = n(549205),
    _ = n(430452),
    f = n(954571),
    p = n(723702),
    h = n(837921),
    m = n(316501),
    E = n(350535),
    g = n(242286),
    A = n(652215),
    I = n(696016);
n(980504);
var T = n(650583),
    S = n(72290);
let y = new c.A("KeybindsStore");
function v() {
    let e = (0, m.Ze)(!1).get("Backquote") ?? "`";
    return "+" === e ? (e = "plus") : 0 === e.length && (e = "`"), `shift+${e}`;
}
let N = "1001",
    C = 10,
    b = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return { id: N, action: A.hCu.TOGGLE_OVERLAY_INPUT_LOCK, shortcut: e, enabled: t, managed: !0, params: {} };
    },
    R = (e) => {
        let t = (0, E.Z0)("shift");
        return null != t && (1 !== e.length || e[0][1] !== t);
    },
    O = (e, t, n, r) => {
        let i = (0, m.Ze)(!1).get("Backquote"),
            s = (0, m.Ze)(!0).get("Backquote");
        y.log(e, {
            tags: {
                backquoteKey: i ?? "unknown",
                nativeBackquoteKey: s ?? "unknown",
                backquoteCode: `${((0, m.Q_))(i ?? "`")?.keyCode}`,
                nativeBackquoteCode: `${((0, m.Q_))(s ?? "`")?.keyCode}`,
            },
            extra: {
                keyCombo: t,
                combo: n,
                layoutMapBacktick: i,
                env: T.g$[(0, E._$)()],
                backtickEventShape: (0, m.Q_)("`"),
                backquoteKeyShape: (0, m.Q_)(i ?? "`"),
                nativeBackquoteKeyShape: (0, m.Q_)(s ?? "`"),
                ...r,
            },
        });
    };
function D(e) {
    let t = (0, E.OH)(e),
        n = (0, m.Q_)("`"),
        r = n?.keyCode ?? (0, E.Z0)("`");
    return R(t)
        ? t
        : null == r
          ? (O("Unable to get backtick code for overlay default keybind", e, t, { rawBacktickShape: n }), null)
          : (O("Default overlay keybind is unsupported", e, t, { rawBacktickCode: r }),
            [...t, [T.zY.KEYBOARD_KEY, r, (0, E._$)()]]);
}
let L = () => {
        let e = v();
        "shift" === e && (O("Default overlay keybind is only shift", e, null), (e = "shift+`"));
        let t = D(e);
        if (null == t) return b([], !1);
        if (R(t)) return b(t, !0);
        let n = (0, E.Z0)("shift"),
            r = (0, m.Q_)("`");
        return (
            0 === t.length
                ? O("Default overlay keybind combo is empty", e, t)
                : null == n
                  ? O("Unable to get shift code", e, t, { shiftCode: n })
                  : null == r && O("Unable to get backtick code", e, t),
            b(t, !1)
        );
    },
    w = {},
    x = {},
    M = 0,
    P = !0,
    k = {},
    U = !1,
    G = [A.hCu.PUSH_TO_TALK, A.hCu.TOGGLE_OVERLAY_INPUT_LOCK, A.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET],
    F = [];
function V(e) {
    return e === L().id ? L() : x[e];
}
function B(e, t) {
    return (
        !(e.shortcut.length >= t.shortcut.length) &&
        e.shortcut.every((e) => t.shortcut.some((t) => t[0] === e[0] && t[1] === e[1]))
    );
}
function H(e, t, n) {
    f.default.track(A.HAw.KEYBOARD_SHORTCUT_USED, {
        shortcut_name: n.action,
        shortcut_combo: (0, E.dI)(n.shortcut),
        is_native_keyboard_event: !0,
    }),
        t.onTrigger(e, n);
}
function j(e, t) {
    let n = V(e);
    if (null == n) return;
    let r = k[n.action]?.keyEvents;
    if (null == r) return;
    let i = k[n.action];
    if (r.keydown && r.keyup) {
        null != i && H(t, k[n.action], n);
        return;
    }
    F.push(e),
        setTimeout(() => {
            for (let t of F) {
                if (t === e) continue;
                let r = V(t);
                if (null != r && B(n, r)) {
                    F.includes(e) && F.splice(F.indexOf(e), 1);
                    return;
                }
            }
            try {
                null != i && H(t, i, n);
            } finally {
                setTimeout(() => {
                    F.includes(e) && F.splice(F.indexOf(e), 1);
                }, C);
            }
        }, C);
}
function Y() {
    let e = L();
    null == a().find(x, (t) => e.action === t.action && t.enabled && t.shortcut.length > 0) &&
        P &&
        !U &&
        ($(e), (U = !0));
}
function W() {
    let e = L();
    U && (z(e.id), (U = !1));
}
function K(e, t, n, r) {
    if (p.isPlatformEmbedded)
        try {
            h.Ay.inputEventRegister(e, t, n, r);
        } catch (n) {
            throw (y.error("Failed to register native keybind", { eventId: e, shortcut: t }, n), n);
        }
    else {
        z(e.toString());
        let i = (0, d.I)(document);
        r.keyup && i.bindGlobal((0, E.dI)(t), () => n(!1), "keyup"),
            r.keydown && i.bindGlobal((0, E.dI)(t), () => n(!0), "keydown"),
            (w[e] = i);
    }
}
function z(e) {
    if (p.isPlatformEmbedded) h.Ay.inputEventUnregister(parseInt(e, 10));
    else {
        let t = w[e];
        if (null != t) {
            let n = x[e];
            if (null != n) {
                let e = k[n.action];
                e?.isPressed === !0 && S.nextTick(() => H(!1, e, n));
            }
            t.reset(), (w[e] = null);
        }
    }
}
function $(e) {
    if (!P || __OVERLAY__) return;
    let { shortcut: t, action: n, enabled: r } = e;
    if (0 === t.length || null == t || n === A.hCu.UNASSIGNED || !r) return;
    if (null == k[n])
        return void y.error(
            `[kb store] KeybindStore: Looking for callback action ${n} but it doesn't exist in this version. Skipping`,
        );
    let i = e.id,
        s = parseInt(i, 10);
    if (isNaN(s))
        return void y.error("[kb store] KeybindStore: Keybind id is not a number. Skipping registration.", {
            keybind: e,
        });
    let a = k[n].keyEvents;
    e.action === A.hCu.TOGGLE_OVERLAY_INPUT_LOCK && W(),
        K(s, t, (e) => j(i, e), { focused: !0, blurred: !0, keydown: !1, keyup: !1, ...a }),
        u.A.validateKeybind((0, E.dI)(t));
}
function q(e) {
    let t = { id: M.toString(), enabled: !0, action: A.hCu.UNASSIGNED, shortcut: [], managed: !1, params: {}, ...e };
    return (x = { ...x, [t.id]: t }), (M += 1), t;
}
function Z(e) {
    z(e.id), (x = { ...x }), delete x[e.id], e.action === A.hCu.TOGGLE_OVERLAY_INPUT_LOCK && Y();
}
function X(e) {
    let { keybind: t } = e;
    $(q(t));
}
function Q(e) {
    let { id: t } = e,
        n = x[t];
    __OVERLAY__ ||
        f.default.track(A.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
            keybind_action: n.action,
            keybind_is_bound: !1,
            keybind_has_shortcut: !1,
        }),
        null != n && Z(n);
}
function J(e) {
    let { keybind: t } = e;
    (x = { ...x, [t.id]: t }),
        __OVERLAY__ ||
            (f.default.track(A.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
                keybind_action: t.action,
                keybind_is_bound: !0,
                keybind_has_shortcut: t.shortcut.length > 0,
            }),
            t.action === A.hCu.TOGGLE_OVERLAY_INPUT_LOCK
                ? f.default.track(A.HAw.OVERLAY_SETTINGS_UPDATED, {
                      hotkey: t.action === A.hCu.TOGGLE_OVERLAY_INPUT_LOCK ? (0, E.dI)(t.shortcut) : null,
                  })
                : t.action === A.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET &&
                  f.default.track(A.HAw.OVERLAY_SETTINGS_UPDATED, {
                      text_activation_hotkey:
                          t.action === A.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, E.dI)(t.shortcut) : null,
                  })),
        $(t);
}
function ee(e) {
    let { enable: t } = e;
    (P = t), t ? (u.A.enable(), a().forEach(x, $), Y()) : (u.A.disable(), a().forEach(x, (e) => z(e.id)), W());
}
function et(e) {
    let { keybinds: t } = e;
    (k = t),
        (w = {}),
        (M = 0),
        Object.values(x).filter((e) => G.includes(e.action) && e.managed).length !== G.length && es(),
        a().forEach(x, (e) => {
            M = Math.max(parseInt(e.id, 10), M) + 1;
            try {
                $(e);
            } catch (t) {
                y.error("Failed to register keybind", e, t);
            }
        }),
        (P = !0);
}
function en(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        null == a().find(x, (t) => t.action === e && (!n || t.managed === n)) &&
        ($(q({ action: e, enabled: !0, shortcut: (0, E.OH)(t), managed: !0, params: {} })), !0)
    );
}
function er(e) {
    let t = !1;
    return (
        a().each(x, (n) => {
            n.action === e && !0 === n.managed && (Z(n), (t = !0));
        }),
        t
    );
}
let ei = [
    function () {
        let e = _.Ay.getShortcuts();
        return (
            a().each(x, (t) => {
                t.action === A.hCu.PUSH_TO_TALK &&
                    !0 === t.managed &&
                    (null == t.context || null == e[t.context]) &&
                    Z(t);
            }),
            a().reduce(
                _.Ay.getShortcuts(),
                (e, t, n) => {
                    let r = a().find(x, (e) => e.action === A.hCu.PUSH_TO_TALK && !0 === e.managed && e.context === n);
                    if (null == r)
                        $(
                            q({
                                action: A.hCu.PUSH_TO_TALK,
                                enabled: !0,
                                shortcut: t,
                                managed: !0,
                                params: {},
                                context: n,
                            }),
                        );
                    else {
                        if (null == t) return e || !1;
                        J({ keybind: { ...r, shortcut: "string" == typeof t ? (0, E.OH)(t) : t, context: n } });
                    }
                    return !0;
                },
                !1,
            )
        );
    },
    function () {
        return !!g.default.getAnyGlobalEnabledOverlay() && en(A.hCu.TOGGLE_OVERLAY_INPUT_LOCK, v());
    },
    function () {
        return !!g.default.getAnyGlobalEnabledOverlay() && en(A.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`");
    },
    function () {
        let e = er(A.hCu.SOUNDBOARD_HOLD);
        return en(A.hCu.SOUNDBOARD_HOLD, "ctrl+`", !1) || e;
    },
    function () {
        return en(A.hCu.SAVE_CLIP, I.Ot);
    },
    function () {
        return en(A.hCu.SAVE_SCREENSHOT, I.sz);
    },
];
function es() {
    return Y(), ei.reduce((e, t) => t() || e, !1);
}
function ea() {
    return (
        (async () => {
            await (0, m.AD)(), es() && el.emitChange();
        })(),
        !1
    );
}
u.A.setGetKeybindList(() => {
    let e = [];
    for (let t in x) x.hasOwnProperty(t) && e.push((0, E.dI)(x[t].shortcut));
    return e;
});
class eo extends o.Ay.DeviceSettingsStore {
    static displayName = "KeybindsStore";
    static persistKey = "keybinds";
    static migrations = [
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { v: t, keybinds: n = e } = e;
            return a().reduce(
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
            return a().reduce(
                t,
                (e, t, n) => {
                    if ((0, p.isLinux)() && t.action === A.hCu.SOUNDBOARD_HOLD) {
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
            a().reduce(
                e,
                (e, t, n) => (t.action === A.hCu.TOGGLE_GO_LIVE_STREAMING && t.managed ? e : { ...e, [n]: t }),
                {},
            ),
    ];
    initialize(e) {
        for (let t in (__OVERLAY__ || this.waitFor(_.Ay, g.default), (x = e ?? {})))
            delete x[t].latched, delete x[t].pressedTime;
    }
    getUserAgnosticState() {
        return x;
    }
    hasKeybind(e, t, n) {
        for (let r in x)
            for (let i of x[r].shortcut) if (i[0] === e && i[1] === t && (void 0 === n || n === i[2])) return !0;
        return !1;
    }
    hasExactKeybind(e) {
        for (let t in x) {
            let n = x[t];
            if (a().isEqual(n.shortcut, e)) return !0;
        }
        return !1;
    }
    getKeybindForAction(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (
            a().find(x, (r) => r.action === e && (!t || r.managed) && (!n || (r.shortcut.length > 0 && r.enabled))) ??
            null
        );
    }
    getOverlayKeybind() {
        let e = this.getKeybindForAction(A.hCu.TOGGLE_OVERLAY_INPUT_LOCK, !0);
        return null != e ? e : L();
    }
    getOverlayChatKeybind() {
        return this.getKeybindForAction(A.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0);
    }
}
let el = new eo(l.h, {
        CONNECTION_OPEN: es,
        LOGIN_SUCCESS: ea,
        AUDIO_SET_MODE: es,
        OVERLAY_SET_ENABLED: es,
        RPC_APP_CONNECTED: es,
        RPC_APP_DISCONNECTED: es,
        KEYBINDS_ADD_KEYBIND: X,
        KEYBINDS_DELETE_KEYBIND: Q,
        KEYBINDS_SET_KEYBIND: J,
        KEYBINDS_ENABLE_ALL_KEYBINDS: ee,
        KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: et,
    }),
    eu = el;
