let r;
n.d(t, {
    Ek: () => D,
    I1: () => k,
    ZP: () => ev,
}),
    n(388685),
    n(539854),
    n(704826),
    n(35282);
var i,
    a = n(348327),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(570140),
    d = n(714338),
    f = n(710845),
    _ = n(280049),
    p = n(658785),
    h = n(131951),
    m = n(626135),
    g = n(358085),
    E = n(998502),
    b = n(378799),
    y = n(13140),
    O = n(808506),
    v = n(981631),
    I = n(356659),
    T = n(710111),
    S = n(295907),
    A = n(444675);
function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                C(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let w = new f.Z("KeybindsStore"),
    D = {
        id: "1000",
        action: v.kg4.TOGGLE_MUTE,
        shortcut: (0, y.Kd)("mod+shift+m"),
        enabled: !0,
        managed: !0,
        params: {},
    };
function x() {
    var e;
    let t = null != (e = (0, b.pz)(!1).get("Backquote")) ? e : "`";
    return "+" === t ? (t = "plus") : 0 === t.length && (t = "`"), "shift+".concat(t);
}
let L = "1001",
    M = 10,
    j = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return {
            id: L,
            action: v.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
            shortcut: e,
            enabled: t,
            managed: !0,
            params: {},
        };
    },
    k = (e) => {
        let t = (0, y.UR)("shift");
        return null != t && (1 !== e.length || e[0][1] !== t);
    },
    U = (e, t, n, r) => {
        var i, a;
        let o = (0, b.pz)(!1).get("Backquote"),
            s = (0, b.pz)(!0).get("Backquote");
        w.log(e, {
            tags: {
                backquoteKey: null != o ? o : "unknown",
                nativeBackquoteKey: null != s ? s : "unknown",
                backquoteCode: "".concat(null == (i = (0, b.T_)(null != o ? o : "`")) ? void 0 : i.keyCode),
                nativeBackquoteCode: "".concat(null == (a = (0, b.T_)(null != s ? s : "`")) ? void 0 : a.keyCode),
            },
            extra: N(
                {
                    keyCombo: t,
                    combo: n,
                    layoutMapBacktick: o,
                    env: S.Cg[(0, y.dU)()],
                    backtickEventShape: (0, b.T_)("`"),
                    backquoteKeyShape: (0, b.T_)(null != o ? o : "`"),
                    nativeBackquoteKeyShape: (0, b.T_)(null != s ? s : "`"),
                },
                r,
            ),
        });
    };
function G(e) {
    var t;
    let n = (0, y.Kd)(e),
        r = (0, b.T_)("`"),
        i = null != (t = null == r ? void 0 : r.keyCode) ? t : (0, y.UR)("`");
    return k(n)
        ? n
        : null == i
          ? (U("Unable to get backtick code for overlay default keybind", e, n, { rawBacktickShape: r }), null)
          : (U("Default overlay keybind is unsupported", e, n, { rawBacktickCode: i }),
            [...n, [S.Mo.KEYBOARD_KEY, i, (0, y.dU)()]]);
}
let B = () => {
        let e = x();
        "shift" === e && (U("Default overlay keybind is only shift", e, null), (e = "shift+`"));
        let t = G(e);
        if (null == t) return j([], !1);
        if (k(t)) return j(t, !0);
        let n = (0, y.UR)("shift"),
            r = (0, b.T_)("`");
        return (
            0 === t.length
                ? U("Default overlay keybind combo is empty", e, t)
                : null == n
                  ? U("Unable to get shift code", e, t, { shiftCode: n })
                  : null == r && U("Unable to get backtick code", e, t),
            j(t, !1)
        );
    },
    Z = {},
    F = {},
    V = 0,
    H = !0,
    Y = {},
    W = !1,
    K = !1,
    z = [v.kg4.PUSH_TO_TALK, v.kg4.TOGGLE_OVERLAY_INPUT_LOCK, v.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET],
    q = [];
function X(e) {
    switch (e) {
        case D.id:
            return D;
        case B().id:
            return B();
        default:
            return F[e];
    }
}
function Q(e, t) {
    return (
        !(e.shortcut.length >= t.shortcut.length) &&
        e.shortcut.every((e) => t.shortcut.some((t) => t[0] === e[0] && t[1] === e[1]))
    );
}
function J(e, t, n) {
    m.default.track(v.rMx.KEYBOARD_SHORTCUT_USED, {
        shortcut_name: n.action,
        shortcut_combo: (0, y.BB)(n.shortcut),
        is_native_keyboard_event: !0,
    }),
        t.onTrigger(e, n);
}
function $(e, t) {
    var n;
    let r = X(e);
    if (null == r) return;
    let i = null == (n = Y[r.action]) ? void 0 : n.keyEvents;
    if (null == i) return;
    let a = Y[r.action];
    if (i.keydown && i.keyup) {
        null != a && J(t, Y[r.action], r);
        return;
    }
    q.push(e),
        setTimeout(() => {
            for (let t of q) {
                if (t === e) continue;
                let n = X(t);
                if (null != n && Q(r, n)) {
                    q.includes(e) && q.splice(q.indexOf(e), 1);
                    return;
                }
            }
            try {
                null != a && J(t, a, r);
            } finally {
                setTimeout(() => {
                    q.includes(e) && q.splice(q.indexOf(e), 1);
                }, M);
            }
        }, M);
}
function ee() {
    let e = B();
    null == l().find(F, (t) => e.action === t.action && t.enabled && t.shortcut.length > 0) &&
        H &&
        !K &&
        (es(e), (K = !0));
}
function et() {
    let e = B();
    K && (eo(e.id), (K = !1));
}
function en() {
    let { showKeybindIndicators: e } = p.Z.getCurrentConfig({ location: "KeybindsStore" });
    null == l().find(F, (e) => D.action === e.action && e.enabled && e.shortcut.length > 0) &&
        !__OVERLAY__ &&
        !W &&
        H &&
        e &&
        (es(D), (W = !0));
}
function er() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    (W || e) && (eo(D.id), (W = !1));
}
function ei(e) {
    let { showKeybindIndicators: t } = e;
    t ? en() : er(!0);
}
function ea(e, t, n, r) {
    if (g.isPlatformEmbedded)
        try {
            E.ZP.inputEventRegister(parseInt(e), t, n, r);
        } catch (n) {
            throw (
                (w.error(
                    "Failed to register native keybind",
                    {
                        eventId: e,
                        shortcut: t,
                    },
                    n,
                ),
                n)
            );
        }
    else {
        eo(e);
        let i = (0, _.r)(document);
        r.keyup && i.bindGlobal((0, y.BB)(t), () => n(!1), "keyup"),
            r.keydown && i.bindGlobal((0, y.BB)(t), () => n(!0), "keydown"),
            (Z[e] = i);
    }
}
function eo(e) {
    if (g.isPlatformEmbedded) E.ZP.inputEventUnregister(parseInt(e, 10));
    else {
        let t = Z[e];
        if (null != t) {
            let n = F[e];
            if (null != n) {
                let e = Y[n.action];
                (null == e ? void 0 : e.isPressed) === !0 && A.nextTick(() => J(!1, e, n));
            }
            t.reset(), (Z[e] = null);
        }
    }
}
function es(e) {
    if (!H || __OVERLAY__) return;
    let { shortcut: t, action: n, enabled: r } = e;
    if (0 === t.length || null == t || n === v.kg4.UNASSIGNED || !r) return;
    if (null == Y[n])
        return void w.error(
            "[kb store] KeybindStore: Looking for callback action ".concat(
                n,
                " but it doesn't exist in this version. Skipping",
            ),
        );
    let i = e.id,
        a = Y[n].keyEvents;
    e.action === v.kg4.TOGGLE_MUTE && er(),
        e.action === v.kg4.TOGGLE_OVERLAY_INPUT_LOCK && et(),
        ea(
            i,
            t,
            (e) => $(i, e),
            N(
                {
                    focused: !0,
                    blurred: !0,
                    keydown: !1,
                    keyup: !1,
                },
                a,
            ),
        ),
        d.Z.validateKeybind((0, y.BB)(t));
}
function el(e) {
    let t = N(
        {
            id: V.toString(),
            enabled: !0,
            action: v.kg4.UNASSIGNED,
            shortcut: [],
            managed: !1,
            params: {},
        },
        e,
    );
    return (F = P(N({}, F), { [t.id]: t })), (V += 1), t;
}
function ec(e) {
    eo(e.id),
        (F = N({}, F)),
        delete F[e.id],
        e.action === v.kg4.TOGGLE_MUTE && en(),
        e.action === v.kg4.TOGGLE_OVERLAY_INPUT_LOCK && ee();
}
function eu(e) {
    let { keybind: t } = e;
    es(el(t));
}
function ed(e) {
    let { id: t } = e,
        n = F[t];
    __OVERLAY__ ||
        m.default.track(v.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
            keybind_action: n.action,
            keybind_is_bound: !1,
            keybind_has_shortcut: !1,
        }),
        null != n && ec(n);
}
function ef(e) {
    let { keybind: t } = e;
    (F = P(N({}, F), { [t.id]: t })),
        __OVERLAY__ ||
            (m.default.track(v.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
                keybind_action: t.action,
                keybind_is_bound: !0,
                keybind_has_shortcut: t.shortcut.length > 0,
            }),
            t.action === v.kg4.TOGGLE_OVERLAY_INPUT_LOCK
                ? m.default.track(v.rMx.OVERLAY_SETTINGS_UPDATED, {
                      hotkey: t.action === v.kg4.TOGGLE_OVERLAY_INPUT_LOCK ? (0, y.BB)(t.shortcut) : null,
                  })
                : t.action === v.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET &&
                  m.default.track(v.rMx.OVERLAY_SETTINGS_UPDATED, {
                      text_activation_hotkey:
                          t.action === v.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, y.BB)(t.shortcut) : null,
                  })),
        es(t);
}
function e_(e) {
    let { enable: t } = e;
    (H = t),
        t
            ? (d.Z.enable(), l().forEach(F, es), en(), ee())
            : (d.Z.disable(), l().forEach(F, (e) => eo(e.id)), er(), et());
}
function ep(e) {
    let { keybinds: t } = e;
    (Y = t),
        (Z = {}),
        (V = 0),
        Object.values(F).filter((e) => z.includes(e.action) && e.managed).length !== z.length && eE(),
        l().forEach(F, (e) => {
            V = Math.max(parseInt(e.id, 10), V) + 1;
            try {
                es(e);
            } catch (t) {
                w.error("Failed to register keybind", e, t);
            }
        }),
        (H = !0),
        null == r && (r = p.Z.subscribe({ location: "KeybindsStore" }, ei));
}
function eh(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        null == l().find(F, (t) => t.action === e && (!n || t.managed === n)) &&
        (es(
            el({
                action: e,
                enabled: !0,
                shortcut: (0, y.Kd)(t),
                managed: !0,
                params: {},
            }),
        ),
        !0)
    );
}
function em(e) {
    let t = !1;
    return (
        l().each(F, (n) => {
            n.action === e && !0 === n.managed && (ec(n), (t = !0));
        }),
        t
    );
}
let eg = [
    function () {
        let e = h.Z.getShortcuts();
        return (
            l().each(F, (t) => {
                t.action === v.kg4.PUSH_TO_TALK &&
                    !0 === t.managed &&
                    (null == t.context || null == e[t.context]) &&
                    ec(t);
            }),
            l().reduce(
                h.Z.getShortcuts(),
                (e, t, n) => {
                    let r = l().find(F, (e) => e.action === v.kg4.PUSH_TO_TALK && !0 === e.managed && e.context === n);
                    if (null == r)
                        es(
                            el({
                                action: v.kg4.PUSH_TO_TALK,
                                enabled: !0,
                                shortcut: t,
                                managed: !0,
                                params: {},
                                context: n,
                            }),
                        );
                    else {
                        if (null == t) return e || !1;
                        ef({
                            keybind: P(N({}, r), {
                                shortcut: "string" == typeof t ? (0, y.Kd)(t) : t,
                                context: n,
                            }),
                        });
                    }
                    return !0;
                },
                !1,
            )
        );
    },
    function () {
        return !!O.default.getAnyGlobalEnabledOverlay() && eh(v.kg4.TOGGLE_OVERLAY_INPUT_LOCK, x());
    },
    function () {
        return !!O.default.getAnyGlobalEnabledOverlay() && eh(v.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`");
    },
    function () {
        let e = em(v.kg4.SOUNDBOARD_HOLD);
        return eh(v.kg4.SOUNDBOARD_HOLD, T.D_, !1) || e;
    },
    function () {
        return eh(v.kg4.SAVE_CLIP, I.Fv);
    },
    function () {
        return eh(v.kg4.SAVE_SCREENSHOT, I.$O);
    },
];
function eE() {
    return en(), ee(), eg.reduce((e, t) => t() || e, !1);
}
function eb() {
    return (
        (async () => {
            await (0, b.SW)(), eE() && eO.emitChange();
        })(),
        !1
    );
}
d.Z.setGetKeybindList(() => {
    let e = [];
    for (let t in F) F.hasOwnProperty(t) && e.push((0, y.BB)(F[t].shortcut));
    let { showKeybindIndicators: t } = p.Z.getCurrentConfig({ location: "KeybindsStore" });
    return t && e.push((0, y.BB)(D.shortcut)), e;
});
class ey extends (i = c.ZP.DeviceSettingsStore) {
    initialize(e) {
        for (let t in (__OVERLAY__ || this.waitFor(h.Z, O.default), (F = null != e ? e : {})))
            delete F[t].latched, delete F[t].pressedTime;
    }
    getUserAgnosticState() {
        return F;
    }
    hasKeybind(e, t, n) {
        for (let r in F)
            for (let i of F[r].shortcut) if (i[0] === e && i[1] === t && (void 0 === n || n === i[2])) return !0;
        return !1;
    }
    hasExactKeybind(e) {
        for (let t in F) {
            let n = F[t];
            if (l().isEqual(n.shortcut, e)) return !0;
        }
        return !1;
    }
    getKeybindForAction(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            { showKeybindIndicators: r } = p.Z.getCurrentConfig({ location: "KeybindsStore" }),
            i = l().find(F, (r) => r.action === e && (!t || r.managed) && (!n || (r.shortcut.length > 0 && r.enabled)));
        return null != i ? i : r && e === v.kg4.TOGGLE_MUTE ? D : null;
    }
    getOverlayKeybind() {
        let e = this.getKeybindForAction(v.kg4.TOGGLE_OVERLAY_INPUT_LOCK, !0);
        return null != e ? e : B();
    }
    getOverlayChatKeybind() {
        return this.getKeybindForAction(v.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0);
    }
}
C(ey, "displayName", "KeybindsStore"),
    C(ey, "persistKey", "keybinds"),
    C(ey, "migrations", [
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { v: t, keybinds: n = e } = e;
            return l().reduce(
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
                                  (n.shortcut = (0, y.Kd)(n.shortcut)))
                                : (n.shortcut = n.shortcut.map((e) => (e.length < 3 ? [...e, (0, y.dU)()] : e)))),
                        (e[r] = n)),
                    e
                ),
                {},
            );
        },
        (e) => e,
        (e) => {
            let { keybinds: t = e } = e;
            return l().reduce(
                t,
                (e, t, n) => {
                    if ((0, g.isLinux)() && t.action === v.kg4.SOUNDBOARD_HOLD) {
                        let n = t.shortcut.map((e) => e[1]),
                            r = (0, y.Kd)("`").map((e) => e[1]);
                        if (o()(n, r)) return e;
                    }
                    return P(N({}, e), { [n]: t });
                },
                {},
            );
        },
        (e) => {
            let t = {};
            for (let r in e) {
                let i = e[r];
                if (null != i) {
                    if (null == i.params || null == i.enabled) {
                        var n;
                        i = P(N({}, i), {
                            enabled: !1 !== i.enabled,
                            params: null != (n = i.params) ? n : {},
                        });
                    }
                    t[r] = i;
                }
            }
            return t;
        },
        (e) =>
            l().reduce(
                e,
                (e, t, n) => (t.action === v.kg4.TOGGLE_GO_LIVE_STREAMING && t.managed ? e : P(N({}, e), { [n]: t })),
                {},
            ),
    ]);
let eO = new ey(u.Z, {
        CONNECTION_OPEN: eE,
        LOGIN_SUCCESS: eb,
        AUDIO_SET_MODE: eE,
        OVERLAY_SET_ENABLED: eE,
        RPC_APP_CONNECTED: eE,
        RPC_APP_DISCONNECTED: eE,
        KEYBINDS_ADD_KEYBIND: eu,
        KEYBINDS_DELETE_KEYBIND: ed,
        KEYBINDS_SET_KEYBIND: ef,
        KEYBINDS_ENABLE_ALL_KEYBINDS: e_,
        KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: ep,
    }),
    ev = eO;
