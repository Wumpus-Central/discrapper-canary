"use strict";
n.d(t, { _: () => a });
var r = n(136722);
function i(e) {
    return e.map((e) => ({ ...e, permissions: r.iu(e.permissions) }));
}
function a(e) {
    return null == e.guilds ? e : { ...e, guilds: i(e.guilds) };
}
