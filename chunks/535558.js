n.d(t, { Hm: () => l, Ii: () => d, Y5: () => s, _i: () => c, kv: () => o });
var i,
    r,
    a = n(431065);
let s = "discordEmbeddedAppShim";
function l(e) {
    return null != e && "object" == typeof e && null != a.K.Object.getOwnPropertyDescriptor(e, s);
}
function o(e) {
    let t = a.K.Object.getOwnPropertyDescriptor(e, "nonce")?.value;
    return "string" == typeof t ? t : null;
}
var d = (((i = {})[(i.STATE_UPDATED = 0)] = "STATE_UPDATED"), (i[(i.KEYBINDS_UPDATED = 1)] = "KEYBINDS_UPDATED"), i),
    c =
        (((r = {})[(r.STATE_UPDATED = 0)] = "STATE_UPDATED"),
        (r[(r.DISCONNECTED = 1)] = "DISCONNECTED"),
        (r[(r.CONNECTION_ACCEPTED = 2)] = "CONNECTION_ACCEPTED"),
        (r[(r.KEYBIND_CAPTURED = 3)] = "KEYBIND_CAPTURED"),
        r);
