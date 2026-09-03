n.d(t, { Kl: () => l, LF: () => o, sF: () => s });
var i = n(228366),
    r = n(174459),
    a = n(652215);
function s(e) {
    r.default.track(a.HAw.HOTSPOT_HIDDEN, { hotspot_location: e }),
        i.h.wait(() => {
            i.h.dispatch({ type: "HOTSPOT_HIDE", location: e });
        });
}
function l(e, t) {
    i.h.dispatch({ type: "HOTSPOT_OVERRIDE_SET", location: e, enabled: t });
}
function o(e) {
    i.h.dispatch({ type: "HOTSPOT_OVERRIDE_CLEAR", location: e });
}
