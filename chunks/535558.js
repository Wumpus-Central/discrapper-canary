var i,
    r,
    a = n(143138);
let s = "discordEmbeddedAppShim";
var l = (((i = {})[(i.STATE_UPDATED = 0)] = "STATE_UPDATED"), (i[(i.KEYBINDS_UPDATED = 1)] = "KEYBINDS_UPDATED"), i),
    o =
        (((r = {})[(r.STATE_UPDATED = 0)] = "STATE_UPDATED"),
        (r[(r.DISCONNECTED = 1)] = "DISCONNECTED"),
        (r[(r.CONNECTION_ACCEPTED = 2)] = "CONNECTION_ACCEPTED"),
        (r[(r.KEYBIND_CAPTURED = 3)] = "KEYBIND_CAPTURED"),
        r);
n.d(
    t,
    {},
    {
        Hm: function (e) {
            return null != e && "object" == typeof e && null != a.K.Object.getOwnPropertyDescriptor(e, s);
        },
        Ii: l,
        Y5: s,
        _i: o,
        kv: function (e) {
            let t = a.K.Object.getOwnPropertyDescriptor(e, "nonce")?.value;
            return "string" == typeof t ? t : null;
        },
    },
);
