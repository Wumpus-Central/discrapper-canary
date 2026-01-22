n.d(t, {
    A: () => H,
}),
    n(896048);
var r = n(73153),
    i = n(827343),
    l = n(684013),
    a = n(956793),
    s = n(401843),
    o = n(55619),
    c = n(87203),
    u = n(272355),
    d = n(793574),
    p = n(734066),
    f = n(572164),
    h = n(399925),
    A = n(963169),
    g = n(652896),
    m = n(349963),
    b = n(140175),
    _ = n(528772),
    E = n(123973),
    O = n(944775),
    y = n(555444),
    I = n(616356),
    v = n(430452),
    S = n(383501),
    C = n(351906),
    N = n(532624),
    T = n(242286),
    j = n(256415),
    x = n(954571),
    P = n(427603),
    w = n(541185),
    L = n(652215);
n(509381);
var R = n(731854);
let D = !0,
    M = new Map();

function k(e, t, n, r) {
    var i;
    let l = performance.now();
    if (!S.A.isConnected()) return;
    let a = null != (i = r.context) ? i : R.x.DEFAULT,
        s = M.get(a);
    null == s &&
        ((s = {
            held: new Set(),
            latched: new Set(),
            vadPriorityLatched: new Set(),
            priorityHeldOrLatched: new Set(),
        }),
        M.set(a, s)),
        n || (e ? s.held.add(r.id) : s.held.delete(r.id));
    let o = !1;
    if (e) r.pressedTime = l;
    else if (
        null != r.pressedTime &&
        (0, y.H)({
            location: "doPTT",
            autoTrackExposure: !1,
        }).enableLatching
    ) {
        let { pttLatchingEnabled: e = !1 } = v.A.getModeOptions(a),
            t = n ? s.vadPriorityLatched : s.latched;
        (o = t.has(r.id)) || !0 !== e || !(l < r.pressedTime + 150) || !D
            ? (t.delete(r.id), (o = !1))
            : (t.add(r.id), (o = !0));
    }
    t && (e || o ? s.priorityHeldOrLatched.add(r.id) : s.priorityHeldOrLatched.delete(r.id));
    let c = s.held.size > 0,
        u = s.latched.size > 0,
        d = c || u,
        p = s.priorityHeldOrLatched.size > 0;
    (0, b.N)(c, p, d);
}
let U = {
    [L.hCu.TOGGLE_PRIORITY_SPEAKER]: {
        onTrigger() {},
        keyEvents: {},
    },
    [L.hCu.UNASSIGNED]: {
        onTrigger() {},
        keyEvents: {},
    },
    [L.hCu.PUSH_TO_TALK]: {
        onTrigger(e, t) {
            v.A.getMode(t.context) === L.TBI.PUSH_TO_TALK && ((U[L.hCu.PUSH_TO_TALK].isPressed = e), k(e, !1, !1, t));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0,
        },
        isPressed: !1,
    },
    [L.hCu.PUSH_TO_TALK_PRIORITY]: {
        onTrigger(e, t) {
            (v.A.getMode() === L.TBI.PUSH_TO_TALK ||
                w.A.getCurrentConfig({
                    location: "keybinds",
                }).onPTTKeybind) &&
                ((U[L.hCu.PUSH_TO_TALK_PRIORITY].isPressed = e), k(e, !0, !1, t));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0,
        },
        isPressed: !1,
    },
    [L.hCu.VAD_PRIORITY]: {
        onTrigger(e, t) {
            v.A.getMode() === L.TBI.VOICE_ACTIVITY &&
                w.A.getCurrentConfig({
                    location: "keybinds",
                }).separateKeybind &&
                ((U[L.hCu.VAD_PRIORITY].isPressed = e), k(e, !0, !0, t));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0,
        },
        isPressed: !1,
    },
    [L.hCu.PUSH_TO_MUTE]: {
        onTrigger(e) {
            v.A.getMode() === L.TBI.VOICE_ACTIVITY &&
                ((U[L.hCu.PUSH_TO_MUTE].isPressed = e), i.A.setTemporarySelfMute(e));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0,
        },
        isPressed: !1,
    },
    [L.hCu.TOGGLE_MUTE]: {
        onTrigger: () =>
            i.A.toggleSelfMute({
                usedKeybind: !0,
                location: "Custom Keybind",
            }),
        keyEvents: {
            keyup: !0,
            keydown: !1,
        },
    },
    [L.hCu.TOGGLE_DEAFEN]: {
        onTrigger: () =>
            i.A.toggleSelfDeaf({
                usedKeybind: !0,
                location: "Custom Keybind",
            }),
        keyEvents: {
            keyup: !0,
            keydown: !1,
        },
    },
    [L.hCu.TOGGLE_CAMERA]: {
        onTrigger: () => (0, c.s)(),
        keyEvents: {
            keyup: !0,
            keydown: !1,
        },
    },
    [L.hCu.TOGGLE_VOICE_MODE]: {
        onTrigger() {
            let e = v.A.getMode() === L.TBI.PUSH_TO_TALK ? L.TBI.VOICE_ACTIVITY : L.TBI.PUSH_TO_TALK;
            i.A.setMode(e);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1,
        },
    },
    [L.hCu.TOGGLE_OVERLAY]: {
        onTrigger() {},
        keyEvents: {
            keyup: !0,
            keydown: !1,
        },
    },
    [L.hCu.TOGGLE_OVERLAY_INPUT_LOCK]: {
        onTrigger(e, t) {
            if (!(0, N.DV)(t.shortcut)) return;
            let n = (0, P.A)();
            null != n && l.A.setInputLocked(!j.default.isLocked(n), n);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1,
        },
    },
    [L.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
        onTrigger() {
            let e = T.default.getFocusedPID(),
                t = null != e;
            null != e &&
                t &&
                j.default.isPinned(L.uss.TEXT) &&
                j.default.isLocked(e) &&
                T.default.isReady(e) &&
                l.A.activateRegion(L.ajI.TEXT_WIDGET);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1,
        },
    },
    [L.hCu.TOGGLE_GO_LIVE_STREAMING]: {
        onTrigger() {
            let e = I.A.getCurrentUserActiveStream();
            if (null != e) return (0, s.vN)((0, g._z)(e));
            (0, m.A)(!0, [d.A.GO_LIVE_KEYBIND]);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1,
        },
    },
    [L.hCu.TOGGLE_STREAMER_MODE]: {
        onTrigger() {
            o.A.setEnabled(!C.A.enabled);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1,
        },
    },
    [L.hCu.NAVIGATE_BACK]: {
        onTrigger: () => (0, A.OE)("global_keybind"),
        keyEvents: {
            keyup: !0,
            keydown: !1,
            focused: !0,
            blurred: !1,
        },
    },
    [L.hCu.NAVIGATE_FORWARD]: {
        onTrigger: () => (0, A.Qb)("global_keybind"),
        keyEvents: {
            keyup: !0,
            keydown: !1,
            focused: !0,
            blurred: !1,
        },
    },
    [L.hCu.SOUNDBOARD]: {
        onTrigger: () => {
            let e = (0, P.A)();
            if (null != e)
                if (_.A.enabled) (0, O.Lk)(e);
                else {
                    if (!(0, E.l)()) return;
                    (0, O.hK)(!0, e);
                }
        },
        keyEvents: {
            keyup: !0,
            keydown: !1,
        },
    },
    [L.hCu.SOUNDBOARD_HOLD]: {
        onTrigger: (e) => {
            let t = (0, P.A)();
            if (null != t) {
                if (e) {
                    if (!(0, E.l)()) return;
                    (0, O.hK)(!1, t);
                } else (0, O.Lk)(t);
                return;
            }
        },
        keyEvents: {
            keyup: !0,
            keydown: !0,
        },
    },
    [L.hCu.SAVE_CLIP]: {
        onTrigger: () => {
            (0, f.TD)() && (x.default.track(L.HAw.CLIP_SAVE_KEYBIND_PRESSED), (0, h.l0)());
        },
        keyEvents: {
            keyup: !1,
            keydown: !0,
        },
    },
    [L.hCu.SAVE_SCREENSHOT]: {
        onTrigger: () => {
            !(0, f.TD)() || ((0, p.cx)() && (x.default.track(L.HAw.CLIP_SAVE_KEYBIND_PRESSED), (0, h.yT)()));
        },
        keyEvents: {
            keyup: !1,
            keydown: !0,
        },
    },
    [L.hCu.SWITCH_TO_VOICE_CHANNEL]: {
        onTrigger(e, t) {
            let {
                params: { channelId: n },
            } = t;
            null != n && a.default.selectVoiceChannel(n);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1,
            blurred: !0,
            focused: !0,
        },
    },
    [L.hCu.DISCONNECT_FROM_VOICE_CHANNEL]: {
        onTrigger() {
            a.default.selectVoiceChannel(null);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1,
            blurred: !0,
            focused: !0,
        },
    },
};

function G() {
    M.clear(), (0, b.N)(!1, !1, !1);
}

function V(e) {
    let { hasLatchPermission: t } = e;
    if (t === D) return !1;
    (D = t) || G();
}
class B extends u.A {
    _initialize() {
        r.h.wait(() =>
            r.h.dispatch({
                type: "KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS",
                keybinds: U,
            }),
        ),
            r.h.subscribe("AUDIO_SET_MODE", G),
            r.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            r.h.subscribe("SET_VAD_PERMISSION", V);
    }
    _terminate() {
        r.h.unsubscribe("AUDIO_SET_MODE", G),
            r.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            r.h.unsubscribe("SET_VAD_PERMISSION", V);
    }
    handleVoiceChannelSelect(e) {
        let { currentVoiceChannelId: t, channelId: n } = e;
        t !== n && G();
    }
}
let H = new B();
