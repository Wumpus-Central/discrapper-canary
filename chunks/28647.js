a.d(s, { z: () => e });
var i = a(192308),
    o = a(73153),
    t = a(946974);
let e = {
    binds: ["mod+/", "mod+shift+/"],
    comboKeysBindGlobal: !0,
    action: () => (
        (0, i.hasModalOpen)(t.P)
            ? o.h.dispatch({ type: "HIDE_KEYBOARD_SHORTCUTS" })
            : o.h.dispatch({ type: "SHOW_KEYBOARD_SHORTCUTS" }),
        !1
    ),
};
