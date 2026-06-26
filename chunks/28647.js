a.d(s, { z: () => e });
var o = a(192308),
    t = a(228366),
    i = a(946974);
let e = {
    binds: ["mod+/", "mod+shift+/"],
    comboKeysBindGlobal: !0,
    action: () => (
        (0, o.hasModalOpen)(i.P)
            ? t.h.dispatch({ type: "HIDE_KEYBOARD_SHORTCUTS" })
            : t.h.dispatch({ type: "SHOW_KEYBOARD_SHORTCUTS" }),
        !1
    ),
};
