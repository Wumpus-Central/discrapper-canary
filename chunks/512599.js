"use strict";
n.d(t, { O9: () => I, iq: () => T, Nu: () => p, oG: () => f });
var i = n(228366),
    r = n(280450),
    a = n(3137),
    s = n(559908),
    l = n(435558),
    o = n.n(l),
    d = n(174459),
    c = n(31408),
    u = n(652215);
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
function E(e) {
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
function A(e, t) {
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
let h = o().throttle((e) => {
    let {
        enabled: t,
        combosEnabled: n,
        combosRequiredCount: i,
        screenshakeEnabled: r,
        shakeIntensity: a,
        screenshakeEnabledLocations: s,
        confettiEnabled: l,
        confettiSize: o,
        confettiCount: c,
        confettiEnabledLocations: h,
    } = e;
    d.default.track(u.HAw.POGGERMODE_SETTINGS_UPDATED, {
        enabled: t,
        combos_enabled: n,
        combos_required_count: i,
        screenshake_enabled: r,
        shake_intensity: a,
        screenshake_enabled_locations: A(s, _),
        confetti_enabled: l,
        confetti_size: o,
        confetti_count: c,
        confetti_enabled_locations: A(h, E),
    });
}, 5e3);
function I(e) {
    i.h.dispatch({ type: "POGGERMODE_SETTINGS_UPDATE", settings: e }), h({ ...a.A.getState(), ...e });
}
function f(e) {
    i.h.dispatch({ type: "POGGERMODE_UPDATE_COMBO", ...e });
}
function p(e) {
    i.h.dispatch({ type: "POGGERMODE_UPDATE_MESSAGE_COMBO", comboMessage: { ...e, displayed: !0 } });
}
function T(e, t) {
    let n = r.default.getId(),
        a = s.Ay.getUserCombo(n, e);
    null != a &&
        i.h.dispatch({
            type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
            comboMessage: { combo: a, channelId: e, messageId: t, displayed: !1 },
        });
    let l = null != a && a?.value > 0 ? (a?.multiplier ?? 0) + 1 : 1;
    i.h.dispatch({ type: "POGGERMODE_UPDATE_COMBO", channelId: e, userId: n, multiplier: l, value: 0 });
}
