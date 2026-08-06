"use strict";
n.d(t, { X: () => d, l: () => o });
var i = n(17928),
    r = n(658040),
    a = n(710195),
    s = n(403362),
    l = n(427262);
function o() {
    return (0, l.Gn)() || "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL || (0, s.m6)();
}
function d(e) {
    return (0, i.bG)(
        [a.A],
        function () {
            return !!e && r.Ay.getConfig({ location: "past_due_checkout_gate" }).enabled;
        },
        [e],
    );
}
