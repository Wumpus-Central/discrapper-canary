n.r(t), n.d(t, { default: () => l, getAttachmentImageLadderConfig: () => s });
var i = n(945810);
n(459830);
let r = { enabled: !1, maxUpscale: 1.1, minSnapDownDpr: 2 },
    a = (0, i.mj)({
        name: "2026-07-attachment-image-ladder",
        kind: "user",
        defaultConfig: r,
        variations: { 0: r, 1: { ...r, enabled: !0 } },
    });
function s(e) {
    let { location: t } = e;
    return a.getConfig({ location: t });
}
let l = a;
