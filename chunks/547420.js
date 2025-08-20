n.d(t, {
    MY: () => c,
    RC: () => l,
    UF: () => s,
    ZP: () => u,
});
var r = n(857595),
    i = n(607070),
    a = n(981631);
function o(e) {
    return a.yqN.ZOOM_SCALES[
        Math.max(0, Math.min(a.yqN.ZOOM_SCALES.indexOf(i.Z.zoom) + e, a.yqN.ZOOM_SCALES.length - 1))
    ];
}
let s = {
        binds: ["mod+plus"],
        comboKeysBindGlobal: !0,
        action: () => ((0, r.cq)(o(1)), !1),
    },
    l = {
        binds: ["mod+minus"],
        comboKeysBindGlobal: !0,
        action: () => ((0, r.cq)(o(-1)), !1),
    },
    c = {
        binds: ["mod+0"],
        comboKeysBindGlobal: !0,
        action: () => ((0, r.cq)(a.yqN.ZOOM_DEFAULT), !1),
    },
    u = {
        ZOOM_IN: s,
        ZOOM_OUT: l,
        ZOOM_RESET: c,
    };
