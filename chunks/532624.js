"use strict";
n.d(t, { Ay: () => X, DV: () => O, aS: () => y }), n(321073);
var i = n(812729),
    r = n.n(i),
    a = n(435558),
    s = n.n(a),
    l = n(17928),
    o = n(228366),
    d = n(775121),
    c = n(626584),
    u = n(549205),
    _ = n(186295),
    E = n(174459),
    A = n(723702),
    h = n(19575),
    I = n(316501),
    f = n(350535),
    p = n(773371),
    T = n(652215),
    m = n(696016);
n(980504);
var g = n(650583),
    S = n(72290);
let N = new c.A("KeybindsStore");
function C() {
    let e = (0, I.Ze)(!1).get("Backquote") ?? "`";
    return "+" === e ? (e = "plus") : 0 === e.length && (e = "`"), `shift+${e}`;
}
function R(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return { id: "1001", action: T.hCu.TOGGLE_OVERLAY_INPUT_LOCK, shortcut: e, enabled: t, managed: !0, params: {} };
}
function O(e) {
    let t = (0, f.Z0)("shift");
    return null != t && (1 !== e.length || e[0][1] !== t);
}
function L(e, t, n, i) {
    let r = (0, I.Ze)(!1).get("Backquote"),
        a = (0, I.Ze)(!0).get("Backquote");
    N.log(e, {
        tags: {
            backquoteKey: r ?? "unknown",
            nativeBackquoteKey: a ?? "unknown",
            backquoteCode: `${((0, I.Q_))(r ?? "`")?.keyCode}`,
            nativeBackquoteCode: `${((0, I.Q_))(a ?? "`")?.keyCode}`,
        },
        extra: {
            keyCombo: t,
            combo: n,
            layoutMapBacktick: r,
            env: g.g$[(0, f._$)()],
            backtickEventShape: (0, I.Q_)("`"),
            backquoteKeyShape: (0, I.Q_)(r ?? "`"),
            nativeBackquoteKeyShape: (0, I.Q_)(a ?? "`"),
            ...i,
        },
    });
}
function y() {
    var e;
    let t,
        n,
        i,
        r = C();
    "shift" === r && (L("Default overlay keybind is only shift", r, null), (r = "shift+`"));
    let a =
        ((e = r),
        (t = (0, f.OH)(e)),
        (n = (0, I.Q_)("`")),
        (i = n?.keyCode ?? (0, f.Z0)("`")),
        O(t)
            ? t
            : null == i
              ? (L("Unable to get backtick code for overlay default keybind", e, t, { rawBacktickShape: n }), null)
              : (L("Default overlay keybind is unsupported", e, t, { rawBacktickCode: i }),
                [...t, [g.zY.KEYBOARD_KEY, i, (0, f._$)()]]));
    if (null == a) return R([], !1);
    if (O(a)) return R(a, !0);
    let s = (0, f.Z0)("shift"),
        l = (0, I.Q_)("`");
    return (
        0 === a.length
            ? L("Default overlay keybind combo is empty", r, a)
            : null == s
              ? L("Unable to get shift code", r, a, { shiftCode: s })
              : null == l && L("Unable to get backtick code", r, a),
        R(a, !1)
    );
}
let D = {},
    v = {},
    b = 0,
    M = !0,
    P = {},
    U = !1,
    w = [T.hCu.PUSH_TO_TALK, T.hCu.TOGGLE_OVERLAY_INPUT_LOCK, T.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET],
    G = [];
function x(e) {
    return e === y().id ? y() : v[e];
}
function k(e, t, n) {
    E.default.track(T.HAw.KEYBOARD_SHORTCUT_USED, {
        shortcut_name: n.action,
        shortcut_combo: (0, f.dI)(n.shortcut),
        is_native_keyboard_event: !0,
    }),
        t.onTrigger(e, n);
}
function F() {
    let e = y();
    null == s().find(v, (t) => e.action === t.action && t.enabled && t.shortcut.length > 0) &&
        M &&
        !U &&
        (H(e), (U = !0));
}
function V() {
    let e = y();
    U && (B(e.id), (U = !1));
}
function B(e) {
    if (A.isPlatformEmbedded) h.Ay.inputEventUnregister(parseInt(e, 10));
    else {
        let t = D[e];
        if (null != t) {
            let n = v[e];
            if (null != n) {
                let e = P[n.action];
                e?.isPressed === !0 && S.nextTick(() => k(!1, e, n));
            }
            t.reset(), (D[e] = null);
        }
    }
}
function H(e) {
    if (!M || __OVERLAY__) return;
    let { shortcut: t, action: n, enabled: i } = e;
    if (0 === t.length || null == t || n === T.hCu.UNASSIGNED || !i) return;
    if (null == P[n])
        return void N.error(
            `[kb store] KeybindStore: Looking for callback action ${n} but it doesn't exist in this version. Skipping`,
        );
    let r = e.id,
        a = parseInt(r, 10);
    if (isNaN(a))
        return void N.error("[kb store] KeybindStore: Keybind id is not a number. Skipping registration.", {
            keybind: e,
        });
    let s = P[n].keyEvents;
    e.action === T.hCu.TOGGLE_OVERLAY_INPUT_LOCK && V(),
        (function (e, t, n, i) {
            if (A.isPlatformEmbedded)
                try {
                    h.Ay.inputEventRegister(e, t, n, i);
                } catch (n) {
                    throw (N.error("Failed to register native keybind", { eventId: e, shortcut: t }, n), n);
                }
            else {
                B(e.toString());
                let r = (0, u.I)(document);
                i.keyup && r.bindGlobal((0, f.dI)(t), () => n(!1), "keyup"),
                    i.keydown && r.bindGlobal((0, f.dI)(t), () => n(!0), "keydown"),
                    (D[e] = r);
            }
        })(
            a,
            t,
            (e) =>
                (function (e, t) {
                    let n = x(e);
                    if (null == n) return;
                    let i = P[n.action]?.keyEvents;
                    if (null == i) return;
                    let r = P[n.action];
                    if (i.keydown && i.keyup) {
                        null != r && k(t, P[n.action], n);
                        return;
                    }
                    G.push(e),
                        setTimeout(() => {
                            for (let t of G) {
                                if (t === e) continue;
                                let i = x(t);
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
                                    G.includes(e) && G.splice(G.indexOf(e), 1);
                                    return;
                                }
                            }
                            try {
                                null != r && k(t, r, n);
                            } finally {
                                setTimeout(() => {
                                    G.includes(e) && G.splice(G.indexOf(e), 1);
                                }, 10);
                            }
                        }, 10);
                })(r, e),
            { focused: !0, blurred: !0, keydown: !1, keyup: !1, ...s },
        ),
        d.A.validateKeybind((0, f.dI)(t));
}
function j(e) {
    let t = { id: b.toString(), enabled: !0, action: T.hCu.UNASSIGNED, shortcut: [], managed: !1, params: {}, ...e };
    return (v = { ...v, [t.id]: t }), (b += 1), t;
}
function W(e) {
    B(e.id), (v = { ...v }), delete v[e.id], e.action === T.hCu.TOGGLE_OVERLAY_INPUT_LOCK && F();
}
function Y(e) {
    let { keybind: t } = e;
    if (((v = { ...v, [t.id]: t }), !__OVERLAY__))
        switch (
            (E.default.track(T.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
                keybind_action: t.action,
                keybind_is_bound: !0,
                keybind_has_shortcut: t.shortcut.length > 0,
            }),
            t.action)
        ) {
            case T.hCu.TOGGLE_OVERLAY_INPUT_LOCK:
                E.default.track(T.HAw.OVERLAY_SETTINGS_UPDATED, { hotkey: (0, f.dI)(t.shortcut) });
                break;
            case T.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET:
                E.default.track(T.HAw.OVERLAY_SETTINGS_UPDATED, { text_activation_hotkey: (0, f.dI)(t.shortcut) });
        }
    H(t);
}
function K(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        null == s().find(v, (t) => t.action === e && (!n || t.managed === n)) &&
        (H(j({ action: e, enabled: !0, shortcut: (0, f.OH)(t), managed: !0, params: {} })), !0)
    );
}
let $ = [
    function () {
        let e = _.Ay.getShortcuts();
        return (
            s().each(v, (t) => {
                t.action === T.hCu.PUSH_TO_TALK &&
                    !0 === t.managed &&
                    (null == t.context || null == e[t.context]) &&
                    W(t);
            }),
            s().reduce(
                _.Ay.getShortcuts(),
                (e, t, n) => {
                    let i = s().find(v, (e) => e.action === T.hCu.PUSH_TO_TALK && !0 === e.managed && e.context === n);
                    if (null == i)
                        H(
                            j({
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
                        Y({ keybind: { ...i, shortcut: "string" == typeof t ? (0, f.OH)(t) : t, context: n } });
                    }
                    return !0;
                },
                !1,
            )
        );
    },
    function () {
        return !!p.default.getAnyGlobalEnabledOverlay() && K(T.hCu.TOGGLE_OVERLAY_INPUT_LOCK, C());
    },
    function () {
        return !!p.default.getAnyGlobalEnabledOverlay() && K(T.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`");
    },
    function () {
        var e;
        let t,
            n =
                ((e = T.hCu.SOUNDBOARD_HOLD),
                (t = !1),
                s().each(v, (n) => {
                    n.action === e && !0 === n.managed && (W(n), (t = !0));
                }),
                t);
        return K(T.hCu.SOUNDBOARD_HOLD, "ctrl+`", !1) || n;
    },
    function () {
        return K(T.hCu.SAVE_CLIP, m.Ot);
    },
    function () {
        return K(T.hCu.SAVE_SCREENSHOT, m.sz);
    },
];
function z() {
    return F(), $.reduce((e, t) => t() || e, !1);
}
d.A.setGetKeybindList(() => {
    let e = [];
    for (let t in v) v.hasOwnProperty(t) && e.push((0, f.dI)(v[t].shortcut));
    return e;
});
class q extends l.Ay.DeviceSettingsStore {
    static displayName = "KeybindsStore";
    static persistKey = "keybinds";
    static migrations = [
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { v: t, keybinds: n = e } = e;
            return s().reduce(
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
                                  (n.shortcut = (0, f.OH)(n.shortcut)))
                                : (n.shortcut = n.shortcut.map((e) => (e.length < 3 ? [...e, (0, f._$)()] : e)))),
                        (e[i] = n)),
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
                    if ((0, A.isLinux)() && t.action === T.hCu.SOUNDBOARD_HOLD) {
                        let n = t.shortcut.map((e) => e[1]),
                            i = (0, f.OH)("`").map((e) => e[1]);
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
            s().reduce(
                e,
                (e, t, n) => (t.action === T.hCu.TOGGLE_GO_LIVE_STREAMING && t.managed ? e : { ...e, [n]: t }),
                {},
            ),
    ];
    initialize(e) {
        __OVERLAY__ || this.waitFor(_.Ay, p.default), (v = e ?? {});
    }
    getUserAgnosticState() {
        return v;
    }
    hasKeybind(e, t, n) {
        for (let i in v)
            for (let r of v[i].shortcut) if (r[0] === e && r[1] === t && (void 0 === n || n === r[2])) return !0;
        return !1;
    }
    hasExactKeybind(e) {
        for (let t in v) {
            let n = v[t];
            if (s().isEqual(n.shortcut, e)) return !0;
        }
        return !1;
    }
    getKeybindForAction(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (
            s().find(v, (i) => i.action === e && (!t || i.managed) && (!n || (i.shortcut.length > 0 && i.enabled))) ??
            null
        );
    }
    getOverlayKeybind() {
        let e = this.getKeybindForAction(T.hCu.TOGGLE_OVERLAY_INPUT_LOCK, !0);
        return null != e ? e : y();
    }
    getOverlayChatKeybind() {
        return this.getKeybindForAction(T.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0);
    }
}
let Z = new q(o.h, {
        CONNECTION_OPEN: z,
        LOGIN_SUCCESS: function () {
            return (
                (async () => {
                    await (0, I.AD)(), z() && Z.emitChange();
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
                n = v[t];
            __OVERLAY__ ||
                E.default.track(T.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
                    keybind_action: n.action,
                    keybind_is_bound: !1,
                    keybind_has_shortcut: !1,
                }),
                null != n && W(n);
        },
        KEYBINDS_SET_KEYBIND: Y,
        KEYBINDS_ENABLE_ALL_KEYBINDS: function (e) {
            let { enable: t } = e;
            (M = t), t ? (d.A.enable(), s().forEach(v, H), F()) : (d.A.disable(), s().forEach(v, (e) => B(e.id)), V());
        },
        KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: function (e) {
            let { keybinds: t } = e;
            (P = t),
                (D = {}),
                (b = 0),
                Object.values(v).filter((e) => w.includes(e.action) && e.managed).length !== w.length && z(),
                s().forEach(v, (e) => {
                    b = Math.max(parseInt(e.id, 10), b) + 1;
                    try {
                        H(e);
                    } catch (t) {
                        N.error("Failed to register keybind", e, t);
                    }
                }),
                (M = !0);
        },
    }),
    X = Z;
