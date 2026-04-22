"use strict";
n.d(t, { _: () => i });
var r = n(136722);
function i(e) {
    return null == e.guilds ? e : { ...e, guilds: e.guilds.map((e) => ({ ...e, permissions: r.iu(e.permissions) })) };
}
