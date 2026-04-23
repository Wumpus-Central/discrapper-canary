"use strict";
n.d(t, { O9: () => f, iq: () => A, Nu: () => p, oG: () => g });
var i = n(228366),
    r = n(495544),
    s = n(3137),
    a = n(559908),
    o = n(735438),
    l = n.n(o),
    d = n(954571),
    _ = n(31408),
    u = n(652215);
function c(e) {
    switch (e) {
        case _.uD.CHAT_INPUT:
            return "chat_input";
        case _.uD.MENTION:
            return "mention";
        case _.uD.VOICE_USER:
            return "voice_user";
    }
}
function E(e) {
    switch (e) {
        case _.k.CHAT_INPUT:
            return "chat_input";
        case _.k.MEMBER_USER:
            return "member_user";
        case _.k.REACTION:
            return "reaction";
        case _.k.CALL_TILE:
            return "call_tile";
    }
}
function h(e, t) {
    return Object.entries(e)
        .filter((e) => {
            let [t, n] = e;
            return n;
        })
        .map((e) => {
            let [n] = e;
            return t(Number.parseInt(n));
        });
}
let m = l().throttle((e) => {
    let {
        enabled: t,
        combosEnabled: n,
        combosRequiredCount: i,
        screenshakeEnabled: r,
        shakeIntensity: s,
        screenshakeEnabledLocations: a,
        confettiEnabled: o,
        confettiSize: l,
        confettiCount: _,
        confettiEnabledLocations: m,
    } = e;
    d.default.track(u.HAw.POGGERMODE_SETTINGS_UPDATED, {
        enabled: t,
        combos_enabled: n,
        combos_required_count: i,
        screenshake_enabled: r,
        shake_intensity: s,
        screenshake_enabled_locations: h(a, c),
        confetti_enabled: o,
        confetti_size: l,
        confetti_count: _,
        confetti_enabled_locations: h(m, E),
    });
}, 5e3);
function f(e) {
    i.h.dispatch({ type: "POGGERMODE_SETTINGS_UPDATE", settings: e }), m({ ...s.A.getState(), ...e });
}
function g(e) {
    i.h.dispatch({ type: "POGGERMODE_UPDATE_COMBO", ...e });
}
function p(e) {
    i.h.dispatch({ type: "POGGERMODE_UPDATE_MESSAGE_COMBO", comboMessage: { ...e, displayed: !0 } });
}
function A(e, t) {
    let n = r.default.getId(),
        s = a.Ay.getUserCombo(n, e);
    null != s &&
        i.h.dispatch({
            type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
            comboMessage: { combo: s, channelId: e, messageId: t, displayed: !1 },
        });
    let o = null != s && s?.value > 0 ? (s?.multiplier ?? 0) + 1 : 1;
    i.h.dispatch({ type: "POGGERMODE_UPDATE_COMBO", channelId: e, userId: n, multiplier: o, value: 0 });
}
