"use strict";
n.d(t, { A: () => l });
var r = n(780964),
    i = n(840065),
    a = n(857266),
    s = n(652215);
function o(e) {
    switch (e) {
        case a.J.MY_GAMES:
            return [r.X.REGISTERED_GAMES_PANEL, s.nc_.REGISTERED_GAMES];
        case a.J.OVERLAY:
            return [r.X.OVERLAY_PANEL, s.nc_.OVERLAY];
        case a.J.ACTIVITY_PRIVACY:
            return [r.X.ACTIVITY_PRIVACY_PANEL, s.nc_.ACTIVITY_PRIVACY];
    }
}
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        [n, r] = o(e);
    (0, i.openUserSettings)(n, { section: r, ...t });
}
