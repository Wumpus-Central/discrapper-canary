n.d(t, { Z: () => f }), n(47120);
var i = n(392711),
    r = n.n(i),
    a = n(626135),
    s = n(524484),
    o = n(981631);
let l = 5000;
function u(e) {
    switch (e) {
        case s.oZ.CHAT_INPUT:
            return 'chat_input';
        case s.oZ.MENTION:
            return 'mention';
        case s.oZ.VOICE_USER:
            return 'voice_user';
    }
}
function c(e) {
    switch (e) {
        case s.Hn.CHAT_INPUT:
            return 'chat_input';
        case s.Hn.MEMBER_USER:
            return 'member_user';
        case s.Hn.REACTION:
            return 'reaction';
        case s.Hn.CALL_TILE:
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
let f = r().throttle((e) => {
    let { enabled: t, combosEnabled: n, combosRequiredCount: i, screenshakeEnabled: r, shakeIntensity: s, screenshakeEnabledLocations: l, confettiEnabled: f, confettiSize: _, confettiCount: p, confettiEnabledLocations: h } = e;
    a.default.track(o.rMx.POGGERMODE_SETTINGS_UPDATED, {
        enabled: t,
        combos_enabled: n,
        combos_required_count: i,
        screenshake_enabled: r,
        shake_intensity: s,
        screenshake_enabled_locations: d(l, u),
        confetti_enabled: f,
        confetti_size: _,
        confetti_count: p,
        confetti_enabled_locations: d(h, c)
    });
}, l);
