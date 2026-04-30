"use strict";
n.d(t, { z: () => a });
var i = n(192308),
    r = n(228366),
    s = n(946974);
let a = {
    binds: ["mod+/", "mod+shift+/"],
    comboKeysBindGlobal: !0,
    action: () => (
        (0, i.hasModalOpen)(s.P)
            ? r.h.dispatch({ type: "HIDE_KEYBOARD_SHORTCUTS" })
            : r.h.dispatch({ type: "SHOW_KEYBOARD_SHORTCUTS" }),
        !1
    ),
};
