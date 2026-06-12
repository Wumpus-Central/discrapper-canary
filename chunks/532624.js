"use strict";
n.d(t, { Ay: () => Z, DV: () => C, aS: () => O }), n(321073);
var i = n(812729),
    r = n.n(i),
    s = n(735438),
    a = n.n(s),
    o = n(17928),
    l = n(228366),
    u = n(775121),
    c = n(626584),
    d = n(549205),
    _ = n(136491),
    h = n(174459),
    f = n(723702),
    p = n(19575),
    E = n(316501),
    m = n(350535),
    g = n(773371),
    A = n(652215),
    I = n(696016);
n(980504);
var T = n(650583),
    S = n(72290);
let y = new c.A("KeybindsStore");
function N() {
    let e = (0, E.Ze)(!1).get("Backquote") ?? "`";
    return "+" === e ? (e = "plus") : 0 === e.length && (e = "`"), `shift+${e}`;
}
let v = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return {
            id: "1001",
            action: A.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
            shortcut: e,
            enabled: t,
            managed: !0,
            params: {},
        };
    },
    C = (e) => {
        let t = (0, m.Z0)("shift");
        return null != t && (1 !== e.length || e[0][1] !== t);
    },
    R = (e, t, n, i) => {
        let r = (0, E.Ze)(!1).get("Backquote"),
            s = (0, E.Ze)(!0).get("Backquote");
        y.log(e, {
            tags: {
                backquoteKey: r ?? "unknown",
                nativeBackquoteKey: s ?? "unknown",
                backquoteCode: `${((0, E.Q_))(r ?? "`")?.keyCode}`,
                nativeBackquoteCode: `${((0, E.Q_))(s ?? "`")?.keyCode}`,
            },
            extra: {
                keyCombo: t,
                combo: n,
                layoutMapBacktick: r,
                env: T.g$[(0, m._$)()],
                backtickEventShape: (0, E.Q_)("`"),
                backquoteKeyShape: (0, E.Q_)(r ?? "`"),
                nativeBackquoteKeyShape: (0, E.Q_)(s ?? "`"),
                ...i,
            },
        });
    },
    O = () => {
        var e;
        let t,
            n,
            i,
            r = N();
        "shift" === r && (R("Default overlay keybind is only shift", r, null), (r = "shift+`"));
        let s =
            ((e = r),
            (t = (0, m.OH)(e)),
            (n = (0, E.Q_)("`")),
            (i = n?.keyCode ?? (0, m.Z0)("`")),
            C(t)
                ? t
                : null == i
                  ? (R("Unable to get backtick code for overlay default keybind", e, t, { rawBacktickShape: n }), null)
                  : (R("Default overlay keybind is unsupported", e, t, { rawBacktickCode: i }),
                    [...t, [T.zY.KEYBOARD_KEY, i, (0, m._$)()]]));
        if (null == s) return v([], !1);
        if (C(s)) return v(s, !0);
        let a = (0, m.Z0)("shift"),
            o = (0, E.Q_)("`");
        return (
            0 === s.length
                ? R("Default overlay keybind combo is empty", r, s)
                : null == a
                  ? R("Unable to get shift code", r, s, { shiftCode: a })
                  : null == o && R("Unable to get backtick code", r, s),
            v(s, !1)
        );
    },
    b = {},
    D = {},
    L = 0,
    w = !0,
    M = {},
    P = !1,
    x = [A.hCu.PUSH_TO_TALK, A.hCu.TOGGLE_OVERLAY_INPUT_LOCK, A.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET],
    k = [];
function U(e) {
    return e === O().id ? O() : D[e];
}
function G(e, t, n) {
    h.default.track(A.HAw.KEYBOARD_SHORTCUT_USED, {
        shortcut_name: n.action,
        shortcut_combo: (0, m.dI)(n.shortcut),
        is_native_keyboard_event: !0,
    }),
        t.onTrigger(e, n);
}
function F() {
    let e = O();
    null == a().find(D, (t) => e.action === t.action && t.enabled && t.shortcut.length > 0) &&
        w &&
        !P &&
        (H(e), (P = !0));
}
function V() {
    let e = O();
    P && (B(e.id), (P = !1));
}
function B(e) {
    if (f.isPlatformEmbedded) p.Ay.inputEventUnregister(parseInt(e, 10));
    else {
        let t = b[e];
        if (null != t) {
            let n = D[e];
            if (null != n) {
                let e = M[n.action];
                e?.isPressed === !0 && S.nextTick(() => G(!1, e, n));
            }
            t.reset(), (b[e] = null);
        }
    }
}
function H(e) {
    if (!w || __OVERLAY__) return;
    let { shortcut: t, action: n, enabled: i } = e;
    if (0 === t.length || null == t || n === A.hCu.UNASSIGNED || !i) return;
    if (null == M[n])
        return void y.error(
            `[kb store] KeybindStore: Looking for callback action ${n} but it doesn't exist in this version. Skipping`,
        );
    let r = e.id,
        s = parseInt(r, 10);
    if (isNaN(s))
        return void y.error("[kb store] KeybindStore: Keybind id is not a number. Skipping registration.", {
            keybind: e,
        });
    let a = M[n].keyEvents;
    e.action === A.hCu.TOGGLE_OVERLAY_INPUT_LOCK && V(),
        (function (e, t, n, i) {
            if (f.isPlatformEmbedded)
                try {
                    p.Ay.inputEventRegister(e, t, n, i);
                } catch (n) {
                    throw (y.error("Failed to register native keybind", { eventId: e, shortcut: t }, n), n);
                }
            else {
                B(e.toString());
                let r = (0, d.I)(document);
                i.keyup && r.bindGlobal((0, m.dI)(t), () => n(!1), "keyup"),
                    i.keydown && r.bindGlobal((0, m.dI)(t), () => n(!0), "keydown"),
                    (b[e] = r);
            }
        })(
            s,
            t,
            (e) =>
                (function (e, t) {
                    let n = U(e);
                    if (null == n) return;
                    let i = M[n.action]?.keyEvents;
                    if (null == i) return;
                    let r = M[n.action];
                    if (i.keydown && i.keyup) {
                        null != r && G(t, M[n.action], n);
                        return;
                    }
                    k.push(e),
                        setTimeout(() => {
                            for (let t of k) {
                                if (t === e) continue;
                                let i = U(t);
                                if (
                                    null != i &&
                                    (function (e, t) {
                                        return (
                                            !(e.shortcut.length >= t.shortcut.length) &&
                                            e.shortcut.every((e) =>
                                                t.shortcut.some((t) => t[0] === e[0] && t[1] === e[1]),
                                            )
                                        );
                                    })(n, i)
                                ) {
                                    k.includes(e) && k.splice(k.indexOf(e), 1);
                                    return;
                                }
                            }
                            try {
                                null != r && G(t, r, n);
                            } finally {
                                setTimeout(() => {
                                    k.includes(e) && k.splice(k.indexOf(e), 1);
                                }, 10);
                            }
                        }, 10);
                })(r, e),
            { focused: !0, blurred: !0, keydown: !1, keyup: !1, ...a },
        ),
        u.A.validateKeybind((0, m.dI)(t));
}
function j(e) {
    let t = { id: L.toString(), enabled: !0, action: A.hCu.UNASSIGNED, shortcut: [], managed: !1, params: {}, ...e };
    return (D = { ...D, [t.id]: t }), (L += 1), t;
}
function Y(e) {
    B(e.id), (D = { ...D }), delete D[e.id], e.action === A.hCu.TOGGLE_OVERLAY_INPUT_LOCK && F();
}
function W(e) {
    let { keybind: t } = e;
    if (((D = { ...D, [t.id]: t }), !__OVERLAY__))
        switch (
            (h.default.track(A.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
                keybind_action: t.action,
                keybind_is_bound: !0,
                keybind_has_shortcut: t.shortcut.length > 0,
            }),
            t.action)
        ) {
            case A.hCu.TOGGLE_OVERLAY_INPUT_LOCK:
                h.default.track(A.HAw.OVERLAY_SETTINGS_UPDATED, { hotkey: (0, m.dI)(t.shortcut) });
                break;
            case A.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET:
                h.default.track(A.HAw.OVERLAY_SETTINGS_UPDATED, { text_activation_hotkey: (0, m.dI)(t.shortcut) });
        }
    H(t);
}
function K(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        null == a().find(D, (t) => t.action === e && (!n || t.managed === n)) &&
        (H(j({ action: e, enabled: !0, shortcut: (0, m.OH)(t), managed: !0, params: {} })), !0)
    );
}
let $ = [
    function () {
        let e = _.Ay.getShortcuts();
        return (
            a().each(D, (t) => {
                t.action === A.hCu.PUSH_TO_TALK &&
                    !0 === t.managed &&
                    (null == t.context || null == e[t.context]) &&
                    Y(t);
            }),
            a().reduce(
                _.Ay.getShortcuts(),
                (e, t, n) => {
                    let i = a().find(D, (e) => e.action === A.hCu.PUSH_TO_TALK && !0 === e.managed && e.context === n);
                    if (null == i)
                        H(
                            j({
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
                        W({ keybind: { ...i, shortcut: "string" == typeof t ? (0, m.OH)(t) : t, context: n } });
                    }
                    return !0;
                },
                !1,
            )
        );
    },
    function () {
        return !!g.default.getAnyGlobalEnabledOverlay() && K(A.hCu.TOGGLE_OVERLAY_INPUT_LOCK, N());
    },
    function () {
        return !!g.default.getAnyGlobalEnabledOverlay() && K(A.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`");
    },
    function () {
        var e;
        let t,
            n =
                ((e = A.hCu.SOUNDBOARD_HOLD),
                (t = !1),
                a().each(D, (n) => {
                    n.action === e && !0 === n.managed && (Y(n), (t = !0));
                }),
                t);
        return K(A.hCu.SOUNDBOARD_HOLD, "ctrl+`", !1) || n;
    },
    function () {
        return K(A.hCu.SAVE_CLIP, I.Ot);
    },
    function () {
        return K(A.hCu.SAVE_SCREENSHOT, I.sz);
    },
];
function z() {
    return F(), $.reduce((e, t) => t() || e, !1);
}
u.A.setGetKeybindList(() => {
    let e = [];
    for (let t in D) D.hasOwnProperty(t) && e.push((0, m.dI)(D[t].shortcut));
    return e;
});
class q extends o.Ay.DeviceSettingsStore {
    static displayName = "KeybindsStore";
    static persistKey = "keybinds";
    static migrations = [
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { v: t, keybinds: n = e } = e;
            return a().reduce(
                n,
                (e, n, i) => (
                    isNaN(parseInt(n.id, 10)) ||
                        n.id !== i ||
                        ((null == t || t < 2) &&
                            ("string" == typeof n.shortcut
                                ? ((n.shortcut = n.shortcut
                                      .replace("escape", "esc")
                                      .replace("capslock", "caps lock")
                                      .replace("numlock", "num lock")
                                      .replace("pageup", "page up")
                                      .replace("pagedown", "page down")),
                                  (n.shortcut = (0, m.OH)(n.shortcut)))
                                : (n.shortcut = n.shortcut.map((e) => (e.length < 3 ? [...e, (0, m._$)()] : e)))),
                        (e[i] = n)),
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
                    if ((0, f.isLinux)() && t.action === A.hCu.SOUNDBOARD_HOLD) {
                        let n = t.shortcut.map((e) => e[1]),
                            i = (0, m.OH)("`").map((e) => e[1]);
                        if (r()(n, i)) return e;
                    }
                    return { ...e, [n]: t };
                },
                {},
            );
        },
        (e) => {
            let t = {};
            for (let n in e) {
                let i = e[n];
                null != i &&
                    ((null == i.params || null == i.enabled) &&
                        (i = { ...i, enabled: !1 !== i.enabled, params: i.params ?? {} }),
                    (t[n] = i));
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
        __OVERLAY__ || this.waitFor(_.Ay, g.default), (D = e ?? {});
    }
    getUserAgnosticState() {
        return D;
    }
    hasKeybind(e, t, n) {
        for (let i in D)
            for (let r of D[i].shortcut) if (r[0] === e && r[1] === t && (void 0 === n || n === r[2])) return !0;
        return !1;
    }
    hasExactKeybind(e) {
        for (let t in D) {
            let n = D[t];
            if (a().isEqual(n.shortcut, e)) return !0;
        }
        return !1;
    }
    getKeybindForAction(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (
            a().find(D, (i) => i.action === e && (!t || i.managed) && (!n || (i.shortcut.length > 0 && i.enabled))) ??
            null
        );
    }
    getOverlayKeybind() {
        let e = this.getKeybindForAction(A.hCu.TOGGLE_OVERLAY_INPUT_LOCK, !0);
        return null != e ? e : O();
    }
    getOverlayChatKeybind() {
        return this.getKeybindForAction(A.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0);
    }
}
let X = new q(l.h, {
        CONNECTION_OPEN: z,
        LOGIN_SUCCESS: function () {
            return (
                (async () => {
                    await (0, E.AD)(), z() && X.emitChange();
                })(),
                !1
            );
        },
        AUDIO_SET_MODE: z,
        OVERLAY_SET_ENABLED: z,
        RPC_APP_CONNECTED: z,
        RPC_APP_DISCONNECTED: z,
        KEYBINDS_ADD_KEYBIND: function (e) {
            let { keybind: t } = e;
            H(j(t));
        },
        KEYBINDS_DELETE_KEYBIND: function (e) {
            let { id: t } = e,
                n = D[t];
            __OVERLAY__ ||
                h.default.track(A.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
                    keybind_action: n.action,
                    keybind_is_bound: !1,
                    keybind_has_shortcut: !1,
                }),
                null != n && Y(n);
        },
        KEYBINDS_SET_KEYBIND: W,
        KEYBINDS_ENABLE_ALL_KEYBINDS: function (e) {
            let { enable: t } = e;
            (w = t), t ? (u.A.enable(), a().forEach(D, H), F()) : (u.A.disable(), a().forEach(D, (e) => B(e.id)), V());
        },
        KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: function (e) {
            let { keybinds: t } = e;
            (M = t),
                (b = {}),
                (L = 0),
                Object.values(D).filter((e) => x.includes(e.action) && e.managed).length !== x.length && z(),
                a().forEach(D, (e) => {
                    L = Math.max(parseInt(e.id, 10), L) + 1;
                    try {
                        H(e);
                    } catch (t) {
                        y.error("Failed to register keybind", e, t);
                    }
                }),
                (w = !0);
        },
    }),
    Z = X;
