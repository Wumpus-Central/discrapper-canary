n.d(t, { A: () => H });
var i = n(73153),
    r = n(827343),
    a = n(684013),
    l = n(956793),
    s = n(401843),
    o = n(55619),
    d = n(87203),
    c = n(272355),
    u = n(793574),
    A = n(734066),
    h = n(572164),
    _ = n(399925),
    m = n(963169),
    p = n(652896),
    g = n(349963),
    E = n(140175),
    I = n(528772),
    f = n(123973),
    C = n(944775),
    N = n(555444),
    T = n(616356),
    S = n(430452),
    x = n(383501),
    v = n(351906),
    b = n(532624),
    y = n(242286),
    L = n(256415),
    O = n(954571),
    R = n(427603),
    P = n(541185),
    j = n(652215);
n(509381);
var D = n(731854);
let w = !0,
    M = new Map();
function U(e, t, n, i) {
    let r = performance.now();
    if (!x.A.isConnected()) return;
    let a = i.context ?? D.x.DEFAULT,
        l = M.get(a);
    null == l &&
        ((l = { held: new Set(), latched: new Set(), vadPriorityLatched: new Set(), priorityHeldOrLatched: new Set() }),
        M.set(a, l)),
        n || (e ? l.held.add(i.id) : l.held.delete(i.id));
    let s = !1;
    if (e) i.pressedTime = r;
    else if (null != i.pressedTime && (0, N.H)({ location: "doPTT", autoTrackExposure: !1 }).enableLatching) {
        let { pttLatchingEnabled: e = !1 } = S.A.getModeOptions(a),
            t = n ? l.vadPriorityLatched : l.latched;
        (s = t.has(i.id)) || !0 !== e || !(r < i.pressedTime + 150) || !w
            ? (t.delete(i.id), (s = !1))
            : (t.add(i.id), (s = !0));
    }
    t && (e || s ? l.priorityHeldOrLatched.add(i.id) : l.priorityHeldOrLatched.delete(i.id));
    let o = l.held.size > 0,
        d = l.latched.size > 0,
        c = o || d,
        u = l.priorityHeldOrLatched.size > 0;
    (0, E.N)(o, u, c);
}
let G = {
    [j.hCu.TOGGLE_PRIORITY_SPEAKER]: { onTrigger() {}, keyEvents: {} },
    [j.hCu.UNASSIGNED]: { onTrigger() {}, keyEvents: {} },
    [j.hCu.PUSH_TO_TALK]: {
        onTrigger(e, t) {
            S.A.getMode(t.context) === j.TBI.PUSH_TO_TALK && ((G[j.hCu.PUSH_TO_TALK].isPressed = e), U(e, !1, !1, t));
        },
        keyEvents: { keyup: !0, keydown: !0 },
        isPressed: !1,
    },
    [j.hCu.PUSH_TO_TALK_PRIORITY]: {
        onTrigger(e, t) {
            (S.A.getMode() === j.TBI.PUSH_TO_TALK || P.A.getCurrentConfig({ location: "keybinds" }).onPTTKeybind) &&
                ((G[j.hCu.PUSH_TO_TALK_PRIORITY].isPressed = e), U(e, !0, !1, t));
        },
        keyEvents: { keyup: !0, keydown: !0 },
        isPressed: !1,
    },
    [j.hCu.VAD_PRIORITY]: {
        onTrigger(e, t) {
            S.A.getMode() === j.TBI.VOICE_ACTIVITY &&
                P.A.getCurrentConfig({ location: "keybinds" }).separateKeybind &&
                ((G[j.hCu.VAD_PRIORITY].isPressed = e), U(e, !0, !0, t));
        },
        keyEvents: { keyup: !0, keydown: !0 },
        isPressed: !1,
    },
    [j.hCu.PUSH_TO_MUTE]: {
        onTrigger(e) {
            S.A.getMode() === j.TBI.VOICE_ACTIVITY &&
                ((G[j.hCu.PUSH_TO_MUTE].isPressed = e), r.A.setTemporarySelfMute(e));
        },
        keyEvents: { keyup: !0, keydown: !0 },
        isPressed: !1,
    },
    [j.hCu.TOGGLE_MUTE]: {
        onTrigger: () => r.A.toggleSelfMute({ usedKeybind: !0, location: "Custom Keybind" }),
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [j.hCu.TOGGLE_DEAFEN]: {
        onTrigger: () => r.A.toggleSelfDeaf({ usedKeybind: !0, location: "Custom Keybind" }),
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [j.hCu.TOGGLE_CAMERA]: { onTrigger: () => (0, d.s)(), keyEvents: { keyup: !0, keydown: !1 } },
    [j.hCu.TOGGLE_VOICE_MODE]: {
        onTrigger() {
            let e = S.A.getMode() === j.TBI.PUSH_TO_TALK ? j.TBI.VOICE_ACTIVITY : j.TBI.PUSH_TO_TALK;
            r.A.setMode(e);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [j.hCu.TOGGLE_OVERLAY]: { onTrigger() {}, keyEvents: { keyup: !0, keydown: !1 } },
    [j.hCu.TOGGLE_OVERLAY_INPUT_LOCK]: {
        onTrigger(e, t) {
            if (!(0, b.DV)(t.shortcut)) return;
            let n = (0, R.A)();
            null != n && a.A.setInputLocked(!L.default.isLocked(n), n);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [j.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
        onTrigger() {
            let e = y.default.getFocusedPID(),
                t = null != e;
            null != e &&
                t &&
                L.default.isPinned(j.uss.TEXT) &&
                L.default.isLocked(e) &&
                y.default.isReady(e) &&
                a.A.activateRegion(j.ajI.TEXT_WIDGET);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [j.hCu.TOGGLE_GO_LIVE_STREAMING]: {
        onTrigger() {
            let e = T.A.getCurrentUserActiveStream();
            if (null != e) return (0, s.vN)((0, p._z)(e));
            (0, g.A)(!0, [u.A.GO_LIVE_KEYBIND]);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [j.hCu.TOGGLE_STREAMER_MODE]: {
        onTrigger() {
            o.A.setEnabled(!v.A.enabled);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [j.hCu.NAVIGATE_BACK]: {
        onTrigger: () => (0, m.OE)("global_keybind"),
        keyEvents: { keyup: !0, keydown: !1, focused: !0, blurred: !1 },
    },
    [j.hCu.NAVIGATE_FORWARD]: {
        onTrigger: () => (0, m.Qb)("global_keybind"),
        keyEvents: { keyup: !0, keydown: !1, focused: !0, blurred: !1 },
    },
    [j.hCu.SOUNDBOARD]: {
        onTrigger: () => {
            let e = (0, R.A)();
            if (null != e)
                if (I.A.enabled) (0, C.Lk)(e);
                else {
                    if (!(0, f.lI)()) return;
                    (0, C.hK)(!0, e);
                }
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [j.hCu.SOUNDBOARD_HOLD]: {
        onTrigger: (e) => {
            let t = (0, R.A)();
            if (null != t) {
                if (e) {
                    if (!(0, f.lI)()) return;
                    (0, C.hK)(!1, t);
                } else (0, C.Lk)(t);
                return;
            }
        },
        keyEvents: { keyup: !0, keydown: !0 },
    },
    [j.hCu.SAVE_CLIP]: {
        onTrigger: () => {
            (0, h.TD)() && (O.default.track(j.HAw.CLIP_SAVE_KEYBIND_PRESSED), (0, _.l0)());
        },
        keyEvents: { keyup: !1, keydown: !0 },
    },
    [j.hCu.SAVE_SCREENSHOT]: {
        onTrigger: () => {
            !(0, h.TD)() || ((0, A.cx)() && (O.default.track(j.HAw.CLIP_SAVE_KEYBIND_PRESSED), (0, _.yT)()));
        },
        keyEvents: { keyup: !1, keydown: !0 },
    },
    [j.hCu.SWITCH_TO_VOICE_CHANNEL]: {
        onTrigger(e, t) {
            let {
                params: { channelId: n },
            } = t;
            null != n && l.default.selectVoiceChannel(n);
        },
        keyEvents: { keyup: !0, keydown: !1, blurred: !0, focused: !0 },
    },
    [j.hCu.DISCONNECT_FROM_VOICE_CHANNEL]: {
        onTrigger() {
            l.default.selectVoiceChannel(null);
        },
        keyEvents: { keyup: !0, keydown: !1, blurred: !0, focused: !0 },
    },
};
function k() {
    M.clear(), (0, E.N)(!1, !1, !1);
}
function V(e) {
    let { hasLatchPermission: t } = e;
    if (t === w) return !1;
    (w = t) || k();
}
class B extends c.A {
    _initialize() {
        i.h.wait(() => i.h.dispatch({ type: "KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS", keybinds: G })),
            i.h.subscribe("AUDIO_SET_MODE", k),
            i.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            i.h.subscribe("SET_VAD_PERMISSION", V);
    }
    _terminate() {
        i.h.unsubscribe("AUDIO_SET_MODE", k),
            i.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            i.h.unsubscribe("SET_VAD_PERMISSION", V);
    }
    handleVoiceChannelSelect(e) {
        let { currentVoiceChannelId: t, channelId: n } = e;
        t !== n && k();
    }
}
let H = new B();
