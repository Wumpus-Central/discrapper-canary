"use strict";
n.d(t, { Kl: () => o, LF: () => l, sF: () => a });
var r = n(73153),
    i = n(954571),
    s = n(652215);
function a(e) {
    i.default.track(s.HAw.HOTSPOT_HIDDEN, { hotspot_location: e }),
        r.h.wait(() => {
            r.h.dispatch({ type: "HOTSPOT_HIDE", location: e });
        });
}
function o(e, t) {
    r.h.dispatch({ type: "HOTSPOT_OVERRIDE_SET", location: e, enabled: t });
}
function l(e) {
    r.h.dispatch({ type: "HOTSPOT_OVERRIDE_CLEAR", location: e });
}
