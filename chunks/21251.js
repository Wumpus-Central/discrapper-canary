"use strict";
a.d(t, { i: () => n });
var s = a(333748),
    r = a(652215);
function n(e) {
    let t = null;
    return (
        e === s.i.PLAYSTATION_APPLICATION_ID
            ? (t = r.fg2.PLAYSTATION)
            : e === s.i.PLAYSTATION_STAGING_APPLICATION_ID && (t = r.fg2.PLAYSTATION_STAGING),
        t
    );
}
