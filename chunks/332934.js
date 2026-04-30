"use strict";
n.d(t, { _: () => r });
var i = n(136722);
function r(e) {
    return null == e.guilds ? e : { ...e, guilds: e.guilds.map((e) => ({ ...e, permissions: i.iu(e.permissions) })) };
}
