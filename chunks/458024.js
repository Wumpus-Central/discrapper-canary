"use strict";
n.d(t, { Ay: () => r });
let i = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-02-mobile-visual-refresh",
    defaultConfig: { enabled: !1, chatInputFloating: !1, chatInputLegacySendButton: !1 },
    variations: {
        0: { enabled: !1, chatInputFloating: !1, chatInputLegacySendButton: !1 },
        1: { enabled: !0, chatInputFloating: !1, chatInputLegacySendButton: !1 },
        2: { enabled: !0, chatInputFloating: !0, chatInputLegacySendButton: !1 },
        3: { enabled: !0, chatInputFloating: !0, chatInputLegacySendButton: !1 },
        4: { enabled: !0, chatInputFloating: !0, chatInputLegacySendButton: !0 },
    },
});
function r(e) {
    return i.useConfig({ location: e }).enabled;
}
