n.d(t, { Ay: () => Q, DV: () => y, aS: () => L }), n(321073);
var i = n(812729),
    r = n.n(i),
    l = n(735438),
    a = n.n(l),
    s = n(17928),
    o = n(228366),
    d = n(775121),
    u = n(626584),
    c = n(549205),
    h = n(969341),
    E = n(954571),
    _ = n(723702),
    p = n(19575),
    A = n(316501),
    f = n(350535),
    g = n(773371),
    I = n(652215),
    T = n(696016);
n(980504);
var S = n(650583),
    m = n(72290);
let O = new u.A("KeybindsStore");
function C() {
    let e = (0, A.Ze)(!1).get("Backquote") ?? "`";
    return "+" === e ? (e = "plus") : 0 === e.length && (e = "`"), `shift+${e}`;
}
let N = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return {
            id: "1001",
            action: I.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
            shortcut: e,
            enabled: t,
            managed: !0,
            params: {},
        };
    },
    y = (e) => {
        let t = (0, f.Z0)("shift");
        return null != t && (1 !== e.length || e[0][1] !== t);
    },
    R = (e, t, n, i) => {
        let r = (0, A.Ze)(!1).get("Backquote"),
            l = (0, A.Ze)(!0).get("Backquote");
        O.log(e, {
            tags: {
                backquoteKey: r ?? "unknown",
                nativeBackquoteKey: l ?? "unknown",
                backquoteCode: `${((0, A.Q_))(r ?? "`")?.keyCode}`,
                nativeBackquoteCode: `${((0, A.Q_))(l ?? "`")?.keyCode}`,
            },
            extra: {
                keyCombo: t,
                combo: n,
                layoutMapBacktick: r,
                env: S.g$[(0, f._$)()],
                backtickEventShape: (0, A.Q_)("`"),
                backquoteKeyShape: (0, A.Q_)(r ?? "`"),
                nativeBackquoteKeyShape: (0, A.Q_)(l ?? "`"),
                ...i,
            },
        });
    },
    L = () => {
        var e;
        let t,
            n,
            i,
            r = C();
        "shift" === r && (R("Default overlay keybind is only shift", r, null), (r = "shift+`"));
        let l =
            ((e = r),
            (t = (0, f.OH)(e)),
            (n = (0, A.Q_)("`")),
            (i = n?.keyCode ?? (0, f.Z0)("`")),
            y(t)
                ? t
                : null == i
                  ? (R("Unable to get backtick code for overlay default keybind", e, t, { rawBacktickShape: n }), null)
                  : (R("Default overlay keybind is unsupported", e, t, { rawBacktickCode: i }),
                    [...t, [S.zY.KEYBOARD_KEY, i, (0, f._$)()]]));
        if (null == l) return N([], !1);
        if (y(l)) return N(l, !0);
        let a = (0, f.Z0)("shift"),
            s = (0, A.Q_)("`");
        return (
            0 === l.length
                ? R("Default overlay keybind combo is empty", r, l)
                : null == a
                  ? R("Unable to get shift code", r, l, { shiftCode: a })
                  : null == s && R("Unable to get backtick code", r, l),
            N(l, !1)
        );
    },
    v = {},
    D = {},
    b = 0,
    U = !0,
    P = {},
    M = !1,
    w = [I.hCu.PUSH_TO_TALK, I.hCu.TOGGLE_OVERLAY_INPUT_LOCK, I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET],
    G = [];
function F(e) {
    return e === L().id ? L() : D[e];
}
function V(e, t, n) {
    E.default.track(I.HAw.KEYBOARD_SHORTCUT_USED, {
        shortcut_name: n.action,
        shortcut_combo: (0, f.dI)(n.shortcut),
        is_native_keyboard_event: !0,
    }),
        t.onTrigger(e, n);
}
function k() {
    let e = L();
    null == a().find(D, (t) => e.action === t.action && t.enabled && t.shortcut.length > 0) &&
        U &&
        !M &&
        (B(e), (M = !0));
}
function x() {
    let e = L();
    M && (H(e.id), (M = !1));
}
function H(e) {
    if (_.isPlatformEmbedded) p.Ay.inputEventUnregister(parseInt(e, 10));
    else {
        let t = v[e];
        if (null != t) {
            let n = D[e];
            if (null != n) {
                let e = P[n.action];
                e?.isPressed === !0 && m.nextTick(() => V(!1, e, n));
            }
            t.reset(), (v[e] = null);
        }
    }
}
function B(e) {
    if (!U || __OVERLAY__) return;
    let { shortcut: t, action: n, enabled: i } = e;
    if (0 === t.length || null == t || n === I.hCu.UNASSIGNED || !i) return;
    if (null == P[n])
        return void O.error(
            `[kb store] KeybindStore: Looking for callback action ${n} but it doesn't exist in this version. Skipping`,
        );
    let r = e.id,
        l = parseInt(r, 10);
    if (isNaN(l))
        return void O.error("[kb store] KeybindStore: Keybind id is not a number. Skipping registration.", {
            keybind: e,
        });
    let a = P[n].keyEvents;
    e.action === I.hCu.TOGGLE_OVERLAY_INPUT_LOCK && x(),
        (function (e, t, n, i) {
            if (_.isPlatformEmbedded)
                try {
                    p.Ay.inputEventRegister(e, t, n, i);
                } catch (n) {
                    throw (O.error("Failed to register native keybind", { eventId: e, shortcut: t }, n), n);
                }
            else {
                H(e.toString());
                let r = (0, c.I)(document);
                i.keyup && r.bindGlobal((0, f.dI)(t), () => n(!1), "keyup"),
                    i.keydown && r.bindGlobal((0, f.dI)(t), () => n(!0), "keydown"),
                    (v[e] = r);
            }
        })(
            l,
            t,
            (e) =>
                (function (e, t) {
                    let n = F(e);
                    if (null == n) return;
                    let i = P[n.action]?.keyEvents;
                    if (null == i) return;
                    let r = P[n.action];
                    if (i.keydown && i.keyup) {
                        null != r && V(t, P[n.action], n);
                        return;
                    }
                    G.push(e),
                        setTimeout(() => {
                            for (let t of G) {
                                if (t === e) continue;
                                let i = F(t);
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
                                null != r && V(t, r, n);
                            } finally {
                                setTimeout(() => {
                                    G.includes(e) && G.splice(G.indexOf(e), 1);
                                }, 10);
                            }
                        }, 10);
                })(r, e),
            { focused: !0, blurred: !0, keydown: !1, keyup: !1, ...a },
        ),
        d.A.validateKeybind((0, f.dI)(t));
}
function Y(e) {
    let t = { id: b.toString(), enabled: !0, action: I.hCu.UNASSIGNED, shortcut: [], managed: !1, params: {}, ...e };
    return (D = { ...D, [t.id]: t }), (b += 1), t;
}
function W(e) {
    H(e.id), (D = { ...D }), delete D[e.id], e.action === I.hCu.TOGGLE_OVERLAY_INPUT_LOCK && k();
}
function $(e) {
    let { keybind: t } = e;
    (D = { ...D, [t.id]: t }),
        __OVERLAY__ ||
            (E.default.track(I.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
                keybind_action: t.action,
                keybind_is_bound: !0,
                keybind_has_shortcut: t.shortcut.length > 0,
            }),
            t.action === I.hCu.TOGGLE_OVERLAY_INPUT_LOCK
                ? E.default.track(I.HAw.OVERLAY_SETTINGS_UPDATED, {
                      hotkey: t.action === I.hCu.TOGGLE_OVERLAY_INPUT_LOCK ? (0, f.dI)(t.shortcut) : null,
                  })
                : t.action === I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET &&
                  E.default.track(I.HAw.OVERLAY_SETTINGS_UPDATED, {
                      text_activation_hotkey:
                          t.action === I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, f.dI)(t.shortcut) : null,
                  })),
        B(t);
}
function z(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        null == a().find(D, (t) => t.action === e && (!n || t.managed === n)) &&
        (B(Y({ action: e, enabled: !0, shortcut: (0, f.OH)(t), managed: !0, params: {} })), !0)
    );
}
let K = [
    function () {
        let e = h.Ay.getShortcuts();
        return (
            a().each(D, (t) => {
                t.action === I.hCu.PUSH_TO_TALK &&
                    !0 === t.managed &&
                    (null == t.context || null == e[t.context]) &&
                    W(t);
            }),
            a().reduce(
                h.Ay.getShortcuts(),
                (e, t, n) => {
                    let i = a().find(D, (e) => e.action === I.hCu.PUSH_TO_TALK && !0 === e.managed && e.context === n);
                    if (null == i)
                        B(
                            Y({
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
                        $({ keybind: { ...i, shortcut: "string" == typeof t ? (0, f.OH)(t) : t, context: n } });
                    }
                    return !0;
                },
                !1,
            )
        );
    },
    function () {
        return !!g.default.getAnyGlobalEnabledOverlay() && z(I.hCu.TOGGLE_OVERLAY_INPUT_LOCK, C());
    },
    function () {
        return !!g.default.getAnyGlobalEnabledOverlay() && z(I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`");
    },
    function () {
        var e;
        let t,
            n =
                ((e = I.hCu.SOUNDBOARD_HOLD),
                (t = !1),
                a().each(D, (n) => {
                    n.action === e && !0 === n.managed && (W(n), (t = !0));
                }),
                t);
        return z(I.hCu.SOUNDBOARD_HOLD, "ctrl+`", !1) || n;
    },
    function () {
        return z(I.hCu.SAVE_CLIP, T.Ot);
    },
    function () {
        return z(I.hCu.SAVE_SCREENSHOT, T.sz);
    },
];
function j() {
    return k(), K.reduce((e, t) => t() || e, !1);
}
d.A.setGetKeybindList(() => {
    let e = [];
    for (let t in D) D.hasOwnProperty(t) && e.push((0, f.dI)(D[t].shortcut));
    return e;
});
class q extends s.Ay.DeviceSettingsStore {
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
            return a().reduce(
                t,
                (e, t, n) => {
                    if ((0, _.isLinux)() && t.action === I.hCu.SOUNDBOARD_HOLD) {
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
            a().reduce(
                e,
                (e, t, n) => (t.action === I.hCu.TOGGLE_GO_LIVE_STREAMING && t.managed ? e : { ...e, [n]: t }),
                {},
            ),
    ];
    initialize(e) {
        __OVERLAY__ || this.waitFor(h.Ay, g.default), (D = e ?? {});
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
        let e = this.getKeybindForAction(I.hCu.TOGGLE_OVERLAY_INPUT_LOCK, !0);
        return null != e ? e : L();
    }
    getOverlayChatKeybind() {
        return this.getKeybindForAction(I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0);
    }
}
let Z = new q(o.h, {
        CONNECTION_OPEN: j,
        LOGIN_SUCCESS: function () {
            return (
                (async () => {
                    await (0, A.AD)(), j() && Z.emitChange();
                })(),
                !1
            );
        },
        AUDIO_SET_MODE: j,
        OVERLAY_SET_ENABLED: j,
        RPC_APP_CONNECTED: j,
        RPC_APP_DISCONNECTED: j,
        KEYBINDS_ADD_KEYBIND: function (e) {
            let { keybind: t } = e;
            B(Y(t));
        },
        KEYBINDS_DELETE_KEYBIND: function (e) {
            let { id: t } = e,
                n = D[t];
            __OVERLAY__ ||
                E.default.track(I.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
                    keybind_action: n.action,
                    keybind_is_bound: !1,
                    keybind_has_shortcut: !1,
                }),
                null != n && W(n);
        },
        KEYBINDS_SET_KEYBIND: $,
        KEYBINDS_ENABLE_ALL_KEYBINDS: function (e) {
            let { enable: t } = e;
            (U = t), t ? (d.A.enable(), a().forEach(D, B), k()) : (d.A.disable(), a().forEach(D, (e) => H(e.id)), x());
        },
        KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: function (e) {
            let { keybinds: t } = e;
            (P = t),
                (v = {}),
                (b = 0),
                Object.values(D).filter((e) => w.includes(e.action) && e.managed).length !== w.length && j(),
                a().forEach(D, (e) => {
                    b = Math.max(parseInt(e.id, 10), b) + 1;
                    try {
                        B(e);
                    } catch (t) {
                        O.error("Failed to register keybind", e, t);
                    }
                }),
                (U = !0);
        },
    }),
    Q = Z;
