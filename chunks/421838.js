"use strict";
n.d(t, { Kl: () => o, LF: () => l, sF: () => a });
var i = n(228366),
    r = n(954571),
    s = n(652215);
function a(e) {
    r.default.track(s.HAw.HOTSPOT_HIDDEN, { hotspot_location: e }),
        i.h.wait(() => {
            i.h.dispatch({ type: "HOTSPOT_HIDE", location: e });
        });
}
function o(e, t) {
    i.h.dispatch({ type: "HOTSPOT_OVERRIDE_SET", location: e, enabled: t });
}
function l(e) {
    i.h.dispatch({ type: "HOTSPOT_OVERRIDE_CLEAR", location: e });
}
