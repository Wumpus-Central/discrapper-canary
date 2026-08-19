"use strict";
n.d(t, { X: () => a });
var i = n(544105),
    r = n(652215);
function a(e) {
    switch (e) {
        case r.fg2.XBOX:
            return i.f$.XBOX;
        case r.fg2.PLAYSTATION:
        case r.fg2.PLAYSTATION_STAGING:
            return i.f$.PLAYSTATION;
        default:
            return null;
    }
}
