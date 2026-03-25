"use strict";
n.d(t, { R: () => i });
let r = (0, n(250105).Ay)({
    kind: "user",
    name: "2025-10-vad-before-processing",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function i(e) {
    let { location: t, disable: n = !1 } = e;
    return n ? r.definition.defaultConfig : r.getConfig({ location: t });
}
