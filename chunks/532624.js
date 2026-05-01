n.d(t, { Ay: () => Q, DV: () => y, aS: () => L }), n(321073);
var i = n(812729),
    l = n.n(i),
    a = n(735438),
    r = n.n(a),
    s = n(17928),
    o = n(228366),
    d = n(775121),
    u = n(626584),
    c = n(549205),
    h = n(51760),
    E = n(954571),
    A = n(723702),
    _ = n(19575),
    p = n(316501),
    g = n(350535),
    f = n(773371),
    I = n(652215),
    S = n(696016);
n(980504);
var T = n(650583),
    m = n(72290);
let C = new u.A("KeybindsStore");
function O() {
    let e = (0, p.Ze)(!1).get("Backquote") ?? "`";
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
        let t = (0, g.Z0)("shift");
        return null != t && (1 !== e.length || e[0][1] !== t);
    },
    R = (e, t, n, i) => {
        let l = (0, p.Ze)(!1).get("Backquote"),
            a = (0, p.Ze)(!0).get("Backquote");
        C.log(e, {
            tags: {
                backquoteKey: l ?? "unknown",
                nativeBackquoteKey: a ?? "unknown",
                backquoteCode: `${((0, p.Q_))(l ?? "`")?.keyCode}`,
                nativeBackquoteCode: `${((0, p.Q_))(a ?? "`")?.keyCode}`,
            },
            extra: {
                keyCombo: t,
                combo: n,
                layoutMapBacktick: l,
                env: T.g$[(0, g._$)()],
                backtickEventShape: (0, p.Q_)("`"),
                backquoteKeyShape: (0, p.Q_)(l ?? "`"),
                nativeBackquoteKeyShape: (0, p.Q_)(a ?? "`"),
                ...i,
            },
        });
    },
    L = () => {
        var e;
        let t,
            n,
            i,
            l = O();
        "shift" === l && (R("Default overlay keybind is only shift", l, null), (l = "shift+`"));
        let a =
            ((e = l),
            (t = (0, g.OH)(e)),
            (n = (0, p.Q_)("`")),
            (i = n?.keyCode ?? (0, g.Z0)("`")),
            y(t)
                ? t
                : null == i
                  ? (R("Unable to get backtick code for overlay default keybind", e, t, { rawBacktickShape: n }), null)
                  : (R("Default overlay keybind is unsupported", e, t, { rawBacktickCode: i }),
                    [...t, [T.zY.KEYBOARD_KEY, i, (0, g._$)()]]));
        if (null == a) return N([], !1);
        if (y(a)) return N(a, !0);
        let r = (0, g.Z0)("shift"),
            s = (0, p.Q_)("`");
        return (
            0 === a.length
                ? R("Default overlay keybind combo is empty", l, a)
                : null == r
                  ? R("Unable to get shift code", l, a, { shiftCode: r })
                  : null == s && R("Unable to get backtick code", l, a),
            N(a, !1)
        );
    },
    v = {},
    D = {},
    U = 0,
    P = !0,
    b = {},
    M = !1,
    w = [I.hCu.PUSH_TO_TALK, I.hCu.TOGGLE_OVERLAY_INPUT_LOCK, I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET],
    G = [];
function F(e) {
    return e === L().id ? L() : D[e];
}
function V(e, t, n) {
    E.default.track(I.HAw.KEYBOARD_SHORTCUT_USED, {
        shortcut_name: n.action,
        shortcut_combo: (0, g.dI)(n.shortcut),
        is_native_keyboard_event: !0,
    }),
        t.onTrigger(e, n);
}
function k() {
    let e = L();
    null == r().find(D, (t) => e.action === t.action && t.enabled && t.shortcut.length > 0) &&
        P &&
        !M &&
        (B(e), (M = !0));
}
function H() {
    let e = L();
    M && (x(e.id), (M = !1));
}
function x(e) {
    if (A.isPlatformEmbedded) _.Ay.inputEventUnregister(parseInt(e, 10));
    else {
        let t = v[e];
        if (null != t) {
            let n = D[e];
            if (null != n) {
                let e = b[n.action];
                e?.isPressed === !0 && m.nextTick(() => V(!1, e, n));
            }
            t.reset(), (v[e] = null);
        }
    }
}
function B(e) {
    if (!P || __OVERLAY__) return;
    let { shortcut: t, action: n, enabled: i } = e;
    if (0 === t.length || null == t || n === I.hCu.UNASSIGNED || !i) return;
    if (null == b[n])
        return void C.error(
            `[kb store] KeybindStore: Looking for callback action ${n} but it doesn't exist in this version. Skipping`,
        );
    let l = e.id,
        a = parseInt(l, 10);
    if (isNaN(a))
        return void C.error("[kb store] KeybindStore: Keybind id is not a number. Skipping registration.", {
            keybind: e,
        });
    let r = b[n].keyEvents;
    e.action === I.hCu.TOGGLE_OVERLAY_INPUT_LOCK && H(),
        (function (e, t, n, i) {
            if (A.isPlatformEmbedded)
                try {
                    _.Ay.inputEventRegister(e, t, n, i);
                } catch (n) {
                    throw (C.error("Failed to register native keybind", { eventId: e, shortcut: t }, n), n);
                }
            else {
                x(e.toString());
                let l = (0, c.I)(document);
                i.keyup && l.bindGlobal((0, g.dI)(t), () => n(!1), "keyup"),
                    i.keydown && l.bindGlobal((0, g.dI)(t), () => n(!0), "keydown"),
                    (v[e] = l);
            }
        })(
            a,
            t,
            (e) =>
                (function (e, t) {
                    let n = F(e);
                    if (null == n) return;
                    let i = b[n.action]?.keyEvents;
                    if (null == i) return;
                    let l = b[n.action];
                    if (i.keydown && i.keyup) {
                        null != l && V(t, b[n.action], n);
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
                                null != l && V(t, l, n);
                            } finally {
                                setTimeout(() => {
                                    G.includes(e) && G.splice(G.indexOf(e), 1);
                                }, 10);
                            }
                        }, 10);
                })(l, e),
            { focused: !0, blurred: !0, keydown: !1, keyup: !1, ...r },
        ),
        d.A.validateKeybind((0, g.dI)(t));
}
function Y(e) {
    let t = { id: U.toString(), enabled: !0, action: I.hCu.UNASSIGNED, shortcut: [], managed: !1, params: {}, ...e };
    return (D = { ...D, [t.id]: t }), (U += 1), t;
}
function j(e) {
    x(e.id), (D = { ...D }), delete D[e.id], e.action === I.hCu.TOGGLE_OVERLAY_INPUT_LOCK && k();
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
                      hotkey: t.action === I.hCu.TOGGLE_OVERLAY_INPUT_LOCK ? (0, g.dI)(t.shortcut) : null,
                  })
                : t.action === I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET &&
                  E.default.track(I.HAw.OVERLAY_SETTINGS_UPDATED, {
                      text_activation_hotkey:
                          t.action === I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, g.dI)(t.shortcut) : null,
                  })),
        B(t);
}
function z(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        null == r().find(D, (t) => t.action === e && (!n || t.managed === n)) &&
        (B(Y({ action: e, enabled: !0, shortcut: (0, g.OH)(t), managed: !0, params: {} })), !0)
    );
}
let W = [
    function () {
        let e = h.Ay.getShortcuts();
        return (
            r().each(D, (t) => {
                t.action === I.hCu.PUSH_TO_TALK &&
                    !0 === t.managed &&
                    (null == t.context || null == e[t.context]) &&
                    j(t);
            }),
            r().reduce(
                h.Ay.getShortcuts(),
                (e, t, n) => {
                    let i = r().find(D, (e) => e.action === I.hCu.PUSH_TO_TALK && !0 === e.managed && e.context === n);
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
                        $({ keybind: { ...i, shortcut: "string" == typeof t ? (0, g.OH)(t) : t, context: n } });
                    }
                    return !0;
                },
                !1,
            )
        );
    },
    function () {
        return !!f.default.getAnyGlobalEnabledOverlay() && z(I.hCu.TOGGLE_OVERLAY_INPUT_LOCK, O());
    },
    function () {
        return !!f.default.getAnyGlobalEnabledOverlay() && z(I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`");
    },
    function () {
        var e;
        let t,
            n =
                ((e = I.hCu.SOUNDBOARD_HOLD),
                (t = !1),
                r().each(D, (n) => {
                    n.action === e && !0 === n.managed && (j(n), (t = !0));
                }),
                t);
        return z(I.hCu.SOUNDBOARD_HOLD, "ctrl+`", !1) || n;
    },
    function () {
        return z(I.hCu.SAVE_CLIP, S.Ot);
    },
    function () {
        return z(I.hCu.SAVE_SCREENSHOT, S.sz);
    },
];
function K() {
    return k(), W.reduce((e, t) => t() || e, !1);
}
d.A.setGetKeybindList(() => {
    let e = [];
    for (let t in D) D.hasOwnProperty(t) && e.push((0, g.dI)(D[t].shortcut));
    return e;
});
class Z extends s.Ay.DeviceSettingsStore {
    static displayName = "KeybindsStore";
    static persistKey = "keybinds";
    static migrations = [
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { v: t, keybinds: n = e } = e;
            return r().reduce(
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
                                  (n.shortcut = (0, g.OH)(n.shortcut)))
                                : (n.shortcut = n.shortcut.map((e) => (e.length < 3 ? [...e, (0, g._$)()] : e)))),
                        (e[i] = n)),
                    e
                ),
                {},
            );
        },
        (e) => e,
        (e) => {
            let { keybinds: t = e } = e;
            return r().reduce(
                t,
                (e, t, n) => {
                    if ((0, A.isLinux)() && t.action === I.hCu.SOUNDBOARD_HOLD) {
                        let n = t.shortcut.map((e) => e[1]),
                            i = (0, g.OH)("`").map((e) => e[1]);
                        if (l()(n, i)) return e;
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
            r().reduce(
                e,
                (e, t, n) => (t.action === I.hCu.TOGGLE_GO_LIVE_STREAMING && t.managed ? e : { ...e, [n]: t }),
                {},
            ),
    ];
    initialize(e) {
        __OVERLAY__ || this.waitFor(h.Ay, f.default), (D = e ?? {});
    }
    getUserAgnosticState() {
        return D;
    }
    hasKeybind(e, t, n) {
        for (let i in D)
            for (let l of D[i].shortcut) if (l[0] === e && l[1] === t && (void 0 === n || n === l[2])) return !0;
        return !1;
    }
    hasExactKeybind(e) {
        for (let t in D) {
            let n = D[t];
            if (r().isEqual(n.shortcut, e)) return !0;
        }
        return !1;
    }
    getKeybindForAction(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (
            r().find(D, (i) => i.action === e && (!t || i.managed) && (!n || (i.shortcut.length > 0 && i.enabled))) ??
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
let q = new Z(o.h, {
        CONNECTION_OPEN: K,
        LOGIN_SUCCESS: function () {
            return (
                (async () => {
                    await (0, p.AD)(), K() && q.emitChange();
                })(),
                !1
            );
        },
        AUDIO_SET_MODE: K,
        OVERLAY_SET_ENABLED: K,
        RPC_APP_CONNECTED: K,
        RPC_APP_DISCONNECTED: K,
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
                null != n && j(n);
        },
        KEYBINDS_SET_KEYBIND: $,
        KEYBINDS_ENABLE_ALL_KEYBINDS: function (e) {
            let { enable: t } = e;
            (P = t), t ? (d.A.enable(), r().forEach(D, B), k()) : (d.A.disable(), r().forEach(D, (e) => x(e.id)), H());
        },
        KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: function (e) {
            let { keybinds: t } = e;
            (b = t),
                (v = {}),
                (U = 0),
                Object.values(D).filter((e) => w.includes(e.action) && e.managed).length !== w.length && K(),
                r().forEach(D, (e) => {
                    U = Math.max(parseInt(e.id, 10), U) + 1;
                    try {
                        B(e);
                    } catch (t) {
                        C.error("Failed to register keybind", e, t);
                    }
                }),
                (P = !0);
        },
    }),
    Q = q;
