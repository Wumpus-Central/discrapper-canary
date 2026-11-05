n(321073);
var i = n(812729),
    r = n.n(i),
    a = n(435558),
    s = n.n(a),
    l = n(855986),
    o = n(73153),
    d = n(775121),
    c = n(626584),
    u = n(994778),
    _ = n(579370),
    E = n(549205),
    A = n(754712),
    f = n(129230),
    h = n(723702),
    I = n(253400),
    p = n(316501),
    m = n(350535),
    T = n(228342),
    g = n(652215);
(n(696016), n(980504));
var S = n(650583),
    N = n(72290);
let C = new c.A("KeybindsStore");
function O() {
    let e = (0, p.Ze)(!1).get("Backquote") ?? "`";
    return ("+" === e ? (e = "plus") : 0 === e.length && (e = "`"), `shift+${e}`);
}
function R(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return { id: "1001", action: g.hCu.TOGGLE_OVERLAY_INPUT_LOCK, shortcut: e, enabled: t, managed: !0, params: {} };
}
function L(e) {
    let t = (0, m.Z0)("shift");
    return null != t && (1 !== e.length || e[0][1] !== t);
}
function y(e, t, n, i) {
    let r = (0, p.Ze)(!1).get("Backquote"),
        a = (0, p.Ze)(!0).get("Backquote");
    C.log(e, {
        tags: {
            backquoteKey: r ?? "unknown",
            nativeBackquoteKey: a ?? "unknown",
            backquoteCode: `${(0, p.Q_)(r ?? "`")?.keyCode}`,
            nativeBackquoteCode: `${(0, p.Q_)(a ?? "`")?.keyCode}`,
        },
        extra: {
            keyCombo: t,
            combo: n,
            layoutMapBacktick: r,
            env: S.g$[(0, m._$)()],
            backtickEventShape: (0, p.Q_)("`"),
            backquoteKeyShape: (0, p.Q_)(r ?? "`"),
            nativeBackquoteKeyShape: (0, p.Q_)(a ?? "`"),
            ...i,
        },
    });
}
function D() {
    var e;
    let t,
        n,
        i,
        r = O();
    "shift" === r && (y("Default overlay keybind is only shift", r, null), (r = "shift+`"));
    let a =
        ((e = r),
        (t = (0, m.OH)(e)),
        (n = (0, p.Q_)("`")),
        (i = n?.keyCode ?? (0, m.Z0)("`")),
        L(t)
            ? t
            : null == i
              ? (y("Unable to get backtick code for overlay default keybind", e, t, { rawBacktickShape: n }), null)
              : (y("Default overlay keybind is unsupported", e, t, { rawBacktickCode: i }),
                [...t, [S.zY.KEYBOARD_KEY, i, (0, m._$)()]]));
    if (null == a) return R([], !1);
    if (L(a)) return R(a, !0);
    let s = (0, m.Z0)("shift"),
        l = (0, p.Q_)("`");
    return (
        0 === a.length
            ? y("Default overlay keybind combo is empty", r, a)
            : null == s
              ? y("Unable to get shift code", r, a, { shiftCode: s })
              : null == l && y("Unable to get backtick code", r, a),
        R(a, !1)
    );
}
let b = {},
    v = {},
    P = 0,
    M = !0,
    U = {},
    w = !1,
    G = [g.hCu.PUSH_TO_TALK, g.hCu.TOGGLE_OVERLAY_INPUT_LOCK, g.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET],
    x = [];
function k(e) {
    return e === D().id ? D() : v[e];
}
function F(e, t, n) {
    (f.default.track(g.HAw.KEYBOARD_SHORTCUT_USED, {
        shortcut_name: n.action,
        shortcut_combo: (0, m.dI)(n.shortcut),
        is_native_keyboard_event: !0,
    }),
        t.onTrigger(e, n));
}
function B() {
    return (0, h.j9)();
}
function V() {
    if (B()) return;
    let e = D();
    null == s().find(v, (t) => e.action === t.action && t.enabled && t.shortcut.length > 0) &&
        M &&
        !w &&
        (Y(e), (w = !0));
}
function H() {
    if (B()) return;
    let e = D();
    w && (j(e.id), (w = !1));
}
function j(e) {
    if (h.isPlatformEmbedded) {
        let t = v[e],
            n = null != t ? U[t.action] : null;
        (null != t && n?.isPressed === !0 && N.nextTick(() => F(!1, n, t)), I.Ay.inputEventUnregister(parseInt(e, 10)));
    } else {
        let t = b[e];
        if (null != t) {
            let n = v[e];
            if (null != n) {
                let e = U[n.action];
                e?.isPressed === !0 && N.nextTick(() => F(!1, e, n));
            }
            (t.reset(), (b[e] = null));
        }
    }
}
function W(e) {
    let { shortcut: t, action: n, enabled: i } = e;
    return null != t && t.length > 0 && n !== g.hCu.UNASSIGNED && i;
}
function Y(e) {
    if (!M || __OVERLAY__ || !W(e)) return;
    let { shortcut: t, action: n } = e;
    if (null == U[n])
        return void C.error(
            `[kb store] KeybindStore: Looking for callback action ${n} but it doesn't exist in this version. Skipping`,
        );
    let i = e.id,
        r = parseInt(i, 10);
    if (isNaN(r))
        return void C.error("[kb store] KeybindStore: Keybind id is not a number. Skipping registration.", {
            keybind: e,
        });
    let a = U[n].keyEvents;
    e.action === g.hCu.TOGGLE_OVERLAY_INPUT_LOCK && H();
    let s = (0, u.B)(n),
        l = (0, _.yB)(n);
    (!(function (e, t, n, i) {
        if (h.isPlatformEmbedded)
            try {
                I.Ay.inputEventRegister(e, t, n, i);
            } catch (n) {
                throw (C.error("Failed to register native keybind", { eventId: e, shortcut: t }, n), n);
            }
        else {
            j(e.toString());
            let r = (0, E.I)(document);
            (i.keyup && r.bindGlobal((0, m.dI)(t), () => n(!1), "keyup"),
                i.keydown && r.bindGlobal((0, m.dI)(t), () => n(!0), "keydown"),
                (b[e] = r));
        }
    })(
        r,
        t,
        (e) =>
            (function (e, t) {
                if (!M) return;
                let n = k(e);
                if (null == n) return;
                let i = U[n.action]?.keyEvents;
                if (null == i) return;
                let r = U[n.action];
                if (i.keydown && i.keyup) {
                    null != r && F(t, U[n.action], n);
                    return;
                }
                (x.push(e),
                    setTimeout(() => {
                        for (let t of x) {
                            if (t === e) continue;
                            let i = k(t);
                            if (
                                null != i &&
                                (function (e, t) {
                                    return (
                                        !(e.shortcut.length >= t.shortcut.length) &&
                                        e.shortcut.every((e) => t.shortcut.some((t) => t[0] === e[0] && t[1] === e[1]))
                                    );
                                })(n, i)
                            ) {
                                x.includes(e) && x.splice(x.indexOf(e), 1);
                                return;
                            }
                        }
                        try {
                            null != r && F(t, r, n);
                        } finally {
                            setTimeout(() => {
                                x.includes(e) && x.splice(x.indexOf(e), 1);
                            }, 10);
                        }
                    }, 10));
            })(i, e),
        {
            focused: !0,
            blurred: !0,
            keydown: !1,
            keyup: !1,
            ...a,
            ...(null != s ? { description: s } : {}),
            shortcutId: l,
        },
    ),
        d.A.validateKeybind((0, m.dI)(t)));
}
function K(e) {
    let t = { id: P.toString(), enabled: !0, action: g.hCu.UNASSIGNED, shortcut: [], managed: !1, params: {}, ...e };
    return ((v = { ...v, [t.id]: t }), (P += 1), t);
}
function $(e) {
    (j(e.id), (v = { ...v }), delete v[e.id], e.action === g.hCu.TOGGLE_OVERLAY_INPUT_LOCK && V());
}
function X(e) {
    let { keybind: t } = e,
        n = v[t.id];
    if (((v = { ...v, [t.id]: t }), !__OVERLAY__))
        switch (
            (f.default.track(g.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
                keybind_action: t.action,
                keybind_is_bound: !0,
                keybind_has_shortcut: t.shortcut.length > 0,
            }),
            t.action)
        ) {
            case g.hCu.TOGGLE_OVERLAY_INPUT_LOCK:
                f.default.track(g.HAw.OVERLAY_SETTINGS_UPDATED, { hotkey: (0, m.dI)(t.shortcut) });
                break;
            case g.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET:
                f.default.track(g.HAw.OVERLAY_SETTINGS_UPDATED, { text_activation_hotkey: (0, m.dI)(t.shortcut) });
        }
    if (!(null != n && n.enabled === t.enabled && n.action === t.action && r()(n.shortcut, t.shortcut))) {
        if (!W(t)) return void j(t.id);
        Y(t);
    }
}
function z(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        null == s().find(v, (t) => t.action === e && (!n || t.managed === n)) &&
        (Y(K({ action: e, enabled: !0, shortcut: (0, m.OH)(t), managed: !0, params: {} })), !0)
    );
}
function q(e) {
    let t = !1;
    return (
        s().each(v, (n) => {
            n.action === e && !0 === n.managed && ($(n), (t = !0));
        }),
        t
    );
}
let Q = {},
    Z = [
        function () {
            let e = A.Ay.getShortcuts();
            return (
                s().each(v, (t) => {
                    t.action === g.hCu.PUSH_TO_TALK &&
                        !0 === t.managed &&
                        (null == t.context || null == e[t.context]) &&
                        $(t);
                }),
                s().reduce(
                    A.Ay.getShortcuts(),
                    (e, t, n) => {
                        let i = s().find(
                            v,
                            (e) => e.action === g.hCu.PUSH_TO_TALK && !0 === e.managed && e.context === n,
                        );
                        if (null == i)
                            Y(
                                K({
                                    action: g.hCu.PUSH_TO_TALK,
                                    enabled: !0,
                                    shortcut: t,
                                    managed: !0,
                                    params: {},
                                    context: n,
                                }),
                            );
                        else {
                            if (null == t) return e || !1;
                            X({ keybind: { ...i, shortcut: "string" == typeof t ? (0, m.OH)(t) : t, context: n } });
                        }
                        return !0;
                    },
                    !1,
                )
            );
        },
        function () {
            return B()
                ? q(g.hCu.TOGGLE_OVERLAY_INPUT_LOCK)
                : !!T.default.getAnyGlobalEnabledOverlay() && z(g.hCu.TOGGLE_OVERLAY_INPUT_LOCK, O());
        },
        function () {
            return B()
                ? q(g.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET)
                : !!T.default.getAnyGlobalEnabledOverlay() && z(g.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`");
        },
        function () {
            let e = q(g.hCu.SOUNDBOARD_HOLD);
            return z(g.hCu.SOUNDBOARD_HOLD, "ctrl+`", !1) || e;
        },
        function () {
            return (0, h.j9)() ? q(g.hCu.SAVE_CLIP) : z(g.hCu.SAVE_CLIP, "alt+c");
        },
        function () {
            return (0, h.j9)() ? q(g.hCu.SAVE_SCREENSHOT) : z(g.hCu.SAVE_SCREENSHOT, "f12");
        },
    ];
function J() {
    return (V(), Z.reduce((e, t) => t() || e, !1));
}
d.A.setGetKeybindList(() => {
    let e = [];
    for (let t in v) v.hasOwnProperty(t) && e.push((0, m.dI)(v[t].shortcut));
    return e;
});
class ee extends l.Ay.DeviceSettingsStore {
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
            return s().reduce(
                t,
                (e, t, n) => {
                    if ((0, h.j9)() && t.action === g.hCu.SOUNDBOARD_HOLD) {
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
            s().reduce(
                e,
                (e, t, n) => (t.action === g.hCu.TOGGLE_GO_LIVE_STREAMING && t.managed ? e : { ...e, [n]: t }),
                {},
            ),
    ];
    initialize(e) {
        (__OVERLAY__ || this.waitFor(A.Ay, T.default), (v = e ?? {}));
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
        let e = this.getKeybindForAction(g.hCu.TOGGLE_OVERLAY_INPUT_LOCK, !0);
        return null != e ? e : D();
    }
    getOverlayChatKeybind() {
        return this.getKeybindForAction(g.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0);
    }
    isWaylandPortalActive() {
        return h.isPlatformEmbedded && (0, h.j9)() && (0, _.jV)();
    }
    isWaylandPortalEligibleShortcut(e) {
        return (0, _.Sy)(e);
    }
    getWaylandPortalShortcutState(e) {
        return null == v[e] ? null : (Q[e] ?? null);
    }
}
let et = new ee(o.h, {
    CONNECTION_OPEN: J,
    LOGIN_SUCCESS: function () {
        return (
            (async () => {
                (await (0, p.AD)(), J() && et.emitChange());
            })(),
            !1
        );
    },
    AUDIO_SET_MODE: J,
    OVERLAY_SET_ENABLED: J,
    RPC_APP_CONNECTED: J,
    RPC_APP_DISCONNECTED: J,
    KEYBINDS_ADD_KEYBIND: function (e) {
        let { keybind: t } = e;
        Y(K(t));
    },
    KEYBINDS_DELETE_KEYBIND: function (e) {
        let { id: t } = e,
            n = v[t];
        (__OVERLAY__ ||
            f.default.track(g.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
                keybind_action: n.action,
                keybind_is_bound: !1,
                keybind_has_shortcut: !1,
            }),
            null != n && $(n));
    },
    KEYBINDS_SET_KEYBIND: X,
    KEYBINDS_ENABLE_ALL_KEYBINDS: function (e) {
        let { enable: t } = e;
        ((M = t),
            t
                ? (d.A.enable(), s().forEach(v, Y), V())
                : (d.A.disable(), (0, _.jV)() || s().forEach(v, (e) => j(e.id)), H()));
    },
    KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: function (e) {
        let { keybinds: t } = e;
        ((U = t),
            (b = {}),
            (P = 0),
            Object.values(v).filter((e) => G.includes(e.action) && e.managed).length !== G.length && J(),
            s().forEach(v, (e) => {
                P = Math.max(parseInt(e.id, 10), P) + 1;
                try {
                    Y(e);
                } catch (t) {
                    C.error("Failed to register keybind", e, t);
                }
            }),
            (M = !0));
    },
});
(h.isPlatformEmbedded &&
    (0, h.j9)() &&
    !__OVERLAY__ &&
    I.Ay.setWaylandPortalShortcutsCallback((e) => {
        let t = {};
        for (let n of e) t[String(n.eventId)] = n;
        ((Q = t), et.emitChange());
    }),
    n.d(t, {}, { Ay: et, DV: L, aS: D }));
