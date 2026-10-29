(n.d(t, { Ay: () => ei, DV: () => y, aS: () => v }), n(321073));
var i = n(812729),
    r = n.n(i),
    a = n(435558),
    s = n.n(a),
    l = n(17928),
    o = n(73153),
    d = n(775121),
    c = n(626584),
    u = n(994778),
    _ = n(579370),
    E = n(549205),
    A = n(999926),
    h = n(174459),
    f = n(723702),
    I = n(19575),
    p = n(316501),
    T = n(350535),
    m = n(773371),
    g = n(652215),
    S = n(696016);
n(980504);
var N = n(650583),
    C = n(72290);
let O = new c.A("KeybindsStore");
function R() {
    let e = (0, p.Ze)(!1).get("Backquote") ?? "`";
    return ("+" === e ? (e = "plus") : 0 === e.length && (e = "`"), `shift+${e}`);
}
function L(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return { id: "1001", action: g.hCu.TOGGLE_OVERLAY_INPUT_LOCK, shortcut: e, enabled: t, managed: !0, params: {} };
}
function y(e) {
    let t = (0, T.Z0)("shift");
    return null != t && (1 !== e.length || e[0][1] !== t);
}
function D(e, t, n, i) {
    let r = (0, p.Ze)(!1).get("Backquote"),
        a = (0, p.Ze)(!0).get("Backquote");
    O.log(e, {
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
            env: N.g$[(0, T._$)()],
            backtickEventShape: (0, p.Q_)("`"),
            backquoteKeyShape: (0, p.Q_)(r ?? "`"),
            nativeBackquoteKeyShape: (0, p.Q_)(a ?? "`"),
            ...i,
        },
    });
}
function v() {
    var e;
    let t,
        n,
        i,
        r = R();
    "shift" === r && (D("Default overlay keybind is only shift", r, null), (r = "shift+`"));
    let a =
        ((e = r),
        (t = (0, T.OH)(e)),
        (n = (0, p.Q_)("`")),
        (i = n?.keyCode ?? (0, T.Z0)("`")),
        y(t)
            ? t
            : null == i
              ? (D("Unable to get backtick code for overlay default keybind", e, t, { rawBacktickShape: n }), null)
              : (D("Default overlay keybind is unsupported", e, t, { rawBacktickCode: i }),
                [...t, [N.zY.KEYBOARD_KEY, i, (0, T._$)()]]));
    if (null == a) return L([], !1);
    if (y(a)) return L(a, !0);
    let s = (0, T.Z0)("shift"),
        l = (0, p.Q_)("`");
    return (
        0 === a.length
            ? D("Default overlay keybind combo is empty", r, a)
            : null == s
              ? D("Unable to get shift code", r, a, { shiftCode: s })
              : null == l && D("Unable to get backtick code", r, a),
        L(a, !1)
    );
}
let b = {},
    M = {},
    P = 0,
    U = !0,
    w = {},
    G = !1,
    x = [g.hCu.PUSH_TO_TALK, g.hCu.TOGGLE_OVERLAY_INPUT_LOCK, g.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET],
    k = [];
function F(e) {
    return e === v().id ? v() : M[e];
}
function B(e, t, n) {
    (h.default.track(g.HAw.KEYBOARD_SHORTCUT_USED, {
        shortcut_name: n.action,
        shortcut_combo: (0, T.dI)(n.shortcut),
        is_native_keyboard_event: !0,
    }),
        t.onTrigger(e, n));
}
function V() {
    return (0, f.isLinux)();
}
function H() {
    if (V()) return;
    let e = v();
    null == s().find(M, (t) => e.action === t.action && t.enabled && t.shortcut.length > 0) &&
        U &&
        !G &&
        (K(e), (G = !0));
}
function j() {
    if (V()) return;
    let e = v();
    G && (W(e.id), (G = !1));
}
function W(e) {
    if (f.isPlatformEmbedded) {
        let t = M[e],
            n = null != t ? w[t.action] : null;
        (null != t && n?.isPressed === !0 && C.nextTick(() => B(!1, n, t)), I.Ay.inputEventUnregister(parseInt(e, 10)));
    } else {
        let t = b[e];
        if (null != t) {
            let n = M[e];
            if (null != n) {
                let e = w[n.action];
                e?.isPressed === !0 && C.nextTick(() => B(!1, e, n));
            }
            (t.reset(), (b[e] = null));
        }
    }
}
function Y(e) {
    let { shortcut: t, action: n, enabled: i } = e;
    return null != t && t.length > 0 && n !== g.hCu.UNASSIGNED && i;
}
function K(e) {
    if (!U || __OVERLAY__ || !Y(e)) return;
    let { shortcut: t, action: n } = e;
    if (null == w[n])
        return void O.error(
            `[kb store] KeybindStore: Looking for callback action ${n} but it doesn't exist in this version. Skipping`,
        );
    let i = e.id,
        r = parseInt(i, 10);
    if (isNaN(r))
        return void O.error("[kb store] KeybindStore: Keybind id is not a number. Skipping registration.", {
            keybind: e,
        });
    let a = w[n].keyEvents;
    e.action === g.hCu.TOGGLE_OVERLAY_INPUT_LOCK && j();
    let s = (0, u.B)(n),
        l = (0, _.yB)(n);
    (!(function (e, t, n, i) {
        if (f.isPlatformEmbedded)
            try {
                I.Ay.inputEventRegister(e, t, n, i);
            } catch (n) {
                throw (O.error("Failed to register native keybind", { eventId: e, shortcut: t }, n), n);
            }
        else {
            W(e.toString());
            let r = (0, E.I)(document);
            (i.keyup && r.bindGlobal((0, T.dI)(t), () => n(!1), "keyup"),
                i.keydown && r.bindGlobal((0, T.dI)(t), () => n(!0), "keydown"),
                (b[e] = r));
        }
    })(
        r,
        t,
        (e) =>
            (function (e, t) {
                if (!U) return;
                let n = F(e);
                if (null == n) return;
                let i = w[n.action]?.keyEvents;
                if (null == i) return;
                let r = w[n.action];
                if (i.keydown && i.keyup) {
                    null != r && B(t, w[n.action], n);
                    return;
                }
                (k.push(e),
                    setTimeout(() => {
                        for (let t of k) {
                            if (t === e) continue;
                            let i = F(t);
                            if (
                                null != i &&
                                (function (e, t) {
                                    return (
                                        !(e.shortcut.length >= t.shortcut.length) &&
                                        e.shortcut.every((e) => t.shortcut.some((t) => t[0] === e[0] && t[1] === e[1]))
                                    );
                                })(n, i)
                            ) {
                                k.includes(e) && k.splice(k.indexOf(e), 1);
                                return;
                            }
                        }
                        try {
                            null != r && B(t, r, n);
                        } finally {
                            setTimeout(() => {
                                k.includes(e) && k.splice(k.indexOf(e), 1);
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
        d.A.validateKeybind((0, T.dI)(t)));
}
function $(e) {
    let t = { id: P.toString(), enabled: !0, action: g.hCu.UNASSIGNED, shortcut: [], managed: !1, params: {}, ...e };
    return ((M = { ...M, [t.id]: t }), (P += 1), t);
}
function z(e) {
    (W(e.id), (M = { ...M }), delete M[e.id], e.action === g.hCu.TOGGLE_OVERLAY_INPUT_LOCK && H());
}
function X(e) {
    let { keybind: t } = e,
        n = M[t.id];
    if (((M = { ...M, [t.id]: t }), !__OVERLAY__))
        switch (
            (h.default.track(g.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
                keybind_action: t.action,
                keybind_is_bound: !0,
                keybind_has_shortcut: t.shortcut.length > 0,
            }),
            t.action)
        ) {
            case g.hCu.TOGGLE_OVERLAY_INPUT_LOCK:
                h.default.track(g.HAw.OVERLAY_SETTINGS_UPDATED, { hotkey: (0, T.dI)(t.shortcut) });
                break;
            case g.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET:
                h.default.track(g.HAw.OVERLAY_SETTINGS_UPDATED, { text_activation_hotkey: (0, T.dI)(t.shortcut) });
        }
    if (!(null != n && n.enabled === t.enabled && n.action === t.action && r()(n.shortcut, t.shortcut))) {
        if (!Y(t)) return void W(t.id);
        K(t);
    }
}
function q(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        null == s().find(M, (t) => t.action === e && (!n || t.managed === n)) &&
        (K($({ action: e, enabled: !0, shortcut: (0, T.OH)(t), managed: !0, params: {} })), !0)
    );
}
function Z(e) {
    let t = !1;
    return (
        s().each(M, (n) => {
            n.action === e && !0 === n.managed && (z(n), (t = !0));
        }),
        t
    );
}
let Q = {},
    J = [
        function () {
            let e = A.Ay.getShortcuts();
            return (
                s().each(M, (t) => {
                    t.action === g.hCu.PUSH_TO_TALK &&
                        !0 === t.managed &&
                        (null == t.context || null == e[t.context]) &&
                        z(t);
                }),
                s().reduce(
                    A.Ay.getShortcuts(),
                    (e, t, n) => {
                        let i = s().find(
                            M,
                            (e) => e.action === g.hCu.PUSH_TO_TALK && !0 === e.managed && e.context === n,
                        );
                        if (null == i)
                            K(
                                $({
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
                            X({ keybind: { ...i, shortcut: "string" == typeof t ? (0, T.OH)(t) : t, context: n } });
                        }
                        return !0;
                    },
                    !1,
                )
            );
        },
        function () {
            return V()
                ? Z(g.hCu.TOGGLE_OVERLAY_INPUT_LOCK)
                : !!m.default.getAnyGlobalEnabledOverlay() && q(g.hCu.TOGGLE_OVERLAY_INPUT_LOCK, R());
        },
        function () {
            return V()
                ? Z(g.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET)
                : !!m.default.getAnyGlobalEnabledOverlay() && q(g.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`");
        },
        function () {
            let e = Z(g.hCu.SOUNDBOARD_HOLD);
            return q(g.hCu.SOUNDBOARD_HOLD, "ctrl+`", !1) || e;
        },
        function () {
            return (0, f.isLinux)() ? Z(g.hCu.SAVE_CLIP) : q(g.hCu.SAVE_CLIP, S.Ot);
        },
        function () {
            return (0, f.isLinux)() ? Z(g.hCu.SAVE_SCREENSHOT) : q(g.hCu.SAVE_SCREENSHOT, S.sz);
        },
    ];
function ee() {
    return (H(), J.reduce((e, t) => t() || e, !1));
}
d.A.setGetKeybindList(() => {
    let e = [];
    for (let t in M) M.hasOwnProperty(t) && e.push((0, T.dI)(M[t].shortcut));
    return e;
});
class et extends l.Ay.DeviceSettingsStore {
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
                                  (n.shortcut = (0, T.OH)(n.shortcut)))
                                : (n.shortcut = n.shortcut.map((e) => (e.length < 3 ? [...e, (0, T._$)()] : e)))),
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
                    if ((0, f.isLinux)() && t.action === g.hCu.SOUNDBOARD_HOLD) {
                        let n = t.shortcut.map((e) => e[1]),
                            i = (0, T.OH)("`").map((e) => e[1]);
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
        (__OVERLAY__ || this.waitFor(A.Ay, m.default), (M = e ?? {}));
    }
    getUserAgnosticState() {
        return M;
    }
    hasKeybind(e, t, n) {
        for (let i in M)
            for (let r of M[i].shortcut) if (r[0] === e && r[1] === t && (void 0 === n || n === r[2])) return !0;
        return !1;
    }
    hasExactKeybind(e) {
        for (let t in M) {
            let n = M[t];
            if (s().isEqual(n.shortcut, e)) return !0;
        }
        return !1;
    }
    getKeybindForAction(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (
            s().find(M, (i) => i.action === e && (!t || i.managed) && (!n || (i.shortcut.length > 0 && i.enabled))) ??
            null
        );
    }
    getOverlayKeybind() {
        let e = this.getKeybindForAction(g.hCu.TOGGLE_OVERLAY_INPUT_LOCK, !0);
        return null != e ? e : v();
    }
    getOverlayChatKeybind() {
        return this.getKeybindForAction(g.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0);
    }
    isWaylandPortalActive() {
        return f.isPlatformEmbedded && (0, f.isLinux)() && (0, _.jV)();
    }
    isWaylandPortalEligibleShortcut(e) {
        return (0, _.Sy)(e);
    }
    getWaylandPortalShortcutState(e) {
        return null == M[e] ? null : (Q[e] ?? null);
    }
}
let en = new et(o.h, {
    CONNECTION_OPEN: ee,
    LOGIN_SUCCESS: function () {
        return (
            (async () => {
                (await (0, p.AD)(), ee() && en.emitChange());
            })(),
            !1
        );
    },
    AUDIO_SET_MODE: ee,
    OVERLAY_SET_ENABLED: ee,
    RPC_APP_CONNECTED: ee,
    RPC_APP_DISCONNECTED: ee,
    KEYBINDS_ADD_KEYBIND: function (e) {
        let { keybind: t } = e;
        K($(t));
    },
    KEYBINDS_DELETE_KEYBIND: function (e) {
        let { id: t } = e,
            n = M[t];
        (__OVERLAY__ ||
            h.default.track(g.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
                keybind_action: n.action,
                keybind_is_bound: !1,
                keybind_has_shortcut: !1,
            }),
            null != n && z(n));
    },
    KEYBINDS_SET_KEYBIND: X,
    KEYBINDS_ENABLE_ALL_KEYBINDS: function (e) {
        let { enable: t } = e;
        ((U = t),
            t
                ? (d.A.enable(), s().forEach(M, K), H())
                : (d.A.disable(), (0, _.jV)() || s().forEach(M, (e) => W(e.id)), j()));
    },
    KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: function (e) {
        let { keybinds: t } = e;
        ((w = t),
            (b = {}),
            (P = 0),
            Object.values(M).filter((e) => x.includes(e.action) && e.managed).length !== x.length && ee(),
            s().forEach(M, (e) => {
                P = Math.max(parseInt(e.id, 10), P) + 1;
                try {
                    K(e);
                } catch (t) {
                    O.error("Failed to register keybind", e, t);
                }
            }),
            (U = !0));
    },
});
f.isPlatformEmbedded &&
    (0, f.isLinux)() &&
    !__OVERLAY__ &&
    I.Ay.setWaylandPortalShortcutsCallback((e) => {
        let t = {};
        for (let n of e) t[String(n.eventId)] = n;
        ((Q = t), en.emitChange());
    });
let ei = en;
