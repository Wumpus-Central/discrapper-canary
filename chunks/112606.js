n.d(t, { Z: () => f }), n(388685);
var r = n(392711),
    i = n.n(r),
    a = n(626135),
    o = n(524484),
    s = n(981631);
let l = 5000;
function c(e) {
    switch (e) {
        case o.oZ.CHAT_INPUT:
            return 'chat_input';
        case o.oZ.MENTION:
            return 'mention';
        case o.oZ.VOICE_USER:
            return 'voice_user';
    }
}
function u(e) {
    switch (e) {
        case o.Hn.CHAT_INPUT:
            return 'chat_input';
        case o.Hn.MEMBER_USER:
            return 'member_user';
        case o.Hn.REACTION:
            return 'reaction';
        case o.Hn.CALL_TILE:
            return 'call_tile';
    }
}
function d(e, t) {
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
let f = i().throttle((e) => {
    let { enabled: t, combosEnabled: n, combosRequiredCount: r, screenshakeEnabled: i, shakeIntensity: o, screenshakeEnabledLocations: l, confettiEnabled: f, confettiSize: _, confettiCount: p, confettiEnabledLocations: h } = e;
    a.default.track(s.rMx.POGGERMODE_SETTINGS_UPDATED, {
        enabled: t,
        combos_enabled: n,
        combos_required_count: r,
        screenshake_enabled: i,
        shake_intensity: o,
        screenshake_enabled_locations: d(l, c),
        confetti_enabled: f,
        confetti_size: _,
        confetti_count: p,
        confetti_enabled_locations: d(h, u)
    });
}, l);
