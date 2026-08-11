"use strict";
n.d(t, { Ay: () => a, U1: () => r, f5: () => i });
let i = "@silent",
    r = RegExp(`^${i}(\\s|$)`);
function a(e) {
    return null == e ? [!1, ""] : null == e.match(r) ? [!1, e] : [!0, e.substring(i.length).trim()];
}
