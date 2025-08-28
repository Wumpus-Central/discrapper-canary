let r;
n.d(t, {
    Ek: () => w,
    I1: () => M,
    ZP: () => ey,
}),
    n(415506),
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
    S = n(444675);
function A(e, t, n) {
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
function C(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
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
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = new f.Z("KeybindsStore"),
    w = {
        id: "1000",
        action: v.kg4.TOGGLE_MUTE,
        shortcut: (0, y.Kd)("mod+shift+m"),
        enabled: !0,
        managed: !0,
        params: {},
    };
function D() {
    var e;
    let t = null != (e = (0, b.pz)(!1).get("Backquote")) ? e : "`";
    return "+" === t ? (t = "plus") : 0 === t.length && (t = "`"), "shift+".concat(t);
}
let x = "1001",
    L = 10,
    j = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return {
            id: x,
            action: v.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
            shortcut: e,
            enabled: t,
            managed: !0,
            params: {},
        };
    },
    M = (e) => {
        let t = (0, y.UR)("shift");
        return null != t && (1 !== e.length || e[0][1] !== t);
    },
    k = (e, t, n, r) => {
        var i, a;
        let o = (0, b.pz)(!1).get("Backquote"),
            s = (0, b.pz)(!0).get("Backquote");
        P.log(e.message, {
            tags: {
                backquoteKey: null != o ? o : "unknown",
                nativeBackquoteKey: null != s ? s : "unknown",
                backquoteCode: "".concat(null == (i = (0, b.T_)(null != o ? o : "`")) ? void 0 : i.keyCode),
                nativeBackquoteCode: "".concat(null == (a = (0, b.T_)(null != s ? s : "`")) ? void 0 : a.keyCode),
            },
            extra: C(
                {
                    stack: e.stack,
                    keyCombo: t,
                    combo: n,
                    layoutMapBacktick: o,
                    env: v.CgE[(0, y.dU)()],
                    backtickEventShape: (0, b.T_)("`"),
                    backquoteKeyShape: (0, b.T_)(null != o ? o : "`"),
                    nativeBackquoteKeyShape: (0, b.T_)(null != s ? s : "`"),
                },
                r,
            ),
        });
    };
function U(e) {
    var t;
    let n = (0, y.Kd)(e),
        r = (0, b.T_)("`"),
        i = null != (t = null == r ? void 0 : r.keyCode) ? t : (0, y.UR)("`");
    return M(n)
        ? n
        : null == i
          ? (k(Error("Unable to get backtick code for overlay default keybind"), e, n, { rawBacktickShape: r }), null)
          : (k(Error("Default overlay keybind is unsupported"), e, n, { rawBacktickCode: i }),
            [...n, [v.MoX.KEYBOARD_KEY, i, (0, y.dU)()]]);
}
let G = () => {
        let e = D();
        "shift" === e && (k(Error("Default overlay keybind is only shift"), e, null), (e = "shift+`"));
        let t = U(e);
        if (null == t) return j([], !1);
        if (M(t)) return j(t, !0);
        let n = (0, y.UR)("shift"),
            r = (0, b.T_)("`");
        return (
            0 === t.length
                ? k(Error("Default overlay keybind combo is empty"), e, t)
                : null == n
                  ? k(Error("Unable to get shift code"), e, t, { shiftCode: n })
                  : null == r && k(Error("Unable to get backtick code"), e, t),
            j(t, !1)
        );
    },
    B = {},
    Z = {},
    F = 0,
    V = !0,
    H = {},
    Y = !1,
    W = !1,
    K = [v.kg4.PUSH_TO_TALK, v.kg4.TOGGLE_OVERLAY_INPUT_LOCK, v.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET],
    z = [];
function q(e) {
    switch (e) {
        case w.id:
            return w;
        case G().id:
            return G();
        default:
            return Z[e];
    }
}
function X(e, t) {
    return (
        !(e.shortcut.length >= t.shortcut.length) &&
        e.shortcut.every((e) => t.shortcut.some((t) => t[0] === e[0] && t[1] === e[1]))
    );
}
function Q(e, t) {
    var n, r;
    let i = q(e);
    if (null == i) return;
    let a = null == (n = H[i.action]) ? void 0 : n.keyEvents;
    if (null != a) {
        if (a.keydown && a.keyup) {
            null == (r = H[i.action]) || r.onTrigger(t, i);
            return;
        }
        z.push(e),
            setTimeout(() => {
                for (let t of z) {
                    if (t === e) continue;
                    let n = q(t);
                    if (null != n && X(i, n)) {
                        z.includes(e) && z.splice(z.indexOf(e), 1);
                        return;
                    }
                }
                try {
                    var n;
                    null == (n = H[i.action]) || n.onTrigger(t, i);
                } finally {
                    setTimeout(() => {
                        z.includes(e) && z.splice(z.indexOf(e), 1);
                    }, L);
                }
            }, L);
    }
}
function J() {
    let e = G();
    null == l().find(Z, (t) => e.action === t.action && t.enabled && t.shortcut.length > 0) &&
        V &&
        !W &&
        (ea(e), (W = !0));
}
function $() {
    let e = G();
    W && (ei(e.id), (W = !1));
}
function ee() {
    let { showKeybindIndicators: e } = p.Z.getCurrentConfig({ location: "KeybindsStore" });
    null == l().find(Z, (e) => w.action === e.action && e.enabled && e.shortcut.length > 0) &&
        !__OVERLAY__ &&
        !Y &&
        V &&
        e &&
        (ea(w), (Y = !0));
}
function et() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    (Y || e) && (ei(w.id), (Y = !1));
}
function en(e) {
    let { showKeybindIndicators: t } = e;
    t ? ee() : et(!0);
}
function er(e, t, n, r) {
    if (g.isPlatformEmbedded) E.ZP.inputEventRegister(parseInt(e), t, n, r);
    else {
        ei(e);
        let i = (0, _.r)(document);
        r.keyup && i.bindGlobal((0, y.BB)(t), () => n(!1), "keyup"),
            r.keydown && i.bindGlobal((0, y.BB)(t), () => n(!0), "keydown"),
            (B[e] = i);
    }
}
function ei(e) {
    if (g.isPlatformEmbedded) E.ZP.inputEventUnregister(parseInt(e, 10));
    else {
        let t = B[e];
        if (null != t) {
            let n = Z[e];
            if (null != n) {
                let e = H[n.action];
                (null == e ? void 0 : e.isPressed) === !0 && S.nextTick(() => e.onTrigger(!1, n));
            }
            t.reset(), (B[e] = null);
        }
    }
}
function ea(e) {
    if (!V || __OVERLAY__) return;
    let { shortcut: t, action: n, enabled: r } = e;
    if (0 === t.length || null == t || n === v.kg4.UNASSIGNED || !r) return;
    if (null == H[n])
        return void P.error(
            "[kb store] KeybindStore: Looking for callback action ".concat(
                n,
                " but it doesn't exist in this version. Skipping",
            ),
        );
    let i = e.id,
        a = H[n].keyEvents;
    e.action === v.kg4.TOGGLE_MUTE && et(),
        e.action === v.kg4.TOGGLE_OVERLAY_INPUT_LOCK && $(),
        er(
            i,
            t,
            (e) => Q(i, e),
            C(
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
function eo(e) {
    let t = C(
        {
            id: F.toString(),
            enabled: !0,
            action: v.kg4.UNASSIGNED,
            shortcut: [],
            managed: !1,
            params: {},
        },
        e,
    );
    return (Z = R(C({}, Z), { [t.id]: t })), (F += 1), t;
}
function es(e) {
    ei(e.id),
        (Z = C({}, Z)),
        delete Z[e.id],
        e.action === v.kg4.TOGGLE_MUTE && ee(),
        e.action === v.kg4.TOGGLE_OVERLAY_INPUT_LOCK && J();
}
function el(e) {
    let { keybind: t } = e;
    ea(eo(t));
}
function ec(e) {
    let { id: t } = e,
        n = Z[t];
    __OVERLAY__ ||
        m.default.track(v.rMx.USER_SETTINGS_KEYBIND_UPDATED, {
            keybind_action: n.action,
            keybind_is_bound: !1,
            keybind_has_shortcut: !1,
        }),
        null != n && es(n);
}
function eu(e) {
    let { keybind: t } = e;
    (Z = R(C({}, Z), { [t.id]: t })),
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
        ea(t);
}
function ed(e) {
    let { enable: t } = e;
    (V = t),
        t ? (d.Z.enable(), l().forEach(Z, ea), ee(), J()) : (d.Z.disable(), l().forEach(Z, (e) => ei(e.id)), et(), $());
}
function ef(e) {
    let { keybinds: t } = e;
    (H = t),
        (B = {}),
        (F = 0),
        Object.values(Z).filter((e) => K.includes(e.action) && e.managed).length !== K.length && em(),
        l().forEach(Z, (e) => {
            F = Math.max(parseInt(e.id, 10), F) + 1;
            try {
                ea(e);
            } catch (t) {
                P.error("Failed to register keybind", e, t);
            }
        }),
        (V = !0),
        null == r && (r = p.Z.subscribe({ location: "KeybindsStore" }, en));
}
function e_(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        null == l().find(Z, (t) => t.action === e && (!n || t.managed === n)) &&
        (ea(
            eo({
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
function ep(e) {
    let t = !1;
    return (
        l().each(Z, (n) => {
            n.action === e && !0 === n.managed && (es(n), (t = !0));
        }),
        t
    );
}
let eh = [
    function () {
        let e = h.Z.getShortcuts();
        return (
            l().each(Z, (t) => {
                t.action === v.kg4.PUSH_TO_TALK &&
                    !0 === t.managed &&
                    (null == t.context || null == e[t.context]) &&
                    es(t);
            }),
            l().reduce(
                h.Z.getShortcuts(),
                (e, t, n) => {
                    let r = l().find(Z, (e) => e.action === v.kg4.PUSH_TO_TALK && !0 === e.managed && e.context === n);
                    if (null == r)
                        ea(
                            eo({
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
                        eu({
                            keybind: R(C({}, r), {
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
        return !!O.default.getAnyGlobalEnabledOverlay() && e_(v.kg4.TOGGLE_OVERLAY_INPUT_LOCK, D());
    },
    function () {
        return !!O.default.getAnyGlobalEnabledOverlay() && e_(v.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`");
    },
    function () {
        let e = ep(v.kg4.SOUNDBOARD_HOLD);
        return e_(v.kg4.SOUNDBOARD_HOLD, T.D_, !1) || e;
    },
    function () {
        return e_(v.kg4.SAVE_CLIP, I.D_);
    },
];
function em() {
    return ee(), J(), eh.reduce((e, t) => t() || e, !1);
}
function eg() {
    return (
        (async () => {
            await (0, b.SW)(), em() && eb.emitChange();
        })(),
        !1
    );
}
d.Z.setGetKeybindList(() => {
    let e = [];
    for (let t in Z) Z.hasOwnProperty(t) && e.push((0, y.BB)(Z[t].shortcut));
    let { showKeybindIndicators: t } = p.Z.getCurrentConfig({ location: "KeybindsStore" });
    return t && e.push((0, y.BB)(w.shortcut)), e;
});
class eE extends (i = c.ZP.DeviceSettingsStore) {
    initialize(e) {
        for (let t in (__OVERLAY__ || this.waitFor(h.Z, O.default), (Z = null != e ? e : {})))
            delete Z[t].latched, delete Z[t].pressedTime;
    }
    getUserAgnosticState() {
        return Z;
    }
    hasKeybind(e, t, n) {
        for (let r in Z)
            for (let i of Z[r].shortcut) if (i[0] === e && i[1] === t && (void 0 === n || n === i[2])) return !0;
        return !1;
    }
    hasExactKeybind(e) {
        for (let t in Z) {
            let n = Z[t];
            if (l().isEqual(n.shortcut, e)) return !0;
        }
        return !1;
    }
    getKeybindForAction(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            { showKeybindIndicators: r } = p.Z.getCurrentConfig({ location: "KeybindsStore" }),
            i = l().find(Z, (r) => r.action === e && (!t || r.managed) && (!n || (r.shortcut.length > 0 && r.enabled)));
        return null != i ? i : r && e === v.kg4.TOGGLE_MUTE ? w : null;
    }
    getOverlayKeybind() {
        let e = this.getKeybindForAction(v.kg4.TOGGLE_OVERLAY_INPUT_LOCK, !0);
        return null != e ? e : G();
    }
    getOverlayChatKeybind() {
        return this.getKeybindForAction(v.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0);
    }
}
A(eE, "displayName", "KeybindsStore"),
    A(eE, "persistKey", "keybinds"),
    A(eE, "migrations", [
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
                    return R(C({}, e), { [n]: t });
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
                        i = R(C({}, i), {
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
                (e, t, n) => (t.action === v.kg4.TOGGLE_GO_LIVE_STREAMING && t.managed ? e : R(C({}, e), { [n]: t })),
                {},
            ),
    ]);
let eb = new eE(u.Z, {
        CONNECTION_OPEN: em,
        LOGIN_SUCCESS: eg,
        AUDIO_SET_MODE: em,
        OVERLAY_SET_ENABLED: em,
        RPC_APP_CONNECTED: em,
        RPC_APP_DISCONNECTED: em,
        KEYBINDS_ADD_KEYBIND: el,
        KEYBINDS_DELETE_KEYBIND: ec,
        KEYBINDS_SET_KEYBIND: eu,
        KEYBINDS_ENABLE_ALL_KEYBINDS: ed,
        KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: ef,
    }),
    ey = eb;
