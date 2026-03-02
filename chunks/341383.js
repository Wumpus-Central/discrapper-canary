n.d(t, { A: () => G });
var i = n(73153),
    r = n(827343),
    l = n(684013),
    a = n(956793),
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
    T = n(616356),
    N = n(430452),
    S = n(383501),
    x = n(351906),
    v = n(532624),
    y = n(242286),
    b = n(256415),
    O = n(954571),
    L = n(427603),
    R = n(652215),
    P = n(731854);
let j = new Map();
function D(e, t, n, i) {
    if (!S.A.isConnected()) return;
    let r = i.context ?? P.x.DEFAULT,
        l = j.get(r);
    null == l && ((l = { held: new Set(), priorityHeld: new Set() }), j.set(r, l)),
        n || (e ? l.held.add(i.id) : l.held.delete(i.id)),
        t && (e ? l.priorityHeld.add(i.id) : l.priorityHeld.delete(i.id));
    let a = l.held.size > 0,
        s = l.priorityHeld.size > 0;
    (0, E.N)(a, s);
}
let M = {
    [R.hCu.TOGGLE_PRIORITY_SPEAKER]: { onTrigger() {}, keyEvents: {} },
    [R.hCu.UNASSIGNED]: { onTrigger() {}, keyEvents: {} },
    [R.hCu.PUSH_TO_TALK]: {
        onTrigger(e, t) {
            N.Ay.getMode(t.context) === R.TBI.PUSH_TO_TALK && ((M[R.hCu.PUSH_TO_TALK].isPressed = e), D(e, !1, !1, t));
        },
        keyEvents: { keyup: !0, keydown: !0 },
        isPressed: !1,
    },
    [R.hCu.PUSH_TO_TALK_PRIORITY]: {
        onTrigger(e, t) {
            N.Ay.getMode() === R.TBI.PUSH_TO_TALK && ((M[R.hCu.PUSH_TO_TALK_PRIORITY].isPressed = e), D(e, !0, !1, t));
        },
        keyEvents: { keyup: !0, keydown: !0 },
        isPressed: !1,
    },
    [R.hCu.VAD_PRIORITY]: {
        onTrigger(e, t) {
            N.Ay.getMode() === R.TBI.VOICE_ACTIVITY && ((M[R.hCu.VAD_PRIORITY].isPressed = e), D(e, !0, !0, t));
        },
        keyEvents: { keyup: !0, keydown: !0 },
        isPressed: !1,
    },
    [R.hCu.PUSH_TO_MUTE]: {
        onTrigger(e) {
            N.Ay.getMode() === R.TBI.VOICE_ACTIVITY &&
                ((M[R.hCu.PUSH_TO_MUTE].isPressed = e), r.A.setTemporarySelfMute(e));
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
            let e = N.Ay.getMode() === R.TBI.PUSH_TO_TALK ? R.TBI.VOICE_ACTIVITY : R.TBI.PUSH_TO_TALK;
            r.A.setMode(e);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [R.hCu.TOGGLE_OVERLAY]: { onTrigger() {}, keyEvents: { keyup: !0, keydown: !1 } },
    [R.hCu.TOGGLE_OVERLAY_INPUT_LOCK]: {
        onTrigger(e, t) {
            if (!(0, v.DV)(t.shortcut)) return;
            let n = (0, L.A)();
            null != n && l.A.setInputLocked(!b.default.isLocked(n), n);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [R.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
        onTrigger() {
            let e = y.default.getFocusedPID(),
                t = null != e;
            null != e &&
                t &&
                b.default.isPinned(R.uss.TEXT) &&
                b.default.isLocked(e) &&
                y.default.isReady(e) &&
                l.A.activateRegion(R.ajI.TEXT_WIDGET);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [R.hCu.TOGGLE_GO_LIVE_STREAMING]: {
        onTrigger() {
            let e = T.A.getCurrentUserActiveStream();
            if (null != e) return (0, s.vN)((0, p._z)(e));
            (0, g.A)(!0, [u.A.GO_LIVE_KEYBIND]);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [R.hCu.TOGGLE_STREAMER_MODE]: {
        onTrigger() {
            o.A.setEnabled(!x.A.enabled);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [R.hCu.NAVIGATE_BACK]: {
        onTrigger: () => (0, m.OE)("global_keybind"),
        keyEvents: { keyup: !0, keydown: !1, focused: !0, blurred: !1 },
    },
    [R.hCu.NAVIGATE_FORWARD]: {
        onTrigger: () => (0, m.Qb)("global_keybind"),
        keyEvents: { keyup: !0, keydown: !1, focused: !0, blurred: !1 },
    },
    [R.hCu.SOUNDBOARD]: {
        onTrigger: () => {
            let e = (0, L.A)();
            if (null != e)
                if (I.A.enabled) (0, C.Lk)(e);
                else {
                    if (!(0, f.lI)()) return;
                    (0, C.hK)(!0, e);
                }
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [R.hCu.SOUNDBOARD_HOLD]: {
        onTrigger: (e) => {
            let t = (0, L.A)();
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
    [R.hCu.SAVE_CLIP]: {
        onTrigger: () => {
            (0, h.TD)() && (O.default.track(R.HAw.CLIP_SAVE_KEYBIND_PRESSED), (0, _.l0)());
        },
        keyEvents: { keyup: !1, keydown: !0 },
    },
    [R.hCu.SAVE_SCREENSHOT]: {
        onTrigger: () => {
            !(0, h.TD)() || ((0, A.cx)() && (O.default.track(R.HAw.CLIP_SAVE_KEYBIND_PRESSED), (0, _.yT)()));
        },
        keyEvents: { keyup: !1, keydown: !0 },
    },
    [R.hCu.SWITCH_TO_VOICE_CHANNEL]: {
        onTrigger(e, t) {
            let {
                params: { channelId: n },
            } = t;
            null != n && a.default.selectVoiceChannel(n);
        },
        keyEvents: { keyup: !0, keydown: !1, blurred: !0, focused: !0 },
    },
    [R.hCu.DISCONNECT_FROM_VOICE_CHANNEL]: {
        onTrigger() {
            a.default.selectVoiceChannel(null);
        },
        keyEvents: { keyup: !0, keydown: !1, blurred: !0, focused: !0 },
    },
};
function w() {
    j.clear(), (0, E.N)(!1, !1);
}
class U extends c.A {
    _initialize() {
        i.h.wait(() => i.h.dispatch({ type: "KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS", keybinds: M })),
            i.h.subscribe("AUDIO_SET_MODE", w),
            i.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
    }
    _terminate() {
        i.h.unsubscribe("AUDIO_SET_MODE", w), i.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
    }
    handleVoiceChannelSelect(e) {
        let { currentVoiceChannelId: t, channelId: n } = e;
        t !== n && w();
    }
}
let G = new U();
