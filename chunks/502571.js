"use strict";
n.r(t), n.d(t, { default: () => a, getAttachmentImageLadderConfig: () => r });
let i = (0, n(945810).mj)({
    name: "2026-07-attachment-image-ladder",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function r(e) {
    let { location: t } = e;
    return i.getConfig({ location: t });
}
let a = i;
