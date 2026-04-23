n.d(t, { A: () => k });
var i = n(73153),
    r = n(827343),
    a = n(684013),
    l = n(956793),
    s = n(401843),
    o = n(55619),
    d = n(87203),
    u = n(272355),
    c = n(793574),
    A = n(734066),
    h = n(572164),
    _ = n(399925),
    E = n(963169),
    p = n(652896),
    m = n(349963),
    g = n(140175),
    I = n(528772),
    C = n(123973),
    f = n(944775),
    T = n(616356),
    S = n(430452),
    N = n(383501),
    O = n(351906),
    L = n(532624),
    y = n(242286),
    v = n(256415),
    b = n(954571),
    D = n(427603),
    R = n(652215),
    P = n(731854);
let w = new Map();
function M(e, t, n, i) {
    if (!N.A.isConnected()) return;
    let r = i.context ?? P.x.DEFAULT,
        a = w.get(r);
    null == a && ((a = { held: new Set(), priorityHeld: new Set() }), w.set(r, a)),
        n || (e ? a.held.add(i.id) : a.held.delete(i.id)),
        t && (e ? a.priorityHeld.add(i.id) : a.priorityHeld.delete(i.id));
    let l = a.held.size > 0,
        s = a.priorityHeld.size > 0;
    (0, g.N)(l, s);
}
let U = {
    [R.hCu.TOGGLE_PRIORITY_SPEAKER]: { onTrigger() {}, keyEvents: {} },
    [R.hCu.UNASSIGNED]: { onTrigger() {}, keyEvents: {} },
    [R.hCu.PUSH_TO_TALK]: {
        onTrigger(e, t) {
            S.Ay.getMode(t.context) === R.TBI.PUSH_TO_TALK && ((U[R.hCu.PUSH_TO_TALK].isPressed = e), M(e, !1, !1, t));
        },
        keyEvents: { keyup: !0, keydown: !0 },
        isPressed: !1,
    },
    [R.hCu.PUSH_TO_TALK_PRIORITY]: {
        onTrigger(e, t) {
            S.Ay.getMode() === R.TBI.PUSH_TO_TALK && ((U[R.hCu.PUSH_TO_TALK_PRIORITY].isPressed = e), M(e, !0, !1, t));
        },
        keyEvents: { keyup: !0, keydown: !0 },
        isPressed: !1,
    },
    [R.hCu.VAD_PRIORITY]: {
        onTrigger(e, t) {
            S.Ay.getMode() === R.TBI.VOICE_ACTIVITY && ((U[R.hCu.VAD_PRIORITY].isPressed = e), M(e, !0, !0, t));
        },
        keyEvents: { keyup: !0, keydown: !0 },
        isPressed: !1,
    },
    [R.hCu.PUSH_TO_MUTE]: {
        onTrigger(e) {
            S.Ay.getMode() === R.TBI.VOICE_ACTIVITY &&
                ((U[R.hCu.PUSH_TO_MUTE].isPressed = e), r.A.setTemporarySelfMute(e));
        },
        keyEvents: { keyup: !0, keydown: !0 },
        isPressed: !1,
    },
    [R.hCu.TOGGLE_MUTE]: {
        onTrigger: () => r.A.toggleSelfMute({ usedKeybind: !0, location: "Custom Keybind" }),
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [R.hCu.TOGGLE_DEAFEN]: {
        onTrigger: () => r.A.toggleSelfDeaf({ usedKeybind: !0, location: "Custom Keybind" }),
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [R.hCu.TOGGLE_CAMERA]: { onTrigger: () => (0, d.s)(), keyEvents: { keyup: !0, keydown: !1 } },
    [R.hCu.TOGGLE_VOICE_MODE]: {
        onTrigger() {
            let e = S.Ay.getMode() === R.TBI.PUSH_TO_TALK ? R.TBI.VOICE_ACTIVITY : R.TBI.PUSH_TO_TALK;
            r.A.setMode(e);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [R.hCu.TOGGLE_OVERLAY]: { onTrigger() {}, keyEvents: { keyup: !0, keydown: !1 } },
    [R.hCu.TOGGLE_OVERLAY_INPUT_LOCK]: {
        onTrigger(e, t) {
            if (!(0, L.DV)(t.shortcut)) return;
            let n = (0, D.A)();
            null != n && a.A.setInputLocked(!v.default.isLocked(n), n);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [R.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
        onTrigger() {
            let e = y.default.getFocusedPID(),
                t = null != e;
            null != e &&
                t &&
                v.default.isPinned(R.uss.TEXT) &&
                v.default.isLocked(e) &&
                y.default.isReady(e) &&
                a.A.activateRegion(R.ajI.TEXT_WIDGET);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [R.hCu.TOGGLE_GO_LIVE_STREAMING]: {
        onTrigger() {
            let e = T.A.getCurrentUserActiveStream();
            if (null != e) return (0, s.vN)((0, p._z)(e));
            (0, m.A)(!0, [c.A.GO_LIVE_KEYBIND]);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [R.hCu.TOGGLE_STREAMER_MODE]: {
        onTrigger() {
            o.A.setEnabled(!O.A.enabled);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [R.hCu.NAVIGATE_BACK]: {
        onTrigger: () => (0, E.OE)("global_keybind"),
        keyEvents: { keyup: !0, keydown: !1, focused: !0, blurred: !1 },
    },
    [R.hCu.NAVIGATE_FORWARD]: {
        onTrigger: () => (0, E.Qb)("global_keybind"),
        keyEvents: { keyup: !0, keydown: !1, focused: !0, blurred: !1 },
    },
    [R.hCu.SOUNDBOARD]: {
        onTrigger: () => {
            let e = (0, D.A)();
            if (null != e)
                if (I.A.enabled) (0, f.Lk)(e);
                else {
                    if (!(0, C.lI)()) return;
                    (0, f.hK)(!0, e);
                }
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [R.hCu.SOUNDBOARD_HOLD]: {
        onTrigger: (e) => {
            let t = (0, D.A)();
            if (null != t) {
                if (e) {
                    if (!(0, C.lI)()) return;
                    (0, f.hK)(!1, t);
                } else (0, f.Lk)(t);
                return;
            }
        },
        keyEvents: { keyup: !0, keydown: !0 },
    },
    [R.hCu.SAVE_CLIP]: {
        onTrigger: () => {
            (0, h.TD)() && (b.default.track(R.HAw.CLIP_SAVE_KEYBIND_PRESSED), (0, _.l0)());
        },
        keyEvents: { keyup: !1, keydown: !0 },
    },
    [R.hCu.SAVE_SCREENSHOT]: {
        onTrigger: () => {
            !(0, h.TD)() || ((0, A.cx)() && (b.default.track(R.HAw.CLIP_SAVE_KEYBIND_PRESSED), (0, _.yT)()));
        },
        keyEvents: { keyup: !1, keydown: !0 },
    },
    [R.hCu.SWITCH_TO_VOICE_CHANNEL]: {
        onTrigger(e, t) {
            let {
                params: { channelId: n },
            } = t;
            null != n && l.default.selectVoiceChannel(n);
        },
        keyEvents: { keyup: !0, keydown: !1, blurred: !0, focused: !0 },
    },
    [R.hCu.DISCONNECT_FROM_VOICE_CHANNEL]: {
        onTrigger() {
            l.default.selectVoiceChannel(null);
        },
        keyEvents: { keyup: !0, keydown: !1, blurred: !0, focused: !0 },
    },
};
function x() {
    w.clear(), (0, g.N)(!1, !1);
}
class G extends u.A {
    _initialize() {
        i.h.wait(() => i.h.dispatch({ type: "KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS", keybinds: U })),
            i.h.subscribe("AUDIO_SET_MODE", x),
            i.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
    }
    _terminate() {
        i.h.unsubscribe("AUDIO_SET_MODE", x), i.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
    }
    handleVoiceChannelSelect(e) {
        let { currentVoiceChannelId: t, channelId: n } = e;
        t !== n && x();
    }
}
let k = new G();
