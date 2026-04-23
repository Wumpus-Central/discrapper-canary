"use strict";
s.d(t, { i: () => n });
var a = s(333748),
    r = s(652215);
function n(e) {
    let t = null;
    return (
        e === a.i.PLAYSTATION_APPLICATION_ID
            ? (t = r.fg2.PLAYSTATION)
            : e === a.i.PLAYSTATION_STAGING_APPLICATION_ID && (t = r.fg2.PLAYSTATION_STAGING),
        t
    );
}
