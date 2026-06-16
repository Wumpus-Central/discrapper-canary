"use strict";
n.d(t, { O9: () => E, iq: () => A, Nu: () => g, oG: () => m });
var i = n(228366),
    r = n(495544),
    s = n(3137),
    a = n(559908),
    o = n(735438),
    l = n.n(o),
    u = n(174459),
    c = n(31408),
    d = n(652215);
function _(e) {
    switch (e) {
        case c.uD.CHAT_INPUT:
            return "chat_input";
        case c.uD.MENTION:
            return "mention";
        case c.uD.VOICE_USER:
            return "voice_user";
    }
}
function h(e) {
    switch (e) {
        case c.k.CHAT_INPUT:
            return "chat_input";
        case c.k.MEMBER_USER:
            return "member_user";
        case c.k.REACTION:
            return "reaction";
        case c.k.CALL_TILE:
            return "call_tile";
    }
}
function f(e, t) {
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
let p = l().throttle((e) => {
    let {
        enabled: t,
        combosEnabled: n,
        combosRequiredCount: i,
        screenshakeEnabled: r,
        shakeIntensity: s,
        screenshakeEnabledLocations: a,
        confettiEnabled: o,
        confettiSize: l,
        confettiCount: c,
        confettiEnabledLocations: p,
    } = e;
    u.default.track(d.HAw.POGGERMODE_SETTINGS_UPDATED, {
        enabled: t,
        combos_enabled: n,
        combos_required_count: i,
        screenshake_enabled: r,
        shake_intensity: s,
        screenshake_enabled_locations: f(a, _),
        confetti_enabled: o,
        confetti_size: l,
        confetti_count: c,
        confetti_enabled_locations: f(p, h),
    });
}, 5e3);
function E(e) {
    i.h.dispatch({ type: "POGGERMODE_SETTINGS_UPDATE", settings: e }), p({ ...s.A.getState(), ...e });
}
function m(e) {
    i.h.dispatch({ type: "POGGERMODE_UPDATE_COMBO", ...e });
}
function g(e) {
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
