let r;
n.d(t, {
    Ay: () => eA,
    DV: () => k,
    aS: () => V,
    xC: () => D,
}),
    n(896048),
    n(321073),
    n(747238),
    n(812715);
var i,
    a = n(812729),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    c = n(311907),
    u = n(73153),
    d = n(775121),
    f = n(626584),
    p = n(549205),
    _ = n(641376),
    h = n(430452),
    m = n(954571),
    g = n(723702),
    E = n(837921),
    b = n(316501),
    y = n(350535),
    O = n(242286),
    A = n(652215),
    v = n(696016),
    S = n(980504),
    I = n(650583),
    T = n(72290);
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
function w(e, t) {
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
let P = new f.A("KeybindsStore"),
    D = {
        id: "1000",
        action: A.hCu.TOGGLE_MUTE,
        shortcut: (0, y.OH)("mod+shift+m"),
        enabled: !0,
        managed: !0,
        params: {},
    };
function x() {
    var e;
    let t = null != (e = (0, b.Ze)(!1).get("Backquote")) ? e : "`";
    return "+" === t ? (t = "plus") : 0 === t.length && (t = "`"), "shift+".concat(t);
}
let L = "1001",
    j = 10,
    M = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return {
            id: L,
            action: A.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
            shortcut: e,
            enabled: t,
            managed: !0,
            params: {},
        };
    },
    k = (e) => {
        let t = (0, y.Z0)("shift");
        return null != t && (1 !== e.length || e[0][1] !== t);
    },
    U = (e, t, n, r) => {
        var i, a;
        let s = (0, b.Ze)(!1).get("Backquote"),
            o = (0, b.Ze)(!0).get("Backquote");
        P.log(e, {
            tags: {
                backquoteKey: null != s ? s : "unknown",
                nativeBackquoteKey: null != o ? o : "unknown",
                backquoteCode: "".concat(null == (i = (0, b.Q_)(null != s ? s : "`")) ? void 0 : i.keyCode),
                nativeBackquoteCode: "".concat(null == (a = (0, b.Q_)(null != o ? o : "`")) ? void 0 : a.keyCode),
            },
            extra: N(
                {
                    keyCombo: t,
                    combo: n,
                    layoutMapBacktick: s,
                    env: I.g$[(0, y._$)()],
                    backtickEventShape: (0, b.Q_)("`"),
                    backquoteKeyShape: (0, b.Q_)(null != s ? s : "`"),
                    nativeBackquoteKeyShape: (0, b.Q_)(null != o ? o : "`"),
                },
                r,
            ),
        });
    };
function G(e) {
    var t;
    let n = (0, y.OH)(e),
        r = (0, b.Q_)("`"),
        i = null != (t = null == r ? void 0 : r.keyCode) ? t : (0, y.Z0)("`");
    return k(n)
        ? n
        : null == i
          ? (U("Unable to get backtick code for overlay default keybind", e, n, { rawBacktickShape: r }), null)
          : (U("Default overlay keybind is unsupported", e, n, { rawBacktickCode: i }),
            [...n, [I.zY.KEYBOARD_KEY, i, (0, y._$)()]]);
}
let V = () => {
        let e = x();
        "shift" === e && (U("Default overlay keybind is only shift", e, null), (e = "shift+`"));
        let t = G(e);
        if (null == t) return M([], !1);
        if (k(t)) return M(t, !0);
        let n = (0, y.Z0)("shift"),
            r = (0, b.Q_)("`");
        return (
            0 === t.length
                ? U("Default overlay keybind combo is empty", e, t)
                : null == n
                  ? U("Unable to get shift code", e, t, { shiftCode: n })
                  : null == r && U("Unable to get backtick code", e, t),
            M(t, !1)
        );
    },
    F = {},
    B = {},
    H = 0,
    Y = !0,
    W = {},
    K = !1,
    z = !1,
    q = [A.hCu.PUSH_TO_TALK, A.hCu.TOGGLE_OVERLAY_INPUT_LOCK, A.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET],
    X = [];
function Z(e) {
    switch (e) {
        case D.id:
            return D;
        case V().id:
            return V();
        default:
            return B[e];
    }
}
function Q(e, t) {
    return (
        !(e.shortcut.length >= t.shortcut.length) &&
        e.shortcut.every((e) => t.shortcut.some((t) => t[0] === e[0] && t[1] === e[1]))
    );
}
function $(e, t, n) {
    m.default.track(A.HAw.KEYBOARD_SHORTCUT_USED, {
        shortcut_name: n.action,
        shortcut_combo: (0, y.dI)(n.shortcut),
        is_native_keyboard_event: !0,
    }),
        t.onTrigger(e, n);
}
function J(e, t) {
    var n;
    let r = Z(e);
    if (null == r) return;
    let i = null == (n = W[r.action]) ? void 0 : n.keyEvents;
    if (null == i) return;
    let a = W[r.action];
    if (i.keydown && i.keyup) {
        null != a && $(t, W[r.action], r);
        return;
    }
    X.push(e),
        setTimeout(() => {
            for (let t of X) {
                if (t === e) continue;
                let n = Z(t);
                if (null != n && Q(r, n)) {
                    X.includes(e) && X.splice(X.indexOf(e), 1);
                    return;
                }
            }
            try {
                null != a && $(t, a, r);
            } finally {
                setTimeout(() => {
                    X.includes(e) && X.splice(X.indexOf(e), 1);
                }, j);
            }
        }, j);
}
function ee() {
    let e = V();
    null == l().find(B, (t) => e.action === t.action && t.enabled && t.shortcut.length > 0) &&
        Y &&
        !z &&
        (eo(e), (z = !0));
}
function et() {
    let e = V();
    z && (es(e.id), (z = !1));
}
function en() {
    let { showKeybindIndicators: e } = _.A.getCurrentConfig({ location: "KeybindsStore" });
    null == l().find(B, (e) => D.action === e.action && e.enabled && e.shortcut.length > 0) &&
        !__OVERLAY__ &&
        !K &&
        Y &&
        e &&
        (eo(D), (K = !0));
}
function er() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    (K || e) && (es(D.id), (K = !1));
}
function ei(e) {
    let { showKeybindIndicators: t } = e;
    t ? en() : er(!0);
}
function ea(e, t, n, r) {
    if (g.isPlatformEmbedded)
        try {
            E.Ay.inputEventRegister(e, t, n, r);
        } catch (n) {
            throw (
                (P.error(
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
        es(e.toString());
        let i = (0, p.I)(document);
        r.keyup && i.bindGlobal((0, y.dI)(t), () => n(!1), "keyup"),
            r.keydown && i.bindGlobal((0, y.dI)(t), () => n(!0), "keydown"),
            (F[e] = i);
    }
}
function es(e) {
    if (g.isPlatformEmbedded) E.Ay.inputEventUnregister(parseInt(e, 10));
    else {
        let t = F[e];
        if (null != t) {
            let n = B[e];
            if (null != n) {
                let e = W[n.action];
                (null == e ? void 0 : e.isPressed) === !0 && T.nextTick(() => $(!1, e, n));
            }
            t.reset(), (F[e] = null);
        }
    }
}
function eo(e) {
    if (!Y || __OVERLAY__) return;
    let { shortcut: t, action: n, enabled: r } = e;
    if (0 === t.length || null == t || n === A.hCu.UNASSIGNED || !r) return;
    if (null == W[n])
        return void P.error(
            "[kb store] KeybindStore: Looking for callback action ".concat(
                n,
                " but it doesn't exist in this version. Skipping",
            ),
        );
    let i = e.id,
        a = parseInt(i, 10);
    if (isNaN(a))
        return void P.error("[kb store] KeybindStore: Keybind id is not a number. Skipping registration.", {
            keybind: e,
        });
    let s = W[n].keyEvents;
    e.action === A.hCu.TOGGLE_MUTE && er(),
        e.action === A.hCu.TOGGLE_OVERLAY_INPUT_LOCK && et(),
        ea(
            a,
            t,
            (e) => J(i, e),
            N(
                {
                    focused: !0,
                    blurred: !0,
                    keydown: !1,
                    keyup: !1,
                },
                s,
            ),
        ),
        d.A.validateKeybind((0, y.dI)(t));
}
function el(e) {
    let t = N(
        {
            id: H.toString(),
            enabled: !0,
            action: A.hCu.UNASSIGNED,
            shortcut: [],
            managed: !1,
            params: {},
        },
        e,
    );
    return (B = w(N({}, B), { [t.id]: t })), (H += 1), t;
}
function ec(e) {
    es(e.id),
        (B = N({}, B)),
        delete B[e.id],
        e.action === A.hCu.TOGGLE_MUTE && en(),
        e.action === A.hCu.TOGGLE_OVERLAY_INPUT_LOCK && ee();
}
function eu(e) {
    let { keybind: t } = e;
    eo(el(t));
}
function ed(e) {
    let { id: t } = e,
        n = B[t];
    __OVERLAY__ ||
        m.default.track(A.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
            keybind_action: n.action,
            keybind_is_bound: !1,
            keybind_has_shortcut: !1,
        }),
        null != n && ec(n);
}
function ef(e) {
    let { keybind: t } = e;
    (B = w(N({}, B), { [t.id]: t })),
        __OVERLAY__ ||
            (m.default.track(A.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
                keybind_action: t.action,
                keybind_is_bound: !0,
                keybind_has_shortcut: t.shortcut.length > 0,
            }),
            t.action === A.hCu.TOGGLE_OVERLAY_INPUT_LOCK
                ? m.default.track(A.HAw.OVERLAY_SETTINGS_UPDATED, {
                      hotkey: t.action === A.hCu.TOGGLE_OVERLAY_INPUT_LOCK ? (0, y.dI)(t.shortcut) : null,
                  })
                : t.action === A.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET &&
                  m.default.track(A.HAw.OVERLAY_SETTINGS_UPDATED, {
                      text_activation_hotkey:
                          t.action === A.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET ? (0, y.dI)(t.shortcut) : null,
                  })),
        eo(t);
}
function ep(e) {
    let { enable: t } = e;
    (Y = t),
        t
            ? (d.A.enable(), l().forEach(B, eo), en(), ee())
            : (d.A.disable(), l().forEach(B, (e) => es(e.id)), er(), et());
}
function e_(e) {
    let { keybinds: t } = e;
    (W = t),
        (F = {}),
        (H = 0),
        Object.values(B).filter((e) => q.includes(e.action) && e.managed).length !== q.length && eE(),
        l().forEach(B, (e) => {
            H = Math.max(parseInt(e.id, 10), H) + 1;
            try {
                eo(e);
            } catch (t) {
                P.error("Failed to register keybind", e, t);
            }
        }),
        (Y = !0),
        null == r && (r = _.A.subscribe({ location: "KeybindsStore" }, ei));
}
function eh(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        null == l().find(B, (t) => t.action === e && (!n || t.managed === n)) &&
        (eo(
            el({
                action: e,
                enabled: !0,
                shortcut: (0, y.OH)(t),
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
        l().each(B, (n) => {
            n.action === e && !0 === n.managed && (ec(n), (t = !0));
        }),
        t
    );
}
let eg = [
    function () {
        let e = h.A.getShortcuts();
        return (
            l().each(B, (t) => {
                t.action === A.hCu.PUSH_TO_TALK &&
                    !0 === t.managed &&
                    (null == t.context || null == e[t.context]) &&
                    ec(t);
            }),
            l().reduce(
                h.A.getShortcuts(),
                (e, t, n) => {
                    let r = l().find(B, (e) => e.action === A.hCu.PUSH_TO_TALK && !0 === e.managed && e.context === n);
                    if (null == r)
                        eo(
                            el({
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
                        ef({
                            keybind: w(N({}, r), {
                                shortcut: "string" == typeof t ? (0, y.OH)(t) : t,
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
        return !!O.default.getAnyGlobalEnabledOverlay() && eh(A.hCu.TOGGLE_OVERLAY_INPUT_LOCK, x());
    },
    function () {
        return !!O.default.getAnyGlobalEnabledOverlay() && eh(A.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`");
    },
    function () {
        let e = em(A.hCu.SOUNDBOARD_HOLD);
        return eh(A.hCu.SOUNDBOARD_HOLD, S.XF, !1) || e;
    },
    function () {
        return eh(A.hCu.SAVE_CLIP, v.Ot);
    },
    function () {
        return eh(A.hCu.SAVE_SCREENSHOT, v.sz);
    },
];
function eE() {
    return en(), ee(), eg.reduce((e, t) => t() || e, !1);
}
function eb() {
    return (
        (async () => {
            await (0, b.AD)(), eE() && eO.emitChange();
        })(),
        !1
    );
}
d.A.setGetKeybindList(() => {
    let e = [];
    for (let t in B) B.hasOwnProperty(t) && e.push((0, y.dI)(B[t].shortcut));
    let { showKeybindIndicators: t } = _.A.getCurrentConfig({ location: "KeybindsStore" });
    return t && e.push((0, y.dI)(D.shortcut)), e;
});
class ey extends (i = c.Ay.DeviceSettingsStore) {
    initialize(e) {
        for (let t in (__OVERLAY__ || this.waitFor(h.A, O.default), (B = null != e ? e : {})))
            delete B[t].latched, delete B[t].pressedTime;
    }
    getUserAgnosticState() {
        return B;
    }
    hasKeybind(e, t, n) {
        for (let r in B)
            for (let i of B[r].shortcut) if (i[0] === e && i[1] === t && (void 0 === n || n === i[2])) return !0;
        return !1;
    }
    hasExactKeybind(e) {
        for (let t in B) {
            let n = B[t];
            if (l().isEqual(n.shortcut, e)) return !0;
        }
        return !1;
    }
    getKeybindForAction(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            { showKeybindIndicators: r } = _.A.getCurrentConfig({ location: "KeybindsStore" }),
            i = l().find(B, (r) => r.action === e && (!t || r.managed) && (!n || (r.shortcut.length > 0 && r.enabled)));
        return null != i ? i : r && e === A.hCu.TOGGLE_MUTE ? D : null;
    }
    getOverlayKeybind() {
        let e = this.getKeybindForAction(A.hCu.TOGGLE_OVERLAY_INPUT_LOCK, !0);
        return null != e ? e : V();
    }
    getOverlayChatKeybind() {
        return this.getKeybindForAction(A.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, !0);
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
                                  (n.shortcut = (0, y.OH)(n.shortcut)))
                                : (n.shortcut = n.shortcut.map((e) => (e.length < 3 ? [...e, (0, y._$)()] : e)))),
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
                    if ((0, g.isLinux)() && t.action === A.hCu.SOUNDBOARD_HOLD) {
                        let n = t.shortcut.map((e) => e[1]),
                            r = (0, y.OH)("`").map((e) => e[1]);
                        if (s()(n, r)) return e;
                    }
                    return w(N({}, e), { [n]: t });
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
                        i = w(N({}, i), {
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
                (e, t, n) => (t.action === A.hCu.TOGGLE_GO_LIVE_STREAMING && t.managed ? e : w(N({}, e), { [n]: t })),
                {},
            ),
    ]);
let eO = new ey(u.h, {
        CONNECTION_OPEN: eE,
        LOGIN_SUCCESS: eb,
        AUDIO_SET_MODE: eE,
        OVERLAY_SET_ENABLED: eE,
        RPC_APP_CONNECTED: eE,
        RPC_APP_DISCONNECTED: eE,
        KEYBINDS_ADD_KEYBIND: eu,
        KEYBINDS_DELETE_KEYBIND: ed,
        KEYBINDS_SET_KEYBIND: ef,
        KEYBINDS_ENABLE_ALL_KEYBINDS: ep,
        KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: e_,
    }),
    eA = eO;
