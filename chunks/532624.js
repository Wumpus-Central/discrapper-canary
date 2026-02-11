"use strict";
let r;
n.d(t, { Ay: () => eg, DV: () => w, aS: () => M, xC: () => N }), n(321073);
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
    h = n(430452),
    p = n(954571),
    g = n(723702),
    E = n(837921),
    A = n(316501),
    I = n(350535),
    T = n(242286),
    y = n(652215),
    S = n(696016);
n(980504);
var v = n(650583),
    C = n(72290);
let b = new d.A("KeybindsStore"),
    N = {
        id: "1000",
        action: y.hCu.TOGGLE_MUTE,
        shortcut: (0, I.OH)("mod+shift+m"),
        enabled: !0,
        managed: !0,
        params: {},
    };
function R() {
    let e = (0, A.Ze)(!1).get("Backquote") ?? "`";
    return "+" === e ? (e = "plus") : 0 === e.length && (e = "`"), `shift+${e}`;
}
let O = "1001",
    D = 10,
    L = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return { id: O, action: y.hCu.TOGGLE_OVERLAY_INPUT_LOCK, shortcut: e, enabled: t, managed: !0, params: {} };
    },
    w = (e) => {
        let t = (0, I.Z0)("shift");
        return null != t && (1 !== e.length || e[0][1] !== t);
    },
    x = (e, t, n, r) => {
        let i = (0, A.Ze)(!1).get("Backquote"),
            a = (0, A.Ze)(!0).get("Backquote");
        b.log(e, {
            tags: {
                backquoteKey: i ?? "unknown",
                nativeBackquoteKey: a ?? "unknown",
                backquoteCode: `${((0, A.Q_))(i ?? "`")?.keyCode}`,
                nativeBackquoteCode: `${((0, A.Q_))(a ?? "`")?.keyCode}`,
            },
            extra: {
                keyCombo: t,
                combo: n,
                layoutMapBacktick: i,
                env: v.g$[(0, I._$)()],
                backtickEventShape: (0, A.Q_)("`"),
                backquoteKeyShape: (0, A.Q_)(i ?? "`"),
                nativeBackquoteKeyShape: (0, A.Q_)(a ?? "`"),
                ...r,
            },
        });
    };
function P(e) {
    let t = (0, I.OH)(e),
        n = (0, A.Q_)("`"),
        r = n?.keyCode ?? (0, I.Z0)("`");
    return w(t)
        ? t
        : null == r
          ? (x("Unable to get backtick code for overlay default keybind", e, t, { rawBacktickShape: n }), null)
          : (x("Default overlay keybind is unsupported", e, t, { rawBacktickCode: r }),
            [...t, [v.zY.KEYBOARD_KEY, r, (0, I._$)()]]);
}
let M = () => {
        let e = R();
        "shift" === e && (x("Default overlay keybind is only shift", e, null), (e = "shift+`"));
        let t = P(e);
        if (null == t) return L([], !1);
        if (w(t)) return L(t, !0);
        let n = (0, I.Z0)("shift"),
            r = (0, A.Q_)("`");
        return (
            0 === t.length
                ? x("Default overlay keybind combo is empty", e, t)
                : null == n
                  ? x("Unable to get shift code", e, t, { shiftCode: n })
                  : null == r && x("Unable to get backtick code", e, t),
            L(t, !1)
        );
    },
    k = {},
    U = {},
    G = 0,
    F = !0,
    V = {},
    B = !1,
    j = !1,
    H = [y.hCu.PUSH_TO_TALK, y.hCu.TOGGLE_OVERLAY_INPUT_LOCK, y.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET],
    Y = [];
function W(e) {
    switch (e) {
        case N.id:
            return N;
        case M().id:
            return M();
        default:
            return U[e];
    }
}
function K(e, t) {
    return (
        !(e.shortcut.length >= t.shortcut.length) &&
        e.shortcut.every((e) => t.shortcut.some((t) => t[0] === e[0] && t[1] === e[1]))
    );
}
function $(e, t, n) {
    p.default.track(y.HAw.KEYBOARD_SHORTCUT_USED, {
        shortcut_name: n.action,
        shortcut_combo: (0, I.dI)(n.shortcut),
        is_native_keyboard_event: !0,
    }),
        t.onTrigger(e, n);
}
function z(e, t) {
    let n = W(e);
    if (null == n) return;
    let r = V[n.action]?.keyEvents;
    if (null == r) return;
    let i = V[n.action];
    if (r.keydown && r.keyup) {
        null != i && $(t, V[n.action], n);
        return;
    }
    Y.push(e),
        setTimeout(() => {
            for (let t of Y) {
                if (t === e) continue;
                let r = W(t);
                if (null != r && K(n, r)) {
                    Y.includes(e) && Y.splice(Y.indexOf(e), 1);
                    return;
                }
            }
            try {
                null != i && $(t, i, n);
            } finally {
                setTimeout(() => {
                    Y.includes(e) && Y.splice(Y.indexOf(e), 1);
                }, D);
            }
        }, D);
}
function q() {
    let e = M();
    null == o().find(U, (t) => e.action === t.action && t.enabled && t.shortcut.length > 0) &&
        F &&
        !j &&
        (en(e), (j = !0));
}
function X() {
    let e = M();
    j && (et(e.id), (j = !1));
}
function Z() {
    let { showKeybindIndicators: e } = f.A.getCurrentConfig({ location: "KeybindsStore" });
    null == o().find(U, (e) => N.action === e.action && e.enabled && e.shortcut.length > 0) &&
        !__OVERLAY__ &&
        !B &&
        F &&
        e &&
        (en(N), (B = !0));
}
function Q() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    (B || e) && (et(N.id), (B = !1));
}
function J(e) {
    let { showKeybindIndicators: t } = e;
    t ? Z() : Q(!0);
}
function ee(e, t, n, r) {
    if (g.isPlatformEmbedded)
        try {
            E.Ay.inputEventRegister(e, t, n, r);
        } catch (n) {
            throw (b.error("Failed to register native keybind", { eventId: e, shortcut: t }, n), n);
        }
    else {
        et(e.toString());
        let i = (0, _.I)(document);
        r.keyup && i.bindGlobal((0, I.dI)(t), () => n(!1), "keyup"),
            r.keydown && i.bindGlobal((0, I.dI)(t), () => n(!0), "keydown"),
            (k[e] = i);
    }
}
function et(e) {
    if (g.isPlatformEmbedded) E.Ay.inputEventUnregister(parseInt(e, 10));
    else {
        let t = k[e];
        if (null != t) {
            let n = U[e];
            if (null != n) {
                let e = V[n.action];
                e?.isPressed === !0 && C.nextTick(() => $(!1, e, n));
            }
            t.reset(), (k[e] = null);
        }
    }
}
function en(e) {
    if (!F || __OVERLAY__) return;
    let { shortcut: t, action: n, enabled: r } = e;
    if (0 === t.length || null == t || n === y.hCu.UNASSIGNED || !r) return;
    if (null == V[n])
        return void b.error(
            `[kb store] KeybindStore: Looking for callback action ${n} but it doesn't exist in this version. Skipping`,
        );
    let i = e.id,
        a = parseInt(i, 10);
    if (isNaN(a))
        return void b.error("[kb store] KeybindStore: Keybind id is not a number. Skipping registration.", {
            keybind: e,
        });
    let s = V[n].keyEvents;
    e.action === y.hCu.TOGGLE_MUTE && Q(),
        e.action === y.hCu.TOGGLE_OVERLAY_INPUT_LOCK && X(),
        ee(a, t, (e) => z(i, e), { focused: !0, blurred: !0, keydown: !1, keyup: !1, ...s }),
        c.A.validateKeybind((0, I.dI)(t));
}
function er(e) {
    let t = { id: G.toString(), enabled: !0, action: y.hCu.UNASSIGNED, shortcut: [], managed: !1, params: {}, ...e };
    return (U = { ...U, [t.id]: t }), (G += 1), t;
}
function ei(e) {
    et(e.id),
        (U = { ...U }),
        delete U[e.id],
        e.action === y.hCu.TOGGLE_MUTE && Z(),
        e.action === y.hCu.TOGGLE_OVERLAY_INPUT_LOCK && q();
}
function ea(e) {
    let { keybind: t } = e;
    en(er(t));
}
function es(e) {
    let { id: t } = e,
        n = U[t];
    __OVERLAY__ ||
        p.default.track(y.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
            keybind_action: n.action,
            keybind_is_bound: !1,
            keybind_has_shortcut: !1,
        }),
        null != n && ei(n);
}
function eo(e) {
    let { keybind: t } = e;
    (U = { ...U, [t.id]: t }),
        __OVERLAY__ ||
            (p.default.track(y.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
                keybind_action: t.action,
                keybind_is_bound: !0,
                keybind_has_shortcut: t.shortcut.length > 0,
            }),
            t.action === y.hCu.TOGGLE_OVERLAY_INPUT_LOCK
                ? p.default.track(y.HAw.OVERLAY_SETTINGS_UPDATED, {
                      hotkey: t.action === y.hCu.TOGGLE_OVERLAY_INPUT_LOCK ? (0, I.dI)(t.shortcut) : null,
                  })
                : t.action === y.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET &&
                  p.default.track(y.HAw.OVERLAY_SETTINGS_UPDATED, {
                      text_activation_hotkey:
                          t.action === y.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, I.dI)(t.shortcut) : null,
                  })),
        en(t);
}
function el(e) {
    let { enable: t } = e;
    (F = t),
        t ? (c.A.enable(), o().forEach(U, en), Z(), q()) : (c.A.disable(), o().forEach(U, (e) => et(e.id)), Q(), X());
}
function eu(e) {
    let { keybinds: t } = e;
    (V = t),
        (k = {}),
        (G = 0),
        Object.values(U).filter((e) => H.includes(e.action) && e.managed).length !== H.length && ef(),
        o().forEach(U, (e) => {
            G = Math.max(parseInt(e.id, 10), G) + 1;
            try {
                en(e);
            } catch (t) {
                b.error("Failed to register keybind", e, t);
            }
        }),
        (F = !0),
        null == r && (r = f.A.subscribe({ location: "KeybindsStore" }, J));
}
function ec(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        null == o().find(U, (t) => t.action === e && (!n || t.managed === n)) &&
        (en(er({ action: e, enabled: !0, shortcut: (0, I.OH)(t), managed: !0, params: {} })), !0)
    );
}
function ed(e) {
    let t = !1;
    return (
        o().each(U, (n) => {
            n.action === e && !0 === n.managed && (ei(n), (t = !0));
        }),
        t
    );
}
let e_ = [
    function () {
        let e = h.A.getShortcuts();
        return (
            o().each(U, (t) => {
                t.action === y.hCu.PUSH_TO_TALK &&
                    !0 === t.managed &&
                    (null == t.context || null == e[t.context]) &&
                    ei(t);
            }),
            o().reduce(
                h.A.getShortcuts(),
                (e, t, n) => {
                    let r = o().find(U, (e) => e.action === y.hCu.PUSH_TO_TALK && !0 === e.managed && e.context === n);
                    if (null == r)
                        en(
                            er({
                                action: y.hCu.PUSH_TO_TALK,
                                enabled: !0,
                                shortcut: t,
                                managed: !0,
                                params: {},
                                context: n,
                            }),
                        );
                    else {
                        if (null == t) return e || !1;
                        eo({ keybind: { ...r, shortcut: "string" == typeof t ? (0, I.OH)(t) : t, context: n } });
                    }
                    return !0;
                },
                !1,
            )
        );
    },
    function () {
        return !!T.default.getAnyGlobalEnabledOverlay() && ec(y.hCu.TOGGLE_OVERLAY_INPUT_LOCK, R());
    },
    function () {
        return !!T.default.getAnyGlobalEnabledOverlay() && ec(y.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`");
    },
    function () {
        let e = ed(y.hCu.SOUNDBOARD_HOLD);
        return ec(y.hCu.SOUNDBOARD_HOLD, "ctrl+`", !1) || e;
    },
    function () {
        return ec(y.hCu.SAVE_CLIP, S.Ot);
    },
    function () {
        return ec(y.hCu.SAVE_SCREENSHOT, S.sz);
    },
];
function ef() {
    return Z(), q(), e_.reduce((e, t) => t() || e, !1);
}
function eh() {
    return (
        (async () => {
            await (0, A.AD)(), ef() && em.emitChange();
        })(),
        !1
    );
}
c.A.setGetKeybindList(() => {
    let e = [];
    for (let t in U) U.hasOwnProperty(t) && e.push((0, I.dI)(U[t].shortcut));
    let { showKeybindIndicators: t } = f.A.getCurrentConfig({ location: "KeybindsStore" });
    return t && e.push((0, I.dI)(N.shortcut)), e;
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
                                  (n.shortcut = (0, I.OH)(n.shortcut)))
                                : (n.shortcut = n.shortcut.map((e) => (e.length < 3 ? [...e, (0, I._$)()] : e)))),
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
                    if ((0, g.isLinux)() && t.action === y.hCu.SOUNDBOARD_HOLD) {
                        let n = t.shortcut.map((e) => e[1]),
                            r = (0, I.OH)("`").map((e) => e[1]);
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
                (e, t, n) => (t.action === y.hCu.TOGGLE_GO_LIVE_STREAMING && t.managed ? e : { ...e, [n]: t }),
                {},
            ),
    ];
    initialize(e) {
        for (let t in (__OVERLAY__ || this.waitFor(h.A, T.default), (U = e ?? {})))
            delete U[t].latched, delete U[t].pressedTime;
    }
    getUserAgnosticState() {
        return U;
    }
    hasKeybind(e, t, n) {
        for (let r in U)
            for (let i of U[r].shortcut) if (i[0] === e && i[1] === t && (void 0 === n || n === i[2])) return !0;
        return !1;
    }
    hasExactKeybind(e) {
        for (let t in U) {
            let n = U[t];
            if (o().isEqual(n.shortcut, e)) return !0;
        }
        return !1;
    }
    getKeybindForAction(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            { showKeybindIndicators: r } = f.A.getCurrentConfig({ location: "KeybindsStore" }),
            i = o().find(U, (r) => r.action === e && (!t || r.managed) && (!n || (r.shortcut.length > 0 && r.enabled)));
        return null != i ? i : r && e === y.hCu.TOGGLE_MUTE ? N : null;
    }
    getOverlayKeybind() {
        let e = this.getKeybindForAction(y.hCu.TOGGLE_OVERLAY_INPUT_LOCK, !0);
        return null != e ? e : M();
    }
    getOverlayChatKeybind() {
        return this.getKeybindForAction(y.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0);
    }
}
let em = new ep(u.h, {
        CONNECTION_OPEN: ef,
        LOGIN_SUCCESS: eh,
        AUDIO_SET_MODE: ef,
        OVERLAY_SET_ENABLED: ef,
        RPC_APP_CONNECTED: ef,
        RPC_APP_DISCONNECTED: ef,
        KEYBINDS_ADD_KEYBIND: ea,
        KEYBINDS_DELETE_KEYBIND: es,
        KEYBINDS_SET_KEYBIND: eo,
        KEYBINDS_ENABLE_ALL_KEYBINDS: el,
        KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: eu,
    }),
    eg = em;
