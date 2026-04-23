"use strict";
n.d(t, { Ay: () => i });
let r = (0, n(250105).Ay)({
    kind: "user",
    name: "2026-02-mobile-visual-refresh",
    defaultConfig: { enabled: !1, chatInputFloating: !1 },
    variations: {
        0: { enabled: !1, chatInputFloating: !1 },
        1: { enabled: !0, chatInputFloating: !1 },
        2: { enabled: !0, chatInputFloating: !0 },
    },
});
function i(e) {
    return r.useConfig({ location: e }).enabled;
}
