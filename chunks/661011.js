"use strict";
n.d(t, { i: () => i });
let r = (0, n(945810).mj)({
    name: "2025-09-image-attachment-mezzanine-v2",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1 },
        1: { enabled: !0, maxFileSizeBytes: 524288 },
        2: { enabled: !0, maxFileSizeBytes: 262144 },
    },
});
function i(e) {
    let { location: t } = e;
    return r.getConfig({ location: t });
}
