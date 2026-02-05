"use strict";
n.d(t, { A: () => a, U: () => i });
let r = "@silent",
    i = RegExp(`^${r}(\\s|$)`);
function a(e) {
    return null == e ? [!1, ""] : null == e.match(i) ? [!1, e] : [!0, e.substring(r.length).trim()];
}
